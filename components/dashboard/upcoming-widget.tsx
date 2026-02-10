"use client"

import { useState, useMemo } from "react"
import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import {
    Calendar,
    Clock,
    Users,
    MapPin,
    Video,
    Phone,
    CheckCircle2,
    Circle,
    ChevronLeft,
    ChevronRight,
    CalendarDays,
    ListTodo,
    Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Types for events
export type EventType = "task" | "meeting" | "deadline" | "reminder"

export interface UpcomingEvent {
    id: string
    title: string
    type: EventType
    date: Date
    time?: string
    duration?: string
    description?: string
    location?: string
    isOnline?: boolean
    meetingLink?: string
    attendees?: { name: string; initials: string }[]
    priority?: "low" | "medium" | "high" | "critical"
    status?: "pending" | "completed" | "in-progress"
    project?: string
    tags?: string[]
}

// Default events data with current date
const getDefaultEvents = (): UpcomingEvent[] => {
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()
    const currentDay = today.getDate()

    return [
        {
            id: "1",
            title: "Client Strategy Call",
            type: "meeting",
            date: new Date(currentYear, currentMonth, currentDay),
            time: "10:00 AM",
            duration: "1 hour",
            description: "Quarterly review meeting with TechStart Inc. to discuss marketing strategy and campaign performance.",
            isOnline: true,
            meetingLink: "https://meet.google.com/abc-defg-hij",
            attendees: [
                { name: "Sarah Mitchell", initials: "SM" },
                { name: "James Wilson", initials: "JW" },
            ],
            priority: "high",
        },
        {
            id: "2",
            title: "Team Review",
            type: "meeting",
            date: new Date(currentYear, currentMonth, currentDay),
            time: "2:00 PM",
            duration: "30 mins",
            description: "Weekly team sync to discuss project progress and blockers.",
            isOnline: true,
            meetingLink: "https://zoom.us/j/123456789",
            attendees: [
                { name: "Emily Chen", initials: "EC" },
                { name: "Michael Brown", initials: "MB" },
                { name: "Alex Kim", initials: "AK" },
            ],
            priority: "medium",
        },
        {
            id: "3",
            title: "Finalize Website Mockups",
            type: "task",
            date: new Date(currentYear, currentMonth, currentDay + 1),
            time: "EOD",
            description: "Complete the final mockups for the e-commerce redesign project. Need to include mobile responsive views.",
            priority: "high",
            status: "in-progress",
            project: "E-commerce Redesign",
            tags: ["Design", "High Priority"],
        },
        {
            id: "4",
            title: "Project Kickoff - GreenLife",
            type: "meeting",
            date: new Date(currentYear, currentMonth, currentDay + 1),
            time: "11:00 AM",
            duration: "1.5 hours",
            description: "Kickoff meeting for the new SEO campaign with GreenLife team.",
            location: "Conference Room A",
            isOnline: false,
            attendees: [
                { name: "David Lee", initials: "DL" },
                { name: "Jessica Wang", initials: "JW" },
            ],
            priority: "high",
        },
        {
            id: "5",
            title: "Submit Proposal",
            type: "deadline",
            date: new Date(currentYear, currentMonth, currentDay + 3),
            time: "5:00 PM",
            description: "Final deadline for submitting the marketing proposal to AutoDeal.",
            priority: "critical",
            status: "pending",
            project: "AutoDeal Campaign",
        },
        {
            id: "6",
            title: "Performance Review",
            type: "meeting",
            date: new Date(currentYear, currentMonth, currentDay + 4),
            time: "3:00 PM",
            duration: "45 mins",
            description: "Monthly performance review and goal setting session.",
            isOnline: true,
            meetingLink: "https://meet.google.com/xyz-uvwx-yz",
            attendees: [
                { name: "HR Manager", initials: "HR" },
            ],
            priority: "medium",
        },
        {
            id: "7",
            title: "Content Calendar Review",
            type: "task",
            date: new Date(currentYear, currentMonth, currentDay + 5),
            description: "Review and approve the content calendar for next month.",
            priority: "medium",
            status: "pending",
            project: "Content Strategy",
            tags: ["Content", "Planning"],
        },
        {
            id: "8",
            title: "Invoice Payment Reminder",
            type: "reminder",
            date: new Date(currentYear, currentMonth, currentDay + 6),
            description: "Follow up on pending invoice #2024-015 from ScaleUp Ltd.",
            priority: "high",
            status: "pending",
        },
    ]
}

const eventTypeConfig: Record<EventType, { icon: React.ElementType; color: string; bgColor: string; label: string }> = {
    task: { icon: ListTodo, color: "text-blue-400", bgColor: "bg-blue-500/20", label: "Task" },
    meeting: { icon: Video, color: "text-purple-400", bgColor: "bg-purple-500/20", label: "Meeting" },
    deadline: { icon: Clock, color: "text-red-400", bgColor: "bg-red-500/20", label: "Deadline" },
    reminder: { icon: Sparkles, color: "text-amber-400", bgColor: "bg-amber-500/20", label: "Reminder" },
}

const priorityConfig = {
    low: { color: "bg-slate-500/20 text-slate-400 border-slate-500/50" },
    medium: { color: "bg-blue-500/20 text-blue-400 border-blue-500/50" },
    high: { color: "bg-orange-500/20 text-orange-400 border-orange-500/50" },
    critical: { color: "bg-red-500/20 text-red-400 border-red-500/50" },
}

interface UpcomingWidgetProps {
    events?: UpcomingEvent[]
    delay?: number
}

export function UpcomingWidget({ events: propEvents, delay = 0 }: UpcomingWidgetProps) {
    const events = propEvents || getDefaultEvents()
    const today = new Date()

    const [currentDate, setCurrentDate] = useState(today)
    const [selectedDate, setSelectedDate] = useState<Date>(today)
    const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // Get calendar data for current month
    const calendarData = useMemo(() => {
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDay = firstDay.getDay()

        return {
            year,
            month,
            daysInMonth,
            startingDay,
            monthName: currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
        }
    }, [currentDate])

    // Get events for a specific date
    const getEventsForDate = (date: Date) => {
        return events.filter((event) => {
            const eventDate = new Date(event.date)
            return (
                eventDate.getDate() === date.getDate() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getFullYear() === date.getFullYear()
            )
        })
    }

    // Selected date events
    const selectedDateEvents = useMemo(() => {
        return getEventsForDate(selectedDate)
    }, [selectedDate, events])

    // Navigate months
    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    const goToToday = () => {
        setCurrentDate(today)
        setSelectedDate(today)
    }

    // Check if date is today
    const isToday = (date: Date) => {
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        )
    }

    const handleEventClick = (event: UpcomingEvent) => {
        setSelectedEvent(event)
        setIsDialogOpen(true)
    }

    const formatEventDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    return (
        <>
            <AnimatedCard delay={delay} className="overflow-hidden">
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-medium flex items-center gap-2">
                            <CalendarDays className="w-4 h-4 text-primary" />
                            Upcoming
                        </CardTitle>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={goToToday}
                            className="text-xs text-primary hover:text-primary/80 h-7 px-2"
                        >
                            Today
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goToPreviousMonth}
                            className="h-7 w-7 hover:bg-secondary"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <span className="text-sm font-medium text-foreground">
                            {calendarData.monthName}
                        </span>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goToNextMonth}
                            className="h-7 w-7 hover:bg-secondary"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="space-y-2">
                        <div className="grid grid-cols-7 gap-1 text-center text-xs">
                            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                                <div key={index} className="font-semibold text-muted-foreground py-1">
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {/* Empty cells for days before the first of the month */}
                            {Array.from({ length: calendarData.startingDay }).map((_, i) => (
                                <div key={`empty-${i}`} className="aspect-square" />
                            ))}
                            {/* Days of the month */}
                            {Array.from({ length: calendarData.daysInMonth }).map((_, i) => {
                                const date = new Date(calendarData.year, calendarData.month, i + 1)
                                const dayEvents = getEventsForDate(date)
                                const hasEvents = dayEvents.length > 0
                                const isTodayDate = isToday(date)
                                const isSelected =
                                    selectedDate.getDate() === date.getDate() &&
                                    selectedDate.getMonth() === date.getMonth() &&
                                    selectedDate.getFullYear() === date.getFullYear()

                                return (
                                    <button
                                        key={i + 1}
                                        onClick={() => setSelectedDate(date)}
                                        className={cn(
                                            "aspect-square rounded-lg text-xs font-medium transition-all relative flex items-center justify-center",
                                            "hover:bg-secondary/80 hover:scale-105",
                                            isSelected && "bg-primary text-primary-foreground shadow-lg shadow-primary/30",
                                            !isSelected && isTodayDate && "ring-2 ring-primary/50 bg-primary/10",
                                            !isSelected && hasEvents && "bg-secondary/50 border border-primary/30",
                                            !isSelected && !hasEvents && "text-muted-foreground"
                                        )}
                                    >
                                        {i + 1}
                                        {hasEvents && !isSelected && (
                                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                                        )}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Selected Date Events */}
                    <div className="border-t border-border pt-3 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-muted-foreground">
                                {selectedDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                            </span>
                            {selectedDateEvents.length > 0 && (
                                <Badge variant="secondary" className="text-[10px] h-5">
                                    {selectedDateEvents.length} event{selectedDateEvents.length > 1 ? "s" : ""}
                                </Badge>
                            )}
                        </div>

                        <div className="space-y-2 max-h-[160px] overflow-y-auto">
                            {selectedDateEvents.length > 0 ? (
                                selectedDateEvents.map((event) => {
                                    const config = eventTypeConfig[event.type]
                                    const EventIcon = config.icon
                                    return (
                                        <button
                                            key={event.id}
                                            onClick={() => handleEventClick(event)}
                                            className={cn(
                                                "w-full text-left p-2.5 rounded-lg transition-all group",
                                                "bg-gradient-to-r from-secondary/50 to-secondary/30",
                                                "border-l-2 border-primary hover:border-l-4",
                                                "hover:from-secondary/80 hover:to-secondary/50",
                                                "hover:shadow-md hover:shadow-primary/10"
                                            )}
                                        >
                                            <div className="flex items-start gap-2">
                                                <div className={cn("p-1.5 rounded-md", config.bgColor)}>
                                                    <EventIcon className={cn("w-3 h-3", config.color)} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-medium truncate group-hover:text-primary transition-colors">
                                                        {event.title}
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        {event.time && (
                                                            <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                                                                <Clock className="w-2.5 h-2.5" />
                                                                {event.time}
                                                            </span>
                                                        )}
                                                        <Badge variant="outline" className={cn("text-[9px] h-4 px-1.5", priorityConfig[event.priority || "medium"].color)}>
                                                            {event.priority}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })
                            ) : (
                                <div className="text-center py-4">
                                    <Calendar className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2" />
                                    <p className="text-xs text-muted-foreground">No events scheduled</p>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </AnimatedCard>

            {/* Event Detail Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    {selectedEvent && (
                        <>
                            <DialogHeader>
                                <div className="flex items-center gap-3">
                                    <div className={cn("p-2.5 rounded-lg", eventTypeConfig[selectedEvent.type].bgColor)}>
                                        {(() => {
                                            const EventIcon = eventTypeConfig[selectedEvent.type].icon
                                            return <EventIcon className={cn("w-5 h-5", eventTypeConfig[selectedEvent.type].color)} />
                                        })()}
                                    </div>
                                    <div>
                                        <DialogTitle className="text-lg">{selectedEvent.title}</DialogTitle>
                                        <DialogDescription className="flex items-center gap-2 mt-1">
                                            <Badge variant="outline" className="text-xs">
                                                {eventTypeConfig[selectedEvent.type].label}
                                            </Badge>
                                            {selectedEvent.priority && (
                                                <Badge variant="outline" className={cn("text-xs", priorityConfig[selectedEvent.priority].color)}>
                                                    {selectedEvent.priority}
                                                </Badge>
                                            )}
                                        </DialogDescription>
                                    </div>
                                </div>
                            </DialogHeader>

                            <div className="space-y-4 mt-4">
                                {/* Date & Time */}
                                <div className="flex items-center gap-3 text-sm">
                                    <Calendar className="w-4 h-4 text-muted-foreground" />
                                    <div>
                                        <p className="font-medium">{formatEventDate(new Date(selectedEvent.date))}</p>
                                        {selectedEvent.time && (
                                            <p className="text-muted-foreground text-xs">
                                                {selectedEvent.time}
                                                {selectedEvent.duration && ` • ${selectedEvent.duration}`}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                {selectedEvent.description && (
                                    <div className="p-3 rounded-lg bg-secondary/50">
                                        <p className="text-sm text-muted-foreground">{selectedEvent.description}</p>
                                    </div>
                                )}

                                {/* Location / Meeting Link */}
                                {(selectedEvent.location || selectedEvent.meetingLink) && (
                                    <div className="flex items-center gap-3 text-sm">
                                        {selectedEvent.isOnline ? (
                                            <Video className="w-4 h-4 text-muted-foreground" />
                                        ) : (
                                            <MapPin className="w-4 h-4 text-muted-foreground" />
                                        )}
                                        <div>
                                            {selectedEvent.location && <p className="font-medium">{selectedEvent.location}</p>}
                                            {selectedEvent.meetingLink && (
                                                <a
                                                    href={selectedEvent.meetingLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:underline text-xs"
                                                >
                                                    Join Meeting
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Project */}
                                {selectedEvent.project && (
                                    <div className="flex items-center gap-3 text-sm">
                                        <ListTodo className="w-4 h-4 text-muted-foreground" />
                                        <p className="font-medium">{selectedEvent.project}</p>
                                    </div>
                                )}

                                {/* Attendees */}
                                {selectedEvent.attendees && selectedEvent.attendees.length > 0 && (
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Users className="w-4 h-4 text-muted-foreground" />
                                            <span className="font-medium">Attendees</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedEvent.attendees.map((attendee, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-xs"
                                                >
                                                    <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-medium">
                                                        {attendee.initials}
                                                    </div>
                                                    <span>{attendee.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tags */}
                                {selectedEvent.tags && selectedEvent.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {selectedEvent.tags.map((tag, idx) => (
                                            <Badge key={idx} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                )}

                                {/* Status */}
                                {selectedEvent.status && (
                                    <div className="flex items-center gap-2 pt-2 border-t border-border">
                                        {selectedEvent.status === "completed" ? (
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <Circle className="w-4 h-4 text-muted-foreground" />
                                        )}
                                        <span className="text-sm capitalize">{selectedEvent.status.replace("-", " ")}</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                                {selectedEvent.type === "meeting" && selectedEvent.meetingLink && (
                                    <Button asChild className="flex-1">
                                        <a href={selectedEvent.meetingLink} target="_blank" rel="noopener noreferrer">
                                            <Video className="w-4 h-4 mr-2" />
                                            Join Meeting
                                        </a>
                                    </Button>
                                )}
                                {selectedEvent.type === "task" && (
                                    <Button variant="outline" className="flex-1">
                                        <CheckCircle2 className="w-4 h-4 mr-2" />
                                        Mark Complete
                                    </Button>
                                )}
                                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                    Close
                                </Button>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}
