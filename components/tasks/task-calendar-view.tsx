"use client"

import { useState } from "react"
import type { Task } from "@/lib/types/task"
import { PRIORITY_CONFIG } from "@/lib/types/task"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react"
import { cn } from "@/lib/utils"

interface TaskCalendarViewProps {
    tasks: Task[]
    onTaskClick: (task: Task) => void
    onDateClick: (date: Date) => void
}

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

// Generate years from 2020 to current year + 5
const currentYear = new Date().getFullYear()
const YEARS = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i)

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

    const handleMonthChange = (month: string) => {
        const monthIndex = MONTHS.indexOf(month)
        setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1))
    }

    const handleYearChange = (year: string) => {
        setCurrentDate(new Date(parseInt(year), currentDate.getMonth(), 1))
    }

    const goToToday = () => {
        setCurrentDate(new Date())
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

    return (
        <div className="bg-card rounded-xl border border-border p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Month Selector */}
                    <Select value={MONTHS[currentDate.getMonth()]} onValueChange={handleMonthChange}>
                        <SelectTrigger className="w-[130px] h-9 bg-secondary/50 border-border/50">
                            <CalendarDays className="w-4 h-4 mr-2 text-primary" />
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {MONTHS.map((month) => (
                                <SelectItem key={month} value={month}>
                                    {month}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Year Selector */}
                    <Select value={currentDate.getFullYear().toString()} onValueChange={handleYearChange}>
                        <SelectTrigger className="w-[90px] h-9 bg-secondary/50 border-border/50">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {YEARS.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-1 ml-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
                            onClick={() => navigateMonth(-1)}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-9 px-4 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all font-medium"
                            onClick={goToToday}
                        >
                            Today
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
                            onClick={() => navigateMonth(1)}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-secondary/50 rounded-lg p-1 border border-border/30">
                    <button
                        onClick={() => setViewMode("month")}
                        className={cn(
                            "px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
                            viewMode === "month"
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        )}
                    >
                        Month
                    </button>
                    <button
                        onClick={() => setViewMode("week")}
                        className={cn(
                            "px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
                            viewMode === "week"
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        )}
                    >
                        Week
                    </button>
                </div>
            </div>

            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day, index) => (
                    <div
                        key={day}
                        className={cn(
                            "text-center text-xs font-semibold py-3 rounded-lg",
                            index === 0 || index === 6
                                ? "text-primary/70 bg-primary/5"
                                : "text-muted-foreground bg-secondary/30"
                        )}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
                {days.map((date, index) => {
                    if (!date) {
                        return <div key={`empty-${index}`} className="min-h-[100px] bg-secondary/10 rounded-lg" />
                    }

                    const dayTasks = getTasksForDate(date)
                    const today = isToday(date)
                    const isWeekend = date.getDay() === 0 || date.getDay() === 6

                    return (
                        <div
                            key={date.toISOString()}
                            onClick={() => onDateClick(date)}
                            className={cn(
                                "min-h-[100px] p-2 rounded-lg border cursor-pointer transition-all duration-200",
                                "hover:bg-primary/5 hover:border-primary/40 hover:shadow-md",
                                today
                                    ? "ring-2 ring-primary bg-primary/10 border-primary/30"
                                    : "border-border/30 bg-card",
                                isWeekend && !today && "bg-secondary/20"
                            )}
                        >
                            <div className={cn(
                                "text-sm font-semibold mb-1.5 w-7 h-7 flex items-center justify-center rounded-full transition-colors",
                                today
                                    ? "bg-primary text-primary-foreground"
                                    : isWeekend
                                        ? "text-primary/70"
                                        : "text-foreground"
                            )}>
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
                                            "flex items-center gap-1 text-[10px] px-1.5 py-1 rounded cursor-pointer transition-all",
                                            "hover:opacity-90 hover:scale-[1.02] text-white font-medium shadow-sm",
                                            PRIORITY_CONFIG[task.priority].color
                                        )}
                                        title={`${task.title} - Assigned to: ${task.assignees.map(a => a.name).join(', ')}`}
                                    >
                                        <span className="truncate flex-1">{task.title}</span>
                                        {task.assignees.length > 0 && (
                                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-white/30 text-[8px] flex items-center justify-center font-bold">
                                                {task.assignees[0].initials}
                                            </span>
                                        )}
                                    </div>
                                ))}
                                {dayTasks.length > 3 && (
                                    <div className="text-[10px] text-primary font-medium px-1">
                                        +{dayTasks.length - 3} more
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-border/30">
                <span className="text-xs text-muted-foreground">Priority:</span>
                <div className="flex items-center gap-3">
                    {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
                        <div key={key} className="flex items-center gap-1.5">
                            <div className={cn("w-2.5 h-2.5 rounded-full", config.color)} />
                            <span className="text-xs text-muted-foreground capitalize">{key}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

