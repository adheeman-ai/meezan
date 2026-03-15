import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminNgosPage() {
    const ngos = await prisma.ngo.findMany({
        include: {
            _count: {
                select: { campaigns: true }
            }
        },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div>
                    <h1 className="font-heading" style={{ fontSize: '2.5rem', color: '#0F3460', marginBottom: '8px' }}>Manage NGOs</h1>
                    <p style={{ color: '#64748B' }}>Review and verify NGO partners on the platform.</p>
                </div>
                <button style={{ padding: '12px 24px', borderRadius: '12px', background: '#0F3460', color: 'white', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                    + Add New NGO
                </button>
            </div>

            <div style={{ background: 'white', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>NGO NAME</th>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>LOCATION</th>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>STATUS</th>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>CAMPAIGNS</th>
                            <th style={{ padding: '20px 24px', fontWeight: 600, color: '#64748B', fontSize: '0.85rem' }}>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ngos.map((ngo) => (
                            <tr key={ngo.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '20px 24px' }}>
                                    <div style={{ fontWeight: 600, color: '#0F3460' }}>{ngo.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{ngo.email}</div>
                                </td>
                                <td style={{ padding: '20px 24px', color: '#475569', fontSize: '0.9rem' }}>
                                    Srinagar {/* Hardcoded for now, should map from districtId */}
                                </td>
                                <td style={{ padding: '20px 24px' }}>
                                    <span style={{
                                        padding: '6px 12px',
                                        borderRadius: '50px',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        background: ngo.status === 'VERIFIED' ? '#D1FAE5' : ngo.status === 'PENDING' ? '#FEF3C7' : '#FEE2E2',
                                        color: ngo.status === 'VERIFIED' ? '#059669' : ngo.status === 'PENDING' ? '#D97706' : '#DC2626'
                                    }}>
                                        {ngo.status}
                                    </span>
                                </td>
                                <td style={{ padding: '20px 24px', color: '#475569', fontWeight: 500 }}>
                                    {ngo._count.campaigns} campaigns
                                </td>
                                <td style={{ padding: '20px 24px' }}>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', background: 'white', cursor: 'pointer', fontSize: '0.85rem' }}>View</button>
                                        {ngo.status === 'PENDING' && (
                                            <>
                                                <button style={{ padding: '8px 12px', borderRadius: '8px', background: '#10B981', color: 'white', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Verify</button>
                                                <button style={{ padding: '8px 12px', borderRadius: '8px', background: '#EF4444', color: 'white', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Reject</button>
                                            </>
                                        )}
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
