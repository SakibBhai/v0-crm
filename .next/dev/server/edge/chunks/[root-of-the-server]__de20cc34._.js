(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__de20cc34._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/lib/auth.config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/routes-config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROLE_ROUTES",
    ()=>ROLE_ROUTES,
    "canAccessRoute",
    ()=>canAccessRoute
]);
const ROLE_ROUTES = {
    SUPER_ADMIN: [
        "*"
    ],
    MANAGEMENT: [
        "/",
        "/leads",
        "/clients",
        "/projects",
        "/tasks",
        "/team",
        "/finances",
        "/reports",
        "/calendar",
        "/users",
        "/settings"
    ],
    MANAGER: [
        "/",
        "/leads",
        "/clients",
        "/projects",
        "/tasks",
        "/team",
        "/reports",
        "/calendar"
    ],
    EMPLOYEE: [
        "/",
        "/projects",
        "/tasks",
        "/team",
        "/calendar"
    ],
    CLIENT: [
        "/",
        "/portal/projects",
        "/portal/invoices",
        "/portal/messages"
    ]
};
function canAccessRoute(role, path) {
    const routes = ROLE_ROUTES[role];
    if (!routes) return false;
    if (routes.includes("*")) return true;
    // Check exact match or prefix match
    return routes.some((route)=>{
        if (route === path) return true;
        // Allow sub-routes (e.g., /projects/[id])
        if (path.startsWith(route + "/")) return true;
        return false;
    });
}
}),
"[project]/lib/redis.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@upstash/redis/nodejs.mjs [middleware-edge] (ecmascript) <locals>");
;
// ==================== Redis Client ====================
const redis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"]({
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
"[project]/lib/rate-limit.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkRateLimit",
    ()=>checkRateLimit,
    "rateLimiter",
    ()=>rateLimiter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$ratelimit$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@upstash/ratelimit/dist/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [middleware-edge] (ecmascript)");
;
;
const rateLimiter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$ratelimit$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Ratelimit"]({
    redis: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["redis"],
    limiter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$upstash$2f$ratelimit$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Ratelimit"].slidingWindow(100, "60 s"),
    analytics: true,
    prefix: "crm:ratelimit"
});
async function checkRateLimit(identifier) {
    try {
        const result = await rateLimiter.limit(identifier);
        return result;
    } catch (error) {
        console.error("[RateLimit] Error:", error);
        // Fail open — allow the request if Redis is down
        return {
            success: true,
            limit: 100,
            remaining: 100,
            reset: 0
        };
    }
}
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes-config.ts [middleware-edge] (ecmascript)");
;
;
;
;
const { auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authConfig"]);
// Routes that don't require authentication
const publicRoutes = [
    "/login",
    "/api/auth"
];
// Routes that skip rate limiting (SSE needs long-lived connections)
const rateLimitExcludedRoutes = [
    "/api/notifications/sse"
];
const __TURBOPACK__default__export__ = auth(async (req)=>{
    const { pathname } = req.nextUrl;
    // Allow public routes
    if (publicRoutes.some((route)=>pathname.startsWith(route))) {
        // If logged in and trying to access login, redirect to dashboard
        if (pathname.startsWith("/login") && req.auth?.user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", req.url));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Check if user is authenticated
    if (!req.auth?.user) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    // Rate limiting for API routes (skip SSE and excluded routes)
    if (pathname.startsWith("/api") && !rateLimitExcludedRoutes.some((route)=>pathname.startsWith(route))) {
        try {
            // Dynamic import to avoid issues when Redis is not configured
            const { checkRateLimit } = await Promise.resolve().then(()=>__turbopack_context__.i("[project]/lib/rate-limit.ts [middleware-edge] (ecmascript)"));
            const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
            const { success, remaining } = await checkRateLimit(ip);
            if (!success) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"]("Too Many Requests", {
                    status: 429,
                    headers: {
                        "Retry-After": "60",
                        "X-RateLimit-Remaining": String(remaining)
                    }
                });
            }
        } catch  {
        // Fail open if rate limiting module is unavailable
        }
    }
    const userRole = req.auth.user.role;
    // Check route access
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["canAccessRoute"])(userRole, pathname)) {
        // Client role trying to access non-portal routes
        if (userRole === "CLIENT" && !pathname.startsWith("/portal")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", req.url));
        }
        // Other roles trying to access restricted routes
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", req.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
});
const config = {
    matcher: [
        // Match all routes except static files and _next
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__de20cc34._.js.map