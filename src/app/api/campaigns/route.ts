import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export const runtime = 'nodejs';

export async function GET() {
    try {
        const campaigns = await prisma.campaign.findMany({
            where: {
                status: {
                    in: ['ACTIVE', 'URGENT', 'GOAL_MET'],
                },
            },
            include: {
                ngo: {
                    select: {
                        name: true,
                        district: { select: { name: true } },
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        const formattedCampaigns = campaigns.map(c => ({
            ...c,
            ngoName: c.ngo.name,
            districtName: c.ngo.district.name,
        }));

        return NextResponse.json(formattedCampaigns);
    } catch (error) {
        console.error('Error fetching campaigns:', error);
        return NextResponse.json({ error: 'Failed to fetch campaigns' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const data = await request.json();
        const { ngoId, title, subTitle, amount, raisedAmount, endDate, priority, description, documentUrl, posterUrl, district, category } = data;

        // Security Check
        if (session.role === 'NGO_PARTNER' && session.ngoId !== parseInt(ngoId)) {
            return NextResponse.json({ error: 'Forbidden: You can only create campaigns for your own NGO' }, { status: 403 });
        }

        const ngo = await prisma.ngo.findUnique({
            where: { id: parseInt(ngoId) }
        });

        if (!ngo) {
            return NextResponse.json({ error: 'NGO not found' }, { status: 404 });
        }

        const goalPaise = Math.round(parseFloat(amount.replace(/,/g, '')) * 100);
        const verifiedPaise = raisedAmount ? Math.round(parseFloat(raisedAmount.replace(/,/g, '')) * 100) : 0;

        let targetStatus: import('@prisma/client').CampaignStatus = priority === 'Urgent' ? 'URGENT' : 'ACTIVE';

        const campaign = await prisma.campaign.create({
            data: {
                ngoId: ngo.id,
                title,
                subtitle: subTitle,
                description: description || subTitle,
                goalAmount: goalPaise,
                verifiedAmount: verifiedPaise,
                deadline: endDate ? new Date(endDate) : null,
                category: category || 'MEDICAL',
                status: targetStatus,
                upiId: ngo.upiId || 'mizaan@upi',
                bankAccount: ngo.bankAccount,
                ifsc: ngo.ifsc,
                accountHolder: ngo.accountHolder,
                bankName: ngo.bankName,
                documentUrl: documentUrl || null,
                imageUrl: posterUrl || null
            }
        });

        return NextResponse.json({ success: true, id: campaign.id });
    } catch (error) {
        console.error('Error creating campaign:', error);
        return NextResponse.json({ error: 'Failed to create campaign' }, { status: 500 });
    }
}
