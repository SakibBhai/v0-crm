"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { jsPDF } from "jspdf"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { AGENCY_SERVICE_TEMPLATES, INVOICE_CATEGORY_CONFIG } from "@/lib/types/finance"
import {
  Search,
  Plus,
  Filter,
  Download,
  Upload,
  MoreHorizontal,
  DollarSign,
  TrendingUp,
  Receipt,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Send,
  Eye,
  Edit,
  Trash2,
  Copy,
  FileText,
  LayoutGrid,
  List,
  Columns3,
  Mail,
  Printer,
  MoreVertical,
  Target,
  TrendingDown,
  Repeat,
  AlertTriangle,
  Calculator,
  Percent,
  CircleDollarSign,
  Banknote,
  History,
  RotateCcw,
  Ban,
  Wallet,
} from "lucide-react"
import {
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ComposedChart,
} from "recharts"

import { ExpenseDataType } from "@/lib/data/finance-data";

// Invoice type for state management
type InvoiceData = {
  id: string
  invoiceNumber: string
  client: string
  clientEmail: string
  clientLogo: string
  project: string
  projectId: string
  amount: number
  paid: number
  tax: number
  discount: number
  status: string
  dueDate: string
  issueDate: string
  paidDate: string | null
  paymentMethod: string
  paymentTerms: string
  currency: string
  items: { id: number; description: string; quantity: number; rate: number; amount: number; taxable: boolean }[]
  notes: string
  internalNotes: string
  category: string
  recurringInvoice: boolean
  attachments: string[]
}

type IncomeEntry = {
  id: number | string
  description: string
  category: string
  amount: number
  date: string
  client: string
  project: string
  status: string
  entityStatus: "active" | "neutralized"
  invoiceId: string
  paymentMethod: string
  recurring: boolean
  taxAmount: number
  createdAt: string
  updatedAt: string
  createdBy: string
}
import {
  getInvoices, createInvoice as createInvoiceAction, updateInvoice as updateInvoiceAction, deleteInvoice as deleteInvoiceAction,
  getIncomeEntries, createIncome as createIncomeAction, updateIncome as updateIncomeAction,
  getExpenses as getExpensesAction, createExpense as createExpenseAction, updateExpense as updateExpenseAction,
  generateNextInvoiceNumber,
} from "@/app/actions/finances"
import { getClients } from "@/app/actions/clients"
import { getProjects } from "@/app/actions/projects"

// Invoice kanban columns
const invoiceColumns = [
  { id: "draft", title: "Draft", color: "bg-muted-foreground" },
  { id: "sent", title: "Sent", color: "bg-blue-500" },
  { id: "pending", title: "Pending", color: "bg-amber-500" },
  { id: "partial", title: "Partial Paid", color: "bg-purple-500" },
  { id: "paid", title: "Paid", color: "bg-emerald-500" },
  { id: "overdue", title: "Overdue", color: "bg-red-500" },
]

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
  draft: { label: "Draft", color: "bg-muted text-muted-foreground", icon: FileText },
  sent: { label: "Sent", color: "bg-blue-500/10 text-blue-500", icon: Send },
  pending: { label: "Pending", color: "bg-amber-500/10 text-amber-500", icon: Clock },
  partial: { label: "Partial", color: "bg-purple-500/10 text-purple-500", icon: AlertCircle },
  paid: { label: "Paid", color: "bg-emerald-500/10 text-emerald-500", icon: CheckCircle2 },
  overdue: { label: "Overdue", color: "bg-red-500/10 text-red-500", icon: XCircle },
}

// Sample Activity Log Data
type ActivityLogEntryType = {
  id: string
  entityType: "expense" | "income" | "invoice"
  entityId: string | number
  entityDescription: string
  action: "created" | "updated" | "deleted" | "neutralized" | "restored" | "status_changed" | "payment_recorded"
  changes?: { field: string; oldValue: any; newValue: any }[]
  performedBy: string
  performedAt: string
  notes?: string
}

const initialActivityLog: ActivityLogEntryType[] = [
  {
    id: "log-1",
    entityType: "expense",
    entityId: 1,
    entityDescription: "Adobe Creative Cloud - Team Plan",
    action: "created",
    performedBy: "Sarah Chen",
    performedAt: "2024-01-15T08:00:00Z",
  },
  {
    id: "log-2",
    entityType: "income",
    entityId: 1,
    entityDescription: "Monthly Retainer - TechCorp Inc",
    action: "created",
    performedBy: "Sarah Chen",
    performedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "log-3",
    entityType: "invoice",
    entityId: "INV-2024-001",
    entityDescription: "Invoice #INV-2024-001 - TechCorp Inc",
    action: "status_changed",
    changes: [{ field: "status", oldValue: "sent", newValue: "paid" }],
    performedBy: "Michael Torres",
    performedAt: "2024-01-14T15:30:00Z",
  },
  {
    id: "log-4",
    entityType: "expense",
    entityId: 2,
    entityDescription: "Google Ads - Client Campaign Budget",
    action: "updated",
    changes: [{ field: "amount", oldValue: 2000, newValue: 2500 }],
    performedBy: "Michael Torres",
    performedAt: "2024-01-14T11:00:00Z",
  },
]

export default function FinancesPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [viewMode, setViewMode] = useState<"kanban" | "list" | "grid">("kanban")
  const [searchQuery, setSearchQuery] = useState("")
  const [invoices, setInvoices] = useState<InvoiceData[]>([])
  const [expenses, setExpenses] = useState<ExpenseDataType[]>([])
  const [income, setIncome] = useState<IncomeEntry[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceData | null>(null)
  const [selectedExpense, setSelectedExpense] = useState<ExpenseDataType | null>(null)
  const [draggedInvoice, setDraggedInvoice] = useState<string | null>(null)
  const [dropTarget, setDropTarget] = useState<string | null>(null)
  const [showAddExpenseDialog, setShowAddExpenseDialog] = useState(false)
  const [showAddIncomeDialog, setShowAddIncomeDialog] = useState(false)
  const [showCreateInvoiceDialog, setShowCreateInvoiceDialog] = useState(false)

  // Activity Log and Edit States
  const [activityLog, setActivityLog] = useState<ActivityLogEntryType[]>([])
  const [showActivityLogDialog, setShowActivityLogDialog] = useState(false)
  const [showEditExpenseDialog, setShowEditExpenseDialog] = useState(false)
  const [showEditIncomeDialog, setShowEditIncomeDialog] = useState(false)
  const [showEditInvoiceDialog, setShowEditInvoiceDialog] = useState(false)
  const [showViewInvoiceDialog, setShowViewInvoiceDialog] = useState(false)
  const [showNeutralizeDialog, setShowNeutralizeDialog] = useState(false)
  const [showDeleteInvoiceDialog, setShowDeleteInvoiceDialog] = useState(false)
  const [showRecordPaymentDialog, setShowRecordPaymentDialog] = useState(false)
  const [recordPaymentInvoice, setRecordPaymentInvoice] = useState<InvoiceData | null>(null)
  const [paymentAmount, setPaymentAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer")
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split("T")[0])
  const [paymentNotes, setPaymentNotes] = useState("")
  const [neutralizeTarget, setNeutralizeTarget] = useState<{ type: "expense" | "income"; id: string | number } | null>(null)
  const [deleteInvoiceTarget, setDeleteInvoiceTarget] = useState<string | null>(null)
  const [selectedIncome, setSelectedIncome] = useState<IncomeEntry | null>(null)

  // Clients & Projects from DB for invoice form dropdowns
  const [allClients, setAllClients] = useState<any[]>([])
  const [allProjects, setAllProjects] = useState<any[]>([])

  // Load data from database on mount
  useEffect(() => {
    async function loadFinanceData() {
      try {
        const [invoiceRes, incomeRes, expenseRes, clientsRes, projectsRes] = await Promise.all([
          getInvoices(),
          getIncomeEntries(),
          getExpensesAction(),
          getClients(),
          getProjects(),
        ])
        if (Array.isArray(invoiceRes)) {
          setInvoices(invoiceRes as InvoiceData[])
        }
        if (Array.isArray(incomeRes)) {
          setIncome(incomeRes as unknown as IncomeEntry[])
        }
        if (Array.isArray(expenseRes)) {
          setExpenses(expenseRes as unknown as ExpenseDataType[])
        }
        if (Array.isArray(clientsRes)) {
          setAllClients(clientsRes)
        }
        if (Array.isArray(projectsRes)) {
          setAllProjects(projectsRes)
        }
      } catch (err) {
        console.error("Failed to load finance data:", err)
      }
    }
    loadFinanceData()
  }, [])

  const loadLogoImage = (): Promise<{ base64: string; width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = "/logo.png"
      img.onload = () => {
        const canvas = document.createElement("canvas")
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.drawImage(img, 0, 0)
          resolve({
            base64: canvas.toDataURL("image/png"),
            width: img.width,
            height: img.height,
          })
        } else {
          reject(new Error("Canvas context failed"))
        }
      }
      img.onerror = (err) => {
        reject(err)
      }
    })
  }

  const handleDownloadInvoice = async (invoiceId: string) => {
    const invoice = invoices.find(inv => inv.id === invoiceId);
    if (!invoice) return;

    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - margin * 2;
      let y = margin;

      // Load ZOO LYUM Logo
      let logoData = null
      try {
        logoData = await loadLogoImage()
      } catch (err) {
        console.warn("Could not load logo for PDF:", err)
      }

      if (logoData) {
        const logoWidth = 30 // 30mm
        const logoHeight = (logoData.height / logoData.width) * logoWidth
        pdf.addImage(logoData.base64, "PNG", margin, y - 5, logoWidth, logoHeight)

        pdf.setFontSize(22)
        pdf.setFont("helvetica", "bold")
        pdf.setTextColor(24, 24, 27) // zinc-900
        pdf.text("INVOICE", pageWidth - margin, y + 2, { align: "right" })

        pdf.setFontSize(10)
        pdf.setFont("helvetica", "normal")
        pdf.setTextColor(113, 113, 122) // zinc-500
        pdf.text(getInvoiceDisplayNumber(invoice), pageWidth - margin, y + 8, { align: "right" })

        y += Math.max(logoHeight, 15) + 5

        // Add dates section below logo/header
        pdf.setFontSize(9)
        pdf.setFont("helvetica", "normal")
        pdf.setTextColor(82, 82, 91) // zinc-600
        pdf.text(`Issue Date: ${formatDate(invoice.issueDate)}`, margin, y)
        pdf.text(`Due Date: ${formatDate(invoice.dueDate)}`, pageWidth - margin, y, { align: "right" })

        y += 6
      } else {
        // Fallback Header
        pdf.setFontSize(24)
        pdf.setFont("helvetica", "bold")
        pdf.text("INVOICE", margin, y)

        pdf.setFontSize(10)
        pdf.setFont("helvetica", "normal")
        pdf.setTextColor(100)
        pdf.text(getInvoiceDisplayNumber(invoice), margin, y + 7)

        // Issue date & due date on the right
        pdf.text(`Issue Date: ${formatDate(invoice.issueDate)}`, pageWidth - margin, y, { align: "right" })
        pdf.text(`Due Date: ${formatDate(invoice.dueDate)}`, pageWidth - margin, y + 5, { align: "right" })

        y += 20
      }

      // Divider
      pdf.setDrawColor(228, 228, 231); // zinc-200
      pdf.line(margin, y, pageWidth - margin, y);
      y += 8;

      // Bill To / Project info
      pdf.setFontSize(8)
      pdf.setTextColor(113, 113, 122) // zinc-500
      pdf.setFont("helvetica", "bold")
      pdf.text("BILL TO", margin, y)
      pdf.text("PROJECT DETAILS", pageWidth / 2 + 10, y)

      y += 5;
      pdf.setFontSize(11);
      pdf.setTextColor(24, 24, 27); // zinc-900
      pdf.setFont("helvetica", "bold");
      pdf.text(invoice.client, margin, y);
      pdf.text(invoice.project, pageWidth / 2 + 10, y);

      y += 5;
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(82, 82, 91); // zinc-600
      if (invoice.clientEmail) {
        pdf.text(invoice.clientEmail, margin, y);
      }
      pdf.text(`Payment: ${invoice.paymentMethod || "N/A"}`, pageWidth / 2 + 10, y);

      y += 12;

      // Table header
      pdf.setFillColor(244, 244, 245); // zinc-100
      pdf.rect(margin, y - 4, contentWidth, 8, "F");
      pdf.setFontSize(8);
      pdf.setTextColor(113, 113, 122); // zinc-500
      pdf.setFont("helvetica", "bold");
      pdf.text("DESCRIPTION", margin + 2, y);
      pdf.text("QTY", margin + contentWidth * 0.55, y, { align: "center" });
      pdf.text("RATE", margin + contentWidth * 0.72, y, { align: "right" });
      pdf.text("AMOUNT", margin + contentWidth - 2, y, { align: "right" });

      y += 6;
      pdf.setDrawColor(228, 228, 231); // zinc-200
      pdf.line(margin, y, pageWidth - margin, y);
      y += 5;

      // Table rows
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(39, 39, 42); // zinc-800

      invoice.items.forEach((item) => {
        const qty = Number(item.quantity) || 0;
        const rate = Number(item.rate) || 0;
        const amount = Number(item.amount) || 0;

        pdf.text(item.description || "", margin + 2, y);
        pdf.text(String(qty), margin + contentWidth * 0.55, y, { align: "center" });
        pdf.text(`BDT ${rate.toLocaleString()}`, margin + contentWidth * 0.72, y, { align: "right" });
        pdf.setFont("helvetica", "bold");
        pdf.text(`BDT ${amount.toLocaleString()}`, margin + contentWidth - 2, y, { align: "right" });
        pdf.setFont("helvetica", "normal");

        y += 6;
        pdf.setDrawColor(244, 244, 245); // zinc-100
        pdf.line(margin, y, pageWidth - margin, y);
        y += 5;
      });

      y += 5;

      // Financial summary - right aligned
      const summaryX = pageWidth - margin - 60;
      const valueX = pageWidth - margin;

      const subtotal = invoice.amount - invoice.tax + invoice.discount;
      const amountDue = invoice.amount - invoice.paid;

      pdf.setFontSize(9);
      pdf.setTextColor(113, 113, 122); // zinc-500
      pdf.text("Subtotal", summaryX, y);
      pdf.setTextColor(39, 39, 42); // zinc-800
      pdf.text(`BDT ${subtotal.toLocaleString()}`, valueX, y, { align: "right" });
      y += 6;

      if (invoice.discount > 0) {
        pdf.setTextColor(113, 113, 122);
        pdf.text("Discount", summaryX, y);
        pdf.setTextColor(22, 163, 74); // green
        pdf.text(`-BDT ${invoice.discount.toLocaleString()}`, valueX, y, { align: "right" });
        y += 6;
      }

      pdf.setTextColor(113, 113, 122);
      pdf.text("Tax", summaryX, y);
      pdf.setTextColor(39, 39, 42);
      pdf.text(`BDT ${invoice.tax.toLocaleString()}`, valueX, y, { align: "right" });
      y += 3;

      // Total line
      pdf.setDrawColor(82, 82, 91); // zinc-600
      pdf.line(summaryX - 5, y, valueX, y);
      y += 6;

      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(24, 24, 27); // zinc-900
      pdf.text("Total", summaryX, y);
      pdf.text(`BDT ${invoice.amount.toLocaleString()}`, valueX, y, { align: "right" });
      y += 7;

      if (invoice.paid > 0) {
        pdf.setFontSize(9);
        pdf.setTextColor(22, 163, 74);
        pdf.text("Paid", summaryX, y);
        pdf.text(`BDT ${invoice.paid.toLocaleString()}`, valueX, y, { align: "right" });
        y += 6;
      }

      if (amountDue > 0) {
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(220, 38, 38); // red
        pdf.text("Amount Due", summaryX, y);
        pdf.text(`BDT ${amountDue.toLocaleString()}`, valueX, y, { align: "right" });
        y += 8;
      }

      // Notes
      if (invoice.notes) {
        y += 5;
        pdf.setDrawColor(228, 228, 231); // zinc-200
        pdf.line(margin, y, pageWidth - margin, y);
        y += 6;

        pdf.setFontSize(8);
        pdf.setTextColor(113, 113, 122);
        pdf.setFont("helvetica", "bold");
        pdf.text("NOTES", margin, y);
        y += 4;

        pdf.setFontSize(9);
        pdf.setTextColor(82, 82, 91);
        const noteLines = pdf.splitTextToSize(invoice.notes, contentWidth);
        pdf.text(noteLines, margin, y);
      }

      pdf.save(`Invoice_${getInvoiceDisplayNumber(invoice)}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.")
    }
  }

  const [expenseFormData, setExpenseFormData] = useState({
    vendor: "",
    sourceType: "office" as "client_project" | "office" | "personal",
    category: "office_operations",
    subCategory: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
    paymentMethod: "bank-transfer",
    status: "pending",
    department: "general",
    clientId: "",
    clientName: "",
    project: "",
    taxDeductible: true,
    receipt: null as File | null,
    recurring: false,
    recurringFrequency: "monthly",
    notes: "",
  })

  const [incomeFormData, setIncomeFormData] = useState({
    sourceType: "client_payment" as "client_payment" | "office_income" | "personal" | "other",
    category: "project_payment",
    subCategory: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
    paymentMethod: "bank-transfer",
    status: "received",
    clientId: "",
    clientName: "",
    project: "",
    taxRate: 15,
    linkedInvoiceId: "",
    linkedInvoiceNumber: "",
    recurring: false,
    recurringFrequency: "monthly",
    notes: "",
  })

  // Invoice form state
  const defaultInvoiceFormData = {
    client: "",
    clientEmail: "",
    project: "",
    projectId: "",
    issueDate: new Date().toISOString().split("T")[0],
    dueDate: "",
    paymentTerms: "Net 30",
    paymentMethod: "Bank Transfer",
    category: "development",
    notes: "",
    internalNotes: "",
    recurringInvoice: false,
    taxRate: 8,
    discount: 0,
  }
  const [invoiceFormData, setInvoiceFormData] = useState(defaultInvoiceFormData)
  const [invoiceLineItems, setInvoiceLineItems] = useState<{ id: number; description: string; quantity: number; rate: number; amount: number; taxable: boolean }[]>([
    { id: 1, description: "", quantity: 1, rate: 0, amount: 0, taxable: true },
  ])
  const [editInvoiceLineItems, setEditInvoiceLineItems] = useState<{ id: number; description: string; quantity: number; rate: number; amount: number; taxable: boolean }[]>([])
  const [editInvoiceFormData, setEditInvoiceFormData] = useState(defaultInvoiceFormData)

  // Computed invoice totals
  const invoiceSubtotal = invoiceLineItems.reduce((sum, item) => sum + item.amount, 0)
  const invoiceTaxAmount = invoiceSubtotal * (invoiceFormData.taxRate / 100)
  const invoiceTotal = invoiceSubtotal + invoiceTaxAmount - invoiceFormData.discount

  const editInvoiceSubtotal = editInvoiceLineItems.reduce((sum, item) => sum + item.amount, 0)
  const editInvoiceTaxAmount = editInvoiceSubtotal * (editInvoiceFormData.taxRate / 100)
  const editInvoiceTotal = editInvoiceSubtotal + editInvoiceTaxAmount - editInvoiceFormData.discount

  // Derived: projects filtered by selected client for create dialog
  const clientProjectsForCreate = allProjects.filter(
    (p) => p.client === invoiceFormData.client
  )
  // Derived: projects filtered by selected client for edit dialog
  const clientProjectsForEdit = allProjects.filter(
    (p) => p.client === editInvoiceFormData.client
  )

  // Deduplicate clients by name
  const uniqueClients = Array.from(
    new Map(allClients.map((c) => [c.name, c])).values()
  )

  const [filters, setFilters] = useState({
    status: "all",
    client: "all",
    category: "all",
    dateRange: "all",
    paymentMethod: "all",
    recurring: "all",
  })

  const activeFiltersCount = Object.values(filters).filter(v => v !== "all").length

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.paid, 0)
  const totalPending = invoices.reduce((sum, inv) => sum + (inv.status !== "paid" ? inv.amount - inv.paid : 0), 0)
  const totalExpenses = expenses.filter((exp) => exp.status === "paid").reduce((sum, exp) => sum + exp.amount, 0)
  const pendingExpenses = expenses
    .filter((exp) => exp.status === "pending" || exp.status === "pending_approval")
    .reduce((sum, exp) => sum + exp.amount, 0)
  const netProfit = totalRevenue - totalExpenses
  const profitMargin = totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(1) : "0.0"
  const overdueAmount = invoices.filter((inv) => inv.status === "overdue").reduce((sum, inv) => sum + inv.amount, 0)
  const overdueCount = invoices.filter((inv) => inv.status === "overdue").length
  const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.amount, 0)
  const totalTax = invoices.reduce((sum, inv) => sum + inv.tax, 0)
  const avgInvoiceValue = invoices.length > 0 ? totalInvoiced / invoices.length : 0
  const recurringRevenue = income.filter((inc) => inc.recurring).reduce((sum, inc) => sum + inc.amount, 0)

  // ==================== Computed Chart Data (from DB) ====================
  const CHART_COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ec4899", "#8b5cf6", "#14b8a6", "#f97316", "#a855f7", "#06b6d4", "#ef4444"]

  // Revenue/Expenses/Profit trend by month (last 7 months)
  const computedRevenueData = (() => {
    const months: { month: string; revenue: number; expenses: number; profit: number }[] = []
    const now = new Date()
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
      const label = d.toLocaleDateString("en-US", { month: "short" })
      const monthRevenue = invoices
        .filter(inv => inv.issueDate?.startsWith(key))
        .reduce((s, inv) => s + inv.paid, 0)
      const monthExpenses = expenses
        .filter(exp => exp.date?.startsWith(key) && exp.status === "paid")
        .reduce((s, exp) => s + exp.amount, 0)
      months.push({ month: label, revenue: monthRevenue, expenses: monthExpenses, profit: monthRevenue - monthExpenses })
    }
    return months
  })()

  // Income by category pie chart
  const computedIncomeCategoryData = (() => {
    const map = new Map<string, number>()
    income.filter(inc => inc.entityStatus !== "neutralized").forEach(inc => {
      map.set(inc.category, (map.get(inc.category) || 0) + inc.amount)
    })
    return Array.from(map.entries()).map(([name, value], i) => ({
      name, value, color: CHART_COLORS[i % CHART_COLORS.length]
    }))
  })()

  // Expense by category pie chart
  const computedExpenseCategoryData = (() => {
    const map = new Map<string, { value: number; count: number }>()
    expenses.filter(exp => exp.entityStatus !== "neutralized").forEach(exp => {
      const prev = map.get(exp.category) || { value: 0, count: 0 }
      map.set(exp.category, { value: prev.value + exp.amount, count: prev.count + 1 })
    })
    return Array.from(map.entries()).map(([name, data], i) => ({
      name, value: data.value, count: data.count, color: CHART_COLORS[i % CHART_COLORS.length]
    }))
  })()

  // Cash flow by week (current month)
  const computedCashFlowData = (() => {
    const now = new Date()
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
    const weeks = [1, 2, 3, 4].map(w => ({ week: `W${w}`, inflow: 0, outflow: 0, net: 0 }))
    invoices.filter(inv => inv.issueDate?.startsWith(currentMonth)).forEach(inv => {
      const day = new Date(inv.issueDate).getDate()
      const wIdx = Math.min(Math.floor((day - 1) / 7), 3)
      weeks[wIdx].inflow += inv.paid
    })
    expenses.filter(exp => exp.date?.startsWith(currentMonth) && exp.status === "paid").forEach(exp => {
      const day = new Date(exp.date).getDate()
      const wIdx = Math.min(Math.floor((day - 1) / 7), 3)
      weeks[wIdx].outflow += exp.amount
    })
    weeks.forEach(w => { w.net = w.inflow - w.outflow })
    return weeks
  })()

  // Profit margin trend by month (last 7 months)
  const computedProfitMarginData = computedRevenueData.map(m => ({
    month: m.month,
    margin: m.revenue > 0 ? Number(((m.revenue - m.expenses) / m.revenue * 100).toFixed(1)) : 0,
  }))

  // Invoice category breakdown (Reports tab bar chart)
  const computedCategoryData = (() => {
    const map = new Map<string, number>()
    invoices.forEach(inv => {
      const cat = inv.category || "Other"
      const label = cat.charAt(0).toUpperCase() + cat.slice(1)
      map.set(label, (map.get(label) || 0) + inv.amount)
    })
    return Array.from(map.entries()).map(([name, value], i) => ({
      name, value, color: CHART_COLORS[i % CHART_COLORS.length]
    }))
  })()

  // Payment method distribution (Reports tab pie chart)
  const computedPaymentMethodData = (() => {
    const map = new Map<string, number>()
    invoices.forEach(inv => {
      const method = inv.paymentMethod || "Other"
      map.set(method, (map.get(method) || 0) + inv.paid)
    })
    return Array.from(map.entries()).map(([name, value], i) => ({
      name, value, color: CHART_COLORS[i % CHART_COLORS.length]
    }))
  })()

  // Expense distribution as budget overview (Reports tab)
  const computedBudgetData = (() => {
    const totalExp = expenses.reduce((s, e) => s + e.amount, 0)
    const map = new Map<string, number>()
    expenses.forEach(exp => {
      map.set(exp.category, (map.get(exp.category) || 0) + exp.amount)
    })
    return Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([category, spent]) => ({
        category,
        budget: totalExp, // total as context
        spent,
        remaining: totalExp - spent,
        percentage: totalExp > 0 ? (spent / totalExp) * 100 : 0,
      }))
  })()

  // Filter invoices
  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.project.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filters.status === "all" || invoice.status === filters.status
    const matchesCategory = filters.category === "all" || invoice.category === filters.category
    const matchesPaymentMethod = filters.paymentMethod === "all" || invoice.paymentMethod === filters.paymentMethod
    const matchesRecurring =
      filters.recurring === "all" ||
      (filters.recurring === "recurring" && invoice.recurringInvoice) ||
      (filters.recurring === "one-time" && !invoice.recurringInvoice)
    return matchesSearch && matchesStatus && matchesCategory && matchesPaymentMethod && matchesRecurring
  })

  // Filter expenses
  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch =
      expense.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.vendor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filters.category === "all" || expense.category === filters.category
    return matchesSearch && matchesCategory
  })

  // Filter income
  const filteredIncome = income.filter((inc) => {
    const matchesSearch =
      inc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inc.client.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filters.category === "all" || inc.category === filters.category
    return matchesSearch && matchesCategory
  })

  // Get invoices by status for kanban
  const getInvoicesByStatus = (status: string) => filteredInvoices.filter((inv) => inv.status === status)

  // Drag and drop handlers
  const handleDragStart = (invoiceId: string) => {
    setDraggedInvoice(invoiceId)
  }

  const handleDragOver = (e: React.DragEvent, status: string) => {
    e.preventDefault()
    setDropTarget(status)
  }

  const handleDragLeave = () => {
    setDropTarget(null)
  }

  const handleDrop = async (e: React.DragEvent, newStatus: string) => {
    e.preventDefault()
    if (draggedInvoice) {
      const invoice = invoices.find(inv => inv.id === draggedInvoice)
      if (!invoice) return

      const updateData: Record<string, any> = { status: newStatus }
      if (newStatus === "paid") {
        updateData.paid = invoice.amount
        updateData.paidDate = new Date().toISOString().split("T")[0]
      }

      // Optimistic local update
      setInvoices((prev) =>
        prev.map((inv) => {
          if (inv.id === draggedInvoice) {
            if (newStatus === "paid") {
              return { ...inv, status: newStatus, paid: inv.amount, paidDate: new Date().toISOString().split("T")[0] }
            }
            return { ...inv, status: newStatus }
          }
          return inv
        }),
      )

      // Persist to database
      try {
        await updateInvoiceAction(draggedInvoice, updateData)
      } catch (err) {
        console.error("Failed to persist invoice status change:", err)
        // Rollback on failure
        setInvoices(prev => prev.map(inv => inv.id === draggedInvoice ? { ...inv, status: invoice.status, paid: invoice.paid, paidDate: invoice.paidDate } : inv))
      }

      logActivity({
        entityType: "invoice",
        entityId: draggedInvoice,
        entityDescription: `Invoice #${invoice.invoiceNumber} - ${invoice.client}`,
        action: "status_changed",
        changes: [{ field: "status", oldValue: invoice.status, newValue: newStatus }],
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
      })
    }
    setDraggedInvoice(null)
    setDropTarget(null)
  }

  // ==================== Activity Log & Edit Handlers ====================

  const logActivity = (entry: Omit<typeof activityLog[0], "id">) => {
    const newEntry = {
      ...entry,
      id: `log-${Date.now()}`,
    }
    setActivityLog(prev => [newEntry, ...prev])
  }

  // Handle Edit Expense
  const handleSaveExpenseEdit = async (updatedExpense: typeof expenses[0]) => {
    const originalExpense = expenses.find(e => e.id === updatedExpense.id)
    if (!originalExpense) return

    // Find changes
    const changes: { field: string; oldValue: any; newValue: any }[] = []
    const updateData: Record<string, any> = {}
    Object.keys(updatedExpense).forEach(key => {
      const k = key as keyof typeof updatedExpense
      if (originalExpense[k] !== updatedExpense[k] && k !== 'updatedAt' && k !== 'id') {
        changes.push({
          field: key,
          oldValue: originalExpense[k],
          newValue: updatedExpense[k],
        })
        updateData[key] = updatedExpense[k]
      }
    })

    if (changes.length > 0) {
      try {
        await updateExpenseAction(String(updatedExpense.id), updateData)
      } catch (err) {
        console.error("Failed to update expense:", err)
        alert("Failed to update expense.")
        return
      }

      // Update expense
      setExpenses(prev =>
        prev.map(exp =>
          exp.id === updatedExpense.id
            ? { ...updatedExpense, updatedAt: new Date().toISOString() }
            : exp
        )
      )

      // Log activity
      logActivity({
        entityType: "expense",
        entityId: updatedExpense.id,
        entityDescription: updatedExpense.description,
        action: "updated",
        changes,
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
      })
    }

    setShowEditExpenseDialog(false)
    setSelectedExpense(null)
  }

  // Handle Edit Income
  const handleSaveIncomeEdit = async (updatedIncome: typeof income[0]) => {
    const originalIncome = income.find(i => i.id === updatedIncome.id)
    if (!originalIncome) return

    // Find changes
    const changes: { field: string; oldValue: any; newValue: any }[] = []
    const updateData: Record<string, any> = {}
    Object.keys(updatedIncome).forEach(key => {
      const k = key as keyof typeof updatedIncome
      if (originalIncome[k] !== updatedIncome[k] && k !== 'updatedAt' && k !== 'id') {
        changes.push({
          field: key,
          oldValue: originalIncome[k],
          newValue: updatedIncome[k],
        })
        updateData[key] = updatedIncome[k]
      }
    })

    if (changes.length > 0) {
      try {
        await updateIncomeAction(String(updatedIncome.id), updateData)
      } catch (err) {
        console.error("Failed to update income:", err)
        alert("Failed to update income.")
        return
      }

      // Update income
      setIncome(prev =>
        prev.map(inc =>
          inc.id === updatedIncome.id
            ? { ...updatedIncome, updatedAt: new Date().toISOString() }
            : inc
        )
      )

      // Log activity
      logActivity({
        entityType: "income",
        entityId: updatedIncome.id,
        entityDescription: updatedIncome.description,
        action: "updated",
        changes,
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
      })
    }

    setShowEditIncomeDialog(false)
    setSelectedIncome(null)
  }

  // Handle Neutralize Expense
  const handleNeutralizeExpense = async (expenseId: string | number) => {
    const expense = expenses.find(e => e.id === expenseId)
    if (!expense) return

    try {
      await updateExpenseAction(String(expenseId), { entityStatus: "neutralized" })

      setExpenses(prev =>
        prev.map(exp =>
          exp.id === expenseId
            ? { ...exp, entityStatus: "neutralized" as const, updatedAt: new Date().toISOString() }
            : exp
        )
      )

      logActivity({
        entityType: "expense",
        entityId: expenseId,
        entityDescription: expense.description,
        action: "neutralized",
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
        notes: "Expense neutralized - excluded from calculations",
      })
    } catch (err) {
      console.error("Failed to neutralize expense:", err)
      alert("Failed to neutralize expense.")
    }

    setShowNeutralizeDialog(false)
    setNeutralizeTarget(null)
    setSelectedExpense(null)
  }

  // Handle Neutralize Income
  const handleNeutralizeIncome = async (incomeId: string | number) => {
    const inc = income.find(i => i.id === incomeId)
    if (!inc) return

    try {
      await updateIncomeAction(String(incomeId), { entityStatus: "neutralized" })

      setIncome(prev =>
        prev.map(i =>
          i.id === incomeId
            ? { ...i, entityStatus: "neutralized" as const, updatedAt: new Date().toISOString() }
            : i
        )
      )

      logActivity({
        entityType: "income",
        entityId: incomeId,
        entityDescription: inc.description,
        action: "neutralized",
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
        notes: "Income neutralized - excluded from calculations",
      })
    } catch (err) {
      console.error("Failed to neutralize income:", err)
      alert("Failed to neutralize income.")
    }

    setShowNeutralizeDialog(false)
    setNeutralizeTarget(null)
    setSelectedIncome(null)
  }

  // Handle Restore Expense
  const handleRestoreExpense = async (expenseId: string | number) => {
    const expense = expenses.find(e => e.id === expenseId)
    if (!expense) return

    try {
      await updateExpenseAction(String(expenseId), { entityStatus: "active" })

      setExpenses(prev =>
        prev.map(exp =>
          exp.id === expenseId
            ? { ...exp, entityStatus: "active" as const, updatedAt: new Date().toISOString() }
            : exp
        )
      )

      logActivity({
        entityType: "expense",
        entityId: expenseId,
        entityDescription: expense.description,
        action: "restored",
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
      })
    } catch (err) {
      console.error("Failed to restore expense:", err)
      alert("Failed to restore expense.")
    }
  }

  // Handle Restore Income
  const handleRestoreIncome = async (incomeId: string | number) => {
    const inc = income.find(i => i.id === incomeId)
    if (!inc) return

    try {
      await updateIncomeAction(String(incomeId), { entityStatus: "active" })

      setIncome(prev =>
        prev.map(i =>
          i.id === incomeId
            ? { ...i, entityStatus: "active" as const, updatedAt: new Date().toISOString() }
            : i
        )
      )

      logActivity({
        entityType: "income",
        entityId: incomeId,
        entityDescription: inc.description,
        action: "restored",
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
      })
    } catch (err) {
      console.error("Failed to restore income:", err)
      alert("Failed to restore income.")
    }
  }

  // Handle Delete Invoice
  const handleDeleteInvoice = async (invoiceId: string) => {
    const invoice = invoices.find(inv => inv.id === invoiceId)
    if (!invoice) return

    try {
      await deleteInvoiceAction(invoiceId)

      setInvoices(prev => prev.filter(inv => inv.id !== invoiceId))

      logActivity({
        entityType: "invoice",
        entityId: invoiceId,
        entityDescription: `Invoice #${invoice.invoiceNumber} - ${invoice.client}`,
        action: "deleted",
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
      })
    } catch (err) {
      console.error("Failed to delete invoice:", err)
      alert("Failed to delete invoice.")
    }

    setShowDeleteInvoiceDialog(false)
    setDeleteInvoiceTarget(null)
    setSelectedInvoice(null)
  }

  // Confirm Neutralize
  const confirmNeutralize = () => {
    if (!neutralizeTarget) return

    if (neutralizeTarget.type === "expense") {
      handleNeutralizeExpense(neutralizeTarget.id)
    } else {
      handleNeutralizeIncome(neutralizeTarget.id)
    }
  }

  // Format activity log date
  const formatActivityDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  const handleAddExpense = async () => {
    if (!expenseFormData.vendor || !expenseFormData.amount) {
      alert("Please fill in all required fields")
      return
    }

    const expenseAmount = Number.parseFloat(expenseFormData.amount)

    try {
      const created = await createExpenseAction({
        vendor: expenseFormData.vendor,
        sourceType: expenseFormData.sourceType,
        category: expenseFormData.category,
        subCategory: expenseFormData.subCategory,
        amount: expenseAmount,
        date: expenseFormData.date,
        description: expenseFormData.description,
        paymentMethod: expenseFormData.paymentMethod,
        status: expenseFormData.status as "pending" | "approved" | "paid",
        department: expenseFormData.department,
        clientId: expenseFormData.clientId || null,
        clientName: expenseFormData.clientName || null,
        project: expenseFormData.project || null,
        taxDeductible: expenseFormData.taxDeductible,
        recurring: expenseFormData.recurring,
        recurringFrequency: expenseFormData.recurring ? expenseFormData.recurringFrequency : null,
        notes: expenseFormData.notes,
        approvalStatus: expenseFormData.status === "approved" ? "approved" : "pending",
        approvedBy: expenseFormData.status === "approved" ? "Finance Manager" : null,
        receiptUrl: null,
      })

      if (created && !('error' in created)) {
        setExpenses([created as any, ...expenses])
        logActivity({
          entityType: "expense",
          entityId: created.id,
          entityDescription: created.description,
          action: "created",
          performedBy: "Current User",
          performedAt: new Date().toISOString(),
        })
      } else {
        alert("Failed to create expense.")
      }
    } catch (err) {
      console.error("Error creating expense:", err)
      alert("Failed to create expense. Please try again.")
    }

    setShowAddExpenseDialog(false)
    setExpenseFormData({
      vendor: "",
      sourceType: "office",
      category: "office_operations",
      subCategory: "",
      amount: "",
      date: new Date().toISOString().split("T")[0],
      description: "",
      paymentMethod: "bank-transfer",
      status: "pending",
      department: "general",
      clientId: "",
      clientName: "",
      project: "",
      taxDeductible: true,
      receipt: null,
      recurring: false,
      recurringFrequency: "monthly",
      notes: "",
    })
  }

  const handleAddIncome = async () => {
    if (!incomeFormData.description || !incomeFormData.amount) {
      alert("Please fill in all required fields")
      return
    }

    const incomeAmount = Number.parseFloat(incomeFormData.amount)
    const taxAmount = Math.round(incomeAmount * (incomeFormData.taxRate / 100))

    try {
      const created = await createIncomeAction({
        description: incomeFormData.description,
        category: incomeFormData.category,
        subCategory: incomeFormData.subCategory,
        amount: incomeAmount,
        date: incomeFormData.date,
        client: incomeFormData.clientName || "Direct",
        project: (incomeFormData.project && incomeFormData.project !== "none_general") ? incomeFormData.project : undefined,
        status: incomeFormData.status as "pending" | "received",
        invoiceId: incomeFormData.linkedInvoiceId || null,
        paymentMethod: incomeFormData.paymentMethod,
        recurring: incomeFormData.recurring,
        recurringFrequency: incomeFormData.recurring ? incomeFormData.recurringFrequency : null,
        taxAmount: taxAmount,
        notes: incomeFormData.notes,
      })

      if (created && !('error' in created)) {
        setIncome([created as any, ...income])
        logActivity({
          entityType: "income",
          entityId: created.id,
          entityDescription: created.description,
          action: "created",
          performedBy: "Current User",
          performedAt: new Date().toISOString(),
        })
      } else {
        alert("Failed to create income.")
      }
    } catch (err) {
      console.error("Error creating income:", err)
      alert("Failed to create income. Please try again.")
    }

    setShowAddIncomeDialog(false)
    setIncomeFormData({
      sourceType: "client_payment",
      category: "project_payment",
      subCategory: "",
      amount: "",
      date: new Date().toISOString().split("T")[0],
      description: "",
      paymentMethod: "bank-transfer",
      status: "received",
      clientId: "",
      clientName: "",
      project: "",
      taxRate: 15,
      linkedInvoiceId: "",
      linkedInvoiceNumber: "",
      recurring: false,
      recurringFrequency: "monthly",
      notes: "",
    })
  }

  // ==================== Invoice Line Item Management ====================

  const handleAddInvoiceLineItem = (isEdit = false) => {
    const items = isEdit ? editInvoiceLineItems : invoiceLineItems
    const setItems = isEdit ? setEditInvoiceLineItems : setInvoiceLineItems
    const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    setItems([...items, { id: newId, description: "", quantity: 1, rate: 0, amount: 0, taxable: true }])
  }

  const handleRemoveInvoiceLineItem = (itemId: number, isEdit = false) => {
    const setItems = isEdit ? setEditInvoiceLineItems : setInvoiceLineItems
    setItems(prev => prev.filter(item => item.id !== itemId))
  }

  const handleInvoiceLineItemChange = (itemId: number, field: string, value: string | number | boolean, isEdit = false) => {
    const setItems = isEdit ? setEditInvoiceLineItems : setInvoiceLineItems
    setItems(prev => prev.map(item => {
      if (item.id !== itemId) return item
      const updated = { ...item, [field]: value }
      if (field === "quantity" || field === "rate") {
        updated.amount = Number(updated.quantity) * Number(updated.rate)
      }
      return updated
    }))
  }

  // ==================== Create Invoice ====================

  const handleCreateInvoice = async (asDraft: boolean) => {
    if (!invoiceFormData.client || !invoiceFormData.project) {
      alert("Please fill in client and project fields")
      return
    }
    if (invoiceLineItems.length === 0 || invoiceLineItems.every(i => !i.description)) {
      alert("Please add at least one line item")
      return
    }

    try {
      // Auto-generate invoice number from database using project name
      const invoiceNumber = await generateNextInvoiceNumber(invoiceFormData.project)

      const invoiceData = {
        invoiceNumber,
        client: invoiceFormData.client,
        clientEmail: invoiceFormData.clientEmail,
        project: invoiceFormData.project,
        projectId: invoiceFormData.projectId || "",
        amount: invoiceTotal,
        paid: 0,
        tax: invoiceTaxAmount,
        discount: invoiceFormData.discount,
        status: asDraft ? "draft" : "sent",
        dueDate: invoiceFormData.dueDate,
        issueDate: invoiceFormData.issueDate,
        paidDate: null as string | null,
        paymentMethod: invoiceFormData.paymentMethod,
        paymentTerms: invoiceFormData.paymentTerms,
        currency: "BDT",
        items: invoiceLineItems.filter(i => i.description).map(item => ({
          id: item.id,
          description: item.description,
          quantity: item.quantity,
          rate: item.rate,
          amount: item.amount,
          taxable: item.taxable,
        })),
        notes: invoiceFormData.notes,
        internalNotes: invoiceFormData.internalNotes,
        category: invoiceFormData.category,
        recurringInvoice: invoiceFormData.recurringInvoice,
        attachments: [] as string[],
      }

      // Persist to database
      const created = await createInvoiceAction(invoiceData)
      if (created && !('error' in created)) {
        setInvoices(prev => [created as typeof prev[0], ...prev])
      }

      logActivity({
        entityType: "invoice",
        entityId: invoiceNumber,
        entityDescription: `Invoice #${invoiceNumber} - ${invoiceFormData.client}`,
        action: "created",
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
      })

      // Reset form
      setInvoiceFormData(defaultInvoiceFormData)
      setInvoiceLineItems([{ id: 1, description: "", quantity: 1, rate: 0, amount: 0, taxable: true }])
      setShowCreateInvoiceDialog(false)
    } catch (error) {
      console.error("Error creating invoice:", error)
      alert("Failed to create invoice. Please try again.")
    }
  }

  // ==================== Edit Invoice ====================

  const openEditInvoice = (invoice: typeof invoices[0]) => {
    setSelectedInvoice(invoice)
    setEditInvoiceFormData({
      client: invoice.client,
      clientEmail: invoice.clientEmail,
      project: invoice.project,
      projectId: invoice.projectId,
      issueDate: invoice.issueDate,
      dueDate: invoice.dueDate,
      paymentTerms: invoice.paymentTerms,
      paymentMethod: invoice.paymentMethod,
      category: invoice.category,
      notes: invoice.notes || "",
      internalNotes: invoice.internalNotes || "",
      recurringInvoice: invoice.recurringInvoice,
      taxRate: invoice.amount > 0 ? Math.round((invoice.tax / (invoice.amount - invoice.tax + invoice.discount)) * 100) : 8,
      discount: invoice.discount,
    })
    setEditInvoiceLineItems(invoice.items.map(item => ({
      id: item.id,
      description: item.description,
      quantity: item.quantity,
      rate: item.rate,
      amount: item.amount,
      taxable: item.taxable,
    })))
    setShowEditInvoiceDialog(true)
  }

  const handleSaveInvoiceEdit = () => {
    if (!selectedInvoice) return

    const updatedInvoice = {
      ...selectedInvoice,
      client: editInvoiceFormData.client,
      clientEmail: editInvoiceFormData.clientEmail,
      project: editInvoiceFormData.project,
      projectId: editInvoiceFormData.projectId,
      issueDate: editInvoiceFormData.issueDate,
      dueDate: editInvoiceFormData.dueDate,
      paymentTerms: editInvoiceFormData.paymentTerms,
      paymentMethod: editInvoiceFormData.paymentMethod,
      category: editInvoiceFormData.category,
      notes: editInvoiceFormData.notes,
      internalNotes: editInvoiceFormData.internalNotes,
      recurringInvoice: editInvoiceFormData.recurringInvoice,
      amount: editInvoiceTotal,
      tax: editInvoiceTaxAmount,
      discount: editInvoiceFormData.discount,
      items: editInvoiceLineItems.filter(i => i.description).map(item => ({
        id: item.id,
        description: item.description,
        quantity: item.quantity,
        rate: item.rate,
        amount: item.amount,
        taxable: item.taxable,
      })),
    }

    setInvoices(prev => prev.map(inv => inv.id === selectedInvoice.id ? updatedInvoice : inv))

    logActivity({
      entityType: "invoice",
      entityId: selectedInvoice.id,
      entityDescription: `Invoice #${selectedInvoice.invoiceNumber} - ${editInvoiceFormData.client}`,
      action: "updated",
      performedBy: "Current User",
      performedAt: new Date().toISOString(),
    })

    setShowEditInvoiceDialog(false)
    setSelectedInvoice(null)
  }

  // ==================== Duplicate Invoice ====================

  const handleDuplicateInvoice = async (invoice: typeof invoices[0]) => {
    try {
      const invoiceNumber = await generateNextInvoiceNumber(invoice.project)

      const duplicatedInvoice = {
        ...invoice,
        id: invoiceNumber,
        invoiceNumber,
        status: "draft",
        paid: 0,
        paidDate: null as string | null,
        issueDate: new Date().toISOString().split("T")[0],
      }

      setInvoices(prev => [duplicatedInvoice, ...prev])

      logActivity({
        entityType: "invoice",
        entityId: invoiceNumber,
        entityDescription: `Invoice #${invoiceNumber} duplicated from #${invoice.invoiceNumber}`,
        action: "created",
        performedBy: "Current User",
        performedAt: new Date().toISOString(),
      })
    } catch (err) {
      console.error("Failed to duplicate invoice:", err)
    }
  }

  // ==================== Invoice Status Change ====================

  const handleInvoiceStatusChange = async (invoiceId: string, newStatus: string) => {
    const invoice = invoices.find(inv => inv.id === invoiceId)
    if (!invoice) return

    const updateData: Record<string, any> = { status: newStatus }
    if (newStatus === "paid") {
      updateData.paid = invoice.amount
      updateData.paidDate = new Date().toISOString().split("T")[0]
    }

    // Optimistic local update
    setInvoices(prev => prev.map(inv => {
      if (inv.id !== invoiceId) return inv
      if (newStatus === "paid") {
        return { ...inv, status: newStatus, paid: inv.amount, paidDate: new Date().toISOString().split("T")[0] }
      }
      return { ...inv, status: newStatus }
    }))

    // Persist to database
    try {
      await updateInvoiceAction(invoiceId, updateData)
    } catch (err) {
      console.error("Failed to persist invoice status change:", err)
      // Rollback on failure
      setInvoices(prev => prev.map(inv => inv.id === invoiceId ? { ...inv, status: invoice.status, paid: invoice.paid, paidDate: invoice.paidDate } : inv))
    }

    logActivity({
      entityType: "invoice",
      entityId: invoiceId,
      entityDescription: `Invoice #${invoice.invoiceNumber} - ${invoice.client}`,
      action: "status_changed",
      changes: [{ field: "status", oldValue: invoice.status, newValue: newStatus }],
      performedBy: "Current User",
      performedAt: new Date().toISOString(),
    })
  }

  // ==================== Record Payment ====================

  const openRecordPayment = (invoice: InvoiceData) => {
    setRecordPaymentInvoice(invoice)
    setPaymentAmount(String(invoice.amount - invoice.paid))
    setPaymentMethod(invoice.paymentMethod || "Bank Transfer")
    setPaymentDate(new Date().toISOString().split("T")[0])
    setPaymentNotes("")
    setShowRecordPaymentDialog(true)
  }

  const handleRecordPayment = async () => {
    if (!recordPaymentInvoice) return

    const amount = Number.parseFloat(paymentAmount)
    const remainingDue = recordPaymentInvoice.amount - recordPaymentInvoice.paid

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid payment amount.")
      return
    }
    if (amount > remainingDue) {
      alert(`Payment amount cannot exceed remaining due: ${formatCurrency(remainingDue)}`)
      return
    }

    const newPaid = recordPaymentInvoice.paid + amount
    const isFullyPaid = newPaid >= recordPaymentInvoice.amount
    const newStatus = isFullyPaid ? "paid" : "partial"
    const newPaidDate = isFullyPaid ? paymentDate : recordPaymentInvoice.paidDate

    const updateData: Record<string, any> = {
      paid: newPaid,
      status: newStatus,
    }
    if (isFullyPaid) {
      updateData.paidDate = paymentDate
    }

    // Optimistic local update
    setInvoices(prev => prev.map(inv =>
      inv.id === recordPaymentInvoice.id
        ? { ...inv, paid: newPaid, status: newStatus, paidDate: newPaidDate }
        : inv
    ))

    // Persist invoice update
    try {
      await updateInvoiceAction(recordPaymentInvoice.id, updateData)
    } catch (err) {
      console.error("Failed to persist payment:", err)
      // Rollback
      setInvoices(prev => prev.map(inv =>
        inv.id === recordPaymentInvoice.id
          ? { ...inv, paid: recordPaymentInvoice.paid, status: recordPaymentInvoice.status, paidDate: recordPaymentInvoice.paidDate }
          : inv
      ))
      alert("Failed to record payment. Please try again.")
      return
    }

    // Auto-create linked income entry
    try {
      const incomeEntry = await createIncomeAction({
        description: `Payment for ${recordPaymentInvoice.invoiceNumber} - ${recordPaymentInvoice.project}`,
        category: "project_payment",
        amount: amount,
        date: paymentDate,
        client: recordPaymentInvoice.client,
        project: recordPaymentInvoice.project,
        status: "received",
        invoiceId: recordPaymentInvoice.id,
        paymentMethod: paymentMethod,
        notes: paymentNotes || `${isFullyPaid ? "Full" : "Partial"} payment for invoice ${recordPaymentInvoice.invoiceNumber}`,
      })
      if (incomeEntry && !('error' in incomeEntry)) {
        setIncome(prev => [incomeEntry as any, ...prev])
      }
    } catch (err) {
      console.error("Failed to create linked income entry:", err)
    }

    logActivity({
      entityType: "invoice",
      entityId: recordPaymentInvoice.id,
      entityDescription: `Invoice #${recordPaymentInvoice.invoiceNumber} - ${recordPaymentInvoice.client}`,
      action: "payment_recorded",
      changes: [
        { field: "paid", oldValue: recordPaymentInvoice.paid, newValue: newPaid },
        { field: "status", oldValue: recordPaymentInvoice.status, newValue: newStatus },
      ],
      performedBy: "Current User",
      performedAt: new Date().toISOString(),
      notes: `${isFullyPaid ? "Full" : "Partial"} payment of ${formatCurrency(amount)} recorded`,
    })

    setShowRecordPaymentDialog(false)
    setRecordPaymentInvoice(null)
  }

  // ==================== Invoice Display Number with Status Suffix ====================

  const getInvoiceDisplayNumber = (invoice: InvoiceData): string => {
    const base = invoice.invoiceNumber
    if (invoice.status === "paid") return `${base}-p`
    if (invoice.status === "partial") return `${base}-pr`
    return `${base}-d`
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-col lg:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-balance text-2xl font-bold text-foreground">Financial Management</h1>
            <p className="text-pretty text-muted-foreground">
              Comprehensive financial tracking, invoicing, expenses, and profitability analysis
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowActivityLogDialog(true)}>
              <History className="mr-2 h-4 w-4" />
              Activity Log
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Import
            </Button>
            <Button size="sm" onClick={() => setShowCreateInvoiceDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Invoice
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <AnimatedCard delay={0}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Total Revenue</p>
                  <p className="text-lg font-bold">{formatCurrency(totalRevenue)}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-emerald-500" />
                    <span className="text-xs text-emerald-500 font-medium">+12.5%</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <DollarSign className="h-4 w-4 text-emerald-500" />
                </div>
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Net Profit</p>
                  <p className="text-lg font-bold">{formatCurrency(netProfit)}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Percent className="h-3 w-3 text-blue-500" />
                    <span className="text-xs text-blue-500 font-medium">{profitMargin}% margin</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Total Expenses</p>
                  <p className="text-lg font-bold">{formatCurrency(totalExpenses)}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3 text-amber-500" />
                    <span className="text-xs text-amber-500 font-medium">
                      {formatCurrency(pendingExpenses)} pending
                    </span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-red-500/10">
                  <TrendingDown className="h-4 w-4 text-red-500" />
                </div>
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Outstanding</p>
                  <p className="text-lg font-bold">{formatCurrency(totalPending)}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3 text-amber-500" />
                    <span className="text-xs text-amber-500 font-medium">
                      {invoices.filter((inv) => inv.status === "pending" || inv.status === "partial").length} invoices
                    </span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-amber-500/10">
                  <Clock className="h-4 w-4 text-amber-500" />
                </div>
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.4}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Overdue</p>
                  <p className="text-lg font-bold text-red-500">{formatCurrency(overdueAmount)}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <AlertTriangle className="h-3 w-3 text-red-500" />
                    <span className="text-xs text-red-500 font-medium">{overdueCount} invoices</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-red-500/10">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </div>
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.5}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">MRR</p>
                  <p className="text-lg font-bold">{formatCurrency(recurringRevenue)}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Repeat className="h-3 w-3 text-purple-500" />
                    <span className="text-xs text-purple-500 font-medium">Recurring</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Repeat className="h-4 w-4 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </AnimatedCard>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Revenue & Profit Chart */}
            <AnimatedCard delay={0.1}>
              <CardHeader>
                <CardTitle>Revenue, Expenses & Profit Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={computedRevenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      fill="#6366f1"
                      fillOpacity={0.2}
                      stroke="#6366f1"
                      name="Revenue"
                    />
                    <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
                    <Line type="monotone" dataKey="profit" stroke="#22c55e" strokeWidth={2} name="Profit" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedCard delay={0.2}>
                <CardHeader>
                  <CardTitle>Income by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <RechartsPieChart>
                      <Pie data={computedIncomeCategoryData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                        {computedIncomeCategoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {computedIncomeCategoryData.map((cat) => (
                      <div key={cat.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: cat.color }} />
                        <span className="text-sm text-muted-foreground">{cat.name}</span>
                        <span className="text-sm font-medium ml-auto">{formatCurrency(cat.value)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              {/* Expense Categories */}
              <AnimatedCard delay={0.3}>
                <CardHeader>
                  <CardTitle>Expenses by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <RechartsPieChart>
                      <Pie data={computedExpenseCategoryData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                        {computedExpenseCategoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {computedExpenseCategoryData.slice(0, 6).map((cat) => (
                      <div key={cat.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: cat.color }} />
                        <span className="text-sm text-muted-foreground">{cat.name}</span>
                        <span className="text-sm font-medium ml-auto">{formatCurrency(cat.value)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              {/* Cash Flow */}
              <AnimatedCard delay={0.4}>
                <CardHeader>
                  <CardTitle>Weekly Cash Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={computedCashFlowData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Bar dataKey="inflow" fill="#22c55e" name="Inflow" />
                      <Bar dataKey="outflow" fill="#ef4444" name="Outflow" />
                      <Bar dataKey="net" fill="#6366f1" name="Net" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </AnimatedCard>

              {/* Profit Margin Trend */}
              <AnimatedCard delay={0.5}>
                <CardHeader>
                  <CardTitle>Profit Margin Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={computedProfitMarginData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" unit="%" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="margin"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        dot={{ fill: "#8b5cf6", r: 5 }}
                        name="Profit Margin %"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="mt-4 p-3 bg-purple-500/10 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Current Profit Margin</span>
                      <span className="text-2xl font-bold text-purple-500">{profitMargin}%</span>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>

            <AnimatedCard delay={0.6}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Transactions</CardTitle>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[...invoices, ...expenses.map((e) => ({ ...e, type: "expense" }))]
                    .sort((a, b) => new Date((b as any).date || (b as any).issueDate).getTime() - new Date((a as any).date || (a as any).issueDate).getTime())
                    .slice(0, 8)
                    .map((item) => {
                      const isExpense = "vendor" in item
                      return (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn("p-2 rounded-lg", isExpense ? "bg-red-500/10" : "bg-emerald-500/10")}>
                              {isExpense ? (
                                <ArrowDownRight className="h-4 w-4 text-red-500" />
                              ) : (
                                <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{isExpense ? item.description : (item as any).client}</p>
                              <p className="text-sm text-muted-foreground">
                                {isExpense ? (item as any).vendor : (item as any).project} • {formatDate((item as any).date || (item as any).issueDate)}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={cn("font-bold", isExpense ? "text-red-500" : "text-emerald-500")}>
                              {isExpense ? "-" : "+"}
                              {formatCurrency(item.amount)}
                            </p>
                            {!isExpense && (
                              <Badge variant="secondary" className="text-xs">
                                {statusConfig[(item as any).status]?.label || (item as any).status}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )
                    })}
                </div>
              </CardContent>
            </AnimatedCard>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="space-y-6">
            {/* Toolbar */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 flex-1 max-w-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search invoices by client, number, or project..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)} className="relative">
                  <Filter className="h-4 w-4" />
                  {activeFiltersCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                      {activeFiltersCount}
                    </span>
                  )}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 border rounded-lg p-1">
                  <Button
                    variant={viewMode === "kanban" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("kanban")}
                  >
                    <Columns3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("grid")}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Filters */}
            {showFilters && (
              <AnimatedCard delay={0}>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">Status</label>
                      <Select
                        value={filters.status}
                        onValueChange={(value) => setFilters((prev) => ({ ...prev, status: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="sent">Sent</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="partial">Partial Paid</SelectItem>
                          <SelectItem value="paid">Paid</SelectItem>
                          <SelectItem value="overdue">Overdue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">Category</label>
                      <Select
                        value={filters.category}
                        onValueChange={(value) => setFilters((prev) => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="creative">Creative</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">Payment Method</label>
                      <Select
                        value={filters.paymentMethod}
                        onValueChange={(value) => setFilters((prev) => ({ ...prev, paymentMethod: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Methods</SelectItem>
                          <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                          <SelectItem value="Credit Card">Credit Card</SelectItem>
                          <SelectItem value="ACH">ACH</SelectItem>
                          <SelectItem value="Wire Transfer">Wire Transfer</SelectItem>
                          <SelectItem value="PayPal">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">Type</label>
                      <Select
                        value={filters.recurring}
                        onValueChange={(value) => setFilters((prev) => ({ ...prev, recurring: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="recurring">Recurring</SelectItem>
                          <SelectItem value="one-time">One-Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        onClick={() =>
                          setFilters({
                            status: "all",
                            client: "all",
                            category: "all",
                            dateRange: "all",
                            paymentMethod: "all",
                            recurring: "all",
                          })
                        }
                      >
                        Clear Filters
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            )}

            {/* Kanban View */}
            {viewMode === "kanban" && (
              <div className="grid grid-cols-6 gap-4">
                {invoiceColumns.map((column) => {
                  const columnInvoices = getInvoicesByStatus(column.id)
                  const columnTotal = columnInvoices.reduce((sum, inv) => sum + inv.amount, 0)

                  return (
                    <div key={column.id} className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                        <div className="flex items-center gap-2">
                          <div className={cn("w-2 h-2 rounded-full", column.color)} />
                          <span className="font-medium text-sm">{column.title}</span>
                          <Badge variant="secondary" className="text-xs">
                            {columnInvoices.length}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground px-1">{formatCurrency(columnTotal)}</div>
                      <div
                        className={cn(
                          "min-h-[600px] space-y-2 p-2 rounded-lg border-2 border-dashed transition-colors",
                          dropTarget === column.id ? "border-primary bg-primary/5" : "border-transparent",
                        )}
                        onDragOver={(e) => handleDragOver(e, column.id)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, column.id)}
                      >
                        {columnInvoices.map((invoice) => {
                          const StatusIcon = statusConfig[invoice.status]?.icon
                          const paidPercentage = (invoice.paid / invoice.amount) * 100

                          return (
                            <AnimatedCard
                              key={invoice.id}
                              delay={0}
                              className={cn(
                                "cursor-move hover:shadow-lg transition-shadow",
                                draggedInvoice === invoice.id && "opacity-50",
                                invoice.status === "overdue" && "ring-1 ring-red-500/30",
                              )}
                              // @ts-expect-error
                              draggable
                              onDragStart={() => handleDragStart(invoice.id)}
                            >
                              <CardContent className="p-3 space-y-2">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <p className="font-bold text-xs text-muted-foreground">{getInvoiceDisplayNumber(invoice)}</p>
                                      {invoice.recurringInvoice && (
                                        <Badge variant="outline" className="text-[10px] h-4 px-1 border-blue-500/30 text-blue-400">
                                          <Repeat className="h-2 w-2 mr-0.5" />
                                          Recurring
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="font-semibold text-sm">{invoice.client}</p>
                                    <p className="text-xs text-muted-foreground line-clamp-1">{invoice.project}</p>
                                    {(() => {
                                      const cat = INVOICE_CATEGORY_CONFIG[invoice.category]; return cat ? (
                                        <Badge className={cn("text-[10px] mt-1 border-0 h-4", cat.bgColor, cat.color)}>
                                          <span className="mr-0.5">{cat.icon}</span> {cat.label}
                                        </Badge>
                                      ) : null
                                    })()}
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setSelectedInvoice(invoice)
                                      setShowViewInvoiceDialog(true)
                                    }}
                                  >
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                </div>

                                <div className="space-y-1">
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-muted-foreground">Amount</span>
                                    <span className="font-bold">{formatCurrency(invoice.amount)}</span>
                                  </div>
                                  {invoice.paid > 0 && (
                                    <>
                                      <Progress value={paidPercentage} className="h-1" />
                                      <div className="flex items-center justify-between text-xs">
                                        <span className="text-emerald-500">Paid: {formatCurrency(invoice.paid)}</span>
                                        <span className="text-muted-foreground">{paidPercentage.toFixed(0)}%</span>
                                      </div>
                                    </>
                                  )}
                                </div>

                                <div className="flex items-center justify-between text-xs pt-2 border-t">
                                  <span className="text-muted-foreground">Due: {formatDate(invoice.dueDate)}</span>
                                  <Badge variant="secondary" className="text-[10px] h-4">
                                    {invoice.category}
                                  </Badge>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                  <Badge variant="outline" className="text-[10px]">
                                    {invoice.paymentMethod}
                                  </Badge>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-6 w-6">
                                        <MoreVertical className="h-3 w-3" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem onClick={() => openEditInvoice(invoice)}>
                                        <Edit className="mr-2 h-3 w-3" />
                                        Edit
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleDuplicateInvoice(invoice)}>
                                        <Copy className="mr-2 h-3 w-3" />
                                        Duplicate
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleInvoiceStatusChange(invoice.id, "sent")}>
                                        <Mail className="mr-2 h-3 w-3" />
                                        Send
                                      </DropdownMenuItem>
                                      {invoice.status !== "paid" && (
                                        <DropdownMenuItem onClick={(e) => { e.stopPropagation(); openRecordPayment(invoice) }}>
                                          <Wallet className="mr-2 h-3 w-3" />
                                          Record Payment
                                        </DropdownMenuItem>
                                      )}
                                      <DropdownMenuSeparator />
                                      {invoice.status !== "paid" && (
                                        <DropdownMenuItem onClick={() => handleInvoiceStatusChange(invoice.id, "paid")}>
                                          <CheckCircle2 className="mr-2 h-3 w-3" />
                                          Mark as Paid
                                        </DropdownMenuItem>
                                      )}
                                      <DropdownMenuItem className="text-red-500" onClick={() => { setDeleteInvoiceTarget(invoice.id); setShowDeleteInvoiceDialog(true) }}>
                                        <Trash2 className="mr-2 h-3 w-3" />
                                        Delete
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </CardContent>
                            </AnimatedCard>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredInvoices.map((invoice, idx) => {
                  const StatusIcon = statusConfig[invoice.status]?.icon
                  const paidPercentage = (invoice.paid / invoice.amount) * 100

                  return (
                    <AnimatedCard key={invoice.id} delay={idx * 0.05} className={cn(invoice.status === "overdue" && "ring-1 ring-red-500/30")}>
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-bold text-sm text-muted-foreground mb-1">{getInvoiceDisplayNumber(invoice)}</p>
                            <p className="font-semibold text-lg">{invoice.client}</p>
                            <p className="text-sm text-muted-foreground">{invoice.project}</p>
                          </div>
                          <Badge className={statusConfig[invoice.status]?.color}>
                            {statusConfig[invoice.status]?.label}
                          </Badge>
                        </div>

                        <div className="space-y-2 pt-2 border-t">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Total Amount</span>
                            <span className="font-bold text-lg">{formatCurrency(invoice.amount)}</span>
                          </div>
                          {invoice.paid > 0 && (
                            <>
                              <Progress value={paidPercentage} className="h-2" />
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-emerald-500 font-medium">
                                  Paid: {formatCurrency(invoice.paid)}
                                </span>
                                <span className="text-muted-foreground">{paidPercentage.toFixed(0)}%</span>
                              </div>
                            </>
                          )}
                          {invoice.paid < invoice.amount && (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-red-500 font-medium">
                                Due: {formatCurrency(invoice.amount - invoice.paid)}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2 border-t text-xs">
                          <div>
                            <p className="text-muted-foreground">Issue Date</p>
                            <p className="font-medium">{formatDate(invoice.issueDate)}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Due Date</p>
                            <p className={cn("font-medium", invoice.status === "overdue" && "text-red-400")}>{formatDate(invoice.dueDate)}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">
                              {invoice.paymentMethod}
                            </Badge>
                            {(() => {
                              const cat = INVOICE_CATEGORY_CONFIG[invoice.category]; return cat ? (
                                <Badge className={cn("text-[10px] border-0", cat.bgColor, cat.color)}>
                                  <span className="mr-0.5">{cat.icon}</span> {cat.label}
                                </Badge>
                              ) : (
                                <Badge variant="secondary" className="text-xs">{invoice.category}</Badge>
                              )
                            })()}
                            {invoice.recurringInvoice && (
                              <Badge variant="outline" className="text-xs border-blue-500/30 text-blue-400">
                                <Repeat className="h-2 w-2 mr-1" />
                                Recurring
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-transparent"
                            onClick={() => {
                              setSelectedInvoice(invoice)
                              setShowViewInvoiceDialog(true)
                            }}
                          >
                            <Eye className="mr-2 h-3 w-3" />
                            View
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => openEditInvoice(invoice)}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDuplicateInvoice(invoice)}>
                                <Copy className="mr-2 h-4 w-4" />
                                Duplicate
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleInvoiceStatusChange(invoice.id, "sent")}>
                                <Mail className="mr-2 h-4 w-4" />
                                Send
                              </DropdownMenuItem>
                              {invoice.status !== "paid" && (
                                <DropdownMenuItem onClick={(e) => { e.stopPropagation(); openRecordPayment(invoice) }}>
                                  <Wallet className="mr-2 h-4 w-4" />
                                  Record Payment
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              {invoice.status !== "paid" && (
                                <DropdownMenuItem onClick={() => handleInvoiceStatusChange(invoice.id, "paid")}>
                                  <CheckCircle2 className="mr-2 h-4 w-4" />
                                  Mark as Paid
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem className="text-red-500" onClick={() => { setDeleteInvoiceTarget(invoice.id); setShowDeleteInvoiceDialog(true) }}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </CardContent>
                    </AnimatedCard>
                  )
                })}
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <AnimatedCard delay={0}>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="text-left p-3 text-xs font-medium text-muted-foreground">Invoice #</th>
                          <th className="text-left p-3 text-xs font-medium text-muted-foreground">Client</th>
                          <th className="text-left p-3 text-xs font-medium text-muted-foreground">Project</th>
                          <th className="text-left p-3 text-xs font-medium text-muted-foreground">Amount</th>
                          <th className="text-left p-3 text-xs font-medium text-muted-foreground">Paid</th>
                          <th className="text-left p-3 text-xs font-medium text-muted-foreground">Status</th>
                          <th className="text-left p-3 text-xs font-medium text-muted-foreground">Due Date</th>
                          <th className="text-left p-3 text-xs font-medium text-muted-foreground">Payment</th>
                          <th className="text-right p-3 text-xs font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredInvoices.map((invoice) => {
                          const paidPercentage = (invoice.paid / invoice.amount) * 100
                          const StatusIcon = statusConfig[invoice.status]?.icon

                          return (
                            <tr key={invoice.id} className={cn("border-b hover:bg-muted/30 transition-colors cursor-pointer", invoice.status === "overdue" && "bg-red-500/5")} onClick={() => { setSelectedInvoice(invoice); setShowViewInvoiceDialog(true) }}>
                              <td className="p-3">
                                <p className="font-mono text-sm font-semibold">{getInvoiceDisplayNumber(invoice)}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  {invoice.recurringInvoice && (
                                    <Badge variant="outline" className="text-[10px] h-4 border-blue-500/30 text-blue-400">
                                      <Repeat className="h-2 w-2 mr-0.5" />
                                      Recurring
                                    </Badge>
                                  )}
                                </div>
                              </td>
                              <td className="p-3">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-7 w-7">
                                    <AvatarImage src={invoice.clientLogo || "/placeholder.svg"} />
                                    <AvatarFallback className="text-[10px]">{invoice.client.substring(0, 2)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium text-sm">{invoice.client}</p>
                                    <p className="text-xs text-muted-foreground">{invoice.clientEmail}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3">
                                <p className="text-sm font-medium">{invoice.project}</p>
                                {(() => {
                                  const cat = INVOICE_CATEGORY_CONFIG[invoice.category]; return cat ? (
                                    <Badge className={cn("text-[10px] mt-1 border-0", cat.bgColor, cat.color)}>
                                      <span className="mr-0.5">{cat.icon}</span> {cat.label}
                                    </Badge>
                                  ) : (
                                    <Badge variant="secondary" className="text-[10px] mt-1">{invoice.category}</Badge>
                                  )
                                })()}
                              </td>
                              <td className="p-3">
                                <p className="font-bold">{formatCurrency(invoice.amount)}</p>
                                {invoice.tax > 0 && (
                                  <p className="text-[10px] text-muted-foreground">+{formatCurrency(invoice.tax)} tax</p>
                                )}
                              </td>
                              <td className="p-3">
                                <div className="flex items-center gap-2">
                                  <div className="min-w-[60px]">
                                    <p className={cn("font-semibold text-sm", invoice.paid > 0 ? "text-emerald-500" : "text-muted-foreground")}>{formatCurrency(invoice.paid)}</p>
                                  </div>
                                  <div className="flex-1 min-w-[50px]">
                                    <Progress value={paidPercentage} className="h-1.5" />
                                    <p className="text-[10px] text-muted-foreground mt-0.5">{Math.round(paidPercentage)}%</p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3">
                                <Badge className={cn(statusConfig[invoice.status]?.color, "gap-1")}>
                                  {StatusIcon && <StatusIcon className="h-3 w-3" />}
                                  {statusConfig[invoice.status]?.label}
                                </Badge>
                                {invoice.status === "overdue" && (() => {
                                  const daysOverdue = Math.floor((new Date().getTime() - new Date(invoice.dueDate).getTime()) / (1000 * 60 * 60 * 24))
                                  return daysOverdue > 0 ? (
                                    <p className="text-[10px] text-red-400 font-medium mt-1">{daysOverdue} days overdue</p>
                                  ) : null
                                })()}
                              </td>
                              <td className="p-3">
                                <p className="text-sm">{formatDate(invoice.dueDate)}</p>
                                {invoice.paidDate ? (
                                  <p className="text-[10px] text-emerald-500 flex items-center gap-0.5"><CheckCircle2 className="h-2.5 w-2.5" /> Paid: {formatDate(invoice.paidDate)}</p>
                                ) : invoice.status === "overdue" ? (
                                  <p className="text-[10px] text-red-400 font-medium">Past due</p>
                                ) : null}
                              </td>
                              <td className="p-3">
                                <Badge variant="outline" className="text-xs">
                                  {invoice.paymentMethod}
                                </Badge>
                              </td>
                              <td className="p-3" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-end gap-1">
                                  {(invoice.status === "overdue" || invoice.status === "pending" || invoice.status === "sent") && (
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-7 w-7 text-amber-500 hover:text-amber-400 hover:bg-amber-500/10"
                                      title="Send Reminder"
                                      onClick={() => alert(`Payment reminder sent to ${invoice.clientEmail}`)}
                                    >
                                      <Mail className="h-3.5 w-3.5" />
                                    </Button>
                                  )}
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7"
                                    onClick={() => {
                                      setSelectedInvoice(invoice)
                                      setShowViewInvoiceDialog(true)
                                    }}
                                  >
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-7 w-7">
                                        <MoreHorizontal className="h-3 w-3" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem onClick={() => openEditInvoice(invoice)}>
                                        <Edit className="mr-2 h-3 w-3" />
                                        Edit
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleDuplicateInvoice(invoice)}>
                                        <Copy className="mr-2 h-3 w-3" />
                                        Duplicate
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleInvoiceStatusChange(invoice.id, "sent")}>
                                        <Mail className="mr-2 h-3 w-3" />
                                        Send
                                      </DropdownMenuItem>
                                      {invoice.status !== "paid" && (
                                        <DropdownMenuItem onClick={(e) => { e.stopPropagation(); openRecordPayment(invoice) }}>
                                          <Wallet className="mr-2 h-3 w-3" />
                                          Record Payment
                                        </DropdownMenuItem>
                                      )}
                                      <DropdownMenuSeparator />
                                      {invoice.status !== "paid" && (
                                        <DropdownMenuItem onClick={() => handleInvoiceStatusChange(invoice.id, "paid")}>
                                          <CheckCircle2 className="mr-2 h-3 w-3" />
                                          Mark as Paid
                                        </DropdownMenuItem>
                                      )}
                                      <DropdownMenuItem className="text-red-500" onClick={() => { setDeleteInvoiceTarget(invoice.id); setShowDeleteInvoiceDialog(true) }}>
                                        <Trash2 className="mr-2 h-3 w-3" />
                                        Delete
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </AnimatedCard>
            )}
          </TabsContent>

          <TabsContent value="income" className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Income Tracking</h3>
                <p className="text-sm text-muted-foreground">Monitor all revenue streams and payment receipts</p>
              </div>
              <Dialog open={showAddIncomeDialog} onOpenChange={setShowAddIncomeDialog}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Record Income
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Record New Income</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    {/* Step 1: Source Type Selection */}
                    <div className="space-y-3">
                      <Label className="text-sm font-semibold">Income Source Type *</Label>
                      <div className="grid grid-cols-4 gap-3">
                        {[
                          { id: "client_payment", label: "Client Payment", icon: "👤", desc: "From a client", color: "border-green-500 bg-green-500/10" },
                          { id: "office_income", label: "Office Income", icon: "🏢", desc: "Business ops", color: "border-blue-500 bg-blue-500/10" },
                          { id: "personal", label: "Personal", icon: "💰", desc: "Owner invest", color: "border-purple-500 bg-purple-500/10" },
                          { id: "other", label: "Other", icon: "📦", desc: "Misc income", color: "border-gray-500 bg-gray-500/10" },
                        ].map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setIncomeFormData({ ...incomeFormData, sourceType: type.id as any })}
                            className={cn(
                              "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all hover:scale-105",
                              incomeFormData.sourceType === type.id
                                ? type.color + " border-2"
                                : "border-border hover:border-muted-foreground/50"
                            )}
                          >
                            <span className="text-2xl">{type.icon}</span>
                            <span className="font-medium text-sm">{type.label}</span>
                            <span className="text-xs text-muted-foreground">{type.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Category & Sub-category */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="incomeCategory">Category *</Label>
                        <Select
                          value={incomeFormData.category}
                          onValueChange={(value) => setIncomeFormData({ ...incomeFormData, category: value, subCategory: "" })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="project_payment">📋 Project Payment</SelectItem>
                            <SelectItem value="retainer">🔄 Retainer</SelectItem>
                            <SelectItem value="consulting">💼 Consulting</SelectItem>
                            <SelectItem value="other_income">📦 Other Income</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="incomeSubCategory">Sub-category</Label>
                        <Select
                          value={incomeFormData.subCategory}
                          onValueChange={(value) => setIncomeFormData({ ...incomeFormData, subCategory: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select sub-category" />
                          </SelectTrigger>
                          <SelectContent>
                            {incomeFormData.category === "project_payment" && (
                              <>
                                <SelectItem value="milestone">Milestone Payment</SelectItem>
                                <SelectItem value="final_delivery">Final Delivery</SelectItem>
                                <SelectItem value="advance">Advance Payment</SelectItem>
                                <SelectItem value="partial">Partial Payment</SelectItem>
                              </>
                            )}
                            {incomeFormData.category === "retainer" && (
                              <>
                                <SelectItem value="monthly">Monthly Retainer</SelectItem>
                                <SelectItem value="quarterly">Quarterly Retainer</SelectItem>
                                <SelectItem value="annual">Annual Retainer</SelectItem>
                              </>
                            )}
                            {incomeFormData.category === "consulting" && (
                              <>
                                <SelectItem value="hourly">Hourly Consulting</SelectItem>
                                <SelectItem value="advisory">Advisory Services</SelectItem>
                                <SelectItem value="strategy">Strategy Session</SelectItem>
                              </>
                            )}
                            {incomeFormData.category === "other_income" && (
                              <>
                                <SelectItem value="interest">Interest Income</SelectItem>
                                <SelectItem value="refund">Refund</SelectItem>
                                <SelectItem value="asset_sale">Asset Sale</SelectItem>
                                <SelectItem value="commission">Commission</SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Step 3: Client Selection (only for client_payment) */}
                    {incomeFormData.sourceType === "client_payment" && (
                      <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 space-y-4">
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <span className="text-lg">👤</span>
                          <span className="font-medium">Client Payment Details</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Client *</Label>
                            <Select
                              value={incomeFormData.clientName}
                              onValueChange={(value) => setIncomeFormData({ ...incomeFormData, clientName: value, clientId: value, project: "" })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select client" />
                              </SelectTrigger>
                              <SelectContent>
                                {uniqueClients.map(c => (
                                  <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                                ))}
                                {uniqueClients.length === 0 && (
                                  <SelectItem value="none" disabled>No clients found</SelectItem>
                                )}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Link to Invoice</Label>
                            <Select
                              value={incomeFormData.linkedInvoiceId}
                              onValueChange={(value) => {
                                const invoice = invoices.find(inv => inv.id === value)
                                if (invoice) {
                                  setIncomeFormData({
                                    ...incomeFormData,
                                    linkedInvoiceId: value,
                                    linkedInvoiceNumber: invoice.invoiceNumber,
                                    amount: String(invoice.amount - invoice.paid),
                                    clientName: invoice.client,
                                    clientId: invoice.client,
                                    project: invoice.project,
                                    description: `Payment for ${invoice.invoiceNumber} - ${invoice.project}`
                                  })
                                }
                              }}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Link to invoice (optional)" />
                              </SelectTrigger>
                              <SelectContent>
                                {invoices.filter(inv => inv.status !== "paid" && (!incomeFormData.clientName || inv.client === incomeFormData.clientName)).map(inv => (
                                  <SelectItem key={inv.id} value={inv.id}>
                                    {inv.invoiceNumber} - ${inv.amount - inv.paid} due
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Project</Label>
                          <Select
                            value={incomeFormData.project}
                            onValueChange={(value) => setIncomeFormData({ ...incomeFormData, project: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={incomeFormData.clientName ? "Select project" : "Select client first"} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none_general">None / General Payment</SelectItem>
                              {allProjects.filter(p => p.client === incomeFormData.clientName).map((p) => (
                                <SelectItem key={p.id} value={p.name}>
                                  {p.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Amount & Date */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="incomeAmount">Amount *</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <Input
                            id="incomeAmount"
                            type="number"
                            className="pl-7"
                            placeholder="0.00"
                            value={incomeFormData.amount}
                            onChange={(e) => setIncomeFormData({ ...incomeFormData, amount: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="incomeDate">Date *</Label>
                        <Input
                          id="incomeDate"
                          type="date"
                          value={incomeFormData.date}
                          onChange={(e) => setIncomeFormData({ ...incomeFormData, date: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="incomePaymentMethod">Payment Method</Label>
                        <Select
                          value={incomeFormData.paymentMethod}
                          onValueChange={(value) => setIncomeFormData({ ...incomeFormData, paymentMethod: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bank-transfer">🏦 Bank Transfer</SelectItem>
                            <SelectItem value="credit-card">💳 Credit Card</SelectItem>
                            <SelectItem value="cash">💵 Cash</SelectItem>
                            <SelectItem value="check">📝 Check</SelectItem>
                            <SelectItem value="paypal">💰 PayPal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Step 5: Description */}
                    <div className="space-y-2">
                      <Label htmlFor="incomeDescription">Description *</Label>
                      <Textarea
                        id="incomeDescription"
                        value={incomeFormData.description}
                        onChange={(e) => setIncomeFormData({ ...incomeFormData, description: e.target.value })}
                        rows={2}
                        placeholder="Describe the income source..."
                      />
                    </div>

                    {/* Step 6: Notes & Recurring */}
                    <div className="space-y-2">
                      <Label htmlFor="incomeNotes">Internal Notes</Label>
                      <Textarea
                        id="incomeNotes"
                        value={incomeFormData.notes}
                        onChange={(e) => setIncomeFormData({ ...incomeFormData, notes: e.target.value })}
                        rows={2}
                        placeholder="Add internal notes..."
                      />
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <input
                        type="checkbox"
                        id="incomeRecurring"
                        checked={incomeFormData.recurring}
                        onChange={(e) => setIncomeFormData({ ...incomeFormData, recurring: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <Label htmlFor="incomeRecurring" className="mb-0 cursor-pointer">
                        Mark as Recurring Income
                      </Label>
                      {incomeFormData.recurring && (
                        <Select
                          value={incomeFormData.recurringFrequency}
                          onValueChange={(value) => setIncomeFormData({ ...incomeFormData, recurringFrequency: value })}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    </div>

                    <div className="flex justify-end gap-2 pt-4 border-t">
                      <Button variant="outline" onClick={() => setShowAddIncomeDialog(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddIncome}>Record Income</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <AnimatedCard delay={0}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <CircleDollarSign className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Total Income</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(
                          income.filter((i) => i.status === "received").reduce((sum, i) => sum + i.amount, 0),
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.1}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Repeat className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Recurring</p>
                      <p className="text-xl font-bold">{formatCurrency(recurringRevenue)}</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Banknote className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">One-Time</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(
                          income
                            .filter((i) => !i.recurring && i.status === "received")
                            .reduce((sum, i) => sum + i.amount, 0),
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <Clock className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Pending</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(
                          income.filter((i) => i.status === "pending").reduce((sum, i) => sum + i.amount, 0),
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>

            <AnimatedCard delay={0.1}>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Date</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Description</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Client</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Category</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Amount</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Tax</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Status</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Payment Method</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredIncome.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3">
                            <p className="text-sm font-medium">{formatDate(item.date)}</p>
                          </td>
                          <td className="p-3">
                            <p className="font-medium text-sm">{item.description}</p>
                            <p className="text-xs text-muted-foreground">{item.project}</p>
                            {item.recurring && (
                              <Badge variant="outline" className="text-[10px] h-4 mt-1">
                                <Repeat className="h-2 w-2 mr-0.5" />
                                Recurring
                              </Badge>
                            )}
                          </td>
                          <td className="p-3">
                            <p className="text-sm">{item.client}</p>
                          </td>
                          <td className="p-3">
                            <Badge variant="secondary" className="text-xs">
                              {item.category}
                            </Badge>
                          </td>
                          <td className="p-3">
                            <p className="font-bold text-emerald-500">{formatCurrency(item.amount)}</p>
                          </td>
                          <td className="p-3">
                            <p className="text-sm text-muted-foreground">{formatCurrency(item.taxAmount)}</p>
                          </td>
                          <td className="p-3">
                            {item.status === "received" ? (
                              <Badge className="bg-emerald-500/10 text-emerald-500">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Received
                              </Badge>
                            ) : (
                              <Badge className="bg-amber-500/10 text-amber-500">
                                <Clock className="h-3 w-3 mr-1" />
                                Pending
                              </Badge>
                            )}
                          </td>
                          <td className="p-3">
                            <Badge variant="outline" className="text-xs">
                              {item.paymentMethod}
                            </Badge>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center justify-end gap-1">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7"
                                    onClick={() => setSelectedIncome(item)}
                                  >
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Income Details</DialogTitle>
                                  </DialogHeader>
                                  {selectedIncome && selectedIncome.id === item.id && (
                                    <div className="space-y-4 py-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Description</p>
                                          <p className="font-medium">{selectedIncome.description}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Amount</p>
                                          <p className="font-bold text-2xl text-emerald-500">
                                            {formatCurrency(selectedIncome.amount)}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Client</p>
                                          <p className="font-medium">{selectedIncome.client}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Project</p>
                                          <Badge variant="secondary">{selectedIncome.project}</Badge>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Date</p>
                                          <p className="font-medium">{formatDate(selectedIncome.date)}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Category</p>
                                          <Badge>{selectedIncome.category}</Badge>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Payment Method</p>
                                          <Badge variant="outline">{selectedIncome.paymentMethod}</Badge>
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
                                          <Badge
                                            className={
                                              selectedIncome.status === "received"
                                                ? "bg-emerald-500/10 text-emerald-500"
                                                : "bg-amber-500/10 text-amber-500"
                                            }
                                          >
                                            {selectedIncome.status === "received" ? "Received" : "Pending"}
                                          </Badge>
                                        </div>
                                      </div>

                                      {selectedIncome.invoiceId && (
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Linked Invoice</p>
                                          <Badge variant="outline">{selectedIncome.invoiceId}</Badge>
                                        </div>
                                      )}

                                      <div className="flex items-center gap-2">
                                        <Checkbox checked={selectedIncome.recurring} disabled />
                                        <Label className="text-sm">Recurring income</Label>
                                      </div>

                                      {/* Activity History Section */}
                                      <div className="pt-4 border-t">
                                        <div className="flex items-center gap-2 mb-3">
                                          <History className="h-4 w-4 text-muted-foreground" />
                                          <p className="font-medium text-sm">Activity History</p>
                                        </div>
                                        <div className="space-y-2 max-h-40 overflow-y-auto">
                                          {activityLog
                                            .filter(
                                              (log) =>
                                                log.entityType === "income" &&
                                                log.entityId === selectedIncome.id
                                            )
                                            .map((log) => (
                                              <div
                                                key={log.id}
                                                className="flex items-start gap-3 p-2 rounded-lg bg-muted/30 text-xs"
                                              >
                                                <span>
                                                  {log.action === "created" && "➕"}
                                                  {log.action === "updated" && "✏️"}
                                                  {log.action === "neutralized" && "⚪"}
                                                  {log.action === "restored" && "♻️"}
                                                </span>
                                                <div className="flex-1">
                                                  <p className="font-medium capitalize">
                                                    {log.action.replace("_", " ")}
                                                  </p>
                                                  {log.changes &&
                                                    log.changes.map((c, i) => (
                                                      <p key={i} className="text-muted-foreground">
                                                        {c.field}: {String(c.oldValue)} → {String(c.newValue)}
                                                      </p>
                                                    ))}
                                                  <p className="text-muted-foreground mt-1">
                                                    {formatActivityDate(log.performedAt)} • {log.performedBy}
                                                  </p>
                                                </div>
                                              </div>
                                            ))}
                                          {activityLog.filter(
                                            (log) =>
                                              log.entityType === "income" &&
                                              log.entityId === selectedIncome.id
                                          ).length === 0 && (
                                              <p className="text-xs text-muted-foreground text-center py-2">
                                                No activity recorded yet.
                                              </p>
                                            )}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-7 w-7">
                                    <MoreHorizontal className="h-3 w-3" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-3 w-3" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <FileText className="mr-2 h-3 w-3" />
                                    View Invoice
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-500">
                                    <Trash2 className="mr-2 h-3 w-3" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </AnimatedCard>
          </TabsContent>

          <TabsContent value="expenses" className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Expense Management</h3>
                <p className="text-sm text-muted-foreground">
                  Track and approve business expenses with detailed categorization
                </p>
              </div>
              <Dialog open={showAddExpenseDialog} onOpenChange={setShowAddExpenseDialog}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Expense
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add New Expense</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    {/* Step 1: Expense Type Selection */}
                    <div className="space-y-3">
                      <Label className="text-sm font-semibold">Expense Type *</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: "client_project", label: "Client Project", icon: "👤", desc: "Billable expense", color: "border-green-500 bg-green-500/10" },
                          { id: "office", label: "Office / Company", icon: "🏢", desc: "Business operations", color: "border-blue-500 bg-blue-500/10" },
                          { id: "personal", label: "Personal", icon: "💰", desc: "Owner withdrawal", color: "border-purple-500 bg-purple-500/10" },
                        ].map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setExpenseFormData({ ...expenseFormData, sourceType: type.id as any })}
                            className={cn(
                              "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all hover:scale-105",
                              expenseFormData.sourceType === type.id
                                ? type.color + " border-2"
                                : "border-border hover:border-muted-foreground/50"
                            )}
                          >
                            <span className="text-2xl">{type.icon}</span>
                            <span className="font-medium text-sm">{type.label}</span>
                            <span className="text-xs text-muted-foreground">{type.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Category & Sub-category */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expenseCategory">Category *</Label>
                        <Select
                          value={expenseFormData.category}
                          onValueChange={(value) => setExpenseFormData({ ...expenseFormData, category: value, subCategory: "" })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="office_operations">🏢 Office Operations</SelectItem>
                            <SelectItem value="software_tools">💻 Software & Tools</SelectItem>
                            <SelectItem value="marketing">📢 Marketing & Advertising</SelectItem>
                            <SelectItem value="contractors">👥 Contractors & Freelancers</SelectItem>
                            <SelectItem value="infrastructure">🔧 Infrastructure</SelectItem>
                            <SelectItem value="team">👨‍💼 Team & HR</SelectItem>
                            <SelectItem value="travel">✈️ Travel & Transportation</SelectItem>
                            <SelectItem value="client_expense">📁 Client Project Expense</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expenseSubCategory">Sub-category</Label>
                        <Select
                          value={expenseFormData.subCategory}
                          onValueChange={(value) => setExpenseFormData({ ...expenseFormData, subCategory: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select sub-category" />
                          </SelectTrigger>
                          <SelectContent>
                            {expenseFormData.category === "office_operations" && (
                              <>
                                <SelectItem value="rent">Rent & Lease</SelectItem>
                                <SelectItem value="utilities">Utilities</SelectItem>
                                <SelectItem value="supplies">Office Supplies</SelectItem>
                                <SelectItem value="maintenance">Maintenance</SelectItem>
                                <SelectItem value="furniture">Furniture</SelectItem>
                              </>
                            )}
                            {expenseFormData.category === "software_tools" && (
                              <>
                                <SelectItem value="subscription">Subscriptions</SelectItem>
                                <SelectItem value="license">Licenses</SelectItem>
                                <SelectItem value="cloud">Cloud Services</SelectItem>
                                <SelectItem value="saas">SaaS Products</SelectItem>
                              </>
                            )}
                            {expenseFormData.category === "marketing" && (
                              <>
                                <SelectItem value="ads">Paid Advertising</SelectItem>
                                <SelectItem value="events">Events & Sponsorship</SelectItem>
                                <SelectItem value="promotions">Promotions</SelectItem>
                                <SelectItem value="content">Content Creation</SelectItem>
                              </>
                            )}
                            {expenseFormData.category === "contractors" && (
                              <>
                                <SelectItem value="freelancer">Freelancer Payment</SelectItem>
                                <SelectItem value="agency">Agency Fee</SelectItem>
                                <SelectItem value="consultant">Consultant</SelectItem>
                              </>
                            )}
                            {expenseFormData.category === "infrastructure" && (
                              <>
                                <SelectItem value="hosting">Web Hosting</SelectItem>
                                <SelectItem value="domain">Domains</SelectItem>
                                <SelectItem value="server">Server Costs</SelectItem>
                                <SelectItem value="cdn">CDN Services</SelectItem>
                              </>
                            )}
                            {expenseFormData.category === "team" && (
                              <>
                                <SelectItem value="salaries">Salaries</SelectItem>
                                <SelectItem value="benefits">Benefits</SelectItem>
                                <SelectItem value="training">Training & Development</SelectItem>
                                <SelectItem value="team_building">Team Building</SelectItem>
                              </>
                            )}
                            {expenseFormData.category === "travel" && (
                              <>
                                <SelectItem value="flight">Flights</SelectItem>
                                <SelectItem value="hotel">Hotels</SelectItem>
                                <SelectItem value="transport">Local Transport</SelectItem>
                                <SelectItem value="meals">Meals & Entertainment</SelectItem>
                              </>
                            )}
                            {expenseFormData.category === "client_expense" && (
                              <>
                                <SelectItem value="production">Production Costs</SelectItem>
                                <SelectItem value="third_party">Third-party Services</SelectItem>
                                <SelectItem value="assets">Asset Purchases</SelectItem>
                                <SelectItem value="tools">Project Tools</SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Step 3: Client Selection (only for client_project) */}
                    {expenseFormData.sourceType === "client_project" && (
                      <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 space-y-4">
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <span className="text-lg">👤</span>
                          <span className="font-medium">Client Project Details (Billable)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Client *</Label>
                            <Select
                              value={expenseFormData.clientName}
                              onValueChange={(value) => setExpenseFormData({ ...expenseFormData, clientName: value, clientId: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select client" />
                              </SelectTrigger>
                              <SelectContent>
                                {invoices.map(inv => inv.client).filter((v, i, a) => a.indexOf(v) === i).map(client => (
                                  <SelectItem key={client} value={client}>{client}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Project</Label>
                            <Input
                              placeholder="Project name"
                              value={expenseFormData.project}
                              onChange={(e) => setExpenseFormData({ ...expenseFormData, project: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Vendor, Amount & Date */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expenseVendor">Vendor *</Label>
                        <Input
                          id="expenseVendor"
                          placeholder="e.g., Amazon, Google"
                          value={expenseFormData.vendor}
                          onChange={(e) => setExpenseFormData({ ...expenseFormData, vendor: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expenseAmount">Amount *</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <Input
                            id="expenseAmount"
                            type="number"
                            className="pl-7"
                            placeholder="0.00"
                            value={expenseFormData.amount}
                            onChange={(e) => setExpenseFormData({ ...expenseFormData, amount: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expenseDate">Date *</Label>
                        <Input
                          id="expenseDate"
                          type="date"
                          value={expenseFormData.date}
                          onChange={(e) => setExpenseFormData({ ...expenseFormData, date: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Step 5: Payment & Status */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expensePaymentMethod">Payment Method</Label>
                        <Select
                          value={expenseFormData.paymentMethod}
                          onValueChange={(value) => setExpenseFormData({ ...expenseFormData, paymentMethod: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bank-transfer">🏦 Bank Transfer</SelectItem>
                            <SelectItem value="credit-card">💳 Credit Card</SelectItem>
                            <SelectItem value="company-card">💼 Company Card</SelectItem>
                            <SelectItem value="cash">💵 Cash</SelectItem>
                            <SelectItem value="ach">📋 ACH</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expenseStatus">Status</Label>
                        <Select
                          value={expenseFormData.status}
                          onValueChange={(value) => setExpenseFormData({ ...expenseFormData, status: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">⏳ Pending</SelectItem>
                            <SelectItem value="approved">✅ Approved</SelectItem>
                            <SelectItem value="paid">💸 Paid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Step 6: Description */}
                    <div className="space-y-2">
                      <Label htmlFor="expenseDescription">Description</Label>
                      <Textarea
                        id="expenseDescription"
                        value={expenseFormData.description}
                        onChange={(e) => setExpenseFormData({ ...expenseFormData, description: e.target.value })}
                        rows={2}
                        placeholder="Describe the expense..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expenseNotes">Internal Notes</Label>
                      <Textarea
                        id="expenseNotes"
                        value={expenseFormData.notes}
                        onChange={(e) => setExpenseFormData({ ...expenseFormData, notes: e.target.value })}
                        rows={2}
                        placeholder="Add internal notes..."
                      />
                    </div>

                    {/* Step 7: Options */}
                    <div className="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="expenseTaxDeductible"
                          checked={expenseFormData.taxDeductible}
                          onChange={(e) => setExpenseFormData({ ...expenseFormData, taxDeductible: e.target.checked })}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="expenseTaxDeductible" className="mb-0 cursor-pointer">
                          Tax Deductible
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="expenseRecurring"
                          checked={expenseFormData.recurring}
                          onChange={(e) => setExpenseFormData({ ...expenseFormData, recurring: e.target.checked })}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="expenseRecurring" className="mb-0 cursor-pointer">
                          Recurring Expense
                        </Label>
                        {expenseFormData.recurring && (
                          <Select
                            value={expenseFormData.recurringFrequency}
                            onValueChange={(value) =>
                              setExpenseFormData({ ...expenseFormData, recurringFrequency: value })
                            }
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="monthly">Monthly</SelectItem>
                              <SelectItem value="quarterly">Quarterly</SelectItem>
                              <SelectItem value="yearly">Yearly</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-4 border-t">
                      <Button variant="outline" onClick={() => setShowAddExpenseDialog(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddExpense}>Add Expense</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <AnimatedCard delay={0}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10">
                      <TrendingDown className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Total Expenses</p>
                      <p className="text-xl font-bold">{formatCurrency(totalExpenses)}</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.1}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <Clock className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Pending</p>
                      <p className="text-xl font-bold">{formatCurrency(pendingExpenses)}</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Repeat className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Recurring</p>
                      <p className="text-xl font-bold">
                        {formatCurrency(expenses.filter((e) => e.recurring).reduce((sum, e) => sum + e.amount, 0))}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <AlertCircle className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Awaiting Approval</p>
                      <p className="text-xl font-bold">
                        {expenses.filter((e) => e.approvalStatus === "pending").length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>

            <AnimatedCard delay={0.1}>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Date</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Description</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Vendor</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Category</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Department</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Amount</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Status</th>
                        <th className="text-left p-3 text-xs font-medium text-muted-foreground">Approval</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredExpenses.map((expense) => (
                        <tr key={expense.id} className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-3">
                            <p className="text-sm font-medium">{formatDate(expense.date)}</p>
                          </td>
                          <td className="p-3">
                            <p className="font-medium text-sm">{expense.description}</p>
                            {expense.project && <p className="text-xs text-blue-500">{expense.project}</p>}
                            {expense.recurring && (
                              <Badge variant="outline" className="text-[10px] h-4 mt-1">
                                <Repeat className="h-2 w-2 mr-0.5" />
                                {expense.recurringFrequency}
                              </Badge>
                            )}
                          </td>
                          <td className="p-3">
                            <p className="text-sm">{expense.vendor}</p>
                          </td>
                          <td className="p-3">
                            <Badge variant="secondary" className="text-xs">
                              {expense.category}
                            </Badge>
                          </td>
                          <td className="p-3">
                            <p className="text-sm text-muted-foreground">{expense.department}</p>
                          </td>
                          <td className="p-3">
                            <p className="font-bold text-red-500">{formatCurrency(expense.amount)}</p>
                            {expense.taxDeductible && (
                              <p className="text-[10px] text-emerald-500 flex items-center gap-1 mt-0.5">
                                <CheckCircle2 className="h-2 w-2" />
                                Tax Deductible
                              </p>
                            )}
                          </td>
                          <td className="p-3">
                            {expense.status === "paid" ? (
                              <Badge className="bg-emerald-500/10 text-emerald-500">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Paid
                              </Badge>
                            ) : expense.status === "pending" ? (
                              <Badge className="bg-amber-500/10 text-amber-500">
                                <Clock className="h-3 w-3 mr-1" />
                                Pending
                              </Badge>
                            ) : (
                              <Badge className="bg-blue-500/10 text-blue-500">
                                <AlertCircle className="h-3 w-3 mr-1" />
                                Pending Approval
                              </Badge>
                            )}
                          </td>
                          <td className="p-3">
                            {expense.approvalStatus === "approved" ? (
                              <div className="flex flex-col">
                                <Badge
                                  variant="outline"
                                  className="text-[10px] bg-emerald-500/10 text-emerald-500 w-fit"
                                >
                                  Approved
                                </Badge>
                                <p className="text-[10px] text-muted-foreground mt-0.5">by {expense.approvedBy}</p>
                              </div>
                            ) : (
                              <Badge variant="outline" className="text-[10px] bg-amber-500/10 text-amber-500">
                                Pending
                              </Badge>
                            )}
                          </td>
                          <td className="p-3">
                            <div className="flex items-center justify-end gap-1">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7"
                                    onClick={() => setSelectedExpense(expense)}
                                  >
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Expense Details</DialogTitle>
                                  </DialogHeader>
                                  {selectedExpense && (
                                    <div className="space-y-4 py-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Description</p>
                                          <p className="font-medium">{selectedExpense.description}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Amount</p>
                                          <p className="font-bold text-2xl text-red-500">
                                            {formatCurrency(selectedExpense.amount)}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Vendor</p>
                                          <p className="font-medium">{selectedExpense.vendor}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Category</p>
                                          <Badge>{selectedExpense.category}</Badge>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Date</p>
                                          <p className="font-medium">{formatDate(selectedExpense.date)}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">
                                            Payment Method
                                          </p>
                                          <Badge variant="outline">{selectedExpense.paymentMethod}</Badge>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Department</p>
                                          <p className="font-medium">{selectedExpense.department}</p>
                                        </div>
                                        {selectedExpense.project && (
                                          <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-1">Project</p>
                                            <Badge variant="secondary">{selectedExpense.project}</Badge>
                                          </div>
                                        )}
                                      </div>

                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">
                                            Payment Status
                                          </p>
                                          <Badge
                                            className={
                                              selectedExpense.status === "paid"
                                                ? "bg-emerald-500/10 text-emerald-500"
                                                : "bg-amber-500/10 text-amber-500"
                                            }
                                          >
                                            {selectedExpense.status === "paid" ? "Paid" : "Pending Payment"}
                                          </Badge>
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">
                                            Approval Status
                                          </p>
                                          <Badge
                                            variant="outline"
                                            className={
                                              selectedExpense.approvalStatus === "approved"
                                                ? "bg-emerald-500/10 text-emerald-500"
                                                : "bg-amber-500/10 text-amber-500"
                                            }
                                          >
                                            {selectedExpense.approvalStatus === "approved"
                                              ? "Approved"
                                              : "Pending Approval"}
                                          </Badge>
                                        </div>
                                      </div>

                                      {selectedExpense.approvedBy && (
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Approved By</p>
                                          <p className="font-medium">{selectedExpense.approvedBy}</p>
                                        </div>
                                      )}

                                      {selectedExpense.notes && (
                                        <div>
                                          <p className="text-sm font-medium text-muted-foreground mb-1">Notes</p>
                                          <p className="text-sm bg-muted/50 p-3 rounded-lg">{selectedExpense.notes}</p>
                                        </div>
                                      )}

                                      <div className="flex items-center gap-2">
                                        <Checkbox checked={selectedExpense.recurring} disabled />
                                        <Label className="text-sm">
                                          Recurring expense{" "}
                                          {selectedExpense.recurringFrequency &&
                                            `(${selectedExpense.recurringFrequency})`}
                                        </Label>
                                      </div>

                                      <div className="flex items-center gap-2">
                                        <Checkbox checked={selectedExpense.taxDeductible} disabled />
                                        <Label className="text-sm">Tax deductible</Label>
                                      </div>

                                      {selectedExpense.receiptUrl && (
                                        <div className="pt-4 border-t">
                                          <Button variant="outline" className="w-full bg-transparent">
                                            <FileText className="mr-2 h-4 w-4" />
                                            View Receipt ({selectedExpense.receiptUrl})
                                          </Button>
                                        </div>
                                      )}

                                      {selectedExpense.approvalStatus === "pending" && (
                                        <div className="flex gap-2 pt-4 border-t">
                                          <Button
                                            variant="outline"
                                            className="flex-1 text-red-500 hover:text-red-600 bg-transparent"
                                          >
                                            <XCircle className="mr-2 h-4 w-4" />
                                            Reject
                                          </Button>
                                          <Button className="flex-1">
                                            <CheckCircle2 className="mr-2 h-4 w-4" />
                                            Approve
                                          </Button>
                                        </div>
                                      )}

                                      {/* Activity History Section */}
                                      <div className="pt-4 border-t">
                                        <div className="flex items-center gap-2 mb-3">
                                          <History className="h-4 w-4 text-muted-foreground" />
                                          <p className="font-medium text-sm">Activity History</p>
                                        </div>
                                        <div className="space-y-2 max-h-40 overflow-y-auto">
                                          {activityLog
                                            .filter(
                                              (log) =>
                                                log.entityType === "expense" &&
                                                log.entityId === selectedExpense.id
                                            )
                                            .map((log) => (
                                              <div
                                                key={log.id}
                                                className="flex items-start gap-3 p-2 rounded-lg bg-muted/30 text-xs"
                                              >
                                                <span>
                                                  {log.action === "created" && "➕"}
                                                  {log.action === "updated" && "✏️"}
                                                  {log.action === "neutralized" && "⚪"}
                                                  {log.action === "restored" && "♻️"}
                                                </span>
                                                <div className="flex-1">
                                                  <p className="font-medium capitalize">
                                                    {log.action.replace("_", " ")}
                                                  </p>
                                                  {log.changes &&
                                                    log.changes.map((c, i) => (
                                                      <p key={i} className="text-muted-foreground">
                                                        {c.field}: {String(c.oldValue)} → {String(c.newValue)}
                                                      </p>
                                                    ))}
                                                  <p className="text-muted-foreground mt-1">
                                                    {formatActivityDate(log.performedAt)} • {log.performedBy}
                                                  </p>
                                                </div>
                                              </div>
                                            ))}
                                          {activityLog.filter(
                                            (log) =>
                                              log.entityType === "expense" &&
                                              log.entityId === selectedExpense.id
                                          ).length === 0 && (
                                              <p className="text-xs text-muted-foreground text-center py-2">
                                                No activity recorded yet.
                                              </p>
                                            )}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-7 w-7">
                                    <MoreHorizontal className="h-3 w-3" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-3 w-3" />
                                    Edit
                                  </DropdownMenuItem>
                                  {expense.approvalStatus === "pending" && (
                                    <>
                                      <DropdownMenuItem>
                                        <CheckCircle2 className="mr-2 h-3 w-3" />
                                        Approve
                                      </DropdownMenuItem>
                                      <DropdownMenuItem className="text-red-500">
                                        <XCircle className="mr-2 h-3 w-3" />
                                        Reject
                                      </DropdownMenuItem>
                                    </>
                                  )}
                                  {expense.receiptUrl && (
                                    <DropdownMenuItem>
                                      <FileText className="mr-2 h-3 w-3" />
                                      View Receipt
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-500">
                                    <Trash2 className="mr-2 h-3 w-3" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </AnimatedCard>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Financial Reports & Analytics</h3>
              <p className="text-sm text-muted-foreground">Comprehensive financial analysis and reporting tools</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedCard delay={0}>
                <CardHeader>
                  <CardTitle>Revenue Breakdown by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={computedCategoryData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                      <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" width={120} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                        {computedCategoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.1}>
                <CardHeader>
                  <CardTitle>Payment Methods Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie data={computedPaymentMethodData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label>
                        {computedPaymentMethodData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {computedPaymentMethodData.map((method) => (
                      <div key={method.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: method.color }} />
                        <span className="text-sm text-muted-foreground">{method.name}</span>
                        <span className="text-sm font-medium ml-auto">{formatCurrency(method.value)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedCard delay={0.2}>
                <CardHeader>
                  <CardTitle>Key Financial Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Avg Invoice Value</span>
                    </div>
                    <span className="font-bold">{formatCurrency(avgInvoiceValue)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Percent className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Profit Margin</span>
                    </div>
                    <span className="font-bold text-purple-500">{profitMargin}%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Receipt className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Total Invoiced</span>
                    </div>
                    <span className="font-bold">{formatCurrency(totalInvoiced)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-amber-500" />
                      <span className="text-sm">Collection Rate</span>
                    </div>
                    <span className="font-bold">{((totalRevenue / totalInvoiced) * 100).toFixed(1)}%</span>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.3} className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Budget Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {computedBudgetData.length > 0 ? computedBudgetData.map((budget) => {
                    const percentage = budget.percentage

                    return (
                      <div key={budget.category} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{budget.category}</p>
                            <p className="text-xs text-muted-foreground">
                              {formatCurrency(budget.spent)} of total {formatCurrency(budget.budget)}
                            </p>
                          </div>
                          <Badge
                            variant={percentage > 40 ? "destructive" : percentage > 25 ? "outline" : "secondary"}
                            className="text-xs"
                          >
                            {percentage.toFixed(0)}%
                          </Badge>
                        </div>
                        <Progress
                          value={Math.min(percentage, 100)}
                          className="h-2"
                        />
                      </div>
                    )
                  }) : (
                    <p className="text-sm text-muted-foreground text-center py-4">No expense data available</p>
                  )}
                </CardContent>
              </AnimatedCard>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Activity Log Dialog */}
      <Dialog open={showActivityLogDialog} onOpenChange={setShowActivityLogDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Activity Log
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {activityLog.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No activity recorded yet.</p>
            ) : (
              activityLog.map((log) => (
                <div
                  key={log.id}
                  className="flex items-start gap-4 p-4 rounded-lg border bg-card"
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full text-lg",
                      log.action === "created" && "bg-green-500/10",
                      log.action === "updated" && "bg-blue-500/10",
                      log.action === "deleted" && "bg-red-500/10",
                      log.action === "neutralized" && "bg-gray-500/10",
                      log.action === "restored" && "bg-emerald-500/10",
                      log.action === "status_changed" && "bg-amber-500/10"
                    )}
                  >
                    {log.action === "created" && "➕"}
                    {log.action === "updated" && "✏️"}
                    {log.action === "deleted" && "🗑️"}
                    {log.action === "neutralized" && "⚪"}
                    {log.action === "restored" && "♻️"}
                    {log.action === "status_changed" && "🔄"}
                    {log.action === "payment_recorded" && "💰"}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">
                        <span className="capitalize">{log.entityType}</span>{" "}
                        <span className="text-muted-foreground">{log.action.replace("_", " ")}</span>
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {formatActivityDate(log.performedAt)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{log.entityDescription}</p>
                    {log.changes && log.changes.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {log.changes.map((change, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground">
                            <span className="font-medium">{change.field}:</span>{" "}
                            <span className="line-through text-red-500/70">{String(change.oldValue)}</span>{" "}
                            → <span className="text-green-500">{String(change.newValue)}</span>
                          </p>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground">by {log.performedBy}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Neutralize Confirmation Dialog */}
      <Dialog open={showNeutralizeDialog} onOpenChange={setShowNeutralizeDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Ban className="h-5 w-5 text-amber-500" />
              Confirm Neutralization
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-muted-foreground">
              Are you sure you want to neutralize this {neutralizeTarget?.type}?
              It will remain in records but will be excluded from all calculations.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              You can restore it later if needed.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowNeutralizeDialog(false)}>
              Cancel
            </Button>
            <Button variant="default" className="bg-amber-600 hover:bg-amber-700" onClick={confirmNeutralize}>
              Neutralize
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Invoice Confirmation Dialog */}
      <Dialog open={showDeleteInvoiceDialog} onOpenChange={setShowDeleteInvoiceDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-500">
              <Trash2 className="h-5 w-5" />
              Delete Invoice
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-muted-foreground">
              Are you sure you want to delete this invoice? This action cannot be undone.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowDeleteInvoiceDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteInvoiceTarget && handleDeleteInvoice(deleteInvoiceTarget)}
            >
              Delete Invoice
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Record Payment Dialog */}
      <Dialog open={showRecordPaymentDialog} onOpenChange={setShowRecordPaymentDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-emerald-500" />
              Record Payment
            </DialogTitle>
          </DialogHeader>
          {recordPaymentInvoice && (
            <div className="space-y-5 py-4">
              {/* Invoice Summary */}
              <div className="p-4 rounded-xl bg-muted/50 border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Invoice</span>
                  <span className="font-mono font-semibold text-sm">{getInvoiceDisplayNumber(recordPaymentInvoice)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Client</span>
                  <span className="font-semibold text-sm">{recordPaymentInvoice.client}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Amount</span>
                  <span className="font-bold">{formatCurrency(recordPaymentInvoice.amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Already Paid</span>
                  <span className="font-semibold text-emerald-500">{formatCurrency(recordPaymentInvoice.paid)}</span>
                </div>
                <div className="flex items-center justify-between border-t pt-2">
                  <span className="text-sm font-semibold">Remaining Due</span>
                  <span className="font-bold text-red-500">{formatCurrency(recordPaymentInvoice.amount - recordPaymentInvoice.paid)}</span>
                </div>
              </div>

              {/* Payment Amount */}
              <div className="space-y-2">
                <Label htmlFor="paymentAmountInput">Payment Amount *</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">৳</span>
                  <Input
                    id="paymentAmountInput"
                    type="number"
                    className="pl-7"
                    placeholder="0.00"
                    step="0.01"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7"
                    onClick={() => setPaymentAmount(String(recordPaymentInvoice.amount - recordPaymentInvoice.paid))}
                  >
                    Full Amount
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7"
                    onClick={() => setPaymentAmount(String(Math.round((recordPaymentInvoice.amount - recordPaymentInvoice.paid) / 2)))}
                  >
                    Half
                  </Button>
                </div>
              </div>

              {/* Payment Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Payment Date</Label>
                  <Input
                    type="date"
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                      <SelectItem value="Cash">Cash</SelectItem>
                      <SelectItem value="Credit Card">Credit Card</SelectItem>
                      <SelectItem value="Mobile Payment">Mobile Payment</SelectItem>
                      <SelectItem value="Check">Check</SelectItem>
                      <SelectItem value="PayPal">PayPal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label>Notes (optional)</Label>
                <Textarea
                  placeholder="Payment notes..."
                  rows={2}
                  value={paymentNotes}
                  onChange={(e) => setPaymentNotes(e.target.value)}
                />
              </div>

              {/* Info Banner */}
              {Number(paymentAmount) > 0 && Number(paymentAmount) < (recordPaymentInvoice.amount - recordPaymentInvoice.paid) && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  <span>This is a partial payment. Invoice will be marked as <strong>Partial Paid</strong>.</span>
                </div>
              )}
              {Number(paymentAmount) > 0 && Number(paymentAmount) >= (recordPaymentInvoice.amount - recordPaymentInvoice.paid) && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Full payment. Invoice will be marked as <strong>Paid</strong> and due will be <strong>BDT 0</strong>.</span>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={() => setShowRecordPaymentDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleRecordPayment} className="bg-emerald-600 hover:bg-emerald-700">
                  <Wallet className="mr-2 h-4 w-4" />
                  Record Payment
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* View Invoice Dialog (A4 sheet preview) */}
      <Dialog open={showViewInvoiceDialog} onOpenChange={setShowViewInvoiceDialog}>
        <DialogContent className="max-w-[850px] w-[95vw] max-h-[95vh] overflow-y-auto p-0 border-0 bg-zinc-100 dark:bg-zinc-950" style={{ resize: "both", overflow: "auto", minWidth: "400px", minHeight: "400px" }}>
          {selectedInvoice && (
            <div className="flex flex-col h-full">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-6 py-4 bg-background border-b border-border sticky top-0 z-10">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <DialogTitle className="font-semibold text-lg">
                    Invoice Details - {getInvoiceDisplayNumber(selectedInvoice)}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Details and A4 preview of the selected invoice.
                  </DialogDescription>
                </div>
                <div className="flex items-center gap-2 pr-6">
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    onClick={() => handleDownloadInvoice(selectedInvoice.id)}
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>

              {/* A4 Paper Sheet Preview Area */}
              <div className="flex-1 overflow-y-auto p-6 flex justify-center">
                <div
                  className="w-full max-w-[794px] min-h-[1123px] bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 p-12 shadow-2xl border border-zinc-200 dark:border-zinc-800 rounded-sm font-sans flex flex-col justify-between"
                  id={`invoice-preview-sheet-${selectedInvoice.id}`}
                >
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="space-y-3">
                        {/* ZOO LYUM Logo */}
                        <div className="relative w-36 h-12 flex items-center justify-start overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/logo.png"
                            alt="ZOO LYUM Logo"
                            className="object-contain max-h-full max-w-full"
                          />
                        </div>
                        <div className="text-xs text-zinc-500 space-y-0.5">
                          <p className="font-semibold text-zinc-700 dark:text-zinc-300">ZOO LYUM</p>
                          <p>Dhaka, Bangladesh</p>
                          <p>support@zoolyum.com</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                          INVOICE
                        </h1>
                        <p className="text-sm font-semibold text-zinc-500">
                          {getInvoiceDisplayNumber(selectedInvoice)}
                        </p>
                        <div className="inline-block mt-2">
                          <Badge className={cn("px-2.5 py-1 text-xs font-semibold capitalize", statusConfig[selectedInvoice.status]?.color)}>
                            {statusConfig[selectedInvoice.status]?.label}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 grid grid-cols-2 gap-8">
                      {/* Bill To */}
                      <div className="space-y-2">
                        <h2 className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase">
                          BILL TO
                        </h2>
                        <div className="space-y-1 text-sm">
                          <p className="font-bold text-zinc-900 dark:text-white">
                            {selectedInvoice.client}
                          </p>
                          {selectedInvoice.clientEmail && (
                            <p className="text-zinc-600 dark:text-zinc-400">
                              {selectedInvoice.clientEmail}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Invoice Details */}
                      <div className="space-y-2 text-right md:text-left md:pl-12">
                        <h2 className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase">
                          PROJECT DETAILS
                        </h2>
                        <div className="space-y-1 text-sm">
                          <p className="font-semibold text-zinc-900 dark:text-white">
                            {selectedInvoice.project}
                          </p>
                          <p className="text-zinc-600 dark:text-zinc-400">
                            Terms: {selectedInvoice.paymentTerms}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-4 text-xs text-zinc-500">
                      <div>
                        <span className="font-semibold">Issue Date:</span> {formatDate(selectedInvoice.issueDate)}
                      </div>
                      <div className="text-right">
                        <span className="font-semibold">Due Date:</span> {formatDate(selectedInvoice.dueDate)}
                      </div>
                    </div>

                    {/* Line Items Table */}
                    <div className="pt-4">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                            <th className="py-2 px-3">Description</th>
                            <th className="py-2 px-3 text-center">Qty</th>
                            <th className="py-2 px-3 text-right">Rate</th>
                            <th className="py-2 px-3 text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
                          {selectedInvoice.items.map((item) => (
                            <tr key={item.id}>
                              <td className="py-3 px-3">
                                <p className="font-medium text-zinc-900 dark:text-white">{item.description}</p>
                                {item.taxable && (
                                  <span className="text-[10px] font-semibold text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded-sm mt-1 inline-block">
                                    Taxable
                                  </span>
                                )}
                              </td>
                              <td className="py-3 px-3 text-center text-zinc-600 dark:text-zinc-400">
                                {Number(item.quantity) || 0}
                              </td>
                              <td className="py-3 px-3 text-right text-zinc-600 dark:text-zinc-400">
                                {formatCurrency(Number(item.rate) || 0)}
                              </td>
                              <td className="py-3 px-3 text-right font-semibold text-zinc-900 dark:text-white">
                                {formatCurrency(Number(item.amount) || 0)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Summary and Notes */}
                    <div className="grid grid-cols-2 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-6">
                      {/* Notes */}
                      <div className="space-y-4">
                        {selectedInvoice.notes && (
                          <div className="space-y-1.5">
                            <h3 className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                              NOTES
                            </h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-50 dark:bg-zinc-800/40 p-3 rounded-md border border-zinc-100 dark:border-zinc-800">
                              {selectedInvoice.notes}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Pricing Summary */}
                      <div className="space-y-2 text-sm max-w-[280px] ml-auto w-full">
                        <div className="flex justify-between text-zinc-500">
                          <span>Subtotal</span>
                          <span>
                            {formatCurrency(
                              selectedInvoice.amount -
                              selectedInvoice.tax +
                              selectedInvoice.discount
                            )}
                          </span>
                        </div>
                        {selectedInvoice.discount > 0 && (
                          <div className="flex justify-between text-emerald-500 font-medium">
                            <span>Discount</span>
                            <span>-{formatCurrency(selectedInvoice.discount)}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-zinc-500">
                          <span>Tax</span>
                          <span>{formatCurrency(selectedInvoice.tax)}</span>
                        </div>
                        <div className="flex justify-between font-extrabold text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-800 pt-2 text-base">
                          <span>Total</span>
                          <span>{formatCurrency(selectedInvoice.amount)}</span>
                        </div>
                        {selectedInvoice.paid > 0 && (
                          <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold border-t border-zinc-100 dark:border-zinc-800 pt-2">
                            <span>Amount Paid</span>
                            <span>{formatCurrency(selectedInvoice.paid)}</span>
                          </div>
                        )}
                        {selectedInvoice.paid < selectedInvoice.amount && (
                          <div className="flex justify-between text-red-600 dark:text-red-400 font-bold">
                            <span>Amount Due</span>
                            <span>
                              {formatCurrency(selectedInvoice.amount - selectedInvoice.paid)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-12 text-center text-xs text-zinc-400">
                    <p className="font-semibold text-zinc-500 dark:text-zinc-400">
                      Thank you for your business!
                    </p>
                    <p className="mt-1">
                      If you have any questions about this invoice, please contact support@zoolyum.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Create Invoice Dialog */}
      <Dialog open={showCreateInvoiceDialog} onOpenChange={setShowCreateInvoiceDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Receipt className="h-5 w-5 text-primary" />
              Create New Invoice
            </DialogTitle>
            <p className="text-sm text-muted-foreground">Generate a professional invoice for your client</p>
          </DialogHeader>
          <div className="grid gap-6 py-4">

            {/* Service Template Selector */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                Quick Start — Service Template
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {AGENCY_SERVICE_TEMPLATES.map((template) => (
                  <button
                    key={template.id}
                    type="button"
                    className={cn(
                      "flex items-center gap-2 p-2.5 rounded-lg border text-left transition-all hover:shadow-md hover:border-primary/50",
                      invoiceFormData.category === template.category ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border hover:bg-muted/50"
                    )}
                    onClick={() => {
                      setInvoiceLineItems(
                        template.defaultItems.map((item, idx) => ({
                          id: idx + 1,
                          description: item.description,
                          quantity: item.quantity,
                          rate: item.unitPrice,
                          amount: item.quantity * item.unitPrice,
                          taxable: true,
                        }))
                      )
                      setInvoiceFormData(prev => ({
                        ...prev,
                        category: template.category,
                        taxRate: template.defaultTaxRate,
                        paymentTerms: template.defaultPaymentTerms === 15 ? "Net 15" : template.defaultPaymentTerms === 45 ? "Net 45" : "Net 30",
                      }))
                    }}
                  >
                    <span className={cn("text-lg w-7 h-7 rounded-md flex items-center justify-center shrink-0", template.bgColor)}>{template.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold truncate">{template.name}</p>
                      <p className="text-[10px] text-muted-foreground truncate">{template.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t pt-4" />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Client *</Label>
                <Select
                  value={invoiceFormData.client || undefined}
                  onValueChange={(value) => {
                    const selectedClient = allClients.find((c) => c.name === value)
                    setInvoiceFormData((prev) => ({
                      ...prev,
                      client: value,
                      clientEmail: selectedClient?.email || prev.clientEmail,
                      project: "",
                      projectId: "",
                    }))
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select client" />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueClients.map((c) => (
                      <SelectItem key={c.id} value={c.name}>
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[9px] font-bold">
                            {c.name.split(" ").map((n: string) => n[0]).join("")}
                          </span>
                          {c.name}
                          <span className="text-muted-foreground text-[10px]">({c.company})</span>
                        </span>
                      </SelectItem>
                    ))}
                    {uniqueClients.length === 0 && (
                      <SelectItem value="__none" disabled>No clients found</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Client Email</Label>
                <Input
                  placeholder="client@email.com"
                  value={invoiceFormData.clientEmail}
                  onChange={(e) => setInvoiceFormData(prev => ({ ...prev, clientEmail: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Project *</Label>
                <Select
                  value={invoiceFormData.project || undefined}
                  onValueChange={(value) => {
                    const selectedProject = allProjects.find((p) => p.name === value)
                    setInvoiceFormData((prev) => ({
                      ...prev,
                      project: value,
                      projectId: selectedProject?.id || "",
                    }))
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={invoiceFormData.client ? "Select project" : "Select client first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {clientProjectsForCreate.length > 0 ? (
                      clientProjectsForCreate.map((p) => (
                        <SelectItem key={p.id} value={p.name}>
                          <span className="flex items-center gap-2">
                            <span className="text-muted-foreground text-xs">{p.uid || `#${p.id.slice(0, 6)}`}</span>
                            {p.name}
                          </span>
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="__no_projects" disabled>
                        {invoiceFormData.client ? "No projects for this client" : "Select a client first"}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Service Category</Label>
                <Select value={invoiceFormData.category} onValueChange={(value) => setInvoiceFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(INVOICE_CATEGORY_CONFIG).map(([key, config]) => (
                      <SelectItem key={key} value={key}>
                        <span className="flex items-center gap-1.5">
                          <span>{config.icon}</span> {config.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Issue Date *</Label>
                <Input
                  type="date"
                  value={invoiceFormData.issueDate}
                  onChange={(e) => setInvoiceFormData(prev => ({ ...prev, issueDate: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Due Date *</Label>
                <Input
                  type="date"
                  value={invoiceFormData.dueDate}
                  onChange={(e) => setInvoiceFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Payment Terms</Label>
                <Select value={invoiceFormData.paymentTerms} onValueChange={(value) => setInvoiceFormData(prev => ({ ...prev, paymentTerms: value }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Net 15">Net 15</SelectItem>
                    <SelectItem value="Net 30">Net 30</SelectItem>
                    <SelectItem value="Net 45">Net 45</SelectItem>
                    <SelectItem value="Due on Receipt">Due on Receipt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <Select value={invoiceFormData.paymentMethod} onValueChange={(value) => setInvoiceFormData(prev => ({ ...prev, paymentMethod: value }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                    <SelectItem value="Credit Card">Credit Card</SelectItem>
                    <SelectItem value="ACH">ACH</SelectItem>
                    <SelectItem value="Wire Transfer">Wire Transfer</SelectItem>
                    <SelectItem value="PayPal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end gap-2">
                <Checkbox
                  id="createRecurring"
                  checked={invoiceFormData.recurringInvoice}
                  onCheckedChange={(checked) => setInvoiceFormData(prev => ({ ...prev, recurringInvoice: checked as boolean }))}
                />
                <Label htmlFor="createRecurring" className="text-sm font-normal">Recurring Invoice</Label>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="font-semibold">Line Items *</Label>
              <div className="border rounded-lg p-4 space-y-3 bg-muted/30">
                <div className="grid grid-cols-12 gap-2 text-xs font-medium text-muted-foreground">
                  <div className="col-span-5">Description</div>
                  <div className="col-span-2">Quantity</div>
                  <div className="col-span-2">Rate ($)</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-1"></div>
                </div>
                {invoiceLineItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
                    <Input
                      className="col-span-5"
                      placeholder="Service or product description"
                      value={item.description}
                      onChange={(e) => handleInvoiceLineItemChange(item.id, "description", e.target.value)}
                    />
                    <Input
                      className="col-span-2"
                      type="number"
                      placeholder="1"
                      value={item.quantity}
                      onChange={(e) => handleInvoiceLineItemChange(item.id, "quantity", Number(e.target.value))}
                    />
                    <Input
                      className="col-span-2"
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      value={item.rate || ""}
                      onChange={(e) => handleInvoiceLineItemChange(item.id, "rate", Number(e.target.value))}
                    />
                    <div className="col-span-2 text-sm font-medium">{formatCurrency(item.amount)}</div>
                    <Button variant="ghost" size="icon" className="col-span-1" onClick={() => handleRemoveInvoiceLineItem(item.id)} disabled={invoiceLineItems.length === 1}>
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={() => handleAddInvoiceLineItem()}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Line Item
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Subtotal</Label>
                <Input value={formatCurrency(invoiceSubtotal)} disabled className="font-semibold" />
              </div>
              <div className="space-y-2">
                <Label>Tax (%)</Label>
                <Input
                  type="number"
                  value={invoiceFormData.taxRate}
                  step="0.1"
                  onChange={(e) => setInvoiceFormData(prev => ({ ...prev, taxRate: Number(e.target.value) }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Discount ($)</Label>
                <Input
                  type="number"
                  placeholder="0.00"
                  step="0.01"
                  value={invoiceFormData.discount || ""}
                  onChange={(e) => setInvoiceFormData(prev => ({ ...prev, discount: Number(e.target.value) }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Invoice Notes</Label>
                <Textarea
                  placeholder="Thank you for your business..."
                  rows={3}
                  value={invoiceFormData.notes}
                  onChange={(e) => setInvoiceFormData(prev => ({ ...prev, notes: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Internal Notes (Private)</Label>
                <Textarea
                  placeholder="Notes for internal use only..."
                  rows={3}
                  value={invoiceFormData.internalNotes}
                  onChange={(e) => setInvoiceFormData(prev => ({ ...prev, internalNotes: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <div>
                <p className="text-xs text-muted-foreground">Invoice Total</p>
                <p className="text-2xl font-bold text-primary">{formatCurrency(invoiceTotal)}</p>
                {invoiceFormData.discount > 0 && (
                  <p className="text-[10px] text-emerald-500">Discount: -{formatCurrency(invoiceFormData.discount)}</p>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => handleCreateInvoice(true)}>
                  <FileText className="mr-1.5 h-4 w-4" />
                  Save as Draft
                </Button>
                <Button onClick={() => handleCreateInvoice(false)} className="bg-primary">
                  <Send className="mr-1.5 h-4 w-4" />
                  Create &amp; Send Invoice
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Invoice Dialog */}
      <Dialog open={showEditInvoiceDialog} onOpenChange={setShowEditInvoiceDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Invoice - {selectedInvoice?.invoiceNumber}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Client *</Label>
                <Select
                  value={editInvoiceFormData.client || undefined}
                  onValueChange={(value) => {
                    const selectedClient = allClients.find((c) => c.name === value)
                    setEditInvoiceFormData((prev) => ({
                      ...prev,
                      client: value,
                      clientEmail: selectedClient?.email || prev.clientEmail,
                      project: "",
                      projectId: "",
                    }))
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select client" />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueClients.map((c) => (
                      <SelectItem key={c.id} value={c.name}>
                        {c.name} ({c.company})
                      </SelectItem>
                    ))}
                    {/* Keep existing client if not in DB */}
                    {editInvoiceFormData.client && !uniqueClients.find((c) => c.name === editInvoiceFormData.client) && (
                      <SelectItem value={editInvoiceFormData.client}>{editInvoiceFormData.client}</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Client Email</Label>
                <Input
                  value={editInvoiceFormData.clientEmail}
                  onChange={(e) => setEditInvoiceFormData(prev => ({ ...prev, clientEmail: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Project *</Label>
                <Select
                  value={editInvoiceFormData.project || undefined}
                  onValueChange={(value) => {
                    const selectedProject = allProjects.find((p) => p.name === value)
                    setEditInvoiceFormData((prev) => ({
                      ...prev,
                      project: value,
                      projectId: selectedProject?.id || "",
                    }))
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={editInvoiceFormData.client ? "Select project" : "Select client first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {clientProjectsForEdit.length > 0 ? (
                      clientProjectsForEdit.map((p) => (
                        <SelectItem key={p.id} value={p.name}>
                          <span className="flex items-center gap-2">
                            <span className="text-muted-foreground text-xs">{p.uid || `#${p.id.slice(0, 6)}`}</span>
                            {p.name}
                          </span>
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="__no_projects" disabled>
                        {editInvoiceFormData.client ? "No projects for this client" : "Select a client first"}
                      </SelectItem>
                    )}
                    {/* Keep existing project if not in filtered list */}
                    {editInvoiceFormData.project && !clientProjectsForEdit.find((p) => p.name === editInvoiceFormData.project) && (
                      <SelectItem value={editInvoiceFormData.project}>{editInvoiceFormData.project}</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select value={editInvoiceFormData.category} onValueChange={(value) => setEditInvoiceFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="content">Content</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Issue Date</Label>
                <Input
                  type="date"
                  value={editInvoiceFormData.issueDate}
                  onChange={(e) => setEditInvoiceFormData(prev => ({ ...prev, issueDate: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Due Date</Label>
                <Input
                  type="date"
                  value={editInvoiceFormData.dueDate}
                  onChange={(e) => setEditInvoiceFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Payment Terms</Label>
                <Select value={editInvoiceFormData.paymentTerms} onValueChange={(value) => setEditInvoiceFormData(prev => ({ ...prev, paymentTerms: value }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Net 15">Net 15</SelectItem>
                    <SelectItem value="Net 30">Net 30</SelectItem>
                    <SelectItem value="Net 45">Net 45</SelectItem>
                    <SelectItem value="Due on Receipt">Due on Receipt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <Select value={editInvoiceFormData.paymentMethod} onValueChange={(value) => setEditInvoiceFormData(prev => ({ ...prev, paymentMethod: value }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                    <SelectItem value="Credit Card">Credit Card</SelectItem>
                    <SelectItem value="ACH">ACH</SelectItem>
                    <SelectItem value="Wire Transfer">Wire Transfer</SelectItem>
                    <SelectItem value="PayPal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={selectedInvoice?.status || "draft"} onValueChange={(value) => { if (selectedInvoice) handleInvoiceStatusChange(selectedInvoice.id, value) }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="sent">Sent (Unpaid)</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="partial">Partial</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Line Items</Label>
              <div className="border rounded-lg p-4 space-y-3 bg-muted/30">
                <div className="grid grid-cols-12 gap-2 text-xs font-medium text-muted-foreground">
                  <div className="col-span-5">Description</div>
                  <div className="col-span-2">Quantity</div>
                  <div className="col-span-2">Rate ($)</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-1"></div>
                </div>
                {editInvoiceLineItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
                    <Input
                      className="col-span-5"
                      value={item.description}
                      onChange={(e) => handleInvoiceLineItemChange(item.id, "description", e.target.value, true)}
                    />
                    <Input
                      className="col-span-2"
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleInvoiceLineItemChange(item.id, "quantity", Number(e.target.value), true)}
                    />
                    <Input
                      className="col-span-2"
                      type="number"
                      step="0.01"
                      value={item.rate || ""}
                      onChange={(e) => handleInvoiceLineItemChange(item.id, "rate", Number(e.target.value), true)}
                    />
                    <div className="col-span-2 text-sm font-medium">{formatCurrency(item.amount)}</div>
                    <Button variant="ghost" size="icon" className="col-span-1" onClick={() => handleRemoveInvoiceLineItem(item.id, true)} disabled={editInvoiceLineItems.length === 1}>
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={() => handleAddInvoiceLineItem(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Line Item
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Subtotal</Label>
                <Input value={formatCurrency(editInvoiceSubtotal)} disabled />
              </div>
              <div className="space-y-2">
                <Label>Tax (%)</Label>
                <Input
                  type="number"
                  value={editInvoiceFormData.taxRate}
                  step="0.1"
                  onChange={(e) => setEditInvoiceFormData(prev => ({ ...prev, taxRate: Number(e.target.value) }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Discount ($)</Label>
                <Input
                  type="number"
                  value={editInvoiceFormData.discount || ""}
                  step="0.01"
                  onChange={(e) => setEditInvoiceFormData(prev => ({ ...prev, discount: Number(e.target.value) }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Invoice Notes</Label>
                <Textarea
                  rows={3}
                  value={editInvoiceFormData.notes}
                  onChange={(e) => setEditInvoiceFormData(prev => ({ ...prev, notes: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Internal Notes (Private)</Label>
                <Textarea
                  rows={3}
                  value={editInvoiceFormData.internalNotes}
                  onChange={(e) => setEditInvoiceFormData(prev => ({ ...prev, internalNotes: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <div className="text-lg font-bold">
                Total: <span className="text-2xl text-primary">{formatCurrency(editInvoiceTotal)}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowEditInvoiceDialog(false)}>Cancel</Button>
                <Button onClick={handleSaveInvoiceEdit}>Save Changes</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
