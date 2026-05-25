(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex size-8 shrink-0 overflow-hidden rounded-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('aspect-square size-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c1 = AvatarImage;
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted flex size-full items-center justify-center rounded-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = AvatarFallback;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/routes-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/role-config.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-client] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-client] (ecmascript) <export default as UserCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
// ==================== Role Configuration ====================
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes-config.ts [app-client] (ecmascript)");
;
// ==================== Sidebar Navigation Per Role ====================
const allNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/leads",
        label: "Leads",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        href: "/clients",
        label: "Clients",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
    },
    {
        href: "/projects",
        label: "Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
    },
    {
        href: "/tasks",
        label: "Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        href: "/team",
        label: "Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        href: "/finances",
        label: "Finances",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
    },
    {
        href: "/reports",
        label: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        href: "/calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    },
    {
        href: "/users",
        label: "User Management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"]
    },
    {
        href: "/settings",
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
const managementNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/leads",
        label: "Leads",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        href: "/clients",
        label: "Clients",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
    },
    {
        href: "/projects",
        label: "Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
    },
    {
        href: "/tasks",
        label: "Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        href: "/team",
        label: "Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        href: "/finances",
        label: "Finances",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
    },
    {
        href: "/reports",
        label: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        href: "/calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    },
    {
        href: "/users",
        label: "User Management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"]
    },
    {
        href: "/settings",
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
const managerNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/leads",
        label: "Leads",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        href: "/clients",
        label: "Clients",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
    },
    {
        href: "/projects",
        label: "Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
    },
    {
        href: "/tasks",
        label: "Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        href: "/team",
        label: "Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        href: "/reports",
        label: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        href: "/calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    }
];
const employeeNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/projects",
        label: "Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"]
    },
    {
        href: "/tasks",
        label: "My Tasks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
    },
    {
        href: "/team",
        label: "Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        href: "/calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    }
];
const clientNavItems = [
    {
        href: "/",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/portal/projects",
        label: "My Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    },
    {
        href: "/portal/invoices",
        label: "Invoices",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        href: "/portal/messages",
        label: "Messages",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
    }
];
;
;
const ROLE_CONFIG = {
    SUPER_ADMIN: {
        label: "Super Admin",
        color: "text-red-400",
        bgColor: "bg-red-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].SUPER_ADMIN,
        sidebar: allNavItems
    },
    MANAGEMENT: {
        label: "Management",
        color: "text-amber-400",
        bgColor: "bg-amber-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].MANAGEMENT,
        sidebar: managementNavItems
    },
    MANAGER: {
        label: "Manager",
        color: "text-blue-400",
        bgColor: "bg-blue-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].MANAGER,
        sidebar: managerNavItems
    },
    EMPLOYEE: {
        label: "Employee",
        color: "text-green-400",
        bgColor: "bg-green-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].EMPLOYEE,
        sidebar: employeeNavItems
    },
    CLIENT: {
        label: "Client",
        color: "text-purple-400",
        bgColor: "bg-purple-500/20",
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLE_ROUTES"].CLIENT,
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/role-config.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const userRole = session?.user?.role || "EMPLOYEE";
    const userName = session?.user?.name || "User";
    const userInitials = userName.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getNavItemsForRole"])(userRole);
    const roleLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRoleLabel"])(userRole);
    const roleColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRoleColor"])(userRole);
    const roleBgColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRoleBgColor"])(userRole);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col", collapsed ? "w-[70px]" : "w-[240px]"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 h-16 border-b border-sidebar-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-9 h-9 rounded-lg bg-primary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
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
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-4 space-y-1 overflow-y-auto",
                children: navItems.map((item)=>{
                    const isActive = pathname === item.href || item.href !== "/" && pathname.startsWith(item.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group", isActive ? "bg-sidebar-accent text-sidebar-primary" : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110", isActive && "text-sidebar-primary")
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-in fade-in slide-in-from-left-2 duration-200",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 70,
                                columnNumber: 30
                            }, this),
                            isActive && !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-sidebar-border p-3 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent/50 cursor-pointer transition-colors", collapsed && "justify-center px-0"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: "w-8 h-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                        src: session?.user?.avatar || ""
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
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
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 animate-in fade-in slide-in-from-left-2 duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-sidebar-foreground truncate",
                                        children: userName
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded", roleBgColor, roleColor),
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                callbackUrl: "/login"
                            }),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors", collapsed && "justify-center px-0"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "w-4 h-4 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCollapsed(!collapsed),
                        className: "flex items-center justify-center w-full py-2 rounded-lg hover:bg-sidebar-accent/50 text-muted-foreground hover:text-sidebar-foreground transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 transition-transform duration-300", collapsed && "rotate-180")
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
_s(Sidebar, "MXwjR3JPZJWRxJd6n75PixlQ6tQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayout",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DashboardLayout({ children }) {
    _s();
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            // Check if mobile
            const checkMobile = {
                "DashboardLayout.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 1024);
                    if (window.innerWidth >= 1024) {
                        setMobileMenuOpen(false);
                    }
                }
            }["DashboardLayout.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            const checkSidebar = {
                "DashboardLayout.useEffect.checkSidebar": ()=>{
                    const sidebar = document.querySelector("aside");
                    if (sidebar) {
                        setSidebarCollapsed(sidebar.classList.contains("w-[70px]"));
                    }
                }
            }["DashboardLayout.useEffect.checkSidebar"];
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
            return ({
                "DashboardLayout.useEffect": ()=>{
                    observer.disconnect();
                    window.removeEventListener("resize", checkMobile);
                }
            })["DashboardLayout.useEffect"];
        }
    }["DashboardLayout.useEffect"], []);
    // Close mobile menu when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            if (mobileMenuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            return ({
                "DashboardLayout.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["DashboardLayout.useEffect"];
        }
    }["DashboardLayout.useEffect"], [
        mobileMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/components/dashboard-layout.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard-layout.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in-up",
                onClick: ()=>setMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/dashboard-layout.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 left-0 z-50 w-[280px] transform transition-transform duration-300 ease-out lg:hidden", mobileMenuOpen ? "translate-x-0" : "-translate-x-full"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                        fileName: "[project]/components/dashboard-layout.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileMenuOpen(false),
                        className: "absolute top-4 right-4 p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-300 ease-out min-h-screen", !isMobile && (sidebarCollapsed ? "lg:ml-[70px]" : "lg:ml-[240px]")),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "sticky top-0 z-30 h-14 sm:h-16 border-b border-border bg-background/90 backdrop-blur-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between h-full px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(true),
                                    className: "p-2 rounded-lg hover:bg-secondary transition-colors lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block relative w-full max-w-xs lg:max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard-layout.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-2 rounded-lg hover:bg-secondary transition-colors sm:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            className: "gap-1.5 sm:gap-2 h-8 sm:h-9 px-2.5 sm:px-4 text-xs sm:text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-layout.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "New Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-layout.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "relative p-2 rounded-lg hover:bg-secondary transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                    className: "w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard-layout.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(DashboardLayout, "olxQnocgi7alkKQbsLNfprcP4KA=");
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/animated-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedCard",
    ()=>AnimatedCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function AnimatedCard({ children, className, delay = 0, hover = true, glow = false, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card border-border animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both", hover && "transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5", glow && "animate-glow-pulse", className),
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
_c = AnimatedCard;
var _c;
__turbopack_context__.k.register(_c, "AnimatedCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/stat-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCard",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
"use client";
;
;
;
;
;
function StatCard({ title, value, change, icon: Icon, delay = 0, iconColor = "text-primary" }) {
    const isPositive = change && change > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
        delay: delay,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/stat-card.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-foreground",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/components/stat-card.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            change !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-xs font-medium", isPositive ? "text-success" : "text-destructive"),
                                children: [
                                    isPositive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/stat-card.tsx",
                                        lineNumber: 34,
                                        columnNumber: 31
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/stat-card.tsx",
                                        lineNumber: 34,
                                        columnNumber: 68
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 rounded-lg bg-secondary", iconColor),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/upcoming-widget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpcomingWidget",
    ()=>UpcomingWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-client] (ecmascript) <export default as ListTodo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"],
        color: "text-blue-400",
        bgColor: "bg-blue-500/20",
        label: "Task"
    },
    meeting: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
        color: "text-purple-400",
        bgColor: "bg-purple-500/20",
        label: "Meeting"
    },
    deadline: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        color: "text-red-400",
        bgColor: "bg-red-500/20",
        label: "Deadline"
    },
    reminder: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
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
    _s();
    const events = propEvents || getDefaultEvents();
    const today = new Date();
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(today);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(today);
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get calendar data for current month
    const calendarData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UpcomingWidget.useMemo[calendarData]": ()=>{
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
        }
    }["UpcomingWidget.useMemo[calendarData]"], [
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
    const selectedDateEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UpcomingWidget.useMemo[selectedDateEvents]": ()=>{
            return getEventsForDate(selectedDate);
        }
    }["UpcomingWidget.useMemo[selectedDateEvents]"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                delay: delay,
                className: "overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base font-medium flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: goToPreviousMonth,
                                        className: "h-7 w-7 hover:bg-secondary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-foreground",
                                        children: calendarData.monthName
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                        lineNumber: 301,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: goToNextMonth,
                                        className: "h-7 w-7 hover:bg-secondary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 gap-1 text-center text-xs",
                                        children: [
                                            "S",
                                            "M",
                                            "T",
                                            "W",
                                            "T",
                                            "F",
                                            "S"
                                        ].map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 gap-1",
                                        children: [
                                            Array.from({
                                                length: calendarData.startingDay
                                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedDate(date),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square rounded-lg text-xs font-medium transition-all relative flex items-center justify-center", "hover:bg-secondary/80 hover:scale-105", isSelected && "bg-primary text-primary-foreground shadow-lg shadow-primary/30", !isSelected && isTodayDate && "ring-2 ring-primary/50 bg-primary/10", !isSelected && hasEvents && "bg-secondary/50 border border-primary/30", !isSelected && !hasEvents && "text-muted-foreground"),
                                                    children: [
                                                        i + 1,
                                                        hasEvents && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-border pt-3 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            selectedDateEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 max-h-[160px] overflow-y-auto",
                                        children: selectedDateEvents.length > 0 ? selectedDateEvents.map((event)=>{
                                            const config = eventTypeConfig[event.type];
                                            const EventIcon = config.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEventClick(event),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left p-2.5 rounded-lg transition-all group", "bg-gradient-to-r from-secondary/50 to-secondary/30", "border-l-2 border-primary hover:border-l-4", "hover:from-secondary/80 hover:to-secondary/50", "hover:shadow-md hover:shadow-primary/10"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1.5 rounded-md", config.bgColor),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventIcon, {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3", config.color)
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium truncate group-hover:text-primary transition-colors",
                                                                    children: event.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mt-0.5",
                                                                    children: [
                                                                        event.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-muted-foreground flex items-center gap-0.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
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
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[9px] h-4 px-1.5", priorityConfig[event.priority || "medium"].color),
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
                                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-8 h-8 text-muted-foreground/50 mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md",
                    children: selectedEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2.5 rounded-lg", eventTypeConfig[selectedEvent.type].bgColor),
                                            children: (()=>{
                                                const EventIcon = eventTypeConfig[selectedEvent.type].icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventIcon, {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", eventTypeConfig[selectedEvent.type].color)
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                    className: "text-lg",
                                                    children: selectedEvent.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "text-xs",
                                                            children: eventTypeConfig[selectedEvent.type].label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 45
                                                        }, this),
                                                        selectedEvent.priority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", priorityConfig[selectedEvent.priority].color),
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 459,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: formatEventDate(new Date(selectedEvent.date))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 41
                                                    }, this),
                                                    selectedEvent.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    selectedEvent.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg bg-secondary/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    (selectedEvent.location || selectedEvent.meetingLink) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-sm",
                                        children: [
                                            selectedEvent.isOnline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 482,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 484,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    selectedEvent.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: selectedEvent.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 72
                                                    }, this),
                                                    selectedEvent.meetingLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                    selectedEvent.project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 505,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    selectedEvent.attendees && selectedEvent.attendees.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "w-4 h-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: selectedEvent.attendees.map((attendee, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-medium",
                                                                children: attendee.initials
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    selectedEvent.tags && selectedEvent.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: selectedEvent.tags.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
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
                                    selectedEvent.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 pt-2 border-t border-border",
                                        children: [
                                            selectedEvent.status === "completed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-4 h-4 text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 548,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard/upcoming-widget.tsx",
                                                lineNumber: 550,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mt-4 pt-4 border-t border-border",
                                children: [
                                    selectedEvent.type === "meeting" && selectedEvent.meetingLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: selectedEvent.meetingLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
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
                                    selectedEvent.type === "task" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(UpcomingWidget, "rbFzualC57T06VxKM8ryrcL8SN4=");
_c = UpcomingWidget;
var _c;
__turbopack_context__.k.register(_c, "UpcomingWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
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
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:4da60d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00de1d304a4cf2a3d56cdde0ec379e9011c1baa53e":"getEmployees"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "getEmployees",
    ()=>getEmployees
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getEmployees = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00de1d304a4cf2a3d56cdde0ec379e9011c1baa53e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getEmployees"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBFTVBMT1lFRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xyXG4gICAgICBpZDogZS5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBlLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBlLmVtYWlsLFxyXG4gICAgICBwaG9uZTogZS5waG9uZSxcclxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxyXG4gICAgICBqb2JUaXRsZTogZS5qb2JUaXRsZSxcclxuICAgICAgZGVwYXJ0bWVudDogZS5kZXBhcnRtZW50LFxyXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgbWFuYWdlcklkOiBlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc3RhcnREYXRlOiBlLnN0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZTogZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcclxuICAgICAgc2FsYXJ5OiBlLnNhbGFyeSxcclxuICAgICAgY3VycmVuY3k6IGUuY3VycmVuY3ksXHJcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXHJcbiAgICAgIHNraWxsczogZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIHllYXJzT2ZFeHBlcmllbmNlOiBlLnllYXJzT2ZFeHBlcmllbmNlLFxyXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgcGVyZm9ybWFuY2VSYXRpbmc6IGUucGVyZm9ybWFuY2VSYXRpbmcsXHJcbiAgICAgIGRvY3VtZW50czogZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcclxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IGUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXHJcbiAgICAgIGxlYXZlQmFsYW5jZTogZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRBdDogZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBlbXBsb3llZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGpvYlRpdGxlOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBlbXBsb3ltZW50VHlwZT86IHN0cmluZ1xyXG4gIHN0YXR1cz86IHN0cmluZ1xyXG4gIG1hbmFnZXJJZD86IHN0cmluZ1xyXG4gIG1hbmFnZXJOYW1lPzogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcclxuICBzYWxhcnk/OiBudW1iZXJcclxuICBjdXJyZW5jeT86IHN0cmluZ1xyXG4gIHBheUZyZXF1ZW5jeT86IHN0cmluZ1xyXG4gIHNraWxscz86IGFueVtdXHJcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcclxuICBjZXJ0aWZpY2F0aW9ucz86IHN0cmluZ1tdXHJcbiAgcGVyZm9ybWFuY2VSYXRpbmc/OiBudW1iZXJcclxuICBkb2N1bWVudHM/OiBhbnlbXVxyXG4gIGNhcmVlckhpc3Rvcnk/OiBhbnlbXVxyXG4gIGVtZXJnZW5jeUNvbnRhY3RzPzogYW55W11cclxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50LFxyXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImFjdGl2ZVwiLFxyXG4gICAgICAgIG1hbmFnZXJJZDogZGF0YS5tYW5hZ2VySWQgfHwgbnVsbCxcclxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBcIlJlbW90ZVwiLFxyXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcclxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSB8fCBcIkJEVFwiLFxyXG4gICAgICAgIHBheUZyZXF1ZW5jeTogZGF0YS5wYXlGcmVxdWVuY3kgfHwgXCJtb250aGx5XCIsXHJcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICB5ZWFyc09mRXhwZXJpZW5jZTogZGF0YS55ZWFyc09mRXhwZXJpZW5jZSB8fCAwLFxyXG4gICAgICAgIGNlcnRpZmljYXRpb25zOiAoZGF0YS5jZXJ0aWZpY2F0aW9ucyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXHJcbiAgICAgICAgZG9jdW1lbnRzOiAoZGF0YS5kb2N1bWVudHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICBjYXJlZXJIaXN0b3J5OiAoZGF0YS5jYXJlZXJIaXN0b3J5IHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgbGVhdmVCYWxhbmNlOiAoZGF0YS5sZWF2ZUJhbGFuY2UgfHwge30pIGFzIGFueSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgcHJpc21hLnRlYW1FbXBsb3llZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBlbXBsb3llZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGVtcGxveWVlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgcHJpc21hLnRlYW1DYW5kaWRhdGUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBjLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGMubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxyXG4gICAgICBwaG9uZTogYy5waG9uZSxcclxuICAgICAgcG9zaXRpb246IGMucG9zaXRpb24sXHJcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcclxuICAgICAgc3RhZ2U6IGMuc3RhZ2UsXHJcbiAgICAgIHNvdXJjZTogYy5zb3VyY2UsXHJcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXHJcbiAgICAgIG5vdGVzOiBjLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjLmV4cGVjdGVkU2FsYXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXZhaWxhYmxlRnJvbTogYy5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY2FuZGlkYXRlc1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYW5kaWRhdGUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIHBvc2l0aW9uOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBzdGFnZT86IHN0cmluZ1xyXG4gIHNvdXJjZT86IHN0cmluZ1xyXG4gIGFwcGxpZWRBdDogc3RyaW5nXHJcbiAgc2tpbGxzPzogc3RyaW5nW11cclxuICBleHBlY3RlZFNhbGFyeT86IG51bWJlclxyXG4gIGF2YWlsYWJsZUZyb20/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxyXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcclxuICAgICAgICBzdGFnZTogZGF0YS5zdGFnZSB8fCBcImFwcGxpZWRcIixcclxuICAgICAgICBzb3VyY2U6IGRhdGEuc291cmNlIHx8IFwiXCIsXHJcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcclxuICAgICAgICBza2lsbHM6IChkYXRhLnNraWxscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGV4cGVjdGVkU2FsYXJ5OiBkYXRhLmV4cGVjdGVkU2FsYXJ5IHx8IG51bGwsXHJcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICBub3RlczogY2FuZGlkYXRlLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcclxuICAgICAgZXhwZWN0ZWRTYWxhcnk6IGNhbmRpZGF0ZS5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGF2YWlsYWJsZUZyb206IGNhbmRpZGF0ZS5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY2FuZGlkYXRlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNhbmRpZGF0ZSxcclxuICAgICAgbm90ZXM6IGNhbmRpZGF0ZS5ub3RlcyBhcyBzdHJpbmdbXSxcclxuICAgICAgaW50ZXJ2aWV3czogY2FuZGlkYXRlLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhdmFpbGFibGVGcm9tOiBjYW5kaWRhdGUuYXZhaWxhYmxlRnJvbSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNraWxsczogY2FuZGlkYXRlLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhbmRpZGF0ZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IExFQVZFIFJFUVVFU1QgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcclxuICAgICAgaWQ6IHIuaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcclxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcclxuICAgICAgbGVhdmVUeXBlOiByLmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXJ0RGF0ZTogci5zdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcclxuICAgICAgdG90YWxEYXlzOiByLnRvdGFsRGF5cyxcclxuICAgICAgcmVhc29uOiByLnJlYXNvbixcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGFwcHJvdmVySWQ6IHIuYXBwcm92ZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVyTmFtZTogci5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICByZWplY3Rpb25SZWFzb246IHIucmVqZWN0aW9uUmVhc29uIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiByLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsZWF2ZSByZXF1ZXN0czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhdmVSZXF1ZXN0KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIGxlYXZlVHlwZTogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICBlbmREYXRlOiBzdHJpbmdcclxuICB0b3RhbERheXM6IG51bWJlclxyXG4gIHJlYXNvbjogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHByaXNtYS50ZWFtTGVhdmVSZXF1ZXN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBkYXRhLmVtcGxveWVlTmFtZSxcclxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxyXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXHJcbiAgICAgICAgcmVhc29uOiBkYXRhLnJlYXNvbixcclxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlcXVlc3QsXHJcbiAgICAgIGxlYXZlVHlwZTogcmVxdWVzdC5sZWF2ZVR5cGUgYXMgYW55LFxyXG4gICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzIGFzIGFueSxcclxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZXJOYW1lOiByZXF1ZXN0LmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVkQXQ6IHJlcXVlc3QuYXBwcm92ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IHJlcXVlc3QuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBsZWF2ZSByZXF1ZXN0OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgbGVhdmUgcmVxdWVzdFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVxdWVzdCxcclxuICAgICAgbGVhdmVUeXBlOiByZXF1ZXN0LmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBhcHByb3ZlcklkOiByZXF1ZXN0LmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3Zlck5hbWU6IHJlcXVlc3QuYXBwcm92ZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByZXF1ZXN0LnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVxdWVzdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGxlYXZlIHJlcXVlc3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQVRURU5EQU5DRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG1hcmtlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIGRhdGU6IHIuZGF0ZSxcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNsb2NrT3V0OiByLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHdvcmtMb2NhdGlvbjogci53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3Rlczogci5ub3RlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggYXR0ZW5kYW5jZSByZWNvcmRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUF0dGVuZGFuY2VSZWNvcmQoZGF0YToge1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBjbG9ja0luPzogc3RyaW5nXHJcbiAgY2xvY2tPdXQ/OiBzdHJpbmdcclxuICBicmVha01pbnV0ZXM/OiBudW1iZXJcclxuICB0b3RhbEhvdXJzPzogbnVtYmVyXHJcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXHJcbiAgbm90ZXM/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbXBsb3llZUlkX2RhdGU6IHtcclxuICAgICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgY2xvY2tJbjogZGF0YS5jbG9ja0luIHx8IG51bGwsXHJcbiAgICAgICAgY2xvY2tPdXQ6IGRhdGEuY2xvY2tPdXQgfHwgbnVsbCxcclxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXHJcbiAgICAgICAgdG90YWxIb3VyczogZGF0YS50b3RhbEhvdXJzIHx8IG51bGwsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBudWxsLFxyXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgbWFya2VkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxyXG4gICAgICAgIGNsb2NrT3V0OiBkYXRhLmNsb2NrT3V0IHx8IG51bGwsXHJcbiAgICAgICAgYnJlYWtNaW51dGVzOiBkYXRhLmJyZWFrTWludXRlcyB8fCBudWxsLFxyXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxyXG4gICAgICAgIHdvcmtMb2NhdGlvbjogZGF0YS53b3JrTG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBdHRlbmRhbmNlUmVjb3JkKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T0tScygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tycyA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBva3JzLm1hcCgobykgPT4gKHtcclxuICAgICAgaWQ6IG8uaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IG8uZW1wbG95ZWVJZCxcclxuICAgICAgdGl0bGU6IG8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxyXG4gICAgICBxdWFydGVyOiBvLnF1YXJ0ZXIsXHJcbiAgICAgIGtleVJlc3VsdHM6IG8ua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcclxuICAgICAgc3RhdHVzOiBvLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBvLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG8udXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIE9LUnM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIE9LUnNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICBxdWFydGVyOiBzdHJpbmdcclxuICBrZXlSZXN1bHRzPzogYW55W11cclxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwYXJlbnRPS1JJZD86IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9rciA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICBxdWFydGVyOiBkYXRhLnF1YXJ0ZXIsXHJcbiAgICAgICAga2V5UmVzdWx0czogKGRhdGEua2V5UmVzdWx0cyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwib24tdHJhY2tcIixcclxuICAgICAgICBwYXJlbnRPS1JJZDogZGF0YS5wYXJlbnRPS1JJZCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm9rcixcclxuICAgICAga2V5UmVzdWx0czogb2tyLmtleVJlc3VsdHMgYXMgYW55W10sXHJcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IG9rci5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBPS1I6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT0tSKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub2tyLFxyXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcclxuICAgICAgcGFyZW50T0tSSWQ6IG9rci5wYXJlbnRPS1JJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIE9LUjpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIE9LUlwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2VSZXZpZXdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmV2aWV3cy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcclxuICAgICAgcmV2aWV3ZXJOYW1lOiByLnJldmlld2VyTmFtZSxcclxuICAgICAgcGVyaW9kOiByLnBlcmlvZCxcclxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxyXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcclxuICAgICAgb3ZlcmFsbFJhdGluZzogci5vdmVyYWxsUmF0aW5nLFxyXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByLnN0cmVuZ3RocyBhcyBzdHJpbmdbXSxcclxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogci5hcmVhc0ZvckltcHJvdmVtZW50IGFzIHN0cmluZ1tdLFxyXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByLnNhbGFyeUNoYW5nZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHByb21vdGlvblJlY29tbWVuZGVkOiByLnByb21vdGlvblJlY29tbWVuZGVkLFxyXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHIuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZXJmb3JtYW5jZSByZXZpZXdzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBwZXJmb3JtYW5jZSByZXZpZXdzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIHJldmlld2VySWQ6IHN0cmluZ1xyXG4gIHJldmlld2VyTmFtZTogc3RyaW5nXHJcbiAgcGVyaW9kOiBzdHJpbmdcclxuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBvdmVyYWxsUmF0aW5nPzogbnVtYmVyXHJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxyXG4gIHN0cmVuZ3Rocz86IHN0cmluZ1tdXHJcbiAgYXJlYXNGb3JJbXByb3ZlbWVudD86IHN0cmluZ1tdXHJcbiAgZ29hbHM/OiBzdHJpbmdbXVxyXG4gIHNhbGFyeUNoYW5nZT86IG51bWJlclxyXG4gIHByb21vdGlvblJlY29tbWVuZGVkPzogYm9vbGVhblxyXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmV2aWV3ID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxyXG4gICAgICAgIGVtcGxveWVlTmFtZTogZGF0YS5lbXBsb3llZU5hbWUsXHJcbiAgICAgICAgcmV2aWV3ZXJJZDogZGF0YS5yZXZpZXdlcklkLFxyXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXHJcbiAgICAgICAgcGVyaW9kOiBkYXRhLnBlcmlvZCxcclxuICAgICAgICBzY2hlZHVsZWREYXRlOiBkYXRhLnNjaGVkdWxlZERhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxyXG4gICAgICAgIG92ZXJhbGxSYXRpbmc6IGRhdGEub3ZlcmFsbFJhdGluZyB8fCAwLFxyXG4gICAgICAgIGNvbXBldGVuY3lSYXRpbmdzOiAoZGF0YS5jb21wZXRlbmN5UmF0aW5ncyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogKGRhdGEuYXJlYXNGb3JJbXByb3ZlbWVudCB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGdvYWxzOiAoZGF0YS5nb2FscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcclxuICAgICAgICBwcm9tb3Rpb25SZWNvbW1lbmRlZDogZGF0YS5wcm9tb3Rpb25SZWNvbW1lbmRlZCB8fCBmYWxzZSxcclxuICAgICAgICBwaXBSZXF1aXJlZDogZGF0YS5waXBSZXF1aXJlZCB8fCBmYWxzZSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBwcmlzbWEudGVhbVBlcmZvcm1hbmNlUmV2aWV3LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWluaW5nQ291cnNlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IHByaXNtYS50ZWFtVHJhaW5pbmdDb3Vyc2UuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNvdXJzZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgdGl0bGU6IGMudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxyXG4gICAgICBjYXRlZ29yeTogYy5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGR1cmF0aW9uOiBjLmR1cmF0aW9uLFxyXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcclxuICAgICAgZm9ybWF0OiBjLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGMuY2VydGlmaWNhdGlvbkV4cGlyeSB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYWluaW5nIGNvdXJzZXM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJhaW5pbmdDb3Vyc2UoZGF0YToge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBjYXRlZ29yeT86IHN0cmluZ1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxuICBmb3JtYXQ/OiBzdHJpbmdcclxuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUgfHwgXCJvcHRpb25hbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8IFwidGVjaG5pY2FsXCIsXHJcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBcIlwiLFxyXG4gICAgICAgIGZvcm1hdDogZGF0YS5mb3JtYXQgfHwgXCJvbmxpbmVcIixcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jb3Vyc2UsXHJcbiAgICAgIHR5cGU6IGNvdXJzZS50eXBlIGFzIGFueSxcclxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGZvcm1hdDogY291cnNlLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGNvdXJzZS5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHRyYWluaW5nIGNvdXJzZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENPVVJTRSBFTlJPTExNRU5UIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZW5yb2xsbWVudHMgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcclxuICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgIGNvdXJzZUlkOiBlLmNvdXJzZUlkLFxyXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGUuZW1wbG95ZWVJZCxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxyXG4gICAgICBlbnJvbGxlZEF0OiBlLmVucm9sbGVkQXQsXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZS5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvdXJzZSBlbnJvbGxtZW50czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY291cnNlIGVucm9sbG1lbnRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xyXG4gIGNvdXJzZUlkOiBzdHJpbmdcclxuICBjb3Vyc2VOYW1lOiBzdHJpbmdcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwcm9ncmVzcz86IG51bWJlclxyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvdXJzZUlkOiBkYXRhLmNvdXJzZUlkLFxyXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImVucm9sbGVkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBlbnJvbGxlZEF0OiBkYXRhLmVucm9sbGVkQXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZW5yb2xsbWVudCxcclxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGVucm9sbG1lbnQuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvdXJzZUVucm9sbG1lbnQoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbnJvbGxtZW50ID0gYXdhaXQgcHJpc21hLnRlYW1Db3Vyc2VFbnJvbGxtZW50LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmVucm9sbG1lbnQsXHJcbiAgICAgIHN0YXR1czogZW5yb2xsbWVudC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY2VydGlmaWNhdGVVcmw6IGVucm9sbG1lbnQuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY291cnNlIGVucm9sbG1lbnQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IEhPTElEQVkgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhvbGlkYXlzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBob2xpZGF5cyA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5maW5kTWFueSh7IG9yZGVyQnk6IHsgZGF0ZTogXCJhc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gaG9saWRheXMubWFwKGggPT4gKHtcclxuICAgICAgLi4uaCxcclxuICAgICAgY3JlYXRlZEF0OiBoLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhvbGlkYXlzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBob2xpZGF5c1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIb2xpZGF5KGRhdGE6IHsgZGF0ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaG9saWRheSA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaG9saWRheSxcclxuICAgICAgY3JlYXRlZEF0OiBob2xpZGF5LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBob2xpZGF5OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaG9saWRheVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVIb2xpZGF5KGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnRlYW1Ib2xpZGF5LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgaG9saWRheTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGhvbGlkYXlcIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVJBTXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:4e9fc6 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006d0908b33b2d2fae83f80b24e2976719b86f9f7b":"getAttendanceRecords"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "getAttendanceRecords",
    ()=>getAttendanceRecords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getAttendanceRecords = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("006d0908b33b2d2fae83f80b24e2976719b86f9f7b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAttendanceRecords"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBFTVBMT1lFRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xyXG4gICAgICBpZDogZS5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBlLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBlLmVtYWlsLFxyXG4gICAgICBwaG9uZTogZS5waG9uZSxcclxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxyXG4gICAgICBqb2JUaXRsZTogZS5qb2JUaXRsZSxcclxuICAgICAgZGVwYXJ0bWVudDogZS5kZXBhcnRtZW50LFxyXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgbWFuYWdlcklkOiBlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc3RhcnREYXRlOiBlLnN0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZTogZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcclxuICAgICAgc2FsYXJ5OiBlLnNhbGFyeSxcclxuICAgICAgY3VycmVuY3k6IGUuY3VycmVuY3ksXHJcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXHJcbiAgICAgIHNraWxsczogZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIHllYXJzT2ZFeHBlcmllbmNlOiBlLnllYXJzT2ZFeHBlcmllbmNlLFxyXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgcGVyZm9ybWFuY2VSYXRpbmc6IGUucGVyZm9ybWFuY2VSYXRpbmcsXHJcbiAgICAgIGRvY3VtZW50czogZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcclxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IGUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXHJcbiAgICAgIGxlYXZlQmFsYW5jZTogZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRBdDogZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBlbXBsb3llZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGpvYlRpdGxlOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBlbXBsb3ltZW50VHlwZT86IHN0cmluZ1xyXG4gIHN0YXR1cz86IHN0cmluZ1xyXG4gIG1hbmFnZXJJZD86IHN0cmluZ1xyXG4gIG1hbmFnZXJOYW1lPzogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcclxuICBzYWxhcnk/OiBudW1iZXJcclxuICBjdXJyZW5jeT86IHN0cmluZ1xyXG4gIHBheUZyZXF1ZW5jeT86IHN0cmluZ1xyXG4gIHNraWxscz86IGFueVtdXHJcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcclxuICBjZXJ0aWZpY2F0aW9ucz86IHN0cmluZ1tdXHJcbiAgcGVyZm9ybWFuY2VSYXRpbmc/OiBudW1iZXJcclxuICBkb2N1bWVudHM/OiBhbnlbXVxyXG4gIGNhcmVlckhpc3Rvcnk/OiBhbnlbXVxyXG4gIGVtZXJnZW5jeUNvbnRhY3RzPzogYW55W11cclxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50LFxyXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImFjdGl2ZVwiLFxyXG4gICAgICAgIG1hbmFnZXJJZDogZGF0YS5tYW5hZ2VySWQgfHwgbnVsbCxcclxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBcIlJlbW90ZVwiLFxyXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcclxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSB8fCBcIkJEVFwiLFxyXG4gICAgICAgIHBheUZyZXF1ZW5jeTogZGF0YS5wYXlGcmVxdWVuY3kgfHwgXCJtb250aGx5XCIsXHJcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICB5ZWFyc09mRXhwZXJpZW5jZTogZGF0YS55ZWFyc09mRXhwZXJpZW5jZSB8fCAwLFxyXG4gICAgICAgIGNlcnRpZmljYXRpb25zOiAoZGF0YS5jZXJ0aWZpY2F0aW9ucyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXHJcbiAgICAgICAgZG9jdW1lbnRzOiAoZGF0YS5kb2N1bWVudHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICBjYXJlZXJIaXN0b3J5OiAoZGF0YS5jYXJlZXJIaXN0b3J5IHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgbGVhdmVCYWxhbmNlOiAoZGF0YS5sZWF2ZUJhbGFuY2UgfHwge30pIGFzIGFueSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgcHJpc21hLnRlYW1FbXBsb3llZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBlbXBsb3llZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGVtcGxveWVlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgcHJpc21hLnRlYW1DYW5kaWRhdGUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBjLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGMubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxyXG4gICAgICBwaG9uZTogYy5waG9uZSxcclxuICAgICAgcG9zaXRpb246IGMucG9zaXRpb24sXHJcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcclxuICAgICAgc3RhZ2U6IGMuc3RhZ2UsXHJcbiAgICAgIHNvdXJjZTogYy5zb3VyY2UsXHJcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXHJcbiAgICAgIG5vdGVzOiBjLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjLmV4cGVjdGVkU2FsYXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXZhaWxhYmxlRnJvbTogYy5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY2FuZGlkYXRlc1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYW5kaWRhdGUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIHBvc2l0aW9uOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBzdGFnZT86IHN0cmluZ1xyXG4gIHNvdXJjZT86IHN0cmluZ1xyXG4gIGFwcGxpZWRBdDogc3RyaW5nXHJcbiAgc2tpbGxzPzogc3RyaW5nW11cclxuICBleHBlY3RlZFNhbGFyeT86IG51bWJlclxyXG4gIGF2YWlsYWJsZUZyb20/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxyXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcclxuICAgICAgICBzdGFnZTogZGF0YS5zdGFnZSB8fCBcImFwcGxpZWRcIixcclxuICAgICAgICBzb3VyY2U6IGRhdGEuc291cmNlIHx8IFwiXCIsXHJcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcclxuICAgICAgICBza2lsbHM6IChkYXRhLnNraWxscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGV4cGVjdGVkU2FsYXJ5OiBkYXRhLmV4cGVjdGVkU2FsYXJ5IHx8IG51bGwsXHJcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICBub3RlczogY2FuZGlkYXRlLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcclxuICAgICAgZXhwZWN0ZWRTYWxhcnk6IGNhbmRpZGF0ZS5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGF2YWlsYWJsZUZyb206IGNhbmRpZGF0ZS5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY2FuZGlkYXRlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNhbmRpZGF0ZSxcclxuICAgICAgbm90ZXM6IGNhbmRpZGF0ZS5ub3RlcyBhcyBzdHJpbmdbXSxcclxuICAgICAgaW50ZXJ2aWV3czogY2FuZGlkYXRlLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhdmFpbGFibGVGcm9tOiBjYW5kaWRhdGUuYXZhaWxhYmxlRnJvbSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNraWxsczogY2FuZGlkYXRlLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhbmRpZGF0ZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IExFQVZFIFJFUVVFU1QgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcclxuICAgICAgaWQ6IHIuaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcclxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcclxuICAgICAgbGVhdmVUeXBlOiByLmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXJ0RGF0ZTogci5zdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcclxuICAgICAgdG90YWxEYXlzOiByLnRvdGFsRGF5cyxcclxuICAgICAgcmVhc29uOiByLnJlYXNvbixcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGFwcHJvdmVySWQ6IHIuYXBwcm92ZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVyTmFtZTogci5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICByZWplY3Rpb25SZWFzb246IHIucmVqZWN0aW9uUmVhc29uIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiByLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsZWF2ZSByZXF1ZXN0czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhdmVSZXF1ZXN0KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIGxlYXZlVHlwZTogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICBlbmREYXRlOiBzdHJpbmdcclxuICB0b3RhbERheXM6IG51bWJlclxyXG4gIHJlYXNvbjogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHByaXNtYS50ZWFtTGVhdmVSZXF1ZXN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBkYXRhLmVtcGxveWVlTmFtZSxcclxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxyXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXHJcbiAgICAgICAgcmVhc29uOiBkYXRhLnJlYXNvbixcclxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlcXVlc3QsXHJcbiAgICAgIGxlYXZlVHlwZTogcmVxdWVzdC5sZWF2ZVR5cGUgYXMgYW55LFxyXG4gICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzIGFzIGFueSxcclxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZXJOYW1lOiByZXF1ZXN0LmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVkQXQ6IHJlcXVlc3QuYXBwcm92ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IHJlcXVlc3QuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBsZWF2ZSByZXF1ZXN0OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgbGVhdmUgcmVxdWVzdFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVxdWVzdCxcclxuICAgICAgbGVhdmVUeXBlOiByZXF1ZXN0LmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBhcHByb3ZlcklkOiByZXF1ZXN0LmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3Zlck5hbWU6IHJlcXVlc3QuYXBwcm92ZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByZXF1ZXN0LnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVxdWVzdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGxlYXZlIHJlcXVlc3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQVRURU5EQU5DRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG1hcmtlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIGRhdGU6IHIuZGF0ZSxcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNsb2NrT3V0OiByLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHdvcmtMb2NhdGlvbjogci53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3Rlczogci5ub3RlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggYXR0ZW5kYW5jZSByZWNvcmRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUF0dGVuZGFuY2VSZWNvcmQoZGF0YToge1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBjbG9ja0luPzogc3RyaW5nXHJcbiAgY2xvY2tPdXQ/OiBzdHJpbmdcclxuICBicmVha01pbnV0ZXM/OiBudW1iZXJcclxuICB0b3RhbEhvdXJzPzogbnVtYmVyXHJcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXHJcbiAgbm90ZXM/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbXBsb3llZUlkX2RhdGU6IHtcclxuICAgICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgY2xvY2tJbjogZGF0YS5jbG9ja0luIHx8IG51bGwsXHJcbiAgICAgICAgY2xvY2tPdXQ6IGRhdGEuY2xvY2tPdXQgfHwgbnVsbCxcclxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXHJcbiAgICAgICAgdG90YWxIb3VyczogZGF0YS50b3RhbEhvdXJzIHx8IG51bGwsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBudWxsLFxyXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgbWFya2VkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxyXG4gICAgICAgIGNsb2NrT3V0OiBkYXRhLmNsb2NrT3V0IHx8IG51bGwsXHJcbiAgICAgICAgYnJlYWtNaW51dGVzOiBkYXRhLmJyZWFrTWludXRlcyB8fCBudWxsLFxyXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxyXG4gICAgICAgIHdvcmtMb2NhdGlvbjogZGF0YS53b3JrTG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBdHRlbmRhbmNlUmVjb3JkKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T0tScygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tycyA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBva3JzLm1hcCgobykgPT4gKHtcclxuICAgICAgaWQ6IG8uaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IG8uZW1wbG95ZWVJZCxcclxuICAgICAgdGl0bGU6IG8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxyXG4gICAgICBxdWFydGVyOiBvLnF1YXJ0ZXIsXHJcbiAgICAgIGtleVJlc3VsdHM6IG8ua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcclxuICAgICAgc3RhdHVzOiBvLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBvLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG8udXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIE9LUnM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIE9LUnNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICBxdWFydGVyOiBzdHJpbmdcclxuICBrZXlSZXN1bHRzPzogYW55W11cclxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwYXJlbnRPS1JJZD86IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9rciA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICBxdWFydGVyOiBkYXRhLnF1YXJ0ZXIsXHJcbiAgICAgICAga2V5UmVzdWx0czogKGRhdGEua2V5UmVzdWx0cyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwib24tdHJhY2tcIixcclxuICAgICAgICBwYXJlbnRPS1JJZDogZGF0YS5wYXJlbnRPS1JJZCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm9rcixcclxuICAgICAga2V5UmVzdWx0czogb2tyLmtleVJlc3VsdHMgYXMgYW55W10sXHJcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IG9rci5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBPS1I6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT0tSKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub2tyLFxyXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcclxuICAgICAgcGFyZW50T0tSSWQ6IG9rci5wYXJlbnRPS1JJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIE9LUjpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIE9LUlwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2VSZXZpZXdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmV2aWV3cy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcclxuICAgICAgcmV2aWV3ZXJOYW1lOiByLnJldmlld2VyTmFtZSxcclxuICAgICAgcGVyaW9kOiByLnBlcmlvZCxcclxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxyXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcclxuICAgICAgb3ZlcmFsbFJhdGluZzogci5vdmVyYWxsUmF0aW5nLFxyXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByLnN0cmVuZ3RocyBhcyBzdHJpbmdbXSxcclxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogci5hcmVhc0ZvckltcHJvdmVtZW50IGFzIHN0cmluZ1tdLFxyXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByLnNhbGFyeUNoYW5nZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHByb21vdGlvblJlY29tbWVuZGVkOiByLnByb21vdGlvblJlY29tbWVuZGVkLFxyXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHIuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZXJmb3JtYW5jZSByZXZpZXdzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBwZXJmb3JtYW5jZSByZXZpZXdzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIHJldmlld2VySWQ6IHN0cmluZ1xyXG4gIHJldmlld2VyTmFtZTogc3RyaW5nXHJcbiAgcGVyaW9kOiBzdHJpbmdcclxuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBvdmVyYWxsUmF0aW5nPzogbnVtYmVyXHJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxyXG4gIHN0cmVuZ3Rocz86IHN0cmluZ1tdXHJcbiAgYXJlYXNGb3JJbXByb3ZlbWVudD86IHN0cmluZ1tdXHJcbiAgZ29hbHM/OiBzdHJpbmdbXVxyXG4gIHNhbGFyeUNoYW5nZT86IG51bWJlclxyXG4gIHByb21vdGlvblJlY29tbWVuZGVkPzogYm9vbGVhblxyXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmV2aWV3ID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxyXG4gICAgICAgIGVtcGxveWVlTmFtZTogZGF0YS5lbXBsb3llZU5hbWUsXHJcbiAgICAgICAgcmV2aWV3ZXJJZDogZGF0YS5yZXZpZXdlcklkLFxyXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXHJcbiAgICAgICAgcGVyaW9kOiBkYXRhLnBlcmlvZCxcclxuICAgICAgICBzY2hlZHVsZWREYXRlOiBkYXRhLnNjaGVkdWxlZERhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxyXG4gICAgICAgIG92ZXJhbGxSYXRpbmc6IGRhdGEub3ZlcmFsbFJhdGluZyB8fCAwLFxyXG4gICAgICAgIGNvbXBldGVuY3lSYXRpbmdzOiAoZGF0YS5jb21wZXRlbmN5UmF0aW5ncyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogKGRhdGEuYXJlYXNGb3JJbXByb3ZlbWVudCB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGdvYWxzOiAoZGF0YS5nb2FscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcclxuICAgICAgICBwcm9tb3Rpb25SZWNvbW1lbmRlZDogZGF0YS5wcm9tb3Rpb25SZWNvbW1lbmRlZCB8fCBmYWxzZSxcclxuICAgICAgICBwaXBSZXF1aXJlZDogZGF0YS5waXBSZXF1aXJlZCB8fCBmYWxzZSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBwcmlzbWEudGVhbVBlcmZvcm1hbmNlUmV2aWV3LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWluaW5nQ291cnNlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IHByaXNtYS50ZWFtVHJhaW5pbmdDb3Vyc2UuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNvdXJzZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgdGl0bGU6IGMudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxyXG4gICAgICBjYXRlZ29yeTogYy5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGR1cmF0aW9uOiBjLmR1cmF0aW9uLFxyXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcclxuICAgICAgZm9ybWF0OiBjLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGMuY2VydGlmaWNhdGlvbkV4cGlyeSB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYWluaW5nIGNvdXJzZXM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJhaW5pbmdDb3Vyc2UoZGF0YToge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBjYXRlZ29yeT86IHN0cmluZ1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxuICBmb3JtYXQ/OiBzdHJpbmdcclxuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUgfHwgXCJvcHRpb25hbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8IFwidGVjaG5pY2FsXCIsXHJcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBcIlwiLFxyXG4gICAgICAgIGZvcm1hdDogZGF0YS5mb3JtYXQgfHwgXCJvbmxpbmVcIixcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jb3Vyc2UsXHJcbiAgICAgIHR5cGU6IGNvdXJzZS50eXBlIGFzIGFueSxcclxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGZvcm1hdDogY291cnNlLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGNvdXJzZS5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHRyYWluaW5nIGNvdXJzZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENPVVJTRSBFTlJPTExNRU5UIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZW5yb2xsbWVudHMgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcclxuICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgIGNvdXJzZUlkOiBlLmNvdXJzZUlkLFxyXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGUuZW1wbG95ZWVJZCxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxyXG4gICAgICBlbnJvbGxlZEF0OiBlLmVucm9sbGVkQXQsXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZS5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvdXJzZSBlbnJvbGxtZW50czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY291cnNlIGVucm9sbG1lbnRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xyXG4gIGNvdXJzZUlkOiBzdHJpbmdcclxuICBjb3Vyc2VOYW1lOiBzdHJpbmdcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwcm9ncmVzcz86IG51bWJlclxyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvdXJzZUlkOiBkYXRhLmNvdXJzZUlkLFxyXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImVucm9sbGVkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBlbnJvbGxlZEF0OiBkYXRhLmVucm9sbGVkQXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZW5yb2xsbWVudCxcclxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGVucm9sbG1lbnQuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvdXJzZUVucm9sbG1lbnQoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbnJvbGxtZW50ID0gYXdhaXQgcHJpc21hLnRlYW1Db3Vyc2VFbnJvbGxtZW50LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmVucm9sbG1lbnQsXHJcbiAgICAgIHN0YXR1czogZW5yb2xsbWVudC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY2VydGlmaWNhdGVVcmw6IGVucm9sbG1lbnQuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY291cnNlIGVucm9sbG1lbnQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IEhPTElEQVkgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhvbGlkYXlzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBob2xpZGF5cyA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5maW5kTWFueSh7IG9yZGVyQnk6IHsgZGF0ZTogXCJhc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gaG9saWRheXMubWFwKGggPT4gKHtcclxuICAgICAgLi4uaCxcclxuICAgICAgY3JlYXRlZEF0OiBoLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhvbGlkYXlzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBob2xpZGF5c1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIb2xpZGF5KGRhdGE6IHsgZGF0ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaG9saWRheSA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaG9saWRheSxcclxuICAgICAgY3JlYXRlZEF0OiBob2xpZGF5LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBob2xpZGF5OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaG9saWRheVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVIb2xpZGF5KGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnRlYW1Ib2xpZGF5LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgaG9saWRheTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGhvbGlkYXlcIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBMFVzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:ae5e73 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e0a27b4e19835ebdc62a06c722eefd646ed47095":"createAttendanceRecord"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "createAttendanceRecord",
    ()=>createAttendanceRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createAttendanceRecord = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e0a27b4e19835ebdc62a06c722eefd646ed47095", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createAttendanceRecord"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBFTVBMT1lFRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xyXG4gICAgICBpZDogZS5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBlLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBlLmVtYWlsLFxyXG4gICAgICBwaG9uZTogZS5waG9uZSxcclxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxyXG4gICAgICBqb2JUaXRsZTogZS5qb2JUaXRsZSxcclxuICAgICAgZGVwYXJ0bWVudDogZS5kZXBhcnRtZW50LFxyXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgbWFuYWdlcklkOiBlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc3RhcnREYXRlOiBlLnN0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZTogZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcclxuICAgICAgc2FsYXJ5OiBlLnNhbGFyeSxcclxuICAgICAgY3VycmVuY3k6IGUuY3VycmVuY3ksXHJcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXHJcbiAgICAgIHNraWxsczogZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIHllYXJzT2ZFeHBlcmllbmNlOiBlLnllYXJzT2ZFeHBlcmllbmNlLFxyXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgcGVyZm9ybWFuY2VSYXRpbmc6IGUucGVyZm9ybWFuY2VSYXRpbmcsXHJcbiAgICAgIGRvY3VtZW50czogZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcclxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IGUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXHJcbiAgICAgIGxlYXZlQmFsYW5jZTogZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRBdDogZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBlbXBsb3llZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGpvYlRpdGxlOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBlbXBsb3ltZW50VHlwZT86IHN0cmluZ1xyXG4gIHN0YXR1cz86IHN0cmluZ1xyXG4gIG1hbmFnZXJJZD86IHN0cmluZ1xyXG4gIG1hbmFnZXJOYW1lPzogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcclxuICBzYWxhcnk/OiBudW1iZXJcclxuICBjdXJyZW5jeT86IHN0cmluZ1xyXG4gIHBheUZyZXF1ZW5jeT86IHN0cmluZ1xyXG4gIHNraWxscz86IGFueVtdXHJcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcclxuICBjZXJ0aWZpY2F0aW9ucz86IHN0cmluZ1tdXHJcbiAgcGVyZm9ybWFuY2VSYXRpbmc/OiBudW1iZXJcclxuICBkb2N1bWVudHM/OiBhbnlbXVxyXG4gIGNhcmVlckhpc3Rvcnk/OiBhbnlbXVxyXG4gIGVtZXJnZW5jeUNvbnRhY3RzPzogYW55W11cclxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50LFxyXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImFjdGl2ZVwiLFxyXG4gICAgICAgIG1hbmFnZXJJZDogZGF0YS5tYW5hZ2VySWQgfHwgbnVsbCxcclxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBcIlJlbW90ZVwiLFxyXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcclxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSB8fCBcIkJEVFwiLFxyXG4gICAgICAgIHBheUZyZXF1ZW5jeTogZGF0YS5wYXlGcmVxdWVuY3kgfHwgXCJtb250aGx5XCIsXHJcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICB5ZWFyc09mRXhwZXJpZW5jZTogZGF0YS55ZWFyc09mRXhwZXJpZW5jZSB8fCAwLFxyXG4gICAgICAgIGNlcnRpZmljYXRpb25zOiAoZGF0YS5jZXJ0aWZpY2F0aW9ucyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXHJcbiAgICAgICAgZG9jdW1lbnRzOiAoZGF0YS5kb2N1bWVudHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICBjYXJlZXJIaXN0b3J5OiAoZGF0YS5jYXJlZXJIaXN0b3J5IHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgbGVhdmVCYWxhbmNlOiAoZGF0YS5sZWF2ZUJhbGFuY2UgfHwge30pIGFzIGFueSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgcHJpc21hLnRlYW1FbXBsb3llZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBlbXBsb3llZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGVtcGxveWVlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgcHJpc21hLnRlYW1DYW5kaWRhdGUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBjLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGMubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxyXG4gICAgICBwaG9uZTogYy5waG9uZSxcclxuICAgICAgcG9zaXRpb246IGMucG9zaXRpb24sXHJcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcclxuICAgICAgc3RhZ2U6IGMuc3RhZ2UsXHJcbiAgICAgIHNvdXJjZTogYy5zb3VyY2UsXHJcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXHJcbiAgICAgIG5vdGVzOiBjLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjLmV4cGVjdGVkU2FsYXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXZhaWxhYmxlRnJvbTogYy5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY2FuZGlkYXRlc1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYW5kaWRhdGUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIHBvc2l0aW9uOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBzdGFnZT86IHN0cmluZ1xyXG4gIHNvdXJjZT86IHN0cmluZ1xyXG4gIGFwcGxpZWRBdDogc3RyaW5nXHJcbiAgc2tpbGxzPzogc3RyaW5nW11cclxuICBleHBlY3RlZFNhbGFyeT86IG51bWJlclxyXG4gIGF2YWlsYWJsZUZyb20/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxyXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcclxuICAgICAgICBzdGFnZTogZGF0YS5zdGFnZSB8fCBcImFwcGxpZWRcIixcclxuICAgICAgICBzb3VyY2U6IGRhdGEuc291cmNlIHx8IFwiXCIsXHJcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcclxuICAgICAgICBza2lsbHM6IChkYXRhLnNraWxscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGV4cGVjdGVkU2FsYXJ5OiBkYXRhLmV4cGVjdGVkU2FsYXJ5IHx8IG51bGwsXHJcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICBub3RlczogY2FuZGlkYXRlLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcclxuICAgICAgZXhwZWN0ZWRTYWxhcnk6IGNhbmRpZGF0ZS5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGF2YWlsYWJsZUZyb206IGNhbmRpZGF0ZS5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY2FuZGlkYXRlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNhbmRpZGF0ZSxcclxuICAgICAgbm90ZXM6IGNhbmRpZGF0ZS5ub3RlcyBhcyBzdHJpbmdbXSxcclxuICAgICAgaW50ZXJ2aWV3czogY2FuZGlkYXRlLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhdmFpbGFibGVGcm9tOiBjYW5kaWRhdGUuYXZhaWxhYmxlRnJvbSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNraWxsczogY2FuZGlkYXRlLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhbmRpZGF0ZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IExFQVZFIFJFUVVFU1QgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcclxuICAgICAgaWQ6IHIuaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcclxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcclxuICAgICAgbGVhdmVUeXBlOiByLmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXJ0RGF0ZTogci5zdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcclxuICAgICAgdG90YWxEYXlzOiByLnRvdGFsRGF5cyxcclxuICAgICAgcmVhc29uOiByLnJlYXNvbixcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGFwcHJvdmVySWQ6IHIuYXBwcm92ZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVyTmFtZTogci5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICByZWplY3Rpb25SZWFzb246IHIucmVqZWN0aW9uUmVhc29uIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiByLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsZWF2ZSByZXF1ZXN0czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhdmVSZXF1ZXN0KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIGxlYXZlVHlwZTogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICBlbmREYXRlOiBzdHJpbmdcclxuICB0b3RhbERheXM6IG51bWJlclxyXG4gIHJlYXNvbjogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHByaXNtYS50ZWFtTGVhdmVSZXF1ZXN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBkYXRhLmVtcGxveWVlTmFtZSxcclxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxyXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXHJcbiAgICAgICAgcmVhc29uOiBkYXRhLnJlYXNvbixcclxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlcXVlc3QsXHJcbiAgICAgIGxlYXZlVHlwZTogcmVxdWVzdC5sZWF2ZVR5cGUgYXMgYW55LFxyXG4gICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzIGFzIGFueSxcclxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZXJOYW1lOiByZXF1ZXN0LmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVkQXQ6IHJlcXVlc3QuYXBwcm92ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IHJlcXVlc3QuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBsZWF2ZSByZXF1ZXN0OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgbGVhdmUgcmVxdWVzdFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVxdWVzdCxcclxuICAgICAgbGVhdmVUeXBlOiByZXF1ZXN0LmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBhcHByb3ZlcklkOiByZXF1ZXN0LmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3Zlck5hbWU6IHJlcXVlc3QuYXBwcm92ZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByZXF1ZXN0LnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVxdWVzdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGxlYXZlIHJlcXVlc3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQVRURU5EQU5DRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG1hcmtlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIGRhdGU6IHIuZGF0ZSxcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNsb2NrT3V0OiByLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHdvcmtMb2NhdGlvbjogci53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3Rlczogci5ub3RlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggYXR0ZW5kYW5jZSByZWNvcmRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUF0dGVuZGFuY2VSZWNvcmQoZGF0YToge1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBjbG9ja0luPzogc3RyaW5nXHJcbiAgY2xvY2tPdXQ/OiBzdHJpbmdcclxuICBicmVha01pbnV0ZXM/OiBudW1iZXJcclxuICB0b3RhbEhvdXJzPzogbnVtYmVyXHJcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXHJcbiAgbm90ZXM/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbXBsb3llZUlkX2RhdGU6IHtcclxuICAgICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgY2xvY2tJbjogZGF0YS5jbG9ja0luIHx8IG51bGwsXHJcbiAgICAgICAgY2xvY2tPdXQ6IGRhdGEuY2xvY2tPdXQgfHwgbnVsbCxcclxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXHJcbiAgICAgICAgdG90YWxIb3VyczogZGF0YS50b3RhbEhvdXJzIHx8IG51bGwsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBudWxsLFxyXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgbWFya2VkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxyXG4gICAgICAgIGNsb2NrT3V0OiBkYXRhLmNsb2NrT3V0IHx8IG51bGwsXHJcbiAgICAgICAgYnJlYWtNaW51dGVzOiBkYXRhLmJyZWFrTWludXRlcyB8fCBudWxsLFxyXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxyXG4gICAgICAgIHdvcmtMb2NhdGlvbjogZGF0YS53b3JrTG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBdHRlbmRhbmNlUmVjb3JkKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T0tScygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tycyA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBva3JzLm1hcCgobykgPT4gKHtcclxuICAgICAgaWQ6IG8uaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IG8uZW1wbG95ZWVJZCxcclxuICAgICAgdGl0bGU6IG8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxyXG4gICAgICBxdWFydGVyOiBvLnF1YXJ0ZXIsXHJcbiAgICAgIGtleVJlc3VsdHM6IG8ua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcclxuICAgICAgc3RhdHVzOiBvLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBvLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG8udXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIE9LUnM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIE9LUnNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICBxdWFydGVyOiBzdHJpbmdcclxuICBrZXlSZXN1bHRzPzogYW55W11cclxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwYXJlbnRPS1JJZD86IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9rciA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICBxdWFydGVyOiBkYXRhLnF1YXJ0ZXIsXHJcbiAgICAgICAga2V5UmVzdWx0czogKGRhdGEua2V5UmVzdWx0cyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwib24tdHJhY2tcIixcclxuICAgICAgICBwYXJlbnRPS1JJZDogZGF0YS5wYXJlbnRPS1JJZCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm9rcixcclxuICAgICAga2V5UmVzdWx0czogb2tyLmtleVJlc3VsdHMgYXMgYW55W10sXHJcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IG9rci5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBPS1I6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT0tSKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub2tyLFxyXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcclxuICAgICAgcGFyZW50T0tSSWQ6IG9rci5wYXJlbnRPS1JJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIE9LUjpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIE9LUlwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2VSZXZpZXdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmV2aWV3cy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcclxuICAgICAgcmV2aWV3ZXJOYW1lOiByLnJldmlld2VyTmFtZSxcclxuICAgICAgcGVyaW9kOiByLnBlcmlvZCxcclxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxyXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcclxuICAgICAgb3ZlcmFsbFJhdGluZzogci5vdmVyYWxsUmF0aW5nLFxyXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByLnN0cmVuZ3RocyBhcyBzdHJpbmdbXSxcclxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogci5hcmVhc0ZvckltcHJvdmVtZW50IGFzIHN0cmluZ1tdLFxyXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByLnNhbGFyeUNoYW5nZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHByb21vdGlvblJlY29tbWVuZGVkOiByLnByb21vdGlvblJlY29tbWVuZGVkLFxyXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHIuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZXJmb3JtYW5jZSByZXZpZXdzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBwZXJmb3JtYW5jZSByZXZpZXdzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIHJldmlld2VySWQ6IHN0cmluZ1xyXG4gIHJldmlld2VyTmFtZTogc3RyaW5nXHJcbiAgcGVyaW9kOiBzdHJpbmdcclxuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBvdmVyYWxsUmF0aW5nPzogbnVtYmVyXHJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxyXG4gIHN0cmVuZ3Rocz86IHN0cmluZ1tdXHJcbiAgYXJlYXNGb3JJbXByb3ZlbWVudD86IHN0cmluZ1tdXHJcbiAgZ29hbHM/OiBzdHJpbmdbXVxyXG4gIHNhbGFyeUNoYW5nZT86IG51bWJlclxyXG4gIHByb21vdGlvblJlY29tbWVuZGVkPzogYm9vbGVhblxyXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmV2aWV3ID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxyXG4gICAgICAgIGVtcGxveWVlTmFtZTogZGF0YS5lbXBsb3llZU5hbWUsXHJcbiAgICAgICAgcmV2aWV3ZXJJZDogZGF0YS5yZXZpZXdlcklkLFxyXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXHJcbiAgICAgICAgcGVyaW9kOiBkYXRhLnBlcmlvZCxcclxuICAgICAgICBzY2hlZHVsZWREYXRlOiBkYXRhLnNjaGVkdWxlZERhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxyXG4gICAgICAgIG92ZXJhbGxSYXRpbmc6IGRhdGEub3ZlcmFsbFJhdGluZyB8fCAwLFxyXG4gICAgICAgIGNvbXBldGVuY3lSYXRpbmdzOiAoZGF0YS5jb21wZXRlbmN5UmF0aW5ncyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogKGRhdGEuYXJlYXNGb3JJbXByb3ZlbWVudCB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGdvYWxzOiAoZGF0YS5nb2FscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcclxuICAgICAgICBwcm9tb3Rpb25SZWNvbW1lbmRlZDogZGF0YS5wcm9tb3Rpb25SZWNvbW1lbmRlZCB8fCBmYWxzZSxcclxuICAgICAgICBwaXBSZXF1aXJlZDogZGF0YS5waXBSZXF1aXJlZCB8fCBmYWxzZSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBwcmlzbWEudGVhbVBlcmZvcm1hbmNlUmV2aWV3LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWluaW5nQ291cnNlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IHByaXNtYS50ZWFtVHJhaW5pbmdDb3Vyc2UuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNvdXJzZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgdGl0bGU6IGMudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxyXG4gICAgICBjYXRlZ29yeTogYy5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGR1cmF0aW9uOiBjLmR1cmF0aW9uLFxyXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcclxuICAgICAgZm9ybWF0OiBjLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGMuY2VydGlmaWNhdGlvbkV4cGlyeSB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYWluaW5nIGNvdXJzZXM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJhaW5pbmdDb3Vyc2UoZGF0YToge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBjYXRlZ29yeT86IHN0cmluZ1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxuICBmb3JtYXQ/OiBzdHJpbmdcclxuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUgfHwgXCJvcHRpb25hbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8IFwidGVjaG5pY2FsXCIsXHJcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBcIlwiLFxyXG4gICAgICAgIGZvcm1hdDogZGF0YS5mb3JtYXQgfHwgXCJvbmxpbmVcIixcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jb3Vyc2UsXHJcbiAgICAgIHR5cGU6IGNvdXJzZS50eXBlIGFzIGFueSxcclxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGZvcm1hdDogY291cnNlLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGNvdXJzZS5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHRyYWluaW5nIGNvdXJzZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENPVVJTRSBFTlJPTExNRU5UIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZW5yb2xsbWVudHMgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcclxuICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgIGNvdXJzZUlkOiBlLmNvdXJzZUlkLFxyXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGUuZW1wbG95ZWVJZCxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxyXG4gICAgICBlbnJvbGxlZEF0OiBlLmVucm9sbGVkQXQsXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZS5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvdXJzZSBlbnJvbGxtZW50czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY291cnNlIGVucm9sbG1lbnRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xyXG4gIGNvdXJzZUlkOiBzdHJpbmdcclxuICBjb3Vyc2VOYW1lOiBzdHJpbmdcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwcm9ncmVzcz86IG51bWJlclxyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvdXJzZUlkOiBkYXRhLmNvdXJzZUlkLFxyXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImVucm9sbGVkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBlbnJvbGxlZEF0OiBkYXRhLmVucm9sbGVkQXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZW5yb2xsbWVudCxcclxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGVucm9sbG1lbnQuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvdXJzZUVucm9sbG1lbnQoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbnJvbGxtZW50ID0gYXdhaXQgcHJpc21hLnRlYW1Db3Vyc2VFbnJvbGxtZW50LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmVucm9sbG1lbnQsXHJcbiAgICAgIHN0YXR1czogZW5yb2xsbWVudC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY2VydGlmaWNhdGVVcmw6IGVucm9sbG1lbnQuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY291cnNlIGVucm9sbG1lbnQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IEhPTElEQVkgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhvbGlkYXlzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBob2xpZGF5cyA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5maW5kTWFueSh7IG9yZGVyQnk6IHsgZGF0ZTogXCJhc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gaG9saWRheXMubWFwKGggPT4gKHtcclxuICAgICAgLi4uaCxcclxuICAgICAgY3JlYXRlZEF0OiBoLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhvbGlkYXlzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBob2xpZGF5c1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIb2xpZGF5KGRhdGE6IHsgZGF0ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaG9saWRheSA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaG9saWRheSxcclxuICAgICAgY3JlYXRlZEF0OiBob2xpZGF5LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBob2xpZGF5OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaG9saWRheVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVIb2xpZGF5KGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnRlYW1Ib2xpZGF5LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgaG9saWRheTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGhvbGlkYXlcIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBaVdzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:3bb5ae [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60ea1b216a7777f4755ea653714d5e7405d69b51f2":"updateAttendanceRecord"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "updateAttendanceRecord",
    ()=>updateAttendanceRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateAttendanceRecord = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60ea1b216a7777f4755ea653714d5e7405d69b51f2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateAttendanceRecord"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBFTVBMT1lFRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xyXG4gICAgICBpZDogZS5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBlLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBlLmVtYWlsLFxyXG4gICAgICBwaG9uZTogZS5waG9uZSxcclxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxyXG4gICAgICBqb2JUaXRsZTogZS5qb2JUaXRsZSxcclxuICAgICAgZGVwYXJ0bWVudDogZS5kZXBhcnRtZW50LFxyXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyxcclxuICAgICAgbWFuYWdlcklkOiBlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc3RhcnREYXRlOiBlLnN0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZTogZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcclxuICAgICAgc2FsYXJ5OiBlLnNhbGFyeSxcclxuICAgICAgY3VycmVuY3k6IGUuY3VycmVuY3ksXHJcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXHJcbiAgICAgIHNraWxsczogZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIHllYXJzT2ZFeHBlcmllbmNlOiBlLnllYXJzT2ZFeHBlcmllbmNlLFxyXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgcGVyZm9ybWFuY2VSYXRpbmc6IGUucGVyZm9ybWFuY2VSYXRpbmcsXHJcbiAgICAgIGRvY3VtZW50czogZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcclxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IGUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXHJcbiAgICAgIGxlYXZlQmFsYW5jZTogZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVwZGF0ZWRBdDogZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWVzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBlbXBsb3llZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGpvYlRpdGxlOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBlbXBsb3ltZW50VHlwZT86IHN0cmluZ1xyXG4gIHN0YXR1cz86IHN0cmluZ1xyXG4gIG1hbmFnZXJJZD86IHN0cmluZ1xyXG4gIG1hbmFnZXJOYW1lPzogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcclxuICBzYWxhcnk/OiBudW1iZXJcclxuICBjdXJyZW5jeT86IHN0cmluZ1xyXG4gIHBheUZyZXF1ZW5jeT86IHN0cmluZ1xyXG4gIHNraWxscz86IGFueVtdXHJcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcclxuICBjZXJ0aWZpY2F0aW9ucz86IHN0cmluZ1tdXHJcbiAgcGVyZm9ybWFuY2VSYXRpbmc/OiBudW1iZXJcclxuICBkb2N1bWVudHM/OiBhbnlbXVxyXG4gIGNhcmVlckhpc3Rvcnk/OiBhbnlbXVxyXG4gIGVtZXJnZW5jeUNvbnRhY3RzPzogYW55W11cclxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50LFxyXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImFjdGl2ZVwiLFxyXG4gICAgICAgIG1hbmFnZXJJZDogZGF0YS5tYW5hZ2VySWQgfHwgbnVsbCxcclxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBcIlJlbW90ZVwiLFxyXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcclxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSB8fCBcIkJEVFwiLFxyXG4gICAgICAgIHBheUZyZXF1ZW5jeTogZGF0YS5wYXlGcmVxdWVuY3kgfHwgXCJtb250aGx5XCIsXHJcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICB5ZWFyc09mRXhwZXJpZW5jZTogZGF0YS55ZWFyc09mRXhwZXJpZW5jZSB8fCAwLFxyXG4gICAgICAgIGNlcnRpZmljYXRpb25zOiAoZGF0YS5jZXJ0aWZpY2F0aW9ucyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXHJcbiAgICAgICAgZG9jdW1lbnRzOiAoZGF0YS5kb2N1bWVudHMgfHwgW10pIGFzIGFueSxcclxuICAgICAgICBjYXJlZXJIaXN0b3J5OiAoZGF0YS5jYXJlZXJIaXN0b3J5IHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgbGVhdmVCYWxhbmNlOiAoZGF0YS5sZWF2ZUJhbGFuY2UgfHwge30pIGFzIGFueSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgcHJpc21hLnRlYW1FbXBsb3llZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5lbXBsb3llZSxcclxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBlbmREYXRlOiBlbXBsb3llZS5lbmREYXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXHJcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcclxuICAgICAgZG9jdW1lbnRzOiBlbXBsb3llZS5kb2N1bWVudHMgYXMgYW55W10sXHJcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXHJcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcclxuICAgICAgbGVhdmVCYWxhbmNlOiBlbXBsb3llZS5sZWF2ZUJhbGFuY2UgYXMgYW55LFxyXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBlbXBsb3llZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBlbXBsb3llZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGVtcGxveWVlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgcHJpc21hLnRlYW1DYW5kaWRhdGUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgZmlyc3ROYW1lOiBjLmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IGMubGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxyXG4gICAgICBwaG9uZTogYy5waG9uZSxcclxuICAgICAgcG9zaXRpb246IGMucG9zaXRpb24sXHJcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcclxuICAgICAgc3RhZ2U6IGMuc3RhZ2UsXHJcbiAgICAgIHNvdXJjZTogYy5zb3VyY2UsXHJcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXHJcbiAgICAgIG5vdGVzOiBjLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjLmV4cGVjdGVkU2FsYXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXZhaWxhYmxlRnJvbTogYy5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH0pKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY2FuZGlkYXRlc1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYW5kaWRhdGUoZGF0YToge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nXHJcbiAgbGFzdE5hbWU6IHN0cmluZ1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwaG9uZT86IHN0cmluZ1xyXG4gIHBvc2l0aW9uOiBzdHJpbmdcclxuICBkZXBhcnRtZW50OiBzdHJpbmdcclxuICBzdGFnZT86IHN0cmluZ1xyXG4gIHNvdXJjZT86IHN0cmluZ1xyXG4gIGFwcGxpZWRBdDogc3RyaW5nXHJcbiAgc2tpbGxzPzogc3RyaW5nW11cclxuICBleHBlY3RlZFNhbGFyeT86IG51bWJlclxyXG4gIGF2YWlsYWJsZUZyb20/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcclxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxyXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcclxuICAgICAgICBzdGFnZTogZGF0YS5zdGFnZSB8fCBcImFwcGxpZWRcIixcclxuICAgICAgICBzb3VyY2U6IGRhdGEuc291cmNlIHx8IFwiXCIsXHJcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcclxuICAgICAgICBza2lsbHM6IChkYXRhLnNraWxscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGV4cGVjdGVkU2FsYXJ5OiBkYXRhLmV4cGVjdGVkU2FsYXJ5IHx8IG51bGwsXHJcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICBub3RlczogY2FuZGlkYXRlLm5vdGVzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcclxuICAgICAgZXhwZWN0ZWRTYWxhcnk6IGNhbmRpZGF0ZS5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGF2YWlsYWJsZUZyb206IGNhbmRpZGF0ZS5hdmFpbGFibGVGcm9tIHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgY2FuZGlkYXRlXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNhbmRpZGF0ZSxcclxuICAgICAgbm90ZXM6IGNhbmRpZGF0ZS5ub3RlcyBhcyBzdHJpbmdbXSxcclxuICAgICAgaW50ZXJ2aWV3czogY2FuZGlkYXRlLmludGVydmlld3MgYXMgYW55W10sXHJcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhdmFpbGFibGVGcm9tOiBjYW5kaWRhdGUuYXZhaWxhYmxlRnJvbSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNraWxsczogY2FuZGlkYXRlLnNraWxscyBhcyBzdHJpbmdbXSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNhbmRpZGF0ZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IExFQVZFIFJFUVVFU1QgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcclxuICAgICAgaWQ6IHIuaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcclxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcclxuICAgICAgbGVhdmVUeXBlOiByLmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXJ0RGF0ZTogci5zdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcclxuICAgICAgdG90YWxEYXlzOiByLnRvdGFsRGF5cyxcclxuICAgICAgcmVhc29uOiByLnJlYXNvbixcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGFwcHJvdmVySWQ6IHIuYXBwcm92ZXJJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVyTmFtZTogci5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICByZWplY3Rpb25SZWFzb246IHIucmVqZWN0aW9uUmVhc29uIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiByLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsZWF2ZSByZXF1ZXN0czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhdmVSZXF1ZXN0KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIGxlYXZlVHlwZTogc3RyaW5nXHJcbiAgc3RhcnREYXRlOiBzdHJpbmdcclxuICBlbmREYXRlOiBzdHJpbmdcclxuICB0b3RhbERheXM6IG51bWJlclxyXG4gIHJlYXNvbjogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHByaXNtYS50ZWFtTGVhdmVSZXF1ZXN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgZW1wbG95ZWVOYW1lOiBkYXRhLmVtcGxveWVlTmFtZSxcclxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxyXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXHJcbiAgICAgICAgcmVhc29uOiBkYXRhLnJlYXNvbixcclxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlcXVlc3QsXHJcbiAgICAgIGxlYXZlVHlwZTogcmVxdWVzdC5sZWF2ZVR5cGUgYXMgYW55LFxyXG4gICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzIGFzIGFueSxcclxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZXJOYW1lOiByZXF1ZXN0LmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGFwcHJvdmVkQXQ6IHJlcXVlc3QuYXBwcm92ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IHJlcXVlc3QuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBsZWF2ZSByZXF1ZXN0OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgbGVhdmUgcmVxdWVzdFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVxdWVzdCxcclxuICAgICAgbGVhdmVUeXBlOiByZXF1ZXN0LmxlYXZlVHlwZSBhcyBhbnksXHJcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBhcHByb3ZlcklkOiByZXF1ZXN0LmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBhcHByb3Zlck5hbWU6IHJlcXVlc3QuYXBwcm92ZXJOYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByZXF1ZXN0LnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVxdWVzdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGxlYXZlIHJlcXVlc3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gQVRURU5EQU5DRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG1hcmtlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIGRhdGU6IHIuZGF0ZSxcclxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNsb2NrT3V0OiByLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHdvcmtMb2NhdGlvbjogci53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3Rlczogci5ub3RlcyB8fCB1bmRlZmluZWQsXHJcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggYXR0ZW5kYW5jZSByZWNvcmRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUF0dGVuZGFuY2VSZWNvcmQoZGF0YToge1xyXG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xyXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgc3RhdHVzOiBzdHJpbmdcclxuICBjbG9ja0luPzogc3RyaW5nXHJcbiAgY2xvY2tPdXQ/OiBzdHJpbmdcclxuICBicmVha01pbnV0ZXM/OiBudW1iZXJcclxuICB0b3RhbEhvdXJzPzogbnVtYmVyXHJcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXHJcbiAgbm90ZXM/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQudXBzZXJ0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbXBsb3llZUlkX2RhdGU6IHtcclxuICAgICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgY2xvY2tJbjogZGF0YS5jbG9ja0luIHx8IG51bGwsXHJcbiAgICAgICAgY2xvY2tPdXQ6IGRhdGEuY2xvY2tPdXQgfHwgbnVsbCxcclxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXHJcbiAgICAgICAgdG90YWxIb3VyczogZGF0YS50b3RhbEhvdXJzIHx8IG51bGwsXHJcbiAgICAgICAgd29ya0xvY2F0aW9uOiBkYXRhLndvcmtMb2NhdGlvbiB8fCBudWxsLFxyXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgbWFya2VkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgIGVtcGxveWVlSWQ6IGRhdGEuZW1wbG95ZWVJZCxcclxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxyXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxyXG4gICAgICAgIGNsb2NrT3V0OiBkYXRhLmNsb2NrT3V0IHx8IG51bGwsXHJcbiAgICAgICAgYnJlYWtNaW51dGVzOiBkYXRhLmJyZWFrTWludXRlcyB8fCBudWxsLFxyXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxyXG4gICAgICAgIHdvcmtMb2NhdGlvbjogZGF0YS53b3JrTG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBdHRlbmRhbmNlUmVjb3JkKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcclxuICAgICAgY2xvY2tJbjogcmVjb3JkLmNsb2NrSW4gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgdG90YWxIb3VyczogcmVjb3JkLnRvdGFsSG91cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWFya2VkQXQ6IHJlY29yZC5tYXJrZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgYXR0ZW5kYW5jZSByZWNvcmQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T0tScygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tycyA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcclxuICAgIHJldHVybiBva3JzLm1hcCgobykgPT4gKHtcclxuICAgICAgaWQ6IG8uaWQsXHJcbiAgICAgIGVtcGxveWVlSWQ6IG8uZW1wbG95ZWVJZCxcclxuICAgICAgdGl0bGU6IG8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxyXG4gICAgICBxdWFydGVyOiBvLnF1YXJ0ZXIsXHJcbiAgICAgIGtleVJlc3VsdHM6IG8ua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcclxuICAgICAgc3RhdHVzOiBvLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBvLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG8udXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIE9LUnM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIE9LUnNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcclxuICBxdWFydGVyOiBzdHJpbmdcclxuICBrZXlSZXN1bHRzPzogYW55W11cclxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwYXJlbnRPS1JJZD86IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9rciA9IGF3YWl0IHByaXNtYS50ZWFtT0tSLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICBxdWFydGVyOiBkYXRhLnF1YXJ0ZXIsXHJcbiAgICAgICAga2V5UmVzdWx0czogKGRhdGEua2V5UmVzdWx0cyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwib24tdHJhY2tcIixcclxuICAgICAgICBwYXJlbnRPS1JJZDogZGF0YS5wYXJlbnRPS1JJZCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm9rcixcclxuICAgICAga2V5UmVzdWx0czogb2tyLmtleVJlc3VsdHMgYXMgYW55W10sXHJcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjcmVhdGVkQXQ6IG9rci5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBPS1I6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT0tSKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub2tyLFxyXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcclxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcclxuICAgICAgcGFyZW50T0tSSWQ6IG9rci5wYXJlbnRPS1JJZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIE9LUjpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIE9LUlwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2VSZXZpZXdzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gcmV2aWV3cy5tYXAoKHIpID0+ICh7XHJcbiAgICAgIGlkOiByLmlkLFxyXG4gICAgICBlbXBsb3llZUlkOiByLmVtcGxveWVlSWQsXHJcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXHJcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcclxuICAgICAgcmV2aWV3ZXJOYW1lOiByLnJldmlld2VyTmFtZSxcclxuICAgICAgcGVyaW9kOiByLnBlcmlvZCxcclxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxyXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcclxuICAgICAgb3ZlcmFsbFJhdGluZzogci5vdmVyYWxsUmF0aW5nLFxyXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByLnN0cmVuZ3RocyBhcyBzdHJpbmdbXSxcclxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogci5hcmVhc0ZvckltcHJvdmVtZW50IGFzIHN0cmluZ1tdLFxyXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByLnNhbGFyeUNoYW5nZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHByb21vdGlvblJlY29tbWVuZGVkOiByLnByb21vdGlvblJlY29tbWVuZGVkLFxyXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHIuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxyXG4gICAgfSkpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZXJmb3JtYW5jZSByZXZpZXdzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBwZXJmb3JtYW5jZSByZXZpZXdzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xyXG4gIHJldmlld2VySWQ6IHN0cmluZ1xyXG4gIHJldmlld2VyTmFtZTogc3RyaW5nXHJcbiAgcGVyaW9kOiBzdHJpbmdcclxuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBvdmVyYWxsUmF0aW5nPzogbnVtYmVyXHJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxyXG4gIHN0cmVuZ3Rocz86IHN0cmluZ1tdXHJcbiAgYXJlYXNGb3JJbXByb3ZlbWVudD86IHN0cmluZ1tdXHJcbiAgZ29hbHM/OiBzdHJpbmdbXVxyXG4gIHNhbGFyeUNoYW5nZT86IG51bWJlclxyXG4gIHByb21vdGlvblJlY29tbWVuZGVkPzogYm9vbGVhblxyXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmV2aWV3ID0gYXdhaXQgcHJpc21hLnRlYW1QZXJmb3JtYW5jZVJldmlldy5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxyXG4gICAgICAgIGVtcGxveWVlTmFtZTogZGF0YS5lbXBsb3llZU5hbWUsXHJcbiAgICAgICAgcmV2aWV3ZXJJZDogZGF0YS5yZXZpZXdlcklkLFxyXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXHJcbiAgICAgICAgcGVyaW9kOiBkYXRhLnBlcmlvZCxcclxuICAgICAgICBzY2hlZHVsZWREYXRlOiBkYXRhLnNjaGVkdWxlZERhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxyXG4gICAgICAgIG92ZXJhbGxSYXRpbmc6IGRhdGEub3ZlcmFsbFJhdGluZyB8fCAwLFxyXG4gICAgICAgIGNvbXBldGVuY3lSYXRpbmdzOiAoZGF0YS5jb21wZXRlbmN5UmF0aW5ncyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXHJcbiAgICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogKGRhdGEuYXJlYXNGb3JJbXByb3ZlbWVudCB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIGdvYWxzOiAoZGF0YS5nb2FscyB8fCBbXSkgYXMgYW55LFxyXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcclxuICAgICAgICBwcm9tb3Rpb25SZWNvbW1lbmRlZDogZGF0YS5wcm9tb3Rpb25SZWNvbW1lbmRlZCB8fCBmYWxzZSxcclxuICAgICAgICBwaXBSZXF1aXJlZDogZGF0YS5waXBSZXF1aXJlZCB8fCBmYWxzZSxcclxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBwcmlzbWEudGVhbVBlcmZvcm1hbmNlUmV2aWV3LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJldmlldyxcclxuICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IHJldmlldy5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcclxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxyXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByZXZpZXcuYXJlYXNGb3JJbXByb3ZlbWVudCBhcyBzdHJpbmdbXSxcclxuICAgICAgZ29hbHM6IHJldmlldy5nb2FscyBhcyBzdHJpbmdbXSxcclxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY29tcGxldGVkQXQ6IHJldmlldy5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwZXJmb3JtYW5jZSByZXZpZXc6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBwZXJmb3JtYW5jZSByZXZpZXdcIiB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWluaW5nQ291cnNlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IHByaXNtYS50ZWFtVHJhaW5pbmdDb3Vyc2UuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGNvdXJzZXMubWFwKChjKSA9PiAoe1xyXG4gICAgICBpZDogYy5pZCxcclxuICAgICAgdGl0bGU6IGMudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLFxyXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxyXG4gICAgICBjYXRlZ29yeTogYy5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGR1cmF0aW9uOiBjLmR1cmF0aW9uLFxyXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcclxuICAgICAgZm9ybWF0OiBjLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGMuY2VydGlmaWNhdGlvbkV4cGlyeSB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYWluaW5nIGNvdXJzZXM6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJhaW5pbmdDb3Vyc2UoZGF0YToge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBjYXRlZ29yeT86IHN0cmluZ1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxuICBmb3JtYXQ/OiBzdHJpbmdcclxuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXHJcbn0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUgfHwgXCJvcHRpb25hbFwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8IFwidGVjaG5pY2FsXCIsXHJcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBcIlwiLFxyXG4gICAgICAgIGZvcm1hdDogZGF0YS5mb3JtYXQgfHwgXCJvbmxpbmVcIixcclxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jb3Vyc2UsXHJcbiAgICAgIHR5cGU6IGNvdXJzZS50eXBlIGFzIGFueSxcclxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgIGZvcm1hdDogY291cnNlLmZvcm1hdCBhcyBhbnksXHJcbiAgICAgIGNlcnRpZmljYXRpb25FeHBpcnk6IGNvdXJzZS5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHRyYWluaW5nIGNvdXJzZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IENPVVJTRSBFTlJPTExNRU5UIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZW5yb2xsbWVudHMgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxyXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcclxuICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgIGNvdXJzZUlkOiBlLmNvdXJzZUlkLFxyXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQ6IGUuZW1wbG95ZWVJZCxcclxuICAgICAgc3RhdHVzOiBlLnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxyXG4gICAgICBlbnJvbGxlZEF0OiBlLmVucm9sbGVkQXQsXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZS5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvdXJzZSBlbnJvbGxtZW50czpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY291cnNlIGVucm9sbG1lbnRzXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xyXG4gIGNvdXJzZUlkOiBzdHJpbmdcclxuICBjb3Vyc2VOYW1lOiBzdHJpbmdcclxuICBlbXBsb3llZUlkOiBzdHJpbmdcclxuICBzdGF0dXM/OiBzdHJpbmdcclxuICBwcm9ncmVzcz86IG51bWJlclxyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xyXG59KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvdXJzZUlkOiBkYXRhLmNvdXJzZUlkLFxyXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcclxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXHJcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcImVucm9sbGVkXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcclxuICAgICAgICBlbnJvbGxlZEF0OiBkYXRhLmVucm9sbGVkQXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZW5yb2xsbWVudCxcclxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXHJcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgc2NvcmU6IGVucm9sbG1lbnQuc2NvcmUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvdXJzZUVucm9sbG1lbnQoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlbnJvbGxtZW50ID0gYXdhaXQgcHJpc21hLnRlYW1Db3Vyc2VFbnJvbGxtZW50LnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmVucm9sbG1lbnQsXHJcbiAgICAgIHN0YXR1czogZW5yb2xsbWVudC5zdGF0dXMgYXMgYW55LFxyXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY2VydGlmaWNhdGVVcmw6IGVucm9sbG1lbnQuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY291cnNlIGVucm9sbG1lbnQ6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IEhPTElEQVkgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhvbGlkYXlzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBob2xpZGF5cyA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5maW5kTWFueSh7IG9yZGVyQnk6IHsgZGF0ZTogXCJhc2NcIiB9IH0pXHJcbiAgICByZXR1cm4gaG9saWRheXMubWFwKGggPT4gKHtcclxuICAgICAgLi4uaCxcclxuICAgICAgY3JlYXRlZEF0OiBoLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9KSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhvbGlkYXlzOlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBob2xpZGF5c1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVIb2xpZGF5KGRhdGE6IHsgZGF0ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaG9saWRheSA9IGF3YWl0IHByaXNtYS50ZWFtSG9saWRheS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB8fCBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaG9saWRheSxcclxuICAgICAgY3JlYXRlZEF0OiBob2xpZGF5LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBob2xpZGF5OlwiLCBlcnJvcilcclxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaG9saWRheVwiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVIb2xpZGF5KGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcHJpc21hLnRlYW1Ib2xpZGF5LmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgaG9saWRheTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGhvbGlkYXlcIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBNlpzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/stat-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$upcoming$2d$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/upcoming-widget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-client] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4da60d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:4da60d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4e9fc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:4e9fc6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ae5e73__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:ae5e73 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3bb5ae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:3bb5ae [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const quickActions = [
    {
        label: "New Lead",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        color: "bg-blue-500/20 text-blue-400"
    },
    {
        label: "New Project",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
        color: "bg-green-500/20 text-green-400"
    },
    {
        label: "Create Invoice",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        color: "bg-amber-500/20 text-amber-400"
    },
    {
        label: "Schedule Meeting",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        color: "bg-purple-500/20 text-purple-400"
    },
    {
        label: "Team Task",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        color: "bg-pink-500/20 text-pink-400"
    },
    {
        label: "Report",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        color: "bg-cyan-500/20 text-cyan-400"
    }
];
const recentActivities = [
    {
        id: 1,
        type: "lead",
        action: "New Lead Added",
        detail: "Latest from CRM",
        time: "Recent",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        id: 2,
        type: "project",
        action: "Project Updated",
        detail: "Check projects tab",
        time: "Recent",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    {
        id: 3,
        type: "task",
        action: "Task Created",
        detail: "Check tasks tab",
        time: "Recent",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
    },
    {
        id: 4,
        type: "meeting",
        action: "Client Activity",
        detail: "Check clients tab",
        time: "Recent",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
    },
    {
        id: 5,
        type: "alert",
        action: "Invoice Alert",
        detail: "Check finances tab",
        time: "Recent",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"]
    }
];
function DashboardPage() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const userRole = session?.user?.role || "SUPER_ADMIN";
    // Role-based dashboard imports (lazy)
    const ManagementDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/dashboards/management-dashboard.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.ManagementDashboard), {
        loadableGenerated: {
            modules: [
                "[project]/components/dashboards/management-dashboard.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    });
    const ManagerDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/dashboards/manager-dashboard.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.ManagerDashboard), {
        loadableGenerated: {
            modules: [
                "[project]/components/dashboards/manager-dashboard.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    });
    const EmployeeDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/dashboards/employee-dashboard.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.EmployeeDashboard), {
        loadableGenerated: {
            modules: [
                "[project]/components/dashboards/employee-dashboard.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    });
    const ClientDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/dashboards/client-dashboard.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.ClientDashboard), {
        loadableGenerated: {
            modules: [
                "[project]/components/dashboards/client-dashboard.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    });
    // Render role-specific dashboards
    if (userRole === "MANAGEMENT") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManagementDashboard, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 73,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 73,
            columnNumber: 12
        }, this);
    }
    if (userRole === "MANAGER") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ManagerDashboard, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 76,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 76,
            columnNumber: 12
        }, this);
    }
    if (userRole === "EMPLOYEE") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmployeeDashboard, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 79,
            columnNumber: 12
        }, this);
    }
    if (userRole === "CLIENT") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientDashboard, {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 82,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 82,
            columnNumber: 12
        }, this);
    }
    // SUPER_ADMIN gets the full original dashboard
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FullAdminDashboard, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 86,
            columnNumber: 27
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 86,
        columnNumber: 10
    }, this);
}
_s(DashboardPage, "xGqsfA9Yc4bug2CeORcyTsHwvXY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = DashboardPage;
function FullAdminDashboard() {
    _s1();
    const today = new Date().toISOString().split("T")[0];
    const [dbEmployees, setDbEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dbAttendance, setDbAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clockLoading, setClockLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FullAdminDashboard.useEffect": ()=>{
            async function loadData() {
                const [empRes, attRes] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4da60d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getEmployees"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$4e9fc6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAttendanceRecords"])()
                ]);
                if (Array.isArray(empRes)) setDbEmployees(empRes);
                if (Array.isArray(attRes)) setDbAttendance(attRes);
            }
            loadData();
        }
    }["FullAdminDashboard.useEffect"], []);
    // Office timing
    const OFFICE_IN = "10:30";
    const GRACE = 30;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ae5e73__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createAttendanceRecord"])({
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3bb5ae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateAttendanceRecord"])(myRecord.id, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-chart-2/10 to-chart-3/20 border border-primary/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))]"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl md:text-3xl font-bold text-foreground",
                                                children: "Welcome back! 👋"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground mt-1",
                                                children: "Here's what's happening with your agency today."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: new Date().toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-blue-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "w-4 h-4 text-blue-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "New Leads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold mt-2",
                                                children: [
                                                    "+",
                                                    todayStats.newLeads
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-purple-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "w-4 h-4 text-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Meetings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold mt-2",
                                                children: todayStats.meetings
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-green-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-4 h-4 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Tasks Done"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold mt-2",
                                                children: todayStats.tasksCompleted
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-amber-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                            className: "w-4 h-4 text-amber-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Today's Revenue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold mt-2",
                                                children: todayStats.revenue
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                delay: 50,
                className: "border-primary/20 bg-gradient-to-r from-primary/5 via-chart-2/5 to-chart-3/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-xl bg-primary/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-6 h-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold",
                                                children: "Attendance Clock"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "Office: 10:30 AM - 7:00 PM · 30 min grace"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: !myRecord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleDashClockIn,
                                    disabled: clockLoading || !currentEmp,
                                    className: "gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-xl shadow-lg shadow-green-600/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 21
                                        }, this),
                                        " Clock In"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 19
                                }, this) : !myRecord.clockOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "In at"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold",
                                                    children: myRecord.clockIn
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 23
                                                }, this),
                                                myRecord.clockIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-medium ${getLabel(myRecord.clockIn).color}`,
                                                    children: getLabel(myRecord.clockIn).text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleDashClockOut,
                                            disabled: clockLoading,
                                            className: "gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-xl shadow-lg shadow-red-600/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 23
                                                }, this),
                                                " Clock Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "In"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-green-500",
                                                            children: myRecord.clockIn
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 83
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-red-500",
                                                            children: myRecord.clockOut
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 84
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Hrs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-primary",
                                                            children: [
                                                                myRecord.totalHours,
                                                                "h"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 84
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "bg-green-500/20 text-green-500 text-xs px-2 py-1",
                                            children: "✓ Done"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 225,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 224,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 xl:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-5 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                delay: 100,
                                className: "border-primary/20 shadow-md shadow-primary/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex flex-row items-center justify-between pb-3 border-b border-border/50 bg-muted/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-1.5 rounded-md bg-blue-500/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-4 h-4 text-blue-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-base font-semibold",
                                                        children: "Today's Priorities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
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
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-border/50",
                                            children: dailyTasks.map((task, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 flex gap-3 hover:bg-muted/50 transition-colors group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-0.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${task.completed ? 'bg-primary border-primary' : 'border-muted-foreground/50 hover:border-primary delay-75'}`,
                                                                children: task.completed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "w-3.5 h-3.5 text-primary-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 46
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-sm font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`,
                                                                    children: task.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mt-1.5 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "secondary",
                                                                            className: "text-[10px] uppercase font-semibold tracking-wider h-5 px-1.5",
                                                                            children: task.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 301,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-[10px] font-medium uppercase tracking-wider ${task.priority === 'high' ? 'text-red-400' : task.priority === 'medium' ? 'text-amber-400' : 'text-blue-400'}`,
                                                                            children: [
                                                                                task.priority,
                                                                                " Priority"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 304,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, task.id, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$upcoming$2d$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpcomingWidget"], {
                                    delay: 0
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                delay: 300,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex flex-row items-center justify-between pb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-base font-medium",
                                                children: "Activity Feed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-xs text-primary hover:underline flex items-center gap-1",
                                                children: [
                                                    "View all ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 relative",
                                                    children: [
                                                        i !== recentActivities.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-4 top-8 bottom-[-16px] w-[1px] bg-border/50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-2 rounded-full h-8 w-8 flex items-center justify-center relative z-10 ${typeColors[activity.type]}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0 pb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: activity.action
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground mt-0.5 mb-1",
                                                                    children: activity.detail
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider",
                                                                    children: activity.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-7 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 sm:grid-cols-6 gap-3 animate-in fade-in duration-500",
                                children: quickActions.map((action, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-secondary/50 hover:border-primary/50 transition-all hover:scale-105 ${action.color}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(action.icon, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-medium text-center leading-tight",
                                                children: action.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                        title: "Total Leads",
                                        value: "1,284",
                                        change: 12.5,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                        delay: 100,
                                        iconColor: "text-chart-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                        title: "Active Clients",
                                        value: "86",
                                        change: 8.2,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
                                        delay: 200,
                                        iconColor: "text-chart-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                        title: "Projects",
                                        value: "28",
                                        change: -3.1,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
                                        delay: 300,
                                        iconColor: "text-chart-3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stat$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                        title: "Revenue",
                                        value: "৳342K",
                                        change: 15.3,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                                        delay: 400,
                                        iconColor: "text-chart-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                delay: 500,
                                className: "border-amber-500/20 bg-gradient-to-br from-background to-amber-500/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-base font-semibold flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "w-4 h-4 text-amber-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this),
                                                "Financial Snapshot"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-muted-foreground flex items-center justify-between",
                                                            children: [
                                                                "MRR ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "text-[9px] h-4 px-1 bg-green-500/10 text-green-500 border-green-500/20",
                                                                    children: financialSummary.mrrGrowth
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold tracking-tight",
                                                            children: financialSummary.mrr
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Monthly Recurring Revenue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 border-l border-border/50 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-muted-foreground flex items-center justify-between",
                                                            children: [
                                                                "Pending ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "text-[9px] h-4 px-1",
                                                                    children: [
                                                                        financialSummary.invoicesPending,
                                                                        " inv"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 406,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold tracking-tight text-amber-500",
                                                            children: financialSummary.outstanding
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Expected incoming"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 border-l border-border/50 pl-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-muted-foreground flex items-center justify-between",
                                                            children: [
                                                                "Overdue ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "text-[9px] h-4 px-1 bg-red-500/10 text-red-500 border-red-500/20",
                                                                    children: [
                                                                        financialSummary.invoicesOverdue,
                                                                        " inv"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold tracking-tight text-red-500",
                                                            children: financialSummary.overdue
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Requires attention"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: kpis.map((kpi, i)=>{
                                                const isPositive = kpi.trend.startsWith("+");
                                                const TrendIcon = isPositive ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                                    delay: 800 + i * 50,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground mb-1",
                                                                children: kpi.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-end justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl font-bold",
                                                                        children: kpi.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `flex items-center gap-0.5 text-[10px] font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendIcon, {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 436,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            kpi.trend
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 435,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 25
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                        delay: 900,
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "flex flex-row items-center justify-between pb-3 pt-4 px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-medium",
                                                    children: "Projects in Flight"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "px-4 pb-4 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: activeProjects.slice(0, 3).map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-end",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm font-medium leading-none",
                                                                                        children: project.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.tsx",
                                                                                        lineNumber: 458,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[10px] text-muted-foreground mt-1",
                                                                                        children: project.client
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.tsx",
                                                                                        lineNumber: 459,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 457,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-medium bg-secondary px-1.5 py-0.5 rounded text-muted-foreground",
                                                                                children: [
                                                                                    "Due ",
                                                                                    project.dueDate
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 461,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 456,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                                        value: project.progress,
                                                                        className: "h-1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "w-full mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors pb-1 border-b border-transparent hover:border-foreground mx-auto block text-center",
                                                        children: "View all projects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 269,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 164,
        columnNumber: 7
    }, this);
}
_s1(FullAdminDashboard, "i2WtC+DhxO5UOoL/+wmnwENBEi4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c1 = FullAdminDashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "DashboardPage");
__turbopack_context__.k.register(_c1, "FullAdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6e8afa63._.js.map