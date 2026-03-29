"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const DUMMY_NGO = {
    id: 'krf-123',
    name: 'Kashmir Relief Foundation',
    district: 'Srinagar',
    registrationNumber: 'KRF/2018/SRG/001',
    categories: 'Medical, Education',
    email: 'contact@krf.org',
    phone: '+91 98765 43210',
    address: '123 Main Street, Lal Chowk, Srinagar, 190001',
    status: 'VERIFIED',
    verifiedAt: '2023-01-15',
    activeCampaigns: [
        {
            id: '1',
            title: 'Emergency Medical Equipment for SKIMS',
            category: 'MEDICAL',
            description: 'Provide urgent portable ventilators and monitors to SKIMS ICU.',
            goalAmount: 100000000,
            verifiedAmount: 52000000,
            pendingAmount: 8500000,
            imageUrl: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221200%22%20height%3D%22800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232563EB%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230F172A%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22sans-serif%22%20font-size%3D%2260%22%20font-weight%3D%22bold%22%3EMedical%20Relief%20Campaign%3C%2Ftext%3E%3C%2Fsvg%3E',
            status: 'URGENT',
            deadline: new Date(Date.now() + 24 * 24 * 60 * 60 * 1000).toISOString(),
        }
    ],
    completedCampaigns: [
        {
            id: '2',
            title: 'Winter Blanket Drive 2024',
            category: 'DISASTER',
            description: 'Successfully distributed 500+ blankets to remote villages in Bandipora.',
            goalAmount: 20000000,
            verifiedAmount: 21000000,
            pendingAmount: 0,
            imageUrl: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221200%22%20height%3D%22800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2316A34A%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23047857%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22sans-serif%22%20font-size%3D%2260%22%20font-weight%3D%22bold%22%3EDisaster%20Relief%20Completed%3C%2Ftext%3E%3C%2Fsvg%3E',
            status: 'GOAL_MET',
            deadline: null,
        }
    ]
};

export default function NgoProfilePage() {
    const [tab, setTab] = useState<'active' | 'completed'>('active');

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-soft, #F8FAFC)', paddingBottom: '80px' }}>
            {/* Header Area */}
            <div style={{ background: 'var(--primary, #0F3460)', height: '250px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />
            </div>

            <div className="container" style={{ position: 'relative', marginTop: '-100px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                
                {/* Profile Card */}
                <div className="glass-card" style={{ padding: '40px', background: 'white', borderRadius: '24px', display: 'flex', gap: '40px', alignItems: 'flex-start', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                    <div style={{ width: '160px', height: '160px', borderRadius: '24px', background: '#F1F5F9', border: '8px solid white', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'var(--primary)', flexShrink: 0 }}>
                        {DUMMY_NGO.name[0]}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                            <h1 className="font-heading" style={{ fontSize: '2.5rem', color: '#0F172A', margin: 0 }}>{DUMMY_NGO.name}</h1>
                            {DUMMY_NGO.status === 'VERIFIED' && (
                                <span style={{ background: '#E0F2FE', color: '#0369A1', padding: '6px 12px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                    Mizaan Verified
                                </span>
                            )}
                        </div>
                        <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '24px' }}>Registered NGO • {DUMMY_NGO.district}, Kashmir</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', background: '#F8FAFC', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Registration No.</div>
                                <div style={{ fontSize: '1.05rem', color: '#1E293B', fontWeight: 600 }}>{DUMMY_NGO.registrationNumber}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Focus Areas</div>
                                <div style={{ fontSize: '1.05rem', color: '#1E293B', fontWeight: 600 }}>{DUMMY_NGO.categories}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Contact Email</div>
                                <div style={{ fontSize: '1.05rem', color: '#1E293B', fontWeight: 600 }}>{DUMMY_NGO.email}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Contact Phone</div>
                                <div style={{ fontSize: '1.05rem', color: '#1E293B', fontWeight: 600 }}>{DUMMY_NGO.phone}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Campaigns Tabs */}
                <div>
                    <div style={{ display: 'flex', gap: '16px', borderBottom: '2px solid #E2E8F0', paddingBottom: '16px', marginBottom: '32px' }}>
                        <button 
                            onClick={() => setTab('active')}
                            style={{ background: 'none', border: 'none', fontSize: '1.2rem', fontWeight: 800, padding: '8px 16px', cursor: 'pointer', color: tab === 'active' ? 'var(--primary)' : '#94A3B8', position: 'relative' }}
                        >
                            Active Campaigns ({DUMMY_NGO.activeCampaigns.length})
                            {tab === 'active' && <div style={{ position: 'absolute', bottom: '-18px', left: 0, right: 0, height: '4px', background: 'var(--primary)', borderRadius: '4px 4px 0 0' }} />}
                        </button>
                        <button 
                            onClick={() => setTab('completed')}
                            style={{ background: 'none', border: 'none', fontSize: '1.2rem', fontWeight: 800, padding: '8px 16px', cursor: 'pointer', color: tab === 'completed' ? '#16A34A' : '#94A3B8', position: 'relative' }}
                        >
                            Completed Impacts ({DUMMY_NGO.completedCampaigns.length})
                            {tab === 'completed' && <div style={{ position: 'absolute', bottom: '-18px', left: 0, right: 0, height: '4px', background: '#16A34A', borderRadius: '4px 4px 0 0' }} />}
                        </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
                        {(tab === 'active' ? DUMMY_NGO.activeCampaigns : DUMMY_NGO.completedCampaigns).map(c => (
                            <Link href={`/campaign/${c.id}`} key={c.id} style={{ textDecoration: 'none' }}>
                                <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)' }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}>
                                    <div style={{ height: '220px', width: '100%', position: 'relative' }}>
                                        <img src={c.imageUrl} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        {c.status === 'URGENT' && <span style={{ position: 'absolute', top: '16px', right: '16px', background: '#FEF2F2', color: '#DC2626', padding: '6px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>🔴 URGENT</span>}
                                        {c.status === 'GOAL_MET' && <span style={{ position: 'absolute', top: '16px', right: '16px', background: '#F0FDF4', color: '#16A34A', padding: '6px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>✅ FUNDED</span>}
                                    </div>
                                    <div style={{ padding: '24px' }}>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>{c.category}</div>
                                        <h3 style={{ fontSize: '1.4rem', color: '#0F172A', marginBottom: '12px', lineHeight: 1.3, fontWeight: 800 }}>{c.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: '#64748B', marginBottom: '20px', lineHeight: 1.5 }}>{c.description}</p>
                                        
                                        <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '16px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                <span style={{ fontWeight: 800, color: 'var(--primary)' }}>₹{((c.verifiedAmount + c.pendingAmount) / 100).toLocaleString('en-IN')}</span>
                                                <span style={{ color: '#64748B', fontSize: '0.9rem' }}>of ₹{(c.goalAmount / 100).toLocaleString('en-IN')}</span>
                                            </div>
                                            <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '50px', overflow: 'hidden' }}>
                                                <div style={{ width: `${Math.min(100, ((c.verifiedAmount + c.pendingAmount) / c.goalAmount) * 100)}%`, height: '100%', background: tab === 'active' ? 'var(--primary)' : '#16A34A', borderRadius: '50px' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
