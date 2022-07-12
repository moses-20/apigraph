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

export async function getAllActions() {
  try {
    return await prisma.action.findMany({
      include: {
        log: true,
      },
    });
  } catch (error) {
    console.error(error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export async function getActionsByLogId(parent: number) {
  try {
    return await prisma.action.findMany({
      include: {
        log: true,
      },
      where: {
        logId: parent,
      },
    });
  } catch (error) {
    console.error(error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export async function getFilteredActions(
  parent: number,
  type?: string,
  status?: string
) {
  try {
    return await prisma.action.findMany({
      include: {
        log: true,
      },
      where: {
        OR: [{ type }, { status }],
        AND: {
          logId: parent,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
