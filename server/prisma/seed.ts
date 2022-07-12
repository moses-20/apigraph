import { PrismaClient } from "@prisma/client";
import data from "./data";

const prisma = new PrismaClient();

async function main() {
  try {
    for (const item of data) {
      const d = item.date;
      const a = item.actions;

      const log = await prisma.log.create({
        data: {
          date: d,
          actions: {
            create: a,
          },
        },
      });

      console.log(`Create log with id: ${log.id}`);
    }
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
