module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/app/actions/finances.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001f2cc61d1a3cdc5c4ec7c2c5f804976de139bc6b":"getIncomeEntries","0023d2ca6c075875538657a15fd0a201a2a8ebde7f":"getInvoices","00ce10b160bfc816bf722d41816cac7494e2fbe9a9":"getExpenses","40012d9eb3ac937a775cc358858529322313e2d6e9":"createInvoice","40165bb4b6abf01586f6d76be1583c7d8d05dbafb1":"deleteInvoice","4047df57c3887abd2d03d0082c24945a664c2b6227":"generateNextInvoiceNumber","407ffaf1611b6a69023aa2c43c979821d785dfe188":"deleteIncome","40ac8211b3adae2e40e7b2b3808f2e6a25873ec011":"deleteExpense","40ba22ecdb455a4d035d31a32afc26fa581a95e3a9":"createExpense","40eac8ef1fa9fa813397a4694807e5316fb5080436":"createIncome","60681ab63302d238d48880fb3e886a1c5704bc6606":"updateInvoice","609fcffc4c262a58c17d69eed4e952f6e91205f0a8":"updateIncome","60e3b45eb872d13293998e83c11ab7a3feb17fff5a":"updateExpense"},"",""] */ __turbopack_context__.s([
    "createExpense",
    ()=>createExpense,
    "createIncome",
    ()=>createIncome,
    "createInvoice",
    ()=>createInvoice,
    "deleteExpense",
    ()=>deleteExpense,
    "deleteIncome",
    ()=>deleteIncome,
    "deleteInvoice",
    ()=>deleteInvoice,
    "generateNextInvoiceNumber",
    ()=>generateNextInvoiceNumber,
    "getExpenses",
    ()=>getExpenses,
    "getIncomeEntries",
    ()=>getIncomeEntries,
    "getInvoices",
    ()=>getInvoices,
    "updateExpense",
    ()=>updateExpense,
    "updateIncome",
    ()=>updateIncome,
    "updateInvoice",
    ()=>updateInvoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
async function generateNextInvoiceNumber(projectName) {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, "0");
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const yy = String(now.getFullYear()).slice(-2);
    const datePart = `${dd}${mm}${yy}`;
    // Derive initials from project name (first char of each word, lowercase)
    const initials = projectName ? projectName.split(/\s+/).map((word)=>word.charAt(0).toLowerCase()).join("") : "inv";
    const prefix = `${initials}-${datePart}-`;
    // Find the last invoice with this prefix to determine the next sequence number
    const matchingInvoices = await prisma.financeInvoice.findMany({
        where: {
            invoiceNumber: {
                startsWith: prefix
            }
        },
        select: {
            invoiceNumber: true
        }
    });
    if (matchingInvoices.length === 0) {
        return `${prefix}1`;
    }
    // Extract the sequence numbers and find the max
    const maxSeq = matchingInvoices.reduce((max, inv)=>{
        const seqStr = inv.invoiceNumber.replace(prefix, "");
        const seq = parseInt(seqStr, 10);
        return isNaN(seq) ? max : Math.max(max, seq);
    }, 0);
    return `${prefix}${maxSeq + 1}`;
}
async function getInvoices() {
    try {
        const invoices = await prisma.financeInvoice.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return invoices.map((inv)=>({
                id: inv.id,
                invoiceNumber: inv.invoiceNumber,
                client: inv.client,
                clientEmail: inv.clientEmail,
                clientLogo: "/placeholder.svg?height=40&width=40",
                project: inv.project,
                projectId: inv.projectId,
                amount: inv.amount,
                paid: inv.paid,
                tax: inv.tax,
                discount: inv.discount,
                status: inv.status,
                dueDate: inv.dueDate,
                issueDate: inv.issueDate,
                paidDate: inv.paidDate,
                paymentMethod: inv.paymentMethod,
                paymentTerms: inv.paymentTerms,
                currency: inv.currency,
                items: inv.items,
                notes: inv.notes,
                internalNotes: inv.internalNotes,
                category: inv.category,
                recurringInvoice: inv.recurringInvoice,
                attachments: inv.attachments
            }));
    } catch (error) {
        console.error("Error fetching invoices:", error);
        return {
            error: "Failed to fetch invoices"
        };
    }
}
async function createInvoice(data) {
    try {
        const invoice = await prisma.financeInvoice.create({
            data: {
                invoiceNumber: data.invoiceNumber,
                client: data.client,
                clientEmail: data.clientEmail || "",
                project: data.project,
                projectId: data.projectId || "",
                amount: data.amount,
                paid: data.paid || 0,
                tax: data.tax,
                discount: data.discount,
                status: data.status,
                dueDate: data.dueDate,
                issueDate: data.issueDate,
                paidDate: data.paidDate || null,
                paymentMethod: data.paymentMethod || "Bank Transfer",
                paymentTerms: data.paymentTerms || "Net 30",
                currency: data.currency || "BDT",
                items: data.items,
                notes: data.notes || "",
                internalNotes: data.internalNotes || "",
                category: data.category || "development",
                recurringInvoice: data.recurringInvoice || false,
                attachments: data.attachments || []
            }
        });
        return {
            ...invoice,
            clientLogo: "/placeholder.svg?height=40&width=40",
            items: invoice.items,
            attachments: invoice.attachments
        };
    } catch (error) {
        console.error("Error creating invoice:", error);
        return {
            error: "Failed to create invoice"
        };
    }
}
async function updateInvoice(id, data) {
    try {
        const invoice = await prisma.financeInvoice.update({
            where: {
                id
            },
            data
        });
        return {
            ...invoice,
            clientLogo: "/placeholder.svg?height=40&width=40",
            items: invoice.items,
            attachments: invoice.attachments
        };
    } catch (error) {
        console.error("Error updating invoice:", error);
        return {
            error: "Failed to update invoice"
        };
    }
}
async function deleteInvoice(id) {
    try {
        await prisma.financeInvoice.delete({
            where: {
                id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting invoice:", error);
        return {
            error: "Failed to delete invoice"
        };
    }
}
async function getIncomeEntries() {
    try {
        const entries = await prisma.financeIncome.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return entries.map((inc)=>({
                id: inc.id,
                description: inc.description,
                category: inc.category,
                subCategory: inc.subCategory,
                amount: inc.amount,
                date: inc.date,
                client: inc.client,
                project: inc.project,
                status: inc.status,
                entityStatus: inc.entityStatus,
                invoiceId: inc.invoiceId || "",
                paymentMethod: inc.paymentMethod,
                recurring: inc.recurring,
                recurringFrequency: inc.recurringFrequency,
                taxAmount: inc.taxAmount,
                notes: inc.notes,
                createdAt: inc.createdAt.toISOString(),
                updatedAt: inc.updatedAt.toISOString(),
                createdBy: "System"
            }));
    } catch (error) {
        console.error("Error fetching income:", error);
        return {
            error: "Failed to fetch income entries"
        };
    }
}
async function createIncome(data) {
    try {
        const income = await prisma.financeIncome.create({
            data: {
                description: data.description,
                category: data.category,
                subCategory: data.subCategory || "",
                amount: data.amount,
                date: data.date,
                client: data.client || "",
                project: data.project || "",
                status: data.status || "received",
                entityStatus: data.entityStatus || "active",
                invoiceId: data.invoiceId || null,
                paymentMethod: data.paymentMethod || "Bank Transfer",
                recurring: data.recurring || false,
                recurringFrequency: data.recurringFrequency || null,
                taxAmount: data.taxAmount || 0,
                notes: data.notes || ""
            }
        });
        return {
            ...income,
            entityStatus: income.entityStatus,
            invoiceId: income.invoiceId || "",
            createdAt: income.createdAt.toISOString(),
            updatedAt: income.updatedAt.toISOString(),
            createdBy: "Current User"
        };
    } catch (error) {
        console.error("Error creating income:", error);
        return {
            error: "Failed to create income entry"
        };
    }
}
async function updateIncome(id, data) {
    try {
        const income = await prisma.financeIncome.update({
            where: {
                id
            },
            data
        });
        return {
            ...income,
            entityStatus: income.entityStatus,
            invoiceId: income.invoiceId || "",
            createdAt: income.createdAt.toISOString(),
            updatedAt: income.updatedAt.toISOString(),
            createdBy: "System"
        };
    } catch (error) {
        console.error("Error updating income:", error);
        return {
            error: "Failed to update income entry"
        };
    }
}
async function deleteIncome(id) {
    try {
        await prisma.financeIncome.delete({
            where: {
                id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting income:", error);
        return {
            error: "Failed to delete income entry"
        };
    }
}
async function getExpenses() {
    try {
        const entries = await prisma.financeExpense.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return entries.map((exp)=>({
                id: exp.id,
                description: exp.description,
                category: exp.category,
                subCategory: exp.subCategory,
                amount: exp.amount,
                date: exp.date,
                vendor: exp.vendor,
                status: exp.status,
                entityStatus: exp.entityStatus,
                recurring: exp.recurring,
                recurringFrequency: exp.recurringFrequency,
                approvalStatus: exp.approvalStatus,
                approvedBy: exp.approvedBy,
                paymentMethod: exp.paymentMethod,
                receiptUrl: exp.receiptUrl,
                taxDeductible: exp.taxDeductible,
                notes: exp.notes,
                department: exp.department,
                project: exp.project,
                sourceType: exp.sourceType,
                clientId: exp.clientId,
                clientName: exp.clientName,
                createdAt: exp.createdAt.toISOString(),
                updatedAt: exp.updatedAt.toISOString(),
                createdBy: "System"
            }));
    } catch (error) {
        console.error("Error fetching expenses:", error);
        return {
            error: "Failed to fetch expenses"
        };
    }
}
async function createExpense(data) {
    try {
        const expense = await prisma.financeExpense.create({
            data: {
                description: data.description,
                category: data.category,
                subCategory: data.subCategory || "",
                amount: data.amount,
                date: data.date,
                vendor: data.vendor,
                status: data.status || "pending",
                entityStatus: data.entityStatus || "active",
                recurring: data.recurring || false,
                recurringFrequency: data.recurringFrequency || null,
                approvalStatus: data.approvalStatus || "pending",
                approvedBy: data.approvedBy || null,
                paymentMethod: data.paymentMethod || "Bank Transfer",
                receiptUrl: data.receiptUrl || null,
                taxDeductible: data.taxDeductible ?? true,
                notes: data.notes || "",
                department: data.department || "general",
                project: data.project || null,
                sourceType: data.sourceType || "office",
                clientId: data.clientId || null,
                clientName: data.clientName || null
            }
        });
        return {
            ...expense,
            entityStatus: expense.entityStatus,
            createdAt: expense.createdAt.toISOString(),
            updatedAt: expense.updatedAt.toISOString(),
            createdBy: "Current User"
        };
    } catch (error) {
        console.error("Error creating expense:", error);
        return {
            error: "Failed to create expense"
        };
    }
}
async function updateExpense(id, data) {
    try {
        const expense = await prisma.financeExpense.update({
            where: {
                id
            },
            data
        });
        return {
            ...expense,
            entityStatus: expense.entityStatus,
            createdAt: expense.createdAt.toISOString(),
            updatedAt: expense.updatedAt.toISOString(),
            createdBy: "System"
        };
    } catch (error) {
        console.error("Error updating expense:", error);
        return {
            error: "Failed to update expense"
        };
    }
}
async function deleteExpense(id) {
    try {
        await prisma.financeExpense.delete({
            where: {
                id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting expense:", error);
        return {
            error: "Failed to delete expense"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateNextInvoiceNumber,
    getInvoices,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    getIncomeEntries,
    createIncome,
    updateIncome,
    deleteIncome,
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateNextInvoiceNumber, "4047df57c3887abd2d03d0082c24945a664c2b6227", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInvoices, "0023d2ca6c075875538657a15fd0a201a2a8ebde7f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createInvoice, "40012d9eb3ac937a775cc358858529322313e2d6e9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateInvoice, "60681ab63302d238d48880fb3e886a1c5704bc6606", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteInvoice, "40165bb4b6abf01586f6d76be1583c7d8d05dbafb1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getIncomeEntries, "001f2cc61d1a3cdc5c4ec7c2c5f804976de139bc6b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createIncome, "40eac8ef1fa9fa813397a4694807e5316fb5080436", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateIncome, "609fcffc4c262a58c17d69eed4e952f6e91205f0a8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteIncome, "407ffaf1611b6a69023aa2c43c979821d785dfe188", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getExpenses, "00ce10b160bfc816bf722d41816cac7494e2fbe9a9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createExpense, "40ba22ecdb455a4d035d31a32afc26fa581a95e3a9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateExpense, "60e3b45eb872d13293998e83c11ab7a3feb17fff5a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteExpense, "40ac8211b3adae2e40e7b2b3808f2e6a25873ec011", null);
}),
"[project]/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/lib/uid-generator.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateNextUid",
    ()=>generateNextUid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
;
async function generateNextUid(prefix) {
    let highestUidStr = "";
    switch(prefix){
        case "LD":
            const lastLead = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.findFirst({
                where: {
                    uid: {
                        startsWith: "LD-"
                    }
                },
                orderBy: {
                    uid: "desc"
                }
            });
            highestUidStr = lastLead?.uid || "";
            break;
        case "CL":
            const lastClient = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].client.findFirst({
                where: {
                    uid: {
                        startsWith: "CL-"
                    }
                },
                orderBy: {
                    uid: "desc"
                }
            });
            highestUidStr = lastClient?.uid || "";
            break;
        case "PJ":
            const lastProject = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.findFirst({
                where: {
                    uid: {
                        startsWith: "PJ-"
                    }
                },
                orderBy: {
                    uid: "desc"
                }
            });
            highestUidStr = lastProject?.uid || "";
            break;
    }
    // If no previous UID, start at 0001
    if (!highestUidStr) {
        return `${prefix}-0001`;
    }
    // Extract the number part from "PRE-0001"
    const numberPart = highestUidStr.split("-")[1];
    if (!numberPart || isNaN(parseInt(numberPart, 10))) {
        // Fallback if parsing fails for some odd reason
        return `${prefix}-0001`;
    }
    const nextNumber = parseInt(numberPart, 10) + 1;
    return `${prefix}-${nextNumber.toString().padStart(4, "0")}`;
}
}),
"[project]/app/actions/clients.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000d2f1e4ec12ffe903b1011f46faa293fa4e84ff8":"getClients","4006757e3793eb3ce983fae506df64065c8af650fc":"deleteClient","408d2c163c7c25de018bd6dde9955396ca8c71b9e0":"createClient","40a820835daf4998f870a2e9f6b648ddf595280dd2":"bulkDeleteClients","6069ed6f887d1c6fa33ac6df8765e5f67cce88fd2d":"updateClient"},"",""] */ __turbopack_context__.s([
    "bulkDeleteClients",
    ()=>bulkDeleteClients,
    "createClient",
    ()=>createClient,
    "deleteClient",
    ()=>deleteClient,
    "getClients",
    ()=>getClients,
    "updateClient",
    ()=>updateClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uid$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/uid-generator.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getClients() {
    try {
        const clients = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].client.findMany({
            include: {
                leads: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return JSON.parse(JSON.stringify(clients));
    } catch (error) {
        console.error("Error fetching clients:", error);
        return [];
    }
}
async function createClient(data) {
    try {
        const uid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uid$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNextUid"])("CL");
        const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].client.create({
            data: {
                ...data,
                uid
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/clients");
        return JSON.parse(JSON.stringify(client));
    } catch (error) {
        console.error("Error creating client:", error);
        throw new Error("Failed to create client");
    }
}
async function updateClient(id, data) {
    try {
        const client = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].client.update({
            where: {
                id
            },
            data
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/clients");
        return JSON.parse(JSON.stringify(client));
    } catch (error) {
        console.error("Error updating client:", error);
        throw new Error("Failed to update client");
    }
}
async function deleteClient(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].client.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/clients");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting client:", error);
        throw new Error("Failed to delete client");
    }
}
async function bulkDeleteClients(ids) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].client.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/clients");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error bulk deleting clients:", error);
        throw new Error("Failed to bulk delete clients");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getClients,
    createClient,
    updateClient,
    deleteClient,
    bulkDeleteClients
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getClients, "000d2f1e4ec12ffe903b1011f46faa293fa4e84ff8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createClient, "408d2c163c7c25de018bd6dde9955396ca8c71b9e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateClient, "6069ed6f887d1c6fa33ac6df8765e5f67cce88fd2d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteClient, "4006757e3793eb3ce983fae506df64065c8af650fc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkDeleteClients, "40a820835daf4998f870a2e9f6b648ddf595280dd2", null);
}),
"[project]/app/actions/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00557496f3cb69a888ce2c209034093fe201211a90":"getProjects","407aa6bfb1c8906b938481be455d8d657fddcb7831":"bulkDeleteProjects","4094b512d7cfac1dc947cd23d90172a1f36ef81309":"getProjectById","40960faf18c05523008ea39fda1c0f66f67675ec17":"deleteProject","40c6caadc2919a99a584a7daf3f4f81f74e7cee4cd":"createProject","6082883b426169117ca3914c978c32ec5c281bffe5":"addProjectDiscussionMessage","60b73bb2002adf0cb4f24778553e415d5797b372b6":"updateProject","60c66677724509665d01447422a5abaed25f4762d7":"addProjectFileLink"},"",""] */ __turbopack_context__.s([
    "addProjectDiscussionMessage",
    ()=>addProjectDiscussionMessage,
    "addProjectFileLink",
    ()=>addProjectFileLink,
    "bulkDeleteProjects",
    ()=>bulkDeleteProjects,
    "createProject",
    ()=>createProject,
    "deleteProject",
    ()=>deleteProject,
    "getProjectById",
    ()=>getProjectById,
    "getProjects",
    ()=>getProjects,
    "updateProject",
    ()=>updateProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uid$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/uid-generator.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getProjects() {
    try {
        const projects = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return JSON.parse(JSON.stringify(projects));
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}
async function getProjectById(id) {
    try {
        const project = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.findUnique({
            where: {
                id
            }
        });
        return project ? JSON.parse(JSON.stringify(project)) : null;
    } catch (error) {
        console.error("Error fetching project:", error);
        return null;
    }
}
async function createProject(data) {
    try {
        const uid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uid$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNextUid"])("PJ");
        const project = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.create({
            data: {
                ...data,
                uid
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/projects");
        return JSON.parse(JSON.stringify(project));
    } catch (error) {
        console.error("Error creating project:", error);
        throw new Error("Failed to create project");
    }
}
async function updateProject(id, data) {
    try {
        const project = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.update({
            where: {
                id
            },
            data
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/projects");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/projects/${id}`);
        return JSON.parse(JSON.stringify(project));
    } catch (error) {
        console.error("Error updating project:", error);
        throw new Error("Failed to update project");
    }
}
async function deleteProject(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/projects");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting project:", error);
        throw new Error("Failed to delete project");
    }
}
async function bulkDeleteProjects(ids) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/projects");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error bulk deleting projects:", error);
        throw new Error("Failed to bulk delete projects");
    }
}
async function addProjectFileLink(projectId, fileData) {
    try {
        const project = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.findUnique({
            where: {
                id: projectId
            }
        });
        if (!project) throw new Error("Project not found");
        const files = Array.isArray(project.files) ? [
            ...project.files
        ] : [];
        files.push(fileData);
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.update({
            where: {
                id: projectId
            },
            data: {
                files
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/projects/${projectId}`);
        return JSON.parse(JSON.stringify(updated));
    } catch (error) {
        console.error("Error adding file link:", error);
        return {
            error: "Failed to add file link"
        };
    }
}
async function addProjectDiscussionMessage(projectId, messageData) {
    try {
        const project = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.findUnique({
            where: {
                id: projectId
            }
        });
        if (!project) throw new Error("Project not found");
        const discussions = Array.isArray(project.discussions) ? [
            ...project.discussions
        ] : [];
        discussions.push(messageData);
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.update({
            where: {
                id: projectId
            },
            data: {
                discussions
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/projects/${projectId}`);
        return JSON.parse(JSON.stringify(updated));
    } catch (error) {
        console.error("Error adding discussion message:", error);
        return {
            error: "Failed to add discussion message"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
    bulkDeleteProjects,
    addProjectFileLink,
    addProjectDiscussionMessage
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProjects, "00557496f3cb69a888ce2c209034093fe201211a90", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProjectById, "4094b512d7cfac1dc947cd23d90172a1f36ef81309", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProject, "40c6caadc2919a99a584a7daf3f4f81f74e7cee4cd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProject, "60b73bb2002adf0cb4f24778553e415d5797b372b6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProject, "40960faf18c05523008ea39fda1c0f66f67675ec17", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkDeleteProjects, "407aa6bfb1c8906b938481be455d8d657fddcb7831", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProjectFileLink, "60c66677724509665d01447422a5abaed25f4762d7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProjectDiscussionMessage, "6082883b426169117ca3914c978c32ec5c281bffe5", null);
}),
"[project]/.next-internal/server/app/finances/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/finances.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/clients.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/projects.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/finances.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$clients$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/clients.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/projects.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/finances/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/finances.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/clients.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/projects.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000d2f1e4ec12ffe903b1011f46faa293fa4e84ff8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$clients$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClients"],
    "001f2cc61d1a3cdc5c4ec7c2c5f804976de139bc6b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIncomeEntries"],
    "0023d2ca6c075875538657a15fd0a201a2a8ebde7f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInvoices"],
    "00557496f3cb69a888ce2c209034093fe201211a90",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjects"],
    "00ce10b160bfc816bf722d41816cac7494e2fbe9a9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExpenses"],
    "40012d9eb3ac937a775cc358858529322313e2d6e9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInvoice"],
    "40165bb4b6abf01586f6d76be1583c7d8d05dbafb1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteInvoice"],
    "4047df57c3887abd2d03d0082c24945a664c2b6227",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNextInvoiceNumber"],
    "40ba22ecdb455a4d035d31a32afc26fa581a95e3a9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createExpense"],
    "40eac8ef1fa9fa813397a4694807e5316fb5080436",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createIncome"],
    "60681ab63302d238d48880fb3e886a1c5704bc6606",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInvoice"],
    "609fcffc4c262a58c17d69eed4e952f6e91205f0a8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateIncome"],
    "60e3b45eb872d13293998e83c11ab7a3feb17fff5a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateExpense"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$finances$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$clients$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/finances/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/finances.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/clients.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/actions/projects.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/finances.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$clients$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/clients.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/projects.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__965087ce._.js.map