"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { Prisma } from "@prisma/client"
import { generateNextUid } from "@/lib/uid-generator"

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    })
    return JSON.parse(JSON.stringify(projects))
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function getProjectById(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
    })
    return project ? JSON.parse(JSON.stringify(project)) : null
  } catch (error) {
    console.error("Error fetching project:", error)
    return null
  }
}

export async function createProject(data: Prisma.ProjectCreateInput | any) {
  try {
    const uid = await generateNextUid("PJ")
    const project = await prisma.project.create({
      data: { ...data, uid },
    })
    revalidatePath("/projects")
    return JSON.parse(JSON.stringify(project))
  } catch (error) {
    console.error("Error creating project:", error)
    throw new Error("Failed to create project")
  }
}

export async function updateProject(id: string, data: Prisma.ProjectUpdateInput | any) {
  try {
    const project = await prisma.project.update({
      where: { id },
      data,
    })
    revalidatePath("/projects")
    revalidatePath(`/projects/${id}`)
    return JSON.parse(JSON.stringify(project))
  } catch (error) {
    console.error("Error updating project:", error)
    throw new Error("Failed to update project")
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    })
    revalidatePath("/projects")
    return { success: true }
  } catch (error) {
    console.error("Error deleting project:", error)
    throw new Error("Failed to delete project")
  }
}

export async function bulkDeleteProjects(ids: string[]) {
  try {
    await prisma.project.deleteMany({
      where: { id: { in: ids } },
    })
    revalidatePath("/projects")
    return { success: true }
  } catch (error) {
    console.error("Error bulk deleting projects:", error)
    throw new Error("Failed to bulk delete projects")
  }
}

export async function addProjectFileLink(projectId: string, fileData: { id: string, name: string, url: string, type: string, size: string, addedBy: string, addedAt: string }) {
  try {
    const project = await prisma.project.findUnique({ where: { id: projectId } })
    if (!project) throw new Error("Project not found")

    const files = Array.isArray(project.files) ? [...project.files] : []
    files.push(fileData)

    const updated = await prisma.project.update({
      where: { id: projectId },
      data: { files }
    })
    revalidatePath(`/projects/${projectId}`)
    return JSON.parse(JSON.stringify(updated))
  } catch (error) {
    console.error("Error adding file link:", error)
    return { error: "Failed to add file link" }
  }
}

export async function addProjectDiscussionMessage(projectId: string, messageData: { id: string, content: string, author: string, timestamp: string }) {
  try {
    const project = await prisma.project.findUnique({ where: { id: projectId } })
    if (!project) throw new Error("Project not found")

    const discussions = Array.isArray(project.discussions) ? [...project.discussions] : []
    discussions.push(messageData)

    const updated = await prisma.project.update({
      where: { id: projectId },
      data: { discussions }
    })
    revalidatePath(`/projects/${projectId}`)
    return JSON.parse(JSON.stringify(updated))
  } catch (error) {
    console.error("Error adding discussion message:", error)
    return { error: "Failed to add discussion message" }
  }
}
