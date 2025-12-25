"use client"

import { useState } from "react"
import type { Task, TaskStatus, KanbanColumn, SwimlaneType } from "@/lib/types/task"
import { DEFAULT_COLUMNS, STATUS_CONFIG } from "@/lib/types/task"
import { TaskCard } from "./task-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface KanbanBoardProps {
    tasks: Task[]
    onTaskClick: (task: Task) => void
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void
    onAddTask: (status: TaskStatus) => void
    onDeleteTask: (id: string) => void
    onCloneTask: (task: Task) => void
    swimlane?: SwimlaneType
    columns?: KanbanColumn[]
}

export function KanbanBoard({
    tasks,
    onTaskClick,
    onStatusChange,
    onAddTask,
    onDeleteTask,
    onCloneTask,
    swimlane = "none",
    columns = DEFAULT_COLUMNS,
}: KanbanBoardProps) {
    const [draggedTask, setDraggedTask] = useState<Task | null>(null)
    const [dragOverColumn, setDragOverColumn] = useState<TaskStatus | null>(null)

    const getTasksForColumn = (status: TaskStatus) => {
        return tasks.filter((t) => t.status === status)
    }

    const handleDragStart = (e: React.DragEvent, task: Task) => {
        setDraggedTask(task)
        e.dataTransfer.effectAllowed = "move"
    }

    const handleDragOver = (e: React.DragEvent, status: TaskStatus) => {
        e.preventDefault()
        setDragOverColumn(status)
    }

    const handleDragLeave = () => {
        setDragOverColumn(null)
    }

    const handleDrop = (e: React.DragEvent, status: TaskStatus) => {
        e.preventDefault()
        if (draggedTask && draggedTask.status !== status) {
            onStatusChange(draggedTask.id, status)
        }
        setDraggedTask(null)
        setDragOverColumn(null)
    }

    const handleMoveToTop = (taskId: string) => {
        // This would reorder tasks - for now just a placeholder
        console.log("Move to top:", taskId)
    }

    // Group tasks by swimlane if specified
    const getSwimlanes = () => {
        if (swimlane === "none") return [{ key: "all", label: "All Tasks", tasks }]

        const groups: Record<string, { key: string; label: string; tasks: Task[] }> = {}

        tasks.forEach((task) => {
            let key: string
            let label: string

            switch (swimlane) {
                case "project":
                    key = task.projectId
                    label = task.projectName
                    break
                case "assignee":
                    key = task.assignees[0]?.id || "unassigned"
                    label = task.assignees[0]?.name || "Unassigned"
                    break
                case "priority":
                    key = task.priority
                    label = task.priority.charAt(0).toUpperCase() + task.priority.slice(1)
                    break
                default:
                    key = "all"
                    label = "All"
            }

            if (!groups[key]) {
                groups[key] = { key, label, tasks: [] }
            }
            groups[key].tasks.push(task)
        })

        return Object.values(groups)
    }

    const swimlanes = getSwimlanes()

    return (
        <div className="space-y-6">
            {swimlanes.map((lane) => (
                <div key={lane.key}>
                    {swimlane !== "none" && (
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                            <h3 className="font-semibold text-sm">{lane.label}</h3>
                            <Badge variant="secondary" className="text-xs">
                                {lane.tasks.length} tasks
                            </Badge>
                        </div>
                    )}

                    <div className="grid grid-cols-5 gap-4">
                        {columns.map((column) => {
                            const columnTasks = lane.tasks.filter((t) => t.status === column.id)
                            const isOverWipLimit = column.wipLimit && columnTasks.length > column.wipLimit
                            const isDragOver = dragOverColumn === column.id

                            return (
                                <div
                                    key={column.id}
                                    className="space-y-3"
                                    onDragOver={(e) => handleDragOver(e, column.id)}
                                    onDragLeave={handleDragLeave}
                                    onDrop={(e) => handleDrop(e, column.id)}
                                >
                                    {/* Column Header */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className={cn("w-2 h-2 rounded-full", STATUS_CONFIG[column.id].color)} />
                                            <h3 className="font-semibold text-sm">{column.title}</h3>
                                            <Badge variant="secondary" className="text-xs">
                                                {columnTasks.length}
                                            </Badge>
                                        </div>
                                        {column.wipLimit && (
                                            <div className={cn("flex items-center gap-1 text-xs", isOverWipLimit ? "text-destructive" : "text-muted-foreground")}>
                                                {isOverWipLimit && <AlertCircle className="w-3 h-3" />}
                                                <span>WIP: {column.wipLimit}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Column Content */}
                                    <div
                                        className={cn(
                                            "rounded-lg p-3 space-y-2 min-h-[400px] transition-all duration-200",
                                            column.color,
                                            isDragOver && "ring-2 ring-primary ring-dashed bg-primary/5"
                                        )}
                                    >
                                        {columnTasks.map((task) => (
                                            <div
                                                key={task.id}
                                                draggable
                                                onDragStart={(e) => handleDragStart(e, task)}
                                                className="group"
                                            >
                                                <TaskCard
                                                    task={task}
                                                    onClick={() => onTaskClick(task)}
                                                    onDelete={onDeleteTask}
                                                    onClone={onCloneTask}
                                                    onMoveToTop={handleMoveToTop}
                                                />
                                            </div>
                                        ))}

                                        {/* Add Task Button */}
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full border-2 border-dashed border-border/50 hover:border-primary/50 text-muted-foreground hover:text-foreground"
                                            onClick={() => onAddTask(column.id)}
                                        >
                                            <Plus className="w-4 h-4 mr-1" />
                                            Add Task
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}
