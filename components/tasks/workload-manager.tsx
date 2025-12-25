"use client"

import { useMemo } from "react"
import type { Task, TeamMember } from "@/lib/types/task"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Calendar, CheckCircle2, Clock, User, Plane } from "lucide-react"
import { cn } from "@/lib/utils"

interface WorkloadManagerProps {
    tasks: Task[]
    teamMembers: TeamMember[]
    hoursPerDay?: number
}

export function WorkloadManager({ tasks, teamMembers, hoursPerDay = 8 }: WorkloadManagerProps) {
    const workloadData = useMemo(() => {
        return teamMembers.map((member) => {
            const assignedTasks = tasks.filter(
                (t) => t.assignees.some((a) => a.id === member.id) && t.status !== "done"
            )
            const totalEstimated = assignedTasks.reduce((sum, t) => sum + (t.estimatedHours || 0), 0)
            const totalActual = assignedTasks.reduce((sum, t) => sum + (t.actualHours || 0), 0)
            const overdueTasks = assignedTasks.filter((t) => new Date(t.dueDate) < new Date())
            const urgentTasks = assignedTasks.filter((t) => t.priority === "critical" || t.priority === "high")

            // Calculate capacity (assuming 5 work days)
            const weeklyCapacity = hoursPerDay * 5
            const utilizationPercent = (totalEstimated / weeklyCapacity) * 100

            return {
                member,
                assignedTasks,
                totalEstimated,
                totalActual,
                overdueTasks,
                urgentTasks,
                weeklyCapacity,
                utilizationPercent,
                isOverbooked: utilizationPercent > 100,
                isNearCapacity: utilizationPercent > 80 && utilizationPercent <= 100,
            }
        })
    }, [tasks, teamMembers, hoursPerDay])

    const teamStats = useMemo(() => {
        const totalCapacity = workloadData.reduce((sum, w) => sum + w.weeklyCapacity, 0)
        const totalAllocated = workloadData.reduce((sum, w) => sum + w.totalEstimated, 0)
        const availableMembers = teamMembers.filter((m) => m.isAvailable).length

        return {
            totalCapacity,
            totalAllocated,
            teamUtilization: (totalAllocated / totalCapacity) * 100,
            availableMembers,
            overbookedCount: workloadData.filter((w) => w.isOverbooked).length,
        }
    }, [workloadData, teamMembers])

    return (
        <div className="space-y-6">
            {/* Team Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/20">
                                <User className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{teamStats.availableMembers}/{teamMembers.length}</p>
                                <p className="text-xs text-muted-foreground">Available Members</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-chart-2/20">
                                <Clock className="w-5 h-5 text-chart-2" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{teamStats.totalAllocated}h</p>
                                <p className="text-xs text-muted-foreground">Total Allocated</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-success/20">
                                <CheckCircle2 className="w-5 h-5 text-success" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{teamStats.teamUtilization.toFixed(0)}%</p>
                                <p className="text-xs text-muted-foreground">Team Utilization</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className={cn("p-2 rounded-lg", teamStats.overbookedCount > 0 ? "bg-destructive/20" : "bg-secondary")}>
                                <AlertTriangle className={cn("w-5 h-5", teamStats.overbookedCount > 0 ? "text-destructive" : "text-muted-foreground")} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{teamStats.overbookedCount}</p>
                                <p className="text-xs text-muted-foreground">Overbooked</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Individual Workloads */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Team Workload</CardTitle>
                    <CardDescription>Individual capacity and task allocation</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {workloadData.map(({ member, assignedTasks, totalEstimated, utilizationPercent, isOverbooked, isNearCapacity, weeklyCapacity, overdueTasks, urgentTasks }) => (
                            <div key={member.id} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="w-8 h-8">
                                            <AvatarFallback className={cn(
                                                "text-xs",
                                                member.isAvailable ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                                            )}>
                                                {member.initials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium text-sm">{member.name}</span>
                                                {!member.isAvailable && (
                                                    <Badge variant="secondary" className="text-[10px] gap-1">
                                                        <Plane className="w-3 h-3" /> Away
                                                    </Badge>
                                                )}
                                                {isOverbooked && (
                                                    <Badge variant="destructive" className="text-[10px]">Overbooked</Badge>
                                                )}
                                            </div>
                                            <p className="text-xs text-muted-foreground">{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium">
                                            {totalEstimated}h / {weeklyCapacity}h
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>{assignedTasks.length} tasks</span>
                                            {overdueTasks.length > 0 && (
                                                <span className="text-destructive">{overdueTasks.length} overdue</span>
                                            )}
                                            {urgentTasks.length > 0 && (
                                                <span className="text-warning">{urgentTasks.length} urgent</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <Progress
                                        value={Math.min(utilizationPercent, 100)}
                                        className={cn(
                                            "h-2",
                                            isOverbooked && "[&>div]:bg-destructive",
                                            isNearCapacity && "[&>div]:bg-warning"
                                        )}
                                    />
                                    {isOverbooked && (
                                        <div
                                            className="absolute top-0 left-0 h-2 bg-destructive/30 rounded-full"
                                            style={{ width: `${Math.min(utilizationPercent, 150)}%` }}
                                        />
                                    )}
                                </div>

                                {/* Mini task list */}
                                {assignedTasks.length > 0 && (
                                    <div className="flex flex-wrap gap-1 pt-1">
                                        {assignedTasks.slice(0, 5).map((task) => (
                                            <Badge
                                                key={task.id}
                                                variant="outline"
                                                className={cn(
                                                    "text-[10px]",
                                                    new Date(task.dueDate) < new Date() && "border-destructive text-destructive"
                                                )}
                                            >
                                                {task.id}
                                            </Badge>
                                        ))}
                                        {assignedTasks.length > 5 && (
                                            <Badge variant="secondary" className="text-[10px]">
                                                +{assignedTasks.length - 5} more
                                            </Badge>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Warnings */}
            {(teamStats.overbookedCount > 0 || teamMembers.some((m) => !m.isAvailable)) && (
                <Card className="border-warning/50 bg-warning/5">
                    <CardContent className="pt-4">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                            <div className="space-y-1">
                                <p className="font-medium text-sm">Workload Warnings</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    {teamStats.overbookedCount > 0 && (
                                        <li>• {teamStats.overbookedCount} team member(s) are overbooked. Consider reassigning tasks.</li>
                                    )}
                                    {teamMembers.filter((m) => !m.isAvailable).map((m) => (
                                        <li key={m.id}>• {m.name} is marked as unavailable. Their tasks may need attention.</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
