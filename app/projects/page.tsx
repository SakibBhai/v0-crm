"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { generateId, generateBulkIds } from "@/lib/id-generator"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { DatePicker } from "@/components/ui/date-picker"
import {
  Search,
  Plus,
  MoreHorizontal,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Pause,
  FolderKanban,
  ArrowRight,
  Target,
  LayoutGrid,
  List,
  BarChart3,
  Filter,
  User,
  Repeat,
  CreditCard,
  Trash2,
  Download,
  Upload,
  X,
  Edit,
} from "lucide-react"
import Link from "next/link"

import type { Project } from "@/lib/types/project"
import { statusConfig, priorityConfig } from "@/lib/data/projects"
import { getProjects, createProject, updateProject, deleteProject } from "@/app/actions/projects"

export default function ProjectsPage() {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [clientFilter, setClientFilter] = useState<string>("all")
  const [managerFilter, setManagerFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "list" | "kanban">("grid")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  // Drag and drop state
  const [draggedProject, setDraggedProject] = useState<Project | null>(null)
  const [dragOverStatus, setDragOverStatus] = useState<string | null>(null)

  // Load projects on mount
  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects()
        // Map DB fields to match frontend Project interface
        setProjects(data.map((p: any) => ({
          ...p,
          tasks: { total: p.tasksTotal || 0, completed: p.tasksCompleted || 0 },
        })))
      } catch (error) {
        console.error("Failed to load projects:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadProjects()
  }, [])

  const uniqueClients = [...new Set(projects.map((p) => p.client))]
  const uniqueManagers = [...new Set(projects.map((p) => p.projectManager))]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.projectManager.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    const matchesClient = clientFilter === "all" || project.client === clientFilter
    const matchesManager = managerFilter === "all" || project.projectManager === managerFilter
    return matchesSearch && matchesStatus && matchesClient && matchesManager
  })

  const stats = {
    total: projects.length,
    inProgress: projects.filter((p) => p.status === "in-progress").length,
    completed: projects.filter((p) => p.status === "completed").length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    totalSpent: projects.reduce((sum, p) => sum + p.spent, 0),
  }

  const handleAddProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const billingType = formData.get("billingType") as "one-time" | "recurring"
    const recurringInterval = formData.get("recurringInterval") as "7-days" | "15-days" | "30-days" | "monthly" | undefined

    let nextBillingDate: string | undefined
    if (billingType === "recurring" && recurringInterval) {
      const startDate = new Date(formData.get("startDate") as string)
      const days = recurringInterval === "7-days" ? 7 : recurringInterval === "15-days" ? 15 : 30
      const nextDate = new Date(startDate.getTime() + days * 24 * 60 * 60 * 1000)
      nextBillingDate = nextDate.toISOString().split("T")[0]
    }

    try {
      await createProject({
        name: formData.get("name") as string,
        description: formData.get("description") as string || "",
        client: formData.get("client") as string,
        projectManager: formData.get("projectManager") as string,
        status: "planning",
        priority: formData.get("priority") as "low" | "medium" | "high",
        progress: 0,
        budget: Number(formData.get("budget")),
        spent: 0,
        startDate: formData.get("startDate") as string,
        dueDate: formData.get("dueDate") as string,
        team: [],
        tasksTotal: 0,
        tasksCompleted: 0,
        category: formData.get("category") as string,
        briefLink: formData.get("briefLink") as string || undefined,
        driveLink: formData.get("driveLink") as string || undefined,
        researchLink: formData.get("researchLink") as string || undefined,
        billingType,
        recurringInterval: billingType === "recurring" ? recurringInterval : undefined,
        nextBillingDate,
        totalBilled: 0,
        paymentStatus: "pending",
      })
      const freshProjects = await getProjects()
      setProjects(freshProjects.map((p: any) => ({
        ...p,
        tasks: { total: p.tasksTotal || 0, completed: p.tasksCompleted || 0 },
      })))
      setIsAddDialogOpen(false)
    } catch (err) {
      console.error("Failed to create project:", err)
    }
  }

  // Drag handlers for Kanban
  const handleDragStart = (e: React.DragEvent, project: Project) => {
    setDraggedProject(project)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent, status: string) => {
    e.preventDefault()
    setDragOverStatus(status)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    const relatedTarget = e.relatedTarget as Node | null
    if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
      setDragOverStatus(null)
    }
  }

  const handleDrop = async (e: React.DragEvent, newStatus: string) => {
    e.preventDefault()
    if (draggedProject && draggedProject.status !== newStatus) {
      setProjects((prev) => prev.map((p) => (p.id === draggedProject.id ? { ...p, status: newStatus as Project["status"] } : p)))
      try {
        await updateProject(draggedProject.id, { status: newStatus })
      } catch (err) {
        console.error("Failed to update project status:", err)
        const data = await getProjects()
        setProjects(data.map((p: any) => ({ ...p, tasks: { total: p.tasksTotal || 0, completed: p.tasksCompleted || 0 } })))
      }
    }
    setDraggedProject(null)
    setDragOverStatus(null)
  }

  const handleDeleteProject = async (projectId: string) => {
    if (!window.confirm("Are you sure you want to delete this project? This action cannot be undone.")) return
    setProjects((prev) => prev.filter((p) => p.id !== projectId))
    if (selectedProject?.id === projectId) {
      setSelectedProject(null)
    }
    try {
      await deleteProject(projectId)
    } catch (err) {
      console.error("Failed to delete project:", err)
      const data = await getProjects()
      setProjects(data.map((p: any) => ({ ...p, tasks: { total: p.tasksTotal || 0, completed: p.tasksCompleted || 0 } })))
    }
  }

  const handleExportProjects = () => {
    const headers = ["Name", "Client", "Category", "Status", "Priority", "Progress", "Budget", "Spent", "Start Date", "Due Date", "Billing Type", "Project Manager", "Payment Status"]
    const rows = filteredProjects.map(p => [
      p.name, p.client, p.category, p.status, p.priority, p.progress, p.budget, p.spent,
      p.startDate, p.dueDate, p.billingType, p.projectManager, p.paymentStatus,
    ])
    const csv = [headers.join(","), ...rows.map(r => r.map(v => `"${v}"`).join(","))].join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `projects_export_${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImportProjects = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".csv"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = async (ev) => {
        const text = ev.target?.result as string
        const lines = text.split("\n").filter(l => l.trim())
        if (lines.length < 2) return

        try {
          for (const line of lines.slice(1)) {
            const cols = line.split(",").map(c => c.replace(/^"|"$/g, "").trim())
            await createProject({
              name: cols[0] || "Untitled",
              client: cols[1] || "",
              category: cols[2] || "Web Design",
              status: (cols[3] as Project["status"]) || "planning",
              priority: (cols[4] as Project["priority"]) || "medium",
              progress: Number(cols[5]) || 0,
              budget: Number(cols[6]) || 0,
              spent: Number(cols[7]) || 0,
              startDate: cols[8] || new Date().toISOString().split("T")[0],
              dueDate: cols[9] || "",
              billingType: (cols[10] as "one-time" | "recurring") || "one-time",
              projectManager: cols[11] || "John Smith",
              paymentStatus: (cols[12] as Project["paymentStatus"]) || "pending",
              description: "",
              team: [],
              tasksTotal: 0,
              tasksCompleted: 0,
              totalBilled: 0,
            })
          }
          const freshProjects = await getProjects()
          setProjects(freshProjects.map((p: any) => ({
            ...p,
            tasks: { total: p.tasksTotal || 0, completed: p.tasksCompleted || 0 },
          })))
        } catch (err) {
          console.error("Failed to import projects:", err)
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  const openEditDialog = (project: Project) => {
    setEditingProject(project)
    setIsEditDialogOpen(true)
  }

  const handleEditProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingProject) return
    const formData = new FormData(e.currentTarget)

    try {
      const updateData = {
        name: formData.get("name") as string || editingProject.name,
        description: formData.get("description") as string || editingProject.description,
        client: formData.get("client") as string || editingProject.client,
        category: formData.get("category") as string || editingProject.category,
        projectManager: formData.get("projectManager") as string || editingProject.projectManager,
        priority: formData.get("priority") as Project["priority"] || editingProject.priority,
        status: formData.get("status") as Project["status"] || editingProject.status,
        budget: Number(formData.get("budget")) || editingProject.budget,
        billingType: formData.get("billingType") as "one-time" | "recurring" || editingProject.billingType,
        recurringInterval: formData.get("recurringInterval") as Project["recurringInterval"] || editingProject.recurringInterval,
        briefLink: formData.get("briefLink") as string || editingProject.briefLink,
        driveLink: formData.get("driveLink") as string || editingProject.driveLink,
        researchLink: formData.get("researchLink") as string || editingProject.researchLink,
      }
      const updated = await updateProject(editingProject.id, updateData)
      setProjects((prev) => prev.map((p) => (p.id === editingProject.id ? { ...updated, tasks: { total: updated.tasksTotal || 0, completed: updated.tasksCompleted || 0 } } : p)))
      setIsEditDialogOpen(false)
      setEditingProject(null)
    } catch (err) {
      console.error("Failed to update project:", err)
    }
  }

  const kanbanStatuses = ["planning", "in-progress", "review", "completed", "on-hold"] as const

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-1">Track and manage all your client projects</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={handleExportProjects}>
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={handleImportProjects}>
              <Upload className="w-4 h-4" />
              Import
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  New Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="pb-4 border-b border-border">
                  <DialogTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <FolderKanban className="w-5 h-5 text-primary" />
                    </div>
                    Create New Project
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Set up a new client project with all the essential details
                  </p>
                </DialogHeader>

                <form onSubmit={handleAddProject} className="space-y-6 pt-4">
                  {/* Project Details Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Target className="w-4 h-4" />
                      Project Details
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">
                        Project Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="e.g., E-commerce Website Redesign"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-sm">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Describe the project scope, goals, and deliverables..."
                        rows={3}
                        className="bg-secondary/50 border-border resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="client" className="text-sm">
                          Client <span className="text-destructive">*</span>
                        </Label>
                        <Select name="client" defaultValue="TechMart Solutions">
                          <SelectTrigger className="bg-secondary/50 border-border">
                            <SelectValue placeholder="Select client" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TechMart Solutions">TechMart Solutions</SelectItem>
                            <SelectItem value="GreenLife Organics">GreenLife Organics</SelectItem>
                            <SelectItem value="FoodieHub">FoodieHub</SelectItem>
                            <SelectItem value="LuxStay Hotels">LuxStay Hotels</SelectItem>
                            <SelectItem value="StartupX">StartupX</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-sm">
                          Category <span className="text-destructive">*</span>
                        </Label>
                        <Select name="category" defaultValue="Web Design">
                          <SelectTrigger className="bg-secondary/50 border-border">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Web Design">ðŸŽ¨ Web Design</SelectItem>
                            <SelectItem value="SEO">ðŸ“ˆ SEO</SelectItem>
                            <SelectItem value="Social Media">ðŸ“± Social Media</SelectItem>
                            <SelectItem value="PPC">ðŸ’° PPC</SelectItem>
                            <SelectItem value="Branding">âœ¨ Branding</SelectItem>
                            <SelectItem value="Email Marketing">ðŸ“§ Email Marketing</SelectItem>
                            <SelectItem value="Content">ðŸ“ Content</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Team & Budget Section */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <User className="w-4 h-4" />
                      Team & Budget
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="projectManager" className="text-sm">Project Manager</Label>
                        <Select name="projectManager" defaultValue="John Smith">
                          <SelectTrigger className="bg-secondary/50 border-border">
                            <SelectValue placeholder="Select manager" />
                          </SelectTrigger>
                          <SelectContent>
                            {uniqueManagers.map((manager) => (
                              <SelectItem key={manager} value={manager}>
                                <span className="flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-medium">
                                    {manager.split(" ").map(n => n[0]).join("")}
                                  </span>
                                  {manager}
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
                            <SelectItem value="low">
                              <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                Low
                              </span>
                            </SelectItem>
                            <SelectItem value="medium">
                              <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                                Medium
                              </span>
                            </SelectItem>
                            <SelectItem value="high">
                              <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                                High
                              </span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm">
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          Project Budget <span className="text-destructive">*</span>
                        </span>
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="budget"
                          name="budget"
                          type="number"
                          placeholder="25000"
                          required
                          className="pl-9 bg-secondary/50 border-border"
                        />
                      </div>
                      <p className="text-[10px] text-muted-foreground">Enter the total project budget in USD</p>
                    </div>
                  </div>

                  {/* Billing Type Section */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <CreditCard className="w-4 h-4" />
                      Billing Type
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="billingType" className="text-sm">
                          Payment Model <span className="text-destructive">*</span>
                        </Label>
                        <Select name="billingType" defaultValue="one-time">
                          <SelectTrigger className="bg-secondary/50 border-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="one-time">
                              <span className="flex items-center gap-2">
                                <DollarSign className="w-3.5 h-3.5 text-green-500" />
                                One-time Payment
                              </span>
                            </SelectItem>
                            <SelectItem value="recurring">
                              <span className="flex items-center gap-2">
                                <Repeat className="w-3.5 h-3.5 text-blue-500" />
                                Recurring
                              </span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="recurringInterval" className="text-sm">
                          Billing Interval
                        </Label>
                        <Select name="recurringInterval" defaultValue="30-days">
                          <SelectTrigger className="bg-secondary/50 border-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="7-days">
                              <span className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5" />
                                Every 7 Days (Weekly)
                              </span>
                            </SelectItem>
                            <SelectItem value="15-days">
                              <span className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5" />
                                Every 15 Days (Bi-weekly)
                              </span>
                            </SelectItem>
                            <SelectItem value="30-days">
                              <span className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5" />
                                Every 30 Days (Monthly)
                              </span>
                            </SelectItem>
                            <SelectItem value="monthly">
                              <span className="flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5" />
                                Monthly (Calendar)
                              </span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-[10px] text-muted-foreground">Only applicable for recurring projects</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Section */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Calendar className="w-4 h-4" />
                      Timeline
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate" className="text-sm">
                          Start Date <span className="text-destructive">*</span>
                        </Label>
                        <DatePicker
                          name="startDate"
                          placeholder="Select start date"
                          date={new Date()}
                          required
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

                  {/* Resources Section */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <ArrowRight className="w-4 h-4" />
                      Key Resources
                      <Badge variant="secondary" className="text-[10px] ml-auto">Optional</Badge>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="briefLink" className="text-sm">Project Brief URL</Label>
                        <Input
                          id="briefLink"
                          name="briefLink"
                          type="url"
                          placeholder="https://docs.google.com/document/d/..."
                          className="bg-secondary/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="driveLink" className="text-sm">Google Drive Folder</Label>
                        <Input
                          id="driveLink"
                          name="driveLink"
                          type="url"
                          placeholder="https://drive.google.com/drive/folders/..."
                          className="bg-secondary/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="researchLink" className="text-sm">Research Documents</Label>
                        <Input
                          id="researchLink"
                          name="researchLink"
                          type="url"
                          placeholder="https://notion.so/..."
                          className="bg-secondary/50 border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <DialogFooter className="pt-4 border-t border-border gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsAddDialogOpen(false)}
                      className="gap-2"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="gap-2 min-w-[140px]">
                      <Plus className="w-4 h-4" />
                      Create Project
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Total Projects", value: stats.total, icon: FolderKanban, color: "text-foreground" },
            { label: "In Progress", value: stats.inProgress, icon: Clock, color: "text-primary" },
            { label: "Completed", value: stats.completed, icon: CheckCircle, color: "text-success" },
            {
              label: "Total Budget",
              value: `$${(stats.totalBudget / 1000).toFixed(0)}K`,
              icon: DollarSign,
              color: "text-chart-4",
            },
            {
              label: "Total Spent",
              value: `$${(stats.totalSpent / 1000).toFixed(0)}K`,
              icon: BarChart3,
              color: "text-warning",
            },
          ].map((stat, i) => (
            <AnimatedCard key={stat.label} delay={i * 50} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className={`text-xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color} opacity-20`} />
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Filters */}
        <AnimatedCard delay={250} className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects, clients, or managers..."
                  className="pl-10 bg-secondary border-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex bg-secondary rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("kanban")}
                  className={`p-2 rounded ${viewMode === "kanban" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <FolderKanban className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span>Filters:</span>
              </div>

              <Select value={clientFilter} onValueChange={setClientFilter}>
                <SelectTrigger className="w-[160px] h-9 bg-secondary border-0 text-sm">
                  <SelectValue placeholder="All Clients" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Clients</SelectItem>
                  {uniqueClients.map(client => (
                    <SelectItem key={client} value={client}>{client}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={managerFilter} onValueChange={setManagerFilter}>
                <SelectTrigger className="w-[160px] h-9 bg-secondary border-0 text-sm">
                  <User className="w-3.5 h-3.5 mr-1" />
                  <SelectValue placeholder="All Managers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Managers</SelectItem>
                  {uniqueManagers.map(manager => (
                    <SelectItem key={manager} value={manager}>{manager}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px] h-9 bg-secondary border-0 text-sm">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on-hold">On Hold</SelectItem>
                </SelectContent>
              </Select>

              {(clientFilter !== "all" || managerFilter !== "all" || statusFilter !== "all") && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    setClientFilter("all")
                    setManagerFilter("all")
                    setStatusFilter("all")
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </AnimatedCard>

        {/* Projects View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, i) => {
              const StatusIcon = statusConfig[project.status].icon
              return (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <AnimatedCard
                    delay={300 + i * 50}
                    className="cursor-pointer h-full card-hover"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs font-normal">
                              {project.category}
                            </Badge>
                            <Badge className={`${priorityConfig[project.priority].color} border-0 text-xs`}>
                              {priorityConfig[project.priority].label}
                            </Badge>
                            <Badge
                              className={`text-xs border-0 ${project.billingType === "recurring"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-green-500/20 text-green-400"
                                }`}
                            >
                              {project.billingType === "recurring" ? (
                                <>
                                  <Repeat className="w-3 h-3 mr-1" />
                                  {project.recurringInterval?.replace("-", " ")}
                                </>
                              ) : (
                                <>
                                  <DollarSign className="w-3 h-3 mr-1" />
                                  One-time
                                </>
                              )}
                            </Badge>
                          </div>
                          <h3 className="font-semibold mt-2">{project.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{project.client}</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                            <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                              <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={(e) => { e.preventDefault(); router.push(`/projects/${project.id}`); }}>View Details</DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => { e.preventDefault(); e.stopPropagation(); openEditDialog(project); }}>Edit Project</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-400" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDeleteProject(project.id); }}>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <Badge className={`${statusConfig[project.status].color} border-0`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {statusConfig[project.status].label}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {new Date(project.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {project.team.slice(0, 3).map((member, idx) => (
                            <Avatar key={idx} className="w-7 h-7 border-2 border-card">
                              <AvatarFallback className="bg-primary/20 text-primary text-xs">{member}</AvatarFallback>
                            </Avatar>
                          ))}
                          {project.team.length > 3 && (
                            <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs border-2 border-card">
                              +{project.team.length - 3}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>
                            <CheckCircle className="w-3.5 h-3.5 inline mr-1" />
                            {project.tasks.completed}/{project.tasks.total}
                          </span>
                          <span className="text-primary font-medium">
                            ${(project.spent / 1000).toFixed(1)}K / ${(project.budget / 1000).toFixed(0)}K
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </AnimatedCard>
                </Link>
              )
            })}
          </div>
        )}

        {viewMode === "list" && (
          <AnimatedCard delay={300}>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Project</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Client</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Progress</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Budget</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Due Date</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.map((project, i) => {
                      const StatusIcon = statusConfig[project.status].icon
                      return (
                        <tr
                          key={project.id}
                          className="border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-300"
                          style={{ animationDelay: `${i * 50}ms` }}
                          onClick={() => router.push(`/projects/${project.id}`)}
                        >
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium text-sm">{project.name}</p>
                              <Badge variant="outline" className="text-xs font-normal mt-1">
                                {project.category}
                              </Badge>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">{project.client}</td>
                          <td className="py-3 px-4">
                            <Badge className={`${statusConfig[project.status].color} border-0`}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {statusConfig[project.status].label}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 w-32">
                            <div className="flex items-center gap-2">
                              <Progress value={project.progress} className="h-1.5 flex-1" />
                              <span className="text-xs font-medium w-8">{project.progress}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm">
                              <span className="text-primary font-medium">${(project.spent / 1000).toFixed(1)}K</span>
                              <span className="text-muted-foreground"> / ${(project.budget / 1000).toFixed(0)}K</span>
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm">{new Date(project.dueDate).toLocaleDateString()}</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex -space-x-2">
                              {project.team.slice(0, 3).map((member, idx) => (
                                <Avatar key={idx} className="w-6 h-6 border-2 border-card">
                                  <AvatarFallback className="bg-primary/20 text-primary text-[10px]">
                                    {member}
                                  </AvatarFallback>
                                </Avatar>
                              ))}
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

        {viewMode === "kanban" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
            {kanbanStatuses.map((status, colIndex) => {
              const statusProjects = filteredProjects.filter((p) => p.status === status)
              const StatusIcon = statusConfig[status].icon
              return (
                <div
                  key={status}
                  className={`rounded-xl transition-all duration-200 ${dragOverStatus === status ? "ring-2 ring-primary/50 bg-primary/5" : ""}`}
                  onDragOver={(e) => handleDragOver(e, status)}
                  onDragLeave={(e) => handleDragLeave(e)}
                  onDrop={(e) => handleDrop(e, status)}
                >
                  <AnimatedCard delay={300 + colIndex * 100} hover={false} className="min-w-[250px]">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig[status].label}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {statusProjects.length}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 max-h-[500px] overflow-y-auto">
                      {statusProjects.map((project, i) => (
                        <div
                          key={project.id}
                          className={`p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-grab active:cursor-grabbing animate-in fade-in slide-in-from-bottom-2 duration-300 ${draggedProject?.id === project.id ? 'opacity-50' : ''}`}
                          style={{ animationDelay: `${i * 50}ms` }}
                          draggable
                          onDragStart={(e) => handleDragStart(e, project)}
                          onDragEnd={() => { setDraggedProject(null); setDragOverStatus(null); }}
                          onClick={() => router.push(`/projects/${project.id}`)}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <Badge variant="outline" className="text-[10px] font-normal mb-1">
                                {project.category}
                              </Badge>
                              <h4 className="font-medium text-sm truncate">{project.name}</h4>
                              <p className="text-xs text-muted-foreground truncate">{project.client}</p>
                            </div>
                            <Badge className={`${priorityConfig[project.priority].color} border-0 text-[10px] shrink-0`}>
                              {project.priority[0].toUpperCase()}
                            </Badge>
                          </div>
                          <div className="mt-3 space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">{project.progress}%</span>
                              <span className="text-muted-foreground">
                                {project.tasks.completed}/{project.tasks.total} tasks
                              </span>
                            </div>
                            <Progress value={project.progress} className="h-1" />
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex -space-x-1.5">
                              {project.team.slice(0, 2).map((member, idx) => (
                                <Avatar key={idx} className="w-5 h-5 border border-card">
                                  <AvatarFallback className="bg-primary/20 text-primary text-[8px]">
                                    {member}
                                  </AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                            <span className="text-[10px] text-muted-foreground">
                              {new Date(project.dueDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </AnimatedCard>
                </div>
              )
            })}
          </div>
        )}

        {/* Project Detail Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[600px]">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {selectedProject.category}
                        </Badge>
                        <Badge className={`${statusConfig[selectedProject.status].color} border-0`}>
                          {statusConfig[selectedProject.status].label}
                        </Badge>
                      </div>
                      <DialogTitle className="text-xl">{selectedProject.name}</DialogTitle>
                      <p className="text-muted-foreground mt-1">{selectedProject.client}</p>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  <p className="text-sm text-muted-foreground">{selectedProject.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Overall Progress</span>
                      <span className="font-medium">{selectedProject.progress}%</span>
                    </div>
                    <Progress value={selectedProject.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <DollarSign className="w-3.5 h-3.5" />
                        Budget
                      </div>
                      <p className="text-lg font-bold">
                        <span className="text-primary">${selectedProject.spent.toLocaleString()}</span>
                        <span className="text-muted-foreground text-sm font-normal">
                          {" "}
                          / ${selectedProject.budget.toLocaleString()}
                        </span>
                      </p>
                      <Progress value={(selectedProject.spent / selectedProject.budget) * 100} className="h-1 mt-2" />
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Tasks
                      </div>
                      <p className="text-lg font-bold">
                        <span className="text-success">{selectedProject.tasks.completed}</span>
                        <span className="text-muted-foreground text-sm font-normal">
                          {" "}
                          / {selectedProject.tasks.total}
                        </span>
                      </p>
                      <Progress
                        value={(selectedProject.tasks.completed / selectedProject.tasks.total) * 100}
                        className="h-1 mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Start Date</p>
                      <p className="font-medium">{new Date(selectedProject.startDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Due Date</p>
                      <p className="font-medium">{new Date(selectedProject.dueDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Team Members</p>
                    <div className="flex gap-2">
                      {selectedProject.team.map((member, idx) => (
                        <Avatar key={idx} className="w-8 h-8">
                          <AvatarFallback className="bg-primary/20 text-primary text-xs">{member}</AvatarFallback>
                        </Avatar>
                      ))}
                      <button className="w-8 h-8 rounded-full border-2 border-dashed border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <DialogFooter className="mt-4">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    View Tasks
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
        {/* Edit Project Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={(open) => { if (!open) { setIsEditDialogOpen(false); setEditingProject(null); } }}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="pb-4 border-b border-border">
              <DialogTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Edit className="w-5 h-5 text-primary" />
                </div>
                Edit Project
              </DialogTitle>
            </DialogHeader>
            {editingProject && (
              <form onSubmit={handleEditProject} className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-name" className="text-sm">Project Name</Label>
                    <Input id="edit-name" name="name" defaultValue={editingProject.name} className="bg-secondary/50 border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-client" className="text-sm">Client</Label>
                    <Select name="client" defaultValue={editingProject.client}>
                      <SelectTrigger className="bg-secondary/50 border-border"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {uniqueClients.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-description" className="text-sm">Description</Label>
                  <Textarea id="edit-description" name="description" defaultValue={editingProject.description} className="bg-secondary/50 border-border resize-none" rows={2} />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm">Category</Label>
                    <Select name="category" defaultValue={editingProject.category}>
                      <SelectTrigger className="bg-secondary/50 border-border"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Web Design">🎨 Web Design</SelectItem>
                        <SelectItem value="SEO">📈 SEO</SelectItem>
                        <SelectItem value="Social Media">📱 Social Media</SelectItem>
                        <SelectItem value="PPC">💰 PPC</SelectItem>
                        <SelectItem value="Branding">✨ Branding</SelectItem>
                        <SelectItem value="Email Marketing">📧 Email Marketing</SelectItem>
                        <SelectItem value="Content">📝 Content</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Priority</Label>
                    <Select name="priority" defaultValue={editingProject.priority}>
                      <SelectTrigger className="bg-secondary/50 border-border"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Status</Label>
                    <Select name="status" defaultValue={editingProject.status}>
                      <SelectTrigger className="bg-secondary/50 border-border"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="planning">Planning</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="review">Review</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="on-hold">On Hold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm">Budget ($)</Label>
                    <Input name="budget" type="number" defaultValue={editingProject.budget} className="bg-secondary/50 border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Billing Type</Label>
                    <Select name="billingType" defaultValue={editingProject.billingType}>
                      <SelectTrigger className="bg-secondary/50 border-border"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">One-time</SelectItem>
                        <SelectItem value="recurring">Recurring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Interval</Label>
                    <Select name="recurringInterval" defaultValue={editingProject.recurringInterval || "30-days"}>
                      <SelectTrigger className="bg-secondary/50 border-border"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7-days">7 Days</SelectItem>
                        <SelectItem value="15-days">15 Days</SelectItem>
                        <SelectItem value="30-days">30 Days</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm">Project Brief URL</Label>
                    <Input name="briefLink" type="url" defaultValue={editingProject.briefLink || ""} placeholder="https://..." className="bg-secondary/50 border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Drive Folder</Label>
                    <Input name="driveLink" type="url" defaultValue={editingProject.driveLink || ""} placeholder="https://..." className="bg-secondary/50 border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Research</Label>
                    <Input name="researchLink" type="url" defaultValue={editingProject.researchLink || ""} placeholder="https://..." className="bg-secondary/50 border-border" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm">Project Manager</Label>
                    <Select name="projectManager" defaultValue={editingProject.projectManager}>
                      <SelectTrigger className="bg-secondary/50 border-border"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {uniqueManagers.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter className="pt-4 border-t border-border gap-2">
                  <Button type="button" variant="outline" onClick={() => { setIsEditDialogOpen(false); setEditingProject(null); }}>Cancel</Button>
                  <Button type="submit" className="gap-2"><CheckCircle className="w-4 h-4" /> Save Changes</Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}
