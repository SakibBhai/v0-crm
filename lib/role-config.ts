import {
  LayoutDashboard,
  Users,
  UserCheck,
  FolderKanban,
  CheckSquare,
  UsersRound,
  Settings,
  DollarSign,
  BarChart3,
  CalendarDays,
  UserCog,
  Briefcase,
  FileText,
  MessageSquare,
} from "lucide-react"
import type { UserRole } from "@prisma/client"

export interface NavItem {
  href: string
  label: string
  icon: any
}

// ==================== Sidebar Navigation Per Role ====================

const allNavItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/clients", label: "Clients", icon: UserCheck },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/team", label: "Team", icon: UsersRound },
  { href: "/finances", label: "Finances", icon: DollarSign },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/users", label: "User Management", icon: UserCog },
  { href: "/settings", label: "Settings", icon: Settings },
]

const managementNavItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/clients", label: "Clients", icon: UserCheck },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/team", label: "Team", icon: UsersRound },
  { href: "/finances", label: "Finances", icon: DollarSign },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/users", label: "User Management", icon: UserCog },
  { href: "/settings", label: "Settings", icon: Settings },
]

const managerNavItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/clients", label: "Clients", icon: UserCheck },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/team", label: "Team", icon: UsersRound },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
]

const employeeNavItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/tasks", label: "My Tasks", icon: CheckSquare },
  { href: "/team", label: "Team", icon: UsersRound },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
]

const clientNavItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/portal/projects", label: "My Projects", icon: Briefcase },
  { href: "/portal/invoices", label: "Invoices", icon: FileText },
  { href: "/portal/messages", label: "Messages", icon: MessageSquare },
]

// ==================== Role Configuration ====================

import { ROLE_ROUTES, canAccessRoute } from "./routes-config"
export { canAccessRoute }

export interface RoleConfig {
  label: string
  color: string
  bgColor: string
  routes: string[]
  sidebar: NavItem[]
}

export const ROLE_CONFIG: Record<UserRole, RoleConfig> = {
  SUPER_ADMIN: {
    label: "Super Admin",
    color: "text-red-400",
    bgColor: "bg-red-500/20",
    routes: ROLE_ROUTES.SUPER_ADMIN,
    sidebar: allNavItems,
  },
  MANAGEMENT: {
    label: "Management",
    color: "text-amber-400",
    bgColor: "bg-amber-500/20",
    routes: ROLE_ROUTES.MANAGEMENT,
    sidebar: managementNavItems,
  },
  MANAGER: {
    label: "Manager",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    routes: ROLE_ROUTES.MANAGER,
    sidebar: managerNavItems,
  },
  EMPLOYEE: {
    label: "Employee",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    routes: ROLE_ROUTES.EMPLOYEE,
    sidebar: employeeNavItems,
  },
  CLIENT: {
    label: "Client",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    routes: ROLE_ROUTES.CLIENT,
    sidebar: clientNavItems,
  },
}

// ==================== Helpers ====================

export function getNavItemsForRole(role: UserRole): NavItem[] {
  return ROLE_CONFIG[role]?.sidebar || employeeNavItems
}

export function getRoleLabel(role: UserRole): string {
  return ROLE_CONFIG[role]?.label || role
}

export function getRoleColor(role: UserRole): string {
  return ROLE_CONFIG[role]?.color || "text-gray-400"
}

export function getRoleBgColor(role: UserRole): string {
  return ROLE_CONFIG[role]?.bgColor || "bg-gray-500/20"
}
