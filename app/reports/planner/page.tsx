"use client"

import type React from "react"
import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import {
    ArrowLeft,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Plus,
    Target,
    CheckCircle,
    Clock,
    Users,
    FileText,
    Star,
    TrendingUp,
    AlertCircle,
    Lightbulb,
    Flag,
    Edit,
    Trash2,
    MoreHorizontal,
    CalendarDays,
    ListTodo,
    Layout,
} from "lucide-react"
import Link from "next/link"

// Types
interface CalendarEvent {
    id: string
    title: string
    type: "campaign" | "content" | "meeting" | "deadline" | "milestone"
    date: string
    client?: string
    color: string
}

interface DailyGoal {
    id: string
    title: string
    target: number
    current: number
    unit: string
    category: string
}

interface MonthlyKickoff {
    previousWins: string[]
    keyLearnings: string[]
    upcomingInitiatives: string[]
}

// Sample calendar events for December 2024
const calendarEvents: CalendarEvent[] = [
    { id: "1", title: "Q4 SEO Report Due", type: "deadline", date: "2024-12-02", client: "TechMart", color: "bg-destructive" },
    { id: "2", title: "Holiday Campaign Launch", type: "campaign", date: "2024-12-05", client: "GreenLife", color: "bg-primary" },
    { id: "3", title: "Blog Post: Year Review", type: "content", date: "2024-12-08", color: "bg-chart-4" },
    { id: "4", title: "Client Strategy Meeting", type: "meeting", date: "2024-12-10", client: "FoodieHub", color: "bg-warning" },
    { id: "5", title: "PPC Campaign Milestone", type: "milestone", date: "2024-12-12", client: "AutoDeal", color: "bg-success" },
    { id: "6", title: "Social Media Audit", type: "deadline", date: "2024-12-15", color: "bg-destructive" },
    { id: "7", title: "Content Calendar Due", type: "content", date: "2024-12-18", color: "bg-chart-4" },
    { id: "8", title: "Monthly Review Meeting", type: "meeting", date: "2024-12-20", color: "bg-warning" },
    { id: "9", title: "Year-End Campaign", type: "campaign", date: "2024-12-22", client: "LuxStay", color: "bg-primary" },
    { id: "10", title: "Q4 Final Report", type: "deadline", date: "2024-12-28", color: "bg-destructive" },
]

// Daily goals/targets
const initialDailyGoals: DailyGoal[] = [
    { id: "1", title: "Client Prospect Touchpoints", target: 5, current: 3, unit: "contacts", category: "Sales" },
    { id: "2", title: "Proposals Submitted", target: 2, current: 1, unit: "proposals", category: "Sales" },
    { id: "3", title: "Ad Creatives Approved", target: 3, current: 2, unit: "creatives", category: "Creative" },
    { id: "4", title: "Blog Posts Published", target: 1, current: 0, unit: "posts", category: "Content" },
    { id: "5", title: "Client Calls Completed", target: 4, current: 4, unit: "calls", category: "Support" },
]

// Monthly kickoff template
const initialKickoff: MonthlyKickoff = {
    previousWins: [
        "Increased organic traffic by 35% for TechMart",
        "Launched successful holiday PPC campaign with 4.2x ROAS",
        "Onboarded 3 new enterprise clients",
    ],
    keyLearnings: [
        "Video content outperforms static images by 2.5x on social",
        "Email open rates peak on Tuesday mornings",
        "Long-form content generates more backlinks",
    ],
    upcomingInitiatives: [
        "Launch AI-powered content optimization tool",
        "Expand social media management services",
        "Develop new client reporting dashboard",
    ],
}

// Event type config
const eventTypeConfig = {
    campaign: { label: "Campaign", icon: Target, color: "bg-primary/20 text-primary" },
    content: { label: "Content", icon: FileText, color: "bg-chart-4/20 text-chart-4" },
    meeting: { label: "Meeting", icon: Users, color: "bg-warning/20 text-warning" },
    deadline: { label: "Deadline", icon: Clock, color: "bg-destructive/20 text-destructive" },
    milestone: { label: "Milestone", icon: Flag, color: "bg-success/20 text-success" },
}

export default function MonthlyPlannerPage() {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 1)) // December 2024
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [dailyGoals, setDailyGoals] = useState<DailyGoal[]>(initialDailyGoals)
    const [kickoff, setKickoff] = useState<MonthlyKickoff>(initialKickoff)
    const [isAddEventOpen, setIsAddEventOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("calendar")

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDay = firstDay.getDay()

        const days: (number | null)[] = []
        for (let i = 0; i < startingDay; i++) {
            days.push(null)
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i)
        }
        return days
    }

    const getEventsForDate = (day: number) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        return calendarEvents.filter(event => event.date === dateStr)
    }

    const navigateMonth = (direction: 'prev' | 'next') => {
        setCurrentDate(prev => {
            const newDate = new Date(prev)
            newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1))
            return newDate
        })
    }

    const updateGoalProgress = (goalId: string, increment: boolean) => {
        setDailyGoals(prev => prev.map(goal => {
            if (goal.id === goalId) {
                const newCurrent = increment
                    ? Math.min(goal.current + 1, goal.target)
                    : Math.max(goal.current - 1, 0)
                return { ...goal, current: newCurrent }
            }
            return goal
        }))
    }

    const days = getDaysInMonth(currentDate)
    const today = new Date()
    const isToday = (day: number) => {
        return today.getDate() === day &&
            today.getMonth() === currentDate.getMonth() &&
            today.getFullYear() === currentDate.getFullYear()
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up">
                    <div className="flex items-center gap-4">
                        <Link href="/reports" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold">Strategic Monthly Planner</h1>
                            <p className="text-muted-foreground">Plan campaigns, set goals, and prepare client strategies</p>
                        </div>
                    </div>
                    <Button className="gap-2" onClick={() => setIsAddEventOpen(true)}>
                        <Plus className="w-4 h-4" />
                        Add Event
                    </Button>
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-in-up">
                    <TabsList className="bg-secondary">
                        <TabsTrigger value="calendar" className="gap-1.5">
                            <CalendarDays className="w-4 h-4" />
                            <span className="hidden sm:inline">Campaign Calendar</span>
                            <span className="sm:hidden">Calendar</span>
                        </TabsTrigger>
                        <TabsTrigger value="goals" className="gap-1.5">
                            <Target className="w-4 h-4" />
                            <span className="hidden sm:inline">Daily Targets</span>
                            <span className="sm:hidden">Goals</span>
                        </TabsTrigger>
                        <TabsTrigger value="kickoff" className="gap-1.5">
                            <Layout className="w-4 h-4" />
                            <span className="hidden sm:inline">Monthly Kickoff</span>
                            <span className="sm:hidden">Kickoff</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* Calendar Tab */}
                    <TabsContent value="calendar" className="mt-6">
                        <AnimatedCard className="p-6">
                            {/* Calendar Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <Button variant="outline" size="icon" onClick={() => navigateMonth('prev')}>
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <h2 className="text-xl font-bold">
                                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                                    </h2>
                                    <Button variant="outline" size="icon" onClick={() => navigateMonth('next')}>
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="flex gap-2">
                                    {Object.entries(eventTypeConfig).map(([type, config]) => (
                                        <Badge key={type} variant="outline" className={`${config.color} border-0 text-xs`}>
                                            {config.label}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-1">
                                {/* Day Headers */}
                                {dayNames.map((day) => (
                                    <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                                        {day}
                                    </div>
                                ))}

                                {/* Calendar Days */}
                                {days.map((day, index) => {
                                    const events = day ? getEventsForDate(day) : []
                                    return (
                                        <div
                                            key={index}
                                            className={`min-h-24 p-2 border border-border/50 rounded-lg transition-colors ${day ? 'hover:bg-secondary/50 cursor-pointer' : 'bg-secondary/20'
                                                } ${isToday(day || 0) ? 'ring-2 ring-primary' : ''}`}
                                            onClick={() => day && setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                                        >
                                            {day && (
                                                <>
                                                    <span className={`text-sm font-medium ${isToday(day) ? 'text-primary' : ''}`}>
                                                        {day}
                                                    </span>
                                                    <div className="mt-1 space-y-1">
                                                        {events.slice(0, 2).map((event) => (
                                                            <div
                                                                key={event.id}
                                                                className={`text-xs p-1 rounded truncate ${event.color} text-white`}
                                                            >
                                                                {event.title}
                                                            </div>
                                                        ))}
                                                        {events.length > 2 && (
                                                            <span className="text-xs text-muted-foreground">
                                                                +{events.length - 2} more
                                                            </span>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </AnimatedCard>

                        {/* Upcoming Events Sidebar */}
                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <AnimatedCard className="lg:col-span-2 p-6">
                                <h3 className="font-semibold mb-4">Upcoming This Month</h3>
                                <div className="space-y-3">
                                    {calendarEvents.slice(0, 5).map((event) => {
                                        const config = eventTypeConfig[event.type]
                                        return (
                                            <div key={event.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                                                <div className={`p-2 rounded-lg ${config.color}`}>
                                                    <config.icon className="w-4 h-4" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-medium text-sm">{event.title}</p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                                        {event.client && ` • ${event.client}`}
                                                    </p>
                                                </div>
                                                <Badge className={`${config.color} border-0 text-xs`}>
                                                    {config.label}
                                                </Badge>
                                            </div>
                                        )
                                    })}
                                </div>
                            </AnimatedCard>

                            <AnimatedCard className="p-6">
                                <h3 className="font-semibold mb-4">Month Overview</h3>
                                <div className="space-y-4">
                                    {Object.entries(eventTypeConfig).map(([type, config]) => {
                                        const count = calendarEvents.filter(e => e.type === type).length
                                        return (
                                            <div key={type} className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className={`p-1.5 rounded ${config.color}`}>
                                                        <config.icon className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className="text-sm">{config.label}s</span>
                                                </div>
                                                <span className="font-semibold">{count}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </AnimatedCard>
                        </div>
                    </TabsContent>

                    {/* Daily Goals Tab */}
                    <TabsContent value="goals" className="mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <AnimatedCard className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="font-semibold text-lg">Today's Targets</h3>
                                        <p className="text-sm text-muted-foreground">Track your daily progress</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="gap-2">
                                        <Plus className="w-4 h-4" />
                                        Add Goal
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    {dailyGoals.map((goal) => {
                                        const progressPercent = Math.round((goal.current / goal.target) * 100)
                                        const isComplete = goal.current >= goal.target
                                        return (
                                            <div key={goal.id} className="p-4 rounded-lg bg-secondary/50">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        {isComplete ? (
                                                            <CheckCircle className="w-5 h-5 text-success" />
                                                        ) : (
                                                            <Target className="w-5 h-5 text-primary" />
                                                        )}
                                                        <div>
                                                            <p className="font-medium">{goal.title}</p>
                                                            <Badge variant="outline" className="text-xs mt-1">{goal.category}</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8"
                                                            onClick={() => updateGoalProgress(goal.id, false)}
                                                        >
                                                            <ChevronLeft className="w-4 h-4" />
                                                        </Button>
                                                        <span className={`font-bold ${isComplete ? 'text-success' : ''}`}>
                                                            {goal.current}/{goal.target}
                                                        </span>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8"
                                                            onClick={() => updateGoalProgress(goal.id, true)}
                                                            disabled={isComplete}
                                                        >
                                                            <ChevronRight className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <Progress
                                                    value={progressPercent}
                                                    className={`h-2 ${isComplete ? '[&>div]:bg-success' : ''}`}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </AnimatedCard>

                            <AnimatedCard className="p-6">
                                <h3 className="font-semibold text-lg mb-6">Monthly Target Summary</h3>
                                <div className="space-y-6">
                                    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/20 to-chart-4/20">
                                        <p className="text-sm text-muted-foreground mb-2">Overall Daily Completion</p>
                                        <p className="text-4xl font-bold text-primary">
                                            {Math.round(dailyGoals.reduce((acc, g) => acc + (g.current / g.target) * 100, 0) / dailyGoals.length)}%
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {dailyGoals.filter(g => g.current >= g.target).length}/{dailyGoals.length} goals completed
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-sm font-medium text-muted-foreground">By Category</h4>
                                        {["Sales", "Creative", "Content", "Support"].map((category) => {
                                            const categoryGoals = dailyGoals.filter(g => g.category === category)
                                            if (categoryGoals.length === 0) return null
                                            const avg = categoryGoals.reduce((acc, g) => acc + (g.current / g.target) * 100, 0) / categoryGoals.length
                                            return (
                                                <div key={category} className="flex items-center gap-3">
                                                    <span className="text-sm w-20">{category}</span>
                                                    <Progress value={avg} className="flex-1 h-2" />
                                                    <span className="text-sm font-medium w-12 text-right">{Math.round(avg)}%</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </AnimatedCard>
                        </div>
                    </TabsContent>

                    {/* Monthly Kickoff Tab */}
                    <TabsContent value="kickoff" className="mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Previous Month Wins */}
                            <AnimatedCard className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-lg bg-success/10">
                                        <Star className="w-5 h-5 text-success" />
                                    </div>
                                    <h3 className="font-semibold">Previous Month Wins</h3>
                                </div>
                                <div className="space-y-3">
                                    {kickoff.previousWins.map((win, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-success/5 border border-success/20">
                                            <CheckCircle className="w-4 h-4 text-success mt-0.5 shrink-0" />
                                            <p className="text-sm">{win}</p>
                                        </div>
                                    ))}
                                    <Button variant="ghost" size="sm" className="w-full gap-2 text-muted-foreground">
                                        <Plus className="w-4 h-4" />
                                        Add Win
                                    </Button>
                                </div>
                            </AnimatedCard>

                            {/* Key Learnings */}
                            <AnimatedCard className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-lg bg-warning/10">
                                        <Lightbulb className="w-5 h-5 text-warning" />
                                    </div>
                                    <h3 className="font-semibold">Key Learnings</h3>
                                </div>
                                <div className="space-y-3">
                                    {kickoff.keyLearnings.map((learning, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-warning/5 border border-warning/20">
                                            <AlertCircle className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                                            <p className="text-sm">{learning}</p>
                                        </div>
                                    ))}
                                    <Button variant="ghost" size="sm" className="w-full gap-2 text-muted-foreground">
                                        <Plus className="w-4 h-4" />
                                        Add Learning
                                    </Button>
                                </div>
                            </AnimatedCard>

                            {/* Upcoming Initiatives */}
                            <AnimatedCard className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold">Upcoming Initiatives</h3>
                                </div>
                                <div className="space-y-3">
                                    {kickoff.upcomingInitiatives.map((initiative, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                                            <Target className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                            <p className="text-sm">{initiative}</p>
                                        </div>
                                    ))}
                                    <Button variant="ghost" size="sm" className="w-full gap-2 text-muted-foreground">
                                        <Plus className="w-4 h-4" />
                                        Add Initiative
                                    </Button>
                                </div>
                            </AnimatedCard>
                        </div>

                        {/* Meeting Agenda Template */}
                        <AnimatedCard className="p-6 mt-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-chart-3/10">
                                        <FileText className="w-5 h-5 text-chart-3" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Monthly Strategy Kick-off Template</h3>
                                        <p className="text-sm text-muted-foreground">Prepare your client meeting agenda</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" className="gap-2">
                                        <Edit className="w-4 h-4" />
                                        Edit Template
                                    </Button>
                                    <Button className="gap-2">
                                        <FileText className="w-4 h-4" />
                                        Export PDF
                                    </Button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Client Name</Label>
                                        <Input placeholder="Enter client name..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Meeting Date</Label>
                                        <Input type="date" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Attendees</Label>
                                        <Textarea placeholder="List meeting attendees..." rows={3} />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Meeting Objectives</Label>
                                        <Textarea placeholder="Define key objectives for this meeting..." rows={3} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Discussion Topics</Label>
                                        <Textarea placeholder="List topics to cover..." rows={3} />
                                    </div>
                                </div>
                            </div>
                        </AnimatedCard>
                    </TabsContent>
                </Tabs>

                {/* Add Event Dialog */}
                <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle>Add Calendar Event</DialogTitle>
                            <DialogDescription>Create a new event for your campaign calendar</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Event Title</Label>
                                <Input placeholder="e.g., Q1 Campaign Launch" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Event Type</Label>
                                    <select className="w-full p-2 rounded-md border bg-background">
                                        {Object.entries(eventTypeConfig).map(([type, config]) => (
                                            <option key={type} value={type}>{config.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Date</Label>
                                    <Input type="date" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Client (Optional)</Label>
                                <Input placeholder="Associated client..." />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>Cancel</Button>
                            <Button onClick={() => setIsAddEventOpen(false)}>Add Event</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </DashboardLayout>
    )
}
