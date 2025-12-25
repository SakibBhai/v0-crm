"use client"

import type { HRMetrics, Employee } from "@/lib/types/hr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
    Users,
    TrendingUp,
    TrendingDown,
    Clock,
    Briefcase,
    Star,
    UserPlus,
    UserMinus,
    Target,
} from "lucide-react"
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    LineChart,
    Line,
    CartesianGrid,
} from "recharts"
import { cn } from "@/lib/utils"

interface HRAnalyticsProps {
    metrics: HRMetrics
    employees: Employee[]
}

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"]

export function HRAnalytics({ metrics, employees }: HRAnalyticsProps) {
    // Calculate tenure distribution
    const tenureData = [
        {
            name: "<1 year", value: employees.filter(e => {
                const years = (Date.now() - new Date(e.startDate).getTime()) / (1000 * 60 * 60 * 24 * 365)
                return years < 1
            }).length
        },
        {
            name: "1-2 years", value: employees.filter(e => {
                const years = (Date.now() - new Date(e.startDate).getTime()) / (1000 * 60 * 60 * 24 * 365)
                return years >= 1 && years < 2
            }).length
        },
        {
            name: "2-3 years", value: employees.filter(e => {
                const years = (Date.now() - new Date(e.startDate).getTime()) / (1000 * 60 * 60 * 24 * 365)
                return years >= 2 && years < 3
            }).length
        },
        {
            name: "3+ years", value: employees.filter(e => {
                const years = (Date.now() - new Date(e.startDate).getTime()) / (1000 * 60 * 60 * 24 * 365)
                return years >= 3
            }).length
        },
    ]

    // Monthly headcount trend (mock data)
    const headcountTrend = [
        { month: "Jul", count: 6 },
        { month: "Aug", count: 6 },
        { month: "Sep", count: 7 },
        { month: "Oct", count: 7 },
        { month: "Nov", count: 8 },
        { month: "Dec", count: 8 },
    ]

    return (
        <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Headcount</p>
                                <p className="text-2xl font-bold">{metrics.headcount}</p>
                                <div className="flex items-center gap-1 mt-1">
                                    {metrics.headcountGrowth >= 0 ? (
                                        <TrendingUp className="w-3 h-3 text-green-500" />
                                    ) : (
                                        <TrendingDown className="w-3 h-3 text-red-500" />
                                    )}
                                    <span className={cn("text-xs", metrics.headcountGrowth >= 0 ? "text-green-500" : "text-red-500")}>
                                        {metrics.headcountGrowth >= 0 ? "+" : ""}{metrics.headcountGrowth}% YoY
                                    </span>
                                </div>
                            </div>
                            <Users className="w-10 h-10 text-primary opacity-20" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Attrition Rate</p>
                                <p className="text-2xl font-bold">{metrics.attritionRate}%</p>
                                <p className="text-xs text-muted-foreground mt-1">Last 12 months</p>
                            </div>
                            <UserMinus className={cn("w-10 h-10 opacity-20", metrics.attritionRate > 10 ? "text-red-500" : "text-green-500")} />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Open Positions</p>
                                <p className="text-2xl font-bold">{metrics.openPositions}</p>
                                <p className="text-xs text-muted-foreground mt-1">Active job postings</p>
                            </div>
                            <Briefcase className="w-10 h-10 text-blue-500 opacity-20" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Time to Hire</p>
                                <p className="text-2xl font-bold">{metrics.timeToHire}</p>
                                <p className="text-xs text-muted-foreground mt-1">Average days</p>
                            </div>
                            <Clock className="w-10 h-10 text-orange-500 opacity-20" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Headcount Trend */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">Headcount Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={headcountTrend}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#888" }} />
                                    <YAxis tick={{ fontSize: 12, fill: "#888" }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#1a1a2e",
                                            border: "1px solid #333",
                                            borderRadius: "8px",
                                        }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="count"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        dot={{ fill: "#3b82f6" }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Department Distribution */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">Department Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] flex items-center">
                            <div className="w-1/2">
                                <ResponsiveContainer width="100%" height={200}>
                                    <PieChart>
                                        <Pie
                                            data={metrics.diversityMetrics.departments}
                                            dataKey="count"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={40}
                                            outerRadius={80}
                                        >
                                            {metrics.diversityMetrics.departments.map((_, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: "#1a1a2e",
                                                border: "1px solid #333",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="w-1/2 space-y-2">
                                {metrics.diversityMetrics.departments.map((dept, i) => (
                                    <div key={dept.name} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
                                            <span className="text-sm">{dept.name}</span>
                                        </div>
                                        <Badge variant="secondary">{dept.count}</Badge>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Performance Distribution */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">Performance Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={metrics.performanceDistribution} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis type="number" tick={{ fontSize: 12, fill: "#888" }} />
                                    <YAxis
                                        type="category"
                                        dataKey="rating"
                                        width={150}
                                        tick={{ fontSize: 11, fill: "#888" }}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#1a1a2e",
                                            border: "1px solid #333",
                                            borderRadius: "8px",
                                        }}
                                    />
                                    <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                                        {metrics.performanceDistribution.map((_, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={index === 0 ? "#10b981" : index === 1 ? "#3b82f6" : index === 2 ? "#f59e0b" : "#ef4444"}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Tenure Distribution */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">Employee Tenure</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={tenureData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#888" }} />
                                    <YAxis tick={{ fontSize: 12, fill: "#888" }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#1a1a2e",
                                            border: "1px solid #333",
                                            borderRadius: "8px",
                                        }}
                                    />
                                    <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Gender Diversity */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                        <Target className="w-5 h-5" /> Diversity & Inclusion
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            { label: "Male", value: metrics.diversityMetrics.gender.male, color: "bg-blue-500" },
                            { label: "Female", value: metrics.diversityMetrics.gender.female, color: "bg-pink-500" },
                            { label: "Non-binary", value: metrics.diversityMetrics.gender.other, color: "bg-purple-500" },
                        ].map(item => {
                            const total = metrics.diversityMetrics.gender.male + metrics.diversityMetrics.gender.female + metrics.diversityMetrics.gender.other
                            const percent = total > 0 ? (item.value / total) * 100 : 0

                            return (
                                <div key={item.label}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium">{item.label}</span>
                                        <span className="text-lg font-bold">{item.value}</span>
                                    </div>
                                    <Progress
                                        value={percent}
                                        className={cn("h-2", `[&>div]:${item.color}`)}
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">{percent.toFixed(0)}% of team</p>
                                </div>
                            )
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                    <CardContent className="pt-4 text-center">
                        <p className="text-3xl font-bold text-blue-500">{metrics.avgTenure.toFixed(1)}</p>
                        <p className="text-sm text-muted-foreground">Avg. Tenure (years)</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5">
                    <CardContent className="pt-4 text-center">
                        <p className="text-3xl font-bold text-green-500">
                            {(employees.reduce((sum, e) => sum + e.performanceRating, 0) / employees.length).toFixed(1)}
                        </p>
                        <p className="text-sm text-muted-foreground">Avg. Performance</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5">
                    <CardContent className="pt-4 text-center">
                        <p className="text-3xl font-bold text-purple-500">
                            {employees.reduce((sum, e) => sum + e.certifications.length, 0)}
                        </p>
                        <p className="text-sm text-muted-foreground">Total Certifications</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5">
                    <CardContent className="pt-4 text-center">
                        <p className="text-3xl font-bold text-orange-500">
                            {employees.reduce((sum, e) => sum + e.skills.length, 0)}
                        </p>
                        <p className="text-sm text-muted-foreground">Total Skills</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
