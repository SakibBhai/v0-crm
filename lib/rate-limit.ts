import { Ratelimit } from "@upstash/ratelimit"
import { redis } from "@/lib/redis"

/**
 * Create a sliding-window rate limiter.
 * Default: 100 requests per 60-second window.
 */
export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "60 s"),
  analytics: true,
  prefix: "crm:ratelimit",
})

/**
 * Check rate limit for a given identifier (e.g., IP address).
 * Returns { success, limit, remaining, reset }.
 */
export async function checkRateLimit(identifier: string) {
  try {
    const result = await rateLimiter.limit(identifier)
    return result
  } catch (error) {
    console.error("[RateLimit] Error:", error)
    // Fail open — allow the request if Redis is down
    return { success: true, limit: 100, remaining: 100, reset: 0 }
  }
}
