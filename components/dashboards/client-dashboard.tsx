"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Briefcase, FileText, MessageSquare, Calendar, DollarSign } from "lucide-react"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { getClientDashboardData } from "@/app/actions/dashboard"

type ClientData = {
  activeProjectCount: number
  pendingInvoiceCount: number
  nextMilestone: string
  projectList: { name: string; progress: number; status: string; nextMilestone: string }[]
  invoiceList: { id: string; amount: string; status: string; date: string }[]
  clientName: string
}

export function ClientDashboard() {
  const { data: session } = useSession()
  const [data, setData] = useState<ClientData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const clientId = (session?.user as any)?.clientId || ""
    getClientDashboardData(clientId).then(res => {
      if (!("error" in res)) setData(res as ClientData)
      setLoading(false)
    })
  }, [session])

  if (loading) return <div className="space-y-6 animate-pulse"><div className="rounded-2xl bg-muted/30 p-8 h-52" /></div>

  const heroStats = data ? [
    { label: "Active Projects", value: String(data.activeProjectCount), icon: Briefcase, color: "text-purple-400", bg: "bg-purple-500/20" },
    { label: "Pending Invoices", value: String(data.pendingInvoiceCount), icon: FileText, color: "text-amber-400", bg: "bg-amber-500/20" },
    { label: "Messages", value: "0", icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-500/20" },
    { label: "Next Milestone", value: data.nextMilestone, icon: Calendar, color: "text-green-400", bg: "bg-green-500/20" },
  ] : []

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 via-primary/10 to-chart-3/20 border border-purple-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="relative z-10">
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-2"><Briefcase className="w-3 h-3 mr-1" />Client Portal</Badge>
          <h1 className="text-2xl md:text-3xl font-bold">Welcome Back{data?.clientName ? `, ${data.clientName}` : ""}! 👋</h1>
          <p className="text-muted-foreground mt-1">Track your projects, invoices, and communicate with our team</p>
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
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><Briefcase className="w-4 h-4 text-purple-400" />Your Projects</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {(data?.projectList || []).map((p, i) => (
              <div key={i} className="space-y-3 p-4 rounded-lg bg-secondary/50">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold">{p.name}</p>
                  <Badge variant="secondary" className="text-[10px] bg-blue-500/10 text-blue-400">{p.status}</Badge>
                </div>
                <div className="flex items-center gap-2"><Progress value={p.progress} className="h-2 flex-1" /><span className="text-sm font-bold">{p.progress}%</span></div>
                <p className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />Next: {p.nextMilestone}</p>
              </div>
            ))}
            {(data?.projectList || []).length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No active projects</p>}
          </CardContent>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <CardHeader className="pb-3"><CardTitle className="text-base font-semibold flex items-center gap-2"><DollarSign className="w-4 h-4 text-amber-400" />Invoices</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {(data?.invoiceList || []).map((inv, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div><p className="text-sm font-medium">{inv.id}</p><p className="text-xs text-muted-foreground">{inv.date}</p></div>
                <div className="text-right">
                  <p className="text-sm font-bold">{inv.amount}</p>
                  <Badge variant="secondary" className={`text-[10px] ${inv.status === "paid" ? "bg-green-500/10 text-green-400" : inv.status === "pending" || inv.status === "sent" ? "bg-amber-500/10 text-amber-400" : "bg-slate-500/10 text-slate-400"}`}>{inv.status}</Badge>
                </div>
              </div>
            ))}
            {(data?.invoiceList || []).length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No invoices found</p>}
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  )
}
