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
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
    ArrowLeft,
    ArrowRight,
    Target,
    BarChart3,
    Users,
    DollarSign,
    FileText,
    Calendar,
    Filter,
    PieChart,
    LineChart,
    LayoutGrid,
    Check,
    Mail,
    Download,
    Clock,
    Sparkles,
    ChevronRight,
    Settings,
    Palette,
    Send,
    FileSpreadsheet,
} from "lucide-react"
import Link from "next/link"

// Report type configurations
const reportTypes = [
    {
        id: "acquisition",
        title: "Acquisition & Funnel Report",
        description: "Lead generation performance and conversion tracking",
        icon: Target,
        color: "text-primary",
        bgColor: "bg-primary/10",
    },
    {
        id: "campaign",
        title: "Campaign & Project Performance",
        description: "Deliverables, milestones, and campaign metrics",
        icon: BarChart3,
        color: "text-success",
        bgColor: "bg-success/10",
    },
    {
        id: "team",
        title: "Team & Resource Allocation",
        description: "Billable hours, productivity, and workload analysis",
        icon: Users,
        color: "text-chart-4",
        bgColor: "bg-chart-4/10",
    },
    {
        id: "financial",
        title: "Financial & ROI Analysis",
        description: "Budget utilization vs. revenue insights",
        icon: DollarSign,
        color: "text-warning",
        bgColor: "bg-warning/10",
    },
    {
        id: "custom",
        title: "Custom White-Label Report",
        description: "Bespoke client configuration with full customization",
        icon: Sparkles,
        color: "text-chart-3",
        bgColor: "bg-chart-3/10",
    },
]

// Date range presets
const datePresets = [
    { id: "7d", label: "Last 7 Days" },
    { id: "30d", label: "Last 30 Days" },
    { id: "90d", label: "Last 90 Days" },
    { id: "ytd", label: "Year to Date" },
    { id: "ly", label: "Last Year" },
    { id: "custom", label: "Custom Range" },
]

// Sample clients/campaigns for filtering
const clients = [
    "All Clients",
    "TechMart Solutions",
    "GreenLife Organics",
    "FoodieHub",
    "AutoDeal Motors",
    "LuxStay Hotels",
]

const campaigns = [
    "All Campaigns",
    "Q4 SEO Initiative",
    "Holiday PPC Campaign",
    "Social Media Blitz",
    "Content Marketing Push",
]

const accountManagers = [
    "All Managers",
    "John Smith",
    "Emily Chen",
    "Sarah Mitchell",
    "David Wilson",
]

// KPI options by report type
const kpiOptions = {
    acquisition: [
        { id: "total_leads", label: "Total Leads Generated", checked: true },
        { id: "conversion_rate", label: "Lead-to-Client Conversion Rate", checked: true },
        { id: "cost_per_lead", label: "Cost Per Lead (CPL)", checked: true },
        { id: "lead_source", label: "Lead Source Breakdown", checked: false },
        { id: "funnel_stages", label: "Funnel Stage Progression", checked: false },
    ],
    campaign: [
        { id: "active_campaigns", label: "Total Active Campaigns", checked: true },
        { id: "ctr", label: "Click-Through Rate (CTR)", checked: true },
        { id: "cpa", label: "Cost Per Acquisition (CPA)", checked: true },
        { id: "roas", label: "Return on Ad Spend (ROAS)", checked: true },
        { id: "impressions", label: "Total Impressions", checked: false },
    ],
    team: [
        { id: "budget_consumption", label: "Budget Consumption (%)", checked: true },
        { id: "project_variance", label: "Project Variance (Actual vs Planned)", checked: true },
        { id: "turnaround_time", label: "Average Turnaround Time", checked: true },
        { id: "billable_hours", label: "Billable Hours by Team Member", checked: false },
        { id: "utilization_rate", label: "Resource Utilization Rate", checked: false },
    ],
    financial: [
        { id: "total_revenue", label: "Total Revenue", checked: true },
        { id: "profit_margin", label: "Profit Margin (%)", checked: true },
        { id: "client_lifetime_value", label: "Client Lifetime Value (CLV)", checked: true },
        { id: "revenue_by_service", label: "Revenue by Service Type", checked: false },
        { id: "outstanding_invoices", label: "Outstanding Invoices", checked: false },
    ],
    custom: [
        { id: "custom_kpi_1", label: "Custom KPI 1", checked: false },
        { id: "custom_kpi_2", label: "Custom KPI 2", checked: false },
        { id: "custom_kpi_3", label: "Custom KPI 3", checked: false },
    ],
}

// Visualization options
const visualOptions = [
    { id: "grid", label: "Data Grid", description: "Detailed tabular views", icon: LayoutGrid },
    { id: "line", label: "Trend Analysis", description: "Line charts for growth", icon: LineChart },
    { id: "pie", label: "Composition Analysis", description: "Pie charts for breakdowns", icon: PieChart },
    { id: "bar", label: "Comparative Analysis", description: "Bar charts for benchmarking", icon: BarChart3 },
]

// Schedule options
const scheduleOptions = [
    { id: "once", label: "One-time Generation" },
    { id: "weekly", label: "Weekly (Every Monday)" },
    { id: "monthly", label: "Monthly (1st of month)" },
    { id: "quarterly", label: "Quarterly" },
]

export default function ReportBuilderPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [reportType, setReportType] = useState("campaign")
    const [dateRange, setDateRange] = useState("30d")
    const [selectedClient, setSelectedClient] = useState("All Clients")
    const [selectedCampaign, setSelectedCampaign] = useState("All Campaigns")
    const [selectedManager, setSelectedManager] = useState("All Managers")
    const [selectedKpis, setSelectedKpis] = useState<string[]>(["active_campaigns", "ctr", "cpa", "roas"])
    const [selectedVisuals, setSelectedVisuals] = useState<string[]>(["grid", "line"])
    const [reportName, setReportName] = useState("")
    const [schedule, setSchedule] = useState("once")
    const [emailRecipients, setEmailRecipients] = useState("")

    const steps = [
        { number: 1, title: "Report Type", icon: FileText },
        { number: 2, title: "Data Filtering", icon: Filter },
        { number: 3, title: "KPI Selection", icon: BarChart3 },
        { number: 4, title: "Visualization", icon: PieChart },
        { number: 5, title: "Distribution", icon: Send },
    ]

    const handleKpiToggle = (kpiId: string) => {
        setSelectedKpis(prev =>
            prev.includes(kpiId)
                ? prev.filter(id => id !== kpiId)
                : [...prev, kpiId]
        )
    }

    const handleVisualToggle = (visualId: string) => {
        setSelectedVisuals(prev =>
            prev.includes(visualId)
                ? prev.filter(id => id !== visualId)
                : [...prev, visualId]
        )
    }

    const progressPercentage = (currentStep / steps.length) * 100

    return (
        <DashboardLayout>
            <div className="space-y-6 max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 animate-fade-in-up">
                    <Link href="/reports" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold">Intelligent Report Builder</h1>
                        <p className="text-muted-foreground">Build custom intelligence reports with our guided wizard</p>
                    </div>
                </div>

                {/* Progress Steps */}
                <AnimatedCard className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center">
                                <div className={`flex items-center gap-2 ${currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'}`}>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${currentStep > step.number ? 'bg-success text-success-foreground' :
                                            currentStep === step.number ? 'bg-primary text-primary-foreground' :
                                                'bg-secondary'
                                        }`}>
                                        {currentStep > step.number ? (
                                            <Check className="w-5 h-5" />
                                        ) : (
                                            <step.icon className="w-5 h-5" />
                                        )}
                                    </div>
                                    <span className="hidden sm:inline text-sm font-medium">{step.title}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <ChevronRight className="w-5 h-5 mx-2 text-muted-foreground hidden sm:block" />
                                )}
                            </div>
                        ))}
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                </AnimatedCard>

                {/* Step Content */}
                <AnimatedCard className="p-6">
                    {/* Step 1: Report Type */}
                    {currentStep === 1 && (
                        <div className="space-y-6 animate-fade-in-up">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Define Report Scope & Objective</h2>
                                <p className="text-muted-foreground">Select the focus of your intelligence report</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {reportTypes.map((type) => (
                                    <div
                                        key={type.id}
                                        onClick={() => setReportType(type.id)}
                                        className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${reportType === type.id
                                                ? 'border-primary bg-primary/5'
                                                : 'border-border hover:border-primary/50'
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-xl ${type.bgColor}`}>
                                                <type.icon className={`w-6 h-6 ${type.color}`} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{type.title}</h3>
                                                <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
                                            </div>
                                            {reportType === type.id && (
                                                <Check className="w-5 h-5 text-primary" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Data Filtering */}
                    {currentStep === 2 && (
                        <div className="space-y-6 animate-fade-in-up">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Data Segmentation & Filtering</h2>
                                <p className="text-muted-foreground">Define the scope and timeframe of your data</p>
                            </div>

                            {/* Temporal Parameters */}
                            <div className="space-y-3">
                                <Label className="text-base font-medium">Temporal Parameters</Label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                                    {datePresets.map((preset) => (
                                        <button
                                            key={preset.id}
                                            onClick={() => setDateRange(preset.id)}
                                            className={`p-3 rounded-lg text-sm font-medium transition-all ${dateRange === preset.id
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'bg-secondary hover:bg-secondary/80'
                                                }`}
                                        >
                                            {preset.label}
                                        </button>
                                    ))}
                                </div>
                                {dateRange === 'custom' && (
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div className="space-y-2">
                                            <Label>Start Date</Label>
                                            <Input type="date" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>End Date</Label>
                                            <Input type="date" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Entity Filtering */}
                            <div className="space-y-4">
                                <Label className="text-base font-medium">Entity Filtering</Label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-sm text-muted-foreground">Client</Label>
                                        <Select value={selectedClient} onValueChange={setSelectedClient}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {clients.map((client) => (
                                                    <SelectItem key={client} value={client}>{client}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm text-muted-foreground">Campaign Portfolio</Label>
                                        <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {campaigns.map((campaign) => (
                                                    <SelectItem key={campaign} value={campaign}>{campaign}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm text-muted-foreground">Account Manager</Label>
                                        <Select value={selectedManager} onValueChange={setSelectedManager}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {accountManagers.map((manager) => (
                                                    <SelectItem key={manager} value={manager}>{manager}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: KPI Selection */}
                    {currentStep === 3 && (
                        <div className="space-y-6 animate-fade-in-up">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Metric Configuration</h2>
                                <p className="text-muted-foreground">Select the KPIs to include in your report</p>
                            </div>

                            <div className="space-y-4">
                                {(kpiOptions[reportType as keyof typeof kpiOptions] || kpiOptions.campaign).map((kpi) => (
                                    <div
                                        key={kpi.id}
                                        onClick={() => handleKpiToggle(kpi.id)}
                                        className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${selectedKpis.includes(kpi.id)
                                                ? 'border-primary bg-primary/5'
                                                : 'border-border hover:border-primary/50'
                                            }`}
                                    >
                                        <Checkbox checked={selectedKpis.includes(kpi.id)} />
                                        <span className="font-medium">{kpi.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-lg bg-secondary/50">
                                <p className="text-sm text-muted-foreground">
                                    <strong className="text-foreground">{selectedKpis.length}</strong> metrics selected for this report
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Visualization */}
                    {currentStep === 4 && (
                        <div className="space-y-6 animate-fade-in-up">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Visualization & Layout</h2>
                                <p className="text-muted-foreground">Choose how your data will be presented</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {visualOptions.map((visual) => (
                                    <div
                                        key={visual.id}
                                        onClick={() => handleVisualToggle(visual.id)}
                                        className={`flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${selectedVisuals.includes(visual.id)
                                                ? 'border-primary bg-primary/5'
                                                : 'border-border hover:border-primary/50'
                                            }`}
                                    >
                                        <div className="p-3 rounded-xl bg-secondary">
                                            <visual.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{visual.label}</h3>
                                            <p className="text-sm text-muted-foreground mt-1">{visual.description}</p>
                                        </div>
                                        <Checkbox checked={selectedVisuals.includes(visual.id)} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 5: Distribution */}
                    {currentStep === 5 && (
                        <div className="space-y-6 animate-fade-in-up">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Automation & Distribution</h2>
                                <p className="text-muted-foreground">Configure branding, scheduling, and export options</p>
                            </div>

                            {/* Report Branding */}
                            <div className="space-y-4">
                                <Label className="text-base font-medium flex items-center gap-2">
                                    <Palette className="w-4 h-4" />
                                    Report Branding
                                </Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Report Name</Label>
                                        <Input
                                            placeholder="e.g., Q4 Performance Analysis"
                                            value={reportName}
                                            onChange={(e) => setReportName(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Client Branding</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select client branding" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {clients.slice(1).map((client) => (
                                                    <SelectItem key={client} value={client}>{client}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Scheduling */}
                            <div className="space-y-4">
                                <Label className="text-base font-medium flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Scheduling
                                </Label>
                                <RadioGroup value={schedule} onValueChange={setSchedule} className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {scheduleOptions.map((option) => (
                                        <div key={option.id} className="flex items-center space-x-2">
                                            <RadioGroupItem value={option.id} id={option.id} />
                                            <Label htmlFor={option.id} className="text-sm cursor-pointer">{option.label}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>

                            {/* Email Delivery */}
                            <div className="space-y-4">
                                <Label className="text-base font-medium flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    Email Delivery
                                </Label>
                                <Textarea
                                    placeholder="Enter email addresses (comma separated)"
                                    value={emailRecipients}
                                    onChange={(e) => setEmailRecipients(e.target.value)}
                                />
                            </div>

                            {/* Export Options */}
                            <div className="space-y-4">
                                <Label className="text-base font-medium flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Export Capabilities
                                </Label>
                                <div className="flex flex-wrap gap-3">
                                    <Button variant="outline" className="gap-2">
                                        <FileText className="w-4 h-4" />
                                        PDF (High-Res)
                                    </Button>
                                    <Button variant="outline" className="gap-2">
                                        <FileSpreadsheet className="w-4 h-4" />
                                        Excel
                                    </Button>
                                    <Button variant="outline" className="gap-2">
                                        <LayoutGrid className="w-4 h-4" />
                                        CSV
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                            disabled={currentStep === 1}
                            className="gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Previous
                        </Button>

                        {currentStep < steps.length ? (
                            <Button
                                onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
                                className="gap-2"
                            >
                                Next Step
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        ) : (
                            <Button className="gap-2 bg-gradient-to-r from-primary to-chart-4">
                                <Sparkles className="w-4 h-4" />
                                Generate Report
                            </Button>
                        )}
                    </div>
                </AnimatedCard>
            </div>
        </DashboardLayout>
    )
}
