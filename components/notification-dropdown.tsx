"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import {
  Bell, Check, CheckCheck, Trash2, Clock, UserPlus, FileText,
  DollarSign, MessageSquare, AlertCircle, Briefcase, Target,
  CalendarCheck, X, Loader2, BellOff, Wifi, WifiOff
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  getNotifications,
  getUnreadNotificationCount,
  markNotificationRead,
  markAllNotificationsRead,
  deleteNotification,
  clearAllNotifications,
} from "@/app/actions/notifications"
import { cn } from "@/lib/utils"

// ==================== Type Icons & Colors ====================

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  lead_assigned: Target,
  task_reminder: Clock,
  task_assigned: CalendarCheck,
  invoice_paid: DollarSign,
  invoice_overdue: AlertCircle,
  client_message: MessageSquare,
  project_update: Briefcase,
  payment_received: DollarSign,
  payment_overdue: AlertCircle,
  new_client: UserPlus,
  weekly_report: FileText,
  system: Bell,
}

const typeColors: Record<string, string> = {
  lead_assigned: "text-blue-500 bg-blue-500/10",
  task_reminder: "text-amber-500 bg-amber-500/10",
  task_assigned: "text-purple-500 bg-purple-500/10",
  invoice_paid: "text-green-500 bg-green-500/10",
  invoice_overdue: "text-red-500 bg-red-500/10",
  client_message: "text-cyan-500 bg-cyan-500/10",
  project_update: "text-indigo-500 bg-indigo-500/10",
  payment_received: "text-emerald-500 bg-emerald-500/10",
  payment_overdue: "text-orange-500 bg-orange-500/10",
  new_client: "text-teal-500 bg-teal-500/10",
  weekly_report: "text-violet-500 bg-violet-500/10",
  system: "text-gray-500 bg-gray-500/10",
}

// ==================== Helpers ====================

function getRelativeTime(date: Date | string): string {
  const now = new Date()
  const diff = now.getTime() - new Date(date).getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return "Just now"
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  return new Date(date).toLocaleDateString()
}

// ==================== Types ====================

interface Notification {
  id: string
  type: string
  title: string
  message: string
  isRead: boolean
  link: string | null
  createdAt: Date | string
}

// ==================== Component ====================

export function NotificationDropdown() {
  const router = useRouter()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [sseConnected, setSSEConnected] = useState(false)
  const eventSourceRef = useRef<EventSource | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const reconnectAttemptRef = useRef(0)

  const loadNotifications = useCallback(async () => {
    try {
      const [notifs, count] = await Promise.all([
        getNotifications(30),
        getUnreadNotificationCount(),
      ])
      setNotifications(notifs as Notification[])
      setUnreadCount(count)
    } catch (e) {
      console.error("Failed to load notifications:", e)
    } finally {
      setLoading(false)
    }
  }, [])

  // ==================== SSE Connection ====================

  const connectSSE = useCallback(() => {
    // Close existing connection
    if (eventSourceRef.current) {
      eventSourceRef.current.close()
    }

    try {
      const es = new EventSource("/api/notifications/sse")
      eventSourceRef.current = es

      es.onopen = () => {
        setSSEConnected(true)
        reconnectAttemptRef.current = 0 // Reset reconnect attempts on success
      }

      es.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)

          if (data.type === "count") {
            // Unread count update
            setUnreadCount(data.count)
          } else if (data.type === "notification") {
            // New notification arrived
            setUnreadCount((prev) => prev + 1)
            // Prepend to notification list if dropdown is open
            if (data.notification) {
              setNotifications((prev) => {
                const newNotif: Notification = {
                  id: data.notification.id || `temp-${Date.now()}`,
                  type: data.notification.type,
                  title: data.notification.title,
                  message: data.notification.message,
                  isRead: false,
                  link: data.notification.link || null,
                  createdAt: data.notification.createdAt || new Date().toISOString(),
                }
                // Avoid duplicates
                if (prev.some((n) => n.id === newNotif.id)) return prev
                return [newNotif, ...prev].slice(0, 30)
              })
            }
          }
        } catch {
          // Ignore parse errors for heartbeat comments
        }
      }

      es.onerror = () => {
        setSSEConnected(false)
        es.close()
        eventSourceRef.current = null

        // Exponential backoff reconnect
        const attempt = reconnectAttemptRef.current
        const delay = Math.min(1000 * Math.pow(2, attempt), 30000) // max 30s
        reconnectAttemptRef.current = attempt + 1

        reconnectTimeoutRef.current = setTimeout(() => {
          connectSSE()
        }, delay)
      }
    } catch {
      setSSEConnected(false)
    }
  }, [])

  // ==================== Effects ====================

  // Load on mount + connect SSE
  useEffect(() => {
    loadNotifications()
    connectSSE()

    // Fallback polling every 30s (only polls if SSE is disconnected)
    const interval = setInterval(() => {
      if (!eventSourceRef.current || eventSourceRef.current.readyState !== EventSource.OPEN) {
        getUnreadNotificationCount().then(setUnreadCount)
      }
    }, 30000)

    return () => {
      clearInterval(interval)
      if (eventSourceRef.current) {
        eventSourceRef.current.close()
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current)
      }
    }
  }, [loadNotifications, connectSSE])

  // Reload when popover opens
  useEffect(() => {
    if (isOpen) {
      loadNotifications()
    }
  }, [isOpen, loadNotifications])

  const handleMarkRead = async (id: string) => {
    setActionLoading(id)
    await markNotificationRead(id)
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    )
    setUnreadCount((prev) => Math.max(0, prev - 1))
    setActionLoading(null)
  }

  const handleMarkAllRead = async () => {
    setActionLoading("all")
    await markAllNotificationsRead()
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
    setUnreadCount(0)
    setActionLoading(null)
  }

  const handleDelete = async (id: string) => {
    const notif = notifications.find((n) => n.id === id)
    setNotifications((prev) => prev.filter((n) => n.id !== id))
    if (notif && !notif.isRead) {
      setUnreadCount((prev) => Math.max(0, prev - 1))
    }
    await deleteNotification(id)
  }

  const handleClearAll = async () => {
    setActionLoading("clear")
    await clearAllNotifications()
    setNotifications([])
    setUnreadCount(0)
    setActionLoading(null)
  }

  const handleNotificationClick = async (notif: Notification) => {
    if (!notif.isRead) {
      await handleMarkRead(notif.id)
    }
    if (notif.link) {
      setIsOpen(false)
      router.push(notif.link)
    }
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 sm:top-0.5 sm:right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-primary rounded-full animate-pulse">
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[380px] sm:w-[420px] p-0 border-border shadow-2xl"
        align="end"
        sideOffset={8}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm">Notifications</h3>
            {unreadCount > 0 && (
              <Badge variant="secondary" className="h-5 px-1.5 text-[10px] bg-primary/15 text-primary border-0">
                {unreadCount} new
              </Badge>
            )}
            {/* SSE Connection indicator */}
            {sseConnected ? (
              <Wifi className="w-3 h-3 text-green-500" title="Real-time connected" />
            ) : (
              <WifiOff className="w-3 h-3 text-muted-foreground/40" title="Polling mode" />
            )}
          </div>
          <div className="flex items-center gap-1">
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs gap-1 text-muted-foreground hover:text-primary"
                onClick={handleMarkAllRead}
                disabled={actionLoading === "all"}
              >
                {actionLoading === "all" ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <CheckCheck className="w-3 h-3" />
                )}
                Mark all read
              </Button>
            )}
            {notifications.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs gap-1 text-muted-foreground hover:text-destructive"
                onClick={handleClearAll}
                disabled={actionLoading === "clear"}
              >
                {actionLoading === "clear" ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <Trash2 className="w-3 h-3" />
                )}
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Notification List */}
        <ScrollArea className="max-h-[400px]">
          {loading ? (
            <div className="p-4 space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 animate-pulse">
                  <div className="w-9 h-9 rounded-lg bg-secondary" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-3/4 rounded bg-secondary" />
                    <div className="h-2.5 w-full rounded bg-secondary" />
                    <div className="h-2 w-16 rounded bg-secondary" />
                  </div>
                </div>
              ))}
            </div>
          ) : notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <div className="p-4 rounded-full bg-secondary/50 mb-3">
                <BellOff className="w-8 h-8 text-muted-foreground/50" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">No notifications</p>
              <p className="text-xs text-muted-foreground/70 mt-1">You&apos;re all caught up!</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {notifications.map((notif) => {
                const Icon = typeIcons[notif.type] || Bell
                const colorClass = typeColors[notif.type] || "text-gray-500 bg-gray-500/10"

                return (
                  <div
                    key={notif.id}
                    className={cn(
                      "flex gap-3 px-4 py-3 transition-colors cursor-pointer group",
                      notif.isRead
                        ? "hover:bg-secondary/50"
                        : "bg-primary/[0.03] hover:bg-primary/[0.06]"
                    )}
                    onClick={() => handleNotificationClick(notif)}
                  >
                    {/* Icon */}
                    <div className={cn("flex-shrink-0 p-2 rounded-lg mt-0.5", colorClass)}>
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className={cn(
                          "text-sm leading-tight",
                          !notif.isRead ? "font-semibold" : "font-medium text-muted-foreground"
                        )}>
                          {notif.title}
                        </p>
                        {!notif.isRead && (
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
                        {notif.message}
                      </p>
                      <p className="text-[10px] text-muted-foreground/60 mt-1 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {getRelativeTime(notif.createdAt)}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex-shrink-0 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!notif.isRead && (
                        <button
                          className="p-1 rounded hover:bg-secondary transition-colors"
                          title="Mark as read"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleMarkRead(notif.id)
                          }}
                        >
                          <Check className="w-3 h-3 text-muted-foreground" />
                        </button>
                      )}
                      <button
                        className="p-1 rounded hover:bg-destructive/10 transition-colors"
                        title="Delete"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDelete(notif.id)
                        }}
                      >
                        <X className="w-3 h-3 text-muted-foreground hover:text-destructive" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </ScrollArea>

        {/* Footer */}
        {notifications.length > 0 && (
          <>
            <Separator />
            <div className="p-2 text-center">
              <p className="text-[11px] text-muted-foreground/60">
                Showing {notifications.length} notification{notifications.length !== 1 ? "s" : ""}
                {sseConnected && " • Live"}
              </p>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
