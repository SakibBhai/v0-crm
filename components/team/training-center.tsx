"use client"

import { useState } from "react"
import type { TrainingCourse, CourseEnrollment, Employee } from "@/lib/types/hr"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Search,
    BookOpen,
    Play,
    CheckCircle2,
    Clock,
    Award,
    Users,
    TrendingUp,
    ExternalLink,
    GraduationCap,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface TrainingCenterProps {
    courses: TrainingCourse[]
    enrollments: CourseEnrollment[]
    employees: Employee[]
    currentUserId: string
    onEnroll: (courseId: string) => void
}

const COURSE_TYPE_CONFIG = {
    mandatory: { label: "Mandatory", color: "bg-red-500", icon: "⚠️" },
    optional: { label: "Optional", color: "bg-blue-500", icon: "📚" },
    certification: { label: "Certification", color: "bg-purple-500", icon: "🏆" },
}

export function TrainingCenter({
    courses,
    enrollments,
    employees,
    currentUserId,
    onEnroll,
}: TrainingCenterProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeTab, setActiveTab] = useState("my-learning")

    const myEnrollments = enrollments.filter(e => e.employeeId === currentUserId)
    const completedCourses = myEnrollments.filter(e => e.status === "completed")
    const inProgressCourses = myEnrollments.filter(e => e.status === "in-progress" || e.status === "enrolled")

    const filteredCourses = courses.filter(
        c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

    const getStatusBadge = (status: CourseEnrollment["status"]) => {
        switch (status) {
            case "enrolled":
                return <Badge variant="outline" className="gap-1"><Clock className="w-3 h-3" /> Not Started</Badge>
            case "in-progress":
                return <Badge variant="secondary" className="gap-1"><Play className="w-3 h-3" /> In Progress</Badge>
            case "completed":
                return <Badge className="bg-green-500 gap-1"><CheckCircle2 className="w-3 h-3" /> Completed</Badge>
            case "failed":
                return <Badge variant="destructive">Failed</Badge>
        }
    }

    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/20">
                                <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{myEnrollments.length}</p>
                                <p className="text-xs text-muted-foreground">Enrolled Courses</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                                <Play className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{inProgressCourses.length}</p>
                                <p className="text-xs text-muted-foreground">In Progress</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-green-500/20">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{completedCourses.length}</p>
                                <p className="text-xs text-muted-foreground">Completed</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/20">
                                <Award className="w-5 h-5 text-purple-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">
                                    {completedCourses.filter(e => e.score && e.score >= 80).length}
                                </p>
                                <p className="text-xs text-muted-foreground">Certifications</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="my-learning">My Learning</TabsTrigger>
                    <TabsTrigger value="catalog">Course Catalog</TabsTrigger>
                    <TabsTrigger value="team">Team Progress</TabsTrigger>
                </TabsList>

                <TabsContent value="my-learning" className="space-y-4 mt-4">
                    {/* In Progress */}
                    {inProgressCourses.length > 0 && (
                        <div>
                            <h3 className="text-lg font-medium mb-3">Continue Learning</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                {inProgressCourses.map(enrollment => {
                                    const course = courses.find(c => c.id === enrollment.courseId)
                                    if (!course) return null
                                    const typeConfig = COURSE_TYPE_CONFIG[course.type]

                                    return (
                                        <Card key={enrollment.id}>
                                            <CardContent className="pt-4">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <p className="font-medium">{course.title}</p>
                                                        <p className="text-xs text-muted-foreground">{course.provider}</p>
                                                    </div>
                                                    <Badge className={cn("text-xs text-white", typeConfig.color)}>{typeConfig.label}</Badge>
                                                </div>

                                                <div className="flex items-center gap-3 mb-3">
                                                    <Progress value={enrollment.progress} className="h-2 flex-1" />
                                                    <span className="text-sm font-medium">{enrollment.progress}%</span>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <Clock className="w-3 h-3" />
                                                        <span>{course.duration}h total</span>
                                                    </div>
                                                    <Button size="sm" className="gap-1">
                                                        <Play className="w-3 h-3" /> Continue
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {/* Completed */}
                    {completedCourses.length > 0 && (
                        <div>
                            <h3 className="text-lg font-medium mb-3">Completed Courses</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                {completedCourses.map(enrollment => {
                                    const course = courses.find(c => c.id === enrollment.courseId)
                                    if (!course) return null

                                    return (
                                        <Card key={enrollment.id}>
                                            <CardContent className="pt-4">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <p className="font-medium">{course.title}</p>
                                                        <p className="text-xs text-muted-foreground">
                                                            Completed {enrollment.completedAt && formatDate(enrollment.completedAt)}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        {enrollment.score && (
                                                            <div className="flex items-center gap-1">
                                                                <Award className="w-4 h-4 text-yellow-500" />
                                                                <span className="font-bold">{enrollment.score}%</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {enrollment.certificateUrl && (
                                                    <Button variant="outline" size="sm" className="w-full mt-3 gap-1">
                                                        <GraduationCap className="w-3 h-3" /> View Certificate
                                                    </Button>
                                                )}
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {myEnrollments.length === 0 && (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
                                <p className="text-muted-foreground">You haven't enrolled in any courses yet</p>
                                <Button className="mt-4" onClick={() => setActiveTab("catalog")}>
                                    Browse Courses
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>

                <TabsContent value="catalog" className="space-y-4 mt-4">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search courses..."
                            className="pl-10"
                        />
                    </div>

                    {/* Mandatory Courses */}
                    <div>
                        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                            <span className="text-red-500">⚠️</span> Mandatory Training
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            {filteredCourses.filter(c => c.type === "mandatory").map(course => {
                                const isEnrolled = myEnrollments.some(e => e.courseId === course.id)
                                return (
                                    <Card key={course.id}>
                                        <CardContent className="pt-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <p className="font-medium">{course.title}</p>
                                                <Badge variant="destructive" className="text-xs">Required</Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}h</span>
                                                    <span className="capitalize">{course.format}</span>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    disabled={isEnrolled}
                                                    onClick={() => onEnroll(course.id)}
                                                >
                                                    {isEnrolled ? "Enrolled" : "Enroll"}
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>

                    {/* Optional Courses */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Skill Development</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            {filteredCourses.filter(c => c.type !== "mandatory").map(course => {
                                const isEnrolled = myEnrollments.some(e => e.courseId === course.id)
                                const typeConfig = COURSE_TYPE_CONFIG[course.type]

                                return (
                                    <Card key={course.id}>
                                        <CardContent className="pt-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <p className="font-medium">{course.title}</p>
                                                <Badge className={cn("text-xs text-white", typeConfig.color)}>{typeConfig.label}</Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}h</span>
                                                    <span>{course.provider}</span>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    variant={isEnrolled ? "secondary" : "default"}
                                                    disabled={isEnrolled}
                                                    onClick={() => onEnroll(course.id)}
                                                >
                                                    {isEnrolled ? "Enrolled" : "Enroll"}
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="team" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Users className="w-5 h-5" /> Team Learning Progress
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {employees.map(emp => {
                                    const empEnrollments = enrollments.filter(e => e.employeeId === emp.id)
                                    const completed = empEnrollments.filter(e => e.status === "completed").length
                                    const total = empEnrollments.length
                                    const completionRate = total > 0 ? (completed / total) * 100 : 0
                                    const initials = `${emp.firstName[0]}${emp.lastName[0]}`

                                    return (
                                        <div key={emp.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
                                            <Avatar className="w-8 h-8">
                                                <AvatarFallback className="bg-primary/20 text-primary text-xs">{initials}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <p className="font-medium text-sm">{emp.firstName} {emp.lastName}</p>
                                                <p className="text-xs text-muted-foreground">{emp.jobTitle}</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <p className="text-sm font-medium">{completed}/{total}</p>
                                                    <p className="text-xs text-muted-foreground">Courses</p>
                                                </div>
                                                <div className="w-24">
                                                    <Progress value={completionRate} className="h-2" />
                                                </div>
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
