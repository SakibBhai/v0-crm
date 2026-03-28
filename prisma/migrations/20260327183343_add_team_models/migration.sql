-- CreateTable
CREATE TABLE "TeamEmployee" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT '',
    "employeeId" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "employmentType" TEXT NOT NULL DEFAULT 'full-time',
    "status" TEXT NOT NULL DEFAULT 'active',
    "managerId" TEXT,
    "managerName" TEXT,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT,
    "workLocation" TEXT NOT NULL DEFAULT 'Remote',
    "salary" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'BDT',
    "payFrequency" TEXT NOT NULL DEFAULT 'monthly',
    "skills" JSONB NOT NULL DEFAULT '[]',
    "yearsOfExperience" INTEGER NOT NULL DEFAULT 0,
    "certifications" JSONB NOT NULL DEFAULT '[]',
    "performanceRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "documents" JSONB NOT NULL DEFAULT '[]',
    "careerHistory" JSONB NOT NULL DEFAULT '[]',
    "emergencyContacts" JSONB NOT NULL DEFAULT '[]',
    "leaveBalance" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeamEmployee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamCandidate" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT '',
    "position" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "stage" TEXT NOT NULL DEFAULT 'applied',
    "source" TEXT NOT NULL DEFAULT '',
    "appliedAt" TEXT NOT NULL,
    "notes" JSONB NOT NULL DEFAULT '[]',
    "interviews" JSONB NOT NULL DEFAULT '[]',
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "expectedSalary" DOUBLE PRECISION,
    "availableFrom" TEXT,
    "skills" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeamCandidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamLeaveRequest" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "employeeName" TEXT NOT NULL,
    "leaveType" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "approverId" TEXT,
    "approverName" TEXT,
    "approvedAt" TEXT,
    "rejectionReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeamLeaveRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamAttendanceRecord" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "employeeName" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "clockIn" TEXT,
    "clockOut" TEXT,
    "breakMinutes" INTEGER,
    "totalHours" DOUBLE PRECISION,
    "workLocation" TEXT,
    "notes" TEXT,
    "markedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeamAttendanceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamOKR" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "quarter" TEXT NOT NULL,
    "keyResults" JSONB NOT NULL DEFAULT '[]',
    "overallProgress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'on-track',
    "parentOKRId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeamOKR_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeamEmployee_employeeId_key" ON "TeamEmployee"("employeeId");
