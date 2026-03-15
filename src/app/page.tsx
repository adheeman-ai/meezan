import Link from 'next/link';
import styles from './page.module.css';


const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'NGO Registers',
    description: 'Verified local Kashmir NGOs submit their documents. Our team vets every application within 48 hours.'
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: 'Direct Giving',
    description: 'Campaigns go live with direct UPI/Bank details. You pay the NGO directly—Mizaan takes zero fees.'
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Real Tracking',
    description: 'Donors report their donations. NGOs verify them. Every rupee is tracked transparently in real-time.'
  }
];

const trustValues = [
  {
    icon: '⚡',
    title: 'Zero Platform Fees',
    description: '100% of every rupee you donate reaches the NGO directly. No commissions, no deductions, ever.'
  },
  {
    icon: '✅',
    title: 'Vetted NGOs Only',
    description: 'Every NGO is verified by our team and cross-checked with local district administration records.'
  },
  {
    icon: '📲',
    title: 'Pay Directly',
    description: 'Skip the middleman. Donate via UPI, GPay, PhonePe, or direct bank transfer in seconds.'
  },
  {
    icon: '🔎',
    title: 'Full Transparency',
    description: 'A public ledger for Kashmir aid. Every donation is logged, tracked, and reported openly.'
  }
];

import { prisma } from '@/lib/prisma';

const categoryColors: Record<string, string> = {
  MEDICAL: '#DC2626',
  EDUCATION: '#2563EB',
  ENVIRONMENT: '#16A34A',
  DISASTER: '#D97706',
};

export default async function Home() {
  const dbDistricts = await prisma.district.findMany({
    include: {
      ngos: {
        include: { _count: { select: { campaigns: true } } }
      }
    }
  });

  const districts = dbDistricts.map(d => ({
    name: d.name,
    campaigns: d.ngos.reduce((acc, n) => acc + n._count.campaigns, 0),
    emoji: d.name === 'Srinagar' ? '🏔️' : d.name === 'Baramulla' ? '🌿' : d.name === 'Anantnag' ? '🌸' : d.name === 'Kupwara' ? '🏕️' : '🌲'
  }));

  const campaigns = await prisma.campaign.findMany({
    take: 3,
    where: { status: 'ACTIVE' },
    include: {
      ngo: {
        select: { name: true, district: { select: { name: true } } }
      },
      _count: { select: { donations: true } }
    },
    orderBy: { createdAt: 'desc' }
  });

  const campaignCount = await prisma.campaign.count();
  const ngoCount = await prisma.ngo.count({ where: { status: 'VERIFIED' } });
  const districtCount = await prisma.district.count();

  const featuredCampaigns = campaigns.map(c => ({
    id: c.id.toString(),
    title: c.title,
    ngo: c.ngo.name,
    district: c.ngo.district.name,
    category: c.category,
    raised: `₹${((c.verifiedAmount + c.pendingAmount) / 100000).toFixed(1)}L`,
    goal: `₹${(c.goalAmount / 100000).toFixed(1)}L`,
    pct: Math.round(((c.verifiedAmount + c.pendingAmount) / c.goalAmount) * 100),
    donors: c._count.donations,
    isUrgent: c.status === 'URGENT',
    image: c.imageUrl || 'https://images.unsplash.com/photo-1584515839997-d0efba2f2341?q=80&w=600&auto=format&fit=crop'
  }));
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1598305371124-4f094fea4608?q=80&w=2000&auto=format&fit=crop"
            alt="Kashmir Valley"
          />
          <div className={styles.heroGradient} />
        </div>

        <div className={`container ${styles.heroInner} staggered-entrance`}>
          <div className={styles.heroLabel}>
            <span className={styles.pulse}></span>
            Live Tracking Across 10 Districts
          </div>

          <h1 className={styles.heroTitle}>
            Balancing Care
            <br />
            <span className={styles.heroTitleAccent}>Across Kashmir</span>
          </h1>

          <p className={styles.heroTagline}>
            0% Platform Fees • 0% Payment Gateway Fees • Direct Deposits<br />
            Kashmir&apos;s dedicated charity facilitator.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '50px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              100% Secure
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '50px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              Verified NGOs
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '50px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
              Direct Bank Transfers
            </span>
          </div>

          <div className={styles.statsRow}>
            {[
              { label: 'NGOs', value: `${ngoCount}+` },
              { label: 'Campaigns', value: `${campaignCount}+` },
              { label: 'Funds Tracked', value: '₹12.5L' },
              { label: 'Districts', value: `${districtCount}` },
            ].map(s => (
              <div key={s.label} className={styles.statPill}>
                <span className={`${styles.statValue} font-mono`}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroCta}>
            <Link href="/campaigns" className="btn-accent" style={{ fontSize: '1rem', padding: '15px 36px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.59l-1.42-1.3C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.58 11.79L12 21.59z" /></svg>
              Donate to a Cause
            </Link>
            <Link href="/ngo" className={styles.heroSecondaryBtn}>
              NGO Portal →
            </Link>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <div className={styles.scrollIndicator}></div>
        </div>
      </section>

      {/* ===== FEATURED CAMPAIGNS ===== */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">Active Now</span>
            <h2 className="section-title">Featured Campaigns</h2>
            <p className="section-subtitle">Curated urgent causes across Kashmir — making a real difference.</p>
          </div>
          <div className={styles.campaignsGrid}>
            {featuredCampaigns.map(c => (
              <Link href={`/campaign/${c.id}`} key={c.id} className={styles.featuredCard}>
                <div className={styles.cardImage}>
                  <img src={c.image} alt={c.title} />
                  <div className={styles.cardImageOverlay} />
                  <div className={styles.cardBadges}>
                    {c.isUrgent && <span className={styles.urgentBadge}>🔴 Urgent</span>}
                    <span className={styles.catBadge} style={{ background: categoryColors[c.category] ?? '#64748B' }}>{c.category}</span>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardNgo}>{c.ngo} · {c.district}</p>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <div className={styles.cardProgress}>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${c.pct}%` }} />
                    </div>
                    <div className={styles.cardProgressStats}>
                      <span className="font-mono" style={{ fontWeight: 700, color: 'var(--primary)' }}>{c.raised}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>of {c.goal} · {c.donors} donors</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.viewAllRow}>
            <Link href="/campaigns" className="btn-primary" style={{ borderRadius: '50px', padding: '13px 36px' }}>
              View All Campaigns →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DISTRICT EXPLORER ===== */}
      <section className={styles.districtSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">Explore</span>
            <h2 className="section-title">District Explorer</h2>
            <p className="section-subtitle">Browse active campaigns across all 10 districts of Kashmir Valley.</p>
          </div>
          <div className={styles.districtGrid}>
            {districts.map(d => (
              <Link href={`/campaigns?district=${d.name}`} key={d.name} className={styles.districtCard}>
                <span className={styles.districtEmoji}>{d.emoji}</span>
                <span className={styles.districtName}>{d.name}</span>
                <span className={styles.districtCount}>{d.campaigns} campaigns</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className={styles.howSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">Process</span>
            <h2 className="section-title">How Mizaan Works</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>A transparent, three-step system that puts aid directly in the right hands. 0% Platform Fees, 0% Payment Gateway Fees. Direct deposits to NGO accounts.</p>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                {i < steps.length - 1 && <div className={styles.stepConnector} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST SECTION ===== */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.trustInner}>
            <div className={styles.trustLeft}>
              <span className="section-label">Built For Kashmir</span>
              <h2 className="section-title" style={{ color: 'white' }}>Built on<br />Transparency</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '420px' }}>
                Mizaan exists to bridge the gap between generous donors and trusted NGOs, with zero friction and full accountability.
              </p>
              <Link href="/transparency" className="btn-accent" style={{ display: 'inline-block', borderRadius: '50px', padding: '13px 32px' }}>
                View Public Ledger
              </Link>
            </div>
            <div className={styles.trustGrid}>
              {trustValues.map(v => (
                <div key={v.title} className={styles.trustCard}>
                  <div className={styles.trustIcon}>{v.icon}</div>
                  <h4 className={styles.trustTitle}>{v.title}</h4>
                  <p className={styles.trustDesc}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className={styles.howSection} style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">Transparency</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>Everything you need to know about how Mizaan operates and secures your donations.</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'Does Mizaan charge any fees?', a: 'No. Mizaan is a 100% zero-fee platform. We do not charge platform fees or payment gateway commissions. 100% of your donation amounts go directly into the NGO\'s bank account.' },
              { q: 'How do I know the NGOs are genuine?', a: 'Every NGO listed on Mizaan undergoes a strict vetting process. We verify their registration certificates, local district approvals, and previous track records before they can launch a campaign.' },
              { q: 'Why do I need to report my donation?', a: 'Because you pay directly to the NGO\'s UPI or Bank Account, Mizaan cannot automatically track the transaction. By reporting your UTR/Transaction ID, we can update the public ledger and maintain full transparency on the funds raised.' },
              { q: 'Are my donations tax-exempt?', a: 'Look for the "Tax Exempt 80G" badge on campaigns. If the NGO has 80G certification, your donation is eligible for tax deduction under the Indian Income Tax Act. You can request a receipt directly from the NGO.' }
            ].map((faq, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: '16px', padding: '24px' }}>
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 8px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Q.</span> {faq.q}
                </h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, paddingLeft: '28px' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to make an impact?</h2>
              <p className={styles.ctaSubtitle}>Every donation, big or small, is tracked and verified.</p>
            </div>
            <div className={styles.ctaBtns}>
              <Link href="/campaigns" className="btn-accent" style={{ borderRadius: '50px', padding: '14px 36px', fontSize: '1rem' }}>
                Browse Campaigns
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
