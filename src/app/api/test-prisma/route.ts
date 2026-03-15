import { NextResponse } from 'next/server';
import { PrismaClient } from 'prisma-client/index';

export const runtime = 'nodejs';

export async function GET() {
    try {
        const prisma = new PrismaClient({
            log: ['query', 'error', 'warn']
        });
        const count = await prisma.user.count();
        await prisma.$disconnect();
        return NextResponse.json({ success: true, count });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            error: error.message,
            name: error.name
        }, { status: 500 });
    }
}
