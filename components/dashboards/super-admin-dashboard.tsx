"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  UserCheck,
  FolderKanban,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Shield,
  Server,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  UserCog,
  Database,
  Zap,
} from "lucide-react"

export function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500/20 via-primary/10 to-chart-3/20 border border-red-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))]" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
              <Shield className="w-3 h-3 mr-1" />
              Super Admin
            </Badge>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">System Overview 🛡️</h1>
          <p className="text-muted-foreground mt-1">Complete control panel with all system metrics</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {[
              { label: "Total Users", value: "5", icon: Users, color: "text-blue-400", bg: "bg-blue-500/20" },
              { label: "Active Clients", value: "86", icon: UserCheck, color: "text-green-400", bg: "bg-green-500/20" },
              { label: "Projects", value: "28", icon: FolderKanban, color: "text-purple-400", bg: "bg-purple-500/20" },
              { label: "Revenue", value: "৳342K", icon: DollarSign, color: "text-amber-400", bg: "bg-amber-500/20" },
              { label: "System Health", value: "99.9%", icon: Server, color: "text-emerald-400", bg: "bg-emerald-500/20" },
            ].map((stat, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${stat.bg}`}>
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Management Overview */}
        <AnimatedCard delay={100} className="border-red-500/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <UserCog className="w-4 h-4 text-red-400" />
              User Roles Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { role: "Super Admin", count: 1, color: "bg-red-500", pct: 5 },
              { role: "Management", count: 2, color: "bg-amber-500", pct: 10 },
              { role: "Manager", count: 5, color: "bg-blue-500", pct: 25 },
              { role: "Employee", count: 10, color: "bg-green-500", pct: 50 },
              { role: "Client", count: 2, color: "bg-purple-500", pct: 10 },
            ].map((role, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{role.role}</span>
                  <span className="text-muted-foreground">{role.count} users</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className={`h-full rounded-full ${role.color}`} style={{ width: `${role.pct}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </AnimatedCard>

        {/* System Activity */}
        <AnimatedCard delay={200}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Recent System Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { action: "New user created", detail: "employee@company.com", time: "2m ago", icon: UserCog, color: "text-green-400" },
              { action: "Database backup", detail: "Automated backup completed", time: "1h ago", icon: Database, color: "text-blue-400" },
              { action: "Failed login attempt", detail: "unknown@test.com", time: "3h ago", icon: AlertCircle, color: "text-red-400" },
              { action: "Settings updated", detail: "Invoice template changed", time: "5h ago", icon: Zap, color: "text-amber-400" },
              { action: "User deactivated", detail: "old-employee@company.com", time: "1d ago", icon: Users, color: "text-muted-foreground" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className={`p-1.5 rounded-md bg-secondary ${item.color}`}>
                  <item.icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap">{item.time}</span>
              </div>
            ))}
          </CardContent>
        </AnimatedCard>

        {/* Quick System Stats */}
        <AnimatedCard delay={300} className="border-emerald-500/20 bg-gradient-to-br from-background to-emerald-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Database", status: "Healthy", uptime: "99.9%", color: "text-green-400" },
              { label: "API Response", status: "Fast", uptime: "45ms avg", color: "text-green-400" },
              { label: "Storage Used", status: "Normal", uptime: "23.4 GB", color: "text-amber-400" },
              { label: "Active Sessions", status: "Normal", uptime: "12 active", color: "text-blue-400" },
            ].map((sys, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${sys.color === "text-green-400" ? "bg-green-500" : sys.color === "text-amber-400" ? "bg-amber-500" : "bg-blue-500"}`} />
                  <span className="text-sm font-medium">{sys.label}</span>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${sys.color}`}>{sys.uptime}</p>
                  <p className="text-[10px] text-muted-foreground">{sys.status}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </AnimatedCard>
      </div>

      {/* Financial Overview Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Monthly Revenue", value: "৳67,000", change: "+15.3%", up: true, icon: DollarSign, color: "text-green-400" },
          { label: "Pending Invoices", value: "৳24,500", change: "8 invoices", up: false, icon: Clock, color: "text-amber-400" },
          { label: "Conversion Rate", value: "31.8%", change: "+2.3%", up: true, icon: TrendingUp, color: "text-blue-400" },
          { label: "Active Projects", value: "12", change: "3 due this week", up: false, icon: FolderKanban, color: "text-purple-400" },
        ].map((stat, i) => (
          <AnimatedCard key={i} delay={400 + i * 100}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">{stat.label}</span>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <div className="flex items-center gap-1 mt-1">
                {stat.up ? <TrendingUp className="w-3 h-3 text-green-400" /> : <TrendingDown className="w-3 h-3 text-amber-400" />}
                <span className={`text-xs ${stat.up ? "text-green-400" : "text-amber-400"}`}>{stat.change}</span>
              </div>
            </CardContent>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}
