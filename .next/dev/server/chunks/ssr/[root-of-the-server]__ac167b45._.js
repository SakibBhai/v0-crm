module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/app/actions/team.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001eb6bca3fe26cfa507c721d4988d8545cd76b54a":"getAttendanceRecords","003090f33386efbc9b35406ee46985800622c5a9cc":"getOKRs","005aa7cc608575b728a9bc2d666e13fef7ae343d97":"getPerformanceReviews","006aba431ffd5229044bda542a8cbeae3c5af3d714":"getCourseEnrollments","00dc2e0adff16d4fbae5327cd83c3cf844682cf8b6":"getLeaveRequests","00e1fc28bcb7a8112c9d933a07b5a8c66ee9290bb4":"getCandidates","00f6488e3213e8c364bd2d4ecfd34a04b0f421768b":"getTrainingCourses","00fb1974db4910a06692cbc98c72389e0904392988":"getEmployees","4048ae624aa9b12a0f67b84b737237c49c7685fe2a":"createOKR","4060db35365d63a10b9c769a3f01c2f388de115747":"createLeaveRequest","40664ce3edfb6267564998cc453c448183645a10f1":"createPerformanceReview","4092568684207374bdda6cb3a9b7ebfb457c0b7032":"createCourseEnrollment","4093e6c5cf141aa941dfcff860cebc24eb426aa30b":"createEmployee","40a0695c274b90f3d9cf08b050c3786b4cf9cbb47b":"createCandidate","40a899116b81aa2134ce96a9399d3961d4bdf4a215":"createAttendanceRecord","40b3c02fa5575a66657ca61e2a002fc653ff960ba5":"createTrainingCourse","40d6976aaa715341c70456c90e8b9acbe93016cd3e":"deleteEmployee","6026f54bfd35c04c6e66fb34f54b5980539f734a69":"updateOKR","607b8d404ac3abe5234d085dbdb52643a850610e12":"updateCandidate","60b39255d922d286c5dab5d9cf5a8cdb28f839eaf2":"updateAttendanceRecord","60e4f8c233decf5f0c7d3512023fd2b7daf0eeac9c":"updatePerformanceReview","60e67d9e029593640440ce323ec9eef8aa1c64598c":"updateCourseEnrollment","60e93eed9653369b98a34a18eb809d1fac7d22e109":"updateEmployee","60f05a7c69416d8ca83debee53eb30c2d45e2ae0ed":"updateLeaveRequest"},"",""] */ __turbopack_context__.s([
    "createAttendanceRecord",
    ()=>createAttendanceRecord,
    "createCandidate",
    ()=>createCandidate,
    "createCourseEnrollment",
    ()=>createCourseEnrollment,
    "createEmployee",
    ()=>createEmployee,
    "createLeaveRequest",
    ()=>createLeaveRequest,
    "createOKR",
    ()=>createOKR,
    "createPerformanceReview",
    ()=>createPerformanceReview,
    "createTrainingCourse",
    ()=>createTrainingCourse,
    "deleteEmployee",
    ()=>deleteEmployee,
    "getAttendanceRecords",
    ()=>getAttendanceRecords,
    "getCandidates",
    ()=>getCandidates,
    "getCourseEnrollments",
    ()=>getCourseEnrollments,
    "getEmployees",
    ()=>getEmployees,
    "getLeaveRequests",
    ()=>getLeaveRequests,
    "getOKRs",
    ()=>getOKRs,
    "getPerformanceReviews",
    ()=>getPerformanceReviews,
    "getTrainingCourses",
    ()=>getTrainingCourses,
    "updateAttendanceRecord",
    ()=>updateAttendanceRecord,
    "updateCandidate",
    ()=>updateCandidate,
    "updateCourseEnrollment",
    ()=>updateCourseEnrollment,
    "updateEmployee",
    ()=>updateEmployee,
    "updateLeaveRequest",
    ()=>updateLeaveRequest,
    "updateOKR",
    ()=>updateOKR,
    "updatePerformanceReview",
    ()=>updatePerformanceReview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
async function getEmployees() {
    try {
        const employees = await prisma.teamEmployee.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return employees.map((e)=>({
                id: e.id,
                firstName: e.firstName,
                lastName: e.lastName,
                email: e.email,
                phone: e.phone,
                employeeId: e.employeeId,
                jobTitle: e.jobTitle,
                department: e.department,
                employmentType: e.employmentType,
                status: e.status,
                managerId: e.managerId || undefined,
                managerName: e.managerName || undefined,
                startDate: e.startDate,
                endDate: e.endDate || undefined,
                workLocation: e.workLocation,
                salary: e.salary,
                currency: e.currency,
                payFrequency: e.payFrequency,
                skills: e.skills,
                yearsOfExperience: e.yearsOfExperience,
                certifications: e.certifications,
                performanceRating: e.performanceRating,
                documents: e.documents,
                careerHistory: e.careerHistory,
                emergencyContacts: e.emergencyContacts,
                leaveBalance: e.leaveBalance,
                createdAt: e.createdAt.toISOString(),
                updatedAt: e.updatedAt.toISOString()
            }));
    } catch (error) {
        console.error("Error fetching employees:", error);
        return {
            error: "Failed to fetch employees"
        };
    }
}
async function createEmployee(data) {
    try {
        const employee = await prisma.teamEmployee.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone || "",
                employeeId: data.employeeId,
                jobTitle: data.jobTitle,
                department: data.department,
                employmentType: data.employmentType || "full-time",
                status: data.status || "active",
                managerId: data.managerId || null,
                managerName: data.managerName || null,
                startDate: data.startDate,
                workLocation: data.workLocation || "Remote",
                salary: data.salary || 0,
                currency: data.currency || "BDT",
                payFrequency: data.payFrequency || "monthly",
                skills: data.skills || [],
                yearsOfExperience: data.yearsOfExperience || 0,
                certifications: data.certifications || [],
                performanceRating: data.performanceRating || 0,
                documents: data.documents || [],
                careerHistory: data.careerHistory || [],
                emergencyContacts: data.emergencyContacts || [],
                leaveBalance: data.leaveBalance || {}
            }
        });
        return {
            ...employee,
            managerId: employee.managerId || undefined,
            managerName: employee.managerName || undefined,
            endDate: employee.endDate || undefined,
            skills: employee.skills,
            certifications: employee.certifications,
            documents: employee.documents,
            careerHistory: employee.careerHistory,
            emergencyContacts: employee.emergencyContacts,
            leaveBalance: employee.leaveBalance,
            createdAt: employee.createdAt.toISOString(),
            updatedAt: employee.updatedAt.toISOString()
        };
    } catch (error) {
        console.error("Error creating employee:", error);
        return {
            error: "Failed to create employee"
        };
    }
}
async function updateEmployee(id, data) {
    try {
        const employee = await prisma.teamEmployee.update({
            where: {
                id
            },
            data
        });
        return {
            ...employee,
            managerId: employee.managerId || undefined,
            managerName: employee.managerName || undefined,
            endDate: employee.endDate || undefined,
            skills: employee.skills,
            certifications: employee.certifications,
            documents: employee.documents,
            careerHistory: employee.careerHistory,
            emergencyContacts: employee.emergencyContacts,
            leaveBalance: employee.leaveBalance,
            createdAt: employee.createdAt.toISOString(),
            updatedAt: employee.updatedAt.toISOString()
        };
    } catch (error) {
        console.error("Error updating employee:", error);
        return {
            error: "Failed to update employee"
        };
    }
}
async function deleteEmployee(id) {
    try {
        await prisma.teamEmployee.delete({
            where: {
                id
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting employee:", error);
        return {
            error: "Failed to delete employee"
        };
    }
}
async function getCandidates() {
    try {
        const candidates = await prisma.teamCandidate.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return candidates.map((c)=>({
                id: c.id,
                firstName: c.firstName,
                lastName: c.lastName,
                email: c.email,
                phone: c.phone,
                position: c.position,
                department: c.department,
                stage: c.stage,
                source: c.source,
                appliedAt: c.appliedAt,
                notes: c.notes,
                interviews: c.interviews,
                rating: c.rating,
                expectedSalary: c.expectedSalary || undefined,
                availableFrom: c.availableFrom || undefined,
                skills: c.skills
            }));
    } catch (error) {
        console.error("Error fetching candidates:", error);
        return {
            error: "Failed to fetch candidates"
        };
    }
}
async function createCandidate(data) {
    try {
        const candidate = await prisma.teamCandidate.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone || "",
                position: data.position,
                department: data.department,
                stage: data.stage || "applied",
                source: data.source || "",
                appliedAt: data.appliedAt,
                skills: data.skills || [],
                expectedSalary: data.expectedSalary || null,
                availableFrom: data.availableFrom || null
            }
        });
        return {
            ...candidate,
            notes: candidate.notes,
            interviews: candidate.interviews,
            expectedSalary: candidate.expectedSalary || undefined,
            availableFrom: candidate.availableFrom || undefined,
            skills: candidate.skills
        };
    } catch (error) {
        console.error("Error creating candidate:", error);
        return {
            error: "Failed to create candidate"
        };
    }
}
async function updateCandidate(id, data) {
    try {
        const candidate = await prisma.teamCandidate.update({
            where: {
                id
            },
            data
        });
        return {
            ...candidate,
            notes: candidate.notes,
            interviews: candidate.interviews,
            expectedSalary: candidate.expectedSalary || undefined,
            availableFrom: candidate.availableFrom || undefined,
            skills: candidate.skills
        };
    } catch (error) {
        console.error("Error updating candidate:", error);
        return {
            error: "Failed to update candidate"
        };
    }
}
async function getLeaveRequests() {
    try {
        const requests = await prisma.teamLeaveRequest.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return requests.map((r)=>({
                id: r.id,
                employeeId: r.employeeId,
                employeeName: r.employeeName,
                leaveType: r.leaveType,
                startDate: r.startDate,
                endDate: r.endDate,
                totalDays: r.totalDays,
                reason: r.reason,
                status: r.status,
                approverId: r.approverId || undefined,
                approverName: r.approverName || undefined,
                approvedAt: r.approvedAt || undefined,
                rejectionReason: r.rejectionReason || undefined,
                createdAt: r.createdAt.toISOString()
            }));
    } catch (error) {
        console.error("Error fetching leave requests:", error);
        return {
            error: "Failed to fetch leave requests"
        };
    }
}
async function createLeaveRequest(data) {
    try {
        const request = await prisma.teamLeaveRequest.create({
            data: {
                employeeId: data.employeeId,
                employeeName: data.employeeName,
                leaveType: data.leaveType,
                startDate: data.startDate,
                endDate: data.endDate,
                totalDays: data.totalDays,
                reason: data.reason,
                status: "pending"
            }
        });
        return {
            ...request,
            leaveType: request.leaveType,
            status: request.status,
            approverId: request.approverId || undefined,
            approverName: request.approverName || undefined,
            approvedAt: request.approvedAt || undefined,
            rejectionReason: request.rejectionReason || undefined,
            createdAt: request.createdAt.toISOString()
        };
    } catch (error) {
        console.error("Error creating leave request:", error);
        return {
            error: "Failed to create leave request"
        };
    }
}
async function updateLeaveRequest(id, data) {
    try {
        const request = await prisma.teamLeaveRequest.update({
            where: {
                id
            },
            data
        });
        return {
            ...request,
            leaveType: request.leaveType,
            status: request.status,
            approverId: request.approverId || undefined,
            approverName: request.approverName || undefined,
            approvedAt: request.approvedAt || undefined,
            rejectionReason: request.rejectionReason || undefined,
            createdAt: request.createdAt.toISOString()
        };
    } catch (error) {
        console.error("Error updating leave request:", error);
        return {
            error: "Failed to update leave request"
        };
    }
}
async function getAttendanceRecords() {
    try {
        const records = await prisma.teamAttendanceRecord.findMany({
            orderBy: {
                markedAt: "desc"
            }
        });
        return records.map((r)=>({
                id: r.id,
                employeeId: r.employeeId,
                employeeName: r.employeeName,
                date: r.date,
                status: r.status,
                clockIn: r.clockIn || undefined,
                clockOut: r.clockOut || undefined,
                breakMinutes: r.breakMinutes || undefined,
                totalHours: r.totalHours || undefined,
                workLocation: r.workLocation || undefined,
                notes: r.notes || undefined,
                markedAt: r.markedAt.toISOString()
            }));
    } catch (error) {
        console.error("Error fetching attendance records:", error);
        return {
            error: "Failed to fetch attendance records"
        };
    }
}
async function createAttendanceRecord(data) {
    try {
        const record = await prisma.teamAttendanceRecord.create({
            data: {
                employeeId: data.employeeId,
                employeeName: data.employeeName,
                date: data.date,
                status: data.status,
                clockIn: data.clockIn || null,
                clockOut: data.clockOut || null,
                breakMinutes: data.breakMinutes || null,
                totalHours: data.totalHours || null,
                workLocation: data.workLocation || null,
                notes: data.notes || null
            }
        });
        return {
            ...record,
            status: record.status,
            clockIn: record.clockIn || undefined,
            clockOut: record.clockOut || undefined,
            breakMinutes: record.breakMinutes || undefined,
            totalHours: record.totalHours || undefined,
            workLocation: record.workLocation || undefined,
            notes: record.notes || undefined,
            markedAt: record.markedAt.toISOString()
        };
    } catch (error) {
        console.error("Error creating attendance record:", error);
        return {
            error: "Failed to create attendance record"
        };
    }
}
async function updateAttendanceRecord(id, data) {
    try {
        const record = await prisma.teamAttendanceRecord.update({
            where: {
                id
            },
            data
        });
        return {
            ...record,
            status: record.status,
            clockIn: record.clockIn || undefined,
            clockOut: record.clockOut || undefined,
            breakMinutes: record.breakMinutes || undefined,
            totalHours: record.totalHours || undefined,
            workLocation: record.workLocation || undefined,
            notes: record.notes || undefined,
            markedAt: record.markedAt.toISOString()
        };
    } catch (error) {
        console.error("Error updating attendance record:", error);
        return {
            error: "Failed to update attendance record"
        };
    }
}
async function getOKRs() {
    try {
        const okrs = await prisma.teamOKR.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return okrs.map((o)=>({
                id: o.id,
                employeeId: o.employeeId,
                title: o.title,
                description: o.description,
                quarter: o.quarter,
                keyResults: o.keyResults,
                overallProgress: o.overallProgress,
                status: o.status,
                parentOKRId: o.parentOKRId || undefined,
                createdAt: o.createdAt.toISOString(),
                updatedAt: o.updatedAt.toISOString()
            }));
    } catch (error) {
        console.error("Error fetching OKRs:", error);
        return {
            error: "Failed to fetch OKRs"
        };
    }
}
async function createOKR(data) {
    try {
        const okr = await prisma.teamOKR.create({
            data: {
                employeeId: data.employeeId,
                title: data.title,
                description: data.description || "",
                quarter: data.quarter,
                keyResults: data.keyResults || [],
                overallProgress: data.overallProgress || 0,
                status: data.status || "on-track",
                parentOKRId: data.parentOKRId || null
            }
        });
        return {
            ...okr,
            keyResults: okr.keyResults,
            status: okr.status,
            parentOKRId: okr.parentOKRId || undefined,
            createdAt: okr.createdAt.toISOString(),
            updatedAt: okr.updatedAt.toISOString()
        };
    } catch (error) {
        console.error("Error creating OKR:", error);
        return {
            error: "Failed to create OKR"
        };
    }
}
async function updateOKR(id, data) {
    try {
        const okr = await prisma.teamOKR.update({
            where: {
                id
            },
            data
        });
        return {
            ...okr,
            keyResults: okr.keyResults,
            status: okr.status,
            parentOKRId: okr.parentOKRId || undefined,
            createdAt: okr.createdAt.toISOString(),
            updatedAt: okr.updatedAt.toISOString()
        };
    } catch (error) {
        console.error("Error updating OKR:", error);
        return {
            error: "Failed to update OKR"
        };
    }
}
async function getPerformanceReviews() {
    try {
        const reviews = await prisma.teamPerformanceReview.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return reviews.map((r)=>({
                id: r.id,
                employeeId: r.employeeId,
                employeeName: r.employeeName,
                reviewerId: r.reviewerId,
                reviewerName: r.reviewerName,
                period: r.period,
                scheduledDate: r.scheduledDate,
                status: r.status,
                overallRating: r.overallRating,
                competencyRatings: r.competencyRatings,
                strengths: r.strengths,
                areasForImprovement: r.areasForImprovement,
                goals: r.goals,
                salaryChange: r.salaryChange || undefined,
                promotionRecommended: r.promotionRecommended,
                pipRequired: r.pipRequired,
                completedAt: r.completedAt || undefined
            }));
    } catch (error) {
        console.error("Error fetching performance reviews:", error);
        return {
            error: "Failed to fetch performance reviews"
        };
    }
}
async function createPerformanceReview(data) {
    try {
        const review = await prisma.teamPerformanceReview.create({
            data: {
                employeeId: data.employeeId,
                employeeName: data.employeeName,
                reviewerId: data.reviewerId,
                reviewerName: data.reviewerName,
                period: data.period,
                scheduledDate: data.scheduledDate,
                status: data.status || "scheduled",
                overallRating: data.overallRating || 0,
                competencyRatings: data.competencyRatings || [],
                strengths: data.strengths || [],
                areasForImprovement: data.areasForImprovement || [],
                goals: data.goals || [],
                salaryChange: data.salaryChange || null,
                promotionRecommended: data.promotionRecommended || false,
                pipRequired: data.pipRequired || false,
                completedAt: data.completedAt || null
            }
        });
        return {
            ...review,
            competencyRatings: review.competencyRatings,
            strengths: review.strengths,
            areasForImprovement: review.areasForImprovement,
            goals: review.goals,
            salaryChange: review.salaryChange || undefined,
            completedAt: review.completedAt || undefined
        };
    } catch (error) {
        console.error("Error creating performance review:", error);
        return {
            error: "Failed to create performance review"
        };
    }
}
async function updatePerformanceReview(id, data) {
    try {
        const review = await prisma.teamPerformanceReview.update({
            where: {
                id
            },
            data
        });
        return {
            ...review,
            competencyRatings: review.competencyRatings,
            strengths: review.strengths,
            areasForImprovement: review.areasForImprovement,
            goals: review.goals,
            salaryChange: review.salaryChange || undefined,
            completedAt: review.completedAt || undefined
        };
    } catch (error) {
        console.error("Error updating performance review:", error);
        return {
            error: "Failed to update performance review"
        };
    }
}
async function getTrainingCourses() {
    try {
        const courses = await prisma.teamTrainingCourse.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return courses.map((c)=>({
                id: c.id,
                title: c.title,
                description: c.description,
                type: c.type,
                category: c.category,
                duration: c.duration,
                provider: c.provider,
                format: c.format,
                certificationExpiry: c.certificationExpiry || undefined
            }));
    } catch (error) {
        console.error("Error fetching training courses:", error);
        return {
            error: "Failed to fetch training courses"
        };
    }
}
async function createTrainingCourse(data) {
    try {
        const course = await prisma.teamTrainingCourse.create({
            data: {
                title: data.title,
                description: data.description || "",
                type: data.type || "optional",
                category: data.category || "technical",
                duration: data.duration || 0,
                provider: data.provider || "",
                format: data.format || "online",
                certificationExpiry: data.certificationExpiry || null
            }
        });
        return {
            ...course,
            type: course.type,
            category: course.category,
            format: course.format,
            certificationExpiry: course.certificationExpiry || undefined
        };
    } catch (error) {
        console.error("Error creating training course:", error);
        return {
            error: "Failed to create training course"
        };
    }
}
async function getCourseEnrollments() {
    try {
        const enrollments = await prisma.teamCourseEnrollment.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return enrollments.map((e)=>({
                id: e.id,
                courseId: e.courseId,
                courseName: e.courseName,
                employeeId: e.employeeId,
                status: e.status,
                progress: e.progress,
                enrolledAt: e.enrolledAt,
                completedAt: e.completedAt || undefined,
                score: e.score || undefined,
                certificateUrl: e.certificateUrl || undefined
            }));
    } catch (error) {
        console.error("Error fetching course enrollments:", error);
        return {
            error: "Failed to fetch course enrollments"
        };
    }
}
async function createCourseEnrollment(data) {
    try {
        const enrollment = await prisma.teamCourseEnrollment.create({
            data: {
                courseId: data.courseId,
                courseName: data.courseName,
                employeeId: data.employeeId,
                status: data.status || "enrolled",
                progress: data.progress || 0,
                enrolledAt: data.enrolledAt
            }
        });
        return {
            ...enrollment,
            status: enrollment.status,
            completedAt: enrollment.completedAt || undefined,
            score: enrollment.score || undefined,
            certificateUrl: enrollment.certificateUrl || undefined
        };
    } catch (error) {
        console.error("Error creating course enrollment:", error);
        return {
            error: "Failed to create course enrollment"
        };
    }
}
async function updateCourseEnrollment(id, data) {
    try {
        const enrollment = await prisma.teamCourseEnrollment.update({
            where: {
                id
            },
            data
        });
        return {
            ...enrollment,
            status: enrollment.status,
            completedAt: enrollment.completedAt || undefined,
            score: enrollment.score || undefined,
            certificateUrl: enrollment.certificateUrl || undefined
        };
    } catch (error) {
        console.error("Error updating course enrollment:", error);
        return {
            error: "Failed to update course enrollment"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getCandidates,
    createCandidate,
    updateCandidate,
    getLeaveRequests,
    createLeaveRequest,
    updateLeaveRequest,
    getAttendanceRecords,
    createAttendanceRecord,
    updateAttendanceRecord,
    getOKRs,
    createOKR,
    updateOKR,
    getPerformanceReviews,
    createPerformanceReview,
    updatePerformanceReview,
    getTrainingCourses,
    createTrainingCourse,
    getCourseEnrollments,
    createCourseEnrollment,
    updateCourseEnrollment
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "00fb1974db4910a06692cbc98c72389e0904392988", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEmployee, "4093e6c5cf141aa941dfcff860cebc24eb426aa30b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployee, "60e93eed9653369b98a34a18eb809d1fac7d22e109", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployee, "40d6976aaa715341c70456c90e8b9acbe93016cd3e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCandidates, "00e1fc28bcb7a8112c9d933a07b5a8c66ee9290bb4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCandidate, "40a0695c274b90f3d9cf08b050c3786b4cf9cbb47b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCandidate, "607b8d404ac3abe5234d085dbdb52643a850610e12", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeaveRequests, "00dc2e0adff16d4fbae5327cd83c3cf844682cf8b6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLeaveRequest, "4060db35365d63a10b9c769a3f01c2f388de115747", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeaveRequest, "60f05a7c69416d8ca83debee53eb30c2d45e2ae0ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAttendanceRecords, "001eb6bca3fe26cfa507c721d4988d8545cd76b54a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAttendanceRecord, "40a899116b81aa2134ce96a9399d3961d4bdf4a215", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAttendanceRecord, "60b39255d922d286c5dab5d9cf5a8cdb28f839eaf2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOKRs, "003090f33386efbc9b35406ee46985800622c5a9cc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createOKR, "4048ae624aa9b12a0f67b84b737237c49c7685fe2a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateOKR, "6026f54bfd35c04c6e66fb34f54b5980539f734a69", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPerformanceReviews, "005aa7cc608575b728a9bc2d666e13fef7ae343d97", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPerformanceReview, "40664ce3edfb6267564998cc453c448183645a10f1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePerformanceReview, "60e4f8c233decf5f0c7d3512023fd2b7daf0eeac9c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTrainingCourses, "00f6488e3213e8c364bd2d4ecfd34a04b0f421768b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTrainingCourse, "40b3c02fa5575a66657ca61e2a002fc653ff960ba5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCourseEnrollments, "006aba431ffd5229044bda542a8cbeae3c5af3d714", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCourseEnrollment, "4092568684207374bdda6cb3a9b7ebfb457c0b7032", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCourseEnrollment, "60e67d9e029593640440ce323ec9eef8aa1c64598c", null);
}),
"[project]/.next-internal/server/app/team/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/team.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/team.ts [app-rsc] (ecmascript)");
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
;
}),
"[project]/.next-internal/server/app/team/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/team.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "001eb6bca3fe26cfa507c721d4988d8545cd76b54a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAttendanceRecords"],
    "003090f33386efbc9b35406ee46985800622c5a9cc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOKRs"],
    "005aa7cc608575b728a9bc2d666e13fef7ae343d97",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPerformanceReviews"],
    "006aba431ffd5229044bda542a8cbeae3c5af3d714",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCourseEnrollments"],
    "00dc2e0adff16d4fbae5327cd83c3cf844682cf8b6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeaveRequests"],
    "00e1fc28bcb7a8112c9d933a07b5a8c66ee9290bb4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCandidates"],
    "00f6488e3213e8c364bd2d4ecfd34a04b0f421768b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTrainingCourses"],
    "00fb1974db4910a06692cbc98c72389e0904392988",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployees"],
    "4048ae624aa9b12a0f67b84b737237c49c7685fe2a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOKR"],
    "4060db35365d63a10b9c769a3f01c2f388de115747",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeaveRequest"],
    "4092568684207374bdda6cb3a9b7ebfb457c0b7032",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCourseEnrollment"],
    "4093e6c5cf141aa941dfcff860cebc24eb426aa30b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEmployee"],
    "40a0695c274b90f3d9cf08b050c3786b4cf9cbb47b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCandidate"],
    "40a899116b81aa2134ce96a9399d3961d4bdf4a215",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAttendanceRecord"],
    "40d6976aaa715341c70456c90e8b9acbe93016cd3e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployee"],
    "607b8d404ac3abe5234d085dbdb52643a850610e12",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCandidate"],
    "60b39255d922d286c5dab5d9cf5a8cdb28f839eaf2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAttendanceRecord"],
    "60e93eed9653369b98a34a18eb809d1fac7d22e109",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmployee"],
    "60f05a7c69416d8ca83debee53eb30c2d45e2ae0ed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLeaveRequest"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$team$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/team/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/team.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/team.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac167b45._.js.map