"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { Prisma } from "@prisma/client"
import { generateNextUid } from "@/lib/uid-generator"
import { createBroadcastNotification } from "@/app/actions/notifications"
import { cacheInvalidate } from "@/lib/redis"

export async function getClients() {
  try {
    const clients = await prisma.client.findMany({
      include: {
        leads: true,
      },
      orderBy: { createdAt: "desc" },
    })
    return JSON.parse(JSON.stringify(clients))
  } catch (error) {
    console.error("Error fetching clients:", error)
    return []
  }
}

export async function createClient(data: Prisma.ClientCreateInput) {
  try {
    const uid = await generateNextUid("CL")
    const client = await prisma.client.create({
      data: { ...data, uid },
    })
    revalidatePath("/clients")
    await cacheInvalidate("dashboard:*").catch(() => {})

    // Send notification about new client
    await createBroadcastNotification({
      type: "new_client",
      title: "New Client Added",
      message: `New client "${data.name}" (${data.company || "No company"}) has been added.`,
      link: "/clients",
    }).catch(() => {})

    return JSON.parse(JSON.stringify(client))
  } catch (error) {
    console.error("Error creating client:", error)
    throw new Error("Failed to create client")
  }
}

export async function updateClient(id: string, data: Prisma.ClientUpdateInput) {
  try {
    const client = await prisma.client.update({
      where: { id },
      data,
    })
    revalidatePath("/clients")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return JSON.parse(JSON.stringify(client))
  } catch (error) {
    console.error("Error updating client:", error)
    throw new Error("Failed to update client")
  }
}

export async function deleteClient(id: string) {
  try {
    await prisma.client.delete({
      where: { id },
    })
    revalidatePath("/clients")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return { success: true }
  } catch (error) {
    console.error("Error deleting client:", error)
    throw new Error("Failed to delete client")
  }
}

export async function bulkDeleteClients(ids: string[]) {
  try {
    await prisma.client.deleteMany({
      where: { id: { in: ids } },
    })
    revalidatePath("/clients")
    await cacheInvalidate("dashboard:*").catch(() => {})
    return { success: true }
  } catch (error) {
    console.error("Error bulk deleting clients:", error)
    throw new Error("Failed to bulk delete clients")
  }
}
