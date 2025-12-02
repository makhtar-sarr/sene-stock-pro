import { PrismaTiDBCloud } from "@tidbcloud/prisma-adapter";

import { PrismaClient } from "@/generated/prisma";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaTiDBCloud({ url: connectionString });

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
