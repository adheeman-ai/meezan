'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './campaigns.module.css';


const DISTRICTS = ['Srinagar', 'Baramulla', 'Anantnag', 'Pulwama', 'Kupwara', 'Budgam', 'Bandipora', 'Ganderbal', 'Shopian', 'Kulgam'];
const CATEGORIES = ['MEDICAL', 'EDUCATION', 'DISASTER', 'WOMEN_EMPOWERMENT', 'ORPHAN', 'LIVELIHOOD', 'ENVIRONMENT', 'COMMUNITY'];

const CAT_COLORS: Record<string, string> = {
    MEDICAL: '#DC2626', EDUCATION: '#2563EB', ENVIRONMENT: '#16A34A',
    DISASTER: '#D97706', LIVELIHOOD: '#7C3AED', COMMUNITY: '#0369A1', ORPHAN: '#BE185D'
};

export default function CampaignsPage() {
    const [campaigns, setCampaigns] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('urgent');
    const [session, setSession] = useState<any>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Campaigns
                const campRes = await fetch('/api/campaigns');
                if (!campRes.ok) throw new Error('Failed to fetch campaigns');
                const campData = await campRes.json();
                setCampaigns(campData);

                // Fetch Session
                const sessionRes = await fetch('/api/auth/session');
                if (sessionRes.ok) {
                    const sessionData = await sessionRes.json();
                    setSession(sessionData);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filtered = campaigns.filter(c => {
        const matchSearch = !searchTerm || c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (c.ngoName && c.ngoName.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchDistrict = !selectedDistrict || c.districtName === selectedDistrict;
        const matchCat = !selectedCategory || c.category === selectedCategory;
        return matchSearch && matchDistrict && matchCat;
    }).sort((a, b) => {
        if (sortBy === 'urgent') return (a.status === 'URGENT' ? -1 : 1);
        if (sortBy === 'recent') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        return 0;
    });

    if (error) return <div className="container" style={{ padding: '100px 0', textAlign: 'center', color: 'red' }}>Error: {error}</div>;

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.liveTag}>
                            <span className={styles.dot}></span>
                            {campaigns.length} Active Campaigns
                        </span>
                        <h1 className={`${styles.title} font-heading`}>Browse Campaigns</h1>
                        <p className={styles.subtitle}>Direct giving, zero fees, real impact — across all of Kashmir.</p>
                    </div>
                    <div className={styles.searchSection}>
                        <div className={styles.searchWrapper}>
                            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by NGO, title, or location..."
                                className={styles.searchInput}
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.filterBar}>
                        <select className={styles.select} value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)}>
                            <option value="">All Districts</option>
                            {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                        <select className={styles.select} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                            <option value="">All Categories</option>
                            {CATEGORIES.map(c => <option key={c} value={c}>{c.replace('_', ' ')}</option>)}
                        </select>
                        <select className={styles.select} value={sortBy} onChange={e => setSortBy(e.target.value)}>
                            <option value="urgent">Urgent First</option>
                            <option value="recent">Ending Soon</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.resultsBar}>
                    {!loading && <p className={styles.count}>{filtered.length} campaign{filtered.length !== 1 ? 's' : ''} found</p>}
                    {loading && <p className={styles.count} style={{ visibility: 'hidden' }}>Loading...</p>}
                </div>
                <div className={styles.grid}>
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className={styles.card} style={{ pointerEvents: 'none' }}>
                                <div className={styles.cardImg} style={{ background: '#E2E8F0', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
                                <div className={styles.cardBody}>
                                    <div style={{ height: '14px', width: '40%', background: '#F1F5F9', marginBottom: '12px', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
                                    <div style={{ height: '24px', width: '80%', background: '#E2E8F0', marginBottom: '8px', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
                                    <div style={{ height: '24px', width: '60%', background: '#E2E8F0', marginBottom: '16px', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
                                    <div style={{ height: '60px', width: '100%', background: '#F8FAFC', borderRadius: '8px', animation: 'pulse 1.5s infinite ease-in-out' }}></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        filtered.map(c => {
                            const raised = c.verifiedAmount + c.pendingAmount;
                            const pct = Math.round((raised / c.goalAmount) * 100);
                            return (
                                <Link href={`/campaign/${c.id}`} key={c.id} className={styles.card}>
                                    <div className={styles.cardImg}>
                                        <img src={c.imageUrl || 'https://images.unsplash.com/photo-1584515839997-d0efba2f2341'} alt={c.title} />
                                        <div className={styles.cardImgOverlay} />
                                        <div className={styles.cardTagsTop}>
                                            {c.status === 'URGENT' && <span className={styles.urgentTag}>🔴 Urgent</span>}
                                        </div>
                                        <span className={styles.daysTag}>
                                            {c.deadline ? `${Math.ceil((new Date(c.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}d left` : 'Ongoing'}
                                        </span>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <p className={styles.cardNgo}>{c.ngoName} · {c.districtName}</p>
                                        <h3 className={styles.cardTitle}>{c.title}</h3>
                                        <p className={styles.cardDesc}>{c.description}</p>
                                        <div className={styles.cardFooter}>
                                            <div className={styles.progressWrap}>
                                                <div className={styles.progressBar}>
                                                    <div className={styles.progressVerified} style={{ width: `${Math.min(100, (c.verifiedAmount / c.goalAmount) * 100)}%` }} />
                                                    <div className={styles.progressPending} style={{ width: `${Math.min(100, (c.pendingAmount / c.goalAmount) * 100)}%` }} />
                                                </div>
                                                <div className={styles.progressMeta}>
                                                    <span className="font-mono" style={{ fontWeight: 700, color: 'var(--primary)' }}>
                                                        ₹{((c.verifiedAmount + c.pendingAmount) / 100).toLocaleString('en-IN')}
                                                    </span>
                                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                                        {Math.round(((c.verifiedAmount + c.pendingAmount) / c.goalAmount) * 100)}% of ₹{(c.goalAmount / 100).toLocaleString('en-IN')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    )}
                </div>
                {filtered.length === 0 && (
                    <div className={styles.empty}>
                        <p>No campaigns found matching your filters.</p>
                        <button onClick={() => { setSearchTerm(''); setSelectedDistrict(''); setSelectedCategory(''); }} className="btn-accent" style={{ borderRadius: '50px', padding: '12px 28px', marginTop: '16px' }}>
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
