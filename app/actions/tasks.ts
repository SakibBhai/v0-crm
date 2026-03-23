"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { Prisma } from "@prisma/client"

export async function getTasks() {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: "desc" },
    })
    return JSON.parse(JSON.stringify(tasks))
  } catch (error) {
    console.error("Error fetching tasks:", error)
    return []
  }
}

export async function getTaskById(id: string) {
  try {
    const task = await prisma.task.findUnique({
      where: { id },
    })
    return task ? JSON.parse(JSON.stringify(task)) : null
  } catch (error) {
    console.error("Error fetching task:", error)
    return null
  }
}

export async function createTask(data: Prisma.TaskCreateInput) {
  try {
    const task = await prisma.task.create({
      data,
    })
    revalidatePath("/tasks")
    return JSON.parse(JSON.stringify(task))
  } catch (error: any) {
    console.error("Error creating task:", error.message || error)
    return { error: "Failed to create task" }
  }
}

export async function updateTask(id: string, data: Prisma.TaskUpdateInput) {
  try {
    const task = await prisma.task.update({
      where: { id },
      data,
    })
    revalidatePath("/tasks")
    return JSON.parse(JSON.stringify(task))
  } catch (error: any) {
    console.error("Error updating task:", error.message || error)
    return { error: "Failed to update task" }
  }
}

export async function deleteTask(id: string) {
  try {
    await prisma.task.delete({
      where: { id },
    })
    revalidatePath("/tasks")
    return { success: true }
  } catch (error: any) {
    console.error("Error deleting task:", error.message || error)
    return { success: false, error: "Failed to delete task" }
  }
}

export async function bulkDeleteTasks(ids: string[]) {
  try {
    await prisma.task.deleteMany({
      where: { id: { in: ids } },
    })
    revalidatePath("/tasks")
    return { success: true }
  } catch (error: any) {
    console.error("Error bulk deleting tasks:", error.message || error)
    return { success: false, error: "Failed to bulk delete tasks" }
  }
}
