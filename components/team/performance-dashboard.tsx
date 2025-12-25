"use client"

import { useState } from "react"
import type { OKR, PerformanceReview, Employee } from "@/lib/types/hr"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Target,
    TrendingUp,
    Star,
    Calendar,
    ChevronRight,
    Plus,
    AlertTriangle,
    CheckCircle2,
    Users,
    Award,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface PerformanceDashboardProps {
    okrs: OKR[]
    reviews: PerformanceReview[]
    employees: Employee[]
    currentUserId: string
}

const OKR_STATUS_CONFIG = {
    "on-track": { label: "On Track", color: "text-green-500", bg: "bg-green-500/20" },
    "at-risk": { label: "At Risk", color: "text-yellow-500", bg: "bg-yellow-500/20" },
    "behind": { label: "Behind", color: "text-red-500", bg: "bg-red-500/20" },
    "completed": { label: "Completed", color: "text-blue-500", bg: "bg-blue-500/20" },
}

export function PerformanceDashboard({ okrs, reviews, employees, currentUserId }: PerformanceDashboardProps) {
    const [activeTab, setActiveTab] = useState("my-okrs")

    const myOkrs = okrs.filter(o => o.employeeId === currentUserId)
    const pendingReviews = reviews.filter(r => r.status === "scheduled")
    const myReviews = reviews.filter(r => r.employeeId === currentUserId)

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

    // Calculate team performance
    const avgPerformance = employees.reduce((sum, e) => sum + e.performanceRating, 0) / employees.length
    const highPerformers = employees.filter(e => e.performanceRating >= 4.5).length
    const needsAttention = employees.filter(e => e.performanceRating < 3.5).length

    return (
        <div className="space-y-6">
            {/* Team Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/20">
                                <TrendingUp className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{avgPerformance.toFixed(1)}</p>
                                <p className="text-xs text-muted-foreground">Avg. Performance</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-green-500/20">
                                <Star className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{highPerformers}</p>
                                <p className="text-xs text-muted-foreground">High Performers</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-yellow-500/20">
                                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{needsAttention}</p>
                                <p className="text-xs text-muted-foreground">Needs Attention</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                                <Calendar className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{pendingReviews.length}</p>
                                <p className="text-xs text-muted-foreground">Upcoming Reviews</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="my-okrs">My OKRs</TabsTrigger>
                    <TabsTrigger value="team-okrs">Team OKRs</TabsTrigger>
                    <TabsTrigger value="reviews">Performance Reviews</TabsTrigger>
                    <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                </TabsList>

                <TabsContent value="my-okrs" className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">My Objectives & Key Results</h3>
                        <Button className="gap-2"><Plus className="w-4 h-4" /> Add OKR</Button>
                    </div>

                    {myOkrs.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <Target className="w-12 h-12 text-muted-foreground mb-4" />
                                <p className="text-muted-foreground">No OKRs set for this quarter</p>
                                <Button className="mt-4">Set Your First OKR</Button>
                            </CardContent>
                        </Card>
                    ) : (
                        myOkrs.map(okr => {
                            const statusConfig = OKR_STATUS_CONFIG[okr.status]
                            return (
                                <Card key={okr.id}>
                                    <CardContent className="pt-4">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h4 className="font-medium">{okr.title}</h4>
                                                <p className="text-sm text-muted-foreground">{okr.description}</p>
                                            </div>
                                            <Badge className={cn(statusConfig.bg, statusConfig.color)}>{statusConfig.label}</Badge>
                                        </div>

                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-sm">Overall Progress</span>
                                                    <span className="font-medium">{okr.overallProgress}%</span>
                                                </div>
                                                <Progress value={okr.overallProgress} className="h-2" />
                                            </div>
                                            <Badge variant="outline">{okr.quarter}</Badge>
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-sm font-medium">Key Results</p>
                                            {okr.keyResults.map(kr => (
                                                <div key={kr.id} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                                                    <div className="flex-1">
                                                        <p className="text-sm">{kr.title}</p>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Progress value={kr.progress} className="h-1.5 flex-1" />
                                                            <span className="text-xs text-muted-foreground">
                                                                {kr.currentValue}/{kr.targetValue} {kr.unit}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-medium">{kr.progress}%</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })
                    )}
                </TabsContent>

                <TabsContent value="team-okrs" className="space-y-4 mt-4">
                    <h3 className="text-lg font-medium">Team Objectives</h3>
                    {okrs.filter(o => o.employeeId !== currentUserId).map(okr => {
                        const employee = employees.find(e => e.id === okr.employeeId)
                        const statusConfig = OKR_STATUS_CONFIG[okr.status]
                        return (
                            <Card key={okr.id}>
                                <CardContent className="pt-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Avatar className="w-8 h-8">
                                            <AvatarFallback className="bg-primary/20 text-primary text-xs">
                                                {employee?.firstName[0]}{employee?.lastName[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">{okr.title}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {employee?.firstName} {employee?.lastName} · {okr.quarter}
                                            </p>
                                        </div>
                                        <Badge className={cn(statusConfig.bg, statusConfig.color, "text-xs")}>{statusConfig.label}</Badge>
                                        <div className="text-right">
                                            <p className="text-lg font-bold">{okr.overallProgress}%</p>
                                        </div>
                                    </div>
                                    <Progress value={okr.overallProgress} className="h-2" />
                                </CardContent>
                            </Card>
                        )
                    })}
                </TabsContent>

                <TabsContent value="reviews" className="space-y-4 mt-4">
                    <h3 className="text-lg font-medium">Performance Reviews</h3>

                    {myReviews.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <Award className="w-12 h-12 text-muted-foreground mb-4" />
                                <p className="text-muted-foreground">No performance reviews yet</p>
                            </CardContent>
                        </Card>
                    ) : (
                        myReviews.map(review => (
                            <Card key={review.id}>
                                <CardContent className="pt-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">{review.period} Performance Review</p>
                                            <p className="text-sm text-muted-foreground">
                                                Reviewer: {review.reviewerName} · {formatDate(review.scheduledDate)}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant={review.status === "completed" ? "default" : "secondary"} className="capitalize">
                                                {review.status}
                                            </Badge>
                                            {review.status === "completed" && (
                                                <div className="flex items-center gap-1 text-lg font-bold">
                                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                                    {review.overallRating}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {review.status === "completed" && (
                                        <div className="mt-4 grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm font-medium text-green-500 mb-2">Strengths</p>
                                                <ul className="text-sm space-y-1">
                                                    {review.strengths.map((s, i) => (
                                                        <li key={i} className="flex items-center gap-1">
                                                            <CheckCircle2 className="w-3 h-3 text-green-500" /> {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-orange-500 mb-2">Areas for Improvement</p>
                                                <ul className="text-sm space-y-1">
                                                    {review.areasForImprovement.map((a, i) => (
                                                        <li key={i} className="flex items-center gap-1">
                                                            <ChevronRight className="w-3 h-3 text-orange-500" /> {a}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))
                    )}
                </TabsContent>

                <TabsContent value="leaderboard" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Performance Leaderboard</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {employees
                                    .sort((a, b) => b.performanceRating - a.performanceRating)
                                    .map((emp, index) => {
                                        const initials = `${emp.firstName[0]}${emp.lastName[0]}`
                                        return (
                                            <div key={emp.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
                                                <span className={cn(
                                                    "w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold",
                                                    index === 0 && "bg-yellow-500 text-yellow-900",
                                                    index === 1 && "bg-gray-300 text-gray-700",
                                                    index === 2 && "bg-orange-400 text-orange-900",
                                                    index > 2 && "bg-secondary text-muted-foreground"
                                                )}>
                                                    {index + 1}
                                                </span>
                                                <Avatar className="w-8 h-8">
                                                    <AvatarFallback className="bg-primary/20 text-primary text-xs">{initials}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1">
                                                    <p className="font-medium text-sm">{emp.firstName} {emp.lastName}</p>
                                                    <p className="text-xs text-muted-foreground">{emp.jobTitle}</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                    <span className="font-bold">{emp.performanceRating.toFixed(1)}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
