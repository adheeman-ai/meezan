'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DISTRICTS = ['All Districts', 'Srinagar', 'Baramulla', 'Anantnag', 'Pulwama', 'Kupwara', 'Budgam', 'Bandipora', 'Ganderbal', 'Shopian', 'Kulgam'];

const CAT_EMOJI: Record<string, string> = {
    MEDICAL: '🏥', EDUCATION: '📚', DISASTER: '🆘', WOMEN: '👩', ORPHAN: '🤲', LIVELIHOOD: '🌾', ENVIRONMENT: '🌿'
};

export default function NgosPage() {
    const [ngos, setNgos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [district, setDistrict] = useState('All Districts');

    useEffect(() => {
        fetch('/api/public/ngos')
            .then(r => r.json())
            .then(data => { setNgos(Array.isArray(data) ? data : []); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    const filtered = ngos.filter(n => {
        const matchSearch = !search || n.name.toLowerCase().includes(search.toLowerCase());
        const matchDistrict = district === 'All Districts' || n.district?.name === district;
        return matchSearch && matchDistrict;
    });

    const parseCategories = (cats: string) => {
        try { return JSON.parse(cats) as string[]; } catch { return cats ? cats.split(',') : []; }
    };

    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, #0F3460 0%, #0A1930 100%)', padding: '120px 0 0' }}>
                <div className="container">
                    <div style={{ marginBottom: '40px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.04em', marginBottom: '20px' }}>
                            <span style={{ width: '7px', height: '7px', background: '#4ADE80', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                            {loading ? '•••' : `${ngos.length} Verified NGOs`}
                        </span>
                        <h1 className="font-heading" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'white', fontWeight: 700, marginBottom: '12px' }}>
                            Trusted NGO Directory
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>
                            Every organisation listed here is verified by the Mizaan team.
                        </p>
                    </div>

                    {/* Search */}
                    <div style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '18px', padding: '16px 20px', marginBottom: '16px' }}>
                        <div style={{ position: 'relative', maxWidth: '600px' }}>
                            <svg style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search NGOs..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                style={{ width: '100%', padding: '10px 16px 10px 44px', background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: '12px', color: 'white', fontFamily: 'DM Sans, sans-serif', fontSize: '0.925rem', outline: 'none', boxSizing: 'border-box' }}
                            />
                        </div>
                    </div>

                    {/* Filters */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '18px', padding: '16px 20px', marginBottom: '32px' }}>
                        <select
                            value={district}
                            onChange={e => setDistrict(e.target.value)}
                            style={{ padding: '8px 36px 8px 16px', background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: '10px', color: 'white', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', cursor: 'pointer', outline: 'none', appearance: 'none', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                        >
                            {DISTRICTS.map(d => <option key={d} value={d} style={{ background: '#1a2a4a' }}>{d}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="container" style={{ paddingTop: '32px', paddingBottom: '80px' }}>
                {!loading && <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                    {filtered.length} organisation{filtered.length !== 1 ? 's' : ''} found
                </p>}

                {loading ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginTop: '24px' }}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} style={{ background: 'white', borderRadius: '20px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                                <div style={{ height: '6px', background: 'linear-gradient(90deg, #E2E8F0, #F1F5F9)', animation: 'pulse 1.5s infinite ease-in-out' }} />
                                <div style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'center' }}>
                                        <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: '#E2E8F0', flexShrink: 0, animation: 'pulse 1.5s infinite ease-in-out' }} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ height: '16px', width: '70%', background: '#E2E8F0', borderRadius: '4px', marginBottom: '8px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                                            <div style={{ height: '12px', width: '40%', background: '#F1F5F9', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
                                        {[60, 80, 70].map((w, j) => <div key={j} style={{ height: '24px', width: `${w}px`, background: '#F1F5F9', borderRadius: '20px', animation: 'pulse 1.5s infinite ease-in-out' }} />)}
                                    </div>
                                    <div style={{ height: '1px', background: '#F1F5F9', marginBottom: '16px' }} />
                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        <div style={{ height: '36px', width: '50px', background: '#F1F5F9', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                                        <div style={{ height: '36px', width: '80px', background: '#F1F5F9', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
                        <p style={{ fontSize: '1.1rem' }}>No NGOs found matching your criteria.</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
                        {filtered.map(ngo => {
                            const cats = parseCategories(ngo.categories);
                            const activeCampCount = ngo.campaigns?.length || 0;
                            const totalCamps = ngo._count?.campaigns || 0;
                            return (
                                <Link key={ngo.id} href={`/ngos/${ngo.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', overflow: 'hidden', transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)', cursor: 'pointer' }}
                                        onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 48px rgba(15,52,96,0.14)'; (e.currentTarget as HTMLElement).style.borderColor = 'transparent'; }}
                                        onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0'; }}
                                    >
                                        {/* Colored top bar based on first category */}
                                        <div style={{ height: '6px', background: 'linear-gradient(90deg, #0F3460, #C9A84C)' }} />

                                        <div style={{ padding: '24px 24px 20px' }}>
                                            {/* Header row */}
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                                                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, #0F3460, #1A4B7C)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.4rem', fontWeight: 800, flexShrink: 0, fontFamily: 'Cormorant Garamond, serif' }}>
                                                    {ngo.name[0]}
                                                </div>
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <h3 className="font-heading" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px', lineHeight: 1.3 }}>{ngo.name}</h3>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748B' }}>
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                                        {ngo.district?.name}, Kashmir
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '50px', padding: '3px 10px', flexShrink: 0 }}>
                                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16A34A' }} />
                                                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#16A34A', letterSpacing: '0.5px' }}>VERIFIED</span>
                                                </div>
                                            </div>

                                            {/* Categories */}
                                            {cats.length > 0 && (
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                                                    {cats.slice(0, 3).map((cat: string) => (
                                                        <span key={cat} style={{ fontSize: '0.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', background: '#F1F5F9', color: '#475569', letterSpacing: '0.03em' }}>
                                                            {CAT_EMOJI[cat] || '🏷️'} {cat.replace('_', ' ')}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Stats row */}
                                            <div style={{ display: 'flex', gap: '16px', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                                                <div style={{ textAlign: 'center' }}>
                                                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F3460', fontFamily: 'Space Mono, monospace' }}>{activeCampCount}</div>
                                                    <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active</div>
                                                </div>
                                                <div style={{ width: '1px', background: '#E2E8F0' }} />
                                                <div style={{ textAlign: 'center' }}>
                                                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F3460', fontFamily: 'Space Mono, monospace' }}>{totalCamps}</div>
                                                    <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Campaigns</div>
                                                </div>
                                                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                                                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#C9A84C' }}>View Profile →</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
