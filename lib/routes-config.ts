import type { UserRole } from "@prisma/client"

export const ROLE_ROUTES: Record<UserRole, string[]> = {
  SUPER_ADMIN: ["*"], // access everything
  MANAGEMENT: ["/", "/leads", "/clients", "/projects", "/tasks", "/team", "/finances", "/reports", "/calendar", "/users", "/settings"],
  MANAGER: ["/", "/leads", "/clients", "/projects", "/tasks", "/team", "/reports", "/calendar"],
  EMPLOYEE: ["/", "/projects", "/tasks", "/team", "/calendar"],
  CLIENT: ["/", "/portal/projects", "/portal/invoices", "/portal/messages"],
}

export function canAccessRoute(role: UserRole, path: string): boolean {
  const routes = ROLE_ROUTES[role]
  if (!routes) return false
  if (routes.includes("*")) return true
  
  // Check exact match or prefix match
  return routes.some(route => {
    if (route === path) return true
    // Allow sub-routes (e.g., /projects/[id])
    if (path.startsWith(route + "/")) return true
    return false
  })
}
