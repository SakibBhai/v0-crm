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
"[project]/lib/types/finance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
]);

//# sourceMappingURL=lib_11a8172b._.js.map