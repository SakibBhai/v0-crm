"use client"

import type React from "react"
import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    FileText,
    TrendingUp,
    TrendingDown,
    Users,
    Target,
    Clock,
    DollarSign,
    BarChart3,
    PieChart,
    Calendar,
    ArrowRight,
    Plus,
    FileBarChart,
    Zap,
    RefreshCw,
    Star,
    AlertCircle,
    CheckCircle,
    ArrowUpRight,
    Download,
    Send,
    Eye,
} from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPie, Pie, Cell, LineChart, Line } from "recharts"
import Link from "next/link"

// Mock data for charts
const conversionData = [
    { month: "Jul", leads: 120, clients: 18, rate: 15 },
    { month: "Aug", leads: 145, clients: 23, rate: 16 },
    { month: "Sep", leads: 160, clients: 28, rate: 17.5 },
    { month: "Oct", leads: 180, clients: 32, rate: 17.8 },
    { month: "Nov", leads: 210, clients: 42, rate: 20 },
    { month: "Dec", leads: 195, clients: 45, rate: 23 },
]

const deliveryData = [
    { name: "On Time", value: 78, color: "#4ade80" },
    { name: "Delayed", value: 15, color: "#fbbf24" },
    { name: "At Risk", value: 7, color: "#f87171" },
]

const retentionData = [
    { month: "Jul", retention: 92, churn: 8 },
    { month: "Aug", retention: 94, churn: 6 },
    { month: "Sep", retention: 91, churn: 9 },
    { month: "Oct", retention: 95, churn: 5 },
    { month: "Nov", retention: 96, churn: 4 },
    { month: "Dec", retention: 97, churn: 3 },
]

// Report templates
const reportTemplates = [
    { id: "1", name: "Monthly SEO Recap", type: "SEO", lastGenerated: "2024-12-15", downloads: 24, icon: TrendingUp, color: "text-success" },
    { id: "2", name: "Paid Media Snapshot", type: "PPC", lastGenerated: "2024-12-10", downloads: 18, icon: BarChart3, color: "text-primary" },
    { id: "3", name: "Social Performance Report", type: "Social", lastGenerated: "2024-12-12", downloads: 31, icon: Users, color: "text-chart-4" },
    { id: "4", name: "Lead Generation Summary", type: "Leads", lastGenerated: "2024-12-14", downloads: 15, icon: Target, color: "text-chart-3" },
    { id: "5", name: "Content Marketing ROI", type: "Content", lastGenerated: "2024-12-08", downloads: 12, icon: FileText, color: "text-warning" },
]

// Recent reports
const recentReports = [
    { id: "1", name: "TechMart Q4 Performance", client: "TechMart Solutions", generatedAt: "2024-12-18T10:30:00", status: "delivered" },
    { id: "2", name: "GreenLife SEO Analysis", client: "GreenLife Organics", generatedAt: "2024-12-17T14:15:00", status: "pending" },
    { id: "3", name: "FoodieHub Social Report", client: "FoodieHub", generatedAt: "2024-12-16T09:00:00", status: "delivered" },
    { id: "4", name: "LuxStay Brand Performance", client: "LuxStay Hotels", generatedAt: "2024-12-15T16:45:00", status: "draft" },
]

// Client health scores
const clientHealth = [
    { id: "1", name: "TechMart Solutions", score: 95, trend: "up", projects: 3, revenue: 25000 },
    { id: "2", name: "GreenLife Organics", score: 88, trend: "up", projects: 2, revenue: 12000 },
    { id: "3", name: "FoodieHub", score: 72, trend: "down", projects: 1, revenue: 8000 },
    { id: "4", name: "AutoDeal Motors", score: 45, trend: "down", projects: 1, revenue: 15000 },
    { id: "5", name: "LuxStay Hotels", score: 91, trend: "stable", projects: 2, revenue: 35000 },
]

export default function ReportsPage() {
    const [activeTab, setActiveTab] = useState("overview")

    const kpis = {
        conversionRate: 23,
        conversionChange: +5.2,
        deliveryRate: 78,
        deliveryChange: +3.8,
        retentionRate: 97,
        churnRate: 3,
        avgProjectValue: 18500,
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold">Strategic Reports & Intelligence</h1>
                        <p className="text-muted-foreground mt-1">Agency performance insights and client intelligence hub</p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/reports/planner">
                            <Button variant="outline" className="gap-2">
                                <Calendar className="w-4 h-4" />
                                Monthly Planner
                            </Button>
                        </Link>
                        <Link href="/reports/builder">
                            <Button className="gap-2 bg-gradient-to-r from-primary to-chart-4">
                                <Zap className="w-4 h-4" />
                                Generate New Insight
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <AnimatedCard className="p-5" delay={50}>
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Lead-to-Client Conversion</p>
                                <p className="text-3xl font-bold mt-2 text-primary">{kpis.conversionRate}%</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="w-4 h-4 text-success" />
                                    <span className="text-sm text-success">+{kpis.conversionChange}%</span>
                                    <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-primary/10">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                    </AnimatedCard>

                    <AnimatedCard className="p-5" delay={100}>
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Campaign Delivery Rate</p>
                                <p className="text-3xl font-bold mt-2 text-success">{kpis.deliveryRate}%</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="w-4 h-4 text-success" />
                                    <span className="text-sm text-success">+{kpis.deliveryChange}%</span>
                                    <span className="text-xs text-muted-foreground ml-1">on-time delivery</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-success/10">
                                <Clock className="w-6 h-6 text-success" />
                            </div>
                        </div>
                    </AnimatedCard>

                    <AnimatedCard className="p-5" delay={150}>
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Client Retention Rate</p>
                                <p className="text-3xl font-bold mt-2 text-chart-4">{kpis.retentionRate}%</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <span className="text-sm text-muted-foreground">Churn:</span>
                                    <span className="text-sm text-destructive">{kpis.churnRate}%</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-chart-4/10">
                                <Users className="w-6 h-6 text-chart-4" />
                            </div>
                        </div>
                    </AnimatedCard>

                    <AnimatedCard className="p-5" delay={200}>
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Avg Project Value</p>
                                <p className="text-3xl font-bold mt-2">${(kpis.avgProjectValue / 1000).toFixed(1)}K</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="w-4 h-4 text-success" />
                                    <span className="text-sm text-success">+12%</span>
                                    <span className="text-xs text-muted-foreground ml-1">YoY growth</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-warning/10">
                                <DollarSign className="w-6 h-6 text-warning" />
                            </div>
                        </div>
                    </AnimatedCard>
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-in-up">
                    <TabsList className="bg-secondary">
                        <TabsTrigger value="overview" className="gap-1.5">
                            <BarChart3 className="w-4 h-4" />
                            <span className="hidden sm:inline">Performance Overview</span>
                            <span className="sm:hidden">Overview</span>
                        </TabsTrigger>
                        <TabsTrigger value="reports" className="gap-1.5">
                            <FileText className="w-4 h-4" />
                            <span className="hidden sm:inline">Report Library</span>
                            <span className="sm:hidden">Reports</span>
                        </TabsTrigger>
                        <TabsTrigger value="clients" className="gap-1.5">
                            <Users className="w-4 h-4" />
                            <span className="hidden sm:inline">Client Health</span>
                            <span className="sm:hidden">Clients</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* Performance Overview Tab */}
                    <TabsContent value="overview" className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Conversion Chart */}
                            <AnimatedCard className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="font-semibold">Lead-to-Client Conversion</h3>
                                        <p className="text-sm text-muted-foreground">Monthly conversion performance</p>
                                    </div>
                                    <Badge variant="outline" className="gap-1">
                                        <TrendingUp className="w-3 h-3" />
                                        +5.2%
                                    </Badge>
                                </div>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={conversionData}>
                                            <defs>
                                                <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                            <XAxis dataKey="month" stroke="#888" fontSize={12} />
                                            <YAxis stroke="#888" fontSize={12} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333', borderRadius: '8px' }}
                                                labelStyle={{ color: '#fff' }}
                                            />
                                            <Area type="monotone" dataKey="rate" stroke="#60a5fa" fillOpacity={1} fill="url(#colorRate)" strokeWidth={2} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </AnimatedCard>

                            {/* Delivery Velocity */}
                            <AnimatedCard className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="font-semibold">Campaign Delivery Velocity</h3>
                                        <p className="text-sm text-muted-foreground">Project completion status</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="h-48 w-48">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RechartsPie>
                                                <Pie
                                                    data={deliveryData}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={50}
                                                    outerRadius={70}
                                                    paddingAngle={3}
                                                    dataKey="value"
                                                >
                                                    {deliveryData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Pie>
                                                <Tooltip
                                                    contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333', borderRadius: '8px' }}
                                                />
                                            </RechartsPie>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        {deliveryData.map((item) => (
                                            <div key={item.name} className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                                    <span className="text-sm">{item.name}</span>
                                                </div>
                                                <span className="font-semibold">{item.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedCard>

                            {/* Client Retention */}
                            <AnimatedCard className="p-6 lg:col-span-2">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="font-semibold">Client Retention & Churn Trends</h3>
                                        <p className="text-sm text-muted-foreground">Monthly retention vs churn rate</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-success" />
                                            <span className="text-sm text-muted-foreground">Retention</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-destructive" />
                                            <span className="text-sm text-muted-foreground">Churn</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={retentionData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                            <XAxis dataKey="month" stroke="#888" fontSize={12} />
                                            <YAxis stroke="#888" fontSize={12} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333', borderRadius: '8px' }}
                                            />
                                            <Line type="monotone" dataKey="retention" stroke="#4ade80" strokeWidth={2} dot={{ fill: '#4ade80' }} />
                                            <Line type="monotone" dataKey="churn" stroke="#f87171" strokeWidth={2} dot={{ fill: '#f87171' }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </AnimatedCard>
                        </div>
                    </TabsContent>

                    {/* Report Library Tab */}
                    <TabsContent value="reports" className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Report Templates */}
                            <div className="lg:col-span-2 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">Quick-Access Report Templates</h3>
                                    <Button variant="outline" size="sm" className="gap-2">
                                        <Plus className="w-4 h-4" />
                                        New Template
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {reportTemplates.map((template, i) => (
                                        <AnimatedCard key={template.id} delay={i * 50} className="p-4 cursor-pointer card-hover">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-xl bg-secondary">
                                                    <template.icon className={`w-5 h-5 ${template.color}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-medium">{template.name}</h4>
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        Last generated: {new Date(template.lastGenerated).toLocaleDateString()}
                                                    </p>
                                                    <div className="flex items-center gap-4 mt-3">
                                                        <Badge variant="secondary" className="text-xs">{template.type}</Badge>
                                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                            <Download className="w-3 h-3" />
                                                            {template.downloads}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </AnimatedCard>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Reports */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">Recent Reports</h3>
                                <AnimatedCard className="p-0">
                                    <div className="divide-y divide-border">
                                        {recentReports.map((report) => (
                                            <div key={report.id} className="p-4 hover:bg-secondary/30 transition-colors cursor-pointer">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <p className="font-medium text-sm">{report.name}</p>
                                                        <p className="text-xs text-muted-foreground mt-1">{report.client}</p>
                                                    </div>
                                                    <Badge className={`text-xs ${report.status === 'delivered' ? 'bg-success/20 text-success' :
                                                            report.status === 'pending' ? 'bg-warning/20 text-warning' :
                                                                'bg-muted text-muted-foreground'
                                                        } border-0`}>
                                                        {report.status}
                                                    </Badge>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-2">
                                                    {new Date(report.generatedAt).toLocaleString()}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </AnimatedCard>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Client Health Tab */}
                    <TabsContent value="clients" className="mt-6">
                        <AnimatedCard>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>Client Health Scores</span>
                                    <Button variant="outline" size="sm" className="gap-2">
                                        <RefreshCw className="w-4 h-4" />
                                        Refresh
                                    </Button>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Client</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Health Score</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Trend</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Active Projects</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Revenue</th>
                                                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {clientHealth.map((client, i) => (
                                                <tr key={client.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                                                    <td className="py-3 px-4">
                                                        <div className="flex items-center gap-3">
                                                            <Avatar className="w-8 h-8">
                                                                <AvatarFallback className="bg-primary/20 text-primary text-xs">
                                                                    {client.name.split(' ').map(n => n[0]).join('')}
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <span className="font-medium">{client.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-24">
                                                                <Progress
                                                                    value={client.score}
                                                                    className={`h-2 ${client.score >= 80 ? '[&>div]:bg-success' : client.score >= 60 ? '[&>div]:bg-warning' : '[&>div]:bg-destructive'}`}
                                                                />
                                                            </div>
                                                            <span className={`font-semibold text-sm ${client.score >= 80 ? 'text-success' : client.score >= 60 ? 'text-warning' : 'text-destructive'}`}>
                                                                {client.score}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        {client.trend === 'up' && <TrendingUp className="w-4 h-4 text-success" />}
                                                        {client.trend === 'down' && <TrendingDown className="w-4 h-4 text-destructive" />}
                                                        {client.trend === 'stable' && <span className="text-muted-foreground">—</span>}
                                                    </td>
                                                    <td className="py-3 px-4 font-medium">{client.projects}</td>
                                                    <td className="py-3 px-4">
                                                        <span className="font-semibold text-primary">${(client.revenue / 1000).toFixed(0)}K</span>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        {client.score >= 80 ? (
                                                            <Badge className="bg-success/20 text-success border-0 gap-1">
                                                                <CheckCircle className="w-3 h-3" />
                                                                Healthy
                                                            </Badge>
                                                        ) : client.score >= 60 ? (
                                                            <Badge className="bg-warning/20 text-warning border-0 gap-1">
                                                                <AlertCircle className="w-3 h-3" />
                                                                Monitor
                                                            </Badge>
                                                        ) : (
                                                            <Badge className="bg-destructive/20 text-destructive border-0 gap-1">
                                                                <AlertCircle className="w-3 h-3" />
                                                                At Risk
                                                            </Badge>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </AnimatedCard>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    )
}
