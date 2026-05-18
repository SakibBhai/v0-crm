"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, FolderKanban, CheckSquare, Clock, Target, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { getManagerDashboardData } from "@/app/actions/dashboard"

type ManagerData = {
  teamCount: number
  activeProjectCount: number
  openTasks: number
  dueThisWeek: number
  myTeam: { name: string; role: string; status: string; tasks: number }[]
  activeProjects: { name: string; progress: number; dueDate: string; status: string }[]
}

export function ManagerDashboard() {
  const [data, setData] = useState<ManagerData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getManagerDashboardData().then(res => {
      if (!("error" in res)) setData(res as ManagerData)
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="space-y-6 animate-pulse"><div className="rounded-2xl bg-muted/30 p-8 h-52" /></div>

  const heroStats = data ? [
    { label: "Team Members", value: String(data.teamCount), icon: Users, color: "text-blue-400", bg: "bg-blue-500/20" },
    { label: "Active Projects", value: String(data.activeProjectCount), icon: FolderKanban, color: "text-purple-400", bg: "bg-purple-500/20" },
    { label: "Open Tasks", value: String(data.openTasks), icon: CheckSquare, color: "text-green-400", bg: "bg-green-500/20" },
    { label: "Due This Week", value: String(data.dueThisWeek), icon: Clock, color: "text-amber-400", bg: "bg-amber-500/20" },
  ] : []

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-primary/10 to-chart-3/20 border border-blue-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="relative z-10">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-2"><Target className="w-3 h-3 mr-1" />Manager</Badge>
          <h1 className="text-2xl md:text-3xl font-bold">Team Overview 👥</h1>
          <p className="text-muted-foreground mt-1">Your team's tasks, projects, and attendance at a glance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {heroStats.map((s, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2"><div className={`p-2 rounded-lg ${s.bg}`}><s.icon className={`w-4 h-4 ${s.color}`} /></div><span className="text-xs text-muted-foreground">{s.label}</span></div>
                <p className="text-2xl font-bold mt-2">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedCard delay={100}>
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><Users className="w-4 h-4 text-blue-400" />My Team</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {(data?.myTeam || []).map((m, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${m.status === "present" ? "bg-green-500" : m.status === "remote" ? "bg-blue-500" : m.status === "late" ? "bg-amber-500" : "bg-slate-500"}`} />
                  <div><p className="text-sm font-medium">{m.name}</p><p className="text-xs text-muted-foreground">{m.role}</p></div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className={`text-[10px] ${m.status === "present" ? "bg-green-500/10 text-green-400" : m.status === "remote" ? "bg-blue-500/10 text-blue-400" : m.status === "late" ? "bg-amber-500/10 text-amber-400" : "bg-slate-500/10 text-slate-400"}`}>{m.status}</Badge>
                  {m.tasks > 0 && <p className="text-[10px] text-muted-foreground mt-1">{m.tasks} tasks</p>}
                </div>
              </div>
            ))}
            {(data?.myTeam || []).length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No team members found</p>}
          </CardContent>
        </AnimatedCard>
        <AnimatedCard delay={200}>
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><FolderKanban className="w-4 h-4 text-purple-400" />Active Projects</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {(data?.activeProjects || []).map((p, i) => (
              <div key={i} className="space-y-2 p-3 rounded-lg bg-secondary/50">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">{p.name}</p>
                  <Badge variant="secondary" className={`text-[10px] ${p.status === "at-risk" ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400"}`}>{p.status}</Badge>
                </div>
                <div className="flex items-center gap-2"><Progress value={p.progress} className="h-1.5 flex-1" /><span className="text-xs text-muted-foreground">{p.progress}%</span></div>
                <p className="text-[10px] text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />Due: {p.dueDate}</p>
              </div>
            ))}
            {(data?.activeProjects || []).length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No active projects</p>}
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}
