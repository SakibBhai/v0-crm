"use server"

import { prisma } from "@/lib/prisma"
import { cacheGet, cacheDelete } from "@/lib/redis"

// ==================== Types ====================

export interface SettingsData {
  // Organization
  companyName?: string
  companyLogo?: string | null
  website?: string
  businessEmail?: string
  phone?: string
  taxId?: string
  address?: string

  // Regional
  timezone?: string
  currency?: string
  dateFormat?: string
  fiscalYearStart?: string

  // Invoice Templates
  invoicePrefix?: string
  invoiceStartNumber?: number
  logoPosition?: string
  accentColor?: string
  paymentTermsText?: string
  defaultNotes?: string

  // Finance
  defaultPaymentTerms?: string
  latePaymentFee?: number
  paymentMethods?: any
  taxConfigs?: any

  // Pipeline & Leads
  pipelineStages?: any
  leadCategories?: any

  // Client Settings
  clientTiers?: any
  healthScoreWeights?: any

  // Tasks & Projects
  taskStatuses?: any
  taskAutomation?: boolean

  // Notifications
  notifications?: any

  // Integrations
  integrations?: any

  // Email Templates
  emailTemplates?: any

  // Appearance
  compactMode?: boolean
  animations?: boolean
  sidebarCollapsed?: boolean
}

// ==================== Actions ====================

export async function getSettings() {
  return cacheGet("settings:default", async () => {
    try {
      let settings = await prisma.settings.findUnique({
        where: { id: "default" },
      })
      if (!settings) {
        try {
          settings = await prisma.settings.create({
            data: { id: "default" },
          })
        } catch {
          // If another request created it simultaneously, just fetch it
          settings = await prisma.settings.findUnique({
            where: { id: "default" },
          })
        }
      }
      return settings
    } catch (error) {
      console.error("Get settings error:", error)
      return null
    }
  }, 300)
}

export async function updateSettings(data: SettingsData) {
  try {
    let settings
    try {
      settings = await prisma.settings.update({
        where: { id: "default" },
        data,
      })
    } catch {
      // Row doesn't exist yet, create it
      settings = await prisma.settings.create({
        data: { id: "default", ...data },
      })
    }
    await cacheDelete("settings:default")
    return { success: true, settings }
  } catch (error) {
    console.error("Update settings error:", error)
    return { error: "Failed to save settings" }
  }
}

// ==================== Data Management Actions ====================

export async function exportAllData() {
  try {
    const [clients, leads, projects, tasks, invoices, employees, incomes, expenses] = await Promise.all([
      prisma.client.findMany(),
      prisma.lead.findMany(),
      prisma.project.findMany(),
      prisma.task.findMany(),
      prisma.invoice.findMany(),
      prisma.teamEmployee.findMany(),
      prisma.income.findMany(),
      prisma.expense.findMany(),
    ])

    return {
      exportDate: new Date().toISOString(),
      data: {
        clients,
        leads,
        projects,
        tasks,
        invoices,
        employees,
        incomes,
        expenses,
      }
    }
  } catch (error) {
    console.error("Export data error:", error)
    return { error: "Failed to export data" }
  }
}

export async function deleteAllData(confirmationToken: string) {
  if (confirmationToken !== "DELETE-ALL-DATA") {
    return { error: "Invalid confirmation token" }
  }

  try {
    // Delete in dependency order (children first)
    await prisma.$transaction([
      prisma.leadActivity.deleteMany(),
      prisma.lead.deleteMany(),
      prisma.task.deleteMany(),
      prisma.income.deleteMany(),
      prisma.expense.deleteMany(),
      prisma.invoice.deleteMany(),
      prisma.project.deleteMany(),
      prisma.client.deleteMany(),
      prisma.teamLeaveRequest.deleteMany(),
      prisma.teamAttendanceRecord.deleteMany(),
      prisma.teamCourseEnrollment.deleteMany(),
      prisma.teamTrainingCourse.deleteMany(),
      prisma.teamPerformanceReview.deleteMany(),
      prisma.teamOKR.deleteMany(),
      prisma.teamCandidate.deleteMany(),
      prisma.teamHoliday.deleteMany(),
      prisma.teamEmployee.deleteMany(),
    ])

    return { success: true }
  } catch (error) {
    console.error("Delete all data error:", error)
    return { error: "Failed to delete data. Some tables may have dependencies." }
  }
}
