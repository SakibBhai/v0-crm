"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

/**
 * Cross-module aggregation action for the dashboard.
 * Pulls live data from all integrated modules.
 */
export async function getDashboardStats() {
  try {
    const [
      leadCount, clientCount, projectCount, taskCount,
      invoiceCount, incomeCount, expenseCount, employeeCount,
      leads, clients, projects, tasks, invoices, incomeEntries, expenses, employees,
    ] = await Promise.all([
      prisma.lead.count(),
      prisma.client.count(),
      prisma.project.count(),
      prisma.task.count(),
      prisma.financeInvoice.count(),
      prisma.financeIncome.count(),
      prisma.financeExpense.count(),
      prisma.teamEmployee.count(),
      prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
      prisma.client.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
      prisma.project.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.task.findMany(),
      prisma.financeInvoice.findMany(),
      prisma.financeIncome.findMany({ where: { entityStatus: "active" } }),
      prisma.financeExpense.findMany({ where: { entityStatus: "active" } }),
      prisma.teamEmployee.findMany({ where: { status: "active" } }),
    ])

    // Calculate cross-module metrics
    const totalRevenue = incomeEntries.reduce((sum, i) => sum + i.amount, 0)
    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0)
    const totalInvoiceValue = invoices.reduce((sum, i) => sum + i.amount, 0)
    const paidInvoiceValue = invoices.filter(i => i.status === "paid").reduce((sum, i) => sum + i.amount, 0)
    const pendingInvoiceValue = invoices.filter(i => ["sent", "pending", "partial"].includes(i.status)).reduce((sum, i) => sum + (i.amount - i.paid), 0)

    const activeProjects = projects.filter(p => p.status === "in-progress")
    const completedProjects = projects.filter(p => p.status === "completed")
    const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0)
    const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0)

    const completedTasks = tasks.filter(t => t.status === "done").length
    const inProgressTasks = tasks.filter(t => t.status === "in-progress").length

    // Project status distribution
    const projectStatusDist = [
      { name: "Completed", value: completedProjects.length, color: "#4ade80" },
      { name: "In Progress", value: activeProjects.length, color: "#60a5fa" },
      { name: "On Hold", value: projects.filter(p => p.status === "on-hold").length, color: "#fbbf24" },
      { name: "Planning", value: projects.filter(p => p.status === "planning").length, color: "#a78bfa" },
    ]

    // Recent leads for dashboard
    const recentLeads = leads.map(l => ({
      name: l.name,
      company: l.company,
      status: l.status,
      value: `৳${l.value.toLocaleString()}`,
      avatar: l.name.split(" ").map(n => n[0]).join(""),
    }))

    // Active projects list for dashboard
    const activeProjectsList = activeProjects.slice(0, 4).map(p => ({
      name: p.name,
      client: p.client,
      progress: p.progress,
      dueDate: p.dueDate,
    }))

    return {
      counts: { leadCount, clientCount, projectCount, taskCount, invoiceCount, incomeCount, expenseCount, employeeCount },
      finance: { totalRevenue, totalExpenses, totalInvoiceValue, paidInvoiceValue, pendingInvoiceValue },
      projects: { total: projectCount, active: activeProjects.length, completed: completedProjects.length, totalBudget, totalSpent },
      tasks: { total: taskCount, completed: completedTasks, inProgress: inProgressTasks },
      team: { total: employeeCount, active: employees.length },
      projectStatusDist,
      recentLeads,
      activeProjectsList,
    }
  } catch (error) {
    console.error("Error fetching dashboard stats:", error)
    return { error: "Failed to fetch dashboard stats" }
  }
}

/**
 * Get projects for a specific client (cross-module query)
 */
export async function getProjectsByClient(clientName: string) {
  try {
    const projects = await prisma.project.findMany({ where: { client: clientName } })
    return projects
  } catch (error) {
    console.error("Error fetching projects by client:", error)
    return { error: "Failed to fetch projects" }
  }
}

/**
 * Get invoices for a specific client (cross-module query)
 */
export async function getInvoicesByClient(clientName: string) {
  try {
    const invoices = await prisma.financeInvoice.findMany({ where: { client: clientName } })
    return invoices
  } catch (error) {
    console.error("Error fetching invoices by client:", error)
    return { error: "Failed to fetch invoices" }
  }
}

/**
 * Get tasks for a specific project (cross-module query)
 */
export async function getTasksByProject(projectId: string) {
  try {
    const tasks = await prisma.task.findMany({ where: { projectId } })
    return tasks
  } catch (error) {
    console.error("Error fetching tasks by project:", error)
    return { error: "Failed to fetch tasks" }
  }
}

/**
 * Get income/expenses for a specific project (cross-module query)
 */
export async function getFinancesByProject(projectName: string) {
  try {
    const [income, expenses, invoices] = await Promise.all([
      prisma.financeIncome.findMany({ where: { project: projectName } }),
      prisma.financeExpense.findMany({ where: { project: projectName } }),
      prisma.financeInvoice.findMany({ where: { project: projectName } }),
    ])
    return { income, expenses, invoices }
  } catch (error) {
    console.error("Error fetching finances by project:", error)
    return { error: "Failed to fetch finances" }
  }
}
