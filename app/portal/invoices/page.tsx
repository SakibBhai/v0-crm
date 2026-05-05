"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, DollarSign } from "lucide-react"

const invoices = [
  { id: "INV-2024-001", project: "Website Redesign", amount: 15000, paid: 15000, status: "paid", date: "Apr 15, 2024", dueDate: "Apr 30, 2024" },
  { id: "INV-2024-002", project: "SEO Optimization", amount: 8500, paid: 0, status: "pending", date: "May 1, 2024", dueDate: "May 30, 2024" },
  { id: "INV-2024-003", project: "Website Redesign", amount: 22000, paid: 0, status: "draft", date: "May 5, 2024", dueDate: "Jun 5, 2024" },
]

const statusStyles: Record<string, string> = {
  paid: "bg-green-500/10 text-green-400",
  pending: "bg-amber-500/10 text-amber-400",
  overdue: "bg-red-500/10 text-red-400",
  draft: "bg-slate-500/10 text-slate-400",
}

export default function PortalInvoicesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-2xl font-bold flex items-center gap-2"><FileText className="w-6 h-6 text-amber-400" />My Invoices</h1>
          <p className="text-muted-foreground mt-1">View and download your invoices</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Total Billed", value: `৳${invoices.reduce((s, i) => s + i.amount, 0).toLocaleString()}`, color: "text-foreground" },
            { label: "Total Paid", value: `৳${invoices.reduce((s, i) => s + i.paid, 0).toLocaleString()}`, color: "text-green-400" },
            { label: "Outstanding", value: `৳${invoices.reduce((s, i) => s + (i.amount - i.paid), 0).toLocaleString()}`, color: "text-amber-400" },
          ].map((s, i) => (
            <AnimatedCard key={i} delay={i * 50}>
              <CardContent className="p-4 text-center">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
        {invoices.map((inv, i) => (
          <AnimatedCard key={i} delay={150 + i * 50}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-amber-500/10"><DollarSign className="w-5 h-5 text-amber-400" /></div>
                  <div>
                    <p className="font-medium">{inv.id}</p>
                    <p className="text-sm text-muted-foreground">{inv.project}</p>
                    <p className="text-xs text-muted-foreground">Issued: {inv.date} · Due: {inv.dueDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="font-bold">৳{inv.amount.toLocaleString()}</p>
                    <Badge className={`${statusStyles[inv.status]} border-0 text-[10px]`}>{inv.status}</Badge>
                  </div>
                  <Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button>
                </div>
              </div>
            </CardContent>
          </AnimatedCard>
        ))}
      </div>
    </DashboardLayout>
  )
}
