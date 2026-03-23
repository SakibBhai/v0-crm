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
"[project]/.next-internal/server/app/tasks/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/tasks.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/tasks.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/tasks/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/tasks.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00b906c5b8fca4fd82edd2300c7b371b79adae16f2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTasks"],
    "402f16d151d8473424fcb194a44bae5e0d56b76f50",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTask"],
    "40eb34762a6feb09c61300e3d7662d333ef1470260",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTask"],
    "606be36b08b84fa448ca7f711cc85c550a988423b6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTask"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$tasks$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/tasks/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/tasks.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/tasks.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ed133136._.js.map