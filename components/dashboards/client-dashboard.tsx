"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  FileText,
  MessageSquare,
  Calendar,
  DollarSign,
  CheckCircle2,
  Clock,
  Sparkles,
  ThumbsUp,
  MessageCircle,
  AlertCircle,
  HelpCircle
} from "lucide-react"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { getClientDashboardData } from "@/app/actions/dashboard"
import { AttendanceClock } from "@/components/dashboard/attendance-clock"
import { toast } from "sonner"

type ProjectItem = {
  name: string
  progress: number
  status: string
  nextMilestone: string
}

type InvoiceItem = {
  id: string
  amount: string
  status: string
  date: string
}

type ClientData = {
  activeProjectCount: number
  pendingInvoiceCount: number
  nextMilestone: string
  projectList: ProjectItem[]
  invoiceList: InvoiceItem[]
  clientName: string
}

export function ClientDashboard() {
  const { data: session } = useSession()
  const [data, setData] = useState<ClientData | null>(null)
  const [loading, setLoading] = useState(true)

  // Client approvals checklist (persisted in local storage)
  const [deliverables, setDeliverables] = useState<{ id: number; title: string; project: string; status: "pending" | "approved" | "changes" }[]>([
    { id: 1, title: "UI/UX Figma Design System", project: "CRM Revamp", status: "pending" },
    { id: 2, title: "Database Schema Draft", project: "Prisma Migrate", status: "approved" },
    { id: 3, title: "Stripe API Billing Gateway Config", project: "Finance Portal", status: "pending" }
  ])

  useEffect(() => {
    const clientId = (session?.user as any)?.clientId || ""
    
    async function load() {
      try {
        const res = await getClientDashboardData(clientId)
        if (!("error" in res)) setData(res as ClientData)
        
        // Load approvals
        if (typeof window !== "undefined") {
          const saved = localStorage.getItem("client_deliverables")
          if (saved) {
            setDeliverables(JSON.parse(saved))
          }
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [session])

  const handleUpdateStatus = (id: number, status: "approved" | "changes") => {
    const updated = deliverables.map(d => d.id === id ? { ...d, status } : d)
    setDeliverables(updated)
    localStorage.setItem("client_deliverables", JSON.stringify(updated))
    if (status === "approved") {
      toast.success("Deliverable approved! Team has been notified. 👍")
    } else {
      toast.warning("Revision request submitted! Assigned PM is reviewing details.")
    }
  }

  if (loading) return <div className="space-y-6 animate-pulse"><div className="rounded-2xl bg-muted/30 p-8 h-52" /></div>

  const heroStats = data ? [
    { label: "Active Projects", value: String(data.activeProjectCount), icon: Briefcase, color: "text-purple-400", bg: "bg-purple-500/10" },
    { label: "Pending Invoices", value: String(data.pendingInvoiceCount), icon: FileText, color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Unread Messages", value: "2", icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Next Milestone", value: data.nextMilestone, icon: Calendar, color: "text-green-400", bg: "bg-green-500/10" },
  ] : []

  return (
    <div className="space-y-6">
      {/* Client welcome banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 via-primary/10 to-indigo-500/10 border border-purple-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-2 py-0.5">
              <Briefcase className="w-3 h-3 mr-1" />
              Client Portal
            </Badge>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              Welcome Back{data?.clientName ? `, ${data.clientName}` : ""}! 👋
            </h1>
            <p className="text-muted-foreground text-sm max-w-xl">
              Track project roadmap status, approve completed deliverables, and log portal check-in events.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {heroStats.map((s, i) => (
            <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 transition-all hover:scale-[1.02] hover:border-purple-500/20">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${s.bg}`}>
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                </div>
                <span className="text-xs text-muted-foreground font-semibold">{s.label}</span>
              </div>
              <p className="text-xl md:text-2xl font-black mt-2 text-foreground truncate">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Attendance Clock Widget in Client log mode */}
      <AttendanceClock themeColor="purple" isClientMode={true} />

      {/* Primary Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Projects & Approvals (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Milestone roadmap timeline */}
          <AnimatedCard delay={100} className="border-purple-500/10">
            <CardHeader className="pb-3 border-b border-border/40">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-400" />
                Active Project Milestones
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-5">
              {(data?.projectList || []).map((p, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-primary/20 space-y-2 pb-2">
                  {/* Circle marker on timeline */}
                  <span className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                  
                  <div className="flex justify-between items-center text-xs">
                    <p className="font-bold text-foreground">{p.name}</p>
                    <Badge variant="outline" className="text-[9px] uppercase border-blue-500/20 text-blue-400 bg-blue-500/5">
                      {p.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={p.progress} className="h-1.5 flex-1 bg-secondary" />
                    <span className="text-[10px] font-bold text-muted-foreground">{p.progress}% Completed</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground flex items-center gap-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>Next Phase: <span className="text-foreground">{p.nextMilestone || "Wrapping up"}</span></span>
                  </p>
                </div>
              ))}
              {(data?.projectList || []).length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">No projects listed</p>
              )}
            </CardContent>
          </AnimatedCard>

          {/* Client Deliverables Approvals Board */}
          <AnimatedCard delay={150} className="border-purple-500/10">
            <CardHeader className="pb-3 border-b border-border/40">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-purple-400" />
                Deliverables Approvals Queue
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3.5">
              {deliverables.map(d => (
                <div key={d.id} className="p-3 bg-secondary/30 border border-border/40 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <p className="text-xs font-bold text-foreground">{d.title}</p>
                    <p className="text-[9px] text-muted-foreground font-semibold mt-0.5">Project: {d.project}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    {d.status === "pending" ? (
                      <>
                        <Button
                          size="sm"
                          onClick={() => handleUpdateStatus(d.id, "approved")}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] h-7 px-2 rounded-lg font-bold"
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUpdateStatus(d.id, "changes")}
                          className="text-[10px] h-7 px-2 border-rose-500/30 text-rose-500 hover:bg-rose-500/5 rounded-lg font-bold"
                        >
                          Request Revision
                        </Button>
                      </>
                    ) : (
                      <Badge className={`text-[9px] font-bold ${
                        d.status === "approved"
                          ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                          : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                      }`}>
                        {d.status === "approved" ? "✓ Approved" : "⚠ Revision Requested"}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </AnimatedCard>

        </div>

        {/* Right Side: Finance & Messages (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Invoice Summary */}
          <AnimatedCard delay={200}>
            <CardHeader className="pb-3 border-b border-border/40">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-amber-400" />
                Latest Invoices
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3 space-y-2">
              {(data?.invoiceList || []).map((inv, i) => (
                <div key={i} className="flex justify-between items-center p-2.5 rounded-xl bg-secondary/40 border border-border/40">
                  <div>
                    <p className="text-xs font-bold text-foreground">{inv.id}</p>
                    <p className="text-[9px] text-muted-foreground font-semibold">Issued: {inv.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-foreground">{inv.amount}</p>
                    <Badge className={`text-[9px] font-bold px-1.5 py-0 mt-0.5 border capitalize ${
                      inv.status === "paid"
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                    }`}>
                      {inv.status}
                    </Badge>
                  </div>
                </div>
              ))}
              {(data?.invoiceList || []).length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">No invoices listed</p>
              )}
            </CardContent>
          </AnimatedCard>

          {/* Quick Chat Support widget */}
          <AnimatedCard delay={250} className="bg-purple-500/5 border-purple-500/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-purple-400 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Account Support Chat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="p-3 bg-background border border-border/50 rounded-xl space-y-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-purple-500 text-[10px]">
                    AM
                  </div>
                  <div>
                    <p className="font-bold text-foreground leading-tight">Sarah Jenkins</p>
                    <p className="text-[9px] text-muted-foreground">Account Relationship Manager</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed pt-1 text-[11px]">
                  "Hi there! Let me know if you need any assistance reviewing the Figmas or have questions about the Stripe invoice schedule."
                </p>
              </div>

              <div className="flex gap-2">
                <input
                  placeholder="Type message to Sarah..."
                  className="flex-1 h-8 text-[11px] bg-background border border-border/50 rounded-lg px-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white h-8 text-[10px] rounded-lg px-3">
                  Send
                </Button>
              </div>
            </CardContent>
          </AnimatedCard>

        </div>

      </div>
    </div>
  )
}
