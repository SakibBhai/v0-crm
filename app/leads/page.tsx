"use client"

import type React from "react"
import { useState, useRef } from "react"
import { generateId, generateBulkIds } from "@/lib/id-generator"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { employees } from "@/lib/data/hr"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  Building2,
  Calendar,
  DollarSign,
  ArrowUpRight,
  Flame,
  Thermometer,
  Snowflake,
  Trash2,
  Edit,
  Eye,
  LayoutGrid,
  List,
  Columns3,
  GripVertical,
  X,
  TrendingUp,
  Clock,
  Target,
  Users,
  Globe,
  Linkedin,
  MessageSquare,
  Star,
  StarOff,
  CalendarPlus,
  SlidersHorizontal,
  Download,
  Upload,
  History,
  FolderOpen,
  Tag,
  Video,
  MapPin,
} from "lucide-react"

type Stage = "new" | "contacted" | "qualified" | "proposal" | "negotiation" | "won" | "lost"

// Category type for leads
type LeadCategory = "digital_marketing" | "seo" | "social_media" | "content" | "branding" | "web_development" | "ppc" | "other"

const categoryConfig: Record<LeadCategory, { label: string; color: string }> = {
  digital_marketing: { label: "Digital Marketing", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  seo: { label: "SEO", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  social_media: { label: "Social Media", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
  content: { label: "Content", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  branding: { label: "Branding", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  web_development: { label: "Web Development", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
  ppc: { label: "PPC", color: "bg-rose-500/20 text-rose-400 border-rose-500/30" },
  other: { label: "Other", color: "bg-slate-500/20 text-slate-400 border-slate-500/30" },
}

interface Lead {
  id: string
  name: string
  company: string
  email: string
  phone: string
  status: "hot" | "warm" | "cold"
  stage: Stage
  priority: "high" | "medium" | "low"
  category: LeadCategory
  value: number
  probability: number
  source: string
  assignedTo: string
  activities: number
  tags: string[]
  notes: string
  noteHistory: Array<{
    id: string
    content: string
    createdAt: string
    createdBy: string
  }>
  createdAt: string
  lastContact: string
  nextFollowUp: string
  starred: boolean
  activityHistory: Array<{
    id: string
    type: "created" | "updated" | "note_added" | "status_changed" | "stage_changed" | "category_changed" | "meeting_scheduled"
    description: string
    timestamp: string
    changedBy: string
    changes?: Record<string, { old: string | number; new: string | number }>
    meetingType?: "online" | "offline"
    meetingDetails?: string
    meetingDate?: string
    meetingTime?: string
    meetingLocation?: string
    meetingLink?: string
    meetingAttendees?: Array<{ id: string; name: string; initials: string }>
  }>
}

const initialLeads: Lead[] = [
  {
    id: "LD-0001",
    name: "Sarah Mitchell",
    email: "sarah@techstart.com",
    phone: "+1 (555) 123-4567",
    company: "TechStart Inc",
    status: "hot",
    stage: "proposal",
    source: "Website",
    value: 15000,
    probability: 75,
    createdAt: "2024-12-10",
    lastContact: "2024-12-15",
    nextFollowUp: "2024-12-18",
    notes: "Very interested in our SEO services. Follow up scheduled for next week.",
    noteHistory: [
      { id: "n1", content: "Very interested in our SEO services. Follow up scheduled for next week.", createdAt: "2024-12-15T10:30:00Z", createdBy: "John Smith" },
      { id: "n2", content: "Initial call went well. Client has budget approved.", createdAt: "2024-12-12T14:00:00Z", createdBy: "John Smith" },
    ],
    tags: ["SEO", "Enterprise"],
    assignedTo: "John Smith",
    priority: "high",
    category: "seo",
    starred: true,
    activities: 12,
    activityHistory: [],
  },
  {
    id: "LD-0002",
    name: "James Wilson",
    email: "james@growthco.io",
    phone: "+1 (555) 234-5678",
    company: "GrowthCo",
    status: "warm",
    stage: "contacted",
    source: "Referral",
    value: 8500,
    probability: 50,
    createdAt: "2024-12-08",
    lastContact: "2024-12-14",
    nextFollowUp: "2024-12-19",
    notes: "Needs proposal for social media management.",
    noteHistory: [
      { id: "n1", content: "Needs proposal for social media management.", createdAt: "2024-12-14T09:15:00Z", createdBy: "Emma Davis" },
    ],
    tags: ["Social Media"],
    assignedTo: "Emma Davis",
    priority: "medium",
    category: "social_media",
    starred: false,
    activities: 5,
    activityHistory: [],
  },
  {
    id: "LD-0003",
    name: "Emily Chen",
    email: "emily@innovatelab.com",
    phone: "+1 (555) 345-6789",
    company: "InnovateLab",
    status: "hot",
    stage: "negotiation",
    source: "LinkedIn",
    value: 22000,
    probability: 85,
    createdAt: "2024-12-05",
    lastContact: "2024-12-16",
    nextFollowUp: "2024-12-17",
    notes: "Looking for full-service digital marketing. High budget project.",
    noteHistory: [
      { id: "n1", content: "Looking for full-service digital marketing. High budget project.", createdAt: "2024-12-16T11:00:00Z", createdBy: "John Smith" },
      { id: "n2", content: "Discussed project scope. Client wants comprehensive solution.", createdAt: "2024-12-10T15:30:00Z", createdBy: "John Smith" },
      { id: "n3", content: "Connected via LinkedIn. Very responsive.", createdAt: "2024-12-05T09:00:00Z", createdBy: "John Smith" },
    ],
    tags: ["Full Service", "Priority"],
    assignedTo: "John Smith",
    priority: "high",
    category: "digital_marketing",
    starred: true,
    activities: 18,
    activityHistory: [],
  },
  {
    id: "LD-0004",
    name: "Michael Brown",
    email: "michael@scaleup.ltd",
    phone: "+1 (555) 456-7890",
    company: "ScaleUp Ltd",
    status: "cold",
    stage: "new",
    source: "Cold Email",
    value: 5000,
    probability: 20,
    createdAt: "2024-12-01",
    lastContact: "2024-12-10",
    nextFollowUp: "2024-12-20",
    notes: "Initial contact made. Waiting for response.",
    noteHistory: [
      { id: "n1", content: "Initial contact made. Waiting for response.", createdAt: "2024-12-10T08:45:00Z", createdBy: "Alex Johnson" },
    ],
    tags: ["PPC"],
    assignedTo: "Alex Johnson",
    priority: "low",
    category: "ppc",
    starred: false,
    activities: 2,
    activityHistory: [],
  },
  {
    id: "LD-0005",
    name: "Amanda Torres",
    email: "amanda@brightideas.co",
    phone: "+1 (555) 567-8901",
    company: "Bright Ideas Co",
    status: "warm",
    stage: "qualified",
    source: "Conference",
    value: 12000,
    probability: 60,
    createdAt: "2024-12-03",
    lastContact: "2024-12-13",
    nextFollowUp: "2024-12-18",
    notes: "Met at MarketingCon. Interested in PPC campaigns.",
    noteHistory: [
      { id: "n1", content: "Met at MarketingCon. Interested in PPC campaigns.", createdAt: "2024-12-13T16:20:00Z", createdBy: "Emma Davis" },
      { id: "n2", content: "Great conversation at the conference booth.", createdAt: "2024-12-03T14:00:00Z", createdBy: "Emma Davis" },
    ],
    tags: ["PPC", "Conference Lead"],
    assignedTo: "Emma Davis",
    priority: "medium",
    category: "ppc",
    starred: false,
    activities: 8,
    activityHistory: [],
  },
  {
    id: "LD-0006",
    name: "David Park",
    email: "david@nexgen.tech",
    phone: "+1 (555) 678-9012",
    company: "NexGen Tech",
    status: "hot",
    stage: "proposal",
    source: "Website",
    value: 35000,
    probability: 70,
    createdAt: "2024-12-12",
    lastContact: "2024-12-16",
    nextFollowUp: "2024-12-17",
    notes: "Enterprise client. Looking for comprehensive brand overhaul.",
    noteHistory: [
      { id: "n1", content: "Enterprise client. Looking for comprehensive brand overhaul.", createdAt: "2024-12-16T13:45:00Z", createdBy: "John Smith" },
    ],
    tags: ["Branding", "Enterprise", "Priority"],
    assignedTo: "John Smith",
    priority: "high",
    category: "branding",
    starred: true,
    activities: 15,
    activityHistory: [],
  },
  {
    id: "LD-0007",
    name: "Lisa Wang",
    email: "lisa@cloudnine.io",
    phone: "+1 (555) 789-0123",
    company: "CloudNine",
    status: "warm",
    stage: "contacted",
    source: "LinkedIn",
    value: 9500,
    probability: 45,
    createdAt: "2024-12-11",
    lastContact: "2024-12-15",
    nextFollowUp: "2024-12-19",
    notes: "Interested in content marketing strategy.",
    noteHistory: [
      { id: "n1", content: "Interested in content marketing strategy.", createdAt: "2024-12-15T10:00:00Z", createdBy: "Alex Johnson" },
    ],
    tags: ["Content"],
    assignedTo: "Alex Johnson",
    priority: "medium",
    category: "content",
    starred: false,
    activities: 4,
    activityHistory: [],
  },
  {
    id: "LD-0008",
    name: "Robert Kim",
    email: "robert@fintech.pro",
    phone: "+1 (555) 890-1234",
    company: "FinTech Pro",
    status: "cold",
    stage: "new",
    source: "Webinar",
    value: 18000,
    probability: 25,
    createdAt: "2024-12-14",
    lastContact: "2024-12-14",
    nextFollowUp: "2024-12-21",
    notes: "Attended webinar on digital transformation.",
    noteHistory: [
      { id: "n1", content: "Attended webinar on digital transformation.", createdAt: "2024-12-14T17:30:00Z", createdBy: "Emma Davis" },
    ],
    tags: ["Webinar Lead", "Finance"],
    assignedTo: "Emma Davis",
    priority: "low",
    category: "digital_marketing",
    starred: false,
    activities: 1,
    activityHistory: [],
  },
]

const statusConfig = {
  hot: { label: "Hot", icon: Flame, color: "bg-red-500/20 text-red-400 border-red-500/30" },
  warm: { label: "Warm", icon: Thermometer, color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  cold: { label: "Cold", icon: Snowflake, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
}

const stageConfig = {
  new: { label: "New", color: "bg-slate-500/20 text-slate-400", order: 0 },
  contacted: { label: "Contacted", color: "bg-blue-500/20 text-blue-400", order: 1 },
  qualified: { label: "Qualified", color: "bg-cyan-500/20 text-cyan-400", order: 2 },
  proposal: { label: "Proposal", color: "bg-violet-500/20 text-violet-400", order: 3 },
  negotiation: { label: "Negotiation", color: "bg-amber-500/20 text-amber-400", order: 4 },
  won: { label: "Won", color: "bg-emerald-500/20 text-emerald-400", order: 5 },
  lost: { label: "Lost", color: "bg-red-500/20 text-red-400", order: 6 },
}

const priorityConfig = {
  high: { label: "High", color: "text-red-400" },
  medium: { label: "Medium", color: "text-amber-400" },
  low: { label: "Low", color: "text-slate-400" },
}

const sourceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Website: Globe,
  LinkedIn: Linkedin,
  Referral: Users,
  "Cold Email": Mail,
  Conference: Target,
  Webinar: MessageSquare,
}

type ViewMode = "table" | "grid" | "kanban"
// type Stage = Lead["stage"] // moved Stage type definition up

// Helper function to format time ago
const getTimeAgo = (dateString: string): string => {
  const now = new Date()
  const date = new Date(dateString)
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return "just now"
  }
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`
  }
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`
  }
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`
  }
  const diffInWeeks = Math.floor(diffInDays / 7)
  if (diffInWeeks < 4) {
    return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`
  }
  const diffInMonths = Math.floor(diffInDays / 30)
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`
  }
  const diffInYears = Math.floor(diffInDays / 365)
  return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [sourceFilter, setSourceFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")
  const [assigneeFilter, setAssigneeFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>("kanban")
  const [selectedLeads, setSelectedLeads] = useState<string[]>([])
  const [draggedLead, setDraggedLead] = useState<Lead | null>(null)
  const [dragOverStage, setDragOverStage] = useState<Stage | null>(null)
  const wasDragging = useRef(false)
  const [newNoteText, setNewNoteText] = useState("")
  const [isAddMeetingOpen, setIsAddMeetingOpen] = useState(false)
  const [meetingType, setMeetingType] = useState<"online" | "offline">("online")
  const [meetingDetails, setMeetingDetails] = useState("")
  const [meetingDate, setMeetingDate] = useState("")
  const [meetingTime, setMeetingTime] = useState("")
  const [meetingLocation, setMeetingLocation] = useState("")
  const [meetingLink, setMeetingLink] = useState("")
  const [meetingAttendees, setMeetingAttendees] = useState<string[]>([])

  // Team members from employees data
  const teamMembers = employees.map(emp => ({
    id: emp.id,
    name: `${emp.firstName} ${emp.lastName}`,
    initials: `${emp.firstName[0]}${emp.lastName[0]}`,
    jobTitle: emp.jobTitle,
  }))

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter
    const matchesSource = sourceFilter === "all" || lead.source === sourceFilter
    const matchesPriority = priorityFilter === "all" || lead.priority === priorityFilter
    const matchesAssignee = assigneeFilter === "all" || lead.assignedTo === assigneeFilter
    const matchesCategory = categoryFilter === "all" || lead.category === categoryFilter
    return matchesSearch && matchesStatus && matchesSource && matchesPriority && matchesAssignee && matchesCategory
  })

  const stats = {
    total: leads.length,
    hot: leads.filter((l) => l.status === "hot").length,
    warm: leads.filter((l) => l.status === "warm").length,
    cold: leads.filter((l) => l.status === "cold").length,
    totalValue: leads.reduce((sum, l) => sum + l.value, 0),
    weightedValue: leads.reduce((sum, l) => sum + (l.value * l.probability) / 100, 0),
    avgProbability: Math.round(leads.reduce((sum, l) => sum + l.probability, 0) / leads.length),
    starred: leads.filter((l) => l.starred).length,
  }

  const uniqueSources = [...new Set(leads.map((l) => l.source))]
  const uniqueAssignees = [...new Set(leads.map((l) => l.assignedTo))]

  const handleAddLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newLead: Lead = {
      id: generateId("LD", leads),
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      status: formData.get("status") as "hot" | "warm" | "cold",
      stage: formData.get("stage") as Stage,
      source: formData.get("source") as string,
      value: Number(formData.get("value")),
      probability: Number(formData.get("probability")) || 50,
      createdAt: new Date().toISOString().split("T")[0],
      lastContact: new Date().toISOString().split("T")[0],
      nextFollowUp: (formData.get("nextFollowUp") as string) || "",
      notes: formData.get("notes") as string,
      tags:
        (formData.get("tags") as string)
          ?.split(",")
          .map((t) => t.trim())
          .filter(Boolean) || [],
      assignedTo: (formData.get("assignedTo") as string) || "Unassigned",
      priority: formData.get("priority") as "high" | "medium" | "low",
      category: (formData.get("category") as LeadCategory) || "other",
      starred: false,
      activities: 0,
      noteHistory: formData.get("notes") ? [
        {
          id: Date.now().toString(),
          content: formData.get("notes") as string,
          createdAt: new Date().toISOString(),
          createdBy: "Current User",
        },
      ] : [],
      activityHistory: [
        {
          id: Date.now().toString(),
          type: "created",
          description: "Lead created",
          timestamp: new Date().toISOString(),
          changedBy: "Current User",
        },
      ],
    }
    setLeads([newLead, ...leads])
    setIsAddDialogOpen(false)
  }

  const addActivityHistory = (
    leadId: string,
    type: Lead["activityHistory"][0]["type"],
    description: string,
    changes?: Record<string, { old: string | number; new: string | number }>,
  ) => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === leadId) {
          return {
            ...lead,
            activityHistory: [
              {
                id: Date.now().toString(),
                type,
                description,
                timestamp: new Date().toISOString(),
                changedBy: "Current User",
                changes,
              },
              ...lead.activityHistory,
            ],
          }
        }
        return lead
      }),
    )
  }

  const handleDeleteLead = (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id))
    setSelectedLeads((prev) => prev.filter((sid) => sid !== id))
    setIsViewDialogOpen(false) // Close the view dialog if the lead being viewed is deleted
  }

  const handleUpdateLead = (updatedData: Partial<Lead>) => {
    if (!selectedLead) return

    const oldLead = leads.find((l) => l.id === selectedLead.id)
    if (!oldLead) return

    // Track changes
    const changes: Record<string, { old: string | number; new: string | number }> = {}
    // Only compare fields that are potentially editable and relevant for history tracking
    if (oldLead.name !== updatedData.name) changes["name"] = { old: oldLead.name, new: updatedData.name! }
    if (oldLead.email !== updatedData.email) changes["email"] = { old: oldLead.email, new: updatedData.email! }
    if (oldLead.phone !== updatedData.phone) changes["phone"] = { old: oldLead.phone, new: updatedData.phone! }
    if (oldLead.status !== updatedData.status) changes["status"] = { old: oldLead.status, new: updatedData.status! }
    if (oldLead.stage !== updatedData.stage) changes["stage"] = { old: oldLead.stage, new: updatedData.stage! }
    if (oldLead.priority !== updatedData.priority)
      changes["priority"] = { old: oldLead.priority, new: updatedData.priority! }
    if (updatedData.value !== undefined && oldLead.value !== updatedData.value)
      changes["value"] = { old: oldLead.value, new: updatedData.value }
    if (updatedData.probability !== undefined && oldLead.probability !== updatedData.probability)
      changes["probability"] = { old: oldLead.probability, new: updatedData.probability }
    if (updatedData.source !== undefined && oldLead.source !== updatedData.source)
      changes["source"] = { old: oldLead.source, new: updatedData.source }
    if (updatedData.nextFollowUp !== undefined && oldLead.nextFollowUp !== updatedData.nextFollowUp)
      changes["nextFollowUp"] = { old: oldLead.nextFollowUp || "none", new: updatedData.nextFollowUp || "none" }
    if (oldLead.notes !== updatedData.notes)
      changes["notes"] = { old: oldLead.notes || "", new: updatedData.notes || "" }

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === selectedLead.id
          ? {
            ...lead,
            ...updatedData,
            lastContact: new Date().toISOString(), // Update lastContact on any edit
          }
          : lead,
      ),
    )

    const updatedLead = { ...selectedLead, ...updatedData, lastContact: new Date().toISOString() }
    setSelectedLead(updatedLead)

    // Add to activity history only if there were actual changes detected
    if (Object.keys(changes).length > 0) {
      addActivityHistory(selectedLead.id, "updated", "Lead information updated", changes)
    } else if (updatedData.notes && oldLead.notes !== updatedData.notes) {
      // Special case for notes, even if other fields didn't change, if notes were added/changed
      addActivityHistory(selectedLead.id, "note_added", "Note added", {
        notes: { old: oldLead.notes || "", new: updatedData.notes },
      })
    }

    setIsEditDialogOpen(false)
  }

  const handleStatusChange = (id: string, newStatus: "hot" | "warm" | "cold") => {
    const oldLead = leads.find((l) => l.id === id)
    if (!oldLead) return

    setLeads((prev) =>
      prev.map((l) =>
        l.id === id
          ? {
            ...l,
            status: newStatus,
            lastContact: new Date().toISOString(),
          }
          : l,
      ),
    )
    addActivityHistory(id, "status_changed", `Status changed to ${newStatus}`, {
      status: { old: oldLead.status, new: newStatus },
    })
  }

  const handleStageChange = (id: string, newStage: Stage) => {
    const oldLead = leads.find((l) => l.id === id)
    if (!oldLead) return

    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, stage: newStage, lastContact: new Date().toISOString() } : l)))
    addActivityHistory(id, "stage_changed", `Stage changed to ${newStage}`, {
      stage: { old: oldLead.stage, new: newStage },
    })
  }

  // Handle Next Follow-Up date change
  const handleFollowUpChange = (id: string, newDate: string) => {
    const oldLead = leads.find((l) => l.id === id)
    if (!oldLead) return

    const oldDate = oldLead.nextFollowUp || "Not set"

    setLeads((prev) =>
      prev.map((l) =>
        l.id === id
          ? { ...l, nextFollowUp: newDate }
          : l,
      ),
    )

    // Update selectedLead if it's the same lead
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({
        ...selectedLead,
        nextFollowUp: newDate,
      })
    }

    addActivityHistory(id, "updated", `Next follow-up date changed`, {
      "next follow-up": {
        old: oldDate ? new Date(oldDate).toLocaleDateString() : "Not set",
        new: newDate ? new Date(newDate).toLocaleDateString() : "Not set",
      },
    })
  }

  const handleToggleStar = (id: string) => {
    setLeads(leads.map((l) => (l.id === id ? { ...l, starred: !l.starred } : l)))
  }

  const handleSelectLead = (id: string) => {
    setSelectedLeads((prev) => (prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]))
  }

  const handleSelectAll = () => {
    if (selectedLeads.length === filteredLeads.length) {
      setSelectedLeads([])
    } else {
      setSelectedLeads(filteredLeads.map((l) => l.id))
    }
  }

  // Drag and Drop handlers
  const handleDragStart = (e: React.DragEvent, lead: Lead) => {
    wasDragging.current = true
    setDraggedLead(lead)
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/plain", lead.id)
  }

  const handleDragOver = (e: React.DragEvent, stage: Stage) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setDragOverStage(stage)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    // Only reset if actually leaving the column (not just moving to a child element)
    const relatedTarget = e.relatedTarget as Node | null
    if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
      setDragOverStage(null)
    }
  }

  const handleDrop = (e: React.DragEvent, targetStage: Stage) => {
    e.preventDefault()
    if (draggedLead && draggedLead.stage !== targetStage) {
      handleStageChange(draggedLead.id, targetStage)
    }
    setDraggedLead(null)
    setDragOverStage(null)
  }

  const handleDragEnd = () => {
    setDraggedLead(null)
    setDragOverStage(null)
    // Reset wasDragging after a tick so the click handler can check it
    setTimeout(() => { wasDragging.current = false }, 0)
  }

  const clearFilters = () => {
    setStatusFilter("all")
    setSourceFilter("all")
    setPriorityFilter("all")
    setAssigneeFilter("all")
    setCategoryFilter("all")
    setSearchQuery("")
  }

  const activeFiltersCount = [statusFilter, sourceFilter, priorityFilter, assigneeFilter, categoryFilter].filter(
    (f) => f !== "all",
  ).length

  const kanbanStages: Stage[] = ["new", "contacted", "qualified", "proposal", "negotiation", "won", "lost"]

  // Export leads as CSV
  const handleExportLeads = () => {
    const headers = ["Name", "Company", "Email", "Phone", "Status", "Stage", "Priority", "Category", "Source", "Assigned To", "Value", "Probability", "Tags", "Next Follow-Up", "Notes", "Created At"]
    const rows = filteredLeads.map(l => [
      l.name, l.company, l.email, l.phone, l.status, l.stage, l.priority, l.category,
      l.source, l.assignedTo, l.value, l.probability, l.tags.join("; "), l.nextFollowUp, l.notes.replace(/,/g, " "), l.createdAt,
    ])
    const csv = [headers.join(","), ...rows.map(r => r.map(v => `"${v}"`).join(","))].join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads_export_${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  // Import leads from CSV
  const handleImportLeads = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".csv"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = (ev) => {
        const text = ev.target?.result as string
        const lines = text.split("\n").filter(l => l.trim())
        if (lines.length < 2) return
        const newLeads: Lead[] = lines.slice(1).map((line, i) => {
          const cols = line.split(",").map(c => c.replace(/^"|"$/g, "").trim())
          const importIds = generateBulkIds("LD", leads, lines.length - 1)
          return {
            id: importIds[i],
            name: cols[0] || "Unknown",
            company: cols[1] || "",
            email: cols[2] || "",
            phone: cols[3] || "",
            status: (cols[4] as "hot" | "warm" | "cold") || "warm",
            stage: (cols[5] as Stage) || "new",
            priority: (cols[6] as "high" | "medium" | "low") || "medium",
            category: (cols[7] as LeadCategory) || "other",
            source: cols[8] || "Website",
            assignedTo: cols[9] || "Unassigned",
            value: Number(cols[10]) || 0,
            probability: Number(cols[11]) || 50,
            tags: cols[12] ? cols[12].split(";").map(t => t.trim()).filter(Boolean) : [],
            nextFollowUp: cols[13] || "",
            notes: cols[14] || "",
            createdAt: cols[15] || new Date().toISOString().split("T")[0],
            lastContact: new Date().toISOString().split("T")[0],
            starred: false,
            activities: 0,
            noteHistory: [],
            activityHistory: [{
              id: Date.now().toString(),
              type: "created",
              description: "Lead imported from CSV",
              timestamp: new Date().toISOString(),
              changedBy: "Current User",
            }],
          }
        })
        setLeads(prev => [...newLeads, ...prev])
      }
      reader.readAsText(file)
    }
    input.click()
  }

  // Bulk delete function (added to fix the lint error)
  const handleBulkDelete = () => {
    setLeads(leads.filter((lead) => !selectedLeads.includes(lead.id)))
    setSelectedLeads([])
  }

  // Add note to lead
  const handleAddNote = (leadId: string, noteContent: string) => {
    if (!noteContent.trim()) return

    const newNote = {
      id: Date.now().toString(),
      content: noteContent.trim(),
      createdAt: new Date().toISOString(),
      createdBy: "Current User",
    }

    setLeads(
      leads.map((lead) => {
        if (lead.id === leadId) {
          return {
            ...lead,
            notes: noteContent.trim(),
            noteHistory: [newNote, ...lead.noteHistory],
            lastContact: new Date().toISOString(),
          }
        }
        return lead
      }),
    )

    // Update selectedLead if it's the same lead
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead({
        ...selectedLead,
        notes: noteContent.trim(),
        noteHistory: [newNote, ...selectedLead.noteHistory],
        lastContact: new Date().toISOString(),
      })
    }

    // Add to activity history
    addActivityHistory(leadId, "note_added", "Note added", {
      note: { old: "", new: noteContent.trim() }
    })

    setNewNoteText("")
  }

  // Add meeting to lead
  const handleAddMeeting = (leadId: string) => {
    if (!meetingDetails.trim()) return

    const meetingLabel = meetingType === "online" ? "💻 Online Meeting" : "🏢 Offline Meeting"
    const selectedAttendees = teamMembers
      .filter(tm => meetingAttendees.includes(tm.id))
      .map(tm => ({ id: tm.id, name: tm.name, initials: tm.initials }))

    const meetingEntry = {
      id: Date.now().toString(),
      type: "meeting_scheduled" as const,
      description: `${meetingLabel} scheduled`,
      timestamp: new Date().toISOString(),
      changedBy: "Current User",
      meetingType,
      meetingDetails: meetingDetails.trim(),
      meetingDate: meetingDate || new Date().toISOString().split("T")[0],
      meetingTime: meetingTime || "",
      meetingLocation: meetingType === "offline" ? meetingLocation : "",
      meetingLink: meetingType === "online" ? meetingLink : "",
      meetingAttendees: selectedAttendees,
    }

    setLeads(
      leads.map((lead) => {
        if (lead.id === leadId) {
          return {
            ...lead,
            activityHistory: [meetingEntry, ...lead.activityHistory],
            lastContact: new Date().toISOString(),
            activities: lead.activities + 1,
          }
        }
        return lead
      }),
    )

    // Update selectedLead if it's the same lead
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead({
        ...selectedLead,
        activityHistory: [meetingEntry, ...selectedLead.activityHistory],
        lastContact: new Date().toISOString(),
        activities: selectedLead.activities + 1,
      })
    }

    // Reset form
    setMeetingType("online")
    setMeetingDetails("")
    setMeetingDate("")
    setMeetingTime("")
    setMeetingLocation("")
    setMeetingLink("")
    setMeetingAttendees([])
    setIsAddMeetingOpen(false)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Lead Management</h1>
            <p className="text-muted-foreground mt-1">Track, manage, and convert your leads into clients</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={handleImportLeads}>
              <Upload className="w-4 h-4" />
              Import
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={handleExportLeads}>
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Lead
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Lead</DialogTitle>
                  <DialogDescription>Fill in the details to create a new lead.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddLead} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input id="company" name="company" placeholder="Acme Inc" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" placeholder="john@acme.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="status">Temperature</Label>
                      <Select name="status" defaultValue="warm">
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hot">Hot</SelectItem>
                          <SelectItem value="warm">Warm</SelectItem>
                          <SelectItem value="cold">Cold</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stage">Stage</Label>
                      <Select name="stage" defaultValue="new">
                        <SelectTrigger>
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          {kanbanStages
                            .filter((s) => s !== "won" && s !== "lost")
                            .map((stage) => (
                              <SelectItem key={stage} value={stage}>
                                {stageConfig[stage].label}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select name="priority" defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="source">Source</Label>
                      <Select name="source" defaultValue="Website">
                        <SelectTrigger>
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Website">Website</SelectItem>
                          <SelectItem value="Referral">Referral</SelectItem>
                          <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                          <SelectItem value="Cold Email">Cold Email</SelectItem>
                          <SelectItem value="Conference">Conference</SelectItem>
                          <SelectItem value="Webinar">Webinar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="assignedTo">Assigned To</Label>
                      <Select name="assignedTo" defaultValue="John Smith">
                        <SelectTrigger>
                          <SelectValue placeholder="Select assignee" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="John Smith">John Smith</SelectItem>
                          <SelectItem value="Emma Davis">Emma Davis</SelectItem>
                          <SelectItem value="Alex Johnson">Alex Johnson</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="value">Deal Value ($) *</Label>
                      <Input id="value" name="value" type="number" placeholder="10000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="probability">Win Probability (%)</Label>
                      <Input id="probability" name="probability" type="number" placeholder="50" min="0" max="100" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nextFollowUp">Next Follow-up</Label>
                    <Input id="nextFollowUp" name="nextFollowUp" type="date" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select name="category" defaultValue="other">
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(categoryConfig).map(([key, config]) => (
                            <SelectItem key={key} value={key}>
                              {config.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags (comma separated)</Label>
                      <Input id="tags" name="tags" placeholder="SEO, Enterprise, Priority" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" name="notes" placeholder="Additional notes about the lead..." rows={3} />
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Add Lead</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { label: "Total Leads", value: stats.total, icon: Users, color: "text-foreground", bg: "bg-secondary" },
            { label: "Hot", value: stats.hot, icon: Flame, color: "text-red-400", bg: "bg-red-500/10" },
            { label: "Warm", value: stats.warm, icon: Thermometer, color: "text-amber-400", bg: "bg-amber-500/10" },
            { label: "Cold", value: stats.cold, icon: Snowflake, color: "text-blue-400", bg: "bg-blue-500/10" },
            {
              label: "Pipeline",
              value: `$${(stats.totalValue / 1000).toFixed(0)}k`,
              icon: DollarSign,
              color: "text-emerald-400",
              bg: "bg-emerald-500/10",
            },
            {
              label: "Weighted",
              value: `$${(stats.weightedValue / 1000).toFixed(0)}k`,
              icon: TrendingUp,
              color: "text-violet-400",
              bg: "bg-violet-500/10",
            },
            {
              label: "Avg. Prob.",
              value: `${stats.avgProbability}%`,
              icon: Target,
              color: "text-cyan-400",
              bg: "bg-cyan-500/10",
            },
            { label: "Starred", value: stats.starred, icon: Star, color: "text-yellow-400", bg: "bg-yellow-500/10" },
          ].map((stat, i) => (
            <AnimatedCard key={stat.label} delay={i * 30} className="p-3">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-md ${stat.bg}`}>
                  <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Toolbar */}
        <AnimatedCard delay={200} className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search and filters */}
            <div className="flex flex-1 gap-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search leads, companies, tags..."
                  className="pl-10 bg-secondary border-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <Button
                variant={isFilterPanelOpen ? "default" : "outline"}
                size="icon"
                onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                className="relative"
              >
                <SlidersHorizontal className="w-4 h-4" />
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-[10px] flex items-center justify-center text-primary-foreground">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </div>

            {/* View Toggle and Actions */}
            <div className="flex items-center gap-2">
              {selectedLeads.length > 0 && (
                <div className="flex items-center gap-2 mr-2 animate-in fade-in slide-in-from-left-2 duration-200">
                  <span className="text-sm text-muted-foreground">{selectedLeads.length} selected</span>
                  <Button variant="outline" size="sm" onClick={() => setSelectedLeads([])}>
                    Clear
                  </Button>
                  <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              )}

              <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as ViewMode)}>
                <TabsList className="bg-secondary">
                  <TabsTrigger value="kanban" className="gap-1.5">
                    <Columns3 className="w-4 h-4" />
                    <span className="hidden sm:inline">Kanban</span>
                  </TabsTrigger>
                  <TabsTrigger value="table" className="gap-1.5">
                    <List className="w-4 h-4" />
                    <span className="hidden sm:inline">Table</span>
                  </TabsTrigger>
                  <TabsTrigger value="grid" className="gap-1.5">
                    <LayoutGrid className="w-4 h-4" />
                    <span className="hidden sm:inline">Grid</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Filter Panel */}
          {isFilterPanelOpen && (
            <div className="mt-4 pt-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-wrap gap-3">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[130px] bg-secondary border-0">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="hot">Hot</SelectItem>
                    <SelectItem value="warm">Warm</SelectItem>
                    <SelectItem value="cold">Cold</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sourceFilter} onValueChange={setSourceFilter}>
                  <SelectTrigger className="w-[140px] bg-secondary border-0">
                    <SelectValue placeholder="Source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    {uniqueSources.map((source) => (
                      <SelectItem key={source} value={source}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="w-[130px] bg-secondary border-0">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={assigneeFilter} onValueChange={setAssigneeFilter}>
                  <SelectTrigger className="w-[150px] bg-secondary border-0">
                    <SelectValue placeholder="Assignee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Assignees</SelectItem>
                    {uniqueAssignees.map((assignee) => (
                      <SelectItem key={assignee} value={assignee}>
                        {assignee}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[160px] bg-secondary border-0">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {Object.entries(categoryConfig).map(([key, config]) => (
                      <SelectItem key={key} value={key}>
                        {config.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
                    <X className="w-4 h-4 mr-1" />
                    Clear filters
                  </Button>
                )}
              </div>
            </div>
          )}
        </AnimatedCard>

        {/* Kanban View */}
        {viewMode === "kanban" && (
          <div className="overflow-x-auto pb-4 animate-in fade-in duration-300">
            <div className="flex gap-4 min-w-max">
              {kanbanStages.map((stage, stageIndex) => {
                const stageLeads = filteredLeads.filter((l) => l.stage === stage)
                const stageValue = stageLeads.reduce((sum, l) => sum + l.value, 0)
                const isDropTarget = dragOverStage === stage && draggedLead?.stage !== stage

                return (
                  <div
                    key={stage}
                    className={`w-[300px] flex flex-col rounded-xl transition-all duration-200 ${isDropTarget ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
                      }`}
                    onDragOver={(e) => handleDragOver(e, stage)}
                    onDragLeave={(e) => handleDragLeave(e)}
                    onDrop={(e) => handleDrop(e, stage)}
                    style={{ animationDelay: `${stageIndex * 50}ms` }}
                  >
                    <div className="flex items-center justify-between p-3 bg-card rounded-t-xl border border-border border-b-0">
                      <div className="flex items-center gap-2">
                        <Badge className={`${stageConfig[stage].color} border-0`}>{stageConfig[stage].label}</Badge>
                        <span className="text-xs text-muted-foreground">({stageLeads.length})</span>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        ${(stageValue / 1000).toFixed(0)}k
                      </span>
                    </div>

                    <div
                      className={`flex-1 p-2 bg-secondary/30 rounded-b-xl border border-border border-t-0 min-h-[400px] space-y-2 transition-colors ${isDropTarget ? "bg-primary/5" : ""
                        }`}
                    >
                      {stageLeads.map((lead, i) => {
                        const StatusIcon = statusConfig[lead.status].icon
                        const SourceIcon = sourceIcons[lead.source] || Globe

                        return (
                          <div
                            key={lead.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, lead)}
                            onDragEnd={handleDragEnd}
                            onClick={(e) => {
                              // Prevent opening dialog when clicking on interactive elements
                              if ((e.target as HTMLElement).closest('button, [role="menuitem"], [data-radix-collection-item]')) return;
                              // Suppress click after drag
                              if (wasDragging.current) return;
                              setSelectedLead(lead);
                              setIsViewDialogOpen(true);
                            }}
                            className={`group bg-card rounded-lg border border-border p-3 cursor-grab active:cursor-grabbing transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-2 ${draggedLead?.id === lead.id ? "opacity-50 scale-95" : ""
                              }`}
                            style={{ animationDelay: `${i * 30}ms` }}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <button
                                  onClick={() => handleToggleStar(lead.id)}
                                  className="flex-shrink-0 text-muted-foreground hover:text-yellow-400 transition-colors"
                                >
                                  {lead.starred ? (
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  ) : (
                                    <StarOff className="w-4 h-4" />
                                  )}
                                </button>
                                <Avatar className="w-7 h-7 flex-shrink-0">
                                  <AvatarFallback className="bg-primary/20 text-primary text-[10px]">
                                    {lead.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded shrink-0">{lead.id}</span>
                                    <p className="font-medium text-sm truncate">{lead.name}</p>
                                  </div>
                                  <p className="text-xs text-muted-foreground truncate">{lead.company}</p>
                                </div>
                              </div>
                              <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                            </div>

                            <div className="mt-3 flex items-center justify-between">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <Badge className={`${statusConfig[lead.status].color} border text-[10px] px-1.5 py-0`}>
                                  <StatusIcon className="w-2.5 h-2.5 mr-0.5" />
                                  {statusConfig[lead.status].label}
                                </Badge>
                                <Badge className={`${categoryConfig[lead.category].color} border text-[10px] px-1.5 py-0`}>
                                  {categoryConfig[lead.category].label}
                                </Badge>
                              </div>
                              <span className={`text-xs font-medium ${priorityConfig[lead.priority].color}`}>
                                {priorityConfig[lead.priority].label}
                              </span>
                            </div>

                            <div className="mt-3 space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground">Deal Value</span>
                                <span className="font-semibold text-emerald-400">${lead.value.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground">Probability</span>
                                <span className="font-medium">{lead.probability}%</span>
                              </div>
                              <Progress value={lead.probability} className="h-1" />
                            </div>

                            {lead.tags.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-1">
                                {lead.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0 bg-secondary">
                                    {tag}
                                  </Badge>
                                ))}
                                {lead.tags.length > 2 && (
                                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-secondary">
                                    +{lead.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                            )}

                            <div className="mt-3 pt-2 border-t border-border flex items-center justify-between">
                              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                <SourceIcon className="w-3 h-3" />
                                {lead.source}
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <button className="p-1 rounded hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100">
                                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                  </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                  <DropdownMenuItem
                                    onClick={() => {
                                      setSelectedLead(lead)
                                      setIsViewDialogOpen(true)
                                    }}
                                  >
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => {
                                      setSelectedLead(lead)
                                      setIsEditDialogOpen(true)
                                    }}
                                  >
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit Lead
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem onClick={() => window.location.href = `mailto:${lead.email}`}>
                                    <Mail className="w-4 h-4 mr-2" />
                                    Send Email
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => window.location.href = `tel:${lead.phone}`}>
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => {
                                      setSelectedLead(lead)
                                      setIsAddMeetingOpen(true)
                                    }}
                                  >
                                    <CalendarPlus className="w-4 h-4 mr-2" />
                                    Schedule Meeting
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem onClick={() => alert(`Convert "${lead.name}" to client — this feature is coming soon!`)}>
                                    <ArrowUpRight className="w-4 h-4 mr-2" />
                                    Convert to Client
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="text-destructive"
                                    onClick={() => handleDeleteLead(lead.id)}
                                  >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        )
                      })}

                      {stageLeads.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-32 text-muted-foreground text-sm">
                          <p>No leads</p>
                          <p className="text-xs">Drag leads here</p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Table View */}
        {viewMode === "table" && (
          <AnimatedCard delay={300}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">
                  All Leads
                  <span className="text-muted-foreground font-normal ml-2">({filteredLeads.length})</span>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground w-10">
                        <Checkbox
                          checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
                          onCheckedChange={handleSelectAll}
                        />
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Lead</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Company</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Stage</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Value</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Probability</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Assigned</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Follow-up</th>
                      <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead, i) => {
                      const StatusIcon = statusConfig[lead.status].icon
                      return (
                        <tr
                          key={lead.id}
                          onClick={(e) => {
                            // Prevent opening dialog when clicking on interactive elements
                            if ((e.target as HTMLElement).closest('button, input, [role="menuitem"], [data-radix-collection-item]')) return;
                            setSelectedLead(lead);
                            setIsViewDialogOpen(true);
                          }}
                          className={`border-b border-border/50 transition-colors animate-in fade-in slide-in-from-bottom-2 duration-300 cursor-pointer ${selectedLeads.includes(lead.id) ? "bg-primary/5" : "hover:bg-secondary/30"
                            }`}
                          style={{ animationDelay: `${i * 30}ms` }}
                        >
                          <td className="py-3 px-4">
                            <Checkbox
                              checked={selectedLeads.includes(lead.id)}
                              onCheckedChange={() => handleSelectLead(lead.id)}
                            />
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <button onClick={() => handleToggleStar(lead.id)}>
                                {lead.starred ? (
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ) : (
                                  <StarOff className="w-4 h-4 text-muted-foreground hover:text-yellow-400 transition-colors" />
                                )}
                              </button>
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-primary/20 text-primary text-xs">
                                  {lead.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">{lead.id}</span>
                                  <p className="font-medium text-sm">{lead.name}</p>
                                </div>
                                <p className="text-xs text-muted-foreground">{lead.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                              <span className="text-sm">{lead.company}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button>
                                  <Badge className={`${statusConfig[lead.status].color} border cursor-pointer`}>
                                    <StatusIcon className="w-3 h-3 mr-1" />
                                    {statusConfig[lead.status].label}
                                  </Badge>
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "hot")}>
                                  <Flame className="w-4 h-4 mr-2 text-red-400" />
                                  Hot
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "warm")}>
                                  <Thermometer className="w-4 h-4 mr-2 text-amber-400" />
                                  Warm
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleStatusChange(lead.id, "cold")}>
                                  <Snowflake className="w-4 h-4 mr-2 text-blue-400" />
                                  Cold
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                          <td className="py-3 px-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button>
                                  <Badge className={`${stageConfig[lead.stage].color} border-0 cursor-pointer`}>
                                    {stageConfig[lead.stage].label}
                                  </Badge>
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                {kanbanStages.map((stage) => (
                                  <DropdownMenuItem key={stage} onClick={() => handleStageChange(lead.id, stage)}>
                                    {stageConfig[stage].label}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1 text-sm font-medium text-emerald-400">
                              <DollarSign className="w-3.5 h-3.5" />
                              {lead.value.toLocaleString()}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Progress value={lead.probability} className="w-16 h-1.5" />
                              <span className="text-xs text-muted-foreground">{lead.probability}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm">{lead.assignedTo}</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="w-3.5 h-3.5" />
                              {lead.nextFollowUp ? new Date(lead.nextFollowUp).toLocaleDateString() : "-"}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <button
                                onClick={() => {
                                  setSelectedLead(lead)
                                  setIsViewDialogOpen(true)
                                }}
                                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                              >
                                <Eye className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                  </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => window.location.href = `mailto:${lead.email}`}>
                                    <Mail className="w-4 h-4 mr-2" />
                                    Send Email
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => window.location.href = `tel:${lead.phone}`}>
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => {
                                      setSelectedLead(lead)
                                      setIsEditDialogOpen(true)
                                    }}
                                  >
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => alert(`Convert "${lead.name}" to client — this feature is coming soon!`)}>
                                    <ArrowUpRight className="w-4 h-4 mr-2" />
                                    Convert to Client
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    className="text-destructive"
                                    onClick={() => handleDeleteLead(lead.id)}
                                  >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>

                {filteredLeads.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    <p>No leads found</p>
                    <p className="text-sm">Try adjusting your filters</p>
                  </div>
                )}
              </div>
            </CardContent>
          </AnimatedCard>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-in fade-in duration-300">
            {filteredLeads.map((lead, i) => {
              const StatusIcon = statusConfig[lead.status].icon
              const SourceIcon = sourceIcons[lead.source] || Globe

              return (
                <AnimatedCard
                  key={lead.id}
                  delay={i * 30}
                  className="p-4 group cursor-pointer"
                  onClick={(e) => {
                    // Prevent opening dialog when clicking on interactive elements
                    if ((e.target as HTMLElement).closest('button, [role="menuitem"], [data-radix-collection-item]')) return;
                    setSelectedLead(lead);
                    setIsViewDialogOpen(true);
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {lead.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded mb-1 inline-block">{lead.id}</span>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{lead.name}</p>
                          <button onClick={() => handleToggleStar(lead.id)}>
                            {lead.starred ? (
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ) : (
                              <StarOff className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </button>
                        </div>
                        <p className="text-sm text-muted-foreground">{lead.company}</p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-1 rounded hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100">
                          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedLead(lead)
                            setIsViewDialogOpen(true)
                          }}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedLead(lead)
                            setIsEditDialogOpen(true)
                          }}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteLead(lead.id)}>
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="mt-4 flex items-center gap-2 flex-wrap">
                    <Badge className={`${statusConfig[lead.status].color} border`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {statusConfig[lead.status].label}
                    </Badge>
                    <Badge className={`${stageConfig[lead.stage].color} border-0`}>
                      {stageConfig[lead.stage].label}
                    </Badge>
                    <Badge className={`${categoryConfig[lead.category].color} border`}>
                      {categoryConfig[lead.category].label}
                    </Badge>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Deal Value</span>
                      <span className="font-semibold text-emerald-400">${lead.value.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Probability</span>
                      <span className="font-medium">{lead.probability}%</span>
                    </div>
                    <Progress value={lead.probability} className="h-1.5" />
                  </div>

                  <div className="mt-4 pt-3 border-t border-border space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-3.5 h-3.5" />
                      <span className="truncate">{lead.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <SourceIcon className="w-3.5 h-3.5" />
                      <span>{lead.source}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>
                        Follow-up: {lead.nextFollowUp ? new Date(lead.nextFollowUp).toLocaleDateString() : "Not set"}
                      </span>
                    </div>
                  </div>

                  {lead.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {lead.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0 bg-secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent" onClick={() => window.location.href = `mailto:${lead.email}`}>
                      <Mail className="w-3 h-3 mr-1" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent" onClick={() => window.location.href = `tel:${lead.phone}`}>
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </Button>
                  </div>
                </AnimatedCard>
              )
            })}

            {filteredLeads.length === 0 && (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                <Users className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p>No leads found</p>
                <p className="text-sm">Try adjusting your filters</p>
              </div>
            )}
          </div>
        )}

        {/* View Lead Dialog */}
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
            {selectedLead && (
              <>
                <DialogHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-14 h-14">
                        <AvatarFallback className="bg-primary/20 text-primary text-lg">
                          {selectedLead.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <DialogTitle className="text-xl">{selectedLead.name}</DialogTitle>
                          <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">{selectedLead.id}</span>
                        </div>
                        <p className="text-muted-foreground">{selectedLead.company}</p>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <Badge className={`${statusConfig[selectedLead.status].color} border`}>
                            {statusConfig[selectedLead.status].label}
                          </Badge>
                          <Badge className={`${stageConfig[selectedLead.stage].color} border-0`}>
                            {stageConfig[selectedLead.stage].label}
                          </Badge>
                          <Badge className={`${priorityConfig[selectedLead.priority].color} bg-transparent border`}>
                            {priorityConfig[selectedLead.priority].label} Priority
                          </Badge>
                          <Badge className={`${categoryConfig[selectedLead.category].color} border`}>
                            {categoryConfig[selectedLead.category].label}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        size="sm"
                        onClick={() => setIsAddMeetingOpen(true)}
                        className="gap-2 bg-primary/90 hover:bg-primary"
                      >
                        <CalendarPlus className="w-4 h-4" />
                        Schedule Meeting
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setIsEditDialogOpen(true)}
                        className="gap-2 bg-transparent"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteLead(selectedLead.id)}
                        className="gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </DialogHeader>

                <div className="mt-6">
                  <div className="flex gap-2 border-b border-border mb-6">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "overview"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab("notes")}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "notes"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      Notes ({selectedLead.noteHistory.length})
                    </button>
                    <button
                      onClick={() => setActiveTab("history")}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "history"
                        ? "border-b-2 border-primary text-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      Activity History
                    </button>
                  </div>

                  {activeTab === "overview" && (
                    <>
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Contact Info
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{selectedLead.email}</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{selectedLead.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                              <Building2 className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{selectedLead.company}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Deal Info
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/50">
                              <span className="text-sm text-muted-foreground">Deal Value</span>
                              <span className="font-semibold text-emerald-400">
                                ${selectedLead.value.toLocaleString()}
                              </span>
                            </div>
                            <div className="p-2 rounded-lg bg-secondary/50">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">Win Probability</span>
                                <span className="font-semibold">{selectedLead.probability}%</span>
                              </div>
                              <Progress value={selectedLead.probability} className="h-2" />
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/50">
                              <span className="text-sm text-muted-foreground">Weighted Value</span>
                              <span className="font-semibold text-violet-400">
                                ${Math.round((selectedLead.value * selectedLead.probability) / 100).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Timeline
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/50">
                              <span className="text-sm text-muted-foreground">Created</span>
                              <span className="text-sm">{new Date(selectedLead.createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/50">
                              <span className="text-sm text-muted-foreground">Last Contact</span>
                              <span className="text-sm">{new Date(selectedLead.lastContact).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 group">
                              <span className="text-sm text-muted-foreground">Next Follow-up</span>
                              <div className="flex items-center gap-2">
                                <input
                                  type="date"
                                  value={selectedLead.nextFollowUp || ""}
                                  onChange={(e) => handleFollowUpChange(selectedLead.id, e.target.value)}
                                  className="text-sm font-medium text-primary bg-transparent border border-transparent hover:border-border focus:border-primary rounded px-2 py-0.5 outline-none cursor-pointer transition-colors"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Assignment
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/50">
                              <span className="text-sm text-muted-foreground">Assigned To</span>
                              <span className="text-sm font-medium">{selectedLead.assignedTo}</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/50">
                              <span className="text-sm text-muted-foreground">Source</span>
                              <span className="text-sm">{selectedLead.source}</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/50">
                              <span className="text-sm text-muted-foreground">Activities</span>
                              <span className="text-sm">{selectedLead.activities} interactions</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {selectedLead.tags.length > 0 && (
                        <div className="mb-6 space-y-2">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Tags</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedLead.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="bg-secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedLead.notes && (
                        <div className="mb-6 space-y-2">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Notes
                          </h4>
                          <p className="text-sm p-3 rounded-lg bg-secondary/50">{selectedLead.notes}</p>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button className="flex-1 gap-2" onClick={() => window.location.href = `mailto:${selectedLead.email}`}>
                          <Mail className="w-4 h-4" />
                          Send Email
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2 bg-transparent" onClick={() => window.location.href = `tel:${selectedLead.phone}`}>
                          <Phone className="w-4 h-4" />
                          Call
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2 bg-transparent" onClick={() => setIsAddMeetingOpen(true)}>
                          <CalendarPlus className="w-4 h-4" />
                          Schedule
                        </Button>
                      </div>
                    </>
                  )}

                  {activeTab === "notes" && (
                    <div className="space-y-4">
                      {/* Add new note */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Add New Note
                        </h4>
                        <div className="flex gap-2">
                          <Textarea
                            value={newNoteText}
                            onChange={(e) => setNewNoteText(e.target.value)}
                            placeholder="Write your note here..."
                            className="flex-1 min-h-[80px] resize-none"
                          />
                        </div>
                        <Button
                          onClick={() => handleAddNote(selectedLead.id, newNoteText)}
                          disabled={!newNoteText.trim()}
                          className="gap-2"
                        >
                          <Plus className="w-4 h-4" />
                          Add Note
                        </Button>
                      </div>

                      {/* Notes history */}
                      <div className="space-y-3 mt-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Note History ({selectedLead.noteHistory.length})
                        </h4>
                        {selectedLead.noteHistory.length === 0 ? (
                          <div className="text-center py-8 text-muted-foreground">
                            <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p>No notes yet</p>
                            <p className="text-sm">Add your first note above</p>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {selectedLead.noteHistory.map((note) => (
                              <div key={note.id} className="p-4 rounded-lg bg-secondary/50 border border-border">
                                <p className="text-sm whitespace-pre-wrap">{note.content}</p>
                                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                                  <span className="text-xs text-muted-foreground">
                                    {note.createdBy}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {getTimeAgo(note.createdAt)}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === "history" && (
                    <div className="space-y-4">
                      {selectedLead.activityHistory.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                          <History className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p>No activity history yet</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {selectedLead.activityHistory.map((activity) => (
                            <div key={activity.id} className={`p-4 rounded-lg border ${activity.type === "meeting_scheduled"
                              ? "bg-primary/5 border-primary/30"
                              : "bg-secondary/50 border-border"
                              }`}>
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <p className="font-medium text-sm">{activity.description}</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {activity.changedBy} • {new Date(activity.timestamp).toLocaleString()}
                                  </p>
                                </div>
                                <Badge variant="outline" className={`text-xs ${activity.type === "meeting_scheduled" ? "border-primary/50 text-primary" : ""
                                  }`}>
                                  {activity.type.replace(/_/g, " ")}
                                </Badge>
                              </div>

                              {/* Meeting Details */}
                              {activity.type === "meeting_scheduled" && (
                                <div className="mt-3 space-y-3 pt-3 border-t border-border/50">
                                  {/* Meeting Agenda */}
                                  {activity.meetingDetails && (
                                    <div className="text-sm text-foreground bg-secondary/50 p-2 rounded">
                                      {activity.meetingDetails}
                                    </div>
                                  )}

                                  {/* Date, Time, Location/Link */}
                                  <div className="flex flex-wrap gap-3 text-xs">
                                    {activity.meetingDate && (
                                      <div className="flex items-center gap-1.5 text-muted-foreground">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(activity.meetingDate).toLocaleDateString()}
                                        {activity.meetingTime && ` at ${activity.meetingTime}`}
                                      </div>
                                    )}
                                    {activity.meetingType === "online" && activity.meetingLink && (
                                      <a
                                        href={activity.meetingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-primary hover:underline"
                                      >
                                        <Video className="w-3.5 h-3.5" />
                                        Join Meeting
                                      </a>
                                    )}
                                    {activity.meetingType === "offline" && activity.meetingLocation && (
                                      <div className="flex items-center gap-1.5 text-muted-foreground">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {activity.meetingLocation}
                                      </div>
                                    )}
                                  </div>

                                  {/* Attendees */}
                                  {activity.meetingAttendees && activity.meetingAttendees.length > 0 && (
                                    <div className="flex items-center gap-2">
                                      <Users className="w-3.5 h-3.5 text-muted-foreground" />
                                      <div className="flex -space-x-2">
                                        {activity.meetingAttendees.slice(0, 4).map((attendee) => (
                                          <Avatar key={attendee.id} className="w-6 h-6 border-2 border-background">
                                            <AvatarFallback className="text-[10px] bg-primary/20 text-primary">
                                              {attendee.initials}
                                            </AvatarFallback>
                                          </Avatar>
                                        ))}
                                        {activity.meetingAttendees.length > 4 && (
                                          <div className="w-6 h-6 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[10px] text-muted-foreground">
                                            +{activity.meetingAttendees.length - 4}
                                          </div>
                                        )}
                                      </div>
                                      <span className="text-xs text-muted-foreground">
                                        {activity.meetingAttendees.length} attendee{activity.meetingAttendees.length > 1 ? "s" : ""}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Regular Changes */}
                              {activity.changes && Object.keys(activity.changes).length > 0 && (
                                <div className="mt-3 space-y-1 text-xs">
                                  {Object.entries(activity.changes).map(([key, value]) => (
                                    <div key={key} className="flex items-center gap-2 text-muted-foreground">
                                      <span className="capitalize font-medium">{key}:</span>
                                      <span className="line-through opacity-60">{String(value.old)}</span>
                                      <span>→</span>
                                      <span className="font-medium text-foreground">{String(value.new)}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Lead</DialogTitle>
              <DialogDescription>
                Update lead information. Changes will be tracked in activity history.
              </DialogDescription>
            </DialogHeader>

            {selectedLead && (
              <EditLeadForm lead={selectedLead} onSave={handleUpdateLead} onCancel={() => setIsEditDialogOpen(false)} />
            )}
          </DialogContent>
        </Dialog>

        {/* Schedule Meeting Dialog */}
        <Dialog open={isAddMeetingOpen} onOpenChange={setIsAddMeetingOpen}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CalendarPlus className="w-5 h-5 text-primary" />
                Schedule Meeting
              </DialogTitle>
              <DialogDescription>
                {selectedLead ? `Schedule a meeting with ${selectedLead.name}` : "Schedule a new meeting"}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 mt-4">
              {/* Meeting Type Toggle */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Meeting Type</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={meetingType === "online" ? "default" : "outline"}
                    onClick={() => setMeetingType("online")}
                    className="flex-1 gap-2"
                  >
                    <Video className="w-4 h-4" />
                    Online
                  </Button>
                  <Button
                    type="button"
                    variant={meetingType === "offline" ? "default" : "outline"}
                    onClick={() => setMeetingType("offline")}
                    className="flex-1 gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Offline
                  </Button>
                </div>
              </div>

              {/* Meeting Details */}
              <div className="space-y-2">
                <Label htmlFor="meeting-details">Meeting Title / Agenda *</Label>
                <Textarea
                  id="meeting-details"
                  placeholder="Enter meeting title or agenda..."
                  value={meetingDetails}
                  onChange={(e) => setMeetingDetails(e.target.value)}
                  rows={2}
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="meeting-date">Date *</Label>
                  <Input
                    id="meeting-date"
                    type="date"
                    value={meetingDate}
                    onChange={(e) => setMeetingDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meeting-time">Time</Label>
                  <Input
                    id="meeting-time"
                    type="time"
                    value={meetingTime}
                    onChange={(e) => setMeetingTime(e.target.value)}
                  />
                </div>
              </div>

              {/* Location (for offline) or Link (for online) */}
              {meetingType === "offline" ? (
                <div className="space-y-2">
                  <Label htmlFor="meeting-location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="meeting-location"
                      placeholder="Enter meeting location..."
                      className="pl-10"
                      value={meetingLocation}
                      onChange={(e) => setMeetingLocation(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="meeting-link">Meeting Link</Label>
                  <div className="relative">
                    <Video className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="meeting-link"
                      placeholder="https://meet.google.com/... or Zoom link"
                      className="pl-10"
                      value={meetingLink}
                      onChange={(e) => setMeetingLink(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Team Members Selection */}
              <div className="space-y-2">
                <Label>Assign Team Members</Label>
                <div className="grid grid-cols-2 gap-2 max-h-[150px] overflow-y-auto p-2 rounded-lg bg-secondary/30 border border-border">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      onClick={() => {
                        setMeetingAttendees(prev =>
                          prev.includes(member.id)
                            ? prev.filter(id => id !== member.id)
                            : [...prev, member.id]
                        )
                      }}
                      className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all ${meetingAttendees.includes(member.id)
                        ? "bg-primary/20 border border-primary/50"
                        : "hover:bg-secondary/80"
                        }`}
                    >
                      <Checkbox
                        checked={meetingAttendees.includes(member.id)}
                        className="pointer-events-none"
                      />
                      <Avatar className="w-7 h-7">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{member.name}</p>
                        <p className="text-[10px] text-muted-foreground truncate">{member.jobTitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {meetingAttendees.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    {meetingAttendees.length} team member{meetingAttendees.length > 1 ? "s" : ""} selected
                  </p>
                )}
              </div>
            </div>

            <DialogFooter className="mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddMeetingOpen(false)
                  setMeetingType("online")
                  setMeetingDetails("")
                  setMeetingDate("")
                  setMeetingTime("")
                  setMeetingLocation("")
                  setMeetingLink("")
                  setMeetingAttendees([])
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => selectedLead && handleAddMeeting(selectedLead.id)}
                disabled={!meetingDetails.trim() || !meetingDate}
                className="gap-2"
              >
                <CalendarPlus className="w-4 h-4" />
                Schedule Meeting
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}

function EditLeadForm({
  lead,
  onSave,
  onCancel,
}: {
  lead: Lead
  onSave: (data: Partial<Lead>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    company: lead.company,
    status: lead.status,
    stage: lead.stage,
    priority: lead.priority,
    category: lead.category,
    assignedTo: lead.assignedTo,
    notes: lead.notes,
    value: lead.value,
    probability: lead.probability,
    source: lead.source,
    tags: lead.tags.join(", "),
    nextFollowUp: lead.nextFollowUp,
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      value: Number(formData.value) || 0,
      probability: Number(formData.probability) || 0,
      tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Lead name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="email@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Company name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => handleChange("status", e.target.value)}
            className="w-full px-3 py-2 bg-secondary text-foreground rounded-md border border-input"
          >
            <option value="hot">Hot</option>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="stage">Stage</Label>
          <select
            id="stage"
            value={formData.stage}
            onChange={(e) => handleChange("stage", e.target.value)}
            className="w-full px-3 py-2 bg-secondary text-foreground rounded-md border border-input"
          >
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal</option>
            <option value="negotiation">Negotiation</option>
            <option value="won">Won</option>
            <option value="lost">Lost</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <select
            id="priority"
            value={formData.priority}
            onChange={(e) => handleChange("priority", e.target.value)}
            className="w-full px-3 py-2 bg-secondary text-foreground rounded-md border border-input"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="w-full px-3 py-2 bg-secondary text-foreground rounded-md border border-input"
          >
            {Object.entries(categoryConfig).map(([key, config]) => (
              <option key={key} value={key}>
                {config.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="value">Deal Value ($)</Label>
          <Input
            id="value"
            type="number"
            value={formData.value}
            onChange={(e) => handleChange("value", e.target.value)}
            placeholder="10000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="probability">Win Probability (%)</Label>
          <Input
            id="probability"
            type="number"
            value={formData.probability}
            onChange={(e) => handleChange("probability", e.target.value)}
            placeholder="50"
            min={0}
            max={100}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="source">Source</Label>
          <select
            id="source"
            value={formData.source}
            onChange={(e) => handleChange("source", e.target.value)}
            className="w-full px-3 py-2 bg-secondary text-foreground rounded-md border border-input"
          >
            <option value="Website">Website</option>
            <option value="Referral">Referral</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Cold Email">Cold Email</option>
            <option value="Conference">Conference</option>
            <option value="Webinar">Webinar</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="nextFollowUp">Next Follow-Up</Label>
          <Input
            id="nextFollowUp"
            type="date"
            value={formData.nextFollowUp}
            onChange={(e) => handleChange("nextFollowUp", e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="assignedTo">Assigned To</Label>
        <Input
          id="assignedTo"
          value={formData.assignedTo}
          onChange={(e) => handleChange("assignedTo", e.target.value)}
          placeholder="Team member name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input
          id="tags"
          value={formData.tags}
          onChange={(e) => handleChange("tags", e.target.value)}
          placeholder="SEO, Enterprise, Priority"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          placeholder="Add any notes or comments..."
          className="w-full px-3 py-2 bg-secondary text-foreground rounded-md border border-input min-h-24 resize-none"
        />
      </div>
      <div className="flex gap-2 pt-4">
        <Button type="submit" className="flex-1">
          Save Changes
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
          Cancel
        </Button>
      </div>
    </form>
  )
}
