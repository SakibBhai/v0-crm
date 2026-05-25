module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative flex size-8 shrink-0 overflow-hidden rounded-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('aspect-square size-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted flex size-full items-center justify-center rounded-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/routes-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/role-config.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROLE_CONFIG",
    ()=>ROLE_CONFIG,
    "getNavItemsForRole",
    ()=>getNavItemsForRole,
    "getRoleBgColor",
    ()=>getRoleBgColor,
    "getRoleColor",
    ()=>getRoleColor,
    "getRoleLabel",
    ()=>getRoleLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-ssr] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-ssr] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-ssr] (ecmascript) <export default as UserCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
// ==================== Role Configuration ====================
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes-config.ts [app-ssr] (ecmascript)");
;
// ==================== Sidebar Navigation Per Role ====================
const allNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/leads",
        label: "Leads",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        href: "/clients",
        label: "Clients",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
    },
    {
        href: "/projects",
        label: "Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
    },
    {
        href: "/tasks",
        label: "Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        href: "/team",
        label: "Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        href: "/finances",
        label: "Finances",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
    },
    {
        href: "/reports",
        label: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        href: "/calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    },
    {
        href: "/users",
        label: "User Management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"]
    },
    {
        href: "/settings",
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
const managementNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/leads",
        label: "Leads",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        href: "/clients",
        label: "Clients",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
    },
    {
        href: "/projects",
        label: "Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
    },
    {
        href: "/tasks",
        label: "Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        href: "/team",
        label: "Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        href: "/finances",
        label: "Finances",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
    },
    {
        href: "/reports",
        label: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        href: "/calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    },
    {
        href: "/users",
        label: "User Management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"]
    },
    {
        href: "/settings",
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
const managerNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/leads",
        label: "Leads",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        href: "/clients",
        label: "Clients",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
    },
    {
        href: "/projects",
        label: "Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
    },
    {
        href: "/tasks",
        label: "Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        href: "/team",
        label: "Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        href: "/reports",
        label: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        href: "/calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    }
];
const employeeNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/projects",
        label: "Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
    },
    {
        href: "/tasks",
        label: "My Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        href: "/team",
        label: "Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        href: "/calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    }
];
const clientNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/portal/projects",
        label: "My Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    },
    {
        href: "/portal/invoices",
        label: "Invoices",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        href: "/portal/messages",
        label: "Messages",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
    }
];
;
;
const ROLE_CONFIG = {
    SUPER_ADMIN: {
        label: "Super Admin",
        color: "text-red-400",
        bgColor: "bg-red-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].SUPER_ADMIN,
        sidebar: allNavItems
    },
    MANAGEMENT: {
        label: "Management",
        color: "text-amber-400",
        bgColor: "bg-amber-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].MANAGEMENT,
        sidebar: managementNavItems
    },
    MANAGER: {
        label: "Manager",
        color: "text-blue-400",
        bgColor: "bg-blue-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].MANAGER,
        sidebar: managerNavItems
    },
    EMPLOYEE: {
        label: "Employee",
        color: "text-green-400",
        bgColor: "bg-green-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].EMPLOYEE,
        sidebar: employeeNavItems
    },
    CLIENT: {
        label: "Client",
        color: "text-purple-400",
        bgColor: "bg-purple-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].CLIENT,
        sidebar: clientNavItems
    }
};
function getNavItemsForRole(role) {
    return ROLE_CONFIG[role]?.sidebar || employeeNavItems;
}
function getRoleLabel(role) {
    return ROLE_CONFIG[role]?.label || role;
}
function getRoleColor(role) {
    return ROLE_CONFIG[role]?.color || "text-gray-400";
}
function getRoleBgColor(role) {
    return ROLE_CONFIG[role]?.bgColor || "bg-gray-500/20";
}
}),
"[project]/components/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/role-config.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
;
function Sidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const userRole = session?.user?.role || "EMPLOYEE";
    const userName = session?.user?.name || "User";
    const userInitials = userName.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getNavItemsForRole"])(userRole);
    const roleLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRoleLabel"])(userRole);
    const roleColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRoleColor"])(userRole);
    const roleBgColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRoleBgColor"])(userRole);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col", collapsed ? "w-[70px]" : "w-[240px]"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 h-16 border-b border-sidebar-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-9 h-9 rounded-lg bg-primary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "w-5 h-5 text-primary-foreground"
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-lg text-sidebar-foreground animate-in fade-in slide-in-from-left-2 duration-200",
                        children: "AgencyFlow"
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-4 space-y-1 overflow-y-auto",
                children: navItems.map((item)=>{
                    const isActive = pathname === item.href || item.href !== "/" && pathname.startsWith(item.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group", isActive ? "bg-sidebar-accent text-sidebar-primary" : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110", isActive && "text-sidebar-primary")
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-in fade-in slide-in-from-left-2 duration-200",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 70,
                                columnNumber: 30
                            }, this),
                            isActive && !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto w-1.5 h-1.5 rounded-full bg-sidebar-primary animate-in zoom-in duration-200"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.href, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-sidebar-border p-3 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent/50 cursor-pointer transition-colors", collapsed && "justify-center px-0"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: "w-8 h-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                        src: session?.user?.avatar || ""
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                        className: "bg-primary/20 text-primary text-xs",
                                        children: userInitials
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 animate-in fade-in slide-in-from-left-2 duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-sidebar-foreground truncate",
                                        children: userName
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded", roleBgColor, roleColor),
                                        children: roleLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
                                callbackUrl: "/login"
                            }),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors", collapsed && "justify-center px-0"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "w-4 h-4 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sign Out"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 110,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCollapsed(!collapsed),
                        className: "flex items-center justify-center w-full py-2 rounded-lg hover:bg-sidebar-accent/50 text-muted-foreground hover:text-sidebar-foreground transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 transition-transform duration-300", collapsed && "rotate-180")
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/dashboard-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayout",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function DashboardLayout({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if mobile
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        const checkSidebar = ()=>{
            const sidebar = document.querySelector("aside");
            if (sidebar) {
                setSidebarCollapsed(sidebar.classList.contains("w-[70px]"));
            }
        };
        const observer = new MutationObserver(checkSidebar);
        const sidebar = document.querySelector("aside");
        if (sidebar) {
            observer.observe(sidebar, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
        }
        return ()=>{
            observer.disconnect();
            window.removeEventListener("resize", checkMobile);
        };
    }, []);
    // Close mobile menu when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        mobileMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/components/dashboard-layout.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard-layout.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in-up",
                onClick: ()=>setMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/dashboard-layout.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 left-0 z-50 w-[280px] transform transition-transform duration-300 ease-out lg:hidden", mobileMenuOpen ? "translate-x-0" : "-translate-x-full"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                        fileName: "[project]/components/dashboard-layout.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileMenuOpen(false),
                        className: "absolute top-4 right-4 p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard-layout.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-layout.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard-layout.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-300 ease-out min-h-screen", !isMobile && (sidebarCollapsed ? "lg:ml-[70px]" : "lg:ml-[240px]")),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "sticky top-0 z-30 h-14 sm:h-16 border-b border-border bg-background/90 backdrop-blur-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between h-full px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(true),
                                    className: "p-2 rounded-lg hover:bg-secondary transition-colors lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard-layout.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-layout.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block relative w-full max-w-xs lg:max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard-layout.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Search anything...",
                                            className: "pl-10 bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary h-9 lg:h-10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard-layout.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard-layout.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-2 rounded-lg hover:bg-secondary transition-colors sm:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-5 h-5 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard-layout.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard-layout.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            className: "gap-1.5 sm:gap-2 h-8 sm:h-9 px-2.5 sm:px-4 text-xs sm:text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-layout.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "New Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-layout.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm:hidden",
                                                    children: "New"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-layout.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-layout.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "relative p-2 rounded-lg hover:bg-secondary transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                    className: "w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-layout.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-layout.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard-layout.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard-layout.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard-layout.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-layout.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6 lg:p-8 animate-fade-in-up",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-layout.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard-layout.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard-layout.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/animated-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedCard",
    ()=>AnimatedCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function AnimatedCard({ children, className, delay = 0, hover = true, glow = false, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card border-border animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both", hover && "transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5", glow && "animate-glow-pulse", className),
        style: {
            animationDelay: `${delay}ms`
        },
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/animated-card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/stat-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCard",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
"use client";
;
;
;
;
;
function StatCard({ title, value, change, icon: Icon, delay = 0, iconColor = "text-primary" }) {
    const isPositive = change && change > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
        delay: delay,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/stat-card.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-foreground",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/components/stat-card.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            change !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-xs font-medium", isPositive ? "text-success" : "text-destructive"),
                                children: [
                                    isPositive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/stat-card.tsx",
                                        lineNumber: 34,
                                        columnNumber: 31
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/stat-card.tsx",
                                        lineNumber: 34,
                                        columnNumber: 68
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            Math.abs(change),
                                            "% from last month"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/stat-card.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/stat-card.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/stat-card.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-3 rounded-lg bg-secondary", iconColor),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/stat-card.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/stat-card.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/stat-card.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/stat-card.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/stat-card.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/dashboard/upcoming-widget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpcomingWidget",
    ()=>UpcomingWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-ssr] (ecmascript) <export default as ListTodo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
// Default events data with current date
const getDefaultEvents = ()=>{
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    return [
        {
            id: "1",
            title: "Client Strategy Call",
            type: "meeting",
            date: new Date(currentYear, currentMonth, currentDay),
            time: "10:00 AM",
            duration: "1 hour",
            description: "Quarterly review meeting with TechStart Inc. to discuss marketing strategy and campaign performance.",
            isOnline: true,
            meetingLink: "https://meet.google.com/abc-defg-hij",
            attendees: [
                {
                    name: "Sarah Mitchell",
                    initials: "SM"
                },
                {
                    name: "James Wilson",
                    initials: "JW"
                }
            ],
            priority: "high"
        },
        {
            id: "2",
            title: "Team Review",
            type: "meeting",
            date: new Date(currentYear, currentMonth, currentDay),
            time: "2:00 PM",
            duration: "30 mins",
            description: "Weekly team sync to discuss project progress and blockers.",
            isOnline: true,
            meetingLink: "https://zoom.us/j/123456789",
            attendees: [
                {
                    name: "Emily Chen",
                    initials: "EC"
                },
                {
                    name: "Michael Brown",
                    initials: "MB"
                },
                {
                    name: "Alex Kim",
                    initials: "AK"
                }
            ],
            priority: "medium"
        },
        {
            id: "3",
            title: "Finalize Website Mockups",
            type: "task",
            date: new Date(currentYear, currentMonth, currentDay + 1),
            time: "EOD",
            description: "Complete the final mockups for the e-commerce redesign project. Need to include mobile responsive views.",
            priority: "high",
            status: "in-progress",
            project: "E-commerce Redesign",
            tags: [
                "Design",
                "High Priority"
            ]
        },
        {
            id: "4",
            title: "Project Kickoff - GreenLife",
            type: "meeting",
            date: new Date(currentYear, currentMonth, currentDay + 1),
            time: "11:00 AM",
            duration: "1.5 hours",
            description: "Kickoff meeting for the new SEO campaign with GreenLife team.",
            location: "Conference Room A",
            isOnline: false,
            attendees: [
                {
                    name: "David Lee",
                    initials: "DL"
                },
                {
                    name: "Jessica Wang",
                    initials: "JW"
                }
            ],
            priority: "high"
        },
        {
            id: "5",
            title: "Submit Proposal",
            type: "deadline",
            date: new Date(currentYear, currentMonth, currentDay + 3),
            time: "5:00 PM",
            description: "Final deadline for submitting the marketing proposal to AutoDeal.",
            priority: "critical",
            status: "pending",
            project: "AutoDeal Campaign"
        },
        {
            id: "6",
            title: "Performance Review",
            type: "meeting",
            date: new Date(currentYear, currentMonth, currentDay + 4),
            time: "3:00 PM",
            duration: "45 mins",
            description: "Monthly performance review and goal setting session.",
            isOnline: true,
            meetingLink: "https://meet.google.com/xyz-uvwx-yz",
            attendees: [
                {
                    name: "HR Manager",
                    initials: "HR"
                }
            ],
            priority: "medium"
        },
        {
            id: "7",
            title: "Content Calendar Review",
            type: "task",
            date: new Date(currentYear, currentMonth, currentDay + 5),
            description: "Review and approve the content calendar for next month.",
            priority: "medium",
            status: "pending",
            project: "Content Strategy",
            tags: [
                "Content",
                "Planning"
            ]
        },
        {
            id: "8",
            title: "Invoice Payment Reminder",
            type: "reminder",
            date: new Date(currentYear, currentMonth, currentDay + 6),
            description: "Follow up on pending invoice #2024-015 from ScaleUp Ltd.",
            priority: "high",
            status: "pending"
        }
    ];
};
const eventTypeConfig = {
    task: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"],
        color: "text-blue-400",
        bgColor: "bg-blue-500/20",
        label: "Task"
    },
    meeting: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
        color: "text-purple-400",
        bgColor: "bg-purple-500/20",
        label: "Meeting"
    },
    deadline: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        color: "text-red-400",
        bgColor: "bg-red-500/20",
        label: "Deadline"
    },
    reminder: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: "text-amber-400",
        bgColor: "bg-amber-500/20",
        label: "Reminder"
    }
};
const priorityConfig = {
    low: {
        color: "bg-slate-500/20 text-slate-400 border-slate-500/50"
    },
    medium: {
        color: "bg-blue-500/20 text-blue-400 border-blue-500/50"
    },
    high: {
        color: "bg-orange-500/20 text-orange-400 border-orange-500/50"
    },
    critical: {
        color: "bg-red-500/20 text-red-400 border-red-500/50"
    }
};
function UpcomingWidget({ events: propEvents, delay = 0 }) {
    const events = propEvents || getDefaultEvents();
    const today = new Date();
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(today);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(today);
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get calendar data for current month
    const calendarData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();
        return {
            year,
            month,
            daysInMonth,
            startingDay,
            monthName: currentDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric"
            })
        };
    }, [
        currentDate
    ]);
    // Get events for a specific date
    const getEventsForDate = (date)=>{
        return events.filter((event)=>{
            const eventDate = new Date(event.date);
            return eventDate.getDate() === date.getDate() && eventDate.getMonth() === date.getMonth() && eventDate.getFullYear() === date.getFullYear();
        });
    };
    // Selected date events
    const selectedDateEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return getEventsForDate(selectedDate);
    }, [
        selectedDate,
        events
    ]);
    // Navigate months
    const goToPreviousMonth = ()=>{
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
    const goToNextMonth = ()=>{
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
    const goToToday = ()=>{
        setCurrentDate(today);
        setSelectedDate(today);
    };
    // Check if date is today
    const isToday = (date)=>{
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    };
    const handleEventClick = (event)=>{
        setSelectedEvent(event);
        setIsDialogOpen(true);
    };
    const formatEventDate = (date)=>{
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                delay: delay,
                className: "overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base font-medium flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                            lineNumber: 277,
                                            columnNumber: 29
                                        }, this),
                                        "Upcoming"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                    lineNumber: 276,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: goToToday,
                                    className: "text-xs text-primary hover:text-primary/80 h-7 px-2",
                                    children: "Today"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                    lineNumber: 280,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                            lineNumber: 275,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                        lineNumber: 274,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: goToPreviousMonth,
                                        className: "h-7 w-7 hover:bg-secondary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                            lineNumber: 299,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 293,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-foreground",
                                        children: calendarData.monthName
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 301,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: goToNextMonth,
                                        className: "h-7 w-7 hover:bg-secondary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                            lineNumber: 310,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 304,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                lineNumber: 292,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 gap-1 text-center text-xs",
                                        children: [
                                            "S",
                                            "M",
                                            "T",
                                            "W",
                                            "T",
                                            "F",
                                            "S"
                                        ].map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-muted-foreground py-1",
                                                children: day
                                            }, index, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 318,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 316,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 gap-1",
                                        children: [
                                            Array.from({
                                                length: calendarData.startingDay
                                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "aspect-square"
                                                }, `empty-${i}`, false, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 33
                                                }, this)),
                                            Array.from({
                                                length: calendarData.daysInMonth
                                            }).map((_, i)=>{
                                                const date = new Date(calendarData.year, calendarData.month, i + 1);
                                                const dayEvents = getEventsForDate(date);
                                                const hasEvents = dayEvents.length > 0;
                                                const isTodayDate = isToday(date);
                                                const isSelected = selectedDate.getDate() === date.getDate() && selectedDate.getMonth() === date.getMonth() && selectedDate.getFullYear() === date.getFullYear();
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedDate(date),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square rounded-lg text-xs font-medium transition-all relative flex items-center justify-center", "hover:bg-secondary/80 hover:scale-105", isSelected && "bg-primary text-primary-foreground shadow-lg shadow-primary/30", !isSelected && isTodayDate && "ring-2 ring-primary/50 bg-primary/10", !isSelected && hasEvents && "bg-secondary/50 border border-primary/30", !isSelected && !hasEvents && "text-muted-foreground"),
                                                    children: [
                                                        i + 1,
                                                        hasEvents && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, i + 1, true, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 37
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 323,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                lineNumber: 315,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-border pt-3 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-muted-foreground",
                                                children: selectedDate.toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    month: "short",
                                                    day: "numeric"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 365,
                                                columnNumber: 29
                                            }, this),
                                            selectedDateEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "secondary",
                                                className: "text-[10px] h-5",
                                                children: [
                                                    selectedDateEvents.length,
                                                    " event",
                                                    selectedDateEvents.length > 1 ? "s" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 369,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 364,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 max-h-[160px] overflow-y-auto",
                                        children: selectedDateEvents.length > 0 ? selectedDateEvents.map((event)=>{
                                            const config = eventTypeConfig[event.type];
                                            const EventIcon = config.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEventClick(event),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full text-left p-2.5 rounded-lg transition-all group", "bg-gradient-to-r from-secondary/50 to-secondary/30", "border-l-2 border-primary hover:border-l-4", "hover:from-secondary/80 hover:to-secondary/50", "hover:shadow-md hover:shadow-primary/10"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1.5 rounded-md", config.bgColor),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EventIcon, {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3", config.color)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium truncate group-hover:text-primary transition-colors",
                                                                    children: event.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mt-0.5",
                                                                    children: [
                                                                        event.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-muted-foreground flex items-center gap-0.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                    className: "w-2.5 h-2.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                                    lineNumber: 403,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                event.time
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                            lineNumber: 402,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[9px] h-4 px-1.5", priorityConfig[event.priority || "medium"].color),
                                                                            children: event.priority
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                            lineNumber: 407,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 45
                                                }, this)
                                            }, event.id, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 381,
                                                columnNumber: 41
                                            }, this);
                                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-8 h-8 text-muted-foreground/50 mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "No events scheduled"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                            lineNumber: 417,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 375,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                lineNumber: 363,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                        lineNumber: 290,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                lineNumber: 273,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md",
                    children: selectedEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2.5 rounded-lg", eventTypeConfig[selectedEvent.type].bgColor),
                                            children: (()=>{
                                                const EventIcon = eventTypeConfig[selectedEvent.type].icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EventIcon, {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", eventTypeConfig[selectedEvent.type].color)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 52
                                                }, this);
                                            })()
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                            lineNumber: 434,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                    className: "text-lg",
                                                    children: selectedEvent.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "text-xs",
                                                            children: eventTypeConfig[selectedEvent.type].label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 45
                                                        }, this),
                                                        selectedEvent.priority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs", priorityConfig[selectedEvent.priority].color),
                                                            children: selectedEvent.priority
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                            lineNumber: 440,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                    lineNumber: 433,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                lineNumber: 432,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 459,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: formatEventDate(new Date(selectedEvent.date))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 41
                                                    }, this),
                                                    selectedEvent.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground text-xs",
                                                        children: [
                                                            selectedEvent.time,
                                                            selectedEvent.duration && ` • ${selectedEvent.duration}`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 460,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 458,
                                        columnNumber: 33
                                    }, this),
                                    selectedEvent.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg bg-secondary/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: selectedEvent.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                            lineNumber: 474,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 473,
                                        columnNumber: 37
                                    }, this),
                                    (selectedEvent.location || selectedEvent.meetingLink) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-sm",
                                        children: [
                                            selectedEvent.isOnline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 482,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 484,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    selectedEvent.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: selectedEvent.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 72
                                                    }, this),
                                                    selectedEvent.meetingLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: selectedEvent.meetingLink,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-primary hover:underline text-xs",
                                                        children: "Join Meeting"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 486,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 480,
                                        columnNumber: 37
                                    }, this),
                                    selectedEvent.project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 505,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: selectedEvent.project
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 506,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 504,
                                        columnNumber: 37
                                    }, this),
                                    selectedEvent.attendees && selectedEvent.attendees.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "w-4 h-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Attendees"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 513,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: selectedEvent.attendees.map((attendee, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-medium",
                                                                children: attendee.initials
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: attendee.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 517,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 512,
                                        columnNumber: 37
                                    }, this),
                                    selectedEvent.tags && selectedEvent.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: selectedEvent.tags.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "secondary",
                                                className: "text-xs",
                                                children: tag
                                            }, idx, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 537,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 535,
                                        columnNumber: 37
                                    }, this),
                                    selectedEvent.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 pt-2 border-t border-border",
                                        children: [
                                            selectedEvent.status === "completed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-4 h-4 text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 548,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 550,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm capitalize",
                                                children: selectedEvent.status.replace("-", " ")
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 552,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 546,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                lineNumber: 456,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mt-4 pt-4 border-t border-border",
                                children: [
                                    selectedEvent.type === "meeting" && selectedEvent.meetingLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: selectedEvent.meetingLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 45
                                                }, this),
                                                "Join Meeting"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                            lineNumber: 561,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 560,
                                        columnNumber: 37
                                    }, this),
                                    selectedEvent.type === "task" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 569,
                                                columnNumber: 41
                                            }, this),
                                            "Mark Complete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 568,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>setIsDialogOpen(false),
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 573,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                lineNumber: 558,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                    lineNumber: 429,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                lineNumber: 428,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/data/tasks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Sample Task Data for Development
__turbopack_context__.s([
    "automationRules",
    ()=>automationRules,
    "projects",
    ()=>projects,
    "sampleTasks",
    ()=>sampleTasks,
    "taskTemplates",
    ()=>taskTemplates,
    "teamMembers",
    ()=>teamMembers
]);
const teamMembers = [
    {
        id: "1",
        name: "Rina Chowdhury",
        initials: "RC",
        email: "rina@agency.com",
        role: "UI/UX Designer",
        isAvailable: true
    },
    {
        id: "2",
        name: "Ali Hasan",
        initials: "AH",
        email: "ali@agency.com",
        role: "Project Manager",
        isAvailable: true
    },
    {
        id: "3",
        name: "Sarah Chen",
        initials: "SC",
        email: "sarah@agency.com",
        role: "Frontend Developer",
        isAvailable: true
    },
    {
        id: "4",
        name: "Alex Kumar",
        initials: "AK",
        email: "alex@agency.com",
        role: "Backend Developer",
        isAvailable: false
    },
    {
        id: "5",
        name: "Emma Wilson",
        initials: "EW",
        email: "emma@agency.com",
        role: "Content Writer",
        isAvailable: true
    },
    {
        id: "6",
        name: "Michael Brown",
        initials: "MB",
        email: "michael@agency.com",
        role: "SEO Specialist",
        isAvailable: true
    }
];
const projects = [
    {
        id: "PJ-0001",
        name: "E-commerce Redesign"
    },
    {
        id: "PJ-0002",
        name: "SEO Campaign Q4"
    },
    {
        id: "PJ-0003",
        name: "Social Media Strategy"
    },
    {
        id: "PJ-0004",
        name: "PPC Management"
    },
    {
        id: "PJ-0005",
        name: "Brand Identity Overhaul"
    },
    {
        id: "PJ-0006",
        name: "Email Marketing Automation"
    }
];
const sampleTasks = [
    {
        id: "TSK-0001",
        title: "Design hero section for homepage",
        description: `<p>Create an engaging hero section with the following requirements:</p>
<ul>
<li>Use brand colors (#FF5733, #3498DB)</li>
<li>CTA Button: "Get Started Free"</li>
<li>Must be mobile responsive</li>
<li>Include animated elements</li>
</ul>`,
        status: "in-progress",
        priority: "high",
        taskType: "design",
        projectId: "PJ-0001",
        projectName: "E-commerce Redesign",
        assignees: [
            teamMembers[0]
        ],
        assignedById: "2",
        assignedByName: "Ali Hasan",
        reporterId: "2",
        reporterName: "Ali Hasan",
        dueDate: "2024-12-22",
        startDate: "2024-12-18",
        tags: [
            "design",
            "homepage",
            "high-priority"
        ],
        subtasks: [
            {
                id: "s1",
                title: "Create wireframe",
                completed: true,
                assigneeId: "1",
                assigneeName: "Rina Chowdhury",
                assignedById: "2",
                assignedByName: "Ali Hasan"
            },
            {
                id: "s2",
                title: "Get client approval",
                completed: true,
                assigneeId: "2",
                assigneeName: "Ali Hasan",
                assignedById: "2",
                assignedByName: "Ali Hasan"
            },
            {
                id: "s3",
                title: "High-fidelity design",
                completed: false,
                assigneeId: "1",
                assigneeName: "Rina Chowdhury",
                assignedById: "2",
                assignedByName: "Ali Hasan"
            },
            {
                id: "s4",
                title: "Handoff to developers",
                completed: false,
                assigneeId: "1",
                assigneeName: "Rina Chowdhury",
                assignedById: "2",
                assignedByName: "Ali Hasan"
            }
        ],
        comments: [
            {
                id: "c1",
                text: "Great work! Just make the CTA button a bit larger.",
                authorId: "2",
                authorName: "Ali Hasan",
                authorInitials: "AH",
                createdAt: "2024-12-20T14:30:00Z",
                reactions: [
                    {
                        emoji: "👍",
                        userIds: [
                            "1"
                        ]
                    }
                ]
            },
            {
                id: "c2",
                text: "Okay, updating it.",
                authorId: "1",
                authorName: "Rina Chowdhury",
                authorInitials: "RC",
                createdAt: "2024-12-20T15:45:00Z",
                parentId: "c1"
            }
        ],
        attachments: [
            {
                id: "a1",
                name: "hero-v1.fig",
                size: "2.4 MB",
                type: "figma",
                url: "#",
                uploadedBy: "Rina Chowdhury",
                uploadedAt: "2024-12-19"
            },
            {
                id: "a2",
                name: "inspiration.pdf",
                size: "1.2 MB",
                type: "pdf",
                url: "#",
                uploadedBy: "Ali Hasan",
                uploadedAt: "2024-12-18"
            }
        ],
        dependencies: [
            {
                taskId: "TSK-100",
                taskTitle: "Brand Guideline Finalization",
                type: "blocked-by"
            }
        ],
        timeEntries: [
            {
                id: "t1",
                date: "2024-12-19",
                hours: 2,
                description: "Wireframe creation",
                isBillable: true,
                userId: "1"
            },
            {
                id: "t2",
                date: "2024-12-20",
                hours: 0.5,
                description: "Client meeting",
                isBillable: false,
                userId: "1"
            }
        ],
        referenceLinks: [
            {
                id: "r1",
                title: "Figma Design",
                url: "https://figma.com/file/hero-design",
                type: "figma"
            },
            {
                id: "r2",
                title: "Brand Guidelines",
                url: "https://docs.google.com/brand-guidelines",
                type: "doc"
            },
            {
                id: "r3",
                title: "Pinterest Inspiration",
                url: "https://pinterest.com/board/hero",
                type: "link"
            }
        ],
        estimatedHours: 4,
        actualHours: 2.5,
        createdAt: "2024-12-18T10:00:00Z",
        updatedAt: "2024-12-20T15:45:00Z",
        activityLog: [
            {
                id: "l1",
                timestamp: "2024-12-20T15:45:00Z",
                userId: "1",
                userName: "Rina Chowdhury",
                action: "changed status",
                field: "status",
                oldValue: "To Do",
                newValue: "In Progress"
            },
            {
                id: "l2",
                timestamp: "2024-12-20T14:30:00Z",
                userId: "2",
                userName: "Ali Hasan",
                action: "commented"
            },
            {
                id: "l3",
                timestamp: "2024-12-19T10:30:00Z",
                userId: "1",
                userName: "Rina Chowdhury",
                action: "started timer"
            },
            {
                id: "l4",
                timestamp: "2024-12-18T16:15:00Z",
                userId: "2",
                userName: "Ali Hasan",
                action: "created task and assigned to Rina Chowdhury"
            }
        ],
        isBlocked: false,
        isRecurring: false
    },
    {
        id: "TSK-0002",
        title: "Implement responsive navigation",
        description: "<p>Build a mobile-first responsive navigation component with hamburger menu.</p>",
        status: "todo",
        priority: "high",
        taskType: "feature",
        projectId: "PJ-0001",
        projectName: "E-commerce Redesign",
        assignees: [
            teamMembers[2]
        ],
        assignedById: "2",
        assignedByName: "Ali Hasan",
        reporterId: "2",
        reporterName: "Ali Hasan",
        dueDate: "2024-12-24",
        tags: [
            "frontend",
            "navigation"
        ],
        subtasks: [
            {
                id: "s5",
                title: "Mobile menu component",
                completed: false
            },
            {
                id: "s6",
                title: "Desktop navigation",
                completed: false
            },
            {
                id: "s7",
                title: "Animation effects",
                completed: false
            }
        ],
        comments: [],
        attachments: [],
        dependencies: [
            {
                taskId: "TSK-101",
                taskTitle: "Design hero section for homepage",
                type: "blocked-by"
            }
        ],
        timeEntries: [],
        referenceLinks: [
            {
                id: "r4",
                title: "Navigation Component Design",
                url: "https://figma.com/file/nav-design",
                type: "figma"
            },
            {
                id: "r5",
                title: "Component Library Doc",
                url: "https://docs.google.com/component-lib",
                type: "doc"
            }
        ],
        estimatedHours: 6,
        actualHours: 0,
        createdAt: "2024-12-19T09:00:00Z",
        updatedAt: "2024-12-19T09:00:00Z",
        activityLog: [],
        isBlocked: true,
        isRecurring: false
    },
    {
        id: "TSK-0003",
        title: "Setup database migration",
        description: "<p>Configure PostgreSQL migration scripts for new user authentication system.</p>",
        status: "todo",
        priority: "critical",
        taskType: "feature",
        projectId: "PJ-0002",
        projectName: "SEO Campaign Q4",
        assignees: [
            teamMembers[3]
        ],
        assignedById: "2",
        assignedByName: "Ali Hasan",
        reporterId: "2",
        reporterName: "Ali Hasan",
        dueDate: "2024-12-21",
        tags: [
            "backend",
            "database",
            "urgent"
        ],
        subtasks: [],
        comments: [],
        attachments: [],
        dependencies: [],
        timeEntries: [],
        referenceLinks: [
            {
                id: "r6",
                title: "Database Schema",
                url: "https://github.com/repo/db-schema",
                type: "github"
            },
            {
                id: "r7",
                title: "Migration Guide",
                url: "https://docs.google.com/migration",
                type: "doc"
            }
        ],
        estimatedHours: 8,
        actualHours: 0,
        createdAt: "2024-12-17T11:00:00Z",
        updatedAt: "2024-12-17T11:00:00Z",
        activityLog: [],
        isBlocked: false,
        isRecurring: false
    },
    {
        id: "TSK-0004",
        title: "Write API documentation",
        description: "<p>Create comprehensive API documentation for all endpoints using OpenAPI spec.</p>",
        status: "done",
        priority: "medium",
        taskType: "documentation",
        projectId: "PJ-0003",
        projectName: "Social Media Strategy",
        assignees: [
            teamMembers[4]
        ],
        assignedById: "3",
        assignedByName: "Sarah Chen",
        reporterId: "3",
        reporterName: "Sarah Chen",
        dueDate: "2024-12-19",
        tags: [
            "documentation",
            "api"
        ],
        subtasks: [
            {
                id: "s8",
                title: "Authentication endpoints",
                completed: true
            },
            {
                id: "s9",
                title: "User management endpoints",
                completed: true
            },
            {
                id: "s10",
                title: "Error handling guide",
                completed: true
            }
        ],
        comments: [],
        attachments: [],
        dependencies: [],
        timeEntries: [
            {
                id: "t3",
                date: "2024-12-18",
                hours: 4,
                description: "Initial documentation",
                isBillable: true,
                userId: "5"
            },
            {
                id: "t4",
                date: "2024-12-19",
                hours: 3,
                description: "Review and finalize",
                isBillable: true,
                userId: "5"
            }
        ],
        referenceLinks: [
            {
                id: "r8",
                title: "API Docs Swagger",
                url: "https://swagger.io/api-docs",
                type: "doc"
            },
            {
                id: "r9",
                title: "GitHub Wiki",
                url: "https://github.com/repo/wiki",
                type: "github"
            }
        ],
        estimatedHours: 6,
        actualHours: 7,
        createdAt: "2024-12-16T10:00:00Z",
        updatedAt: "2024-12-19T17:00:00Z",
        activityLog: [],
        isBlocked: false,
        isRecurring: false
    },
    {
        id: "TSK-0005",
        title: "SEO audit for landing pages",
        description: "<p>Perform comprehensive SEO audit and provide optimization recommendations.</p>",
        status: "in-review",
        priority: "medium",
        taskType: "research",
        projectId: "PJ-0004",
        projectName: "PPC Management",
        assignees: [
            teamMembers[5]
        ],
        assignedById: "2",
        assignedByName: "Ali Hasan",
        reporterId: "2",
        reporterName: "Ali Hasan",
        dueDate: "2024-12-23",
        tags: [
            "seo",
            "audit"
        ],
        subtasks: [
            {
                id: "s11",
                title: "Technical SEO check",
                completed: true
            },
            {
                id: "s12",
                title: "Content analysis",
                completed: true
            },
            {
                id: "s13",
                title: "Backlink review",
                completed: false
            }
        ],
        comments: [],
        attachments: [],
        dependencies: [],
        timeEntries: [],
        referenceLinks: [
            {
                id: "r10",
                title: "SEO Audit Spreadsheet",
                url: "https://sheets.google.com/seo-audit",
                type: "sheet"
            },
            {
                id: "r11",
                title: "Current Analytics",
                url: "https://analytics.google.com",
                type: "link"
            }
        ],
        estimatedHours: 5,
        actualHours: 4,
        createdAt: "2024-12-15T14:00:00Z",
        updatedAt: "2024-12-20T11:00:00Z",
        activityLog: [],
        isBlocked: false,
        isRecurring: false
    },
    {
        id: "TSK-0006",
        title: "Weekly status report",
        description: "<p>Generate and send weekly project status report to stakeholders.</p>",
        status: "backlog",
        priority: "low",
        taskType: "general",
        projectId: "PJ-0005",
        projectName: "Brand Identity Overhaul",
        assignees: [
            teamMembers[1]
        ],
        assignedById: "2",
        assignedByName: "Ali Hasan",
        reporterId: "2",
        reporterName: "Ali Hasan",
        dueDate: "2024-12-27",
        tags: [
            "reporting",
            "weekly"
        ],
        subtasks: [],
        comments: [],
        attachments: [],
        dependencies: [],
        timeEntries: [],
        referenceLinks: [
            {
                id: "r12",
                title: "Report Template",
                url: "https://docs.google.com/report-template",
                type: "doc"
            }
        ],
        estimatedHours: 1,
        actualHours: 0,
        createdAt: "2024-12-20T09:00:00Z",
        updatedAt: "2024-12-20T09:00:00Z",
        activityLog: [],
        isBlocked: false,
        isRecurring: true,
        recurringPattern: "weekly"
    }
];
const taskTemplates = [
    {
        id: "tpl-1",
        name: "New Feature Development",
        description: "Standard template for developing new features",
        subtasks: [
            {
                title: "Requirements gathering"
            },
            {
                title: "Design mockups"
            },
            {
                title: "Development"
            },
            {
                title: "Code review"
            },
            {
                title: "Testing"
            },
            {
                title: "Documentation"
            }
        ],
        estimatedHours: 20,
        tags: [
            "feature",
            "development"
        ],
        priority: "medium"
    },
    {
        id: "tpl-2",
        name: "Bug Fix",
        description: "Template for tracking bug fixes",
        subtasks: [
            {
                title: "Reproduce issue"
            },
            {
                title: "Identify root cause"
            },
            {
                title: "Implement fix"
            },
            {
                title: "Write tests"
            },
            {
                title: "Deploy"
            }
        ],
        estimatedHours: 4,
        tags: [
            "bug",
            "fix"
        ],
        priority: "high"
    }
];
const automationRules = [
    {
        id: "rule-1",
        name: "Auto-archive completed tasks",
        trigger: {
            type: "status-change",
            value: "done"
        },
        action: {
            type: "archive"
        },
        isActive: true
    },
    {
        id: "rule-2",
        name: "Escalate overdue tasks",
        trigger: {
            type: "due-date-passed"
        },
        action: {
            type: "change-priority",
            value: "critical"
        },
        isActive: true
    }
];
}),
"[project]/lib/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialProjects",
    ()=>initialProjects,
    "priorityConfig",
    ()=>priorityConfig,
    "statusConfig",
    ()=>statusConfig,
    "uniqueClients",
    ()=>uniqueClients,
    "uniqueManagers",
    ()=>uniqueManagers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>");
;
const initialProjects = [
    {
        id: "PJ-0001",
        name: "E-commerce Redesign",
        description: "Complete website redesign with new branding and improved UX",
        client: "TechMart Solutions",
        projectManager: "John Smith",
        status: "in-progress",
        priority: "high",
        progress: 75,
        budget: 25000,
        spent: 18500,
        startDate: "2024-10-15",
        dueDate: "2024-12-28",
        team: [
            "JD",
            "SM",
            "EC"
        ],
        tasks: {
            total: 24,
            completed: 18
        },
        category: "Web Design",
        briefLink: "https://docs.google.com/document/d/ecommerce-brief",
        driveLink: "https://drive.google.com/drive/folders/ecommerce-files",
        researchLink: "https://notion.so/ecommerce-research",
        billingType: "one-time",
        totalBilled: 18500,
        paymentStatus: "partial"
    },
    {
        id: "PJ-0002",
        name: "SEO Campaign Q4",
        description: "Comprehensive SEO optimization and content strategy",
        client: "GreenLife Organics",
        projectManager: "Emily Chen",
        status: "in-progress",
        priority: "medium",
        progress: 45,
        budget: 12000,
        spent: 5400,
        startDate: "2024-11-01",
        dueDate: "2025-01-05",
        team: [
            "JW",
            "AT"
        ],
        tasks: {
            total: 18,
            completed: 8
        },
        category: "SEO",
        billingType: "recurring",
        recurringInterval: "30-days",
        nextBillingDate: "2025-01-01",
        totalBilled: 4000,
        paymentStatus: "paid"
    },
    {
        id: "PJ-0003",
        name: "Social Media Strategy",
        description: "Full social media management and content calendar",
        client: "FoodieHub",
        projectManager: "Sarah Mitchell",
        status: "review",
        priority: "medium",
        progress: 90,
        budget: 8000,
        spent: 7200,
        startDate: "2024-09-20",
        dueDate: "2024-12-22",
        team: [
            "EC",
            "MB"
        ],
        tasks: {
            total: 32,
            completed: 29
        },
        category: "Social Media",
        billingType: "recurring",
        recurringInterval: "15-days",
        nextBillingDate: "2025-01-05",
        totalBilled: 6400,
        paymentStatus: "paid"
    },
    {
        id: "PJ-0004",
        name: "PPC Management",
        description: "Google Ads and Meta advertising campaigns",
        client: "AutoDeal Motors",
        projectManager: "David Park",
        status: "on-hold",
        priority: "low",
        progress: 30,
        budget: 15000,
        spent: 4500,
        startDate: "2024-10-01",
        dueDate: "2025-01-15",
        team: [
            "DP",
            "JW"
        ],
        tasks: {
            total: 12,
            completed: 4
        },
        category: "PPC",
        billingType: "recurring",
        recurringInterval: "7-days",
        nextBillingDate: "2025-01-10",
        totalBilled: 3000,
        paymentStatus: "pending"
    },
    {
        id: "PJ-0005",
        name: "Brand Identity Overhaul",
        description: "Complete rebranding including logo, colors, and guidelines",
        client: "LuxStay Hotels",
        projectManager: "John Smith",
        status: "planning",
        priority: "high",
        progress: 15,
        budget: 35000,
        spent: 5250,
        startDate: "2024-12-01",
        dueDate: "2025-03-15",
        team: [
            "SM",
            "JD",
            "LT",
            "EC"
        ],
        tasks: {
            total: 28,
            completed: 4
        },
        category: "Branding",
        billingType: "one-time",
        totalBilled: 5250,
        paymentStatus: "partial"
    },
    {
        id: "PJ-0006",
        name: "Email Marketing Automation",
        description: "Set up automated email sequences and newsletters",
        client: "TechMart Solutions",
        projectManager: "Emily Chen",
        status: "completed",
        priority: "medium",
        progress: 100,
        budget: 6000,
        spent: 5800,
        startDate: "2024-08-15",
        dueDate: "2024-11-30",
        team: [
            "AT",
            "MB"
        ],
        tasks: {
            total: 15,
            completed: 15
        },
        category: "Email Marketing",
        billingType: "one-time",
        totalBilled: 6000,
        paymentStatus: "paid"
    }
];
const statusConfig = {
    planning: {
        label: "Planning",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        color: "bg-chart-3/20 text-chart-3"
    },
    "in-progress": {
        label: "In Progress",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        color: "bg-primary/20 text-primary"
    },
    review: {
        label: "Review",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
        color: "bg-warning/20 text-warning"
    },
    completed: {
        label: "Completed",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
        color: "bg-success/20 text-success"
    },
    "on-hold": {
        label: "On Hold",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"],
        color: "bg-muted text-muted-foreground"
    }
};
const priorityConfig = {
    low: {
        label: "Low",
        color: "bg-muted text-muted-foreground"
    },
    medium: {
        label: "Medium",
        color: "bg-warning/20 text-warning"
    },
    high: {
        label: "High",
        color: "bg-destructive/20 text-destructive"
    }
};
const uniqueClients = [
    ...new Set(initialProjects.map((p)=>p.client))
];
const uniqueManagers = [
    ...new Set(initialProjects.map((p)=>p.projectManager))
];
}),
"[project]/lib/data/finance-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "budgetData",
    ()=>budgetData,
    "cashFlowData",
    ()=>cashFlowData,
    "categoryData",
    ()=>categoryData,
    "expenseCategoryData",
    ()=>expenseCategoryData,
    "expensesData",
    ()=>expensesData,
    "incomeCategoryData",
    ()=>incomeCategoryData,
    "incomeData",
    ()=>incomeData,
    "invoicesData",
    ()=>invoicesData,
    "paymentMethodData",
    ()=>paymentMethodData,
    "profitMarginData",
    ()=>profitMarginData,
    "revenueData",
    ()=>revenueData
]);
const invoicesData = [
    {
        id: "INV-2024-001",
        invoiceNumber: "INV-2024-001",
        client: "TechCorp Inc",
        clientEmail: "accounting@techcorp.com",
        clientLogo: "/placeholder.svg?height=40&width=40",
        project: "Website Redesign",
        projectId: "PRJ-001",
        amount: 15000,
        paid: 15000,
        tax: 1200,
        discount: 0,
        status: "paid",
        dueDate: "2024-01-15",
        issueDate: "2024-01-01",
        paidDate: "2024-01-14",
        paymentMethod: "Bank Transfer",
        paymentTerms: "Net 30",
        currency: "USD",
        items: [
            {
                id: 1,
                description: "UI/UX Design - Homepage & Landing Pages",
                quantity: 1,
                rate: 5000,
                amount: 5000,
                taxable: true
            },
            {
                id: 2,
                description: "Frontend Development (React + Next.js)",
                quantity: 40,
                rate: 150,
                amount: 6000,
                taxable: true
            },
            {
                id: 3,
                description: "Backend Integration & API Development",
                quantity: 20,
                rate: 200,
                amount: 4000,
                taxable: true
            }
        ],
        notes: "Thank you for your business! Payment received on time.",
        internalNotes: "Client prefers monthly billing",
        category: "development",
        recurringInvoice: false,
        attachments: [
            "contract.pdf",
            "mockups.zip"
        ]
    },
    {
        id: "INV-2024-002",
        invoiceNumber: "INV-2024-002",
        client: "StartupXYZ",
        clientEmail: "finance@startupxyz.com",
        clientLogo: "/placeholder.svg?height=40&width=40",
        project: "SEO Campaign Q1",
        projectId: "PRJ-002",
        amount: 8500,
        paid: 4250,
        tax: 680,
        discount: 500,
        status: "partial",
        dueDate: "2024-01-20",
        issueDate: "2024-01-05",
        paidDate: "2024-01-06",
        paymentMethod: "Credit Card",
        paymentTerms: "50% upfront, 50% on completion",
        currency: "USD",
        items: [
            {
                id: 1,
                description: "Comprehensive SEO Audit & Strategy",
                quantity: 1,
                rate: 1500,
                amount: 1500,
                taxable: true
            },
            {
                id: 2,
                description: "Monthly SEO Management & Optimization",
                quantity: 3,
                rate: 2000,
                amount: 6000,
                taxable: true
            },
            {
                id: 3,
                description: "Content Writing & Blog Posts",
                quantity: 5,
                rate: 200,
                amount: 1000,
                taxable: true
            }
        ],
        notes: "50% paid upfront. Balance due upon completion.",
        internalNotes: "New client - watch payment closely",
        category: "marketing",
        recurringInvoice: false,
        attachments: [
            "proposal.pdf"
        ]
    },
    {
        id: "INV-2024-003",
        invoiceNumber: "INV-2024-003",
        client: "GrowthLabs",
        clientEmail: "billing@growthlabs.io",
        clientLogo: "/placeholder.svg?height=40&width=40",
        project: "Social Media Management",
        projectId: "PRJ-003",
        amount: 12000,
        paid: 0,
        tax: 960,
        discount: 0,
        status: "pending",
        dueDate: "2024-02-01",
        issueDate: "2024-01-10",
        paidDate: null,
        paymentMethod: "ACH",
        paymentTerms: "Net 30",
        currency: "USD",
        items: [
            {
                id: 1,
                description: "Social Media Strategy Development",
                quantity: 1,
                rate: 3000,
                amount: 3000,
                taxable: true
            },
            {
                id: 2,
                description: "Monthly Social Media Management",
                quantity: 3,
                rate: 2500,
                amount: 7500,
                taxable: true
            },
            {
                id: 3,
                description: "Paid Ad Campaign Management",
                quantity: 1,
                rate: 1500,
                amount: 1500,
                taxable: true
            }
        ],
        notes: "Net 30 payment terms. Auto-pay enabled.",
        internalNotes: "Recurring client - good payment history",
        category: "social",
        recurringInvoice: true,
        attachments: [
            "strategy.pdf",
            "content-calendar.xlsx"
        ]
    },
    {
        id: "INV-2024-004",
        invoiceNumber: "INV-2024-004",
        client: "MediaFlow",
        clientEmail: "accounts@mediaflow.com",
        clientLogo: "/placeholder.svg?height=40&width=40",
        project: "Video Production - Product Launch",
        projectId: "PRJ-004",
        amount: 25000,
        paid: 0,
        tax: 2000,
        discount: 1000,
        status: "overdue",
        dueDate: "2024-01-10",
        issueDate: "2023-12-15",
        paidDate: null,
        paymentMethod: "Bank Transfer",
        paymentTerms: "Net 15",
        currency: "USD",
        items: [
            {
                id: 1,
                description: "Video Shooting & Production (5 days)",
                quantity: 5,
                rate: 2000,
                amount: 10000,
                taxable: true
            },
            {
                id: 2,
                description: "Post Production & Editing",
                quantity: 5,
                rate: 1500,
                amount: 7500,
                taxable: true
            },
            {
                id: 3,
                description: "Motion Graphics & Animation",
                quantity: 5,
                rate: 1500,
                amount: 7500,
                taxable: true
            }
        ],
        notes: "OVERDUE - Payment reminder sent multiple times",
        internalNotes: "CLIENT DELAYED - Consider legal action if not paid by Feb 1",
        category: "creative",
        recurringInvoice: false,
        attachments: [
            "contract_signed.pdf",
            "deliverables.zip"
        ]
    },
    {
        id: "INV-2024-005",
        invoiceNumber: "INV-2024-005",
        client: "BrandFirst",
        clientEmail: "contact@brandfirst.co",
        clientLogo: "/placeholder.svg?height=40&width=40",
        project: "Brand Identity Package",
        projectId: "PRJ-005",
        amount: 18000,
        paid: 0,
        tax: 1440,
        discount: 2000,
        status: "draft",
        dueDate: "2024-02-15",
        issueDate: "2024-01-18",
        paidDate: null,
        paymentMethod: "Wire Transfer",
        paymentTerms: "Net 45",
        currency: "USD",
        items: [
            {
                id: 1,
                description: "Logo Design & Brand Mark",
                quantity: 1,
                rate: 5000,
                amount: 5000,
                taxable: true
            },
            {
                id: 2,
                description: "Brand Guidelines & Style Guide",
                quantity: 1,
                rate: 8000,
                amount: 8000,
                taxable: true
            },
            {
                id: 3,
                description: "Marketing Collateral Design",
                quantity: 1,
                rate: 5000,
                amount: 5000,
                taxable: true
            }
        ],
        notes: "DRAFT - Pending client approval on final deliverables",
        internalNotes: "10% discount for early payment within 7 days",
        category: "branding",
        recurringInvoice: false,
        attachments: []
    },
    {
        id: "INV-2024-006",
        invoiceNumber: "INV-2024-006",
        client: "E-Shop Pro",
        clientEmail: "billing@eshoppro.com",
        clientLogo: "/placeholder.svg?height=40&width=40",
        project: "E-commerce Platform Development",
        projectId: "PRJ-006",
        amount: 45000,
        paid: 45000,
        tax: 3600,
        discount: 3000,
        status: "paid",
        dueDate: "2024-01-25",
        issueDate: "2024-01-01",
        paidDate: "2024-01-24",
        paymentMethod: "Bank Transfer",
        paymentTerms: "Net 30",
        currency: "USD",
        items: [
            {
                id: 1,
                description: "Full E-commerce Platform Development",
                quantity: 1,
                rate: 30000,
                amount: 30000,
                taxable: true
            },
            {
                id: 2,
                description: "Payment Gateway Integration (Stripe)",
                quantity: 1,
                rate: 10000,
                amount: 10000,
                taxable: true
            },
            {
                id: 3,
                description: "Training, Documentation & Support",
                quantity: 1,
                rate: 5000,
                amount: 5000,
                taxable: true
            }
        ],
        notes: "Project completed successfully. Payment received in full.",
        internalNotes: "VIP Client - Expedite all future requests",
        category: "development",
        recurringInvoice: false,
        attachments: [
            "final_deliverables.zip",
            "documentation.pdf"
        ]
    },
    {
        id: "INV-2024-007",
        invoiceNumber: "INV-2024-007",
        client: "HealthTech Solutions",
        clientEmail: "finance@healthtech.com",
        clientLogo: "/placeholder.svg?height=40&width=40",
        project: "PPC Campaign Management",
        projectId: "PRJ-007",
        amount: 6500,
        paid: 0,
        tax: 520,
        discount: 0,
        status: "sent",
        dueDate: "2024-02-10",
        issueDate: "2024-01-20",
        paidDate: null,
        paymentMethod: "Credit Card",
        paymentTerms: "Net 30",
        currency: "USD",
        items: [
            {
                id: 1,
                description: "Google Ads Campaign Setup & Strategy",
                quantity: 1,
                rate: 1500,
                amount: 1500,
                taxable: true
            },
            {
                id: 2,
                description: "Monthly Campaign Management",
                quantity: 2,
                rate: 2000,
                amount: 4000,
                taxable: true
            },
            {
                id: 3,
                description: "Performance Reporting & Analytics",
                quantity: 2,
                rate: 500,
                amount: 1000,
                taxable: true
            }
        ],
        notes: "Invoice sent via email on Jan 20. Auto-pay enabled.",
        internalNotes: "Monthly recurring - set up auto-invoice",
        category: "marketing",
        recurringInvoice: true,
        attachments: [
            "campaign_strategy.pdf"
        ]
    },
    {
        id: "INV-2024-008",
        invoiceNumber: "INV-2024-008",
        client: "FinanceFirst",
        clientEmail: "ap@financefirst.com",
        clientLogo: "/placeholder.svg?height=40&width=40",
        project: "Content Marketing Package",
        projectId: "PRJ-008",
        amount: 9000,
        paid: 9000,
        tax: 720,
        discount: 0,
        status: "paid",
        dueDate: "2024-01-05",
        issueDate: "2023-12-20",
        paidDate: "2024-01-03",
        paymentMethod: "ACH",
        paymentTerms: "Net 15",
        currency: "USD",
        items: [
            {
                id: 1,
                description: "Content Marketing Strategy",
                quantity: 1,
                rate: 2000,
                amount: 2000,
                taxable: true
            },
            {
                id: 2,
                description: "Blog Writing & SEO Optimization",
                quantity: 10,
                rate: 400,
                amount: 4000,
                taxable: true
            },
            {
                id: 3,
                description: "Email Marketing Campaigns",
                quantity: 6,
                rate: 500,
                amount: 3000,
                taxable: true
            }
        ],
        notes: "Paid early. Thank you!",
        internalNotes: "Long-term client - priority support",
        category: "content",
        recurringInvoice: true,
        attachments: [
            "content_calendar.xlsx"
        ]
    }
];
const incomeData = [
    {
        id: 1,
        description: "Monthly Retainer - TechCorp Inc",
        category: "Retainer",
        amount: 15000,
        date: "2024-01-15",
        client: "TechCorp Inc",
        project: "Website Redesign",
        status: "received",
        entityStatus: "active",
        invoiceId: "INV-2024-001",
        paymentMethod: "Bank Transfer",
        recurring: true,
        taxAmount: 1200,
        createdAt: "2024-01-15T10:00:00Z",
        updatedAt: "2024-01-15T10:00:00Z",
        createdBy: "Sarah Chen"
    },
    {
        id: 2,
        description: "Project Payment - E-commerce Platform",
        category: "Project",
        amount: 45000,
        date: "2024-01-24",
        client: "E-Shop Pro",
        project: "E-commerce Platform",
        status: "received",
        entityStatus: "active",
        invoiceId: "INV-2024-006",
        paymentMethod: "Bank Transfer",
        recurring: false,
        taxAmount: 3600,
        createdAt: "2024-01-24T09:30:00Z",
        updatedAt: "2024-01-24T09:30:00Z",
        createdBy: "Michael Torres"
    },
    {
        id: 3,
        description: "Partial Payment - SEO Campaign",
        category: "Project",
        amount: 4250,
        date: "2024-01-06",
        client: "StartupXYZ",
        project: "SEO Campaign Q1",
        status: "received",
        entityStatus: "active",
        invoiceId: "INV-2024-002",
        paymentMethod: "Credit Card",
        recurring: false,
        taxAmount: 340,
        createdAt: "2024-01-06T14:00:00Z",
        updatedAt: "2024-01-06T14:00:00Z",
        createdBy: "Sarah Chen"
    },
    {
        id: 4,
        description: "Monthly Retainer - FinanceFirst",
        category: "Retainer",
        amount: 9000,
        date: "2024-01-03",
        client: "FinanceFirst",
        project: "Content Marketing",
        status: "received",
        entityStatus: "active",
        invoiceId: "INV-2024-008",
        paymentMethod: "ACH",
        recurring: true,
        taxAmount: 720,
        createdAt: "2024-01-03T11:00:00Z",
        updatedAt: "2024-01-03T11:00:00Z",
        createdBy: "Sarah Chen"
    },
    {
        id: 5,
        description: "Consulting Services - Brand Strategy",
        category: "Consulting",
        amount: 3500,
        date: "2024-01-18",
        client: "BrandFirst",
        project: "Brand Identity",
        status: "pending",
        entityStatus: "active",
        invoiceId: "INV-2024-009",
        paymentMethod: "Wire Transfer",
        recurring: false,
        taxAmount: 280,
        createdAt: "2024-01-18T10:30:00Z",
        updatedAt: "2024-01-18T10:30:00Z",
        createdBy: "Michael Torres"
    },
    {
        id: 6,
        description: "Ad Management Fee - GrowthLabs",
        category: "Management Fee",
        amount: 2500,
        date: "2024-01-12",
        client: "GrowthLabs",
        project: "Social Media Management",
        status: "received",
        entityStatus: "active",
        invoiceId: "INV-2024-010",
        paymentMethod: "ACH",
        recurring: true,
        taxAmount: 200,
        createdAt: "2024-01-12T15:00:00Z",
        updatedAt: "2024-01-12T15:00:00Z",
        createdBy: "Sarah Chen"
    }
];
const expensesData = [
    {
        id: 1,
        description: "Adobe Creative Cloud - Team Plan",
        category: "Software",
        amount: 599,
        date: "2024-01-15",
        vendor: "Adobe Inc",
        status: "paid",
        entityStatus: "active",
        recurring: true,
        recurringFrequency: "monthly",
        approvalStatus: "approved",
        approvedBy: "Sarah Chen",
        paymentMethod: "Credit Card",
        receiptUrl: "receipt_001.pdf",
        taxDeductible: true,
        notes: "Annual subscription billed monthly",
        department: "Creative",
        project: null,
        createdAt: "2024-01-15T08:00:00Z",
        updatedAt: "2024-01-15T08:00:00Z",
        createdBy: "Sarah Chen"
    },
    {
        id: 2,
        description: "Google Ads - Client Campaign Budget",
        category: "Advertising",
        amount: 2500,
        date: "2024-01-14",
        vendor: "Google LLC",
        status: "paid",
        entityStatus: "active",
        recurring: false,
        recurringFrequency: null,
        approvalStatus: "approved",
        approvedBy: "Michael Torres",
        paymentMethod: "Credit Card",
        receiptUrl: "receipt_002.pdf",
        taxDeductible: true,
        notes: "Campaign for StartupXYZ - billable to client",
        department: "Marketing",
        project: "PRJ-002",
        createdAt: "2024-01-14T10:00:00Z",
        updatedAt: "2024-01-14T10:00:00Z",
        createdBy: "Michael Torres"
    },
    {
        id: 3,
        description: "Office Space Rent - WeWork Downtown",
        category: "Operations",
        amount: 4500,
        date: "2024-01-01",
        vendor: "WeWork",
        status: "paid",
        entityStatus: "active",
        recurring: true,
        recurringFrequency: "monthly",
        approvalStatus: "approved",
        approvedBy: "Sarah Chen",
        paymentMethod: "ACH",
        receiptUrl: "receipt_003.pdf",
        taxDeductible: true,
        notes: "Monthly office rent including utilities",
        department: "Operations",
        project: null,
        createdAt: "2024-01-01T09:00:00Z",
        updatedAt: "2024-01-01T09:00:00Z",
        createdBy: "Sarah Chen"
    },
    {
        id: 4,
        description: "Freelancer Payment - UI/UX Designer",
        category: "Contractors",
        amount: 3200,
        date: "2024-01-12",
        vendor: "Sarah Miller Design",
        status: "pending",
        entityStatus: "active",
        recurring: false,
        recurringFrequency: null,
        approvalStatus: "approved",
        approvedBy: "Sarah Chen",
        paymentMethod: "PayPal",
        receiptUrl: "invoice_freelancer_001.pdf",
        taxDeductible: true,
        notes: "40 hours @ $80/hr - TechCorp project",
        department: "Creative",
        project: "PRJ-001",
        createdAt: "2024-01-12T11:00:00Z",
        updatedAt: "2024-01-12T11:00:00Z",
        createdBy: "Sarah Chen"
    },
    {
        id: 5,
        description: "HubSpot Marketing Hub - Professional",
        category: "Software",
        amount: 890,
        date: "2024-01-10",
        vendor: "HubSpot Inc",
        status: "paid",
        entityStatus: "active",
        recurring: true,
        recurringFrequency: "monthly",
        approvalStatus: "approved",
        approvedBy: "Michael Torres",
        paymentMethod: "Credit Card",
        receiptUrl: "receipt_005.pdf",
        taxDeductible: true,
        notes: "CRM and marketing automation",
        department: "Sales",
        project: null,
        createdAt: "2024-01-10T09:30:00Z",
        updatedAt: "2024-01-10T09:30:00Z",
        createdBy: "Michael Torres"
    },
    {
        id: 6,
        description: "Team Building Event - Q1 Kickoff",
        category: "Team",
        amount: 1450,
        date: "2024-01-18",
        vendor: "Various Vendors",
        status: "paid",
        entityStatus: "active",
        recurring: false,
        recurringFrequency: null,
        approvalStatus: "approved",
        approvedBy: "Sarah Chen",
        paymentMethod: "Company Card",
        receiptUrl: "receipts_team_event.zip",
        taxDeductible: false,
        notes: "Dinner and activities for 12 team members",
        department: "HR",
        project: null,
        createdAt: "2024-01-18T16:00:00Z",
        updatedAt: "2024-01-18T16:00:00Z",
        createdBy: "Sarah Chen"
    },
    {
        id: 7,
        description: "Stock Photography & Assets - Shutterstock",
        category: "Assets",
        amount: 299,
        date: "2024-01-08",
        vendor: "Shutterstock",
        status: "paid",
        entityStatus: "active",
        recurring: true,
        recurringFrequency: "monthly",
        approvalStatus: "approved",
        approvedBy: "Sarah Chen",
        paymentMethod: "Credit Card",
        receiptUrl: "receipt_007.pdf",
        taxDeductible: true,
        notes: "Team subscription - 750 images/month",
        department: "Creative",
        project: null,
        createdAt: "2024-01-08T10:00:00Z",
        updatedAt: "2024-01-08T10:00:00Z",
        createdBy: "Sarah Chen"
    },
    {
        id: 8,
        description: "Client Gift Baskets - Holiday Season",
        category: "Client Relations",
        amount: 750,
        date: "2024-01-20",
        vendor: "Premium Gift Co",
        status: "pending_approval",
        entityStatus: "active",
        recurring: false,
        recurringFrequency: null,
        approvalStatus: "pending",
        approvedBy: null,
        paymentMethod: "Credit Card",
        receiptUrl: "receipt_008.pdf",
        taxDeductible: true,
        notes: "Gift baskets for top 5 clients",
        department: "Business Development",
        project: null,
        createdAt: "2024-01-20T14:00:00Z",
        updatedAt: "2024-01-20T14:00:00Z",
        createdBy: "Michael Torres"
    },
    {
        id: 9,
        description: "AWS Cloud Hosting - Production Servers",
        category: "Infrastructure",
        amount: 1280,
        date: "2024-01-05",
        vendor: "Amazon Web Services",
        status: "paid",
        entityStatus: "active",
        recurring: true,
        recurringFrequency: "monthly",
        approvalStatus: "approved",
        approvedBy: "Sarah Chen",
        paymentMethod: "Credit Card",
        receiptUrl: "receipt_009.pdf",
        taxDeductible: true,
        notes: "Client project hosting costs",
        department: "Development",
        project: "PRJ-006",
        createdAt: "2024-01-05T08:30:00Z",
        updatedAt: "2024-01-05T08:30:00Z",
        createdBy: "Sarah Chen"
    },
    {
        id: 10,
        description: "Professional Development - Marketing Conference",
        category: "Training",
        amount: 899,
        date: "2024-01-22",
        vendor: "Marketing Summit 2024",
        status: "pending_approval",
        entityStatus: "active",
        recurring: false,
        recurringFrequency: null,
        approvalStatus: "pending",
        approvedBy: null,
        paymentMethod: "Company Card",
        receiptUrl: null,
        taxDeductible: true,
        notes: "Conference ticket for Michael Torres",
        department: "Marketing",
        project: null,
        createdAt: "2024-01-22T09:00:00Z",
        updatedAt: "2024-01-22T09:00:00Z",
        createdBy: "Michael Torres"
    }
];
const revenueData = [
    {
        month: "Jul",
        revenue: 65000,
        expenses: 42000,
        profit: 23000,
        projectRevenue: 45000,
        retainerRevenue: 20000
    },
    {
        month: "Aug",
        revenue: 72000,
        expenses: 45000,
        profit: 27000,
        projectRevenue: 50000,
        retainerRevenue: 22000
    },
    {
        month: "Sep",
        revenue: 68000,
        expenses: 40000,
        profit: 28000,
        projectRevenue: 43000,
        retainerRevenue: 25000
    },
    {
        month: "Oct",
        revenue: 85000,
        expenses: 52000,
        profit: 33000,
        projectRevenue: 60000,
        retainerRevenue: 25000
    },
    {
        month: "Nov",
        revenue: 92000,
        expenses: 55000,
        profit: 37000,
        projectRevenue: 65000,
        retainerRevenue: 27000
    },
    {
        month: "Dec",
        revenue: 98000,
        expenses: 58000,
        profit: 40000,
        projectRevenue: 70000,
        retainerRevenue: 28000
    },
    {
        month: "Jan",
        revenue: 105000,
        expenses: 62000,
        profit: 43000,
        projectRevenue: 73250,
        retainerRevenue: 31750
    }
];
const incomeCategoryData = [
    {
        name: "Retainer",
        value: 26500,
        color: "#6366f1"
    },
    {
        name: "Project",
        value: 49250,
        color: "#22c55e"
    },
    {
        name: "Consulting",
        value: 3500,
        color: "#f59e0b"
    },
    {
        name: "Management Fee",
        value: 2500,
        color: "#ec4899"
    }
];
const categoryData = [
    {
        name: "Development",
        value: 60000,
        color: "#6366f1"
    },
    {
        name: "Marketing",
        value: 15000,
        color: "#22c55e"
    },
    {
        name: "Creative",
        value: 25000,
        color: "#f59e0b"
    },
    {
        name: "Social Media",
        value: 12000,
        color: "#ec4899"
    },
    {
        name: "Branding",
        value: 18000,
        color: "#8b5cf6"
    }
];
const paymentMethodData = [
    {
        name: "Bank Transfer",
        value: 105000,
        color: "#6366f1"
    },
    {
        name: "Credit Card",
        value: 10750,
        color: "#22c55e"
    },
    {
        name: "ACH",
        value: 11500,
        color: "#f59e0b"
    },
    {
        name: "Wire Transfer",
        value: 3500,
        color: "#ec4899"
    }
];
const expenseCategoryData = [
    {
        name: "Software",
        value: 1788,
        color: "#6366f1",
        count: 3
    },
    {
        name: "Operations",
        value: 4500,
        color: "#22c55e",
        count: 1
    },
    {
        name: "Contractors",
        value: 3200,
        color: "#f59e0b",
        count: 1
    },
    {
        name: "Advertising",
        value: 2500,
        color: "#ec4899",
        count: 1
    },
    {
        name: "Infrastructure",
        value: 1280,
        color: "#8b5cf6",
        count: 1
    },
    {
        name: "Team",
        value: 1450,
        color: "#14b8a6",
        count: 1
    },
    {
        name: "Training",
        value: 899,
        color: "#f97316",
        count: 1
    },
    {
        name: "Client Relations",
        value: 750,
        color: "#a855f7",
        count: 1
    },
    {
        name: "Assets",
        value: 299,
        color: "#06b6d4",
        count: 1
    }
];
const cashFlowData = [
    {
        week: "W1",
        inflow: 28000,
        outflow: 15000,
        net: 13000
    },
    {
        week: "W2",
        inflow: 32000,
        outflow: 18000,
        net: 14000
    },
    {
        week: "W3",
        inflow: 25000,
        outflow: 12000,
        net: 13000
    },
    {
        week: "W4",
        inflow: 35000,
        outflow: 20000,
        net: 15000
    }
];
const profitMarginData = [
    {
        month: "Jul",
        margin: 35.4
    },
    {
        month: "Aug",
        margin: 37.5
    },
    {
        month: "Sep",
        margin: 41.2
    },
    {
        month: "Oct",
        margin: 38.8
    },
    {
        month: "Nov",
        margin: 40.2
    },
    {
        month: "Dec",
        margin: 40.8
    },
    {
        month: "Jan",
        margin: 41.0
    }
];
const budgetData = [
    {
        category: "Marketing",
        budget: 25000,
        spent: 18500,
        remaining: 6500
    },
    {
        category: "Development",
        budget: 45000,
        spent: 38000,
        remaining: 7000
    },
    {
        category: "Operations",
        budget: 15000,
        spent: 12500,
        remaining: 2500
    },
    {
        category: "Software",
        budget: 8000,
        spent: 6200,
        remaining: 1800
    },
    {
        category: "Team",
        budget: 12000,
        spent: 9800,
        remaining: 2200
    }
];
}),
"[project]/lib/data/hr.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Sample HR Data for Development
__turbopack_context__.s([
    "attendanceRecords",
    ()=>attendanceRecords,
    "candidates",
    ()=>candidates,
    "courseEnrollments",
    ()=>courseEnrollments,
    "employees",
    ()=>employees,
    "expenses",
    ()=>expenses,
    "hrMetrics",
    ()=>hrMetrics,
    "jobPostings",
    ()=>jobPostings,
    "leaveRequests",
    ()=>leaveRequests,
    "okrs",
    ()=>okrs,
    "onboardingChecklists",
    ()=>onboardingChecklists,
    "skillDefinitions",
    ()=>skillDefinitions,
    "trainingCourses",
    ()=>trainingCourses
]);
const employees = [
    {
        id: "EMP001",
        firstName: "John",
        lastName: "Doe",
        email: "john@agencyflow.com",
        phone: "+1 (555) 123-4567",
        avatar: undefined,
        dateOfBirth: "1990-05-15",
        address: "123 Main St, San Francisco, CA 94102",
        emergencyContacts: [
            {
                name: "Jane Doe",
                relationship: "Spouse",
                phone: "+1 (555) 123-4500",
                email: "jane.doe@email.com"
            }
        ],
        employeeId: "EMP001",
        jobTitle: "Lead Developer",
        department: "development",
        employmentType: "full-time",
        status: "active",
        managerId: "EMP008",
        managerName: "Lisa Thompson",
        startDate: "2022-03-15",
        workLocation: "San Francisco, CA",
        salary: 120000,
        currency: "USD",
        payFrequency: "bi-weekly",
        skills: [
            {
                skillId: "sk1",
                skillName: "React",
                category: "technical",
                proficiency: "expert",
                yearsUsed: 5,
                isVerified: true
            },
            {
                skillId: "sk2",
                skillName: "TypeScript",
                category: "technical",
                proficiency: "expert",
                yearsUsed: 4,
                isVerified: true
            },
            {
                skillId: "sk3",
                skillName: "Node.js",
                category: "technical",
                proficiency: "advanced",
                yearsUsed: 4,
                isVerified: true
            },
            {
                skillId: "sk4",
                skillName: "PostgreSQL",
                category: "technical",
                proficiency: "advanced",
                yearsUsed: 3,
                isVerified: false
            }
        ],
        yearsOfExperience: 7,
        certifications: [
            "AWS Certified Developer",
            "Google Cloud Professional"
        ],
        performanceRating: 4.8,
        lastReviewDate: "2024-11-15",
        nextReviewDate: "2025-05-15",
        documents: [
            {
                id: "d1",
                name: "Employment Contract",
                type: "contract",
                fileUrl: "#",
                uploadedAt: "2022-03-15"
            },
            {
                id: "d2",
                name: "NDA Agreement",
                type: "nda",
                fileUrl: "#",
                uploadedAt: "2022-03-15"
            },
            {
                id: "d3",
                name: "AWS Certification",
                type: "certification",
                fileUrl: "#",
                uploadedAt: "2023-06-20",
                expiresAt: "2026-06-20"
            }
        ],
        careerHistory: [
            {
                id: "c1",
                date: "2022-03-15",
                type: "hired",
                title: "Hired as Senior Developer",
                details: "Joined the development team"
            },
            {
                id: "c2",
                date: "2023-06-01",
                type: "promotion",
                title: "Promoted to Lead Developer",
                details: "Recognized for exceptional performance",
                previousValue: "Senior Developer",
                newValue: "Lead Developer"
            },
            {
                id: "c3",
                date: "2023-06-01",
                type: "salary-change",
                title: "Salary Adjustment",
                details: "Promotion raise",
                previousValue: "$100,000",
                newValue: "$120,000"
            }
        ],
        leaveBalance: {
            vacation: {
                total: 20,
                used: 8,
                pending: 0
            },
            sick: {
                total: 10,
                used: 2,
                pending: 0
            },
            personal: {
                total: 5,
                used: 1,
                pending: 0
            },
            unpaid: {
                used: 0
            }
        },
        createdAt: "2022-03-15",
        updatedAt: "2024-12-20"
    },
    {
        id: "EMP002",
        firstName: "Sarah",
        lastName: "Mitchell",
        email: "sarah@agencyflow.com",
        phone: "+1 (555) 234-5678",
        employeeId: "EMP002",
        jobTitle: "Senior Designer",
        department: "design",
        employmentType: "full-time",
        status: "active",
        managerId: "EMP008",
        managerName: "Lisa Thompson",
        startDate: "2022-06-20",
        workLocation: "New York, NY",
        salary: 95000,
        currency: "USD",
        payFrequency: "bi-weekly",
        skills: [
            {
                skillId: "sk5",
                skillName: "Figma",
                category: "design",
                proficiency: "expert",
                yearsUsed: 5,
                isVerified: true
            },
            {
                skillId: "sk6",
                skillName: "Adobe XD",
                category: "design",
                proficiency: "advanced",
                yearsUsed: 4,
                isVerified: true
            },
            {
                skillId: "sk7",
                skillName: "UI/UX Design",
                category: "design",
                proficiency: "expert",
                yearsUsed: 5,
                isVerified: true
            }
        ],
        yearsOfExperience: 5,
        certifications: [
            "Adobe Certified Associate",
            "Figma Professional"
        ],
        performanceRating: 4.7,
        lastReviewDate: "2024-10-20",
        nextReviewDate: "2025-04-20",
        documents: [],
        careerHistory: [],
        emergencyContacts: [],
        leaveBalance: {
            vacation: {
                total: 20,
                used: 10,
                pending: 0
            },
            sick: {
                total: 10,
                used: 0,
                pending: 0
            },
            personal: {
                total: 5,
                used: 2,
                pending: 0
            },
            unpaid: {
                used: 0
            }
        },
        createdAt: "2022-06-20",
        updatedAt: "2024-12-20"
    },
    {
        id: "EMP003",
        firstName: "David",
        lastName: "Park",
        email: "david@agencyflow.com",
        phone: "+1 (555) 789-0123",
        employeeId: "EMP003",
        jobTitle: "Account Manager",
        department: "management",
        employmentType: "full-time",
        status: "active",
        managerId: "EMP008",
        managerName: "Lisa Thompson",
        startDate: "2022-09-01",
        workLocation: "Seattle, WA",
        salary: 90000,
        currency: "USD",
        payFrequency: "bi-weekly",
        skills: [
            {
                skillId: "sk8",
                skillName: "Project Management",
                category: "management",
                proficiency: "expert",
                yearsUsed: 6,
                isVerified: true
            },
            {
                skillId: "sk9",
                skillName: "Client Relations",
                category: "soft-skills",
                proficiency: "expert",
                yearsUsed: 6,
                isVerified: true
            }
        ],
        yearsOfExperience: 6,
        certifications: [
            "PMP Certified"
        ],
        performanceRating: 4.7,
        lastReviewDate: "2024-10-25",
        nextReviewDate: "2025-04-25",
        documents: [],
        careerHistory: [],
        emergencyContacts: [],
        leaveBalance: {
            vacation: {
                total: 20,
                used: 5,
                pending: 0
            },
            sick: {
                total: 10,
                used: 1,
                pending: 0
            },
            personal: {
                total: 5,
                used: 0,
                pending: 0
            },
            unpaid: {
                used: 0
            }
        },
        createdAt: "2022-09-01",
        updatedAt: "2024-12-20"
    },
    {
        id: "EMP008",
        firstName: "Lisa",
        lastName: "Thompson",
        email: "lisa@agencyflow.com",
        phone: "+1 (555) 890-1234",
        employeeId: "EMP008",
        jobTitle: "Creative Director",
        department: "management",
        employmentType: "full-time",
        status: "active",
        startDate: "2021-11-15",
        workLocation: "Los Angeles, CA",
        salary: 150000,
        currency: "USD",
        payFrequency: "bi-weekly",
        skills: [
            {
                skillId: "sk10",
                skillName: "Leadership",
                category: "management",
                proficiency: "expert",
                yearsUsed: 10,
                isVerified: true
            },
            {
                skillId: "sk11",
                skillName: "Brand Strategy",
                category: "design",
                proficiency: "expert",
                yearsUsed: 10,
                isVerified: true
            }
        ],
        yearsOfExperience: 10,
        certifications: [
            "Leadership Excellence"
        ],
        performanceRating: 4.9,
        lastReviewDate: "2024-11-10",
        nextReviewDate: "2025-05-10",
        documents: [],
        careerHistory: [],
        emergencyContacts: [],
        leaveBalance: {
            vacation: {
                total: 25,
                used: 8,
                pending: 0
            },
            sick: {
                total: 10,
                used: 0,
                pending: 0
            },
            personal: {
                total: 5,
                used: 1,
                pending: 0
            },
            unpaid: {
                used: 0
            }
        },
        createdAt: "2021-11-15",
        updatedAt: "2024-12-20"
    }
];
const candidates = [
    {
        id: "CAN001",
        firstName: "Alex",
        lastName: "Johnson",
        email: "alex.j@email.com",
        phone: "+1 (555) 111-2222",
        position: "Frontend Developer",
        department: "development",
        stage: "interview",
        source: "LinkedIn",
        resumeUrl: "#",
        appliedAt: "2024-12-15",
        notes: [
            "Strong React experience",
            "Good communication skills"
        ],
        interviews: [
            {
                id: "int1",
                candidateId: "CAN001",
                interviewerId: "EMP001",
                interviewerName: "John Doe",
                scheduledAt: "2024-12-22T14:00:00",
                duration: 60,
                type: "technical",
                status: "scheduled"
            }
        ],
        rating: 4.2,
        expectedSalary: 85000,
        availableFrom: "2025-01-15",
        skills: [
            "React",
            "TypeScript",
            "CSS",
            "Git"
        ]
    },
    {
        id: "CAN002",
        firstName: "Maria",
        lastName: "Garcia",
        email: "maria.g@email.com",
        phone: "+1 (555) 222-3333",
        position: "UI/UX Designer",
        department: "design",
        stage: "screening",
        source: "Referral",
        appliedAt: "2024-12-18",
        notes: [
            "Great portfolio"
        ],
        interviews: [],
        rating: 0,
        skills: [
            "Figma",
            "Adobe CC",
            "Prototyping"
        ]
    },
    {
        id: "CAN003",
        firstName: "James",
        lastName: "Kim",
        email: "james.k@email.com",
        phone: "+1 (555) 333-4444",
        position: "Backend Developer",
        department: "development",
        stage: "offer",
        source: "Job Board",
        appliedAt: "2024-12-10",
        notes: [
            "Excellent technical skills",
            "5 years experience"
        ],
        interviews: [
            {
                id: "int2",
                candidateId: "CAN003",
                interviewerId: "EMP001",
                interviewerName: "John Doe",
                scheduledAt: "2024-12-16T10:00:00",
                duration: 45,
                type: "technical",
                status: "completed",
                feedback: "Strong backend skills",
                rating: 4.5
            }
        ],
        rating: 4.5,
        expectedSalary: 95000,
        availableFrom: "2025-01-01",
        skills: [
            "Node.js",
            "Python",
            "PostgreSQL",
            "AWS"
        ]
    },
    {
        id: "CAN004",
        firstName: "Emily",
        lastName: "Davis",
        email: "emily.d@email.com",
        phone: "+1 (555) 444-5555",
        position: "Marketing Specialist",
        department: "marketing",
        stage: "applied",
        source: "Company Website",
        appliedAt: "2024-12-20",
        notes: [],
        interviews: [],
        rating: 0,
        skills: [
            "SEO",
            "Content Marketing",
            "Google Analytics"
        ]
    }
];
const jobPostings = [
    {
        id: "JOB001",
        title: "Senior Frontend Developer",
        department: "development",
        location: "Remote",
        employmentType: "full-time",
        description: "We're looking for an experienced frontend developer to join our team.",
        requirements: [
            "5+ years React experience",
            "TypeScript proficiency",
            "Team leadership experience"
        ],
        salary: {
            min: 100000,
            max: 130000
        },
        status: "active",
        postedAt: "2024-12-01",
        closesAt: "2025-01-15",
        applicantCount: 23
    },
    {
        id: "JOB002",
        title: "UI/UX Designer",
        department: "design",
        location: "New York, NY",
        employmentType: "full-time",
        description: "Join our creative team to design beautiful user experiences.",
        requirements: [
            "3+ years design experience",
            "Figma expertise",
            "Portfolio required"
        ],
        salary: {
            min: 75000,
            max: 95000
        },
        status: "active",
        postedAt: "2024-12-10",
        applicantCount: 15
    }
];
const leaveRequests = [
    {
        id: "LR001",
        employeeId: "EMP001",
        employeeName: "John Doe",
        leaveType: "vacation",
        startDate: "2024-12-23",
        endDate: "2024-12-27",
        totalDays: 3,
        reason: "Holiday vacation with family",
        status: "approved",
        approverId: "EMP008",
        approverName: "Lisa Thompson",
        approvedAt: "2024-12-18",
        createdAt: "2024-12-15"
    },
    {
        id: "LR002",
        employeeId: "EMP002",
        employeeName: "Sarah Mitchell",
        leaveType: "sick",
        startDate: "2024-12-20",
        endDate: "2024-12-20",
        totalDays: 1,
        reason: "Doctor's appointment",
        status: "pending",
        createdAt: "2024-12-19"
    },
    {
        id: "LR003",
        employeeId: "EMP003",
        employeeName: "David Park",
        leaveType: "personal",
        startDate: "2025-01-02",
        endDate: "2025-01-03",
        totalDays: 2,
        reason: "Personal matters",
        status: "pending",
        createdAt: "2024-12-20"
    }
];
const okrs = [
    {
        id: "OKR001",
        employeeId: "EMP001",
        title: "Improve Frontend Performance",
        description: "Optimize application load time and user experience",
        quarter: "Q1 2025",
        keyResults: [
            {
                id: "kr1",
                title: "Reduce initial load time to under 2 seconds",
                targetValue: 2,
                currentValue: 2.8,
                unit: "seconds",
                progress: 70
            },
            {
                id: "kr2",
                title: "Achieve 95+ Lighthouse performance score",
                targetValue: 95,
                currentValue: 88,
                unit: "score",
                progress: 65
            },
            {
                id: "kr3",
                title: "Implement lazy loading for 100% of images",
                targetValue: 100,
                currentValue: 75,
                unit: "%",
                progress: 75
            }
        ],
        overallProgress: 70,
        status: "on-track",
        createdAt: "2024-12-01",
        updatedAt: "2024-12-20"
    },
    {
        id: "OKR002",
        employeeId: "EMP002",
        title: "Elevate Design System",
        description: "Create a comprehensive and consistent design system",
        quarter: "Q1 2025",
        keyResults: [
            {
                id: "kr4",
                title: "Document 50 UI components",
                targetValue: 50,
                currentValue: 35,
                unit: "components",
                progress: 70
            },
            {
                id: "kr5",
                title: "Achieve 90% designer adoption",
                targetValue: 90,
                currentValue: 80,
                unit: "%",
                progress: 88
            }
        ],
        overallProgress: 79,
        status: "on-track",
        createdAt: "2024-12-01",
        updatedAt: "2024-12-20"
    }
];
const trainingCourses = [
    {
        id: "TR001",
        title: "Information Security Fundamentals",
        description: "Annual security awareness training covering data protection, phishing, and best practices.",
        type: "mandatory",
        category: "technical",
        duration: 2,
        provider: "Internal",
        format: "online"
    },
    {
        id: "TR002",
        title: "Advanced React Patterns",
        description: "Deep dive into advanced React patterns and performance optimization.",
        type: "optional",
        category: "technical",
        duration: 8,
        provider: "Frontend Masters",
        format: "online"
    },
    {
        id: "TR003",
        title: "Leadership Essentials",
        description: "Core leadership skills for team leads and managers.",
        type: "optional",
        category: "management",
        duration: 16,
        provider: "Internal",
        format: "hybrid"
    }
];
const courseEnrollments = [
    {
        id: "CE001",
        courseId: "TR001",
        courseName: "Information Security Fundamentals",
        employeeId: "EMP001",
        status: "completed",
        progress: 100,
        enrolledAt: "2024-11-01",
        completedAt: "2024-11-05",
        score: 95
    },
    {
        id: "CE002",
        courseId: "TR002",
        courseName: "Advanced React Patterns",
        employeeId: "EMP001",
        status: "in-progress",
        progress: 60,
        enrolledAt: "2024-12-01"
    },
    {
        id: "CE003",
        courseId: "TR001",
        courseName: "Information Security Fundamentals",
        employeeId: "EMP002",
        status: "enrolled",
        progress: 0,
        enrolledAt: "2024-12-15"
    }
];
const skillDefinitions = [
    {
        id: "sk1",
        name: "React",
        category: "technical",
        description: "Frontend JavaScript library",
        demandLevel: "critical"
    },
    {
        id: "sk2",
        name: "TypeScript",
        category: "technical",
        description: "Typed JavaScript",
        demandLevel: "high"
    },
    {
        id: "sk3",
        name: "Node.js",
        category: "technical",
        description: "JavaScript runtime",
        demandLevel: "high"
    },
    {
        id: "sk4",
        name: "PostgreSQL",
        category: "technical",
        description: "Relational database",
        demandLevel: "medium"
    },
    {
        id: "sk5",
        name: "Figma",
        category: "design",
        description: "Design tool",
        demandLevel: "critical"
    },
    {
        id: "sk6",
        name: "Adobe XD",
        category: "design",
        description: "UI/UX design tool",
        demandLevel: "medium"
    },
    {
        id: "sk7",
        name: "UI/UX Design",
        category: "design",
        description: "User interface and experience design",
        demandLevel: "high"
    },
    {
        id: "sk8",
        name: "Project Management",
        category: "management",
        description: "Planning and executing projects",
        demandLevel: "high"
    },
    {
        id: "sk9",
        name: "Client Relations",
        category: "soft-skills",
        description: "Managing client relationships",
        demandLevel: "high"
    },
    {
        id: "sk10",
        name: "Leadership",
        category: "management",
        description: "Leading teams effectively",
        demandLevel: "high"
    },
    {
        id: "sk11",
        name: "Python",
        category: "technical",
        description: "Programming language",
        demandLevel: "medium"
    },
    {
        id: "sk12",
        name: "AWS",
        category: "technical",
        description: "Cloud services",
        demandLevel: "high"
    }
];
const expenses = [
    {
        id: "EXP001",
        employeeId: "EMP001",
        employeeName: "John Doe",
        projectId: "PROJ001",
        category: "software",
        amount: 99,
        currency: "USD",
        description: "GitHub Copilot Annual Subscription",
        status: "approved",
        submittedAt: "2024-12-10",
        approvedAt: "2024-12-12"
    },
    {
        id: "EXP002",
        employeeId: "EMP002",
        employeeName: "Sarah Mitchell",
        category: "software",
        amount: 15,
        currency: "USD",
        description: "Figma Monthly Plugin",
        status: "submitted",
        submittedAt: "2024-12-18"
    }
];
const hrMetrics = {
    headcount: 8,
    headcountGrowth: 12.5,
    attritionRate: 5.2,
    avgTenure: 2.3,
    openPositions: 2,
    timeToHire: 28,
    diversityMetrics: {
        gender: {
            male: 5,
            female: 3,
            other: 0
        },
        departments: [
            {
                name: "Development",
                count: 3
            },
            {
                name: "Design",
                count: 2
            },
            {
                name: "Marketing",
                count: 1
            },
            {
                name: "Management",
                count: 2
            }
        ]
    },
    performanceDistribution: [
        {
            rating: "Exceptional (4.5+)",
            count: 3
        },
        {
            rating: "Strong (4.0-4.4)",
            count: 4
        },
        {
            rating: "Meets Expectations (3.5-3.9)",
            count: 1
        },
        {
            rating: "Needs Improvement (<3.5)",
            count: 0
        }
    ]
};
const onboardingChecklists = [
    {
        employeeId: "NEW001",
        employeeName: "New Employee",
        startDate: "2025-01-06",
        progress: 0,
        tasks: [
            {
                id: "ob1",
                title: "Setup email account",
                description: "Create company email",
                category: "it",
                assigneeId: "IT001",
                assigneeName: "IT Admin",
                dueDate: "2025-01-06",
                status: "pending"
            },
            {
                id: "ob2",
                title: "Provision laptop",
                description: "Setup and configure laptop",
                category: "it",
                assigneeId: "IT001",
                assigneeName: "IT Admin",
                dueDate: "2025-01-06",
                status: "pending"
            },
            {
                id: "ob3",
                title: "Sign employment contract",
                description: "Review and sign contract",
                category: "hr",
                assigneeId: "HR001",
                assigneeName: "HR Manager",
                dueDate: "2025-01-06",
                status: "pending"
            },
            {
                id: "ob4",
                title: "Complete tax forms",
                description: "Fill W-4 and related forms",
                category: "hr",
                assigneeId: "HR001",
                assigneeName: "HR Manager",
                dueDate: "2025-01-07",
                status: "pending"
            },
            {
                id: "ob5",
                title: "Team introduction meeting",
                description: "Meet the team",
                category: "management",
                assigneeId: "EMP003",
                assigneeName: "David Park",
                dueDate: "2025-01-06",
                status: "pending"
            },
            {
                id: "ob6",
                title: "Complete security training",
                description: "Mandatory security awareness",
                category: "training",
                assigneeId: "NEW001",
                assigneeName: "New Employee",
                dueDate: "2025-01-10",
                status: "pending"
            }
        ]
    }
];
// ==================== Attendance Records ====================
// Helper to generate dates
const generateAttendanceRecords = ()=>{
    const records = [];
    const employees = [
        {
            id: "EMP001",
            name: "John Doe"
        },
        {
            id: "EMP002",
            name: "Sarah Mitchell"
        },
        {
            id: "EMP003",
            name: "David Park"
        },
        {
            id: "EMP008",
            name: "Lisa Thompson"
        }
    ];
    // Generate records for the last 30 days
    const today = new Date();
    for(let i = 0; i < 30; i++){
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split("T")[0];
        const dayOfWeek = date.getDay();
        // Skip weekends
        if (dayOfWeek === 0 || dayOfWeek === 6) continue;
        employees.forEach((emp, empIndex)=>{
            // Create varied attendance patterns
            const randomFactor = (i + empIndex) % 10;
            let status = "present";
            let clockIn = "09:00";
            let clockOut = "18:00";
            let workLocation = "office";
            let notes = undefined;
            if (randomFactor === 0) {
                status = "late";
                clockIn = "09:45";
                notes = "Traffic delay";
            } else if (randomFactor === 1) {
                status = "remote";
                workLocation = "remote";
                clockIn = "08:30";
                clockOut = "17:30";
            } else if (randomFactor === 2 && empIndex === 0) {
                status = "absent";
                clockIn = undefined;
                clockOut = undefined;
                notes = "Sick leave";
            } else if (randomFactor === 3) {
                status = "half-day";
                clockOut = "13:00";
                notes = "Doctor appointment";
            } else if (randomFactor === 4) {
                status = "remote";
                workLocation = "remote";
            }
            records.push({
                id: `ATT_${emp.id}_${dateStr}`,
                employeeId: emp.id,
                employeeName: emp.name,
                date: dateStr,
                status,
                clockIn: status !== "absent" ? clockIn : undefined,
                clockOut: status !== "absent" ? clockOut : undefined,
                totalHours: status === "half-day" ? 4 : status === "absent" ? 0 : 8,
                workLocation: status !== "absent" ? workLocation : undefined,
                notes,
                markedBy: "system",
                markedAt: dateStr + "T09:00:00",
                isAutoMarked: false
            });
        });
    }
    return records;
};
const attendanceRecords = generateAttendanceRecords();
}),
"[project]/app/actions/data:4da60d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00de1d304a4cf2a3d56cdde0ec379e9011c1baa53e":"getEmployees"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "getEmployees",
    ()=>getEmployees
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getEmployees = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00de1d304a4cf2a3d56cdde0ec379e9011c1baa53e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getEmployees"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBFTVBMT1lFRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xyXG4gICAgICBpZDogZS5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBlLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBlLmVtYWlsLFxyXG4gICAgICBwaG9uZTogZS5waG9uZSxcclxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxyXG4gICAgICBqb2JUaXRsZTogZS5qb2JUaXRsZSxcclxuICAgICAgZGVwYXJ0bWVudDogZS5kZXBhcnRtZW50LFxyXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgbWFuYWdlcklkOiBlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc3RhcnREYXRlOiBlLnN0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZTogZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcclxuICAgICAgc2FsYXJ5OiBlLnNhbGFyeSxcclxuICAgICAgY3VycmVuY3k6IGUuY3VycmVuY3ksXHJcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXHJcbiAgICAgIHNraWxsczogZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIHllYXJzT2ZFeHBlcmllbmNlOiBlLnllYXJzT2ZFeHBlcmllbmNlLFxyXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgcGVyZm9ybWFuY2VSYXRpbmc6IGUucGVyZm9ybWFuY2VSYXRpbmcsXHJcbiAgICAgIGRvY3VtZW50czogZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcclxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IGUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXHJcbiAgICAgIGxlYXZlQmFsYW5jZTogZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRBdDogZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBlbXBsb3llZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGpvYlRpdGxlOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBlbXBsb3ltZW50VHlwZT86IHN0cmluZ1xyXG4gIHN0YXR1cz86IHN0cmluZ1xyXG4gIG1hbmFnZXJJZD86IHN0cmluZ1xyXG4gIG1hbmFnZXJOYW1lPzogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcclxuICBzYWxhcnk/OiBudW1iZXJcclxuICBjdXJyZW5jeT86IHN0cmluZ1xyXG4gIHBheUZyZXF1ZW5jeT86IHN0cmluZ1xyXG4gIHNraWxscz86IGFueVtdXHJcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcclxuICBjZXJ0aWZpY2F0aW9ucz86IHN0cmluZ1tdXHJcbiAgcGVyZm9ybWFuY2VSYXRpbmc/OiBudW1iZXJcclxuICBkb2N1bWVudHM/OiBhbnlbXVxyXG4gIGNhcmVlckhpc3Rvcnk/OiBhbnlbXVxyXG4gIGVtZXJnZW5jeUNvbnRhY3RzPzogYW55W11cclxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50LFxyXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImFjdGl2ZVwiLFxyXG4gICAgICAgIG1hbmFnZXJJZDogZGF0YS5tYW5hZ2VySWQgfHwgbnVsbCxcclxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBcIlJlbW90ZVwiLFxyXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcclxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSB8fCBcIkJEVFwiLFxyXG4gICAgICAgIHBheUZyZXF1ZW5jeTogZGF0YS5wYXlGcmVxdWVuY3kgfHwgXCJtb250aGx5XCIsXHJcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICB5ZWFyc09mRXhwZXJpZW5jZTogZGF0YS55ZWFyc09mRXhwZXJpZW5jZSB8fCAwLFxyXG4gICAgICAgIGNlcnRpZmljYXRpb25zOiAoZGF0YS5jZXJ0aWZpY2F0aW9ucyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXHJcbiAgICAgICAgZG9jdW1lbnRzOiAoZGF0YS5kb2N1bWVudHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICBjYXJlZXJIaXN0b3J5OiAoZGF0YS5jYXJlZXJIaXN0b3J5IHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgbGVhdmVCYWxhbmNlOiAoZGF0YS5sZWF2ZUJhbGFuY2UgfHwge30pIGFzIGFueSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgcHJpc21hLnRlYW1FbXBsb3llZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBlbXBsb3llZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGVtcGxveWVlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgcHJpc21hLnRlYW1DYW5kaWRhdGUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBjLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGMubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxyXG4gICAgICBwaG9uZTogYy5waG9uZSxcclxuICAgICAgcG9zaXRpb246IGMucG9zaXRpb24sXHJcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcclxuICAgICAgc3RhZ2U6IGMuc3RhZ2UsXHJcbiAgICAgIHNvdXJjZTogYy5zb3VyY2UsXHJcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXHJcbiAgICAgIG5vdGVzOiBjLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjLmV4cGVjdGVkU2FsYXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXZhaWxhYmxlRnJvbTogYy5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY2FuZGlkYXRlc1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYW5kaWRhdGUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIHBvc2l0aW9uOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBzdGFnZT86IHN0cmluZ1xyXG4gIHNvdXJjZT86IHN0cmluZ1xyXG4gIGFwcGxpZWRBdDogc3RyaW5nXHJcbiAgc2tpbGxzPzogc3RyaW5nW11cclxuICBleHBlY3RlZFNhbGFyeT86IG51bWJlclxyXG4gIGF2YWlsYWJsZUZyb20/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxyXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcclxuICAgICAgICBzdGFnZTogZGF0YS5zdGFnZSB8fCBcImFwcGxpZWRcIixcclxuICAgICAgICBzb3VyY2U6IGRhdGEuc291cmNlIHx8IFwiXCIsXHJcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcclxuICAgICAgICBza2lsbHM6IChkYXRhLnNraWxscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGV4cGVjdGVkU2FsYXJ5OiBkYXRhLmV4cGVjdGVkU2FsYXJ5IHx8IG51bGwsXHJcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICBub3RlczogY2FuZGlkYXRlLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcclxuICAgICAgZXhwZWN0ZWRTYWxhcnk6IGNhbmRpZGF0ZS5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGF2YWlsYWJsZUZyb206IGNhbmRpZGF0ZS5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY2FuZGlkYXRlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNhbmRpZGF0ZSxcclxuICAgICAgbm90ZXM6IGNhbmRpZGF0ZS5ub3RlcyBhcyBzdHJpbmdbXSxcclxuICAgICAgaW50ZXJ2aWV3czogY2FuZGlkYXRlLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhdmFpbGFibGVGcm9tOiBjYW5kaWRhdGUuYXZhaWxhYmxlRnJvbSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNraWxsczogY2FuZGlkYXRlLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhbmRpZGF0ZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IExFQVZFIFJFUVVFU1QgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcclxuICAgICAgaWQ6IHIuaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcclxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcclxuICAgICAgbGVhdmVUeXBlOiByLmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXJ0RGF0ZTogci5zdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcclxuICAgICAgdG90YWxEYXlzOiByLnRvdGFsRGF5cyxcclxuICAgICAgcmVhc29uOiByLnJlYXNvbixcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGFwcHJvdmVySWQ6IHIuYXBwcm92ZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVyTmFtZTogci5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICByZWplY3Rpb25SZWFzb246IHIucmVqZWN0aW9uUmVhc29uIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiByLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsZWF2ZSByZXF1ZXN0czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhdmVSZXF1ZXN0KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIGxlYXZlVHlwZTogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICBlbmREYXRlOiBzdHJpbmdcclxuICB0b3RhbERheXM6IG51bWJlclxyXG4gIHJlYXNvbjogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHByaXNtYS50ZWFtTGVhdmVSZXF1ZXN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBkYXRhLmVtcGxveWVlTmFtZSxcclxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxyXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXHJcbiAgICAgICAgcmVhc29uOiBkYXRhLnJlYXNvbixcclxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlcXVlc3QsXHJcbiAgICAgIGxlYXZlVHlwZTogcmVxdWVzdC5sZWF2ZVR5cGUgYXMgYW55LFxyXG4gICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzIGFzIGFueSxcclxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZXJOYW1lOiByZXF1ZXN0LmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVkQXQ6IHJlcXVlc3QuYXBwcm92ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IHJlcXVlc3QuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBsZWF2ZSByZXF1ZXN0OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgbGVhdmUgcmVxdWVzdFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVxdWVzdCxcclxuICAgICAgbGVhdmVUeXBlOiByZXF1ZXN0LmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBhcHByb3ZlcklkOiByZXF1ZXN0LmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3Zlck5hbWU6IHJlcXVlc3QuYXBwcm92ZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByZXF1ZXN0LnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVxdWVzdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGxlYXZlIHJlcXVlc3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQVRURU5EQU5DRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG1hcmtlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIGRhdGU6IHIuZGF0ZSxcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNsb2NrT3V0OiByLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHdvcmtMb2NhdGlvbjogci53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3Rlczogci5ub3RlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggYXR0ZW5kYW5jZSByZWNvcmRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUF0dGVuZGFuY2VSZWNvcmQoZGF0YToge1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBjbG9ja0luPzogc3RyaW5nXHJcbiAgY2xvY2tPdXQ/OiBzdHJpbmdcclxuICBicmVha01pbnV0ZXM/OiBudW1iZXJcclxuICB0b3RhbEhvdXJzPzogbnVtYmVyXHJcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXHJcbiAgbm90ZXM/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbXBsb3llZUlkX2RhdGU6IHtcclxuICAgICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgY2xvY2tJbjogZGF0YS5jbG9ja0luIHx8IG51bGwsXHJcbiAgICAgICAgY2xvY2tPdXQ6IGRhdGEuY2xvY2tPdXQgfHwgbnVsbCxcclxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXHJcbiAgICAgICAgdG90YWxIb3VyczogZGF0YS50b3RhbEhvdXJzIHx8IG51bGwsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBudWxsLFxyXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgbWFya2VkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxyXG4gICAgICAgIGNsb2NrT3V0OiBkYXRhLmNsb2NrT3V0IHx8IG51bGwsXHJcbiAgICAgICAgYnJlYWtNaW51dGVzOiBkYXRhLmJyZWFrTWludXRlcyB8fCBudWxsLFxyXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxyXG4gICAgICAgIHdvcmtMb2NhdGlvbjogZGF0YS53b3JrTG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBdHRlbmRhbmNlUmVjb3JkKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T0tScygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tycyA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBva3JzLm1hcCgobykgPT4gKHtcclxuICAgICAgaWQ6IG8uaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IG8uZW1wbG95ZWVJZCxcclxuICAgICAgdGl0bGU6IG8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxyXG4gICAgICBxdWFydGVyOiBvLnF1YXJ0ZXIsXHJcbiAgICAgIGtleVJlc3VsdHM6IG8ua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcclxuICAgICAgc3RhdHVzOiBvLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBvLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG8udXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIE9LUnM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIE9LUnNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICBxdWFydGVyOiBzdHJpbmdcclxuICBrZXlSZXN1bHRzPzogYW55W11cclxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwYXJlbnRPS1JJZD86IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9rciA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICBxdWFydGVyOiBkYXRhLnF1YXJ0ZXIsXHJcbiAgICAgICAga2V5UmVzdWx0czogKGRhdGEua2V5UmVzdWx0cyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwib24tdHJhY2tcIixcclxuICAgICAgICBwYXJlbnRPS1JJZDogZGF0YS5wYXJlbnRPS1JJZCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm9rcixcclxuICAgICAga2V5UmVzdWx0czogb2tyLmtleVJlc3VsdHMgYXMgYW55W10sXHJcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IG9rci5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBPS1I6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT0tSKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub2tyLFxyXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcclxuICAgICAgcGFyZW50T0tSSWQ6IG9rci5wYXJlbnRPS1JJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIE9LUjpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIE9LUlwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2VSZXZpZXdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmV2aWV3cy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcclxuICAgICAgcmV2aWV3ZXJOYW1lOiByLnJldmlld2VyTmFtZSxcclxuICAgICAgcGVyaW9kOiByLnBlcmlvZCxcclxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxyXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcclxuICAgICAgb3ZlcmFsbFJhdGluZzogci5vdmVyYWxsUmF0aW5nLFxyXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByLnN0cmVuZ3RocyBhcyBzdHJpbmdbXSxcclxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogci5hcmVhc0ZvckltcHJvdmVtZW50IGFzIHN0cmluZ1tdLFxyXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByLnNhbGFyeUNoYW5nZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHByb21vdGlvblJlY29tbWVuZGVkOiByLnByb21vdGlvblJlY29tbWVuZGVkLFxyXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHIuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZXJmb3JtYW5jZSByZXZpZXdzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBwZXJmb3JtYW5jZSByZXZpZXdzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIHJldmlld2VySWQ6IHN0cmluZ1xyXG4gIHJldmlld2VyTmFtZTogc3RyaW5nXHJcbiAgcGVyaW9kOiBzdHJpbmdcclxuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBvdmVyYWxsUmF0aW5nPzogbnVtYmVyXHJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxyXG4gIHN0cmVuZ3Rocz86IHN0cmluZ1tdXHJcbiAgYXJlYXNGb3JJbXByb3ZlbWVudD86IHN0cmluZ1tdXHJcbiAgZ29hbHM/OiBzdHJpbmdbXVxyXG4gIHNhbGFyeUNoYW5nZT86IG51bWJlclxyXG4gIHByb21vdGlvblJlY29tbWVuZGVkPzogYm9vbGVhblxyXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmV2aWV3ID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxyXG4gICAgICAgIGVtcGxveWVlTmFtZTogZGF0YS5lbXBsb3llZU5hbWUsXHJcbiAgICAgICAgcmV2aWV3ZXJJZDogZGF0YS5yZXZpZXdlcklkLFxyXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXHJcbiAgICAgICAgcGVyaW9kOiBkYXRhLnBlcmlvZCxcclxuICAgICAgICBzY2hlZHVsZWREYXRlOiBkYXRhLnNjaGVkdWxlZERhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxyXG4gICAgICAgIG92ZXJhbGxSYXRpbmc6IGRhdGEub3ZlcmFsbFJhdGluZyB8fCAwLFxyXG4gICAgICAgIGNvbXBldGVuY3lSYXRpbmdzOiAoZGF0YS5jb21wZXRlbmN5UmF0aW5ncyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogKGRhdGEuYXJlYXNGb3JJbXByb3ZlbWVudCB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGdvYWxzOiAoZGF0YS5nb2FscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcclxuICAgICAgICBwcm9tb3Rpb25SZWNvbW1lbmRlZDogZGF0YS5wcm9tb3Rpb25SZWNvbW1lbmRlZCB8fCBmYWxzZSxcclxuICAgICAgICBwaXBSZXF1aXJlZDogZGF0YS5waXBSZXF1aXJlZCB8fCBmYWxzZSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBwcmlzbWEudGVhbVBlcmZvcm1hbmNlUmV2aWV3LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWluaW5nQ291cnNlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IHByaXNtYS50ZWFtVHJhaW5pbmdDb3Vyc2UuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNvdXJzZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgdGl0bGU6IGMudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxyXG4gICAgICBjYXRlZ29yeTogYy5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGR1cmF0aW9uOiBjLmR1cmF0aW9uLFxyXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcclxuICAgICAgZm9ybWF0OiBjLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGMuY2VydGlmaWNhdGlvbkV4cGlyeSB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYWluaW5nIGNvdXJzZXM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJhaW5pbmdDb3Vyc2UoZGF0YToge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBjYXRlZ29yeT86IHN0cmluZ1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxuICBmb3JtYXQ/OiBzdHJpbmdcclxuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUgfHwgXCJvcHRpb25hbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8IFwidGVjaG5pY2FsXCIsXHJcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBcIlwiLFxyXG4gICAgICAgIGZvcm1hdDogZGF0YS5mb3JtYXQgfHwgXCJvbmxpbmVcIixcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jb3Vyc2UsXHJcbiAgICAgIHR5cGU6IGNvdXJzZS50eXBlIGFzIGFueSxcclxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGZvcm1hdDogY291cnNlLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGNvdXJzZS5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHRyYWluaW5nIGNvdXJzZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENPVVJTRSBFTlJPTExNRU5UIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZW5yb2xsbWVudHMgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcclxuICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgIGNvdXJzZUlkOiBlLmNvdXJzZUlkLFxyXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGUuZW1wbG95ZWVJZCxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxyXG4gICAgICBlbnJvbGxlZEF0OiBlLmVucm9sbGVkQXQsXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZS5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvdXJzZSBlbnJvbGxtZW50czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY291cnNlIGVucm9sbG1lbnRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xyXG4gIGNvdXJzZUlkOiBzdHJpbmdcclxuICBjb3Vyc2VOYW1lOiBzdHJpbmdcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwcm9ncmVzcz86IG51bWJlclxyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvdXJzZUlkOiBkYXRhLmNvdXJzZUlkLFxyXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImVucm9sbGVkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBlbnJvbGxlZEF0OiBkYXRhLmVucm9sbGVkQXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZW5yb2xsbWVudCxcclxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGVucm9sbG1lbnQuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvdXJzZUVucm9sbG1lbnQoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbnJvbGxtZW50ID0gYXdhaXQgcHJpc21hLnRlYW1Db3Vyc2VFbnJvbGxtZW50LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmVucm9sbG1lbnQsXHJcbiAgICAgIHN0YXR1czogZW5yb2xsbWVudC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY2VydGlmaWNhdGVVcmw6IGVucm9sbG1lbnQuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY291cnNlIGVucm9sbG1lbnQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IEhPTElEQVkgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhvbGlkYXlzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBob2xpZGF5cyA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5maW5kTWFueSh7IG9yZGVyQnk6IHsgZGF0ZTogXCJhc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gaG9saWRheXMubWFwKGggPT4gKHtcclxuICAgICAgLi4uaCxcclxuICAgICAgY3JlYXRlZEF0OiBoLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhvbGlkYXlzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBob2xpZGF5c1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIb2xpZGF5KGRhdGE6IHsgZGF0ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaG9saWRheSA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaG9saWRheSxcclxuICAgICAgY3JlYXRlZEF0OiBob2xpZGF5LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBob2xpZGF5OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaG9saWRheVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVIb2xpZGF5KGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnRlYW1Ib2xpZGF5LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgaG9saWRheTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGhvbGlkYXlcIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVJBTXNCIn0=
}),
"[project]/app/actions/data:4e9fc6 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006d0908b33b2d2fae83f80b24e2976719b86f9f7b":"getAttendanceRecords"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "getAttendanceRecords",
    ()=>getAttendanceRecords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getAttendanceRecords = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("006d0908b33b2d2fae83f80b24e2976719b86f9f7b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAttendanceRecords"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBFTVBMT1lFRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xyXG4gICAgICBpZDogZS5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBlLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBlLmVtYWlsLFxyXG4gICAgICBwaG9uZTogZS5waG9uZSxcclxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxyXG4gICAgICBqb2JUaXRsZTogZS5qb2JUaXRsZSxcclxuICAgICAgZGVwYXJ0bWVudDogZS5kZXBhcnRtZW50LFxyXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgbWFuYWdlcklkOiBlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc3RhcnREYXRlOiBlLnN0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZTogZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcclxuICAgICAgc2FsYXJ5OiBlLnNhbGFyeSxcclxuICAgICAgY3VycmVuY3k6IGUuY3VycmVuY3ksXHJcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXHJcbiAgICAgIHNraWxsczogZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIHllYXJzT2ZFeHBlcmllbmNlOiBlLnllYXJzT2ZFeHBlcmllbmNlLFxyXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgcGVyZm9ybWFuY2VSYXRpbmc6IGUucGVyZm9ybWFuY2VSYXRpbmcsXHJcbiAgICAgIGRvY3VtZW50czogZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcclxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IGUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXHJcbiAgICAgIGxlYXZlQmFsYW5jZTogZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRBdDogZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBlbXBsb3llZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGpvYlRpdGxlOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBlbXBsb3ltZW50VHlwZT86IHN0cmluZ1xyXG4gIHN0YXR1cz86IHN0cmluZ1xyXG4gIG1hbmFnZXJJZD86IHN0cmluZ1xyXG4gIG1hbmFnZXJOYW1lPzogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcclxuICBzYWxhcnk/OiBudW1iZXJcclxuICBjdXJyZW5jeT86IHN0cmluZ1xyXG4gIHBheUZyZXF1ZW5jeT86IHN0cmluZ1xyXG4gIHNraWxscz86IGFueVtdXHJcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcclxuICBjZXJ0aWZpY2F0aW9ucz86IHN0cmluZ1tdXHJcbiAgcGVyZm9ybWFuY2VSYXRpbmc/OiBudW1iZXJcclxuICBkb2N1bWVudHM/OiBhbnlbXVxyXG4gIGNhcmVlckhpc3Rvcnk/OiBhbnlbXVxyXG4gIGVtZXJnZW5jeUNvbnRhY3RzPzogYW55W11cclxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50LFxyXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImFjdGl2ZVwiLFxyXG4gICAgICAgIG1hbmFnZXJJZDogZGF0YS5tYW5hZ2VySWQgfHwgbnVsbCxcclxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBcIlJlbW90ZVwiLFxyXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcclxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSB8fCBcIkJEVFwiLFxyXG4gICAgICAgIHBheUZyZXF1ZW5jeTogZGF0YS5wYXlGcmVxdWVuY3kgfHwgXCJtb250aGx5XCIsXHJcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICB5ZWFyc09mRXhwZXJpZW5jZTogZGF0YS55ZWFyc09mRXhwZXJpZW5jZSB8fCAwLFxyXG4gICAgICAgIGNlcnRpZmljYXRpb25zOiAoZGF0YS5jZXJ0aWZpY2F0aW9ucyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXHJcbiAgICAgICAgZG9jdW1lbnRzOiAoZGF0YS5kb2N1bWVudHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICBjYXJlZXJIaXN0b3J5OiAoZGF0YS5jYXJlZXJIaXN0b3J5IHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgbGVhdmVCYWxhbmNlOiAoZGF0YS5sZWF2ZUJhbGFuY2UgfHwge30pIGFzIGFueSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgcHJpc21hLnRlYW1FbXBsb3llZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBlbXBsb3llZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGVtcGxveWVlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgcHJpc21hLnRlYW1DYW5kaWRhdGUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBjLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGMubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxyXG4gICAgICBwaG9uZTogYy5waG9uZSxcclxuICAgICAgcG9zaXRpb246IGMucG9zaXRpb24sXHJcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcclxuICAgICAgc3RhZ2U6IGMuc3RhZ2UsXHJcbiAgICAgIHNvdXJjZTogYy5zb3VyY2UsXHJcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXHJcbiAgICAgIG5vdGVzOiBjLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjLmV4cGVjdGVkU2FsYXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXZhaWxhYmxlRnJvbTogYy5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY2FuZGlkYXRlc1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYW5kaWRhdGUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIHBvc2l0aW9uOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBzdGFnZT86IHN0cmluZ1xyXG4gIHNvdXJjZT86IHN0cmluZ1xyXG4gIGFwcGxpZWRBdDogc3RyaW5nXHJcbiAgc2tpbGxzPzogc3RyaW5nW11cclxuICBleHBlY3RlZFNhbGFyeT86IG51bWJlclxyXG4gIGF2YWlsYWJsZUZyb20/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxyXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcclxuICAgICAgICBzdGFnZTogZGF0YS5zdGFnZSB8fCBcImFwcGxpZWRcIixcclxuICAgICAgICBzb3VyY2U6IGRhdGEuc291cmNlIHx8IFwiXCIsXHJcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcclxuICAgICAgICBza2lsbHM6IChkYXRhLnNraWxscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGV4cGVjdGVkU2FsYXJ5OiBkYXRhLmV4cGVjdGVkU2FsYXJ5IHx8IG51bGwsXHJcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICBub3RlczogY2FuZGlkYXRlLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcclxuICAgICAgZXhwZWN0ZWRTYWxhcnk6IGNhbmRpZGF0ZS5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGF2YWlsYWJsZUZyb206IGNhbmRpZGF0ZS5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY2FuZGlkYXRlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNhbmRpZGF0ZSxcclxuICAgICAgbm90ZXM6IGNhbmRpZGF0ZS5ub3RlcyBhcyBzdHJpbmdbXSxcclxuICAgICAgaW50ZXJ2aWV3czogY2FuZGlkYXRlLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhdmFpbGFibGVGcm9tOiBjYW5kaWRhdGUuYXZhaWxhYmxlRnJvbSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNraWxsczogY2FuZGlkYXRlLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhbmRpZGF0ZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IExFQVZFIFJFUVVFU1QgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcclxuICAgICAgaWQ6IHIuaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcclxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcclxuICAgICAgbGVhdmVUeXBlOiByLmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXJ0RGF0ZTogci5zdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcclxuICAgICAgdG90YWxEYXlzOiByLnRvdGFsRGF5cyxcclxuICAgICAgcmVhc29uOiByLnJlYXNvbixcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGFwcHJvdmVySWQ6IHIuYXBwcm92ZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVyTmFtZTogci5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICByZWplY3Rpb25SZWFzb246IHIucmVqZWN0aW9uUmVhc29uIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiByLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsZWF2ZSByZXF1ZXN0czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhdmVSZXF1ZXN0KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIGxlYXZlVHlwZTogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICBlbmREYXRlOiBzdHJpbmdcclxuICB0b3RhbERheXM6IG51bWJlclxyXG4gIHJlYXNvbjogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHByaXNtYS50ZWFtTGVhdmVSZXF1ZXN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBkYXRhLmVtcGxveWVlTmFtZSxcclxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxyXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXHJcbiAgICAgICAgcmVhc29uOiBkYXRhLnJlYXNvbixcclxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlcXVlc3QsXHJcbiAgICAgIGxlYXZlVHlwZTogcmVxdWVzdC5sZWF2ZVR5cGUgYXMgYW55LFxyXG4gICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzIGFzIGFueSxcclxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZXJOYW1lOiByZXF1ZXN0LmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVkQXQ6IHJlcXVlc3QuYXBwcm92ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IHJlcXVlc3QuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBsZWF2ZSByZXF1ZXN0OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgbGVhdmUgcmVxdWVzdFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVxdWVzdCxcclxuICAgICAgbGVhdmVUeXBlOiByZXF1ZXN0LmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBhcHByb3ZlcklkOiByZXF1ZXN0LmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3Zlck5hbWU6IHJlcXVlc3QuYXBwcm92ZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByZXF1ZXN0LnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVxdWVzdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGxlYXZlIHJlcXVlc3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQVRURU5EQU5DRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG1hcmtlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIGRhdGU6IHIuZGF0ZSxcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNsb2NrT3V0OiByLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHdvcmtMb2NhdGlvbjogci53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3Rlczogci5ub3RlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggYXR0ZW5kYW5jZSByZWNvcmRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUF0dGVuZGFuY2VSZWNvcmQoZGF0YToge1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBjbG9ja0luPzogc3RyaW5nXHJcbiAgY2xvY2tPdXQ/OiBzdHJpbmdcclxuICBicmVha01pbnV0ZXM/OiBudW1iZXJcclxuICB0b3RhbEhvdXJzPzogbnVtYmVyXHJcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXHJcbiAgbm90ZXM/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbXBsb3llZUlkX2RhdGU6IHtcclxuICAgICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgY2xvY2tJbjogZGF0YS5jbG9ja0luIHx8IG51bGwsXHJcbiAgICAgICAgY2xvY2tPdXQ6IGRhdGEuY2xvY2tPdXQgfHwgbnVsbCxcclxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXHJcbiAgICAgICAgdG90YWxIb3VyczogZGF0YS50b3RhbEhvdXJzIHx8IG51bGwsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBudWxsLFxyXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgbWFya2VkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxyXG4gICAgICAgIGNsb2NrT3V0OiBkYXRhLmNsb2NrT3V0IHx8IG51bGwsXHJcbiAgICAgICAgYnJlYWtNaW51dGVzOiBkYXRhLmJyZWFrTWludXRlcyB8fCBudWxsLFxyXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxyXG4gICAgICAgIHdvcmtMb2NhdGlvbjogZGF0YS53b3JrTG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBdHRlbmRhbmNlUmVjb3JkKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T0tScygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tycyA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBva3JzLm1hcCgobykgPT4gKHtcclxuICAgICAgaWQ6IG8uaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IG8uZW1wbG95ZWVJZCxcclxuICAgICAgdGl0bGU6IG8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxyXG4gICAgICBxdWFydGVyOiBvLnF1YXJ0ZXIsXHJcbiAgICAgIGtleVJlc3VsdHM6IG8ua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcclxuICAgICAgc3RhdHVzOiBvLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBvLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG8udXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIE9LUnM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIE9LUnNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICBxdWFydGVyOiBzdHJpbmdcclxuICBrZXlSZXN1bHRzPzogYW55W11cclxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwYXJlbnRPS1JJZD86IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9rciA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICBxdWFydGVyOiBkYXRhLnF1YXJ0ZXIsXHJcbiAgICAgICAga2V5UmVzdWx0czogKGRhdGEua2V5UmVzdWx0cyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwib24tdHJhY2tcIixcclxuICAgICAgICBwYXJlbnRPS1JJZDogZGF0YS5wYXJlbnRPS1JJZCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm9rcixcclxuICAgICAga2V5UmVzdWx0czogb2tyLmtleVJlc3VsdHMgYXMgYW55W10sXHJcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IG9rci5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBPS1I6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT0tSKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub2tyLFxyXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcclxuICAgICAgcGFyZW50T0tSSWQ6IG9rci5wYXJlbnRPS1JJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIE9LUjpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIE9LUlwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2VSZXZpZXdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmV2aWV3cy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcclxuICAgICAgcmV2aWV3ZXJOYW1lOiByLnJldmlld2VyTmFtZSxcclxuICAgICAgcGVyaW9kOiByLnBlcmlvZCxcclxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxyXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcclxuICAgICAgb3ZlcmFsbFJhdGluZzogci5vdmVyYWxsUmF0aW5nLFxyXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByLnN0cmVuZ3RocyBhcyBzdHJpbmdbXSxcclxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogci5hcmVhc0ZvckltcHJvdmVtZW50IGFzIHN0cmluZ1tdLFxyXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByLnNhbGFyeUNoYW5nZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHByb21vdGlvblJlY29tbWVuZGVkOiByLnByb21vdGlvblJlY29tbWVuZGVkLFxyXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHIuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZXJmb3JtYW5jZSByZXZpZXdzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBwZXJmb3JtYW5jZSByZXZpZXdzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIHJldmlld2VySWQ6IHN0cmluZ1xyXG4gIHJldmlld2VyTmFtZTogc3RyaW5nXHJcbiAgcGVyaW9kOiBzdHJpbmdcclxuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBvdmVyYWxsUmF0aW5nPzogbnVtYmVyXHJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxyXG4gIHN0cmVuZ3Rocz86IHN0cmluZ1tdXHJcbiAgYXJlYXNGb3JJbXByb3ZlbWVudD86IHN0cmluZ1tdXHJcbiAgZ29hbHM/OiBzdHJpbmdbXVxyXG4gIHNhbGFyeUNoYW5nZT86IG51bWJlclxyXG4gIHByb21vdGlvblJlY29tbWVuZGVkPzogYm9vbGVhblxyXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmV2aWV3ID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxyXG4gICAgICAgIGVtcGxveWVlTmFtZTogZGF0YS5lbXBsb3llZU5hbWUsXHJcbiAgICAgICAgcmV2aWV3ZXJJZDogZGF0YS5yZXZpZXdlcklkLFxyXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXHJcbiAgICAgICAgcGVyaW9kOiBkYXRhLnBlcmlvZCxcclxuICAgICAgICBzY2hlZHVsZWREYXRlOiBkYXRhLnNjaGVkdWxlZERhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxyXG4gICAgICAgIG92ZXJhbGxSYXRpbmc6IGRhdGEub3ZlcmFsbFJhdGluZyB8fCAwLFxyXG4gICAgICAgIGNvbXBldGVuY3lSYXRpbmdzOiAoZGF0YS5jb21wZXRlbmN5UmF0aW5ncyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogKGRhdGEuYXJlYXNGb3JJbXByb3ZlbWVudCB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGdvYWxzOiAoZGF0YS5nb2FscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcclxuICAgICAgICBwcm9tb3Rpb25SZWNvbW1lbmRlZDogZGF0YS5wcm9tb3Rpb25SZWNvbW1lbmRlZCB8fCBmYWxzZSxcclxuICAgICAgICBwaXBSZXF1aXJlZDogZGF0YS5waXBSZXF1aXJlZCB8fCBmYWxzZSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBwcmlzbWEudGVhbVBlcmZvcm1hbmNlUmV2aWV3LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWluaW5nQ291cnNlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IHByaXNtYS50ZWFtVHJhaW5pbmdDb3Vyc2UuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNvdXJzZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgdGl0bGU6IGMudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxyXG4gICAgICBjYXRlZ29yeTogYy5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGR1cmF0aW9uOiBjLmR1cmF0aW9uLFxyXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcclxuICAgICAgZm9ybWF0OiBjLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGMuY2VydGlmaWNhdGlvbkV4cGlyeSB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYWluaW5nIGNvdXJzZXM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJhaW5pbmdDb3Vyc2UoZGF0YToge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBjYXRlZ29yeT86IHN0cmluZ1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxuICBmb3JtYXQ/OiBzdHJpbmdcclxuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUgfHwgXCJvcHRpb25hbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8IFwidGVjaG5pY2FsXCIsXHJcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBcIlwiLFxyXG4gICAgICAgIGZvcm1hdDogZGF0YS5mb3JtYXQgfHwgXCJvbmxpbmVcIixcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jb3Vyc2UsXHJcbiAgICAgIHR5cGU6IGNvdXJzZS50eXBlIGFzIGFueSxcclxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGZvcm1hdDogY291cnNlLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGNvdXJzZS5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHRyYWluaW5nIGNvdXJzZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENPVVJTRSBFTlJPTExNRU5UIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZW5yb2xsbWVudHMgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcclxuICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgIGNvdXJzZUlkOiBlLmNvdXJzZUlkLFxyXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGUuZW1wbG95ZWVJZCxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxyXG4gICAgICBlbnJvbGxlZEF0OiBlLmVucm9sbGVkQXQsXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZS5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvdXJzZSBlbnJvbGxtZW50czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY291cnNlIGVucm9sbG1lbnRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xyXG4gIGNvdXJzZUlkOiBzdHJpbmdcclxuICBjb3Vyc2VOYW1lOiBzdHJpbmdcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwcm9ncmVzcz86IG51bWJlclxyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvdXJzZUlkOiBkYXRhLmNvdXJzZUlkLFxyXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImVucm9sbGVkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBlbnJvbGxlZEF0OiBkYXRhLmVucm9sbGVkQXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZW5yb2xsbWVudCxcclxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGVucm9sbG1lbnQuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvdXJzZUVucm9sbG1lbnQoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbnJvbGxtZW50ID0gYXdhaXQgcHJpc21hLnRlYW1Db3Vyc2VFbnJvbGxtZW50LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmVucm9sbG1lbnQsXHJcbiAgICAgIHN0YXR1czogZW5yb2xsbWVudC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY2VydGlmaWNhdGVVcmw6IGVucm9sbG1lbnQuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY291cnNlIGVucm9sbG1lbnQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IEhPTElEQVkgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhvbGlkYXlzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBob2xpZGF5cyA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5maW5kTWFueSh7IG9yZGVyQnk6IHsgZGF0ZTogXCJhc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gaG9saWRheXMubWFwKGggPT4gKHtcclxuICAgICAgLi4uaCxcclxuICAgICAgY3JlYXRlZEF0OiBoLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhvbGlkYXlzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBob2xpZGF5c1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIb2xpZGF5KGRhdGE6IHsgZGF0ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaG9saWRheSA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaG9saWRheSxcclxuICAgICAgY3JlYXRlZEF0OiBob2xpZGF5LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBob2xpZGF5OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaG9saWRheVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVIb2xpZGF5KGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnRlYW1Ib2xpZGF5LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgaG9saWRheTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGhvbGlkYXlcIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBMFVzQiJ9
}),
"[project]/app/actions/data:ae5e73 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e0a27b4e19835ebdc62a06c722eefd646ed47095":"createAttendanceRecord"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "createAttendanceRecord",
    ()=>createAttendanceRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createAttendanceRecord = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40e0a27b4e19835ebdc62a06c722eefd646ed47095", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createAttendanceRecord"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBFTVBMT1lFRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xyXG4gICAgICBpZDogZS5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBlLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBlLmVtYWlsLFxyXG4gICAgICBwaG9uZTogZS5waG9uZSxcclxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxyXG4gICAgICBqb2JUaXRsZTogZS5qb2JUaXRsZSxcclxuICAgICAgZGVwYXJ0bWVudDogZS5kZXBhcnRtZW50LFxyXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgbWFuYWdlcklkOiBlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc3RhcnREYXRlOiBlLnN0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZTogZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcclxuICAgICAgc2FsYXJ5OiBlLnNhbGFyeSxcclxuICAgICAgY3VycmVuY3k6IGUuY3VycmVuY3ksXHJcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXHJcbiAgICAgIHNraWxsczogZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIHllYXJzT2ZFeHBlcmllbmNlOiBlLnllYXJzT2ZFeHBlcmllbmNlLFxyXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgcGVyZm9ybWFuY2VSYXRpbmc6IGUucGVyZm9ybWFuY2VSYXRpbmcsXHJcbiAgICAgIGRvY3VtZW50czogZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcclxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IGUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXHJcbiAgICAgIGxlYXZlQmFsYW5jZTogZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRBdDogZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBlbXBsb3llZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGpvYlRpdGxlOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBlbXBsb3ltZW50VHlwZT86IHN0cmluZ1xyXG4gIHN0YXR1cz86IHN0cmluZ1xyXG4gIG1hbmFnZXJJZD86IHN0cmluZ1xyXG4gIG1hbmFnZXJOYW1lPzogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcclxuICBzYWxhcnk/OiBudW1iZXJcclxuICBjdXJyZW5jeT86IHN0cmluZ1xyXG4gIHBheUZyZXF1ZW5jeT86IHN0cmluZ1xyXG4gIHNraWxscz86IGFueVtdXHJcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcclxuICBjZXJ0aWZpY2F0aW9ucz86IHN0cmluZ1tdXHJcbiAgcGVyZm9ybWFuY2VSYXRpbmc/OiBudW1iZXJcclxuICBkb2N1bWVudHM/OiBhbnlbXVxyXG4gIGNhcmVlckhpc3Rvcnk/OiBhbnlbXVxyXG4gIGVtZXJnZW5jeUNvbnRhY3RzPzogYW55W11cclxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50LFxyXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImFjdGl2ZVwiLFxyXG4gICAgICAgIG1hbmFnZXJJZDogZGF0YS5tYW5hZ2VySWQgfHwgbnVsbCxcclxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBcIlJlbW90ZVwiLFxyXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcclxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSB8fCBcIkJEVFwiLFxyXG4gICAgICAgIHBheUZyZXF1ZW5jeTogZGF0YS5wYXlGcmVxdWVuY3kgfHwgXCJtb250aGx5XCIsXHJcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICB5ZWFyc09mRXhwZXJpZW5jZTogZGF0YS55ZWFyc09mRXhwZXJpZW5jZSB8fCAwLFxyXG4gICAgICAgIGNlcnRpZmljYXRpb25zOiAoZGF0YS5jZXJ0aWZpY2F0aW9ucyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXHJcbiAgICAgICAgZG9jdW1lbnRzOiAoZGF0YS5kb2N1bWVudHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICBjYXJlZXJIaXN0b3J5OiAoZGF0YS5jYXJlZXJIaXN0b3J5IHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgbGVhdmVCYWxhbmNlOiAoZGF0YS5sZWF2ZUJhbGFuY2UgfHwge30pIGFzIGFueSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgcHJpc21hLnRlYW1FbXBsb3llZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBlbXBsb3llZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGVtcGxveWVlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgcHJpc21hLnRlYW1DYW5kaWRhdGUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBjLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGMubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxyXG4gICAgICBwaG9uZTogYy5waG9uZSxcclxuICAgICAgcG9zaXRpb246IGMucG9zaXRpb24sXHJcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcclxuICAgICAgc3RhZ2U6IGMuc3RhZ2UsXHJcbiAgICAgIHNvdXJjZTogYy5zb3VyY2UsXHJcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXHJcbiAgICAgIG5vdGVzOiBjLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjLmV4cGVjdGVkU2FsYXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXZhaWxhYmxlRnJvbTogYy5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY2FuZGlkYXRlc1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYW5kaWRhdGUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIHBvc2l0aW9uOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBzdGFnZT86IHN0cmluZ1xyXG4gIHNvdXJjZT86IHN0cmluZ1xyXG4gIGFwcGxpZWRBdDogc3RyaW5nXHJcbiAgc2tpbGxzPzogc3RyaW5nW11cclxuICBleHBlY3RlZFNhbGFyeT86IG51bWJlclxyXG4gIGF2YWlsYWJsZUZyb20/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxyXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcclxuICAgICAgICBzdGFnZTogZGF0YS5zdGFnZSB8fCBcImFwcGxpZWRcIixcclxuICAgICAgICBzb3VyY2U6IGRhdGEuc291cmNlIHx8IFwiXCIsXHJcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcclxuICAgICAgICBza2lsbHM6IChkYXRhLnNraWxscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGV4cGVjdGVkU2FsYXJ5OiBkYXRhLmV4cGVjdGVkU2FsYXJ5IHx8IG51bGwsXHJcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICBub3RlczogY2FuZGlkYXRlLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcclxuICAgICAgZXhwZWN0ZWRTYWxhcnk6IGNhbmRpZGF0ZS5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGF2YWlsYWJsZUZyb206IGNhbmRpZGF0ZS5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY2FuZGlkYXRlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNhbmRpZGF0ZSxcclxuICAgICAgbm90ZXM6IGNhbmRpZGF0ZS5ub3RlcyBhcyBzdHJpbmdbXSxcclxuICAgICAgaW50ZXJ2aWV3czogY2FuZGlkYXRlLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhdmFpbGFibGVGcm9tOiBjYW5kaWRhdGUuYXZhaWxhYmxlRnJvbSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNraWxsczogY2FuZGlkYXRlLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhbmRpZGF0ZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IExFQVZFIFJFUVVFU1QgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcclxuICAgICAgaWQ6IHIuaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcclxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcclxuICAgICAgbGVhdmVUeXBlOiByLmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXJ0RGF0ZTogci5zdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcclxuICAgICAgdG90YWxEYXlzOiByLnRvdGFsRGF5cyxcclxuICAgICAgcmVhc29uOiByLnJlYXNvbixcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGFwcHJvdmVySWQ6IHIuYXBwcm92ZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVyTmFtZTogci5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICByZWplY3Rpb25SZWFzb246IHIucmVqZWN0aW9uUmVhc29uIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiByLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsZWF2ZSByZXF1ZXN0czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhdmVSZXF1ZXN0KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIGxlYXZlVHlwZTogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICBlbmREYXRlOiBzdHJpbmdcclxuICB0b3RhbERheXM6IG51bWJlclxyXG4gIHJlYXNvbjogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHByaXNtYS50ZWFtTGVhdmVSZXF1ZXN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBkYXRhLmVtcGxveWVlTmFtZSxcclxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxyXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXHJcbiAgICAgICAgcmVhc29uOiBkYXRhLnJlYXNvbixcclxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlcXVlc3QsXHJcbiAgICAgIGxlYXZlVHlwZTogcmVxdWVzdC5sZWF2ZVR5cGUgYXMgYW55LFxyXG4gICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzIGFzIGFueSxcclxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZXJOYW1lOiByZXF1ZXN0LmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVkQXQ6IHJlcXVlc3QuYXBwcm92ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IHJlcXVlc3QuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBsZWF2ZSByZXF1ZXN0OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgbGVhdmUgcmVxdWVzdFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVxdWVzdCxcclxuICAgICAgbGVhdmVUeXBlOiByZXF1ZXN0LmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBhcHByb3ZlcklkOiByZXF1ZXN0LmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3Zlck5hbWU6IHJlcXVlc3QuYXBwcm92ZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByZXF1ZXN0LnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVxdWVzdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGxlYXZlIHJlcXVlc3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQVRURU5EQU5DRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG1hcmtlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIGRhdGU6IHIuZGF0ZSxcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNsb2NrT3V0OiByLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHdvcmtMb2NhdGlvbjogci53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3Rlczogci5ub3RlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggYXR0ZW5kYW5jZSByZWNvcmRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUF0dGVuZGFuY2VSZWNvcmQoZGF0YToge1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBjbG9ja0luPzogc3RyaW5nXHJcbiAgY2xvY2tPdXQ/OiBzdHJpbmdcclxuICBicmVha01pbnV0ZXM/OiBudW1iZXJcclxuICB0b3RhbEhvdXJzPzogbnVtYmVyXHJcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXHJcbiAgbm90ZXM/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbXBsb3llZUlkX2RhdGU6IHtcclxuICAgICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgY2xvY2tJbjogZGF0YS5jbG9ja0luIHx8IG51bGwsXHJcbiAgICAgICAgY2xvY2tPdXQ6IGRhdGEuY2xvY2tPdXQgfHwgbnVsbCxcclxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXHJcbiAgICAgICAgdG90YWxIb3VyczogZGF0YS50b3RhbEhvdXJzIHx8IG51bGwsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBudWxsLFxyXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgbWFya2VkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxyXG4gICAgICAgIGNsb2NrT3V0OiBkYXRhLmNsb2NrT3V0IHx8IG51bGwsXHJcbiAgICAgICAgYnJlYWtNaW51dGVzOiBkYXRhLmJyZWFrTWludXRlcyB8fCBudWxsLFxyXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxyXG4gICAgICAgIHdvcmtMb2NhdGlvbjogZGF0YS53b3JrTG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBdHRlbmRhbmNlUmVjb3JkKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T0tScygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tycyA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBva3JzLm1hcCgobykgPT4gKHtcclxuICAgICAgaWQ6IG8uaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IG8uZW1wbG95ZWVJZCxcclxuICAgICAgdGl0bGU6IG8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxyXG4gICAgICBxdWFydGVyOiBvLnF1YXJ0ZXIsXHJcbiAgICAgIGtleVJlc3VsdHM6IG8ua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcclxuICAgICAgc3RhdHVzOiBvLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBvLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG8udXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIE9LUnM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIE9LUnNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICBxdWFydGVyOiBzdHJpbmdcclxuICBrZXlSZXN1bHRzPzogYW55W11cclxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwYXJlbnRPS1JJZD86IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9rciA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICBxdWFydGVyOiBkYXRhLnF1YXJ0ZXIsXHJcbiAgICAgICAga2V5UmVzdWx0czogKGRhdGEua2V5UmVzdWx0cyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwib24tdHJhY2tcIixcclxuICAgICAgICBwYXJlbnRPS1JJZDogZGF0YS5wYXJlbnRPS1JJZCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm9rcixcclxuICAgICAga2V5UmVzdWx0czogb2tyLmtleVJlc3VsdHMgYXMgYW55W10sXHJcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IG9rci5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBPS1I6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT0tSKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub2tyLFxyXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcclxuICAgICAgcGFyZW50T0tSSWQ6IG9rci5wYXJlbnRPS1JJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIE9LUjpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIE9LUlwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2VSZXZpZXdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmV2aWV3cy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcclxuICAgICAgcmV2aWV3ZXJOYW1lOiByLnJldmlld2VyTmFtZSxcclxuICAgICAgcGVyaW9kOiByLnBlcmlvZCxcclxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxyXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcclxuICAgICAgb3ZlcmFsbFJhdGluZzogci5vdmVyYWxsUmF0aW5nLFxyXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByLnN0cmVuZ3RocyBhcyBzdHJpbmdbXSxcclxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogci5hcmVhc0ZvckltcHJvdmVtZW50IGFzIHN0cmluZ1tdLFxyXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByLnNhbGFyeUNoYW5nZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHByb21vdGlvblJlY29tbWVuZGVkOiByLnByb21vdGlvblJlY29tbWVuZGVkLFxyXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHIuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZXJmb3JtYW5jZSByZXZpZXdzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBwZXJmb3JtYW5jZSByZXZpZXdzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIHJldmlld2VySWQ6IHN0cmluZ1xyXG4gIHJldmlld2VyTmFtZTogc3RyaW5nXHJcbiAgcGVyaW9kOiBzdHJpbmdcclxuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBvdmVyYWxsUmF0aW5nPzogbnVtYmVyXHJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxyXG4gIHN0cmVuZ3Rocz86IHN0cmluZ1tdXHJcbiAgYXJlYXNGb3JJbXByb3ZlbWVudD86IHN0cmluZ1tdXHJcbiAgZ29hbHM/OiBzdHJpbmdbXVxyXG4gIHNhbGFyeUNoYW5nZT86IG51bWJlclxyXG4gIHByb21vdGlvblJlY29tbWVuZGVkPzogYm9vbGVhblxyXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmV2aWV3ID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxyXG4gICAgICAgIGVtcGxveWVlTmFtZTogZGF0YS5lbXBsb3llZU5hbWUsXHJcbiAgICAgICAgcmV2aWV3ZXJJZDogZGF0YS5yZXZpZXdlcklkLFxyXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXHJcbiAgICAgICAgcGVyaW9kOiBkYXRhLnBlcmlvZCxcclxuICAgICAgICBzY2hlZHVsZWREYXRlOiBkYXRhLnNjaGVkdWxlZERhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxyXG4gICAgICAgIG92ZXJhbGxSYXRpbmc6IGRhdGEub3ZlcmFsbFJhdGluZyB8fCAwLFxyXG4gICAgICAgIGNvbXBldGVuY3lSYXRpbmdzOiAoZGF0YS5jb21wZXRlbmN5UmF0aW5ncyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogKGRhdGEuYXJlYXNGb3JJbXByb3ZlbWVudCB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGdvYWxzOiAoZGF0YS5nb2FscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcclxuICAgICAgICBwcm9tb3Rpb25SZWNvbW1lbmRlZDogZGF0YS5wcm9tb3Rpb25SZWNvbW1lbmRlZCB8fCBmYWxzZSxcclxuICAgICAgICBwaXBSZXF1aXJlZDogZGF0YS5waXBSZXF1aXJlZCB8fCBmYWxzZSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBwcmlzbWEudGVhbVBlcmZvcm1hbmNlUmV2aWV3LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWluaW5nQ291cnNlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IHByaXNtYS50ZWFtVHJhaW5pbmdDb3Vyc2UuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNvdXJzZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgdGl0bGU6IGMudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxyXG4gICAgICBjYXRlZ29yeTogYy5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGR1cmF0aW9uOiBjLmR1cmF0aW9uLFxyXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcclxuICAgICAgZm9ybWF0OiBjLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGMuY2VydGlmaWNhdGlvbkV4cGlyeSB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYWluaW5nIGNvdXJzZXM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJhaW5pbmdDb3Vyc2UoZGF0YToge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBjYXRlZ29yeT86IHN0cmluZ1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxuICBmb3JtYXQ/OiBzdHJpbmdcclxuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUgfHwgXCJvcHRpb25hbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8IFwidGVjaG5pY2FsXCIsXHJcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBcIlwiLFxyXG4gICAgICAgIGZvcm1hdDogZGF0YS5mb3JtYXQgfHwgXCJvbmxpbmVcIixcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jb3Vyc2UsXHJcbiAgICAgIHR5cGU6IGNvdXJzZS50eXBlIGFzIGFueSxcclxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGZvcm1hdDogY291cnNlLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGNvdXJzZS5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHRyYWluaW5nIGNvdXJzZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENPVVJTRSBFTlJPTExNRU5UIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZW5yb2xsbWVudHMgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcclxuICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgIGNvdXJzZUlkOiBlLmNvdXJzZUlkLFxyXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGUuZW1wbG95ZWVJZCxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxyXG4gICAgICBlbnJvbGxlZEF0OiBlLmVucm9sbGVkQXQsXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZS5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvdXJzZSBlbnJvbGxtZW50czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY291cnNlIGVucm9sbG1lbnRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xyXG4gIGNvdXJzZUlkOiBzdHJpbmdcclxuICBjb3Vyc2VOYW1lOiBzdHJpbmdcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwcm9ncmVzcz86IG51bWJlclxyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvdXJzZUlkOiBkYXRhLmNvdXJzZUlkLFxyXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImVucm9sbGVkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBlbnJvbGxlZEF0OiBkYXRhLmVucm9sbGVkQXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZW5yb2xsbWVudCxcclxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGVucm9sbG1lbnQuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvdXJzZUVucm9sbG1lbnQoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbnJvbGxtZW50ID0gYXdhaXQgcHJpc21hLnRlYW1Db3Vyc2VFbnJvbGxtZW50LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmVucm9sbG1lbnQsXHJcbiAgICAgIHN0YXR1czogZW5yb2xsbWVudC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY2VydGlmaWNhdGVVcmw6IGVucm9sbG1lbnQuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY291cnNlIGVucm9sbG1lbnQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IEhPTElEQVkgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhvbGlkYXlzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBob2xpZGF5cyA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5maW5kTWFueSh7IG9yZGVyQnk6IHsgZGF0ZTogXCJhc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gaG9saWRheXMubWFwKGggPT4gKHtcclxuICAgICAgLi4uaCxcclxuICAgICAgY3JlYXRlZEF0OiBoLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhvbGlkYXlzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBob2xpZGF5c1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIb2xpZGF5KGRhdGE6IHsgZGF0ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaG9saWRheSA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaG9saWRheSxcclxuICAgICAgY3JlYXRlZEF0OiBob2xpZGF5LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBob2xpZGF5OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaG9saWRheVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVIb2xpZGF5KGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnRlYW1Ib2xpZGF5LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgaG9saWRheTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGhvbGlkYXlcIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBaVdzQiJ9
}),
"[project]/app/actions/data:3bb5ae [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60ea1b216a7777f4755ea653714d5e7405d69b51f2":"updateAttendanceRecord"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "updateAttendanceRecord",
    ()=>updateAttendanceRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateAttendanceRecord = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60ea1b216a7777f4755ea653714d5e7405d69b51f2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateAttendanceRecord"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBFTVBMT1lFRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xyXG4gICAgICBpZDogZS5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBlLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBlLmVtYWlsLFxyXG4gICAgICBwaG9uZTogZS5waG9uZSxcclxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxyXG4gICAgICBqb2JUaXRsZTogZS5qb2JUaXRsZSxcclxuICAgICAgZGVwYXJ0bWVudDogZS5kZXBhcnRtZW50LFxyXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgbWFuYWdlcklkOiBlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc3RhcnREYXRlOiBlLnN0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZTogZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcclxuICAgICAgc2FsYXJ5OiBlLnNhbGFyeSxcclxuICAgICAgY3VycmVuY3k6IGUuY3VycmVuY3ksXHJcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXHJcbiAgICAgIHNraWxsczogZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIHllYXJzT2ZFeHBlcmllbmNlOiBlLnllYXJzT2ZFeHBlcmllbmNlLFxyXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgcGVyZm9ybWFuY2VSYXRpbmc6IGUucGVyZm9ybWFuY2VSYXRpbmcsXHJcbiAgICAgIGRvY3VtZW50czogZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcclxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IGUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXHJcbiAgICAgIGxlYXZlQmFsYW5jZTogZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRBdDogZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBlbXBsb3llZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGpvYlRpdGxlOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBlbXBsb3ltZW50VHlwZT86IHN0cmluZ1xyXG4gIHN0YXR1cz86IHN0cmluZ1xyXG4gIG1hbmFnZXJJZD86IHN0cmluZ1xyXG4gIG1hbmFnZXJOYW1lPzogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcclxuICBzYWxhcnk/OiBudW1iZXJcclxuICBjdXJyZW5jeT86IHN0cmluZ1xyXG4gIHBheUZyZXF1ZW5jeT86IHN0cmluZ1xyXG4gIHNraWxscz86IGFueVtdXHJcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcclxuICBjZXJ0aWZpY2F0aW9ucz86IHN0cmluZ1tdXHJcbiAgcGVyZm9ybWFuY2VSYXRpbmc/OiBudW1iZXJcclxuICBkb2N1bWVudHM/OiBhbnlbXVxyXG4gIGNhcmVlckhpc3Rvcnk/OiBhbnlbXVxyXG4gIGVtZXJnZW5jeUNvbnRhY3RzPzogYW55W11cclxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50LFxyXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImFjdGl2ZVwiLFxyXG4gICAgICAgIG1hbmFnZXJJZDogZGF0YS5tYW5hZ2VySWQgfHwgbnVsbCxcclxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBcIlJlbW90ZVwiLFxyXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcclxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSB8fCBcIkJEVFwiLFxyXG4gICAgICAgIHBheUZyZXF1ZW5jeTogZGF0YS5wYXlGcmVxdWVuY3kgfHwgXCJtb250aGx5XCIsXHJcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICB5ZWFyc09mRXhwZXJpZW5jZTogZGF0YS55ZWFyc09mRXhwZXJpZW5jZSB8fCAwLFxyXG4gICAgICAgIGNlcnRpZmljYXRpb25zOiAoZGF0YS5jZXJ0aWZpY2F0aW9ucyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXHJcbiAgICAgICAgZG9jdW1lbnRzOiAoZGF0YS5kb2N1bWVudHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICBjYXJlZXJIaXN0b3J5OiAoZGF0YS5jYXJlZXJIaXN0b3J5IHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgbGVhdmVCYWxhbmNlOiAoZGF0YS5sZWF2ZUJhbGFuY2UgfHwge30pIGFzIGFueSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgcHJpc21hLnRlYW1FbXBsb3llZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBlbXBsb3llZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGVtcGxveWVlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgcHJpc21hLnRlYW1DYW5kaWRhdGUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBjLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGMubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxyXG4gICAgICBwaG9uZTogYy5waG9uZSxcclxuICAgICAgcG9zaXRpb246IGMucG9zaXRpb24sXHJcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcclxuICAgICAgc3RhZ2U6IGMuc3RhZ2UsXHJcbiAgICAgIHNvdXJjZTogYy5zb3VyY2UsXHJcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXHJcbiAgICAgIG5vdGVzOiBjLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjLmV4cGVjdGVkU2FsYXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXZhaWxhYmxlRnJvbTogYy5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY2FuZGlkYXRlc1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYW5kaWRhdGUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIHBvc2l0aW9uOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBzdGFnZT86IHN0cmluZ1xyXG4gIHNvdXJjZT86IHN0cmluZ1xyXG4gIGFwcGxpZWRBdDogc3RyaW5nXHJcbiAgc2tpbGxzPzogc3RyaW5nW11cclxuICBleHBlY3RlZFNhbGFyeT86IG51bWJlclxyXG4gIGF2YWlsYWJsZUZyb20/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxyXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcclxuICAgICAgICBzdGFnZTogZGF0YS5zdGFnZSB8fCBcImFwcGxpZWRcIixcclxuICAgICAgICBzb3VyY2U6IGRhdGEuc291cmNlIHx8IFwiXCIsXHJcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcclxuICAgICAgICBza2lsbHM6IChkYXRhLnNraWxscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGV4cGVjdGVkU2FsYXJ5OiBkYXRhLmV4cGVjdGVkU2FsYXJ5IHx8IG51bGwsXHJcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICBub3RlczogY2FuZGlkYXRlLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcclxuICAgICAgZXhwZWN0ZWRTYWxhcnk6IGNhbmRpZGF0ZS5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGF2YWlsYWJsZUZyb206IGNhbmRpZGF0ZS5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY2FuZGlkYXRlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNhbmRpZGF0ZSxcclxuICAgICAgbm90ZXM6IGNhbmRpZGF0ZS5ub3RlcyBhcyBzdHJpbmdbXSxcclxuICAgICAgaW50ZXJ2aWV3czogY2FuZGlkYXRlLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhdmFpbGFibGVGcm9tOiBjYW5kaWRhdGUuYXZhaWxhYmxlRnJvbSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNraWxsczogY2FuZGlkYXRlLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhbmRpZGF0ZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IExFQVZFIFJFUVVFU1QgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcclxuICAgICAgaWQ6IHIuaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcclxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcclxuICAgICAgbGVhdmVUeXBlOiByLmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXJ0RGF0ZTogci5zdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcclxuICAgICAgdG90YWxEYXlzOiByLnRvdGFsRGF5cyxcclxuICAgICAgcmVhc29uOiByLnJlYXNvbixcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGFwcHJvdmVySWQ6IHIuYXBwcm92ZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVyTmFtZTogci5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICByZWplY3Rpb25SZWFzb246IHIucmVqZWN0aW9uUmVhc29uIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiByLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsZWF2ZSByZXF1ZXN0czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhdmVSZXF1ZXN0KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIGxlYXZlVHlwZTogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICBlbmREYXRlOiBzdHJpbmdcclxuICB0b3RhbERheXM6IG51bWJlclxyXG4gIHJlYXNvbjogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHByaXNtYS50ZWFtTGVhdmVSZXF1ZXN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBkYXRhLmVtcGxveWVlTmFtZSxcclxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxyXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXHJcbiAgICAgICAgcmVhc29uOiBkYXRhLnJlYXNvbixcclxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlcXVlc3QsXHJcbiAgICAgIGxlYXZlVHlwZTogcmVxdWVzdC5sZWF2ZVR5cGUgYXMgYW55LFxyXG4gICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzIGFzIGFueSxcclxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZXJOYW1lOiByZXF1ZXN0LmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVkQXQ6IHJlcXVlc3QuYXBwcm92ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IHJlcXVlc3QuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBsZWF2ZSByZXF1ZXN0OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgbGVhdmUgcmVxdWVzdFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVxdWVzdCxcclxuICAgICAgbGVhdmVUeXBlOiByZXF1ZXN0LmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBhcHByb3ZlcklkOiByZXF1ZXN0LmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3Zlck5hbWU6IHJlcXVlc3QuYXBwcm92ZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByZXF1ZXN0LnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVxdWVzdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGxlYXZlIHJlcXVlc3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQVRURU5EQU5DRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG1hcmtlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIGRhdGU6IHIuZGF0ZSxcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNsb2NrT3V0OiByLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHdvcmtMb2NhdGlvbjogci53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3Rlczogci5ub3RlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggYXR0ZW5kYW5jZSByZWNvcmRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUF0dGVuZGFuY2VSZWNvcmQoZGF0YToge1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBjbG9ja0luPzogc3RyaW5nXHJcbiAgY2xvY2tPdXQ/OiBzdHJpbmdcclxuICBicmVha01pbnV0ZXM/OiBudW1iZXJcclxuICB0b3RhbEhvdXJzPzogbnVtYmVyXHJcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXHJcbiAgbm90ZXM/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbXBsb3llZUlkX2RhdGU6IHtcclxuICAgICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgY2xvY2tJbjogZGF0YS5jbG9ja0luIHx8IG51bGwsXHJcbiAgICAgICAgY2xvY2tPdXQ6IGRhdGEuY2xvY2tPdXQgfHwgbnVsbCxcclxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXHJcbiAgICAgICAgdG90YWxIb3VyczogZGF0YS50b3RhbEhvdXJzIHx8IG51bGwsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBudWxsLFxyXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgbWFya2VkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxyXG4gICAgICAgIGNsb2NrT3V0OiBkYXRhLmNsb2NrT3V0IHx8IG51bGwsXHJcbiAgICAgICAgYnJlYWtNaW51dGVzOiBkYXRhLmJyZWFrTWludXRlcyB8fCBudWxsLFxyXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxyXG4gICAgICAgIHdvcmtMb2NhdGlvbjogZGF0YS53b3JrTG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBdHRlbmRhbmNlUmVjb3JkKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T0tScygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tycyA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBva3JzLm1hcCgobykgPT4gKHtcclxuICAgICAgaWQ6IG8uaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IG8uZW1wbG95ZWVJZCxcclxuICAgICAgdGl0bGU6IG8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxyXG4gICAgICBxdWFydGVyOiBvLnF1YXJ0ZXIsXHJcbiAgICAgIGtleVJlc3VsdHM6IG8ua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcclxuICAgICAgc3RhdHVzOiBvLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBvLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG8udXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIE9LUnM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIE9LUnNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICBxdWFydGVyOiBzdHJpbmdcclxuICBrZXlSZXN1bHRzPzogYW55W11cclxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwYXJlbnRPS1JJZD86IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9rciA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICBxdWFydGVyOiBkYXRhLnF1YXJ0ZXIsXHJcbiAgICAgICAga2V5UmVzdWx0czogKGRhdGEua2V5UmVzdWx0cyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwib24tdHJhY2tcIixcclxuICAgICAgICBwYXJlbnRPS1JJZDogZGF0YS5wYXJlbnRPS1JJZCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm9rcixcclxuICAgICAga2V5UmVzdWx0czogb2tyLmtleVJlc3VsdHMgYXMgYW55W10sXHJcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IG9rci5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBPS1I6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT0tSKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub2tyLFxyXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcclxuICAgICAgcGFyZW50T0tSSWQ6IG9rci5wYXJlbnRPS1JJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIE9LUjpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIE9LUlwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2VSZXZpZXdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmV2aWV3cy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcclxuICAgICAgcmV2aWV3ZXJOYW1lOiByLnJldmlld2VyTmFtZSxcclxuICAgICAgcGVyaW9kOiByLnBlcmlvZCxcclxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxyXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcclxuICAgICAgb3ZlcmFsbFJhdGluZzogci5vdmVyYWxsUmF0aW5nLFxyXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByLnN0cmVuZ3RocyBhcyBzdHJpbmdbXSxcclxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogci5hcmVhc0ZvckltcHJvdmVtZW50IGFzIHN0cmluZ1tdLFxyXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByLnNhbGFyeUNoYW5nZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHByb21vdGlvblJlY29tbWVuZGVkOiByLnByb21vdGlvblJlY29tbWVuZGVkLFxyXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHIuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZXJmb3JtYW5jZSByZXZpZXdzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBwZXJmb3JtYW5jZSByZXZpZXdzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIHJldmlld2VySWQ6IHN0cmluZ1xyXG4gIHJldmlld2VyTmFtZTogc3RyaW5nXHJcbiAgcGVyaW9kOiBzdHJpbmdcclxuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBvdmVyYWxsUmF0aW5nPzogbnVtYmVyXHJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxyXG4gIHN0cmVuZ3Rocz86IHN0cmluZ1tdXHJcbiAgYXJlYXNGb3JJbXByb3ZlbWVudD86IHN0cmluZ1tdXHJcbiAgZ29hbHM/OiBzdHJpbmdbXVxyXG4gIHNhbGFyeUNoYW5nZT86IG51bWJlclxyXG4gIHByb21vdGlvblJlY29tbWVuZGVkPzogYm9vbGVhblxyXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmV2aWV3ID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxyXG4gICAgICAgIGVtcGxveWVlTmFtZTogZGF0YS5lbXBsb3llZU5hbWUsXHJcbiAgICAgICAgcmV2aWV3ZXJJZDogZGF0YS5yZXZpZXdlcklkLFxyXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXHJcbiAgICAgICAgcGVyaW9kOiBkYXRhLnBlcmlvZCxcclxuICAgICAgICBzY2hlZHVsZWREYXRlOiBkYXRhLnNjaGVkdWxlZERhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxyXG4gICAgICAgIG92ZXJhbGxSYXRpbmc6IGRhdGEub3ZlcmFsbFJhdGluZyB8fCAwLFxyXG4gICAgICAgIGNvbXBldGVuY3lSYXRpbmdzOiAoZGF0YS5jb21wZXRlbmN5UmF0aW5ncyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogKGRhdGEuYXJlYXNGb3JJbXByb3ZlbWVudCB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGdvYWxzOiAoZGF0YS5nb2FscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcclxuICAgICAgICBwcm9tb3Rpb25SZWNvbW1lbmRlZDogZGF0YS5wcm9tb3Rpb25SZWNvbW1lbmRlZCB8fCBmYWxzZSxcclxuICAgICAgICBwaXBSZXF1aXJlZDogZGF0YS5waXBSZXF1aXJlZCB8fCBmYWxzZSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBwcmlzbWEudGVhbVBlcmZvcm1hbmNlUmV2aWV3LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWluaW5nQ291cnNlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IHByaXNtYS50ZWFtVHJhaW5pbmdDb3Vyc2UuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNvdXJzZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgdGl0bGU6IGMudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxyXG4gICAgICBjYXRlZ29yeTogYy5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGR1cmF0aW9uOiBjLmR1cmF0aW9uLFxyXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcclxuICAgICAgZm9ybWF0OiBjLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGMuY2VydGlmaWNhdGlvbkV4cGlyeSB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYWluaW5nIGNvdXJzZXM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJhaW5pbmdDb3Vyc2UoZGF0YToge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBjYXRlZ29yeT86IHN0cmluZ1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxuICBmb3JtYXQ/OiBzdHJpbmdcclxuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUgfHwgXCJvcHRpb25hbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8IFwidGVjaG5pY2FsXCIsXHJcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBcIlwiLFxyXG4gICAgICAgIGZvcm1hdDogZGF0YS5mb3JtYXQgfHwgXCJvbmxpbmVcIixcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jb3Vyc2UsXHJcbiAgICAgIHR5cGU6IGNvdXJzZS50eXBlIGFzIGFueSxcclxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGZvcm1hdDogY291cnNlLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGNvdXJzZS5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHRyYWluaW5nIGNvdXJzZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENPVVJTRSBFTlJPTExNRU5UIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZW5yb2xsbWVudHMgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcclxuICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgIGNvdXJzZUlkOiBlLmNvdXJzZUlkLFxyXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGUuZW1wbG95ZWVJZCxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxyXG4gICAgICBlbnJvbGxlZEF0OiBlLmVucm9sbGVkQXQsXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZS5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvdXJzZSBlbnJvbGxtZW50czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY291cnNlIGVucm9sbG1lbnRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xyXG4gIGNvdXJzZUlkOiBzdHJpbmdcclxuICBjb3Vyc2VOYW1lOiBzdHJpbmdcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwcm9ncmVzcz86IG51bWJlclxyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvdXJzZUlkOiBkYXRhLmNvdXJzZUlkLFxyXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImVucm9sbGVkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBlbnJvbGxlZEF0OiBkYXRhLmVucm9sbGVkQXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZW5yb2xsbWVudCxcclxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGVucm9sbG1lbnQuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvdXJzZUVucm9sbG1lbnQoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbnJvbGxtZW50ID0gYXdhaXQgcHJpc21hLnRlYW1Db3Vyc2VFbnJvbGxtZW50LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmVucm9sbG1lbnQsXHJcbiAgICAgIHN0YXR1czogZW5yb2xsbWVudC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY2VydGlmaWNhdGVVcmw6IGVucm9sbG1lbnQuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY291cnNlIGVucm9sbG1lbnQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IEhPTElEQVkgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhvbGlkYXlzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBob2xpZGF5cyA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5maW5kTWFueSh7IG9yZGVyQnk6IHsgZGF0ZTogXCJhc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gaG9saWRheXMubWFwKGggPT4gKHtcclxuICAgICAgLi4uaCxcclxuICAgICAgY3JlYXRlZEF0OiBoLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhvbGlkYXlzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBob2xpZGF5c1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIb2xpZGF5KGRhdGE6IHsgZGF0ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaG9saWRheSA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaG9saWRheSxcclxuICAgICAgY3JlYXRlZEF0OiBob2xpZGF5LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBob2xpZGF5OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaG9saWRheVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVIb2xpZGF5KGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnRlYW1Ib2xpZGF5LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgaG9saWRheTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGhvbGlkYXlcIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBNlpzQiJ9
}),
"[project]/components/dashboards/management-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManagementDashboard",
    ()=>ManagementDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
"use client";
;
;
;
;
;
;
function ManagementDashboard() {
    const stats = [
        {
            label: "Total Revenue",
            value: "৳342K",
            change: "+15.3%",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
            color: "text-green-400",
            bg: "bg-green-500/20"
        },
        {
            label: "Active Deals",
            value: "24",
            change: "+4 this week",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
            color: "text-blue-400",
            bg: "bg-blue-500/20"
        },
        {
            label: "Team Members",
            value: "18",
            change: "2 on leave",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            color: "text-purple-400",
            bg: "bg-purple-500/20"
        },
        {
            label: "Conversion",
            value: "31.8%",
            change: "+2.3%",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: "text-amber-400",
            bg: "bg-amber-500/20"
        }
    ];
    const pipeline = [
        {
            stage: "New Leads",
            value: "৳45,000",
            count: 12,
            color: "bg-slate-500"
        },
        {
            stage: "Qualified",
            value: "৳125,000",
            count: 8,
            color: "bg-blue-500"
        },
        {
            stage: "Proposal Sent",
            value: "৳280,000",
            count: 5,
            color: "bg-purple-500"
        },
        {
            stage: "Negotiation",
            value: "৳180,000",
            count: 3,
            color: "bg-amber-500"
        },
        {
            stage: "Closed Won",
            value: "৳95,000",
            count: 2,
            color: "bg-green-500"
        }
    ];
    const teams = [
        {
            name: "Design Team",
            tasks: 24,
            completed: 20,
            lead: "Sarah M."
        },
        {
            name: "Development",
            tasks: 32,
            completed: 28,
            lead: "James W."
        },
        {
            name: "Marketing",
            tasks: 18,
            completed: 15,
            lead: "Emily C."
        },
        {
            name: "Content",
            tasks: 21,
            completed: 19,
            lead: "Alex R."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/20 via-primary/10 to-chart-2/20 border border-amber-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "bg-amber-500/20 text-amber-400 border-amber-500/30 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                    className: "w-3 h-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                    lineNumber: 34,
                                    columnNumber: 86
                                }, this),
                                "Management"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboards/management-dashboard.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl md:text-3xl font-bold",
                            children: "Business Overview 📊"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/management-dashboard.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mt-1",
                            children: "Revenue, pipeline health, and team performance"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/management-dashboard.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
                            children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-2 rounded-lg ${s.bg}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                        className: `w-4 h-4 ${s.color}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 100
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 58
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 149
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mt-2",
                                            children: s.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: s.change
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/management-dashboard.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboards/management-dashboard.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                        delay: 100,
                        className: "border-amber-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            className: "w-4 h-4 text-amber-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                            lineNumber: 50,
                                            columnNumber: 111
                                        }, this),
                                        "Revenue Pipeline"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                    lineNumber: 50,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: pipeline.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-3 h-3 rounded-full ${s.color}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: s.stage
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                                lineNumber: 56,
                                                                columnNumber: 65
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: s.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                                lineNumber: 56,
                                                                columnNumber: 111
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                                value: s.count / 12 * 100,
                                                                className: "h-1.5 flex-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                                lineNumber: 57,
                                                                columnNumber: 65
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: [
                                                                    s.count,
                                                                    " deals"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                                lineNumber: 57,
                                                                columnNumber: 131
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboards/management-dashboard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                        delay: 200,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-4 h-4 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                            lineNumber: 64,
                                            columnNumber: 111
                                        }, this),
                                        "Team Performance"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-3",
                                children: teams.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg bg-secondary/50 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium",
                                                                children: t.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 73
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: [
                                                                    "Lead: ",
                                                                    t.lead
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 120
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 68
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        className: "text-xs",
                                                        children: [
                                                            t.completed,
                                                            "/",
                                                            t.tasks
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 189
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                value: t.completed / t.tasks * 100,
                                                className: "h-1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboards/management-dashboard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboards/management-dashboard.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboards/management-dashboard.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/dashboards/manager-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManagerDashboard",
    ()=>ManagerDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
"use client";
;
;
;
;
;
;
function ManagerDashboard() {
    const myTeam = [
        {
            name: "Emily Chen",
            role: "Designer",
            status: "present",
            tasks: 5
        },
        {
            name: "James Wilson",
            role: "Developer",
            status: "present",
            tasks: 8
        },
        {
            name: "Alex Rodriguez",
            role: "Marketer",
            status: "remote",
            tasks: 4
        },
        {
            name: "Lisa Park",
            role: "Content Writer",
            status: "leave",
            tasks: 0
        }
    ];
    const projects = [
        {
            name: "E-commerce Redesign",
            progress: 72,
            dueDate: "May 10",
            status: "on-track"
        },
        {
            name: "SEO Campaign Q2",
            progress: 45,
            dueDate: "May 15",
            status: "at-risk"
        },
        {
            name: "Brand Identity Kit",
            progress: 88,
            dueDate: "May 22",
            status: "on-track"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-primary/10 to-chart-3/20 border border-blue-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "bg-blue-500/20 text-blue-400 border-blue-500/30 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                    className: "w-3 h-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                    lineNumber: 26,
                                    columnNumber: 83
                                }, this),
                                "Manager"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl md:text-3xl font-bold",
                            children: "Team Overview 👥"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mt-1",
                            children: "Your team's tasks, projects, and attendance at a glance"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
                            children: [
                                {
                                    label: "Team Members",
                                    value: "4",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                    color: "text-blue-400",
                                    bg: "bg-blue-500/20"
                                },
                                {
                                    label: "Active Projects",
                                    value: "3",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
                                    color: "text-purple-400",
                                    bg: "bg-purple-500/20"
                                },
                                {
                                    label: "Open Tasks",
                                    value: "17",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"],
                                    color: "text-green-400",
                                    bg: "bg-green-500/20"
                                },
                                {
                                    label: "Due This Week",
                                    value: "5",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                    color: "text-amber-400",
                                    bg: "bg-amber-500/20"
                                }
                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-2 rounded-lg ${s.bg}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                        className: `w-4 h-4 ${s.color}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 100
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 58
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 149
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mt-2",
                                            children: s.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                        delay: 100,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-4 h-4 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                            lineNumber: 46,
                                            columnNumber: 111
                                        }, this),
                                        "My Team"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                    lineNumber: 46,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-3",
                                children: myTeam.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-lg bg-secondary/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-2.5 h-2.5 rounded-full ${m.status === "present" ? "bg-green-500" : m.status === "remote" ? "bg-blue-500" : "bg-amber-500"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium",
                                                                children: m.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                                lineNumber: 52,
                                                                columnNumber: 24
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: m.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                                lineNumber: 52,
                                                                columnNumber: 71
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        className: `text-[10px] ${m.status === "present" ? "bg-green-500/10 text-green-400" : m.status === "remote" ? "bg-blue-500/10 text-blue-400" : "bg-amber-500/10 text-amber-400"}`,
                                                        children: m.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this),
                                                    m.tasks > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-muted-foreground mt-1",
                                                        children: [
                                                            m.tasks,
                                                            " tasks"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                        delay: 200,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"], {
                                            className: "w-4 h-4 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                            lineNumber: 63,
                                            columnNumber: 111
                                        }, this),
                                        "My Projects"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: projects.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 p-3 rounded-lg bg-secondary/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium",
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        className: `text-[10px] ${p.status === "at-risk" ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400"}`,
                                                        children: p.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                        value: p.progress,
                                                        className: "h-1.5 flex-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: [
                                                            p.progress,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-muted-foreground flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 90
                                                    }, this),
                                                    "Due: ",
                                                    p.dueDate
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboards/manager-dashboard.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboards/manager-dashboard.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/dashboards/employee-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmployeeDashboard",
    ()=>EmployeeDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
"use client";
;
;
;
;
;
;
function EmployeeDashboard() {
    const myTasks = [
        {
            title: "Design homepage mockup",
            project: "E-commerce Redesign",
            priority: "high",
            due: "May 6",
            done: false
        },
        {
            title: "Review SEO audit report",
            project: "SEO Campaign Q2",
            priority: "medium",
            due: "May 7",
            done: false
        },
        {
            title: "Update brand guidelines",
            project: "Brand Identity Kit",
            priority: "low",
            due: "May 8",
            done: true
        },
        {
            title: "Client presentation prep",
            project: "E-commerce Redesign",
            priority: "high",
            due: "May 9",
            done: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 via-primary/10 to-chart-2/20 border border-green-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "bg-green-500/20 text-green-400 border-green-500/30 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                    className: "w-3 h-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                    lineNumber: 22,
                                    columnNumber: 86
                                }, this),
                                "Employee"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl md:text-3xl font-bold",
                            children: "My Workspace 🎯"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mt-1",
                            children: "Your tasks, attendance, and project progress"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
                            children: [
                                {
                                    label: "My Tasks",
                                    value: "4",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"],
                                    color: "text-green-400",
                                    bg: "bg-green-500/20"
                                },
                                {
                                    label: "Due Today",
                                    value: "1",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                    color: "text-amber-400",
                                    bg: "bg-amber-500/20"
                                },
                                {
                                    label: "Projects",
                                    value: "2",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
                                    color: "text-blue-400",
                                    bg: "bg-blue-500/20"
                                },
                                {
                                    label: "Completed",
                                    value: "1",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
                                    color: "text-emerald-400",
                                    bg: "bg-emerald-500/20"
                                }
                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-2 rounded-lg ${s.bg}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                        className: `w-4 h-4 ${s.color}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 100
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 58
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 149
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mt-2",
                                            children: s.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                delay: 50,
                className: "border-primary/20 bg-gradient-to-r from-primary/5 via-chart-2/5 to-chart-3/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-xl bg-primary/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-6 h-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                            lineNumber: 46,
                                            columnNumber: 63
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold",
                                                children: "Attendance Clock"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                lineNumber: 47,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "Office: 10:30 AM - 7:00 PM"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                lineNumber: 47,
                                                columnNumber: 71
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-xl shadow-lg shadow-green-600/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                        lineNumber: 49,
                                        columnNumber: 133
                                    }, this),
                                    "Clock In"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                delay: 100,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-base font-semibold flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                    className: "w-4 h-4 text-green-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                    lineNumber: 56,
                                    columnNumber: 109
                                }, this),
                                "My Tasks"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                            lineNumber: 56,
                            columnNumber: 38
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y divide-border/50",
                            children: myTasks.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-3 flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center ${t.done ? "bg-primary border-primary" : "border-muted-foreground/50"}`,
                                            children: t.done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-3.5 h-3.5 text-primary-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                lineNumber: 62,
                                                columnNumber: 30
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm font-medium ${t.done ? "line-through text-muted-foreground" : ""}`,
                                                    children: t.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            className: "text-[10px]",
                                                            children: t.project
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-medium uppercase ${t.priority === "high" ? "text-red-400" : t.priority === "medium" ? "text-amber-400" : "text-blue-400"}`,
                                                            children: t.priority
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-muted-foreground flex items-center gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 99
                                                                }, this),
                                                                t.due
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboards/employee-dashboard.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboards/employee-dashboard.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/dashboards/client-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientDashboard",
    ()=>ClientDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
"use client";
;
;
;
;
;
;
function ClientDashboard() {
    const projects = [
        {
            name: "Website Redesign",
            progress: 72,
            status: "in-progress",
            nextMilestone: "Design Review - May 10"
        },
        {
            name: "SEO Optimization",
            progress: 45,
            status: "in-progress",
            nextMilestone: "Audit Report - May 15"
        }
    ];
    const invoices = [
        {
            id: "INV-2024-001",
            amount: "৳15,000",
            status: "paid",
            date: "Apr 15"
        },
        {
            id: "INV-2024-002",
            amount: "৳8,500",
            status: "pending",
            date: "May 1"
        },
        {
            id: "INV-2024-003",
            amount: "৳22,000",
            status: "draft",
            date: "May 5"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 via-primary/10 to-chart-3/20 border border-purple-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "bg-purple-500/20 text-purple-400 border-purple-500/30 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                    className: "w-3 h-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                    lineNumber: 24,
                                    columnNumber: 89
                                }, this),
                                "Client Portal"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboards/client-dashboard.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl md:text-3xl font-bold",
                            children: "Welcome Back! 👋"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/client-dashboard.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mt-1",
                            children: "Track your projects, invoices, and communicate with our team"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/client-dashboard.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
                            children: [
                                {
                                    label: "Active Projects",
                                    value: "2",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                                    color: "text-purple-400",
                                    bg: "bg-purple-500/20"
                                },
                                {
                                    label: "Pending Invoices",
                                    value: "1",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                    color: "text-amber-400",
                                    bg: "bg-amber-500/20"
                                },
                                {
                                    label: "Messages",
                                    value: "3",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                    color: "text-blue-400",
                                    bg: "bg-blue-500/20"
                                },
                                {
                                    label: "Next Milestone",
                                    value: "May 10",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                    color: "text-green-400",
                                    bg: "bg-green-500/20"
                                }
                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-2 rounded-lg ${s.bg}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                        className: `w-4 h-4 ${s.color}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 100
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 58
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 149
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mt-2",
                                            children: s.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/dashboards/client-dashboard.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboards/client-dashboard.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                        delay: 100,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "w-4 h-4 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                            lineNumber: 45,
                                            columnNumber: 111
                                        }, this),
                                        "Your Projects"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                    lineNumber: 45,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: projects.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 p-4 rounded-lg bg-secondary/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        className: "text-[10px] bg-blue-500/10 text-blue-400",
                                                        children: p.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                        value: p.progress,
                                                        className: "h-2 flex-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 58
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold",
                                                        children: [
                                                            p.progress,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 112
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 86
                                                    }, this),
                                                    "Next: ",
                                                    p.nextMilestone
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                        delay: 200,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-4 h-4 text-amber-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                            lineNumber: 61,
                                            columnNumber: 111
                                        }, this),
                                        "Invoices"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-3",
                                children: invoices.map((inv, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-lg bg-secondary/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium",
                                                        children: inv.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: inv.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold",
                                                        children: inv.amount
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        className: `text-[10px] ${inv.status === "paid" ? "bg-green-500/10 text-green-400" : inv.status === "pending" ? "bg-amber-500/10 text-amber-400" : "bg-slate-500/10 text-slate-400"}`,
                                                        children: inv.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboards/client-dashboard.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboards/client-dashboard.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboards/client-dashboard.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard-layout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/stat-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$upcoming$2d$widget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/upcoming-widget.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-ssr] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$tasks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/tasks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/finance-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/hr.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4da60d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:4da60d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4e9fc6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:4e9fc6 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ae5e73__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:ae5e73 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3bb5ae__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:3bb5ae [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
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
const revenueData = [
    {
        month: "Jan",
        revenue: 45000,
        leads: 120
    },
    {
        month: "Feb",
        revenue: 52000,
        leads: 145
    },
    {
        month: "Mar",
        revenue: 48000,
        leads: 130
    },
    {
        month: "Apr",
        revenue: 61000,
        leads: 168
    },
    {
        month: "May",
        revenue: 55000,
        leads: 155
    },
    {
        month: "Jun",
        revenue: 67000,
        leads: 180
    },
    {
        month: "Jul",
        revenue: 72000,
        leads: 195
    }
];
const projectStatusData = [
    {
        name: "Completed",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'completed').length,
        color: "#4ade80"
    },
    {
        name: "In Progress",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'in-progress').length,
        color: "#60a5fa"
    },
    {
        name: "On Hold",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'on-hold').length,
        color: "#fbbf24"
    },
    {
        name: "Planning",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'planning').length,
        color: "#a78bfa"
    }
];
const recentLeads = [
    {
        name: "Sarah Mitchell",
        company: "TechStart Inc",
        status: "Hot",
        value: "৳15,000",
        avatar: "SM"
    },
    {
        name: "James Wilson",
        company: "GrowthCo",
        status: "Warm",
        value: "৳8,500",
        avatar: "JW"
    },
    {
        name: "Emily Chen",
        company: "InnovateLab",
        status: "Hot",
        value: "৳22,000",
        avatar: "EC"
    },
    {
        name: "Michael Brown",
        company: "ScaleUp Ltd",
        status: "Cold",
        value: "৳5,000",
        avatar: "MB"
    }
];
const activeProjects = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'in-progress').slice(0, 4).map((p)=>({
        name: p.name,
        client: p.client,
        progress: p.progress,
        dueDate: new Date(p.dueDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        })
    }));
const teamPerformance = [
    {
        name: "Design",
        tasks: 24,
        completed: 18
    },
    {
        name: "Dev",
        tasks: 32,
        completed: 28
    },
    {
        name: "Marketing",
        tasks: 18,
        completed: 15
    },
    {
        name: "Content",
        tasks: 21,
        completed: 19
    }
];
const conversionData = [
    {
        week: "W1",
        leads: 120,
        qualified: 45,
        converted: 12,
        rate: 26.7
    },
    {
        week: "W2",
        leads: 145,
        qualified: 58,
        converted: 18,
        rate: 31.0
    },
    {
        week: "W3",
        leads: 130,
        qualified: 52,
        converted: 14,
        rate: 26.9
    },
    {
        week: "W4",
        leads: 168,
        qualified: 72,
        converted: 22,
        rate: 30.6
    },
    {
        week: "W5",
        leads: 155,
        qualified: 65,
        converted: 20,
        rate: 30.8
    },
    {
        week: "W6",
        leads: 180,
        qualified: 78,
        converted: 25,
        rate: 32.1
    },
    {
        week: "W7",
        leads: 195,
        qualified: 88,
        converted: 28,
        rate: 31.8
    }
];
const clientSourceData = [
    {
        name: "Organic",
        value: 35,
        color: "#4ade80"
    },
    {
        name: "Referral",
        value: 25,
        color: "#60a5fa"
    },
    {
        name: "Paid Ads",
        value: 28,
        color: "#f97316"
    },
    {
        name: "Direct",
        value: 12,
        color: "#a78bfa"
    }
];
const monthlyTargetData = [
    {
        month: "Jan",
        target: 50000,
        actual: 45000,
        profit: 12000
    },
    {
        month: "Feb",
        target: 55000,
        actual: 52000,
        profit: 14000
    },
    {
        month: "Mar",
        target: 60000,
        actual: 48000,
        profit: 11000
    },
    {
        month: "Apr",
        target: 65000,
        actual: 61000,
        profit: 18000
    },
    {
        month: "May",
        target: 70000,
        actual: 55000,
        profit: 15000
    },
    {
        month: "Jun",
        target: 75000,
        actual: 67000,
        profit: 19000
    },
    {
        month: "Jul",
        target: 80000,
        actual: 72000,
        profit: 21000
    }
];
const recentActivities = [
    {
        id: 1,
        type: "lead",
        action: "New Lead Added",
        detail: "Sarah Mitchell from TechStart Inc",
        time: "2 hours ago",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        id: 2,
        type: "project",
        action: "Project Completed",
        detail: "E-commerce Redesign for TechMart",
        time: "5 hours ago",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    {
        id: 3,
        type: "task",
        action: "Task Created",
        detail: "SEO Optimization for GreenLife",
        time: "1 day ago",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
    },
    {
        id: 4,
        type: "meeting",
        action: "Client Meeting",
        detail: "Strategy discussion with AutoDeal",
        time: "1 day ago",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
    },
    {
        id: 5,
        type: "alert",
        action: "Overdue Invoice",
        detail: "Invoice #2024-001 - ৳5,200",
        time: "2 days ago",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"]
    }
];
const quickActions = [
    {
        label: "New Lead",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        color: "bg-blue-500/20 text-blue-400"
    },
    {
        label: "New Project",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
        color: "bg-green-500/20 text-green-400"
    },
    {
        label: "Create Invoice",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        color: "bg-amber-500/20 text-amber-400"
    },
    {
        label: "Schedule Meeting",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        color: "bg-purple-500/20 text-purple-400"
    },
    {
        label: "Team Task",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        color: "bg-pink-500/20 text-pink-400"
    },
    {
        label: "Report",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        color: "bg-cyan-500/20 text-cyan-400"
    }
];
const kpis = [
    {
        label: "Conversion Rate",
        value: "31.8%",
        trend: "+2.3%",
        color: "text-green-400"
    },
    {
        label: "Avg Deal Value",
        value: "৳18,750",
        trend: "+8.5%",
        color: "text-green-400"
    },
    {
        label: "Client Retention",
        value: "94.2%",
        trend: "+1.2%",
        color: "text-green-400"
    },
    {
        label: "Project ROI",
        value: "285%",
        trend: "-3.1%",
        color: "text-red-400"
    }
];
// --- Computed Real Data ---
const upcomingTasks = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$tasks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleTasks"].filter((t)=>t.status !== 'done').sort((a, b)=>new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
const dailyTasks = upcomingTasks.slice(0, 5).map((t)=>({
        id: t.id,
        title: t.title,
        time: new Date(t.dueDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        }),
        priority: t.priority,
        completed: t.status === 'done'
    }));
const tasksCompletedToday = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$tasks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleTasks"].filter((t)=>t.status === 'done').length;
const totalMRR = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoicesData"].filter((i)=>i.recurringInvoice).reduce((sum, inv)=>sum + inv.amount, 0);
const overdueInvoices = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoicesData"].filter((i)=>i.status === 'overdue');
const totalOverdue = overdueInvoices.reduce((sum, inv)=>sum + (inv.amount - inv.paid), 0);
const pendingInvoices = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoicesData"].filter((i)=>i.status === 'pending' || i.status === 'sent');
const totalPending = pendingInvoices.reduce((sum, inv)=>sum + (inv.amount - inv.paid), 0);
const financialSummary = {
    mrr: `৳${(totalMRR / 1000).toFixed(1)}k`,
    mrrGrowth: "+3.2%",
    outstanding: `৳${(totalPending / 1000).toFixed(1)}k`,
    invoicesPending: pendingInvoices.length,
    overdue: `৳${(totalOverdue / 1000).toFixed(1)}k`,
    invoicesOverdue: overdueInvoices.length,
    netProfitYTD: "৳142,500"
};
const todayDateStr = new Date().toISOString().split('T')[0];
const teamOnLeave = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leaveRequests"].filter((lr)=>lr.status === 'approved' && new Date(lr.startDate) <= new Date() && new Date(lr.endDate) >= new Date());
const recentAttendanceDate = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attendanceRecords"].length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attendanceRecords"][__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attendanceRecords"].length - 1].date : todayDateStr;
const recentAttendance = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attendanceRecords"].filter((a)=>a.date === recentAttendanceDate);
const presentCount = recentAttendance.filter((a)=>[
        'present',
        'late',
        'remote',
        'half-day'
    ].includes(a.status)).length;
const activeEmployees = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["employees"].filter((e)=>e.status === 'active').length;
const attendanceRate = activeEmployees > 0 ? Math.round(presentCount / activeEmployees * 100) : 0;
const teamSnapshot = {
    onLeave: teamOnLeave.length,
    attendanceRate: `${attendanceRate}%`,
    activeEmployees
};
const uniqueClientsCount = [
    ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialProjects"].map((p)=>p.client))
].length;
const totalRevenuePaid = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoicesData"].filter((i)=>i.status === 'paid').reduce((acc, i)=>acc + i.paid, 0);
function DashboardPage() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const userRole = session?.user?.role || "SUPER_ADMIN";
    // Role-based dashboard imports (lazy)
    const ManagementDashboard = __turbopack_context__.r("[project]/components/dashboards/management-dashboard.tsx [app-ssr] (ecmascript)").ManagementDashboard;
    const ManagerDashboard = __turbopack_context__.r("[project]/components/dashboards/manager-dashboard.tsx [app-ssr] (ecmascript)").ManagerDashboard;
    const EmployeeDashboard = __turbopack_context__.r("[project]/components/dashboards/employee-dashboard.tsx [app-ssr] (ecmascript)").EmployeeDashboard;
    const ClientDashboard = __turbopack_context__.r("[project]/components/dashboards/client-dashboard.tsx [app-ssr] (ecmascript)").ClientDashboard;
    // Render role-specific dashboards
    if (userRole === "MANAGEMENT") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ManagementDashboard, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 219,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 219,
            columnNumber: 12
        }, this);
    }
    if (userRole === "MANAGER") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ManagerDashboard, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 222,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 222,
            columnNumber: 12
        }, this);
    }
    if (userRole === "EMPLOYEE") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmployeeDashboard, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 225,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 225,
            columnNumber: 12
        }, this);
    }
    if (userRole === "CLIENT") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientDashboard, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 228,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 228,
            columnNumber: 12
        }, this);
    }
    // SUPER_ADMIN gets the full original dashboard
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardLayout"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FullAdminDashboard, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 232,
            columnNumber: 27
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 232,
        columnNumber: 10
    }, this);
}
function FullAdminDashboard() {
    const today = new Date().toISOString().split("T")[0];
    const [dbEmployees, setDbEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dbAttendance, setDbAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clockLoading, setClockLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadData() {
            const [empRes, attRes] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4da60d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getEmployees"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4e9fc6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAttendanceRecords"])()
            ]);
            if (Array.isArray(empRes)) setDbEmployees(empRes);
            if (Array.isArray(attRes)) setDbAttendance(attRes);
        }
        loadData();
    }, []);
    // Office timing
    const OFFICE_IN = "10:30";
    const GRACE = 30;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const currentUserId = session?.user?.employeeId || "";
    const currentEmp = dbEmployees.find((e)=>e.id === currentUserId || e.employeeId === currentUserId);
    const myRecord = currentEmp ? dbAttendance.find((r)=>r.employeeId === currentEmp.id && r.date === today) : null;
    const isLate = (time)=>{
        const [h, m] = time.split(":").map(Number);
        const [oh, om] = OFFICE_IN.split(":").map(Number);
        return h * 60 + m > oh * 60 + om + GRACE;
    };
    const getLabel = (time)=>{
        const [h, m] = time.split(":").map(Number);
        const [oh, om] = OFFICE_IN.split(":").map(Number);
        const mins = h * 60 + m, offMins = oh * 60 + om;
        if (mins <= offMins) return {
            text: "On Time",
            color: "text-green-500"
        };
        if (mins <= offMins + GRACE) return {
            text: "Within Grace",
            color: "text-yellow-500"
        };
        const late = mins - offMins;
        return {
            text: `Late by ${Math.floor(late / 60) > 0 ? `${Math.floor(late / 60)}h ` : ""}${late % 60}m`,
            color: "text-red-500"
        };
    };
    const handleDashClockIn = async ()=>{
        if (!currentEmp || myRecord) return;
        setClockLoading(true);
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        const status = isLate(time) ? "late" : "present";
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ae5e73__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createAttendanceRecord"])({
            employeeId: currentEmp.id,
            employeeName: `${currentEmp.firstName} ${currentEmp.lastName}`,
            date: today,
            status,
            clockIn: time,
            totalHours: 0,
            workLocation: "office"
        });
        if (!('error' in result)) setDbAttendance((prev)=>[
                ...prev,
                result
            ]);
        setClockLoading(false);
    };
    const handleDashClockOut = async ()=>{
        if (!myRecord || myRecord.clockOut) return;
        setClockLoading(true);
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        const [inH, inM] = (myRecord.clockIn || "10:30").split(":").map(Number);
        const hrs = Math.round((now.getHours() * 60 + now.getMinutes() - inH * 60 - inM) / 60 * 10) / 10;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3bb5ae__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateAttendanceRecord"])(myRecord.id, {
            clockOut: time,
            totalHours: Math.max(0, hrs)
        });
        if (!('error' in result)) setDbAttendance((prev)=>prev.map((r)=>r.id === myRecord.id ? {
                    ...r,
                    clockOut: time,
                    totalHours: Math.max(0, hrs)
                } : r));
        setClockLoading(false);
    };
    // Calculate totals for hero section
    const todayStats = {
        newLeads: 12,
        meetings: 3,
        tasksCompleted: tasksCompletedToday,
        revenue: `৳${(totalRevenuePaid / 1000).toFixed(1)}k`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-chart-2/10 to-chart-3/20 border border-primary/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))]"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl md:text-3xl font-bold text-foreground",
                                                children: "Welcome back! 👋"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground mt-1",
                                                children: "Here's what's happening with your agency today."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: new Date().toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-blue-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "w-4 h-4 text-blue-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "New Leads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold mt-2",
                                                children: [
                                                    "+",
                                                    todayStats.newLeads
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-purple-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "w-4 h-4 text-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Meetings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold mt-2",
                                                children: todayStats.meetings
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-green-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-4 h-4 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Tasks Done"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold mt-2",
                                                children: todayStats.tasksCompleted
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-amber-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                            className: "w-4 h-4 text-amber-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Today's Revenue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold mt-2",
                                                children: todayStats.revenue
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                delay: 50,
                className: "border-primary/20 bg-gradient-to-r from-primary/5 via-chart-2/5 to-chart-3/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-xl bg-primary/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-6 h-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 374,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 373,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold",
                                                children: "Attendance Clock"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "Office: 10:30 AM - 7:00 PM · 30 min grace"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 372,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: !myRecord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleDashClockIn,
                                    disabled: clockLoading || !currentEmp,
                                    className: "gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-xl shadow-lg shadow-green-600/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 21
                                        }, this),
                                        " Clock In"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 19
                                }, this) : !myRecord.clockOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "In at"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold",
                                                    children: myRecord.clockIn
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 23
                                                }, this),
                                                myRecord.clockIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-medium ${getLabel(myRecord.clockIn).color}`,
                                                    children: getLabel(myRecord.clockIn).text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleDashClockOut,
                                            disabled: clockLoading,
                                            className: "gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-xl shadow-lg shadow-red-600/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 23
                                                }, this),
                                                " Clock Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "In"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-green-500",
                                                            children: myRecord.clockIn
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 83
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-red-500",
                                                            children: myRecord.clockOut
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 84
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Hrs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-primary",
                                                            children: [
                                                                myRecord.totalHours,
                                                                "h"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 84
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "bg-green-500/20 text-green-500 text-xs px-2 py-1",
                                            children: "✓ Done"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 381,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 371,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 370,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 369,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 xl:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-5 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                delay: 100,
                                className: "border-primary/20 shadow-md shadow-primary/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex flex-row items-center justify-between pb-3 border-b border-border/50 bg-muted/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-1.5 rounded-md bg-blue-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-4 h-4 text-blue-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-base font-semibold",
                                                        children: "Today's Priorities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "text-xs font-normal",
                                                children: [
                                                    todayStats.tasksCompleted,
                                                    " / ",
                                                    dailyTasks.length,
                                                    " Done"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 422,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-border/50",
                                            children: dailyTasks.map((task, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 flex gap-3 hover:bg-muted/50 transition-colors group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-0.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${task.completed ? 'bg-primary border-primary' : 'border-muted-foreground/50 hover:border-primary delay-75'}`,
                                                                children: task.completed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "w-3.5 h-3.5 text-primary-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 46
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-sm font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`,
                                                                    children: task.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 443,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mt-1.5 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "secondary",
                                                                            className: "text-[10px] uppercase font-semibold tracking-wider h-5 px-1.5",
                                                                            children: task.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 447,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-[10px] font-medium uppercase tracking-wider ${task.priority === 'high' ? 'text-red-400' : task.priority === 'medium' ? 'text-amber-400' : 'text-blue-400'}`,
                                                                            children: [
                                                                                task.priority,
                                                                                " Priority"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 450,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, task.id, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$upcoming$2d$widget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpcomingWidget"], {
                                    delay: 0
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 465,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 464,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                delay: 300,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex flex-row items-center justify-between pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-base font-medium",
                                                children: "Activity Feed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-xs text-primary hover:underline flex items-center gap-1",
                                                children: [
                                                    "View all ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 max-h-[300px] overflow-y-auto pr-2",
                                            children: recentActivities.map((activity, i)=>{
                                                const Icon = activity.icon;
                                                const typeColors = {
                                                    lead: "bg-blue-500/20 text-blue-400",
                                                    project: "bg-green-500/20 text-green-400",
                                                    task: "bg-purple-500/20 text-purple-400",
                                                    meeting: "bg-amber-500/20 text-amber-400",
                                                    alert: "bg-red-500/20 text-red-400"
                                                };
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 relative",
                                                    children: [
                                                        i !== recentActivities.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-4 top-8 bottom-[-16px] w-[1px] bg-border/50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-2 rounded-full h-8 w-8 flex items-center justify-center relative z-10 ${typeColors[activity.type]}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0 pb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: activity.action
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground mt-0.5 mb-1",
                                                                    children: activity.detail
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider",
                                                                    children: activity.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 469,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-7 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 sm:grid-cols-6 gap-3 animate-in fade-in duration-500",
                                children: quickActions.map((action, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-secondary/50 hover:border-primary/50 transition-all hover:scale-105 ${action.color}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(action.icon, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-medium text-center leading-tight",
                                                children: action.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 513,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                                        title: "Total Leads",
                                        value: "1,284",
                                        change: 12.5,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                        delay: 100,
                                        iconColor: "text-chart-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                                        title: "Active Clients",
                                        value: "86",
                                        change: 8.2,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
                                        delay: 200,
                                        iconColor: "text-chart-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                                        title: "Projects",
                                        value: "28",
                                        change: -3.1,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
                                        delay: 300,
                                        iconColor: "text-chart-3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                                        title: "Revenue",
                                        value: "৳342K",
                                        change: 15.3,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                                        delay: 400,
                                        iconColor: "text-chart-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 526,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                delay: 500,
                                className: "border-amber-500/20 bg-gradient-to-br from-background to-amber-500/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-base font-semibold flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "w-4 h-4 text-amber-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 19
                                                }, this),
                                                "Financial Snapshot"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-muted-foreground flex items-center justify-between",
                                                            children: [
                                                                "MRR ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "text-[9px] h-4 px-1 bg-green-500/10 text-green-500 border-green-500/20",
                                                                    children: financialSummary.mrrGrowth
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 545,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold tracking-tight",
                                                            children: financialSummary.mrr
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Monthly Recurring Revenue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 border-l border-border/50 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-muted-foreground flex items-center justify-between",
                                                            children: [
                                                                "Pending ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "text-[9px] h-4 px-1",
                                                                    children: [
                                                                        financialSummary.invoicesPending,
                                                                        " inv"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 552,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold tracking-tight text-amber-500",
                                                            children: financialSummary.outstanding
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Expected incoming"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 550,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 border-l border-border/50 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-muted-foreground flex items-center justify-between",
                                                            children: [
                                                                "Overdue ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "text-[9px] h-4 px-1 bg-red-500/10 text-red-500 border-red-500/20",
                                                                    children: [
                                                                        financialSummary.invoicesOverdue,
                                                                        " inv"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 559,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 558,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold tracking-tight text-red-500",
                                                            children: financialSummary.overdue
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 561,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Requires attention"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 542,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 534,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: kpis.map((kpi, i)=>{
                                                const isPositive = kpi.trend.startsWith("+");
                                                const TrendIcon = isPositive ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                                    delay: 800 + i * 50,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground mb-1",
                                                                children: kpi.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-end justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl font-bold",
                                                                        children: kpi.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 580,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `flex items-center gap-0.5 text-[10px] font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendIcon, {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 582,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            kpi.trend
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 581,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 579,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 25
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                        delay: 900,
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "flex flex-row items-center justify-between pb-3 pt-4 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-medium",
                                                    children: "Projects in Flight"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 595,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "px-4 pb-4 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: activeProjects.slice(0, 3).map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-end",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm font-medium leading-none",
                                                                                        children: project.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.tsx",
                                                                                        lineNumber: 604,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[10px] text-muted-foreground mt-1",
                                                                                        children: project.client
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.tsx",
                                                                                        lineNumber: 605,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 603,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-medium bg-secondary px-1.5 py-0.5 rounded text-muted-foreground",
                                                                                children: [
                                                                                    "Due ",
                                                                                    project.dueDate
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 607,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 602,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                                        value: project.progress,
                                                                        className: "h-1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 611,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 601,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "w-full mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors pb-1 border-b border-transparent hover:border-foreground mx-auto block text-center",
                                                        children: "View all projects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 598,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 594,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 415,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 310,
        columnNumber: 7
    }, this);
}
}),
];

//# sourceMappingURL=_e6015b8c._.js.map