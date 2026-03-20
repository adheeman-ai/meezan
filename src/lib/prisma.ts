import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

let prismaInstance: PrismaClient;

if (process.env.DATABASE_URL) {
    try {
        const pool = new Pool({ 
            connectionString: process.env.DATABASE_URL,
            connectionTimeoutMillis: 5000, // Terminate early if connection fails
        });
        
        // Listen for pool errors
        pool.on('error', (err) => {
            console.error('Unexpected error on idle client', err);
        });

        const adapter = new PrismaPg(pool);
        prismaInstance = globalForPrisma.prisma || new PrismaClient({
            adapter,
            log: ['error', 'warn'], // Reduced logging for production but keeping errors
        });
    } catch (err) {
        console.error('Failed to initialize Prisma Pool:', err);
        prismaInstance = new PrismaClient();
    }
} else {
    // If missing during build time, instantiate a fallback Prisma client
    // It will throw at runtime if queries are attempted without DATABASE_URL
    prismaInstance = globalForPrisma.prisma || new PrismaClient({
        log: ['query', 'error', 'warn'],
    });
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
