"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, FolderKanban, CheckSquare, Clock, Target, Calendar } from "lucide-react"

export function ManagerDashboard() {
  const myTeam = [
    { name: "Emily Chen", role: "Designer", status: "present", tasks: 5 },
    { name: "James Wilson", role: "Developer", status: "present", tasks: 8 },
    { name: "Alex Rodriguez", role: "Marketer", status: "remote", tasks: 4 },
    { name: "Lisa Park", role: "Content Writer", status: "leave", tasks: 0 },
  ]
  const projects = [
    { name: "E-commerce Redesign", progress: 72, dueDate: "May 10", status: "on-track" },
    { name: "SEO Campaign Q2", progress: 45, dueDate: "May 15", status: "at-risk" },
    { name: "Brand Identity Kit", progress: 88, dueDate: "May 22", status: "on-track" },
  ]

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-primary/10 to-chart-3/20 border border-blue-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="relative z-10">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-2"><Target className="w-3 h-3 mr-1" />Manager</Badge>
          <h1 className="text-2xl md:text-3xl font-bold">Team Overview 👥</h1>
          <p className="text-muted-foreground mt-1">Your team's tasks, projects, and attendance at a glance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { label: "Team Members", value: "4", icon: Users, color: "text-blue-400", bg: "bg-blue-500/20" },
              { label: "Active Projects", value: "3", icon: FolderKanban, color: "text-purple-400", bg: "bg-purple-500/20" },
              { label: "Open Tasks", value: "17", icon: CheckSquare, color: "text-green-400", bg: "bg-green-500/20" },
              { label: "Due This Week", value: "5", icon: Clock, color: "text-amber-400", bg: "bg-amber-500/20" },
            ].map((s, i) => (
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
            {myTeam.map((m, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${m.status === "present" ? "bg-green-500" : m.status === "remote" ? "bg-blue-500" : "bg-amber-500"}`} />
                  <div><p className="text-sm font-medium">{m.name}</p><p className="text-xs text-muted-foreground">{m.role}</p></div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className={`text-[10px] ${m.status === "present" ? "bg-green-500/10 text-green-400" : m.status === "remote" ? "bg-blue-500/10 text-blue-400" : "bg-amber-500/10 text-amber-400"}`}>{m.status}</Badge>
                  {m.tasks > 0 && <p className="text-[10px] text-muted-foreground mt-1">{m.tasks} tasks</p>}
                </div>
              </div>
            ))}
          </CardContent>
        </AnimatedCard>
        <AnimatedCard delay={200}>
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><FolderKanban className="w-4 h-4 text-purple-400" />My Projects</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {projects.map((p, i) => (
              <div key={i} className="space-y-2 p-3 rounded-lg bg-secondary/50">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">{p.name}</p>
                  <Badge variant="secondary" className={`text-[10px] ${p.status === "at-risk" ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400"}`}>{p.status}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={p.progress} className="h-1.5 flex-1" />
                  <span className="text-xs text-muted-foreground">{p.progress}%</span>
                </div>
                <p className="text-[10px] text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />Due: {p.dueDate}</p>
              </div>
            ))}
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}
