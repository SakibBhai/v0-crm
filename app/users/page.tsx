"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { UserCog, Plus, Search, Shield, Briefcase, Target, Users, User, MoreHorizontal, Check, X, Pencil, Trash2, Key } from "lucide-react"
import { getUsers, createUser, toggleUserActive, resetPassword, deleteUser } from "@/app/actions/auth-actions"
import { getRoleLabel, getRoleColor, getRoleBgColor } from "@/lib/role-config"
import type { UserRole } from "@prisma/client"

const roleIcons: Record<string, any> = {
  SUPER_ADMIN: Shield,
  MANAGEMENT: Briefcase,
  MANAGER: Target,
  EMPLOYEE: Users,
  CLIENT: User,
}

export default function UsersPage() {
  const { data: session } = useSession()
  const [users, setUsers] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "EMPLOYEE" as UserRole })
  const [creating, setCreating] = useState(false)

  useEffect(() => { loadUsers() }, [])

  async function loadUsers() {
    const result = await getUsers()
    if (Array.isArray(result)) setUsers(result)
  }

  async function handleCreateUser() {
    if (!newUser.name || !newUser.email || !newUser.password) return
    setCreating(true)
    const result = await createUser(newUser)
    if (!("error" in result)) {
      setUsers(prev => [result, ...prev])
      setNewUser({ name: "", email: "", password: "", role: "EMPLOYEE" })
      setIsCreateOpen(false)
    }
    setCreating(false)
  }

  async function handleToggleActive(id: string) {
    const result = await toggleUserActive(id)
    if (!("error" in (result as any))) {
      setUsers(prev => prev.map(u => u.id === id ? { ...u, isActive: !(u.isActive) } : u))
    }
  }

  async function handleResetPassword(id: string) {
    const result = await resetPassword(id, "password123")
    if ("success" in (result as any)) alert("Password reset to: password123")
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this user?")) return
    const result = await deleteUser(id)
    if ("success" in (result as any)) setUsers(prev => prev.filter(u => u.id !== id))
  }

  const filtered = users.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchRole = roleFilter === "all" || u.role === roleFilter
    return matchSearch && matchRole
  })

  const roleCounts = {
    all: users.length,
    SUPER_ADMIN: users.filter(u => u.role === "SUPER_ADMIN").length,
    MANAGEMENT: users.filter(u => u.role === "MANAGEMENT").length,
    MANAGER: users.filter(u => u.role === "MANAGER").length,
    EMPLOYEE: users.filter(u => u.role === "EMPLOYEE").length,
    CLIENT: users.filter(u => u.role === "CLIENT").length,
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2"><UserCog className="w-6 h-6 text-primary" />User Management</h1>
            <p className="text-muted-foreground mt-1">Manage all user accounts and role assignments</p>
          </div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2"><Plus className="w-4 h-4" />Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader><DialogTitle>Create New User</DialogTitle></DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2"><Label>Full Name</Label><Input value={newUser.name} onChange={e => setNewUser(p => ({ ...p, name: e.target.value }))} placeholder="John Doe" className="bg-secondary border-0" /></div>
                <div className="space-y-2"><Label>Email</Label><Input type="email" value={newUser.email} onChange={e => setNewUser(p => ({ ...p, email: e.target.value }))} placeholder="john@company.com" className="bg-secondary border-0" /></div>
                <div className="space-y-2"><Label>Password</Label><Input type="password" value={newUser.password} onChange={e => setNewUser(p => ({ ...p, password: e.target.value }))} placeholder="Min 6 characters" className="bg-secondary border-0" /></div>
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Select value={newUser.role} onValueChange={v => setNewUser(p => ({ ...p, role: v as UserRole }))}>
                    <SelectTrigger className="bg-secondary border-0"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SUPER_ADMIN">Super Admin</SelectItem>
                      <SelectItem value="MANAGEMENT">Management</SelectItem>
                      <SelectItem value="MANAGER">Manager</SelectItem>
                      <SelectItem value="EMPLOYEE">Employee</SelectItem>
                      <SelectItem value="CLIENT">Client</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleCreateUser} disabled={creating} className="w-full">{creating ? "Creating..." : "Create User"}</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Role Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { key: "all", label: "All Users" },
            { key: "SUPER_ADMIN", label: "Super Admin" },
            { key: "MANAGEMENT", label: "Management" },
            { key: "MANAGER", label: "Manager" },
            { key: "EMPLOYEE", label: "Employee" },
            { key: "CLIENT", label: "Client" },
          ].map(tab => (
            <button key={tab.key} onClick={() => setRoleFilter(tab.key)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${roleFilter === tab.key ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
            >
              {tab.label} <span className="ml-1 text-xs opacity-70">({(roleCounts as any)[tab.key]})</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search users..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 bg-secondary border-0" />
        </div>

        {/* Users List */}
        <div className="grid gap-3">
          {filtered.map((user, i) => {
            const RoleIcon = roleIcons[user.role] || User
            return (
              <AnimatedCard key={user.id} delay={i * 50} hover={true}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-primary/20 text-primary text-sm">{user.name.split(" ").map((n: string) => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium flex items-center gap-2">
                          {user.name}
                          {!user.isActive && <Badge variant="secondary" className="text-[10px] bg-red-500/10 text-red-400">Inactive</Badge>}
                        </p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={`${getRoleBgColor(user.role)} ${getRoleColor(user.role)} border-0 gap-1`}>
                        <RoleIcon className="w-3 h-3" />
                        {getRoleLabel(user.role)}
                      </Badge>
                      <span className="text-xs text-muted-foreground hidden sm:block">
                        {user.lastLogin ? `Last: ${new Date(user.lastLogin).toLocaleDateString()}` : "Never logged in"}
                      </span>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" onClick={() => handleToggleActive(user.id)} title={user.isActive ? "Deactivate" : "Activate"}>
                          {user.isActive ? <X className="w-4 h-4 text-red-400" /> : <Check className="w-4 h-4 text-green-400" />}
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleResetPassword(user.id)} title="Reset password"><Key className="w-4 h-4 text-amber-400" /></Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(user.id)} title="Delete"><Trash2 className="w-4 h-4 text-red-400" /></Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            )
          })}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <UserCog className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No users found</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
