module.exports = [
"[project]/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
(()=>{
    const e = new Error("Cannot find module '@prisma/client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/app/actions/leads.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00d34068e0881a00d1d0cf6dc1c99d65b6086ccdf2":"getLeads","407363a46899da33ae41660787e0764038749a4d97":"createLead","40eaa25aa89a845326d17f418cee2b31e6ac2e7bc1":"deleteLead","60121c85583a558d41c8b89313bac9e72b730a4922":"updateLead","60a3c805951cbbef0ebddb6822842070aa5eabc938":"addLeadActivity","70b9793eda0d1301ea624f6a2b15955e59b94de083":"addLeadNote"},"",""] */ __turbopack_context__.s([
    "addLeadActivity",
    ()=>addLeadActivity,
    "addLeadNote",
    ()=>addLeadNote,
    "createLead",
    ()=>createLead,
    "deleteLead",
    ()=>deleteLead,
    "getLeads",
    ()=>getLeads,
    "updateLead",
    ()=>updateLead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getLeads() {
    try {
        const leads = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.findMany({
            include: {
                noteHistory: {
                    orderBy: {
                        createdAt: "desc"
                    }
                },
                activityHistory: {
                    orderBy: {
                        timestamp: "desc"
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return JSON.parse(JSON.stringify(leads));
    } catch (error) {
        console.error("Error fetching leads:", error);
        return [];
    }
}
async function createLead(data) {
    try {
        const lead = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.create({
            data,
            include: {
                noteHistory: true,
                activityHistory: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
        return JSON.parse(JSON.stringify(lead));
    } catch (error) {
        console.error("Error creating lead:", error);
        throw new Error("Failed to create lead");
    }
}
async function updateLead(id, data) {
    try {
        const lead = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.update({
            where: {
                id
            },
            data,
            include: {
                noteHistory: true,
                activityHistory: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
        return JSON.parse(JSON.stringify(lead));
    } catch (error) {
        console.error("Error updating lead:", error);
        throw new Error("Failed to update lead");
    }
}
async function deleteLead(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting lead:", error);
        throw new Error("Failed to delete lead");
    }
}
async function addLeadNote(leadId, content, createdBy) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].noteHistory.create({
            data: {
                content,
                createdBy,
                leadId
            }
        });
        // Update the nextFollowUp on the lead or something if needed,
        // but here we just add activity and note history.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error adding lead note:", error);
        throw new Error("Failed to add note");
    }
}
async function addLeadActivity(leadId, data) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].activityHistory.create({
            data: {
                ...data,
                leadId
            }
        });
        // Increment total activities on the lead automatically
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.update({
            where: {
                id: leadId
            },
            data: {
                activities: {
                    increment: 1
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error adding lead activity:", error);
        throw new Error("Failed to add activity");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getLeads,
    createLead,
    updateLead,
    deleteLead,
    addLeadNote,
    addLeadActivity
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeads, "00d34068e0881a00d1d0cf6dc1c99d65b6086ccdf2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLead, "407363a46899da33ae41660787e0764038749a4d97", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLead, "60121c85583a558d41c8b89313bac9e72b730a4922", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLead, "40eaa25aa89a845326d17f418cee2b31e6ac2e7bc1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadNote, "70b9793eda0d1301ea624f6a2b15955e59b94de083", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadActivity, "60a3c805951cbbef0ebddb6822842070aa5eabc938", null);
}),
"[project]/.next-internal/server/app/leads/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/leads.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/leads.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/leads/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/leads.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00d34068e0881a00d1d0cf6dc1c99d65b6086ccdf2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeads"],
    "407363a46899da33ae41660787e0764038749a4d97",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLead"],
    "40eaa25aa89a845326d17f418cee2b31e6ac2e7bc1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLead"],
    "60121c85583a558d41c8b89313bac9e72b730a4922",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLead"],
    "60a3c805951cbbef0ebddb6822842070aa5eabc938",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadActivity"],
    "70b9793eda0d1301ea624f6a2b15955e59b94de083",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadNote"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$leads$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/leads/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/leads.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/leads.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_35645549._.js.map