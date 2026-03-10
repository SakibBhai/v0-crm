"use client"

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
} from "lucide-react"
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Line,
  ComposedChart,
} from "recharts"
import { useState } from "react"
import { sampleTasks } from "@/lib/data/tasks"
import { initialProjects } from "@/lib/data/projects"
import { invoicesData } from "@/lib/data/finance-data"
import { employees, leaveRequests, attendanceRecords } from "@/lib/data/hr"

const revenueData = [
  { month: "Jan", revenue: 45000, leads: 120 },
  { month: "Feb", revenue: 52000, leads: 145 },
  { month: "Mar", revenue: 48000, leads: 130 },
  { month: "Apr", revenue: 61000, leads: 168 },
  { month: "May", revenue: 55000, leads: 155 },
  { month: "Jun", revenue: 67000, leads: 180 },
  { month: "Jul", revenue: 72000, leads: 195 },
]

const projectStatusData = [
  { name: "Completed", value: initialProjects.filter(p => p.status === 'completed').length, color: "#4ade80" },
  { name: "In Progress", value: initialProjects.filter(p => p.status === 'in-progress').length, color: "#60a5fa" },
  { name: "On Hold", value: initialProjects.filter(p => p.status === 'on-hold').length, color: "#fbbf24" },
  { name: "Planning", value: initialProjects.filter(p => p.status === 'planning').length, color: "#a78bfa" },
]

const recentLeads = [
  { name: "Sarah Mitchell", company: "TechStart Inc", status: "Hot", value: "$15,000", avatar: "SM" },
  { name: "James Wilson", company: "GrowthCo", status: "Warm", value: "$8,500", avatar: "JW" },
  { name: "Emily Chen", company: "InnovateLab", status: "Hot", value: "$22,000", avatar: "EC" },
  { name: "Michael Brown", company: "ScaleUp Ltd", status: "Cold", value: "$5,000", avatar: "MB" },
]

const activeProjects = initialProjects
  .filter(p => p.status === 'in-progress')
  .slice(0, 4)
  .map(p => ({
    name: p.name,
    client: p.client,
    progress: p.progress,
    dueDate: new Date(p.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }))

const teamPerformance = [
  { name: "Design", tasks: 24, completed: 18 },
  { name: "Dev", tasks: 32, completed: 28 },
  { name: "Marketing", tasks: 18, completed: 15 },
  { name: "Content", tasks: 21, completed: 19 },
]

const conversionData = [
  { week: "W1", leads: 120, qualified: 45, converted: 12, rate: 26.7 },
  { week: "W2", leads: 145, qualified: 58, converted: 18, rate: 31.0 },
  { week: "W3", leads: 130, qualified: 52, converted: 14, rate: 26.9 },
  { week: "W4", leads: 168, qualified: 72, converted: 22, rate: 30.6 },
  { week: "W5", leads: 155, qualified: 65, converted: 20, rate: 30.8 },
  { week: "W6", leads: 180, qualified: 78, converted: 25, rate: 32.1 },
  { week: "W7", leads: 195, qualified: 88, converted: 28, rate: 31.8 },
]

const clientSourceData = [
  { name: "Organic", value: 35, color: "#4ade80" },
  { name: "Referral", value: 25, color: "#60a5fa" },
  { name: "Paid Ads", value: 28, color: "#f97316" },
  { name: "Direct", value: 12, color: "#a78bfa" },
]

const monthlyTargetData = [
  { month: "Jan", target: 50000, actual: 45000, profit: 12000 },
  { month: "Feb", target: 55000, actual: 52000, profit: 14000 },
  { month: "Mar", target: 60000, actual: 48000, profit: 11000 },
  { month: "Apr", target: 65000, actual: 61000, profit: 18000 },
  { month: "May", target: 70000, actual: 55000, profit: 15000 },
  { month: "Jun", target: 75000, actual: 67000, profit: 19000 },
  { month: "Jul", target: 80000, actual: 72000, profit: 21000 },
]

const recentActivities = [
  { id: 1, type: "lead", action: "New Lead Added", detail: "Sarah Mitchell from TechStart Inc", time: "2 hours ago", icon: Users },
  { id: 2, type: "project", action: "Project Completed", detail: "E-commerce Redesign for TechMart", time: "5 hours ago", icon: CheckCircle },
  { id: 3, type: "task", action: "Task Created", detail: "SEO Optimization for GreenLife", time: "1 day ago", icon: Target },
  { id: 4, type: "meeting", action: "Client Meeting", detail: "Strategy discussion with AutoDeal", time: "1 day ago", icon: Calendar },
  { id: 5, type: "alert", action: "Overdue Invoice", detail: "Invoice #2024-001 - $5,200", time: "2 days ago", icon: AlertCircle },
]

const quickActions = [
  { label: "New Lead", icon: Users, color: "bg-blue-500/20 text-blue-400" },
  { label: "New Project", icon: FolderKanban, color: "bg-green-500/20 text-green-400" },
  { label: "Create Invoice", icon: DollarSign, color: "bg-amber-500/20 text-amber-400" },
  { label: "Schedule Meeting", icon: Calendar, color: "bg-purple-500/20 text-purple-400" },
  { label: "Team Task", icon: Target, color: "bg-pink-500/20 text-pink-400" },
  { label: "Report", icon: Activity, color: "bg-cyan-500/20 text-cyan-400" },
]

const kpis = [
  { label: "Conversion Rate", value: "31.8%", trend: "+2.3%", color: "text-green-400" },
  { label: "Avg Deal Value", value: "$18,750", trend: "+8.5%", color: "text-green-400" },
  { label: "Client Retention", value: "94.2%", trend: "+1.2%", color: "text-green-400" },
  { label: "Project ROI", value: "285%", trend: "-3.1%", color: "text-red-400" },
]

// --- Computed Real Data ---

const upcomingTasks = sampleTasks
  .filter(t => t.status !== 'done')
  .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())

const dailyTasks = upcomingTasks.slice(0, 5).map(t => ({
  id: t.id,
  title: t.title,
  time: new Date(t.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  priority: t.priority,
  completed: t.status === 'done'
}))

const tasksCompletedToday = sampleTasks.filter(t => t.status === 'done').length

const totalMRR = invoicesData
  .filter(i => i.recurringInvoice)
  .reduce((sum, inv) => sum + inv.amount, 0)
const overdueInvoices = invoicesData.filter(i => i.status === 'overdue')
const totalOverdue = overdueInvoices.reduce((sum, inv) => sum + (inv.amount - inv.paid), 0)
const pendingInvoices = invoicesData.filter(i => i.status === 'pending' || i.status === 'sent')
const totalPending = pendingInvoices.reduce((sum, inv) => sum + (inv.amount - inv.paid), 0)

const financialSummary = {
  mrr: `$${(totalMRR / 1000).toFixed(1)}k`,
  mrrGrowth: "+3.2%",
  outstanding: `$${(totalPending / 1000).toFixed(1)}k`,
  invoicesPending: pendingInvoices.length,
  overdue: `$${(totalOverdue / 1000).toFixed(1)}k`,
  invoicesOverdue: overdueInvoices.length,
  netProfitYTD: "$142,500",
}

const todayDateStr = new Date().toISOString().split('T')[0]
const teamOnLeave = leaveRequests.filter(lr =>
  lr.status === 'approved' &&
  new Date(lr.startDate) <= new Date() &&
  new Date(lr.endDate) >= new Date()
)
const recentAttendanceDate = attendanceRecords.length > 0 ? attendanceRecords[attendanceRecords.length - 1].date : todayDateStr
const recentAttendance = attendanceRecords.filter(a => a.date === recentAttendanceDate)
const presentCount = recentAttendance.filter(a => ['present', 'late', 'remote', 'half-day'].includes(a.status)).length
const activeEmployees = employees.filter(e => e.status === 'active').length
const attendanceRate = activeEmployees > 0 ? Math.round((presentCount / activeEmployees) * 100) : 0
const teamSnapshot = {
  onLeave: teamOnLeave.length,
  attendanceRate: `${attendanceRate}%`,
  activeEmployees
}

const uniqueClientsCount = [...new Set(initialProjects.map(p => p.client))].length
const totalRevenuePaid = invoicesData.filter(i => i.status === 'paid').reduce((acc, i) => acc + i.paid, 0)

export default function DashboardPage() {

  // Calculate totals for hero section
  const todayStats = {
    newLeads: 12, // Based on mock data since Leads module isn't connected
    meetings: 3,
    tasksCompleted: tasksCompletedToday,
    revenue: `$${(totalRevenuePaid / 1000).toFixed(1)}k`,
  }

  return (
    <DashboardLayout>
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
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-muted-foreground">New Leads</span>
                </div>
                <p className="text-2xl font-bold mt-2">+{todayStats.newLeads}</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Calendar className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm text-muted-foreground">Meetings</span>
                </div>
                <p className="text-2xl font-bold mt-2">{todayStats.meetings}</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-sm text-muted-foreground">Tasks Done</span>
                </div>
                <p className="text-2xl font-bold mt-2">{todayStats.tasksCompleted}</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-500/20">
                    <DollarSign className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-sm text-muted-foreground">Today's Revenue</span>
                </div>
                <p className="text-2xl font-bold mt-2">{todayStats.revenue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Layout - 2 Columns */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* LEFT COLUMN: DAILY OPERATIONS (5 columns wide on XL) */}
          <div className="xl:col-span-5 space-y-6">

            {/* 1. Daily Priority Tasks */}
            <AnimatedCard delay={100} className="border-primary/20 shadow-md shadow-primary/5">
              <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-blue-500/20">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                  </div>
                  <CardTitle className="text-base font-semibold">Today's Priorities</CardTitle>
                </div>
                <Badge variant="outline" className="text-xs font-normal">
                  {todayStats.tasksCompleted} / {dailyTasks.length} Done
                </Badge>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {dailyTasks.map((task, i) => (
                    <div key={task.id} className="p-4 flex gap-3 hover:bg-muted/50 transition-colors group">
                      <div className="mt-0.5">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${task.completed ? 'bg-primary border-primary' : 'border-muted-foreground/50 hover:border-primary delay-75'}`}>
                          {task.completed && <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5 mt-1">
                          <Badge variant="secondary" className="text-[10px] uppercase font-semibold tracking-wider h-5 px-1.5">
                            {task.time}
                          </Badge>
                          <span className={`text-[10px] font-medium uppercase tracking-wider ${task.priority === 'high' ? 'text-red-400' :
                            task.priority === 'medium' ? 'text-amber-400' : 'text-blue-400'
                            }`}>
                            {task.priority} Priority
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </AnimatedCard>

            {/* 2. Calendar / Upcoming Widget */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
              <UpcomingWidget delay={0} />
            </div>

            {/* 3. Recent Activities */}
            <AnimatedCard delay={300}>
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-base font-medium">Activity Feed</CardTitle>
                <button className="text-xs text-primary hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  {recentActivities.map((activity, i) => {
                    const Icon = activity.icon
                    const typeColors: Record<string, string> = {
                      lead: "bg-blue-500/20 text-blue-400",
                      project: "bg-green-500/20 text-green-400",
                      task: "bg-purple-500/20 text-purple-400",
                      meeting: "bg-amber-500/20 text-amber-400",
                      alert: "bg-red-500/20 text-red-400",
                    }
                    return (
                      <div key={i} className="flex gap-3 relative">
                        {/* Timeline line */}
                        {i !== recentActivities.length - 1 && (
                          <div className="absolute left-4 top-8 bottom-[-16px] w-[1px] bg-border/50" />
                        )}
                        <div className={`p-2 rounded-full h-8 w-8 flex items-center justify-center relative z-10 ${typeColors[activity.type]}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0 pb-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 mb-1">{activity.detail}</p>
                          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{activity.time}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </AnimatedCard>
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
              <StatCard title="Total Leads" value="1,284" change={12.5} icon={Users} delay={100} iconColor="text-chart-1" />
              <StatCard title="Active Clients" value="86" change={8.2} icon={UserCheck} delay={200} iconColor="text-chart-2" />
              <StatCard title="Projects" value="28" change={-3.1} icon={FolderKanban} delay={300} iconColor="text-chart-3" />
              <StatCard title="Revenue" value="$342K" change={15.3} icon={DollarSign} delay={400} iconColor="text-chart-4" />
            </div>

            {/* 3. Financial Overview (CRUCIAL FOR OWNERS) */}
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
                      MRR <Badge variant="secondary" className="text-[9px] h-4 px-1 bg-green-500/10 text-green-500 border-green-500/20">{financialSummary.mrrGrowth}</Badge>
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

            {/* 4. Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Revenue vs Target */}
              <AnimatedCard delay={600}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Revenue vs Target</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={monthlyTargetData}>
                        <defs>
                          <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="month" stroke="#666" fontSize={11} tickLine={false} axisLine={false} />
                        <YAxis stroke="#666" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} width={40} />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #333", borderRadius: "8px", fontSize: "12px" }}
                          formatter={(value: number) => `$${value.toLocaleString()}`}
                        />
                        <Bar dataKey="target" fill="#666" opacity={0.3} name="Target" radius={[4, 4, 0, 0]} maxBarSize={40} />
                        <Bar dataKey="actual" fill="#60a5fa" name="Actual Revenue" radius={[4, 4, 0, 0]} maxBarSize={40} />
                        <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} name="Profit" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </AnimatedCard>

              {/* Conversion Funnel */}
              <AnimatedCard delay={700}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Pipeline Health</CardTitle>
                  <Badge variant="outline" className="text-[10px]">Trailing 7W</Badge>
                </CardHeader>
                <CardContent>
                  <div className="h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={conversionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="week" stroke="#666" fontSize={11} tickLine={false} axisLine={false} />
                        <YAxis yAxisId="left" stroke="#666" fontSize={11} tickLine={false} axisLine={false} width={30} />
                        <YAxis yAxisId="right" orientation="right" stroke="#f97316" fontSize={11} tickLine={false} axisLine={false} width={35} tickFormatter={(v) => `${v}%`} />
                        <Tooltip contentStyle={{ backgroundColor: "#1a1a2e", border: "1px solid #333", borderRadius: "8px", fontSize: "12px" }} />
                        <Bar yAxisId="left" dataKey="leads" fill="#94a3b8" name="Total Leads" radius={[4, 4, 0, 0]} stackId="a" maxBarSize={30} />
                        <Bar yAxisId="left" dataKey="qualified" fill="#60a5fa" name="Qualified" radius={[4, 4, 0, 0]} stackId="a" maxBarSize={30} />
                        <Bar yAxisId="left" dataKey="converted" fill="#4ade80" name="Converted" radius={[4, 4, 0, 0]} stackId="a" maxBarSize={30} />
                        <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#f97316" strokeWidth={2} name="Conv. Rate %" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>

            {/* 5. Health KPIs & Active Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Micro KPIs */}
                <div className="grid grid-cols-2 gap-4">
                  {kpis.map((kpi, i) => {
                    const isPositive = kpi.trend.startsWith("+")
                    const TrendIcon = isPositive ? TrendingUp : TrendingDown
                    return (
                      <AnimatedCard key={i} delay={800 + i * 50}>
                        <CardContent className="p-4">
                          <p className="text-xs text-muted-foreground mb-1">{kpi.label}</p>
                          <div className="flex items-end justify-between">
                            <p className="text-xl font-bold">{kpi.value}</p>
                            <span className={`flex items-center gap-0.5 text-[10px] font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                              <TrendIcon className="w-3 h-3" />
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
                    {activeProjects.slice(0, 3).map((project, i) => (
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
                  </div>
                  <button className="w-full mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors pb-1 border-b border-transparent hover:border-foreground mx-auto block text-center">
                    View all projects
                  </button>
                </CardContent>
              </AnimatedCard>
            </div>

            {/* 6. Team Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatedCard delay={1000}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Team Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={teamPerformance} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                        <XAxis type="number" stroke="#666" fontSize={11} tickLine={false} axisLine={false} />
                        <YAxis
                          type="category"
                          dataKey="name"
                          stroke="#666"
                          fontSize={11}
                          tickLine={false}
                          axisLine={false}
                          width={60}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1a1a2e",
                            border: "1px solid #333",
                            borderRadius: "8px",
                            fontSize: "12px",
                          }}
                        />
                        <Bar dataKey="tasks" fill="#333" radius={[0, 4, 4, 0]} name="Total Tasks" maxBarSize={20} />
                        <Bar dataKey="completed" fill="#60a5fa" radius={[0, 4, 4, 0]} name="Completed" maxBarSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </AnimatedCard>

              {/* Team Status Snapshot [REAL DATA] */}
              <AnimatedCard delay={1050} className="border-indigo-500/20 bg-gradient-to-br from-background to-indigo-500/5">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-500" />
                    Team Status Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center h-[200px] space-y-6 pt-0">
                  <div className="flex items-center justify-between px-2">
                    <div className="space-y-1 text-center">
                      <p className="text-3xl font-bold tracking-tight">{teamSnapshot.activeEmployees}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Members</p>
                    </div>
                    <div className="h-10 w-[1px] bg-border/50"></div>
                    <div className="space-y-1 text-center">
                      <p className="text-3xl font-bold tracking-tight text-amber-500">{teamSnapshot.onLeave}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">On Leave</p>
                    </div>
                    <div className="h-10 w-[1px] bg-border/50"></div>
                    <div className="space-y-1 text-center">
                      <p className="text-3xl font-bold tracking-tight text-green-500">{teamSnapshot.attendanceRate}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Present</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Progress value={parseInt(teamSnapshot.attendanceRate)} className="h-1.5" />
                    <p className="text-[10px] text-muted-foreground text-center">Live data from HR & Team module</p>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout >
  )
}
