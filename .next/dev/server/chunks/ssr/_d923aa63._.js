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
"[project]/components/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-ssr] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-ssr] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/avatar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const navItems = [
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
        href: "/settings",
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
function Sidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-lg text-sidebar-foreground animate-in fade-in slide-in-from-left-2 duration-200",
                        children: "AgencyFlow"
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-4 space-y-1 overflow-y-auto",
                children: navItems.map((item)=>{
                    const isActive = pathname === item.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group", isActive ? "bg-sidebar-accent text-sidebar-primary" : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110", isActive && "text-sidebar-primary")
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-in fade-in slide-in-from-left-2 duration-200",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 80,
                                columnNumber: 30
                            }, this),
                            isActive && !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto w-1.5 h-1.5 rounded-full bg-sidebar-primary animate-in zoom-in duration-200"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.href, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 60,
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
                                        src: "/professional-avatar.png"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                        className: "bg-primary/20 text-primary text-xs",
                                        children: "JD"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 animate-in fade-in slide-in-from-left-2 duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-sidebar-foreground truncate",
                                        children: "John Doe"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground truncate",
                                        children: "Admin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCollapsed(!collapsed),
                        className: "flex items-center justify-center w-full py-2 rounded-lg hover:bg-sidebar-accent/50 text-muted-foreground hover:text-sidebar-foreground transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 transition-transform duration-300", collapsed && "rotate-180")
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar.tsx",
        lineNumber: 41,
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
"[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 58,
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
"[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = 'default', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = 'popper', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md', position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/types/finance.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Finance Types for Invoice and Payment Management
__turbopack_context__.s([
    "ACTIVITY_ACTION_CONFIG",
    ()=>ACTIVITY_ACTION_CONFIG,
    "AGENCY_SERVICE_TEMPLATES",
    ()=>AGENCY_SERVICE_TEMPLATES,
    "ENTITY_STATUS_CONFIG",
    ()=>ENTITY_STATUS_CONFIG,
    "EXPENSE_CATEGORIES",
    ()=>EXPENSE_CATEGORIES,
    "EXPENSE_SOURCE_TYPES",
    ()=>EXPENSE_SOURCE_TYPES,
    "INCOME_CATEGORIES",
    ()=>INCOME_CATEGORIES,
    "INCOME_SOURCE_TYPES",
    ()=>INCOME_SOURCE_TYPES,
    "INVOICE_CATEGORY_CONFIG",
    ()=>INVOICE_CATEGORY_CONFIG,
    "INVOICE_STATUS_CONFIG",
    ()=>INVOICE_STATUS_CONFIG,
    "PAYMENT_METHOD_CONFIG",
    ()=>PAYMENT_METHOD_CONFIG
]);
const INVOICE_STATUS_CONFIG = {
    draft: {
        label: "Draft",
        color: "bg-muted text-muted-foreground"
    },
    sent: {
        label: "Sent",
        color: "bg-blue-500/20 text-blue-400"
    },
    paid: {
        label: "Paid",
        color: "bg-green-500/20 text-green-400"
    },
    partial: {
        label: "Partial",
        color: "bg-yellow-500/20 text-yellow-400"
    },
    overdue: {
        label: "Overdue",
        color: "bg-red-500/20 text-red-400"
    },
    cancelled: {
        label: "Cancelled",
        color: "bg-gray-500/20 text-gray-400"
    }
};
const PAYMENT_METHOD_CONFIG = {
    bank_transfer: {
        label: "Bank Transfer",
        icon: "🏦"
    },
    credit_card: {
        label: "Credit Card",
        icon: "💳"
    },
    cash: {
        label: "Cash",
        icon: "💵"
    },
    check: {
        label: "Check",
        icon: "📝"
    },
    other: {
        label: "Other",
        icon: "📋"
    }
};
const INCOME_SOURCE_TYPES = {
    client_payment: {
        label: "Client Payment",
        icon: "👤",
        description: "Payment from a client for services or projects",
        color: "text-green-500"
    },
    office_income: {
        label: "Office Income",
        icon: "🏢",
        description: "Income from company operations or other sources",
        color: "text-blue-500"
    },
    personal: {
        label: "Personal / Owner",
        icon: "💰",
        description: "Owner contribution or personal investment",
        color: "text-purple-500"
    },
    other: {
        label: "Other Income",
        icon: "📦",
        description: "Miscellaneous income sources",
        color: "text-gray-500"
    }
};
const INCOME_CATEGORIES = [
    {
        id: "project_payment",
        label: "Project Payment",
        icon: "📋",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        subCategories: [
            {
                id: "milestone",
                label: "Milestone Payment"
            },
            {
                id: "final_delivery",
                label: "Final Delivery"
            },
            {
                id: "advance",
                label: "Advance Payment"
            },
            {
                id: "partial",
                label: "Partial Payment"
            }
        ]
    },
    {
        id: "retainer",
        label: "Retainer",
        icon: "🔄",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        subCategories: [
            {
                id: "monthly",
                label: "Monthly Retainer"
            },
            {
                id: "quarterly",
                label: "Quarterly Retainer"
            },
            {
                id: "annual",
                label: "Annual Retainer"
            }
        ]
    },
    {
        id: "consulting",
        label: "Consulting",
        icon: "💼",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        subCategories: [
            {
                id: "hourly",
                label: "Hourly Consulting"
            },
            {
                id: "advisory",
                label: "Advisory Services"
            },
            {
                id: "strategy",
                label: "Strategy Session"
            }
        ]
    },
    {
        id: "other_income",
        label: "Other Income",
        icon: "📦",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        subCategories: [
            {
                id: "interest",
                label: "Interest Income"
            },
            {
                id: "refund",
                label: "Refund"
            },
            {
                id: "asset_sale",
                label: "Asset Sale"
            },
            {
                id: "commission",
                label: "Commission"
            }
        ]
    }
];
const EXPENSE_SOURCE_TYPES = {
    client_project: {
        label: "Client Project",
        icon: "👤",
        description: "Expense for a specific client project (billable)",
        color: "text-green-500"
    },
    office: {
        label: "Office / Company",
        icon: "🏢",
        description: "General office and business operations expense",
        color: "text-blue-500"
    },
    personal: {
        label: "Personal / Owner",
        icon: "💰",
        description: "Owner withdrawal or personal expense",
        color: "text-purple-500"
    }
};
const EXPENSE_CATEGORIES = [
    {
        id: "office_operations",
        label: "Office Operations",
        icon: "🏢",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        subCategories: [
            {
                id: "rent",
                label: "Rent & Lease"
            },
            {
                id: "utilities",
                label: "Utilities"
            },
            {
                id: "supplies",
                label: "Office Supplies"
            },
            {
                id: "maintenance",
                label: "Maintenance"
            },
            {
                id: "furniture",
                label: "Furniture"
            }
        ]
    },
    {
        id: "software_tools",
        label: "Software & Tools",
        icon: "💻",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        subCategories: [
            {
                id: "subscription",
                label: "Subscriptions"
            },
            {
                id: "license",
                label: "Licenses"
            },
            {
                id: "cloud",
                label: "Cloud Services"
            },
            {
                id: "saas",
                label: "SaaS Products"
            }
        ]
    },
    {
        id: "marketing",
        label: "Marketing & Advertising",
        icon: "📢",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        subCategories: [
            {
                id: "ads",
                label: "Paid Advertising"
            },
            {
                id: "events",
                label: "Events & Sponsorship"
            },
            {
                id: "promotions",
                label: "Promotions"
            },
            {
                id: "content",
                label: "Content Creation"
            }
        ]
    },
    {
        id: "contractors",
        label: "Contractors & Freelancers",
        icon: "👥",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        subCategories: [
            {
                id: "freelancer",
                label: "Freelancer Payment"
            },
            {
                id: "agency",
                label: "Agency Fee"
            },
            {
                id: "consultant",
                label: "Consultant"
            }
        ]
    },
    {
        id: "infrastructure",
        label: "Infrastructure",
        icon: "🔧",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        subCategories: [
            {
                id: "hosting",
                label: "Web Hosting"
            },
            {
                id: "domain",
                label: "Domains"
            },
            {
                id: "server",
                label: "Server Costs"
            },
            {
                id: "cdn",
                label: "CDN Services"
            }
        ]
    },
    {
        id: "team",
        label: "Team & HR",
        icon: "👨‍💼",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        subCategories: [
            {
                id: "salaries",
                label: "Salaries"
            },
            {
                id: "benefits",
                label: "Benefits"
            },
            {
                id: "training",
                label: "Training & Development"
            },
            {
                id: "team_building",
                label: "Team Building"
            }
        ]
    },
    {
        id: "travel",
        label: "Travel & Transportation",
        icon: "✈️",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        subCategories: [
            {
                id: "flight",
                label: "Flights"
            },
            {
                id: "hotel",
                label: "Hotels"
            },
            {
                id: "transport",
                label: "Local Transport"
            },
            {
                id: "meals",
                label: "Meals & Entertainment"
            }
        ]
    },
    {
        id: "client_expense",
        label: "Client Project Expense",
        icon: "📁",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        subCategories: [
            {
                id: "production",
                label: "Production Costs"
            },
            {
                id: "third_party",
                label: "Third-party Services"
            },
            {
                id: "assets",
                label: "Asset Purchases"
            },
            {
                id: "tools",
                label: "Project Tools"
            }
        ]
    }
];
const ACTIVITY_ACTION_CONFIG = {
    created: {
        label: "Created",
        icon: "➕",
        color: "text-green-500"
    },
    updated: {
        label: "Updated",
        icon: "✏️",
        color: "text-blue-500"
    },
    deleted: {
        label: "Deleted",
        icon: "🗑️",
        color: "text-red-500"
    },
    neutralized: {
        label: "Neutralized",
        icon: "⚪",
        color: "text-gray-500"
    },
    restored: {
        label: "Restored",
        icon: "♻️",
        color: "text-emerald-500"
    },
    status_changed: {
        label: "Status Changed",
        icon: "🔄",
        color: "text-amber-500"
    },
    payment_recorded: {
        label: "Payment Recorded",
        icon: "💰",
        color: "text-green-500"
    }
};
const ENTITY_STATUS_CONFIG = {
    active: {
        label: "Active",
        color: "text-green-500",
        bgColor: "bg-green-500/10"
    },
    neutralized: {
        label: "Neutralized",
        color: "text-gray-500",
        bgColor: "bg-gray-500/10"
    }
};
const AGENCY_SERVICE_TEMPLATES = [
    {
        id: "seo_retainer",
        name: "SEO Monthly Retainer",
        description: "Ongoing search engine optimization services",
        category: "seo",
        icon: "🔍",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        defaultItems: [
            {
                description: "Monthly SEO Audit & Reporting",
                quantity: 1,
                unitPrice: 1500
            },
            {
                description: "Keyword Research & Optimization",
                quantity: 1,
                unitPrice: 800
            },
            {
                description: "Backlink Building (10 links)",
                quantity: 1,
                unitPrice: 1200
            },
            {
                description: "Technical SEO Maintenance",
                quantity: 1,
                unitPrice: 500
            }
        ],
        defaultTaxRate: 5,
        defaultPaymentTerms: 15
    },
    {
        id: "ppc_management",
        name: "PPC Campaign Management",
        description: "Pay-per-click advertising management",
        category: "marketing",
        icon: "📊",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        defaultItems: [
            {
                description: "PPC Strategy & Campaign Setup",
                quantity: 1,
                unitPrice: 2000
            },
            {
                description: "Ad Copywriting & Creative",
                quantity: 1,
                unitPrice: 800
            },
            {
                description: "Monthly Campaign Optimization",
                quantity: 1,
                unitPrice: 1500
            },
            {
                description: "Performance Reporting & Analytics",
                quantity: 1,
                unitPrice: 500
            }
        ],
        defaultTaxRate: 5,
        defaultPaymentTerms: 30
    },
    {
        id: "social_media",
        name: "Social Media Package",
        description: "Full social media management service",
        category: "social",
        icon: "📱",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        defaultItems: [
            {
                description: "Content Calendar & Strategy",
                quantity: 1,
                unitPrice: 1000
            },
            {
                description: "Social Media Posts (20/month)",
                quantity: 1,
                unitPrice: 2000
            },
            {
                description: "Community Management",
                quantity: 1,
                unitPrice: 800
            },
            {
                description: "Monthly Analytics Report",
                quantity: 1,
                unitPrice: 400
            }
        ],
        defaultTaxRate: 5,
        defaultPaymentTerms: 15
    },
    {
        id: "web_development",
        name: "Website Development",
        description: "Custom website design and development",
        category: "development",
        icon: "💻",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
        defaultItems: [
            {
                description: "UI/UX Design & Wireframing",
                quantity: 1,
                unitPrice: 5000
            },
            {
                description: "Frontend Development",
                quantity: 1,
                unitPrice: 8000
            },
            {
                description: "Backend Development & API",
                quantity: 1,
                unitPrice: 6000
            },
            {
                description: "Testing & QA",
                quantity: 1,
                unitPrice: 2000
            },
            {
                description: "Deployment & Launch Support",
                quantity: 1,
                unitPrice: 1500
            }
        ],
        defaultTaxRate: 5,
        defaultPaymentTerms: 30
    },
    {
        id: "content_marketing",
        name: "Content Marketing",
        description: "Content creation and marketing strategy",
        category: "content",
        icon: "✍️",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        defaultItems: [
            {
                description: "Blog Posts (8 articles/month)",
                quantity: 1,
                unitPrice: 2400
            },
            {
                description: "Email Newsletter Campaign",
                quantity: 1,
                unitPrice: 800
            },
            {
                description: "Content Strategy & Planning",
                quantity: 1,
                unitPrice: 600
            },
            {
                description: "SEO Content Optimization",
                quantity: 1,
                unitPrice: 400
            }
        ],
        defaultTaxRate: 5,
        defaultPaymentTerms: 15
    },
    {
        id: "brand_strategy",
        name: "Brand Strategy & Identity",
        description: "Comprehensive brand development",
        category: "branding",
        icon: "🎨",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        defaultItems: [
            {
                description: "Brand Discovery & Research",
                quantity: 1,
                unitPrice: 3000
            },
            {
                description: "Logo Design (3 concepts)",
                quantity: 1,
                unitPrice: 4000
            },
            {
                description: "Brand Guidelines Document",
                quantity: 1,
                unitPrice: 2500
            },
            {
                description: "Collateral Design Package",
                quantity: 1,
                unitPrice: 3000
            },
            {
                description: "Brand Launch Support",
                quantity: 1,
                unitPrice: 1500
            }
        ],
        defaultTaxRate: 5,
        defaultPaymentTerms: 30
    }
];
const INVOICE_CATEGORY_CONFIG = {
    development: {
        label: "Web Dev",
        color: "text-indigo-400",
        bgColor: "bg-indigo-500/15",
        icon: "💻"
    },
    marketing: {
        label: "PPC/Ads",
        color: "text-blue-400",
        bgColor: "bg-blue-500/15",
        icon: "📊"
    },
    seo: {
        label: "SEO",
        color: "text-green-400",
        bgColor: "bg-green-500/15",
        icon: "🔍"
    },
    social: {
        label: "Social",
        color: "text-pink-400",
        bgColor: "bg-pink-500/15",
        icon: "📱"
    },
    content: {
        label: "Content",
        color: "text-amber-400",
        bgColor: "bg-amber-500/15",
        icon: "✍️"
    },
    branding: {
        label: "Branding",
        color: "text-purple-400",
        bgColor: "bg-purple-500/15",
        icon: "🎨"
    },
    creative: {
        label: "Creative",
        color: "text-orange-400",
        bgColor: "bg-orange-500/15",
        icon: "🎬"
    },
    consulting: {
        label: "Consulting",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/15",
        icon: "💼"
    }
};
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
"[project]/app/actions/data:c3e7c0 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b806c86277ae81385d10ff10374701aad193c9e0":"getInvoices"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "getInvoices",
    ()=>getInvoices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getInvoices = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00b806c86277ae81385d10ff10374701aad193c9e0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getInvoices"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFJBUXNCIn0=
}),
"[project]/app/actions/data:f23f02 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40dde16e1dba04640a7c9eaac96b90c338985f4b12":"createInvoice"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "createInvoice",
    ()=>createInvoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createInvoice = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40dde16e1dba04640a7c9eaac96b90c338985f4b12", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createInvoice"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBNkNzQiJ9
}),
"[project]/app/actions/data:1d647d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60c7e069c36c613e4c72f7b31f213d5b4e59f00a8a":"updateInvoice"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "updateInvoice",
    ()=>updateInvoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateInvoice = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60c7e069c36c613e4c72f7b31f213d5b4e59f00a8a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateInvoice"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBNEdzQiJ9
}),
"[project]/app/actions/data:4c5f27 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40be6a50cada39b933e74c648a24f081aa4504accb":"deleteInvoice"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "deleteInvoice",
    ()=>deleteInvoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteInvoice = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40be6a50cada39b933e74c648a24f081aa4504accb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteInvoice"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBOEhzQiJ9
}),
"[project]/app/actions/data:720ba6 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00c11516774ac473894006350ff1c548435ad069a8":"getIncomeEntries"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "getIncomeEntries",
    ()=>getIncomeEntries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getIncomeEntries = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00c11516774ac473894006350ff1c548435ad069a8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getIncomeEntries"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBMElzQiJ9
}),
"[project]/app/actions/data:6a243e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40fc1248374b3138bf99c0d6eb0f84a2b379efd813":"createIncome"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "createIncome",
    ()=>createIncome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createIncome = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40fc1248374b3138bf99c0d6eb0f84a2b379efd813", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createIncome"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlJBMEtzQiJ9
}),
"[project]/app/actions/data:8350e1 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60da63839ea34efb1228b5c52d7ea0db981d6c1cf3":"updateIncome"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "updateIncome",
    ()=>updateIncome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateIncome = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60da63839ea34efb1228b5c52d7ea0db981d6c1cf3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateIncome"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlJBNk5zQiJ9
}),
"[project]/app/actions/data:3fa863 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0019334007d7b5b350d792d4b65968f865740e1fac":"getExpenses"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "getExpenses",
    ()=>getExpenses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getExpenses = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("0019334007d7b5b350d792d4b65968f865740e1fac", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getExpenses"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFJBNlBzQiJ9
}),
"[project]/app/actions/data:8c7cbe [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40b73d6a06e0a79742e72d1b54bad8859d081be674":"createExpense"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "createExpense",
    ()=>createExpense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createExpense = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40b73d6a06e0a79742e72d1b54bad8859d081be674", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createExpense"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBbVNzQiJ9
}),
"[project]/app/actions/data:8288db [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60f12624c9e3065e2f8ad465698ecb907b68c08aa0":"updateExpense"},"app/actions/finances.ts",""] */ __turbopack_context__.s([
    "updateExpense",
    ()=>updateExpense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateExpense = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60f12624c9e3065e2f8ad465698ecb907b68c08aa0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateExpense"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbi8vID09PT09PT09PT09PT09PT09PT09IElOVk9JQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZXMgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUludm9pY2UuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gaW52b2ljZXMubWFwKChpbnYpID0+ICh7XG4gICAgICBpZDogaW52LmlkLFxuICAgICAgaW52b2ljZU51bWJlcjogaW52Lmludm9pY2VOdW1iZXIsXG4gICAgICBjbGllbnQ6IGludi5jbGllbnQsXG4gICAgICBjbGllbnRFbWFpbDogaW52LmNsaWVudEVtYWlsLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgcHJvamVjdDogaW52LnByb2plY3QsXG4gICAgICBwcm9qZWN0SWQ6IGludi5wcm9qZWN0SWQsXG4gICAgICBhbW91bnQ6IGludi5hbW91bnQsXG4gICAgICBwYWlkOiBpbnYucGFpZCxcbiAgICAgIHRheDogaW52LnRheCxcbiAgICAgIGRpc2NvdW50OiBpbnYuZGlzY291bnQsXG4gICAgICBzdGF0dXM6IGludi5zdGF0dXMsXG4gICAgICBkdWVEYXRlOiBpbnYuZHVlRGF0ZSxcbiAgICAgIGlzc3VlRGF0ZTogaW52Lmlzc3VlRGF0ZSxcbiAgICAgIHBhaWREYXRlOiBpbnYucGFpZERhdGUsXG4gICAgICBwYXltZW50TWV0aG9kOiBpbnYucGF5bWVudE1ldGhvZCxcbiAgICAgIHBheW1lbnRUZXJtczogaW52LnBheW1lbnRUZXJtcyxcbiAgICAgIGN1cnJlbmN5OiBpbnYuY3VycmVuY3ksXG4gICAgICBpdGVtczogaW52Lml0ZW1zIGFzIGFueVtdLFxuICAgICAgbm90ZXM6IGludi5ub3RlcyxcbiAgICAgIGludGVybmFsTm90ZXM6IGludi5pbnRlcm5hbE5vdGVzLFxuICAgICAgY2F0ZWdvcnk6IGludi5jYXRlZ29yeSxcbiAgICAgIHJlY3VycmluZ0ludm9pY2U6IGludi5yZWN1cnJpbmdJbnZvaWNlLFxuICAgICAgYXR0YWNobWVudHM6IGludi5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW52b2ljZXM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBpbnZvaWNlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZShkYXRhOiB7XG4gIGludm9pY2VOdW1iZXI6IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuICBjbGllbnRFbWFpbD86IHN0cmluZ1xuICBwcm9qZWN0OiBzdHJpbmdcbiAgcHJvamVjdElkPzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIHBhaWQ/OiBudW1iZXJcbiAgdGF4OiBudW1iZXJcbiAgZGlzY291bnQ6IG51bWJlclxuICBzdGF0dXM6IHN0cmluZ1xuICBkdWVEYXRlOiBzdHJpbmdcbiAgaXNzdWVEYXRlOiBzdHJpbmdcbiAgcGFpZERhdGU/OiBzdHJpbmcgfCBudWxsXG4gIHBheW1lbnRNZXRob2Q/OiBzdHJpbmdcbiAgcGF5bWVudFRlcm1zPzogc3RyaW5nXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIGl0ZW1zOiBhbnlbXVxuICBub3Rlcz86IHN0cmluZ1xuICBpbnRlcm5hbE5vdGVzPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIHJlY3VycmluZ0ludm9pY2U/OiBib29sZWFuXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW11cbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbnZvaWNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGludm9pY2VOdW1iZXI6IGRhdGEuaW52b2ljZU51bWJlcixcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCxcbiAgICAgICAgY2xpZW50RW1haWw6IGRhdGEuY2xpZW50RW1haWwgfHwgXCJcIixcbiAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICBwcm9qZWN0SWQ6IGRhdGEucHJvamVjdElkIHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIHBhaWQ6IGRhdGEucGFpZCB8fCAwLFxuICAgICAgICB0YXg6IGRhdGEudGF4LFxuICAgICAgICBkaXNjb3VudDogZGF0YS5kaXNjb3VudCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBpc3N1ZURhdGU6IGRhdGEuaXNzdWVEYXRlLFxuICAgICAgICBwYWlkRGF0ZTogZGF0YS5wYWlkRGF0ZSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHBheW1lbnRUZXJtczogZGF0YS5wYXltZW50VGVybXMgfHwgXCJOZXQgMzBcIixcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMgYXMgYW55LFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgICBpbnRlcm5hbE5vdGVzOiBkYXRhLmludGVybmFsTm90ZXMgfHwgXCJcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICByZWN1cnJpbmdJbnZvaWNlOiBkYXRhLnJlY3VycmluZ0ludm9pY2UgfHwgZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiAoZGF0YS5hdHRhY2htZW50cyB8fCBbXSkgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbnZvaWNlLFxuICAgICAgY2xpZW50TG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxuICAgICAgaXRlbXM6IGludm9pY2UuaXRlbXMgYXMgYW55W10sXG4gICAgICBhdHRhY2htZW50czogaW52b2ljZS5hdHRhY2htZW50cyBhcyBzdHJpbmdbXSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW52b2ljZSxcbiAgICAgIGNsaWVudExvZ286IFwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NDAmd2lkdGg9NDBcIixcbiAgICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zIGFzIGFueVtdLFxuICAgICAgYXR0YWNobWVudHM6IGludm9pY2UuYXR0YWNobWVudHMgYXMgc3RyaW5nW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBpbnZvaWNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGludm9pY2VcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5maW5hbmNlSW52b2ljZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGludm9pY2U6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgaW52b2ljZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBJTkNPTUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5jb21lRW50cmllcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSlcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGluYykgPT4gKHtcbiAgICAgIGlkOiBpbmMuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogaW5jLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGluYy5jYXRlZ29yeSxcbiAgICAgIHN1YkNhdGVnb3J5OiBpbmMuc3ViQ2F0ZWdvcnksXG4gICAgICBhbW91bnQ6IGluYy5hbW91bnQsXG4gICAgICBkYXRlOiBpbmMuZGF0ZSxcbiAgICAgIGNsaWVudDogaW5jLmNsaWVudCxcbiAgICAgIHByb2plY3Q6IGluYy5wcm9qZWN0LFxuICAgICAgc3RhdHVzOiBpbmMuc3RhdHVzLFxuICAgICAgZW50aXR5U3RhdHVzOiBpbmMuZW50aXR5U3RhdHVzIGFzIFwiYWN0aXZlXCIgfCBcIm5ldXRyYWxpemVkXCIsXG4gICAgICBpbnZvaWNlSWQ6IGluYy5pbnZvaWNlSWQgfHwgXCJcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IGluYy5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjdXJyaW5nOiBpbmMucmVjdXJyaW5nLFxuICAgICAgcmVjdXJyaW5nRnJlcXVlbmN5OiBpbmMucmVjdXJyaW5nRnJlcXVlbmN5LFxuICAgICAgdGF4QW1vdW50OiBpbmMudGF4QW1vdW50LFxuICAgICAgbm90ZXM6IGluYy5ub3RlcyxcbiAgICAgIGNyZWF0ZWRBdDogaW5jLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBpbmMudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICBjcmVhdGVkQnk6IFwiU3lzdGVtXCIsXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGluY29tZSBlbnRyaWVzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmNvbWUoZGF0YToge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgc3ViQ2F0ZWdvcnk/OiBzdHJpbmdcbiAgYW1vdW50OiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIGNsaWVudD86IHN0cmluZ1xuICBwcm9qZWN0Pzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBlbnRpdHlTdGF0dXM/OiBzdHJpbmdcbiAgaW52b2ljZUlkPzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICB0YXhBbW91bnQ/OiBudW1iZXJcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNvbWUgPSBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIHN1YkNhdGVnb3J5OiBkYXRhLnN1YkNhdGVnb3J5IHx8IFwiXCIsXG4gICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXG4gICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgICAgY2xpZW50OiBkYXRhLmNsaWVudCB8fCBcIlwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgXCJcIixcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInJlY2VpdmVkXCIsXG4gICAgICAgIGVudGl0eVN0YXR1czogZGF0YS5lbnRpdHlTdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgaW52b2ljZUlkOiBkYXRhLmludm9pY2VJZCB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgdGF4QW1vdW50OiBkYXRhLnRheEFtb3VudCB8fCAwLFxuICAgICAgICBub3RlczogZGF0YS5ub3RlcyB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmNvbWUsXG4gICAgICBlbnRpdHlTdGF0dXM6IGluY29tZS5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIGludm9pY2VJZDogaW5jb21lLmludm9pY2VJZCB8fCBcIlwiLFxuICAgICAgY3JlYXRlZEF0OiBpbmNvbWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGluY29tZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNyZWF0ZWRCeTogXCJDdXJyZW50IFVzZXJcIixcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUluY29tZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5jb21lID0gYXdhaXQgcHJpc21hLmZpbmFuY2VJbmNvbWUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluY29tZSxcbiAgICAgIGVudGl0eVN0YXR1czogaW5jb21lLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgaW52b2ljZUlkOiBpbmNvbWUuaW52b2ljZUlkIHx8IFwiXCIsXG4gICAgICBjcmVhdGVkQXQ6IGluY29tZS5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogaW5jb21lLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaW5jb21lOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGluY29tZSBlbnRyeVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5jb21lKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUluY29tZS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGluY29tZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGRlbGV0ZSBpbmNvbWUgZW50cnlcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRVhQRU5TRSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChleHApID0+ICh7XG4gICAgICBpZDogZXhwLmlkLFxuICAgICAgZGVzY3JpcHRpb246IGV4cC5kZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5OiBleHAuY2F0ZWdvcnksXG4gICAgICBzdWJDYXRlZ29yeTogZXhwLnN1YkNhdGVnb3J5LFxuICAgICAgYW1vdW50OiBleHAuYW1vdW50LFxuICAgICAgZGF0ZTogZXhwLmRhdGUsXG4gICAgICB2ZW5kb3I6IGV4cC52ZW5kb3IsXG4gICAgICBzdGF0dXM6IGV4cC5zdGF0dXMsXG4gICAgICBlbnRpdHlTdGF0dXM6IGV4cC5lbnRpdHlTdGF0dXMgYXMgXCJhY3RpdmVcIiB8IFwibmV1dHJhbGl6ZWRcIixcbiAgICAgIHJlY3VycmluZzogZXhwLnJlY3VycmluZyxcbiAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZXhwLnJlY3VycmluZ0ZyZXF1ZW5jeSxcbiAgICAgIGFwcHJvdmFsU3RhdHVzOiBleHAuYXBwcm92YWxTdGF0dXMsXG4gICAgICBhcHByb3ZlZEJ5OiBleHAuYXBwcm92ZWRCeSxcbiAgICAgIHBheW1lbnRNZXRob2Q6IGV4cC5wYXltZW50TWV0aG9kLFxuICAgICAgcmVjZWlwdFVybDogZXhwLnJlY2VpcHRVcmwsXG4gICAgICB0YXhEZWR1Y3RpYmxlOiBleHAudGF4RGVkdWN0aWJsZSxcbiAgICAgIG5vdGVzOiBleHAubm90ZXMsXG4gICAgICBkZXBhcnRtZW50OiBleHAuZGVwYXJ0bWVudCxcbiAgICAgIHByb2plY3Q6IGV4cC5wcm9qZWN0LFxuICAgICAgc291cmNlVHlwZTogZXhwLnNvdXJjZVR5cGUsXG4gICAgICBjbGllbnRJZDogZXhwLmNsaWVudElkLFxuICAgICAgY2xpZW50TmFtZTogZXhwLmNsaWVudE5hbWUsXG4gICAgICBjcmVhdGVkQXQ6IGV4cC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogZXhwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBleHBlbnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGV4cGVuc2VzXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlKGRhdGE6IHtcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIHN1YkNhdGVnb3J5Pzogc3RyaW5nXG4gIGFtb3VudDogbnVtYmVyXG4gIGRhdGU6IHN0cmluZ1xuICB2ZW5kb3I6IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbiAgZW50aXR5U3RhdHVzPzogc3RyaW5nXG4gIHJlY3VycmluZz86IGJvb2xlYW5cbiAgcmVjdXJyaW5nRnJlcXVlbmN5Pzogc3RyaW5nIHwgbnVsbFxuICBhcHByb3ZhbFN0YXR1cz86IHN0cmluZ1xuICBhcHByb3ZlZEJ5Pzogc3RyaW5nIHwgbnVsbFxuICBwYXltZW50TWV0aG9kPzogc3RyaW5nXG4gIHJlY2VpcHRVcmw/OiBzdHJpbmcgfCBudWxsXG4gIHRheERlZHVjdGlibGU/OiBib29sZWFuXG4gIG5vdGVzPzogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGxcbiAgc291cmNlVHlwZT86IHN0cmluZ1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGxcbiAgY2xpZW50TmFtZT86IHN0cmluZyB8IG51bGxcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGRhdGEuc3ViQ2F0ZWdvcnkgfHwgXCJcIixcbiAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcbiAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxuICAgICAgICB2ZW5kb3I6IGRhdGEudmVuZG9yLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwicGVuZGluZ1wiLFxuICAgICAgICBlbnRpdHlTdGF0dXM6IGRhdGEuZW50aXR5U3RhdHVzIHx8IFwiYWN0aXZlXCIsXG4gICAgICAgIHJlY3VycmluZzogZGF0YS5yZWN1cnJpbmcgfHwgZmFsc2UsXG4gICAgICAgIHJlY3VycmluZ0ZyZXF1ZW5jeTogZGF0YS5yZWN1cnJpbmdGcmVxdWVuY3kgfHwgbnVsbCxcbiAgICAgICAgYXBwcm92YWxTdGF0dXM6IGRhdGEuYXBwcm92YWxTdGF0dXMgfHwgXCJwZW5kaW5nXCIsXG4gICAgICAgIGFwcHJvdmVkQnk6IGRhdGEuYXBwcm92ZWRCeSB8fCBudWxsLFxuICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgXCJCYW5rIFRyYW5zZmVyXCIsXG4gICAgICAgIHJlY2VpcHRVcmw6IGRhdGEucmVjZWlwdFVybCB8fCBudWxsLFxuICAgICAgICB0YXhEZWR1Y3RpYmxlOiBkYXRhLnRheERlZHVjdGlibGUgPz8gdHJ1ZSxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgXCJcIixcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50IHx8IFwiZ2VuZXJhbFwiLFxuICAgICAgICBwcm9qZWN0OiBkYXRhLnByb2plY3QgfHwgbnVsbCxcbiAgICAgICAgc291cmNlVHlwZTogZGF0YS5zb3VyY2VUeXBlIHx8IFwib2ZmaWNlXCIsXG4gICAgICAgIGNsaWVudElkOiBkYXRhLmNsaWVudElkIHx8IG51bGwsXG4gICAgICAgIGNsaWVudE5hbWU6IGRhdGEuY2xpZW50TmFtZSB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIkN1cnJlbnQgVXNlclwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgcHJpc21hLmZpbmFuY2VFeHBlbnNlLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBlbnNlLFxuICAgICAgZW50aXR5U3RhdHVzOiBleHBlbnNlLmVudGl0eVN0YXR1cyBhcyBcImFjdGl2ZVwiIHwgXCJuZXV0cmFsaXplZFwiLFxuICAgICAgY3JlYXRlZEF0OiBleHBlbnNlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBleHBlbnNlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBcIlN5c3RlbVwiLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBleHBlbnNlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuZmluYW5jZUV4cGVuc2UuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBleHBlbnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIGV4cGVuc2VcIiB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBaVdzQiJ9
}),
"[project]/app/finances/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/finances/page.tsx'\n\nExpected ';', '}' or <eof>");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=_d923aa63._.js.map