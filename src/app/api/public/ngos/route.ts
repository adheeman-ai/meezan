import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Public endpoint — returns only VERIFIED NGOs, no auth required
export async function GET() {
    try {
        const ngos = await prisma.ngo.findMany({
            where: { status: 'VERIFIED' },
            select: {
                id: true,
                name: true,
                nameUrdu: true,
                registrationNumber: true,
                categories: true,
                email: true,
                phone: true,
                address: true,
                website: true,
                createdAt: true,
                district: { select: { name: true } },
                campaigns: {
                    where: { status: { in: ['ACTIVE', 'URGENT'] } },
                    select: { id: true, title: true, status: true },
                    take: 3
                },
                _count: {
                    select: {
                        campaigns: { where: { status: { in: ['ACTIVE', 'URGENT', 'GOAL_MET', 'CLOSED'] } } }
                    }
                }
            },
            orderBy: { name: 'asc' }
        });

        return NextResponse.json(ngos);
    } catch (error) {
        console.error('Error fetching public NGOs:', error);
        return NextResponse.json({ error: 'Failed to fetch NGOs' }, { status: 500 });
    }
}
