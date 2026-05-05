"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingUp, Users, Target, Briefcase, BarChart3, Calendar, Zap } from "lucide-react"

export function ManagementDashboard() {
  const stats = [
    { label: "Total Revenue", value: "৳342K", change: "+15.3%", icon: DollarSign, color: "text-green-400", bg: "bg-green-500/20" },
    { label: "Active Deals", value: "24", change: "+4 this week", icon: Target, color: "text-blue-400", bg: "bg-blue-500/20" },
    { label: "Team Members", value: "18", change: "2 on leave", icon: Users, color: "text-purple-400", bg: "bg-purple-500/20" },
    { label: "Conversion", value: "31.8%", change: "+2.3%", icon: TrendingUp, color: "text-amber-400", bg: "bg-amber-500/20" },
  ]
  const pipeline = [
    { stage: "New Leads", value: "৳45,000", count: 12, color: "bg-slate-500" },
    { stage: "Qualified", value: "৳125,000", count: 8, color: "bg-blue-500" },
    { stage: "Proposal Sent", value: "৳280,000", count: 5, color: "bg-purple-500" },
    { stage: "Negotiation", value: "৳180,000", count: 3, color: "bg-amber-500" },
    { stage: "Closed Won", value: "৳95,000", count: 2, color: "bg-green-500" },
  ]
  const teams = [
    { name: "Design Team", tasks: 24, completed: 20, lead: "Sarah M." },
    { name: "Development", tasks: 32, completed: 28, lead: "James W." },
    { name: "Marketing", tasks: 18, completed: 15, lead: "Emily C." },
    { name: "Content", tasks: 21, completed: 19, lead: "Alex R." },
  ]

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
            {pipeline.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${s.color}`} />
                <div className="flex-1">
                  <div className="flex justify-between text-sm"><span className="font-medium">{s.stage}</span><span className="text-muted-foreground">{s.value}</span></div>
                  <div className="flex items-center gap-2 mt-1"><Progress value={(s.count / 12) * 100} className="h-1.5 flex-1" /><span className="text-xs text-muted-foreground">{s.count} deals</span></div>
                </div>
              </div>
            ))}
          </CardContent>
        </AnimatedCard>
        <AnimatedCard delay={200}>
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><Users className="w-4 h-4 text-blue-400" />Team Performance</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {teams.map((t, i) => (
              <div key={i} className="p-3 rounded-lg bg-secondary/50 space-y-2">
                <div className="flex justify-between items-center"><div><p className="text-sm font-medium">{t.name}</p><p className="text-xs text-muted-foreground">Lead: {t.lead}</p></div><Badge variant="secondary" className="text-xs">{t.completed}/{t.tasks}</Badge></div>
                <Progress value={(t.completed / t.tasks) * 100} className="h-1.5" />
              </div>
            ))}
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}
