const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("--- Starting Database Verification ---");

  // 1. Test Client
  console.log("\n[1] Testing Client Module...");
  const client = await prisma.client.create({
    data: {
      name: "Test Client Integration",
      email: "test_integration@client.com",
      phone: "1234567890",
      company: "Integration Test Co",
      website: "test.com",
      address: "123 Test St",
      status: "active",
      industry: "Technology",
      totalRevenue: 1000,
      monthlyRevenue: 100,
      activeProjects: 1,
      completedProjects: 0,
      joinedDate: new Date().toISOString().split('T')[0],
      healthScore: 90,
      satisfaction: 95,
      contractValue: 1200,
      contractEnd: "2025-12-31",
      paymentStatus: "paid",
      accountManager: "Test Manager",
      tier: "professional",
      engagementScore: 85,
      lifetimeValue: 1000,
      openTickets: 0,
      npsScore: 9,
      revenueGrowth: 10,
      activeCampaigns: 1
    }
  });
  console.log(`✅ Client created successfully with ID: ${client.id}`);

  // 2. Test Lead
  console.log("\n[2] Testing Lead Module...");
  const lead = await prisma.lead.create({
    data: {
      name: "Test Lead Integration",
      company: "Lead Test Co",
      email: "lead_integration@test.com",
      phone: "0987654321",
      status: "hot",
      stage: "new",
      priority: "high",
      category: "Web Development",
      value: 5000,
      probability: 70,
      source: "Organic Search",
      assignedTo: "Sales Rep",
      clientId: client.id // Testing relation
    }
  });
  console.log(`✅ Lead created successfully with ID: ${lead.id}`);
  
  // Test relation retrieval
  const leadWithClient = await prisma.lead.findUnique({
    where: { id: lead.id },
    include: { client: true }
  });
  if (leadWithClient.client.id === client.id) {
    console.log(`✅ Lead -> Client relationship works!`);
  }

  // 3. Test Project
  console.log("\n[3] Testing Project Module...");
  const project = await prisma.project.create({
    data: {
      name: "Test Project Integration",
      description: "A test project for database verification",
      client: client.name,
      projectManager: "PM Test",
      status: "in-progress",
      priority: "high",
      progress: 10,
      budget: 10000,
      spent: 1000,
      startDate: new Date().toISOString().split('T')[0],
      dueDate: "2025-12-31",
      billingType: "one-time"
    }
  });
  console.log(`✅ Project created successfully with ID: ${project.id}`);

  // 4. Cleanup
  console.log("\n[4] Cleaning up test data...");
  await prisma.project.delete({ where: { id: project.id } });
  await prisma.lead.delete({ where: { id: lead.id } });
  await prisma.client.delete({ where: { id: client.id } });
  console.log("✅ Cleanup successful.");

  console.log("\n--- All Modules Verified Successfully! ---");
}

main()
  .catch(e => {
    console.error("❌ Error during verification:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
