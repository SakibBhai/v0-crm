(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/types/task.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Task Management Types and Interfaces
__turbopack_context__.s([
    "DEFAULT_COLUMNS",
    ()=>DEFAULT_COLUMNS,
    "PRIORITY_CONFIG",
    ()=>PRIORITY_CONFIG,
    "STATUS_CONFIG",
    ()=>STATUS_CONFIG,
    "TASK_TYPE_CONFIG",
    ()=>TASK_TYPE_CONFIG
]);
const PRIORITY_CONFIG = {
    critical: {
        label: "Critical",
        color: "bg-red-500",
        border: "border-red-500",
        text: "text-red-500"
    },
    high: {
        label: "High",
        color: "bg-orange-500",
        border: "border-orange-500",
        text: "text-orange-500"
    },
    medium: {
        label: "Medium",
        color: "bg-blue-500",
        border: "border-blue-500",
        text: "text-blue-500"
    },
    low: {
        label: "Low",
        color: "bg-slate-400",
        border: "border-slate-400",
        text: "text-slate-400"
    }
};
const STATUS_CONFIG = {
    backlog: {
        label: "Backlog",
        color: "bg-slate-500"
    },
    todo: {
        label: "To Do",
        color: "bg-yellow-500"
    },
    "in-progress": {
        label: "In Progress",
        color: "bg-blue-500"
    },
    "in-review": {
        label: "In Review",
        color: "bg-purple-500"
    },
    done: {
        label: "Done",
        color: "bg-green-500"
    }
};
const TASK_TYPE_CONFIG = {
    general: {
        label: "General",
        color: "bg-slate-500",
        icon: "📋"
    },
    bug: {
        label: "Bug",
        color: "bg-red-500",
        icon: "🐛"
    },
    feature: {
        label: "Feature",
        color: "bg-green-500",
        icon: "✨"
    },
    improvement: {
        label: "Improvement",
        color: "bg-blue-500",
        icon: "📈"
    },
    research: {
        label: "Research",
        color: "bg-purple-500",
        icon: "🔍"
    },
    design: {
        label: "Design",
        color: "bg-pink-500",
        icon: "🎨"
    },
    documentation: {
        label: "Documentation",
        color: "bg-orange-500",
        icon: "📝"
    }
};
const DEFAULT_COLUMNS = [
    {
        id: "backlog",
        title: "Backlog",
        color: "bg-slate-500/20"
    },
    {
        id: "todo",
        title: "To Do",
        wipLimit: 5,
        color: "bg-yellow-500/20"
    },
    {
        id: "in-progress",
        title: "In Progress",
        wipLimit: 3,
        color: "bg-blue-500/20"
    },
    {
        id: "in-review",
        title: "In Review",
        wipLimit: 2,
        color: "bg-purple-500/20"
    },
    {
        id: "done",
        title: "Done",
        color: "bg-green-500/20"
    }
];
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
]);

//# sourceMappingURL=lib_d3d04dd1._.js.map