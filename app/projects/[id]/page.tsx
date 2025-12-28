"use client"

import type React from "react"
import { useState, use } from "react"
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
import { sampleInvoices, samplePayments } from "@/lib/data/invoices"
import type { Invoice, Payment } from "@/lib/types/finance"
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
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import Link from "next/link"

// Types
interface Task {
    id: string
    title: string
    status: "todo" | "in-progress" | "review" | "done"
    priority: "low" | "medium" | "high"
    assignee: string
    dueDate: string
    description?: string
}

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
    tasks: Task[]
    team: TeamMember[]
    files: ProjectFile[]
    discussions: Discussion[]
}

// Sample project data
const sampleProject: Project = {
    id: "1",
    name: "E-commerce Redesign",
    description: "Complete website redesign with new branding, improved UX/UI, and modern technology stack. The project includes full responsive design, payment integration, and inventory management system.",
    client: "TechMart Solutions",
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
    tasks: [
        { id: "1", title: "Design System Setup", status: "done", priority: "high", assignee: "SM", dueDate: "2024-10-20" },
        { id: "2", title: "Homepage Wireframes", status: "done", priority: "high", assignee: "SM", dueDate: "2024-10-25" },
        { id: "3", title: "Product Page Design", status: "done", priority: "medium", assignee: "SM", dueDate: "2024-11-01" },
        { id: "4", title: "Cart & Checkout Flow", status: "done", priority: "high", assignee: "EC", dueDate: "2024-11-05" },
        { id: "5", title: "Frontend Development", status: "in-progress", priority: "high", assignee: "JD", dueDate: "2024-11-20" },
        { id: "6", title: "Backend API Integration", status: "in-progress", priority: "high", assignee: "JD", dueDate: "2024-11-25" },
        { id: "7", title: "Payment Gateway Setup", status: "todo", priority: "high", assignee: "JD", dueDate: "2024-12-01" },
        { id: "8", title: "User Testing", status: "todo", priority: "medium", assignee: "EC", dueDate: "2024-12-10" },
        { id: "9", title: "Performance Optimization", status: "todo", priority: "medium", assignee: "JD", dueDate: "2024-12-15" },
        { id: "10", title: "Launch Preparation", status: "todo", priority: "high", assignee: "JS", dueDate: "2024-12-25" },
    ],
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
}

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
    const [project, setProject] = useState<Project>(sampleProject)
    const [activeTab, setActiveTab] = useState("overview")
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
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

    const StatusIcon = statusConfig[project.status].icon

    const completedTasks = project.tasks.filter(t => t.status === "done").length
    const taskCompletionRate = Math.round((completedTasks / project.tasks.length) * 100)
    const budgetUsedPercent = Math.round((project.spent / project.budget) * 100)

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Handle sending message
            setNewMessage("")
        }
    }

    const handleEditProject = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        setProject(prev => ({
            ...prev,
            name: formData.get("name") as string || prev.name,
            description: formData.get("description") as string || prev.description,
            client: formData.get("client") as string || prev.client,
            projectManager: formData.get("projectManager") as string || prev.projectManager,
            status: formData.get("status") as Project["status"] || prev.status,
            budget: Number(formData.get("budget")) || prev.budget,
            spent: Number(formData.get("spent")) || prev.spent,
            startDate: formData.get("startDate") as string || prev.startDate,
            deadline: formData.get("deadline") as string || prev.deadline,
            progress: Number(formData.get("progress")) || prev.progress,
            briefLink: formData.get("briefLink") as string || prev.briefLink,
            driveLink: formData.get("driveLink") as string || prev.driveLink,
            researchLink: formData.get("researchLink") as string || prev.researchLink,
        }))

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

    const taskStatuses: Array<"todo" | "in-progress" | "review" | "done"> = ["todo", "in-progress", "review", "done"]

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
                                <span className="text-muted-foreground text-sm">•</span>
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
                                        {completedTasks} of {project.tasks.length} tasks completed
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
                                    const statusTasks = project.tasks.filter(t => t.status === status)
                                    return (
                                        <AnimatedCard key={status} hover={false} className="min-w-[250px]">
                                            <CardHeader className="pb-3">
                                                <CardTitle className="text-sm font-medium flex items-center justify-between">
                                                    <Badge className={`${taskStatusConfig[status].color} border-0`}>
                                                        {taskStatusConfig[status].label}
                                                    </Badge>
                                                    <span className="text-muted-foreground">{statusTasks.length}</span>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-2 max-h-[400px] overflow-y-auto">
                                                {statusTasks.map((task) => (
                                                    <div key={task.id} className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <p className="font-medium text-sm">{task.title}</p>
                                                            <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <div className="flex items-center justify-between mt-2">
                                                            <Badge className={`${priorityConfig[task.priority].color} border-0 text-xs`}>
                                                                {task.priority}
                                                            </Badge>
                                                            <div className="flex items-center gap-2">
                                                                <Avatar className="w-5 h-5">
                                                                    <AvatarFallback className="text-[8px] bg-primary/20 text-primary">{task.assignee}</AvatarFallback>
                                                                </Avatar>
                                                                <span className="text-xs text-muted-foreground">{new Date(task.dueDate).toLocaleDateString()}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
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
                                                <tr className="border-b border-border">
                                                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Task</th>
                                                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
                                                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Priority</th>
                                                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Assignee</th>
                                                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Due Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {project.tasks.map((task) => (
                                                    <tr key={task.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer">
                                                        <td className="py-3 px-4 font-medium text-sm">{task.title}</td>
                                                        <td className="py-3 px-4">
                                                            <Badge className={`${taskStatusConfig[task.status].color} border-0`}>
                                                                {taskStatusConfig[task.status].label}
                                                            </Badge>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <Badge className={`${priorityConfig[task.priority].color} border-0`}>
                                                                {task.priority}
                                                            </Badge>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <Avatar className="w-6 h-6">
                                                                <AvatarFallback className="text-xs bg-primary/20 text-primary">{task.assignee}</AvatarFallback>
                                                            </Avatar>
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">{new Date(task.dueDate).toLocaleDateString()}</td>
                                                    </tr>
                                                ))}
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
                            <div>
                                <h3 className="font-semibold text-lg">Invoices & Payments</h3>
                                <p className="text-sm text-muted-foreground">Manage billing for this project</p>
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
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <AnimatedCard className="p-4">
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                    <DollarSign className="w-4 h-4" />
                                    Total Billed
                                </div>
                                <p className="text-2xl font-bold text-primary">${totalBilled.toLocaleString()}</p>
                            </AnimatedCard>
                            <AnimatedCard className="p-4" delay={50}>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                    <CheckCircle className="w-4 h-4" />
                                    Paid
                                </div>
                                <p className="text-2xl font-bold text-green-500">${totalPaid.toLocaleString()}</p>
                            </AnimatedCard>
                            <AnimatedCard className="p-4" delay={100}>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                    <Clock className="w-4 h-4" />
                                    Outstanding
                                </div>
                                <p className="text-2xl font-bold text-yellow-500">${totalOutstanding.toLocaleString()}</p>
                            </AnimatedCard>
                        </div>

                        {/* Invoices Table */}
                        <AnimatedCard delay={150}>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Invoice #</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Date</th>
                                                <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Amount</th>
                                                <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Paid</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Due Date</th>
                                                <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoices.map((invoice) => {
                                                const statusColors: Record<string, string> = {
                                                    draft: "bg-muted text-muted-foreground",
                                                    sent: "bg-blue-500/20 text-blue-400",
                                                    partial: "bg-yellow-500/20 text-yellow-400",
                                                    paid: "bg-green-500/20 text-green-400",
                                                    overdue: "bg-red-500/20 text-red-400",
                                                    cancelled: "bg-gray-500/20 text-gray-400",
                                                }
                                                return (
                                                    <tr key={invoice.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                                                        <td className="py-3 px-4 font-mono text-sm">{invoice.invoiceNumber}</td>
                                                        <td className="py-3 px-4 text-sm">{new Date(invoice.issueDate).toLocaleDateString()}</td>
                                                        <td className="py-3 px-4 text-sm font-medium text-right">${invoice.totalAmount.toLocaleString()}</td>
                                                        <td className="py-3 px-4 text-sm text-green-500 text-right">${invoice.amountPaid.toLocaleString()}</td>
                                                        <td className="py-3 px-4">
                                                            <Badge className={`${statusColors[invoice.status]} border-0 capitalize`}>
                                                                {invoice.status}
                                                            </Badge>
                                                        </td>
                                                        <td className="py-3 px-4 text-sm text-muted-foreground">{new Date(invoice.dueDate).toLocaleDateString()}</td>
                                                        <td className="py-3 px-4 text-right">
                                                            <div className="flex items-center justify-end gap-1">
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className="gap-1"
                                                                    onClick={() => handleViewInvoice(invoice)}
                                                                >
                                                                    <Eye className="w-3.5 h-3.5" />
                                                                    View
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
                                                    <td colSpan={7} className="py-8 text-center text-muted-foreground">
                                                        No invoices yet. Click "Generate Invoice" to create one.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </AnimatedCard>

                        {/* Payment History */}
                        <div>
                            <h4 className="font-medium mb-3">Recent Payments</h4>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">$10,000.00 received</p>
                                            <p className="text-xs text-muted-foreground">INV-2024-001 • Bank Transfer</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-muted-foreground">Dec 10, 2024</span>
                                </div>
                            </div>
                        </div>
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
                                    <Label htmlFor="budget">Budget ($)</Label>
                                    <Input id="budget" name="budget" type="number" defaultValue={project.budget} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="spent">Spent ($)</Label>
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
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label>Invoice</Label>
                                <Select defaultValue="inv-001">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select invoice" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="inv-001">INV-2024-001 - $19,425.00 (Partial)</SelectItem>
                                        <SelectItem value="inv-004">INV-2024-004 - $5,512.50 (Sent)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Amount ($)</Label>
                                    <Input type="number" placeholder="0.00" defaultValue="9425" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Payment Date</Label>
                                    <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Payment Method</Label>
                                <Select defaultValue="bank_transfer">
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="bank_transfer">🏦 Bank Transfer</SelectItem>
                                        <SelectItem value="credit_card">💳 Credit Card</SelectItem>
                                        <SelectItem value="cash">💵 Cash</SelectItem>
                                        <SelectItem value="check">📝 Check</SelectItem>
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
                                <Button type="submit" className="gap-2">
                                    <CheckCircle className="w-4 h-4" />
                                    Record Payment
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Generate Invoice Dialog */}
                <Dialog open={isGenerateInvoiceOpen} onOpenChange={setIsGenerateInvoiceOpen}>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <Receipt className="w-5 h-5 text-primary" />
                                Generate Invoice
                            </DialogTitle>
                            <DialogDescription>Create a new invoice for {project.name}</DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Invoice Number</Label>
                                    <Input value="INV-2024-005" readOnly className="bg-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Issue Date</Label>
                                    <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Client</Label>
                                    <Input value={project.client} readOnly className="bg-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Due Date</Label>
                                    <Input type="date" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Line Items</Label>
                                <div className="border border-border rounded-lg overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-secondary">
                                            <tr>
                                                <th className="text-left py-2 px-3 font-medium">Description</th>
                                                <th className="text-center py-2 px-3 font-medium w-16">Qty</th>
                                                <th className="text-right py-2 px-3 font-medium w-24">Rate</th>
                                                <th className="text-right py-2 px-3 font-medium w-24">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t border-border">
                                                <td className="py-2 px-3">
                                                    <Input placeholder="Service description" className="h-8" defaultValue="Project Development" />
                                                </td>
                                                <td className="py-2 px-3">
                                                    <Input type="number" className="h-8 text-center" defaultValue="1" />
                                                </td>
                                                <td className="py-2 px-3">
                                                    <Input type="number" className="h-8 text-right" defaultValue="5000" />
                                                </td>
                                                <td className="py-2 px-3 text-right font-medium">$5,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Button type="button" variant="outline" size="sm" className="gap-1">
                                    <Plus className="w-3 h-3" /> Add Line Item
                                </Button>
                            </div>

                            <div className="flex justify-end">
                                <div className="w-48 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span>$5,000.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Tax (5%)</span>
                                        <span>$250.00</span>
                                    </div>
                                    <div className="flex justify-between font-semibold border-t pt-2">
                                        <span>Total</span>
                                        <span>$5,250.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Notes (Optional)</Label>
                                <Textarea placeholder="Add any notes for the client..." rows={2} />
                            </div>

                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsGenerateInvoiceOpen(false)}>Cancel</Button>
                                <Button type="submit" className="gap-2">
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
            </div>
        </DashboardLayout>
    )
}
