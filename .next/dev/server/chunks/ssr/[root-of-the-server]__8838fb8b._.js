module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
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
"[project]/app/actions/leads.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b7af7a728a58053d82c0719bd5358f3c8101ab05":"getLeads","401d5383e47081c91494cd45cf8d22e4d4ad9916d3":"deleteLead","4065747969c061d4d7a9e303524e3de27bab2ed31c":"createLead","40cfe53c80a5d4042669bf3530e9489a72287afe03":"bulkDeleteLeads","600f7624278dbb6beb64574a6ae5c34061046a7767":"updateLead","603e8b1d30a9ebe86a486e3ec1b0444be644140b35":"addLeadActivity","70a54c7a2555167d68fac2c2907be9214c32fae9b3":"addLeadNote"},"",""] */ __turbopack_context__.s([
    "addLeadActivity",
    ()=>addLeadActivity,
    "addLeadNote",
    ()=>addLeadNote,
    "bulkDeleteLeads",
    ()=>bulkDeleteLeads,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uid$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/uid-generator.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
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
                },
                client: true
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
        const uid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$uid$2d$generator$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNextUid"])("LD");
        const lead = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.create({
            data: {
                ...data,
                uid
            },
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
async function bulkDeleteLeads(ids) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error bulk deleting leads:", error);
        throw new Error("Failed to bulk delete leads");
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
    bulkDeleteLeads,
    addLeadNote,
    addLeadActivity
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeads, "00b7af7a728a58053d82c0719bd5358f3c8101ab05", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLead, "4065747969c061d4d7a9e303524e3de27bab2ed31c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLead, "600f7624278dbb6beb64574a6ae5c34061046a7767", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLead, "401d5383e47081c91494cd45cf8d22e4d4ad9916d3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkDeleteLeads, "40cfe53c80a5d4042669bf3530e9489a72287afe03", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadNote, "70a54c7a2555167d68fac2c2907be9214c32fae9b3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadActivity, "603e8b1d30a9ebe86a486e3ec1b0444be644140b35", null);
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
;
}),
"[project]/.next-internal/server/app/leads/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/leads.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00b7af7a728a58053d82c0719bd5358f3c8101ab05",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeads"],
    "401d5383e47081c91494cd45cf8d22e4d4ad9916d3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLead"],
    "4065747969c061d4d7a9e303524e3de27bab2ed31c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLead"],
    "40cfe53c80a5d4042669bf3530e9489a72287afe03",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bulkDeleteLeads"],
    "600f7624278dbb6beb64574a6ae5c34061046a7767",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLead"],
    "603e8b1d30a9ebe86a486e3ec1b0444be644140b35",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadActivity"],
    "70a54c7a2555167d68fac2c2907be9214c32fae9b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadNote"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$leads$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/leads/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/leads.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/leads.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8838fb8b._.js.map