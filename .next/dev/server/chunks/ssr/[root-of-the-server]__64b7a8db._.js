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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/auth.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authConfig"],
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
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
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user.isActive) {
                    return null;
                }
                const isPasswordValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
                if (!isPasswordValid) {
                    return null;
                }
                // Update last login
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
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
"[project]/lib/redis.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/redis/nodejs.mjs [app-rsc] (ecmascript) <locals>");
;
// ==================== Redis Client ====================
const redis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"]({
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
"[project]/app/actions/notifications.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getNotifications(limit = 20) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheGet"])(`notifications:list:${session.user.id}`, async ()=>{
            const notifications = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.findMany({
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
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheGet"])(`notifications:count:${session.user.id}`, async ()=>{
            const count = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.count({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheDelete"])(`notifications:list:${userId}`),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheDelete"])(`notifications:count:${userId}`)
    ]).catch(()=>{});
}
// ==================== Push to SSE Queue ====================
async function pushToSSEQueue(userId, data) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redis"].rpush(`sse:queue:${userId}`, JSON.stringify(data));
        // Set TTL on the queue to prevent stale data buildup (5 minutes)
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redis"].expire(`sse:queue:${userId}`, 300);
    } catch (error) {
    // Silently fail — SSE is best-effort
    }
}
async function markNotificationRead(notificationId) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return {
            error: "Not authenticated"
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.update({
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
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return {
            error: "Not authenticated"
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.updateMany({
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
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return {
            error: "Not authenticated"
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.delete({
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
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!session?.user?.id) return {
            error: "Not authenticated"
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.deleteMany({
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
        const notification = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.create({
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
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.createMany({
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getNotifications,
    getUnreadNotificationCount,
    markNotificationRead,
    markAllNotificationsRead,
    deleteNotification,
    clearAllNotifications,
    createNotification,
    createBroadcastNotification
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNotifications, "405c8d1453b1137bc80818d93d78556b99b6ccb6d5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUnreadNotificationCount, "008093c6ce5a3b60b8c2949db00fd468fba87d92a1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markNotificationRead, "40e2c1622cdb4f2df037e747031996f2bea061904b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markAllNotificationsRead, "00198c0d19c43a46a9a95a71c6a983b51fc6d3ef58", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNotification, "400f22a54b92ace48c718dec621cb471d2fb1f8c79", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(clearAllNotifications, "00f71e0175045c151e740ed7320af38076ee05530d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createNotification, "401111069a8f87fd36aa635cb9bc93c3fb0f54889e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBroadcastNotification, "40d377a84f24b302820b50a9328563358977834797", null);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/notifications.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
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
    const matchingInvoices = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeInvoice.findMany({
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
        const invoices = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeInvoice.findMany({
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
        const invoice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeInvoice.create({
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
        // Send notification about new invoice
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBroadcastNotification"])({
            type: "invoice_paid",
            title: "New Invoice Created",
            message: `Invoice ${data.invoiceNumber} for ${data.client} - ৳${data.amount.toLocaleString()} has been created.`,
            link: "/finances"
        }).catch(()=>{});
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        const invoice = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeInvoice.update({
            where: {
                id
            },
            data
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeInvoice.delete({
            where: {
                id
            }
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        const entries = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeIncome.findMany({
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
        const income = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeIncome.create({
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        const income = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeIncome.update({
            where: {
                id
            },
            data
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeIncome.delete({
            where: {
                id
            }
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        const entries = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeExpense.findMany({
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
        const expense = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeExpense.create({
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        const expense = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeExpense.update({
            where: {
                id
            },
            data
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].financeExpense.delete({
            where: {
                id
            }
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/notifications.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
        // Send notification about new client
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBroadcastNotification"])({
            type: "new_client",
            title: "New Client Added",
            message: `New client "${data.name}" (${data.company || "No company"}) has been added.`,
            link: "/clients"
        }).catch(()=>{});
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/notifications.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
        // Send notification about new project
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBroadcastNotification"])({
            type: "project_update",
            title: "New Project Created",
            message: `New project "${project.name}" has been created.`,
            link: `/projects/${project.id}`
        }).catch(()=>{});
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheInvalidate"])("dashboard:*").catch(()=>{});
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
"[project]/.next-internal/server/app/finances/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/finances.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/clients.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/projects.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions/notifications.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/finances.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$clients$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/clients.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/notifications.ts [app-rsc] (ecmascript)");
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
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/finances/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/finances.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/clients.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/projects.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions/notifications.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000d2f1e4ec12ffe903b1011f46faa293fa4e84ff8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$clients$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClients"],
    "00198c0d19c43a46a9a95a71c6a983b51fc6d3ef58",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markAllNotificationsRead"],
    "001f2cc61d1a3cdc5c4ec7c2c5f804976de139bc6b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIncomeEntries"],
    "0023d2ca6c075875538657a15fd0a201a2a8ebde7f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInvoices"],
    "00557496f3cb69a888ce2c209034093fe201211a90",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjects"],
    "008093c6ce5a3b60b8c2949db00fd468fba87d92a1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUnreadNotificationCount"],
    "00ce10b160bfc816bf722d41816cac7494e2fbe9a9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExpenses"],
    "00f71e0175045c151e740ed7320af38076ee05530d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clearAllNotifications"],
    "40012d9eb3ac937a775cc358858529322313e2d6e9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInvoice"],
    "400f22a54b92ace48c718dec621cb471d2fb1f8c79",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteNotification"],
    "40165bb4b6abf01586f6d76be1583c7d8d05dbafb1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteInvoice"],
    "4047df57c3887abd2d03d0082c24945a664c2b6227",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNextInvoiceNumber"],
    "405c8d1453b1137bc80818d93d78556b99b6ccb6d5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    "40ba22ecdb455a4d035d31a32afc26fa581a95e3a9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createExpense"],
    "40e2c1622cdb4f2df037e747031996f2bea061904b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationRead"],
    "40eac8ef1fa9fa813397a4694807e5316fb5080436",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createIncome"],
    "60681ab63302d238d48880fb3e886a1c5704bc6606",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInvoice"],
    "609fcffc4c262a58c17d69eed4e952f6e91205f0a8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateIncome"],
    "60e3b45eb872d13293998e83c11ab7a3feb17fff5a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateExpense"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$finances$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$clients$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/finances/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/finances.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/clients.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/actions/projects.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/actions/notifications.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$finances$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/finances.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$clients$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/clients.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/notifications.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__64b7a8db._.js.map