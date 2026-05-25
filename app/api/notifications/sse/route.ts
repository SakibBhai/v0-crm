import { auth } from "@/lib/auth"
import { redis } from "@/lib/redis"
import { getUnreadNotificationCount } from "@/app/actions/notifications"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return new Response("Unauthorized", { status: 401 })
  }

  const userId = session.user.id
  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      // Send initial unread count
      try {
        const count = await getUnreadNotificationCount()
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "count", count })}\n\n`)
        )
      } catch (e) {
        console.error("[SSE] Initial count error:", e)
      }

      // Heartbeat to keep connection alive
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(": heartbeat\n\n"))
        } catch {
          clearInterval(heartbeat)
        }
      }, 30000)

      // Poll Redis for new notifications using a list-based approach
      // Since Upstash REST doesn't support long-lived Pub/Sub subscriptions,
      // we use a polling approach with Redis lists as a message queue.
      const pollInterval = setInterval(async () => {
        try {
          // Check for queued notifications
          const message = await redis.lpop<string>(`sse:queue:${userId}`)
          if (message) {
            controller.enqueue(
              encoder.encode(`data: ${message}\n\n`)
            )
          }
        } catch (e) {
          // Silently handle polling errors
        }
      }, 2000) // Poll every 2 seconds

      // Cleanup on close
      const cleanup = () => {
        clearInterval(heartbeat)
        clearInterval(pollInterval)
      }

      // Handle abort
      controller.enqueue(encoder.encode(": connected\n\n"))

      // Store cleanup reference
      ;(controller as any)._cleanup = cleanup
    },
    cancel() {
      // Controller cancelled — cleanup handled by intervals going stale
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  })
}
