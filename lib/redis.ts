import { Redis } from "@upstash/redis"

// ==================== Redis Client ====================

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export { redis }

// ==================== Cache Helpers ====================

/**
 * Cache-aside pattern: Returns cached value or calls fetcher, caches result.
 * @param key - The cache key
 * @param fetcher - Async function to get fresh data on cache miss
 * @param ttlSeconds - Time-to-live in seconds
 */
export async function cacheGet<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds: number = 60
): Promise<T> {
  try {
    const cached = await redis.get<T>(key)
    if (cached !== null && cached !== undefined) {
      return cached
    }
  } catch (error) {
    console.error(`[Redis] Cache read error for key "${key}":`, error)
    // Fall through to fetcher on Redis error
  }

  // Cache miss — fetch fresh data
  const data = await fetcher()

  try {
    await redis.set(key, JSON.stringify(data), { ex: ttlSeconds })
  } catch (error) {
    console.error(`[Redis] Cache write error for key "${key}":`, error)
  }

  return data
}

/**
 * Delete a specific cache key.
 */
export async function cacheDelete(key: string): Promise<void> {
  try {
    await redis.del(key)
  } catch (error) {
    console.error(`[Redis] Cache delete error for key "${key}":`, error)
  }
}

/**
 * Invalidate cache keys by glob pattern.
 * Uses SCAN to find matching keys and delete them.
 * Example: cacheInvalidate("dashboard:*") deletes all dashboard caches.
 */
export async function cacheInvalidate(pattern: string): Promise<void> {
  try {
    let cursor = 0
    do {
      const result = await redis.scan(cursor, { match: pattern, count: 100 })
      cursor = result[0]
      const keys = result[1]
      if (keys.length > 0) {
        await redis.del(...keys)
      }
    } while (cursor !== 0)
  } catch (error) {
    console.error(`[Redis] Cache invalidation error for pattern "${pattern}":`, error)
  }
}

/**
 * Publish a message to a Redis channel (for SSE notifications).
 */
export async function publishNotification(
  userId: string,
  data: Record<string, any>
): Promise<void> {
  try {
    await redis.publish(`notifications:${userId}`, JSON.stringify(data))
  } catch (error) {
    console.error(`[Redis] Publish error for user "${userId}":`, error)
  }
}
