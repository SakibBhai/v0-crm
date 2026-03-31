import { prisma } from "@/lib/prisma"

type ModulePrefix = "LD" | "CL" | "PJ" | "TSK"

/**
 * Generates the next sequential UID for a given module.
 * It queries the database for the highest existing numerical UID for that module,
 * and returns the incremented string (e.g., "LD-0001", "LD-0002").
 */
export async function generateNextUid(prefix: ModulePrefix): Promise<string> {
  let highestUidStr = ""

  switch (prefix) {
    case "LD":
      const lastLead = await prisma.lead.findFirst({
        where: {
          uid: {
            startsWith: "LD-",
          },
        },
        orderBy: {
          uid: "desc",
        },
      })
      highestUidStr = lastLead?.uid || ""
      break
    case "CL":
      const lastClient = await prisma.client.findFirst({
        where: {
          uid: {
            startsWith: "CL-",
          },
        },
        orderBy: {
          uid: "desc",
        },
      })
      highestUidStr = lastClient?.uid || ""
      break
    case "PJ":
      const lastProject = await prisma.project.findFirst({
        where: {
          uid: {
            startsWith: "PJ-",
          },
        },
        orderBy: {
          uid: "desc",
        },
      })
      highestUidStr = lastProject?.uid || ""
      break
    // Add additional modules here
  }

  // If no previous UID, start at 0001
  if (!highestUidStr) {
    return `${prefix}-0001`
  }

  // Extract the number part from "PRE-0001"
  const numberPart = highestUidStr.split("-")[1]
  if (!numberPart || isNaN(parseInt(numberPart, 10))) {
    // Fallback if parsing fails for some odd reason
    return `${prefix}-0001`
  }

  const nextNumber = parseInt(numberPart, 10) + 1
  return `${prefix}-${nextNumber.toString().padStart(4, "0")}`
}
