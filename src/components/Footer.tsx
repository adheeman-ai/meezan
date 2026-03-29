import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const districts = ['Srinagar', 'Baramulla', 'Anantnag', 'Kupwara', 'Budgam'];

    return (
        <footer className={styles.footer}>
            {/* Accent top bar */}
            <div className={styles.topBar} />

            <div className="container">
                <div className={styles.content}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <img src="/logos/mizaan-white.png" alt="Mizaan" style={{ height: '80px', width: 'auto' }} />
                        </Link>
                        <p className={styles.tagline}>
                            A community-first platform bringing transparency and direct aid to Kashmir&apos;s 10 districts. Zero fees. Full trust.
                        </p>
                        <div className={styles.socialGrid}>
                            {[
                                { label: 'Twitter', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> },
                                { label: 'Instagram', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                                { label: 'WhatsApp', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg> },
                            ].map(s => (
                                <a key={s.label} href="#" className={styles.socialBtn} title={s.label} aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Platform */}
                    <div className={styles.column}>
                        <h4 className={`${styles.colTitle} font-heading`}>Platform</h4>
                        <ul>
                            <li><Link href="/about">About Meezan</Link></li>
                            <li><Link href="/campaigns">Browse Campaigns</Link></li>
                            <li><Link href="/ngo/login">NGO Portal</Link></li>
                        </ul>
                    </div>

                    {/* Districts */}
                    <div className={styles.column}>
                        <h4 className={`${styles.colTitle} font-heading`}>Districts</h4>
                        <ul>
                            {districts.map(d => (
                                <li key={d}><Link href={`/campaigns?district=${d}`}>{d}</Link></li>
                            ))}
                            <li><Link href="/campaigns" style={{ color: 'var(--accent, #C9A84C)' }}>View all 10 →</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className={styles.column}>
                        <h4 className={`${styles.colTitle} font-heading`}>Help & Trust</h4>
                        <ul>
                            <li><a href="mailto:shukriya@mizaan.org">Email Support</a></li>
                            <li><Link href="/transparency">Public Aid Ledger</Link></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>

                        <div className={styles.badge}>
                            <span>🔒</span>
                            <span>0% Platform Fee</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Mizaan</p>
                </div>
            </div>
        </footer>
    );
}
