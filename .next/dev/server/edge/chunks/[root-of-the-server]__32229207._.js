(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__32229207._.js",
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
const __TURBOPACK__default__export__ = auth((req)=>{
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

//# sourceMappingURL=%5Broot-of-the-server%5D__32229207._.js.map