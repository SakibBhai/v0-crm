// HR & Team Management Types and Interfaces

// ==================== Core Employee Types ====================

export type EmploymentType = "full-time" | "part-time" | "contract" | "freelancer" | "intern"
export type EmployeeStatus = "active" | "on-leave" | "terminated" | "probation"
export type Department = "design" | "development" | "marketing" | "content" | "management" | "hr" | "finance"

export interface EmergencyContact {
    name: string
    relationship: string
    phone: string
    email?: string
}

export interface BankingInfo {
    bankName: string
    accountNumber: string // Last 4 digits only for display
    routingNumber: string
}

export interface EmployeeDocument {
    id: string
    name: string
    type: "contract" | "nda" | "certification" | "tax-form" | "id" | "other"
    fileUrl: string
    uploadedAt: string
    expiresAt?: string
    isExpired?: boolean
}

export interface CareerEvent {
    id: string
    date: string
    type: "hired" | "promotion" | "role-change" | "salary-change" | "department-transfer"
    title: string
    details: string
    previousValue?: string
    newValue?: string
}

export interface Employee {
    id: string
    // Personal Info
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar?: string
    dateOfBirth?: string
    address?: string
    emergencyContacts: EmergencyContact[]

    // Professional Info
    employeeId: string
    jobTitle: string
    department: Department
    employmentType: EmploymentType
    status: EmployeeStatus
    managerId?: string
    managerName?: string
    startDate: string
    endDate?: string
    workLocation: string

    // Compensation
    salary: number
    currency: string
    payFrequency: "weekly" | "bi-weekly" | "monthly"

    // Skills & Experience
    skills: EmployeeSkill[]
    yearsOfExperience: number
    certifications: string[]

    // Performance
    performanceRating: number
    lastReviewDate?: string
    nextReviewDate?: string

    // Documents
    documents: EmployeeDocument[]
    careerHistory: CareerEvent[]

    // Leave
    leaveBalance: LeaveBalance

    // Metadata
    createdAt: string
    updatedAt: string
}

// ==================== Skills & Competencies ====================

export type ProficiencyLevel = "novice" | "intermediate" | "advanced" | "expert"
export type SkillCategory = "technical" | "design" | "soft-skills" | "management" | "tools"

export interface EmployeeSkill {
    skillId: string
    skillName: string
    category: SkillCategory
    proficiency: ProficiencyLevel
    yearsUsed: number
    lastUsed?: string
    isVerified: boolean
}

export interface SkillDefinition {
    id: string
    name: string
    category: SkillCategory
    description: string
    demandLevel: "low" | "medium" | "high" | "critical"
}

// ==================== Recruitment ====================

export type CandidateStage = "applied" | "screening" | "interview" | "offer" | "hired" | "rejected"

export interface Candidate {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    department: Department
    stage: CandidateStage
    source: string
    resumeUrl?: string
    appliedAt: string
    notes: string[]
    interviews: Interview[]
    rating: number
    expectedSalary?: number
    availableFrom?: string
    skills: string[]
}

export interface Interview {
    id: string
    candidateId: string
    interviewerId: string
    interviewerName: string
    scheduledAt: string
    duration: number
    type: "phone" | "video" | "onsite" | "technical"
    status: "scheduled" | "completed" | "cancelled"
    feedback?: string
    rating?: number
}

export interface JobPosting {
    id: string
    title: string
    department: Department
    location: string
    employmentType: EmploymentType
    description: string
    requirements: string[]
    salary?: { min: number; max: number }
    status: "draft" | "active" | "paused" | "filled"
    postedAt?: string
    closesAt?: string
    applicantCount: number
}

// ==================== Onboarding ====================

export type OnboardingTaskCategory = "it" | "hr" | "management" | "training"

export interface OnboardingTask {
    id: string
    title: string
    description: string
    category: OnboardingTaskCategory
    assigneeId: string
    assigneeName: string
    dueDate: string
    status: "pending" | "in-progress" | "completed"
    completedAt?: string
}

export interface OnboardingChecklist {
    employeeId: string
    employeeName: string
    startDate: string
    tasks: OnboardingTask[]
    progress: number
}

// ==================== Attendance & Time ====================

export type AttendanceStatus = "present" | "absent" | "late" | "half-day" | "remote"

export interface TimeEntry {
    id: string
    employeeId: string
    date: string
    clockIn?: string
    clockOut?: string
    breakMinutes: number
    totalHours: number
    status: AttendanceStatus
    location?: string
    notes?: string
}

// Enhanced Attendance Record for daily tracking
export interface AttendanceRecord {
    id: string
    employeeId: string
    employeeName: string
    date: string
    status: AttendanceStatus
    clockIn?: string
    clockOut?: string
    breakMinutes?: number
    totalHours?: number
    workLocation?: "office" | "remote" | "hybrid"
    notes?: string
    markedBy?: string
    markedAt?: string
    isAutoMarked?: boolean
}

export interface AttendanceStats {
    totalWorkingDays: number
    present: number
    absent: number
    late: number
    halfDay: number
    remote: number
    attendancePercentage: number
    onTimePercentage: number
}

export interface LeaveType {
    id: string
    name: string
    color: string
    isPaid: boolean
    requiresApproval: boolean
    maxDaysPerYear?: number
}

export interface LeaveBalance {
    vacation: { total: number; used: number; pending: number }
    sick: { total: number; used: number; pending: number }
    personal: { total: number; used: number; pending: number }
    unpaid: { used: number }
}

export interface LeaveRequest {
    id: string
    employeeId: string
    employeeName: string
    leaveType: "vacation" | "sick" | "personal" | "unpaid" | "parental" | "bereavement"
    startDate: string
    endDate: string
    totalDays: number
    reason: string
    status: "pending" | "approved" | "rejected" | "cancelled"
    approverId?: string
    approverName?: string
    approvedAt?: string
    rejectionReason?: string
    createdAt: string
}

// ==================== Performance & OKRs ====================

export type OKRStatus = "on-track" | "at-risk" | "behind" | "completed"

export interface KeyResult {
    id: string
    title: string
    targetValue: number
    currentValue: number
    unit: string
    progress: number
}

export interface OKR {
    id: string
    employeeId: string
    title: string
    description: string
    quarter: string
    keyResults: KeyResult[]
    overallProgress: number
    status: OKRStatus
    parentOKRId?: string // For cascading
    createdAt: string
    updatedAt: string
}

export interface FeedbackRequest {
    id: string
    employeeId: string
    employeeName: string
    reviewerId: string
    reviewerName: string
    type: "peer" | "manager" | "subordinate" | "self"
    questions: { question: string; answer?: string; rating?: number }[]
    status: "pending" | "completed"
    dueDate: string
    completedAt?: string
}

export interface PerformanceReview {
    id: string
    employeeId: string
    employeeName: string
    reviewerId: string
    reviewerName: string
    period: string
    scheduledDate: string
    status: "scheduled" | "in-progress" | "completed"

    // Ratings
    overallRating: number
    competencyRatings: { competency: string; rating: number; comments: string }[]

    // Feedback
    strengths: string[]
    areasForImprovement: string[]
    goals: string[]

    // Outcome
    salaryChange?: number
    promotionRecommended: boolean
    pipRequired: boolean

    completedAt?: string
}

export interface ImprovementPlan {
    id: string
    employeeId: string
    employeeName: string
    managerId: string
    managerName: string
    reason: string
    startDate: string
    endDate: string
    status: "active" | "completed" | "extended" | "terminated"
    goals: { goal: string; dueDate: string; status: "pending" | "completed" | "missed" }[]
    checkIns: { date: string; notes: string; progress: number }[]
}

// ==================== Learning & Development ====================

export type CourseType = "mandatory" | "optional" | "certification"

export interface TrainingCourse {
    id: string
    title: string
    description: string
    type: CourseType
    category: SkillCategory
    duration: number // hours
    provider: string
    format: "online" | "in-person" | "hybrid"
    certificationExpiry?: number // months
}

export interface CourseEnrollment {
    id: string
    courseId: string
    courseName: string
    employeeId: string
    status: "enrolled" | "in-progress" | "completed" | "failed"
    progress: number
    enrolledAt: string
    completedAt?: string
    score?: number
    certificateUrl?: string
}

// ==================== Payroll & Expenses ====================

export interface PayrollRecord {
    id: string
    employeeId: string
    period: string
    grossPay: number
    deductions: { type: string; amount: number }[]
    netPay: number
    status: "pending" | "processed" | "paid"
    paidAt?: string
}

export interface Expense {
    id: string
    employeeId: string
    employeeName: string
    projectId?: string
    category: "travel" | "software" | "equipment" | "meals" | "other"
    amount: number
    currency: string
    description: string
    receiptUrl?: string
    status: "submitted" | "approved" | "rejected" | "reimbursed"
    submittedAt: string
    approvedAt?: string
}

// ==================== Analytics Metrics ====================

export interface HRMetrics {
    headcount: number
    headcountGrowth: number
    attritionRate: number
    avgTenure: number
    openPositions: number
    timeToHire: number
    diversityMetrics: {
        gender: { male: number; female: number; other: number }
        departments: { name: string; count: number }[]
    }
    performanceDistribution: { rating: string; count: number }[]
}

// ==================== Configuration ====================

export const DEPARTMENT_CONFIG: Record<Department, { label: string; color: string; bgColor: string }> = {
    design: { label: "Design", color: "text-pink-500", bgColor: "bg-pink-500/20" },
    development: { label: "Development", color: "text-blue-500", bgColor: "bg-blue-500/20" },
    marketing: { label: "Marketing", color: "text-green-500", bgColor: "bg-green-500/20" },
    content: { label: "Content", color: "text-purple-500", bgColor: "bg-purple-500/20" },
    management: { label: "Management", color: "text-orange-500", bgColor: "bg-orange-500/20" },
    hr: { label: "HR", color: "text-cyan-500", bgColor: "bg-cyan-500/20" },
    finance: { label: "Finance", color: "text-yellow-500", bgColor: "bg-yellow-500/20" },
}

export const PROFICIENCY_CONFIG: Record<ProficiencyLevel, { label: string; color: string; value: number }> = {
    novice: { label: "Novice", color: "bg-slate-400", value: 25 },
    intermediate: { label: "Intermediate", color: "bg-blue-400", value: 50 },
    advanced: { label: "Advanced", color: "bg-green-400", value: 75 },
    expert: { label: "Expert", color: "bg-purple-400", value: 100 },
}

export const CANDIDATE_STAGE_CONFIG: Record<CandidateStage, { label: string; color: string }> = {
    applied: { label: "Applied", color: "bg-slate-500" },
    screening: { label: "Screening", color: "bg-yellow-500" },
    interview: { label: "Interview", color: "bg-blue-500" },
    offer: { label: "Offer", color: "bg-purple-500" },
    hired: { label: "Hired", color: "bg-green-500" },
    rejected: { label: "Rejected", color: "bg-red-500" },
}

export const ATTENDANCE_STATUS_CONFIG: Record<AttendanceStatus, { label: string; color: string; bgColor: string; icon: string }> = {
    present: { label: "Present", color: "text-green-500", bgColor: "bg-green-500/20", icon: "CheckCircle" },
    absent: { label: "Absent", color: "text-red-500", bgColor: "bg-red-500/20", icon: "XCircle" },
    late: { label: "Late", color: "text-yellow-500", bgColor: "bg-yellow-500/20", icon: "Clock" },
    "half-day": { label: "Half Day", color: "text-orange-500", bgColor: "bg-orange-500/20", icon: "Sun" },
    remote: { label: "Remote", color: "text-blue-500", bgColor: "bg-blue-500/20", icon: "Home" },
}
