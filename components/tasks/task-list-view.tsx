"use client"

import { useState } from "react"
import type { Task, TaskStatus, TaskPriority } from "@/lib/types/task"
import { PRIORITY_CONFIG, STATUS_CONFIG } from "@/lib/types/task"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
    ChevronDown,
    ChevronRight,
    Clock,
    MoreVertical,
    Paperclip,
    MessageSquare,
    AlertTriangle,
    ListChecks,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface TaskListViewProps {
    tasks: Task[]
    onTaskClick: (task: Task) => void
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void
    onPriorityChange: (taskId: string, newPriority: TaskPriority) => void
    onSelectTask: (taskId: string, selected: boolean) => void
    selectedTasks: string[]
}

export function TaskListView({
    tasks,
    onTaskClick,
    onStatusChange,
    onPriorityChange,
    onSelectTask,
    selectedTasks,
}: TaskListViewProps) {
    const [expandedTasks, setExpandedTasks] = useState<string[]>([])
    const [sortField, setSortField] = useState<string>("dueDate")
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

    const toggleExpand = (taskId: string) => {
        setExpandedTasks((prev) =>
            prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
        )
    }

    const sortedTasks = [...tasks].sort((a, b) => {
        let comparison = 0
        switch (sortField) {
            case "dueDate":
                comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
                break
            case "priority":
                const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 }
                comparison = priorityOrder[a.priority] - priorityOrder[b.priority]
                break
            case "title":
                comparison = a.title.localeCompare(b.title)
                break
        }
        return sortDirection === "asc" ? comparison : -comparison
    })

    const handleSort = (field: string) => {
        if (sortField === field) {
            setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
        } else {
            setSortField(field)
            setSortDirection("asc")
        }
    }

    const SortHeader = ({ field, children }: { field: string; children: React.ReactNode }) => (
        <button
            onClick={() => handleSort(field)}
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
            {children}
            {sortField === field && (
                <ChevronDown className={cn("w-3 h-3 transition-transform", sortDirection === "desc" && "rotate-180")} />
            )}
        </button>
    )

    return (
        <div className="bg-card rounded-lg border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-secondary/30 text-xs font-medium text-muted-foreground border-b border-border">
                <div className="col-span-1 flex items-center gap-2">
                    <Checkbox
                        checked={selectedTasks.length === tasks.length && tasks.length > 0}
                        onCheckedChange={(checked) => {
                            tasks.forEach((task) => onSelectTask(task.id, !!checked))
                        }}
                    />
                </div>
                <div className="col-span-3">
                    <SortHeader field="title">Task</SortHeader>
                </div>
                <div className="col-span-2">Project</div>
                <div className="col-span-1">Assignee</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1">
                    <SortHeader field="priority">Priority</SortHeader>
                </div>
                <div className="col-span-1">
                    <SortHeader field="dueDate">Due Date</SortHeader>
                </div>
                <div className="col-span-1">Progress</div>
                <div className="col-span-1 text-right">Time</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border/50">
                {sortedTasks.map((task) => {
                    const isExpanded = expandedTasks.includes(task.id)
                    const isSelected = selectedTasks.includes(task.id)
                    const isOverdue = new Date(task.dueDate) < new Date() && task.status !== "done"
                    const completedSubtasks = task.subtasks.filter((s) => s.completed).length
                    const totalSubtasks = task.subtasks.length
                    const progress = totalSubtasks > 0 ? (completedSubtasks / totalSubtasks) * 100 : 0

                    return (
                        <div key={task.id}>
                            <div
                                className={cn(
                                    "grid grid-cols-12 gap-4 px-4 py-3 hover:bg-secondary/30 transition-colors cursor-pointer items-center",
                                    isSelected && "bg-primary/5"
                                )}
                            >
                                {/* Checkbox & Expand */}
                                <div className="col-span-1 flex items-center gap-2">
                                    <Checkbox
                                        checked={isSelected}
                                        onCheckedChange={(checked) => onSelectTask(task.id, !!checked)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    {task.subtasks.length > 0 && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleExpand(task.id)
                                            }}
                                            className="p-0.5 hover:bg-secondary rounded"
                                        >
                                            {isExpanded ? (
                                                <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                            )}
                                        </button>
                                    )}
                                </div>

                                {/* Task Title */}
                                <div className="col-span-3" onClick={() => onTaskClick(task)}>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-mono text-muted-foreground">{task.id}</span>
                                        {task.isBlocked && <AlertTriangle className="w-3 h-3 text-destructive" />}
                                    </div>
                                    <p className="font-medium text-sm truncate">{task.title}</p>
                                    {task.tags.length > 0 && (
                                        <div className="flex gap-1 mt-1">
                                            {task.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="text-[10px] bg-primary/10 text-primary px-1 rounded">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Project */}
                                <div className="col-span-2">
                                    <Badge variant="outline" className="text-xs font-normal">
                                        {task.projectName}
                                    </Badge>
                                </div>

                                {/* Assignee */}
                                <div className="col-span-1">
                                    <div className="flex -space-x-1">
                                        {task.assignees.slice(0, 2).map((assignee) => (
                                            <Avatar key={assignee.id} className="w-6 h-6 border-2 border-card">
                                                <AvatarFallback className="bg-primary/20 text-primary text-[10px]">
                                                    {assignee.initials}
                                                </AvatarFallback>
                                            </Avatar>
                                        ))}
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="col-span-1" onClick={(e) => e.stopPropagation()}>
                                    <Select value={task.status} onValueChange={(value) => onStatusChange(task.id, value as TaskStatus)}>
                                        <SelectTrigger className="h-7 text-xs w-24">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                                                <SelectItem key={key} value={key} className="text-xs">
                                                    <div className="flex items-center gap-2">
                                                        <div className={cn("w-2 h-2 rounded-full", config.color)} />
                                                        {config.label}
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Priority */}
                                <div className="col-span-1" onClick={(e) => e.stopPropagation()}>
                                    <Select value={task.priority} onValueChange={(value) => onPriorityChange(task.id, value as TaskPriority)}>
                                        <SelectTrigger className="h-7 text-xs w-20">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
                                                <SelectItem key={key} value={key} className="text-xs">
                                                    <Badge className={cn("text-[10px] text-white border-0", config.color)}>
                                                        {config.label}
                                                    </Badge>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Due Date */}
                                <div className="col-span-1">
                                    <span className={cn("text-xs", isOverdue ? "text-destructive font-medium" : "text-muted-foreground")}>
                                        {new Date(task.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                                    </span>
                                </div>

                                {/* Progress */}
                                <div className="col-span-1">
                                    {totalSubtasks > 0 ? (
                                        <div className="flex items-center gap-2">
                                            <Progress value={progress} className="h-1 flex-1" />
                                            <span className="text-[10px] text-muted-foreground w-8">
                                                {completedSubtasks}/{totalSubtasks}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-xs text-muted-foreground">-</span>
                                    )}
                                </div>

                                {/* Time */}
                                <div className="col-span-1 text-right">
                                    <span className="text-xs text-muted-foreground">
                                        {task.actualHours}h / {task.estimatedHours}h
                                    </span>
                                </div>
                            </div>

                            {/* Expanded Subtasks */}
                            {isExpanded && task.subtasks.length > 0 && (
                                <div className="bg-secondary/20 px-4 py-2 border-t border-border/30">
                                    <div className="pl-10 space-y-1">
                                        {task.subtasks.map((subtask) => (
                                            <div key={subtask.id} className="flex items-center gap-2 py-1">
                                                <Checkbox checked={subtask.completed} disabled />
                                                <span className={cn("text-sm", subtask.completed && "line-through text-muted-foreground")}>
                                                    {subtask.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            {tasks.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    <ListChecks className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No tasks found</p>
                </div>
            )}
        </div>
    )
}
