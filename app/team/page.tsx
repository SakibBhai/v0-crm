"use client"

import { useState } from "react"
import type { Employee, Candidate, LeaveRequest, OKR, AttendanceRecord, PerformanceReview } from "@/lib/types/hr"
import { employees as initialEmployees, candidates as initialCandidates, leaveRequests as initialLeaveRequests, okrs as initialOkrs, skillDefinitions, trainingCourses, courseEnrollments as initialEnrollments, hrMetrics, attendanceRecords as initialAttendanceRecords } from "@/lib/data/hr"
import { DEPARTMENT_CONFIG } from "@/lib/types/hr"
import { DashboardLayout } from "@/components/dashboard-layout"
import { EmployeeProfile } from "@/components/team/employee-profile"
import { OrgChart } from "@/components/team/org-chart"
import { ApplicantTracker } from "@/components/team/applicant-tracker"
import { LeaveManagement } from "@/components/team/leave-management"
import { AttendanceTracker } from "@/components/team/attendance-tracker"
import { PerformanceDashboard } from "@/components/team/performance-dashboard"
import { SkillsMatrix } from "@/components/team/skills-matrix"
import { TrainingCenter } from "@/components/team/training-center"
import { HRAnalytics } from "@/components/team/hr-analytics"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Users,
  UserPlus,
  Search,
  Filter,
  LayoutGrid,
  List,
  Building2,
  Calendar,
  Target,
  Zap,
  GraduationCap,
  BarChart3,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  Briefcase,
  DollarSign,
  Award,
} from "lucide-react"
import { cn } from "@/lib/utils"

type TabMode = "directory" | "org-chart" | "recruitment" | "attendance" | "performance" | "skills" | "learning" | "analytics"
type ViewMode = "grid" | "list"

export default function TeamPage() {
  // Data state
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees as Employee[])
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates)
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>(initialLeaveRequests)
  const [okrs, setOkrs] = useState<OKR[]>(initialOkrs)
  const [enrollments, setEnrollments] = useState(initialEnrollments)
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>(initialAttendanceRecords)
  const [reviews] = useState<PerformanceReview[]>([
    {
      id: "PR001",
      employeeId: "EMP001",
      employeeName: "Alex Johnson",
      reviewerId: "EMP003",
      reviewerName: "Sarah Williams",
      period: "H2 2025",
      scheduledDate: "2026-01-15",
      status: "completed",
      overallRating: 4.5,
      competencyRatings: [
        { competency: "Technical Skills", rating: 5, comments: "Exceptional coding ability" },
        { competency: "Communication", rating: 4, comments: "Clear and concise" },
        { competency: "Leadership", rating: 4.5, comments: "Great team mentoring" },
      ],
      strengths: ["Problem solving", "Code quality", "Team collaboration", "Initiative"],
      areasForImprovement: ["Documentation", "Delegation"],
      goals: ["Lead a major project", "Mentor 2 juniors"],
      promotionRecommended: true,
      pipRequired: false,
      completedAt: "2026-01-20",
    },
    {
      id: "PR002",
      employeeId: "EMP002",
      employeeName: "Emma Davis",
      reviewerId: "EMP001",
      reviewerName: "Alex Johnson",
      period: "H2 2025",
      scheduledDate: "2026-02-01",
      status: "scheduled",
      overallRating: 0,
      competencyRatings: [],
      strengths: [],
      areasForImprovement: [],
      goals: [],
      promotionRecommended: false,
      pipRequired: false,
    },
  ])

  // UI state
  const [activeTab, setActiveTab] = useState<TabMode>("directory")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const currentUserId = "EMP001" // Simulated logged-in user

  // Stats
  const stats = {
    total: employees.length,
    active: employees.filter(e => e.status === "active").length,
    onLeave: employees.filter(e => e.status === "on-leave").length,
    avgPerformance: (employees.reduce((sum, e) => sum + e.performanceRating, 0) / employees.length).toFixed(1),
    pendingLeave: leaveRequests.filter(r => r.status === "pending").length,
    openPositions: 2,
  }

  // Filtered employees
  const filteredEmployees = employees.filter(e => {
    const matchesSearch = !searchQuery ||
      `${e.firstName} ${e.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDept = departmentFilter === "all" || e.department === departmentFilter
    const matchesStatus = statusFilter === "all" || e.status === statusFilter
    return matchesSearch && matchesDept && matchesStatus
  })

  // Handlers
  const handleEmployeeClick = (employee: Employee) => {
    setSelectedEmployee(employee)
    setIsProfileOpen(true)
  }

  const handleAddEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // Parse skills from comma-separated string
    const skillsInput = formData.get("skills") as string || ""
    const parsedSkills = skillsInput
      .split(",")
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .map((skillName, i) => ({
        skillId: `sk_new_${Date.now()}_${i}`,
        skillName,
        category: "technical" as const,
        proficiency: "intermediate" as const,
        yearsUsed: 1,
        isVerified: false,
      }))

    // Get manager info
    const managerIdRaw = formData.get("managerId") as string
    const managerId = managerIdRaw && managerIdRaw !== "none" ? managerIdRaw : undefined
    const manager = managerId ? employees.find(emp => emp.id === managerId) : undefined

    const newEmployee: Employee = {
      id: `EMP${Date.now()}`,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || "",
      employeeId: `EMP${Date.now()}`,
      jobTitle: formData.get("jobTitle") as string,
      department: formData.get("department") as any,
      employmentType: formData.get("employmentType") as any || "full-time",
      status: "active",
      managerId: managerId || undefined,
      managerName: manager ? `${manager.firstName} ${manager.lastName}` : undefined,
      startDate: formData.get("startDate") as string || new Date().toISOString().split("T")[0],
      workLocation: formData.get("location") as string || formData.get("locationType") as string || "Remote",
      salary: Number(formData.get("salary")) || 0,
      currency: formData.get("currency") as string || "USD",
      payFrequency: formData.get("payFrequency") as any || "monthly",
      skills: parsedSkills,
      yearsOfExperience: Number(formData.get("experience")) || 0,
      certifications: [],
      performanceRating: 0,
      documents: [],
      careerHistory: [{
        id: "1",
        date: new Date().toISOString(),
        type: "hired",
        title: "Hired",
        details: `Joined as ${formData.get("jobTitle")}`
      }],
      emergencyContacts: [],
      leaveBalance: {
        vacation: { total: 20, used: 0, pending: 0 },
        sick: { total: 10, used: 0, pending: 0 },
        personal: { total: 5, used: 0, pending: 0 },
        unpaid: { used: 0 },
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setEmployees(prev => [newEmployee, ...prev])
    setIsAddDialogOpen(false)
  }

  const handleUpdateCandidate = (candidate: Candidate) => {
    setCandidates(prev => prev.map(c => c.id === candidate.id ? candidate : c))
  }

  const handleAddCandidate = (data: Omit<Candidate, "id" | "appliedAt" | "interviews" | "notes" | "rating">) => {
    const newCandidate: Candidate = {
      ...data,
      id: `CAN${Date.now()}`,
      appliedAt: new Date().toISOString().split("T")[0],
      interviews: [],
      notes: [],
      rating: 0,
    }
    setCandidates(prev => [newCandidate, ...prev])
  }

  const handleLeaveSubmit = (request: Omit<LeaveRequest, "id" | "status" | "createdAt">) => {
    const newRequest: LeaveRequest = {
      ...request,
      id: `LR${Date.now()}`,
      status: "pending",
      createdAt: new Date().toISOString(),
    }
    setLeaveRequests(prev => [newRequest, ...prev])
  }

  const handleLeaveApprove = (id: string) => {
    setLeaveRequests(prev => prev.map(r =>
      r.id === id ? { ...r, status: "approved", approverId: currentUserId, approverName: "Current User", approvedAt: new Date().toISOString() } : r
    ))
  }

  const handleLeaveReject = (id: string, reason: string) => {
    setLeaveRequests(prev => prev.map(r =>
      r.id === id ? { ...r, status: "rejected", rejectionReason: reason } : r
    ))
  }

  const handleEnroll = (courseId: string) => {
    const course = trainingCourses.find(c => c.id === courseId)
    if (course) {
      setEnrollments(prev => [...prev, {
        id: `CE${Date.now()}`,
        courseId,
        courseName: course.title,
        employeeId: currentUserId,
        status: "enrolled",
        progress: 0,
        enrolledAt: new Date().toISOString(),
      }])
    }
  }

  // Attendance handlers
  const handleMarkAttendance = (record: Omit<AttendanceRecord, "id" | "markedAt">) => {
    const newRecord: AttendanceRecord = {
      ...record,
      id: `ATT_${Date.now()}`,
      markedAt: new Date().toISOString(),
    }
    setAttendanceRecords(prev => [...prev, newRecord])
  }

  const handleUpdateAttendance = (id: string, updates: Partial<AttendanceRecord>) => {
    setAttendanceRecords(prev => prev.map(r =>
      r.id === id ? { ...r, ...updates, markedAt: new Date().toISOString() } : r
    ))
  }

  const handleAddOkr = (okr: Omit<OKR, "id">) => {
    const newOkr: OKR = {
      ...okr,
      id: `OKR_${Date.now()}`,
    }
    setOkrs(prev => [newOkr, ...prev])
  }

  const tabs = [
    { id: "directory", label: "Directory", icon: Users },
    { id: "org-chart", label: "Org Chart", icon: Building2 },
    { id: "recruitment", label: "Recruitment", icon: UserPlus, badge: candidates.filter(c => c.stage === "applied").length },
    { id: "attendance", label: "Attendance", icon: Calendar, badge: stats.pendingLeave },
    { id: "performance", label: "Performance", icon: Target },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "learning", label: "Learning", icon: GraduationCap },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Team & HR Management</h1>
            <p className="text-muted-foreground mt-1">Human Capital Management system for your agency</p>
          </div>
          <Button onClick={() => setIsAddDialogOpen(true)} className="gap-2">
            <UserPlus className="w-4 h-4" /> Add Employee
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { label: "Total", value: stats.total, icon: Users, color: "text-primary" },
            { label: "Active", value: stats.active, icon: CheckCircle, color: "text-green-500" },
            { label: "On Leave", value: stats.onLeave, icon: Clock, color: "text-yellow-500" },
            { label: "Avg Rating", value: stats.avgPerformance, icon: Star, color: "text-purple-500" },
            { label: "Leave Pending", value: stats.pendingLeave, icon: AlertCircle, color: "text-orange-500" },
            { label: "Open Roles", value: stats.openPositions, icon: UserPlus, color: "text-blue-500" },
          ].map(stat => (
            <Card key={stat.label} className="bg-secondary/30 border-0">
              <CardContent className="pt-4 pb-3">
                <div className="flex items-center justify-between">
                  <stat.icon className={cn("w-5 h-5", stat.color)} />
                  <span className={cn("text-2xl font-bold", stat.color)}>{stat.value}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 border-b border-border overflow-x-auto pb-px">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabMode)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors -mb-px border-b-2",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.badge && tab.badge > 0 && (
                <Badge variant="destructive" className="h-5 w-5 p-0 justify-center text-[10px]">
                  {tab.badge}
                </Badge>
              )}
            </button>
          ))}
        </div>

        {/* Directory Tab */}
        {activeTab === "directory" && (
          <div className="space-y-4">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, email, or role..."
                  className="pl-10 bg-secondary border-0"
                />
              </div>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-40"><SelectValue placeholder="Department" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {Object.entries(DEPARTMENT_CONFIG).map(([k, v]) => (
                    <SelectItem key={k} value={k}>{v.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32"><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="on-leave">On Leave</SelectItem>
                  <SelectItem value="terminated">Terminated</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex bg-secondary rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn("p-2 rounded", viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground")}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn("p-2 rounded", viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground")}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredEmployees.map(emp => {
                  const initials = `${emp.firstName[0]}${emp.lastName[0]}`
                  const deptConfig = DEPARTMENT_CONFIG[emp.department]
                  return (
                    <Card
                      key={emp.id}
                      onClick={() => handleEmployeeClick(emp)}
                      className="cursor-pointer hover:shadow-lg hover:border-primary/50 transition-all"
                    >
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <Avatar className="w-16 h-16 mb-3">
                            <AvatarFallback className="bg-primary/20 text-primary text-xl font-bold">
                              {initials}
                            </AvatarFallback>
                          </Avatar>
                          <h3 className="font-medium">{emp.firstName} {emp.lastName}</h3>
                          <p className="text-sm text-muted-foreground">{emp.jobTitle}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className={cn("text-xs", deptConfig.bgColor, deptConfig.color)}>
                              {deptConfig.label}
                            </Badge>
                            <Badge variant={emp.status === "active" ? "default" : "secondary"} className="text-xs capitalize">
                              {emp.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 mt-3 text-yellow-500">
                            <Star className="w-4 h-4 fill-yellow-500" />
                            <span className="text-sm font-medium">{emp.performanceRating.toFixed(1)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <Card>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium">Employee</th>
                        <th className="text-left p-4 text-sm font-medium">Department</th>
                        <th className="text-left p-4 text-sm font-medium">Location</th>
                        <th className="text-left p-4 text-sm font-medium">Status</th>
                        <th className="text-left p-4 text-sm font-medium">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEmployees.map(emp => {
                        const initials = `${emp.firstName[0]}${emp.lastName[0]}`
                        const deptConfig = DEPARTMENT_CONFIG[emp.department]
                        return (
                          <tr
                            key={emp.id}
                            onClick={() => handleEmployeeClick(emp)}
                            className="border-b border-border hover:bg-secondary/30 cursor-pointer"
                          >
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarFallback className="bg-primary/20 text-primary">{initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{emp.firstName} {emp.lastName}</p>
                                  <p className="text-sm text-muted-foreground">{emp.jobTitle}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge className={cn("text-xs", deptConfig.bgColor, deptConfig.color)}>
                                {deptConfig.label}
                              </Badge>
                            </td>
                            <td className="p-4 text-sm">{emp.workLocation}</td>
                            <td className="p-4">
                              <Badge variant={emp.status === "active" ? "default" : "secondary"} className="text-xs capitalize">
                                {emp.status}
                              </Badge>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-1 text-yellow-500">
                                <Star className="w-4 h-4 fill-yellow-500" />
                                <span>{emp.performanceRating.toFixed(1)}</span>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Org Chart Tab */}
        {activeTab === "org-chart" && (
          <OrgChart employees={employees} onEmployeeClick={handleEmployeeClick} />
        )}

        {/* Recruitment Tab */}
        {activeTab === "recruitment" && (
          <ApplicantTracker
            candidates={candidates}
            onUpdateCandidate={handleUpdateCandidate}
            onAddCandidate={handleAddCandidate}
          />
        )}

        {/* Attendance Tab */}
        {activeTab === "attendance" && (
          <div className="space-y-6">
            <AttendanceTracker
              employees={employees}
              attendanceRecords={attendanceRecords}
              onMarkAttendance={handleMarkAttendance}
              onUpdateAttendance={handleUpdateAttendance}
            />

            {/* Leave Management Section */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Leave Management
              </h3>
              <LeaveManagement
                requests={leaveRequests}
                employees={employees}
                currentUserId={currentUserId}
                onSubmitRequest={handleLeaveSubmit}
                onApprove={handleLeaveApprove}
                onReject={handleLeaveReject}
              />
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === "performance" && (
          <PerformanceDashboard
            okrs={okrs}
            reviews={reviews}
            employees={employees}
            currentUserId={currentUserId}
            onAddOkr={handleAddOkr}
          />
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <SkillsMatrix employees={employees} skillDefinitions={skillDefinitions} />
        )}

        {/* Learning Tab */}
        {activeTab === "learning" && (
          <TrainingCenter
            courses={trainingCourses}
            enrollments={enrollments}
            employees={employees}
            currentUserId={currentUserId}
            onEnroll={handleEnroll}
          />
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <HRAnalytics metrics={hrMetrics} employees={employees} />
        )}
      </div>

      {/* Employee Profile Panel */}
      {selectedEmployee && (
        <EmployeeProfile
          employee={selectedEmployee}
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
        />
      )}

      {/* Add Employee Dialog - Professional Multi-Step Wizard */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="pb-4 border-b border-border">
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/20">
                <UserPlus className="w-5 h-5 text-primary" />
              </div>
              Add New Employee
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Fill in the details to onboard a new team member
            </p>
          </DialogHeader>

          <form onSubmit={handleAddEmployee} className="space-y-6 pt-4">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Users className="w-4 h-4" />
                Personal Information
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm">
                    First Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>
            </div>

            {/* Employment Details Section */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Briefcase className="w-4 h-4" />
                Employment Details
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-sm">
                    Job Title <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="Senior Developer"
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm">
                    Department <span className="text-destructive">*</span>
                  </Label>
                  <Select name="department" defaultValue="development">
                    <SelectTrigger className="bg-secondary/50 border-border">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(DEPARTMENT_CONFIG).map(([k, v]) => (
                        <SelectItem key={k} value={k}>
                          {v.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employmentType" className="text-sm">Employment Type</Label>
                  <Select name="employmentType" defaultValue="full-time">
                    <SelectTrigger className="bg-secondary/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                      <SelectItem value="intern">Intern</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="managerId" className="text-sm">Reports To</Label>
                  <Select name="managerId">
                    <SelectTrigger className="bg-secondary/50 border-border">
                      <SelectValue placeholder="Select manager" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Manager</SelectItem>
                      {employees.filter(e => e.status === "active").map(emp => (
                        <SelectItem key={emp.id} value={emp.id}>
                          {emp.firstName} {emp.lastName} - {emp.jobTitle}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate" className="text-sm">
                    Start Date <span className="text-destructive">*</span>
                  </Label>
                  <DatePicker
                    name="startDate"
                    placeholder="Select start date"
                    date={new Date()}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm">Work Location</Label>
                  <Select name="locationType" defaultValue="remote">
                    <SelectTrigger className="bg-secondary/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm">Office/City Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., San Francisco, CA or Remote - EST"
                  className="bg-secondary/50 border-border"
                />
              </div>
            </div>

            {/* Compensation Section */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <DollarSign className="w-4 h-4" />
                Compensation
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="salary" className="text-sm">Annual Salary</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="salary"
                      name="salary"
                      type="number"
                      placeholder="75000"
                      className="pl-9 bg-secondary/50 border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency" className="text-sm">Currency</Label>
                  <Select name="currency" defaultValue="USD">
                    <SelectTrigger className="bg-secondary/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="BDT">BDT (৳)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payFrequency" className="text-sm">Pay Frequency</Label>
                  <Select name="payFrequency" defaultValue="monthly">
                    <SelectTrigger className="bg-secondary/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Award className="w-4 h-4" />
                Skills & Qualifications
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="skills" className="text-sm">Skills (comma-separated)</Label>
                  <Input
                    id="skills"
                    name="skills"
                    placeholder="React, TypeScript, Node.js"
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm">Years of Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    type="number"
                    min="0"
                    placeholder="5"
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <DialogFooter className="pt-4 border-t border-border gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
                className="gap-2"
              >
                Cancel
              </Button>
              <Button type="submit" className="gap-2 min-w-[140px]">
                <UserPlus className="w-4 h-4" />
                Add Employee
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
