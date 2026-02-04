// Task Management Types and Interfaces

export type TaskStatus = "backlog" | "todo" | "in-progress" | "in-review" | "done"
export type TaskPriority = "low" | "medium" | "high" | "critical"
export type TaskType = "general" | "bug" | "feature" | "improvement" | "research" | "design" | "documentation"
export type SwimlaneType = "none" | "project" | "assignee" | "priority"

export interface TeamMember {
    id: string
    name: string
    initials: string
    avatar?: string
    email: string
    role: string
    isAvailable: boolean
}

export interface SubTask {
    id: string
    title: string
    completed: boolean
    assigneeId?: string
    assigneeName?: string
    assignedById?: string
    assignedByName?: string
    dueDate?: string
}

export interface TimeEntry {
    id: string
    date: string
    hours: number
    description: string
    isBillable: boolean
    userId: string
}

export interface Comment {
    id: string
    text: string
    authorId: string
    authorName: string
    authorInitials: string
    createdAt: string
    parentId?: string
    reactions?: { emoji: string; userIds: string[] }[]
}

export interface Attachment {
    id: string
    name: string
    size: string
    type: string
    url: string
    uploadedBy: string
    uploadedAt: string
}

export interface TaskDependency {
    taskId: string
    taskTitle: string
    type: "blocked-by" | "blocks" | "related"
}

export interface ActivityLogEntry {
    id: string
    timestamp: string
    userId: string
    userName: string
    action: string
    field?: string
    oldValue?: string
    newValue?: string
}

export interface ReferenceLink {
    id: string
    title: string
    url: string
    type: "figma" | "doc" | "sheet" | "github" | "link" | "other"
}

export interface Task {
    id: string
    title: string
    description: string
    status: TaskStatus
    priority: TaskPriority
    taskType: TaskType
    projectId: string
    projectName: string
    assignees: TeamMember[]
    assignedById: string
    assignedByName: string
    reporterId: string
    reporterName: string
    dueDate: string
    startDate?: string
    tags: string[]
    subtasks: SubTask[]
    comments: Comment[]
    attachments: Attachment[]
    dependencies: TaskDependency[]
    timeEntries: TimeEntry[]
    referenceLinks: ReferenceLink[]
    estimatedHours: number
    actualHours: number
    createdAt: string
    updatedAt: string
    activityLog: ActivityLogEntry[]
    isBlocked: boolean
    isRecurring: boolean
    recurringPattern?: string
    customFields?: Record<string, string>
}

export interface KanbanColumn {
    id: TaskStatus
    title: string
    wipLimit?: number
    color: string
}

export interface AutomationRule {
    id: string
    name: string
    trigger: {
        type: "status-change" | "due-date-passed" | "priority-change" | "assigned"
        value?: string
    }
    action: {
        type: "change-status" | "change-priority" | "notify" | "create-task" | "archive"
        value?: string
    }
    isActive: boolean
}

export interface TaskTemplate {
    id: string
    name: string
    description: string
    subtasks: { title: string }[]
    estimatedHours: number
    tags: string[]
    priority: TaskPriority
}

export const PRIORITY_CONFIG = {
    critical: { label: "Critical", color: "bg-red-500", border: "border-red-500", text: "text-red-500" },
    high: { label: "High", color: "bg-orange-500", border: "border-orange-500", text: "text-orange-500" },
    medium: { label: "Medium", color: "bg-blue-500", border: "border-blue-500", text: "text-blue-500" },
    low: { label: "Low", color: "bg-slate-400", border: "border-slate-400", text: "text-slate-400" },
}

export const STATUS_CONFIG: Record<TaskStatus, { label: string; color: string }> = {
    backlog: { label: "Backlog", color: "bg-slate-500" },
    todo: { label: "To Do", color: "bg-yellow-500" },
    "in-progress": { label: "In Progress", color: "bg-blue-500" },
    "in-review": { label: "In Review", color: "bg-purple-500" },
    done: { label: "Done", color: "bg-green-500" },
}

export const TASK_TYPE_CONFIG: Record<TaskType, { label: string; color: string; icon: string }> = {
    general: { label: "General", color: "bg-slate-500", icon: "📋" },
    bug: { label: "Bug", color: "bg-red-500", icon: "🐛" },
    feature: { label: "Feature", color: "bg-green-500", icon: "✨" },
    improvement: { label: "Improvement", color: "bg-blue-500", icon: "📈" },
    research: { label: "Research", color: "bg-purple-500", icon: "🔍" },
    design: { label: "Design", color: "bg-pink-500", icon: "🎨" },
    documentation: { label: "Documentation", color: "bg-orange-500", icon: "📝" },
}

export const DEFAULT_COLUMNS: KanbanColumn[] = [
    { id: "backlog", title: "Backlog", color: "bg-slate-500/20" },
    { id: "todo", title: "To Do", wipLimit: 5, color: "bg-yellow-500/20" },
    { id: "in-progress", title: "In Progress", wipLimit: 3, color: "bg-blue-500/20" },
    { id: "in-review", title: "In Review", wipLimit: 2, color: "bg-purple-500/20" },
    { id: "done", title: "Done", color: "bg-green-500/20" },
]
