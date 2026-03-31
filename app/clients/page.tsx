"use client"

import { TabsContent } from "@/components/ui/tabs"

import type React from "react"
import { useState, useEffect } from "react"
import { generateId, generateBulkIds } from "@/lib/id-generator"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AnimatedCard } from "@/components/animated-card"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Plus,
  Mail,
  Phone,
  Globe,
  Calendar,
  DollarSign,
  Briefcase,
  CheckCircle,
  Clock,
  XCircle,
  Building2,
  MapPin,
  FileText,
  ExternalLink,
  Filter,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  List,
  Columns3,
  Star,
  StarOff,
  TrendingUp,
  Users,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Edit,
  Trash2,
  Send,
  History,
  Download,
  Upload,
  Eye,
  X,
  GripVertical,
  AlertTriangle,
  Heart,
  Sparkles,
  Info,
} from "lucide-react"

// Enhanced Client Interface with more details
interface Client {
  id: string
  uid?: string
  name: string
  email: string
  phone: string
  company: string
  website: string
  address: string
  status: "active" | "inactive" | "paused" | "churned" | "prospect"
  industry: string
  totalRevenue: number
  monthlyRevenue: number
  activeProjects: number
  completedProjects: number
  joinedDate: string
  lastContact: string
  avatar?: string
  notes: string
  starred: boolean
  healthScore: number
  satisfaction: number
  contractValue: number
  contractEnd: string
  paymentStatus: "paid" | "pending" | "overdue"
  tags: string[]
  accountManager: string
  tier: "enterprise" | "professional" | "starter"
  engagementScore: number
  lifetimeValue: number
  openTickets: number
  npsScore: number
  revenueGrowth: number
  activeCampaigns: number
}

const initialClients: Client[] = [
  {
    id: "CL-0001",
    name: "Sarah Mitchell",
    email: "sarah@techmart.com",
    phone: "+1 (555) 123-4567",
    company: "TechMart Solutions",
    website: "techmart.com",
    address: "123 Tech Avenue, San Francisco, CA",
    status: "active",
    industry: "E-commerce",
    totalRevenue: 285000,
    monthlyRevenue: 15000,
    activeProjects: 3,
    completedProjects: 12,
    joinedDate: "2022-06-15",
    lastContact: "2024-12-15",
    notes: "Premium enterprise client. Full digital marketing suite including SEO, PPC, and social media management.",
    starred: true,
    healthScore: 92,
    satisfaction: 95,
    contractValue: 180000,
    contractEnd: "2025-06-15",
    paymentStatus: "paid",
    tags: ["Enterprise", "SEO", "PPC", "Social"],
    accountManager: "Alex Johnson",
    tier: "enterprise",
    engagementScore: 88,
    lifetimeValue: 450000,
    openTickets: 1,
    npsScore: 9,
    revenueGrowth: 23,
    activeCampaigns: 5,
  },
  {
    id: "CL-0002",
    name: "Michael Chen",
    email: "michael@greenlife.co",
    phone: "+1 (555) 234-5678",
    company: "GreenLife Organics",
    website: "greenlife.co",
    address: "456 Eco Street, Portland, OR",
    status: "active",
    industry: "Health & Wellness",
    totalRevenue: 162000,
    monthlyRevenue: 8500,
    activeProjects: 2,
    completedProjects: 8,
    joinedDate: "2023-02-22",
    lastContact: "2024-12-14",
    notes: "Focus on sustainable and eco-friendly marketing. Strong social media presence required.",
    starred: true,
    healthScore: 85,
    satisfaction: 88,
    contractValue: 102000,
    contractEnd: "2025-02-22",
    paymentStatus: "paid",
    tags: ["Professional", "Social", "Content"],
    accountManager: "Emily Davis",
    tier: "professional",
    engagementScore: 76,
    lifetimeValue: 280000,
    openTickets: 0,
    npsScore: 8,
    revenueGrowth: 15,
    activeCampaigns: 3,
  },
  {
    id: "CL-0003",
    name: "Emily Rodriguez",
    email: "emily@foodiehub.io",
    phone: "+1 (555) 345-6789",
    company: "FoodieHub",
    website: "foodiehub.io",
    address: "789 Culinary Lane, Austin, TX",
    status: "active",
    industry: "Food & Beverage",
    totalRevenue: 98000,
    monthlyRevenue: 6200,
    activeProjects: 2,
    completedProjects: 5,
    joinedDate: "2023-08-10",
    lastContact: "2024-12-12",
    notes: "Influencer marketing focus. Instagram and TikTok campaigns performing well.",
    starred: false,
    healthScore: 78,
    satisfaction: 82,
    contractValue: 74400,
    contractEnd: "2025-08-10",
    paymentStatus: "paid",
    tags: ["Influencer", "Social", "Video"],
    accountManager: "Alex Johnson",
    tier: "professional",
    engagementScore: 82,
    lifetimeValue: 150000,
    openTickets: 2,
    npsScore: 7,
    revenueGrowth: 8,
    activeCampaigns: 2,
  },
  {
    id: "CL-0004",
    name: "David Park",
    email: "david@autodeal.com",
    phone: "+1 (555) 456-7890",
    company: "AutoDeal Motors",
    website: "autodeal.com",
    address: "321 Motor Road, Detroit, MI",
    status: "paused",
    industry: "Automotive",
    totalRevenue: 135000,
    monthlyRevenue: 0,
    activeProjects: 0,
    completedProjects: 6,
    joinedDate: "2022-09-05",
    lastContact: "2024-11-20",
    notes: "Campaigns paused due to Q4 budget constraints. Expected to resume in January.",
    starred: false,
    healthScore: 45,
    satisfaction: 72,
    contractValue: 96000,
    contractEnd: "2025-03-05",
    paymentStatus: "pending",
    tags: ["Local SEO", "PPC"],
    accountManager: "Chris Wilson",
    tier: "professional",
    engagementScore: 35,
    lifetimeValue: 220000,
    openTickets: 1,
    npsScore: 6,
    revenueGrowth: -12,
    activeCampaigns: 0,
  },
  {
    id: "CL-0005",
    name: "Lisa Thompson",
    email: "lisa@luxstay.com",
    phone: "+1 (555) 567-8901",
    company: "LuxStay Hotels",
    website: "luxstay.com",
    address: "555 Luxury Blvd, Miami, FL",
    status: "active",
    industry: "Hospitality",
    totalRevenue: 420000,
    monthlyRevenue: 25000,
    activeProjects: 5,
    completedProjects: 18,
    joinedDate: "2021-11-20",
    lastContact: "2024-12-16",
    notes: "Top-tier enterprise client. Multi-location campaigns across 12 properties. VIP support.",
    starred: true,
    healthScore: 96,
    satisfaction: 98,
    contractValue: 300000,
    contractEnd: "2025-11-20",
    paymentStatus: "paid",
    tags: ["Enterprise", "Multi-location", "PPC", "SEO", "Email"],
    accountManager: "Emily Davis",
    tier: "enterprise",
    engagementScore: 94,
    lifetimeValue: 850000,
    openTickets: 0,
    npsScore: 10,
    revenueGrowth: 32,
    activeCampaigns: 8,
  },
  {
    id: "CL-0006",
    name: "James Wilson",
    email: "james@fitpro.app",
    phone: "+1 (555) 678-9012",
    company: "FitPro App",
    website: "fitpro.app",
    address: "888 Fitness Ave, Los Angeles, CA",
    status: "churned",
    industry: "Fitness & Tech",
    totalRevenue: 42000,
    monthlyRevenue: 0,
    activeProjects: 0,
    completedProjects: 3,
    joinedDate: "2024-02-15",
    lastContact: "2024-10-30",
    notes: "Contract ended. Cited budget cuts. Potential for win-back campaign Q2 2025.",
    starred: false,
    healthScore: 20,
    satisfaction: 65,
    contractValue: 36000,
    contractEnd: "2024-10-15",
    paymentStatus: "paid",
    tags: ["App Marketing", "Social"],
    accountManager: "Chris Wilson",
    tier: "starter",
    engagementScore: 15,
    lifetimeValue: 42000,
    openTickets: 0,
    npsScore: 5,
    revenueGrowth: -100,
    activeCampaigns: 0,
  },
  {
    id: "CL-0007",
    name: "Amanda Foster",
    email: "amanda@brightsmile.dental",
    phone: "+1 (555) 789-0123",
    company: "BrightSmile Dental",
    website: "brightsmile.dental",
    address: "100 Healthcare Plaza, Chicago, IL",
    status: "prospect",
    industry: "Healthcare",
    totalRevenue: 0,
    monthlyRevenue: 0,
    activeProjects: 0,
    completedProjects: 0,
    joinedDate: "2024-12-01",
    lastContact: "2024-12-14",
    notes: "Warm lead from referral. Interested in local SEO and Google Ads. Proposal sent.",
    starred: true,
    healthScore: 60,
    satisfaction: 0,
    contractValue: 48000,
    contractEnd: "",
    paymentStatus: "pending",
    tags: ["Local SEO", "Google Ads", "Lead"],
    accountManager: "Alex Johnson",
    tier: "starter",
    engagementScore: 70,
    lifetimeValue: 0,
    openTickets: 0,
    npsScore: 0,
    revenueGrowth: 0,
    activeCampaigns: 0,
  },
  {
    id: "CL-0008",
    name: "Robert Kim",
    email: "robert@urbanstyle.fashion",
    phone: "+1 (555) 890-1234",
    company: "Urban Style Fashion",
    website: "urbanstyle.fashion",
    address: "200 Fashion District, New York, NY",
    status: "active",
    industry: "Fashion & Retail",
    totalRevenue: 178000,
    monthlyRevenue: 12000,
    activeProjects: 3,
    completedProjects: 7,
    joinedDate: "2023-04-18",
    lastContact: "2024-12-13",
    notes: "E-commerce focused. Strong Q4 holiday campaigns. Influencer partnerships.",
    starred: false,
    healthScore: 81,
    satisfaction: 85,
    contractValue: 144000,
    contractEnd: "2025-04-18",
    paymentStatus: "paid",
    tags: ["E-commerce", "Influencer", "Social", "Email"],
    accountManager: "Emily Davis",
    tier: "professional",
    engagementScore: 79,
    lifetimeValue: 320000,
    openTickets: 1,
    npsScore: 8,
    revenueGrowth: 18,
    activeCampaigns: 4,
  },
  {
    id: "CL-0009",
    name: "Jennifer Adams",
    email: "jennifer@skytech.io",
    phone: "+1 (555) 901-2345",
    company: "SkyTech Solutions",
    website: "skytech.io",
    address: "500 Innovation Way, Seattle, WA",
    status: "active",
    industry: "Technology",
    totalRevenue: 95000,
    monthlyRevenue: 7500,
    activeProjects: 2,
    completedProjects: 4,
    joinedDate: "2024-01-08",
    lastContact: "2024-12-11",
    notes: "B2B SaaS client. Focus on LinkedIn ads and content marketing. High growth potential.",
    starred: false,
    healthScore: 74,
    satisfaction: 80,
    contractValue: 90000,
    contractEnd: "2025-01-08",
    paymentStatus: "overdue",
    tags: ["B2B", "LinkedIn", "Content", "SaaS"],
    accountManager: "Chris Wilson",
    tier: "professional",
    engagementScore: 68,
    lifetimeValue: 180000,
    openTickets: 3,
    npsScore: 7,
    revenueGrowth: 12,
    activeCampaigns: 2,
  },
  {
    id: "CL-0010",
    name: "Marcus Brown",
    email: "marcus@elitetravel.com",
    phone: "+1 (555) 012-3456",
    company: "Elite Travel Agency",
    website: "elitetravel.com",
    address: "750 Vacation Lane, Orlando, FL",
    status: "inactive",
    industry: "Travel & Tourism",
    totalRevenue: 68000,
    monthlyRevenue: 0,
    activeProjects: 0,
    completedProjects: 4,
    joinedDate: "2023-06-20",
    lastContact: "2024-09-15",
    notes: "Seasonal client. Typically active during peak travel seasons. Follow up in February.",
    starred: false,
    healthScore: 55,
    satisfaction: 78,
    contractValue: 60000,
    contractEnd: "2025-06-20",
    paymentStatus: "paid",
    tags: ["Seasonal", "Display", "Social"],
    accountManager: "Alex Johnson",
    tier: "starter",
    engagementScore: 40,
    lifetimeValue: 120000,
    openTickets: 0,
    npsScore: 7,
    revenueGrowth: -8,
    activeCampaigns: 0,
  },
]

const statusConfig = {
  active: {
    label: "Active",
    icon: CheckCircle,
    color: "bg-emerald-500/20 text-emerald-400",
    dotColor: "bg-emerald-400",
  },
  paused: { label: "Paused", icon: Clock, color: "bg-amber-500/20 text-amber-400", dotColor: "bg-amber-400" },
  inactive: { label: "Inactive", icon: XCircle, color: "bg-zinc-500/20 text-zinc-400", dotColor: "bg-zinc-400" },
  churned: { label: "Churned", icon: AlertTriangle, color: "bg-red-500/20 text-red-400", dotColor: "bg-red-400" },
  prospect: { label: "Prospect", icon: Sparkles, color: "bg-violet-500/20 text-violet-400", dotColor: "bg-violet-400" },
}

const tierConfig = {
  enterprise: {
    label: "Enterprise",
    color: "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30",
  },
  professional: { label: "Professional", color: "bg-blue-500/20 text-blue-400 border border-blue-500/30" },
  starter: { label: "Starter", color: "bg-zinc-500/20 text-zinc-400 border border-zinc-500/30" },
}

const paymentConfig = {
  paid: { label: "Paid", color: "text-emerald-400" },
  pending: { label: "Pending", color: "text-amber-400" },
  overdue: { label: "Overdue", color: "text-red-400" },
}

const industries = [
  "All Industries",
  "E-commerce",
  "Health & Wellness",
  "Food & Beverage",
  "Automotive",
  "Hospitality",
  "Fitness & Tech",
  "Healthcare",
  "Fashion & Retail",
  "Technology",
  "Travel & Tourism",
]
const accountManagers = ["All Managers", "Alex Johnson", "Emily Davis", "Chris Wilson"]

import { getClients, createClient, updateClient, deleteClient, bulkDeleteClients } from "@/app/actions/clients"
import { Prisma } from "@prisma/client"

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list" | "kanban">("kanban")
  const [selectedClients, setSelectedClients] = useState<string[]>([])
  const [newClientTags, setNewClientTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")

  // Edit dialog state
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingClient, setEditingClient] = useState<Client | null>(null)
  const [editClientTags, setEditClientTags] = useState<string[]>([])
  const [editTagInput, setEditTagInput] = useState("")

  // Note input state
  const [noteInput, setNoteInput] = useState("")

  // Filters
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [industryFilter, setIndustryFilter] = useState<string>("All Industries")
  const [tierFilter, setTierFilter] = useState<string>("all")
  const [managerFilter, setManagerFilter] = useState<string>("All Managers")
  const [healthFilter, setHealthFilter] = useState<string>("all")
  const [paymentFilter, setPaymentFilter] = useState<string>("all")

  // Drag and drop state
  const [draggedClient, setDraggedClient] = useState<Client | null>(null)
  const [dragOverStatus, setDragOverStatus] = useState<string | null>(null)

  const activeFiltersCount = [
    statusFilter !== "all",
    industryFilter !== "All Industries",
    tierFilter !== "all",
    managerFilter !== "All Managers",
    healthFilter !== "all",
    paymentFilter !== "all",
  ].filter(Boolean).length

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesStatus = statusFilter === "all" || client.status === statusFilter
    const matchesIndustry = industryFilter === "All Industries" || client.industry === industryFilter
    const matchesTier = tierFilter === "all" || client.tier === tierFilter
    const matchesManager = managerFilter === "All Managers" || client.accountManager === managerFilter
    const matchesHealth =
      healthFilter === "all" ||
      (healthFilter === "healthy" && client.healthScore >= 70) ||
      (healthFilter === "at-risk" && client.healthScore >= 40 && client.healthScore < 70) ||
      (healthFilter === "critical" && client.healthScore < 40)
    const matchesPayment = paymentFilter === "all" || client.paymentStatus === paymentFilter
    return (
      matchesSearch &&
      matchesStatus &&
      matchesIndustry &&
      matchesTier &&
      matchesManager &&
      matchesHealth &&
      matchesPayment
    )
  })

  // Stats calculations
  const stats = {
    total: clients.length,
    active: clients.filter((c) => c.status === "active").length,
    prospects: clients.filter((c) => c.status === "prospect").length,
    atRisk: clients.filter((c) => c.healthScore < 50 && c.status === "active").length,
    totalRevenue: clients.reduce((sum, c) => sum + c.totalRevenue, 0),
    monthlyRecurring: clients.filter((c) => c.status === "active").reduce((sum, c) => sum + c.monthlyRevenue, 0),
    activeProjects: clients.reduce((sum, c) => sum + c.activeProjects, 0),
    avgHealthScore: Math.round(
      clients.filter((c) => c.status === "active").reduce((sum, c) => sum + c.healthScore, 0) /
      clients.filter((c) => c.status === "active").length,
    ),
    avgNPS: (
      clients.filter((c) => c.npsScore > 0).reduce((sum, c) => sum + c.npsScore, 0) /
      clients.filter((c) => c.npsScore > 0).length
    ).toFixed(1),
    totalLTV: clients.reduce((sum, c) => sum + c.lifetimeValue, 0),
    enterpriseCount: clients.filter((c) => c.tier === "enterprise").length,
    churnedRevenue: clients.filter((c) => c.status === "churned").reduce((sum, c) => sum + c.totalRevenue, 0),
  }

  const clearAllFilters = () => {
    setStatusFilter("all")
    setIndustryFilter("All Industries")
    setTierFilter("all")
    setManagerFilter("All Managers")
    setHealthFilter("all")
    setPaymentFilter("all")
  }

  // Load clients on mount
  useEffect(() => {
    async function loadClients() {
      try {
        const data = await getClients()
        setClients(data)
      } catch (error) {
        console.error("Failed to load clients:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadClients()
  }, [])

  const toggleStarred = async (clientId: string) => {
    const client = clients.find((c) => c.id === clientId)
    if (!client) return

    // Optimistic update
    setClients((prev) => prev.map((c) => (c.id === clientId ? { ...c, starred: !c.starred } : c)))

    try {
      await updateClient(clientId, { starred: !client.starred })
    } catch (error) {
      console.error("Failed to toggle star:", error)
      // Revert optimistic update on error
      setClients((prev) => prev.map((c) => (c.id === clientId ? { ...c, starred: client.starred } : c)))
    }
  }

  const toggleSelectClient = (clientId: string) => {
    setSelectedClients((prev) => (prev.includes(clientId) ? prev.filter((id) => id !== clientId) : [...prev, clientId]))
  }

  const selectAllClients = () => {
    if (selectedClients.length === filteredClients.length) {
      setSelectedClients([])
    } else {
      setSelectedClients(filteredClients.map((c) => c.id))
    }
  }

  // Drag handlers for Kanban
  const handleDragStart = (e: React.DragEvent, client: Client) => {
    setDraggedClient(client)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent, status: string) => {
    e.preventDefault()
    setDragOverStatus(status)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    const relatedTarget = e.relatedTarget as Node | null
    if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
      setDragOverStatus(null)
    }
  }

  const handleDrop = async (e: React.DragEvent, newStatus: string) => {
    e.preventDefault()
    if (draggedClient && draggedClient.status !== newStatus) {
      // Optimistic update
      const oldStatus = draggedClient.status
      setClients((prev) => prev.map((c) => (c.id === draggedClient.id ? { ...c, status: newStatus as Client["status"] } : c)))
      
      try {
        await updateClient(draggedClient.id, { status: newStatus })
      } catch (error) {
        console.error("Failed to update status:", error)
        // Revert 
        setClients((prev) => prev.map((c) => (c.id === draggedClient.id ? { ...c, status: oldStatus } : c)))
      }
    }
    setDraggedClient(null)
    setDragOverStatus(null)
  }

  const handleAddClient = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const newClientData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      company: formData.get("company") as string,
      website: (formData.get("website") as string) || "",
      address: (formData.get("address") as string) || "",
      status: (formData.get("status") as string) || "prospect",
      industry: (formData.get("industry") as string) || "Technology",
      totalRevenue: 0,
      monthlyRevenue: Number(formData.get("monthlyRevenue")) || 0,
      activeProjects: 0,
      completedProjects: 0,
      joinedDate: new Date().toISOString().split("T")[0],
      lastContact: new Date().toISOString().split("T")[0],
      notes: (formData.get("notes") as string) || "",
      starred: false,
      healthScore: 50,
      satisfaction: 0,
      contractValue: Number(formData.get("contractValue")) || 0,
      contractEnd: (formData.get("contractEnd") as string) || "",
      paymentStatus: "pending",
      tags: newClientTags,
      accountManager: (formData.get("accountManager") as string) || "Alex Johnson",
      tier: (formData.get("tier") as string) || "starter",
      engagementScore: 50,
      lifetimeValue: 0,
      openTickets: 0,
      npsScore: 0,
      revenueGrowth: 0,
      activeCampaigns: 0,
    }
    
    try {
      const createdClient = await createClient(newClientData)
      setClients([createdClient, ...clients])
      setNewClientTags([])
      setTagInput("")
      setIsAddDialogOpen(false)
    } catch (error) {
      console.error("Failed to create client:", error)
      alert("Failed to create client. Please try again.")
    }
  }

  const getHealthColor = (score: number) => {
    if (score >= 70) return "text-emerald-400"
    if (score >= 40) return "text-amber-400"
    return "text-red-400"
  }

  const openEditDialog = (client: Client) => {
    setEditingClient(client)
    setEditClientTags([...client.tags])
    setEditTagInput("")
    setIsEditDialogOpen(true)
  }

  const handleEditClient = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingClient) return
    const formData = new FormData(e.currentTarget)
    
    const updateData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      company: formData.get("company") as string,
      website: (formData.get("website") as string) || "",
      address: (formData.get("address") as string) || "",
      status: (formData.get("status") as string) || editingClient.status,
      industry: (formData.get("industry") as string) || editingClient.industry,
      tier: (formData.get("tier") as string) || editingClient.tier,
      accountManager: (formData.get("accountManager") as string) || editingClient.accountManager,
      monthlyRevenue: Number(formData.get("monthlyRevenue")) || 0,
      contractValue: Number(formData.get("contractValue")) || 0,
      contractEnd: (formData.get("contractEnd") as string) || editingClient.contractEnd,
      notes: (formData.get("notes") as string) || editingClient.notes,
      tags: editClientTags,
      totalRevenue: Number(formData.get("totalRevenue")) || 0,
      healthScore: Math.min(100, Math.max(0, Number(formData.get("healthScore")) || 0)),
      engagementScore: Math.min(100, Math.max(0, Number(formData.get("engagementScore")) || 0)),
      satisfaction: Math.min(100, Math.max(0, Number(formData.get("satisfaction")) || 0)),
      npsScore: Math.min(10, Math.max(0, Number(formData.get("npsScore")) || 0)),
      revenueGrowth: Number(formData.get("revenueGrowth")) || 0,
      lifetimeValue: Number(formData.get("lifetimeValue")) || 0,
      paymentStatus: (formData.get("paymentStatus") as string) || editingClient.paymentStatus,
      joinedDate: (formData.get("joinedDate") as string) || editingClient.joinedDate,
      activeProjects: Number(formData.get("activeProjects")) || 0,
      completedProjects: Number(formData.get("completedProjects")) || 0,
      activeCampaigns: Number(formData.get("activeCampaigns")) || 0,
      openTickets: Number(formData.get("openTickets")) || 0,
    }
    
    try {
      const updatedClient = await updateClient(editingClient.id, updateData)
      setClients((prev) => prev.map((c) => (c.id === editingClient.id ? updatedClient : c)))
      if (selectedClient?.id === editingClient.id) {
        setSelectedClient(updatedClient)
      }
      setIsEditDialogOpen(false)
      setEditingClient(null)
      setEditClientTags([])
      setEditTagInput("")
    } catch (error) {
      console.error("Failed to update client:", error)
      alert("Failed to update client. Please try again.")
    }
  }

  const handleDeleteClient = async (clientId: string) => {
    if (!window.confirm("Are you sure you want to delete this client? This action cannot be undone.")) return
    
    // Optimistic UI updates
    setClients((prev) => prev.filter((c) => c.id !== clientId))
    setSelectedClients((prev) => prev.filter((id) => id !== clientId))
    if (selectedClient?.id === clientId) {
      setSelectedClient(null)
    }
    
    try {
      await deleteClient(clientId)
    } catch (error) {
      console.error("Failed to delete client:", error)
      // Refetch clients to restore state since optimistic delete failed
      const data = await getClients()
      setClients(data)
    }
  }

  const handleSaveNote = async () => {
    if (!selectedClient || !noteInput.trim()) return
    const updatedNotes = selectedClient.notes
      ? `${selectedClient.notes}\n\n---\n${new Date().toLocaleDateString()}: ${noteInput.trim()}`
      : `${new Date().toLocaleDateString()}: ${noteInput.trim()}`
      
    try {
      const updatedClient = await updateClient(selectedClient.id, { notes: updatedNotes })
      setClients((prev) => prev.map((c) => (c.id === selectedClient.id ? updatedClient : c)))
      setSelectedClient(updatedClient)
      setNoteInput("")
    } catch (error) {
      console.error("Failed to save note:", error)
      alert("Failed to save note. Please try again.")
    }
  }

  const handleBulkDelete = async () => {
    if (selectedClients.length === 0) return
    if (!window.confirm(`Are you sure you want to delete ${selectedClients.length} client(s)? This action cannot be undone.`)) return
    
    try {
      await bulkDeleteClients(selectedClients)
      const freshClients = await getClients()
      setClients(freshClients)
      setSelectedClients([])
    } catch (error) {
      console.error("Failed to perform bulk delete:", error)
      alert("Failed to delete some or all clients. Please try again.")
      const data = await getClients()
      setClients(data)
    }
  }

  const handleBulkEmail = () => {
    if (selectedClients.length === 0) return
    const emails = clients.filter((c) => selectedClients.includes(c.id)).map((c) => c.email)
    window.open(`mailto:${emails.join(",")}`)
  }

  const handleExportClients = () => {
    const headers = ["Name", "Company", "Email", "Phone", "Status", "Industry", "Tier", "Account Manager", "Monthly Revenue", "Total Revenue", "Contract Value", "Contract End", "Health Score", "Tags", "Joined Date"]
    const rows = filteredClients.map(c => [
      c.name, c.company, c.email, c.phone, c.status, c.industry, c.tier, c.accountManager,
      c.monthlyRevenue, c.totalRevenue, c.contractValue, c.contractEnd, c.healthScore,
      c.tags.join("; "), c.joinedDate,
    ])
    const csv = [headers.join(","), ...rows.map(r => r.map(v => `"${v}"`).join(","))].join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `clients_export_${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImportClients = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".csv"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = async (ev) => {
        const text = ev.target?.result as string
        const lines = text.split("\n").filter(l => l.trim())
        if (lines.length < 2) return

        try {
          for (const line of lines.slice(1)) {
            const cols = line.split(",").map(c => c.replace(/^"|"$/g, "").trim())
            await createClient({
              name: cols[0] || "Unknown",
              company: cols[1] || "",
              email: cols[2] || "",
              phone: cols[3] || "",
              status: (cols[4] as Client["status"]) || "prospect",
              industry: cols[5] || "Technology",
              tier: (cols[6] as Client["tier"]) || "starter",
              accountManager: cols[7] || "Alex Johnson",
              monthlyRevenue: Number(cols[8]) || 0,
              totalRevenue: Number(cols[9]) || 0,
              contractValue: Number(cols[10]) || 0,
              contractEnd: cols[11] || "",
              healthScore: Number(cols[12]) || 50,
              tags: cols[13] ? cols[13].split(";").map(t => t.trim()).filter(Boolean) : [],
              joinedDate: cols[14] || new Date().toISOString().split("T")[0],
              lastContact: new Date().toISOString().split("T")[0],
              notes: "",
              starred: false,
              satisfaction: 50,
              paymentStatus: "pending",
              engagementScore: 50,
              lifetimeValue: 0,
              openTickets: 0,
              npsScore: 0,
              revenueGrowth: 0,
              activeCampaigns: 0,
              activeProjects: 0,
              completedProjects: 0,
              address: "",
              website: "",
            })
          }

          const freshClients = await getClients()
          setClients(freshClients)
        } catch (err) {
          console.error("Failed to import clients:", err)
          alert("Failed to import some or all clients. Please try again.")
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  const getHealthBg = (score: number) => {
    if (score >= 70) return "bg-emerald-400"
    if (score >= 40) return "bg-amber-400"
    return "bg-red-400"
  }

  const kanbanStatuses = ["prospect", "active", "paused", "inactive", "churned"] as const

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Clients</h1>
            <p className="text-muted-foreground mt-1">Manage relationships, track health scores, and monitor revenue</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={handleExportClients}>
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={handleImportClients}>
              <Upload className="w-4 h-4" />
              Import
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Client
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Plus className="w-5 h-5 text-primary" />
                    </div>
                    Add New Client
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground">Fill in the details to create a new client profile</p>
                </DialogHeader>
                <form onSubmit={handleAddClient} className="space-y-6 mt-4">
                  {/* Basic Information Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      <Users className="w-4 h-4" />
                      Basic Information
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-1">
                          Contact Name <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <Input id="name" name="name" placeholder="John Doe" required className="pl-9" />
                          <Users className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="flex items-center gap-1">
                          Company <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <Input id="company" name="company" placeholder="Acme Inc" required className="pl-9" />
                          <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-1">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <Input id="email" name="email" type="email" placeholder="john@acme.com" required className="pl-9" />
                          <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" className="pl-9" />
                          <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Business Details Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      <Briefcase className="w-4 h-4" />
                      Business Details
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <div className="relative">
                          <Input id="website" name="website" placeholder="acme.com" className="pl-9" />
                          <Globe className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select name="industry" defaultValue="Technology">
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.slice(1).map((ind) => (
                              <SelectItem key={ind} value={ind}>
                                {ind}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="status">Client Status</Label>
                        <Select name="status" defaultValue="prospect">
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="prospect">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-violet-400" />
                                Prospect
                              </div>
                            </SelectItem>
                            <SelectItem value="active">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                Active
                              </div>
                            </SelectItem>
                            <SelectItem value="paused">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-amber-400" />
                                Paused
                              </div>
                            </SelectItem>
                            <SelectItem value="inactive">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-zinc-400" />
                                Inactive
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <Input id="address" name="address" placeholder="123 Main St, City, State" className="pl-9" />
                          <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Client Classification Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      <Target className="w-4 h-4" />
                      Client Classification
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tier">Client Tier</Label>
                        <Select name="tier" defaultValue="starter">
                          <SelectTrigger>
                            <SelectValue placeholder="Select tier" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="enterprise">
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-amber-400" />
                                Enterprise
                              </div>
                            </SelectItem>
                            <SelectItem value="professional">
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-blue-400" />
                                Professional
                              </div>
                            </SelectItem>
                            <SelectItem value="starter">
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-zinc-400" />
                                Starter
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountManager">Account Manager</Label>
                        <Select name="accountManager" defaultValue="Alex Johnson">
                          <SelectTrigger>
                            <SelectValue placeholder="Select manager" />
                          </SelectTrigger>
                          <SelectContent>
                            {accountManagers.slice(1).map((mgr) => (
                              <SelectItem key={mgr} value={mgr}>
                                {mgr}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    {/* Tags Input */}
                    <div className="space-y-2">
                      <Label>Tags</Label>
                      <div className="flex flex-wrap gap-2 p-3 rounded-lg border bg-secondary/30 min-h-[44px]">
                        {newClientTags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="gap-1 pr-1">
                            {tag}
                            <button
                              type="button"
                              onClick={() => setNewClientTags(newClientTags.filter((_, i) => i !== index))}
                              className="hover:bg-destructive/20 rounded p-0.5 ml-1"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                        <input
                          type="text"
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === ",") {
                              e.preventDefault()
                              const tag = tagInput.trim()
                              if (tag && !newClientTags.includes(tag)) {
                                setNewClientTags([...newClientTags, tag])
                                setTagInput("")
                              }
                            }
                          }}
                          placeholder={newClientTags.length === 0 ? "Type and press Enter to add tags..." : "Add more..."}
                          className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Press Enter or comma to add a tag</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Contract Details Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      <DollarSign className="w-4 h-4" />
                      Contract Details
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contractValue">Contract Value (৳)</Label>
                        <div className="relative">
                          <Input id="contractValue" name="contractValue" type="number" placeholder="50000" className="pl-9" />
                          <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="monthlyRevenue">Monthly Revenue (৳)</Label>
                        <div className="relative">
                          <Input id="monthlyRevenue" name="monthlyRevenue" type="number" placeholder="5000" className="pl-9" />
                          <TrendingUp className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contractEnd">Contract End Date</Label>
                        <div className="relative">
                          <Input id="contractEnd" name="contractEnd" type="date" className="pl-9" />
                          <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Notes Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      <FileText className="w-4 h-4" />
                      Additional Notes
                    </div>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Enter any additional notes about the client, project requirements, special instructions..."
                      className="min-h-[100px] resize-none"
                    />
                  </div>

                  <DialogFooter className="gap-2 pt-4 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsAddDialogOpen(false)
                        setNewClientTags([])
                        setTagInput("")
                      }}
                      className="bg-transparent"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Add Client
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            {
              label: "Total Clients",
              value: stats.total,
              icon: Building2,
              color: "text-foreground",
              subValue: `${stats.enterpriseCount} Enterprise`,
            },
            {
              label: "Active",
              value: stats.active,
              icon: CheckCircle,
              color: "text-emerald-400",
              subValue: `${stats.prospects} prospects`,
            },
            {
              label: "Monthly Revenue",
              value: `৳${(stats.monthlyRecurring / 1000).toFixed(0)}K`,
              icon: DollarSign,
              color: "text-primary",
              subValue: "Recurring",
            },
            {
              label: "Avg Health",
              value: `${stats.avgHealthScore}%`,
              icon: Heart,
              color: getHealthColor(stats.avgHealthScore),
              subValue: `${stats.atRisk} at risk`,
            },
            { label: "Avg NPS", value: stats.avgNPS, icon: Target, color: "text-violet-400", subValue: "Score" },
            {
              label: "Lifetime Value",
              value: `৳${(stats.totalLTV / 1000000).toFixed(1)}M`,
              icon: TrendingUp,
              color: "text-cyan-400",
              subValue: "Total LTV",
            },
          ].map((stat, i) => (
            <AnimatedCard key={stat.label} delay={i * 50} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  <p className={`text-xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{stat.subValue}</p>
                </div>
                <div className={`p-2 rounded-lg bg-secondary/50`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Filters & Search Bar */}
        <AnimatedCard delay={150} className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search clients, companies, tags..."
                  className="pl-10 bg-secondary border-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`gap-2 ${activeFiltersCount > 0 ? "border-primary text-primary" : ""}`}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                  {isFilterOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-muted-foreground">
                    Clear all
                  </Button>
                )}
                <Separator orientation="vertical" className="h-8" />
                <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as typeof viewMode)}>
                  <TabsList className="bg-secondary h-9">
                    <TabsTrigger value="kanban" className="px-3 gap-1.5">
                      <Columns3 className="w-4 h-4" />
                      <span className="hidden sm:inline">Kanban</span>
                    </TabsTrigger>
                    <TabsTrigger value="grid" className="px-3 gap-1.5">
                      <LayoutGrid className="w-4 h-4" />
                      <span className="hidden sm:inline">Grid</span>
                    </TabsTrigger>
                    <TabsTrigger value="list" className="px-3 gap-1.5">
                      <List className="w-4 h-4" />
                      <span className="hidden sm:inline">List</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Expandable Filter Panel */}
            {isFilterOpen && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-3 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="bg-secondary border-0">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="prospect">Prospect</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="churned">Churned</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={industryFilter} onValueChange={setIndustryFilter}>
                  <SelectTrigger className="bg-secondary border-0">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((ind) => (
                      <SelectItem key={ind} value={ind}>
                        {ind}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={tierFilter} onValueChange={setTierFilter}>
                  <SelectTrigger className="bg-secondary border-0">
                    <SelectValue placeholder="Tier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tiers</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="starter">Starter</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={managerFilter} onValueChange={setManagerFilter}>
                  <SelectTrigger className="bg-secondary border-0">
                    <SelectValue placeholder="Manager" />
                  </SelectTrigger>
                  <SelectContent>
                    {accountManagers.map((mgr) => (
                      <SelectItem key={mgr} value={mgr}>
                        {mgr}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={healthFilter} onValueChange={setHealthFilter}>
                  <SelectTrigger className="bg-secondary border-0">
                    <SelectValue placeholder="Health" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Health</SelectItem>
                    <SelectItem value="healthy">Healthy (70+)</SelectItem>
                    <SelectItem value="at-risk">At Risk (40-69)</SelectItem>
                    <SelectItem value="critical">Critical (&lt;40)</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                  <SelectTrigger className="bg-secondary border-0">
                    <SelectValue placeholder="Payment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Payments</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </AnimatedCard>

        {/* Bulk Actions Bar */}
        {selectedClients.length > 0 && (
          <div className="flex items-center justify-between p-3 bg-primary/10 border border-primary/20 rounded-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="text-sm font-medium">
              {selectedClients.length} client{selectedClients.length > 1 ? "s" : ""} selected
            </span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={handleBulkEmail}>
                <Send className="w-4 h-4" />
                Send Email
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={() => alert("Bulk edit coming soon! Select individual clients to edit for now.")}>
                <Edit className="w-4 h-4" />
                Bulk Edit
              </Button>
              <Button variant="outline" size="sm" className="gap-2 text-red-400 hover:text-red-300 bg-transparent" onClick={handleBulkDelete}>
                <Trash2 className="w-4 h-4" />
                Delete
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setSelectedClients([])}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Kanban View */}
        {viewMode === "kanban" && (
          <div className="flex gap-4 overflow-x-auto pb-4">
            {kanbanStatuses.map((status, colIndex) => {
              const statusClients = filteredClients.filter((c) => c.status === status)
              const StatusIcon = statusConfig[status].icon
              const columnRevenue = statusClients.reduce((sum, c) => sum + c.monthlyRevenue, 0)
              return (
                <div
                  key={status}
                  className={`flex-shrink-0 w-[320px] rounded-xl transition-all duration-200 ${dragOverStatus === status ? "bg-primary/10 ring-2 ring-primary/50" : "bg-card/30"
                    }`}
                  onDragOver={(e) => handleDragOver(e, status)}
                  onDragLeave={(e) => handleDragLeave(e)}
                  onDrop={(e) => handleDrop(e, status)}
                >
                  {/* Column Header */}
                  <div className="p-3 border-b border-border/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${statusConfig[status].dotColor}`} />
                        <span className="font-medium text-sm">{statusConfig[status].label}</span>
                        <span className="px-1.5 py-0.5 text-xs bg-secondary rounded-md text-muted-foreground">
                          {statusClients.length}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">${(columnRevenue / 1000).toFixed(0)}K/mo</span>
                    </div>
                  </div>

                  {/* Column Content */}
                  <ScrollArea className="h-[calc(100vh-400px)] min-h-[400px]">
                    <div className="p-2 space-y-2">
                      {statusClients.map((client, i) => (
                        <div
                          key={client.id}
                          draggable
                          onDragStart={(e) => handleDragStart(e, client)}
                          onClick={() => setSelectedClient(client)}
                          className={`group p-3 bg-card border border-border/50 rounded-lg cursor-grab active:cursor-grabbing hover:border-border hover:shadow-lg transition-all duration-200 animate-in fade-in slide-in-from-bottom-2 ${draggedClient?.id === client.id ? "opacity-50 scale-95" : ""
                            }`}
                          style={{ animationDelay: `${i * 30}ms` }}
                        >
                          {/* Card Header */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                              <Avatar className="w-8 h-8 flex-shrink-0">
                                <AvatarFallback className="bg-primary/20 text-primary text-xs">
                                  {client.name
                                    .split(" ")
                                    .map((n: string) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded shrink-0">{client.uid || client.id.slice(0, 6)}</span>
                                  <h4 className="font-medium text-sm truncate">{client.company}</h4>
                                </div>
                                <p className="text-xs text-muted-foreground truncate">{client.name}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleStarred(client.id)
                                }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                {client.starred ? (
                                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ) : (
                                  <StarOff className="w-4 h-4 text-muted-foreground hover:text-amber-400" />
                                )}
                              </button>
                              <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>

                          {/* Tier Badge */}
                          <div className="mt-2 flex items-center gap-2">
                            <Badge className={`text-[10px] px-1.5 py-0 ${(tierConfig as any)[client.tier]?.color || ''}`}>
                              {(tierConfig as any)[client.tier]?.label || client.tier}
                            </Badge>
                            <span className="text-[10px] text-muted-foreground">{client.industry}</span>
                          </div>

                          {/* Stats Row */}
                          <div className="mt-3 grid grid-cols-3 gap-2">
                            <div className="text-center p-1.5 bg-secondary/50 rounded">
                              <p className="text-xs font-semibold text-primary">
                                ${(client.monthlyRevenue / 1000).toFixed(1)}K
                              </p>
                              <p className="text-[9px] text-muted-foreground">Monthly</p>
                            </div>
                            <div className="text-center p-1.5 bg-secondary/50 rounded">
                              <p className={`text-xs font-semibold ${getHealthColor(client.healthScore)}`}>
                                {client.healthScore}%
                              </p>
                              <p className="text-[9px] text-muted-foreground">Health</p>
                            </div>
                            <div className="text-center p-1.5 bg-secondary/50 rounded">
                              <p className="text-xs font-semibold">{client.activeProjects}</p>
                              <p className="text-[9px] text-muted-foreground">Projects</p>
                            </div>
                          </div>

                          {/* Health Bar */}
                          <div className="mt-2">
                            <div className="h-1 bg-secondary rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all duration-500 ${getHealthBg(client.healthScore)}`}
                                style={{ width: `${client.healthScore}%` }}
                              />
                            </div>
                          </div>

                          {/* Tags */}
                          {client.tags.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {client.tags.slice(0, 3).map((tag: string) => (
                                <span
                                  key={tag}
                                  className="px-1.5 py-0.5 text-[9px] bg-secondary rounded text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                              {client.tags.length > 3 && (
                                <span className="px-1.5 py-0.5 text-[9px] bg-secondary rounded text-muted-foreground">
                                  +{client.tags.length - 3}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Footer */}
                          <div className="mt-2 pt-2 border-t border-border/50 flex items-center justify-between">
                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                              <Avatar className="w-4 h-4">
                                <AvatarFallback className="text-[8px] bg-secondary">
                                  {client.accountManager
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span>{client.accountManager.split(" ")[0]}</span>
                            </div>
                            <div
                              className={`flex items-center gap-1 text-[10px] ${(paymentConfig as any)[client.paymentStatus]?.color || ''}`}
                            >
                              {client.paymentStatus === "overdue" && <AlertTriangle className="w-3 h-3" />}
                              {(paymentConfig as any)[client.paymentStatus]?.label || client.paymentStatus}
                            </div>
                          </div>
                        </div>
                      ))}
                      {statusClients.length === 0 && (
                        <div className="p-8 text-center text-muted-foreground text-sm">
                          <Building2 className="w-8 h-8 mx-auto mb-2 opacity-20" />
                          No clients
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </div>
              )
            })}
          </div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClients.map((client, i) => {
              const StatusIcon = (statusConfig as any)[client.status]?.icon || Info
              return (
                <AnimatedCard
                  key={client.id}
                  delay={i * 30}
                  className="cursor-pointer group"
                  onClick={() => setSelectedClient(client)}
                >
                  <CardContent className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-primary/20 text-primary">
                              {client.name
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card ${(statusConfig as any)[client.status]?.dotColor || ''}`}
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded mb-1 inline-block">{client.uid || client.id.slice(0, 6)}</span>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{client.company}</h3>
                            {client.starred && <Star className="w-4 h-4 text-amber-400 fill-amber-400" />}
                          </div>
                          <p className="text-sm text-muted-foreground">{client.name}</p>
                        </div>
                      </div>
                      <Badge className={`${(tierConfig as any)[client.tier]?.color || ''} text-[10px]`}>
                        {(tierConfig as any)[client.tier]?.label || client.tier}
                      </Badge>
                    </div>

                    {/* Info */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{client.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{client.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{client.accountManager}</span>
                      </div>
                    </div>

                    {/* Health Score */}
                    <div className="mt-4 p-3 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground">Health Score</span>
                        <span className={`text-sm font-bold ${getHealthColor(client.healthScore)}`}>
                          {client.healthScore}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-700 ${getHealthBg(client.healthScore)}`}
                          style={{ width: `${client.healthScore}%` }}
                        />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">${(client.monthlyRevenue / 1000).toFixed(0)}K</p>
                        <p className="text-[10px] text-muted-foreground">Monthly</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">{client.activeProjects}</p>
                        <p className="text-[10px] text-muted-foreground">Active</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-emerald-400">{client.npsScore}</p>
                        <p className="text-[10px] text-muted-foreground">NPS</p>
                      </div>
                      <div className="text-center">
                        <div
                          className={`flex items-center justify-center gap-0.5 ${client.revenueGrowth >= 0 ? "text-emerald-400" : "text-red-400"}`}
                        >
                          {client.revenueGrowth >= 0 ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          <span className="text-lg font-bold">{Math.abs(client.revenueGrowth)}%</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground">Growth</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {client.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] bg-secondary rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                      <Badge className={`${(statusConfig as any)[client.status]?.color || ''} border-0`}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {(statusConfig as any)[client.status]?.label || client.status}
                      </Badge>
                      <span className={`text-xs ${(paymentConfig as any)[client.paymentStatus]?.color || ''}`}>
                        {(paymentConfig as any)[client.paymentStatus]?.label || client.paymentStatus}
                      </span>
                    </div>
                  </CardContent>
                </AnimatedCard>
              )
            })}
          </div>
        )}

        {/* List/Table View */}
        {viewMode === "list" && (
          <AnimatedCard delay={200}>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">
                        <Checkbox
                          checked={selectedClients.length === filteredClients.length && filteredClients.length > 0}
                          onCheckedChange={selectAllClients}
                        />
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Client</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Tier</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Monthly</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">LTV</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Health</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">NPS</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Growth</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Manager</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Payment</th>
                      <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client, i) => {
                      const StatusIcon = statusConfig[client.status].icon
                      return (
                        <tr
                          key={client.id}
                          className="border-b border-border/50 hover:bg-secondary/30 transition-colors animate-in fade-in slide-in-from-bottom-2 duration-300"
                          style={{ animationDelay: `${i * 30}ms` }}
                        >
                          <td className="py-3 px-4" onClick={(e) => e.stopPropagation()}>
                            <Checkbox
                              checked={selectedClients.includes(client.id)}
                              onCheckedChange={() => toggleSelectClient(client.id)}
                            />
                          </td>
                          <td className="py-3 px-4 cursor-pointer" onClick={() => setSelectedClient(client)}>
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <Avatar className="w-9 h-9">
                                  <AvatarFallback className="bg-primary/20 text-primary text-xs">
                                    {client.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                {client.starred && (
                                  <Star className="absolute -top-1 -right-1 w-3 h-3 text-amber-400 fill-amber-400" />
                                )}
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">{client.uid || client.id.slice(0, 6)}</span>
                                  <p className="font-medium text-sm">{client.company}</p>
                                </div>
                                <p className="text-xs text-muted-foreground">{client.name}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={`${statusConfig[client.status].color} border-0 text-[10px]`}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {statusConfig[client.status].label}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={`${tierConfig[client.tier].color} text-[10px]`}>
                              {tierConfig[client.tier].label}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-medium text-primary">${client.monthlyRevenue.toLocaleString()}</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-sm">${(client.lifetimeValue / 1000).toFixed(0)}K</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${getHealthBg(client.healthScore)}`}
                                  style={{ width: `${client.healthScore}%` }}
                                />
                              </div>
                              <span className={`text-xs font-medium ${getHealthColor(client.healthScore)}`}>
                                {client.healthScore}%
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`text-sm font-medium ${client.npsScore >= 8 ? "text-emerald-400" : client.npsScore >= 6 ? "text-amber-400" : "text-red-400"}`}
                            >
                              {client.npsScore || "-"}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div
                              className={`flex items-center gap-0.5 ${client.revenueGrowth >= 0 ? "text-emerald-400" : "text-red-400"}`}
                            >
                              {client.revenueGrowth >= 0 ? (
                                <ArrowUpRight className="w-3 h-3" />
                              ) : (
                                <ArrowDownRight className="w-3 h-3" />
                              )}
                              <span className="text-sm font-medium">{Math.abs(client.revenueGrowth)}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-5 h-5">
                                <AvatarFallback className="text-[8px] bg-secondary">
                                  {client.accountManager
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-muted-foreground">
                                {client.accountManager.split(" ")[0]}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`text-xs font-medium ${paymentConfig[client.paymentStatus].color}`}>
                              {client.paymentStatus === "overdue" && <AlertTriangle className="w-3 h-3 inline mr-1" />}
                              {paymentConfig[client.paymentStatus].label}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 p-0"
                                onClick={() => setSelectedClient(client)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => setSelectedClient(client)}>
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => { openEditDialog(client) }}>
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit Client
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem onClick={() => window.open(`mailto:${client.email}`)}>
                                    <Mail className="w-4 h-4 mr-2" />
                                    Send Email
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => window.open(`tel:${client.phone}`)}>
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-400 focus:text-red-400" onClick={() => handleDeleteClient(client.id)}>
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
              </div>
            </CardContent>
          </AnimatedCard>
        )}

        {/* Edit Client Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Edit className="w-5 h-5 text-primary" />
                </div>
                Edit Client
              </DialogTitle>
              <p className="text-sm text-muted-foreground">Update the client's information below</p>
            </DialogHeader>
            {editingClient && (
              <form onSubmit={handleEditClient} className="space-y-6">
                {/* Basic Info Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    <Building2 className="w-4 h-4" />
                    Basic Information
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-name">Contact Name *</Label>
                      <div className="relative">
                        <Input id="edit-name" name="name" defaultValue={editingClient.name} required className="pl-9" />
                        <Users className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-company">Company Name *</Label>
                      <div className="relative">
                        <Input id="edit-company" name="company" defaultValue={editingClient.company} required className="pl-9" />
                        <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-email">Email *</Label>
                      <div className="relative">
                        <Input id="edit-email" name="email" type="email" defaultValue={editingClient.email} required className="pl-9" />
                        <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-phone">Phone</Label>
                      <div className="relative">
                        <Input id="edit-phone" name="phone" defaultValue={editingClient.phone} className="pl-9" />
                        <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-website">Website</Label>
                      <div className="relative">
                        <Input id="edit-website" name="website" defaultValue={editingClient.website} className="pl-9" />
                        <Globe className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-industry">Industry</Label>
                      <Select name="industry" defaultValue={editingClient.industry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.slice(1).map((ind) => (
                            <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-status">Status</Label>
                      <Select name="status" defaultValue={editingClient.status}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="prospect">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-violet-400" />
                              Prospect
                            </div>
                          </SelectItem>
                          <SelectItem value="active">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                              Active
                            </div>
                          </SelectItem>
                          <SelectItem value="paused">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-amber-400" />
                              Paused
                            </div>
                          </SelectItem>
                          <SelectItem value="inactive">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-zinc-400" />
                              Inactive
                            </div>
                          </SelectItem>
                          <SelectItem value="churned">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-400" />
                              Churned
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-address">Address</Label>
                      <div className="relative">
                        <Input id="edit-address" name="address" defaultValue={editingClient.address} className="pl-9" />
                        <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-joinedDate">Client Since</Label>
                      <div className="relative">
                        <Input id="edit-joinedDate" name="joinedDate" type="date" defaultValue={editingClient.joinedDate} className="pl-9" />
                        <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Client Classification Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    <Target className="w-4 h-4" />
                    Client Classification
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-tier">Client Tier</Label>
                      <Select name="tier" defaultValue={editingClient.tier}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tier" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enterprise">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-amber-400" />
                              Enterprise
                            </div>
                          </SelectItem>
                          <SelectItem value="professional">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-blue-400" />
                              Professional
                            </div>
                          </SelectItem>
                          <SelectItem value="starter">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-zinc-400" />
                              Starter
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-accountManager">Account Manager</Label>
                      <Select name="accountManager" defaultValue={editingClient.accountManager}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select manager" />
                        </SelectTrigger>
                        <SelectContent>
                          {accountManagers.slice(1).map((mgr) => (
                            <SelectItem key={mgr} value={mgr}>{mgr}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {/* Tags Input */}
                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2 p-3 rounded-lg border bg-secondary/30 min-h-[44px]">
                      {editClientTags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="gap-1 pr-1">
                          {tag}
                          <button
                            type="button"
                            onClick={() => setEditClientTags(editClientTags.filter((_, i) => i !== index))}
                            className="hover:bg-destructive/20 rounded p-0.5 ml-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                      <input
                        type="text"
                        value={editTagInput}
                        onChange={(e) => setEditTagInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === ",") {
                            e.preventDefault()
                            const tag = editTagInput.trim()
                            if (tag && !editClientTags.includes(tag)) {
                              setEditClientTags([...editClientTags, tag])
                              setEditTagInput("")
                            }
                          }
                        }}
                        placeholder={editClientTags.length === 0 ? "Type and press Enter to add tags..." : "Add more..."}
                        className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Press Enter or comma to add a tag</p>
                  </div>
                </div>

                <Separator />

                {/* Metrics & Scores Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    <Heart className="w-4 h-4" />
                    Metrics & Scores
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-healthScore">Health Score (0-100)</Label>
                      <div className="relative">
                        <Input id="edit-healthScore" name="healthScore" type="number" min="0" max="100" defaultValue={editingClient.healthScore} className="pl-9" />
                        <Heart className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-engagementScore">Engagement (0-100)</Label>
                      <div className="relative">
                        <Input id="edit-engagementScore" name="engagementScore" type="number" min="0" max="100" defaultValue={editingClient.engagementScore} className="pl-9" />
                        <Target className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-satisfaction">Satisfaction (0-100)</Label>
                      <div className="relative">
                        <Input id="edit-satisfaction" name="satisfaction" type="number" min="0" max="100" defaultValue={editingClient.satisfaction} className="pl-9" />
                        <Sparkles className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-npsScore">NPS Score (0-10)</Label>
                      <div className="relative">
                        <Input id="edit-npsScore" name="npsScore" type="number" min="0" max="10" defaultValue={editingClient.npsScore} className="pl-9" />
                        <Star className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-revenueGrowth">Revenue Growth (%)</Label>
                      <div className="relative">
                        <Input id="edit-revenueGrowth" name="revenueGrowth" type="number" defaultValue={editingClient.revenueGrowth} className="pl-9" />
                        <TrendingUp className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-openTickets">Open Tickets</Label>
                      <div className="relative">
                        <Input id="edit-openTickets" name="openTickets" type="number" min="0" defaultValue={editingClient.openTickets} className="pl-9" />
                        <AlertTriangle className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-activeProjects">Active Projects</Label>
                      <div className="relative">
                        <Input id="edit-activeProjects" name="activeProjects" type="number" min="0" defaultValue={editingClient.activeProjects} className="pl-9" />
                        <Briefcase className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-completedProjects">Completed Projects</Label>
                      <div className="relative">
                        <Input id="edit-completedProjects" name="completedProjects" type="number" min="0" defaultValue={editingClient.completedProjects} className="pl-9" />
                        <CheckCircle className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-activeCampaigns">Active Campaigns</Label>
                      <div className="relative">
                        <Input id="edit-activeCampaigns" name="activeCampaigns" type="number" min="0" defaultValue={editingClient.activeCampaigns} className="pl-9" />
                        <Target className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Contract & Financial Details Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    <DollarSign className="w-4 h-4" />
                    Contract & Financial Details
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-totalRevenue">Total Revenue (৳)</Label>
                      <div className="relative">
                        <Input id="edit-totalRevenue" name="totalRevenue" type="number" defaultValue={editingClient.totalRevenue} className="pl-9" />
                        <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-contractValue">Contract Value (৳)</Label>
                      <div className="relative">
                        <Input id="edit-contractValue" name="contractValue" type="number" defaultValue={editingClient.contractValue} className="pl-9" />
                        <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-monthlyRevenue">Monthly Revenue (৳)</Label>
                      <div className="relative">
                        <Input id="edit-monthlyRevenue" name="monthlyRevenue" type="number" defaultValue={editingClient.monthlyRevenue} className="pl-9" />
                        <TrendingUp className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-lifetimeValue">Lifetime Value (৳)</Label>
                      <div className="relative">
                        <Input id="edit-lifetimeValue" name="lifetimeValue" type="number" defaultValue={editingClient.lifetimeValue} className="pl-9" />
                        <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-contractEnd">Contract End Date</Label>
                      <div className="relative">
                        <Input id="edit-contractEnd" name="contractEnd" type="date" defaultValue={editingClient.contractEnd} className="pl-9" />
                        <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-paymentStatus">Payment Status</Label>
                      <Select name="paymentStatus" defaultValue={editingClient.paymentStatus}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paid">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                              Paid
                            </div>
                          </SelectItem>
                          <SelectItem value="pending">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-amber-400" />
                              Pending
                            </div>
                          </SelectItem>
                          <SelectItem value="overdue">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-400" />
                              Overdue
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Notes Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    <FileText className="w-4 h-4" />
                    Additional Notes
                  </div>
                  <Textarea
                    id="edit-notes"
                    name="notes"
                    defaultValue={editingClient.notes}
                    placeholder="Enter any additional notes about the client..."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <DialogFooter className="gap-2 pt-4 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsEditDialogOpen(false)
                      setEditingClient(null)
                      setEditClientTags([])
                      setEditTagInput("")
                    }}
                    className="bg-transparent"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Save Changes
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* Client Detail Modal */}
        <Dialog open={!!selectedClient} onOpenChange={() => setSelectedClient(null)}>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col">
            {selectedClient && (
              <>
                <DialogHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16">
                          <AvatarFallback className="bg-primary/20 text-primary text-xl">
                            {selectedClient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${statusConfig[selectedClient.status].dotColor}`}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <DialogTitle className="text-xl">{selectedClient.company}</DialogTitle>
                          <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">{selectedClient.id}</span>
                          <Badge className={tierConfig[selectedClient.tier].color}>
                            {tierConfig[selectedClient.tier].label}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {selectedClient.name} • {selectedClient.industry}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={() => window.open(`mailto:${selectedClient.email}`)}>
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={() => window.open(`tel:${selectedClient.phone}`)}>
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={() => { setSelectedClient(null); openEditDialog(selectedClient); }}>
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 text-red-400 hover:text-red-300 bg-transparent" onClick={() => handleDeleteClient(selectedClient.id)}>
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </DialogHeader>

                <ScrollArea className="flex-1 pr-4">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="w-full grid grid-cols-4 mb-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="projects">Projects</TabsTrigger>
                      <TabsTrigger value="activity">Activity</TabsTrigger>
                      <TabsTrigger value="notes">Notes</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-4 gap-3">
                        <div className="p-3 bg-secondary/30 rounded-lg text-center">
                          <p className="text-2xl font-bold text-primary">
                            ${(selectedClient.totalRevenue / 1000).toFixed(0)}K
                          </p>
                          <p className="text-xs text-muted-foreground">Total Revenue</p>
                        </div>
                        <div className="p-3 bg-secondary/30 rounded-lg text-center">
                          <p className="text-2xl font-bold">${(selectedClient.monthlyRevenue / 1000).toFixed(0)}K</p>
                          <p className="text-xs text-muted-foreground">Monthly</p>
                        </div>
                        <div className="p-3 bg-secondary/30 rounded-lg text-center">
                          <p className={`text-2xl font-bold ${getHealthColor(selectedClient.healthScore)}`}>
                            {selectedClient.healthScore}%
                          </p>
                          <p className="text-xs text-muted-foreground">Health Score</p>
                        </div>
                        <div className="p-3 bg-secondary/30 rounded-lg text-center">
                          <p className="text-2xl font-bold text-violet-400">{selectedClient.npsScore || "-"}</p>
                          <p className="text-xs text-muted-foreground">NPS Score</p>
                        </div>
                      </div>

                      {/* Health & Engagement */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-secondary/20 rounded-lg">
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-400" />
                            Health Score Breakdown
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Engagement</span>
                                <span>{selectedClient.engagementScore}%</span>
                              </div>
                              <Progress value={selectedClient.engagementScore} className="h-1.5" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Satisfaction</span>
                                <span>{selectedClient.satisfaction}%</span>
                              </div>
                              <Progress value={selectedClient.satisfaction} className="h-1.5" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Revenue Growth</span>
                                <span
                                  className={selectedClient.revenueGrowth >= 0 ? "text-emerald-400" : "text-red-400"}
                                >
                                  {selectedClient.revenueGrowth >= 0 ? "+" : ""}
                                  {selectedClient.revenueGrowth}%
                                </span>
                              </div>
                              <Progress
                                value={Math.min(100, Math.max(0, selectedClient.revenueGrowth + 50))}
                                className="h-1.5"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-secondary/20 rounded-lg">
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-400" />
                            Contract Details
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Contract Value</span>
                              <span className="font-medium">${selectedClient.contractValue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Contract End</span>
                              <span>{selectedClient.contractEnd || "N/A"}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Lifetime Value</span>
                              <span className="font-medium text-primary">
                                ${selectedClient.lifetimeValue.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Payment Status</span>
                              <span className={paymentConfig[selectedClient.paymentStatus].color}>
                                {paymentConfig[selectedClient.paymentStatus].label}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="p-4 bg-secondary/20 rounded-lg">
                        <h4 className="font-medium mb-3">Contact Information</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span>{selectedClient.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span>{selectedClient.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-muted-foreground" />
                            <a
                              href={`https://${selectedClient.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center gap-1"
                            >
                              {selectedClient.website}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span>{selectedClient.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span>Account Manager: {selectedClient.accountManager}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>Client since {new Date(selectedClient.joinedDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {selectedClient.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="projects" className="space-y-4">
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="p-3 bg-secondary/30 rounded-lg text-center">
                          <p className="text-2xl font-bold">{selectedClient.activeProjects}</p>
                          <p className="text-xs text-muted-foreground">Active Projects</p>
                        </div>
                        <div className="p-3 bg-secondary/30 rounded-lg text-center">
                          <p className="text-2xl font-bold text-emerald-400">{selectedClient.completedProjects}</p>
                          <p className="text-xs text-muted-foreground">Completed</p>
                        </div>
                        <div className="p-3 bg-secondary/30 rounded-lg text-center">
                          <p className="text-2xl font-bold text-violet-400">{selectedClient.activeCampaigns}</p>
                          <p className="text-xs text-muted-foreground">Active Campaigns</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {selectedClient.activeProjects > 0 && Array.from({ length: selectedClient.activeProjects }, (_, i) => (
                          <div key={`active-${i}`} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg border border-border/50">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              <div>
                                <p className="text-sm font-medium">{["Website Redesign", "SEO Campaign", "Social Media Strategy", "Content Marketing", "PPC Management"][i % 5]}</p>
                                <p className="text-xs text-muted-foreground">Started {new Date(Date.now() - (i + 1) * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                              </div>
                            </div>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">In Progress</Badge>
                          </div>
                        ))}
                        {selectedClient.completedProjects > 0 && Array.from({ length: Math.min(selectedClient.completedProjects, 3) }, (_, i) => (
                          <div key={`completed-${i}`} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg border border-border/50 opacity-70">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                              <div>
                                <p className="text-sm font-medium">{["Brand Identity", "Email Automation", "Analytics Setup", "Landing Pages"][i % 4]}</p>
                                <p className="text-xs text-muted-foreground">Completed {new Date(Date.now() - (i + 3) * 60 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                              </div>
                            </div>
                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Completed</Badge>
                          </div>
                        ))}
                        {selectedClient.activeProjects === 0 && selectedClient.completedProjects === 0 && (
                          <div className="text-center text-muted-foreground py-8">
                            <Briefcase className="w-12 h-12 mx-auto mb-2 opacity-20" />
                            <p>No projects yet</p>
                          </div>
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="activity" className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">Recent Activity</h4>
                        <span className="text-xs text-muted-foreground">
                          Last contact: {new Date(selectedClient.lastContact).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="relative space-y-0">
                        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
                        {[
                          { icon: Mail, label: "Email follow-up sent", time: "2 days ago", color: "bg-blue-400" },
                          { icon: Phone, label: "Monthly review call completed", time: "1 week ago", color: "bg-emerald-400" },
                          { icon: FileText, label: "Contract renewed", time: "2 weeks ago", color: "bg-violet-400" },
                          { icon: DollarSign, label: `Invoice paid — $${(selectedClient.monthlyRevenue).toLocaleString()}`, time: "3 weeks ago", color: "bg-amber-400" },
                          { icon: Users, label: `Account manager assigned: ${selectedClient.accountManager}`, time: "1 month ago", color: "bg-cyan-400" },
                          { icon: CheckCircle, label: "Onboarding completed", time: "2 months ago", color: "bg-emerald-400" },
                          { icon: Star, label: "Client account created", time: new Date(selectedClient.joinedDate).toLocaleDateString(), color: "bg-primary" },
                        ].map((activity, i) => {
                          const ActivityIcon = activity.icon
                          return (
                            <div key={i} className={`relative flex items-start gap-4 py-3 ${i === 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
                              <div className={`relative z-10 w-[31px] h-[31px] rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                                <ActivityIcon className="w-3.5 h-3.5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm">{activity.label}</p>
                                <p className="text-xs opacity-60">{activity.time}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </TabsContent>

                    <TabsContent value="notes" className="space-y-4">
                      <div className="p-4 bg-secondary/20 rounded-lg">
                        <p className="text-sm whitespace-pre-line">{selectedClient.notes || "No notes yet."}</p>
                      </div>
                      <Textarea
                        placeholder="Add a note..."
                        className="min-h-[100px]"
                        value={noteInput}
                        onChange={(e) => setNoteInput(e.target.value)}
                      />
                      <Button className="w-full" onClick={handleSaveNote} disabled={!noteInput.trim()}>Save Note</Button>
                    </TabsContent>
                  </Tabs>
                </ScrollArea>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}
