import React from 'react';
import { prisma } from '@/lib/prisma';

export default async function AdminCampaignsPage() {
    const campaigns = await prisma.campaign.findMany({
        include: {
            ngo: true
        },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div>
            <div style={{ marginBottom: '40px' }}>
                <h1 className="font-heading" style={{ fontSize: '2.5rem', color: '#0F3460', marginBottom: '8px' }}>All Campaigns</h1>
                <p style={{ color: '#64748B' }}>Monitor and manage all fundraising campaigns active on Mizaan.</p>
            </div>

            <div style={{ background: 'white', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>CAMPAIGN</th>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>NGO</th>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>GOAL</th>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>PROGRESS</th>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>STATUS</th>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((c) => (
                            <tr key={c.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '20px 24px' }}>
                                    <div style={{ fontWeight: 600, color: '#0F3460' }}>{c.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{c.category}</div>
                                </td>
                                <td style={{ padding: '20px 24px', color: '#475569', fontSize: '0.9rem' }}>
                                    {c.ngo.name}
                                </td>
                                <td style={{ padding: '20px 24px', color: '#0F3460', fontWeight: 600 }}>
                                    ₹{(c.goalAmount / 100).toLocaleString()}
                                </td>
                                <td style={{ padding: '20px 24px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#059669' }}>
                                            {Math.round(((c as any).verifiedAmount / c.goalAmount) * 100)}%
                                        </div>
                                        <div style={{ width: '100px', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                            <div style={{ width: `${((c as any).verifiedAmount / c.goalAmount) * 100}%`, height: '100%', background: '#10B981' }}></div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '20px 24px' }}>
                                    <span style={{
                                        padding: '6px 12px',
                                        borderRadius: '50px',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        background: c.status === 'ACTIVE' ? '#DBEAFE' : '#F3F4F6',
                                        color: c.status === 'ACTIVE' ? '#2563EB' : '#4B5563'
                                    }}>
                                        {c.status}
                                    </span>
                                </td>
                                <td style={{ padding: '20px 24px' }}>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', background: 'white', cursor: 'pointer', fontSize: '0.85rem' }}>Edit</button>
                                        <button style={{ padding: '8px 12px', borderRadius: '8px', background: '#EF4444', color: 'white', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Kill</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
