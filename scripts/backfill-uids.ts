import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("Starting backfill for Lead UIDs...")
  const unassignedLeads = await prisma.lead.findMany({
    where: { uid: null },
    orderBy: { createdAt: "asc" }
  })
  let leadCounter = 1
  for (const lead of unassignedLeads) {
    const newUid = `LD-${leadCounter.toString().padStart(4, "0")}`
    await prisma.lead.update({
      where: { id: lead.id },
      data: { uid: newUid }
    })
    console.log(`Updated Lead ${lead.id} to ${newUid}`)
    leadCounter++
  }

  console.log("Starting backfill for Client UIDs...")
  const unassignedClients = await prisma.client.findMany({
    where: { uid: null },
    orderBy: { createdAt: "asc" }
  })
  let clientCounter = 1
  for (const client of unassignedClients) {
    const newUid = `CL-${clientCounter.toString().padStart(4, "0")}`
    await prisma.client.update({
      where: { id: client.id },
      data: { uid: newUid }
    })
    console.log(`Updated Client ${client.id} to ${newUid}`)
    clientCounter++
  }

  console.log("Starting backfill for Project UIDs...")
  const unassignedProjects = await prisma.project.findMany({
    where: { uid: null },
    orderBy: { createdAt: "asc" }
  })
  let projectCounter = 1
  for (const project of unassignedProjects) {
    const newUid = `PJ-${projectCounter.toString().padStart(4, "0")}`
    await prisma.project.update({
      where: { id: project.id },
      data: { uid: newUid }
    })
    console.log(`Updated Project ${project.id} to ${newUid}`)
    projectCounter++
  }

  console.log("Backfill completed successfully.")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
