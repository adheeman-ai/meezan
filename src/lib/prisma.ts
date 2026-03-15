import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

let prismaInstance: PrismaClient;

if (process.env.DATABASE_URL) {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    prismaInstance = globalForPrisma.prisma || new PrismaClient({
        adapter,
        log: ['query', 'error', 'warn'],
    });
} else {
    // If missing during build time, instantiate a fallback Prisma client
    // It will throw at runtime if queries are attempted without DATABASE_URL
    prismaInstance = globalForPrisma.prisma || new PrismaClient({
        log: ['query', 'error', 'warn'],
    });
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
