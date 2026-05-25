"use server"

import { prisma } from "@/lib/prisma"
import { createBroadcastNotification } from "@/app/actions/notifications"
import { cacheInvalidate } from "@/lib/redis"

// ==================== INVOICE NUMBER GENERATION ====================

/**
 * Generates a project-based invoice UID in the format: {initials}-{DDMMYY}-{sequence}
 * Example: "Let Me Glow" → lmg-220426-1
 * @param projectName - The project name to derive initials from
 */
export async function generateNextInvoiceNumber(projectName?: string): Promise<string> {
  const now = new Date()
  const dd = String(now.getDate()).padStart(2, "0")
  const mm = String(now.getMonth() + 1).padStart(2, "0")
  const yy = String(now.getFullYear()).slice(-2)
  const datePart = `${dd}${mm}${yy}`

  // Derive initials from project name (first char of each word, lowercase)
  const initials = projectName
    ? projectName
        .split(/\s+/)
        .map((word) => word.charAt(0).toLowerCase())
        .join("")
    : "inv"

  const prefix = `${initials}-${datePart}-`

  // Find the last invoice with this prefix to determine the next sequence number
  const matchingInvoices = await prisma.financeInvoice.findMany({
    where: {
      invoiceNumber: {
        startsWith: prefix,
      },
    },
    select: {
      invoiceNumber: true,
    },
  })

  if (matchingInvoices.length === 0) {
    return `${prefix}1`
  }

  // Extract the sequence numbers and find the max
  const maxSeq = matchingInvoices.reduce((max, inv) => {
    const seqStr = inv.invoiceNumber.replace(prefix, "")
    const seq = parseInt(seqStr, 10)
    return isNaN(seq) ? max : Math.max(max, seq)
  }, 0)

  return `${prefix}${maxSeq + 1}`
}

// ==================== INVOICE ACTIONS ====================

export async function getInvoices() {
  try {
    const invoices = await prisma.financeInvoice.findMany({
      orderBy: { createdAt: "desc" },
    })
    return invoices.map((inv) => ({
      id: inv.id,
      invoiceNumber: inv.invoiceNumber,
      client: inv.client,
      clientEmail: inv.clientEmail,
      clientLogo: "/placeholder.svg?height=40&width=40",
      project: inv.project,
      projectId: inv.projectId,
      amount: inv.amount,
      paid: inv.paid,
      tax: inv.tax,
      discount: inv.discount,
      status: inv.status,
      dueDate: inv.dueDate,
      issueDate: inv.issueDate,
      paidDate: inv.paidDate,
      paymentMethod: inv.paymentMethod,
      paymentTerms: inv.paymentTerms,
      currency: inv.currency,
      items: inv.items as any[],
      notes: inv.notes,
      internalNotes: inv.internalNotes,
      category: inv.category,
      recurringInvoice: inv.recurringInvoice,
      attachments: inv.attachments as string[],
    }))
  } catch (error) {
    console.error("Error fetching invoices:", error)
    return { error: "Failed to fetch invoices" }
  }
}

export async function createInvoice(data: {
  invoiceNumber: string
  client: string
  clientEmail?: string
  project: string
  projectId?: string
  amount: number
  paid?: number
  tax: number
  discount: number
  status: string
  dueDate: string
  issueDate: string
  paidDate?: string | null
  paymentMethod?: string
  paymentTerms?: string
  currency?: string
  items: any[]
  notes?: string
  internalNotes?: string
  category?: string
  recurringInvoice?: boolean
  attachments?: string[]
}) {
  try {
    const invoice = await prisma.financeInvoice.create({
      data: {
        invoiceNumber: data.invoiceNumber,
        client: data.client,
        clientEmail: data.clientEmail || "",
        project: data.project,
        projectId: data.projectId || "",
        amount: data.amount,
        paid: data.paid || 0,
        tax: data.tax,
        discount: data.discount,
        status: data.status,
        dueDate: data.dueDate,
        issueDate: data.issueDate,
        paidDate: data.paidDate || null,
        paymentMethod: data.paymentMethod || "Bank Transfer",
        paymentTerms: data.paymentTerms || "Net 30",
        currency: data.currency || "BDT",
        items: data.items as any,
        notes: data.notes || "",
        internalNotes: data.internalNotes || "",
        category: data.category || "development",
        recurringInvoice: data.recurringInvoice || false,
        attachments: (data.attachments || []) as any,
      },
    })

    // Send notification about new invoice
    await createBroadcastNotification({
      type: "invoice_paid",
      title: "New Invoice Created",
      message: `Invoice ${data.invoiceNumber} for ${data.client} - ৳${data.amount.toLocaleString()} has been created.`,
      link: "/finances",
    }).catch(() => {})

    await cacheInvalidate("dashboard:*").catch(() => {})

    return {
      ...invoice,
      clientLogo: "/placeholder.svg?height=40&width=40",
      items: invoice.items as any[],
      attachments: invoice.attachments as string[],
    }
  } catch (error) {
    console.error("Error creating invoice:", error)
    return { error: "Failed to create invoice" }
  }
}

export async function updateInvoice(id: string, data: Record<string, any>) {
  try {
    const invoice = await prisma.financeInvoice.update({
      where: { id },
      data,
    })
    await cacheInvalidate("dashboard:*").catch(() => {})
    return {
      ...invoice,
      clientLogo: "/placeholder.svg?height=40&width=40",
      items: invoice.items as any[],
      attachments: invoice.attachments as string[],
    }
  } catch (error) {
    console.error("Error updating invoice:", error)
    return { error: "Failed to update invoice" }
  }
}

export async function deleteInvoice(id: string) {
  try {
    await prisma.financeInvoice.delete({ where: { id } })
    await cacheInvalidate("dashboard:*").catch(() => {})
    return { success: true }
  } catch (error) {
    console.error("Error deleting invoice:", error)
    return { error: "Failed to delete invoice" }
  }
}

// ==================== INCOME ACTIONS ====================

export async function getIncomeEntries() {
  try {
    const entries = await prisma.financeIncome.findMany({
      orderBy: { createdAt: "desc" },
    })
    return entries.map((inc) => ({
      id: inc.id,
      description: inc.description,
      category: inc.category,
      subCategory: inc.subCategory,
      amount: inc.amount,
      date: inc.date,
      client: inc.client,
      project: inc.project,
      status: inc.status,
      entityStatus: inc.entityStatus as "active" | "neutralized",
      invoiceId: inc.invoiceId || "",
      paymentMethod: inc.paymentMethod,
      recurring: inc.recurring,
      recurringFrequency: inc.recurringFrequency,
      taxAmount: inc.taxAmount,
      notes: inc.notes,
      createdAt: inc.createdAt.toISOString(),
      updatedAt: inc.updatedAt.toISOString(),
      createdBy: "System",
    }))
  } catch (error) {
    console.error("Error fetching income:", error)
    return { error: "Failed to fetch income entries" }
  }
}

export async function createIncome(data: {
  description: string
  category: string
  subCategory?: string
  amount: number
  date: string
  client?: string
  project?: string
  status?: string
  entityStatus?: string
  invoiceId?: string | null
  paymentMethod?: string
  recurring?: boolean
  recurringFrequency?: string | null
  taxAmount?: number
  notes?: string
}) {
  try {
    const income = await prisma.financeIncome.create({
      data: {
        description: data.description,
        category: data.category,
        subCategory: data.subCategory || "",
        amount: data.amount,
        date: data.date,
        client: data.client || "",
        project: data.project || "",
        status: data.status || "received",
        entityStatus: data.entityStatus || "active",
        invoiceId: data.invoiceId || null,
        paymentMethod: data.paymentMethod || "Bank Transfer",
        recurring: data.recurring || false,
        recurringFrequency: data.recurringFrequency || null,
        taxAmount: data.taxAmount || 0,
        notes: data.notes || "",
      },
    })
    await cacheInvalidate("dashboard:*").catch(() => {})
    return {
      ...income,
      entityStatus: income.entityStatus as "active" | "neutralized",
      invoiceId: income.invoiceId || "",
      createdAt: income.createdAt.toISOString(),
      updatedAt: income.updatedAt.toISOString(),
      createdBy: "Current User",
    }
  } catch (error) {
    console.error("Error creating income:", error)
    return { error: "Failed to create income entry" }
  }
}

export async function updateIncome(id: string, data: Record<string, any>) {
  try {
    const income = await prisma.financeIncome.update({
      where: { id },
      data,
    })
    await cacheInvalidate("dashboard:*").catch(() => {})
    return {
      ...income,
      entityStatus: income.entityStatus as "active" | "neutralized",
      invoiceId: income.invoiceId || "",
      createdAt: income.createdAt.toISOString(),
      updatedAt: income.updatedAt.toISOString(),
      createdBy: "System",
    }
  } catch (error) {
    console.error("Error updating income:", error)
    return { error: "Failed to update income entry" }
  }
}

export async function deleteIncome(id: string) {
  try {
    await prisma.financeIncome.delete({ where: { id } })
    await cacheInvalidate("dashboard:*").catch(() => {})
    return { success: true }
  } catch (error) {
    console.error("Error deleting income:", error)
    return { error: "Failed to delete income entry" }
  }
}

// ==================== EXPENSE ACTIONS ====================

export async function getExpenses() {
  try {
    const entries = await prisma.financeExpense.findMany({
      orderBy: { createdAt: "desc" },
    })
    return entries.map((exp) => ({
      id: exp.id,
      description: exp.description,
      category: exp.category,
      subCategory: exp.subCategory,
      amount: exp.amount,
      date: exp.date,
      vendor: exp.vendor,
      status: exp.status,
      entityStatus: exp.entityStatus as "active" | "neutralized",
      recurring: exp.recurring,
      recurringFrequency: exp.recurringFrequency,
      approvalStatus: exp.approvalStatus,
      approvedBy: exp.approvedBy,
      paymentMethod: exp.paymentMethod,
      receiptUrl: exp.receiptUrl,
      taxDeductible: exp.taxDeductible,
      notes: exp.notes,
      department: exp.department,
      project: exp.project,
      sourceType: exp.sourceType,
      clientId: exp.clientId,
      clientName: exp.clientName,
      createdAt: exp.createdAt.toISOString(),
      updatedAt: exp.updatedAt.toISOString(),
      createdBy: "System",
    }))
  } catch (error) {
    console.error("Error fetching expenses:", error)
    return { error: "Failed to fetch expenses" }
  }
}

export async function createExpense(data: {
  description: string
  category: string
  subCategory?: string
  amount: number
  date: string
  vendor: string
  status?: string
  entityStatus?: string
  recurring?: boolean
  recurringFrequency?: string | null
  approvalStatus?: string
  approvedBy?: string | null
  paymentMethod?: string
  receiptUrl?: string | null
  taxDeductible?: boolean
  notes?: string
  department?: string
  project?: string | null
  sourceType?: string
  clientId?: string | null
  clientName?: string | null
}) {
  try {
    const expense = await prisma.financeExpense.create({
      data: {
        description: data.description,
        category: data.category,
        subCategory: data.subCategory || "",
        amount: data.amount,
        date: data.date,
        vendor: data.vendor,
        status: data.status || "pending",
        entityStatus: data.entityStatus || "active",
        recurring: data.recurring || false,
        recurringFrequency: data.recurringFrequency || null,
        approvalStatus: data.approvalStatus || "pending",
        approvedBy: data.approvedBy || null,
        paymentMethod: data.paymentMethod || "Bank Transfer",
        receiptUrl: data.receiptUrl || null,
        taxDeductible: data.taxDeductible ?? true,
        notes: data.notes || "",
        department: data.department || "general",
        project: data.project || null,
        sourceType: data.sourceType || "office",
        clientId: data.clientId || null,
        clientName: data.clientName || null,
      },
    })
    await cacheInvalidate("dashboard:*").catch(() => {})
    return {
      ...expense,
      entityStatus: expense.entityStatus as "active" | "neutralized",
      createdAt: expense.createdAt.toISOString(),
      updatedAt: expense.updatedAt.toISOString(),
      createdBy: "Current User",
    }
  } catch (error) {
    console.error("Error creating expense:", error)
    return { error: "Failed to create expense" }
  }
}

export async function updateExpense(id: string, data: Record<string, any>) {
  try {
    const expense = await prisma.financeExpense.update({
      where: { id },
      data,
    })
    await cacheInvalidate("dashboard:*").catch(() => {})
    return {
      ...expense,
      entityStatus: expense.entityStatus as "active" | "neutralized",
      createdAt: expense.createdAt.toISOString(),
      updatedAt: expense.updatedAt.toISOString(),
      createdBy: "System",
    }
  } catch (error) {
    console.error("Error updating expense:", error)
    return { error: "Failed to update expense" }
  }
}

export async function deleteExpense(id: string) {
  try {
    await prisma.financeExpense.delete({ where: { id } })
    await cacheInvalidate("dashboard:*").catch(() => {})
    return { success: true }
  } catch (error) {
    console.error("Error deleting expense:", error)
    return { error: "Failed to delete expense" }
  }
}
