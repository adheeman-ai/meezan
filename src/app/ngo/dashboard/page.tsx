import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import styles from './dashboard.module.css';

export default async function NgoDashboard() {
    // For now picking the first NGO until auth is fully integrated
    const ngo = await prisma.ngo.findFirst({
        where: { status: 'VERIFIED' },
        include: {
            campaigns: { include: { _count: { select: { donations: true } } } },
            district: true
        }
    });

    if (!ngo) return <div className="container">NGO not found.</div>;

    const activeCampaigns = ngo.campaigns.filter(c => c.status === 'ACTIVE');
    const totalRaisedPaise = ngo.campaigns.reduce((acc, c) => acc + c.verifiedAmount, 0);
    const totalRaised = `₹${(totalRaisedPaise / 100000).toFixed(1)}L`;
    const totalDonors = ngo.campaigns.reduce((acc, c) => acc + c._count.donations, 0);

    const stats = [
        { label: 'Total Raised', value: totalRaised, icon: '💰', color: '#16A34A', change: '' },
        { label: 'Active Campaigns', value: activeCampaigns.length.toString(), icon: '📢', color: '#2563EB', change: '' },
        { label: 'Verified Donors', value: totalDonors.toLocaleString(), icon: '✅', color: '#7C3AED', change: '' },
        { label: 'Pending Amount', value: `₹${(ngo.campaigns.reduce((acc, c) => acc + c.pendingAmount, 0) / 100).toLocaleString()}`, icon: '⏳', color: '#D97706', change: '' }
    ];

    const campaignData = ngo.campaigns.map(c => ({
        id: c.id.toString(),
        title: c.title,
        raised: c.verifiedAmount,
        goal: c.goalAmount,
        status: c.status,
        donors: c._count.donations,
        endDate: c.deadline ? new Date(c.deadline).toLocaleDateString() : 'Ongoing'
    }));

    return (
        <div className={styles.page}>
            <div className="container">
                {/* Top Header */}
                <div className={styles.topHeader}>
                    <div className={styles.ngoIdentity}>
                        <div className={styles.ngoAvatar}>{ngo.name.substring(0, 3).toUpperCase()}</div>
                        <div>
                            <div className={styles.ngoVerified}>✓ {ngo.status} NGO</div>
                            <h1 className={`${styles.ngoName} font-heading`}>{ngo.name}</h1>
                            <p className={styles.ngoMeta}>Member since {new Date(ngo.createdAt).getFullYear()} · {ngo.district.name} District</p>
                        </div>
                    </div>
                    <Link href="/ngo/dashboard/tools" className="btn-accent" style={{ borderRadius: '50px', padding: '12px 28px', whiteSpace: 'nowrap' }}>
                        + New Campaign
                    </Link>
                </div>

                {/* Stats */}
                <div className={styles.statsGrid}>
                    {stats.map(s => (
                        <div key={s.label} className={styles.statCard}>
                            <div className={styles.statTop}>
                                <span className={styles.statIcon}>{s.icon}</span>
                                <span className={styles.statChange}>{s.change}</span>
                            </div>
                            <div className={`${styles.statValue} font-mono`} style={{ color: s.color }}>{s.value}</div>
                            <div className={styles.statLabel}>{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* All Campaigns */}
                <div className={styles.sectionCard} style={{ margin: '16px 0 80px' }}>
                    <div className={styles.sectionHeader}>
                        <h3 className={`${styles.sectionTitle} font-heading`}>Your Campaigns</h3>
                        <Link href="/ngo/dashboard/tools" className="btn-accent" style={{ borderRadius: '50px', padding: '10px 20px', fontSize: '0.875rem' }}>+ New</Link>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Campaign</th>
                                <th>Progress</th>
                                <th>Donors</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaignData.map(c => {
                                const pct = Math.round((c.raised / c.goal) * 100);
                                return (
                                    <tr key={c.id}>
                                        <td><Link href={`/campaign/${c.id}`} className={styles.campaignLink}>{c.title}</Link></td>
                                        <td>
                                            <div className={styles.tableProgress}>
                                                <div className={styles.tableProgressFill} style={{ width: `${Math.min(100, pct)}%` }} />
                                            </div>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{pct}% · ₹{(c.raised / 100).toLocaleString('en-IN')}</span>
                                        </td>
                                        <td className="font-mono">{c.donors}</td>
                                        <td style={{ fontSize: '0.875rem' }}>{c.endDate}</td>
                                        <td><span className={`${styles.statusBadge} ${styles['status' + c.status]}`}>{c.status}</span></td>
                                        <td><button className={styles.editBtn}>Edit</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
