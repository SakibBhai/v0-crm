"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Receipt,
    Edit,
    Download,
    Send,
    CheckCircle,
    Clock,
    AlertCircle,
    Plus,
    Trash2,
    DollarSign,
    Calendar,
    Building2,
    Mail,
    CreditCard,
    History,
    Save,
    X,
} from "lucide-react"
import type { Invoice, InvoiceItem, Payment } from "@/lib/types/finance"

interface InvoiceDetailDialogProps {
    invoice: Invoice | null
    isOpen: boolean
    onClose: () => void
    onUpdate?: (invoice: Invoice) => void
    onRecordPayment?: (invoiceId: string, amount: number) => void
    payments?: Payment[]
}

const statusConfig = {
    draft: { label: "Draft", color: "bg-muted text-muted-foreground", icon: Clock },
    sent: { label: "Sent", color: "bg-blue-500/20 text-blue-400", icon: Send },
    partial: { label: "Partial", color: "bg-yellow-500/20 text-yellow-400", icon: AlertCircle },
    paid: { label: "Paid", color: "bg-green-500/20 text-green-400", icon: CheckCircle },
    overdue: { label: "Overdue", color: "bg-red-500/20 text-red-400", icon: AlertCircle },
    cancelled: { label: "Cancelled", color: "bg-gray-500/20 text-gray-400", icon: X },
}

export function InvoiceDetailDialog({
    invoice,
    isOpen,
    onClose,
    onUpdate,
    onRecordPayment,
    payments = [],
}: InvoiceDetailDialogProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [showPaymentForm, setShowPaymentForm] = useState(false)
    const [editedInvoice, setEditedInvoice] = useState<Invoice | null>(null)
    const [paymentAmount, setPaymentAmount] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("bank_transfer")
    const [activeTab, setActiveTab] = useState<"details" | "payments">("details")

    if (!invoice) return null

    const StatusIcon = statusConfig[invoice.status].icon
    const invoicePayments = payments.filter(p => p.invoiceId === invoice.id)

    const handleEdit = () => {
        setEditedInvoice({ ...invoice })
        setIsEditing(true)
    }

    const handleSave = () => {
        if (editedInvoice && onUpdate) {
            onUpdate(editedInvoice)
        }
        setIsEditing(false)
    }

    const handleStatusChange = (newStatus: Invoice["status"]) => {
        if (onUpdate) {
            onUpdate({ ...invoice, status: newStatus })
        }
    }

    const handleRecordPayment = () => {
        const amount = parseFloat(paymentAmount)
        if (amount > 0 && onRecordPayment) {
            onRecordPayment(invoice.id, amount)
            setPaymentAmount("")
            setShowPaymentForm(false)
        }
    }

    const handleAddLineItem = () => {
        if (editedInvoice) {
            const newItem: InvoiceItem = {
                id: `item-${Date.now()}`,
                description: "",
                quantity: 1,
                unitPrice: 0,
                amount: 0,
            }
            setEditedInvoice({
                ...editedInvoice,
                items: [...editedInvoice.items, newItem],
            })
        }
    }

    const handleRemoveLineItem = (itemId: string) => {
        if (editedInvoice) {
            setEditedInvoice({
                ...editedInvoice,
                items: editedInvoice.items.filter(item => item.id !== itemId),
            })
        }
    }

    const handleItemChange = (itemId: string, field: keyof InvoiceItem, value: string | number) => {
        if (editedInvoice) {
            const updatedItems = editedInvoice.items.map(item => {
                if (item.id === itemId) {
                    const updated = { ...item, [field]: value }
                    if (field === 'quantity' || field === 'unitPrice') {
                        updated.amount = updated.quantity * updated.unitPrice
                    }
                    return updated
                }
                return item
            })

            const subtotal = updatedItems.reduce((sum, item) => sum + item.amount, 0)
            const taxAmount = subtotal * (editedInvoice.taxRate / 100)
            const totalAmount = subtotal + taxAmount - editedInvoice.discount

            setEditedInvoice({
                ...editedInvoice,
                items: updatedItems,
                subtotal,
                taxAmount,
                totalAmount,
                amountDue: totalAmount - editedInvoice.amountPaid,
            })
        }
    }

    const currentInvoice = isEditing ? editedInvoice! : invoice

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col">
                <DialogHeader className="pb-4 border-b">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Receipt className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <DialogTitle className="text-xl">{currentInvoice.invoiceNumber}</DialogTitle>
                                <p className="text-sm text-muted-foreground">{currentInvoice.projectName}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge className={`${statusConfig[currentInvoice.status].color} border-0 gap-1`}>
                                <StatusIcon className="w-3 h-3" />
                                {statusConfig[currentInvoice.status].label}
                            </Badge>
                            {!isEditing && (
                                <Select value={currentInvoice.status} onValueChange={handleStatusChange}>
                                    <SelectTrigger className="w-[130px] h-8">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="draft">Draft</SelectItem>
                                        <SelectItem value="sent">Sent</SelectItem>
                                        <SelectItem value="partial">Partial</SelectItem>
                                        <SelectItem value="paid">Paid</SelectItem>
                                        <SelectItem value="overdue">Overdue</SelectItem>
                                        <SelectItem value="cancelled">Cancelled</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        </div>
                    </div>
                </DialogHeader>

                {/* Tabs */}
                <div className="flex gap-4 py-2 border-b">
                    <button
                        onClick={() => setActiveTab("details")}
                        className={`text-sm font-medium pb-2 border-b-2 transition-colors ${activeTab === "details" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        Invoice Details
                    </button>
                    <button
                        onClick={() => setActiveTab("payments")}
                        className={`text-sm font-medium pb-2 border-b-2 transition-colors flex items-center gap-1 ${activeTab === "payments" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        <History className="w-4 h-4" />
                        Payment History ({invoicePayments.length})
                    </button>
                </div>

                <ScrollArea className="flex-1 pr-4">
                    {activeTab === "details" ? (
                        <div className="space-y-6 py-4">
                            {/* Client & Dates Info */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-medium flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-muted-foreground" />
                                        Bill To
                                    </h4>
                                    <div className="p-3 rounded-lg bg-secondary/50">
                                        <p className="font-medium">{currentInvoice.clientName}</p>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                            <Mail className="w-3 h-3" />
                                            {currentInvoice.clientEmail}
                                        </p>
                                        {currentInvoice.clientAddress && (
                                            <p className="text-sm text-muted-foreground mt-1">{currentInvoice.clientAddress}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-medium flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-muted-foreground" />
                                        Dates
                                    </h4>
                                    <div className="p-3 rounded-lg bg-secondary/50 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Issue Date:</span>
                                            {isEditing ? (
                                                <Input
                                                    type="date"
                                                    value={editedInvoice?.issueDate}
                                                    onChange={(e) => setEditedInvoice(prev => prev ? { ...prev, issueDate: e.target.value } : null)}
                                                    className="w-32 h-7 text-sm"
                                                />
                                            ) : (
                                                <span>{new Date(currentInvoice.issueDate).toLocaleDateString()}</span>
                                            )}
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Due Date:</span>
                                            {isEditing ? (
                                                <Input
                                                    type="date"
                                                    value={editedInvoice?.dueDate}
                                                    onChange={(e) => setEditedInvoice(prev => prev ? { ...prev, dueDate: e.target.value } : null)}
                                                    className="w-32 h-7 text-sm"
                                                />
                                            ) : (
                                                <span className={currentInvoice.status === 'overdue' ? 'text-red-400' : ''}>
                                                    {new Date(currentInvoice.dueDate).toLocaleDateString()}
                                                </span>
                                            )}
                                        </div>
                                        {currentInvoice.paidDate && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Paid Date:</span>
                                                <span className="text-green-400">{new Date(currentInvoice.paidDate).toLocaleDateString()}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Line Items */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-medium">Line Items</h4>
                                    {isEditing && (
                                        <Button type="button" variant="outline" size="sm" className="gap-1" onClick={handleAddLineItem}>
                                            <Plus className="w-3 h-3" /> Add Item
                                        </Button>
                                    )}
                                </div>
                                <div className="border border-border rounded-lg overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-secondary">
                                            <tr>
                                                <th className="text-left py-2 px-3 font-medium">Description</th>
                                                <th className="text-center py-2 px-3 font-medium w-20">Qty</th>
                                                <th className="text-right py-2 px-3 font-medium w-28">Rate</th>
                                                <th className="text-right py-2 px-3 font-medium w-28">Amount</th>
                                                {isEditing && <th className="w-10"></th>}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentInvoice.items.map((item) => (
                                                <tr key={item.id} className="border-t border-border">
                                                    <td className="py-2 px-3">
                                                        {isEditing ? (
                                                            <Input
                                                                value={item.description}
                                                                onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                                                                className="h-8"
                                                            />
                                                        ) : (
                                                            item.description
                                                        )}
                                                    </td>
                                                    <td className="py-2 px-3 text-center">
                                                        {isEditing ? (
                                                            <Input
                                                                type="number"
                                                                value={item.quantity}
                                                                onChange={(e) => handleItemChange(item.id, 'quantity', parseInt(e.target.value) || 0)}
                                                                className="h-8 text-center w-16 mx-auto"
                                                            />
                                                        ) : (
                                                            item.quantity
                                                        )}
                                                    </td>
                                                    <td className="py-2 px-3 text-right">
                                                        {isEditing ? (
                                                            <Input
                                                                type="number"
                                                                value={item.unitPrice}
                                                                onChange={(e) => handleItemChange(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                                                                className="h-8 text-right w-24 ml-auto"
                                                            />
                                                        ) : (
                                                            `$${item.unitPrice.toLocaleString()}`
                                                        )}
                                                    </td>
                                                    <td className="py-2 px-3 text-right font-medium">${item.amount.toLocaleString()}</td>
                                                    {isEditing && (
                                                        <td className="py-2 px-1">
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="sm"
                                                                className="h-8 w-8 p-0 text-destructive"
                                                                onClick={() => handleRemoveLineItem(item.id)}
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </Button>
                                                        </td>
                                                    )}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Totals */}
                            <div className="flex justify-end">
                                <div className="w-64 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span>${currentInvoice.subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Tax ({currentInvoice.taxRate}%)</span>
                                        <span>${currentInvoice.taxAmount.toLocaleString()}</span>
                                    </div>
                                    {currentInvoice.discount > 0 && (
                                        <div className="flex justify-between text-green-400">
                                            <span>Discount</span>
                                            <span>-${currentInvoice.discount.toLocaleString()}</span>
                                        </div>
                                    )}
                                    <Separator />
                                    <div className="flex justify-between font-semibold text-base">
                                        <span>Total</span>
                                        <span>${currentInvoice.totalAmount.toLocaleString()}</span>
                                    </div>
                                    {currentInvoice.amountPaid > 0 && (
                                        <>
                                            <div className="flex justify-between text-green-400">
                                                <span>Paid</span>
                                                <span>-${currentInvoice.amountPaid.toLocaleString()}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between font-bold text-primary">
                                                <span>Amount Due</span>
                                                <span>${currentInvoice.amountDue.toLocaleString()}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Notes */}
                            {(currentInvoice.notes || isEditing) && (
                                <div className="space-y-2">
                                    <Label>Notes</Label>
                                    {isEditing ? (
                                        <Textarea
                                            value={editedInvoice?.notes || ""}
                                            onChange={(e) => setEditedInvoice(prev => prev ? { ...prev, notes: e.target.value } : null)}
                                            rows={2}
                                        />
                                    ) : (
                                        <p className="text-sm text-muted-foreground p-3 bg-secondary/50 rounded-lg">{currentInvoice.notes}</p>
                                    )}
                                </div>
                            )}

                            {/* Record Payment Section */}
                            {!isEditing && currentInvoice.amountDue > 0 && (
                                <div className="pt-4 border-t">
                                    {showPaymentForm ? (
                                        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 space-y-4">
                                            <h4 className="font-medium text-green-400 flex items-center gap-2">
                                                <CreditCard className="w-4 h-4" />
                                                Record Payment
                                            </h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label>Amount</Label>
                                                    <Input
                                                        type="number"
                                                        placeholder="0.00"
                                                        value={paymentAmount}
                                                        onChange={(e) => setPaymentAmount(e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Method</Label>
                                                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="bank_transfer">🏦 Bank Transfer</SelectItem>
                                                            <SelectItem value="credit_card">💳 Credit Card</SelectItem>
                                                            <SelectItem value="cash">💵 Cash</SelectItem>
                                                            <SelectItem value="check">📝 Check</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button onClick={handleRecordPayment} className="gap-2">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Record Payment
                                                </Button>
                                                <Button variant="outline" onClick={() => setShowPaymentForm(false)}>Cancel</Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <Button variant="outline" className="gap-2 w-full" onClick={() => setShowPaymentForm(true)}>
                                            <DollarSign className="w-4 h-4" />
                                            Record Payment (Due: ${currentInvoice.amountDue.toLocaleString()})
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Payment History Tab */
                        <div className="space-y-4 py-4">
                            {invoicePayments.length > 0 ? (
                                invoicePayments.map((payment) => (
                                    <div key={payment.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-green-500/20">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            </div>
                                            <div>
                                                <p className="font-medium">${payment.amount.toLocaleString()}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {payment.paymentMethod.replace('_', ' ')} • {payment.transactionId || 'No TXN ID'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm">{new Date(payment.paymentDate).toLocaleDateString()}</p>
                                            {payment.notes && <p className="text-xs text-muted-foreground">{payment.notes}</p>}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-muted-foreground">
                                    <History className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                    <p>No payments recorded yet</p>
                                </div>
                            )}
                        </div>
                    )}
                </ScrollArea>

                <DialogFooter className="pt-4 border-t">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1">
                                <Download className="w-4 h-4" />
                                Download PDF
                            </Button>
                            <Button variant="outline" size="sm" className="gap-1">
                                <Send className="w-4 h-4" />
                                Send to Client
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            {isEditing ? (
                                <>
                                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                                    <Button onClick={handleSave} className="gap-1">
                                        <Save className="w-4 h-4" />
                                        Save Changes
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button variant="outline" onClick={onClose}>Close</Button>
                                    <Button onClick={handleEdit} className="gap-1">
                                        <Edit className="w-4 h-4" />
                                        Edit Invoice
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
