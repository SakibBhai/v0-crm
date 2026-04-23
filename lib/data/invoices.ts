// Sample Invoice and Payment Data

import type { Invoice, Payment } from "@/lib/types/finance"

export const sampleInvoices: Invoice[] = [
    {
        id: "inv-1",
        invoiceNumber: "INV-2024-001",
        projectId: "1",
        projectName: "E-commerce Redesign",
        clientId: "c1",
        clientName: "TechMart Solutions",
        clientEmail: "billing@techmart.com",
        clientAddress: "123 Tech Street, Silicon Valley, CA 94000",
        subtotal: 18500,
        taxRate: 5,
        taxAmount: 925,
        discount: 0,
        totalAmount: 19425,
        amountPaid: 10000,
        amountDue: 9425,
        status: "partial",
        issueDate: "2024-12-01",
        dueDate: "2024-12-31",
        items: [
            { id: "item-1", description: "Website Design & Development", quantity: 1, unitPrice: 15000, amount: 15000 },
            { id: "item-2", description: "SEO Optimization", quantity: 1, unitPrice: 2500, amount: 2500 },
            { id: "item-3", description: "Content Creation", quantity: 1, unitPrice: 1000, amount: 1000 },
        ],
        notes: "Thank you for your business!",
        terms: "Payment due within 30 days. Late payments subject to 2% monthly interest.",
        createdAt: "2024-12-01T10:00:00Z",
        updatedAt: "2024-12-15T14:30:00Z",
    },
    {
        id: "inv-2",
        invoiceNumber: "INV-2024-002",
        projectId: "2",
        projectName: "SEO Campaign Q4",
        clientId: "c2",
        clientName: "GreenLife Organics",
        clientEmail: "accounts@greenlife.com",
        subtotal: 4000,
        taxRate: 5,
        taxAmount: 200,
        discount: 0,
        totalAmount: 4200,
        amountPaid: 4200,
        amountDue: 0,
        status: "paid",
        issueDate: "2024-12-01",
        dueDate: "2024-12-15",
        paidDate: "2024-12-10",
        items: [
            { id: "item-4", description: "Monthly SEO Retainer - December", quantity: 1, unitPrice: 4000, amount: 4000 },
        ],
        notes: "Recurring monthly invoice for SEO services.",
        createdAt: "2024-12-01T09:00:00Z",
        updatedAt: "2024-12-10T11:00:00Z",
    },
    {
        id: "inv-3",
        invoiceNumber: "INV-2024-003",
        projectId: "3",
        projectName: "Social Media Strategy",
        clientId: "c3",
        clientName: "FoodieHub",
        clientEmail: "finance@foodiehub.com",
        subtotal: 2000,
        taxRate: 5,
        taxAmount: 100,
        discount: 0,
        totalAmount: 2100,
        amountPaid: 2100,
        amountDue: 0,
        status: "paid",
        issueDate: "2024-12-15",
        dueDate: "2024-12-30",
        paidDate: "2024-12-20",
        items: [
            { id: "item-5", description: "Bi-weekly Social Media Management", quantity: 1, unitPrice: 2000, amount: 2000 },
        ],
        createdAt: "2024-12-15T10:00:00Z",
        updatedAt: "2024-12-20T15:00:00Z",
    },
    {
        id: "inv-4",
        invoiceNumber: "INV-2024-004",
        projectId: "5",
        projectName: "Brand Identity Overhaul",
        clientId: "c4",
        clientName: "LuxStay Hotels",
        clientEmail: "ap@luxstay.com",
        clientAddress: "789 Luxury Ave, Miami, FL 33101",
        subtotal: 5250,
        taxRate: 5,
        taxAmount: 262.50,
        discount: 0,
        totalAmount: 5512.50,
        amountPaid: 0,
        amountDue: 5512.50,
        status: "sent",
        issueDate: "2024-12-20",
        dueDate: "2025-01-20",
        items: [
            { id: "item-6", description: "Brand Discovery & Research", quantity: 1, unitPrice: 3000, amount: 3000 },
            { id: "item-7", description: "Initial Concept Development", quantity: 1, unitPrice: 2250, amount: 2250 },
        ],
        notes: "Phase 1 of Brand Identity project.",
        createdAt: "2024-12-20T09:00:00Z",
        updatedAt: "2024-12-20T09:00:00Z",
    },
]

export const samplePayments: Payment[] = [
    {
        id: "pay-1",
        invoiceId: "inv-1",
        invoiceNumber: "INV-2024-001",
        projectId: "1",
        projectName: "E-commerce Redesign",
        clientName: "TechMart Solutions",
        amount: 10000,
        paymentDate: "2024-12-10",
        paymentMethod: "bank_transfer",
        transactionId: "TXN-2024-001",
        notes: "Partial payment - 50% deposit",
        createdAt: "2024-12-10T14:30:00Z",
    },
    {
        id: "pay-2",
        invoiceId: "inv-2",
        invoiceNumber: "INV-2024-002",
        projectId: "2",
        projectName: "SEO Campaign Q4",
        clientName: "GreenLife Organics",
        amount: 4200,
        paymentDate: "2024-12-10",
        paymentMethod: "credit_card",
        transactionId: "TXN-2024-002",
        createdAt: "2024-12-10T11:00:00Z",
    },
    {
        id: "pay-3",
        invoiceId: "inv-3",
        invoiceNumber: "INV-2024-003",
        projectId: "3",
        projectName: "Social Media Strategy",
        clientName: "FoodieHub",
        amount: 2100,
        paymentDate: "2024-12-20",
        paymentMethod: "bank_transfer",
        transactionId: "TXN-2024-003",
        createdAt: "2024-12-20T15:00:00Z",
    },
]

// Helper to generate next invoice number (local fallback, prefer server action for DB-aware generation)
export function generateInvoiceNumber(existingInvoices: Invoice[], projectName?: string): string {
    const now = new Date()
    const dd = String(now.getDate()).padStart(2, "0")
    const mm = String(now.getMonth() + 1).padStart(2, "0")
    const yy = String(now.getFullYear()).slice(-2)
    const datePart = `${dd}${mm}${yy}`

    const initials = projectName
        ? projectName.split(/\s+/).map(w => w.charAt(0).toLowerCase()).join("")
        : "inv"

    const prefix = `${initials}-${datePart}-`
    const matchingCount = existingInvoices.filter(inv => inv.invoiceNumber.startsWith(prefix)).length
    return `${prefix}${matchingCount + 1}`
}
