-- CreateTable
CREATE TABLE "FinanceInvoice" (
    "id" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL DEFAULT '',
    "project" TEXT NOT NULL,
    "projectId" TEXT NOT NULL DEFAULT '',
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "paid" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tax" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "paidDate" TEXT,
    "paymentMethod" TEXT NOT NULL DEFAULT 'Bank Transfer',
    "paymentTerms" TEXT NOT NULL DEFAULT 'Net 30',
    "currency" TEXT NOT NULL DEFAULT 'BDT',
    "items" JSONB NOT NULL DEFAULT '[]',
    "notes" TEXT NOT NULL DEFAULT '',
    "internalNotes" TEXT NOT NULL DEFAULT '',
    "category" TEXT NOT NULL DEFAULT 'development',
    "recurringInvoice" BOOLEAN NOT NULL DEFAULT false,
    "attachments" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinanceInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceIncome" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL DEFAULT '',
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "client" TEXT NOT NULL DEFAULT '',
    "project" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT 'received',
    "entityStatus" TEXT NOT NULL DEFAULT 'active',
    "invoiceId" TEXT,
    "paymentMethod" TEXT NOT NULL DEFAULT 'Bank Transfer',
    "recurring" BOOLEAN NOT NULL DEFAULT false,
    "recurringFrequency" TEXT,
    "taxAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "notes" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinanceIncome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceExpense" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL DEFAULT '',
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "entityStatus" TEXT NOT NULL DEFAULT 'active',
    "recurring" BOOLEAN NOT NULL DEFAULT false,
    "recurringFrequency" TEXT,
    "approvalStatus" TEXT NOT NULL DEFAULT 'pending',
    "approvedBy" TEXT,
    "paymentMethod" TEXT NOT NULL DEFAULT 'Bank Transfer',
    "receiptUrl" TEXT,
    "taxDeductible" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT NOT NULL DEFAULT '',
    "department" TEXT NOT NULL DEFAULT 'general',
    "project" TEXT,
    "sourceType" TEXT NOT NULL DEFAULT 'office',
    "clientId" TEXT,
    "clientName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinanceExpense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FinanceInvoice_invoiceNumber_key" ON "FinanceInvoice"("invoiceNumber");
