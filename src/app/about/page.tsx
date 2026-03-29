import React from 'react';
import styles from './about.module.css';
import Link from 'next/link';

// === PREMIUM SVG ICONS ===
const Icons = {
    Tracking: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    ),
    Fees: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    ),
    Verified: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    ),
    Receipt: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
        </svg>
    ),
    District: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
    ),
    Manual: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    ),
    NGO: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4" /><path d="M5 21V10.85" /><path d="M19 21V10.85" /><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
        </svg>
    ),
    Campaign: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
    ),
    Direct: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
        </svg>
    ),
    Automation: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
    )
};

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* === PREMIUM HERO === */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <div className={styles.heroOverlay} />
                </div>
                <div className="container">
                    <div className={`${styles.heroContent} animate-fade-up`}>
                        <span className={styles.heroPre}>Empowering Kashmir&apos;s Spirit of Giving</span>
                        <h1>Restoring Trust Through <br /><span>Radical Transparency</span></h1>
                        <p>Meezan isn&apos;t just a platform; it&apos;s a digital infrastructure built to ensure every single rupee reaches its intended destination without friction.</p>
                        <div className={styles.heroButtons}>
                            <Link href="/campaigns" className="btn-accent">Explore Campaigns</Link>
                            <Link href="/transparency" className={styles.btnSecondary}>Public Ledger</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* === SECTION 1: THE CORE PROBLEM === */}
            <section className="section" id="problem">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.labelWrapper}>
                            <span className="section-label">State of Charity</span>
                        </div>
                        <h2>The Accountability Gap</h2>
                        <p>Current methods of charity in Kashmir rely on informal social media updates, leading to systemic inefficiencies.</p>
                    </div>

                    <div className={styles.problemGrid}>
                        {[
                            { title: 'The Endless Campaign', desc: 'NGOs share posters with initial targets on social media. Without a live ledger, donors keep sending money blindly long after the case is closed.', icon: <Icons.Tracking /> },
                            { title: 'The 10% Leakage', desc: 'Global platforms charge high platform fees and payment gateway fees. For every ₹1,00,000 raised, nearly ₹10,000 is lost to corporations.', icon: <Icons.Fees /> },
                            { title: 'Verification Fatigue', desc: 'NGO volunteers spend 60% of their time manually matching random UPI names to massive unorganized bank statements.', icon: <Icons.Manual /> },
                            { title: 'Legal Vulnerability', desc: 'Donating to random social media posts limits traceability. Without official receipts containing the NGO\'s PAN, donors face legal risks during audits.', icon: <Icons.Receipt /> },
                            { title: 'Coverage Imbalance', desc: 'Aid is often reactive, focusing on central areas while leaving remote districts in Kashmir completely underserved.', icon: <Icons.District /> },
                            { title: 'Trust Deficit', desc: 'Lack of verified collection data makes it difficult for generous donors to contribute with absolute confidence.', icon: <Icons.Verified /> }
                        ].map((p, i) => (
                            <div key={i} className={styles.problemCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.problemIcon}>{p.icon}</div>
                                    <h3>{p.title}</h3>
                                </div>
                                <p>{p.desc}</p>
                                <div className={styles.cardAccent} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === SECTION 2: THE MEEZAN PROTOCOL === */}
            <section className="section" style={{ background: 'var(--bg-soft)', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className={styles.sectionHeader}>
                        <span className="section-label">Our Solution</span>
                        <h2>The Meezan Protocol</h2>
                        <p>A closed-loop system designed for speed, security, and absolute transparency.</p>
                    </div>

                    <div className={styles.processFlow}>
                        {[
                            { title: 'Portal Access', desc: 'NGOs register and verify their credentials with us. Once approved, they gain full administrative portal access.', icon: <Icons.NGO /> },
                            { title: 'Single Share Link', desc: 'NGOs create campaigns, utilize the auto-poster generator, and share one centralized tracking link across social media.', icon: <Icons.Campaign /> },
                            { title: 'Smart Payments', desc: 'Donors click the link. On mobile, it directly opens their preferred UPI app with prefilled amounts or shows direct bank details.', icon: <Icons.Direct /> },
                            { title: 'Donation Reporting', desc: 'After transferring directly to the NGO, donors log their UTR or Reference ID on our platform to initiate tracking.', icon: <Icons.Tracking /> },
                            { title: 'Smart Verification', desc: 'NGOs upload bank statements for our intelligent system to auto-prompt verification matches, saving hours of manual labor.', icon: <Icons.Automation /> },
                            { title: 'Legal Receipts', desc: 'Once verified, donors receive detailed official receipts (including the NGO\'s PAN and donor name), averting legal tracing troubles.', icon: <Icons.Receipt /> }
                        ].map((step, i) => (
                            <div key={i} className={styles.processItem}>
                                <div className={styles.processCircle}>
                                    <div className={styles.stepNum}>{i + 1}</div>
                                    <div className={styles.procIcon}>{step.icon}</div>
                                </div>
                                <div className={styles.processContent}>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.bgGlow} />
            </section>

            {/* === SECTION 3: KEY BENEFITS === */}
            <section className="section">
                <div className="container">
                    <div className={styles.benefitSection}>
                        <div className={styles.benefitLeft}>
                            <span className="section-label underline">Our Promise</span>
                            <h2>Why Donors & NGOs <br />Trust Meezan</h2>
                            <p>We provide the tools. You provide the impact. Together, we build a more accountable Kashmir.</p>
                            <Link href="/ngos" className="btn-primary">View Verified NGOs</Link>
                        </div>
                        <div className={styles.benefitRight}>
                            {[
                                { title: 'Zero Fees', icon: '💎' },
                                { title: 'Legal Receipts', icon: '⚖️' },
                                { title: 'District Maps', icon: '📍' },
                                { title: 'Verified Only', icon: '🛡️' },
                                { title: 'Live Progress', icon: '📈' },
                                { title: 'Direct UPI', icon: '📲' }
                            ].map((b, i) => (
                                <div key={i} className={styles.benefitChip}>
                                    <span className={styles.chipIcon}>{b.icon}</span>
                                    <span className={styles.chipTitle}>{b.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* === SECTION 4: COMPARISON === */}
            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className="section-label">Performance Comparison</span>
                        <h2>Maximum Efficiency</h2>
                        <p>How Meezan compares against traditional aid distribution methods.</p>
                    </div>

                    <div className={styles.tableCard}>
                        <table className={styles.modernTable}>
                            <thead>
                                <tr>
                                    <th>Criteria</th>
                                    <th>Social Media</th>
                                    <th>Global Sites</th>
                                    <th className={styles.highlightCol}>Meezan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { f: 'Live Tracking', s: '✗', g: '✓', m: '✓' },
                                    { f: 'Platform Fees', s: '0%', g: '5-8%', m: '0%' },
                                    { f: 'Gateway Fees', s: 'N/A', g: '3%', m: '0%' },
                                    { f: 'Official Receipts', s: '✗', g: '✓', m: '✓' },
                                    { f: 'Credential Check', s: '✗', g: 'Limited', m: '✓' },
                                    { f: 'District Focus', s: '✗', g: '✗', m: '✓' },
                                    { f: 'Auto-Verification', s: '✗', g: '✗', m: '✓' }
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className={styles.featName}>{row.f}</td>
                                        <td className={styles.neg}>{row.s}</td>
                                        <td>{row.g}</td>
                                        <td className={styles.pos}>{row.m}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
