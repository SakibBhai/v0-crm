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
];

//# sourceMappingURL=lib_1575c7b3._.js.map