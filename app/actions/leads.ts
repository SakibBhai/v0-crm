"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { Prisma } from "@prisma/client"

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
    const lead = await prisma.lead.create({
      data,
      include: {
        noteHistory: true,
        activityHistory: true,
      },
    })
    revalidatePath("/leads")
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
      },
    })
    revalidatePath("/leads")
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
    return { success: true }
  } catch (error) {
    console.error("Error adding lead activity:", error)
    throw new Error("Failed to add activity")
  }
}
