"use client"

import { useState } from "react"
import type { Employee, EmployeeDocument, CareerEvent } from "@/lib/types/hr"
import { DEPARTMENT_CONFIG, PROFICIENCY_CONFIG } from "@/lib/types/hr"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import {
    X,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Briefcase,
    DollarSign,
    Star,
    Award,
    FileText,
    Clock,
    AlertTriangle,
    Users,
    TrendingUp,
    ChevronRight,
    Download,
    Upload,
    Shield,
    Heart,
    GraduationCap,
    CheckCircle2,
    Edit,
    Trash2,
    Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface EmployeeProfileProps {
    employee: Employee
    isOpen: boolean
    onClose: () => void
    onUpdateEmployee?: (employee: Employee) => void
    onEditEmployee?: (employee: Employee) => void
    onDeleteEmployee?: (id: string) => void
}

export function EmployeeProfile({ employee, isOpen, onClose, onUpdateEmployee, onEditEmployee, onDeleteEmployee }: EmployeeProfileProps) {
    const [activeTab, setActiveTab] = useState("overview")
    const [isUploadOpen, setIsUploadOpen] = useState(false)
    const [localEmployee, setLocalEmployee] = useState(employee)
    const [downloadingId, setDownloadingId] = useState<string | null>(null)
    const initials = `${employee?.firstName?.[0] || ""}${employee?.lastName?.[0] || ""}`
    const deptConfig = DEPARTMENT_CONFIG[employee?.department] || { label: employee?.department || "Unknown", color: "text-muted-foreground", bgColor: "bg-muted" }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-US", { style: "currency", currency: employee?.currency || "USD" }).format(amount || 0)
    }

    const formatDate = (date: string) => {
        if (!date) return "—"
        return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    }

    const getDocumentIcon = (type: EmployeeDocument["type"]) => {
        switch (type) {
            case "contract": return Briefcase
            case "nda": return Shield
            case "certification": return Award
            case "tax-form": return FileText
            default: return FileText
        }
    }

    const getCareerEventIcon = (type: CareerEvent["type"]) => {
        switch (type) {
            case "hired": return Users
            case "promotion": return TrendingUp
            case "salary-change": return DollarSign
            case "role-change": return Briefcase
            default: return ChevronRight
        }
    }

    const isDocumentExpiring = (doc: EmployeeDocument) => {
        if (!doc.expiresAt) return false
        const daysUntilExpiry = (new Date(doc.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
        return daysUntilExpiry < 30 && daysUntilExpiry > 0
    }

    if (!isOpen || !employee) return null

    const handleUploadDoc = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const newDoc: EmployeeDocument = {
            id: `DOC_${Date.now()}`,
            name: fd.get("docName") as string,
            type: fd.get("docType") as EmployeeDocument["type"],
            fileUrl: "#",
            uploadedAt: new Date().toISOString(),
        }
        const updated = { ...localEmployee, documents: [newDoc, ...(localEmployee?.documents || [])] }
        setLocalEmployee(updated)
        if (onUpdateEmployee) onUpdateEmployee(updated)
        setIsUploadOpen(false)
    }

    const handleDownload = (docId: string) => {
        setDownloadingId(docId)
        setTimeout(() => setDownloadingId(null), 1500)
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex justify-end">
                <div className="absolute inset-0 bg-black/50" onClick={onClose} />

                <div className="relative w-full max-w-3xl bg-background border-l border-border shadow-2xl animate-in slide-in-from-right duration-300">
                    <ScrollArea className="h-full">
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-primary/20 to-chart-2/20 z-10">
                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="w-20 h-20 border-4 border-background">
                                            <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                                                {initials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h2 className="text-2xl font-bold">{employee.firstName} {employee.lastName}</h2>
                                            <p className="text-muted-foreground">{employee.jobTitle}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <Badge className={cn("text-xs", deptConfig.bgColor, deptConfig.color)}>
                                                    {deptConfig.label}
                                                </Badge>
                                                <Badge variant="outline" className="text-xs capitalize">
                                                    {(employee.employmentType || "full-time").replace("-", " ")}
                                                </Badge>
                                                <Badge variant={employee.status === "active" ? "default" : "secondary"} className="text-xs capitalize">
                                                    {employee.status || "active"}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {onEditEmployee && (
                                            <Button variant="ghost" size="icon" onClick={() => onEditEmployee(employee)} title="Edit Employee">
                                                <Edit className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                                            </Button>
                                        )}
                                        {onDeleteEmployee && (
                                            <Button variant="ghost" size="icon" onClick={() => onDeleteEmployee(employee.id)} title="Delete Employee" className="hover:bg-destructive/10 hover:text-destructive">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        )}
                                        <Button variant="ghost" size="icon" onClick={onClose} title="Close">
                                            <X className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-4 gap-4 mt-6">
                                    {[
                                        { label: "Rating", value: (employee.performanceRating || 0).toFixed(1), icon: Star, color: "text-yellow-500" },
                                        { label: "Experience", value: `${employee.yearsOfExperience || 0}y`, icon: Clock, color: "text-blue-500" },
                                        { label: "Skills", value: employee.skills?.length || 0, icon: Award, color: "text-green-500" },
                                        { label: "Certifications", value: employee.certifications?.length || 0, icon: GraduationCap, color: "text-purple-500" },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <stat.icon className={cn("w-5 h-5 mx-auto mb-1", stat.color)} />
                                            <p className="text-lg font-bold">{stat.value}</p>
                                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="p-6">
                            <TabsList className="w-full grid grid-cols-5 mb-6">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="skills">Skills</TabsTrigger>
                                <TabsTrigger value="documents">Documents</TabsTrigger>
                                <TabsTrigger value="career">Career</TabsTrigger>
                                <TabsTrigger value="leave">Leave</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-6">
                                {/* Contact Info */}
                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-sm font-medium">Contact Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-secondary"><Mail className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Email</p>
                                                <p className="text-sm font-medium">{employee.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-secondary"><Phone className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Phone</p>
                                                <p className="text-sm font-medium">{employee.phone || "—"}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-secondary"><MapPin className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Location</p>
                                                <p className="text-sm font-medium">{employee.workLocation || "—"}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-secondary"><Calendar className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Start Date</p>
                                                <p className="text-sm font-medium">{formatDate(employee.startDate)}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Employment Details */}
                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-sm font-medium">Employment Details</CardTitle>
                                    </CardHeader>
                                    <CardContent className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs text-muted-foreground">Employee ID</p>
                                            <p className="text-sm font-medium font-mono">{employee.employeeId}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Reports To</p>
                                            <p className="text-sm font-medium">{employee.managerName || "—"}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Salary</p>
                                            <p className="text-sm font-medium">{formatCurrency(employee.salary)}/year</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Pay Frequency</p>
                                            <p className="text-sm font-medium capitalize">{employee.payFrequency || "monthly"}</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Emergency Contacts */}
                                {employee.emergencyContacts && employee.emergencyContacts.length > 0 && (
                                    <Card>
                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-sm font-medium flex items-center gap-2">
                                                <Heart className="w-4 h-4 text-destructive" />
                                                Emergency Contacts
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            {employee.emergencyContacts.map((contact, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                                                    <div>
                                                        <p className="font-medium">{contact.name}</p>
                                                        <p className="text-xs text-muted-foreground">{contact.relationship}</p>
                                                    </div>
                                                    <p className="text-sm">{contact.phone}</p>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                )}

                                {/* Certifications */}
                                {employee.certifications && employee.certifications.length > 0 && (
                                    <Card>
                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-sm font-medium">Certifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-wrap gap-2">
                                            {employee.certifications.map((cert, i) => (
                                                <Badge key={i} variant="secondary" className="gap-1">
                                                    <Award className="w-3 h-3" />
                                                    {cert}
                                                </Badge>
                                            ))}
                                        </CardContent>
                                    </Card>
                                )}
                            </TabsContent>

                            <TabsContent value="skills" className="space-y-4">
                                {(!employee.skills || employee.skills.length === 0) ? (
                                    <div className="text-center py-8 text-muted-foreground">
                                        <Zap className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                        <p>No skills recorded</p>
                                    </div>
                                ) : (
                                    employee.skills.map((skill) => {
                                        const profConfig = PROFICIENCY_CONFIG[skill.proficiency] || { label: "Unknown", color: "bg-gray-400", value: 0 }
                                        return (
                                            <div key={skill.skillId} className="p-4 rounded-lg bg-secondary/30">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium">{skill.skillName}</span>
                                                        {skill.isVerified && <Badge variant="outline" className="text-[10px]">Verified</Badge>}
                                                    </div>
                                                    <Badge className={cn("text-xs text-white", profConfig.color)}>{profConfig.label}</Badge>
                                                </div>
                                                <Progress value={profConfig.value} className="h-2" />
                                                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                                                    <span>{skill.yearsUsed} years experience</span>
                                                    <span className="capitalize">{skill.category}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                            </TabsContent>

                            <TabsContent value="documents" className="space-y-4">
                                <div className="flex justify-end">
                                    <Button size="sm" className="gap-2" onClick={() => setIsUploadOpen(true)}>
                                        <Upload className="w-4 h-4" /> Upload Document
                                    </Button>
                                </div>
                                {(!localEmployee.documents || localEmployee.documents.length === 0) ? (
                                    <div className="text-center py-8 text-muted-foreground">
                                        <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                        <p>No documents uploaded</p>
                                        <Button className="mt-3" size="sm" onClick={() => setIsUploadOpen(true)}>Upload First Document</Button>
                                    </div>
                                ) : (
                                    localEmployee.documents.map((doc) => {
                                        const Icon = getDocumentIcon(doc.type)
                                        const expiring = isDocumentExpiring(doc)
                                        return (
                                            <div key={doc.id} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                                                <div className={cn("p-2 rounded-lg", expiring ? "bg-destructive/20" : "bg-secondary")}>
                                                    <Icon className={cn("w-5 h-5", expiring && "text-destructive")} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-medium">{doc.name}</p>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <span>Uploaded {formatDate(doc.uploadedAt)}</span>
                                                        {doc.expiresAt && (
                                                            <>
                                                                <span>•</span>
                                                                <span className={expiring ? "text-destructive" : ""}>
                                                                    Expires {formatDate(doc.expiresAt)}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                {expiring && <AlertTriangle className="w-4 h-4 text-destructive" />}
                                                <Button variant="ghost" size="icon" onClick={() => handleDownload(doc.id)}>
                                                    {downloadingId === doc.id ? (
                                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    ) : (
                                                        <Download className="w-4 h-4" />
                                                    )}
                                                </Button>
                                            </div>
                                        )
                                    })
                                )}
                            </TabsContent>

                            <TabsContent value="career" className="space-y-4">
                                {(!employee.careerHistory || employee.careerHistory.length === 0) ? (
                                    <div className="text-center py-8 text-muted-foreground">
                                        <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                        <p>No career history recorded</p>
                                    </div>
                                ) : (
                                    <div className="relative pl-4 border-l-2 border-border">
                                        {employee.careerHistory.map((event) => {
                                            const Icon = getCareerEventIcon(event.type)
                                            return (
                                                <div key={event.id} className="relative pb-6 last:pb-0">
                                                    <div className="absolute -left-[25px] p-1.5 rounded-full bg-primary">
                                                        <Icon className="w-3 h-3 text-primary-foreground" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-xs text-muted-foreground">{formatDate(event.date)}</p>
                                                        <p className="font-medium">{event.title}</p>
                                                        <p className="text-sm text-muted-foreground">{event.details}</p>
                                                        {event.previousValue && event.newValue && (
                                                            <p className="text-xs mt-1">
                                                                <span className="text-muted-foreground line-through">{event.previousValue}</span>
                                                                <ChevronRight className="w-3 h-3 inline mx-1" />
                                                                <span className="text-success">{event.newValue}</span>
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="leave" className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Vacation", data: employee.leaveBalance?.vacation || { total: 0, used: 0, pending: 0 }, color: "bg-blue-500" },
                                        { label: "Sick Leave", data: employee.leaveBalance?.sick || { total: 0, used: 0, pending: 0 }, color: "bg-orange-500" },
                                        { label: "Personal", data: employee.leaveBalance?.personal || { total: 0, used: 0, pending: 0 }, color: "bg-purple-500" },
                                    ].map((leave) => {
                                        const remaining = leave.data.total - leave.data.used - leave.data.pending
                                        const usedPercent = leave.data.total > 0 ? (leave.data.used / leave.data.total) * 100 : 0
                                        return (
                                            <Card key={leave.label}>
                                                <CardContent className="pt-4">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">{leave.label}</span>
                                                        <span className="text-lg font-bold">{remaining}</span>
                                                    </div>
                                                    <Progress value={usedPercent} className="h-2 mb-2" />
                                                    <div className="flex justify-between text-xs text-muted-foreground">
                                                        <span>{leave.data.used} used</span>
                                                        <span>{leave.data.pending} pending</span>
                                                        <span>{leave.data.total} total</span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )
                                    })}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </ScrollArea>
                </div>
            </div>

            {/* Upload Document Dialog */}
            <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Upload className="w-5 h-5 text-primary" />
                            Upload Document
                        </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleUploadDoc} className="space-y-4">
                        <div className="space-y-2">
                            <Label>Document Name <span className="text-destructive">*</span></Label>
                            <Input name="docName" placeholder="e.g., Employment Contract" required className="bg-secondary/50" />
                        </div>
                        <div className="space-y-2">
                            <Label>Document Type</Label>
                            <Select name="docType" defaultValue="other">
                                <SelectTrigger className="bg-secondary/50"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="contract">Contract</SelectItem>
                                    <SelectItem value="nda">NDA</SelectItem>
                                    <SelectItem value="certification">Certification</SelectItem>
                                    <SelectItem value="tax-form">Tax Form</SelectItem>
                                    <SelectItem value="id">ID Document</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>File</Label>
                            <Input type="file" className="bg-secondary/50" />
                            <p className="text-xs text-muted-foreground">PDF, DOC, DOCX, JPG, PNG up to 10MB</p>
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="ghost" onClick={() => setIsUploadOpen(false)}>Cancel</Button>
                            <Button type="submit">Upload</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
