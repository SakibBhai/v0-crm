"use server"

import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import type { UserRole } from "@prisma/client"

// ==================== Types ====================

interface CreateUserInput {
  name: string
  email: string
  password: string
  role: UserRole
  avatar?: string
  employeeId?: string
  clientId?: string
}

interface UpdateUserInput {
  name?: string
  email?: string
  role?: UserRole
  avatar?: string
  isActive?: boolean
  employeeId?: string | null
  clientId?: string | null
}

// ==================== Actions ====================

export async function createUser(data: CreateUserInput) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    })

    if (existingUser) {
      return { error: "A user with this email already exists" }
    }

    const hashedPassword = await bcrypt.hash(data.password, 12)

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role,
        avatar: data.avatar,
        employeeId: data.employeeId,
        clientId: data.clientId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        isActive: true,
        employeeId: true,
        clientId: true,
        createdAt: true,
        lastLogin: true,
      },
    })

    return user
  } catch (error) {
    console.error("Create user error:", error)
    return { error: "Failed to create user" }
  }
}

export async function updateUser(id: string, data: UpdateUserInput) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        isActive: true,
        employeeId: true,
        clientId: true,
        createdAt: true,
        lastLogin: true,
      },
    })

    return user
  } catch (error) {
    console.error("Update user error:", error)
    return { error: "Failed to update user" }
  }
}

export async function changePassword(id: string, oldPassword: string, newPassword: string) {
  try {
    const user = await prisma.user.findUnique({ where: { id } })
    if (!user) return { error: "User not found" }

    const isValid = await bcrypt.compare(oldPassword, user.password)
    if (!isValid) return { error: "Current password is incorrect" }

    const hashedPassword = await bcrypt.hash(newPassword, 12)
    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    })

    return { success: true }
  } catch (error) {
    console.error("Change password error:", error)
    return { error: "Failed to change password" }
  }
}

export async function resetPassword(id: string, newPassword: string) {
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 12)
    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    })

    return { success: true }
  } catch (error) {
    console.error("Reset password error:", error)
    return { error: "Failed to reset password" }
  }
}

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        isActive: true,
        employeeId: true,
        clientId: true,
        createdAt: true,
        lastLogin: true,
      },
      orderBy: { createdAt: "desc" },
    })

    return users
  } catch (error) {
    console.error("Get users error:", error)
    return []
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        isActive: true,
        employeeId: true,
        clientId: true,
        employee: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            jobTitle: true,
            department: true,
          },
        },
        client: {
          select: {
            id: true,
            name: true,
            company: true,
          },
        },
        createdAt: true,
        lastLogin: true,
      },
    })

    return user
  } catch (error) {
    console.error("Get user error:", error)
    return null
  }
}

export async function deleteUser(id: string) {
  try {
    // Delete sessions first
    await prisma.session.deleteMany({ where: { userId: id } })
    await prisma.user.delete({ where: { id } })
    return { success: true }
  } catch (error) {
    console.error("Delete user error:", error)
    return { error: "Failed to delete user" }
  }
}

export async function toggleUserActive(id: string) {
  try {
    const user = await prisma.user.findUnique({ where: { id } })
    if (!user) return { error: "User not found" }

    const updated = await prisma.user.update({
      where: { id },
      data: { isActive: !user.isActive },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
      },
    })

    return updated
  } catch (error) {
    console.error("Toggle user active error:", error)
    return { error: "Failed to toggle user status" }
  }
}
