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
"[project]/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-client] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
        href: "/settings",
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-4 space-y-1 overflow-y-auto",
                children: navItems.map((item)=>{
                    const isActive = pathname === item.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group", isActive ? "bg-sidebar-accent text-sidebar-primary" : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110", isActive && "text-sidebar-primary")
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-in fade-in slide-in-from-left-2 duration-200",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 80,
                                columnNumber: 30
                            }, this),
                            isActive && !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        src: "/professional-avatar.png"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
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
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 animate-in fade-in slide-in-from-left-2 duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-sidebar-foreground truncate",
                                        children: "John Doe"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCollapsed(!collapsed),
                        className: "flex items-center justify-center w-full py-2 rounded-lg hover:bg-sidebar-accent/50 text-muted-foreground hover:text-sidebar-foreground transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 transition-transform duration-300", collapsed && "rotate-180")
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
_s(Sidebar, "08JhlLD2LM6Uel+hWLLKL/dSZrM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
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
"[project]/lib/data/tasks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        color: "bg-chart-3/20 text-chart-3"
    },
    "in-progress": {
        label: "In Progress",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        color: "bg-primary/20 text-primary"
    },
    review: {
        label: "Review",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
        color: "bg-warning/20 text-warning"
    },
    completed: {
        label: "Completed",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
        color: "bg-success/20 text-success"
    },
    "on-hold": {
        label: "On Hold",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"],
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/finance-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/hr.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:0bde21 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00fb1974db4910a06692cbc98c72389e0904392988":"getEmployees"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "getEmployees",
    ()=>getEmployees
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getEmployees = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00fb1974db4910a06692cbc98c72389e0904392988", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getEmployees"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRU1QTE9ZRUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGVtcGxveWVlcyA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xuICAgICAgaWQ6IGUuaWQsXG4gICAgICBmaXJzdE5hbWU6IGUuZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXG4gICAgICBlbWFpbDogZS5lbWFpbCxcbiAgICAgIHBob25lOiBlLnBob25lLFxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxuICAgICAgam9iVGl0bGU6IGUuam9iVGl0bGUsXG4gICAgICBkZXBhcnRtZW50OiBlLmRlcGFydG1lbnQsXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcbiAgICAgIHN0YXR1czogZS5zdGF0dXMsXG4gICAgICBtYW5hZ2VySWQ6IGUubWFuYWdlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0RGF0ZTogZS5zdGFydERhdGUsXG4gICAgICBlbmREYXRlOiBlLmVuZERhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcbiAgICAgIHNhbGFyeTogZS5zYWxhcnksXG4gICAgICBjdXJyZW5jeTogZS5jdXJyZW5jeSxcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXG4gICAgICBza2lsbHM6IGUuc2tpbGxzIGFzIGFueVtdLFxuICAgICAgeWVhcnNPZkV4cGVyaWVuY2U6IGUueWVhcnNPZkV4cGVyaWVuY2UsXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcbiAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBlLnBlcmZvcm1hbmNlUmF0aW5nLFxuICAgICAgZG9jdW1lbnRzOiBlLmRvY3VtZW50cyBhcyBhbnlbXSxcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlLmVtZXJnZW5jeUNvbnRhY3RzIGFzIGFueVtdLFxuICAgICAgbGVhdmVCYWxhbmNlOiBlLmxlYXZlQmFsYW5jZSBhcyBhbnksXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGUudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGVtcGxveWVlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGVtcGxveWVlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xuICBmaXJzdE5hbWU6IHN0cmluZ1xuICBsYXN0TmFtZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgcGhvbmU/OiBzdHJpbmdcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIGpvYlRpdGxlOiBzdHJpbmdcbiAgZGVwYXJ0bWVudDogc3RyaW5nXG4gIGVtcGxveW1lbnRUeXBlPzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBtYW5hZ2VySWQ/OiBzdHJpbmdcbiAgbWFuYWdlck5hbWU/OiBzdHJpbmdcbiAgc3RhcnREYXRlOiBzdHJpbmdcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXG4gIHNhbGFyeT86IG51bWJlclxuICBjdXJyZW5jeT86IHN0cmluZ1xuICBwYXlGcmVxdWVuY3k/OiBzdHJpbmdcbiAgc2tpbGxzPzogYW55W11cbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcbiAgY2VydGlmaWNhdGlvbnM/OiBzdHJpbmdbXVxuICBwZXJmb3JtYW5jZVJhdGluZz86IG51bWJlclxuICBkb2N1bWVudHM/OiBhbnlbXVxuICBjYXJlZXJIaXN0b3J5PzogYW55W11cbiAgZW1lcmdlbmN5Q29udGFjdHM/OiBhbnlbXVxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXG4gICAgICAgIGpvYlRpdGxlOiBkYXRhLmpvYlRpdGxlLFxuICAgICAgICBkZXBhcnRtZW50OiBkYXRhLmRlcGFydG1lbnQsXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgbWFuYWdlcklkOiBkYXRhLm1hbmFnZXJJZCB8fCBudWxsLFxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICB3b3JrTG9jYXRpb246IGRhdGEud29ya0xvY2F0aW9uIHx8IFwiUmVtb3RlXCIsXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgcGF5RnJlcXVlbmN5OiBkYXRhLnBheUZyZXF1ZW5jeSB8fCBcIm1vbnRobHlcIixcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcbiAgICAgICAgeWVhcnNPZkV4cGVyaWVuY2U6IGRhdGEueWVhcnNPZkV4cGVyaWVuY2UgfHwgMCxcbiAgICAgICAgY2VydGlmaWNhdGlvbnM6IChkYXRhLmNlcnRpZmljYXRpb25zIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXG4gICAgICAgIGRvY3VtZW50czogKGRhdGEuZG9jdW1lbnRzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGNhcmVlckhpc3Rvcnk6IChkYXRhLmNhcmVlckhpc3RvcnkgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGxlYXZlQmFsYW5jZTogKGRhdGEubGVhdmVCYWxhbmNlIHx8IHt9KSBhcyBhbnksXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVtcGxveWVlLFxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxuICAgICAgbWFuYWdlck5hbWU6IGVtcGxveWVlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIGVuZERhdGU6IGVtcGxveWVlLmVuZERhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZW1wbG95ZWUuY2VydGlmaWNhdGlvbnMgYXMgc3RyaW5nW10sXG4gICAgICBkb2N1bWVudHM6IGVtcGxveWVlLmRvY3VtZW50cyBhcyBhbnlbXSxcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogZW1wbG95ZWUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXG4gICAgICBsZWF2ZUJhbGFuY2U6IGVtcGxveWVlLmxlYXZlQmFsYW5jZSBhcyBhbnksXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBlbXBsb3llZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGVtcGxveWVlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGVtcGxveWVlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZW1wbG95ZWUsXG4gICAgICBtYW5hZ2VySWQ6IGVtcGxveWVlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgZW5kRGF0ZTogZW1wbG95ZWUuZW5kRGF0ZSB8fCB1bmRlZmluZWQsXG4gICAgICBza2lsbHM6IGVtcGxveWVlLnNraWxscyBhcyBhbnlbXSxcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcbiAgICAgIGRvY3VtZW50czogZW1wbG95ZWUuZG9jdW1lbnRzIGFzIGFueVtdLFxuICAgICAgY2FyZWVySGlzdG9yeTogZW1wbG95ZWUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcbiAgICAgIGxlYXZlQmFsYW5jZTogZW1wbG95ZWUubGVhdmVCYWxhbmNlIGFzIGFueSxcbiAgICAgIGNyZWF0ZWRBdDogZW1wbG95ZWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgZW1wbG95ZWVcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUVtcGxveWVlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgZW1wbG95ZWVcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gY2FuZGlkYXRlcy5tYXAoKGMpID0+ICh7XG4gICAgICBpZDogYy5pZCxcbiAgICAgIGZpcnN0TmFtZTogYy5maXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZTogYy5sYXN0TmFtZSxcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxuICAgICAgcGhvbmU6IGMucGhvbmUsXG4gICAgICBwb3NpdGlvbjogYy5wb3NpdGlvbixcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcbiAgICAgIHN0YWdlOiBjLnN0YWdlLFxuICAgICAgc291cmNlOiBjLnNvdXJjZSxcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXG4gICAgICBub3RlczogYy5ub3RlcyBhcyBzdHJpbmdbXSxcbiAgICAgIGludGVydmlld3M6IGMuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXG4gICAgICBleHBlY3RlZFNhbGFyeTogYy5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXG4gICAgICBhdmFpbGFibGVGcm9tOiBjLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGNhbmRpZGF0ZXNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhbmRpZGF0ZShkYXRhOiB7XG4gIGZpcnN0TmFtZTogc3RyaW5nXG4gIGxhc3ROYW1lOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBwaG9uZT86IHN0cmluZ1xuICBwb3NpdGlvbjogc3RyaW5nXG4gIGRlcGFydG1lbnQ6IHN0cmluZ1xuICBzdGFnZT86IHN0cmluZ1xuICBzb3VyY2U/OiBzdHJpbmdcbiAgYXBwbGllZEF0OiBzdHJpbmdcbiAgc2tpbGxzPzogc3RyaW5nW11cbiAgZXhwZWN0ZWRTYWxhcnk/OiBudW1iZXJcbiAgYXZhaWxhYmxlRnJvbT86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcbiAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcbiAgICAgICAgc3RhZ2U6IGRhdGEuc3RhZ2UgfHwgXCJhcHBsaWVkXCIsXG4gICAgICAgIHNvdXJjZTogZGF0YS5zb3VyY2UgfHwgXCJcIixcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZXhwZWN0ZWRTYWxhcnk6IGRhdGEuZXhwZWN0ZWRTYWxhcnkgfHwgbnVsbCxcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgIG5vdGVzOiBjYW5kaWRhdGUubm90ZXMgYXMgc3RyaW5nW10sXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgYXZhaWxhYmxlRnJvbTogY2FuZGlkYXRlLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNhbmRpZGF0ZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgIG5vdGVzOiBjYW5kaWRhdGUubm90ZXMgYXMgc3RyaW5nW10sXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgYXZhaWxhYmxlRnJvbTogY2FuZGlkYXRlLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBMRUFWRSBSRVFVRVNUIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBwcmlzbWEudGVhbUxlYXZlUmVxdWVzdC5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcbiAgICAgIGlkOiByLmlkLFxuICAgICAgZW1wbG95ZWVJZDogci5lbXBsb3llZUlkLFxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcbiAgICAgIGxlYXZlVHlwZTogci5sZWF2ZVR5cGUgYXMgYW55LFxuICAgICAgc3RhcnREYXRlOiByLnN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcbiAgICAgIHRvdGFsRGF5czogci50b3RhbERheXMsXG4gICAgICByZWFzb246IHIucmVhc29uLFxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXG4gICAgICBhcHByb3ZlcklkOiByLmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZXJOYW1lOiByLmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByLnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXG4gICAgICBjcmVhdGVkQXQ6IHIuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGxlYXZlIHJlcXVlc3RzOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxlYXZlUmVxdWVzdChkYXRhOiB7XG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xuICBsZWF2ZVR5cGU6IHN0cmluZ1xuICBzdGFydERhdGU6IHN0cmluZ1xuICBlbmREYXRlOiBzdHJpbmdcbiAgdG90YWxEYXlzOiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRhLmVuZERhdGUsXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXG4gICAgICAgIHJlYXNvbjogZGF0YS5yZWFzb24sXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICBsZWF2ZVR5cGU6IHJlcXVlc3QubGVhdmVUeXBlIGFzIGFueSxcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGFwcHJvdmVyTmFtZTogcmVxdWVzdC5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiByZXF1ZXN0LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhdmUgcmVxdWVzdDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBwcmlzbWEudGVhbUxlYXZlUmVxdWVzdC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICBsZWF2ZVR5cGU6IHJlcXVlc3QubGVhdmVUeXBlIGFzIGFueSxcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGFwcHJvdmVyTmFtZTogcmVxdWVzdC5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiByZXF1ZXN0LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgbGVhdmUgcmVxdWVzdDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IEFUVEVOREFOQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHByaXNtYS50ZWFtQXR0ZW5kYW5jZVJlY29yZC5maW5kTWFueSh7IG9yZGVyQnk6IHsgbWFya2VkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XG4gICAgICBpZDogci5pZCxcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXG4gICAgICBkYXRlOiByLmRhdGUsXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXG4gICAgICBjbG9ja091dDogci5jbG9ja091dCB8fCB1bmRlZmluZWQsXG4gICAgICBicmVha01pbnV0ZXM6IHIuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXG4gICAgICB3b3JrTG9jYXRpb246IHIud29ya0xvY2F0aW9uIHx8IHVuZGVmaW5lZCxcbiAgICAgIG5vdGVzOiByLm5vdGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGF0dGVuZGFuY2UgcmVjb3Jkc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXR0ZW5kYW5jZVJlY29yZChkYXRhOiB7XG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xuICBkYXRlOiBzdHJpbmdcbiAgc3RhdHVzOiBzdHJpbmdcbiAgY2xvY2tJbj86IHN0cmluZ1xuICBjbG9ja091dD86IHN0cmluZ1xuICBicmVha01pbnV0ZXM/OiBudW1iZXJcbiAgdG90YWxIb3Vycz86IG51bWJlclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxuICAgICAgICBjbG9ja091dDogZGF0YS5jbG9ja091dCB8fCBudWxsLFxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxuICAgICAgICB3b3JrTG9jYXRpb246IGRhdGEud29ya0xvY2F0aW9uIHx8IG51bGwsXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlY29yZCxcbiAgICAgIHN0YXR1czogcmVjb3JkLnN0YXR1cyBhcyBhbnksXG4gICAgICBjbG9ja0luOiByZWNvcmQuY2xvY2tJbiB8fCB1bmRlZmluZWQsXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcbiAgICAgIGJyZWFrTWludXRlczogcmVjb3JkLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXG4gICAgICB0b3RhbEhvdXJzOiByZWNvcmQudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxuICAgICAgbm90ZXM6IHJlY29yZC5ub3RlcyB8fCB1bmRlZmluZWQsXG4gICAgICBtYXJrZWRBdDogcmVjb3JkLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBhdHRlbmRhbmNlIHJlY29yZDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXR0ZW5kYW5jZVJlY29yZChpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVjb3JkLFxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNsb2NrSW46IHJlY29yZC5jbG9ja0luIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNsb2NrT3V0OiByZWNvcmQuY2xvY2tPdXQgfHwgdW5kZWZpbmVkLFxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsSG91cnM6IHJlY29yZC50b3RhbEhvdXJzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHdvcmtMb2NhdGlvbjogcmVjb3JkLndvcmtMb2NhdGlvbiB8fCB1bmRlZmluZWQsXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hcmtlZEF0OiByZWNvcmQubWFya2VkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGF0dGVuZGFuY2UgcmVjb3JkOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGF0dGVuZGFuY2UgcmVjb3JkXCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPS1JzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG9rcnMgPSBhd2FpdCBwcmlzbWEudGVhbU9LUi5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIG9rcnMubWFwKChvKSA9PiAoe1xuICAgICAgaWQ6IG8uaWQsXG4gICAgICBlbXBsb3llZUlkOiBvLmVtcGxveWVlSWQsXG4gICAgICB0aXRsZTogby50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxuICAgICAgcXVhcnRlcjogby5xdWFydGVyLFxuICAgICAga2V5UmVzdWx0czogby5rZXlSZXN1bHRzIGFzIGFueVtdLFxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcbiAgICAgIHN0YXR1czogby5zdGF0dXMgYXMgYW55LFxuICAgICAgcGFyZW50T0tSSWQ6IG8ucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBvLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBPS1JzOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggT0tSc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgcXVhcnRlcjogc3RyaW5nXG4gIGtleVJlc3VsdHM/OiBhbnlbXVxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcbiAgc3RhdHVzPzogc3RyaW5nXG4gIHBhcmVudE9LUklkPzogc3RyaW5nXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgICAgcXVhcnRlcjogZGF0YS5xdWFydGVyLFxuICAgICAgICBrZXlSZXN1bHRzOiAoZGF0YS5rZXlSZXN1bHRzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcIm9uLXRyYWNrXCIsXG4gICAgICAgIHBhcmVudE9LUklkOiBkYXRhLnBhcmVudE9LUklkIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9rcixcbiAgICAgIGtleVJlc3VsdHM6IG9rci5rZXlSZXN1bHRzIGFzIGFueVtdLFxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiBva3IuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIE9LUjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU9LUihpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5va3IsXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXG4gICAgICBwYXJlbnRPS1JJZDogb2tyLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBPS1I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgT0tSXCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZXJmb3JtYW5jZVJldmlld3MoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmV2aWV3cyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxuICAgIHJldHVybiByZXZpZXdzLm1hcCgocikgPT4gKHtcbiAgICAgIGlkOiByLmlkLFxuICAgICAgZW1wbG95ZWVJZDogci5lbXBsb3llZUlkLFxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcbiAgICAgIHJldmlld2VyTmFtZTogci5yZXZpZXdlck5hbWUsXG4gICAgICBwZXJpb2Q6IHIucGVyaW9kLFxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXG4gICAgICBvdmVyYWxsUmF0aW5nOiByLm92ZXJhbGxSYXRpbmcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcbiAgICAgIHN0cmVuZ3Roczogci5zdHJlbmd0aHMgYXMgc3RyaW5nW10sXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByLmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcbiAgICAgIHNhbGFyeUNoYW5nZTogci5zYWxhcnlDaGFuZ2UgfHwgdW5kZWZpbmVkLFxuICAgICAgcHJvbW90aW9uUmVjb21tZW5kZWQ6IHIucHJvbW90aW9uUmVjb21tZW5kZWQsXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGVyZm9ybWFuY2UgcmV2aWV3czpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHBlcmZvcm1hbmNlIHJldmlld3NcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXG4gIHJldmlld2VySWQ6IHN0cmluZ1xuICByZXZpZXdlck5hbWU6IHN0cmluZ1xuICBwZXJpb2Q6IHN0cmluZ1xuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG4gIG92ZXJhbGxSYXRpbmc/OiBudW1iZXJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxuICBzdHJlbmd0aHM/OiBzdHJpbmdbXVxuICBhcmVhc0ZvckltcHJvdmVtZW50Pzogc3RyaW5nW11cbiAgZ29hbHM/OiBzdHJpbmdbXVxuICBzYWxhcnlDaGFuZ2U/OiBudW1iZXJcbiAgcHJvbW90aW9uUmVjb21tZW5kZWQ/OiBib29sZWFuXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxuICBjb21wbGV0ZWRBdD86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICByZXZpZXdlcklkOiBkYXRhLnJldmlld2VySWQsXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXG4gICAgICAgIHBlcmlvZDogZGF0YS5wZXJpb2QsXG4gICAgICAgIHNjaGVkdWxlZERhdGU6IGRhdGEuc2NoZWR1bGVkRGF0ZSxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxuICAgICAgICBvdmVyYWxsUmF0aW5nOiBkYXRhLm92ZXJhbGxSYXRpbmcgfHwgMCxcbiAgICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IChkYXRhLmNvbXBldGVuY3lSYXRpbmdzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGFyZWFzRm9ySW1wcm92ZW1lbnQ6IChkYXRhLmFyZWFzRm9ySW1wcm92ZW1lbnQgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZ29hbHM6IChkYXRhLmdvYWxzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcbiAgICAgICAgcHJvbW90aW9uUmVjb21tZW5kZWQ6IGRhdGEucHJvbW90aW9uUmVjb21tZW5kZWQgfHwgZmFsc2UsXG4gICAgICAgIHBpcFJlcXVpcmVkOiBkYXRhLnBpcFJlcXVpcmVkIHx8IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXZpZXcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogcmV2aWV3LmNvbXBldGVuY3lSYXRpbmdzIGFzIGFueVtdLFxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogcmV2aWV3LmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2FsczogcmV2aWV3LmdvYWxzIGFzIHN0cmluZ1tdLFxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByZXZpZXcuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcGVyZm9ybWFuY2UgcmV2aWV3OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHBlcmZvcm1hbmNlIHJldmlld1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICB0cnkge1xuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXZpZXcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogcmV2aWV3LmNvbXBldGVuY3lSYXRpbmdzIGFzIGFueVtdLFxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogcmV2aWV3LmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2FsczogcmV2aWV3LmdvYWxzIGFzIHN0cmluZ1tdLFxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByZXZpZXcuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcGVyZm9ybWFuY2UgcmV2aWV3OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHBlcmZvcm1hbmNlIHJldmlld1wiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhaW5pbmdDb3Vyc2VzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBwcmlzbWEudGVhbVRyYWluaW5nQ291cnNlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gY291cnNlcy5tYXAoKGMpID0+ICh7XG4gICAgICBpZDogYy5pZCxcbiAgICAgIHRpdGxlOiBjLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGMuZGVzY3JpcHRpb24sXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxuICAgICAgY2F0ZWdvcnk6IGMuY2F0ZWdvcnkgYXMgYW55LFxuICAgICAgZHVyYXRpb246IGMuZHVyYXRpb24sXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcbiAgICAgIGZvcm1hdDogYy5mb3JtYXQgYXMgYW55LFxuICAgICAgY2VydGlmaWNhdGlvbkV4cGlyeTogYy5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJhaW5pbmcgY291cnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRyYWluaW5nQ291cnNlKGRhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIGR1cmF0aW9uPzogbnVtYmVyXG4gIHByb3ZpZGVyPzogc3RyaW5nXG4gIGZvcm1hdD86IHN0cmluZ1xuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgICAgdHlwZTogZGF0YS50eXBlIHx8IFwib3B0aW9uYWxcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJ0ZWNobmljYWxcIixcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcbiAgICAgICAgcHJvdmlkZXI6IGRhdGEucHJvdmlkZXIgfHwgXCJcIixcbiAgICAgICAgZm9ybWF0OiBkYXRhLmZvcm1hdCB8fCBcIm9ubGluZVwiLFxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY291cnNlLFxuICAgICAgdHlwZTogY291cnNlLnR5cGUgYXMgYW55LFxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXG4gICAgICBmb3JtYXQ6IGNvdXJzZS5mb3JtYXQgYXMgYW55LFxuICAgICAgY2VydGlmaWNhdGlvbkV4cGlyeTogY291cnNlLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgdHJhaW5pbmcgY291cnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBDT1VSU0UgRU5ST0xMTUVOVCBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnJvbGxtZW50cyA9IGF3YWl0IHByaXNtYS50ZWFtQ291cnNlRW5yb2xsbWVudC5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcbiAgICAgIGlkOiBlLmlkLFxuICAgICAgY291cnNlSWQ6IGUuY291cnNlSWQsXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXG4gICAgICBlbXBsb3llZUlkOiBlLmVtcGxveWVlSWQsXG4gICAgICBzdGF0dXM6IGUuc3RhdHVzIGFzIGFueSxcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxuICAgICAgZW5yb2xsZWRBdDogZS5lbnJvbGxlZEF0LFxuICAgICAgY29tcGxldGVkQXQ6IGUuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxuICAgICAgY2VydGlmaWNhdGVVcmw6IGUuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb3Vyc2UgZW5yb2xsbWVudHM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBjb3Vyc2UgZW5yb2xsbWVudHNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xuICBjb3Vyc2VJZDogc3RyaW5nXG4gIGNvdXJzZU5hbWU6IHN0cmluZ1xuICBlbXBsb3llZUlkOiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG4gIHByb2dyZXNzPzogbnVtYmVyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY291cnNlSWQ6IGRhdGEuY291cnNlSWQsXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwiZW5yb2xsZWRcIixcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgZW5yb2xsZWRBdDogZGF0YS5lbnJvbGxlZEF0LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5lbnJvbGxtZW50LFxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXG4gICAgICBzY29yZTogZW5yb2xsbWVudC5zY29yZSB8fCB1bmRlZmluZWQsXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlRW5yb2xsbWVudChpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW5yb2xsbWVudCA9IGF3YWl0IHByaXNtYS50ZWFtQ291cnNlRW5yb2xsbWVudC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVucm9sbG1lbnQsXG4gICAgICBzdGF0dXM6IGVucm9sbG1lbnQuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNlcnRpZmljYXRlVXJsOiBlbnJvbGxtZW50LmNlcnRpZmljYXRlVXJsIHx8IHVuZGVmaW5lZCxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNvdXJzZSBlbnJvbGxtZW50OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlSQVFzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:7c12da [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001eb6bca3fe26cfa507c721d4988d8545cd76b54a":"getAttendanceRecords"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "getAttendanceRecords",
    ()=>getAttendanceRecords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getAttendanceRecords = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("001eb6bca3fe26cfa507c721d4988d8545cd76b54a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAttendanceRecords"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRU1QTE9ZRUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGVtcGxveWVlcyA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xuICAgICAgaWQ6IGUuaWQsXG4gICAgICBmaXJzdE5hbWU6IGUuZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXG4gICAgICBlbWFpbDogZS5lbWFpbCxcbiAgICAgIHBob25lOiBlLnBob25lLFxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxuICAgICAgam9iVGl0bGU6IGUuam9iVGl0bGUsXG4gICAgICBkZXBhcnRtZW50OiBlLmRlcGFydG1lbnQsXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcbiAgICAgIHN0YXR1czogZS5zdGF0dXMsXG4gICAgICBtYW5hZ2VySWQ6IGUubWFuYWdlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0RGF0ZTogZS5zdGFydERhdGUsXG4gICAgICBlbmREYXRlOiBlLmVuZERhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcbiAgICAgIHNhbGFyeTogZS5zYWxhcnksXG4gICAgICBjdXJyZW5jeTogZS5jdXJyZW5jeSxcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXG4gICAgICBza2lsbHM6IGUuc2tpbGxzIGFzIGFueVtdLFxuICAgICAgeWVhcnNPZkV4cGVyaWVuY2U6IGUueWVhcnNPZkV4cGVyaWVuY2UsXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcbiAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBlLnBlcmZvcm1hbmNlUmF0aW5nLFxuICAgICAgZG9jdW1lbnRzOiBlLmRvY3VtZW50cyBhcyBhbnlbXSxcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlLmVtZXJnZW5jeUNvbnRhY3RzIGFzIGFueVtdLFxuICAgICAgbGVhdmVCYWxhbmNlOiBlLmxlYXZlQmFsYW5jZSBhcyBhbnksXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGUudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGVtcGxveWVlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGVtcGxveWVlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xuICBmaXJzdE5hbWU6IHN0cmluZ1xuICBsYXN0TmFtZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgcGhvbmU/OiBzdHJpbmdcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIGpvYlRpdGxlOiBzdHJpbmdcbiAgZGVwYXJ0bWVudDogc3RyaW5nXG4gIGVtcGxveW1lbnRUeXBlPzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBtYW5hZ2VySWQ/OiBzdHJpbmdcbiAgbWFuYWdlck5hbWU/OiBzdHJpbmdcbiAgc3RhcnREYXRlOiBzdHJpbmdcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXG4gIHNhbGFyeT86IG51bWJlclxuICBjdXJyZW5jeT86IHN0cmluZ1xuICBwYXlGcmVxdWVuY3k/OiBzdHJpbmdcbiAgc2tpbGxzPzogYW55W11cbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcbiAgY2VydGlmaWNhdGlvbnM/OiBzdHJpbmdbXVxuICBwZXJmb3JtYW5jZVJhdGluZz86IG51bWJlclxuICBkb2N1bWVudHM/OiBhbnlbXVxuICBjYXJlZXJIaXN0b3J5PzogYW55W11cbiAgZW1lcmdlbmN5Q29udGFjdHM/OiBhbnlbXVxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXG4gICAgICAgIGpvYlRpdGxlOiBkYXRhLmpvYlRpdGxlLFxuICAgICAgICBkZXBhcnRtZW50OiBkYXRhLmRlcGFydG1lbnQsXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgbWFuYWdlcklkOiBkYXRhLm1hbmFnZXJJZCB8fCBudWxsLFxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICB3b3JrTG9jYXRpb246IGRhdGEud29ya0xvY2F0aW9uIHx8IFwiUmVtb3RlXCIsXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgcGF5RnJlcXVlbmN5OiBkYXRhLnBheUZyZXF1ZW5jeSB8fCBcIm1vbnRobHlcIixcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcbiAgICAgICAgeWVhcnNPZkV4cGVyaWVuY2U6IGRhdGEueWVhcnNPZkV4cGVyaWVuY2UgfHwgMCxcbiAgICAgICAgY2VydGlmaWNhdGlvbnM6IChkYXRhLmNlcnRpZmljYXRpb25zIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXG4gICAgICAgIGRvY3VtZW50czogKGRhdGEuZG9jdW1lbnRzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGNhcmVlckhpc3Rvcnk6IChkYXRhLmNhcmVlckhpc3RvcnkgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGxlYXZlQmFsYW5jZTogKGRhdGEubGVhdmVCYWxhbmNlIHx8IHt9KSBhcyBhbnksXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVtcGxveWVlLFxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxuICAgICAgbWFuYWdlck5hbWU6IGVtcGxveWVlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIGVuZERhdGU6IGVtcGxveWVlLmVuZERhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZW1wbG95ZWUuY2VydGlmaWNhdGlvbnMgYXMgc3RyaW5nW10sXG4gICAgICBkb2N1bWVudHM6IGVtcGxveWVlLmRvY3VtZW50cyBhcyBhbnlbXSxcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogZW1wbG95ZWUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXG4gICAgICBsZWF2ZUJhbGFuY2U6IGVtcGxveWVlLmxlYXZlQmFsYW5jZSBhcyBhbnksXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBlbXBsb3llZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGVtcGxveWVlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGVtcGxveWVlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZW1wbG95ZWUsXG4gICAgICBtYW5hZ2VySWQ6IGVtcGxveWVlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgZW5kRGF0ZTogZW1wbG95ZWUuZW5kRGF0ZSB8fCB1bmRlZmluZWQsXG4gICAgICBza2lsbHM6IGVtcGxveWVlLnNraWxscyBhcyBhbnlbXSxcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcbiAgICAgIGRvY3VtZW50czogZW1wbG95ZWUuZG9jdW1lbnRzIGFzIGFueVtdLFxuICAgICAgY2FyZWVySGlzdG9yeTogZW1wbG95ZWUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcbiAgICAgIGxlYXZlQmFsYW5jZTogZW1wbG95ZWUubGVhdmVCYWxhbmNlIGFzIGFueSxcbiAgICAgIGNyZWF0ZWRBdDogZW1wbG95ZWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgZW1wbG95ZWVcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUVtcGxveWVlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgZW1wbG95ZWVcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gY2FuZGlkYXRlcy5tYXAoKGMpID0+ICh7XG4gICAgICBpZDogYy5pZCxcbiAgICAgIGZpcnN0TmFtZTogYy5maXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZTogYy5sYXN0TmFtZSxcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxuICAgICAgcGhvbmU6IGMucGhvbmUsXG4gICAgICBwb3NpdGlvbjogYy5wb3NpdGlvbixcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcbiAgICAgIHN0YWdlOiBjLnN0YWdlLFxuICAgICAgc291cmNlOiBjLnNvdXJjZSxcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXG4gICAgICBub3RlczogYy5ub3RlcyBhcyBzdHJpbmdbXSxcbiAgICAgIGludGVydmlld3M6IGMuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXG4gICAgICBleHBlY3RlZFNhbGFyeTogYy5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXG4gICAgICBhdmFpbGFibGVGcm9tOiBjLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGNhbmRpZGF0ZXNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhbmRpZGF0ZShkYXRhOiB7XG4gIGZpcnN0TmFtZTogc3RyaW5nXG4gIGxhc3ROYW1lOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBwaG9uZT86IHN0cmluZ1xuICBwb3NpdGlvbjogc3RyaW5nXG4gIGRlcGFydG1lbnQ6IHN0cmluZ1xuICBzdGFnZT86IHN0cmluZ1xuICBzb3VyY2U/OiBzdHJpbmdcbiAgYXBwbGllZEF0OiBzdHJpbmdcbiAgc2tpbGxzPzogc3RyaW5nW11cbiAgZXhwZWN0ZWRTYWxhcnk/OiBudW1iZXJcbiAgYXZhaWxhYmxlRnJvbT86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcbiAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcbiAgICAgICAgc3RhZ2U6IGRhdGEuc3RhZ2UgfHwgXCJhcHBsaWVkXCIsXG4gICAgICAgIHNvdXJjZTogZGF0YS5zb3VyY2UgfHwgXCJcIixcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZXhwZWN0ZWRTYWxhcnk6IGRhdGEuZXhwZWN0ZWRTYWxhcnkgfHwgbnVsbCxcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgIG5vdGVzOiBjYW5kaWRhdGUubm90ZXMgYXMgc3RyaW5nW10sXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgYXZhaWxhYmxlRnJvbTogY2FuZGlkYXRlLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNhbmRpZGF0ZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgIG5vdGVzOiBjYW5kaWRhdGUubm90ZXMgYXMgc3RyaW5nW10sXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgYXZhaWxhYmxlRnJvbTogY2FuZGlkYXRlLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBMRUFWRSBSRVFVRVNUIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBwcmlzbWEudGVhbUxlYXZlUmVxdWVzdC5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcbiAgICAgIGlkOiByLmlkLFxuICAgICAgZW1wbG95ZWVJZDogci5lbXBsb3llZUlkLFxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcbiAgICAgIGxlYXZlVHlwZTogci5sZWF2ZVR5cGUgYXMgYW55LFxuICAgICAgc3RhcnREYXRlOiByLnN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcbiAgICAgIHRvdGFsRGF5czogci50b3RhbERheXMsXG4gICAgICByZWFzb246IHIucmVhc29uLFxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXG4gICAgICBhcHByb3ZlcklkOiByLmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZXJOYW1lOiByLmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByLnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXG4gICAgICBjcmVhdGVkQXQ6IHIuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGxlYXZlIHJlcXVlc3RzOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxlYXZlUmVxdWVzdChkYXRhOiB7XG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xuICBsZWF2ZVR5cGU6IHN0cmluZ1xuICBzdGFydERhdGU6IHN0cmluZ1xuICBlbmREYXRlOiBzdHJpbmdcbiAgdG90YWxEYXlzOiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRhLmVuZERhdGUsXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXG4gICAgICAgIHJlYXNvbjogZGF0YS5yZWFzb24sXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICBsZWF2ZVR5cGU6IHJlcXVlc3QubGVhdmVUeXBlIGFzIGFueSxcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGFwcHJvdmVyTmFtZTogcmVxdWVzdC5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiByZXF1ZXN0LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhdmUgcmVxdWVzdDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBwcmlzbWEudGVhbUxlYXZlUmVxdWVzdC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICBsZWF2ZVR5cGU6IHJlcXVlc3QubGVhdmVUeXBlIGFzIGFueSxcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGFwcHJvdmVyTmFtZTogcmVxdWVzdC5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiByZXF1ZXN0LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgbGVhdmUgcmVxdWVzdDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IEFUVEVOREFOQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHByaXNtYS50ZWFtQXR0ZW5kYW5jZVJlY29yZC5maW5kTWFueSh7IG9yZGVyQnk6IHsgbWFya2VkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XG4gICAgICBpZDogci5pZCxcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXG4gICAgICBkYXRlOiByLmRhdGUsXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXG4gICAgICBjbG9ja091dDogci5jbG9ja091dCB8fCB1bmRlZmluZWQsXG4gICAgICBicmVha01pbnV0ZXM6IHIuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXG4gICAgICB3b3JrTG9jYXRpb246IHIud29ya0xvY2F0aW9uIHx8IHVuZGVmaW5lZCxcbiAgICAgIG5vdGVzOiByLm5vdGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGF0dGVuZGFuY2UgcmVjb3Jkc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXR0ZW5kYW5jZVJlY29yZChkYXRhOiB7XG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xuICBkYXRlOiBzdHJpbmdcbiAgc3RhdHVzOiBzdHJpbmdcbiAgY2xvY2tJbj86IHN0cmluZ1xuICBjbG9ja091dD86IHN0cmluZ1xuICBicmVha01pbnV0ZXM/OiBudW1iZXJcbiAgdG90YWxIb3Vycz86IG51bWJlclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxuICAgICAgICBjbG9ja091dDogZGF0YS5jbG9ja091dCB8fCBudWxsLFxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxuICAgICAgICB3b3JrTG9jYXRpb246IGRhdGEud29ya0xvY2F0aW9uIHx8IG51bGwsXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlY29yZCxcbiAgICAgIHN0YXR1czogcmVjb3JkLnN0YXR1cyBhcyBhbnksXG4gICAgICBjbG9ja0luOiByZWNvcmQuY2xvY2tJbiB8fCB1bmRlZmluZWQsXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcbiAgICAgIGJyZWFrTWludXRlczogcmVjb3JkLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXG4gICAgICB0b3RhbEhvdXJzOiByZWNvcmQudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxuICAgICAgbm90ZXM6IHJlY29yZC5ub3RlcyB8fCB1bmRlZmluZWQsXG4gICAgICBtYXJrZWRBdDogcmVjb3JkLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBhdHRlbmRhbmNlIHJlY29yZDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXR0ZW5kYW5jZVJlY29yZChpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVjb3JkLFxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNsb2NrSW46IHJlY29yZC5jbG9ja0luIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNsb2NrT3V0OiByZWNvcmQuY2xvY2tPdXQgfHwgdW5kZWZpbmVkLFxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsSG91cnM6IHJlY29yZC50b3RhbEhvdXJzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHdvcmtMb2NhdGlvbjogcmVjb3JkLndvcmtMb2NhdGlvbiB8fCB1bmRlZmluZWQsXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hcmtlZEF0OiByZWNvcmQubWFya2VkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGF0dGVuZGFuY2UgcmVjb3JkOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGF0dGVuZGFuY2UgcmVjb3JkXCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPS1JzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG9rcnMgPSBhd2FpdCBwcmlzbWEudGVhbU9LUi5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIG9rcnMubWFwKChvKSA9PiAoe1xuICAgICAgaWQ6IG8uaWQsXG4gICAgICBlbXBsb3llZUlkOiBvLmVtcGxveWVlSWQsXG4gICAgICB0aXRsZTogby50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxuICAgICAgcXVhcnRlcjogby5xdWFydGVyLFxuICAgICAga2V5UmVzdWx0czogby5rZXlSZXN1bHRzIGFzIGFueVtdLFxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcbiAgICAgIHN0YXR1czogby5zdGF0dXMgYXMgYW55LFxuICAgICAgcGFyZW50T0tSSWQ6IG8ucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBvLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBPS1JzOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggT0tSc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgcXVhcnRlcjogc3RyaW5nXG4gIGtleVJlc3VsdHM/OiBhbnlbXVxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcbiAgc3RhdHVzPzogc3RyaW5nXG4gIHBhcmVudE9LUklkPzogc3RyaW5nXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgICAgcXVhcnRlcjogZGF0YS5xdWFydGVyLFxuICAgICAgICBrZXlSZXN1bHRzOiAoZGF0YS5rZXlSZXN1bHRzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcIm9uLXRyYWNrXCIsXG4gICAgICAgIHBhcmVudE9LUklkOiBkYXRhLnBhcmVudE9LUklkIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9rcixcbiAgICAgIGtleVJlc3VsdHM6IG9rci5rZXlSZXN1bHRzIGFzIGFueVtdLFxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiBva3IuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIE9LUjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU9LUihpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5va3IsXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXG4gICAgICBwYXJlbnRPS1JJZDogb2tyLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBPS1I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgT0tSXCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZXJmb3JtYW5jZVJldmlld3MoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmV2aWV3cyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxuICAgIHJldHVybiByZXZpZXdzLm1hcCgocikgPT4gKHtcbiAgICAgIGlkOiByLmlkLFxuICAgICAgZW1wbG95ZWVJZDogci5lbXBsb3llZUlkLFxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcbiAgICAgIHJldmlld2VyTmFtZTogci5yZXZpZXdlck5hbWUsXG4gICAgICBwZXJpb2Q6IHIucGVyaW9kLFxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXG4gICAgICBvdmVyYWxsUmF0aW5nOiByLm92ZXJhbGxSYXRpbmcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcbiAgICAgIHN0cmVuZ3Roczogci5zdHJlbmd0aHMgYXMgc3RyaW5nW10sXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByLmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcbiAgICAgIHNhbGFyeUNoYW5nZTogci5zYWxhcnlDaGFuZ2UgfHwgdW5kZWZpbmVkLFxuICAgICAgcHJvbW90aW9uUmVjb21tZW5kZWQ6IHIucHJvbW90aW9uUmVjb21tZW5kZWQsXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGVyZm9ybWFuY2UgcmV2aWV3czpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHBlcmZvcm1hbmNlIHJldmlld3NcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXG4gIHJldmlld2VySWQ6IHN0cmluZ1xuICByZXZpZXdlck5hbWU6IHN0cmluZ1xuICBwZXJpb2Q6IHN0cmluZ1xuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG4gIG92ZXJhbGxSYXRpbmc/OiBudW1iZXJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxuICBzdHJlbmd0aHM/OiBzdHJpbmdbXVxuICBhcmVhc0ZvckltcHJvdmVtZW50Pzogc3RyaW5nW11cbiAgZ29hbHM/OiBzdHJpbmdbXVxuICBzYWxhcnlDaGFuZ2U/OiBudW1iZXJcbiAgcHJvbW90aW9uUmVjb21tZW5kZWQ/OiBib29sZWFuXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxuICBjb21wbGV0ZWRBdD86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICByZXZpZXdlcklkOiBkYXRhLnJldmlld2VySWQsXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXG4gICAgICAgIHBlcmlvZDogZGF0YS5wZXJpb2QsXG4gICAgICAgIHNjaGVkdWxlZERhdGU6IGRhdGEuc2NoZWR1bGVkRGF0ZSxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxuICAgICAgICBvdmVyYWxsUmF0aW5nOiBkYXRhLm92ZXJhbGxSYXRpbmcgfHwgMCxcbiAgICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IChkYXRhLmNvbXBldGVuY3lSYXRpbmdzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGFyZWFzRm9ySW1wcm92ZW1lbnQ6IChkYXRhLmFyZWFzRm9ySW1wcm92ZW1lbnQgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZ29hbHM6IChkYXRhLmdvYWxzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcbiAgICAgICAgcHJvbW90aW9uUmVjb21tZW5kZWQ6IGRhdGEucHJvbW90aW9uUmVjb21tZW5kZWQgfHwgZmFsc2UsXG4gICAgICAgIHBpcFJlcXVpcmVkOiBkYXRhLnBpcFJlcXVpcmVkIHx8IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXZpZXcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogcmV2aWV3LmNvbXBldGVuY3lSYXRpbmdzIGFzIGFueVtdLFxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogcmV2aWV3LmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2FsczogcmV2aWV3LmdvYWxzIGFzIHN0cmluZ1tdLFxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByZXZpZXcuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcGVyZm9ybWFuY2UgcmV2aWV3OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHBlcmZvcm1hbmNlIHJldmlld1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICB0cnkge1xuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXZpZXcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogcmV2aWV3LmNvbXBldGVuY3lSYXRpbmdzIGFzIGFueVtdLFxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogcmV2aWV3LmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2FsczogcmV2aWV3LmdvYWxzIGFzIHN0cmluZ1tdLFxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByZXZpZXcuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcGVyZm9ybWFuY2UgcmV2aWV3OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHBlcmZvcm1hbmNlIHJldmlld1wiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhaW5pbmdDb3Vyc2VzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBwcmlzbWEudGVhbVRyYWluaW5nQ291cnNlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gY291cnNlcy5tYXAoKGMpID0+ICh7XG4gICAgICBpZDogYy5pZCxcbiAgICAgIHRpdGxlOiBjLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGMuZGVzY3JpcHRpb24sXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxuICAgICAgY2F0ZWdvcnk6IGMuY2F0ZWdvcnkgYXMgYW55LFxuICAgICAgZHVyYXRpb246IGMuZHVyYXRpb24sXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcbiAgICAgIGZvcm1hdDogYy5mb3JtYXQgYXMgYW55LFxuICAgICAgY2VydGlmaWNhdGlvbkV4cGlyeTogYy5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJhaW5pbmcgY291cnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRyYWluaW5nQ291cnNlKGRhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIGR1cmF0aW9uPzogbnVtYmVyXG4gIHByb3ZpZGVyPzogc3RyaW5nXG4gIGZvcm1hdD86IHN0cmluZ1xuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgICAgdHlwZTogZGF0YS50eXBlIHx8IFwib3B0aW9uYWxcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJ0ZWNobmljYWxcIixcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcbiAgICAgICAgcHJvdmlkZXI6IGRhdGEucHJvdmlkZXIgfHwgXCJcIixcbiAgICAgICAgZm9ybWF0OiBkYXRhLmZvcm1hdCB8fCBcIm9ubGluZVwiLFxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY291cnNlLFxuICAgICAgdHlwZTogY291cnNlLnR5cGUgYXMgYW55LFxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXG4gICAgICBmb3JtYXQ6IGNvdXJzZS5mb3JtYXQgYXMgYW55LFxuICAgICAgY2VydGlmaWNhdGlvbkV4cGlyeTogY291cnNlLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgdHJhaW5pbmcgY291cnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBDT1VSU0UgRU5ST0xMTUVOVCBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnJvbGxtZW50cyA9IGF3YWl0IHByaXNtYS50ZWFtQ291cnNlRW5yb2xsbWVudC5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcbiAgICAgIGlkOiBlLmlkLFxuICAgICAgY291cnNlSWQ6IGUuY291cnNlSWQsXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXG4gICAgICBlbXBsb3llZUlkOiBlLmVtcGxveWVlSWQsXG4gICAgICBzdGF0dXM6IGUuc3RhdHVzIGFzIGFueSxcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxuICAgICAgZW5yb2xsZWRBdDogZS5lbnJvbGxlZEF0LFxuICAgICAgY29tcGxldGVkQXQ6IGUuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxuICAgICAgY2VydGlmaWNhdGVVcmw6IGUuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb3Vyc2UgZW5yb2xsbWVudHM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBjb3Vyc2UgZW5yb2xsbWVudHNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xuICBjb3Vyc2VJZDogc3RyaW5nXG4gIGNvdXJzZU5hbWU6IHN0cmluZ1xuICBlbXBsb3llZUlkOiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG4gIHByb2dyZXNzPzogbnVtYmVyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY291cnNlSWQ6IGRhdGEuY291cnNlSWQsXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwiZW5yb2xsZWRcIixcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgZW5yb2xsZWRBdDogZGF0YS5lbnJvbGxlZEF0LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5lbnJvbGxtZW50LFxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXG4gICAgICBzY29yZTogZW5yb2xsbWVudC5zY29yZSB8fCB1bmRlZmluZWQsXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlRW5yb2xsbWVudChpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW5yb2xsbWVudCA9IGF3YWl0IHByaXNtYS50ZWFtQ291cnNlRW5yb2xsbWVudC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVucm9sbG1lbnQsXG4gICAgICBzdGF0dXM6IGVucm9sbG1lbnQuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNlcnRpZmljYXRlVXJsOiBlbnJvbGxtZW50LmNlcnRpZmljYXRlVXJsIHx8IHVuZGVmaW5lZCxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNvdXJzZSBlbnJvbGxtZW50OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlTQTRVc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:3d73c5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40a899116b81aa2134ce96a9399d3961d4bdf4a215":"createAttendanceRecord"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "createAttendanceRecord",
    ()=>createAttendanceRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createAttendanceRecord = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40a899116b81aa2134ce96a9399d3961d4bdf4a215", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createAttendanceRecord"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRU1QTE9ZRUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGVtcGxveWVlcyA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xuICAgICAgaWQ6IGUuaWQsXG4gICAgICBmaXJzdE5hbWU6IGUuZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXG4gICAgICBlbWFpbDogZS5lbWFpbCxcbiAgICAgIHBob25lOiBlLnBob25lLFxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxuICAgICAgam9iVGl0bGU6IGUuam9iVGl0bGUsXG4gICAgICBkZXBhcnRtZW50OiBlLmRlcGFydG1lbnQsXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcbiAgICAgIHN0YXR1czogZS5zdGF0dXMsXG4gICAgICBtYW5hZ2VySWQ6IGUubWFuYWdlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0RGF0ZTogZS5zdGFydERhdGUsXG4gICAgICBlbmREYXRlOiBlLmVuZERhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcbiAgICAgIHNhbGFyeTogZS5zYWxhcnksXG4gICAgICBjdXJyZW5jeTogZS5jdXJyZW5jeSxcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXG4gICAgICBza2lsbHM6IGUuc2tpbGxzIGFzIGFueVtdLFxuICAgICAgeWVhcnNPZkV4cGVyaWVuY2U6IGUueWVhcnNPZkV4cGVyaWVuY2UsXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcbiAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBlLnBlcmZvcm1hbmNlUmF0aW5nLFxuICAgICAgZG9jdW1lbnRzOiBlLmRvY3VtZW50cyBhcyBhbnlbXSxcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlLmVtZXJnZW5jeUNvbnRhY3RzIGFzIGFueVtdLFxuICAgICAgbGVhdmVCYWxhbmNlOiBlLmxlYXZlQmFsYW5jZSBhcyBhbnksXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGUudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGVtcGxveWVlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGVtcGxveWVlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xuICBmaXJzdE5hbWU6IHN0cmluZ1xuICBsYXN0TmFtZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgcGhvbmU/OiBzdHJpbmdcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIGpvYlRpdGxlOiBzdHJpbmdcbiAgZGVwYXJ0bWVudDogc3RyaW5nXG4gIGVtcGxveW1lbnRUeXBlPzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBtYW5hZ2VySWQ/OiBzdHJpbmdcbiAgbWFuYWdlck5hbWU/OiBzdHJpbmdcbiAgc3RhcnREYXRlOiBzdHJpbmdcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXG4gIHNhbGFyeT86IG51bWJlclxuICBjdXJyZW5jeT86IHN0cmluZ1xuICBwYXlGcmVxdWVuY3k/OiBzdHJpbmdcbiAgc2tpbGxzPzogYW55W11cbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcbiAgY2VydGlmaWNhdGlvbnM/OiBzdHJpbmdbXVxuICBwZXJmb3JtYW5jZVJhdGluZz86IG51bWJlclxuICBkb2N1bWVudHM/OiBhbnlbXVxuICBjYXJlZXJIaXN0b3J5PzogYW55W11cbiAgZW1lcmdlbmN5Q29udGFjdHM/OiBhbnlbXVxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXG4gICAgICAgIGpvYlRpdGxlOiBkYXRhLmpvYlRpdGxlLFxuICAgICAgICBkZXBhcnRtZW50OiBkYXRhLmRlcGFydG1lbnQsXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgbWFuYWdlcklkOiBkYXRhLm1hbmFnZXJJZCB8fCBudWxsLFxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICB3b3JrTG9jYXRpb246IGRhdGEud29ya0xvY2F0aW9uIHx8IFwiUmVtb3RlXCIsXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgcGF5RnJlcXVlbmN5OiBkYXRhLnBheUZyZXF1ZW5jeSB8fCBcIm1vbnRobHlcIixcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcbiAgICAgICAgeWVhcnNPZkV4cGVyaWVuY2U6IGRhdGEueWVhcnNPZkV4cGVyaWVuY2UgfHwgMCxcbiAgICAgICAgY2VydGlmaWNhdGlvbnM6IChkYXRhLmNlcnRpZmljYXRpb25zIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXG4gICAgICAgIGRvY3VtZW50czogKGRhdGEuZG9jdW1lbnRzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGNhcmVlckhpc3Rvcnk6IChkYXRhLmNhcmVlckhpc3RvcnkgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGxlYXZlQmFsYW5jZTogKGRhdGEubGVhdmVCYWxhbmNlIHx8IHt9KSBhcyBhbnksXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVtcGxveWVlLFxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxuICAgICAgbWFuYWdlck5hbWU6IGVtcGxveWVlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIGVuZERhdGU6IGVtcGxveWVlLmVuZERhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZW1wbG95ZWUuY2VydGlmaWNhdGlvbnMgYXMgc3RyaW5nW10sXG4gICAgICBkb2N1bWVudHM6IGVtcGxveWVlLmRvY3VtZW50cyBhcyBhbnlbXSxcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogZW1wbG95ZWUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXG4gICAgICBsZWF2ZUJhbGFuY2U6IGVtcGxveWVlLmxlYXZlQmFsYW5jZSBhcyBhbnksXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBlbXBsb3llZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGVtcGxveWVlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGVtcGxveWVlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZW1wbG95ZWUsXG4gICAgICBtYW5hZ2VySWQ6IGVtcGxveWVlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgZW5kRGF0ZTogZW1wbG95ZWUuZW5kRGF0ZSB8fCB1bmRlZmluZWQsXG4gICAgICBza2lsbHM6IGVtcGxveWVlLnNraWxscyBhcyBhbnlbXSxcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcbiAgICAgIGRvY3VtZW50czogZW1wbG95ZWUuZG9jdW1lbnRzIGFzIGFueVtdLFxuICAgICAgY2FyZWVySGlzdG9yeTogZW1wbG95ZWUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcbiAgICAgIGxlYXZlQmFsYW5jZTogZW1wbG95ZWUubGVhdmVCYWxhbmNlIGFzIGFueSxcbiAgICAgIGNyZWF0ZWRBdDogZW1wbG95ZWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgZW1wbG95ZWVcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUVtcGxveWVlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgZW1wbG95ZWVcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gY2FuZGlkYXRlcy5tYXAoKGMpID0+ICh7XG4gICAgICBpZDogYy5pZCxcbiAgICAgIGZpcnN0TmFtZTogYy5maXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZTogYy5sYXN0TmFtZSxcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxuICAgICAgcGhvbmU6IGMucGhvbmUsXG4gICAgICBwb3NpdGlvbjogYy5wb3NpdGlvbixcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcbiAgICAgIHN0YWdlOiBjLnN0YWdlLFxuICAgICAgc291cmNlOiBjLnNvdXJjZSxcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXG4gICAgICBub3RlczogYy5ub3RlcyBhcyBzdHJpbmdbXSxcbiAgICAgIGludGVydmlld3M6IGMuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXG4gICAgICBleHBlY3RlZFNhbGFyeTogYy5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXG4gICAgICBhdmFpbGFibGVGcm9tOiBjLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGNhbmRpZGF0ZXNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhbmRpZGF0ZShkYXRhOiB7XG4gIGZpcnN0TmFtZTogc3RyaW5nXG4gIGxhc3ROYW1lOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBwaG9uZT86IHN0cmluZ1xuICBwb3NpdGlvbjogc3RyaW5nXG4gIGRlcGFydG1lbnQ6IHN0cmluZ1xuICBzdGFnZT86IHN0cmluZ1xuICBzb3VyY2U/OiBzdHJpbmdcbiAgYXBwbGllZEF0OiBzdHJpbmdcbiAgc2tpbGxzPzogc3RyaW5nW11cbiAgZXhwZWN0ZWRTYWxhcnk/OiBudW1iZXJcbiAgYXZhaWxhYmxlRnJvbT86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcbiAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcbiAgICAgICAgc3RhZ2U6IGRhdGEuc3RhZ2UgfHwgXCJhcHBsaWVkXCIsXG4gICAgICAgIHNvdXJjZTogZGF0YS5zb3VyY2UgfHwgXCJcIixcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZXhwZWN0ZWRTYWxhcnk6IGRhdGEuZXhwZWN0ZWRTYWxhcnkgfHwgbnVsbCxcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgIG5vdGVzOiBjYW5kaWRhdGUubm90ZXMgYXMgc3RyaW5nW10sXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgYXZhaWxhYmxlRnJvbTogY2FuZGlkYXRlLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNhbmRpZGF0ZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgIG5vdGVzOiBjYW5kaWRhdGUubm90ZXMgYXMgc3RyaW5nW10sXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgYXZhaWxhYmxlRnJvbTogY2FuZGlkYXRlLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBMRUFWRSBSRVFVRVNUIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBwcmlzbWEudGVhbUxlYXZlUmVxdWVzdC5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcbiAgICAgIGlkOiByLmlkLFxuICAgICAgZW1wbG95ZWVJZDogci5lbXBsb3llZUlkLFxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcbiAgICAgIGxlYXZlVHlwZTogci5sZWF2ZVR5cGUgYXMgYW55LFxuICAgICAgc3RhcnREYXRlOiByLnN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcbiAgICAgIHRvdGFsRGF5czogci50b3RhbERheXMsXG4gICAgICByZWFzb246IHIucmVhc29uLFxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXG4gICAgICBhcHByb3ZlcklkOiByLmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZXJOYW1lOiByLmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByLnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXG4gICAgICBjcmVhdGVkQXQ6IHIuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGxlYXZlIHJlcXVlc3RzOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxlYXZlUmVxdWVzdChkYXRhOiB7XG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xuICBsZWF2ZVR5cGU6IHN0cmluZ1xuICBzdGFydERhdGU6IHN0cmluZ1xuICBlbmREYXRlOiBzdHJpbmdcbiAgdG90YWxEYXlzOiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRhLmVuZERhdGUsXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXG4gICAgICAgIHJlYXNvbjogZGF0YS5yZWFzb24sXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICBsZWF2ZVR5cGU6IHJlcXVlc3QubGVhdmVUeXBlIGFzIGFueSxcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGFwcHJvdmVyTmFtZTogcmVxdWVzdC5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiByZXF1ZXN0LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhdmUgcmVxdWVzdDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBwcmlzbWEudGVhbUxlYXZlUmVxdWVzdC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICBsZWF2ZVR5cGU6IHJlcXVlc3QubGVhdmVUeXBlIGFzIGFueSxcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGFwcHJvdmVyTmFtZTogcmVxdWVzdC5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiByZXF1ZXN0LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgbGVhdmUgcmVxdWVzdDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IEFUVEVOREFOQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHByaXNtYS50ZWFtQXR0ZW5kYW5jZVJlY29yZC5maW5kTWFueSh7IG9yZGVyQnk6IHsgbWFya2VkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XG4gICAgICBpZDogci5pZCxcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXG4gICAgICBkYXRlOiByLmRhdGUsXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXG4gICAgICBjbG9ja091dDogci5jbG9ja091dCB8fCB1bmRlZmluZWQsXG4gICAgICBicmVha01pbnV0ZXM6IHIuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXG4gICAgICB3b3JrTG9jYXRpb246IHIud29ya0xvY2F0aW9uIHx8IHVuZGVmaW5lZCxcbiAgICAgIG5vdGVzOiByLm5vdGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGF0dGVuZGFuY2UgcmVjb3Jkc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXR0ZW5kYW5jZVJlY29yZChkYXRhOiB7XG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xuICBkYXRlOiBzdHJpbmdcbiAgc3RhdHVzOiBzdHJpbmdcbiAgY2xvY2tJbj86IHN0cmluZ1xuICBjbG9ja091dD86IHN0cmluZ1xuICBicmVha01pbnV0ZXM/OiBudW1iZXJcbiAgdG90YWxIb3Vycz86IG51bWJlclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxuICAgICAgICBjbG9ja091dDogZGF0YS5jbG9ja091dCB8fCBudWxsLFxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxuICAgICAgICB3b3JrTG9jYXRpb246IGRhdGEud29ya0xvY2F0aW9uIHx8IG51bGwsXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlY29yZCxcbiAgICAgIHN0YXR1czogcmVjb3JkLnN0YXR1cyBhcyBhbnksXG4gICAgICBjbG9ja0luOiByZWNvcmQuY2xvY2tJbiB8fCB1bmRlZmluZWQsXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcbiAgICAgIGJyZWFrTWludXRlczogcmVjb3JkLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXG4gICAgICB0b3RhbEhvdXJzOiByZWNvcmQudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxuICAgICAgbm90ZXM6IHJlY29yZC5ub3RlcyB8fCB1bmRlZmluZWQsXG4gICAgICBtYXJrZWRBdDogcmVjb3JkLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBhdHRlbmRhbmNlIHJlY29yZDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXR0ZW5kYW5jZVJlY29yZChpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVjb3JkLFxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNsb2NrSW46IHJlY29yZC5jbG9ja0luIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNsb2NrT3V0OiByZWNvcmQuY2xvY2tPdXQgfHwgdW5kZWZpbmVkLFxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsSG91cnM6IHJlY29yZC50b3RhbEhvdXJzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHdvcmtMb2NhdGlvbjogcmVjb3JkLndvcmtMb2NhdGlvbiB8fCB1bmRlZmluZWQsXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hcmtlZEF0OiByZWNvcmQubWFya2VkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGF0dGVuZGFuY2UgcmVjb3JkOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGF0dGVuZGFuY2UgcmVjb3JkXCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPS1JzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG9rcnMgPSBhd2FpdCBwcmlzbWEudGVhbU9LUi5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIG9rcnMubWFwKChvKSA9PiAoe1xuICAgICAgaWQ6IG8uaWQsXG4gICAgICBlbXBsb3llZUlkOiBvLmVtcGxveWVlSWQsXG4gICAgICB0aXRsZTogby50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxuICAgICAgcXVhcnRlcjogby5xdWFydGVyLFxuICAgICAga2V5UmVzdWx0czogby5rZXlSZXN1bHRzIGFzIGFueVtdLFxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcbiAgICAgIHN0YXR1czogby5zdGF0dXMgYXMgYW55LFxuICAgICAgcGFyZW50T0tSSWQ6IG8ucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBvLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBPS1JzOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggT0tSc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgcXVhcnRlcjogc3RyaW5nXG4gIGtleVJlc3VsdHM/OiBhbnlbXVxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcbiAgc3RhdHVzPzogc3RyaW5nXG4gIHBhcmVudE9LUklkPzogc3RyaW5nXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgICAgcXVhcnRlcjogZGF0YS5xdWFydGVyLFxuICAgICAgICBrZXlSZXN1bHRzOiAoZGF0YS5rZXlSZXN1bHRzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcIm9uLXRyYWNrXCIsXG4gICAgICAgIHBhcmVudE9LUklkOiBkYXRhLnBhcmVudE9LUklkIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9rcixcbiAgICAgIGtleVJlc3VsdHM6IG9rci5rZXlSZXN1bHRzIGFzIGFueVtdLFxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiBva3IuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIE9LUjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU9LUihpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5va3IsXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXG4gICAgICBwYXJlbnRPS1JJZDogb2tyLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBPS1I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgT0tSXCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZXJmb3JtYW5jZVJldmlld3MoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmV2aWV3cyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxuICAgIHJldHVybiByZXZpZXdzLm1hcCgocikgPT4gKHtcbiAgICAgIGlkOiByLmlkLFxuICAgICAgZW1wbG95ZWVJZDogci5lbXBsb3llZUlkLFxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcbiAgICAgIHJldmlld2VyTmFtZTogci5yZXZpZXdlck5hbWUsXG4gICAgICBwZXJpb2Q6IHIucGVyaW9kLFxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXG4gICAgICBvdmVyYWxsUmF0aW5nOiByLm92ZXJhbGxSYXRpbmcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcbiAgICAgIHN0cmVuZ3Roczogci5zdHJlbmd0aHMgYXMgc3RyaW5nW10sXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByLmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcbiAgICAgIHNhbGFyeUNoYW5nZTogci5zYWxhcnlDaGFuZ2UgfHwgdW5kZWZpbmVkLFxuICAgICAgcHJvbW90aW9uUmVjb21tZW5kZWQ6IHIucHJvbW90aW9uUmVjb21tZW5kZWQsXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGVyZm9ybWFuY2UgcmV2aWV3czpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHBlcmZvcm1hbmNlIHJldmlld3NcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXG4gIHJldmlld2VySWQ6IHN0cmluZ1xuICByZXZpZXdlck5hbWU6IHN0cmluZ1xuICBwZXJpb2Q6IHN0cmluZ1xuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG4gIG92ZXJhbGxSYXRpbmc/OiBudW1iZXJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxuICBzdHJlbmd0aHM/OiBzdHJpbmdbXVxuICBhcmVhc0ZvckltcHJvdmVtZW50Pzogc3RyaW5nW11cbiAgZ29hbHM/OiBzdHJpbmdbXVxuICBzYWxhcnlDaGFuZ2U/OiBudW1iZXJcbiAgcHJvbW90aW9uUmVjb21tZW5kZWQ/OiBib29sZWFuXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxuICBjb21wbGV0ZWRBdD86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICByZXZpZXdlcklkOiBkYXRhLnJldmlld2VySWQsXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXG4gICAgICAgIHBlcmlvZDogZGF0YS5wZXJpb2QsXG4gICAgICAgIHNjaGVkdWxlZERhdGU6IGRhdGEuc2NoZWR1bGVkRGF0ZSxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxuICAgICAgICBvdmVyYWxsUmF0aW5nOiBkYXRhLm92ZXJhbGxSYXRpbmcgfHwgMCxcbiAgICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IChkYXRhLmNvbXBldGVuY3lSYXRpbmdzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGFyZWFzRm9ySW1wcm92ZW1lbnQ6IChkYXRhLmFyZWFzRm9ySW1wcm92ZW1lbnQgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZ29hbHM6IChkYXRhLmdvYWxzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcbiAgICAgICAgcHJvbW90aW9uUmVjb21tZW5kZWQ6IGRhdGEucHJvbW90aW9uUmVjb21tZW5kZWQgfHwgZmFsc2UsXG4gICAgICAgIHBpcFJlcXVpcmVkOiBkYXRhLnBpcFJlcXVpcmVkIHx8IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXZpZXcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogcmV2aWV3LmNvbXBldGVuY3lSYXRpbmdzIGFzIGFueVtdLFxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogcmV2aWV3LmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2FsczogcmV2aWV3LmdvYWxzIGFzIHN0cmluZ1tdLFxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByZXZpZXcuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcGVyZm9ybWFuY2UgcmV2aWV3OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHBlcmZvcm1hbmNlIHJldmlld1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICB0cnkge1xuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXZpZXcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogcmV2aWV3LmNvbXBldGVuY3lSYXRpbmdzIGFzIGFueVtdLFxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogcmV2aWV3LmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2FsczogcmV2aWV3LmdvYWxzIGFzIHN0cmluZ1tdLFxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByZXZpZXcuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcGVyZm9ybWFuY2UgcmV2aWV3OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHBlcmZvcm1hbmNlIHJldmlld1wiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhaW5pbmdDb3Vyc2VzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBwcmlzbWEudGVhbVRyYWluaW5nQ291cnNlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gY291cnNlcy5tYXAoKGMpID0+ICh7XG4gICAgICBpZDogYy5pZCxcbiAgICAgIHRpdGxlOiBjLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGMuZGVzY3JpcHRpb24sXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxuICAgICAgY2F0ZWdvcnk6IGMuY2F0ZWdvcnkgYXMgYW55LFxuICAgICAgZHVyYXRpb246IGMuZHVyYXRpb24sXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcbiAgICAgIGZvcm1hdDogYy5mb3JtYXQgYXMgYW55LFxuICAgICAgY2VydGlmaWNhdGlvbkV4cGlyeTogYy5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJhaW5pbmcgY291cnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRyYWluaW5nQ291cnNlKGRhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIGR1cmF0aW9uPzogbnVtYmVyXG4gIHByb3ZpZGVyPzogc3RyaW5nXG4gIGZvcm1hdD86IHN0cmluZ1xuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgICAgdHlwZTogZGF0YS50eXBlIHx8IFwib3B0aW9uYWxcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJ0ZWNobmljYWxcIixcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcbiAgICAgICAgcHJvdmlkZXI6IGRhdGEucHJvdmlkZXIgfHwgXCJcIixcbiAgICAgICAgZm9ybWF0OiBkYXRhLmZvcm1hdCB8fCBcIm9ubGluZVwiLFxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY291cnNlLFxuICAgICAgdHlwZTogY291cnNlLnR5cGUgYXMgYW55LFxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXG4gICAgICBmb3JtYXQ6IGNvdXJzZS5mb3JtYXQgYXMgYW55LFxuICAgICAgY2VydGlmaWNhdGlvbkV4cGlyeTogY291cnNlLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgdHJhaW5pbmcgY291cnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBDT1VSU0UgRU5ST0xMTUVOVCBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnJvbGxtZW50cyA9IGF3YWl0IHByaXNtYS50ZWFtQ291cnNlRW5yb2xsbWVudC5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcbiAgICAgIGlkOiBlLmlkLFxuICAgICAgY291cnNlSWQ6IGUuY291cnNlSWQsXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXG4gICAgICBlbXBsb3llZUlkOiBlLmVtcGxveWVlSWQsXG4gICAgICBzdGF0dXM6IGUuc3RhdHVzIGFzIGFueSxcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxuICAgICAgZW5yb2xsZWRBdDogZS5lbnJvbGxlZEF0LFxuICAgICAgY29tcGxldGVkQXQ6IGUuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxuICAgICAgY2VydGlmaWNhdGVVcmw6IGUuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb3Vyc2UgZW5yb2xsbWVudHM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBjb3Vyc2UgZW5yb2xsbWVudHNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xuICBjb3Vyc2VJZDogc3RyaW5nXG4gIGNvdXJzZU5hbWU6IHN0cmluZ1xuICBlbXBsb3llZUlkOiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG4gIHByb2dyZXNzPzogbnVtYmVyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY291cnNlSWQ6IGRhdGEuY291cnNlSWQsXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwiZW5yb2xsZWRcIixcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgZW5yb2xsZWRBdDogZGF0YS5lbnJvbGxlZEF0LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5lbnJvbGxtZW50LFxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXG4gICAgICBzY29yZTogZW5yb2xsbWVudC5zY29yZSB8fCB1bmRlZmluZWQsXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlRW5yb2xsbWVudChpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW5yb2xsbWVudCA9IGF3YWl0IHByaXNtYS50ZWFtQ291cnNlRW5yb2xsbWVudC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVucm9sbG1lbnQsXG4gICAgICBzdGF0dXM6IGVucm9sbG1lbnQuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNlcnRpZmljYXRlVXJsOiBlbnJvbGxtZW50LmNlcnRpZmljYXRlVXJsIHx8IHVuZGVmaW5lZCxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNvdXJzZSBlbnJvbGxtZW50OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQW1Xc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:b40266 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60b39255d922d286c5dab5d9cf5a8cdb28f839eaf2":"updateAttendanceRecord"},"app/actions/team.ts",""] */ __turbopack_context__.s([
    "updateAttendanceRecord",
    ()=>updateAttendanceRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateAttendanceRecord = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60b39255d922d286c5dab5d9cf5a8cdb28f839eaf2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateAttendanceRecord"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gRU1QTE9ZRUUgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZWVzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGVtcGxveWVlcyA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxuICAgIHJldHVybiBlbXBsb3llZXMubWFwKChlKSA9PiAoe1xuICAgICAgaWQ6IGUuaWQsXG4gICAgICBmaXJzdE5hbWU6IGUuZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWU6IGUubGFzdE5hbWUsXG4gICAgICBlbWFpbDogZS5lbWFpbCxcbiAgICAgIHBob25lOiBlLnBob25lLFxuICAgICAgZW1wbG95ZWVJZDogZS5lbXBsb3llZUlkLFxuICAgICAgam9iVGl0bGU6IGUuam9iVGl0bGUsXG4gICAgICBkZXBhcnRtZW50OiBlLmRlcGFydG1lbnQsXG4gICAgICBlbXBsb3ltZW50VHlwZTogZS5lbXBsb3ltZW50VHlwZSxcbiAgICAgIHN0YXR1czogZS5zdGF0dXMsXG4gICAgICBtYW5hZ2VySWQ6IGUubWFuYWdlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hbmFnZXJOYW1lOiBlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0RGF0ZTogZS5zdGFydERhdGUsXG4gICAgICBlbmREYXRlOiBlLmVuZERhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgd29ya0xvY2F0aW9uOiBlLndvcmtMb2NhdGlvbixcbiAgICAgIHNhbGFyeTogZS5zYWxhcnksXG4gICAgICBjdXJyZW5jeTogZS5jdXJyZW5jeSxcbiAgICAgIHBheUZyZXF1ZW5jeTogZS5wYXlGcmVxdWVuY3ksXG4gICAgICBza2lsbHM6IGUuc2tpbGxzIGFzIGFueVtdLFxuICAgICAgeWVhcnNPZkV4cGVyaWVuY2U6IGUueWVhcnNPZkV4cGVyaWVuY2UsXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcbiAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBlLnBlcmZvcm1hbmNlUmF0aW5nLFxuICAgICAgZG9jdW1lbnRzOiBlLmRvY3VtZW50cyBhcyBhbnlbXSxcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlLmVtZXJnZW5jeUNvbnRhY3RzIGFzIGFueVtdLFxuICAgICAgbGVhdmVCYWxhbmNlOiBlLmxlYXZlQmFsYW5jZSBhcyBhbnksXG4gICAgICBjcmVhdGVkQXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGUudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGVtcGxveWVlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGVtcGxveWVlc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoZGF0YToge1xuICBmaXJzdE5hbWU6IHN0cmluZ1xuICBsYXN0TmFtZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgcGhvbmU/OiBzdHJpbmdcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIGpvYlRpdGxlOiBzdHJpbmdcbiAgZGVwYXJ0bWVudDogc3RyaW5nXG4gIGVtcGxveW1lbnRUeXBlPzogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xuICBtYW5hZ2VySWQ/OiBzdHJpbmdcbiAgbWFuYWdlck5hbWU/OiBzdHJpbmdcbiAgc3RhcnREYXRlOiBzdHJpbmdcbiAgd29ya0xvY2F0aW9uPzogc3RyaW5nXG4gIHNhbGFyeT86IG51bWJlclxuICBjdXJyZW5jeT86IHN0cmluZ1xuICBwYXlGcmVxdWVuY3k/OiBzdHJpbmdcbiAgc2tpbGxzPzogYW55W11cbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXJcbiAgY2VydGlmaWNhdGlvbnM/OiBzdHJpbmdbXVxuICBwZXJmb3JtYW5jZVJhdGluZz86IG51bWJlclxuICBkb2N1bWVudHM/OiBhbnlbXVxuICBjYXJlZXJIaXN0b3J5PzogYW55W11cbiAgZW1lcmdlbmN5Q29udGFjdHM/OiBhbnlbXVxuICBsZWF2ZUJhbGFuY2U/OiBhbnlcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IHByaXNtYS50ZWFtRW1wbG95ZWUuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgICBwaG9uZTogZGF0YS5waG9uZSB8fCBcIlwiLFxuICAgICAgICBlbXBsb3llZUlkOiBkYXRhLmVtcGxveWVlSWQsXG4gICAgICAgIGpvYlRpdGxlOiBkYXRhLmpvYlRpdGxlLFxuICAgICAgICBkZXBhcnRtZW50OiBkYXRhLmRlcGFydG1lbnQsXG4gICAgICAgIGVtcGxveW1lbnRUeXBlOiBkYXRhLmVtcGxveW1lbnRUeXBlIHx8IFwiZnVsbC10aW1lXCIsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMgfHwgXCJhY3RpdmVcIixcbiAgICAgICAgbWFuYWdlcklkOiBkYXRhLm1hbmFnZXJJZCB8fCBudWxsLFxuICAgICAgICBtYW5hZ2VyTmFtZTogZGF0YS5tYW5hZ2VyTmFtZSB8fCBudWxsLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICB3b3JrTG9jYXRpb246IGRhdGEud29ya0xvY2F0aW9uIHx8IFwiUmVtb3RlXCIsXG4gICAgICAgIHNhbGFyeTogZGF0YS5zYWxhcnkgfHwgMCxcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3kgfHwgXCJCRFRcIixcbiAgICAgICAgcGF5RnJlcXVlbmN5OiBkYXRhLnBheUZyZXF1ZW5jeSB8fCBcIm1vbnRobHlcIixcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcbiAgICAgICAgeWVhcnNPZkV4cGVyaWVuY2U6IGRhdGEueWVhcnNPZkV4cGVyaWVuY2UgfHwgMCxcbiAgICAgICAgY2VydGlmaWNhdGlvbnM6IChkYXRhLmNlcnRpZmljYXRpb25zIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHBlcmZvcm1hbmNlUmF0aW5nOiBkYXRhLnBlcmZvcm1hbmNlUmF0aW5nIHx8IDAsXG4gICAgICAgIGRvY3VtZW50czogKGRhdGEuZG9jdW1lbnRzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGNhcmVlckhpc3Rvcnk6IChkYXRhLmNhcmVlckhpc3RvcnkgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IChkYXRhLmVtZXJnZW5jeUNvbnRhY3RzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGxlYXZlQmFsYW5jZTogKGRhdGEubGVhdmVCYWxhbmNlIHx8IHt9KSBhcyBhbnksXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVtcGxveWVlLFxuICAgICAgbWFuYWdlcklkOiBlbXBsb3llZS5tYW5hZ2VySWQgfHwgdW5kZWZpbmVkLFxuICAgICAgbWFuYWdlck5hbWU6IGVtcGxveWVlLm1hbmFnZXJOYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIGVuZERhdGU6IGVtcGxveWVlLmVuZERhdGUgfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBlbXBsb3llZS5za2lsbHMgYXMgYW55W10sXG4gICAgICBjZXJ0aWZpY2F0aW9uczogZW1wbG95ZWUuY2VydGlmaWNhdGlvbnMgYXMgc3RyaW5nW10sXG4gICAgICBkb2N1bWVudHM6IGVtcGxveWVlLmRvY3VtZW50cyBhcyBhbnlbXSxcbiAgICAgIGNhcmVlckhpc3Rvcnk6IGVtcGxveWVlLmNhcmVlckhpc3RvcnkgYXMgYW55W10sXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogZW1wbG95ZWUuZW1lcmdlbmN5Q29udGFjdHMgYXMgYW55W10sXG4gICAgICBsZWF2ZUJhbGFuY2U6IGVtcGxveWVlLmxlYXZlQmFsYW5jZSBhcyBhbnksXG4gICAgICBjcmVhdGVkQXQ6IGVtcGxveWVlLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBlbXBsb3llZS51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGVtcGxveWVlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGVtcGxveWVlXCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZShpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZW1wbG95ZWUsXG4gICAgICBtYW5hZ2VySWQ6IGVtcGxveWVlLm1hbmFnZXJJZCB8fCB1bmRlZmluZWQsXG4gICAgICBtYW5hZ2VyTmFtZTogZW1wbG95ZWUubWFuYWdlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgZW5kRGF0ZTogZW1wbG95ZWUuZW5kRGF0ZSB8fCB1bmRlZmluZWQsXG4gICAgICBza2lsbHM6IGVtcGxveWVlLnNraWxscyBhcyBhbnlbXSxcbiAgICAgIGNlcnRpZmljYXRpb25zOiBlbXBsb3llZS5jZXJ0aWZpY2F0aW9ucyBhcyBzdHJpbmdbXSxcbiAgICAgIGRvY3VtZW50czogZW1wbG95ZWUuZG9jdW1lbnRzIGFzIGFueVtdLFxuICAgICAgY2FyZWVySGlzdG9yeTogZW1wbG95ZWUuY2FyZWVySGlzdG9yeSBhcyBhbnlbXSxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBlbXBsb3llZS5lbWVyZ2VuY3lDb250YWN0cyBhcyBhbnlbXSxcbiAgICAgIGxlYXZlQmFsYW5jZTogZW1wbG95ZWUubGVhdmVCYWxhbmNlIGFzIGFueSxcbiAgICAgIGNyZWF0ZWRBdDogZW1wbG95ZWUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IGVtcGxveWVlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgZW1wbG95ZWVcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUVtcGxveWVlKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEudGVhbUVtcGxveWVlLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgZW1wbG95ZWU6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBkZWxldGUgZW1wbG95ZWVcIiB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gQ0FORElEQVRFIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gY2FuZGlkYXRlcy5tYXAoKGMpID0+ICh7XG4gICAgICBpZDogYy5pZCxcbiAgICAgIGZpcnN0TmFtZTogYy5maXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZTogYy5sYXN0TmFtZSxcbiAgICAgIGVtYWlsOiBjLmVtYWlsLFxuICAgICAgcGhvbmU6IGMucGhvbmUsXG4gICAgICBwb3NpdGlvbjogYy5wb3NpdGlvbixcbiAgICAgIGRlcGFydG1lbnQ6IGMuZGVwYXJ0bWVudCxcbiAgICAgIHN0YWdlOiBjLnN0YWdlLFxuICAgICAgc291cmNlOiBjLnNvdXJjZSxcbiAgICAgIGFwcGxpZWRBdDogYy5hcHBsaWVkQXQsXG4gICAgICBub3RlczogYy5ub3RlcyBhcyBzdHJpbmdbXSxcbiAgICAgIGludGVydmlld3M6IGMuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIHJhdGluZzogYy5yYXRpbmcsXG4gICAgICBleHBlY3RlZFNhbGFyeTogYy5leHBlY3RlZFNhbGFyeSB8fCB1bmRlZmluZWQsXG4gICAgICBhdmFpbGFibGVGcm9tOiBjLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjLnNraWxscyBhcyBzdHJpbmdbXSxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FuZGlkYXRlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGNhbmRpZGF0ZXNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhbmRpZGF0ZShkYXRhOiB7XG4gIGZpcnN0TmFtZTogc3RyaW5nXG4gIGxhc3ROYW1lOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBwaG9uZT86IHN0cmluZ1xuICBwb3NpdGlvbjogc3RyaW5nXG4gIGRlcGFydG1lbnQ6IHN0cmluZ1xuICBzdGFnZT86IHN0cmluZ1xuICBzb3VyY2U/OiBzdHJpbmdcbiAgYXBwbGllZEF0OiBzdHJpbmdcbiAgc2tpbGxzPzogc3RyaW5nW11cbiAgZXhwZWN0ZWRTYWxhcnk/OiBudW1iZXJcbiAgYXZhaWxhYmxlRnJvbT86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IHByaXNtYS50ZWFtQ2FuZGlkYXRlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUgfHwgXCJcIixcbiAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24sXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudCxcbiAgICAgICAgc3RhZ2U6IGRhdGEuc3RhZ2UgfHwgXCJhcHBsaWVkXCIsXG4gICAgICAgIHNvdXJjZTogZGF0YS5zb3VyY2UgfHwgXCJcIixcbiAgICAgICAgYXBwbGllZEF0OiBkYXRhLmFwcGxpZWRBdCxcbiAgICAgICAgc2tpbGxzOiAoZGF0YS5za2lsbHMgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZXhwZWN0ZWRTYWxhcnk6IGRhdGEuZXhwZWN0ZWRTYWxhcnkgfHwgbnVsbCxcbiAgICAgICAgYXZhaWxhYmxlRnJvbTogZGF0YS5hdmFpbGFibGVGcm9tIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgIG5vdGVzOiBjYW5kaWRhdGUubm90ZXMgYXMgc3RyaW5nW10sXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgYXZhaWxhYmxlRnJvbTogY2FuZGlkYXRlLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNhbmRpZGF0ZVwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBwcmlzbWEudGVhbUNhbmRpZGF0ZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhbmRpZGF0ZSxcbiAgICAgIG5vdGVzOiBjYW5kaWRhdGUubm90ZXMgYXMgc3RyaW5nW10sXG4gICAgICBpbnRlcnZpZXdzOiBjYW5kaWRhdGUuaW50ZXJ2aWV3cyBhcyBhbnlbXSxcbiAgICAgIGV4cGVjdGVkU2FsYXJ5OiBjYW5kaWRhdGUuZXhwZWN0ZWRTYWxhcnkgfHwgdW5kZWZpbmVkLFxuICAgICAgYXZhaWxhYmxlRnJvbTogY2FuZGlkYXRlLmF2YWlsYWJsZUZyb20gfHwgdW5kZWZpbmVkLFxuICAgICAgc2tpbGxzOiBjYW5kaWRhdGUuc2tpbGxzIGFzIHN0cmluZ1tdLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgY2FuZGlkYXRlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNhbmRpZGF0ZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBMRUFWRSBSRVFVRVNUIEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlYXZlUmVxdWVzdHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBwcmlzbWEudGVhbUxlYXZlUmVxdWVzdC5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocikgPT4gKHtcbiAgICAgIGlkOiByLmlkLFxuICAgICAgZW1wbG95ZWVJZDogci5lbXBsb3llZUlkLFxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcbiAgICAgIGxlYXZlVHlwZTogci5sZWF2ZVR5cGUgYXMgYW55LFxuICAgICAgc3RhcnREYXRlOiByLnN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IHIuZW5kRGF0ZSxcbiAgICAgIHRvdGFsRGF5czogci50b3RhbERheXMsXG4gICAgICByZWFzb246IHIucmVhc29uLFxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXG4gICAgICBhcHByb3ZlcklkOiByLmFwcHJvdmVySWQgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZXJOYW1lOiByLmFwcHJvdmVyTmFtZSB8fCB1bmRlZmluZWQsXG4gICAgICBhcHByb3ZlZEF0OiByLmFwcHJvdmVkQXQgfHwgdW5kZWZpbmVkLFxuICAgICAgcmVqZWN0aW9uUmVhc29uOiByLnJlamVjdGlvblJlYXNvbiB8fCB1bmRlZmluZWQsXG4gICAgICBjcmVhdGVkQXQ6IHIuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGxlYXZlIHJlcXVlc3RzOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbGVhdmUgcmVxdWVzdHNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxlYXZlUmVxdWVzdChkYXRhOiB7XG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xuICBsZWF2ZVR5cGU6IHN0cmluZ1xuICBzdGFydERhdGU6IHN0cmluZ1xuICBlbmREYXRlOiBzdHJpbmdcbiAgdG90YWxEYXlzOiBudW1iZXJcbiAgcmVhc29uOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRlYW1MZWF2ZVJlcXVlc3QuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICBsZWF2ZVR5cGU6IGRhdGEubGVhdmVUeXBlLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRhLmVuZERhdGUsXG4gICAgICAgIHRvdGFsRGF5czogZGF0YS50b3RhbERheXMsXG4gICAgICAgIHJlYXNvbjogZGF0YS5yZWFzb24sXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICBsZWF2ZVR5cGU6IHJlcXVlc3QubGVhdmVUeXBlIGFzIGFueSxcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGFwcHJvdmVyTmFtZTogcmVxdWVzdC5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiByZXF1ZXN0LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhdmUgcmVxdWVzdDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWF2ZVJlcXVlc3QoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBwcmlzbWEudGVhbUxlYXZlUmVxdWVzdC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICBsZWF2ZVR5cGU6IHJlcXVlc3QubGVhdmVUeXBlIGFzIGFueSxcbiAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgYXMgYW55LFxuICAgICAgYXBwcm92ZXJJZDogcmVxdWVzdC5hcHByb3ZlcklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGFwcHJvdmVyTmFtZTogcmVxdWVzdC5hcHByb3Zlck5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgYXBwcm92ZWRBdDogcmVxdWVzdC5hcHByb3ZlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHJlamVjdGlvblJlYXNvbjogcmVxdWVzdC5yZWplY3Rpb25SZWFzb24gfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiByZXF1ZXN0LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgbGVhdmUgcmVxdWVzdDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHVwZGF0ZSBsZWF2ZSByZXF1ZXN0XCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IEFUVEVOREFOQ0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXR0ZW5kYW5jZVJlY29yZHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHByaXNtYS50ZWFtQXR0ZW5kYW5jZVJlY29yZC5maW5kTWFueSh7IG9yZGVyQnk6IHsgbWFya2VkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHIpID0+ICh7XG4gICAgICBpZDogci5pZCxcbiAgICAgIGVtcGxveWVlSWQ6IHIuZW1wbG95ZWVJZCxcbiAgICAgIGVtcGxveWVlTmFtZTogci5lbXBsb3llZU5hbWUsXG4gICAgICBkYXRlOiByLmRhdGUsXG4gICAgICBzdGF0dXM6IHIuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNsb2NrSW46IHIuY2xvY2tJbiB8fCB1bmRlZmluZWQsXG4gICAgICBjbG9ja091dDogci5jbG9ja091dCB8fCB1bmRlZmluZWQsXG4gICAgICBicmVha01pbnV0ZXM6IHIuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsSG91cnM6IHIudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXG4gICAgICB3b3JrTG9jYXRpb246IHIud29ya0xvY2F0aW9uIHx8IHVuZGVmaW5lZCxcbiAgICAgIG5vdGVzOiByLm5vdGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hcmtlZEF0OiByLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgcmVjb3JkczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGF0dGVuZGFuY2UgcmVjb3Jkc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXR0ZW5kYW5jZVJlY29yZChkYXRhOiB7XG4gIGVtcGxveWVlSWQ6IHN0cmluZ1xuICBlbXBsb3llZU5hbWU6IHN0cmluZ1xuICBkYXRlOiBzdHJpbmdcbiAgc3RhdHVzOiBzdHJpbmdcbiAgY2xvY2tJbj86IHN0cmluZ1xuICBjbG9ja091dD86IHN0cmluZ1xuICBicmVha01pbnV0ZXM/OiBudW1iZXJcbiAgdG90YWxIb3Vycz86IG51bWJlclxuICB3b3JrTG9jYXRpb24/OiBzdHJpbmdcbiAgbm90ZXM/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBwcmlzbWEudGVhbUF0dGVuZGFuY2VSZWNvcmQuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXG4gICAgICAgIGNsb2NrSW46IGRhdGEuY2xvY2tJbiB8fCBudWxsLFxuICAgICAgICBjbG9ja091dDogZGF0YS5jbG9ja091dCB8fCBudWxsLFxuICAgICAgICBicmVha01pbnV0ZXM6IGRhdGEuYnJlYWtNaW51dGVzIHx8IG51bGwsXG4gICAgICAgIHRvdGFsSG91cnM6IGRhdGEudG90YWxIb3VycyB8fCBudWxsLFxuICAgICAgICB3b3JrTG9jYXRpb246IGRhdGEud29ya0xvY2F0aW9uIHx8IG51bGwsXG4gICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlY29yZCxcbiAgICAgIHN0YXR1czogcmVjb3JkLnN0YXR1cyBhcyBhbnksXG4gICAgICBjbG9ja0luOiByZWNvcmQuY2xvY2tJbiB8fCB1bmRlZmluZWQsXG4gICAgICBjbG9ja091dDogcmVjb3JkLmNsb2NrT3V0IHx8IHVuZGVmaW5lZCxcbiAgICAgIGJyZWFrTWludXRlczogcmVjb3JkLmJyZWFrTWludXRlcyB8fCB1bmRlZmluZWQsXG4gICAgICB0b3RhbEhvdXJzOiByZWNvcmQudG90YWxIb3VycyB8fCB1bmRlZmluZWQsXG4gICAgICB3b3JrTG9jYXRpb246IHJlY29yZC53b3JrTG9jYXRpb24gfHwgdW5kZWZpbmVkLFxuICAgICAgbm90ZXM6IHJlY29yZC5ub3RlcyB8fCB1bmRlZmluZWQsXG4gICAgICBtYXJrZWRBdDogcmVjb3JkLm1hcmtlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBhdHRlbmRhbmNlIHJlY29yZDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBhdHRlbmRhbmNlIHJlY29yZFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXR0ZW5kYW5jZVJlY29yZChpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgcHJpc21hLnRlYW1BdHRlbmRhbmNlUmVjb3JkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVjb3JkLFxuICAgICAgc3RhdHVzOiByZWNvcmQuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNsb2NrSW46IHJlY29yZC5jbG9ja0luIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNsb2NrT3V0OiByZWNvcmQuY2xvY2tPdXQgfHwgdW5kZWZpbmVkLFxuICAgICAgYnJlYWtNaW51dGVzOiByZWNvcmQuYnJlYWtNaW51dGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsSG91cnM6IHJlY29yZC50b3RhbEhvdXJzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHdvcmtMb2NhdGlvbjogcmVjb3JkLndvcmtMb2NhdGlvbiB8fCB1bmRlZmluZWQsXG4gICAgICBub3RlczogcmVjb3JkLm5vdGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIG1hcmtlZEF0OiByZWNvcmQubWFya2VkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGF0dGVuZGFuY2UgcmVjb3JkOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGF0dGVuZGFuY2UgcmVjb3JkXCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IE9LUiBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPS1JzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IG9rcnMgPSBhd2FpdCBwcmlzbWEudGVhbU9LUi5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIG9rcnMubWFwKChvKSA9PiAoe1xuICAgICAgaWQ6IG8uaWQsXG4gICAgICBlbXBsb3llZUlkOiBvLmVtcGxveWVlSWQsXG4gICAgICB0aXRsZTogby50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvLmRlc2NyaXB0aW9uLFxuICAgICAgcXVhcnRlcjogby5xdWFydGVyLFxuICAgICAga2V5UmVzdWx0czogby5rZXlSZXN1bHRzIGFzIGFueVtdLFxuICAgICAgb3ZlcmFsbFByb2dyZXNzOiBvLm92ZXJhbGxQcm9ncmVzcyxcbiAgICAgIHN0YXR1czogby5zdGF0dXMgYXMgYW55LFxuICAgICAgcGFyZW50T0tSSWQ6IG8ucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiBvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBvLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBPS1JzOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggT0tSc1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT0tSKGRhdGE6IHtcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgcXVhcnRlcjogc3RyaW5nXG4gIGtleVJlc3VsdHM/OiBhbnlbXVxuICBvdmVyYWxsUHJvZ3Jlc3M/OiBudW1iZXJcbiAgc3RhdHVzPzogc3RyaW5nXG4gIHBhcmVudE9LUklkPzogc3RyaW5nXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgICAgcXVhcnRlcjogZGF0YS5xdWFydGVyLFxuICAgICAgICBrZXlSZXN1bHRzOiAoZGF0YS5rZXlSZXN1bHRzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIG92ZXJhbGxQcm9ncmVzczogZGF0YS5vdmVyYWxsUHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcIm9uLXRyYWNrXCIsXG4gICAgICAgIHBhcmVudE9LUklkOiBkYXRhLnBhcmVudE9LUklkIHx8IG51bGwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9rcixcbiAgICAgIGtleVJlc3VsdHM6IG9rci5rZXlSZXN1bHRzIGFzIGFueVtdLFxuICAgICAgc3RhdHVzOiBva3Iuc3RhdHVzIGFzIGFueSxcbiAgICAgIHBhcmVudE9LUklkOiBva3IucGFyZW50T0tSSWQgfHwgdW5kZWZpbmVkLFxuICAgICAgY3JlYXRlZEF0OiBva3IuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IG9rci51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIE9LUjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBPS1JcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU9LUihpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb2tyID0gYXdhaXQgcHJpc21hLnRlYW1PS1IudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5va3IsXG4gICAgICBrZXlSZXN1bHRzOiBva3Iua2V5UmVzdWx0cyBhcyBhbnlbXSxcbiAgICAgIHN0YXR1czogb2tyLnN0YXR1cyBhcyBhbnksXG4gICAgICBwYXJlbnRPS1JJZDogb2tyLnBhcmVudE9LUklkIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNyZWF0ZWRBdDogb2tyLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBva3IudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBPS1I6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgT0tSXCIgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IFBFUkZPUk1BTkNFIFJFVklFVyBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZXJmb3JtYW5jZVJldmlld3MoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmV2aWV3cyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcuZmluZE1hbnkoeyBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSB9KVxuICAgIHJldHVybiByZXZpZXdzLm1hcCgocikgPT4gKHtcbiAgICAgIGlkOiByLmlkLFxuICAgICAgZW1wbG95ZWVJZDogci5lbXBsb3llZUlkLFxuICAgICAgZW1wbG95ZWVOYW1lOiByLmVtcGxveWVlTmFtZSxcbiAgICAgIHJldmlld2VySWQ6IHIucmV2aWV3ZXJJZCxcbiAgICAgIHJldmlld2VyTmFtZTogci5yZXZpZXdlck5hbWUsXG4gICAgICBwZXJpb2Q6IHIucGVyaW9kLFxuICAgICAgc2NoZWR1bGVkRGF0ZTogci5zY2hlZHVsZWREYXRlLFxuICAgICAgc3RhdHVzOiByLnN0YXR1cyBhcyBhbnksXG4gICAgICBvdmVyYWxsUmF0aW5nOiByLm92ZXJhbGxSYXRpbmcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogci5jb21wZXRlbmN5UmF0aW5ncyBhcyBhbnlbXSxcbiAgICAgIHN0cmVuZ3Roczogci5zdHJlbmd0aHMgYXMgc3RyaW5nW10sXG4gICAgICBhcmVhc0ZvckltcHJvdmVtZW50OiByLmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2Fsczogci5nb2FscyBhcyBzdHJpbmdbXSxcbiAgICAgIHNhbGFyeUNoYW5nZTogci5zYWxhcnlDaGFuZ2UgfHwgdW5kZWZpbmVkLFxuICAgICAgcHJvbW90aW9uUmVjb21tZW5kZWQ6IHIucHJvbW90aW9uUmVjb21tZW5kZWQsXG4gICAgICBwaXBSZXF1aXJlZDogci5waXBSZXF1aXJlZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByLmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGVyZm9ybWFuY2UgcmV2aWV3czpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHBlcmZvcm1hbmNlIHJldmlld3NcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmZvcm1hbmNlUmV2aWV3KGRhdGE6IHtcbiAgZW1wbG95ZWVJZDogc3RyaW5nXG4gIGVtcGxveWVlTmFtZTogc3RyaW5nXG4gIHJldmlld2VySWQ6IHN0cmluZ1xuICByZXZpZXdlck5hbWU6IHN0cmluZ1xuICBwZXJpb2Q6IHN0cmluZ1xuICBzY2hlZHVsZWREYXRlOiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG4gIG92ZXJhbGxSYXRpbmc/OiBudW1iZXJcbiAgY29tcGV0ZW5jeVJhdGluZ3M/OiBhbnlbXVxuICBzdHJlbmd0aHM/OiBzdHJpbmdbXVxuICBhcmVhc0ZvckltcHJvdmVtZW50Pzogc3RyaW5nW11cbiAgZ29hbHM/OiBzdHJpbmdbXVxuICBzYWxhcnlDaGFuZ2U/OiBudW1iZXJcbiAgcHJvbW90aW9uUmVjb21tZW5kZWQ/OiBib29sZWFuXG4gIHBpcFJlcXVpcmVkPzogYm9vbGVhblxuICBjb21wbGV0ZWRBdD86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBlbXBsb3llZU5hbWU6IGRhdGEuZW1wbG95ZWVOYW1lLFxuICAgICAgICByZXZpZXdlcklkOiBkYXRhLnJldmlld2VySWQsXG4gICAgICAgIHJldmlld2VyTmFtZTogZGF0YS5yZXZpZXdlck5hbWUsXG4gICAgICAgIHBlcmlvZDogZGF0YS5wZXJpb2QsXG4gICAgICAgIHNjaGVkdWxlZERhdGU6IGRhdGEuc2NoZWR1bGVkRGF0ZSxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCBcInNjaGVkdWxlZFwiLFxuICAgICAgICBvdmVyYWxsUmF0aW5nOiBkYXRhLm92ZXJhbGxSYXRpbmcgfHwgMCxcbiAgICAgICAgY29tcGV0ZW5jeVJhdGluZ3M6IChkYXRhLmNvbXBldGVuY3lSYXRpbmdzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHN0cmVuZ3RoczogKGRhdGEuc3RyZW5ndGhzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIGFyZWFzRm9ySW1wcm92ZW1lbnQ6IChkYXRhLmFyZWFzRm9ySW1wcm92ZW1lbnQgfHwgW10pIGFzIGFueSxcbiAgICAgICAgZ29hbHM6IChkYXRhLmdvYWxzIHx8IFtdKSBhcyBhbnksXG4gICAgICAgIHNhbGFyeUNoYW5nZTogZGF0YS5zYWxhcnlDaGFuZ2UgfHwgbnVsbCxcbiAgICAgICAgcHJvbW90aW9uUmVjb21tZW5kZWQ6IGRhdGEucHJvbW90aW9uUmVjb21tZW5kZWQgfHwgZmFsc2UsXG4gICAgICAgIHBpcFJlcXVpcmVkOiBkYXRhLnBpcFJlcXVpcmVkIHx8IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWRBdDogZGF0YS5jb21wbGV0ZWRBdCB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXZpZXcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogcmV2aWV3LmNvbXBldGVuY3lSYXRpbmdzIGFzIGFueVtdLFxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogcmV2aWV3LmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2FsczogcmV2aWV3LmdvYWxzIGFzIHN0cmluZ1tdLFxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByZXZpZXcuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcGVyZm9ybWFuY2UgcmV2aWV3OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHBlcmZvcm1hbmNlIHJldmlld1wiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyZm9ybWFuY2VSZXZpZXcoaWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICB0cnkge1xuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IHByaXNtYS50ZWFtUGVyZm9ybWFuY2VSZXZpZXcudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YSB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXZpZXcsXG4gICAgICBjb21wZXRlbmN5UmF0aW5nczogcmV2aWV3LmNvbXBldGVuY3lSYXRpbmdzIGFzIGFueVtdLFxuICAgICAgc3RyZW5ndGhzOiByZXZpZXcuc3RyZW5ndGhzIGFzIHN0cmluZ1tdLFxuICAgICAgYXJlYXNGb3JJbXByb3ZlbWVudDogcmV2aWV3LmFyZWFzRm9ySW1wcm92ZW1lbnQgYXMgc3RyaW5nW10sXG4gICAgICBnb2FsczogcmV2aWV3LmdvYWxzIGFzIHN0cmluZ1tdLFxuICAgICAgc2FsYXJ5Q2hhbmdlOiByZXZpZXcuc2FsYXJ5Q2hhbmdlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBsZXRlZEF0OiByZXZpZXcuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcGVyZm9ybWFuY2UgcmV2aWV3OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIHBlcmZvcm1hbmNlIHJldmlld1wiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUkFJTklORyBDT1VSU0UgQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhaW5pbmdDb3Vyc2VzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBwcmlzbWEudGVhbVRyYWluaW5nQ291cnNlLmZpbmRNYW55KHsgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0gfSlcbiAgICByZXR1cm4gY291cnNlcy5tYXAoKGMpID0+ICh7XG4gICAgICBpZDogYy5pZCxcbiAgICAgIHRpdGxlOiBjLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGMuZGVzY3JpcHRpb24sXG4gICAgICB0eXBlOiBjLnR5cGUgYXMgYW55LFxuICAgICAgY2F0ZWdvcnk6IGMuY2F0ZWdvcnkgYXMgYW55LFxuICAgICAgZHVyYXRpb246IGMuZHVyYXRpb24sXG4gICAgICBwcm92aWRlcjogYy5wcm92aWRlcixcbiAgICAgIGZvcm1hdDogYy5mb3JtYXQgYXMgYW55LFxuICAgICAgY2VydGlmaWNhdGlvbkV4cGlyeTogYy5jZXJ0aWZpY2F0aW9uRXhwaXJ5IHx8IHVuZGVmaW5lZCxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJhaW5pbmcgY291cnNlczpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHRyYWluaW5nIGNvdXJzZXNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRyYWluaW5nQ291cnNlKGRhdGE6IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG4gIGNhdGVnb3J5Pzogc3RyaW5nXG4gIGR1cmF0aW9uPzogbnVtYmVyXG4gIHByb3ZpZGVyPzogc3RyaW5nXG4gIGZvcm1hdD86IHN0cmluZ1xuICBjZXJ0aWZpY2F0aW9uRXhwaXJ5PzogbnVtYmVyXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLnRlYW1UcmFpbmluZ0NvdXJzZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfHwgXCJcIixcbiAgICAgICAgdHlwZTogZGF0YS50eXBlIHx8IFwib3B0aW9uYWxcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgXCJ0ZWNobmljYWxcIixcbiAgICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24gfHwgMCxcbiAgICAgICAgcHJvdmlkZXI6IGRhdGEucHJvdmlkZXIgfHwgXCJcIixcbiAgICAgICAgZm9ybWF0OiBkYXRhLmZvcm1hdCB8fCBcIm9ubGluZVwiLFxuICAgICAgICBjZXJ0aWZpY2F0aW9uRXhwaXJ5OiBkYXRhLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgbnVsbCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY291cnNlLFxuICAgICAgdHlwZTogY291cnNlLnR5cGUgYXMgYW55LFxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSBhcyBhbnksXG4gICAgICBmb3JtYXQ6IGNvdXJzZS5mb3JtYXQgYXMgYW55LFxuICAgICAgY2VydGlmaWNhdGlvbkV4cGlyeTogY291cnNlLmNlcnRpZmljYXRpb25FeHBpcnkgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgdHJhaW5pbmcgY291cnNlOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHRyYWluaW5nIGNvdXJzZVwiIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBDT1VSU0UgRU5ST0xMTUVOVCBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VFbnJvbGxtZW50cygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnJvbGxtZW50cyA9IGF3YWl0IHByaXNtYS50ZWFtQ291cnNlRW5yb2xsbWVudC5maW5kTWFueSh7IG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9IH0pXG4gICAgcmV0dXJuIGVucm9sbG1lbnRzLm1hcCgoZSkgPT4gKHtcbiAgICAgIGlkOiBlLmlkLFxuICAgICAgY291cnNlSWQ6IGUuY291cnNlSWQsXG4gICAgICBjb3Vyc2VOYW1lOiBlLmNvdXJzZU5hbWUsXG4gICAgICBlbXBsb3llZUlkOiBlLmVtcGxveWVlSWQsXG4gICAgICBzdGF0dXM6IGUuc3RhdHVzIGFzIGFueSxcbiAgICAgIHByb2dyZXNzOiBlLnByb2dyZXNzLFxuICAgICAgZW5yb2xsZWRBdDogZS5lbnJvbGxlZEF0LFxuICAgICAgY29tcGxldGVkQXQ6IGUuY29tcGxldGVkQXQgfHwgdW5kZWZpbmVkLFxuICAgICAgc2NvcmU6IGUuc2NvcmUgfHwgdW5kZWZpbmVkLFxuICAgICAgY2VydGlmaWNhdGVVcmw6IGUuY2VydGlmaWNhdGVVcmwgfHwgdW5kZWZpbmVkLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb3Vyc2UgZW5yb2xsbWVudHM6XCIsIGVycm9yKVxuICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBjb3Vyc2UgZW5yb2xsbWVudHNcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvdXJzZUVucm9sbG1lbnQoZGF0YToge1xuICBjb3Vyc2VJZDogc3RyaW5nXG4gIGNvdXJzZU5hbWU6IHN0cmluZ1xuICBlbXBsb3llZUlkOiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG4gIHByb2dyZXNzPzogbnVtYmVyXG4gIGVucm9sbGVkQXQ6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGNvbnN0IGVucm9sbG1lbnQgPSBhd2FpdCBwcmlzbWEudGVhbUNvdXJzZUVucm9sbG1lbnQuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY291cnNlSWQ6IGRhdGEuY291cnNlSWQsXG4gICAgICAgIGNvdXJzZU5hbWU6IGRhdGEuY291cnNlTmFtZSxcbiAgICAgICAgZW1wbG95ZWVJZDogZGF0YS5lbXBsb3llZUlkLFxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzIHx8IFwiZW5yb2xsZWRcIixcbiAgICAgICAgcHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgZW5yb2xsZWRBdDogZGF0YS5lbnJvbGxlZEF0LFxuICAgICAgfSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5lbnJvbGxtZW50LFxuICAgICAgc3RhdHVzOiBlbnJvbGxtZW50LnN0YXR1cyBhcyBhbnksXG4gICAgICBjb21wbGV0ZWRBdDogZW5yb2xsbWVudC5jb21wbGV0ZWRBdCB8fCB1bmRlZmluZWQsXG4gICAgICBzY29yZTogZW5yb2xsbWVudC5zY29yZSB8fCB1bmRlZmluZWQsXG4gICAgICBjZXJ0aWZpY2F0ZVVybDogZW5yb2xsbWVudC5jZXJ0aWZpY2F0ZVVybCB8fCB1bmRlZmluZWQsXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjb3Vyc2UgZW5yb2xsbWVudDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSBjb3Vyc2UgZW5yb2xsbWVudFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlRW5yb2xsbWVudChpZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW5yb2xsbWVudCA9IGF3YWl0IHByaXNtYS50ZWFtQ291cnNlRW5yb2xsbWVudC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmVucm9sbG1lbnQsXG4gICAgICBzdGF0dXM6IGVucm9sbG1lbnQuc3RhdHVzIGFzIGFueSxcbiAgICAgIGNvbXBsZXRlZEF0OiBlbnJvbGxtZW50LmNvbXBsZXRlZEF0IHx8IHVuZGVmaW5lZCxcbiAgICAgIHNjb3JlOiBlbnJvbGxtZW50LnNjb3JlIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNlcnRpZmljYXRlVXJsOiBlbnJvbGxtZW50LmNlcnRpZmljYXRlVXJsIHx8IHVuZGVmaW5lZCxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNvdXJzZSBlbnJvbGxtZW50OlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gdXBkYXRlIGNvdXJzZSBlbnJvbGxtZW50XCIgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQStZc0IifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/tasks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/finance-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/hr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$0bde21__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:0bde21 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$7c12da__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:7c12da [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3d73c5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:3d73c5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$b40266__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:b40266 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
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
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'completed').length,
        color: "#4ade80"
    },
    {
        name: "In Progress",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'in-progress').length,
        color: "#60a5fa"
    },
    {
        name: "On Hold",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'on-hold').length,
        color: "#fbbf24"
    },
    {
        name: "Planning",
        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'planning').length,
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
const activeProjects = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProjects"].filter((p)=>p.status === 'in-progress').slice(0, 4).map((p)=>({
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        id: 2,
        type: "project",
        action: "Project Completed",
        detail: "E-commerce Redesign for TechMart",
        time: "5 hours ago",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    {
        id: 3,
        type: "task",
        action: "Task Created",
        detail: "SEO Optimization for GreenLife",
        time: "1 day ago",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
    },
    {
        id: 4,
        type: "meeting",
        action: "Client Meeting",
        detail: "Strategy discussion with AutoDeal",
        time: "1 day ago",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
    },
    {
        id: 5,
        type: "alert",
        action: "Overdue Invoice",
        detail: "Invoice #2024-001 - ৳5,200",
        time: "2 days ago",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"]
    }
];
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
const upcomingTasks = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleTasks"].filter((t)=>t.status !== 'done').sort((a, b)=>new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
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
const tasksCompletedToday = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$tasks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleTasks"].filter((t)=>t.status === 'done').length;
const totalMRR = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoicesData"].filter((i)=>i.recurringInvoice).reduce((sum, inv)=>sum + inv.amount, 0);
const overdueInvoices = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoicesData"].filter((i)=>i.status === 'overdue');
const totalOverdue = overdueInvoices.reduce((sum, inv)=>sum + (inv.amount - inv.paid), 0);
const pendingInvoices = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoicesData"].filter((i)=>i.status === 'pending' || i.status === 'sent');
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
const teamOnLeave = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveRequests"].filter((lr)=>lr.status === 'approved' && new Date(lr.startDate) <= new Date() && new Date(lr.endDate) >= new Date());
const recentAttendanceDate = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attendanceRecords"].length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attendanceRecords"][__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attendanceRecords"].length - 1].date : todayDateStr;
const recentAttendance = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attendanceRecords"].filter((a)=>a.date === recentAttendanceDate);
const presentCount = recentAttendance.filter((a)=>[
        'present',
        'late',
        'remote',
        'half-day'
    ].includes(a.status)).length;
const activeEmployees = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$hr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employees"].filter((e)=>e.status === 'active').length;
const attendanceRate = activeEmployees > 0 ? Math.round(presentCount / activeEmployees * 100) : 0;
const teamSnapshot = {
    onLeave: teamOnLeave.length,
    attendanceRate: `${attendanceRate}%`,
    activeEmployees
};
const uniqueClientsCount = [
    ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProjects"].map((p)=>p.client))
].length;
const totalRevenuePaid = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$finance$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoicesData"].filter((i)=>i.status === 'paid').reduce((acc, i)=>acc + i.paid, 0);
function DashboardPage() {
    _s();
    const today = new Date().toISOString().split("T")[0];
    const [dbEmployees, setDbEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dbAttendance, setDbAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clockLoading, setClockLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            async function loadData() {
                const [empRes, attRes] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$0bde21__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getEmployees"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$7c12da__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAttendanceRecords"])()
                ]);
                if (Array.isArray(empRes)) setDbEmployees(empRes);
                if (Array.isArray(attRes)) setDbAttendance(attRes);
            }
            loadData();
        }
    }["DashboardPage.useEffect"], []);
    // Office timing
    const OFFICE_IN = "10:30";
    const GRACE = 30;
    const currentUserId = "EMP001";
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3d73c5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createAttendanceRecord"])({
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$b40266__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateAttendanceRecord"])(myRecord.id, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-chart-2/10 to-chart-3/20 border border-primary/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))]"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 284,
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
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mt-1",
                                                    children: "Here's what's happening with your agency today."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 292,
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
                                                    lineNumber: 293,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 286,
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
                                                                lineNumber: 302,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "New Leads"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 300,
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
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 299,
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
                                                                lineNumber: 311,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Meetings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold mt-2",
                                                    children: todayStats.meetings
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 308,
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
                                                                lineNumber: 320,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Tasks Done"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold mt-2",
                                                    children: todayStats.tasksCompleted
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 317,
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
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Today's Revenue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold mt-2",
                                                    children: todayStats.revenue
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 283,
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
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold",
                                                    children: "Attendance Clock"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Office: 10:30 AM - 7:00 PM · 30 min grace"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 343,
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
                                                lineNumber: 355,
                                                columnNumber: 21
                                            }, this),
                                            " Clock In"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 354,
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
                                                        lineNumber: 360,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold",
                                                        children: myRecord.clockIn
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 23
                                                    }, this),
                                                    myRecord.clockIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[10px] font-medium ${getLabel(myRecord.clockIn).color}`,
                                                        children: getLabel(myRecord.clockIn).text
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 359,
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
                                                        lineNumber: 367,
                                                        columnNumber: 23
                                                    }, this),
                                                    " Clock Out"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 366,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 358,
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
                                                                lineNumber: 373,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-green-500",
                                                                children: myRecord.clockIn
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 83
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-muted-foreground",
                                                                children: "Out"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-red-500",
                                                                children: myRecord.clockOut
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 84
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-muted-foreground",
                                                                children: "Hrs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 375,
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
                                                                lineNumber: 375,
                                                                columnNumber: 84
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: "bg-green-500/20 text-green-500 text-xs px-2 py-1",
                                                children: "✓ Done"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 342,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 340,
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
                                                                lineNumber: 396,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-base font-semibold",
                                                            children: "Today's Priorities"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 394,
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
                                                    lineNumber: 400,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 393,
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
                                                                        lineNumber: 410,
                                                                        columnNumber: 46
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 408,
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
                                                                        lineNumber: 414,
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
                                                                                lineNumber: 418,
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
                                                                                lineNumber: 421,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 417,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, task.id, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$upcoming$2d$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpcomingWidget"], {
                                        delay: 0
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 435,
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
                                                    lineNumber: 442,
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
                                                            lineNumber: 444,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 441,
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
                                                                lineNumber: 462,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-2 rounded-full h-8 w-8 flex items-center justify-center relative z-10 ${typeColors[activity.type]}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 464,
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
                                                                        lineNumber: 468,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-muted-foreground mt-0.5 mb-1",
                                                                        children: activity.detail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 469,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wider",
                                                                        children: activity.time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 389,
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
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-medium text-center leading-tight",
                                                    children: action.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 485,
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
                                            lineNumber: 499,
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
                                            lineNumber: 500,
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
                                            lineNumber: 501,
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
                                            lineNumber: 502,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 498,
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
                                                        lineNumber: 509,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Financial Snapshot"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 507,
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
                                                                        lineNumber: 517,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold tracking-tight",
                                                                children: financialSummary.mrr
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-muted-foreground",
                                                                children: "Monthly Recurring Revenue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 520,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 515,
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
                                                                        lineNumber: 524,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold tracking-tight text-amber-500",
                                                                children: financialSummary.outstanding
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-muted-foreground",
                                                                children: "Expected incoming"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 522,
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
                                                                        lineNumber: 531,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 530,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold tracking-tight text-red-500",
                                                                children: financialSummary.overdue
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 533,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-muted-foreground",
                                                                children: "Requires attention"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 513,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                            delay: 600,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "flex flex-row items-center justify-between pb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm font-medium",
                                                        children: "Revenue vs Target"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-[220px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                            width: "100%",
                                                            height: "100%",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                                                data: monthlyTargetData,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                            id: "profitGradient",
                                                                            x1: "0",
                                                                            y1: "0",
                                                                            x2: "0",
                                                                            y2: "1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "5%",
                                                                                    stopColor: "#10b981",
                                                                                    stopOpacity: 0.3
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 553,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "95%",
                                                                                    stopColor: "#10b981",
                                                                                    stopOpacity: 0
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 554,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 552,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 551,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                        strokeDasharray: "3 3",
                                                                        stroke: "#333",
                                                                        vertical: false
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 557,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                        dataKey: "month",
                                                                        stroke: "#666",
                                                                        fontSize: 11,
                                                                        tickLine: false,
                                                                        axisLine: false
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                        stroke: "#666",
                                                                        fontSize: 11,
                                                                        tickLine: false,
                                                                        axisLine: false,
                                                                        tickFormatter: (v)=>`৳${v / 1000}k`,
                                                                        width: 40
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                        contentStyle: {
                                                                            backgroundColor: "#1a1a2e",
                                                                            border: "1px solid #333",
                                                                            borderRadius: "8px",
                                                                            fontSize: "12px"
                                                                        },
                                                                        formatter: (value)=>`৳${value.toLocaleString()}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                        dataKey: "target",
                                                                        fill: "#666",
                                                                        opacity: 0.3,
                                                                        name: "Target",
                                                                        radius: [
                                                                            4,
                                                                            4,
                                                                            0,
                                                                            0
                                                                        ],
                                                                        maxBarSize: 40
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 564,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                        dataKey: "actual",
                                                                        fill: "#60a5fa",
                                                                        name: "Actual Revenue",
                                                                        radius: [
                                                                            4,
                                                                            4,
                                                                            0,
                                                                            0
                                                                        ],
                                                                        maxBarSize: 40
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 565,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                                        type: "monotone",
                                                                        dataKey: "profit",
                                                                        stroke: "#10b981",
                                                                        strokeWidth: 2,
                                                                        name: "Profit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 566,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                            delay: 700,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "flex flex-row items-center justify-between pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-sm font-medium",
                                                            children: "Pipeline Health"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 576,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "text-[10px]",
                                                            children: "Trailing 7W"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-[220px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                            width: "100%",
                                                            height: "100%",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                                                data: conversionData,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                        strokeDasharray: "3 3",
                                                                        stroke: "#333",
                                                                        vertical: false
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 583,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                        dataKey: "week",
                                                                        stroke: "#666",
                                                                        fontSize: 11,
                                                                        tickLine: false,
                                                                        axisLine: false
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 584,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                        yAxisId: "left",
                                                                        stroke: "#666",
                                                                        fontSize: 11,
                                                                        tickLine: false,
                                                                        axisLine: false,
                                                                        width: 30
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 585,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                        yAxisId: "right",
                                                                        orientation: "right",
                                                                        stroke: "#f97316",
                                                                        fontSize: 11,
                                                                        tickLine: false,
                                                                        axisLine: false,
                                                                        width: 35,
                                                                        tickFormatter: (v)=>`${v}%`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 586,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                        contentStyle: {
                                                                            backgroundColor: "#1a1a2e",
                                                                            border: "1px solid #333",
                                                                            borderRadius: "8px",
                                                                            fontSize: "12px"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 587,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                        yAxisId: "left",
                                                                        dataKey: "leads",
                                                                        fill: "#94a3b8",
                                                                        name: "Total Leads",
                                                                        radius: [
                                                                            4,
                                                                            4,
                                                                            0,
                                                                            0
                                                                        ],
                                                                        stackId: "a",
                                                                        maxBarSize: 30
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 588,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                        yAxisId: "left",
                                                                        dataKey: "qualified",
                                                                        fill: "#60a5fa",
                                                                        name: "Qualified",
                                                                        radius: [
                                                                            4,
                                                                            4,
                                                                            0,
                                                                            0
                                                                        ],
                                                                        stackId: "a",
                                                                        maxBarSize: 30
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 589,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                        yAxisId: "left",
                                                                        dataKey: "converted",
                                                                        fill: "#4ade80",
                                                                        name: "Converted",
                                                                        radius: [
                                                                            4,
                                                                            4,
                                                                            0,
                                                                            0
                                                                        ],
                                                                        stackId: "a",
                                                                        maxBarSize: 30
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 590,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                                        yAxisId: "right",
                                                                        type: "monotone",
                                                                        dataKey: "rate",
                                                                        stroke: "#f97316",
                                                                        strokeWidth: 2,
                                                                        name: "Conv. Rate %"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 591,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 574,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 541,
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
                                                                    lineNumber: 610,
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
                                                                            lineNumber: 612,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `flex items-center gap-0.5 text-[10px] font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendIcon, {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 614,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                kpi.trend
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 613,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 611,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 601,
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
                                                        lineNumber: 628,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 627,
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
                                                                                            lineNumber: 636,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-[10px] text-muted-foreground mt-1",
                                                                                            children: project.client
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/page.tsx",
                                                                                            lineNumber: 637,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 635,
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
                                                                                    lineNumber: 639,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 634,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                                            value: project.progress,
                                                                            className: "h-1.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 643,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 633,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-full mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors pb-1 border-b border-transparent hover:border-foreground mx-auto block text-center",
                                                            children: "View all projects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 626,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 600,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                            delay: 1000,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "flex flex-row items-center justify-between pb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm font-medium",
                                                        children: "Team Performance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-[200px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                            width: "100%",
                                                            height: "100%",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                                data: teamPerformance,
                                                                layout: "vertical",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                        strokeDasharray: "3 3",
                                                                        stroke: "#333",
                                                                        horizontal: false
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 664,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                        type: "number",
                                                                        stroke: "#666",
                                                                        fontSize: 11,
                                                                        tickLine: false,
                                                                        axisLine: false
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 665,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                        type: "category",
                                                                        dataKey: "name",
                                                                        stroke: "#666",
                                                                        fontSize: 11,
                                                                        tickLine: false,
                                                                        axisLine: false,
                                                                        width: 60
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 666,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                        contentStyle: {
                                                                            backgroundColor: "#1a1a2e",
                                                                            border: "1px solid #333",
                                                                            borderRadius: "8px",
                                                                            fontSize: "12px"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 675,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                        dataKey: "tasks",
                                                                        fill: "#333",
                                                                        radius: [
                                                                            0,
                                                                            4,
                                                                            4,
                                                                            0
                                                                        ],
                                                                        name: "Total Tasks",
                                                                        maxBarSize: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 683,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                        dataKey: "completed",
                                                                        fill: "#60a5fa",
                                                                        radius: [
                                                                            0,
                                                                            4,
                                                                            4,
                                                                            0
                                                                        ],
                                                                        name: "Completed",
                                                                        maxBarSize: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 656,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                                            delay: 1050,
                                            className: "border-indigo-500/20 bg-gradient-to-br from-background to-indigo-500/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "flex flex-row items-center justify-between pb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm font-medium flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "w-4 h-4 text-indigo-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Team Status Today"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "flex flex-col justify-center h-[200px] space-y-6 pt-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between px-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-3xl font-bold tracking-tight",
                                                                            children: teamSnapshot.activeEmployees
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 702,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-muted-foreground uppercase tracking-wider font-semibold",
                                                                            children: "Members"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 703,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 701,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-10 w-[1px] bg-border/50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 705,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-3xl font-bold tracking-tight text-amber-500",
                                                                            children: teamSnapshot.onLeave
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 707,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-muted-foreground uppercase tracking-wider font-semibold",
                                                                            children: "On Leave"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 708,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 706,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-10 w-[1px] bg-border/50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 710,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-3xl font-bold tracking-tight text-green-500",
                                                                            children: teamSnapshot.attendanceRate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 712,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-muted-foreground uppercase tracking-wider font-semibold",
                                                                            children: "Present"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 713,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 711,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                                    value: parseInt(teamSnapshot.attendanceRate),
                                                                    className: "h-1.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 717,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground text-center",
                                                                    children: "Live data from HR & Team module"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 718,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 692,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 655,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 482,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 281,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "CfjqCKCf0/O1lFN7vwHnNexBTD0=");
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_64f9dcb5._.js.map