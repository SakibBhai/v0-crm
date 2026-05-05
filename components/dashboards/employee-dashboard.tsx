"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckSquare, Clock, FolderKanban, LogIn, LogOut, Calendar, CheckCircle, AlertCircle } from "lucide-react"

export function EmployeeDashboard() {
  const myTasks = [
    { title: "Design homepage mockup", project: "E-commerce Redesign", priority: "high", due: "May 6", done: false },
    { title: "Review SEO audit report", project: "SEO Campaign Q2", priority: "medium", due: "May 7", done: false },
    { title: "Update brand guidelines", project: "Brand Identity Kit", priority: "low", due: "May 8", done: true },
    { title: "Client presentation prep", project: "E-commerce Redesign", priority: "high", due: "May 9", done: false },
  ]

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 via-primary/10 to-chart-2/20 border border-green-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="relative z-10">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-2"><CheckSquare className="w-3 h-3 mr-1" />Employee</Badge>
          <h1 className="text-2xl md:text-3xl font-bold">My Workspace 🎯</h1>
          <p className="text-muted-foreground mt-1">Your tasks, attendance, and project progress</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { label: "My Tasks", value: "4", icon: CheckSquare, color: "text-green-400", bg: "bg-green-500/20" },
              { label: "Due Today", value: "1", icon: Clock, color: "text-amber-400", bg: "bg-amber-500/20" },
              { label: "Projects", value: "2", icon: FolderKanban, color: "text-blue-400", bg: "bg-blue-500/20" },
              { label: "Completed", value: "1", icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-500/20" },
            ].map((s, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2"><div className={`p-2 rounded-lg ${s.bg}`}><s.icon className={`w-4 h-4 ${s.color}`} /></div><span className="text-xs text-muted-foreground">{s.label}</span></div>
                <p className="text-2xl font-bold mt-2">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clock In/Out */}
      <AnimatedCard delay={50} className="border-primary/20 bg-gradient-to-r from-primary/5 via-chart-2/5 to-chart-3/5">
        <CardContent className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/20"><Clock className="w-6 h-6 text-primary" /></div>
              <div><h3 className="font-semibold">Attendance Clock</h3><p className="text-xs text-muted-foreground">Office: 10:30 AM - 7:00 PM</p></div>
            </div>
            <Button className="gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-xl shadow-lg shadow-green-600/20"><LogIn className="w-4 h-4" />Clock In</Button>
          </div>
        </CardContent>
      </AnimatedCard>

      {/* Tasks */}
      <AnimatedCard delay={100}>
        <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><CheckSquare className="w-4 h-4 text-green-400" />My Tasks</CardTitle></CardHeader>
        <CardContent>
          <div className="divide-y divide-border/50">
            {myTasks.map((t, i) => (
              <div key={i} className="py-3 flex items-start gap-3">
                <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center ${t.done ? "bg-primary border-primary" : "border-muted-foreground/50"}`}>
                  {t.done && <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${t.done ? "line-through text-muted-foreground" : ""}`}>{t.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-[10px]">{t.project}</Badge>
                    <span className={`text-[10px] font-medium uppercase ${t.priority === "high" ? "text-red-400" : t.priority === "medium" ? "text-amber-400" : "text-blue-400"}`}>{t.priority}</span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-0.5"><Calendar className="w-3 h-3" />{t.due}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </AnimatedCard>
    </div>
  )
}
