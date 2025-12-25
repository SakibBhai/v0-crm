"use client"

import { useState } from "react"
import type { Task } from "@/lib/types/task"
import { PRIORITY_CONFIG } from "@/lib/types/task"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TaskCalendarViewProps {
    tasks: Task[]
    onTaskClick: (task: Task) => void
    onDateClick: (date: Date) => void
}

export function TaskCalendarView({ tasks, onTaskClick, onDateClick }: TaskCalendarViewProps) {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [viewMode, setViewMode] = useState<"month" | "week">("month")

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDay = firstDay.getDay()

        const days: (Date | null)[] = []

        // Add empty slots for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            days.push(null)
        }

        // Add all days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i))
        }

        return days
    }

    const getTasksForDate = (date: Date) => {
        return tasks.filter((task) => {
            const taskDate = new Date(task.dueDate)
            return (
                taskDate.getDate() === date.getDate() &&
                taskDate.getMonth() === date.getMonth() &&
                taskDate.getFullYear() === date.getFullYear()
            )
        })
    }

    const navigateMonth = (direction: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1))
    }

    const isToday = (date: Date) => {
        const today = new Date()
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        )
    }

    const days = getDaysInMonth(currentDate)
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

    return (
        <div className="bg-card rounded-lg border border-border p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-semibold">{monthName}</h2>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigateMonth(-1)}>
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setCurrentDate(new Date())}>
                            Today
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigateMonth(1)}>
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
                <div className="flex bg-secondary rounded-lg p-1">
                    <button
                        onClick={() => setViewMode("month")}
                        className={cn(
                            "px-3 py-1 rounded text-sm",
                            viewMode === "month" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Month
                    </button>
                    <button
                        onClick={() => setViewMode("week")}
                        className={cn(
                            "px-3 py-1 rounded text-sm",
                            viewMode === "week" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Week
                    </button>
                </div>
            </div>

            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
                {days.map((date, index) => {
                    if (!date) {
                        return <div key={`empty-${index}`} className="min-h-[100px] bg-secondary/20 rounded" />
                    }

                    const dayTasks = getTasksForDate(date)
                    const today = isToday(date)

                    return (
                        <div
                            key={date.toISOString()}
                            onClick={() => onDateClick(date)}
                            className={cn(
                                "min-h-[100px] p-1 rounded border border-border/30 cursor-pointer transition-colors hover:bg-secondary/50",
                                today && "ring-2 ring-primary bg-primary/5"
                            )}
                        >
                            <div className={cn("text-sm font-medium mb-1 px-1", today ? "text-primary" : "text-foreground")}>
                                {date.getDate()}
                            </div>
                            <div className="space-y-1">
                                {dayTasks.slice(0, 3).map((task) => (
                                    <div
                                        key={task.id}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            onTaskClick(task)
                                        }}
                                        className={cn(
                                            "text-[10px] px-1 py-0.5 rounded truncate cursor-pointer hover:opacity-80 text-white",
                                            PRIORITY_CONFIG[task.priority].color
                                        )}
                                        title={task.title}
                                    >
                                        {task.title}
                                    </div>
                                ))}
                                {dayTasks.length > 3 && (
                                    <div className="text-[10px] text-muted-foreground px-1">+{dayTasks.length - 3} more</div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
