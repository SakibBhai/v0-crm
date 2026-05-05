"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { ClientDashboard } from "@/components/dashboards/client-dashboard"

export default function PortalPage() {
  return (
    <DashboardLayout>
      <ClientDashboard />
    </DashboardLayout>
  )
}
