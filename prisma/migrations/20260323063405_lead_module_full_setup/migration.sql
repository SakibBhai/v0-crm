-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "probability" INTEGER NOT NULL,
    "source" TEXT NOT NULL,
    "assignedTo" TEXT NOT NULL,
    "activities" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT[],
    "notes" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastContact" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nextFollowUp" TEXT NOT NULL DEFAULT '',
    "starred" BOOLEAN NOT NULL DEFAULT false,
    "clientId" TEXT,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoteHistory" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,

    CONSTRAINT "NoteHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityHistory" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changedBy" TEXT NOT NULL,
    "changes" JSONB,
    "meetingType" TEXT,
    "meetingDetails" TEXT,
    "meetingDate" TEXT,
    "meetingTime" TEXT,
    "meetingLocation" TEXT,
    "meetingLink" TEXT,
    "meetingAttendees" JSONB,
    "leadId" TEXT NOT NULL,

    CONSTRAINT "ActivityHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "totalRevenue" DOUBLE PRECISION NOT NULL,
    "monthlyRevenue" DOUBLE PRECISION NOT NULL,
    "activeProjects" INTEGER NOT NULL,
    "completedProjects" INTEGER NOT NULL,
    "joinedDate" TEXT NOT NULL,
    "lastContact" TEXT NOT NULL DEFAULT '',
    "avatar" TEXT,
    "notes" TEXT NOT NULL DEFAULT '',
    "starred" BOOLEAN NOT NULL DEFAULT false,
    "healthScore" INTEGER NOT NULL,
    "satisfaction" INTEGER NOT NULL,
    "contractValue" DOUBLE PRECISION NOT NULL,
    "contractEnd" TEXT NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "tags" TEXT[],
    "accountManager" TEXT NOT NULL,
    "tier" TEXT NOT NULL,
    "engagementScore" INTEGER NOT NULL,
    "lifetimeValue" DOUBLE PRECISION NOT NULL,
    "openTickets" INTEGER NOT NULL,
    "npsScore" INTEGER NOT NULL,
    "revenueGrowth" DOUBLE PRECISION NOT NULL,
    "activeCampaigns" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoteHistory" ADD CONSTRAINT "NoteHistory_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityHistory" ADD CONSTRAINT "ActivityHistory_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;
