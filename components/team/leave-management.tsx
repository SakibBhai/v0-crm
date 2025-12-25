"use client"

import { useState } from "react"
import type { LeaveRequest, Employee } from "@/lib/types/hr"
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
    Plus,
    Calendar,
    Check,
    X,
    Clock,
    AlertCircle,
    Plane,
    Heart,
    User,
    CalendarDays,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface LeaveManagementProps {
    requests: LeaveRequest[]
    employees: Employee[]
    currentUserId: string
    onSubmitRequest: (request: Omit<LeaveRequest, "id" | "status" | "createdAt">) => void
    onApprove: (requestId: string) => void
    onReject: (requestId: string, reason: string) => void
}

const LEAVE_TYPE_CONFIG = {
    vacation: { label: "Vacation", icon: Plane, color: "bg-blue-500" },
    sick: { label: "Sick Leave", icon: Heart, color: "bg-orange-500" },
    personal: { label: "Personal", icon: User, color: "bg-purple-500" },
    unpaid: { label: "Unpaid", icon: Clock, color: "bg-gray-500" },
    parental: { label: "Parental", icon: Heart, color: "bg-pink-500" },
    bereavement: { label: "Bereavement", icon: Heart, color: "bg-gray-600" },
}

export function LeaveManagement({
    requests,
    employees,
    currentUserId,
    onSubmitRequest,
    onApprove,
    onReject,
}: LeaveManagementProps) {
    const [activeTab, setActiveTab] = useState("my-requests")
    const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)
    const [rejectingId, setRejectingId] = useState<string | null>(null)
    const [rejectReason, setRejectReason] = useState("")

    const currentEmployee = employees.find(e => e.id === currentUserId)
    const myRequests = requests.filter(r => r.employeeId === currentUserId)
    const pendingApprovals = requests.filter(r => r.status === "pending")

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

    const getStatusBadge = (status: LeaveRequest["status"]) => {
        switch (status) {
            case "pending":
                return <Badge variant="secondary" className="gap-1"><Clock className="w-3 h-3" /> Pending</Badge>
            case "approved":
                return <Badge className="bg-green-500 gap-1"><Check className="w-3 h-3" /> Approved</Badge>
            case "rejected":
                return <Badge variant="destructive" className="gap-1"><X className="w-3 h-3" /> Rejected</Badge>
            case "cancelled":
                return <Badge variant="outline" className="gap-1">Cancelled</Badge>
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const startDate = formData.get("startDate") as string
        const endDate = formData.get("endDate") as string
        const start = new Date(startDate)
        const end = new Date(endDate)
        const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1

        onSubmitRequest({
            employeeId: currentUserId,
            employeeName: currentEmployee ? `${currentEmployee.firstName} ${currentEmployee.lastName}` : "Current User",
            leaveType: formData.get("leaveType") as any,
            startDate,
            endDate,
            totalDays,
            reason: formData.get("reason") as string,
        })
        setIsRequestDialogOpen(false)
    }

    const handleReject = () => {
        if (rejectingId && rejectReason) {
            onReject(rejectingId, rejectReason)
            setRejectingId(null)
            setRejectReason("")
        }
    }

    const RequestCard = ({ request, showActions = false }: { request: LeaveRequest; showActions?: boolean }) => {
        const typeConfig = LEAVE_TYPE_CONFIG[request.leaveType]
        const employee = employees.find(e => e.id === request.employeeId)
        const initials = request.employeeName.split(" ").map(n => n[0]).join("")

        return (
            <Card>
                <CardContent className="pt-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                                <AvatarFallback className="bg-primary/20 text-primary">
                                    {initials}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">{request.employeeName}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge className={cn("text-xs text-white", typeConfig.color)}>
                                        {typeConfig.label}
                                    </Badge>
                                    {getStatusBadge(request.status)}
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium">{request.totalDays} day{request.totalDays > 1 ? "s" : ""}</p>
                            <p className="text-xs text-muted-foreground">
                                {formatDate(request.startDate)} - {formatDate(request.endDate)}
                            </p>
                        </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-border">
                        <p className="text-sm text-muted-foreground">{request.reason}</p>
                    </div>

                    {request.status === "approved" && request.approverName && (
                        <p className="text-xs text-muted-foreground mt-2">
                            Approved by {request.approverName} on {formatDate(request.approvedAt!)}
                        </p>
                    )}

                    {showActions && request.status === "pending" && (
                        <div className="flex gap-2 mt-4 pt-3 border-t border-border">
                            <Button size="sm" className="flex-1 gap-1" onClick={() => onApprove(request.id)}>
                                <Check className="w-3 h-3" /> Approve
                            </Button>
                            <Button size="sm" variant="destructive" className="flex-1 gap-1" onClick={() => setRejectingId(request.id)}>
                                <X className="w-3 h-3" /> Reject
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="space-y-4">
            {/* Leave Balances */}
            {currentEmployee && (
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { label: "Vacation", data: currentEmployee.leaveBalance.vacation, color: "bg-blue-500" },
                        { label: "Sick Leave", data: currentEmployee.leaveBalance.sick, color: "bg-orange-500" },
                        { label: "Personal", data: currentEmployee.leaveBalance.personal, color: "bg-purple-500" },
                    ].map((leave) => {
                        const remaining = leave.data.total - leave.data.used - leave.data.pending
                        return (
                            <Card key={leave.label}>
                                <CardContent className="pt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className={cn("w-3 h-3 rounded-full", leave.color)} />
                                            <span className="font-medium text-sm">{leave.label}</span>
                                        </div>
                                        <span className="text-2xl font-bold">{remaining}</span>
                                    </div>
                                    <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                                        <span>{leave.data.used} used</span>
                                        <span>{leave.data.pending} pending</span>
                                        <span>{leave.data.total} total</span>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            )}

            {/* Header */}
            <div className="flex items-center justify-between">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList>
                        <TabsTrigger value="my-requests">
                            My Requests
                            {myRequests.filter(r => r.status === "pending").length > 0 && (
                                <Badge className="ml-2 h-5 w-5 p-0 justify-center">
                                    {myRequests.filter(r => r.status === "pending").length}
                                </Badge>
                            )}
                        </TabsTrigger>
                        <TabsTrigger value="pending-approvals">
                            Pending Approvals
                            {pendingApprovals.length > 0 && (
                                <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 justify-center">
                                    {pendingApprovals.length}
                                </Badge>
                            )}
                        </TabsTrigger>
                        <TabsTrigger value="calendar">Calendar</TabsTrigger>
                    </TabsList>
                </Tabs>

                <Button onClick={() => setIsRequestDialogOpen(true)} className="gap-2">
                    <Plus className="w-4 h-4" /> Request Leave
                </Button>
            </div>

            {/* Content */}
            {activeTab === "my-requests" && (
                <div className="grid gap-4 md:grid-cols-2">
                    {myRequests.length === 0 ? (
                        <Card className="col-span-2">
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <Calendar className="w-12 h-12 text-muted-foreground mb-4" />
                                <p className="text-muted-foreground">No leave requests yet</p>
                                <Button className="mt-4" onClick={() => setIsRequestDialogOpen(true)}>
                                    Request Leave
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        myRequests.map(request => (
                            <RequestCard key={request.id} request={request} />
                        ))
                    )}
                </div>
            )}

            {activeTab === "pending-approvals" && (
                <div className="grid gap-4 md:grid-cols-2">
                    {pendingApprovals.length === 0 ? (
                        <Card className="col-span-2">
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <Check className="w-12 h-12 text-success mb-4" />
                                <p className="text-muted-foreground">No pending approvals</p>
                            </CardContent>
                        </Card>
                    ) : (
                        pendingApprovals.map(request => (
                            <RequestCard key={request.id} request={request} showActions />
                        ))
                    )}
                </div>
            )}

            {activeTab === "calendar" && (
                <Card>
                    <CardContent className="pt-4">
                        <div className="text-center py-12 text-muted-foreground">
                            <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Calendar view showing approved leaves</p>
                            <p className="text-sm mt-2">Integrates with Google/Outlook coming soon</p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Request Dialog */}
            <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Request Leave</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label>Leave Type</Label>
                            <Select name="leaveType" defaultValue="vacation">
                                <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {Object.entries(LEAVE_TYPE_CONFIG).map(([key, config]) => (
                                        <SelectItem key={key} value={key}>{config.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Start Date</Label>
                                <Input name="startDate" type="date" required className="mt-1" />
                            </div>
                            <div>
                                <Label>End Date</Label>
                                <Input name="endDate" type="date" required className="mt-1" />
                            </div>
                        </div>
                        <div>
                            <Label>Reason</Label>
                            <Textarea name="reason" placeholder="Brief description..." className="mt-1" />
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="ghost" onClick={() => setIsRequestDialogOpen(false)}>Cancel</Button>
                            <Button type="submit">Submit Request</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Reject Dialog */}
            <Dialog open={!!rejectingId} onOpenChange={() => setRejectingId(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Reject Leave Request</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <Label>Reason for Rejection</Label>
                            <Textarea
                                value={rejectReason}
                                onChange={(e) => setRejectReason(e.target.value)}
                                placeholder="Please provide a reason..."
                                className="mt-1"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setRejectingId(null)}>Cancel</Button>
                        <Button variant="destructive" onClick={handleReject} disabled={!rejectReason}>
                            Reject Request
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
