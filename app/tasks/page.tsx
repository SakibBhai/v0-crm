"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Plus,
  Search,
  Filter,
  Clock,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Zap,
  TrendingUp,
  Activity,
  BarChart3,
  Download,
  Trash2,
  MessageSquare,
  Tag,
  ChevronDown,
  Eye,
  MoreVertical,
} from "lucide-react"

// Enhanced task interface with additional properties
interface Subtask {
  id: string
  title: string
  completed: boolean
}

interface TaskDependency {
  taskId: string
  type: "finish-to-start" | "start-to-start" | "start-to-finish"
}

interface TimeEntry {
  id: string
  date: string
  hours: number
  description: string
}

interface Task {
  id: string
  title: string
  description: string
  status: "backlog" | "todo" | "in-progress" | "in-review" | "done"
  priority: "low" | "medium" | "high" | "urgent"
  project: string
  assignee: { name: string; initials: string; avatar?: string }
  dueDate: string
  startDate?: string
  tags: string[]
  subtasks?: Subtask[]
  comments?: { id: string; author: string; text: string; date: string }[]
  attachments?: { id: string; name: string; size: string }[]
  dependencies?: TaskDependency[]
  timeEntries?: TimeEntry[]
  estimatedHours?: number
  actualHours?: number
  createdAt: string
  updatedAt: string
  history?: {
    timestamp: string
    field: string
    oldValue: string
    newValue: string
    changedBy: string
  }[]
}

interface Workflow {
  id: string
  name: string
  statuses: string[]
  automationRules: {
    id: string
    trigger: string
    action: string
  }[]
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Design homepage wireframes",
    description: "Create wireframes for the new homepage design including hero, features, and footer sections",
    status: "in-progress",
    priority: "high",
    project: "Website Redesign",
    assignee: { name: "Sarah Chen", initials: "SC" },
    dueDate: "2025-01-15",
    startDate: "2025-01-08",
    tags: ["design", "urgent"],
    subtasks: [
      { id: "s1", title: "Hero section wireframe", completed: true },
      { id: "s2", title: "Features section layout", completed: false },
      { id: "s3", title: "Footer design", completed: false },
    ],
    estimatedHours: 16,
    actualHours: 8,
    comments: [
      {
        id: "c1",
        author: "Manager",
        text: "Please include dark mode variations",
        date: "2025-01-10",
      },
    ],
    createdAt: "2025-01-08",
    updatedAt: "2025-01-11",
    history: [
      {
        timestamp: "2025-01-08T10:00:00Z",
        field: "status",
        oldValue: "backlog",
        newValue: "todo",
        changedBy: "Admin",
      },
      {
        timestamp: "2025-01-10T14:30:00Z",
        field: "status",
        oldValue: "todo",
        newValue: "in-progress",
        changedBy: "Sarah Chen",
      },
    ],
  },
  {
    id: "2",
    title: "Setup database migration",
    description: "Configure PostgreSQL migration scripts for new user authentication system",
    status: "todo",
    priority: "urgent",
    project: "Backend Development",
    assignee: { name: "Alex Kumar", initials: "AK" },
    dueDate: "2025-01-12",
    tags: ["backend", "database"],
    estimatedHours: 8,
    actualHours: 0,
    createdAt: "2025-01-09",
    updatedAt: "2025-01-09",
  },
  {
    id: "3",
    title: "Write API documentation",
    description: "Create comprehensive API documentation for all endpoints",
    status: "done",
    priority: "medium",
    project: "Documentation",
    assignee: { name: "Emma Wilson", initials: "EW" },
    dueDate: "2025-01-10",
    tags: ["documentation"],
    estimatedHours: 12,
    actualHours: 11,
    subtasks: [
      { id: "s4", title: "Authentication endpoints", completed: true },
      { id: "s5", title: "User management endpoints", completed: true },
      { id: "s6", title: "Error handling guide", completed: true },
    ],
    createdAt: "2025-01-05",
    updatedAt: "2025-01-10",
  },
  {
    id: "4",
    title: "Client review meeting preparation",
    description: "Prepare presentation slides and mockups for client review",
    status: "in-review",
    priority: "high",
    project: "Website Redesign",
    assignee: { name: "Michael Brown", initials: "MB" },
    dueDate: "2025-01-13",
    tags: ["client", "presentation"],
    estimatedHours: 10,
    actualHours: 6,
    createdAt: "2025-01-08",
    updatedAt: "2025-01-11",
  },
]

const velocityData = [
  { week: "Week 1", completed: 12, estimated: 15 },
  { week: "Week 2", completed: 14, estimated: 15 },
  { week: "Week 3", completed: 11, estimated: 15 },
  { week: "Week 4", completed: 16, estimated: 15 },
  { week: "Week 5", completed: 13, estimated: 15 },
]

const cycleTimeData = [
  { month: "Dec", avgTime: 3.2 },
  { month: "Jan", avgTime: 2.8 },
  { month: "Feb", avgTime: 2.5 },
  { month: "Mar", avgTime: 2.1 },
]

const workloadData = [
  { name: "Sarah Chen", tasks: 8, capacity: 10 },
  { name: "Alex Kumar", tasks: 6, capacity: 10 },
  { name: "Emma Wilson", tasks: 5, capacity: 10 },
  { name: "Michael Brown", tasks: 9, capacity: 10 },
]

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"kanban" | "list" | "calendar" | "gantt">("kanban")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [isTimeTrackingOpen, setIsTimeTrackingOpen] = useState(false)
  const [expandedTasks, setExpandedTasks] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<"overview" | "analytics" | "resources" | "workflows">("overview")

  const stats = {
    total: tasks.length,
    backlog: tasks.filter((t) => t.status === "backlog").length,
    todo: tasks.filter((t) => t.status === "todo").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
    inReview: tasks.filter((t) => t.status === "in-review").length,
    completed: tasks.filter((t) => t.status === "done").length,
    urgent: tasks.filter((t) => t.priority === "urgent").length,
    overdue: tasks.filter((t) => new Date(t.dueDate) < new Date() && t.status !== "done").length,
    completionRate: Math.round((tasks.filter((t) => t.status === "done").length / tasks.length) * 100),
    avgCycleTime: 2.65,
    totalEstimated: tasks.reduce((sum, t) => sum + (t.estimatedHours || 0), 0),
    totalActual: tasks.reduce((sum, t) => sum + (t.actualHours || 0), 0),
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignee.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || task.status === statusFilter
    const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })

  const groupedTasks = {
    backlog: filteredTasks.filter((t) => t.status === "backlog"),
    todo: filteredTasks.filter((t) => t.status === "todo"),
    "in-progress": filteredTasks.filter((t) => t.status === "in-progress"),
    "in-review": filteredTasks.filter((t) => t.status === "in-review"),
    done: filteredTasks.filter((t) => t.status === "done"),
  }

  const handleAddTask = (formData: FormData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      status: "todo",
      priority: formData.get("priority") as any,
      project: formData.get("project") as string,
      assignee: { name: formData.get("assignee") as string, initials: "JD" },
      dueDate: formData.get("dueDate") as string,
      startDate: formData.get("startDate") as string,
      tags: (formData.get("tags") as string).split(",").map((t) => t.trim()),
      estimatedHours: Number.parseInt(formData.get("estimatedHours") as string) || 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      history: [
        {
          timestamp: new Date().toISOString(),
          field: "status",
          oldValue: "backlog",
          newValue: "todo",
          changedBy: "Current User",
        },
      ],
    }
    setTasks([newTask, ...tasks])
    setIsAddDialogOpen(false)
  }

  const handleUpdateTask = (updatedTask: Task) => {
    const oldTask = tasks.find((t) => t.id === updatedTask.id)
    const changes: Task["history"] = []

    Object.keys(updatedTask).forEach((key) => {
      if (
        key !== "id" &&
        key !== "createdAt" &&
        key !== "updatedAt" &&
        key !== "history" &&
        JSON.stringify(oldTask?.[key as keyof Task]) !== JSON.stringify(updatedTask[key as keyof Task])
      ) {
        changes.push({
          timestamp: new Date().toISOString(),
          field: key,
          oldValue: JSON.stringify(oldTask?.[key as keyof Task]) || "N/A",
          newValue: JSON.stringify(updatedTask[key as keyof Task]),
          changedBy: "Current User",
        })
      }
    })

    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id
          ? {
              ...updatedTask,
              updatedAt: new Date().toISOString(),
              history: [...(updatedTask.history || []), ...changes],
            }
          : task,
      ),
    )
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId))
  }

  const handleStatusChange = (taskId: string, newStatus: string) => {
    const task = tasks.find((t) => t.id === taskId)
    if (task) {
      handleUpdateTask({
        ...task,
        status: newStatus as any,
      })
    }
  }

  const handleAddTimeEntry = (taskId: string, hours: number, description: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              timeEntries: [
                ...(task.timeEntries || []),
                {
                  id: Date.now().toString(),
                  date: new Date().toISOString().split("T")[0],
                  hours,
                  description,
                },
              ],
              actualHours: (task.actualHours || 0) + hours,
            }
          : task,
      ),
    )
  }

  const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#06b6d4"]
  const priorityColors = {
    low: "#10b981",
    medium: "#f59e0b",
    high: "#ef4444",
    urgent: "#8b5cf6",
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header with tabs */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Task Management</h1>
            <p className="text-muted-foreground mt-1">Orchestrate your team's workflow with advanced task management</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                New Task
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleAddTask(new FormData(e.currentTarget))
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Title *</label>
                    <Input name="title" placeholder="Task title" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Project *</label>
                    <Input name="project" placeholder="Project name" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    name="description"
                    placeholder="Task description"
                    className="w-full p-2 border rounded bg-background text-foreground"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">Priority</label>
                    <Select defaultValue="medium" onValueChange={(value) => {}}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                    <input name="priority" type="hidden" defaultValue="medium" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Assignee</label>
                    <Input name="assignee" placeholder="Team member" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Est. Hours</label>
                    <Input name="estimatedHours" type="number" placeholder="8" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Start Date</label>
                    <Input name="startDate" type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Due Date *</label>
                    <Input name="dueDate" type="date" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Tags (comma-separated)</label>
                  <Input name="tags" placeholder="tag1, tag2, tag3" />
                </div>
                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Create Task</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b">
          {(["overview", "analytics", "resources", "workflows"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium text-sm capitalize transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {[
                { label: "Total", value: stats.total, icon: CheckCircle2, color: "bg-blue-500/10" },
                { label: "Backlog", value: stats.backlog, icon: AlertCircle, color: "bg-slate-500/10" },
                { label: "To Do", value: stats.todo, icon: Clock, color: "bg-yellow-500/10" },
                { label: "In Progress", value: stats.inProgress, icon: Zap, color: "bg-blue-500/10" },
                { label: "In Review", value: stats.inReview, icon: Eye, color: "bg-purple-500/10" },
                { label: "Completed", value: stats.completed, icon: CheckCircle2, color: "bg-green-500/10" },
                { label: "Overdue", value: stats.overdue, icon: AlertCircle, color: "bg-red-500/10" },
                { label: "Completion", value: `${stats.completionRate}%`, icon: TrendingUp, color: "bg-green-500/10" },
              ].map((stat, idx) => (
                <Card key={idx} className={`${stat.color} border-0`}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <stat.icon className="w-5 h-5 mb-2 text-muted-foreground" />
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filters and View Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search tasks by name, project, or assignee..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-secondary border-0"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                <select
                  value={viewMode}
                  onChange={(e) => setViewMode(e.target.value as any)}
                  className="px-3 py-2 rounded-lg bg-secondary border-0 text-foreground"
                >
                  <option value="kanban">Kanban</option>
                  <option value="list">List</option>
                  <option value="calendar">Calendar</option>
                  <option value="gantt">Gantt</option>
                </select>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {isFiltersOpen && (
              <Card className="border-secondary bg-secondary/30">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="text-sm font-medium">Status</label>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Statuses</SelectItem>
                          <SelectItem value="backlog">Backlog</SelectItem>
                          <SelectItem value="todo">To Do</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="in-review">In Review</SelectItem>
                          <SelectItem value="done">Done</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Priority</label>
                      <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Priorities</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Due Date</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Assignee</label>
                      <Input placeholder="Filter by assignee" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Kanban View */}
            {viewMode === "kanban" && (
              <div className="grid grid-cols-5 gap-4">
                {Object.entries(groupedTasks).map(([status, statusTasks]) => (
                  <div key={status} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm capitalize">
                        {status.replace("-", " ")} ({statusTasks.length})
                      </h3>
                      <span className="text-xs bg-secondary px-2 py-1 rounded">
                        {statusTasks.reduce((sum, t) => sum + (t.estimatedHours || 0), 0)}h
                      </span>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-3 space-y-2 min-h-96">
                      {statusTasks.map((task) => (
                        <div
                          key={task.id}
                          onClick={() => {
                            setSelectedTask(task)
                            setIsDetailModalOpen(true)
                          }}
                          className="bg-background rounded-lg p-3 border border-secondary cursor-pointer hover:border-primary/50 transition-colors group"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex-1">
                              <h4 className="text-sm font-medium line-clamp-2">{task.title}</h4>
                              <p className="text-xs text-muted-foreground">{task.project}</p>
                            </div>
                            <span
                              className="text-xs px-2 py-1 rounded font-medium text-white"
                              style={{ backgroundColor: priorityColors[task.priority] }}
                            >
                              {task.priority}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {new Date(task.dueDate) < new Date() && task.status !== "done" ? (
                                <span className="text-red-500 font-medium">Overdue</span>
                              ) : (
                                <span>{task.dueDate}</span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5">
                              {task.subtasks && (
                                <span className="bg-secondary px-1.5 py-0.5 rounded">
                                  {task.subtasks.filter((s) => s.completed).length}/{task.subtasks.length}
                                </span>
                              )}
                              {task.estimatedHours && (
                                <span className="bg-secondary px-1.5 py-0.5 rounded">{task.estimatedHours}h</span>
                              )}
                            </div>
                          </div>
                          {task.tags.length > 0 && (
                            <div className="flex gap-1 mt-2 flex-wrap">
                              {task.tags.map((tag) => (
                                <span key={tag} className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <button className="w-full py-2 text-xs text-muted-foreground hover:text-foreground border-2 border-dashed border-secondary rounded-lg hover:border-primary transition-colors">
                        + Add Task
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <Card>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Task</th>
                          <th className="text-left py-3 px-4">Project</th>
                          <th className="text-left py-3 px-4">Assignee</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-left py-3 px-4">Priority</th>
                          <th className="text-left py-3 px-4">Due Date</th>
                          <th className="text-left py-3 px-4">Est/Act Hours</th>
                          <th className="text-left py-3 px-4">Progress</th>
                          <th className="text-right py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTasks.map((task) => (
                          <tr key={task.id} className="border-b hover:bg-secondary/50 transition-colors">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() =>
                                    setExpandedTasks((prev) =>
                                      prev.includes(task.id) ? prev.filter((id) => id !== task.id) : [...prev, task.id],
                                    )
                                  }
                                  className="p-1 hover:bg-secondary rounded"
                                >
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform ${
                                      expandedTasks.includes(task.id) ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                <span className="font-medium">{task.title}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">{task.project}</td>
                            <td className="py-3 px-4">
                              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                                {task.assignee.initials}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <Select
                                defaultValue={task.status}
                                onValueChange={(value) => handleStatusChange(task.id, value)}
                              >
                                <SelectTrigger className="w-28">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="backlog">Backlog</SelectItem>
                                  <SelectItem value="todo">To Do</SelectItem>
                                  <SelectItem value="in-progress">In Progress</SelectItem>
                                  <SelectItem value="in-review">In Review</SelectItem>
                                  <SelectItem value="done">Done</SelectItem>
                                </SelectContent>
                              </Select>
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className="text-xs px-2 py-1 rounded font-medium text-white"
                                style={{ backgroundColor: priorityColors[task.priority] }}
                              >
                                {task.priority}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              {new Date(task.dueDate) < new Date() && task.status !== "done" ? (
                                <span className="text-red-500 font-medium">{task.dueDate}</span>
                              ) : (
                                <span>{task.dueDate}</span>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              <span className="text-xs">
                                {task.estimatedHours}h / {task.actualHours}h
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              {task.subtasks && task.subtasks.length > 0 ? (
                                <div className="w-16 bg-secondary rounded-full h-1.5">
                                  <div
                                    className="bg-primary h-1.5 rounded-full"
                                    style={{
                                      width: `${(task.subtasks.filter((s) => s.completed).length / task.subtasks.length) * 100}%`,
                                    }}
                                  />
                                </div>
                              ) : (
                                <span className="text-xs text-muted-foreground">-</span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button
                                onClick={() => {
                                  setSelectedTask(task)
                                  setIsDetailModalOpen(true)
                                }}
                                className="p-1 hover:bg-secondary rounded"
                              >
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Calendar View */}
            {viewMode === "calendar" && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center text-muted-foreground py-8">
                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Calendar view coming soon with interactive date picker and task scheduling</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Gantt View */}
            {viewMode === "gantt" && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center text-muted-foreground py-8">
                    <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Gantt chart view with timeline visualization and dependency tracking</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Team Velocity Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Team Velocity</CardTitle>
                <CardDescription>Completed vs Estimated Tasks Per Week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={velocityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="week" stroke="var(--color-muted-foreground)" />
                    <YAxis stroke="var(--color-muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-background)",
                        border: "1px solid var(--color-border)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="completed" fill="#3b82f6" />
                    <Bar dataKey="estimated" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Cycle Time Trend */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Average Cycle Time</CardTitle>
                <CardDescription>Days from To-Do to Done (Improving)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={cycleTimeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                    <YAxis stroke="var(--color-muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-background)",
                        border: "1px solid var(--color-border)",
                      }}
                    />
                    <Line type="monotone" dataKey="avgTime" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Task Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Task Priority Distribution</CardTitle>
                <CardDescription>Tasks by Priority Level</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Urgent", value: stats.urgent },
                        { name: "High", value: tasks.filter((t) => t.priority === "high").length },
                        { name: "Medium", value: tasks.filter((t) => t.priority === "medium").length },
                        { name: "Low", value: tasks.filter((t) => t.priority === "low").length },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Performance Metrics</CardTitle>
                <CardDescription>Key Task Indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Completion Rate</span>
                  <span className="text-2xl font-bold">{stats.completionRate}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${stats.completionRate}%` }} />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Avg Cycle Time</p>
                    <p className="text-lg font-bold">{stats.avgCycleTime} days</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Overdue Tasks</p>
                    <p className="text-lg font-bold text-red-500">{stats.overdue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Est vs Actual</p>
                    <p className="text-lg font-bold">
                      {stats.totalEstimated}h / {stats.totalActual}h
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Efficiency</p>
                    <p className="text-lg font-bold text-green-500">
                      {stats.totalActual > 0 ? Math.round((stats.totalEstimated / stats.totalActual) * 100) : 0}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Workload Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Team Workload Distribution</CardTitle>
                <CardDescription>Current Task Allocation vs Capacity</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={workloadData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis type="number" stroke="var(--color-muted-foreground)" />
                    <YAxis dataKey="name" type="category" stroke="var(--color-muted-foreground)" width={100} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-background)",
                        border: "1px solid var(--color-border)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="tasks" fill="#3b82f6" />
                    <Bar dataKey="capacity" fill="#e5e7eb" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Capacity Planning */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Capacity Status</CardTitle>
                <CardDescription>Team Member Utilization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {workloadData.map((member) => (
                  <div key={member.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{member.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {member.tasks}/{member.capacity}
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          member.tasks / member.capacity > 1
                            ? "bg-red-500"
                            : member.tasks / member.capacity > 0.8
                              ? "bg-yellow-500"
                              : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min((member.tasks / member.capacity) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "workflows" && (
          <Card>
            <CardHeader>
              <CardTitle>Workflow Automation</CardTitle>
              <CardDescription>Define custom workflows and automation rules for your team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "Content Creation Workflow",
                    statuses: ["Ideation", "Draft", "Review", "Published"],
                  },
                  { name: "Bug Fix Workflow", statuses: ["Reported", "Assigned", "In Progress", "Fixed", "Verified"] },
                  {
                    name: "Client Approval Workflow",
                    statuses: ["Submitted", "Pending Review", "Approved", "Rejected", "Finalized"],
                  },
                ].map((workflow, idx) => (
                  <Card key={idx} className="border-secondary">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3">{workflow.name}</h4>
                      <div className="space-y-2">
                        {workflow.statuses.map((status) => (
                          <div key={status} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            {status}
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4 bg-transparent" size="sm" variant="outline">
                        Configure
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Task Detail Modal */}
      {selectedTask && isDetailModalOpen && (
        <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <DialogTitle className="text-2xl">{selectedTask.title}</DialogTitle>
                  <p className="text-sm text-muted-foreground mt-1">{selectedTask.project}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingTask(selectedTask)
                      setIsTimeTrackingOpen(true)
                    }}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Log Time
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteTask(selectedTask.id)}
                    className="text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* Task Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  <Select
                    defaultValue={selectedTask.status}
                    onValueChange={(value) => {
                      handleStatusChange(selectedTask.id, value)
                      setSelectedTask({ ...selectedTask, status: value as any })
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="backlog">Backlog</SelectItem>
                      <SelectItem value="todo">To Do</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="in-review">In Review</SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Priority</p>
                  <span
                    className="text-xs px-3 py-1.5 rounded font-medium text-white inline-block"
                    style={{ backgroundColor: priorityColors[selectedTask.priority] }}
                  >
                    {selectedTask.priority}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Assignee</p>
                  <p className="font-medium">{selectedTask.assignee.name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Due Date</p>
                  <p className="font-medium">{selectedTask.dueDate}</p>
                </div>
              </div>

              {/* Time Tracking */}
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Time Tracking
                </h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Estimated</p>
                    <p className="text-2xl font-bold">{selectedTask.estimatedHours}h</p>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Actual</p>
                    <p className="text-2xl font-bold">{selectedTask.actualHours}h</p>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Remaining</p>
                    <p
                      className={`text-2xl font-bold ${selectedTask.estimatedHours! - selectedTask.actualHours! < 0 ? "text-red-500" : ""}`}
                    >
                      {Math.max(0, selectedTask.estimatedHours! - selectedTask.actualHours!)}h
                    </p>
                  </div>
                </div>
                {selectedTask.timeEntries && selectedTask.timeEntries.length > 0 && (
                  <div className="space-y-2">
                    {selectedTask.timeEntries.map((entry) => (
                      <div key={entry.id} className="flex justify-between items-center p-2 bg-secondary/30 rounded">
                        <div>
                          <p className="text-sm font-medium">{entry.description}</p>
                          <p className="text-xs text-muted-foreground">{entry.date}</p>
                        </div>
                        <p className="font-semibold">{entry.hours}h</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Subtasks */}
              {selectedTask.subtasks && selectedTask.subtasks.length > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Subtasks</h4>
                  <div className="space-y-2">
                    {selectedTask.subtasks.map((subtask) => (
                      <label
                        key={subtask.id}
                        className="flex items-center gap-3 p-2 hover:bg-secondary/30 rounded cursor-pointer"
                      >
                        <input type="checkbox" checked={subtask.completed} className="w-4 h-4" />
                        <span className={subtask.completed ? "line-through text-muted-foreground" : ""}>
                          {subtask.title}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {selectedTask.tags.length > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTask.tags.map((tag) => (
                      <span key={tag} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Activity History */}
              {selectedTask.history && selectedTask.history.length > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Activity History
                  </h4>
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {selectedTask.history.map((entry, idx) => (
                      <div key={idx} className="flex gap-3 p-2 bg-secondary/20 rounded text-sm">
                        <div className="flex-1">
                          <p>
                            <span className="font-medium">{entry.changedBy}</span> changed{" "}
                            <span className="font-medium">{entry.field}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {entry.oldValue} → {entry.newValue}
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">
                          {new Date(entry.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comments Section */}
              {selectedTask.comments && selectedTask.comments.length > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Comments
                  </h4>
                  <div className="space-y-3">
                    {selectedTask.comments.map((comment) => (
                      <div key={comment.id} className="p-3 bg-secondary/30 rounded">
                        <div className="flex justify-between mb-1">
                          <p className="font-medium text-sm">{comment.author}</p>
                          <p className="text-xs text-muted-foreground">{comment.date}</p>
                        </div>
                        <p className="text-sm">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Time Tracking Modal */}
      {isTimeTrackingOpen && editingTask && (
        <Dialog open={isTimeTrackingOpen} onOpenChange={setIsTimeTrackingOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Log Time - {editingTask.title}</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                handleAddTimeEntry(
                  editingTask.id,
                  Number.parseFloat(formData.get("hours") as string),
                  formData.get("description") as string,
                )
                setIsTimeTrackingOpen(false)
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-sm font-medium">Hours Spent</label>
                <Input name="hours" type="number" placeholder="2.5" step="0.5" required />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  placeholder="What did you work on?"
                  className="w-full p-2 border rounded bg-background text-foreground"
                  rows={3}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsTimeTrackingOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Log Time</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </DashboardLayout>
  )
}
