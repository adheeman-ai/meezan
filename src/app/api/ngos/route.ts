import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
        }

        const isSuperAdmin = session.role === 'SUPER_ADMIN';

        const ngos = await prisma.ngo.findMany({
            where: isSuperAdmin ? { status: 'VERIFIED' } : { id: session.ngoId },
            select: {
                id: true,
                name: true,
                district: { select: { name: true } },
                bankAccount: true,
                ifsc: true,
                accountHolder: true,
                bankName: true,
                upiId: true,
                qrCodeUrl: true
            },
            orderBy: { name: 'asc' }
        });

        return NextResponse.json(ngos);
    } catch (error) {
        console.error('Error fetching NGOs:', error);
        return NextResponse.json({ error: 'Failed to fetch NGOs' }, { status: 500 });
    }
}
