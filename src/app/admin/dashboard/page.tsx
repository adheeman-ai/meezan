import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function AdminDashboard() {
    // Fetch real stats
    const [ngoCount, pendingNgoCount, campaignCount, activeCampaignCount] = await Promise.all([
        prisma.ngo.count(),
        prisma.ngo.count({ where: { status: 'PENDING' } }),
        prisma.campaign.count(),
        prisma.campaign.count({ where: { status: 'ACTIVE' } })
    ]);

    return (
        <div>
            <div style={{ marginBottom: '40px' }}>
                <h1 className="font-heading" style={{ fontSize: '2.5rem', color: '#0F3460', marginBottom: '8px' }}>Platform Overview</h1>
                <p style={{ color: '#64748B' }}>Welcome back, Super Admin. Here's what's happening across Mizaan.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
                <StatCard title="Total NGOs" value={ngoCount} icon="🤝" color="#0F3460" />
                <StatCard title="Pending Review" value={pendingNgoCount} icon="⏳" color="#F59E0B" />
                <StatCard title="All Campaigns" value={campaignCount} icon="📢" color="#10B981" />
                <StatCard title="Active Goals" value={activeCampaignCount} icon="🎯" color="#3B82F6" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
                <div style={{ background: 'white', padding: '32px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <h2 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Recent NGO Applications</h2>
                    <div style={{ color: '#64748B', textAlign: 'center', padding: '40px 0' }}>
                        <p>All current applications up to date.</p>
                    </div>
                </div>

                <div style={{ background: 'white', padding: '32px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <h2 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Quick Actions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Link href="/ngo/dashboard/tools?admin=true" style={{ textDecoration: 'none' }}>
                            <ActionButton label="Launch New Campaign" icon="🚀" />
                        </Link>
                        <ActionButton label="Verify Donations" icon="✅" />
                        <ActionButton label="Create Global Update" icon="📣" />
                        <ActionButton label="Export Data" icon="📊" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, icon, color }: { title: string; value: number; icon: string; color: string }) {
    return (
        <div style={{ background: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${color}10`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                {icon}
            </div>
            <div>
                <div style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '4px' }}>{title}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F3460' }}>{value}</div>
            </div>
        </div>
    );
}

function ActionButton({ label, icon }: { label: string; icon: string }) {
    return (
        <button style={{
            width: '100%',
            padding: '14px',
            borderRadius: '12px',
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            textAlign: 'left',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: '#0F3460',
            transition: 'all 0.2s'
        }}>
            <span>{icon}</span> {label}
        </button>
    );
}
