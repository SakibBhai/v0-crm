"use client"

import type React from "react"
import { useState, use, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { InvoiceDetailDialog } from "@/components/invoices/invoice-detail-dialog"
import { sampleInvoices, samplePayments, generateInvoiceNumber } from "@/lib/data/invoices"
import type { Invoice, InvoiceItem, Payment } from "@/lib/types/finance"
import { INVOICE_STATUS_CONFIG } from "@/lib/types/finance"
import {
    ArrowLeft,
    Calendar,
    DollarSign,
    CheckCircle,
    Clock,
    AlertCircle,
    Target,
    Pause,
    Users,
    FileText,
    MessageSquare,
    BarChart3,
    Link2,
    FolderOpen,
    Upload,
    Download,
    Plus,
    MoreHorizontal,
    Send,
    ExternalLink,
    GripVertical,
    Edit,
    Trash2,
    File,
    Image,
    FileSpreadsheet,
    Presentation,
    Receipt,
    Eye,
    Settings2,
    Repeat,
    Trash2 as TrashIcon,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import Link from "next/link"

// Types
import type { Task, TaskStatus, TaskPriority, TaskType } from "@/lib/types/task"
import { PRIORITY_CONFIG, STATUS_CONFIG as TASK_STATUS_CONFIG, TASK_TYPE_CONFIG } from "@/lib/types/task"
import { sampleTasks, teamMembers } from "@/lib/data/tasks"
import { generateId } from "@/lib/id-generator"
import { DatePicker } from "@/components/ui/date-picker"
import { cn } from "@/lib/utils"
import { getProjectById, updateProject as updateProjectAction } from "@/app/actions/projects"

interface TeamMember {
    id: string
    name: string
    role: string
    avatar?: string
    workload: number // percentage
    tasksAssigned: number
}

interface ProjectFile {
    id: string
    name: string
    type: "document" | "image" | "spreadsheet" | "presentation" | "other"
    size: string
    uploadedBy: string
    uploadedAt: string
    version: number
}

interface Discussion {
    id: string
    author: string
    avatar?: string
    content: string
    timestamp: string
    mentions?: string[]
}

interface Project {
    id: string
    name: string
    description: string
    client: string
    clientEmail?: string
    projectManager: string
    status: "planning" | "in-progress" | "review" | "completed" | "on-hold"
    progress: number
    budget: number
    spent: number
    startDate: string
    deadline: string
    briefLink?: string
    driveLink?: string
    researchLink?: string
    billingType: "one-time" | "recurring"
    recurringInterval?: "monthly"
    monthlyRate?: number
    team: TeamMember[]
    files: ProjectFile[]
    discussions: Discussion[]
}

// Sample project data
const projectsMap: Record<string, Project> = {
    "PJ-0001": {
        id: "PJ-0001",
        name: "E-commerce Redesign",
        description: "Complete website redesign with new branding, improved UX/UI, and modern technology stack. The project includes full responsive design, payment integration, and inventory management system.",
        client: "TechMart Solutions",
        clientEmail: "billing@techmart.com",
        projectManager: "John Smith",
        status: "in-progress",
        progress: 75,
        budget: 25000,
        spent: 18500,
        startDate: "2024-10-15",
        deadline: "2024-12-28",
        briefLink: "https://docs.google.com/document/d/project-brief",
        driveLink: "https://drive.google.com/drive/folders/project-files",
        researchLink: "https://notion.so/research-documents",
        billingType: "one-time",
        team: [
            { id: "1", name: "John Smith", role: "Project Manager", workload: 60, tasksAssigned: 1 },
            { id: "2", name: "Sarah Mitchell", role: "UI/UX Designer", workload: 85, tasksAssigned: 3 },
            { id: "3", name: "John Doe", role: "Lead Developer", workload: 90, tasksAssigned: 4 },
            { id: "4", name: "Emily Chen", role: "QA Engineer", workload: 40, tasksAssigned: 2 },
        ],
        files: [
            { id: "1", name: "Project Brief.pdf", type: "document", size: "2.4 MB", uploadedBy: "John Smith", uploadedAt: "2024-10-15", version: 3 },
            { id: "2", name: "Design System.fig", type: "presentation", size: "15.2 MB", uploadedBy: "Sarah Mitchell", uploadedAt: "2024-10-20", version: 5 },
            { id: "3", name: "Homepage Mockup.png", type: "image", size: "4.8 MB", uploadedBy: "Sarah Mitchell", uploadedAt: "2024-10-25", version: 2 },
            { id: "4", name: "API Documentation.docx", type: "document", size: "1.2 MB", uploadedBy: "John Doe", uploadedAt: "2024-11-01", version: 4 },
            { id: "5", name: "Budget Tracker.xlsx", type: "spreadsheet", size: "856 KB", uploadedBy: "John Smith", uploadedAt: "2024-11-10", version: 8 },
        ],
        discussions: [
            { id: "1", author: "John Smith", content: "Team, let's make sure we're on track for the December deadline. Please update your task statuses daily.", timestamp: "2024-11-15T09:00:00", mentions: [] },
            { id: "2", author: "Sarah Mitchell", content: "Design system is finalized! @John Doe you can start implementing the components now.", timestamp: "2024-11-15T10:30:00", mentions: ["John Doe"] },
            { id: "3", author: "John Doe", content: "Great work @Sarah Mitchell! I'll start with the homepage first. Should have initial version ready by end of week.", timestamp: "2024-11-15T11:00:00", mentions: ["Sarah Mitchell"] },
            { id: "4", author: "Emily Chen", content: "I've prepared the test cases for the checkout flow. Will start testing once development is complete.", timestamp: "2024-11-16T14:00:00", mentions: [] },
        ],
    },
    "PJ-0002": {
        id: "PJ-0002", name: "SEO Campaign Q4",
        description: "Comprehensive SEO optimization and content strategy for Q4.",
        client: "GreenLife Organics", clientEmail: "accounts@greenlife.com", projectManager: "Emily Chen",
        status: "in-progress", progress: 45, budget: 12000, spent: 5400,
        startDate: "2024-11-01", deadline: "2025-01-05",
        briefLink: "https://docs.google.com/document/d/seo-brief",
        driveLink: "https://drive.google.com/drive/folders/seo-files",
        billingType: "recurring", recurringInterval: "monthly", monthlyRate: 4000,
        team: [
            { id: "1", name: "Emily Chen", role: "SEO Manager", workload: 70, tasksAssigned: 0 },
            { id: "2", name: "Jake Wilson", role: "SEO Specialist", workload: 80, tasksAssigned: 3 },
            { id: "3", name: "Amy Thompson", role: "Content Writer", workload: 65, tasksAssigned: 3 },
        ],
        files: [{ id: "1", name: "SEO Audit Report.pdf", type: "document", size: "3.1 MB", uploadedBy: "Jake Wilson", uploadedAt: "2024-11-10", version: 2 }],
        discussions: [{ id: "1", author: "Emily Chen", content: "Technical audit is complete. Moving to on-page optimizations.", timestamp: "2024-11-12T09:00:00", mentions: [] }],
    },
    "PJ-0003": {
        id: "PJ-0003", name: "Social Media Strategy",
        description: "Full social media management and content calendar for FoodieHub.",
        client: "FoodieHub", clientEmail: "finance@foodiehub.com", projectManager: "Sarah Mitchell",
        status: "review", progress: 90, budget: 8000, spent: 7200,
        startDate: "2024-09-20", deadline: "2024-12-22",
        billingType: "recurring", recurringInterval: "monthly", monthlyRate: 2000,
        team: [
            { id: "1", name: "Sarah Mitchell", role: "Social Media Manager", workload: 50, tasksAssigned: 0 },
            { id: "2", name: "Emily Chen", role: "Content Creator", workload: 60, tasksAssigned: 2 },
            { id: "3", name: "Mike Brown", role: "Community Manager", workload: 75, tasksAssigned: 2 },
        ],
        files: [{ id: "1", name: "Social Strategy.pdf", type: "document", size: "2.8 MB", uploadedBy: "Sarah Mitchell", uploadedAt: "2024-10-01", version: 4 }],
        discussions: [{ id: "1", author: "Sarah Mitchell", content: "We are on track for the final review.", timestamp: "2024-12-18T09:00:00", mentions: [] }],
    },
    "PJ-0004": {
        id: "PJ-0004", name: "PPC Management",
        description: "Google Ads and Meta advertising campaigns. Currently on hold.",
        client: "AutoDeal Motors", clientEmail: "billing@autodeal.com", projectManager: "David Park",
        status: "on-hold", progress: 30, budget: 15000, spent: 4500,
        startDate: "2024-10-01", deadline: "2025-01-15",
        billingType: "recurring", recurringInterval: "monthly", monthlyRate: 3000,
        team: [{ id: "1", name: "David Park", role: "PPC Manager", workload: 30, tasksAssigned: 1 }, { id: "2", name: "Jake Wilson", role: "PPC Specialist", workload: 35, tasksAssigned: 2 }],
        files: [], discussions: [{ id: "1", author: "David Park", content: "On hold pending client budget approval.", timestamp: "2024-12-01T09:00:00", mentions: [] }],
    },
    "PJ-0005": {
        id: "PJ-0005", name: "Brand Identity Overhaul",
        description: "Complete rebranding including logo, colors, and guidelines.",
        client: "LuxStay Hotels", clientEmail: "ap@luxstay.com", projectManager: "John Smith",
        status: "planning", progress: 15, budget: 35000, spent: 5250,
        startDate: "2024-12-01", deadline: "2025-03-15",
        billingType: "one-time",
        team: [
            { id: "1", name: "John Smith", role: "Project Manager", workload: 40, tasksAssigned: 0 },
            { id: "2", name: "Sarah Mitchell", role: "Lead Designer", workload: 55, tasksAssigned: 3 },
            { id: "3", name: "John Doe", role: "Developer", workload: 30, tasksAssigned: 1 },
        ],
        files: [{ id: "1", name: "Brand Brief.pdf", type: "document", size: "1.8 MB", uploadedBy: "John Smith", uploadedAt: "2024-12-01", version: 1 }],
        discussions: [{ id: "1", author: "John Smith", content: "Kickoff meeting went great. Sarah will start on mood boards.", timestamp: "2024-12-05T14:00:00", mentions: [] }],
    },
    "PJ-0006": {
        id: "PJ-0006", name: "Email Marketing Automation",
        description: "Automated email sequences and newsletters. Project completed.",
        client: "TechMart Solutions", clientEmail: "billing@techmart.com", projectManager: "Emily Chen",
        status: "completed", progress: 100, budget: 6000, spent: 5800,
        startDate: "2024-08-15", deadline: "2024-11-30",
        billingType: "one-time",
        team: [
            { id: "1", name: "Emily Chen", role: "Project Manager", workload: 0, tasksAssigned: 0 },
            { id: "2", name: "Amy Thompson", role: "Email Specialist", workload: 0, tasksAssigned: 3 },
        ],
        files: [{ id: "1", name: "Email Templates.zip", type: "other", size: "5.2 MB", uploadedBy: "Mike Brown", uploadedAt: "2024-09-10", version: 6 }],
        discussions: [{ id: "1", author: "Emily Chen", content: "Project completed! All automations live.", timestamp: "2024-11-30T16:00:00", mentions: [] }],
    },
}

const getProjectByIdLocal = (id: string): Project => projectsMap[id] || projectsMap["PJ-0001"]

// Gantt chart data
const ganttData = [
    { name: "Design System", start: 0, duration: 5, status: "done" },
    { name: "Wireframes", start: 3, duration: 7, status: "done" },
    { name: "UI Design", start: 8, duration: 10, status: "done" },
    { name: "Frontend Dev", start: 15, duration: 20, status: "in-progress" },
    { name: "Backend Dev", start: 18, duration: 18, status: "in-progress" },
    { name: "Testing", start: 30, duration: 10, status: "todo" },
    { name: "Launch", start: 38, duration: 5, status: "todo" },
]

const statusConfig = {
    planning: { label: "Planning", icon: Target, color: "bg-chart-3/20 text-chart-3", barColor: "#a78bfa" },
    "in-progress": { label: "In Progress", icon: Clock, color: "bg-primary/20 text-primary", barColor: "#60a5fa" },
    review: { label: "Review", icon: AlertCircle, color: "bg-warning/20 text-warning", barColor: "#fbbf24" },
    completed: { label: "Completed", icon: CheckCircle, color: "bg-success/20 text-success", barColor: "#4ade80" },
    "on-hold": { label: "On Hold", icon: Pause, color: "bg-muted text-muted-foreground", barColor: "#888" },
}

const taskStatusConfig = {
    todo: { label: "To Do", color: "bg-muted text-muted-foreground" },
    "in-progress": { label: "In Progress", color: "bg-primary/20 text-primary" },
    review: { label: "Review", color: "bg-warning/20 text-warning" },
    done: { label: "Done", color: "bg-success/20 text-success" },
}

const priorityConfig = {
    low: { label: "Low", color: "bg-muted text-muted-foreground" },
    medium: { label: "Medium", color: "bg-warning/20 text-warning" },
    high: { label: "High", color: "bg-destructive/20 text-destructive" },
}

const fileIcons = {
    document: FileText,
    image: Image,
    spreadsheet: FileSpreadsheet,
    presentation: Presentation,
    other: File,
}

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const [project, setProject] = useState<Project>(getProjectByIdLocal(resolvedParams.id))
    const [isDbLoaded, setIsDbLoaded] = useState(false)
    const [projectTasks, setProjectTasks] = useState<Task[]>(sampleTasks.filter(t => t.projectId === resolvedParams.id))
    const [activeTab, setActiveTab] = useState("overview")
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
    const [initialStatus, setInitialStatus] = useState<TaskStatus>("todo")
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isRecordPaymentOpen, setIsRecordPaymentOpen] = useState(false)
    const [isGenerateInvoiceOpen, setIsGenerateInvoiceOpen] = useState(false)
    const [newMessage, setNewMessage] = useState("")
    const [taskViewMode, setTaskViewMode] = useState<"list" | "kanban">("kanban")

    // Invoice state
    const [invoices, setInvoices] = useState<Invoice[]>(sampleInvoices.filter(inv => inv.projectId === resolvedParams.id || inv.projectId === "1"))
    const [payments, setPayments] = useState<Payment[]>(samplePayments)
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
    const [isInvoiceDetailOpen, setIsInvoiceDetailOpen] = useState(false)

    // Invoice form state
    const [invoiceLineItems, setInvoiceLineItems] = useState<InvoiceItem[]>([
        { id: "item-new-1", description: "", quantity: 1, unitPrice: 0, amount: 0 }
    ])
    const [invoiceTaxRate, setInvoiceTaxRate] = useState(5)
    const [invoiceDiscount, setInvoiceDiscount] = useState(0)
    const [invoiceNotes, setInvoiceNotes] = useState("")
    const [invoicePaymentTerms, setInvoicePaymentTerms] = useState("30")
    const [recordPaymentInvoiceId, setRecordPaymentInvoiceId] = useState("")
    const [recordPaymentAmount, setRecordPaymentAmount] = useState("")
    const [recordPaymentMethod, setRecordPaymentMethod] = useState("bank_transfer")

    // Load project from DB
    useEffect(() => {
        async function loadProject() {
            try {
                const dbProject = await getProjectById(resolvedParams.id)
                if (dbProject) {
                    setProject({
                        ...getProjectByIdLocal(resolvedParams.id), // fallback for team/files/discussions
                        ...dbProject,
                        deadline: dbProject.dueDate || dbProject.deadline || getProjectByIdLocal(resolvedParams.id).deadline,
                        team: getProjectByIdLocal(resolvedParams.id).team,
                        files: getProjectByIdLocal(resolvedParams.id).files,
                        discussions: getProjectByIdLocal(resolvedParams.id).discussions,
                    })
                    setIsDbLoaded(true)
                }
            } catch (err) {
                console.error("Failed to load project from DB:", err)
            }
        }
        loadProject()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resolvedParams.id])

    // Computed invoice form totals
    const invoiceSubtotal = invoiceLineItems.reduce((sum, item) => sum + item.amount, 0)
    const invoiceTaxAmount = invoiceSubtotal * (invoiceTaxRate / 100)
    const invoiceTotal = invoiceSubtotal + invoiceTaxAmount - invoiceDiscount

    // Helper to create an invoice
    const createInvoiceFromData = (items: InvoiceItem[], notes?: string, isAuto?: boolean): Invoice => {
        const subtotal = items.reduce((sum, item) => sum + item.amount, 0)
        const taxAmt = subtotal * (invoiceTaxRate / 100)
        const total = subtotal + taxAmt - invoiceDiscount
        const now = new Date()
        const dueDate = new Date(now.getTime() + Number(invoicePaymentTerms) * 24 * 60 * 60 * 1000)
        return {
            id: `inv-${Date.now()}`,
            invoiceNumber: generateInvoiceNumber(invoices),
            projectId: project.id,
            projectName: project.name,
            clientId: project.id,
            clientName: project.client,
            clientEmail: project.clientEmail || "",
            subtotal,
            taxRate: invoiceTaxRate,
            taxAmount: taxAmt,
            discount: invoiceDiscount,
            totalAmount: total,
            amountPaid: 0,
            amountDue: total,
            status: isAuto ? "sent" : "draft",
            issueDate: now.toISOString().split("T")[0],
            dueDate: dueDate.toISOString().split("T")[0],
            items,
            notes: notes || invoiceNotes || undefined,
            terms: `Payment due within ${invoicePaymentTerms} days.`,
            createdAt: now.toISOString(),
            updatedAt: now.toISOString(),
        }
    }

    // Auto-invoice: when one-time project completed, generate final invoice
    useEffect(() => {
        if (project.status === "completed" && project.billingType === "one-time") {
            const hasCompletionInvoice = invoices.some(inv =>
                inv.notes?.includes("Auto-generated") && inv.projectId === project.id
            )
            if (!hasCompletionInvoice) {
                const remainingAmount = project.budget - project.spent
                if (remainingAmount > 0) {
                    const autoInvoice = createInvoiceFromData(
                        [{ id: `item-auto-${Date.now()}`, description: `Final Payment - ${project.name}`, quantity: 1, unitPrice: remainingAmount, amount: remainingAmount }],
                        `Auto-generated invoice upon project completion for ${project.name}.`,
                        true
                    )
                    setInvoices(prev => [autoInvoice, ...prev])
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project.status])

    // Auto-invoice: for recurring projects, check if monthly invoice is due
    useEffect(() => {
        if (project.billingType === "recurring" && project.monthlyRate && project.status !== "on-hold") {
            const now = new Date()
            const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
            const hasThisMonthInvoice = invoices.some(inv =>
                inv.projectId === project.id && inv.issueDate.startsWith(currentMonth)
            )
            if (!hasThisMonthInvoice) {
                const monthName = now.toLocaleDateString("en-US", { month: "long", year: "numeric" })
                const autoInvoice = createInvoiceFromData(
                    [{ id: `item-rec-${Date.now()}`, description: `Monthly Service - ${project.name} (${monthName})`, quantity: 1, unitPrice: project.monthlyRate, amount: project.monthlyRate }],
                    `Auto-generated monthly invoice for ${project.name}.`,
                    true
                )
                setInvoices(prev => [autoInvoice, ...prev])
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const StatusIcon = statusConfig[project.status].icon

    const completedTasks = projectTasks.filter(t => t.status === "done").length
    const taskCompletionRate = projectTasks.length > 0 ? Math.round((completedTasks / projectTasks.length) * 100) : 0
    const budgetUsedPercent = Math.round((project.spent / project.budget) * 100)

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Handle sending message
            setNewMessage("")
        }
    }

    const handleEditProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const updateData = {
            name: formData.get("name") as string || project.name,
            description: formData.get("description") as string || project.description,
            client: formData.get("client") as string || project.client,
            projectManager: formData.get("projectManager") as string || project.projectManager,
            status: formData.get("status") as Project["status"] || project.status,
            budget: Number(formData.get("budget")) || project.budget,
            spent: Number(formData.get("spent")) || project.spent,
            startDate: formData.get("startDate") as string || project.startDate,
            dueDate: formData.get("deadline") as string || project.deadline,
            progress: Number(formData.get("progress")) || project.progress,
            briefLink: formData.get("briefLink") as string || project.briefLink,
            driveLink: formData.get("driveLink") as string || project.driveLink,
            researchLink: formData.get("researchLink") as string || project.researchLink,
        }

        setProject(prev => ({
            ...prev,
            ...updateData,
            deadline: updateData.dueDate || prev.deadline,
        }))

        try {
            await updateProjectAction(resolvedParams.id, updateData)
        } catch (err) {
            console.error("Failed to update project:", err)
        }

        setIsEditOpen(false)
    }

    // Invoice handlers
    const handleViewInvoice = (invoice: Invoice) => {
        setSelectedInvoice(invoice)
        setIsInvoiceDetailOpen(true)
    }

    const handleUpdateInvoice = (updatedInvoice: Invoice) => {
        setInvoices(prev => prev.map(inv =>
            inv.id === updatedInvoice.id ? updatedInvoice : inv
        ))
        setSelectedInvoice(updatedInvoice)
    }

    const handleRecordPaymentForInvoice = (invoiceId: string, amount: number) => {
        const invoice = invoices.find(inv => inv.id === invoiceId)
        if (!invoice) return

        const newPayment: Payment = {
            id: `pay-${Date.now()}`,
            invoiceId,
            invoiceNumber: invoice.invoiceNumber,
            projectId: invoice.projectId,
            projectName: invoice.projectName,
            clientName: invoice.clientName,
            amount,
            paymentDate: new Date().toISOString().split('T')[0],
            paymentMethod: 'bank_transfer',
            createdAt: new Date().toISOString(),
        }
        setPayments(prev => [...prev, newPayment])

        // Update invoice
        setInvoices(prev => prev.map(inv => {
            if (inv.id === invoiceId) {
                const newAmountPaid = inv.amountPaid + amount
                const newAmountDue = inv.totalAmount - newAmountPaid
                const newStatus = newAmountDue <= 0 ? 'paid' : 'partial'
                const updatedInvoice = {
                    ...inv,
                    amountPaid: newAmountPaid,
                    amountDue: Math.max(0, newAmountDue),
                    status: newStatus as Invoice['status'],
                    paidDate: newAmountDue <= 0 ? new Date().toISOString().split('T')[0] : undefined,
                }
                setSelectedInvoice(updatedInvoice)
                return updatedInvoice
            }
            return inv
        }))
    }

    // Invoice stats
    const totalBilled = invoices.reduce((sum, inv) => sum + inv.totalAmount, 0)
    const totalPaid = invoices.reduce((sum, inv) => sum + inv.amountPaid, 0)
    const totalOutstanding = invoices.reduce((sum, inv) => sum + inv.amountDue, 0)

    // Project payments (filtered)
    const projectPayments = payments.filter(p => invoices.some(inv => inv.id === p.invoiceId))

    // Unpaid invoices for payment dropdown
    const unpaidInvoices = invoices.filter(inv => inv.status !== "paid" && inv.status !== "cancelled" && inv.status !== "draft")

    // Generate Invoice form submit
    const handleGenerateInvoice = (e: React.FormEvent) => {
        e.preventDefault()
        if (invoiceLineItems.every(item => item.amount === 0)) return
        const newInvoice = createInvoiceFromData(invoiceLineItems.filter(item => item.amount > 0))
        setInvoices(prev => [newInvoice, ...prev])
        setIsGenerateInvoiceOpen(false)
        // Reset form
        setInvoiceLineItems([{ id: `item-new-${Date.now()}`, description: "", quantity: 1, unitPrice: 0, amount: 0 }])
        setInvoiceDiscount(0)
        setInvoiceNotes("")
    }

    // Record Payment form submit
    const handleRecordPaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!recordPaymentInvoiceId || !recordPaymentAmount) return
        handleRecordPaymentForInvoice(recordPaymentInvoiceId, Number(recordPaymentAmount))
        setIsRecordPaymentOpen(false)
        setRecordPaymentInvoiceId("")
        setRecordPaymentAmount("")
    }

    // Line item helpers
    const addLineItem = () => {
        setInvoiceLineItems(prev => [...prev, { id: `item-new-${Date.now()}`, description: "", quantity: 1, unitPrice: 0, amount: 0 }])
    }
    const removeLineItem = (id: string) => {
        if (invoiceLineItems.length <= 1) return
        setInvoiceLineItems(prev => prev.filter(item => item.id !== id))
    }
    const updateLineItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
        setInvoiceLineItems(prev => prev.map(item => {
            if (item.id !== id) return item
            const updated = { ...item, [field]: value }
            if (field === "quantity" || field === "unitPrice") {
                updated.amount = Number(updated.quantity) * Number(updated.unitPrice)
            }
            return updated
        }))
    }

    const taskStatuses: Array<"todo" | "in-progress" | "in-review" | "done"> = ["todo", "in-progress", "in-review", "done"]

    const handleCreateTask = (formData: FormData) => {
        const newTask: Task = {
            id: generateId("TSK", projectTasks),
            title: formData.get("title") as string,
            description: formData.get("description") as string || "",
            status: formData.get("status") as TaskStatus || initialStatus,
            priority: formData.get("priority") as TaskPriority || "medium",
            taskType: formData.get("taskType") as TaskType || "general",
            projectId: project.id,
            projectName: project.name,
            assignees: [teamMembers.find((m) => m.id === formData.get("assignee")) || teamMembers[0]],
            assignedById: "2",
            assignedByName: "Ali Hasan",
            reporterId: "2",
            reporterName: "Ali Hasan",
            dueDate: formData.get("dueDate") as string || new Date().toISOString().split("T")[0],
            startDate: formData.get("startDate") as string || new Date().toISOString().split("T")[0],
            tags: (formData.get("tags") as string || "").split(",").map((t) => t.trim()).filter(Boolean),
            subtasks: [],
            comments: [],
            attachments: [],
            dependencies: [],
            timeEntries: [],
            referenceLinks: [],
            estimatedHours: Number(formData.get("estimatedHours")) || 0,
            actualHours: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            activityLog: [{ id: "1", timestamp: new Date().toISOString(), userId: "2", userName: "Ali Hasan", action: "created task" }],
            isBlocked: false,
            isRecurring: false,
        }
        setProjectTasks((prev) => [newTask, ...prev])
        setIsAddTaskOpen(false)
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col gap-4 animate-fade-in-up">
                    <Link href="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Projects</span>
                    </Link>

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <Badge className={`${statusConfig[project.status].color} border-0`}>
                                    <StatusIcon className="w-3 h-3 mr-1" />
                                    {statusConfig[project.status].label}
                                </Badge>
                                <span className="text-muted-foreground text-sm">â€¢</span>
                                <span className="text-sm text-muted-foreground">{project.client}</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-bold">{project.name}</h1>
                            <p className="text-muted-foreground mt-1">Project Manager: <span className="text-foreground">{project.projectManager}</span></p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-muted-foreground">Progress:</span>
                                <div className="flex items-center gap-2 w-32">
                                    <Progress value={project.progress} className="h-2" />
                                    <span className="font-semibold">{project.progress}%</span>
                                </div>
                            </div>
                            <Button className="gap-2" onClick={() => setIsEditOpen(true)}>
                                <Edit className="w-4 h-4" />
                                Edit Project
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-in-up">
                    <TabsList className="bg-secondary w-full justify-start overflow-x-auto flex-nowrap">
                        <TabsTrigger value="overview" className="gap-1.5">
                            <BarChart3 className="w-4 h-4" />
                            <span className="hidden sm:inline">Overview</span>
                        </TabsTrigger>
                        <TabsTrigger value="tasks" className="gap-1.5">
                            <CheckCircle className="w-4 h-4" />
                            <span className="hidden sm:inline">Tasks</span>
                        </TabsTrigger>
                        <TabsTrigger value="team" className="gap-1.5">
                            <Users className="w-4 h-4" />
                            <span className="hidden sm:inline">Team</span>
                        </TabsTrigger>
                        <TabsTrigger value="timeline" className="gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span className="hidden sm:inline">Timeline</span>
                        </TabsTrigger>
                        <TabsTrigger value="files" className="gap-1.5">
                            <FolderOpen className="w-4 h-4" />
                            <span className="hidden sm:inline">Files</span>
                        </TabsTrigger>
                        <TabsTrigger value="discussion" className="gap-1.5">
                            <MessageSquare className="w-4 h-4" />
                            <span className="hidden sm:inline">Discussion</span>
                        </TabsTrigger>
                        <TabsTrigger value="billing" className="gap-1.5">
                            <Receipt className="w-4 h-4" />
                            <span className="hidden sm:inline">Billing</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* Overview Tab */}
                    <TabsContent value="overview" className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column - Details */}
                            <div className="lg:col-span-2 space-y-6">
                                <AnimatedCard className="p-6">
                                    <h3 className="font-semibold mb-3">Project Description</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                                </AnimatedCard>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <AnimatedCard className="p-4" delay={100}>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                            <Calendar className="w-4 h-4" />
                                            Start Date
                                        </div>
                                        <p className="font-semibold">{new Date(project.startDate).toLocaleDateString()}</p>
                                    </AnimatedCard>
                                    <AnimatedCard className="p-4" delay={150}>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                            <Calendar className="w-4 h-4" />
                                            Deadline
                                        </div>
                                        <p className="font-semibold">{new Date(project.deadline).toLocaleDateString()}</p>
                                    </AnimatedCard>
                                    <AnimatedCard className="p-4" delay={200}>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                            <DollarSign className="w-4 h-4" />
                                            Budget
                                        </div>
                                        <p className="font-semibold">${project.budget.toLocaleString()}</p>
                                    </AnimatedCard>
                                </div>

                                {/* Key Links */}
                                <AnimatedCard className="p-6" delay={250}>
                                    <h3 className="font-semibold mb-4">Key Links</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {project.briefLink ? (
                                            <a href={project.briefLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                                                <FileText className="w-5 h-5 text-primary" />
                                                <div>
                                                    <p className="font-medium text-sm">Project Brief</p>
                                                    <p className="text-xs text-muted-foreground">View document</p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground" />
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 opacity-60">
                                                <FileText className="w-5 h-5 text-muted-foreground" />
                                                <div>
                                                    <p className="font-medium text-sm">Project Brief</p>
                                                    <p className="text-xs text-muted-foreground">Not provided</p>
                                                </div>
                                            </div>
                                        )}

                                        {project.driveLink ? (
                                            <a href={project.driveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                                                <FolderOpen className="w-5 h-5 text-chart-4" />
                                                <div>
                                                    <p className="font-medium text-sm">Drive Folder</p>
                                                    <p className="text-xs text-muted-foreground">View files</p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground" />
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 opacity-60">
                                                <FolderOpen className="w-5 h-5 text-muted-foreground" />
                                                <div>
                                                    <p className="font-medium text-sm">Drive Folder</p>
                                                    <p className="text-xs text-muted-foreground">Not provided</p>
                                                </div>
                                            </div>
                                        )}

                                        {project.researchLink ? (
                                            <a href={project.researchLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                                                <Link2 className="w-5 h-5 text-chart-3" />
                                                <div>
                                                    <p className="font-medium text-sm">Research Docs</p>
                                                    <p className="text-xs text-muted-foreground">View research</p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground" />
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 opacity-60">
                                                <Link2 className="w-5 h-5 text-muted-foreground" />
                                                <div>
                                                    <p className="font-medium text-sm">Research Docs</p>
                                                    <p className="text-xs text-muted-foreground">Not provided</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </AnimatedCard>
                            </div>

                            {/* Right Column - Metrics */}
                            <div className="space-y-6">
                                <AnimatedCard className="p-6" delay={300}>
                                    <h3 className="font-semibold mb-4">Budget vs. Spend</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Spent</span>
                                            <span className="font-semibold text-primary">${project.spent.toLocaleString()}</span>
                                        </div>
                                        <Progress value={budgetUsedPercent} className="h-3" />
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Budget</span>
                                            <span>${project.budget.toLocaleString()}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2">{budgetUsedPercent}% of budget used</p>
                                    </div>
                                </AnimatedCard>

                                <AnimatedCard className="p-6" delay={350}>
                                    <h3 className="font-semibold mb-4">Task Completion Rate</h3>
                                    <div className="flex items-center justify-center">
                                        <div className="relative">
                                            <svg className="w-32 h-32">
                                                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="none" className="text-secondary" />
                                                <circle
                                                    cx="64" cy="64" r="56"
                                                    stroke="currentColor"
                                                    strokeWidth="8"
                                                    fill="none"
                                                    className="text-primary"
                                                    strokeDasharray={`${taskCompletionRate * 3.52} 352`}
                                                    strokeLinecap="round"
                                                    transform="rotate(-90 64 64)"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-3xl font-bold">{taskCompletionRate}%</span>
                                                <span className="text-xs text-muted-foreground">Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center text-sm text-muted-foreground">
                                        {completedTasks} of {projectTasks.length} tasks completed
                                    </div>
                                </AnimatedCard>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Tasks Tab */}
                    <TabsContent value="tasks" className="space-y-4 mt-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex gap-2">
                                <Button
                                    variant={taskViewMode === "kanban" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setTaskViewMode("kanban")}
                                >
                                    Kanban
                                </Button>
                                <Button
                                    variant={taskViewMode === "list" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setTaskViewMode("list")}
                                >
                                    List
                                </Button>
                            </div>
                            <Button onClick={() => setIsAddTaskOpen(true)} className="gap-2">
                                <Plus className="w-4 h-4" />
                                Add New Task
                            </Button>
                        </div>

                        {taskViewMode === "kanban" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-4">
                                {taskStatuses.map((status) => {
                                    const statusTasks = projectTasks.filter(t => t.status === status)
                                    return (
                                        <AnimatedCard key={status} hover={false} className="min-w-[250px] bg-secondary/20">
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-sm font-medium flex items-center justify-between">
                                                    <Badge className={`${TASK_STATUS_CONFIG[status].color} border-0`}>
                                                        {TASK_STATUS_CONFIG[status].label}
                                                    </Badge>
                                                    <span className="text-muted-foreground">{statusTasks.length}</span>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-2 max-h-[400px] overflow-y-auto">
                                                {statusTasks.map((task) => (
                                                    <div key={task.id} className="p-3 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-colors cursor-pointer group">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <p className="font-medium text-sm leading-tight">{task.title}</p>
                                                            <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                                        </div>
                                                        {task.description && (
                                                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{task.description}</p>
                                                        )}
                                                        <div className="flex items-center justify-between mt-3">
                                                            <div className="flex items-center gap-2">
                                                                <Badge variant="outline" className={cn("text-[10px] px-1.5 py-0 border-0", PRIORITY_CONFIG[task.priority].color.replace("text-", "bg-") + "/10", PRIORITY_CONFIG[task.priority].color)}>
                                                                    {PRIORITY_CONFIG[task.priority].label}
                                                                </Badge>
                                                                {task.taskType && TASK_TYPE_CONFIG[task.taskType] && (
                                                                    <span className="text-muted-foreground scale-75" title={TASK_TYPE_CONFIG[task.taskType].label}>
                                                                        {TASK_TYPE_CONFIG[task.taskType].icon}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                                                    <Clock className="w-3 h-3" />
                                                                    {new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                                                </span>
                                                                <div className="flex -space-x-2">
                                                                    {task.assignees.slice(0, 3).map((assignee, i) => (
                                                                        <Avatar key={i} className="w-5 h-5 border border-background">
                                                                            <AvatarFallback className="text-[8px] bg-primary/10 text-primary">
                                                                                {assignee.name.split(' ').map(n => n[0]).join('')}
                                                                            </AvatarFallback>
                                                                        </Avatar>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                {statusTasks.length === 0 && (
                                                    <div className="p-4 text-center border-2 border-dashed border-border rounded-lg text-muted-foreground text-sm">
                                                        No tasks
                                                    </div>
                                                )}
                                            </CardContent>
                                        </AnimatedCard>
                                    )
                                })}
                            </div>
                        )}

                        {taskViewMode === "list" && (
                            <AnimatedCard>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-border bg-secondary/30">
                                                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Task</th>
                                                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Type</th>
                                                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Status</th>
                                                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Priority</th>
                                                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Assignees</th>
                                                    <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Due Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {projectTasks.map((task) => (
                                                    <tr key={task.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer text-sm">
                                                        <td className="py-3 px-4 font-medium">
                                                            <div className="flex flex-col">
                                                                <span>{task.title}</span>
                                                                <span className="text-xs text-muted-foreground font-normal truncate max-w-[200px]">{task.description}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            {task.taskType && TASK_TYPE_CONFIG[task.taskType] && (
                                                                <div className="flex items-center gap-1.5 text-muted-foreground bg-secondary/50 w-fit px-2 py-1 rounded-md text-xs">
                                                                    <span className="scale-75">{TASK_TYPE_CONFIG[task.taskType].icon}</span>
                                                                    <span>{TASK_TYPE_CONFIG[task.taskType].label}</span>
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <Badge className={`${TASK_STATUS_CONFIG[task.status].color} border-0`}>
                                                                {TASK_STATUS_CONFIG[task.status].label}
                                                            </Badge>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <Badge variant="outline" className={cn("border-0 gap-1.5", PRIORITY_CONFIG[task.priority].color.replace("text-", "bg-") + "/10", PRIORITY_CONFIG[task.priority].color)}>
                                                                <span className={cn("w-1.5 h-1.5 rounded-full", PRIORITY_CONFIG[task.priority].color.replace("text-", "bg-"))} />
                                                                {PRIORITY_CONFIG[task.priority].label}
                                                            </Badge>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <div className="flex -space-x-2">
                                                                {task.assignees.map((assignee, i) => (
                                                                    <Avatar key={i} className="w-6 h-6 border-2 border-background">
                                                                        <AvatarFallback className="text-[10px] bg-primary/20 text-primary">
                                                                            {assignee.name.split(' ').map(n => n[0]).join('')}
                                                                        </AvatarFallback>
                                                                    </Avatar>
                                                                ))}
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-4 text-muted-foreground flex items-center gap-2">
                                                            <Calendar className="w-3.5 h-3.5" />
                                                            {new Date(task.dueDate).toLocaleDateString()}
                                                        </td>
                                                    </tr>
                                                ))}
                                                {projectTasks.length === 0 && (
                                                    <tr>
                                                        <td colSpan={6} className="py-8 text-center text-muted-foreground">
                                                            No tasks found for this project.
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </AnimatedCard>
                        )}
                    </TabsContent>

                    {/* Team Tab */}
                    <TabsContent value="team" className="space-y-4 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {project.team.map((member, i) => (
                                <AnimatedCard key={member.id} delay={i * 50} className="p-5">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="w-12 h-12">
                                                <AvatarFallback className="bg-primary/20 text-primary">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{member.name}</p>
                                                <p className="text-sm text-muted-foreground">{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-muted-foreground">Workload</span>
                                                <span className={`font-medium ${member.workload > 80 ? 'text-destructive' : member.workload > 60 ? 'text-warning' : 'text-success'}`}>
                                                    {member.workload}%
                                                </span>
                                            </div>
                                            <Progress value={member.workload} className="h-2" />
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Tasks Assigned</span>
                                            <span className="font-medium">{member.tasksAssigned}</span>
                                        </div>
                                    </div>
                                </AnimatedCard>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Timeline Tab (Gantt Chart) */}
                    <TabsContent value="timeline" className="mt-6">
                        <AnimatedCard className="p-6">
                            <h3 className="font-semibold mb-6">Project Timeline</h3>
                            <div className="space-y-3">
                                {ganttData.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-32 text-sm font-medium truncate">{item.name}</div>
                                        <div className="flex-1 h-8 bg-secondary rounded-lg relative">
                                            <div
                                                className={`absolute h-full rounded-lg transition-all ${item.status === 'done' ? 'bg-success' :
                                                    item.status === 'in-progress' ? 'bg-primary' :
                                                        'bg-muted-foreground/50'
                                                    }`}
                                                style={{
                                                    left: `${(item.start / 45) * 100}%`,
                                                    width: `${(item.duration / 45) * 100}%`
                                                }}
                                            />
                                        </div>
                                        <Badge className={`w-24 justify-center ${item.status === 'done' ? 'bg-success/20 text-success' :
                                            item.status === 'in-progress' ? 'bg-primary/20 text-primary' :
                                                'bg-muted text-muted-foreground'
                                            } border-0`}>
                                            {item.status === 'in-progress' ? 'In Progress' : item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-6 text-xs text-muted-foreground">
                                <span>Week 1</span>
                                <span>Week 2</span>
                                <span>Week 3</span>
                                <span>Week 4</span>
                                <span>Week 5</span>
                                <span>Week 6</span>
                            </div>
                        </AnimatedCard>
                    </TabsContent>

                    {/* Files Tab */}
                    <TabsContent value="files" className="space-y-4 mt-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <Input placeholder="Search files..." className="max-w-xs" />
                            <Button className="gap-2">
                                <Upload className="w-4 h-4" />
                                Upload File
                            </Button>
                        </div>

                        <AnimatedCard>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Name</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Size</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Uploaded By</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Date</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Version</th>
                                                <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {project.files.map((file) => {
                                                const FileIcon = fileIcons[file.type]
                                                return (
                                                    <tr key={file.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                                                        <td className="py-3 px-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="p-2 rounded-lg bg-secondary">
                                                                    <FileIcon className="w-4 h-4 text-primary" />
                                                                </div>
                                                                <span className="font-medium text-sm">{file.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">{file.size}</td>
                                                        <td className="py-3 px-4 text-sm">{file.uploadedBy}</td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">{new Date(file.uploadedAt).toLocaleDateString()}</td>
                                                        <td className="py-3 px-4">
                                                            <Badge variant="outline">v{file.version}</Badge>
                                                        </td>
                                                        <td className="py-3 px-4 text-right">
                                                            <Button variant="ghost" size="sm">
                                                                <Download className="w-4 h-4" />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </AnimatedCard>
                    </TabsContent>

                    {/* Discussion Tab */}
                    <TabsContent value="discussion" className="mt-6">
                        <AnimatedCard className="p-6">
                            <div className="flex flex-col h-[500px]">
                                <ScrollArea className="flex-1 pr-4">
                                    <div className="space-y-4">
                                        {project.discussions.map((msg) => (
                                            <div key={msg.id} className="flex gap-3">
                                                <Avatar className="w-8 h-8 flex-shrink-0">
                                                    <AvatarFallback className="bg-primary/20 text-primary text-xs">
                                                        {msg.author.split(' ').map(n => n[0]).join('')}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-sm">{msg.author}</span>
                                                        <span className="text-xs text-muted-foreground">
                                                            {new Date(msg.timestamp).toLocaleString()}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm mt-1 text-muted-foreground">
                                                        {msg.content.split(/(@\w+\s\w+)/g).map((part, i) =>
                                                            part.startsWith('@') ? (
                                                                <span key={i} className="text-primary font-medium">{part}</span>
                                                            ) : part
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>

                                <div className="mt-4 pt-4 border-t border-border">
                                    <div className="flex gap-3">
                                        <Input
                                            placeholder="Type a message... Use @name to mention someone"
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                        />
                                        <Button onClick={handleSendMessage} className="gap-2">
                                            <Send className="w-4 h-4" />
                                            Send
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedCard>
                    </TabsContent>

                    {/* Billing Tab */}
                    <TabsContent value="billing" className="space-y-6 mt-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div>
                                    <h3 className="font-semibold text-lg">Invoices & Payments</h3>
                                    <p className="text-sm text-muted-foreground">Manage billing for this project</p>
                                </div>
                                <Badge className={`${project.billingType === "recurring" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"} border-0 gap-1.5`}>
                                    {project.billingType === "recurring" ? <Repeat className="w-3 h-3" /> : <DollarSign className="w-3 h-3" />}
                                    {project.billingType === "recurring" ? "Recurring" : "One-Time"}
                                </Badge>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="gap-2" onClick={() => setIsRecordPaymentOpen(true)}>
                                    <DollarSign className="w-4 h-4" />
                                    Record Payment
                                </Button>
                                <Button className="gap-2" onClick={() => setIsGenerateInvoiceOpen(true)}>
                                    <Plus className="w-4 h-4" />
                                    Generate Invoice
                                </Button>
                            </div>
                        </div>

                        {/* Billing Stats */}
                        <div className={`grid grid-cols-1 ${project.billingType === "recurring" ? "sm:grid-cols-4" : "sm:grid-cols-3"} gap-4`}>
                            <AnimatedCard className="p-4">
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                    <Receipt className="w-4 h-4" />
                                    Total Billed
                                </div>
                                <p className="text-2xl font-bold text-primary">${totalBilled.toLocaleString()}</p>
                                <p className="text-xs text-muted-foreground mt-1">{invoices.length} invoice{invoices.length !== 1 ? "s" : ""}</p>
                            </AnimatedCard>
                            <AnimatedCard className="p-4" delay={50}>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                    <CheckCircle className="w-4 h-4" />
                                    Paid
                                </div>
                                <p className="text-2xl font-bold text-green-500">${totalPaid.toLocaleString()}</p>
                                <p className="text-xs text-muted-foreground mt-1">{totalBilled > 0 ? Math.round((totalPaid / totalBilled) * 100) : 0}% collected</p>
                            </AnimatedCard>
                            <AnimatedCard className="p-4" delay={100}>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                    <Clock className="w-4 h-4" />
                                    Outstanding
                                </div>
                                <p className="text-2xl font-bold text-yellow-500">${totalOutstanding.toLocaleString()}</p>
                                <p className="text-xs text-muted-foreground mt-1">{unpaidInvoices.length} unpaid</p>
                            </AnimatedCard>
                            {project.billingType === "recurring" && (
                                <AnimatedCard className="p-4" delay={150}>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                        <Repeat className="w-4 h-4" />
                                        Monthly Rate
                                    </div>
                                    <p className="text-2xl font-bold text-blue-400">${(project.monthlyRate || 0).toLocaleString()}</p>
                                    <p className="text-xs text-muted-foreground mt-1">per month</p>
                                </AnimatedCard>
                            )}
                        </div>

                        {/* Invoices Table */}
                        <AnimatedCard delay={200}>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium">All Invoices</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-border bg-secondary/30">
                                                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Invoice #</th>
                                                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Issue Date</th>
                                                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground">Amount</th>
                                                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground">Tax</th>
                                                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground">Paid</th>
                                                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Status</th>
                                                <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground">Due Date</th>
                                                <th className="text-right py-3 px-4 text-xs font-semibold text-muted-foreground">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoices.map((invoice) => {
                                                const statusCfg = INVOICE_STATUS_CONFIG[invoice.status] || { label: invoice.status, color: "bg-muted text-muted-foreground" }
                                                const isOverdue = !invoice.paidDate && new Date(invoice.dueDate) < new Date() && invoice.status !== "paid" && invoice.status !== "cancelled"
                                                return (
                                                    <tr key={invoice.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer" onClick={() => handleViewInvoice(invoice)}>
                                                        <td className="py-3 px-4">
                                                            <span className="font-mono text-sm font-medium">{invoice.invoiceNumber}</span>
                                                            {invoice.notes?.includes("Auto-generated") && (
                                                                <Badge variant="outline" className="ml-2 text-[10px] px-1.5 py-0">Auto</Badge>
                                                            )}
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">{new Date(invoice.issueDate).toLocaleDateString()}</td>
                                                        <td className="py-3 px-4 text-sm font-medium text-right">${invoice.totalAmount.toLocaleString()}</td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground text-right">${invoice.taxAmount.toLocaleString()}</td>
                                                        <td className="py-3 px-4 text-sm text-green-500 text-right">${invoice.amountPaid.toLocaleString()}</td>
                                                        <td className="py-3 px-4">
                                                            <Badge className={`${isOverdue ? "bg-red-500/20 text-red-400" : statusCfg.color} border-0`}>
                                                                {isOverdue ? "Overdue" : statusCfg.label}
                                                            </Badge>
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">{new Date(invoice.dueDate).toLocaleDateString()}</td>
                                                        <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                                                            <div className="flex items-center justify-end gap-1">
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className="gap-1 text-xs"
                                                                    onClick={() => handleViewInvoice(invoice)}
                                                                >
                                                                    <Eye className="w-3.5 h-3.5" />
                                                                    View
                                                                </Button>
                                                                <Button variant="ghost" size="sm">
                                                                    <Send className="w-3.5 h-3.5" />
                                                                </Button>
                                                                <Button variant="ghost" size="sm">
                                                                    <Download className="w-3.5 h-3.5" />
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            {invoices.length === 0 && (
                                                <tr>
                                                    <td colSpan={8} className="py-12 text-center">
                                                        <Receipt className="w-8 h-8 mx-auto text-muted-foreground/50 mb-2" />
                                                        <p className="text-muted-foreground text-sm">No invoices yet</p>
                                                        <p className="text-muted-foreground text-xs mt-1">Click &quot;Generate Invoice&quot; to create one</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </AnimatedCard>

                        {/* Payment History */}
                        <AnimatedCard delay={250}>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium">Payment History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {projectPayments.length > 0 ? projectPayments.slice(0, 10).map((payment) => (
                                        <div key={payment.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-green-500/20">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm">${payment.amount.toLocaleString()} received</p>
                                                    <p className="text-xs text-muted-foreground">{payment.invoiceNumber} • {payment.paymentMethod.replace("_", " ")}</p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-muted-foreground">{new Date(payment.paymentDate).toLocaleDateString()}</span>
                                        </div>
                                    )) : (
                                        <div className="py-6 text-center text-muted-foreground text-sm">
                                            No payments recorded yet
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </AnimatedCard>
                    </TabsContent>
                </Tabs>

                {/* Add Task Dialog */}
                <Dialog open={isAddTaskOpen} onOpenChange={setIsAddTaskOpen}>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle>Add New Task</DialogTitle>
                            <DialogDescription>Create a new task for this project</DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="taskTitle">Task Title</Label>
                                <Input id="taskTitle" placeholder="Enter task title..." />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="taskDescription">Description</Label>
                                <Textarea id="taskDescription" placeholder="Task description..." />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Priority</Label>
                                    <Select defaultValue="medium">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">Low</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="high">High</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Assignee</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select assignee" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {project.team.map((member) => (
                                                <SelectItem key={member.id} value={member.id}>{member.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="taskDue">Due Date</Label>
                                <Input id="taskDue" type="date" />
                            </div>
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsAddTaskOpen(false)}>Cancel</Button>
                                <Button type="submit">Create Task</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Edit Project Dialog */}
                <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Edit Project</DialogTitle>
                            <DialogDescription>Update project details and settings</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleEditProject} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2 col-span-2">
                                    <Label htmlFor="name">Project Name</Label>
                                    <Input id="name" name="name" defaultValue={project.name} required />
                                </div>
                                <div className="space-y-2 col-span-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" name="description" defaultValue={project.description} rows={3} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="client">Client</Label>
                                    <Input id="client" name="client" defaultValue={project.client} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="projectManager">Project Manager</Label>
                                    <Input id="projectManager" name="projectManager" defaultValue={project.projectManager} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="status">Status</Label>
                                    <Select name="status" defaultValue={project.status}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="planning">Planning</SelectItem>
                                            <SelectItem value="in-progress">In Progress</SelectItem>
                                            <SelectItem value="review">Review</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                            <SelectItem value="on-hold">On Hold</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="progress">Progress (%)</Label>
                                    <Input id="progress" name="progress" type="number" min="0" max="100" defaultValue={project.progress} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="budget">Budget (৳)</Label>
                                    <Input id="budget" name="budget" type="number" defaultValue={project.budget} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="spent">Spent (৳)</Label>
                                    <Input id="spent" name="spent" type="number" defaultValue={project.spent} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="startDate">Start Date</Label>
                                    <Input id="startDate" name="startDate" type="date" defaultValue={project.startDate} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="deadline">Deadline</Label>
                                    <Input id="deadline" name="deadline" type="date" defaultValue={project.deadline} />
                                </div>
                            </div>

                            {/* Key Links Section */}
                            <div className="pt-4 border-t border-border">
                                <Label className="text-sm font-medium text-muted-foreground mb-3 block">Key Links</Label>
                                <div className="space-y-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="briefLink" className="text-xs">Project Brief URL</Label>
                                        <Input id="briefLink" name="briefLink" type="url" defaultValue={project.briefLink || ""} placeholder="https://..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="driveLink" className="text-xs">Google Drive Folder URL</Label>
                                        <Input id="driveLink" name="driveLink" type="url" defaultValue={project.driveLink || ""} placeholder="https://..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="researchLink" className="text-xs">Research Documents URL</Label>
                                        <Input id="researchLink" name="researchLink" type="url" defaultValue={project.researchLink || ""} placeholder="https://..." />
                                    </div>
                                </div>
                            </div>

                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsEditOpen(false)}>Cancel</Button>
                                <Button type="submit">Save Changes</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Record Payment Dialog */}
                <Dialog open={isRecordPaymentOpen} onOpenChange={setIsRecordPaymentOpen}>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-green-500" />
                                Record Payment
                            </DialogTitle>
                            <DialogDescription>Record a payment received for this project</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleRecordPaymentSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label>Invoice</Label>
                                <Select value={recordPaymentInvoiceId} onValueChange={(val) => {
                                    setRecordPaymentInvoiceId(val)
                                    const inv = invoices.find(i => i.id === val)
                                    if (inv) setRecordPaymentAmount(String(inv.amountDue))
                                }}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select invoice" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {unpaidInvoices.length > 0 ? unpaidInvoices.map(inv => (
                                            <SelectItem key={inv.id} value={inv.id}>
                                                {inv.invoiceNumber} - ${inv.amountDue.toLocaleString()} ({inv.status})
                                            </SelectItem>
                                        )) : (
                                            <SelectItem value="none" disabled>No unpaid invoices</SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Amount (৳)</Label>
                                    <Input
                                        type="number"
                                        placeholder="0.00"
                                        value={recordPaymentAmount}
                                        onChange={(e) => setRecordPaymentAmount(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Payment Date</Label>
                                    <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Payment Method</Label>
                                <Select value={recordPaymentMethod} onValueChange={setRecordPaymentMethod}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="bank_transfer">🏦 Bank Transfer</SelectItem>
                                        <SelectItem value="credit_card">💳 Credit Card</SelectItem>
                                        <SelectItem value="cash">💵 Cash</SelectItem>
                                        <SelectItem value="check">📄 Check</SelectItem>
                                        <SelectItem value="other">📋 Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Transaction ID (Optional)</Label>
                                <Input placeholder="TXN-2024-XXX" />
                            </div>
                            <div className="space-y-2">
                                <Label>Notes (Optional)</Label>
                                <Textarea placeholder="Add any notes about this payment..." rows={2} />
                            </div>
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsRecordPaymentOpen(false)}>Cancel</Button>
                                <Button type="submit" className="gap-2" disabled={!recordPaymentInvoiceId || !recordPaymentAmount}>
                                    <CheckCircle className="w-4 h-4" />
                                    Record Payment
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Generate Invoice Dialog */}
                <Dialog open={isGenerateInvoiceOpen} onOpenChange={setIsGenerateInvoiceOpen}>
                    <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <Receipt className="w-5 h-5 text-primary" />
                                Generate Invoice
                            </DialogTitle>
                            <DialogDescription>Create a new invoice for {project.name}</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleGenerateInvoice} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Invoice Number</Label>
                                    <Input value={generateInvoiceNumber(invoices)} readOnly className="bg-secondary font-mono" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Issue Date</Label>
                                    <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label>Client</Label>
                                    <Input value={project.client} readOnly className="bg-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Payment Terms</Label>
                                    <Select value={invoicePaymentTerms} onValueChange={setInvoicePaymentTerms}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="15">Net 15</SelectItem>
                                            <SelectItem value="30">Net 30</SelectItem>
                                            <SelectItem value="45">Net 45</SelectItem>
                                            <SelectItem value="60">Net 60</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Due Date</Label>
                                    <Input
                                        type="date"
                                        value={new Date(Date.now() + Number(invoicePaymentTerms) * 86400000).toISOString().split('T')[0]}
                                        readOnly
                                        className="bg-secondary"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Line Items</Label>
                                <div className="border border-border rounded-lg overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-secondary">
                                            <tr>
                                                <th className="text-left py-2 px-3 font-medium">Description</th>
                                                <th className="text-center py-2 px-3 font-medium w-20">Qty</th>
                                                <th className="text-right py-2 px-3 font-medium w-28">Rate</th>
                                                <th className="text-right py-2 px-3 font-medium w-28">Amount</th>
                                                <th className="w-10"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoiceLineItems.map((item) => (
                                                <tr key={item.id} className="border-t border-border">
                                                    <td className="py-2 px-3">
                                                        <Input
                                                            placeholder="Service description"
                                                            className="h-8"
                                                            value={item.description}
                                                            onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                                                        />
                                                    </td>
                                                    <td className="py-2 px-3">
                                                        <Input
                                                            type="number"
                                                            className="h-8 text-center"
                                                            value={item.quantity}
                                                            min={1}
                                                            onChange={(e) => updateLineItem(item.id, "quantity", Number(e.target.value))}
                                                        />
                                                    </td>
                                                    <td className="py-2 px-3">
                                                        <Input
                                                            type="number"
                                                            className="h-8 text-right"
                                                            value={item.unitPrice}
                                                            min={0}
                                                            onChange={(e) => updateLineItem(item.id, "unitPrice", Number(e.target.value))}
                                                        />
                                                    </td>
                                                    <td className="py-2 px-3 text-right font-medium">${item.amount.toLocaleString()}</td>
                                                    <td className="py-2 px-1">
                                                        {invoiceLineItems.length > 1 && (
                                                            <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => removeLineItem(item.id)}>
                                                                <Trash2 className="w-3.5 h-3.5 text-destructive" />
                                                            </Button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <Button type="button" variant="outline" size="sm" className="gap-1" onClick={addLineItem}>
                                    <Plus className="w-3 h-3" /> Add Line Item
                                </Button>
                            </div>

                            <div className="flex justify-between items-start">
                                <div className="space-y-2 flex-1 mr-8">
                                    <Label>Discount (৳)</Label>
                                    <Input
                                        type="number"
                                        className="w-32"
                                        value={invoiceDiscount}
                                        min={0}
                                        onChange={(e) => setInvoiceDiscount(Number(e.target.value))}
                                    />
                                </div>
                                <div className="w-56 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span>${invoiceSubtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Tax ({invoiceTaxRate}%)</span>
                                        <span>${invoiceTaxAmount.toLocaleString()}</span>
                                    </div>
                                    {invoiceDiscount > 0 && (
                                        <div className="flex justify-between text-red-400">
                                            <span>Discount</span>
                                            <span>-${invoiceDiscount.toLocaleString()}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between font-semibold border-t pt-2 text-base">
                                        <span>Total</span>
                                        <span className="text-primary">${invoiceTotal.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Notes (Optional)</Label>
                                <Textarea
                                    placeholder="Add any notes for the client..."
                                    rows={2}
                                    value={invoiceNotes}
                                    onChange={(e) => setInvoiceNotes(e.target.value)}
                                />
                            </div>

                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsGenerateInvoiceOpen(false)}>Cancel</Button>
                                <Button type="submit" className="gap-2" disabled={invoiceSubtotal <= 0}>
                                    <Receipt className="w-4 h-4" />
                                    Create Invoice
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Invoice Detail Dialog */}
                <InvoiceDetailDialog
                    invoice={selectedInvoice}
                    isOpen={isInvoiceDetailOpen}
                    onClose={() => setIsInvoiceDetailOpen(false)}
                    onUpdate={handleUpdateInvoice}
                    onRecordPayment={handleRecordPaymentForInvoice}
                    payments={payments}
                />

                {/* Create Task Dialog */}
                <Dialog open={isAddTaskOpen} onOpenChange={setIsAddTaskOpen}>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader className="pb-4 border-b border-border">
                            <DialogTitle className="flex items-center gap-3 text-xl">
                                <div className="p-2 rounded-lg bg-primary/20">
                                    <Plus className="w-5 h-5 text-primary" />
                                </div>
                                Create New Task
                            </DialogTitle>
                            <DialogDescription className="text-sm text-muted-foreground mt-1">
                                Add a new task to {project.name}
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={(e) => { e.preventDefault(); handleCreateTask(new FormData(e.currentTarget)) }} className="space-y-6 pt-4">
                            {/* Task Details Section */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                    <FileText className="w-4 h-4" />
                                    Task Details
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="title" className="text-sm">
                                        Task Title <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        placeholder="e.g., Implement user authentication"
                                        required
                                        className="bg-secondary/50 border-border"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description" className="text-sm">Description</Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Describe the task in detail..."
                                        rows={3}
                                        className="bg-secondary/50 border-border resize-none"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="status" className="text-sm">Status</Label>
                                        <Select name="status" defaultValue={initialStatus}>
                                            <SelectTrigger className="bg-secondary/50 border-border">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(TASK_STATUS_CONFIG).map(([k, v]) => (
                                                    <SelectItem key={k} value={k}>
                                                        <span className="flex items-center gap-2">
                                                            <span className={cn("w-2 h-2 rounded-full", v.color.replace("text-", "bg-"))} />
                                                            {v.label}
                                                        </span>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="taskType" className="text-sm">Task Type</Label>
                                        <Select name="taskType" defaultValue="general">
                                            <SelectTrigger className="bg-secondary/50 border-border">
                                                <SelectValue placeholder="Select task type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(TASK_TYPE_CONFIG).map(([k, v]) => (
                                                    <SelectItem key={k} value={k}>
                                                        <span className="flex items-center gap-2">
                                                            <span className="scale-75">{v.icon}</span>
                                                            {v.label}
                                                        </span>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Assignment & Schedule Section */}
                            <div className="space-y-4 pt-4 border-t border-border">
                                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                    <Users className="w-4 h-4" />
                                    Assignment & Schedule
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="assignee" className="text-sm">Assignee</Label>
                                        <Select name="assignee" defaultValue="1">
                                            <SelectTrigger className="bg-secondary/50 border-border">
                                                <SelectValue placeholder="Select assignee" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {teamMembers.map((m) => (
                                                    <SelectItem key={m.id} value={m.id}>
                                                        <span className="flex items-center gap-2">
                                                            <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-medium">
                                                                {m.name.split(" ").map(n => n[0]).join("")}
                                                            </span>
                                                            {m.name}
                                                        </span>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="priority" className="text-sm">Priority</Label>
                                        <Select name="priority" defaultValue="medium">
                                            <SelectTrigger className="bg-secondary/50 border-border">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(PRIORITY_CONFIG).map(([k, v]) => (
                                                    <SelectItem key={k} value={k}>
                                                        <span className="flex items-center gap-2">
                                                            <span className={cn("w-2 h-2 rounded-full", v.color.replace("text-", "bg-"))} />
                                                            {v.label}
                                                        </span>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="startDate" className="text-sm">Start Date</Label>
                                        <DatePicker
                                            name="startDate"
                                            placeholder="Select start date"
                                            defaultValue={new Date()}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="dueDate" className="text-sm">
                                            Due Date <span className="text-destructive">*</span>
                                        </Label>
                                        <DatePicker
                                            name="dueDate"
                                            placeholder="Select due date"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Reference Links Section */}
                            <div className="space-y-4 pt-4 border-t border-border">
                                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                    <Link2 className="w-4 h-4" />
                                    Reference Links
                                </div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="col-span-2">
                                            <Input
                                                id="referenceUrl1"
                                                name="referenceUrl1"
                                                placeholder="https://figma.com/design/..."
                                                className="bg-secondary/50 border-border text-sm"
                                            />
                                        </div>
                                        <Input
                                            id="referenceTitle1"
                                            name="referenceTitle1"
                                            placeholder="Link title"
                                            className="bg-secondary/50 border-border text-sm"
                                        />
                                    </div>
                                    <p className="text-[10px] text-muted-foreground">Add Figma, Docs, or other reference links</p>
                                </div>
                            </div>

                            {/* Additional Settings Section */}
                            <div className="space-y-4 pt-4 border-t border-border">
                                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                    <Settings2 className="w-4 h-4" />
                                    Additional Settings
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="estimatedHours" className="text-sm">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                Estimated Hours
                                            </span>
                                        </Label>
                                        <Input
                                            id="estimatedHours"
                                            name="estimatedHours"
                                            type="number"
                                            min="0"
                                            step="0.5"
                                            placeholder="4"
                                            className="bg-secondary/50 border-border"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="tags" className="text-sm">Tags</Label>
                                        <Input
                                            id="tags"
                                            name="tags"
                                            placeholder="e.g., frontend, urgent, bug"
                                            className="bg-secondary/50 border-border"
                                        />
                                        <p className="text-[10px] text-muted-foreground">Separate with commas</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <DialogFooter className="pt-4 border-t border-border gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setIsAddTaskOpen(false)}
                                    className="gap-2"
                                >
                                    Cancel
                                </Button>
                                <Button type="submit" className="gap-2 min-w-[140px]">
                                    <Plus className="w-4 h-4" />
                                    Create Task
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </DashboardLayout>
    )
}

