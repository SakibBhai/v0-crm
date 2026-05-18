"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingUp, Users, Target, Briefcase, BarChart3 } from "lucide-react"
import { useEffect, useState } from "react"
import { getManagementDashboardData } from "@/app/actions/dashboard"

type MData = {
  totalRevenue: number
  activeDeals: number
  teamMembers: number
  onLeave: number
  conversionRate: number
  pipeline: { stage: string; value: string; count: number; color: string; maxCount: number }[]
  teams: { name: string; tasks: number; completed: number; lead: string }[]
}

export function ManagementDashboard() {
  const [data, setData] = useState<MData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getManagementDashboardData().then(res => {
      if (!("error" in res)) setData(res as MData)
      setLoading(false)
    })
  }, [])

  const fmt = (v: number) => v >= 1e6 ? `৳${(v/1e6).toFixed(1)}M` : v >= 1e3 ? `৳${(v/1e3).toFixed(0)}K` : `৳${v}`

  if (loading) return <div className="space-y-6 animate-pulse"><div className="rounded-2xl bg-muted/30 p-8 h-52" /></div>

  const stats = data ? [
    { label: "Total Revenue", value: fmt(data.totalRevenue), change: "All time", icon: DollarSign, color: "text-green-400", bg: "bg-green-500/20" },
    { label: "Active Deals", value: String(data.activeDeals), change: "Open leads", icon: Target, color: "text-blue-400", bg: "bg-blue-500/20" },
    { label: "Team Members", value: String(data.teamMembers), change: `${data.onLeave} on leave`, icon: Users, color: "text-purple-400", bg: "bg-purple-500/20" },
    { label: "Conversion", value: `${data.conversionRate}%`, change: "Lead → Won", icon: TrendingUp, color: "text-amber-400", bg: "bg-amber-500/20" },
  ] : []

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/20 via-primary/10 to-chart-2/20 border border-amber-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="relative z-10">
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-2"><Briefcase className="w-3 h-3 mr-1" />Management</Badge>
          <h1 className="text-2xl md:text-3xl font-bold">Business Overview 📊</h1>
          <p className="text-muted-foreground mt-1">Revenue, pipeline health, and team performance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2"><div className={`p-2 rounded-lg ${s.bg}`}><s.icon className={`w-4 h-4 ${s.color}`} /></div><span className="text-xs text-muted-foreground">{s.label}</span></div>
                <p className="text-2xl font-bold mt-2">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.change}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedCard delay={100} className="border-amber-500/20">
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><BarChart3 className="w-4 h-4 text-amber-400" />Revenue Pipeline</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {(data?.pipeline || []).map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${s.color}`} />
                <div className="flex-1">
                  <div className="flex justify-between text-sm"><span className="font-medium">{s.stage}</span><span className="text-muted-foreground">{s.value}</span></div>
                  <div className="flex items-center gap-2 mt-1"><Progress value={s.maxCount > 0 ? (s.count / s.maxCount) * 100 : 0} className="h-1.5 flex-1" /><span className="text-xs text-muted-foreground">{s.count} deals</span></div>
                </div>
              </div>
            ))}
            {(data?.pipeline || []).length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No lead data available</p>}
          </CardContent>
        </AnimatedCard>
        <AnimatedCard delay={200}>
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><Users className="w-4 h-4 text-blue-400" />Team Performance</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {(data?.teams || []).map((t, i) => (
              <div key={i} className="p-3 rounded-lg bg-secondary/50 space-y-2">
                <div className="flex justify-between items-center"><div><p className="text-sm font-medium">{t.name}</p><p className="text-xs text-muted-foreground">Lead: {t.lead}</p></div><Badge variant="secondary" className="text-xs">{t.completed}/{t.tasks}</Badge></div>
                <Progress value={t.tasks > 0 ? (t.completed / t.tasks) * 100 : 0} className="h-1.5" />
              </div>
            ))}
            {(data?.teams || []).length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No team data available</p>}
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}
