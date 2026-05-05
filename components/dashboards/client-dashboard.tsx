"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Briefcase, FileText, MessageSquare, Calendar, CheckCircle, Clock, DollarSign } from "lucide-react"

export function ClientDashboard() {
  const projects = [
    { name: "Website Redesign", progress: 72, status: "in-progress", nextMilestone: "Design Review - May 10" },
    { name: "SEO Optimization", progress: 45, status: "in-progress", nextMilestone: "Audit Report - May 15" },
  ]
  const invoices = [
    { id: "INV-2024-001", amount: "৳15,000", status: "paid", date: "Apr 15" },
    { id: "INV-2024-002", amount: "৳8,500", status: "pending", date: "May 1" },
    { id: "INV-2024-003", amount: "৳22,000", status: "draft", date: "May 5" },
  ]

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 via-primary/10 to-chart-3/20 border border-purple-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="relative z-10">
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-2"><Briefcase className="w-3 h-3 mr-1" />Client Portal</Badge>
          <h1 className="text-2xl md:text-3xl font-bold">Welcome Back! 👋</h1>
          <p className="text-muted-foreground mt-1">Track your projects, invoices, and communicate with our team</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { label: "Active Projects", value: "2", icon: Briefcase, color: "text-purple-400", bg: "bg-purple-500/20" },
              { label: "Pending Invoices", value: "1", icon: FileText, color: "text-amber-400", bg: "bg-amber-500/20" },
              { label: "Messages", value: "3", icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-500/20" },
              { label: "Next Milestone", value: "May 10", icon: Calendar, color: "text-green-400", bg: "bg-green-500/20" },
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
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><Briefcase className="w-4 h-4 text-purple-400" />Your Projects</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {projects.map((p, i) => (
              <div key={i} className="space-y-3 p-4 rounded-lg bg-secondary/50">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold">{p.name}</p>
                  <Badge variant="secondary" className="text-[10px] bg-blue-500/10 text-blue-400">{p.status}</Badge>
                </div>
                <div className="flex items-center gap-2"><Progress value={p.progress} className="h-2 flex-1" /><span className="text-sm font-bold">{p.progress}%</span></div>
                <p className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />Next: {p.nextMilestone}</p>
              </div>
            ))}
          </CardContent>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><DollarSign className="w-4 h-4 text-amber-400" />Invoices</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {invoices.map((inv, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div>
                  <p className="text-sm font-medium">{inv.id}</p>
                  <p className="text-xs text-muted-foreground">{inv.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{inv.amount}</p>
                  <Badge variant="secondary" className={`text-[10px] ${inv.status === "paid" ? "bg-green-500/10 text-green-400" : inv.status === "pending" ? "bg-amber-500/10 text-amber-400" : "bg-slate-500/10 text-slate-400"}`}>{inv.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}
