import type { NextAuthConfig } from "next-auth"
import type { UserRole } from "@prisma/client"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: UserRole
      avatar?: string | null
      employeeId?: string | null
      clientId?: string | null
    }
  }

  interface User {
    id: string
    name: string
    email: string
    role: UserRole
    avatar?: string | null
    employeeId?: string | null
    clientId?: string | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: UserRole
    avatar?: string | null
    employeeId?: string | null
    clientId?: string | null
  }
}

export const authConfig = {
  providers: [], // configured in auth.ts
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string
        token.role = (user as any).role
        token.avatar = (user as any).avatar
        token.employeeId = (user as any).employeeId
        token.clientId = (user as any).clientId
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.role = token.role as UserRole
        session.user.avatar = token.avatar as string | null | undefined
        session.user.employeeId = token.employeeId as string | null | undefined
        session.user.clientId = token.clientId as string | null | undefined
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET || "agencyflow-super-secret-key-change-in-production",
} satisfies NextAuthConfig
