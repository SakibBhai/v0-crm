export interface Project {
    id: string
    uid?: string
    name: string
    description: string
    client: string
    projectManager: string
    status: "planning" | "in-progress" | "review" | "completed" | "on-hold"
    priority: "low" | "medium" | "high"
    progress: number
    budget: number
    spent: number
    startDate: string
    dueDate: string
    team: string[]
    tasks: {
        total: number
        completed: number
    }
    category: string
    briefLink?: string
    driveLink?: string
    researchLink?: string
    // Billing
    billingType: "one-time" | "recurring"
    recurringInterval?: "7-days" | "15-days" | "30-days" | "monthly"
    nextBillingDate?: string
    totalBilled: number
    paymentStatus: "pending" | "partial" | "paid" | "overdue"
}
