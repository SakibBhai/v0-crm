// Finance Types for Invoice and Payment Management

export interface InvoiceItem {
    id: string
    description: string
    quantity: number
    unitPrice: number
    amount: number
}

export interface Invoice {
    id: string
    invoiceNumber: string  // INV-2024-001
    projectId: string
    projectName: string
    clientId: string
    clientName: string
    clientEmail: string
    clientAddress?: string

    // Amounts
    subtotal: number
    taxRate: number
    taxAmount: number
    discount: number
    totalAmount: number
    amountPaid: number
    amountDue: number

    // Status
    status: "draft" | "sent" | "paid" | "partial" | "overdue" | "cancelled"

    // Dates
    issueDate: string
    dueDate: string
    paidDate?: string

    // Items
    items: InvoiceItem[]

    // Notes
    notes?: string
    terms?: string

    // Metadata
    createdAt: string
    updatedAt: string
}

export interface Payment {
    id: string
    invoiceId: string
    invoiceNumber: string
    projectId: string
    projectName: string
    clientName: string

    amount: number
    paymentDate: string
    paymentMethod: "bank_transfer" | "credit_card" | "cash" | "check" | "other"
    transactionId?: string
    notes?: string

    createdAt: string
}

// Status configs for UI
export const INVOICE_STATUS_CONFIG = {
    draft: { label: "Draft", color: "bg-muted text-muted-foreground" },
    sent: { label: "Sent", color: "bg-blue-500/20 text-blue-400" },
    paid: { label: "Paid", color: "bg-green-500/20 text-green-400" },
    partial: { label: "Partial", color: "bg-yellow-500/20 text-yellow-400" },
    overdue: { label: "Overdue", color: "bg-red-500/20 text-red-400" },
    cancelled: { label: "Cancelled", color: "bg-gray-500/20 text-gray-400" },
}

export const PAYMENT_METHOD_CONFIG = {
    bank_transfer: { label: "Bank Transfer", icon: "🏦" },
    credit_card: { label: "Credit Card", icon: "💳" },
    cash: { label: "Cash", icon: "💵" },
    check: { label: "Check", icon: "📝" },
    other: { label: "Other", icon: "📋" },
}
