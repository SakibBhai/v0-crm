// Seed script to create default users for all 5 roles
// Run: node scripts/seed-users.js

const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

const DEFAULT_PASSWORD = "password123"

const defaultUsers = [
  {
    name: "Super Admin",
    email: "admin@agencyflow.com",
    role: "SUPER_ADMIN",
  },
  {
    name: "Management User",
    email: "management@agencyflow.com",
    role: "MANAGEMENT",
  },
  {
    name: "Manager User",
    email: "manager@agencyflow.com",
    role: "MANAGER",
  },
  {
    name: "Employee User",
    email: "employee@agencyflow.com",
    role: "EMPLOYEE",
  },
  {
    name: "Client User",
    email: "client@agencyflow.com",
    role: "CLIENT",
  },
]

async function main() {
  console.log("🌱 Seeding users...")

  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 12)

  for (const user of defaultUsers) {
    const existing = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (existing) {
      console.log(`  ⏭️  ${user.role}: ${user.email} (already exists)`)
      continue
    }

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role,
      },
    })

    console.log(`  ✅ ${user.role}: ${user.email}`)
  }

  console.log("\n🎉 Seeding complete!")
  console.log("All accounts use password:", DEFAULT_PASSWORD)
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
