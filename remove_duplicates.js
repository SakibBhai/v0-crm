const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const records = await prisma.teamAttendanceRecord.findMany();
  
  const seen = new Set();
  const toDelete = [];

  for (const record of records) {
    const key = `${record.employeeId}_${record.date}`;
    if (seen.has(key)) {
      toDelete.push(record.id);
    } else {
      seen.add(key);
    }
  }

  if (toDelete.length > 0) {
    console.log(`Deleting ${toDelete.length} duplicate records...`);
    await prisma.teamAttendanceRecord.deleteMany({
      where: {
        id: { in: toDelete }
      }
    });
    console.log('Duplicates deleted.');
  } else {
    console.log('No duplicates found.');
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
