"use client"

import { useMemo } from "react"
import type { Task } from "@/lib/types/task"
import { PRIORITY_CONFIG } from "@/lib/types/task"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface TaskGanttViewProps {
    tasks: Task[]
    onTaskClick: (task: Task) => void
}

export function TaskGanttView({ tasks, onTaskClick }: TaskGanttViewProps) {
    // Calculate date range for the chart
    const { startDate, endDate, totalDays, weeks } = useMemo(() => {
        const dates = tasks.flatMap((t) => [new Date(t.startDate || t.createdAt), new Date(t.dueDate)])
        const minDate = new Date(Math.min(...dates.map((d) => d.getTime())))
        const maxDate = new Date(Math.max(...dates.map((d) => d.getTime())))

        // Extend range to nearest week boundaries
        const start = new Date(minDate)
        start.setDate(start.getDate() - start.getDay())

        const end = new Date(maxDate)
        end.setDate(end.getDate() + (6 - end.getDay()))

        const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1

        // Generate weeks for header
        const weekList: { start: Date; label: string }[] = []
        const current = new Date(start)
        while (current <= end) {
            weekList.push({
                start: new Date(current),
                label: current.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
            })
            current.setDate(current.getDate() + 7)
        }

        return { startDate: start, endDate: end, totalDays: days, weeks: weekList }
    }, [tasks])

    const getTaskPosition = (task: Task) => {
        const taskStart = new Date(task.startDate || task.createdAt)
        const taskEnd = new Date(task.dueDate)

        const startOffset = Math.floor((taskStart.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
        const duration = Math.ceil((taskEnd.getTime() - taskStart.getTime()) / (1000 * 60 * 60 * 24)) + 1

        return {
            left: `${(startOffset / totalDays) * 100}%`,
            width: `${(duration / totalDays) * 100}%`,
        }
    }

    const getProgress = (task: Task) => {
        if (task.subtasks.length === 0) return task.status === "done" ? 100 : 0
        return (task.subtasks.filter((s) => s.completed).length / task.subtasks.length) * 100
    }

    // Group tasks by project
    const tasksByProject = useMemo(() => {
        const groups: Record<string, Task[]> = {}
        tasks.forEach((task) => {
            if (!groups[task.projectName]) {
                groups[task.projectName] = []
            }
            groups[task.projectName].push(task)
        })
        return groups
    }, [tasks])

    const today = new Date()
    const todayOffset = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const todayPosition = (todayOffset / totalDays) * 100

    return (
        <div className="bg-card rounded-lg border border-border overflow-hidden">
            {/* Header with weeks */}
            <div className="flex border-b border-border">
                <div className="w-64 flex-shrink-0 bg-secondary/30 p-3 font-medium text-sm">Tasks</div>
                <div className="flex-1 relative">
                    <div className="flex">
                        {weeks.map((week, i) => (
                            <div
                                key={i}
                                className="flex-1 text-center text-xs font-medium text-muted-foreground py-2 border-l border-border/30"
                                style={{ minWidth: `${100 / weeks.length}%` }}
                            >
                                {week.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Task rows grouped by project */}
            <div className="divide-y divide-border/30">
                {Object.entries(tasksByProject).map(([projectName, projectTasks]) => (
                    <div key={projectName}>
                        {/* Project Header */}
                        <div className="flex bg-secondary/20">
                            <div className="w-64 flex-shrink-0 p-2 pl-3">
                                <span className="text-xs font-semibold text-primary">{projectName}</span>
                            </div>
                            <div className="flex-1" />
                        </div>

                        {/* Project Tasks */}
                        {projectTasks.map((task) => {
                            const position = getTaskPosition(task)
                            const progress = getProgress(task)
                            const priorityConfig = PRIORITY_CONFIG[task.priority]

                            return (
                                <div key={task.id} className="flex hover:bg-secondary/20 transition-colors">
                                    {/* Task Info */}
                                    <div
                                        className="w-64 flex-shrink-0 p-2 pl-6 flex items-center gap-2 cursor-pointer"
                                        onClick={() => onTaskClick(task)}
                                    >
                                        <Avatar className="w-5 h-5">
                                            <AvatarFallback className="bg-primary/20 text-primary text-[8px]">
                                                {task.assignees[0]?.initials || "?"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">{task.title}</p>
                                            <p className="text-[10px] text-muted-foreground">{task.id}</p>
                                        </div>
                                    </div>

                                    {/* Gantt Bar */}
                                    <div className="flex-1 relative h-12 flex items-center">
                                        {/* Today marker */}
                                        {todayPosition >= 0 && todayPosition <= 100 && (
                                            <div
                                                className="absolute top-0 bottom-0 w-px bg-destructive z-10"
                                                style={{ left: `${todayPosition}%` }}
                                            />
                                        )}

                                        {/* Task Bar */}
                                        <div
                                            className={cn(
                                                "absolute h-6 rounded cursor-pointer transition-all hover:opacity-90",
                                                "flex items-center overflow-hidden"
                                            )}
                                            style={{ left: position.left, width: position.width }}
                                            onClick={() => onTaskClick(task)}
                                        >
                                            {/* Background */}
                                            <div className={cn("absolute inset-0 opacity-30", priorityConfig.color)} />
                                            {/* Progress fill */}
                                            <div
                                                className={cn("absolute left-0 top-0 bottom-0", priorityConfig.color)}
                                                style={{ width: `${progress}%` }}
                                            />
                                            {/* Label */}
                                            <span className="relative z-10 px-2 text-[10px] font-medium text-foreground truncate">
                                                {task.title}
                                            </span>
                                        </div>

                                        {/* Dependencies arrows would go here */}
                                        {task.dependencies
                                            .filter((d) => d.type === "blocked-by")
                                            .map((dep) => {
                                                const blockerTask = tasks.find((t) => t.id === dep.taskId)
                                                if (!blockerTask) return null
                                                // Draw arrow from blocker end to this task start
                                                return (
                                                    <div
                                                        key={dep.taskId}
                                                        className="absolute h-px bg-muted-foreground/30"
                                                        style={{
                                                            left: getTaskPosition(blockerTask).left,
                                                            width: `calc(${position.left} - ${getTaskPosition(blockerTask).left})`,
                                                            top: "50%",
                                                        }}
                                                    />
                                                )
                                            })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>

            {tasks.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    <p>No tasks to display</p>
                </div>
            )}
        </div>
    )
}
