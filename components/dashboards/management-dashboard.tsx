"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Briefcase,
  BarChart3,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  TrendingDown,
  Activity,
  CheckSquare,
  Clock,
  Zap
} from "lucide-react"
import { useEffect, useState } from "react"
import { getManagementDashboardData, getDashboardStats } from "@/app/actions/dashboard"
import { AttendanceClock } from "@/components/dashboard/attendance-clock"
import { toast } from "sonner"

type MData = {
  totalRevenue: number
  activeDeals: number
  teamMembers: number
  onLeave: number
  conversionRate: number
  pipeline: { stage: string; value: string; count: number; color: string; maxCount: number }[]
  teams: { name: string; tasks: number; completed: number; lead: string }[]
}

type GlobalStats = {
  finance: {
    totalRevenue: number
    totalExpenses: number
    paidInvoiceValue: number
    pendingInvoiceValue: number
    overdueInvoiceValue: number
    mrrValue: number
  }
}

export function ManagementDashboard() {
  const [data, setData] = useState<MData | null>(null)
  const [globalStats, setGlobalStats] = useState<GlobalStats | null>(null)
  const [loading, setLoading] = useState(true)

  // Strategic priorities state (loaded from local storage)
  const [priorities, setPriorities] = useState<{ id: number; text: string; done: boolean }[]>([
    { id: 1, text: "Increase monthly recurring revenue (MRR) by 15%", done: false },
    { id: 2, text: "Optimize lead pipeline conversion rate above 8%", done: false },
    { id: 3, text: "Expand development team headcount (hire 2 senior React devs)", done: false },
    { id: 4, text: "Complete Q3 project audits and milestones review", done: false }
  ])

  useEffect(() => {
    async function load() {
      try {
        const [mRes, gRes] = await Promise.all([
          getManagementDashboardData(),
          getDashboardStats()
        ])

        if (!("error" in mRes)) setData(mRes as MData)
        if (gRes && !("error" in gRes)) setGlobalStats(gRes as GlobalStats)
        
        // Load priorities
        if (typeof window !== "undefined") {
          const saved = localStorage.getItem("mgmt_priorities")
          if (saved) {
            setPriorities(JSON.parse(saved))
          }
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const handleTogglePriority = (id: number) => {
    const updated = priorities.map(p => p.id === id ? { ...p, done: !p.done } : p)
    setPriorities(updated)
    localStorage.setItem("mgmt_priorities", JSON.stringify(updated))
    toast.success("Strategic priorities updated!")
  }

  const fmt = (v: number) => v >= 1e6 ? `৳${(v/1e6).toFixed(1)}M` : v >= 1e3 ? `৳${(v/1e3).toFixed(0)}K` : `৳${v}`

  if (loading) return <div className="space-y-6 animate-pulse"><div className="rounded-2xl bg-muted/30 p-8 h-52" /></div>

  // Financial values
  const rev = globalStats?.finance.totalRevenue || 0
  const exp = globalStats?.finance.totalExpenses || 0
  const cashflow = rev - exp
  const expenseRatio = rev > 0 ? Math.round((exp / rev) * 100) : 0

  const stats = data ? [
    { label: "Total Revenue", value: fmt(data.totalRevenue), change: "All time cashflow", icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Active Pipeline Deals", value: String(data.activeDeals), change: "In negotiation/pitching", icon: Target, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Staff Strength", value: String(data.teamMembers), change: `${data.onLeave} on leave today`, icon: Users, color: "text-purple-400", bg: "bg-purple-500/10" },
    { label: "Conversion Rate", value: `${data.conversionRate}%`, change: "Closing efficiency", icon: TrendingUp, color: "text-amber-400", bg: "bg-amber-500/10" },
  ] : []

  return (
    <div className="space-y-6">
      {/* Management Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/20 via-primary/10 to-emerald-500/10 border border-amber-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-2 py-0.5">
              <Briefcase className="w-3 h-3 mr-1" />
              Management Dashboard
            </Badge>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              Business Health Console 📊
            </h1>
            <p className="text-muted-foreground text-sm max-w-xl">
              Track macro revenue trends, pipeline values, and monitor department-level operational milestones.
            </p>
          </div>
        </div>

        {/* Quick metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 transition-all hover:scale-[1.02] hover:border-amber-500/20">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${s.bg}`}>
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                </div>
                <span className="text-xs text-muted-foreground font-semibold">{s.label}</span>
              </div>
              <p className="text-2xl font-black mt-2 text-foreground">{s.value}</p>
              <p className="text-[10px] text-muted-foreground mt-1 font-medium">{s.change}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Attendance Clock Widget */}
      <AttendanceClock themeColor="amber" />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Revenue & Pipelines (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* MTD Cashflow visual widget */}
          <AnimatedCard delay={100} className="border-amber-500/10">
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-500" />
                Month-to-Date Cashflow
              </CardTitle>
              <Badge className={cashflow >= 0 ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"}>
                {cashflow >= 0 ? "Net Profit" : "Net Deficit"}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 pt-1">
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground font-bold flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
                    Income
                  </p>
                  <p className="text-lg font-extrabold text-foreground">{fmt(rev)}</p>
                </div>
                <div className="space-y-1 border-l border-border/50 pl-4">
                  <p className="text-[10px] text-muted-foreground font-bold flex items-center gap-1">
                    <ArrowDownRight className="w-3.5 h-3.5 text-rose-500" />
                    Expenses
                  </p>
                  <p className="text-lg font-extrabold text-foreground">{fmt(exp)}</p>
                </div>
                <div className="space-y-1 border-l border-border/50 pl-4">
                  <p className="text-[10px] text-muted-foreground font-bold flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-amber-500" />
                    Net Balance
                  </p>
                  <p className={`text-lg font-black ${cashflow >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {fmt(Math.abs(cashflow))}
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-muted-foreground">Expense Absorption Ratio</span>
                  <span className={expenseRatio > 80 ? "text-rose-500 font-bold" : "text-emerald-500 font-bold"}>
                    {expenseRatio}% of income spent
                  </span>
                </div>
                <Progress value={Math.min(expenseRatio, 100)} className={`h-1.5 ${expenseRatio > 80 ? "bg-rose-500/20" : "bg-emerald-500/20"}`} />
              </div>
            </CardContent>
          </AnimatedCard>

          {/* Revenue pipeline list */}
          <AnimatedCard delay={150} className="border-amber-500/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                Lead Pipeline Stages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3.5">
              {(data?.pipeline || []).map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${s.color}`} />
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>{s.stage}</span>
                      <span className="text-muted-foreground">{s.value}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <Progress value={s.maxCount > 0 ? (s.count / s.maxCount) * 100 : 0} className="h-1.5 flex-1 bg-secondary" />
                      <span className="text-[10px] font-bold text-muted-foreground min-w-[45px] text-right">{s.count} deals</span>
                    </div>
                  </div>
                </div>
              ))}
              {(data?.pipeline || []).length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">No active pipeline data</p>
              )}
            </CardContent>
          </AnimatedCard>

        </div>

        {/* Right Side: Teams & Priorities (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Strategic Priorities Checklist */}
          <AnimatedCard delay={200} className="border-amber-500/10">
            <CardHeader className="pb-3 border-b border-border/40">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                Strategic OKRs & Priorities
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3 space-y-3">
              {priorities.map(p => (
                <div key={p.id} className="flex items-start gap-3 p-2.5 rounded-xl bg-secondary/40 border border-border/40 hover:bg-secondary/60 transition-colors">
                  <button
                    onClick={() => handleTogglePriority(p.id)}
                    className={`mt-0.5 w-4.5 h-4.5 rounded border flex items-center justify-center transition-all ${
                      p.done
                        ? "bg-amber-600 border-amber-600 text-white"
                        : "border-muted-foreground/50 hover:border-amber-600 bg-card"
                    }`}
                  >
                    {p.done && <CheckSquare className="w-3.5 h-3.5 text-white" />}
                  </button>
                  <p className={`text-xs font-medium leading-normal ${p.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                    {p.text}
                  </p>
                </div>
              ))}
            </CardContent>
          </AnimatedCard>

          {/* Department Performance */}
          <AnimatedCard delay={250}>
            <CardHeader className="pb-3 border-b border-border/40">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                Department Task Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3 space-y-3.5">
              {(data?.teams || []).map((t, i) => (
                <div key={i} className="p-3 rounded-xl bg-secondary/40 border border-border/40 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold text-foreground capitalize">{t.name}</p>
                      <p className="text-[9px] text-muted-foreground font-semibold">Lead: {t.lead}</p>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-bold">
                      {t.completed}/{t.tasks} done
                    </Badge>
                  </div>
                  <Progress value={t.tasks > 0 ? (t.completed / t.tasks) * 100 : 0} className="h-1.5 bg-secondary" />
                </div>
              ))}
              {(data?.teams || []).length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">No department metrics available</p>
              )}
            </CardContent>
          </AnimatedCard>

        </div>

      </div>
    </div>
  )
}
