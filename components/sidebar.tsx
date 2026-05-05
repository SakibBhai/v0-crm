"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import {
  ChevronLeft,
  Zap,
  LogOut,
} from "lucide-react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getNavItemsForRole, getRoleLabel, getRoleColor, getRoleBgColor } from "@/lib/role-config"
import type { UserRole } from "@prisma/client"

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { data: session } = useSession()

  const userRole = ((session?.user as any)?.role || "EMPLOYEE") as UserRole
  const userName = session?.user?.name || "User"
  const userInitials = userName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
  const navItems = getNavItemsForRole(userRole)
  const roleLabel = getRoleLabel(userRole)
  const roleColor = getRoleColor(userRole)
  const roleBgColor = getRoleBgColor(userRole)

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col",
        collapsed ? "w-[70px]" : "w-[240px]",
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
          <Zap className="w-5 h-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <span className="font-semibold text-lg text-sidebar-foreground animate-in fade-in slide-in-from-left-2 duration-200">
            AgencyFlow
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110",
                  isActive && "text-sidebar-primary",
                )}
              />
              {!collapsed && <span className="animate-in fade-in slide-in-from-left-2 duration-200">{item.label}</span>}
              {isActive && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-sidebar-primary animate-in zoom-in duration-200" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* User Profile & Actions */}
      <div className="border-t border-sidebar-border p-3 space-y-2">
        <div
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent/50 cursor-pointer transition-colors",
            collapsed && "justify-center px-0",
          )}
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src={(session?.user as any)?.avatar || ""} />
            <AvatarFallback className="bg-primary/20 text-primary text-xs">{userInitials}</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0 animate-in fade-in slide-in-from-left-2 duration-200">
              <p className="text-sm font-medium text-sidebar-foreground truncate">{userName}</p>
              <span className={cn("text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded", roleBgColor, roleColor)}>
                {roleLabel}
              </span>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className={cn(
            "flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors",
            collapsed && "justify-center px-0",
          )}
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full py-2 rounded-lg hover:bg-sidebar-accent/50 text-muted-foreground hover:text-sidebar-foreground transition-colors"
        >
          <ChevronLeft className={cn("w-5 h-5 transition-transform duration-300", collapsed && "rotate-180")} />
        </button>
      </div>
    </aside>
  )
}
