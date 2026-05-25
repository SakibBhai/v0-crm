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

/* __next_internal_action_entry_do_not_use__ [{"00b7af7a728a58053d82c0719bd5358f3c8101ab05":"getLeads","401d5383e47081c91494cd45cf8d22e4d4ad9916d3":"deleteLead","4022fa3411f042fe0d26597db9d10a504d46c23a36":"getLeadFollowUps","4065747969c061d4d7a9e303524e3de27bab2ed31c":"createLead","40cfe53c80a5d4042669bf3530e9489a72287afe03":"bulkDeleteLeads","600f7624278dbb6beb64574a6ae5c34061046a7767":"updateLead","603e8b1d30a9ebe86a486e3ec1b0444be644140b35":"addLeadActivity","60ec7612d5ffd7e200b87716c34206083c5fac1eb8":"updateLeadFollowUp","70a54c7a2555167d68fac2c2907be9214c32fae9b3":"addLeadNote","70a7410717fd41fef5a6f6ca5d77729f09225368ff":"addLeadFollowUp"},"",""] */ __turbopack_context__.s([
    "addLeadActivity",
    ()=>addLeadActivity,
    "addLeadFollowUp",
    ()=>addLeadFollowUp,
    "addLeadNote",
    ()=>addLeadNote,
    "bulkDeleteLeads",
    ()=>bulkDeleteLeads,
    "createLead",
    ()=>createLead,
    "deleteLead",
    ()=>deleteLead,
    "getLeadFollowUps",
    ()=>getLeadFollowUps,
    "getLeads",
    ()=>getLeads,
    "updateLead",
    ()=>updateLead,
    "updateLeadFollowUp",
    ()=>updateLeadFollowUp
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
                followUps: {
                    orderBy: {
                        date: "desc"
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
                activityHistory: true,
                followUps: true
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
                activityHistory: true,
                followUps: {
                    orderBy: {
                        date: "desc"
                    }
                }
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
async function addLeadFollowUp(leadId, date, notes = "") {
    try {
        // Create the follow-up record
        const followUp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].leadFollowUp.create({
            data: {
                date,
                notes,
                status: "scheduled",
                leadId
            }
        });
        // Update the lead's nextFollowUp to this new date
        // (always set to the latest scheduled follow-up)
        const latestFollowUp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].leadFollowUp.findFirst({
            where: {
                leadId,
                status: "scheduled"
            },
            orderBy: {
                date: "desc"
            }
        });
        if (latestFollowUp) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.update({
                where: {
                    id: leadId
                },
                data: {
                    nextFollowUp: latestFollowUp.date
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
        return JSON.parse(JSON.stringify(followUp));
    } catch (error) {
        console.error("Error adding follow-up:", error);
        throw new Error("Failed to add follow-up");
    }
}
async function updateLeadFollowUp(followUpId, data) {
    try {
        const followUp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].leadFollowUp.update({
            where: {
                id: followUpId
            },
            data
        });
        // Re-calculate the lead's nextFollowUp
        const latestScheduled = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].leadFollowUp.findFirst({
            where: {
                leadId: followUp.leadId,
                status: "scheduled"
            },
            orderBy: {
                date: "asc"
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].lead.update({
            where: {
                id: followUp.leadId
            },
            data: {
                nextFollowUp: latestScheduled?.date || ""
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/leads");
        return JSON.parse(JSON.stringify(followUp));
    } catch (error) {
        console.error("Error updating follow-up:", error);
        throw new Error("Failed to update follow-up");
    }
}
async function getLeadFollowUps(leadId) {
    try {
        const followUps = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].leadFollowUp.findMany({
            where: {
                leadId
            },
            orderBy: {
                date: "desc"
            }
        });
        return JSON.parse(JSON.stringify(followUps));
    } catch (error) {
        console.error("Error fetching follow-ups:", error);
        return [];
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
    addLeadActivity,
    addLeadFollowUp,
    updateLeadFollowUp,
    getLeadFollowUps
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeads, "00b7af7a728a58053d82c0719bd5358f3c8101ab05", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLead, "4065747969c061d4d7a9e303524e3de27bab2ed31c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLead, "600f7624278dbb6beb64574a6ae5c34061046a7767", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLead, "401d5383e47081c91494cd45cf8d22e4d4ad9916d3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkDeleteLeads, "40cfe53c80a5d4042669bf3530e9489a72287afe03", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadNote, "70a54c7a2555167d68fac2c2907be9214c32fae9b3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadActivity, "603e8b1d30a9ebe86a486e3ec1b0444be644140b35", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadFollowUp, "70a7410717fd41fef5a6f6ca5d77729f09225368ff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeadFollowUp, "60ec7612d5ffd7e200b87716c34206083c5fac1eb8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadFollowUps, "4022fa3411f042fe0d26597db9d10a504d46c23a36", null);
}),
"[project]/app/actions/team.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"002033f65a96c113cce9e036d21d1735c4a450c29a":"getOKRs","002f0d31544efd61e4c822e8ca3109fa91976494ed":"getCourseEnrollments","006c15662f8d832656bf258658ad0cbfddaeae3e82":"getTrainingCourses","006d0908b33b2d2fae83f80b24e2976719b86f9f7b":"getAttendanceRecords","00c8d77482fcc143b5e52c65281b1361276c5e7705":"getPerformanceReviews","00de1d304a4cf2a3d56cdde0ec379e9011c1baa53e":"getEmployees","00e4ba81dab7f4b11433289ba729068cae1b878270":"getHolidays","00f20eae3936d1761eaf95ac40d34ab6906754fbd7":"getCandidates","00f7e66041fc6d188791cd4e39e656395e438edaa5":"getLeaveRequests","402b04ba65e1e67d0c09542d25e49e01bbbc614e23":"createCandidate","403b033ca65ab3068c33676f08698bfcfd7a188f75":"deleteEmployee","403b4c6fa0f5fd924caab69231abf46a27b7ab2d8c":"createCourseEnrollment","40423ba8fec0c20970048fbbb227d7c84e32c2b6d8":"createTrainingCourse","406db859e9887d626aaed6d2e8fe23355699b91bd5":"createOKR","40a970283b5da3113f4d40e217548f054780213345":"createPerformanceReview","40b542b73cb165e7f4dedd13b5cd4a1ab111a48731":"createLeaveRequest","40d4e2c4be3536b88001b880817e4ef169731b7fc9":"createHoliday","40e0a27b4e19835ebdc62a06c722eefd646ed47095":"createAttendanceRecord","40f107ca4f0df93c85b5749c379732f6d1f0505165":"createEmployee","40f9d4136bcd39d327ab049ff12934973de30e8ed9":"deleteHoliday","60209b3c9c219808015f0d81e20bf99d853155c919":"updateOKR","607d2808b971d3808b8023b89960aba0c90d7a4339":"updateCandidate","60a9725d494e0e8cd3b44e257da7fcda8687560c33":"updateCourseEnrollment","60baffca2193e19bc332847ccd3dda8e421942ee7f":"updateEmployee","60e8d25089914f407debeb4671288e4f53c05b8f97":"updateLeaveRequest","60ea1b216a7777f4755ea653714d5e7405d69b51f2":"updateAttendanceRecord","60fa0205f59fc7726d7f9ba91e8a04dc70efdd3226":"updatePerformanceReview"},"",""] */ __turbopack_context__.s([
    "createAttendanceRecord",
    ()=>createAttendanceRecord,
    "createCandidate",
    ()=>createCandidate,
    "createCourseEnrollment",
    ()=>createCourseEnrollment,
    "createEmployee",
    ()=>createEmployee,
    "createHoliday",
    ()=>createHoliday,
    "createLeaveRequest",
    ()=>createLeaveRequest,
    "createOKR",
    ()=>createOKR,
    "createPerformanceReview",
    ()=>createPerformanceReview,
    "createTrainingCourse",
    ()=>createTrainingCourse,
    "deleteEmployee",
    ()=>deleteEmployee,
    "deleteHoliday",
    ()=>deleteHoliday,
    "getAttendanceRecords",
    ()=>getAttendanceRecords,
    "getCandidates",
    ()=>getCandidates,
    "getCourseEnrollments",
    ()=>getCourseEnrollments,
    "getEmployees",
    ()=>getEmployees,
    "getHolidays",
    ()=>getHolidays,
    "getLeaveRequests",
    ()=>getLeaveRequests,
    "getOKRs",
    ()=>getOKRs,
    "getPerformanceReviews",
    ()=>getPerformanceReviews,
    "getTrainingCourses",
    ()=>getTrainingCourses,
    "updateAttendanceRecord",
    ()=>updateAttendanceRecord,
    "updateCandidate",
    ()=>updateCandidate,
    "updateCourseEnrollment",
    ()=>updateCourseEnrollment,
    "updateEmployee",
    ()=>updateEmployee,
    "updateLeaveRequest",
    ()=>updateLeaveRequest,
    "updateOKR",
    ()=>updateOKR,
    "updatePerformanceReview",
    ()=>updatePerformanceReview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getEmployees() {
    try {
        const employees = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamEmployee.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return employees.map((e)=>({
                id: e.id,
                firstName: e.firstName,
                lastName: e.lastName,
                email: e.email,
                phone: e.phone,
                employeeId: e.employeeId,
                jobTitle: e.jobTitle,
                department: e.department,
                employmentType: e.employmentType,
                status: e.status,
                managerId: e.managerId || undefined,
                managerName: e.managerName || undefined,
                startDate: e.startDate,
                endDate: e.endDate || undefined,
                workLocation: e.workLocation,
                salary: e.salary,
                currency: e.currency,
                payFrequency: e.payFrequency,
                skills: e.skills,
                yearsOfExperience: e.yearsOfExperience,
                certifications: e.certifications,
                performanceRating: e.performanceRating,
                documents: e.documents,
                careerHistory: e.careerHistory,
                emergencyContacts: e.emergencyContacts,
                leaveBalance: e.leaveBalance,
                createdAt: e.createdAt.toISOString(),
                updatedAt: e.updatedAt.toISOString()
            }));
    } catch (error) {
        console.error("Error fetching employees:", error);
        return {
            error: "Failed to fetch employees"
        };
    }
}
async function createEmployee(data) {
    try {
        const employee = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamEmployee.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone || "",
                employeeId: data.employeeId,
                jobTitle: data.jobTitle,
                department: data.department,
                employmentType: data.employmentType || "full-time",
                status: data.status || "active",
                managerId: data.managerId || null,
                managerName: data.managerName || null,
                startDate: data.startDate,
                workLocation: data.workLocation || "Remote",
                salary: data.salary || 0,
                currency: data.currency || "BDT",
                payFrequency: data.payFrequency || "monthly",
                skills: data.skills || [],
                yearsOfExperience: data.yearsOfExperience || 0,
                certifications: data.certifications || [],
                performanceRating: data.performanceRating || 0,
                documents: data.documents || [],
                careerHistory: data.careerHistory || [],
                emergencyContacts: data.emergencyContacts || [],
                leaveBalance: data.leaveBalance || {}
            }
        });
        return {
            ...employee,
            managerId: employee.managerId || undefined,
            managerName: employee.managerName || undefined,
            endDate: employee.endDate || undefined,
            skills: employee.skills,
            certifications: employee.certifications,
            documents: employee.documents,
            careerHistory: employee.careerHistory,
            emergencyContacts: employee.emergencyContacts,
            leaveBalance: employee.leaveBalance,
            createdAt: employee.createdAt.toISOString(),
            updatedAt: employee.updatedAt.toISOString()
        };
    } catch (error) {
        console.error("Error creating employee:", error);
        return {
            error: "Failed to create employee"
        };
    }
}
async function updateEmployee(id, data) {
    try {
        const employee = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamEmployee.update({
            where: {
                id
            },
            data
        });
        return {
            ...employee,
            managerId: employee.managerId || undefined,
            managerName: employee.managerName || undefined,
            endDate: employee.endDate || undefined,
            skills: employee.skills,
            certifications: employee.certifications,
            documents: employee.documents,
            careerHistory: employee.careerHistory,
            emergencyContacts: employee.emergencyContacts,
            leaveBalance: employee.leaveBalance,
            createdAt: employee.createdAt.toISOString(),
            updatedAt: employee.updatedAt.toISOString()
        };
    } catch (error) {
        console.error("Error updating employee:", error);
        return {
            error: "Failed to update employee"
        };
    }
}
async function deleteEmployee(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamEmployee.delete({
            where: {
                id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting employee:", error);
        return {
            error: "Failed to delete employee"
        };
    }
}
async function getCandidates() {
    try {
        const candidates = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamCandidate.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return candidates.map((c)=>({
                id: c.id,
                firstName: c.firstName,
                lastName: c.lastName,
                email: c.email,
                phone: c.phone,
                position: c.position,
                department: c.department,
                stage: c.stage,
                source: c.source,
                appliedAt: c.appliedAt,
                notes: c.notes,
                interviews: c.interviews,
                rating: c.rating,
                expectedSalary: c.expectedSalary || undefined,
                availableFrom: c.availableFrom || undefined,
                skills: c.skills
            }));
    } catch (error) {
        console.error("Error fetching candidates:", error);
        return {
            error: "Failed to fetch candidates"
        };
    }
}
async function createCandidate(data) {
    try {
        const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamCandidate.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone || "",
                position: data.position,
                department: data.department,
                stage: data.stage || "applied",
                source: data.source || "",
                appliedAt: data.appliedAt,
                skills: data.skills || [],
                expectedSalary: data.expectedSalary || null,
                availableFrom: data.availableFrom || null
            }
        });
        return {
            ...candidate,
            notes: candidate.notes,
            interviews: candidate.interviews,
            expectedSalary: candidate.expectedSalary || undefined,
            availableFrom: candidate.availableFrom || undefined,
            skills: candidate.skills
        };
    } catch (error) {
        console.error("Error creating candidate:", error);
        return {
            error: "Failed to create candidate"
        };
    }
}
async function updateCandidate(id, data) {
    try {
        const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamCandidate.update({
            where: {
                id
            },
            data
        });
        return {
            ...candidate,
            notes: candidate.notes,
            interviews: candidate.interviews,
            expectedSalary: candidate.expectedSalary || undefined,
            availableFrom: candidate.availableFrom || undefined,
            skills: candidate.skills
        };
    } catch (error) {
        console.error("Error updating candidate:", error);
        return {
            error: "Failed to update candidate"
        };
    }
}
async function getLeaveRequests() {
    try {
        const requests = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamLeaveRequest.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return requests.map((r)=>({
                id: r.id,
                employeeId: r.employeeId,
                employeeName: r.employeeName,
                leaveType: r.leaveType,
                startDate: r.startDate,
                endDate: r.endDate,
                totalDays: r.totalDays,
                reason: r.reason,
                status: r.status,
                approverId: r.approverId || undefined,
                approverName: r.approverName || undefined,
                approvedAt: r.approvedAt || undefined,
                rejectionReason: r.rejectionReason || undefined,
                createdAt: r.createdAt.toISOString()
            }));
    } catch (error) {
        console.error("Error fetching leave requests:", error);
        return {
            error: "Failed to fetch leave requests"
        };
    }
}
async function createLeaveRequest(data) {
    try {
        const request = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamLeaveRequest.create({
            data: {
                employeeId: data.employeeId,
                employeeName: data.employeeName,
                leaveType: data.leaveType,
                startDate: data.startDate,
                endDate: data.endDate,
                totalDays: data.totalDays,
                reason: data.reason,
                status: "pending"
            }
        });
        return {
            ...request,
            leaveType: request.leaveType,
            status: request.status,
            approverId: request.approverId || undefined,
            approverName: request.approverName || undefined,
            approvedAt: request.approvedAt || undefined,
            rejectionReason: request.rejectionReason || undefined,
            createdAt: request.createdAt.toISOString()
        };
    } catch (error) {
        console.error("Error creating leave request:", error);
        return {
            error: "Failed to create leave request"
        };
    }
}
async function updateLeaveRequest(id, data) {
    try {
        const request = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamLeaveRequest.update({
            where: {
                id
            },
            data
        });
        return {
            ...request,
            leaveType: request.leaveType,
            status: request.status,
            approverId: request.approverId || undefined,
            approverName: request.approverName || undefined,
            approvedAt: request.approvedAt || undefined,
            rejectionReason: request.rejectionReason || undefined,
            createdAt: request.createdAt.toISOString()
        };
    } catch (error) {
        console.error("Error updating leave request:", error);
        return {
            error: "Failed to update leave request"
        };
    }
}
async function getAttendanceRecords() {
    try {
        const records = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamAttendanceRecord.findMany({
            orderBy: {
                markedAt: "desc"
            }
        });
        return records.map((r)=>({
                id: r.id,
                employeeId: r.employeeId,
                employeeName: r.employeeName,
                date: r.date,
                status: r.status,
                clockIn: r.clockIn || undefined,
                clockOut: r.clockOut || undefined,
                breakMinutes: r.breakMinutes || undefined,
                totalHours: r.totalHours || undefined,
                workLocation: r.workLocation || undefined,
                notes: r.notes || undefined,
                markedAt: r.markedAt.toISOString()
            }));
    } catch (error) {
        console.error("Error fetching attendance records:", error);
        return {
            error: "Failed to fetch attendance records"
        };
    }
}
async function createAttendanceRecord(data) {
    try {
        const record = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamAttendanceRecord.upsert({
            where: {
                employeeId_date: {
                    employeeId: data.employeeId,
                    date: data.date
                }
            },
            update: {
                status: data.status,
                clockIn: data.clockIn || null,
                clockOut: data.clockOut || null,
                breakMinutes: data.breakMinutes || null,
                totalHours: data.totalHours || null,
                workLocation: data.workLocation || null,
                notes: data.notes || null,
                markedAt: new Date()
            },
            create: {
                employeeId: data.employeeId,
                employeeName: data.employeeName,
                date: data.date,
                status: data.status,
                clockIn: data.clockIn || null,
                clockOut: data.clockOut || null,
                breakMinutes: data.breakMinutes || null,
                totalHours: data.totalHours || null,
                workLocation: data.workLocation || null,
                notes: data.notes || null
            }
        });
        return {
            ...record,
            status: record.status,
            clockIn: record.clockIn || undefined,
            clockOut: record.clockOut || undefined,
            breakMinutes: record.breakMinutes || undefined,
            totalHours: record.totalHours || undefined,
            workLocation: record.workLocation || undefined,
            notes: record.notes || undefined,
            markedAt: record.markedAt.toISOString()
        };
    } catch (error) {
        console.error("Error creating attendance record:", error);
        return {
            error: "Failed to create attendance record"
        };
    }
}
async function updateAttendanceRecord(id, data) {
    try {
        const record = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamAttendanceRecord.update({
            where: {
                id
            },
            data
        });
        return {
            ...record,
            status: record.status,
            clockIn: record.clockIn || undefined,
            clockOut: record.clockOut || undefined,
            breakMinutes: record.breakMinutes || undefined,
            totalHours: record.totalHours || undefined,
            workLocation: record.workLocation || undefined,
            notes: record.notes || undefined,
            markedAt: record.markedAt.toISOString()
        };
    } catch (error) {
        console.error("Error updating attendance record:", error);
        return {
            error: "Failed to update attendance record"
        };
    }
}
async function getOKRs() {
    try {
        const okrs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamOKR.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return okrs.map((o)=>({
                id: o.id,
                employeeId: o.employeeId,
                title: o.title,
                description: o.description,
                quarter: o.quarter,
                keyResults: o.keyResults,
                overallProgress: o.overallProgress,
                status: o.status,
                parentOKRId: o.parentOKRId || undefined,
                createdAt: o.createdAt.toISOString(),
                updatedAt: o.updatedAt.toISOString()
            }));
    } catch (error) {
        console.error("Error fetching OKRs:", error);
        return {
            error: "Failed to fetch OKRs"
        };
    }
}
async function createOKR(data) {
    try {
        const okr = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamOKR.create({
            data: {
                employeeId: data.employeeId,
                title: data.title,
                description: data.description || "",
                quarter: data.quarter,
                keyResults: data.keyResults || [],
                overallProgress: data.overallProgress || 0,
                status: data.status || "on-track",
                parentOKRId: data.parentOKRId || null
            }
        });
        return {
            ...okr,
            keyResults: okr.keyResults,
            status: okr.status,
            parentOKRId: okr.parentOKRId || undefined,
            createdAt: okr.createdAt.toISOString(),
            updatedAt: okr.updatedAt.toISOString()
        };
    } catch (error) {
        console.error("Error creating OKR:", error);
        return {
            error: "Failed to create OKR"
        };
    }
}
async function updateOKR(id, data) {
    try {
        const okr = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamOKR.update({
            where: {
                id
            },
            data
        });
        return {
            ...okr,
            keyResults: okr.keyResults,
            status: okr.status,
            parentOKRId: okr.parentOKRId || undefined,
            createdAt: okr.createdAt.toISOString(),
            updatedAt: okr.updatedAt.toISOString()
        };
    } catch (error) {
        console.error("Error updating OKR:", error);
        return {
            error: "Failed to update OKR"
        };
    }
}
async function getPerformanceReviews() {
    try {
        const reviews = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamPerformanceReview.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return reviews.map((r)=>({
                id: r.id,
                employeeId: r.employeeId,
                employeeName: r.employeeName,
                reviewerId: r.reviewerId,
                reviewerName: r.reviewerName,
                period: r.period,
                scheduledDate: r.scheduledDate,
                status: r.status,
                overallRating: r.overallRating,
                competencyRatings: r.competencyRatings,
                strengths: r.strengths,
                areasForImprovement: r.areasForImprovement,
                goals: r.goals,
                salaryChange: r.salaryChange || undefined,
                promotionRecommended: r.promotionRecommended,
                pipRequired: r.pipRequired,
                completedAt: r.completedAt || undefined
            }));
    } catch (error) {
        console.error("Error fetching performance reviews:", error);
        return {
            error: "Failed to fetch performance reviews"
        };
    }
}
async function createPerformanceReview(data) {
    try {
        const review = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamPerformanceReview.create({
            data: {
                employeeId: data.employeeId,
                employeeName: data.employeeName,
                reviewerId: data.reviewerId,
                reviewerName: data.reviewerName,
                period: data.period,
                scheduledDate: data.scheduledDate,
                status: data.status || "scheduled",
                overallRating: data.overallRating || 0,
                competencyRatings: data.competencyRatings || [],
                strengths: data.strengths || [],
                areasForImprovement: data.areasForImprovement || [],
                goals: data.goals || [],
                salaryChange: data.salaryChange || null,
                promotionRecommended: data.promotionRecommended || false,
                pipRequired: data.pipRequired || false,
                completedAt: data.completedAt || null
            }
        });
        return {
            ...review,
            competencyRatings: review.competencyRatings,
            strengths: review.strengths,
            areasForImprovement: review.areasForImprovement,
            goals: review.goals,
            salaryChange: review.salaryChange || undefined,
            completedAt: review.completedAt || undefined
        };
    } catch (error) {
        console.error("Error creating performance review:", error);
        return {
            error: "Failed to create performance review"
        };
    }
}
async function updatePerformanceReview(id, data) {
    try {
        const review = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamPerformanceReview.update({
            where: {
                id
            },
            data
        });
        return {
            ...review,
            competencyRatings: review.competencyRatings,
            strengths: review.strengths,
            areasForImprovement: review.areasForImprovement,
            goals: review.goals,
            salaryChange: review.salaryChange || undefined,
            completedAt: review.completedAt || undefined
        };
    } catch (error) {
        console.error("Error updating performance review:", error);
        return {
            error: "Failed to update performance review"
        };
    }
}
async function getTrainingCourses() {
    try {
        const courses = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamTrainingCourse.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return courses.map((c)=>({
                id: c.id,
                title: c.title,
                description: c.description,
                type: c.type,
                category: c.category,
                duration: c.duration,
                provider: c.provider,
                format: c.format,
                certificationExpiry: c.certificationExpiry || undefined
            }));
    } catch (error) {
        console.error("Error fetching training courses:", error);
        return {
            error: "Failed to fetch training courses"
        };
    }
}
async function createTrainingCourse(data) {
    try {
        const course = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamTrainingCourse.create({
            data: {
                title: data.title,
                description: data.description || "",
                type: data.type || "optional",
                category: data.category || "technical",
                duration: data.duration || 0,
                provider: data.provider || "",
                format: data.format || "online",
                certificationExpiry: data.certificationExpiry || null
            }
        });
        return {
            ...course,
            type: course.type,
            category: course.category,
            format: course.format,
            certificationExpiry: course.certificationExpiry || undefined
        };
    } catch (error) {
        console.error("Error creating training course:", error);
        return {
            error: "Failed to create training course"
        };
    }
}
async function getCourseEnrollments() {
    try {
        const enrollments = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamCourseEnrollment.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return enrollments.map((e)=>({
                id: e.id,
                courseId: e.courseId,
                courseName: e.courseName,
                employeeId: e.employeeId,
                status: e.status,
                progress: e.progress,
                enrolledAt: e.enrolledAt,
                completedAt: e.completedAt || undefined,
                score: e.score || undefined,
                certificateUrl: e.certificateUrl || undefined
            }));
    } catch (error) {
        console.error("Error fetching course enrollments:", error);
        return {
            error: "Failed to fetch course enrollments"
        };
    }
}
async function createCourseEnrollment(data) {
    try {
        const enrollment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamCourseEnrollment.create({
            data: {
                courseId: data.courseId,
                courseName: data.courseName,
                employeeId: data.employeeId,
                status: data.status || "enrolled",
                progress: data.progress || 0,
                enrolledAt: data.enrolledAt
            }
        });
        return {
            ...enrollment,
            status: enrollment.status,
            completedAt: enrollment.completedAt || undefined,
            score: enrollment.score || undefined,
            certificateUrl: enrollment.certificateUrl || undefined
        };
    } catch (error) {
        console.error("Error creating course enrollment:", error);
        return {
            error: "Failed to create course enrollment"
        };
    }
}
async function updateCourseEnrollment(id, data) {
    try {
        const enrollment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamCourseEnrollment.update({
            where: {
                id
            },
            data
        });
        return {
            ...enrollment,
            status: enrollment.status,
            completedAt: enrollment.completedAt || undefined,
            score: enrollment.score || undefined,
            certificateUrl: enrollment.certificateUrl || undefined
        };
    } catch (error) {
        console.error("Error updating course enrollment:", error);
        return {
            error: "Failed to update course enrollment"
        };
    }
}
async function getHolidays() {
    try {
        const holidays = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamHoliday.findMany({
            orderBy: {
                date: "asc"
            }
        });
        return holidays.map((h)=>({
                ...h,
                createdAt: h.createdAt.toISOString()
            }));
    } catch (error) {
        console.error("Error fetching holidays:", error);
        return {
            error: "Failed to fetch holidays"
        };
    }
}
async function createHoliday(data) {
    try {
        const holiday = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamHoliday.create({
            data: {
                date: data.date,
                name: data.name,
                description: data.description || null
            }
        });
        return {
            ...holiday,
            createdAt: holiday.createdAt.toISOString()
        };
    } catch (error) {
        console.error("Error creating holiday:", error);
        return {
            error: "Failed to create holiday"
        };
    }
}
async function deleteHoliday(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamHoliday.delete({
            where: {
                id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting holiday:", error);
        return {
            error: "Failed to delete holiday"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getCandidates,
    createCandidate,
    updateCandidate,
    getLeaveRequests,
    createLeaveRequest,
    updateLeaveRequest,
    getAttendanceRecords,
    createAttendanceRecord,
    updateAttendanceRecord,
    getOKRs,
    createOKR,
    updateOKR,
    getPerformanceReviews,
    createPerformanceReview,
    updatePerformanceReview,
    getTrainingCourses,
    createTrainingCourse,
    getCourseEnrollments,
    createCourseEnrollment,
    updateCourseEnrollment,
    getHolidays,
    createHoliday,
    deleteHoliday
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "00de1d304a4cf2a3d56cdde0ec379e9011c1baa53e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEmployee, "40f107ca4f0df93c85b5749c379732f6d1f0505165", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployee, "60baffca2193e19bc332847ccd3dda8e421942ee7f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployee, "403b033ca65ab3068c33676f08698bfcfd7a188f75", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCandidates, "00f20eae3936d1761eaf95ac40d34ab6906754fbd7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCandidate, "402b04ba65e1e67d0c09542d25e49e01bbbc614e23", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCandidate, "607d2808b971d3808b8023b89960aba0c90d7a4339", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeaveRequests, "00f7e66041fc6d188791cd4e39e656395e438edaa5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLeaveRequest, "40b542b73cb165e7f4dedd13b5cd4a1ab111a48731", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeaveRequest, "60e8d25089914f407debeb4671288e4f53c05b8f97", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAttendanceRecords, "006d0908b33b2d2fae83f80b24e2976719b86f9f7b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAttendanceRecord, "40e0a27b4e19835ebdc62a06c722eefd646ed47095", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAttendanceRecord, "60ea1b216a7777f4755ea653714d5e7405d69b51f2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOKRs, "002033f65a96c113cce9e036d21d1735c4a450c29a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createOKR, "406db859e9887d626aaed6d2e8fe23355699b91bd5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateOKR, "60209b3c9c219808015f0d81e20bf99d853155c919", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPerformanceReviews, "00c8d77482fcc143b5e52c65281b1361276c5e7705", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPerformanceReview, "40a970283b5da3113f4d40e217548f054780213345", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePerformanceReview, "60fa0205f59fc7726d7f9ba91e8a04dc70efdd3226", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTrainingCourses, "006c15662f8d832656bf258658ad0cbfddaeae3e82", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTrainingCourse, "40423ba8fec0c20970048fbbb227d7c84e32c2b6d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCourseEnrollments, "002f0d31544efd61e4c822e8ca3109fa91976494ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCourseEnrollment, "403b4c6fa0f5fd924caab69231abf46a27b7ab2d8c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCourseEnrollment, "60a9725d494e0e8cd3b44e257da7fcda8687560c33", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHolidays, "00e4ba81dab7f4b11433289ba729068cae1b878270", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createHoliday, "40d4e2c4be3536b88001b880817e4ef169731b7fc9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteHoliday, "40f9d4136bcd39d327ab049ff12934973de30e8ed9", null);
}),
"[project]/.next-internal/server/app/leads/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/leads.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/team.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/leads.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/team.ts [app-rsc] (ecmascript)");
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
"[project]/.next-internal/server/app/leads/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/leads.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/team.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00b7af7a728a58053d82c0719bd5358f3c8101ab05",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeads"],
    "00de1d304a4cf2a3d56cdde0ec379e9011c1baa53e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployees"],
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
    "60ec7612d5ffd7e200b87716c34206083c5fac1eb8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLeadFollowUp"],
    "70a54c7a2555167d68fac2c2907be9214c32fae9b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadNote"],
    "70a7410717fd41fef5a6f6ca5d77729f09225368ff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadFollowUp"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$leads$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/leads/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/leads.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/team.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$leads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/leads.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/team.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__86b8485e._.js.map