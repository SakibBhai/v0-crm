"use server"

import { prisma } from "@/lib/prisma"

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

  // Appearance
  compactMode?: boolean
  animations?: boolean
  sidebarCollapsed?: boolean
}

// ==================== Actions ====================

export async function getSettings() {
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
    return { success: true, settings }
  } catch (error) {
    console.error("Update settings error:", error)
    return { error: "Failed to save settings" }
  }
}
