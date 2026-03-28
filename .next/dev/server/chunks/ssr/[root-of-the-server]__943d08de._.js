module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/app/actions/finances.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0019334007d7b5b350d792d4b65968f865740e1fac":"getExpenses","00b806c86277ae81385d10ff10374701aad193c9e0":"getInvoices","00c11516774ac473894006350ff1c548435ad069a8":"getIncomeEntries","401795927edd00c5b1ba7a8510c74819dbb1e571ee":"deleteExpense","4048699ca792a5d376bf6351d4479d43449d839f98":"deleteIncome","40b73d6a06e0a79742e72d1b54bad8859d081be674":"createExpense","40be6a50cada39b933e74c648a24f081aa4504accb":"deleteInvoice","40dde16e1dba04640a7c9eaac96b90c338985f4b12":"createInvoice","40fc1248374b3138bf99c0d6eb0f84a2b379efd813":"createIncome","60c7e069c36c613e4c72f7b31f213d5b4e59f00a8a":"updateInvoice","60da63839ea34efb1228b5c52d7ea0db981d6c1cf3":"updateIncome","60f12624c9e3065e2f8ad465698ecb907b68c08aa0":"updateExpense"},"",""] */ __turbopack_context__.s([
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInvoices, "00b806c86277ae81385d10ff10374701aad193c9e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createInvoice, "40dde16e1dba04640a7c9eaac96b90c338985f4b12", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateInvoice, "60c7e069c36c613e4c72f7b31f213d5b4e59f00a8a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteInvoice, "40be6a50cada39b933e74c648a24f081aa4504accb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getIncomeEntries, "00c11516774ac473894006350ff1c548435ad069a8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createIncome, "40fc1248374b3138bf99c0d6eb0f84a2b379efd813", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateIncome, "60da63839ea34efb1228b5c52d7ea0db981d6c1cf3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteIncome, "4048699ca792a5d376bf6351d4479d43449d839f98", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getExpenses, "0019334007d7b5b350d792d4b65968f865740e1fac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createExpense, "40b73d6a06e0a79742e72d1b54bad8859d081be674", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateExpense, "60f12624c9e3065e2f8ad465698ecb907b68c08aa0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteExpense, "401795927edd00c5b1ba7a8510c74819dbb1e571ee", null);
}),
"[project]/.next-internal/server/app/finances/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/finances.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/finances.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/finances/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/finances.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0019334007d7b5b350d792d4b65968f865740e1fac",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExpenses"],
    "00b806c86277ae81385d10ff10374701aad193c9e0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInvoices"],
    "00c11516774ac473894006350ff1c548435ad069a8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIncomeEntries"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$finances$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/finances/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/finances.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/finances.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__943d08de._.js.map