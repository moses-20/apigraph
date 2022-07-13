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
  const searchString = query.split(" ").join(" & ");

  try {
    return await prisma.action.findMany({
      include: {
        log: true,
      },
      where: {
        OR: [
          {
            ref: {
              search: searchString,
            },
          },
          {
            narrative: {
              search: searchString,
            },
          },
          {
            amount: {
              search: searchString,
            },
          },
          {
            party: {
              search: searchString,
            },
          },
          {
            trxn: {
              search: searchString,
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
