module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/auth.config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authConfig",
    ()=>authConfig
]);
const authConfig = {
    providers: [],
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.avatar = user.avatar;
                token.employeeId = user.employeeId;
                token.clientId = user.clientId;
            }
            return token;
        },
        async session ({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
                session.user.avatar = token.avatar;
                session.user.employeeId = token.employeeId;
                session.user.clientId = token.clientId;
            }
            return session;
        },
        async redirect ({ url, baseUrl }) {
            // If the url is relative, prefix it with the baseUrl
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // If the url is on the same origin, allow it
            if (new URL(url).origin === baseUrl) return url;
            // Otherwise, redirect to baseUrl (dashboard)
            return baseUrl;
        }
    },
    pages: {
        signIn: "/login"
    },
    trustHost: true,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET
};
}),
"[project]/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.config.ts [app-route] (ecmascript)");
;
;
;
;
;
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authConfig"],
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user.isActive) {
                    return null;
                }
                const isPasswordValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
                if (!isPasswordValid) {
                    return null;
                }
                // Update last login
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.update({
                    where: {
                        id: user.id
                    },
                    data: {
                        lastLogin: new Date()
                    }
                });
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    avatar: user.avatar,
                    employeeId: user.employeeId,
                    clientId: user.clientId
                };
            }
        })
    ]
});
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/redis.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cacheDelete",
    ()=>cacheDelete,
    "cacheGet",
    ()=>cacheGet,
    "cacheInvalidate",
    ()=>cacheInvalidate,
    "publishNotification",
    ()=>publishNotification,
    "redis",
    ()=>redis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript) <locals>");
;
// ==================== Redis Client ====================
const redis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"]({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
});
;
async function cacheGet(key, fetcher, ttlSeconds = 60) {
    try {
        const cached = await redis.get(key);
        if (cached !== null && cached !== undefined) {
            return cached;
        }
    } catch (error) {
        console.error(`[Redis] Cache read error for key "${key}":`, error);
    // Fall through to fetcher on Redis error
    }
    // Cache miss — fetch fresh data
    const data = await fetcher();
    try {
        await redis.set(key, JSON.stringify(data), {
            ex: ttlSeconds
        });
    } catch (error) {
        console.error(`[Redis] Cache write error for key "${key}":`, error);
    }
    return data;
}
async function cacheDelete(key) {
    try {
        await redis.del(key);
    } catch (error) {
        console.error(`[Redis] Cache delete error for key "${key}":`, error);
    }
}
async function cacheInvalidate(pattern) {
    try {
        let cursor = 0;
        do {
            const result = await redis.scan(cursor, {
                match: pattern,
                count: 100
            });
            cursor = result[0];
            const keys = result[1];
            if (keys.length > 0) {
                await redis.del(...keys);
            }
        }while (cursor !== 0)
    } catch (error) {
        console.error(`[Redis] Cache invalidation error for pattern "${pattern}":`, error);
    }
}
async function publishNotification(userId, data) {
    try {
        await redis.publish(`notifications:${userId}`, JSON.stringify(data));
    } catch (error) {
        console.error(`[Redis] Publish error for user "${userId}":`, error);
    }
}
}),
"[project]/app/actions/notifications.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00198c0d19c43a46a9a95a71c6a983b51fc6d3ef58":"markAllNotificationsRead","008093c6ce5a3b60b8c2949db00fd468fba87d92a1":"getUnreadNotificationCount","00f71e0175045c151e740ed7320af38076ee05530d":"clearAllNotifications","400f22a54b92ace48c718dec621cb471d2fb1f8c79":"deleteNotification","401111069a8f87fd36aa635cb9bc93c3fb0f54889e":"createNotification","405c8d1453b1137bc80818d93d78556b99b6ccb6d5":"getNotifications","40d377a84f24b302820b50a9328563358977834797":"createBroadcastNotification","40e2c1622cdb4f2df037e747031996f2bea061904b":"markNotificationRead"},"",""] */ __turbopack_context__.s([
    "clearAllNotifications",
    ()=>clearAllNotifications,
    "createBroadcastNotification",
    ()=>createBroadcastNotification,
    "createNotification",
    ()=>createNotification,
    "deleteNotification",
    ()=>deleteNotification,
    "getNotifications",
    ()=>getNotifications,
    "getUnreadNotificationCount",
    ()=>getUnreadNotificationCount,
    "markAllNotificationsRead",
    ()=>markAllNotificationsRead,
    "markNotificationRead",
    ()=>markNotificationRead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function getNotifications(limit = 20) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheGet"])(`notifications:list:${session.user.id}`, async ()=>{
            const notifications = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.findMany({
                where: {
                    userId: session.user.id
                },
                orderBy: {
                    createdAt: "desc"
                },
                take: limit
            });
            return JSON.parse(JSON.stringify(notifications));
        }, 30);
    } catch (error) {
        console.error("Get notifications error:", error);
        return [];
    }
}
async function getUnreadNotificationCount() {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheGet"])(`notifications:count:${session.user.id}`, async ()=>{
            const count = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.count({
                where: {
                    userId: session.user.id,
                    isRead: false
                }
            });
            return count;
        }, 15);
    } catch (error) {
        console.error("Get unread count error:", error);
        return 0;
    }
}
// ==================== Invalidate User Notification Cache ====================
async function invalidateNotificationCache(userId) {
    await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheDelete"])(`notifications:list:${userId}`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheDelete"])(`notifications:count:${userId}`)
    ]).catch(()=>{});
}
// ==================== Push to SSE Queue ====================
async function pushToSSEQueue(userId, data) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].rpush(`sse:queue:${userId}`, JSON.stringify(data));
        // Set TTL on the queue to prevent stale data buildup (5 minutes)
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].expire(`sse:queue:${userId}`, 300);
    } catch (error) {
    // Silently fail — SSE is best-effort
    }
}
async function markNotificationRead(notificationId) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return {
            error: "Not authenticated"
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.update({
            where: {
                id: notificationId,
                userId: session.user.id
            },
            data: {
                isRead: true
            }
        });
        await invalidateNotificationCache(session.user.id);
        return {
            success: true
        };
    } catch (error) {
        console.error("Mark read error:", error);
        return {
            error: "Failed to mark notification as read"
        };
    }
}
async function markAllNotificationsRead() {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return {
            error: "Not authenticated"
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.updateMany({
            where: {
                userId: session.user.id,
                isRead: false
            },
            data: {
                isRead: true
            }
        });
        await invalidateNotificationCache(session.user.id);
        return {
            success: true
        };
    } catch (error) {
        console.error("Mark all read error:", error);
        return {
            error: "Failed to mark all as read"
        };
    }
}
async function deleteNotification(notificationId) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return {
            error: "Not authenticated"
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.delete({
            where: {
                id: notificationId,
                userId: session.user.id
            }
        });
        await invalidateNotificationCache(session.user.id);
        return {
            success: true
        };
    } catch (error) {
        console.error("Delete notification error:", error);
        return {
            error: "Failed to delete notification"
        };
    }
}
async function clearAllNotifications() {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return {
            error: "Not authenticated"
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.deleteMany({
            where: {
                userId: session.user.id
            }
        });
        await invalidateNotificationCache(session.user.id);
        return {
            success: true
        };
    } catch (error) {
        console.error("Clear all error:", error);
        return {
            error: "Failed to clear notifications"
        };
    }
}
async function createNotification(data) {
    try {
        const notification = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.create({
            data: {
                userId: data.userId,
                type: data.type,
                title: data.title,
                message: data.message,
                link: data.link
            }
        });
        // Invalidate cache + push to SSE queue for real-time delivery
        await invalidateNotificationCache(data.userId);
        await pushToSSEQueue(data.userId, {
            type: "notification",
            notification: JSON.parse(JSON.stringify(notification))
        });
        return notification;
    } catch (error) {
        console.error("Create notification error:", error);
        return null;
    }
}
async function createBroadcastNotification(data) {
    try {
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
            where: {
                isActive: true,
                ...data.excludeUserId ? {
                    id: {
                        not: data.excludeUserId
                    }
                } : {}
            },
            select: {
                id: true
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.createMany({
            data: users.map((user)=>({
                    userId: user.id,
                    type: data.type,
                    title: data.title,
                    message: data.message,
                    link: data.link
                }))
        });
        // Invalidate cache + push to SSE queue for all users
        await Promise.all(users.map(async (user)=>{
            await invalidateNotificationCache(user.id);
            await pushToSSEQueue(user.id, {
                type: "notification",
                notification: {
                    type: data.type,
                    title: data.title,
                    message: data.message,
                    link: data.link
                }
            });
        })).catch(()=>{});
        return {
            success: true
        };
    } catch (error) {
        console.error("Broadcast notification error:", error);
        return {
            error: "Failed to broadcast notification"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getNotifications,
    getUnreadNotificationCount,
    markNotificationRead,
    markAllNotificationsRead,
    deleteNotification,
    clearAllNotifications,
    createNotification,
    createBroadcastNotification
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getNotifications, "405c8d1453b1137bc80818d93d78556b99b6ccb6d5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getUnreadNotificationCount, "008093c6ce5a3b60b8c2949db00fd468fba87d92a1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(markNotificationRead, "40e2c1622cdb4f2df037e747031996f2bea061904b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(markAllNotificationsRead, "00198c0d19c43a46a9a95a71c6a983b51fc6d3ef58", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNotification, "400f22a54b92ace48c718dec621cb471d2fb1f8c79", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(clearAllNotifications, "00f71e0175045c151e740ed7320af38076ee05530d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createNotification, "401111069a8f87fd36aa635cb9bc93c3fb0f54889e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createBroadcastNotification, "40d377a84f24b302820b50a9328563358977834797", null);
}),
"[project]/app/api/notifications/sse/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/notifications.ts [app-route] (ecmascript)");
;
;
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
async function GET() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) {
        return new Response("Unauthorized", {
            status: 401
        });
    }
    const userId = session.user.id;
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
        async start (controller) {
            // Send initial unread count
            try {
                const count = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUnreadNotificationCount"])();
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({
                    type: "count",
                    count
                })}\n\n`));
            } catch (e) {
                console.error("[SSE] Initial count error:", e);
            }
            // Heartbeat to keep connection alive
            const heartbeat = setInterval(()=>{
                try {
                    controller.enqueue(encoder.encode(": heartbeat\n\n"));
                } catch  {
                    clearInterval(heartbeat);
                }
            }, 30000);
            // Poll Redis for new notifications using a list-based approach
            // Since Upstash REST doesn't support long-lived Pub/Sub subscriptions,
            // we use a polling approach with Redis lists as a message queue.
            const pollInterval = setInterval(async ()=>{
                try {
                    // Check for queued notifications
                    const message = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redis"].lpop(`sse:queue:${userId}`);
                    if (message) {
                        controller.enqueue(encoder.encode(`data: ${message}\n\n`));
                    }
                } catch (e) {
                // Silently handle polling errors
                }
            }, 2000) // Poll every 2 seconds
            ;
            // Cleanup on close
            const cleanup = ()=>{
                clearInterval(heartbeat);
                clearInterval(pollInterval);
            };
            // Handle abort
            controller.enqueue(encoder.encode(": connected\n\n"));
            controller._cleanup = cleanup;
        },
        cancel () {
        // Controller cancelled — cleanup handled by intervals going stale
        }
    });
    return new Response(stream, {
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive",
            "X-Accel-Buffering": "no"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c9abd647._.js.map