import NextAuth from "next-auth"
import { authConfig } from "@/lib/auth.config"
import { NextResponse } from "next/server"
import { canAccessRoute } from "@/lib/routes-config"
import type { UserRole } from "@prisma/client"

const { auth } = NextAuth(authConfig)

// Routes that don't require authentication
const publicRoutes = ["/login", "/api/auth"]

export default auth((req) => {
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
