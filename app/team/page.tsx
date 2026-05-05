"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import type { Employee, Candidate, LeaveRequest, OKR, AttendanceRecord, PerformanceReview, CourseEnrollment, TrainingCourse, HRMetrics } from "@/lib/types/hr"
import { skillDefinitions } from "@/lib/data/hr"
import { DEPARTMENT_CONFIG } from "@/lib/types/hr"
import {
  getEmployees, createEmployee as createEmployeeAction, updateEmployee as updateEmployeeAction, deleteEmployee as deleteEmployeeAction,
  getCandidates as getCandidatesAction, createCandidate as createCandidateAction, updateCandidate as updateCandidateAction,
  getLeaveRequests, createLeaveRequest as createLeaveRequestAction, updateLeaveRequest as updateLeaveRequestAction,
  getAttendanceRecords, createAttendanceRecord as createAttendanceRecordAction, updateAttendanceRecord as updateAttendanceRecordAction,
  getOKRs, createOKR as createOKRAction,
  getPerformanceReviews, createPerformanceReview as createPerformanceReviewAction,
  getTrainingCourses as getTrainingCoursesAction, createTrainingCourse as createTrainingCourseAction,
  getCourseEnrollments as getCourseEnrollmentsAction, createCourseEnrollment as createCourseEnrollmentAction,
  getHolidays, createHoliday, deleteHoliday,
} from "@/app/actions/team"
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
  UserCheck,
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
  const [employees, setEmployees] = useState<Employee[]>([])
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([])
  const [okrs, setOkrs] = useState<OKR[]>([])
  const [enrollments, setEnrollments] = useState<CourseEnrollment[]>([])
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([])
  const [reviews, setReviews] = useState<PerformanceReview[]>([])
  const [dbCourses, setDbCourses] = useState<TrainingCourse[]>([])
  const [holidays, setHolidays] = useState<any[]>([])

  // Load data from database on mount
  useEffect(() => {
    async function loadTeamData() {
      try {
        const [empRes, candRes, leaveRes, attRes, okrRes, reviewRes, coursesRes, enrollRes, holRes] = await Promise.all([
          getEmployees(), getCandidatesAction(), getLeaveRequests(), getAttendanceRecords(), getOKRs(),
          getPerformanceReviews(), getTrainingCoursesAction(), getCourseEnrollmentsAction(), getHolidays(),
        ])
        if (Array.isArray(empRes)) setEmployees(empRes as Employee[])
        if (Array.isArray(candRes)) setCandidates(candRes as Candidate[])
        if (Array.isArray(leaveRes)) setLeaveRequests(leaveRes as LeaveRequest[])
        if (Array.isArray(attRes)) setAttendanceRecords(attRes as AttendanceRecord[])
        if (Array.isArray(okrRes)) setOkrs(okrRes as OKR[])
        if (Array.isArray(reviewRes)) setReviews(reviewRes as PerformanceReview[])
        if (Array.isArray(coursesRes)) setDbCourses(coursesRes as TrainingCourse[])
        if (Array.isArray(enrollRes)) setEnrollments(enrollRes as CourseEnrollment[])
        if (Array.isArray(holRes)) setHolidays(holRes)
      } catch (err) {
        console.error("Failed to load team data:", err)
      }
    }
    loadTeamData()
  }, [])

  // UI state
  const [activeTab, setActiveTab] = useState<TabMode>("directory")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editEmployeeId, setEditEmployeeId] = useState<string | null>(null)

  const { data: session } = useSession()
  const currentUserId = session?.user?.employeeId || session?.user?.id || "EMP001"

  const editingEmployee = editEmployeeId ? employees.find(e => e.id === editEmployeeId) : null

  // Stats (dynamic from DB)
  const stats = {
    total: employees.length,
    active: employees.filter(e => e.status === "active").length,
    onLeave: employees.filter(e => e.status === "on-leave").length,
    avgPerformance: employees.length > 0 ? (employees.reduce((sum, e) => sum + e.performanceRating, 0) / employees.length).toFixed(1) : "0.0",
    pendingLeave: leaveRequests.filter(r => r.status === "pending").length,
    openPositions: candidates.filter(c => c.stage === "applied" || c.stage === "screening").length,
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

  const handleEditEmployee = (employee: Employee) => {
    setEditEmployeeId(employee.id)
    setIsAddDialogOpen(true)
    setIsProfileOpen(false)
  }

  const handleDeleteEmployee = async (id: string) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      setEmployees(prev => prev.filter(e => e.id !== id))
      setIsProfileOpen(false)
      try {
        await deleteEmployeeAction(id)
      } catch (err) {
        console.error("Failed to delete employee", err)
      }
    }
  }

  const handleSaveEmployee = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

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

    const managerIdRaw = formData.get("managerId") as string
    const managerId = managerIdRaw && managerIdRaw !== "none" ? managerIdRaw : undefined
    const manager = managerId ? employees.find(emp => emp.id === managerId) : undefined
    
    // Existing employee data if editing
    const empId = editingEmployee?.employeeId || `EMP${Date.now()}`

    const employeeData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || "",
      employeeId: empId,
      jobTitle: formData.get("jobTitle") as string,
      department: formData.get("department") as string || "development",
      employmentType: formData.get("employmentType") as string || "full-time",
      status: formData.get("status") as string || (editingEmployee?.status || "active"),
      managerId: managerId,
      managerName: manager ? `${manager.firstName} ${manager.lastName}` : undefined,
      startDate: formData.get("startDate") as string || (editingEmployee?.startDate || new Date().toISOString().split("T")[0]),
      workLocation: formData.get("location") as string || formData.get("locationType") as string || "Remote",
      salary: Number(formData.get("salary")) || 0,
      currency: formData.get("currency") as string || "BDT",
      payFrequency: formData.get("payFrequency") as string || "monthly",
      skills: parsedSkills.length > 0 ? parsedSkills : (editingEmployee?.skills || []),
      yearsOfExperience: Number(formData.get("experience")) || (editingEmployee?.yearsOfExperience || 0),
      certifications: editingEmployee?.certifications || [] as string[],
      performanceRating: editingEmployee?.performanceRating || 0,
      documents: editingEmployee?.documents || [] as any[],
      careerHistory: editingEmployee?.careerHistory || [{ id: "1", date: new Date().toISOString(), type: "hired", title: "Hired", details: `Joined as ${formData.get("jobTitle")}` }],
      emergencyContacts: editingEmployee?.emergencyContacts || [] as any[],
      leaveBalance: editingEmployee?.leaveBalance || { vacation: { total: 20, used: 0, pending: 0 }, sick: { total: 10, used: 0, pending: 0 }, personal: { total: 5, used: 0, pending: 0 }, unpaid: { used: 0 } },
    }

    try {
      if (editEmployeeId) {
        const res = await updateEmployeeAction(editEmployeeId, employeeData)
        if ('error' in res) { console.error(res.error); return }
        setEmployees(prev => prev.map(e => e.id === editEmployeeId ? (res as Employee) : e))
      } else {
        const res = await createEmployeeAction(employeeData)
        if ('error' in res) { console.error(res.error); return }
        setEmployees(prev => [res as Employee, ...prev])
      }
    } catch {
      if (editEmployeeId) {
        setEmployees(prev => prev.map(e => e.id === editEmployeeId ? { ...employeeData, id: editEmployeeId, createdAt: e.createdAt, updatedAt: new Date().toISOString() } as Employee : e))
      } else {
        const newEmployee: Employee = { ...employeeData, id: empId, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() } as Employee
        setEmployees(prev => [newEmployee, ...prev])
      }
    }
    setIsAddDialogOpen(false)
    setEditEmployeeId(null)
  }

  const handleUpdateCandidate = (candidate: Candidate) => {
    setCandidates(prev => prev.map(c => c.id === candidate.id ? candidate : c))
    // Persist to DB
    const { id, ...rest } = candidate as any
    updateCandidateAction(id, {
      firstName: rest.firstName, lastName: rest.lastName, email: rest.email,
      phone: rest.phone, position: rest.position, department: rest.department,
      stage: rest.stage, source: rest.source, notes: rest.notes as any,
      interviews: rest.interviews as any, rating: rest.rating,
      skills: rest.skills as any,
    }).catch(console.error)
  }

  const handleAddCandidate = async (data: Omit<Candidate, "id" | "appliedAt" | "interviews" | "notes" | "rating">) => {
    try {
      const res = await createCandidateAction({
        firstName: data.firstName, lastName: data.lastName, email: data.email,
        phone: data.phone, position: data.position, department: data.department,
        stage: data.stage, source: data.source, appliedAt: new Date().toISOString().split("T")[0],
        skills: data.skills as string[],
      })
      if ('error' in res) { console.error(res.error); return }
      setCandidates(prev => [res as Candidate, ...prev])
    } catch {
      const newCandidate: Candidate = { ...data, id: `CAN${Date.now()}`, appliedAt: new Date().toISOString().split("T")[0], interviews: [], notes: [], rating: 0 }
      setCandidates(prev => [newCandidate, ...prev])
    }
  }

  const handleLeaveSubmit = async (request: Omit<LeaveRequest, "id" | "status" | "createdAt">) => {
    try {
      const res = await createLeaveRequestAction({
        employeeId: request.employeeId, employeeName: request.employeeName,
        leaveType: request.leaveType, startDate: request.startDate, endDate: request.endDate,
        totalDays: request.totalDays, reason: request.reason,
      })
      if ('error' in res) { console.error(res.error); return }
      setLeaveRequests(prev => [res as LeaveRequest, ...prev])
    } catch {
      const newRequest: LeaveRequest = { ...request, id: `LR${Date.now()}`, status: "pending", createdAt: new Date().toISOString() }
      setLeaveRequests(prev => [newRequest, ...prev])
    }
  }

  const handleLeaveApprove = (id: string) => {
    setLeaveRequests(prev => prev.map(r =>
      r.id === id ? { ...r, status: "approved", approverId: currentUserId, approverName: "Current User", approvedAt: new Date().toISOString() } : r
    ))
    updateLeaveRequestAction(id, { status: "approved", approverId: currentUserId, approverName: "Current User", approvedAt: new Date().toISOString() }).catch(console.error)
  }

  const handleLeaveReject = (id: string, reason: string) => {
    setLeaveRequests(prev => prev.map(r =>
      r.id === id ? { ...r, status: "rejected", rejectionReason: reason } : r
    ))
    updateLeaveRequestAction(id, { status: "rejected", rejectionReason: reason }).catch(console.error)
  }

  // Merged courses: DB courses + static fallback
  const trainingCourses = dbCourses.length > 0 ? dbCourses : ([] as TrainingCourse[])

  // Dynamic HR metrics computed from DB employees
  const hrMetrics: HRMetrics = {
    headcount: employees.length,
    headcountGrowth: employees.length > 0 ? 12.5 : 0,
    attritionRate: employees.filter(e => e.status === "terminated").length / Math.max(employees.length, 1) * 100,
    avgTenure: employees.length > 0 ? employees.reduce((sum, e) => {
      const years = (Date.now() - new Date(e.startDate).getTime()) / (1000 * 60 * 60 * 24 * 365)
      return sum + years
    }, 0) / employees.length : 0,
    openPositions: candidates.filter(c => c.stage === "applied" || c.stage === "screening").length,
    timeToHire: 28,
    diversityMetrics: {
      gender: { male: Math.ceil(employees.length * 0.6), female: Math.floor(employees.length * 0.35), other: Math.max(0, employees.length - Math.ceil(employees.length * 0.6) - Math.floor(employees.length * 0.35)) },
      departments: Object.entries(
        employees.reduce((acc, e) => { acc[e.department] = (acc[e.department] || 0) + 1; return acc }, {} as Record<string, number>)
      ).map(([name, count]) => ({ name: name.charAt(0).toUpperCase() + name.slice(1), count })),
    },
    performanceDistribution: [
      { rating: "Exceptional (4.5+)", count: employees.filter(e => e.performanceRating >= 4.5).length },
      { rating: "Strong (4.0-4.4)", count: employees.filter(e => e.performanceRating >= 4.0 && e.performanceRating < 4.5).length },
      { rating: "Meets Expectations (3.5-3.9)", count: employees.filter(e => e.performanceRating >= 3.5 && e.performanceRating < 4.0).length },
      { rating: "Needs Improvement (<3.5)", count: employees.filter(e => e.performanceRating < 3.5 && e.performanceRating > 0).length },
    ],
  }

  const handleEnroll = async (courseId: string) => {
    const course = trainingCourses.find(c => c.id === courseId)
    if (course) {
      const enrollmentData = {
        courseId,
        courseName: course.title,
        employeeId: currentUserId,
        enrolledAt: new Date().toISOString(),
      }
      // Optimistic local update
      setEnrollments(prev => [...prev, {
        id: `CE${Date.now()}`,
        ...enrollmentData,
        status: "enrolled" as const,
        progress: 0,
      }])
      // Persist to DB
      try {
        const res = await createCourseEnrollmentAction(enrollmentData)
        if (!('error' in res)) {
          // Replace optimistic with real
          setEnrollments(prev => prev.map(e => e.id === `CE${Date.now()}` ? (res as CourseEnrollment) : e))
        }
      } catch (err) {
        console.error("Failed to persist enrollment", err)
      }
    }
  }

  // Attendance handlers
  const handleMarkAttendance = async (record: Omit<AttendanceRecord, "id" | "markedAt">) => {
    try {
      const res = await createAttendanceRecordAction({
        employeeId: record.employeeId, employeeName: record.employeeName,
        date: record.date, status: record.status,
        clockIn: record.clockIn, clockOut: record.clockOut,
        breakMinutes: record.breakMinutes, totalHours: record.totalHours,
        workLocation: record.workLocation, notes: record.notes,
      })
      if ('error' in res) { console.error(res.error); return }
      setAttendanceRecords(prev => [...prev, res as AttendanceRecord])
    } catch {
      const newRecord: AttendanceRecord = { ...record, id: `ATT_${Date.now()}`, markedAt: new Date().toISOString() }
      setAttendanceRecords(prev => [...prev, newRecord])
    }
  }

  const handleUpdateAttendance = (id: string, updates: Partial<AttendanceRecord>) => {
    setAttendanceRecords(prev => prev.map(r =>
      r.id === id ? { ...r, ...updates, markedAt: new Date().toISOString() } : r
    ))
    updateAttendanceRecordAction(id, { ...updates, markedAt: new Date().toISOString() } as any).catch(console.error)
  }

  const handleAddOkr = async (okr: Omit<OKR, "id">) => {
    try {
      const res = await createOKRAction({
        employeeId: okr.employeeId, title: okr.title, description: okr.description,
        quarter: okr.quarter, keyResults: okr.keyResults,
        overallProgress: okr.overallProgress, status: okr.status,
      })
      if ('error' in res) { console.error(res.error); return }
      setOkrs(prev => [res as OKR, ...prev])
    } catch {
      const newOkr: OKR = { ...okr, id: `OKR_${Date.now()}` }
      setOkrs(prev => [newOkr, ...prev])
    }
  }

  const handleCreateHoliday = async (data: { date: string; name: string; description?: string }) => {
    const res = await createHoliday(data)
    if (!res.error) {
      setHolidays(prev => [...prev, res].sort((a, b) => a.date.localeCompare(b.date)))
    }
  }

  const handleDeleteHoliday = async (id: string) => {
    const res = await deleteHoliday(id)
    if (!res.error) {
      setHolidays(prev => prev.filter(h => h.id !== id))
    }
  }

  const tabs = [
    { id: "directory", label: "Directory", icon: Users },
    { id: "org-chart", label: "Org Chart", icon: Building2 },
    { id: "recruitment", label: "Recruitment", icon: UserPlus, badge: candidates.filter(c => c.stage === "applied").length },
    { id: "attendance", label: "Attendance", icon: Calendar, badge: leaveRequests.filter(r => r.status === "pending").length },
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
              holidays={holidays}
              currentUserId={currentUserId}
              onMarkAttendance={handleMarkAttendance}
              onUpdateAttendance={handleUpdateAttendance}
              onCreateHoliday={handleCreateHoliday}
              onDeleteHoliday={handleDeleteHoliday}
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
          onEditEmployee={handleEditEmployee}
          onDeleteEmployee={handleDeleteEmployee}
        />
      )}

      {/* Add/Edit Employee Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={(open) => {
        setIsAddDialogOpen(open)
        if (!open) setEditEmployeeId(null)
      }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="pb-4 border-b border-border">
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/20">
                <UserPlus className="w-5 h-5 text-primary" />
              </div>
              {editEmployeeId ? "Edit Employee" : "Add New Employee"}
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {editEmployeeId ? "Update details for this team member" : "Fill in the details to onboard a new team member"}
            </p>
          </DialogHeader>

          <form onSubmit={handleSaveEmployee} className="space-y-6 pt-4">
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
                    defaultValue={editingEmployee?.firstName}
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
                    defaultValue={editingEmployee?.lastName}
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
                    defaultValue={editingEmployee?.email}
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
                    defaultValue={editingEmployee?.phone}
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
                    defaultValue={editingEmployee?.jobTitle}
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm">
                    Department <span className="text-destructive">*</span>
                  </Label>
                  <Select name="department" defaultValue={editingEmployee?.department || "development"}>
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
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employmentType" className="text-sm">Employment Type</Label>
                  <Select name="employmentType" defaultValue={editingEmployee?.employmentType || "full-time"}>
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
                  <Label htmlFor="status" className="text-sm">Status</Label>
                  <Select name="status" defaultValue={editingEmployee?.status || "active"}>
                    <SelectTrigger className="bg-secondary/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="on-leave">On Leave</SelectItem>
                      <SelectItem value="terminated">Terminated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="managerId" className="text-sm">Reports To</Label>
                  <Select name="managerId" defaultValue={editingEmployee?.managerId || "none"}>
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
                    date={editingEmployee?.startDate ? new Date(editingEmployee.startDate) : new Date()}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm">Work Location</Label>
                  <Select name="locationType" defaultValue={editingEmployee?.workLocation?.toLowerCase().includes("remote") ? "remote" : "onsite"}>
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
                      defaultValue={editingEmployee?.salary}
                      className="pl-9 bg-secondary/50 border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency" className="text-sm">Currency</Label>
                  <Select name="currency" defaultValue={editingEmployee?.currency || "BDT"}>
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
                  <Select name="payFrequency" defaultValue={editingEmployee?.payFrequency || "monthly"}>
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
                    defaultValue={editingEmployee?.skills?.map((s: any) => s.skillName).join(", ") || ""}
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
                    defaultValue={editingEmployee?.yearsOfExperience || ""}
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
                {editEmployeeId ? <UserCheck className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                {editEmployeeId ? "Save Changes" : "Add Employee"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
