import prisma from "app/prisma";

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

export async function getActionsBySearch(query: string) {
  try {
    return await prisma.action.findMany({
      include: {
        log: true,
      },
      where: {
        OR: [
          {
            ref: {
              search: query,
            },
          },
          {
            narrative: {
              search: query,
            },
          },
          {
            amount: {
              search: query,
            },
          },
          {
            party: {
              search: query,
            },
          },
          {
            trxn: {
              search: query,
            },
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
