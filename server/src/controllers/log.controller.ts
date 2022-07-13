import prisma from "app/prisma";

export async function getAllLogs() {
  try {
    return await prisma.log.findMany({
      include: {
        actions: true,
      },
    });
  } catch (error) {
    console.log(error);

    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export async function getLogById(id: number) {
  try {
    return await prisma.log.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);

    return [];
  } finally {
    await prisma.$disconnect();
  }
}
