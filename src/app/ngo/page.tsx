import Link from 'next/link';
import styles from './portal.module.css';

export default function NgoPortalBridge() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={`${styles.title} font-heading`}>NGO Portal</h1>
                    <p className={styles.subtitle}>
                        Connecting Kashmir&apos;s most trusted foundations with donors worldwide.
                    </p>
                </div>
            </section>

            {/* Bridge Choices */}
            <div className={styles.choicesGrid}>
                <Link href="/ngo/login" className={styles.choiceCard}>
                    <div className={styles.iconWrapper}>🔑</div>
                    <h2 className={`${styles.choiceTitle} font-heading`}>Existing Partner</h2>
                    <p className={styles.choiceDesc}>
                        Sign in to your dashboard to manage active campaigns, verify donor reports, and post updates.
                    </p>
                    <div className={`${styles.btn} ${styles.btnLogin}`}>
                        Sign In →
                    </div>
                </Link>

                <Link href="/ngo/register" className={styles.choiceCard}>
                    <div className={styles.iconWrapper}>🤝</div>
                    <h2 className={`${styles.choiceTitle} font-heading`}>New NGO Registration</h2>
                    <p className={styles.choiceDesc}>
                        Apply to join Mizaan. Our team will verify your documents and district presence within 48–72 hours.
                    </p>
                    <div className={`${styles.btn} ${styles.btnRegister}`}>
                        Register NGO →
                    </div>
                </Link>
            </div>

            {/* Trust Badges */}
            <section className={styles.trustSection}>
                <div className="container">
                    <h3 className={styles.trustTitle}>The Mizaan Promise</h3>
                    <div className={styles.trustGrid}>
                        <div className={styles.trustItem}>
                            <span>🛡️</span> 100% Vetted NGOs
                        </div>
                        <div className={styles.trustItem}>
                            <span>💰</span> Zero Platform Fees
                        </div>
                        <div className={styles.trustItem}>
                            <span>📍</span> District Verification
                        </div>
                        <div className={styles.trustItem}>
                            <span>📊</span> Real-time Transparency
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
