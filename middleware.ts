import NextAuth from "next-auth"
import { authConfig } from "@/lib/auth.config"
import { NextResponse } from "next/server"
import { canAccessRoute } from "@/lib/routes-config"
import type { UserRole } from "@prisma/client"

const { auth } = NextAuth(authConfig)

// Routes that don't require authentication
const publicRoutes = ["/login", "/api/auth"]

// Routes that skip rate limiting (SSE needs long-lived connections)
const rateLimitExcludedRoutes = ["/api/notifications/sse"]

export default auth(async (req) => {
  const { pathname } = req.nextUrl

  // Allow public routes
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    // If logged in and trying to access login, redirect to dashboard
    if (pathname.startsWith("/login") && req.auth?.user) {
      return NextResponse.redirect(new URL("/", req.url))
    }
    return NextResponse.next()
  }

  // Check if user is authenticated
  if (!req.auth?.user) {
    const loginUrl = new URL("/login", req.url)
    loginUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Rate limiting for API routes (skip SSE and excluded routes)
  if (
    pathname.startsWith("/api") &&
    !rateLimitExcludedRoutes.some(route => pathname.startsWith(route))
  ) {
    try {
      // Dynamic import to avoid issues when Redis is not configured
      const { checkRateLimit } = await import("@/lib/rate-limit")
      const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous"
      const { success, remaining } = await checkRateLimit(ip)

      if (!success) {
        return new NextResponse("Too Many Requests", {
          status: 429,
          headers: {
            "Retry-After": "60",
            "X-RateLimit-Remaining": String(remaining),
          },
        })
      }
    } catch {
      // Fail open if rate limiting module is unavailable
    }
  }

  const userRole = req.auth.user.role as UserRole

  // Check route access
  if (!canAccessRoute(userRole, pathname)) {
    // Client role trying to access non-portal routes
    if (userRole === "CLIENT" && !pathname.startsWith("/portal")) {
      return NextResponse.redirect(new URL("/", req.url))
    }
    // Other roles trying to access restricted routes
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // Match all routes except static files and _next
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
}
