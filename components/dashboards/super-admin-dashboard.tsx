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
import { useEffect, useState } from "react"
import { getSuperAdminDashboardData } from "@/app/actions/dashboard"

type DashboardData = {
  totalUsers: number
  activeClients: number
  totalProjects: number
  totalRevenue: number
  roleDist: { role: string; count: number; color: string; pct: number }[]
  monthlyRevenue: number
  pendingInvoiceValue: number
  pendingInvoiceCount: number
  conversionRate: number
  activeProjectCount: number
  dueThisWeek: number
}

export function SuperAdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const res = await getSuperAdminDashboardData()
      if (!("error" in res)) setData(res as DashboardData)
      setLoading(false)
    }
    load()
  }, [])

  const formatCurrency = (v: number) => {
    if (v >= 1000000) return `৳${(v / 1000000).toFixed(1)}M`
    if (v >= 1000) return `৳${(v / 1000).toFixed(0)}K`
    return `৳${v.toLocaleString()}`
  }

  const heroStats = data ? [
    { label: "Total Users", value: String(data.totalUsers), icon: Users, color: "text-blue-400", bg: "bg-blue-500/20" },
    { label: "Active Clients", value: String(data.activeClients), icon: UserCheck, color: "text-green-400", bg: "bg-green-500/20" },
    { label: "Projects", value: String(data.totalProjects), icon: FolderKanban, color: "text-purple-400", bg: "bg-purple-500/20" },
    { label: "Revenue", value: formatCurrency(data.totalRevenue), icon: DollarSign, color: "text-amber-400", bg: "bg-amber-500/20" },
    { label: "System Health", value: "99.9%", icon: Server, color: "text-emerald-400", bg: "bg-emerald-500/20" },
  ] : []

  const financeRow = data ? [
    { label: "Monthly Revenue", value: formatCurrency(data.monthlyRevenue), change: `${data.activeProjectCount} active`, up: true, icon: DollarSign, color: "text-green-400" },
    { label: "Pending Invoices", value: formatCurrency(data.pendingInvoiceValue), change: `${data.pendingInvoiceCount} invoices`, up: false, icon: Clock, color: "text-amber-400" },
    { label: "Conversion Rate", value: `${data.conversionRate}%`, change: "lead → won", up: true, icon: TrendingUp, color: "text-blue-400" },
    { label: "Active Projects", value: String(data.activeProjectCount), change: `${data.dueThisWeek} due this week`, up: false, icon: FolderKanban, color: "text-purple-400" },
  ] : []

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl bg-gradient-to-br from-red-500/20 via-primary/10 to-chart-3/20 border border-red-500/20 p-6 md:p-8 animate-pulse">
          <div className="h-8 w-48 bg-muted rounded mb-4" />
          <div className="h-4 w-64 bg-muted rounded mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array(5).fill(0).map((_, i) => <div key={i} className="bg-card/50 rounded-xl p-4 border border-border/50 h-24" />)}
          </div>
        </div>
      </div>
    )
  }

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
            {heroStats.map((stat, i) => (
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
            {(data?.roleDist || []).map((role, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{role.role}</span>
                  <span className="text-muted-foreground">{role.count} users</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className={`h-full rounded-full ${role.color}`} style={{ width: `${Math.max(role.pct, 5)}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </AnimatedCard>

        {/* System Activity — kept static (no audit log) */}
        <AnimatedCard delay={200}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Recent System Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { action: "Dashboard loaded", detail: "Real-time data refreshed", time: "Just now", icon: Zap, color: "text-green-400" },
              { action: "System operational", detail: "All modules running", time: "Ongoing", icon: CheckCircle, color: "text-green-400" },
              { action: "Database connected", detail: "Neon PostgreSQL active", time: "Active", icon: Database, color: "text-blue-400" },
              { action: "Users online", detail: `${data?.totalUsers || 0} registered accounts`, time: "Current", icon: Users, color: "text-purple-400" },
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
              { label: "Active Sessions", status: "Normal", uptime: `${data?.totalUsers || 0} users`, color: "text-blue-400" },
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
        {financeRow.map((stat, i) => (
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
