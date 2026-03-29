import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const resolvedParams = await params;
        const campaignId = parseInt(resolvedParams.id, 10);
        
        if (isNaN(campaignId)) {
            return NextResponse.json({ error: 'Invalid campaign ID' }, { status: 400 });
        }

        const campaign = await prisma.campaign.findUnique({
            where: { id: campaignId },
            include: {
                ngo: {
                    select: {
                        id: true,
                        name: true,
                        district: { select: { name: true } },
                        email: true,
                        phone: true,
                        accountHolder: true,
                        bankName: true,
                        bankAccount: true,
                        ifsc: true,
                        upiId: true,
                    }
                },
                donations: {
                    where: { status: 'VERIFIED' },
                    orderBy: { reportedAt: 'desc' },
                    take: 10,
                    select: {
                        id: true,
                        donorName: true,
                        amount: true,
                        reportedAt: true
                    }
                }
            }
        });

        if (!campaign) {
            return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
        }

        return NextResponse.json(campaign);
    } catch (error) {
        console.error('Error fetching campaign:', error);
        return NextResponse.json({ error: 'Failed to fetch campaign' }, { status: 500 });
    }
}
