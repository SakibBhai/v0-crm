"use client"

import { useState, useMemo } from "react"
import type { Task, TaskStatus, TaskPriority, SwimlaneType, TaskTemplate, AutomationRule } from "@/lib/types/task"
import { DEFAULT_COLUMNS, PRIORITY_CONFIG, STATUS_CONFIG } from "@/lib/types/task"
import { sampleTasks, teamMembers, projects, taskTemplates, automationRules } from "@/lib/data/tasks"
import { DashboardLayout } from "@/components/dashboard-layout"
import { KanbanBoard } from "@/components/tasks/kanban-board"
import { TaskListView } from "@/components/tasks/task-list-view"
import { TaskCalendarView } from "@/components/tasks/task-calendar-view"
import { TaskGanttView } from "@/components/tasks/task-gantt-view"
import { TaskDetailPanel } from "@/components/tasks/task-detail-panel"
import { WorkflowAutomation } from "@/components/tasks/workflow-automation"
import { TemplateLibrary } from "@/components/tasks/template-library"
import { WorkloadManager } from "@/components/tasks/workload-manager"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date-picker"
import {
  Plus,
  Search,
  Filter,
  LayoutGrid,
  List,
  Calendar,
  BarChart3,
  Clock,
  AlertCircle,
  CheckCircle2,
  Zap,
  Eye,
  TrendingUp,
  Download,
  Layers,
  Settings2,
  Users,
  FileText,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

type ViewMode = "kanban" | "list" | "calendar" | "gantt"
type TabMode = "board" | "workload" | "automation" | "templates"

const QUICK_FILTERS = [
  { id: "my-tasks", label: "My Tasks", filter: (t: Task) => t.assignees.some((a) => a.id === "1") },
  { id: "overdue", label: "Overdue", filter: (t: Task) => new Date(t.dueDate) < new Date() && t.status !== "done" },
  { id: "high-priority", label: "High Priority", filter: (t: Task) => t.priority === "high" || t.priority === "critical" },
  {
    id: "due-today", label: "Due Today", filter: (t: Task) => {
      const today = new Date().toISOString().split("T")[0]
      return t.dueDate === today
    }
  },
  {
    id: "due-this-week", label: "Due This Week", filter: (t: Task) => {
      const now = new Date()
      const dueDate = new Date(t.dueDate)
      const weekEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
      return dueDate >= now && dueDate <= weekEnd
    }
  },
]

export default function TasksPage() {
  // State
  const [tasks, setTasks] = useState<Task[]>(sampleTasks)
  const [templates, setTemplates] = useState<TaskTemplate[]>(taskTemplates)
  const [rules, setRules] = useState<AutomationRule[]>(automationRules)
  const [viewMode, setViewMode] = useState<ViewMode>("kanban")
  const [activeTab, setActiveTab] = useState<TabMode>("board")
  const [swimlane, setSwimlane] = useState<SwimlaneType>("none")
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")
  const [projectFilter, setProjectFilter] = useState<string>("all")
  const [assigneeFilter, setAssigneeFilter] = useState<string>("all")
  const [quickFilters, setQuickFilters] = useState<string[]>([])
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isTaskPanelOpen, setIsTaskPanelOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedTasks, setSelectedTasks] = useState<string[]>([])
  const [initialStatus, setInitialStatus] = useState<TaskStatus>("todo")

  // Stats
  const stats = useMemo(() => ({
    total: tasks.length,
    backlog: tasks.filter((t) => t.status === "backlog").length,
    todo: tasks.filter((t) => t.status === "todo").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
    inReview: tasks.filter((t) => t.status === "in-review").length,
    done: tasks.filter((t) => t.status === "done").length,
    overdue: tasks.filter((t) => new Date(t.dueDate) < new Date() && t.status !== "done").length,
    completionRate: Math.round((tasks.filter((t) => t.status === "done").length / tasks.length) * 100) || 0,
  }), [tasks])

  // Filtered tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Search
      const matchesSearch = !searchQuery ||
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

      // Filters
      const matchesStatus = statusFilter === "all" || task.status === statusFilter
      const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter
      const matchesProject = projectFilter === "all" || task.projectId === projectFilter
      const matchesAssignee = assigneeFilter === "all" || task.assignees.some((a) => a.id === assigneeFilter)

      // Quick filters
      const matchesQuickFilters = quickFilters.length === 0 ||
        quickFilters.every((qf) => {
          const filter = QUICK_FILTERS.find((f) => f.id === qf)
          return filter ? filter.filter(task) : true
        })

      return matchesSearch && matchesStatus && matchesPriority && matchesProject && matchesAssignee && matchesQuickFilters
    })
  }, [tasks, searchQuery, statusFilter, priorityFilter, projectFilter, assigneeFilter, quickFilters])

  // Handlers
  const handleTaskClick = (task: Task) => {
    setSelectedTask(task)
    setIsTaskPanelOpen(true)
  }

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) => prev.map((t) => t.id === taskId ? { ...t, status: newStatus, updatedAt: new Date().toISOString() } : t))
  }

  const handlePriorityChange = (taskId: string, newPriority: TaskPriority) => {
    setTasks((prev) => prev.map((t) => t.id === taskId ? { ...t, priority: newPriority, updatedAt: new Date().toISOString() } : t))
  }

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks((prev) => prev.map((t) => t.id === updatedTask.id ? updatedTask : t))
    setSelectedTask(updatedTask)
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId))
    setIsTaskPanelOpen(false)
    setSelectedTask(null)
  }

  const handleCloneTask = (task: Task) => {
    const clonedTask: Task = {
      ...task,
      id: `TSK-${Date.now()}`,
      title: `${task.title} (Copy)`,
      status: "todo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      activityLog: [],
      comments: [],
      timeEntries: [],
      actualHours: 0,
    }
    setTasks((prev) => [clonedTask, ...prev])
  }

  const handleAddTask = (status: TaskStatus) => {
    setInitialStatus(status)
    setIsAddDialogOpen(true)
  }

  const handleCreateTask = (formData: FormData) => {
    const newTask: Task = {
      id: `TSK-${Date.now()}`,
      title: formData.get("title") as string,
      description: formData.get("description") as string || "",
      status: formData.get("status") as TaskStatus || initialStatus,
      priority: formData.get("priority") as TaskPriority || "medium",
      projectId: formData.get("project") as string || "1",
      projectName: projects.find((p) => p.id === formData.get("project"))?.name || projects[0].name,
      assignees: [teamMembers.find((m) => m.id === formData.get("assignee")) || teamMembers[0]],
      reporterId: "2",
      reporterName: "Ali Hasan",
      dueDate: formData.get("dueDate") as string || new Date().toISOString().split("T")[0],
      startDate: formData.get("startDate") as string,
      tags: (formData.get("tags") as string || "").split(",").map((t) => t.trim()).filter(Boolean),
      subtasks: [],
      comments: [],
      attachments: [],
      dependencies: [],
      timeEntries: [],
      estimatedHours: Number(formData.get("estimatedHours")) || 0,
      actualHours: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      activityLog: [{ id: "1", timestamp: new Date().toISOString(), userId: "2", userName: "Ali Hasan", action: "created task" }],
      isBlocked: false,
      isRecurring: false,
    }
    setTasks((prev) => [newTask, ...prev])
    setIsAddDialogOpen(false)
  }

  const handleSelectTask = (taskId: string, selected: boolean) => {
    setSelectedTasks((prev) => selected ? [...prev, taskId] : prev.filter((id) => id !== taskId))
  }

  const handleUseTemplate = (template: TaskTemplate) => {
    const newTask: Task = {
      id: `TSK-${Date.now()}`,
      title: template.name,
      description: template.description,
      status: "todo",
      priority: template.priority,
      projectId: "1",
      projectName: projects[0].name,
      assignees: [teamMembers[0]],
      reporterId: "2",
      reporterName: "Ali Hasan",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      tags: template.tags,
      subtasks: template.subtasks.map((s, i) => ({ id: `sub-${i}`, title: s.title, completed: false })),
      comments: [],
      attachments: [],
      dependencies: [],
      timeEntries: [],
      estimatedHours: template.estimatedHours,
      actualHours: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      activityLog: [],
      isBlocked: false,
      isRecurring: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const clearFilters = () => {
    setSearchQuery("")
    setStatusFilter("all")
    setPriorityFilter("all")
    setProjectFilter("all")
    setAssigneeFilter("all")
    setQuickFilters([])
  }

  const hasActiveFilters = searchQuery || statusFilter !== "all" || priorityFilter !== "all" || projectFilter !== "all" || assigneeFilter !== "all" || quickFilters.length > 0

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Task Management</h1>
            <p className="text-muted-foreground mt-1">Agile workspace for granular task tracking and collaboration</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" /> New Task
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader className="pb-4 border-b border-border">
                <DialogTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Plus className="w-5 h-5 text-primary" />
                  </div>
                  Create New Task
                </DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Add a new task to your project workspace
                </p>
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
                      <Label htmlFor="project" className="text-sm">
                        Project <span className="text-destructive">*</span>
                      </Label>
                      <Select name="project" defaultValue="1">
                        <SelectTrigger className="bg-secondary/50 border-border">
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                          {projects.map((p) => (
                            <SelectItem key={p.id} value={p.id}>
                              {p.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status" className="text-sm">Status</Label>
                      <Select name="status" defaultValue={initialStatus}>
                        <SelectTrigger className="bg-secondary/50 border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(STATUS_CONFIG).map(([k, v]) => (
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
                    onClick={() => setIsAddDialogOpen(false)}
                    className="gap-2"
                  >
                    <X className="w-4 h-4" />
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

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-border">
          {[
            { id: "board", label: "Task Board", icon: LayoutGrid },
            { id: "workload", label: "Workload", icon: Users },
            { id: "automation", label: "Automation", icon: Zap },
            { id: "templates", label: "Templates", icon: FileText },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabMode)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium -mb-px border-b-2 transition-colors",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "board" && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {[
                { label: "Total", value: stats.total, icon: CheckCircle2, color: "text-foreground" },
                { label: "Backlog", value: stats.backlog, icon: Layers, color: "text-muted-foreground" },
                { label: "To Do", value: stats.todo, icon: Clock, color: "text-yellow-500" },
                { label: "In Progress", value: stats.inProgress, icon: Zap, color: "text-blue-500" },
                { label: "In Review", value: stats.inReview, icon: Eye, color: "text-purple-500" },
                { label: "Done", value: stats.done, icon: CheckCircle2, color: "text-green-500" },
                { label: "Overdue", value: stats.overdue, icon: AlertCircle, color: "text-red-500" },
                { label: "Completion", value: `${stats.completionRate}%`, icon: TrendingUp, color: "text-green-500" },
              ].map((stat) => (
                <Card key={stat.label} className="bg-secondary/30 border-0">
                  <CardContent className="pt-4 pb-3">
                    <div className="flex items-center justify-between">
                      <stat.icon className={cn("w-4 h-4", stat.color)} />
                      <span className={cn("text-xl font-bold", stat.color)}>{stat.value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filters & Controls */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search tasks by title, ID, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary border-0"
                />
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-2">
                {/* Quick Filters */}
                <div className="hidden lg:flex items-center gap-1">
                  {QUICK_FILTERS.slice(0, 3).map((qf) => (
                    <Button
                      key={qf.id}
                      variant={quickFilters.includes(qf.id) ? "default" : "outline"}
                      size="sm"
                      onClick={() => setQuickFilters((prev) => prev.includes(qf.id) ? prev.filter((f) => f !== qf.id) : [...prev, qf.id])}
                      className="text-xs"
                    >
                      {qf.label}
                    </Button>
                  ))}
                </div>

                {/* Filter Button */}
                <Button variant="outline" size="sm" onClick={() => setIsFiltersOpen(!isFiltersOpen)} className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                  {hasActiveFilters && <Badge className="ml-1 h-5 w-5 p-0 justify-center">!</Badge>}
                </Button>

                {/* View Mode */}
                <div className="flex bg-secondary rounded-lg p-1">
                  {[
                    { id: "kanban", icon: LayoutGrid },
                    { id: "list", icon: List },
                    { id: "calendar", icon: Calendar },
                    { id: "gantt", icon: BarChart3 },
                  ].map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setViewMode(v.id as ViewMode)}
                      className={cn(
                        "p-2 rounded",
                        viewMode === v.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <v.icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>

                {/* Swimlane (Kanban only) */}
                {viewMode === "kanban" && (
                  <Select value={swimlane} onValueChange={(v) => setSwimlane(v as SwimlaneType)}>
                    <SelectTrigger className="w-32">
                      <Layers className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Grouping</SelectItem>
                      <SelectItem value="project">By Project</SelectItem>
                      <SelectItem value="assignee">By Assignee</SelectItem>
                      <SelectItem value="priority">By Priority</SelectItem>
                    </SelectContent>
                  </Select>
                )}

                {/* Export */}
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </div>
            </div>

            {/* Expanded Filters */}
            {isFiltersOpen && (
              <Card className="bg-secondary/30 border-secondary animate-in fade-in slide-in-from-top-2 duration-200">
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                      <Label className="text-xs">Status</Label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Statuses</SelectItem>
                          {Object.entries(STATUS_CONFIG).map(([k, v]) => <SelectItem key={k} value={k}>{v.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Priority</Label>
                      <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                        <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Priorities</SelectItem>
                          {Object.entries(PRIORITY_CONFIG).map(([k, v]) => <SelectItem key={k} value={k}>{v.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Project</Label>
                      <Select value={projectFilter} onValueChange={setProjectFilter}>
                        <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Projects</SelectItem>
                          {projects.map((p) => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Assignee</Label>
                      <Select value={assigneeFilter} onValueChange={setAssigneeFilter}>
                        <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Assignees</SelectItem>
                          {teamMembers.map((m) => <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      {hasActiveFilters && (
                        <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
                          <X className="w-3 h-3" /> Clear All
                        </Button>
                      )}
                    </div>
                  </div>
                  {/* Quick Filters */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">Quick filters:</span>
                    {QUICK_FILTERS.map((qf) => (
                      <label key={qf.id} className="flex items-center gap-1.5 cursor-pointer">
                        <Checkbox
                          checked={quickFilters.includes(qf.id)}
                          onCheckedChange={(c) => setQuickFilters((prev) => c ? [...prev, qf.id] : prev.filter((f) => f !== qf.id))}
                        />
                        <span className="text-xs">{qf.label}</span>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Task Views */}
            {viewMode === "kanban" && (
              <KanbanBoard
                tasks={filteredTasks}
                onTaskClick={handleTaskClick}
                onStatusChange={handleStatusChange}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
                onCloneTask={handleCloneTask}
                swimlane={swimlane}
              />
            )}

            {viewMode === "list" && (
              <TaskListView
                tasks={filteredTasks}
                onTaskClick={handleTaskClick}
                onStatusChange={handleStatusChange}
                onPriorityChange={handlePriorityChange}
                onSelectTask={handleSelectTask}
                selectedTasks={selectedTasks}
              />
            )}

            {viewMode === "calendar" && (
              <TaskCalendarView
                tasks={filteredTasks}
                onTaskClick={handleTaskClick}
                onDateClick={(date) => { setInitialStatus("todo"); setIsAddDialogOpen(true) }}
              />
            )}

            {viewMode === "gantt" && (
              <TaskGanttView tasks={filteredTasks} onTaskClick={handleTaskClick} />
            )}
          </>
        )}

        {activeTab === "workload" && (
          <WorkloadManager tasks={tasks} teamMembers={teamMembers} />
        )}

        {activeTab === "automation" && (
          <WorkflowAutomation rules={rules} onUpdate={setRules} />
        )}

        {activeTab === "templates" && (
          <TemplateLibrary templates={templates} onUpdate={setTemplates} onUseTemplate={handleUseTemplate} />
        )}
      </div>

      {/* Task Detail Panel */}
      {selectedTask && (
        <TaskDetailPanel
          task={selectedTask}
          isOpen={isTaskPanelOpen}
          onClose={() => setIsTaskPanelOpen(false)}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
        />
      )}
    </DashboardLayout>
  )
}
