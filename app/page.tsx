"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/stat-card"
import { AnimatedCard } from "@/components/animated-card"
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
  { name: "Completed", value: 12, color: "#4ade80" },
  { name: "In Progress", value: 8, color: "#60a5fa" },
  { name: "On Hold", value: 3, color: "#fbbf24" },
  { name: "Planning", value: 5, color: "#a78bfa" },
]

const recentLeads = [
  { name: "Sarah Mitchell", company: "TechStart Inc", status: "Hot", value: "$15,000", avatar: "SM" },
  { name: "James Wilson", company: "GrowthCo", status: "Warm", value: "$8,500", avatar: "JW" },
  { name: "Emily Chen", company: "InnovateLab", status: "Hot", value: "$22,000", avatar: "EC" },
  { name: "Michael Brown", company: "ScaleUp Ltd", status: "Cold", value: "$5,000", avatar: "MB" },
]

const activeProjects = [
  { name: "E-commerce Redesign", client: "TechMart", progress: 75, dueDate: "Dec 28" },
  { name: "SEO Campaign", client: "GreenLife", progress: 45, dueDate: "Jan 5" },
  { name: "Social Media Strategy", client: "FoodieHub", progress: 90, dueDate: "Dec 22" },
  { name: "PPC Management", client: "AutoDeal", progress: 30, dueDate: "Jan 15" },
]

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
  {
    id: 1,
    type: "lead",
    action: "New Lead Added",
    detail: "Sarah Mitchell from TechStart Inc",
    time: "2 hours ago",
    icon: Users,
  },
  {
    id: 2,
    type: "project",
    action: "Project Completed",
    detail: "E-commerce Redesign for TechMart",
    time: "5 hours ago",
    icon: CheckCircle,
  },
  {
    id: 3,
    type: "task",
    action: "Task Created",
    detail: "SEO Optimization for GreenLife",
    time: "1 day ago",
    icon: Target,
  },
  {
    id: 4,
    type: "meeting",
    action: "Client Meeting",
    detail: "Strategy discussion with AutoDeal",
    time: "1 day ago",
    icon: Calendar,
  },
  {
    id: 5,
    type: "alert",
    action: "Overdue Invoice",
    detail: "Invoice #2024-001 - $5,200",
    time: "2 days ago",
    icon: AlertCircle,
  },
]

const calendarEvents = [
  { date: 24, events: ["Client Call", "Team Review"], count: 2 },
  { date: 25, events: ["Project Kickoff"], count: 1 },
  { date: 26, events: [], count: 0 },
  { date: 27, events: ["Proposal Deadline"], count: 1 },
  { date: 28, events: ["Performance Review"], count: 1 },
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

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState(24)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's your agency performance overview.</p>
        </div>

        {/* Quick Action Shortcuts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 animate-in fade-in duration-500">
          {quickActions.map((action, i) => (
            <button
              key={i}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-secondary/50 hover:border-primary/50 transition-all hover:scale-105 ${action.color}`}
            >
              <action.icon className="w-5 h-5" />
              <span className="text-xs font-medium text-center">{action.label}</span>
            </button>
          ))}
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Leads" value="1,284" change={12.5} icon={Users} delay={0} iconColor="text-chart-1" />
          <StatCard
            title="Active Clients"
            value="86"
            change={8.2}
            icon={UserCheck}
            delay={100}
            iconColor="text-chart-2"
          />
          <StatCard
            title="Projects"
            value="28"
            change={-3.1}
            icon={FolderKanban}
            delay={200}
            iconColor="text-chart-3"
          />
          <StatCard
            title="Revenue"
            value="$342K"
            change={15.3}
            icon={DollarSign}
            delay={300}
            iconColor="text-chart-4"
          />
        </div>

        {/* Advanced KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => (
            <AnimatedCard key={i} delay={400 + i * 100}>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{kpi.label}</p>
                  <div className="flex items-end justify-between">
                    <div className="text-2xl font-bold">{kpi.value}</div>
                    <span className={`text-xs font-medium ${kpi.color}`}>{kpi.trend}</span>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Revenue vs Target */}
          <AnimatedCard className="lg:col-span-2" delay={800}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Revenue vs Target</CardTitle>
              <Badge variant="secondary" className="text-xs">
                7 months
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={monthlyTargetData}>
                    <defs>
                      <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="month" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                      stroke="#666"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `$${v / 1000}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a2e",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                      formatter={(value: number) => `$${value.toLocaleString()}`}
                    />
                    <Bar dataKey="target" fill="#666" opacity={0.3} name="Target" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="actual" fill="#60a5fa" name="Actual Revenue" radius={[4, 4, 0, 0]} />
                    <Area
                      type="monotone"
                      dataKey="profit"
                      fill="url(#profitGradient)"
                      stroke="#10b981"
                      strokeWidth={2}
                      name="Profit"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </AnimatedCard>

          {/* Client Source */}
          <AnimatedCard delay={900}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Client Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={clientSourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {clientSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a2e",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-3">
                {clientSourceData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </AnimatedCard>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Conversion Funnel */}
          <AnimatedCard delay={1000}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Conversion Funnel</CardTitle>
              <Badge variant="secondary" className="text-xs">
                7 weeks
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="week" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a2e",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                    <Bar dataKey="leads" fill="#94a3b8" name="Total Leads" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="qualified" fill="#60a5fa" name="Qualified" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="converted" fill="#4ade80" name="Converted" radius={[4, 4, 0, 0]} />
                    <Line type="monotone" dataKey="rate" stroke="#f97316" strokeWidth={2} name="Conv. Rate %" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </AnimatedCard>

          {/* Project Status */}
          <AnimatedCard delay={1100}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Project Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {projectStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1a1a2e",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                {projectStatusData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground truncate">{item.name}</span>
                    <span className="font-medium ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </AnimatedCard>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Calendar Widget */}
          <AnimatedCard delay={1200}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-3">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                    <div key={day} className="font-semibold text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 28 }).map((_, i) => {
                    const date = i + 1
                    const hasEvent = calendarEvents.some((e) => e.date === date)
                    return (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`py-1.5 rounded text-xs font-medium transition-colors ${
                          selectedDate === date
                            ? "bg-primary text-primary-foreground"
                            : hasEvent
                              ? "bg-secondary text-foreground border border-primary/50"
                              : "text-muted-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {date}
                      </button>
                    )
                  })}
                </div>
                <div className="border-t border-secondary pt-3 space-y-2">
                  {calendarEvents.find((e) => e.date === selectedDate)?.events.length > 0 ? (
                    calendarEvents
                      .find((e) => e.date === selectedDate)
                      ?.events.map((event, i) => (
                        <div key={i} className="text-xs p-2 bg-secondary/50 rounded border-l-2 border-primary">
                          {event}
                        </div>
                      ))
                  ) : (
                    <p className="text-xs text-muted-foreground text-center py-2">No events</p>
                  )}
                </div>
              </div>
            </CardContent>
          </AnimatedCard>

          {/* Recent Activities */}
          <AnimatedCard delay={1300} className="lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-base font-medium">Recent Activities</CardTitle>
              <button className="text-xs text-primary hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {recentActivities.map((activity, i) => {
                  const Icon = activity.icon
                  const typeColors = {
                    lead: "bg-blue-500/20 text-blue-400",
                    project: "bg-green-500/20 text-green-400",
                    task: "bg-purple-500/20 text-purple-400",
                    meeting: "bg-amber-500/20 text-amber-400",
                    alert: "bg-red-500/20 text-red-400",
                  }
                  return (
                    <div key={i} className="flex gap-3 pb-3 border-b border-secondary/50 last:border-0 last:pb-0">
                      <div className={`p-2 rounded-lg ${typeColors[activity.type]}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground truncate">{activity.detail}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </AnimatedCard>

          {/* Recent Leads */}
          <AnimatedCard delay={1400}>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-base font-medium">Recent Leads</CardTitle>
              <button className="text-xs text-primary hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </button>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentLeads.map((lead, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <Avatar className="w-9 h-9">
                    <AvatarFallback className="bg-primary/20 text-primary text-xs">{lead.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{lead.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{lead.company}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="secondary"
                      className={
                        lead.status === "Hot"
                          ? "bg-destructive/20 text-destructive border-0"
                          : lead.status === "Warm"
                            ? "bg-warning/20 text-warning border-0"
                            : "bg-muted text-muted-foreground border-0"
                      }
                    >
                      {lead.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{lead.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </AnimatedCard>

          {/* Active Projects */}
          <AnimatedCard delay={1500}>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-base font-medium">Active Projects</CardTitle>
              <button className="p-1 rounded hover:bg-secondary transition-colors">
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeProjects.map((project, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{project.name}</p>
                      <p className="text-xs text-muted-foreground">{project.client}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{project.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={project.progress} className="h-1.5 flex-1" />
                    <span className="text-xs font-medium w-8">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </AnimatedCard>

          {/* Team Performance */}
          <AnimatedCard delay={1600}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={teamPerformance} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                    <XAxis type="number" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      stroke="#666"
                      fontSize={12}
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
                    <Bar dataKey="tasks" fill="#333" radius={[0, 4, 4, 0]} name="Total Tasks" />
                    <Bar dataKey="completed" fill="#60a5fa" radius={[0, 4, 4, 0]} name="Completed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </AnimatedCard>
        </div>
      </div>
    </DashboardLayout>
  )
}
