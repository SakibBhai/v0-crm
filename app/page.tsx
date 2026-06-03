"use client"

import { useSession } from "next-auth/react"
import dynamic from "next/dynamic"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/stat-card"
import { AnimatedCard } from "@/components/animated-card"
import { UpcomingWidget } from "@/components/dashboard/upcoming-widget"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  UserCheck,
  FolderKanban,
  DollarSign,
  ArrowRight,
  MoreHorizontal,
  Calendar,
  AlertCircle,
  CheckCircle,
  Activity,
  Target,
  TrendingUp,
  TrendingDown,
  Clock,
  Zap,
  Award,
  BarChart3,
  PieChart as PieChartIcon,
  Server,
  Database,
  ShieldCheck,
  AlertTriangle
} from "lucide-react"
import { useState, useEffect } from "react"
import { getEmployees, getAttendanceRecords as getAttendanceRecordsDB } from "@/app/actions/team"
import { getDashboardStats } from "@/app/actions/dashboard"
import type { Employee, AttendanceRecord } from "@/lib/types/hr"
import { AttendanceClock } from "@/components/dashboard/attendance-clock"

const quickActions = [
  { label: "New Lead", icon: Users, color: "bg-blue-500/20 text-blue-400" },
  { label: "New Project", icon: FolderKanban, color: "bg-green-500/20 text-green-400" },
  { label: "Create Invoice", icon: DollarSign, color: "bg-amber-500/20 text-amber-400" },
  { label: "Schedule Meeting", icon: Calendar, color: "bg-purple-500/20 text-purple-400" },
  { label: "Team Task", icon: Target, color: "bg-pink-500/20 text-pink-400" },
  { label: "Report", icon: Activity, color: "bg-cyan-500/20 text-cyan-400" },
]

const recentActivities = [
  { id: 1, type: "lead", action: "New Lead Added", detail: "Latest from CRM", time: "Recent", icon: Users },
  { id: 2, type: "project", action: "Project Updated", detail: "Check projects tab", time: "Recent", icon: CheckCircle },
  { id: 3, type: "task", action: "Task Created", detail: "Check tasks tab", time: "Recent", icon: Target },
  { id: 4, type: "meeting", action: "Client Activity", detail: "Check clients tab", time: "Recent", icon: Calendar },
  { id: 5, type: "alert", action: "Invoice Alert", detail: "Check finances tab", time: "Recent", icon: AlertCircle },
]

export default function DashboardPage() {
  const { data: session } = useSession()
  const userRole = (session?.user as any)?.role || "SUPER_ADMIN"

  // Role-based dashboard imports (lazy)
  const ManagementDashboard = dynamic(() => import("@/components/dashboards/management-dashboard").then(mod => mod.ManagementDashboard), { ssr: false })
  const ManagerDashboard = dynamic(() => import("@/components/dashboards/manager-dashboard").then(mod => mod.ManagerDashboard), { ssr: false })
  const EmployeeDashboard = dynamic(() => import("@/components/dashboards/employee-dashboard").then(mod => mod.EmployeeDashboard), { ssr: false })
  const ClientDashboard = dynamic(() => import("@/components/dashboards/client-dashboard").then(mod => mod.ClientDashboard), { ssr: false })

  // Render role-specific dashboards
  if (userRole === "MANAGEMENT") {
    return <DashboardLayout><ManagementDashboard /></DashboardLayout>
  }
  if (userRole === "MANAGER") {
    return <DashboardLayout><ManagerDashboard /></DashboardLayout>
  }
  if (userRole === "EMPLOYEE") {
    return <DashboardLayout><EmployeeDashboard /></DashboardLayout>
  }
  if (userRole === "CLIENT") {
    return <DashboardLayout><ClientDashboard /></DashboardLayout>
  }

  // SUPER_ADMIN gets the full original dashboard
  return <DashboardLayout><FullAdminDashboard /></DashboardLayout>
}

function FullAdminDashboard() {
  const [dbAttendance, setDbAttendance] = useState<AttendanceRecord[]>([])
  const [dashData, setDashData] = useState<any>(null)

  useEffect(() => {
    async function loadData() {
      const [attRes, statsRes] = await Promise.all([
        getAttendanceRecordsDB(),
        getDashboardStats(),
      ])
      if (Array.isArray(attRes)) setDbAttendance(attRes as AttendanceRecord[])
      if (statsRes && !("error" in statsRes)) setDashData(statsRes)
    }
    loadData()
  }, [])

  const fmt = (v: number) => v >= 1e6 ? `৳${(v/1e6).toFixed(1)}M` : v >= 1e3 ? `৳${(v/1e3).toFixed(0)}K` : `৳${v}`

  // Calculate totals for hero section from real data
  const todayStats = {
    newLeads: dashData?.counts?.leadCount ?? 0,
    tasksCompleted: dashData?.tasks?.completed ?? 0,
    totalTasks: dashData?.tasks?.total ?? 0,
    revenue: dashData ? fmt(dashData.finance.paidInvoiceValue) : "৳0",
  }

  // Financial snapshot from real data
  const financialSummary = dashData ? {
    mrr: fmt(dashData.finance.mrrValue),
    outstanding: fmt(dashData.finance.pendingInvoiceValue),
    invoicesPending: dashData.finance.pendingInvoiceCount,
    overdue: fmt(dashData.finance.overdueInvoiceValue),
    invoicesOverdue: dashData.finance.overdueInvoiceCount,
  } : { mrr: "৳0", outstanding: "৳0", invoicesPending: 0, overdue: "৳0", invoicesOverdue: 0 }

  // KPIs from real data
  const convRate = dashData && dashData.counts.leadCount > 0
    ? Math.round((dashData.tasks.completed / Math.max(dashData.tasks.total, 1)) * 1000) / 10
    : 0
  const avgDealValue = dashData && dashData.counts.leadCount > 0
    ? fmt(dashData.finance.totalRevenue / Math.max(dashData.counts.clientCount, 1))
    : "৳0"
  const kpis = [
    { label: "Task Completion", value: `${convRate}%`, trend: `${dashData?.tasks?.completed ?? 0} done`, color: "text-green-400" },
    { label: "Avg Client Value", value: avgDealValue, trend: `${dashData?.counts?.clientCount ?? 0} clients`, color: "text-green-400" },
    { label: "Active Employees", value: String(dashData?.team?.active ?? 0), trend: `${dashData?.team?.total ?? 0} total`, color: "text-blue-400" },
    { label: "Budget Utilization", value: dashData ? `${Math.round((dashData.projects.totalSpent / Math.max(dashData.projects.totalBudget, 1)) * 100)}%` : "0%", trend: `${fmt(dashData?.projects?.totalSpent ?? 0)} spent`, color: "text-amber-400" },
  ]

  return (
      <div className="space-y-6">
        {/* Hero Welcome Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-chart-2/10 to-chart-3/20 border border-primary/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))]" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Welcome back! 👋</h1>
                <p className="text-muted-foreground mt-1">Here's what's happening with your agency today.</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>

            {/* Today's Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/20"><Zap className="w-4 h-4 text-blue-400" /></div>
                  <span className="text-sm text-muted-foreground">Total Leads</span>
                </div>
                <p className="text-2xl font-bold mt-2">{todayStats.newLeads}</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-purple-500/20"><FolderKanban className="w-4 h-4 text-purple-400" /></div>
                  <span className="text-sm text-muted-foreground">Total Tasks</span>
                </div>
                <p className="text-2xl font-bold mt-2">{todayStats.totalTasks}</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-green-500/20"><CheckCircle className="w-4 h-4 text-green-400" /></div>
                  <span className="text-sm text-muted-foreground">Tasks Done</span>
                </div>
                <p className="text-2xl font-bold mt-2">{todayStats.tasksCompleted}</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-500/20"><DollarSign className="w-4 h-4 text-amber-400" /></div>
                  <span className="text-sm text-muted-foreground">Revenue</span>
                </div>
                <p className="text-2xl font-bold mt-2">{todayStats.revenue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Attendance Clock Component */}
        <AttendanceClock themeColor="indigo" />

        {/* Main Dashboard Layout - 2 Columns */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* LEFT COLUMN: DAILY OPERATIONS (5 columns wide on XL) */}
          <div className="xl:col-span-5 space-y-6">

            {/* 1. Recent Leads */}
            <AnimatedCard delay={100} className="border-primary/20 shadow-md shadow-primary/5">
              <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-blue-500/20">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                  </div>
                  <CardTitle className="text-base font-semibold">Recent Leads</CardTitle>
                </div>
                <Badge variant="outline" className="text-xs font-normal">
                  {dashData?.counts?.leadCount ?? 0} total
                </Badge>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {(dashData?.recentLeads || []).map((lead: any, i: number) => (
                    <div key={i} className="p-4 flex gap-3 hover:bg-muted/50 transition-colors group">
                      <div className="mt-0.5">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                          {lead.avatar}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{lead.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-[10px] uppercase font-semibold tracking-wider h-5 px-1.5">
                            {lead.company || "No company"}
                          </Badge>
                          <span className={`text-[10px] font-medium uppercase tracking-wider ${lead.status === 'hot' ? 'text-red-400' : lead.status === 'warm' ? 'text-amber-400' : 'text-blue-400'}`}>
                            {lead.status}
                          </span>
                          <span className="text-[10px] text-muted-foreground">{lead.value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {(!dashData?.recentLeads || dashData.recentLeads.length === 0) && (
                    <div className="p-4 text-sm text-muted-foreground text-center">No leads yet</div>
                  )}
                </div>
              </CardContent>
            </AnimatedCard>

            {/* 2. Live Company Attendance Feed */}
            <AnimatedCard delay={150} className="border-primary/10 shadow-md">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-primary" />
                  Live Attendance Feed
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-3">
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                  {dbAttendance.slice(0, 5).map((log, i) => (
                    <div key={i} className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-secondary/30 border border-border/30">
                      <div>
                        <p className="font-bold text-foreground">{log.employeeName}</p>
                        <p className="text-[9px] text-muted-foreground font-semibold flex items-center gap-1 mt-0.5">
                          <span className="capitalize">{log.workLocation || 'Office'}</span>
                          <span>·</span>
                          <span>{log.date}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge className={`text-[9px] font-black uppercase px-1.5 py-0 border ${
                          log.status === 'present' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                          log.status === 'remote' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                          log.status === 'late' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                          'bg-slate-500/10 text-slate-500 border-slate-500/20'
                        }`}>
                          {log.status}
                        </Badge>
                        <p className="text-[9px] text-muted-foreground mt-0.5 font-medium">In: {log.clockIn || '--:--'}</p>
                      </div>
                    </div>
                  ))}
                  {dbAttendance.length === 0 && (
                    <p className="text-xs text-muted-foreground text-center py-4">
                      No attendance actions logged today
                    </p>
                  )}
                </div>
              </CardContent>
            </AnimatedCard>

            {/* 3. System Health & Server Monitor */}
            <AnimatedCard delay={200} className="border-emerald-500/10 bg-gradient-to-br from-background to-emerald-500/5">
              <CardHeader className="pb-3 border-b border-border/40">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Server className="w-4 h-4 text-emerald-400" />
                  System Health & Operations
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-3 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2 bg-background border border-border/40 rounded-xl">
                    <p className="text-[10px] text-muted-foreground font-semibold">CPU Usage</p>
                    <p className="text-sm font-black text-foreground mt-0.5">14.2%</p>
                  </div>
                  <div className="p-2 bg-background border border-border/40 rounded-xl">
                    <p className="text-[10px] text-muted-foreground font-semibold">DB Query Latency</p>
                    <p className="text-sm font-black text-emerald-400 mt-0.5">28ms</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-xs p-2.5 bg-background border border-border/40 rounded-xl">
                  <span className="font-semibold text-muted-foreground flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-blue-500" />
                    Neon Connection
                  </span>
                  <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[9px] font-black">
                    ACTIVE
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center text-xs p-2.5 bg-background border border-border/40 rounded-xl">
                  <span className="font-semibold text-muted-foreground flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Security Protocol
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground">TLS 1.3 Active</span>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* 4. Calendar / Upcoming Widget */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
              <UpcomingWidget delay={0} />
            </div>
          </div>


          {/* RIGHT COLUMN: BUSINESS HEALTH (7 columns wide on XL) */}
          <div className="xl:col-span-7 space-y-6">

            {/* 1. Quick Action Shortcuts */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 animate-in fade-in duration-500">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  className={`flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-secondary/50 hover:border-primary/50 transition-all hover:scale-105 ${action.color}`}
                >
                  <action.icon className="w-5 h-5" />
                  <span className="text-[10px] font-medium text-center leading-tight">{action.label}</span>
                </button>
              ))}
            </div>

            {/* 2. Top-level KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Total Leads" value={String(dashData?.counts?.leadCount ?? 0)} change={0} icon={Users} delay={100} iconColor="text-chart-1" />
              <StatCard title="Active Clients" value={String(dashData?.counts?.clientCount ?? 0)} change={0} icon={UserCheck} delay={200} iconColor="text-chart-2" />
              <StatCard title="Projects" value={String(dashData?.counts?.projectCount ?? 0)} change={0} icon={FolderKanban} delay={300} iconColor="text-chart-3" />
              <StatCard title="Revenue" value={dashData ? fmt(dashData.finance.paidInvoiceValue) : "৳0"} change={0} icon={DollarSign} delay={400} iconColor="text-chart-4" />
            </div>

            {/* 3. Financial Overview */}
            <AnimatedCard delay={500} className="border-amber-500/20 bg-gradient-to-br from-background to-amber-500/5">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-amber-500" />
                  Financial Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground flex items-center justify-between">
                      MRR <Badge variant="secondary" className="text-[9px] h-4 px-1 bg-green-500/10 text-green-500 border-green-500/20">recurring</Badge>
                    </p>
                    <p className="text-2xl font-bold tracking-tight">{financialSummary.mrr}</p>
                    <p className="text-[10px] text-muted-foreground">Monthly Recurring Revenue</p>
                  </div>
                  <div className="space-y-1 border-l border-border/50 pl-6">
                    <p className="text-xs font-medium text-muted-foreground flex items-center justify-between">
                      Pending <Badge variant="secondary" className="text-[9px] h-4 px-1">{financialSummary.invoicesPending} inv</Badge>
                    </p>
                    <p className="text-2xl font-bold tracking-tight text-amber-500">{financialSummary.outstanding}</p>
                    <p className="text-[10px] text-muted-foreground">Expected incoming</p>
                  </div>
                  <div className="space-y-1 border-l border-border/50 pl-6">
                    <p className="text-xs font-medium text-muted-foreground flex items-center justify-between">
                      Overdue <Badge variant="secondary" className="text-[9px] h-4 px-1 bg-red-500/10 text-red-500 border-red-500/20">{financialSummary.invoicesOverdue} inv</Badge>
                    </p>
                    <p className="text-2xl font-bold tracking-tight text-red-500">{financialSummary.overdue}</p>
                    <p className="text-[10px] text-muted-foreground">Requires attention</p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* 4. KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {kpis.map((kpi, i) => {
                    return (
                      <AnimatedCard key={i} delay={800 + i * 50}>
                        <CardContent className="p-4">
                          <p className="text-xs text-muted-foreground mb-1">{kpi.label}</p>
                          <div className="flex items-end justify-between">
                            <p className="text-xl font-bold">{kpi.value}</p>
                            <span className={`flex items-center gap-0.5 text-[10px] font-medium ${kpi.color}`}>
                              {kpi.trend}
                            </span>
                          </div>
                        </CardContent>
                      </AnimatedCard>
                    )
                  })}
                </div>
              </div>

              {/* Active Projects Mini-List */}
              <AnimatedCard delay={900} className="flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between pb-3 pt-4 px-4">
                  <CardTitle className="text-sm font-medium">Projects in Flight</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 flex-1">
                  <div className="space-y-4">
                    {(dashData?.activeProjectsList || []).slice(0, 3).map((project: any, i: number) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-sm font-medium leading-none">{project.name}</p>
                            <p className="text-[10px] text-muted-foreground mt-1">{project.client}</p>
                          </div>
                          <span className="text-[10px] font-medium bg-secondary px-1.5 py-0.5 rounded text-muted-foreground">
                            Due {project.dueDate}
                          </span>
                        </div>
                        <Progress value={project.progress} className="h-1.5" />
                      </div>
                    ))}
                    {(!dashData?.activeProjectsList || dashData.activeProjectsList.length === 0) && (
                      <p className="text-sm text-muted-foreground text-center py-2">No active projects</p>
                    )}
                  </div>
                  <button className="w-full mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors pb-1 border-b border-transparent hover:border-foreground mx-auto block text-center">
                    View all projects
                  </button>
                </CardContent>
              </AnimatedCard>
            </div>

          </div>
        </div>
      </div>
  )
}

