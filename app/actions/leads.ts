"use server"

import { prisma } from "@/lib/prisma"
import { cacheInvalidate } from "@/lib/redis"
import { revalidatePath } from "next/cache"
import { Prisma } from "@prisma/client"
import { generateNextUid } from "@/lib/uid-generator"
import { createBroadcastNotification } from "@/app/actions/notifications"

export async function getLeads() {
  try {
    const leads = await prisma.lead.findMany({
      include: {
        noteHistory: {
          orderBy: { createdAt: "desc" },
        },
        activityHistory: {
          orderBy: { timestamp: "desc" },
        },
        followUps: {
          orderBy: { date: "desc" },
        },
        client: true,
      },
      orderBy: { createdAt: "desc" },
    })
    return JSON.parse(JSON.stringify(leads))
  } catch (error) {
    console.error("Error fetching leads:", error)
    return []
  }
}

export async function createLead(data: Prisma.LeadCreateInput) {
  try {
    const uid = await generateNextUid("LD")
    const lead = await prisma.lead.create({
      data: { ...data, uid },
      include: {
        noteHistory: true,
        activityHistory: true,
        followUps: true,
      },
    })
    revalidatePath("/leads")
    await cacheInvalidate("dashboard:*").catch(() => {})

    // Send notification to all users
    await createBroadcastNotification({
      type: "lead_assigned",
      title: "New Lead Created",
      message: `New lead "${data.name}" (${data.company || "No company"}) has been added.`,
      link: "/leads",
    }).catch(() => {}) // Don't fail if notification fails

    return JSON.parse(JSON.stringify(lead))
  } catch (error) {
    console.error("Error creating lead:", error)
    throw new Error("Failed to create lead")
  }
}

export async function updateLead(id: string, data: Prisma.LeadUpdateInput) {
  try {
    const lead = await prisma.lead.update({
      where: { id },
      data,
      include: {
        noteHistory: true,
        activityHistory: true,
        followUps: {
          orderBy: { date: "desc" },
        },
      },
    })
    revalidatePath("/leads")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return JSON.parse(JSON.stringify(lead))
  } catch (error) {
    console.error("Error updating lead:", error)
    throw new Error("Failed to update lead")
  }
}

export async function deleteLead(id: string) {
  try {
    await prisma.lead.delete({
      where: { id },
    })
    revalidatePath("/leads")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return { success: true }
  } catch (error) {
    console.error("Error deleting lead:", error)
    throw new Error("Failed to delete lead")
  }
}

export async function bulkDeleteLeads(ids: string[]) {
  try {
    await prisma.lead.deleteMany({
      where: { id: { in: ids } },
    })
    revalidatePath("/leads")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return { success: true }
  } catch (error) {
    console.error("Error bulk deleting leads:", error)
    throw new Error("Failed to bulk delete leads")
  }
}

export async function addLeadNote(
  leadId: string,
  content: string,
  createdBy: string
) {
  try {
    await prisma.noteHistory.create({
      data: {
        content,
        createdBy,
        leadId,
      },
    })
    
    // Update the nextFollowUp on the lead or something if needed,
    // but here we just add activity and note history.
    
    revalidatePath("/leads")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return { success: true }
  } catch (error) {
    console.error("Error adding lead note:", error)
    throw new Error("Failed to add note")
  }
}

export async function addLeadActivity(
  leadId: string,
  data: Omit<Prisma.ActivityHistoryCreateInput, "lead">
) {
  try {
    await prisma.activityHistory.create({
      data: {
        ...data,
        leadId,
      },
    })
    
    // Increment total activities on the lead automatically
    await prisma.lead.update({
      where: { id: leadId },
      data: { activities: { increment: 1 } },
    })
    
    revalidatePath("/leads")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return { success: true }
  } catch (error) {
    console.error("Error adding lead activity:", error)
    throw new Error("Failed to add activity")
  }
}

// --- Follow-Up History ---

export async function addLeadFollowUp(
  leadId: string,
  date: string,
  notes: string = ""
) {
  try {
    // Create the follow-up record
    const followUp = await prisma.leadFollowUp.create({
      data: {
        date,
        notes,
        status: "scheduled",
        leadId,
      },
    })

    // Update the lead's nextFollowUp to this new date
    // (always set to the latest scheduled follow-up)
    const latestFollowUp = await prisma.leadFollowUp.findFirst({
      where: {
        leadId,
        status: "scheduled",
      },
      orderBy: { date: "desc" },
    })

    if (latestFollowUp) {
      await prisma.lead.update({
        where: { id: leadId },
        data: { nextFollowUp: latestFollowUp.date },
      })
    }

    revalidatePath("/leads")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return JSON.parse(JSON.stringify(followUp))
  } catch (error) {
    console.error("Error adding follow-up:", error)
    throw new Error("Failed to add follow-up")
  }
}

export async function updateLeadFollowUp(
  followUpId: string,
  data: { status?: string; notes?: string; date?: string }
) {
  try {
    const followUp = await prisma.leadFollowUp.update({
      where: { id: followUpId },
      data,
    })

    // Re-calculate the lead's nextFollowUp
    const latestScheduled = await prisma.leadFollowUp.findFirst({
      where: {
        leadId: followUp.leadId,
        status: "scheduled",
      },
      orderBy: { date: "asc" },
    })

    await prisma.lead.update({
      where: { id: followUp.leadId },
      data: { nextFollowUp: latestScheduled?.date || "" },
    })

    revalidatePath("/leads")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return JSON.parse(JSON.stringify(followUp))
  } catch (error) {
    console.error("Error updating follow-up:", error)
    throw new Error("Failed to update follow-up")
  }
}

export async function getLeadFollowUps(leadId: string) {
  try {
    const followUps = await prisma.leadFollowUp.findMany({
      where: { leadId },
      orderBy: { date: "desc" },
    })
    return JSON.parse(JSON.stringify(followUps))
  } catch (error) {
    console.error("Error fetching follow-ups:", error)
    return []
  }
}
