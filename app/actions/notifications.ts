"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { cacheGet, cacheDelete, redis } from "@/lib/redis"

// ==================== Get Notifications ====================

export async function getNotifications(limit = 20) {
  try {
    const session = await auth()
    if (!session?.user?.id) return []

    return cacheGet(`notifications:list:${session.user.id}`, async () => {
      const notifications = await prisma.notification.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: "desc" },
        take: limit,
      })
      return JSON.parse(JSON.stringify(notifications))
    }, 30)
  } catch (error) {
    console.error("Get notifications error:", error)
    return []
  }
}

// ==================== Get Unread Count ====================

export async function getUnreadNotificationCount() {
  try {
    const session = await auth()
    if (!session?.user?.id) return 0

    return cacheGet(`notifications:count:${session.user.id}`, async () => {
      const count = await prisma.notification.count({
        where: { userId: session.user.id, isRead: false },
      })
      return count
    }, 15)
  } catch (error) {
    console.error("Get unread count error:", error)
    return 0
  }
}

// ==================== Invalidate User Notification Cache ====================

async function invalidateNotificationCache(userId: string) {
  await Promise.all([
    cacheDelete(`notifications:list:${userId}`),
    cacheDelete(`notifications:count:${userId}`),
  ]).catch(() => {})
}

// ==================== Push to SSE Queue ====================

async function pushToSSEQueue(userId: string, data: Record<string, any>) {
  try {
    await redis.rpush(`sse:queue:${userId}`, JSON.stringify(data))
    // Set TTL on the queue to prevent stale data buildup (5 minutes)
    await redis.expire(`sse:queue:${userId}`, 300)
  } catch (error) {
    // Silently fail — SSE is best-effort
  }
}

// ==================== Mark as Read ====================

export async function markNotificationRead(notificationId: string) {
  try {
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    await prisma.notification.update({
      where: { id: notificationId, userId: session.user.id },
      data: { isRead: true },
    })
    await invalidateNotificationCache(session.user.id)
    return { success: true }
  } catch (error) {
    console.error("Mark read error:", error)
    return { error: "Failed to mark notification as read" }
  }
}

// ==================== Mark All as Read ====================

export async function markAllNotificationsRead() {
  try {
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    await prisma.notification.updateMany({
      where: { userId: session.user.id, isRead: false },
      data: { isRead: true },
    })
    await invalidateNotificationCache(session.user.id)
    return { success: true }
  } catch (error) {
    console.error("Mark all read error:", error)
    return { error: "Failed to mark all as read" }
  }
}

// ==================== Delete Notification ====================

export async function deleteNotification(notificationId: string) {
  try {
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    await prisma.notification.delete({
      where: { id: notificationId, userId: session.user.id },
    })
    await invalidateNotificationCache(session.user.id)
    return { success: true }
  } catch (error) {
    console.error("Delete notification error:", error)
    return { error: "Failed to delete notification" }
  }
}

// ==================== Clear All Notifications ====================

export async function clearAllNotifications() {
  try {
    const session = await auth()
    if (!session?.user?.id) return { error: "Not authenticated" }

    await prisma.notification.deleteMany({
      where: { userId: session.user.id },
    })
    await invalidateNotificationCache(session.user.id)
    return { success: true }
  } catch (error) {
    console.error("Clear all error:", error)
    return { error: "Failed to clear notifications" }
  }
}

// ==================== Create Notification (Internal) ====================

export async function createNotification(data: {
  userId: string
  type: string
  title: string
  message: string
  link?: string
}) {
  try {
    const notification = await prisma.notification.create({
      data: {
        userId: data.userId,
        type: data.type,
        title: data.title,
        message: data.message,
        link: data.link,
      },
    })

    // Invalidate cache + push to SSE queue for real-time delivery
    await invalidateNotificationCache(data.userId)
    await pushToSSEQueue(data.userId, {
      type: "notification",
      notification: JSON.parse(JSON.stringify(notification)),
    })

    return notification
  } catch (error) {
    console.error("Create notification error:", error)
    return null
  }
}

// ==================== Broadcast Notification ====================

export async function createBroadcastNotification(data: {
  type: string
  title: string
  message: string
  link?: string
  excludeUserId?: string
}) {
  try {
    const users = await prisma.user.findMany({
      where: {
        isActive: true,
        ...(data.excludeUserId ? { id: { not: data.excludeUserId } } : {}),
      },
      select: { id: true },
    })

    await prisma.notification.createMany({
      data: users.map((user) => ({
        userId: user.id,
        type: data.type,
        title: data.title,
        message: data.message,
        link: data.link,
      })),
    })

    // Invalidate cache + push to SSE queue for all users
    await Promise.all(
      users.map(async (user) => {
        await invalidateNotificationCache(user.id)
        await pushToSSEQueue(user.id, {
          type: "notification",
          notification: {
            type: data.type,
            title: data.title,
            message: data.message,
            link: data.link,
          },
        })
      })
    ).catch(() => {})

    return { success: true }
  } catch (error) {
    console.error("Broadcast notification error:", error)
    return { error: "Failed to broadcast notification" }
  }
}
