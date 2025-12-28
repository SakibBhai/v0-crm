"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    Calendar,
    ChevronLeft,
    ChevronRight,
    Plus,
    Clock,
    Edit,
    Trash2,
    Image,
    Video,
    Link2,
    CheckCircle,
    AlertCircle,
    Send,
} from "lucide-react"

// Platform icons (using text for simplicity)
const platformConfig = {
    facebook: { name: "Facebook", color: "bg-blue-600", abbr: "FB" },
    instagram: { name: "Instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500", abbr: "IG" },
    twitter: { name: "Twitter/X", color: "bg-black", abbr: "X" },
    linkedin: { name: "LinkedIn", color: "bg-blue-700", abbr: "LI" },
    tiktok: { name: "TikTok", color: "bg-gray-900", abbr: "TT" },
}

const statusConfig = {
    draft: { label: "Draft", color: "bg-muted text-muted-foreground" },
    scheduled: { label: "Scheduled", color: "bg-blue-500/20 text-blue-400" },
    published: { label: "Published", color: "bg-green-500/20 text-green-400" },
    failed: { label: "Failed", color: "bg-red-500/20 text-red-400" },
}

// Sample content calendar data
const samplePosts = [
    {
        id: "1",
        title: "Product Launch Announcement",
        content: "Exciting news! Our new product line is launching next week...",
        platforms: ["facebook", "instagram", "twitter"],
        scheduledDate: "2024-12-26",
        scheduledTime: "10:00",
        status: "scheduled" as const,
        project: "TechMart Campaign",
        hasImage: true,
        hasVideo: false,
    },
    {
        id: "2",
        title: "Holiday Greetings",
        content: "Wishing everyone a wonderful holiday season!",
        platforms: ["facebook", "instagram", "linkedin"],
        scheduledDate: "2024-12-25",
        scheduledTime: "09:00",
        status: "published" as const,
        project: "GreenLife Organics",
        hasImage: true,
        hasVideo: false,
    },
    {
        id: "3",
        title: "Behind the Scenes",
        content: "Take a look at how we create our amazing products...",
        platforms: ["instagram", "tiktok"],
        scheduledDate: "2024-12-27",
        scheduledTime: "14:00",
        status: "draft" as const,
        project: "FoodieHub Social",
        hasImage: false,
        hasVideo: true,
    },
    {
        id: "4",
        title: "Customer Testimonial",
        content: "Hear what our customers have to say about us!",
        platforms: ["facebook", "linkedin"],
        scheduledDate: "2024-12-28",
        scheduledTime: "11:00",
        status: "scheduled" as const,
        project: "LuxStay Hotels",
        hasImage: true,
        hasVideo: true,
    },
    {
        id: "5",
        title: "New Year Promo",
        content: "Start 2025 with exclusive discounts!",
        platforms: ["facebook", "instagram", "twitter", "linkedin"],
        scheduledDate: "2024-12-31",
        scheduledTime: "12:00",
        status: "scheduled" as const,
        project: "TechMart Campaign",
        hasImage: true,
        hasVideo: false,
    },
]

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

export default function ContentCalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 1)) // December 2024
    const [posts, setPosts] = useState(samplePosts)
    const [isAddPostOpen, setIsAddPostOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [viewMode, setViewMode] = useState<"month" | "week">("month")

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    // Get calendar days
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days: (number | null)[] = []

    for (let i = 0; i < firstDay; i++) days.push(null)
    for (let i = 1; i <= daysInMonth; i++) days.push(i)
    while (days.length % 7 !== 0) days.push(null)

    const navigateMonth = (delta: number) => {
        setCurrentDate(new Date(year, month + delta, 1))
    }

    const getPostsForDate = (day: number | null) => {
        if (!day) return []
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        return posts.filter(post => post.scheduledDate === dateStr)
    }

    const handleDateClick = (day: number | null) => {
        if (!day) return
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        setSelectedDate(dateStr)
        setIsAddPostOpen(true)
    }

    const stats = {
        scheduled: posts.filter(p => p.status === 'scheduled').length,
        published: posts.filter(p => p.status === 'published').length,
        draft: posts.filter(p => p.status === 'draft').length,
        thisMonth: posts.filter(p => p.scheduledDate.startsWith(`${year}-${String(month + 1).padStart(2, '0')}`)).length,
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Content Calendar</h1>
                        <p className="text-muted-foreground mt-1">Schedule and manage social media posts</p>
                    </div>
                    <div className="flex gap-2">
                        <Select value={viewMode} onValueChange={(v) => setViewMode(v as "month" | "week")}>
                            <SelectTrigger className="w-28">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="month">Month</SelectItem>
                                <SelectItem value="week">Week</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="gap-2" onClick={() => setIsAddPostOpen(true)}>
                            <Plus className="w-4 h-4" />
                            Schedule Post
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <AnimatedCard className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Scheduled</p>
                                <p className="text-2xl font-bold text-blue-400">{stats.scheduled}</p>
                            </div>
                            <Clock className="w-8 h-8 text-blue-400/50" />
                        </div>
                    </AnimatedCard>
                    <AnimatedCard className="p-4" delay={50}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Published</p>
                                <p className="text-2xl font-bold text-green-400">{stats.published}</p>
                            </div>
                            <CheckCircle className="w-8 h-8 text-green-400/50" />
                        </div>
                    </AnimatedCard>
                    <AnimatedCard className="p-4" delay={100}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Drafts</p>
                                <p className="text-2xl font-bold text-muted-foreground">{stats.draft}</p>
                            </div>
                            <Edit className="w-8 h-8 text-muted-foreground/50" />
                        </div>
                    </AnimatedCard>
                    <AnimatedCard className="p-4" delay={150}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">This Month</p>
                                <p className="text-2xl font-bold text-primary">{stats.thisMonth}</p>
                            </div>
                            <Calendar className="w-8 h-8 text-primary/50" />
                        </div>
                    </AnimatedCard>
                </div>

                {/* Calendar */}
                <AnimatedCard className="p-6" delay={200}>
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold">
                            {monthNames[month]} {year}
                        </h2>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" onClick={() => navigateMonth(-1)}>
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" onClick={() => setCurrentDate(new Date())}>
                                Today
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => navigateMonth(1)}>
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-px bg-border rounded-lg overflow-hidden">
                        {/* Day Headers */}
                        {daysOfWeek.map(day => (
                            <div key={day} className="bg-secondary p-2 text-center text-sm font-medium text-muted-foreground">
                                {day}
                            </div>
                        ))}

                        {/* Calendar Days */}
                        {days.map((day, index) => {
                            const dayPosts = getPostsForDate(day)
                            const isToday = day === new Date().getDate() &&
                                month === new Date().getMonth() &&
                                year === new Date().getFullYear()

                            return (
                                <div
                                    key={index}
                                    className={`bg-card min-h-[100px] p-2 transition-colors cursor-pointer hover:bg-secondary/50 ${!day ? 'bg-secondary/30' : ''
                                        } ${isToday ? 'ring-2 ring-primary ring-inset' : ''}`}
                                    onClick={() => handleDateClick(day)}
                                >
                                    {day && (
                                        <>
                                            <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : ''}`}>
                                                {day}
                                            </div>
                                            <div className="space-y-1">
                                                {dayPosts.slice(0, 2).map(post => (
                                                    <div
                                                        key={post.id}
                                                        className={`text-xs p-1 rounded truncate ${statusConfig[post.status].color}`}
                                                        title={post.title}
                                                    >
                                                        <div className="flex items-center gap-1">
                                                            {post.platforms.slice(0, 2).map(p => (
                                                                <span key={p} className={`w-3 h-3 rounded-sm ${platformConfig[p as keyof typeof platformConfig].color} text-[8px] text-white flex items-center justify-center`}>
                                                                    {platformConfig[p as keyof typeof platformConfig].abbr[0]}
                                                                </span>
                                                            ))}
                                                            <span className="truncate">{post.title}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                                {dayPosts.length > 2 && (
                                                    <div className="text-xs text-muted-foreground">
                                                        +{dayPosts.length - 2} more
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </AnimatedCard>

                {/* Upcoming Posts */}
                <AnimatedCard delay={250}>
                    <CardHeader>
                        <CardTitle>Upcoming Posts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {posts
                            .filter(p => p.status === 'scheduled')
                            .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())
                            .slice(0, 5)
                            .map(post => (
                                <div key={post.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-1">
                                            {post.platforms.map(p => (
                                                <div key={p} className={`w-6 h-6 rounded-full ${platformConfig[p as keyof typeof platformConfig].color} text-white text-xs flex items-center justify-center ring-2 ring-background`}>
                                                    {platformConfig[p as keyof typeof platformConfig].abbr[0]}
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">{post.title}</p>
                                            <p className="text-xs text-muted-foreground">{post.project}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-sm">{new Date(post.scheduledDate).toLocaleDateString()}</p>
                                            <p className="text-xs text-muted-foreground">{post.scheduledTime}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {post.hasImage && <Image className="w-4 h-4 text-muted-foreground" />}
                                            {post.hasVideo && <Video className="w-4 h-4 text-muted-foreground" />}
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                    </CardContent>
                </AnimatedCard>

                {/* Schedule Post Dialog */}
                <Dialog open={isAddPostOpen} onOpenChange={setIsAddPostOpen}>
                    <DialogContent className="sm:max-w-[550px]">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                Schedule Post
                            </DialogTitle>
                            <DialogDescription>Create and schedule a social media post</DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label>Post Title</Label>
                                <Input placeholder="Enter post title..." />
                            </div>

                            <div className="space-y-2">
                                <Label>Content</Label>
                                <Textarea placeholder="Write your post content..." rows={4} />
                            </div>

                            <div className="space-y-2">
                                <Label>Platforms</Label>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(platformConfig).map(([key, config]) => (
                                        <Badge
                                            key={key}
                                            variant="outline"
                                            className={`cursor-pointer hover:${config.color} hover:text-white transition-colors`}
                                        >
                                            {config.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Date</Label>
                                    <Input type="date" defaultValue={selectedDate || new Date().toISOString().split('T')[0]} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Time</Label>
                                    <Input type="time" defaultValue="10:00" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Project</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select project" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="techmart">TechMart Campaign</SelectItem>
                                        <SelectItem value="greenlife">GreenLife Organics</SelectItem>
                                        <SelectItem value="foodiehub">FoodieHub Social</SelectItem>
                                        <SelectItem value="luxstay">LuxStay Hotels</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button type="button" variant="outline" className="gap-2">
                                    <Image className="w-4 h-4" />
                                    Add Image
                                </Button>
                                <Button type="button" variant="outline" className="gap-2">
                                    <Video className="w-4 h-4" />
                                    Add Video
                                </Button>
                                <Button type="button" variant="outline" className="gap-2">
                                    <Link2 className="w-4 h-4" />
                                    Add Link
                                </Button>
                            </div>

                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsAddPostOpen(false)}>
                                    Save as Draft
                                </Button>
                                <Button type="submit" className="gap-2">
                                    <Send className="w-4 h-4" />
                                    Schedule Post
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </DashboardLayout>
    )
}
