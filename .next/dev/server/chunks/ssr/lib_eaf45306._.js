module.exports = [
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
"[project]/lib/types/hr.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// HR & Team Management Types and Interfaces
// ==================== Core Employee Types ====================
__turbopack_context__.s([
    "ATTENDANCE_STATUS_CONFIG",
    ()=>ATTENDANCE_STATUS_CONFIG,
    "CANDIDATE_STAGE_CONFIG",
    ()=>CANDIDATE_STAGE_CONFIG,
    "DEPARTMENT_CONFIG",
    ()=>DEPARTMENT_CONFIG,
    "PROFICIENCY_CONFIG",
    ()=>PROFICIENCY_CONFIG
]);
const DEPARTMENT_CONFIG = {
    design: {
        label: "Design",
        color: "text-pink-500",
        bgColor: "bg-pink-500/20"
    },
    development: {
        label: "Development",
        color: "text-blue-500",
        bgColor: "bg-blue-500/20"
    },
    marketing: {
        label: "Marketing",
        color: "text-green-500",
        bgColor: "bg-green-500/20"
    },
    content: {
        label: "Content",
        color: "text-purple-500",
        bgColor: "bg-purple-500/20"
    },
    management: {
        label: "Management",
        color: "text-orange-500",
        bgColor: "bg-orange-500/20"
    },
    hr: {
        label: "HR",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/20"
    },
    finance: {
        label: "Finance",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/20"
    }
};
const PROFICIENCY_CONFIG = {
    novice: {
        label: "Novice",
        color: "bg-slate-400",
        value: 25
    },
    intermediate: {
        label: "Intermediate",
        color: "bg-blue-400",
        value: 50
    },
    advanced: {
        label: "Advanced",
        color: "bg-green-400",
        value: 75
    },
    expert: {
        label: "Expert",
        color: "bg-purple-400",
        value: 100
    }
};
const CANDIDATE_STAGE_CONFIG = {
    applied: {
        label: "Applied",
        color: "bg-slate-500"
    },
    screening: {
        label: "Screening",
        color: "bg-yellow-500"
    },
    interview: {
        label: "Interview",
        color: "bg-blue-500"
    },
    offer: {
        label: "Offer",
        color: "bg-purple-500"
    },
    hired: {
        label: "Hired",
        color: "bg-green-500"
    },
    rejected: {
        label: "Rejected",
        color: "bg-red-500"
    }
};
const ATTENDANCE_STATUS_CONFIG = {
    present: {
        label: "Present",
        color: "text-green-500",
        bgColor: "bg-green-500/20",
        icon: "CheckCircle"
    },
    absent: {
        label: "Absent",
        color: "text-red-500",
        bgColor: "bg-red-500/20",
        icon: "XCircle"
    },
    late: {
        label: "Late",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/20",
        icon: "Clock"
    },
    "half-day": {
        label: "Half Day",
        color: "text-orange-500",
        bgColor: "bg-orange-500/20",
        icon: "Sun"
    },
    remote: {
        label: "Remote",
        color: "text-blue-500",
        bgColor: "bg-blue-500/20",
        icon: "Home"
    }
};
}),
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
];

//# sourceMappingURL=lib_eaf45306._.js.map