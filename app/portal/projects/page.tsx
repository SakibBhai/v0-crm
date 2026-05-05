"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Briefcase, Calendar, CheckCircle, Clock } from "lucide-react"

const projects = [
  { name: "Website Redesign", description: "Complete overhaul of the company website", progress: 72, status: "in-progress", startDate: "Mar 1", dueDate: "May 10", milestones: [
    { name: "Wireframes", done: true }, { name: "Design", done: true }, { name: "Development", done: false }, { name: "Testing", done: false }
  ]},
  { name: "SEO Optimization", description: "Improve search engine rankings and organic traffic", progress: 45, status: "in-progress", startDate: "Apr 1", dueDate: "May 15", milestones: [
    { name: "Audit", done: true }, { name: "On-page SEO", done: false }, { name: "Link Building", done: false }, { name: "Report", done: false }
  ]},
]

export default function PortalProjectsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-2xl font-bold flex items-center gap-2"><Briefcase className="w-6 h-6 text-purple-400" />My Projects</h1>
          <p className="text-muted-foreground mt-1">Track the progress of all your active projects</p>
        </div>
        {projects.map((p, i) => (
          <AnimatedCard key={i} delay={i * 100}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <Badge className="bg-blue-500/10 text-blue-400 border-0">{p.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Progress value={p.progress} className="h-2.5 flex-1" />
                <span className="text-sm font-bold">{p.progress}%</span>
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Start: {p.startDate}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />Due: {p.dueDate}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {p.milestones.map((m, j) => (
                  <div key={j} className={`flex items-center gap-2 p-2 rounded-lg text-xs ${m.done ? "bg-green-500/10 text-green-400" : "bg-secondary text-muted-foreground"}`}>
                    <CheckCircle className={`w-3.5 h-3.5 ${m.done ? "text-green-400" : "text-muted-foreground/50"}`} />
                    {m.name}
                  </div>
                ))}
              </div>
            </CardContent>
          </AnimatedCard>
        ))}
      </div>
    </DashboardLayout>
  )
}
