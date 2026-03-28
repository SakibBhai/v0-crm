"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// ==================== EMPLOYEE ACTIONS ====================

export async function getEmployees() {
  try {
    const employees = await prisma.teamEmployee.findMany({ orderBy: { createdAt: "desc" } })
    return employees.map((e) => ({
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
      skills: e.skills as any[],
      yearsOfExperience: e.yearsOfExperience,
      certifications: e.certifications as string[],
      performanceRating: e.performanceRating,
      documents: e.documents as any[],
      careerHistory: e.careerHistory as any[],
      emergencyContacts: e.emergencyContacts as any[],
      leaveBalance: e.leaveBalance as any,
      createdAt: e.createdAt.toISOString(),
      updatedAt: e.updatedAt.toISOString(),
    }))
  } catch (error) {
    console.error("Error fetching employees:", error)
    return { error: "Failed to fetch employees" }
  }
}

export async function createEmployee(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  employeeId: string
  jobTitle: string
  department: string
  employmentType?: string
  status?: string
  managerId?: string
  managerName?: string
  startDate: string
  workLocation?: string
  salary?: number
  currency?: string
  payFrequency?: string
  skills?: any[]
  yearsOfExperience?: number
  certifications?: string[]
  performanceRating?: number
  documents?: any[]
  careerHistory?: any[]
  emergencyContacts?: any[]
  leaveBalance?: any
}) {
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
        skills: (data.skills || []) as any,
        yearsOfExperience: data.yearsOfExperience || 0,
        certifications: (data.certifications || []) as any,
        performanceRating: data.performanceRating || 0,
        documents: (data.documents || []) as any,
        careerHistory: (data.careerHistory || []) as any,
        emergencyContacts: (data.emergencyContacts || []) as any,
        leaveBalance: (data.leaveBalance || {}) as any,
      },
    })
    return {
      ...employee,
      managerId: employee.managerId || undefined,
      managerName: employee.managerName || undefined,
      endDate: employee.endDate || undefined,
      skills: employee.skills as any[],
      certifications: employee.certifications as string[],
      documents: employee.documents as any[],
      careerHistory: employee.careerHistory as any[],
      emergencyContacts: employee.emergencyContacts as any[],
      leaveBalance: employee.leaveBalance as any,
      createdAt: employee.createdAt.toISOString(),
      updatedAt: employee.updatedAt.toISOString(),
    }
  } catch (error) {
    console.error("Error creating employee:", error)
    return { error: "Failed to create employee" }
  }
}

export async function updateEmployee(id: string, data: Record<string, any>) {
  try {
    const employee = await prisma.teamEmployee.update({ where: { id }, data })
    return {
      ...employee,
      managerId: employee.managerId || undefined,
      managerName: employee.managerName || undefined,
      endDate: employee.endDate || undefined,
      skills: employee.skills as any[],
      certifications: employee.certifications as string[],
      documents: employee.documents as any[],
      careerHistory: employee.careerHistory as any[],
      emergencyContacts: employee.emergencyContacts as any[],
      leaveBalance: employee.leaveBalance as any,
      createdAt: employee.createdAt.toISOString(),
      updatedAt: employee.updatedAt.toISOString(),
    }
  } catch (error) {
    console.error("Error updating employee:", error)
    return { error: "Failed to update employee" }
  }
}

export async function deleteEmployee(id: string) {
  try {
    await prisma.teamEmployee.delete({ where: { id } })
    return { success: true }
  } catch (error) {
    console.error("Error deleting employee:", error)
    return { error: "Failed to delete employee" }
  }
}

// ==================== CANDIDATE ACTIONS ====================

export async function getCandidates() {
  try {
    const candidates = await prisma.teamCandidate.findMany({ orderBy: { createdAt: "desc" } })
    return candidates.map((c) => ({
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
      notes: c.notes as string[],
      interviews: c.interviews as any[],
      rating: c.rating,
      expectedSalary: c.expectedSalary || undefined,
      availableFrom: c.availableFrom || undefined,
      skills: c.skills as string[],
    }))
  } catch (error) {
    console.error("Error fetching candidates:", error)
    return { error: "Failed to fetch candidates" }
  }
}

export async function createCandidate(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  position: string
  department: string
  stage?: string
  source?: string
  appliedAt: string
  skills?: string[]
  expectedSalary?: number
  availableFrom?: string
}) {
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
        skills: (data.skills || []) as any,
        expectedSalary: data.expectedSalary || null,
        availableFrom: data.availableFrom || null,
      },
    })
    return {
      ...candidate,
      notes: candidate.notes as string[],
      interviews: candidate.interviews as any[],
      expectedSalary: candidate.expectedSalary || undefined,
      availableFrom: candidate.availableFrom || undefined,
      skills: candidate.skills as string[],
    }
  } catch (error) {
    console.error("Error creating candidate:", error)
    return { error: "Failed to create candidate" }
  }
}

export async function updateCandidate(id: string, data: Record<string, any>) {
  try {
    const candidate = await prisma.teamCandidate.update({ where: { id }, data })
    return {
      ...candidate,
      notes: candidate.notes as string[],
      interviews: candidate.interviews as any[],
      expectedSalary: candidate.expectedSalary || undefined,
      availableFrom: candidate.availableFrom || undefined,
      skills: candidate.skills as string[],
    }
  } catch (error) {
    console.error("Error updating candidate:", error)
    return { error: "Failed to update candidate" }
  }
}

// ==================== LEAVE REQUEST ACTIONS ====================

export async function getLeaveRequests() {
  try {
    const requests = await prisma.teamLeaveRequest.findMany({ orderBy: { createdAt: "desc" } })
    return requests.map((r) => ({
      id: r.id,
      employeeId: r.employeeId,
      employeeName: r.employeeName,
      leaveType: r.leaveType as any,
      startDate: r.startDate,
      endDate: r.endDate,
      totalDays: r.totalDays,
      reason: r.reason,
      status: r.status as any,
      approverId: r.approverId || undefined,
      approverName: r.approverName || undefined,
      approvedAt: r.approvedAt || undefined,
      rejectionReason: r.rejectionReason || undefined,
      createdAt: r.createdAt.toISOString(),
    }))
  } catch (error) {
    console.error("Error fetching leave requests:", error)
    return { error: "Failed to fetch leave requests" }
  }
}

export async function createLeaveRequest(data: {
  employeeId: string
  employeeName: string
  leaveType: string
  startDate: string
  endDate: string
  totalDays: number
  reason: string
}) {
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
        status: "pending",
      },
    })
    return {
      ...request,
      leaveType: request.leaveType as any,
      status: request.status as any,
      approverId: request.approverId || undefined,
      approverName: request.approverName || undefined,
      approvedAt: request.approvedAt || undefined,
      rejectionReason: request.rejectionReason || undefined,
      createdAt: request.createdAt.toISOString(),
    }
  } catch (error) {
    console.error("Error creating leave request:", error)
    return { error: "Failed to create leave request" }
  }
}

export async function updateLeaveRequest(id: string, data: Record<string, any>) {
  try {
    const request = await prisma.teamLeaveRequest.update({ where: { id }, data })
    return {
      ...request,
      leaveType: request.leaveType as any,
      status: request.status as any,
      approverId: request.approverId || undefined,
      approverName: request.approverName || undefined,
      approvedAt: request.approvedAt || undefined,
      rejectionReason: request.rejectionReason || undefined,
      createdAt: request.createdAt.toISOString(),
    }
  } catch (error) {
    console.error("Error updating leave request:", error)
    return { error: "Failed to update leave request" }
  }
}

// ==================== ATTENDANCE ACTIONS ====================

export async function getAttendanceRecords() {
  try {
    const records = await prisma.teamAttendanceRecord.findMany({ orderBy: { markedAt: "desc" } })
    return records.map((r) => ({
      id: r.id,
      employeeId: r.employeeId,
      employeeName: r.employeeName,
      date: r.date,
      status: r.status as any,
      clockIn: r.clockIn || undefined,
      clockOut: r.clockOut || undefined,
      breakMinutes: r.breakMinutes || undefined,
      totalHours: r.totalHours || undefined,
      workLocation: r.workLocation || undefined,
      notes: r.notes || undefined,
      markedAt: r.markedAt.toISOString(),
    }))
  } catch (error) {
    console.error("Error fetching attendance records:", error)
    return { error: "Failed to fetch attendance records" }
  }
}

export async function createAttendanceRecord(data: {
  employeeId: string
  employeeName: string
  date: string
  status: string
  clockIn?: string
  clockOut?: string
  breakMinutes?: number
  totalHours?: number
  workLocation?: string
  notes?: string
}) {
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
        notes: data.notes || null,
      },
    })
    return {
      ...record,
      status: record.status as any,
      clockIn: record.clockIn || undefined,
      clockOut: record.clockOut || undefined,
      breakMinutes: record.breakMinutes || undefined,
      totalHours: record.totalHours || undefined,
      workLocation: record.workLocation || undefined,
      notes: record.notes || undefined,
      markedAt: record.markedAt.toISOString(),
    }
  } catch (error) {
    console.error("Error creating attendance record:", error)
    return { error: "Failed to create attendance record" }
  }
}

export async function updateAttendanceRecord(id: string, data: Record<string, any>) {
  try {
    const record = await prisma.teamAttendanceRecord.update({ where: { id }, data })
    return {
      ...record,
      status: record.status as any,
      clockIn: record.clockIn || undefined,
      clockOut: record.clockOut || undefined,
      breakMinutes: record.breakMinutes || undefined,
      totalHours: record.totalHours || undefined,
      workLocation: record.workLocation || undefined,
      notes: record.notes || undefined,
      markedAt: record.markedAt.toISOString(),
    }
  } catch (error) {
    console.error("Error updating attendance record:", error)
    return { error: "Failed to update attendance record" }
  }
}

// ==================== OKR ACTIONS ====================

export async function getOKRs() {
  try {
    const okrs = await prisma.teamOKR.findMany({ orderBy: { createdAt: "desc" } })
    return okrs.map((o) => ({
      id: o.id,
      employeeId: o.employeeId,
      title: o.title,
      description: o.description,
      quarter: o.quarter,
      keyResults: o.keyResults as any[],
      overallProgress: o.overallProgress,
      status: o.status as any,
      parentOKRId: o.parentOKRId || undefined,
      createdAt: o.createdAt.toISOString(),
      updatedAt: o.updatedAt.toISOString(),
    }))
  } catch (error) {
    console.error("Error fetching OKRs:", error)
    return { error: "Failed to fetch OKRs" }
  }
}

export async function createOKR(data: {
  employeeId: string
  title: string
  description?: string
  quarter: string
  keyResults?: any[]
  overallProgress?: number
  status?: string
  parentOKRId?: string
}) {
  try {
    const okr = await prisma.teamOKR.create({
      data: {
        employeeId: data.employeeId,
        title: data.title,
        description: data.description || "",
        quarter: data.quarter,
        keyResults: (data.keyResults || []) as any,
        overallProgress: data.overallProgress || 0,
        status: data.status || "on-track",
        parentOKRId: data.parentOKRId || null,
      },
    })
    return {
      ...okr,
      keyResults: okr.keyResults as any[],
      status: okr.status as any,
      parentOKRId: okr.parentOKRId || undefined,
      createdAt: okr.createdAt.toISOString(),
      updatedAt: okr.updatedAt.toISOString(),
    }
  } catch (error) {
    console.error("Error creating OKR:", error)
    return { error: "Failed to create OKR" }
  }
}
