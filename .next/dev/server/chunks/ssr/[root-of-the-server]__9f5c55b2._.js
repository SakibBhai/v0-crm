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
"[project]/app/actions/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00ca5fb9019c64372e9fd1c6ce16cad263c4bcd650":"getProjects","403c8bb14036cd90e61d07470b3149ecf6fac20fd5":"deleteProject","407629b5749ea2cfa96e431021bc9f2c99119ac20c":"bulkDeleteProjects","40bb8c4071328aa3d8945f8ad7066beb977ba50cef":"createProject","40cf9b24e8af3ea19b3f4cf9aa0f8a67b469bc0774":"getProjectById","6099eb38ef3b56fc04e683cc0027e389211fd21c0e":"updateProject","60b5d6cb01dc8d5cd6cab3a30776d8a42069e25958":"addProjectDiscussionMessage","60bc2aee68fab5c1c3d9b81e744dad503832f5667f":"addProjectFileLink"},"",""] */ __turbopack_context__.s([
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProjects, "00ca5fb9019c64372e9fd1c6ce16cad263c4bcd650", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProjectById, "40cf9b24e8af3ea19b3f4cf9aa0f8a67b469bc0774", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProject, "40bb8c4071328aa3d8945f8ad7066beb977ba50cef", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProject, "6099eb38ef3b56fc04e683cc0027e389211fd21c0e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProject, "403c8bb14036cd90e61d07470b3149ecf6fac20fd5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkDeleteProjects, "407629b5749ea2cfa96e431021bc9f2c99119ac20c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProjectFileLink, "60bc2aee68fab5c1c3d9b81e744dad503832f5667f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProjectDiscussionMessage, "60b5d6cb01dc8d5cd6cab3a30776d8a42069e25958", null);
}),
"[project]/app/actions/tasks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b906c5b8fca4fd82edd2300c7b371b79adae16f2":"getTasks","402f16d151d8473424fcb194a44bae5e0d56b76f50":"deleteTask","4049d674bd8e067231b4e78d827d724f49d99dacab":"getTaskById","40b9353790e8e5fda37c57a15009301ac85ad4cc9a":"bulkDeleteTasks","40eb34762a6feb09c61300e3d7662d333ef1470260":"createTask","606be36b08b84fa448ca7f711cc85c550a988423b6":"updateTask"},"",""] */ __turbopack_context__.s([
    "bulkDeleteTasks",
    ()=>bulkDeleteTasks,
    "createTask",
    ()=>createTask,
    "deleteTask",
    ()=>deleteTask,
    "getTaskById",
    ()=>getTaskById,
    "getTasks",
    ()=>getTasks,
    "updateTask",
    ()=>updateTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getTasks() {
    try {
        const tasks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].task.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return JSON.parse(JSON.stringify(tasks));
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
}
async function getTaskById(id) {
    try {
        const task = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].task.findUnique({
            where: {
                id
            }
        });
        return task ? JSON.parse(JSON.stringify(task)) : null;
    } catch (error) {
        console.error("Error fetching task:", error);
        return null;
    }
}
async function createTask(data) {
    try {
        const task = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].task.create({
            data
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/tasks");
        return JSON.parse(JSON.stringify(task));
    } catch (error) {
        console.error("Error creating task:", error.message || error);
        return {
            error: "Failed to create task"
        };
    }
}
async function updateTask(id, data) {
    try {
        const task = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].task.update({
            where: {
                id
            },
            data
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/tasks");
        return JSON.parse(JSON.stringify(task));
    } catch (error) {
        console.error("Error updating task:", error.message || error);
        return {
            error: "Failed to update task"
        };
    }
}
async function deleteTask(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].task.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/tasks");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting task:", error.message || error);
        return {
            success: false,
            error: "Failed to delete task"
        };
    }
}
async function bulkDeleteTasks(ids) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].task.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/tasks");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error bulk deleting tasks:", error.message || error);
        return {
            success: false,
            error: "Failed to bulk delete tasks"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    bulkDeleteTasks
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTasks, "00b906c5b8fca4fd82edd2300c7b371b79adae16f2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTaskById, "4049d674bd8e067231b4e78d827d724f49d99dacab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTask, "40eb34762a6feb09c61300e3d7662d333ef1470260", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTask, "606be36b08b84fa448ca7f711cc85c550a988423b6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTask, "402f16d151d8473424fcb194a44bae5e0d56b76f50", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkDeleteTasks, "40b9353790e8e5fda37c57a15009301ac85ad4cc9a", null);
}),
"[project]/app/actions/team.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001eb6bca3fe26cfa507c721d4988d8545cd76b54a":"getAttendanceRecords","003090f33386efbc9b35406ee46985800622c5a9cc":"getOKRs","005aa7cc608575b728a9bc2d666e13fef7ae343d97":"getPerformanceReviews","006aba431ffd5229044bda542a8cbeae3c5af3d714":"getCourseEnrollments","00dc2e0adff16d4fbae5327cd83c3cf844682cf8b6":"getLeaveRequests","00e1fc28bcb7a8112c9d933a07b5a8c66ee9290bb4":"getCandidates","00f6488e3213e8c364bd2d4ecfd34a04b0f421768b":"getTrainingCourses","00fb1974db4910a06692cbc98c72389e0904392988":"getEmployees","4048ae624aa9b12a0f67b84b737237c49c7685fe2a":"createOKR","4060db35365d63a10b9c769a3f01c2f388de115747":"createLeaveRequest","40664ce3edfb6267564998cc453c448183645a10f1":"createPerformanceReview","4092568684207374bdda6cb3a9b7ebfb457c0b7032":"createCourseEnrollment","4093e6c5cf141aa941dfcff860cebc24eb426aa30b":"createEmployee","40a0695c274b90f3d9cf08b050c3786b4cf9cbb47b":"createCandidate","40a899116b81aa2134ce96a9399d3961d4bdf4a215":"createAttendanceRecord","40b3c02fa5575a66657ca61e2a002fc653ff960ba5":"createTrainingCourse","40d6976aaa715341c70456c90e8b9acbe93016cd3e":"deleteEmployee","6026f54bfd35c04c6e66fb34f54b5980539f734a69":"updateOKR","607b8d404ac3abe5234d085dbdb52643a850610e12":"updateCandidate","60b39255d922d286c5dab5d9cf5a8cdb28f839eaf2":"updateAttendanceRecord","60e4f8c233decf5f0c7d3512023fd2b7daf0eeac9c":"updatePerformanceReview","60e67d9e029593640440ce323ec9eef8aa1c64598c":"updateCourseEnrollment","60e93eed9653369b98a34a18eb809d1fac7d22e109":"updateEmployee","60f05a7c69416d8ca83debee53eb30c2d45e2ae0ed":"updateLeaveRequest"},"",""] */ __turbopack_context__.s([
    "createAttendanceRecord",
    ()=>createAttendanceRecord,
    "createCandidate",
    ()=>createCandidate,
    "createCourseEnrollment",
    ()=>createCourseEnrollment,
    "createEmployee",
    ()=>createEmployee,
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
    "getAttendanceRecords",
    ()=>getAttendanceRecords,
    "getCandidates",
    ()=>getCandidates,
    "getCourseEnrollments",
    ()=>getCourseEnrollments,
    "getEmployees",
    ()=>getEmployees,
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
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
async function getEmployees() {
    try {
        const employees = await prisma.teamEmployee.findMany({
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
        const employee = await prisma.teamEmployee.create({
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
        const employee = await prisma.teamEmployee.update({
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
        await prisma.teamEmployee.delete({
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
        const candidates = await prisma.teamCandidate.findMany({
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
        const candidate = await prisma.teamCandidate.create({
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
        const candidate = await prisma.teamCandidate.update({
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
        const requests = await prisma.teamLeaveRequest.findMany({
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
        const request = await prisma.teamLeaveRequest.create({
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
        const request = await prisma.teamLeaveRequest.update({
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
        const records = await prisma.teamAttendanceRecord.findMany({
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
        const record = await prisma.teamAttendanceRecord.create({
            data: {
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
        const record = await prisma.teamAttendanceRecord.update({
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
        const okrs = await prisma.teamOKR.findMany({
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
        const okr = await prisma.teamOKR.create({
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
        const okr = await prisma.teamOKR.update({
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
        const reviews = await prisma.teamPerformanceReview.findMany({
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
        const review = await prisma.teamPerformanceReview.create({
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
        const review = await prisma.teamPerformanceReview.update({
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
        const courses = await prisma.teamTrainingCourse.findMany({
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
        const course = await prisma.teamTrainingCourse.create({
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
        const enrollments = await prisma.teamCourseEnrollment.findMany({
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
        const enrollment = await prisma.teamCourseEnrollment.create({
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
        const enrollment = await prisma.teamCourseEnrollment.update({
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
    updateCourseEnrollment
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "00fb1974db4910a06692cbc98c72389e0904392988", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEmployee, "4093e6c5cf141aa941dfcff860cebc24eb426aa30b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployee, "60e93eed9653369b98a34a18eb809d1fac7d22e109", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployee, "40d6976aaa715341c70456c90e8b9acbe93016cd3e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCandidates, "00e1fc28bcb7a8112c9d933a07b5a8c66ee9290bb4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCandidate, "40a0695c274b90f3d9cf08b050c3786b4cf9cbb47b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCandidate, "607b8d404ac3abe5234d085dbdb52643a850610e12", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeaveRequests, "00dc2e0adff16d4fbae5327cd83c3cf844682cf8b6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLeaveRequest, "4060db35365d63a10b9c769a3f01c2f388de115747", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeaveRequest, "60f05a7c69416d8ca83debee53eb30c2d45e2ae0ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAttendanceRecords, "001eb6bca3fe26cfa507c721d4988d8545cd76b54a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAttendanceRecord, "40a899116b81aa2134ce96a9399d3961d4bdf4a215", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAttendanceRecord, "60b39255d922d286c5dab5d9cf5a8cdb28f839eaf2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOKRs, "003090f33386efbc9b35406ee46985800622c5a9cc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createOKR, "4048ae624aa9b12a0f67b84b737237c49c7685fe2a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateOKR, "6026f54bfd35c04c6e66fb34f54b5980539f734a69", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPerformanceReviews, "005aa7cc608575b728a9bc2d666e13fef7ae343d97", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPerformanceReview, "40664ce3edfb6267564998cc453c448183645a10f1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePerformanceReview, "60e4f8c233decf5f0c7d3512023fd2b7daf0eeac9c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTrainingCourses, "00f6488e3213e8c364bd2d4ecfd34a04b0f421768b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTrainingCourse, "40b3c02fa5575a66657ca61e2a002fc653ff960ba5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCourseEnrollments, "006aba431ffd5229044bda542a8cbeae3c5af3d714", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCourseEnrollment, "4092568684207374bdda6cb3a9b7ebfb457c0b7032", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCourseEnrollment, "60e67d9e029593640440ce323ec9eef8aa1c64598c", null);
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
"[project]/.next-internal/server/app/projects/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/projects.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/tasks.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/team.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions/finances.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/tasks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/team.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/finances.ts [app-rsc] (ecmascript)");
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
"[project]/.next-internal/server/app/projects/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/projects.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/tasks.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/team.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions/finances.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00b806c86277ae81385d10ff10374701aad193c9e0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInvoices"],
    "00b906c5b8fca4fd82edd2300c7b371b79adae16f2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTasks"],
    "00c11516774ac473894006350ff1c548435ad069a8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIncomeEntries"],
    "00fb1974db4910a06692cbc98c72389e0904392988",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployees"],
    "40cf9b24e8af3ea19b3f4cf9aa0f8a67b469bc0774",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectById"],
    "40dde16e1dba04640a7c9eaac96b90c338985f4b12",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInvoice"],
    "40eb34762a6feb09c61300e3d7662d333ef1470260",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTask"],
    "40fc1248374b3138bf99c0d6eb0f84a2b379efd813",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createIncome"],
    "6099eb38ef3b56fc04e683cc0027e389211fd21c0e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProject"],
    "60b5d6cb01dc8d5cd6cab3a30776d8a42069e25958",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProjectDiscussionMessage"],
    "60bc2aee68fab5c1c3d9b81e744dad503832f5667f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProjectFileLink"],
    "60c7e069c36c613e4c72f7b31f213d5b4e59f00a8a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInvoice"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$projects$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/projects/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/projects.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/tasks.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/actions/team.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/actions/finances.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/tasks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/team.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/finances.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9f5c55b2._.js.map