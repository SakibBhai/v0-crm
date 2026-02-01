"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Building2,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  Users,
  Mail,
  Key,
  Smartphone,
  LogOut,
  Trash2,
  Upload,
  Check,
  Moon,
  Sun,
  Monitor,
  Receipt,
  FileText,
  Settings2,
  Target,
  DollarSign,
  FolderKanban,
  Link2,
  Database,
  ChevronRight,
  Plus,
  GripVertical,
  Pencil,
  X,
  Save,
  Eye,
  Zap,
  Clock,
  Calendar,
  BarChart3,
  Workflow,
  ShieldCheck,
  Download,
  AlertTriangle,
} from "lucide-react"
import { cn } from "@/lib/utils"

// ==================== Types ====================
interface PipelineStage {
  id: string
  name: string
  color: string
  probability: number
  order: number
}

interface LeadCategory {
  id: string
  name: string
  color: string
}

interface InvoiceTemplate {
  id: string
  name: string
  isDefault: boolean
  logoPosition: "left" | "center" | "right"
  accentColor: string
  showPaymentTerms: boolean
  defaultNotes: string
  defaultTerms: string
}

interface TaxConfig {
  id: string
  name: string
  rate: number
  isDefault: boolean
}

interface NotificationSetting {
  id: string
  title: string
  description: string
  email: boolean
  push: boolean
  sms: boolean
}

// ==================== Initial Data ====================
const initialPipelineStages: PipelineStage[] = [
  { id: "1", name: "New", color: "#64748b", probability: 10, order: 0 },
  { id: "2", name: "Contacted", color: "#3b82f6", probability: 25, order: 1 },
  { id: "3", name: "Qualified", color: "#06b6d4", probability: 40, order: 2 },
  { id: "4", name: "Proposal", color: "#8b5cf6", probability: 60, order: 3 },
  { id: "5", name: "Negotiation", color: "#f59e0b", probability: 80, order: 4 },
  { id: "6", name: "Won", color: "#22c55e", probability: 100, order: 5 },
  { id: "7", name: "Lost", color: "#ef4444", probability: 0, order: 6 },
]

const initialLeadCategories: LeadCategory[] = [
  { id: "1", name: "Digital Marketing", color: "#8b5cf6" },
  { id: "2", name: "SEO", color: "#22c55e" },
  { id: "3", name: "Social Media", color: "#ec4899" },
  { id: "4", name: "Content", color: "#06b6d4" },
  { id: "5", name: "Branding", color: "#f97316" },
  { id: "6", name: "Web Development", color: "#6366f1" },
  { id: "7", name: "PPC", color: "#f43f5e" },
]

const initialTaxConfigs: TaxConfig[] = [
  { id: "1", name: "Standard VAT", rate: 15, isDefault: true },
  { id: "2", name: "Reduced VAT", rate: 5, isDefault: false },
  { id: "3", name: "Zero Rate", rate: 0, isDefault: false },
]

const initialNotifications: NotificationSetting[] = [
  { id: "1", title: "New Lead Assigned", description: "Get notified when a new lead is assigned to you", email: true, push: true, sms: false },
  { id: "2", title: "Task Reminders", description: "Receive reminders for upcoming task deadlines", email: true, push: true, sms: true },
  { id: "3", title: "Invoice Paid", description: "Notification when an invoice is paid", email: true, push: true, sms: false },
  { id: "4", title: "Client Messages", description: "Notifications for new client communications", email: true, push: true, sms: true },
  { id: "5", title: "Overdue Payments", description: "Alerts for overdue invoice payments", email: true, push: true, sms: true },
  { id: "6", title: "Weekly Reports", description: "Receive weekly summary reports", email: true, push: false, sms: false },
]

const teamMembers = [
  { id: "1", name: "John Doe", email: "john@company.com", role: "Admin", avatar: "JD" },
  { id: "2", name: "Sarah Mitchell", email: "sarah@company.com", role: "Manager", avatar: "SM" },
  { id: "3", name: "Emily Chen", email: "emily@company.com", role: "Member", avatar: "EC" },
  { id: "4", name: "James Wilson", email: "james@company.com", role: "Member", avatar: "JW" },
]

// ==================== Settings Sections Config ====================
const settingsSections = [
  { id: "organization", label: "Organization", icon: Building2, group: "General" },
  { id: "templates", label: "Templates", icon: FileText, group: "General" },
  { id: "pipeline", label: "Sales Pipeline", icon: Target, group: "Sales" },
  { id: "clients", label: "Client Settings", icon: Users, group: "Sales" },
  { id: "finance", label: "Finance", icon: DollarSign, group: "Finance" },
  { id: "tasks", label: "Tasks & Projects", icon: FolderKanban, group: "Operations" },
  { id: "team", label: "Team & Roles", icon: Users, group: "Team" },
  { id: "notifications", label: "Notifications", icon: Bell, group: "System" },
  { id: "integrations", label: "Integrations", icon: Link2, group: "System" },
  { id: "data", label: "Data Management", icon: Database, group: "System" },
  { id: "security", label: "Security", icon: Shield, group: "System" },
  { id: "appearance", label: "Appearance", icon: Palette, group: "System" },
]

const groupOrder = ["General", "Sales", "Finance", "Operations", "Team", "System"]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("organization")
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Settings State
  const [pipelineStages, setPipelineStages] = useState<PipelineStage[]>(initialPipelineStages)
  const [leadCategories, setLeadCategories] = useState<LeadCategory[]>(initialLeadCategories)
  const [taxConfigs, setTaxConfigs] = useState<TaxConfig[]>(initialTaxConfigs)
  const [notifications, setNotifications] = useState<NotificationSetting[]>(initialNotifications)
  const [invoicePrefix, setInvoicePrefix] = useState("INV")
  const [invoiceStartNumber, setInvoiceStartNumber] = useState(1001)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSave = () => {
    setSaveStatus("saving")
    setTimeout(() => {
      setSaveStatus("saved")
      setTimeout(() => setSaveStatus("idle"), 2000)
    }, 1000)
  }

  const toggleNotification = (id: string, type: "email" | "push" | "sms") => {
    setNotifications((prev) =>
      prev.map((n) => n.id === id ? { ...n, [type]: !n[type] } : n)
    )
  }

  const groupedSections = groupOrder.map(group => ({
    group,
    sections: settingsSections.filter(s => s.group === group)
  }))

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-1">Configure your CRM, templates, and business preferences</p>
          </div>
          <Button onClick={handleSave} disabled={saveStatus === "saving"} className="gap-2">
            {saveStatus === "saving" ? (
              <>
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Saving...
              </>
            ) : saveStatus === "saved" ? (
              <>
                <Check className="w-4 h-4" />
                Saved
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <AnimatedCard delay={100} className="lg:w-72 shrink-0 h-fit" hover={false}>
            <CardContent className="p-3">
              <ScrollArea className="h-[calc(100vh-220px)]">
                <nav className="space-y-4">
                  {groupedSections.map((group) => (
                    <div key={group.group}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
                        {group.group}
                      </p>
                      <div className="space-y-1">
                        {group.sections.map((section) => (
                          <button
                            key={section.id}
                            onClick={() => setActiveTab(section.id)}
                            className={cn(
                              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                              activeTab === section.id
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                          >
                            <section.icon className="w-4 h-4" />
                            {section.label}
                            <ChevronRight className={cn(
                              "w-4 h-4 ml-auto transition-transform",
                              activeTab === section.id && "rotate-90"
                            )} />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </ScrollArea>
            </CardContent>
          </AnimatedCard>

          {/* Content Area */}
          <div className="flex-1 space-y-6">
            {/* Organization Settings */}
            {activeTab === "organization" && (
              <>
                <AnimatedCard delay={200}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Organization Profile
                    </CardTitle>
                    <CardDescription>Manage your company branding and business information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-xl bg-primary/20 flex items-center justify-center border-2 border-dashed border-primary/50">
                        <Building2 className="w-10 h-10 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                          <Upload className="w-4 h-4" />
                          Upload Logo
                        </Button>
                        <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB. Recommended: 256x256px</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" defaultValue="Your Company" className="bg-secondary border-0" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="website" defaultValue="yourcompany.com" className="bg-secondary border-0 pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Business Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="email" defaultValue="contact@yourcompany.com" className="bg-secondary border-0 pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="phone" defaultValue="+1 (555) 123-4567" className="bg-secondary border-0 pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxId">Tax ID / VAT Number</Label>
                        <Input id="taxId" placeholder="Enter tax ID" className="bg-secondary border-0" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Business Address</Label>
                        <Textarea
                          id="address"
                          className="bg-secondary border-0"
                          defaultValue="123 Business Street, Suite 100&#10;City, State 12345"
                        />
                      </div>
                    </div>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard delay={300}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      Regional Settings
                    </CardTitle>
                    <CardDescription>Configure timezone, currency, and date formats</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Timezone</Label>
                      <Select defaultValue="utc+6">
                        <SelectTrigger className="bg-secondary border-0">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                          <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="utc+6">Bangladesh (UTC+6)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Default Currency</Label>
                      <Select defaultValue="bdt">
                        <SelectTrigger className="bg-secondary border-0">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="bdt">BDT (৳)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Date Format</Label>
                      <Select defaultValue="dmy">
                        <SelectTrigger className="bg-secondary border-0">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Fiscal Year Start</Label>
                      <Select defaultValue="jan">
                        <SelectTrigger className="bg-secondary border-0">
                          <SelectValue placeholder="Select month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jan">January</SelectItem>
                          <SelectItem value="apr">April</SelectItem>
                          <SelectItem value="jul">July</SelectItem>
                          <SelectItem value="oct">October</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </AnimatedCard>
              </>
            )}

            {/* Templates Settings */}
            {activeTab === "templates" && (
              <>
                <AnimatedCard delay={200}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Receipt className="w-5 h-5 text-primary" />
                      Invoice Template
                    </CardTitle>
                    <CardDescription>Customize how your invoices look</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Invoice Number Prefix</Label>
                          <Input
                            value={invoicePrefix}
                            onChange={(e) => setInvoicePrefix(e.target.value)}
                            className="bg-secondary border-0"
                            placeholder="INV"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Starting Number</Label>
                          <Input
                            type="number"
                            value={invoiceStartNumber}
                            onChange={(e) => setInvoiceStartNumber(parseInt(e.target.value))}
                            className="bg-secondary border-0"
                          />
                        </div>
                        <div className="p-3 rounded-lg bg-secondary/50">
                          <p className="text-sm text-muted-foreground">Preview:</p>
                          <p className="font-mono font-medium">{invoicePrefix}-{new Date().getFullYear()}-{String(invoiceStartNumber).padStart(4, '0')}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Logo Position</Label>
                          <Select defaultValue="left">
                            <SelectTrigger className="bg-secondary border-0">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="left">Left</SelectItem>
                              <SelectItem value="center">Center</SelectItem>
                              <SelectItem value="right">Right</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Accent Color</Label>
                          <div className="flex gap-2">
                            {["#3b82f6", "#8b5cf6", "#22c55e", "#f59e0b", "#ef4444"].map((color) => (
                              <button
                                key={color}
                                className="w-8 h-8 rounded-lg border-2 border-transparent hover:border-foreground/50 transition-all"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Default Payment Terms</Label>
                        <Textarea
                          className="bg-secondary border-0"
                          defaultValue="Payment is due within 30 days. Late payments may incur a fee of 1.5% per month."
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Default Notes</Label>
                        <Textarea
                          className="bg-secondary border-0"
                          defaultValue="Thank you for your business!"
                          rows={2}
                        />
                      </div>
                    </div>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard delay={300}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      Email Templates
                    </CardTitle>
                    <CardDescription>Customize automated email communications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Invoice Sent", description: "Sent when invoice is issued to client" },
                        { name: "Payment Reminder", description: "Reminder for upcoming/overdue payments" },
                        { name: "Payment Received", description: "Confirmation when payment is received" },
                        { name: "Welcome Email", description: "Sent to new clients" },
                      ].map((template, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          <div>
                            <p className="font-medium">{template.name}</p>
                            <p className="text-sm text-muted-foreground">{template.description}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Pencil className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              </>
            )}

            {/* Sales Pipeline Settings */}
            {activeTab === "pipeline" && (
              <>
                <AnimatedCard delay={200}>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Workflow className="w-5 h-5 text-primary" />
                        Pipeline Stages
                      </CardTitle>
                      <CardDescription>Configure your sales pipeline stages</CardDescription>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Add Stage
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {pipelineStages.map((stage, i) => (
                        <div
                          key={stage.id}
                          className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 group"
                        >
                          <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: stage.color }}
                          />
                          <Input
                            value={stage.name}
                            className="flex-1 bg-transparent border-0 h-8"
                            onChange={(e) => {
                              const updated = [...pipelineStages]
                              updated[i].name = e.target.value
                              setPipelineStages(updated)
                            }}
                          />
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Probability:</span>
                            <Input
                              type="number"
                              value={stage.probability}
                              className="w-16 bg-secondary border-0 h-8 text-center"
                              onChange={(e) => {
                                const updated = [...pipelineStages]
                                updated[i].probability = parseInt(e.target.value) || 0
                                setPipelineStages(updated)
                              }}
                            />
                            <span className="text-sm text-muted-foreground">%</span>
                          </div>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard delay={300}>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Lead Categories
                      </CardTitle>
                      <CardDescription>Categorize your leads by service type</CardDescription>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Add Category
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {leadCategories.map((cat) => (
                        <div
                          key={cat.id}
                          className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 group"
                        >
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: cat.color }}
                          />
                          <span className="flex-1 text-sm font-medium">{cat.name}</span>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100">
                            <Pencil className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              </>
            )}

            {/* Finance Settings */}
            {activeTab === "finance" && (
              <>
                <AnimatedCard delay={200}>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        Tax Configuration
                      </CardTitle>
                      <CardDescription>Manage tax rates for invoices</CardDescription>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Add Tax Rate
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {taxConfigs.map((tax) => (
                        <div
                          key={tax.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                        >
                          <div className="flex items-center gap-4">
                            <div>
                              <p className="font-medium">{tax.name}</p>
                              <p className="text-sm text-muted-foreground">{tax.rate}%</p>
                            </div>
                            {tax.isDefault && (
                              <Badge className="bg-primary/20 text-primary border-0">Default</Badge>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard delay={300}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Payment Settings
                    </CardTitle>
                    <CardDescription>Configure payment methods and terms</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Default Payment Terms</Label>
                        <Select defaultValue="net30">
                          <SelectTrigger className="bg-secondary border-0">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="due_on_receipt">Due on Receipt</SelectItem>
                            <SelectItem value="net15">Net 15</SelectItem>
                            <SelectItem value="net30">Net 30</SelectItem>
                            <SelectItem value="net60">Net 60</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Late Payment Fee (%)</Label>
                        <Input type="number" defaultValue="1.5" className="bg-secondary border-0" />
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <Label className="mb-3 block">Accepted Payment Methods</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "Bank Transfer", enabled: true },
                          { name: "Credit Card", enabled: true },
                          { name: "Cash", enabled: true },
                          { name: "Check", enabled: false },
                          { name: "Mobile Payment", enabled: true },
                          { name: "PayPal", enabled: false },
                        ].map((method) => (
                          <div key={method.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                            <span className="text-sm">{method.name}</span>
                            <Switch defaultChecked={method.enabled} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </AnimatedCard>
              </>
            )}

            {/* Client Settings */}
            {activeTab === "clients" && (
              <AnimatedCard delay={200}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Client Configuration
                  </CardTitle>
                  <CardDescription>Manage client tiers and health scoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="mb-3 block">Client Tiers</Label>
                    <div className="space-y-3">
                      {[
                        { name: "Enterprise", minValue: 100000, color: "#f59e0b" },
                        { name: "Professional", minValue: 25000, color: "#3b82f6" },
                        { name: "Starter", minValue: 0, color: "#64748b" },
                      ].map((tier) => (
                        <div
                          key={tier.name}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tier.color }} />
                            <span className="font-medium">{tier.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Min Value: $</span>
                            <Input
                              type="number"
                              defaultValue={tier.minValue}
                              className="w-28 bg-secondary border-0 h-8"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="mb-3 block">Health Score Weights</Label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { factor: "Payment History", weight: 30 },
                        { factor: "Engagement", weight: 25 },
                        { factor: "Project Activity", weight: 25 },
                        { factor: "NPS Score", weight: 20 },
                      ].map((item) => (
                        <div key={item.factor} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                          <span className="text-sm">{item.factor}</span>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              defaultValue={item.weight}
                              className="w-16 bg-secondary border-0 h-8 text-center"
                            />
                            <span className="text-sm text-muted-foreground">%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            )}

            {/* Tasks & Projects Settings */}
            {activeTab === "tasks" && (
              <AnimatedCard delay={200}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FolderKanban className="w-5 h-5 text-primary" />
                    Task & Project Configuration
                  </CardTitle>
                  <CardDescription>Customize task statuses and project settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="mb-3 block">Task Statuses</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Backlog", "To Do", "In Progress", "In Review", "Done", "Blocked"].map((status) => (
                        <Badge key={status} variant="secondary" className="gap-2 py-2 px-3">
                          {status}
                          <X className="w-3 h-3 cursor-pointer hover:text-destructive" />
                        </Badge>
                      ))}
                      <Button variant="outline" size="sm" className="gap-1">
                        <Plus className="w-3 h-3" />
                        Add Status
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="mb-3 block">Priority Levels</Label>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { name: "Critical", color: "#ef4444" },
                        { name: "High", color: "#f97316" },
                        { name: "Medium", color: "#eab308" },
                        { name: "Low", color: "#22c55e" },
                      ].map((priority) => (
                        <div key={priority.name} className="p-3 rounded-lg bg-secondary/50 text-center">
                          <div className="w-4 h-4 rounded-full mx-auto mb-2" style={{ backgroundColor: priority.color }} />
                          <span className="text-sm font-medium">{priority.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable Task Automation</p>
                      <p className="text-sm text-muted-foreground">Automatically move tasks based on rules</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </AnimatedCard>
            )}

            {/* Team & Roles */}
            {activeTab === "team" && (
              <AnimatedCard delay={200}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Team Members
                    </CardTitle>
                    <CardDescription>Manage team access and permissions</CardDescription>
                  </div>
                  <Button size="sm" className="gap-2">
                    <Plus className="w-4 h-4" />
                    Invite Member
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-primary/20 text-primary">{member.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Select defaultValue={member.role.toLowerCase()}>
                            <SelectTrigger className="w-[120px] bg-secondary border-0">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="manager">Manager</SelectItem>
                              <SelectItem value="member">Member</SelectItem>
                              <SelectItem value="viewer">Viewer</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
            )}

            {/* Notifications */}
            {activeTab === "notifications" && (
              <AnimatedCard delay={200}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Choose how and when you want to be notified</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-4 text-xs font-medium text-muted-foreground pb-2 border-b border-border">
                      <div className="col-span-1">Notification Type</div>
                      <div className="flex items-center justify-center gap-1">
                        <Mail className="w-3.5 h-3.5" />
                        Email
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Bell className="w-3.5 h-3.5" />
                        Push
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Smartphone className="w-3.5 h-3.5" />
                        SMS
                      </div>
                    </div>

                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="grid grid-cols-4 gap-4 py-3 items-center"
                      >
                        <div>
                          <p className="font-medium text-sm">{notification.title}</p>
                          <p className="text-xs text-muted-foreground">{notification.description}</p>
                        </div>
                        <div className="flex justify-center">
                          <Switch
                            checked={notification.email}
                            onCheckedChange={() => toggleNotification(notification.id, "email")}
                          />
                        </div>
                        <div className="flex justify-center">
                          <Switch
                            checked={notification.push}
                            onCheckedChange={() => toggleNotification(notification.id, "push")}
                          />
                        </div>
                        <div className="flex justify-center">
                          <Switch
                            checked={notification.sms}
                            onCheckedChange={() => toggleNotification(notification.id, "sms")}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
            )}

            {/* Integrations */}
            {activeTab === "integrations" && (
              <AnimatedCard delay={200}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Link2 className="w-5 h-5 text-primary" />
                    Integrations
                  </CardTitle>
                  <CardDescription>Connect with third-party services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Google Calendar", description: "Sync events and meetings", connected: true, icon: Calendar },
                      { name: "Stripe", description: "Accept online payments", connected: true, icon: CreditCard },
                      { name: "Slack", description: "Team notifications", connected: false, icon: Zap },
                      { name: "QuickBooks", description: "Accounting sync", connected: false, icon: BarChart3 },
                    ].map((integration) => (
                      <div
                        key={integration.name}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <integration.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{integration.name}</p>
                            <p className="text-sm text-muted-foreground">{integration.description}</p>
                          </div>
                        </div>
                        <Button
                          variant={integration.connected ? "outline" : "default"}
                          size="sm"
                          className={integration.connected ? "bg-transparent" : ""}
                        >
                          {integration.connected ? "Disconnect" : "Connect"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
            )}

            {/* Data Management */}
            {activeTab === "data" && (
              <AnimatedCard delay={200}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Data Management
                  </CardTitle>
                  <CardDescription>Export, import, and manage your data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/50 space-y-3">
                      <div className="flex items-center gap-2">
                        <Download className="w-5 h-5 text-primary" />
                        <span className="font-medium">Export Data</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Download all your data as CSV or JSON</p>
                      <Button variant="outline" className="w-full bg-transparent">Export All Data</Button>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 space-y-3">
                      <div className="flex items-center gap-2">
                        <Upload className="w-5 h-5 text-primary" />
                        <span className="font-medium">Import Data</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Import leads, clients, or projects from CSV</p>
                      <Button variant="outline" className="w-full bg-transparent">Import Data</Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="p-4 rounded-lg border border-destructive/30 bg-destructive/5 space-y-3">
                    <div className="flex items-center gap-2 text-destructive">
                      <AlertTriangle className="w-5 h-5" />
                      <span className="font-medium">Danger Zone</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete all data. This action cannot be undone.
                    </p>
                    <Button variant="destructive" size="sm">Delete All Data</Button>
                  </div>
                </CardContent>
              </AnimatedCard>
            )}

            {/* Security */}
            {activeTab === "security" && (
              <>
                <AnimatedCard delay={200}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Key className="w-5 h-5 text-primary" />
                      Password & Authentication
                    </CardTitle>
                    <CardDescription>Manage your security settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" className="bg-secondary border-0" placeholder="••••••••" />
                      </div>
                      <div />
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" className="bg-secondary border-0" placeholder="••••••••" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" className="bg-secondary border-0" placeholder="••••••••" />
                      </div>
                    </div>
                    <Button variant="outline" className="bg-transparent">Update Password</Button>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard delay={300}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      Two-Factor Authentication
                    </CardTitle>
                    <CardDescription>Add an extra layer of security</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-green-500/20">
                          <Shield className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">Currently enabled via authenticator app</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500/20 text-green-500 border-0">Enabled</Badge>
                    </div>
                  </CardContent>
                </AnimatedCard>
              </>
            )}

            {/* Appearance */}
            {activeTab === "appearance" && (
              <AnimatedCard delay={200}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Palette className="w-5 h-5 text-primary" />
                    Appearance Settings
                  </CardTitle>
                  <CardDescription>Customize the look and feel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>Theme</Label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { name: "Light", value: "light", icon: Sun },
                        { name: "Dark", value: "dark", icon: Moon },
                        { name: "System", value: "system", icon: Monitor },
                      ].map((themeOption) => {
                        const isActive = mounted && theme === themeOption.value
                        const ThemeIcon = themeOption.icon
                        return (
                          <button
                            key={themeOption.value}
                            onClick={() => setTheme(themeOption.value)}
                            className={cn(
                              "p-4 rounded-lg border-2 transition-all text-center",
                              isActive ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                            )}
                          >
                            <div
                              className={cn(
                                "w-full h-16 rounded-lg mb-2 flex items-center justify-center",
                                themeOption.value === "light" ? "bg-white border text-zinc-900"
                                  : themeOption.value === "dark" ? "bg-zinc-900 border border-zinc-700 text-white"
                                    : "bg-gradient-to-r from-white to-zinc-900 border"
                              )}
                            >
                              <ThemeIcon className="w-8 h-8" />
                            </div>
                            <span className="text-sm font-medium">{themeOption.name}</span>
                            {isActive && (
                              <Badge className="ml-2 bg-primary/20 text-primary border-0">Active</Badge>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Compact Mode</p>
                        <p className="text-sm text-muted-foreground">Reduce spacing in the interface</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Animations</p>
                        <p className="text-sm text-muted-foreground">Enable smooth animations</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sidebar Collapsed by Default</p>
                        <p className="text-sm text-muted-foreground">Start with collapsed sidebar</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
