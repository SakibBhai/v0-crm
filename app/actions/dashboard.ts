"use server"

import { prisma } from "@/lib/prisma"

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

    // Pending invoices
    const pendingInvoiceCount = invoices.filter(i => ["sent", "pending", "partial"].includes(i.status)).length
    const overdueInvoiceCount = invoices.filter(i => i.status === "overdue").length
    const overdueInvoiceValue = invoices.filter(i => i.status === "overdue").reduce((sum, i) => sum + (i.amount - i.paid), 0)

    // MRR
    const mrrValue = invoices.filter(i => i.recurringInvoice).reduce((sum, i) => sum + i.amount, 0)

    return {
      counts: { leadCount, clientCount, projectCount, taskCount, invoiceCount, incomeCount, expenseCount, employeeCount },
      finance: { totalRevenue, totalExpenses, totalInvoiceValue, paidInvoiceValue, pendingInvoiceValue, pendingInvoiceCount, overdueInvoiceCount, overdueInvoiceValue, mrrValue },
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

// ==================== Super Admin Dashboard ====================

export async function getSuperAdminDashboardData() {
  try {
    const [users, clients, projects, tasks, invoices, incomeEntries, expenses, employees, leads] = await Promise.all([
      prisma.user.findMany({ select: { role: true } }),
      prisma.client.findMany({ where: { status: "active" } }),
      prisma.project.findMany(),
      prisma.task.findMany(),
      prisma.financeInvoice.findMany(),
      prisma.financeIncome.findMany({ where: { entityStatus: "active" } }),
      prisma.financeExpense.findMany({ where: { entityStatus: "active" } }),
      prisma.teamEmployee.findMany({ where: { status: "active" } }),
      prisma.lead.findMany(),
    ])

    // User role distribution
    const roleMap: Record<string, number> = {}
    users.forEach(u => {
      roleMap[u.role] = (roleMap[u.role] || 0) + 1
    })
    const totalUsers = users.length
    const roleDist = [
      { role: "Super Admin", count: roleMap["SUPER_ADMIN"] || 0, color: "bg-red-500", pct: totalUsers > 0 ? Math.round(((roleMap["SUPER_ADMIN"] || 0) / totalUsers) * 100) : 0 },
      { role: "Management", count: roleMap["MANAGEMENT"] || 0, color: "bg-amber-500", pct: totalUsers > 0 ? Math.round(((roleMap["MANAGEMENT"] || 0) / totalUsers) * 100) : 0 },
      { role: "Manager", count: roleMap["MANAGER"] || 0, color: "bg-blue-500", pct: totalUsers > 0 ? Math.round(((roleMap["MANAGER"] || 0) / totalUsers) * 100) : 0 },
      { role: "Employee", count: roleMap["EMPLOYEE"] || 0, color: "bg-green-500", pct: totalUsers > 0 ? Math.round(((roleMap["EMPLOYEE"] || 0) / totalUsers) * 100) : 0 },
      { role: "Client", count: roleMap["CLIENT"] || 0, color: "bg-purple-500", pct: totalUsers > 0 ? Math.round(((roleMap["CLIENT"] || 0) / totalUsers) * 100) : 0 },
    ]

    // Financial
    const totalRevenue = incomeEntries.reduce((sum, i) => sum + i.amount, 0)
    const pendingInvoices = invoices.filter(i => ["sent", "pending", "partial"].includes(i.status))
    const pendingValue = pendingInvoices.reduce((sum, i) => sum + (i.amount - i.paid), 0)
    const activeProjectCount = projects.filter(p => p.status === "in-progress").length

    // Due this week
    const now = new Date()
    const endOfWeek = new Date(now)
    endOfWeek.setDate(now.getDate() + (7 - now.getDay()))
    const dueThisWeek = projects.filter(p => {
      try { const d = new Date(p.dueDate); return d >= now && d <= endOfWeek } catch { return false }
    }).length

    // Conversion rate: leads with stage "closed-won" / total leads
    const closedWon = leads.filter(l => l.stage === "closed-won" || l.stage === "won").length
    const conversionRate = leads.length > 0 ? Math.round((closedWon / leads.length) * 1000) / 10 : 0

    // Monthly revenue (current month income)
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()
    const monthlyRevenue = incomeEntries.filter(i => {
      try { const d = new Date(i.date); return d.getMonth() === currentMonth && d.getFullYear() === currentYear } catch { return false }
    }).reduce((sum, i) => sum + i.amount, 0)

    return {
      totalUsers,
      activeClients: clients.length,
      totalProjects: projects.length,
      totalRevenue,
      roleDist,
      monthlyRevenue,
      pendingInvoiceValue: pendingValue,
      pendingInvoiceCount: pendingInvoices.length,
      conversionRate,
      activeProjectCount,
      dueThisWeek,
    }
  } catch (error) {
    console.error("Error fetching super admin dashboard:", error)
    return { error: "Failed to fetch super admin dashboard" }
  }
}

// ==================== Management Dashboard ====================

export async function getManagementDashboardData() {
  try {
    const [leads, employees, projects, tasks, incomeEntries] = await Promise.all([
      prisma.lead.findMany(),
      prisma.teamEmployee.findMany({ where: { status: "active" } }),
      prisma.project.findMany(),
      prisma.task.findMany(),
      prisma.financeIncome.findMany({ where: { entityStatus: "active" } }),
    ])

    const totalRevenue = incomeEntries.reduce((sum, i) => sum + i.amount, 0)

    // Active deals (leads not closed)
    const activeDeals = leads.filter(l => !["closed-won", "won", "closed-lost", "lost"].includes(l.stage)).length

    // On leave today
    const leaveRequests = await prisma.teamLeaveRequest.findMany({ where: { status: "approved" } })
    const now = new Date()
    const todayStr = now.toISOString().split("T")[0]
    const onLeave = leaveRequests.filter(lr => lr.startDate <= todayStr && lr.endDate >= todayStr).length

    // Conversion rate
    const closedWon = leads.filter(l => l.stage === "closed-won" || l.stage === "won").length
    const conversionRate = leads.length > 0 ? Math.round((closedWon / leads.length) * 1000) / 10 : 0

    // Pipeline stages
    const stageMap: Record<string, { count: number; value: number }> = {}
    const stageOrder = [
      { key: "new", label: "New Leads", color: "bg-slate-500" },
      { key: "qualified", label: "Qualified", color: "bg-blue-500" },
      { key: "proposal", label: "Proposal Sent", color: "bg-purple-500" },
      { key: "negotiation", label: "Negotiation", color: "bg-amber-500" },
      { key: "closed-won", label: "Closed Won", color: "bg-green-500" },
    ]
    leads.forEach(l => {
      const stage = l.stage || "new"
      if (!stageMap[stage]) stageMap[stage] = { count: 0, value: 0 }
      stageMap[stage].count++
      stageMap[stage].value += l.value
    })
    const maxCount = Math.max(...Object.values(stageMap).map(s => s.count), 1)
    const pipeline = stageOrder.map(s => ({
      stage: s.label,
      value: `৳${((stageMap[s.key]?.value || 0) / 1000).toFixed(0)}k`,
      count: stageMap[s.key]?.count || 0,
      color: s.color,
      maxCount,
    }))

    // Team performance by department
    const deptMap: Record<string, { name: string; tasks: number; completed: number; lead: string }> = {}
    employees.forEach(emp => {
      const dept = emp.department || "Other"
      if (!deptMap[dept]) deptMap[dept] = { name: dept, tasks: 0, completed: 0, lead: `${emp.firstName} ${emp.lastName.charAt(0)}.` }
    })
    // Count tasks per department (approximate: match assignee name against employee names)
    tasks.forEach(t => {
      // Try to find which department this task belongs to via assignees
      const assignees = Array.isArray(t.assignees) ? t.assignees as any[] : []
      assignees.forEach((a: any) => {
        const assigneeName = typeof a === "string" ? a : a?.name || ""
        const emp = employees.find(e => `${e.firstName} ${e.lastName}` === assigneeName)
        if (emp) {
          const dept = emp.department || "Other"
          if (!deptMap[dept]) deptMap[dept] = { name: dept, tasks: 0, completed: 0, lead: `${emp.firstName} ${emp.lastName.charAt(0)}.` }
          deptMap[dept].tasks++
          if (t.status === "done") deptMap[dept].completed++
        }
      })
    })
    const teams = Object.values(deptMap).filter(d => d.tasks > 0).slice(0, 4)
    // If no task data, show departments with 0
    if (teams.length === 0) {
      Object.values(deptMap).slice(0, 4).forEach(d => teams.push(d))
    }

    return {
      totalRevenue,
      activeDeals,
      teamMembers: employees.length,
      onLeave,
      conversionRate,
      pipeline,
      teams,
    }
  } catch (error) {
    console.error("Error fetching management dashboard:", error)
    return { error: "Failed to fetch management dashboard" }
  }
}

// ==================== Manager Dashboard ====================

export async function getManagerDashboardData(managerName?: string) {
  try {
    const [employees, projects, tasks, attendanceRecords] = await Promise.all([
      prisma.teamEmployee.findMany({ where: { status: "active" } }),
      prisma.project.findMany(),
      prisma.task.findMany(),
      prisma.teamAttendanceRecord.findMany({
        where: { date: new Date().toISOString().split("T")[0] },
      }),
    ])

    // If manager name is provided, filter team to their reports. Otherwise show all.
    const teamMembers = managerName
      ? employees.filter(e => e.managerName === managerName)
      : employees

    // Team member list with attendance status
    const today = new Date().toISOString().split("T")[0]
    const myTeam = teamMembers.map(emp => {
      const att = attendanceRecords.find(a => a.employeeId === emp.id && a.date === today)
      let status = "absent"
      if (att) {
        if (att.workLocation === "remote" || att.status === "remote") status = "remote"
        else if (["present", "late"].includes(att.status)) status = "present"
        else status = att.status
      }
      // Check leave
      // Simple check: if no attendance and no other status, they might be on leave
      const taskCount = tasks.filter(t => {
        const assignees = Array.isArray(t.assignees) ? t.assignees as any[] : []
        return assignees.some((a: any) => {
          const name = typeof a === "string" ? a : a?.name || ""
          return name === `${emp.firstName} ${emp.lastName}`
        })
      }).filter(t => t.status !== "done").length

      return {
        name: `${emp.firstName} ${emp.lastName}`,
        role: emp.jobTitle,
        status,
        tasks: taskCount,
      }
    })

    // Active projects (where manager is project manager OR team includes manager)
    const activeProjects = projects
      .filter(p => p.status === "in-progress")
      .slice(0, 4)
      .map(p => ({
        name: p.name,
        progress: p.progress,
        dueDate: p.dueDate,
        status: p.progress >= 80 ? "on-track" : p.progress >= 50 ? "on-track" : "at-risk",
      }))

    // Stats
    const openTasks = tasks.filter(t => t.status !== "done").length
    const now = new Date()
    const endOfWeek = new Date(now)
    endOfWeek.setDate(now.getDate() + (7 - now.getDay()))
    const dueThisWeek = tasks.filter(t => {
      try { const d = new Date(t.dueDate); return d >= now && d <= endOfWeek && t.status !== "done" } catch { return false }
    }).length

    return {
      teamCount: myTeam.length,
      activeProjectCount: activeProjects.length,
      openTasks,
      dueThisWeek,
      myTeam,
      activeProjects,
    }
  } catch (error) {
    console.error("Error fetching manager dashboard:", error)
    return { error: "Failed to fetch manager dashboard" }
  }
}

// ==================== Employee Dashboard ====================

export async function getEmployeeDashboardData(employeeId?: string, employeeName?: string) {
  try {
    const [tasks, projects, attendanceRecords] = await Promise.all([
      prisma.task.findMany(),
      prisma.project.findMany(),
      employeeId ? prisma.teamAttendanceRecord.findMany({
        where: { employeeId, date: new Date().toISOString().split("T")[0] },
        take: 1,
      }) : Promise.resolve([]),
    ])

    // Filter tasks assigned to this employee
    const myTasks = tasks.filter(t => {
      const assignees = Array.isArray(t.assignees) ? t.assignees as any[] : []
      return assignees.some((a: any) => {
        const name = typeof a === "string" ? a : a?.name || ""
        const id = typeof a === "string" ? "" : a?.id || ""
        return (employeeName && name === employeeName) || (employeeId && id === employeeId)
      })
    })

    const pendingTasks = myTasks.filter(t => t.status !== "done")
    const completedTasks = myTasks.filter(t => t.status === "done")

    // Due today
    const today = new Date().toISOString().split("T")[0]
    const dueToday = pendingTasks.filter(t => {
      try { return t.dueDate.startsWith(today) } catch { return false }
    }).length

    // Projects involved in
    const myProjectIds = [...new Set(myTasks.map(t => t.projectId))]
    const myProjects = projects.filter(p => myProjectIds.includes(p.id))

    // Task list for display
    const taskList = pendingTasks.slice(0, 6).map(t => ({
      title: t.title,
      project: t.projectName,
      priority: t.priority,
      due: t.dueDate ? new Date(t.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "",
      done: false,
    }))

    return {
      totalTasks: myTasks.length,
      pendingCount: pendingTasks.length,
      completedCount: completedTasks.length,
      dueToday,
      projectCount: myProjects.length,
      taskList,
    }
  } catch (error) {
    console.error("Error fetching employee dashboard:", error)
    return { error: "Failed to fetch employee dashboard" }
  }
}

// ==================== Client Dashboard ====================

export async function getClientDashboardData(clientId?: string) {
  try {
    // Get the client record
    const client = clientId ? await prisma.client.findUnique({ where: { id: clientId } }) : null
    const clientName = client?.name || ""

    const [projects, invoices] = await Promise.all([
      clientName ? prisma.project.findMany({ where: { client: clientName } }) : Promise.resolve([]),
      clientName ? prisma.financeInvoice.findMany({ where: { client: clientName }, orderBy: { createdAt: "desc" } }) : Promise.resolve([]),
    ])

    const activeProjects = projects.filter(p => p.status === "in-progress")
    const pendingInvoices = invoices.filter(i => ["sent", "pending", "partial"].includes(i.status))

    // Next milestone: earliest due date from active projects
    const nextDue = activeProjects
      .map(p => p.dueDate)
      .filter(Boolean)
      .sort()[0] || ""
    const nextMilestoneStr = nextDue ? new Date(nextDue).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—"

    // Project list
    const projectList = activeProjects.slice(0, 4).map(p => ({
      name: p.name,
      progress: p.progress,
      status: p.status,
      nextMilestone: p.dueDate ? `Due ${new Date(p.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}` : "",
    }))

    // Invoice list
    const invoiceList = invoices.slice(0, 5).map(inv => ({
      id: inv.invoiceNumber,
      amount: `৳${inv.amount.toLocaleString()}`,
      status: inv.status,
      date: inv.issueDate ? new Date(inv.issueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : inv.issueDate,
    }))

    return {
      activeProjectCount: activeProjects.length,
      pendingInvoiceCount: pendingInvoices.length,
      nextMilestone: nextMilestoneStr,
      projectList,
      invoiceList,
      clientName,
    }
  } catch (error) {
    console.error("Error fetching client dashboard:", error)
    return { error: "Failed to fetch client dashboard" }
  }
}

// ==================== Cross-Module Queries ====================

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
