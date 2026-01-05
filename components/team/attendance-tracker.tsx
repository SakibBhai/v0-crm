"use client"

import { useState, useMemo } from "react"
import type { Employee, AttendanceRecord, AttendanceStatus } from "@/lib/types/hr"
import { ATTENDANCE_STATUS_CONFIG, DEPARTMENT_CONFIG } from "@/lib/types/hr"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    CheckCircle,
    XCircle,
    Clock,
    Sun,
    Home,
    Calendar,
    Users,
    TrendingUp,
    ChevronLeft,
    ChevronRight,
    LogIn,
    LogOut,
    BarChart3,
    Filter,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface AttendanceTrackerProps {
    employees: Employee[]
    attendanceRecords: AttendanceRecord[]
    onMarkAttendance: (record: Omit<AttendanceRecord, "id" | "markedAt">) => void
    onUpdateAttendance: (id: string, updates: Partial<AttendanceRecord>) => void
}

const STATUS_ICONS = {
    present: CheckCircle,
    absent: XCircle,
    late: Clock,
    "half-day": Sun,
    remote: Home,
}

export function AttendanceTracker({
    employees,
    attendanceRecords,
    onMarkAttendance,
    onUpdateAttendance,
}: AttendanceTrackerProps) {
    const [activeTab, setActiveTab] = useState("today")
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>("all")
    const [calendarMonth, setCalendarMonth] = useState(new Date())
    const [isMarkDialogOpen, setIsMarkDialogOpen] = useState(false)
    const [markingEmployee, setMarkingEmployee] = useState<Employee | null>(null)
    const [clockInTime, setClockInTime] = useState("09:00")
    const [clockOutTime, setClockOutTime] = useState("18:00")
    const [attendanceNotes, setAttendanceNotes] = useState("")
    const [selectedStatus, setSelectedStatus] = useState<AttendanceStatus>("present")

    // Get today's date
    const today = new Date().toISOString().split("T")[0]

    // Get records for selected date
    const dateRecords = useMemo(() => {
        return attendanceRecords.filter(r => r.date === selectedDate)
    }, [attendanceRecords, selectedDate])

    // Calculate stats for today
    const todayStats = useMemo(() => {
        const todayRecords = attendanceRecords.filter(r => r.date === today)
        return {
            present: todayRecords.filter(r => r.status === "present").length,
            absent: todayRecords.filter(r => r.status === "absent").length,
            late: todayRecords.filter(r => r.status === "late").length,
            remote: todayRecords.filter(r => r.status === "remote").length,
            halfDay: todayRecords.filter(r => r.status === "half-day").length,
            total: employees.length,
            marked: todayRecords.length,
        }
    }, [attendanceRecords, employees.length, today])

    // Calculate monthly stats
    const monthlyStats = useMemo(() => {
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()
        const monthRecords = attendanceRecords.filter(r => {
            const date = new Date(r.date)
            return date.getMonth() === currentMonth && date.getFullYear() === currentYear
        })

        const presentDays = monthRecords.filter(r => r.status === "present" || r.status === "remote").length
        const totalRecords = monthRecords.length

        return {
            attendanceRate: totalRecords > 0 ? Math.round((presentDays / totalRecords) * 100) : 0,
            onTimeRate: totalRecords > 0 ? Math.round(((totalRecords - monthRecords.filter(r => r.status === "late").length) / totalRecords) * 100) : 0,
            remoteRate: totalRecords > 0 ? Math.round((monthRecords.filter(r => r.status === "remote").length / totalRecords) * 100) : 0,
        }
    }, [attendanceRecords])

    // Get calendar days
    const calendarDays = useMemo(() => {
        const year = calendarMonth.getFullYear()
        const month = calendarMonth.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const days: { date: Date; records: AttendanceRecord[] }[] = []

        // Add padding for first week
        const startPadding = firstDay.getDay()
        for (let i = startPadding - 1; i >= 0; i--) {
            const date = new Date(year, month, -i)
            days.push({ date, records: [] })
        }

        // Add month days
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const date = new Date(year, month, day)
            const dateStr = date.toISOString().split("T")[0]
            const records = attendanceRecords.filter(r => {
                if (selectedEmployeeId === "all") return r.date === dateStr
                return r.date === dateStr && r.employeeId === selectedEmployeeId
            })
            days.push({ date, records })
        }

        return days
    }, [calendarMonth, attendanceRecords, selectedEmployeeId])

    // Get employee attendance for a date
    const getEmployeeRecord = (employeeId: string) => {
        return dateRecords.find(r => r.employeeId === employeeId)
    }

    // Handle quick status mark
    const handleQuickMark = (employee: Employee, status: AttendanceStatus) => {
        const existingRecord = getEmployeeRecord(employee.id)

        if (existingRecord) {
            onUpdateAttendance(existingRecord.id, { status })
        } else {
            onMarkAttendance({
                employeeId: employee.id,
                employeeName: `${employee.firstName} ${employee.lastName}`,
                date: selectedDate,
                status,
                clockIn: status !== "absent" ? "09:00" : undefined,
                clockOut: status !== "absent" ? "18:00" : undefined,
                totalHours: status === "half-day" ? 4 : status === "absent" ? 0 : 8,
                workLocation: status === "remote" ? "remote" : "office",
                markedBy: "Current User",
                isAutoMarked: false,
            })
        }
    }

    // Handle full attendance mark
    const handleMarkAttendance = () => {
        if (!markingEmployee) return

        onMarkAttendance({
            employeeId: markingEmployee.id,
            employeeName: `${markingEmployee.firstName} ${markingEmployee.lastName}`,
            date: selectedDate,
            status: selectedStatus,
            clockIn: selectedStatus !== "absent" ? clockInTime : undefined,
            clockOut: selectedStatus !== "absent" ? clockOutTime : undefined,
            totalHours: selectedStatus === "half-day" ? 4 : selectedStatus === "absent" ? 0 : 8,
            workLocation: selectedStatus === "remote" ? "remote" : "office",
            notes: attendanceNotes || undefined,
            markedBy: "Current User",
            isAutoMarked: false,
        })

        setIsMarkDialogOpen(false)
        resetForm()
    }

    const resetForm = () => {
        setMarkingEmployee(null)
        setClockInTime("09:00")
        setClockOutTime("18:00")
        setAttendanceNotes("")
        setSelectedStatus("present")
    }

    const openMarkDialog = (employee: Employee) => {
        setMarkingEmployee(employee)
        const existingRecord = getEmployeeRecord(employee.id)
        if (existingRecord) {
            setSelectedStatus(existingRecord.status)
            setClockInTime(existingRecord.clockIn || "09:00")
            setClockOutTime(existingRecord.clockOut || "18:00")
            setAttendanceNotes(existingRecord.notes || "")
        }
        setIsMarkDialogOpen(true)
    }

    const formatMonth = (date: Date) => {
        return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    }

    const navigateMonth = (direction: number) => {
        const newDate = new Date(calendarMonth)
        newDate.setMonth(newDate.getMonth() + direction)
        setCalendarMonth(newDate)
    }

    // Get individual employee stats
    const getEmployeeStats = (employeeId: string) => {
        const empRecords = attendanceRecords.filter(r => r.employeeId === employeeId)
        const total = empRecords.length
        if (total === 0) return { attendance: 0, onTime: 0, remote: 0 }

        const present = empRecords.filter(r => r.status === "present" || r.status === "remote").length
        const late = empRecords.filter(r => r.status === "late").length
        const remote = empRecords.filter(r => r.status === "remote").length

        return {
            attendance: Math.round((present / total) * 100),
            onTime: Math.round(((total - late) / total) * 100),
            remote: Math.round((remote / total) * 100),
            totalDays: total,
            present,
            absent: empRecords.filter(r => r.status === "absent").length,
            late,
            halfDay: empRecords.filter(r => r.status === "half-day").length,
        }
    }

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                    <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Present Today</p>
                                <p className="text-3xl font-bold text-green-500">{todayStats.present}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-green-500/20">
                                <CheckCircle className="w-6 h-6 text-green-500" />
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            {todayStats.marked} of {todayStats.total} marked
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                    <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Remote Today</p>
                                <p className="text-3xl font-bold text-blue-500">{todayStats.remote}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-blue-500/20">
                                <Home className="w-6 h-6 text-blue-500" />
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            {monthlyStats.remoteRate}% avg this month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                    <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Monthly Rate</p>
                                <p className="text-3xl font-bold text-purple-500">{monthlyStats.attendanceRate}%</p>
                            </div>
                            <div className="p-3 rounded-xl bg-purple-500/20">
                                <TrendingUp className="w-6 h-6 text-purple-500" />
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Attendance this month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20">
                    <CardContent className="pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">On-Time Rate</p>
                                <p className="text-3xl font-bold text-yellow-500">{monthlyStats.onTimeRate}%</p>
                            </div>
                            <div className="p-3 rounded-xl bg-yellow-500/20">
                                <Clock className="w-6 h-6 text-yellow-500" />
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            {todayStats.late} late today
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <TabsList>
                        <TabsTrigger value="today" className="gap-2">
                            <Users className="w-4 h-4" />
                            Daily Attendance
                        </TabsTrigger>
                        <TabsTrigger value="calendar" className="gap-2">
                            <Calendar className="w-4 h-4" />
                            Calendar View
                        </TabsTrigger>
                        <TabsTrigger value="reports" className="gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Reports
                        </TabsTrigger>
                    </TabsList>

                    {activeTab === "today" && (
                        <div className="flex items-center gap-2">
                            <Input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-auto"
                            />
                        </div>
                    )}
                </div>

                {/* Daily Attendance Tab */}
                <TabsContent value="today" className="mt-6">
                    <Card>
                        <CardHeader className="border-b border-border pb-4">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">
                                    Attendance for {new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                                </CardTitle>
                                <div className="flex items-center gap-2">
                                    {Object.entries(ATTENDANCE_STATUS_CONFIG).map(([key, config]) => (
                                        <div key={key} className="flex items-center gap-1 text-xs">
                                            <div className={cn("w-2 h-2 rounded-full", config.bgColor.replace("/20", ""))} />
                                            <span className="text-muted-foreground">{config.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="space-y-3">
                                {employees.map((employee) => {
                                    const record = getEmployeeRecord(employee.id)
                                    const initials = `${employee.firstName[0]}${employee.lastName[0]}`
                                    const deptConfig = DEPARTMENT_CONFIG[employee.department]

                                    return (
                                        <div
                                            key={employee.id}
                                            className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-4">
                                                <Avatar className="w-12 h-12">
                                                    <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                                                        {initials}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium">{employee.firstName} {employee.lastName}</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge className={cn("text-xs", deptConfig.bgColor, deptConfig.color)}>
                                                            {deptConfig.label}
                                                        </Badge>
                                                        <span className="text-xs text-muted-foreground">{employee.jobTitle}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                {record && (
                                                    <div className="flex items-center gap-4 mr-4 text-sm">
                                                        {record.clockIn && (
                                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                                <LogIn className="w-3.5 h-3.5" />
                                                                <span>{record.clockIn}</span>
                                                            </div>
                                                        )}
                                                        {record.clockOut && (
                                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                                <LogOut className="w-3.5 h-3.5" />
                                                                <span>{record.clockOut}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Quick Status Buttons */}
                                                <div className="flex items-center gap-1">
                                                    {(Object.entries(ATTENDANCE_STATUS_CONFIG) as [AttendanceStatus, typeof ATTENDANCE_STATUS_CONFIG.present][]).map(([status, config]) => {
                                                        const Icon = STATUS_ICONS[status]
                                                        const isActive = record?.status === status
                                                        return (
                                                            <button
                                                                key={status}
                                                                onClick={() => handleQuickMark(employee, status)}
                                                                className={cn(
                                                                    "p-2 rounded-lg transition-all",
                                                                    isActive
                                                                        ? cn(config.bgColor, config.color)
                                                                        : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                                                                )}
                                                                title={config.label}
                                                            >
                                                                <Icon className="w-4 h-4" />
                                                            </button>
                                                        )
                                                    })}
                                                </div>

                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => openMarkDialog(employee)}
                                                    className="ml-2"
                                                >
                                                    Details
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Calendar Tab */}
                <TabsContent value="calendar" className="mt-6">
                    <Card>
                        <CardHeader className="border-b border-border pb-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Button variant="outline" size="icon" onClick={() => navigateMonth(-1)}>
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <CardTitle className="text-lg min-w-[180px] text-center">
                                        {formatMonth(calendarMonth)}
                                    </CardTitle>
                                    <Button variant="outline" size="icon" onClick={() => navigateMonth(1)}>
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                                <Select value={selectedEmployeeId} onValueChange={setSelectedEmployeeId}>
                                    <SelectTrigger className="w-[200px]">
                                        <Filter className="w-4 h-4 mr-2" />
                                        <SelectValue placeholder="Filter by employee" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Employees</SelectItem>
                                        {employees.map((emp) => (
                                            <SelectItem key={emp.id} value={emp.id}>
                                                {emp.firstName} {emp.lastName}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-1">
                                {/* Day Headers */}
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                    <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                                        {day}
                                    </div>
                                ))}

                                {/* Calendar Days */}
                                {calendarDays.map(({ date, records }, idx) => {
                                    const isCurrentMonth = date.getMonth() === calendarMonth.getMonth()
                                    const isToday = date.toISOString().split("T")[0] === today
                                    const isWeekend = date.getDay() === 0 || date.getDay() === 6

                                    // Get dominant status for the day
                                    const statusCounts = records.reduce((acc, r) => {
                                        acc[r.status] = (acc[r.status] || 0) + 1
                                        return acc
                                    }, {} as Record<string, number>)
                                    const dominantStatus = Object.entries(statusCounts).sort((a, b) => b[1] - a[1])[0]?.[0] as AttendanceStatus | undefined

                                    return (
                                        <div
                                            key={idx}
                                            className={cn(
                                                "min-h-[80px] p-2 rounded-lg border transition-colors",
                                                isCurrentMonth ? "bg-card" : "bg-secondary/30 opacity-50",
                                                isToday && "ring-2 ring-primary",
                                                isWeekend && "bg-secondary/50"
                                            )}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={cn(
                                                    "text-sm font-medium",
                                                    isToday && "text-primary"
                                                )}>
                                                    {date.getDate()}
                                                </span>
                                                {records.length > 0 && dominantStatus && (
                                                    <div className={cn(
                                                        "w-2 h-2 rounded-full",
                                                        ATTENDANCE_STATUS_CONFIG[dominantStatus].bgColor.replace("/20", "")
                                                    )} />
                                                )}
                                            </div>
                                            {records.length > 0 && isCurrentMonth && !isWeekend && (
                                                <div className="space-y-1">
                                                    {selectedEmployeeId === "all" ? (
                                                        <div className="flex flex-wrap gap-0.5">
                                                            {records.slice(0, 4).map((r, i) => {
                                                                const config = ATTENDANCE_STATUS_CONFIG[r.status]
                                                                return (
                                                                    <div
                                                                        key={i}
                                                                        className={cn("w-5 h-5 rounded text-[10px] flex items-center justify-center", config.bgColor, config.color)}
                                                                        title={`${r.employeeName}: ${config.label}`}
                                                                    >
                                                                        {r.employeeName.split(" ").map(n => n[0]).join("")}
                                                                    </div>
                                                                )
                                                            })}
                                                            {records.length > 4 && (
                                                                <div className="w-5 h-5 rounded bg-secondary text-[10px] flex items-center justify-center text-muted-foreground">
                                                                    +{records.length - 4}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        records.map((r, i) => {
                                                            const config = ATTENDANCE_STATUS_CONFIG[r.status]
                                                            return (
                                                                <div
                                                                    key={i}
                                                                    className={cn("px-1.5 py-0.5 rounded text-[10px]", config.bgColor, config.color)}
                                                                >
                                                                    {config.label}
                                                                </div>
                                                            )
                                                        })
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Legend */}
                            <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-border">
                                {Object.entries(ATTENDANCE_STATUS_CONFIG).map(([key, config]) => (
                                    <div key={key} className="flex items-center gap-2">
                                        <div className={cn("w-3 h-3 rounded", config.bgColor.replace("/20", ""))} />
                                        <span className="text-xs text-muted-foreground">{config.label}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Reports Tab */}
                <TabsContent value="reports" className="mt-6">
                    <div className="grid gap-4 md:grid-cols-2">
                        {employees.map((employee) => {
                            const stats = getEmployeeStats(employee.id)
                            const initials = `${employee.firstName[0]}${employee.lastName[0]}`
                            const deptConfig = DEPARTMENT_CONFIG[employee.department]

                            return (
                                <Card key={employee.id} className="overflow-hidden">
                                    <CardHeader className="bg-secondary/30 pb-4">
                                        <div className="flex items-center gap-4">
                                            <Avatar className="w-14 h-14">
                                                <AvatarFallback className="bg-primary/20 text-primary text-lg font-semibold">
                                                    {initials}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-lg">{employee.firstName} {employee.lastName}</CardTitle>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Badge className={cn("text-xs", deptConfig.bgColor, deptConfig.color)}>
                                                        {deptConfig.label}
                                                    </Badge>
                                                    <span className="text-xs text-muted-foreground">{employee.jobTitle}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-4">
                                        {/* Progress Bars */}
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex items-center justify-between text-sm mb-1">
                                                    <span className="text-muted-foreground">Attendance Rate</span>
                                                    <span className="font-medium text-green-500">{stats.attendance}%</span>
                                                </div>
                                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                                                        style={{ width: `${stats.attendance}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between text-sm mb-1">
                                                    <span className="text-muted-foreground">On-Time Rate</span>
                                                    <span className="font-medium text-blue-500">{stats.onTime}%</span>
                                                </div>
                                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                                                        style={{ width: `${stats.onTime}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between text-sm mb-1">
                                                    <span className="text-muted-foreground">Remote Days</span>
                                                    <span className="font-medium text-purple-500">{stats.remote}%</span>
                                                </div>
                                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-purple-500 rounded-full transition-all duration-500"
                                                        style={{ width: `${stats.remote}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status Breakdown */}
                                        <div className="grid grid-cols-5 gap-2 mt-6 pt-4 border-t border-border">
                                            {[
                                                { label: "Present", value: stats.present, color: "text-green-500" },
                                                { label: "Absent", value: stats.absent, color: "text-red-500" },
                                                { label: "Late", value: stats.late, color: "text-yellow-500" },
                                                { label: "Half", value: stats.halfDay, color: "text-orange-500" },
                                                { label: "Remote", value: stats.remote, color: "text-blue-500" },
                                            ].map((item) => (
                                                <div key={item.label} className="text-center">
                                                    <p className={cn("text-lg font-bold", item.color)}>{item.value}</p>
                                                    <p className="text-[10px] text-muted-foreground">{item.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </TabsContent>
            </Tabs>

            {/* Mark Attendance Dialog */}
            <Dialog open={isMarkDialogOpen} onOpenChange={setIsMarkDialogOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                            {markingEmployee && (
                                <>
                                    <Avatar className="w-10 h-10">
                                        <AvatarFallback className="bg-primary/20 text-primary">
                                            {markingEmployee.firstName[0]}{markingEmployee.lastName[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p>{markingEmployee.firstName} {markingEmployee.lastName}</p>
                                        <p className="text-sm font-normal text-muted-foreground">
                                            {new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                                        </p>
                                    </div>
                                </>
                            )}
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        {/* Status Selection */}
                        <div>
                            <Label className="mb-3 block">Attendance Status</Label>
                            <div className="grid grid-cols-5 gap-2">
                                {(Object.entries(ATTENDANCE_STATUS_CONFIG) as [AttendanceStatus, typeof ATTENDANCE_STATUS_CONFIG.present][]).map(([status, config]) => {
                                    const Icon = STATUS_ICONS[status]
                                    return (
                                        <button
                                            key={status}
                                            onClick={() => setSelectedStatus(status)}
                                            className={cn(
                                                "flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all",
                                                selectedStatus === status
                                                    ? cn("border-primary", config.bgColor)
                                                    : "border-transparent bg-secondary hover:bg-secondary/80"
                                            )}
                                        >
                                            <Icon className={cn("w-5 h-5", selectedStatus === status ? config.color : "text-muted-foreground")} />
                                            <span className="text-[10px] font-medium">{config.label}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Time Inputs */}
                        {selectedStatus !== "absent" && (
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="clockIn">Clock In</Label>
                                    <div className="relative mt-1">
                                        <LogIn className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            id="clockIn"
                                            type="time"
                                            value={clockInTime}
                                            onChange={(e) => setClockInTime(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="clockOut">Clock Out</Label>
                                    <div className="relative mt-1">
                                        <LogOut className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            id="clockOut"
                                            type="time"
                                            value={clockOutTime}
                                            onChange={(e) => setClockOutTime(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notes */}
                        <div>
                            <Label htmlFor="notes">Notes (Optional)</Label>
                            <Textarea
                                id="notes"
                                value={attendanceNotes}
                                onChange={(e) => setAttendanceNotes(e.target.value)}
                                placeholder="Add any notes..."
                                className="mt-1"
                                rows={3}
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsMarkDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleMarkAttendance}>
                            Save Attendance
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
