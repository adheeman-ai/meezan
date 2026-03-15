'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const isDarkHeroPage = pathname === '/' || pathname === '/campaigns' || pathname === '/transparency' || pathname?.startsWith('/campaign/');

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Header is "active" (scrolled style) if we've scrolled OR if it's not a translucent hero page
    const headerActive = !isDarkHeroPage || scrolled;

    useEffect(() => {
        if (!isDarkHeroPage) return;

        const scrollCheck = () => setScrolled(window.scrollY > 20);
        scrollCheck(); // Initial check

        window.addEventListener('scroll', scrollCheck, { passive: true });
        return () => window.removeEventListener('scroll', scrollCheck);
    }, [isDarkHeroPage]);

    return (
        <header className={`${styles.header} ${headerActive ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>

                <Link href="/" className={styles.logo}>
                    <img src="/logos/mizaan-white.png" alt="Mizaan Logo" className={styles.logoLight} />
                    <img src="/logos/mizaan-black.png" alt="Mizaan Logo" className={styles.logoDark} />
                </Link>

                <nav className={styles.nav}>
                    <Link href="/campaigns" className={styles.navLink}>
                        <span>Campaigns</span>
                    </Link>
                    <Link href="/ngo" className={styles.navLink}>
                        <span>For NGOs</span>
                    </Link>
                    <Link href="/ngo/dashboard" className={styles.navLink}>
                        <span>Dashboard</span>
                    </Link>
                </nav>

                <div className={styles.actions}>
                    <Link href="/campaigns" className="btn-accent" style={{ padding: '10px 22px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.59l-1.42-1.3C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.58 11.79L12 21.59z" /></svg>
                        Donate Now
                    </Link>

                    <button
                        className={styles.menuBtn}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
                <Link href="/campaigns" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Campaigns</Link>
                <Link href="/ngo" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>For NGOs</Link>
                <Link href="/ngo/dashboard" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <Link href="/campaigns" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>Donate Now</Link>
            </div>
        </header>
    );
}
