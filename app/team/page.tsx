"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { AnimatedCard } from "@/components/animated-card"
import {
  Calendar,
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
  Filter,
  Plus,
  Search,
  Star,
  MapPin,
  Phone,
  Briefcase,
  Eye,
  Download,
  MailIcon,
} from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Assuming DashboardLayout is defined elsewhere, e.g., in components/dashboard-layout.tsx
// For demonstration purposes, let's mock it here. In a real app, you'd import it.
const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    {/* Mock Header/Sidebar */}
    <header className="border-b border-border/40 py-4 px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">AgencyFlow Dashboard</h2>
      <div className="flex items-center gap-4">
        <Input placeholder="Search..." className="w-64" />
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
    <main className="p-6">{children}</main>
  </div>
)

interface TeamMember {
  id: string
  name: string
  email: string
  phone: string
  role: string
  department: "design" | "development" | "marketing" | "content" | "management"
  status: "active" | "away" | "offline"
  avatar?: string
  location: string
  joinedDate: string
  tasksCompleted: number
  tasksInProgress: number
  projectsActive: number
  rating: number
  skills: string[]
  performanceData: { month: string; tasks: number }[]
  attendance: {
    date: string
    status: "present" | "absent" | "late" | "leave"
    checkIn?: string
    checkOut?: string
  }[]
  salary?: number
  employmentType: "Full-time" | "Part-time" | "Contract"
  manager?: string
  yearsOfExperience: number
  certifications: string[]
  emergencyContact?: { name: string; phone: string }
  performanceRating: number
  lastReviewDate: string
  nextReviewDate: string
  absenceHistory: { type: string; from: string; to: string }[]
  taskPerformanceHistory: {
    month: string
    completed: number
    onTime: number
    quality: number
    deadline: number
  }[]
}

const initialTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@agencyflow.com",
    phone: "+1 (555) 123-4567",
    role: "Lead Developer",
    department: "development",
    status: "active",
    location: "San Francisco, CA",
    joinedDate: "2022-03-15",
    tasksCompleted: 156,
    tasksInProgress: 8,
    projectsActive: 4,
    rating: 4.9,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    performanceData: [
      { month: "Jul", tasks: 18 },
      { month: "Aug", tasks: 22 },
      { month: "Sep", tasks: 19 },
      { month: "Oct", tasks: 25 },
      { month: "Nov", tasks: 28 },
      { month: "Dec", tasks: 24 },
    ],
    salary: 120000,
    employmentType: "Full-time",
    manager: "David Park",
    yearsOfExperience: 7,
    certifications: ["AWS Certified Developer", "Google Cloud Professional"],
    emergencyContact: { name: "Jane Doe", phone: "+1 (555) 123-4500" },
    performanceRating: 4.8,
    lastReviewDate: "2024-11-15",
    nextReviewDate: "2025-05-15",
    attendance: [
      { date: "2024-12-20", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-19", status: "present", checkIn: "08:55", checkOut: "17:55" },
      { date: "2024-12-18", status: "late", checkIn: "09:30", checkOut: "18:30" },
      { date: "2024-12-17", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-16", status: "absent", checkIn: undefined, checkOut: undefined },
    ],
    absenceHistory: [
      { type: "Vacation", from: "2024-08-01", to: "2024-08-14" },
      { type: "Sick Leave", from: "2024-06-10", to: "2024-06-12" },
    ],
    taskPerformanceHistory: [
      { month: "Jul", completed: 18, onTime: 17, quality: 95, deadline: 94 },
      { month: "Aug", completed: 22, onTime: 21, quality: 96, deadline: 95 },
      { month: "Sep", completed: 19, onTime: 18, quality: 94, deadline: 92 },
      { month: "Oct", completed: 25, onTime: 24, quality: 97, deadline: 96 },
      { month: "Nov", completed: 28, onTime: 27, quality: 98, deadline: 97 },
      { month: "Dec", completed: 24, onTime: 23, quality: 96, deadline: 95 },
    ],
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    email: "sarah@agencyflow.com",
    phone: "+1 (555) 234-5678",
    role: "Senior Designer",
    department: "design",
    status: "active",
    location: "New York, NY",
    joinedDate: "2022-06-20",
    tasksCompleted: 142,
    tasksInProgress: 6,
    projectsActive: 3,
    rating: 4.8,
    skills: ["Figma", "Adobe XD", "Illustration", "UI/UX"],
    performanceData: [
      { month: "Jul", tasks: 15 },
      { month: "Aug", tasks: 20 },
      { month: "Sep", tasks: 18 },
      { month: "Oct", tasks: 22 },
      { month: "Nov", tasks: 25 },
      { month: "Dec", tasks: 21 },
    ],
    salary: 95000,
    employmentType: "Full-time",
    manager: "Lisa Thompson",
    yearsOfExperience: 5,
    certifications: ["Adobe Certified Associate", "Figma Professional"],
    emergencyContact: { name: "Robert Mitchell", phone: "+1 (555) 234-5700" },
    performanceRating: 4.7,
    lastReviewDate: "2024-10-20",
    nextReviewDate: "2025-04-20",
    attendance: [
      { date: "2024-12-20", status: "present", checkIn: "09:05", checkOut: "18:05" },
      { date: "2024-12-19", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-18", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-17", status: "leave", checkIn: undefined, checkOut: undefined },
      { date: "2024-12-16", status: "present", checkIn: "09:00", checkOut: "18:00" },
    ],
    absenceHistory: [{ type: "Vacation", from: "2024-07-15", to: "2024-07-22" }],
    taskPerformanceHistory: [
      { month: "Jul", completed: 15, onTime: 14, quality: 93, deadline: 92 },
      { month: "Aug", completed: 20, onTime: 19, quality: 95, deadline: 94 },
      { month: "Sep", completed: 18, onTime: 17, quality: 92, deadline: 91 },
      { month: "Oct", completed: 22, onTime: 21, quality: 96, deadline: 95 },
      { month: "Nov", completed: 25, onTime: 24, quality: 97, deadline: 96 },
      { month: "Dec", completed: 21, onTime: 20, quality: 94, deadline: 93 },
    ],
  },
  {
    id: "3",
    name: "Emily Chen",
    email: "emily@agencyflow.com",
    phone: "+1 (555) 345-6789",
    role: "SEO Specialist",
    department: "marketing",
    status: "away",
    location: "Austin, TX",
    joinedDate: "2023-01-10",
    tasksCompleted: 98,
    tasksInProgress: 5,
    projectsActive: 2,
    rating: 4.7,
    skills: ["SEO", "Google Analytics", "Content Strategy", "Keyword Research"],
    performanceData: [
      { month: "Jul", tasks: 12 },
      { month: "Aug", tasks: 15 },
      { month: "Sep", tasks: 14 },
      { month: "Oct", tasks: 18 },
      { month: "Nov", tasks: 20 },
      { month: "Dec", tasks: 16 },
    ],
    salary: 75000,
    employmentType: "Full-time",
    manager: "David Park",
    yearsOfExperience: 3,
    certifications: ["Google Analytics IQ", "HubSpot Certification"],
    emergencyContact: { name: "Michael Chen", phone: "+1 (555) 345-6700" },
    performanceRating: 4.5,
    lastReviewDate: "2024-11-01",
    nextReviewDate: "2025-05-01",
    attendance: [
      { date: "2024-12-20", status: "leave", checkIn: undefined, checkOut: undefined },
      { date: "2024-12-19", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-18", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-17", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-16", status: "present", checkIn: "09:00", checkOut: "18:00" },
    ],
    absenceHistory: [
      { type: "Vacation", from: "2024-12-20", to: "2024-12-27" },
      { type: "Sick Leave", from: "2024-09-05", to: "2024-09-06" },
    ],
    taskPerformanceHistory: [
      { month: "Jul", completed: 12, onTime: 11, quality: 91, deadline: 90 },
      { month: "Aug", completed: 15, onTime: 14, quality: 93, deadline: 92 },
      { month: "Sep", completed: 14, onTime: 13, quality: 90, deadline: 88 },
      { month: "Oct", completed: 18, onTime: 17, quality: 94, deadline: 93 },
      { month: "Nov", completed: 20, onTime: 19, quality: 95, deadline: 94 },
      { month: "Dec", completed: 16, onTime: 15, quality: 92, deadline: 91 },
    ],
  },
  {
    id: "4",
    name: "James Wilson",
    email: "james@agencyflow.com",
    phone: "+1 (555) 456-7890",
    role: "PPC Manager",
    department: "marketing",
    status: "active",
    location: "Chicago, IL",
    joinedDate: "2023-04-05",
    tasksCompleted: 87,
    tasksInProgress: 4,
    projectsActive: 2,
    rating: 4.6,
    skills: ["Google Ads", "Meta Ads", "Analytics", "Campaign Management"],
    performanceData: [
      { month: "Jul", tasks: 10 },
      { month: "Aug", tasks: 14 },
      { month: "Sep", tasks: 12 },
      { month: "Oct", tasks: 16 },
      { month: "Nov", tasks: 18 },
      { month: "Dec", tasks: 15 },
    ],
    salary: 80000,
    employmentType: "Full-time",
    manager: "David Park",
    yearsOfExperience: 4,
    certifications: ["Google Ads Certified", "Meta Blueprint Certified"],
    emergencyContact: { name: "Patricia Wilson", phone: "+1 (555) 456-7800" },
    performanceRating: 4.4,
    lastReviewDate: "2024-10-01",
    nextReviewDate: "2025-04-01",
    attendance: [
      { date: "2024-12-20", status: "present", checkIn: "08:50", checkOut: "17:50" },
      { date: "2024-12-19", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-18", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-17", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-16", status: "present", checkIn: "09:00", checkOut: "18:00" },
    ],
    absenceHistory: [],
    taskPerformanceHistory: [
      { month: "Jul", completed: 10, onTime: 10, quality: 90, deadline: 90 },
      { month: "Aug", completed: 14, onTime: 13, quality: 92, deadline: 91 },
      { month: "Sep", completed: 12, onTime: 11, quality: 91, deadline: 90 },
      { month: "Oct", completed: 16, onTime: 15, quality: 93, deadline: 92 },
      { month: "Nov", completed: 18, onTime: 17, quality: 94, deadline: 93 },
      { month: "Dec", completed: 15, onTime: 14, quality: 92, deadline: 91 },
    ],
  },
  {
    id: "5",
    name: "Amanda Torres",
    email: "amanda@agencyflow.com",
    phone: "+1 (555) 567-8901",
    role: "Content Writer",
    department: "content",
    status: "active",
    location: "Miami, FL",
    joinedDate: "2023-07-12",
    tasksCompleted: 65,
    tasksInProgress: 7,
    projectsActive: 3,
    rating: 4.5,
    skills: ["Copywriting", "Blog Writing", "Social Media", "Editing"],
    performanceData: [
      { month: "Jul", tasks: 8 },
      { month: "Aug", tasks: 12 },
      { month: "Sep", tasks: 10 },
      { month: "Oct", tasks: 14 },
      { month: "Nov", tasks: 15 },
      { month: "Dec", tasks: 13 },
    ],
    salary: 60000,
    employmentType: "Contract",
    manager: "David Park",
    yearsOfExperience: 2,
    certifications: ["Content Marketing Certified"],
    emergencyContact: { name: "Carlos Torres", phone: "+1 (555) 567-8900" },
    performanceRating: 4.3,
    lastReviewDate: "2024-09-15",
    nextReviewDate: "2025-03-15",
    attendance: [
      { date: "2024-12-20", status: "present", checkIn: "09:15", checkOut: "18:15" },
      { date: "2024-12-19", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-18", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-17", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-16", status: "present", checkIn: "09:00", checkOut: "18:00" },
    ],
    absenceHistory: [],
    taskPerformanceHistory: [
      { month: "Jul", completed: 8, onTime: 8, quality: 88, deadline: 88 },
      { month: "Aug", completed: 12, onTime: 11, quality: 90, deadline: 89 },
      { month: "Sep", completed: 10, onTime: 9, quality: 89, deadline: 88 },
      { month: "Oct", completed: 14, onTime: 13, quality: 91, deadline: 90 },
      { month: "Nov", completed: 15, onTime: 14, quality: 92, deadline: 91 },
      { month: "Dec", completed: 13, onTime: 12, quality: 90, deadline: 89 },
    ],
  },
  {
    id: "6",
    name: "Michael Brown",
    email: "michael@agencyflow.com",
    phone: "+1 (555) 678-9012",
    role: "Junior Developer",
    department: "development",
    status: "offline",
    location: "Denver, CO",
    joinedDate: "2024-02-20",
    tasksCompleted: 42,
    tasksInProgress: 3,
    projectsActive: 2,
    rating: 4.3,
    skills: ["JavaScript", "React", "CSS", "HTML"],
    performanceData: [
      { month: "Jul", tasks: 5 },
      { month: "Aug", tasks: 8 },
      { month: "Sep", tasks: 7 },
      { month: "Oct", tasks: 10 },
      { month: "Nov", tasks: 12 },
      { month: "Dec", tasks: 9 },
    ],
    salary: 65000,
    employmentType: "Part-time",
    manager: "John Doe",
    yearsOfExperience: 1,
    certifications: ["JavaScript Fundamentals"],
    emergencyContact: { name: "Sarah Brown", phone: "+1 (555) 678-9000" },
    performanceRating: 4.0,
    lastReviewDate: "2024-12-01",
    nextReviewDate: "2025-06-01",
    attendance: [
      { date: "2024-12-20", status: "present", checkIn: "09:00", checkOut: "17:00" },
      { date: "2024-12-19", status: "present", checkIn: "09:00", checkOut: "17:00" },
      { date: "2024-12-18", status: "present", checkIn: "09:00", checkOut: "17:00" },
      { date: "2024-12-17", status: "present", checkIn: "09:00", checkOut: "17:00" },
      { date: "2024-12-16", status: "present", checkIn: "09:00", checkOut: "17:00" },
    ],
    absenceHistory: [],
    taskPerformanceHistory: [
      { month: "Jul", completed: 5, onTime: 5, quality: 85, deadline: 85 },
      { month: "Aug", completed: 8, onTime: 7, quality: 87, deadline: 86 },
      { month: "Sep", completed: 7, onTime: 6, quality: 86, deadline: 85 },
      { month: "Oct", completed: 10, onTime: 9, quality: 88, deadline: 87 },
      { month: "Nov", completed: 12, onTime: 11, quality: 89, deadline: 88 },
      { month: "Dec", completed: 9, onTime: 8, quality: 87, deadline: 86 },
    ],
  },
  {
    id: "7",
    name: "David Park",
    email: "david@agencyflow.com",
    phone: "+1 (555) 789-0123",
    role: "Account Manager",
    department: "management",
    status: "active",
    location: "Seattle, WA",
    joinedDate: "2022-09-01",
    tasksCompleted: 112,
    tasksInProgress: 5,
    projectsActive: 6,
    rating: 4.8,
    skills: ["Client Relations", "Project Management", "Negotiations", "Strategy"],
    performanceData: [
      { month: "Jul", tasks: 14 },
      { month: "Aug", tasks: 18 },
      { month: "Sep", tasks: 16 },
      { month: "Oct", tasks: 20 },
      { month: "Nov", tasks: 22 },
      { month: "Dec", tasks: 19 },
    ],
    salary: 90000,
    employmentType: "Full-time",
    manager: "Lisa Thompson",
    yearsOfExperience: 6,
    certifications: ["PMP Certified"],
    emergencyContact: { name: "Susan Park", phone: "+1 (555) 789-0100" },
    performanceRating: 4.7,
    lastReviewDate: "2024-10-25",
    nextReviewDate: "2025-04-25",
    attendance: [
      { date: "2024-12-20", status: "present", checkIn: "08:45", checkOut: "17:45" },
      { date: "2024-12-19", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-18", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-17", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-16", status: "present", checkIn: "09:00", checkOut: "18:00" },
    ],
    absenceHistory: [{ type: "Sick Leave", from: "2024-11-20", to: "2024-11-21" }],
    taskPerformanceHistory: [
      { month: "Jul", completed: 14, onTime: 14, quality: 94, deadline: 93 },
      { month: "Aug", completed: 18, onTime: 17, quality: 95, deadline: 94 },
      { month: "Sep", completed: 16, onTime: 16, quality: 93, deadline: 92 },
      { month: "Oct", completed: 20, onTime: 19, quality: 96, deadline: 95 },
      { month: "Nov", completed: 22, onTime: 21, quality: 97, deadline: 96 },
      { month: "Dec", completed: 19, onTime: 18, quality: 95, deadline: 94 },
    ],
  },
  {
    id: "8",
    name: "Lisa Thompson",
    email: "lisa@agencyflow.com",
    phone: "+1 (555) 890-1234",
    role: "Creative Director",
    department: "design",
    status: "active",
    location: "Los Angeles, CA",
    joinedDate: "2021-11-15",
    tasksCompleted: 189,
    tasksInProgress: 4,
    projectsActive: 5,
    rating: 5.0,
    skills: ["Brand Strategy", "Art Direction", "Team Leadership", "Presentation"],
    performanceData: [
      { month: "Jul", tasks: 20 },
      { month: "Aug", tasks: 24 },
      { month: "Sep", tasks: 22 },
      { month: "Oct", tasks: 28 },
      { month: "Nov", tasks: 30 },
      { month: "Dec", tasks: 26 },
    ],
    salary: 150000,
    employmentType: "Full-time",
    manager: undefined, // Top level manager
    yearsOfExperience: 10,
    certifications: ["Leadership Excellence"],
    emergencyContact: { name: "Mark Thompson", phone: "+1 (555) 890-1200" },
    performanceRating: 4.9,
    lastReviewDate: "2024-11-10",
    nextReviewDate: "2025-05-10",
    attendance: [
      { date: "2024-12-20", status: "present", checkIn: "08:30", checkOut: "17:30" },
      { date: "2024-12-19", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-18", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-17", status: "present", checkIn: "09:00", checkOut: "18:00" },
      { date: "2024-12-16", status: "present", checkIn: "09:00", checkOut: "18:00" },
    ],
    absenceHistory: [],
    taskPerformanceHistory: [
      { month: "Jul", completed: 20, onTime: 20, quality: 98, deadline: 97 },
      { month: "Aug", completed: 24, onTime: 23, quality: 99, deadline: 98 },
      { month: "Sep", completed: 22, onTime: 21, quality: 97, deadline: 96 },
      { month: "Oct", completed: 28, onTime: 27, quality: 100, deadline: 99 },
      { month: "Nov", completed: 30, onTime: 29, quality: 100, deadline: 99 },
      { month: "Dec", completed: 26, onTime: 25, quality: 98, deadline: 97 },
    ],
  },
]

const departmentConfig = {
  design: { label: "Design", color: "bg-chart-3/20 text-chart-3" },
  development: { label: "Development", color: "bg-primary/20 text-primary" },
  marketing: { label: "Marketing", color: "bg-chart-2/20 text-chart-2" },
  content: { label: "Content", color: "bg-chart-4/20 text-chart-4" },
  management: { label: "Management", color: "bg-chart-5/20 text-chart-5" },
}

const statusConfig = {
  active: { label: "Active", color: "bg-success" },
  away: { label: "Away", color: "bg-warning" },
  offline: { label: "Offline", color: "bg-muted-foreground" },
}

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>(initialTeamMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState<string>("all")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  // States for new view and filters
  const [view, setView] = useState<"grid" | "table" | "detail">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDepartment, setFilterDepartment] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDepartment = departmentFilter === "all" || member.department === departmentFilter
    return matchesSearch && matchesDepartment
  })

  // Adjusted filteredMembers to use new filter states
  const filteredMembersNew = initialTeamMembers.filter((member) => {
    const matchSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchDept = filterDepartment === "all" || member.department === filterDepartment
    const matchStatus = filterStatus === "all" || member.status === filterStatus
    return matchSearch && matchDept && matchStatus
  })

  const stats = {
    total: members.length,
    active: members.filter((m) => m.status === "active").length,
    totalTasksCompleted: members.reduce((sum, m) => sum + m.tasksCompleted, 0),
    avgRating: (members.reduce((sum, m) => sum + m.rating, 0) / members.length).toFixed(1),
  }

  const attendanceStats = {
    present: initialTeamMembers.reduce(
      (sum, m) => sum + (m.attendance?.filter((a) => a.status === "present").length || 0),
      0,
    ),
    absent: initialTeamMembers.reduce(
      (sum, m) => sum + (m.attendance?.filter((a) => a.status === "absent").length || 0),
      0,
    ),
    late: initialTeamMembers.reduce(
      (sum, m) => sum + (m.attendance?.filter((a) => a.status === "late").length || 0),
      0,
    ),
    leave: initialTeamMembers.reduce(
      (sum, m) => sum + (m.attendance?.filter((a) => a.status === "leave").length || 0),
      0,
    ),
  }

  const departmentStats = Object.keys(departmentConfig).map((dept) => ({
    name: departmentConfig[dept as keyof typeof departmentConfig].label,
    count: members.filter((m) => m.department === dept).length,
  }))

  const handleAddMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      role: formData.get("role") as string,
      department: formData.get("department") as TeamMember["department"],
      status: "active",
      location: formData.get("location") as string,
      joinedDate: new Date().toISOString().split("T")[0],
      tasksCompleted: 0,
      tasksInProgress: 0,
      projectsActive: 0,
      rating: 0,
      skills: (formData.get("skills") as string).split(",").map((s) => s.trim()),
      performanceData: [],
      // Default HRM fields for new members
      salary: 0,
      employmentType: "Full-time",
      manager: "",
      yearsOfExperience: 0,
      certifications: [],
      performanceRating: 0,
      lastReviewDate: new Date().toISOString().split("T")[0],
      nextReviewDate: new Date().toISOString().split("T")[0],
      attendance: [],
      absenceHistory: [],
      taskPerformanceHistory: [],
    }
    setMembers([newMember, ...members])
    setIsAddDialogOpen(false)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        {/* <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Team</h1>
            <p className="text-muted-foreground mt-1">Manage your team members and track performance</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add Team Member</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddMember} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" name="role" placeholder="Developer" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select name="department" defaultValue="development">
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="content">Content</SelectItem>
                        <SelectItem value="management">Management</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" name="location" placeholder="City, State" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills (comma separated)</Label>
                  <Input id="skills" name="skills" placeholder="React, TypeScript, Node.js" />
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Add Member</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div> */}

        {/* Replaced original header and add member button with new design */}
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Team Management</h1>
            <p className="text-muted-foreground">Manage team members, attendance, and performance</p>
          </div>
          <Button className="gap-2" onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="w-4 h-4" />
            Add Team Member
          </Button>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Team Members", value: stats.total, icon: Users, color: "text-foreground" },
            { label: "Active Now", value: stats.active, icon: CheckCircle, color: "text-success" },
            { label: "Tasks Completed", value: stats.totalTasksCompleted, icon: Award, color: "text-primary" },
            { label: "Avg. Rating", value: stats.avgRating, icon: Star, color: "text-chart-4" },
          ].map((stat, i) => (
            <AnimatedCard key={stat.label} delay={i * 50} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className={`text-xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color} opacity-20`} />
              </div>
            </AnimatedCard>
          ))}
        </div> */}

        {/* Updated Stats Overview with HRM data */}
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatedCard delay={0}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Team Members</p>
                  <p className="text-2xl font-bold">{initialTeamMembers.length}</p>
                </div>
                <Users className="w-8 h-8 text-primary opacity-20" />
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={50}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Present Today</p>
                  <p className="text-2xl font-bold text-success">{attendanceStats.present}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-success opacity-20" />
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={100}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Absent Today</p>
                  <p className="text-2xl font-bold text-destructive">{attendanceStats.absent}</p>
                </div>
                <AlertCircle className="w-8 h-8 text-destructive opacity-20" />
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={150}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Performance</p>
                  <p className="text-2xl font-bold">
                    {(
                      initialTeamMembers.reduce((sum, m) => sum + m.performanceRating, 0) / initialTeamMembers.length
                    ).toFixed(1)}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-chart-4 opacity-20" />
              </div>
            </CardContent>
          </AnimatedCard>
        </div>

        {/* Department Overview */}
        {/* <AnimatedCard delay={200}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Team by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentStats} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={90} tick={{ fontSize: 12, fill: "#888" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a2e",
                      border: "1px solid #333",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    {departmentStats.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={["#a78bfa", "#60a5fa", "#4ade80", "#fbbf24", "#f87171"][index]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </AnimatedCard> */}

        {/* Filters */}
        {/* <AnimatedCard delay={250} className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search team members..."
                className="pl-10 bg-secondary border-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-[160px] bg-secondary border-0">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="content">Content</SelectItem>
                <SelectItem value="management">Management</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AnimatedCard> */}

        {/* Consolidated controls for search, filters, and view toggle */}
        {/* Controls */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or role..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <select
                    value={filterDepartment}
                    onChange={(e) => setFilterDepartment(e.target.value)}
                    className="px-3 py-2 rounded border border-border bg-background text-sm"
                  >
                    <option value="all">All Departments</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                    <option value="content">Content</option>
                    <option value="management">Management</option>
                  </select>
                </div>

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 rounded border border-border bg-background text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="away">Away</option>
                  <option value="offline">Offline</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <Button variant={view === "grid" ? "default" : "outline"} size="sm" onClick={() => setView("grid")}>
                  Grid
                </Button>
                <Button variant={view === "table" ? "default" : "outline"} size="sm" onClick={() => setView("table")}>
                  Table
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMembers.map((member, i) => (
            <AnimatedCard
              key={member.id}
              delay={300 + i * 50}
              className="cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-primary/20 text-primary text-lg">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-card ${statusConfig[member.status].color}`}
                    />
                  </div>

                  <h3 className="font-semibold mt-3">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>

                  <Badge className={`${departmentConfig[member.department].color} border-0 mt-2`}>
                    {departmentConfig[member.department].label}
                  </Badge>

                  <div className="flex items-center gap-1 mt-3">
                    <Star className="w-4 h-4 text-chart-4 fill-chart-4" />
                    <span className="text-sm font-medium">{member.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-border text-center">
                  <div>
                    <p className="text-lg font-bold text-success">{member.tasksCompleted}</p>
                    <p className="text-[10px] text-muted-foreground">Done</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary">{member.tasksInProgress}</p>
                    <p className="text-[10px] text-muted-foreground">Active</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">{member.projectsActive}</p>
                    <p className="text-[10px] text-muted-foreground">Projects</p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div> */}

        {/* Implemented Grid and Table views with conditional rendering */}
        {/* Grid View */}
        {view === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMembersNew.map((member, i) => (
              <AnimatedCard
                key={member.id}
                delay={300 + i * 50}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedMember(member)}
              >
                <CardContent className="p-5">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-primary/20 text-primary text-lg">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-card ${
                          member.status === "active"
                            ? "bg-success"
                            : member.status === "away"
                              ? "bg-warning"
                              : "bg-muted"
                        }`}
                      />
                    </div>

                    <h3 className="font-semibold mt-3">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>

                    <Badge className="mt-2 bg-primary/20 text-primary border-0">
                      {member.department.charAt(0).toUpperCase() + member.department.slice(1)}
                    </Badge>

                    <div className="flex items-center gap-1 mt-3">
                      <Star className="w-4 h-4 text-chart-4 fill-chart-4" />
                      <span className="text-sm font-medium">{member.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-border text-center">
                    <div>
                      <p className="text-lg font-bold text-success">{member.tasksCompleted}</p>
                      <p className="text-[10px] text-muted-foreground">Completed</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-primary">{member.tasksInProgress}</p>
                      <p className="text-[10px] text-muted-foreground">Active</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{member.projectsActive}</p>
                      <p className="text-[10px] text-muted-foreground">Projects</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        )}

        {/* Table View */}
        {view === "table" && (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Name</th>
                      <th className="text-left p-4 font-semibold">Role</th>
                      <th className="text-left p-4 font-semibold">Department</th>
                      <th className="text-left p-4 font-semibold">Manager</th>
                      <th className="text-left p-4 font-semibold">Salary</th>
                      <th className="text-left p-4 font-semibold">Performance</th>
                      <th className="text-left p-4 font-semibold">Attendance</th>
                      <th className="text-center p-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembersNew.map((member) => (
                      <tr key={member.id} className="border-b border-border hover:bg-muted/50">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={member.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="text-xs">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{member.name}</span>
                          </div>
                        </td>
                        <td className="p-4">{member.role}</td>
                        <td className="p-4">
                          <Badge variant="outline" className="capitalize">
                            {member.department}
                          </Badge>
                        </td>
                        <td className="p-4 text-muted-foreground">{member.manager || "-"}</td>
                        <td className="p-4 font-medium">${(member.salary || 0) / 1000}k</td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <div className="w-12 bg-muted rounded h-2">
                              <div
                                className="bg-success h-full rounded"
                                style={{ width: `${member.performanceRating * 20}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium">{member.performanceRating}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span className="text-xs">
                              {member.attendance?.filter((a) => a.status === "present").length || 0}/5
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <Button variant="ghost" size="sm" onClick={() => setSelectedMember(member)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Member Detail Dialog */}
        {/* <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="sm:max-w-[600px]">
            {selectedMember && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-primary/20 text-primary text-xl">
                          {selectedMember.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-card ${statusConfig[selectedMember.status].color}`}
                      />
                    </div>
                    <div className="flex-1">
                      <DialogTitle className="text-xl">{selectedMember.name}</DialogTitle>
                      <p className="text-muted-foreground">{selectedMember.role}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={`${departmentConfig[selectedMember.department].color} border-0`}>
                          {departmentConfig[selectedMember.department].label}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-chart-4 fill-chart-4" />
                          <span className="text-sm font-medium">{selectedMember.rating}</span>
                        </div>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="bg-transparent">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                        <DropdownMenuItem>Assign Task</DropdownMenuItem>
                        <DropdownMenuItem>View Tasks</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </DialogHeader>

                <Tabs defaultValue="overview" className="mt-4">
                  <TabsList className="bg-secondary w-full justify-start">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="performance">Performance</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Mail className="w-3.5 h-3.5" />
                          Email
                        </div>
                        <p className="text-sm">{selectedMember.email}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Phone className="w-3.5 h-3.5" />
                          Phone
                        </div>
                        <p className="text-sm">{selectedMember.phone}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5" />
                          Location
                        </div>
                        <p className="text-sm">{selectedMember.location}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          Joined
                        </div>
                        <p className="text-sm">{new Date(selectedMember.joinedDate).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="bg-secondary/50 rounded-lg p-4 text-center">
                        <CheckCircle className="w-5 h-5 mx-auto text-success mb-1" />
                        <p className="text-xl font-bold">{selectedMember.tasksCompleted}</p>
                        <p className="text-xs text-muted-foreground">Tasks Completed</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-4 text-center">
                        <Clock className="w-5 h-5 mx-auto text-primary mb-1" />
                        <p className="text-xl font-bold">{selectedMember.tasksInProgress}</p>
                        <p className="text-xs text-muted-foreground">In Progress</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-4 text-center">
                        <Briefcase className="w-5 h-5 mx-auto text-chart-3 mb-1" />
                        <p className="text-xl font-bold">{selectedMember.projectsActive}</p>
                        <p className="text-xs text-muted-foreground">Projects</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="performance" className="mt-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-success" />
                          <span className="text-sm font-medium">Task Completion (Last 6 Months)</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          +12% growth
                        </Badge>
                      </div>
                      <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={selectedMember.performanceData}>
                            <XAxis dataKey="month" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#1a1a2e",
                                border: "1px solid #333",
                                borderRadius: "8px",
                                fontSize: "12px",
                              }}
                            />
                            <Bar dataKey="tasks" fill="#60a5fa" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="skills" className="mt-4">
                    <div className="space-y-3">
                      {selectedMember.skills.map((skill, index) => (
                        <div key={skill} className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>{skill}</span>
                            <span className="text-muted-foreground">{90 - index * 8}%</span>
                          </div>
                          <Progress value={90 - index * 8} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </DialogContent>
        </Dialog> */}

        {/* New Detail Modal with HRM information and Tabs */}
        {/* Detail Modal */}
        {selectedMember && (
          <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={selectedMember.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-primary/20 text-primary text-xl">
                      {selectedMember.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <DialogTitle className="text-2xl">{selectedMember.name}</DialogTitle>
                    <DialogDescription>{selectedMember.role}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-4">Employment Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Employment Type</span>
                          <span className="font-medium">{selectedMember.employmentType}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Department</span>
                          <Badge className="capitalize">{selectedMember.department}</Badge>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Manager</span>
                          <span className="font-medium">{selectedMember.manager || "-"}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Years of Experience</span>
                          <span className="font-medium">{selectedMember.yearsOfExperience} years</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Joined Date</span>
                          <span className="font-medium">
                            {new Date(selectedMember.joinedDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Salary</span>
                          <span className="font-medium">${selectedMember.salary?.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Performance & Rating</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Overall Rating</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-chart-4 text-chart-4" />
                            <span className="font-bold">{selectedMember.rating}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Performance Rating</span>
                          <span className="font-medium">{selectedMember.performanceRating}/5.0</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Tasks Completed</span>
                          <span className="font-bold text-success">{selectedMember.tasksCompleted}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Tasks In Progress</span>
                          <span className="font-bold text-primary">{selectedMember.tasksInProgress}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Last Review</span>
                          <span className="font-medium">
                            {new Date(selectedMember.lastReviewDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Next Review</span>
                          <span className="font-medium">
                            {new Date(selectedMember.nextReviewDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold mb-3">Skills & Certifications</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Core Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Certifications</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.certifications.map((cert) => (
                            <Badge key={cert} variant="outline">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Attendance Tab */}
                <TabsContent value="attendance" className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4">Recent Attendance</h4>
                    <div className="space-y-2">
                      {selectedMember.attendance?.slice(0, 10).map((record, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 border border-border rounded">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{new Date(record.date).toLocaleDateString()}</p>
                              {record.checkIn && record.checkOut && (
                                <p className="text-xs text-muted-foreground">
                                  {record.checkIn} - {record.checkOut}
                                </p>
                              )}
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={
                              record.status === "present"
                                ? "bg-success/20 text-success"
                                : record.status === "late"
                                  ? "bg-warning/20 text-warning"
                                  : record.status === "leave"
                                    ? "bg-blue-500/20 text-blue-500"
                                    : "bg-destructive/20 text-destructive"
                            }
                          >
                            {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Absence History</h4>
                    <div className="space-y-2">
                      {selectedMember.absenceHistory?.map((absence, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 border border-border rounded">
                          <div>
                            <p className="font-medium">{absence.type}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(absence.from).toLocaleDateString()} -{" "}
                              {new Date(absence.to).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Performance Tab */}
                <TabsContent value="performance" className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-3">Tasks Performance</h4>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={selectedMember.taskPerformanceHistory}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                          <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                          <YAxis stroke="var(--muted-foreground)" />
                          <Tooltip
                            contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
                          />
                          <Bar dataKey="completed" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Quality Metrics</h4>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={selectedMember.taskPerformanceHistory}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                          <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                          <YAxis stroke="var(--muted-foreground)" />
                          <Tooltip
                            contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
                          />
                          <Bar dataKey="quality" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="onTime" fill="var(--success)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Performance Trend</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={selectedMember.taskPerformanceHistory}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                        <YAxis stroke="var(--muted-foreground)" />
                        <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
                        <Line
                          type="monotone"
                          dataKey="quality"
                          stroke="var(--primary)"
                          strokeWidth={2}
                          dot={{ fill: "var(--primary)" }}
                        />
                        <Line
                          type="monotone"
                          dataKey="onTime"
                          stroke="var(--success)"
                          strokeWidth={2}
                          dot={{ fill: "var(--success)" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>

                {/* Documents Tab */}
                <TabsContent value="documents" className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-4">Employment Documents</h4>
                    <div className="space-y-2">
                      {[
                        "Employment Contract",
                        "Offer Letter",
                        "Performance Reviews",
                        "Certifications",
                        "Background Check",
                      ].map((doc) => (
                        <div
                          key={doc}
                          className="flex items-center justify-between p-3 border border-border rounded hover:bg-muted/50"
                        >
                          <span className="font-medium">{doc}</span>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Contact Tab */}
                <TabsContent value="contact" className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border border-border rounded">
                      <MailIcon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{selectedMember.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 border border-border rounded">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{selectedMember.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 border border-border rounded">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{selectedMember.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 border border-border rounded">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Department</p>
                        <p className="font-medium capitalize">{selectedMember.department}</p>
                      </div>
                    </div>
                  </div>

                  {selectedMember.emergencyContact && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Emergency Contact</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-muted-foreground">Name</span>
                          <span className="font-medium">{selectedMember.emergencyContact.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Phone</span>
                          <span className="font-medium">{selectedMember.emergencyContact.phone}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </DashboardLayout>
  )
}
