"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar';
import Button from '@/components/Button';
import { QRCodeCanvas } from 'qrcode.react';
import DonorFeed from '@/components/DonorFeed';
import styles from './campaign-detail.module.css';
import {
    BANK_APPS,
    openBankApp,
    openUpiApp,
    getGPayLink,
    getPhonePeLink,
    getPaytmLink,
    detectPlatform,
} from '@/lib/deeplinks';


export default function CampaignDetailPage() {
    const { id } = useParams();
    const [paymentTab, setPaymentTab] = useState<'upi' | 'bank'>('upi');
    const [selectedAmount, setSelectedAmount] = useState(1000);
    const [reporting, setReporting] = useState(false);
    const [showHowToPopup, setShowHowToPopup] = useState(false);
    const [showPaymentSheet, setShowPaymentSheet] = useState(false);

    const [campaignData, setCampaignData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        fetch(`/api/campaigns/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) throw new Error(data.error);
                setCampaignData({
                    id: data.id.toString(),
                    title: data.title,
                    ngoId: data.ngo?.id?.toString() || '1',
                    ngoName: data.ngo?.name || 'Verified NGO',
                    email: data.ngo?.email || 'contact@ngo.org',
                    phone: data.ngo?.phone || '+91 00000 00000',
                    district: data.ngo?.district?.name || 'Kashmir',
                    category: data.category,
                    description: data.description,
                    verifiedAmount: data.verifiedAmount || 0,
                    pendingAmount: data.pendingAmount || 0,
                    goalAmount: data.goalAmount || 1000,
                    imageUrl: data.posterUrl || data.imageUrl || '',
                    donorCount: 156, // Mock metric until donations live
                    daysLeft: data.deadline ? Math.max(0, Math.ceil((new Date(data.deadline).getTime() - Date.now()) / 86400000)) : 30,
                    upiId: data.upiId || data.ngo?.upiId || '',
                    bankDetails: {
                        name: data.bankName || data.ngo?.bankName || '',
                        account: data.bankAccount || data.ngo?.bankAccount || '',
                        ifsc: data.ifsc || data.ngo?.ifsc || '',
                        holder: data.accountHolder || data.ngo?.accountHolder || ''
                    },
                    isZakatEligible: true, // Will wire to DB flags later
                    is80G: true,
                    donations: data.donations || []
                });
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC' }}>Loading Campaign Data...</div>;
    if (error || !campaignData) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC' }}>{error || 'Campaign not found'}</div>;

    const DUMMY_CAMPAIGN = campaignData;

    const getImageUrl = (path: string) => {
        if (!path) return 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221200%22%20height%3D%22800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232563EB%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230F172A%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22sans-serif%22%20font-size%3D%2260%22%20font-weight%3D%22bold%22%3ECampaign%20Poster%3C%2Ftext%3E%3C%2Fsvg%3E';
        if (path.startsWith('gs://')) return `/api/image?path=${encodeURIComponent(path)}`;
        return path;
    };

    const presets = [500, 1000, 2000, 5000];

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <div className={styles.hero} style={{ background: 'var(--primary, #0F3460)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroMeta} style={{ marginBottom: '24px' }}>
                            <span className={styles.categoryBadge}>{DUMMY_CAMPAIGN.category}</span>
                            <span className={styles.districtBadge}>{DUMMY_CAMPAIGN.district}</span>
                            {DUMMY_CAMPAIGN.isZakatEligible && <span className={styles.categoryBadge} style={{ background: '#10B981', marginLeft: 'auto', border: 'none', color: 'white' }}>Zakat Eligible</span>}
                            {DUMMY_CAMPAIGN.is80G && <span className={styles.categoryBadge} style={{ background: '#3B82F6', marginLeft: DUMMY_CAMPAIGN.isZakatEligible ? '0' : 'auto', border: 'none', color: 'white' }}>Tax Exempt 80G</span>}
                        </div>
                        <h1 className={`${styles.title} font-heading`} style={{ color: 'white', textShadow: 'none' }}>{DUMMY_CAMPAIGN.title}</h1>
                        <p className={styles.ngoName} style={{ color: 'rgba(255,255,255,0.8)' }}>Initiative by <b style={{ color: 'white' }}>{DUMMY_CAMPAIGN.ngoName}</b></p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.layout}>
                    {/* Content Column */}
                    <div className={styles.mainContent}>
                        {/* Mobile-only campaign progress summary */}
                        <div style={{
                            display: 'none',
                        }} className="mobile-campaign-summary">
                            {/* This is intentionally empty; the sticky bar handles actions */}
                        </div>

                        {/* Mobile campaign stats — shown only on mobile above the story */}
                        <div style={{
                            background: 'white',
                            border: '1px solid #E2E8F0',
                            borderRadius: '16px',
                            padding: '20px',
                            marginBottom: '24px',
                        }} className="md-hidden">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <div>
                                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0F3460', fontFamily: 'Space Mono, monospace' }}>
                                        ₹{((DUMMY_CAMPAIGN.verifiedAmount + DUMMY_CAMPAIGN.pendingAmount) / 100).toLocaleString()}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                                        raised of ₹{(DUMMY_CAMPAIGN.goalAmount / 100).toLocaleString()}
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F3460' }}>{DUMMY_CAMPAIGN.daysLeft}d</div>
                                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>days left</div>
                                </div>
                            </div>
                            <div style={{ height: '8px', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
                                <div style={{ width: `${Math.round((DUMMY_CAMPAIGN.verifiedAmount / DUMMY_CAMPAIGN.goalAmount) * 100)}%`, background: 'linear-gradient(90deg, #16A34A, #22C55E)', borderRadius: '4px 0 0 4px' }} />
                                <div style={{ width: `${Math.round((DUMMY_CAMPAIGN.pendingAmount / DUMMY_CAMPAIGN.goalAmount) * 100)}%`, background: 'linear-gradient(90deg, #D97706, #FBBF24)' }} />
                            </div>
                            <div style={{ marginTop: '8px', fontSize: '0.8rem', color: '#64748B' }}>
                                {DUMMY_CAMPAIGN.donorCount} donors · {Math.round(((DUMMY_CAMPAIGN.verifiedAmount + DUMMY_CAMPAIGN.pendingAmount) / DUMMY_CAMPAIGN.goalAmount) * 100)}% funded
                            </div>
                        </div>

                        {/* Full Uncropped Campaign Poster / Cover Image */}
                        <div style={{ marginBottom: '32px', borderRadius: '24px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', background: '#F8FAFC' }}>
                            <img 
                                src={getImageUrl(DUMMY_CAMPAIGN.imageUrl)} 
                                alt={`${DUMMY_CAMPAIGN.title} Poster`} 
                                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', maxHeight: '1000px' }}
                            />
                        </div>

                        <section className={styles.storySection}>
                            <h2 className={`${styles.sectionTitle} font-heading`}>Campaign Story</h2>
                            <div
                                className={styles.richText}
                                dangerouslySetInnerHTML={{ __html: DUMMY_CAMPAIGN.description }}
                            />
                        </section>

                        {/* Recent Donor Feed */}
                        <DonorFeed donations={campaignData.donations} />

                        <section className={styles.ngoSection}>
                            <div className={`${styles.ngoInfo} glass-card`} style={{ padding: '24px' }}>
                                <div className={styles.ngoHeader} style={{ marginBottom: '20px' }}>
                                    <div className={styles.ngoAvatar}>{DUMMY_CAMPAIGN.ngoName[0]}</div>
                                    <div>
                                        <h3 className="font-heading">{DUMMY_CAMPAIGN.ngoName}</h3>
                                        <p>Verified Local NGO • {DUMMY_CAMPAIGN.district}, Kashmir</p>
                                    </div>
                                </div>
                                
                                <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '20px' }}>
                                    <h4 style={{ fontSize: '0.80rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>Official Contact</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.90rem', color: '#334155', fontWeight: 500 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <span style={{ fontSize: '1.2rem' }}>📧</span> {DUMMY_CAMPAIGN.email}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <span style={{ fontSize: '1.2rem' }}>📞</span> {DUMMY_CAMPAIGN.phone}
                                        </div>
                                    </div>
                                </div>

                                <Link 
                                    href={`/ngos/${DUMMY_CAMPAIGN.ngoId}`}
                                    style={{ 
                                        width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none', 
                                        padding: '14px', borderRadius: '12px', fontWeight: 700, color: '#0F3460', 
                                        border: '2px solid #E2E8F0', background: 'white', transition: '0.2s',
                                        fontSize: '0.95rem'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.borderColor = '#94A3B8'}
                                    onMouseOut={e => e.currentTarget.style.borderColor = '#E2E8F0'}
                                >
                                    View Full Profile
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Donation Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.stickySidebar}>
                            <div className={`${styles.donationCard} glass-card`}>
                                <div className={styles.progressHeader}>
                                    <div className={styles.raisedAmount}>
                                        <span className={`${styles.amount} font-mono`}>₹{((DUMMY_CAMPAIGN.verifiedAmount + DUMMY_CAMPAIGN.pendingAmount) / 100).toLocaleString()}</span>
                                        <span className={styles.goal}>raised of ₹{(DUMMY_CAMPAIGN.goalAmount / 100).toLocaleString()}</span>
                                    </div>
                                    <ProgressBar
                                        verified={DUMMY_CAMPAIGN.verifiedAmount}
                                        pending={DUMMY_CAMPAIGN.pendingAmount}
                                        goal={DUMMY_CAMPAIGN.goalAmount}
                                    />
                                    <div className={styles.miniStats}>
                                        <span><b className="font-mono">{DUMMY_CAMPAIGN.donorCount}</b> Donors</span>
                                        <span><b className="font-mono">{DUMMY_CAMPAIGN.daysLeft}</b> Days Left</span>
                                    </div>
                                </div>

                                <div className={styles.paymentTabs}>
                                    <button
                                        className={`${styles.tab} ${paymentTab === 'upi' ? styles.activeTab : ''}`}
                                        onClick={() => setPaymentTab('upi')}
                                    >
                                        UPI
                                    </button>
                                    <button
                                        className={`${styles.tab} ${paymentTab === 'bank' ? styles.activeTab : ''}`}
                                        onClick={() => setPaymentTab('bank')}
                                    >
                                        Bank Transfer
                                    </button>
                                </div>

                                <div className={styles.paymentContent}>
                                    <div className={styles.amountInput}>
                                        <div className={styles.amountHeader}>
                                            <p className={styles.label}>Enter Amount</p>
                                            <div className={styles.customInputWrapper}>
                                                <span>₹</span>
                                                <input
                                                    type="number"
                                                    value={selectedAmount}
                                                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                                                    placeholder="500"
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.presets}>
                                            {presets.map(amt => (
                                                <button
                                                    key={amt}
                                                    className={`${styles.presetBtn} ${selectedAmount === amt ? styles.selectedPreset : ''}`}
                                                    onClick={() => setSelectedAmount(amt)}
                                                >
                                                    ₹{amt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {paymentTab === 'upi' ? (
                                        <div className={styles.upiPayment}>
                                            <div className={styles.upiMainBox}>
                                                <div className={styles.upiInfoRow}>
                                                    <span className={styles.payLabel}>UPI ID:</span>
                                                    <span className="font-mono">{DUMMY_CAMPAIGN.upiId}</span>
                                                    <button
                                                        className={styles.copyBtnIcon}
                                                        onClick={() => navigator.clipboard.writeText(DUMMY_CAMPAIGN.upiId)}
                                                    >
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                                    </button>
                                                </div>

                                                <div className={styles.upiGrid}>
                                                    {/* GPay */}
                                                    <a
                                                        href={getGPayLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount })}
                                                        className={styles.upiAppIcon}
                                                        title="Pay with GPay"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            openUpiApp(
                                                                getGPayLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount }),
                                                                'https://apps.apple.com/in/app/google-pay-save-pay-manage/id1193357041'
                                                            );
                                                        }}
                                                    >
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" />
                                                    </a>
                                                    {/* PhonePe */}
                                                    <a
                                                        href={getPhonePeLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount })}
                                                        className={styles.upiAppIcon}
                                                        title="Pay with PhonePe"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            openUpiApp(
                                                                getPhonePeLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount }),
                                                                'https://apps.apple.com/in/app/phonepe-secure-payments-app/id1170055821'
                                                            );
                                                        }}
                                                    >
                                                        <img src="https://cdn.simpleicons.org/phonepe/5f259f" alt="PhonePe" />
                                                    </a>
                                                    {/* Paytm */}
                                                    <a
                                                        href={getPaytmLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount })}
                                                        className={styles.upiAppIcon}
                                                        title="Pay with Paytm"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            openUpiApp(
                                                                getPaytmLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount }),
                                                                'https://apps.apple.com/in/app/paytm-secure-upi-payments/id473941634'
                                                            );
                                                        }}
                                                    >
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className={styles.qrSectionMini}>
                                                <div className={styles.qrWrapper}>
                                                    <QRCodeCanvas
                                                        value={`upi://pay?pa=${DUMMY_CAMPAIGN.upiId}&pn=${encodeURIComponent(DUMMY_CAMPAIGN.ngoName)}&am=${selectedAmount}&cu=INR&mc=0000`}
                                                        size={140}
                                                        level="H"
                                                        includeMargin={true}
                                                        imageSettings={{
                                                            src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg",
                                                            x: undefined,
                                                            y: undefined,
                                                            height: 16,
                                                            width: 32,
                                                            excavate: true,
                                                        }}
                                                    />
                                                </div>
                                                <p className={styles.qrHint}>Scan to pay instantly</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={styles.bankPayment}>
                                            <div className={styles.bankInfoGrid}>
                                                <div className={styles.bankField}>
                                                    <label>Account Holder</label>
                                                    <div className={styles.fieldValue}>
                                                        <span>{DUMMY_CAMPAIGN.bankDetails.holder}</span>
                                                    </div>
                                                </div>
                                                <div className={styles.bankField}>
                                                    <label>Bank Name</label>
                                                    <div className={styles.fieldValue}>
                                                        <span>{DUMMY_CAMPAIGN.bankDetails.name}</span>
                                                    </div>
                                                </div>
                                                <div className={styles.bankField}>
                                                    <label>Account Number</label>
                                                    <div className={styles.fieldValue}>
                                                        <span className="font-mono">{DUMMY_CAMPAIGN.bankDetails.account}</span>
                                                        <button
                                                            className={styles.copyBtnIcon}
                                                            onClick={() => navigator.clipboard.writeText(DUMMY_CAMPAIGN.bankDetails.account)}
                                                            title="Copy Account Number"
                                                        >
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className={styles.bankField}>
                                                    <label>IFSC Code</label>
                                                    <div className={styles.fieldValue}>
                                                        <span className="font-mono">{DUMMY_CAMPAIGN.bankDetails.ifsc}</span>
                                                        <button
                                                            className={styles.copyBtnIcon}
                                                            onClick={() => navigator.clipboard.writeText(DUMMY_CAMPAIGN.bankDetails.ifsc)}
                                                            title="Copy IFSC"
                                                        >
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.bankAppsSection}>
                                                <div className={styles.bankAppsHeader}>
                                                    <p className={styles.labelSmall}>Open Bank App</p>
                                                    <p className={styles.hint}>Copy details before opening the app</p>
                                                </div>
                                                <div className={styles.bankAppGrid}>
                                                    {BANK_APPS.map((bank) => (
                                                        <button
                                                            key={bank.name}
                                                            className={styles.bankAppBtn}
                                                            onClick={() => openBankApp(bank)}
                                                            title={`Open ${bank.name}`}
                                                        >
                                                            <img src={bank.logo} alt={bank.name} />
                                                            <span>{bank.name}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className={styles.reportHelpSection} style={{ marginBottom: '24px' }}>
                                        <button className={styles.howToDonateBtn} onClick={() => setShowHowToPopup(true)}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                            Need help? See how to donate
                                        </button>
                                    </div>

                                    <div className={styles.reportSectionWrapper}>
                                        <div className={styles.reportSection}>
                                            <p className={styles.reportHint}>Already paid?</p>
                                            <p className={styles.reportHint} style={{ marginTop: '-8px', marginBottom: '16px' }}>Please Report Your Donation.</p>
                                            <Button
                                                className={styles.reportBtn}
                                                onClick={() => setReporting(true)}
                                            >
                                                <span className={styles.btnShine}></span>
                                                Report Your Donation
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Sharing */}
                                <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--glass-border)' }}>
                                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '12px', textAlign: 'center' }}>Share this Campaign</p>
                                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                        <button
                                            onClick={() => window.open(`https://wa.me/?text=Check out this campaign on Mizaan: ${DUMMY_CAMPAIGN.title} - ${window.location.href}`, '_blank')}
                                            style={{ flex: 1, padding: '10px', background: '#25D366', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.543 5.856L.513 23.4l5.688-1.451C7.868 22.843 9.878 23.4 12 23.4c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.46c-1.84 0-3.606-.474-5.18-1.378l-.372-.213-3.37.86.903-3.21-.233-.365C2.864 15.686 2.34 13.882 2.34 12c0-5.32 4.33-9.66 9.66-9.66 5.33 0 9.66 4.34 9.66 9.66 0 5.32-4.33 9.66-9.66 9.66z" /></svg>
                                        </button>
                                        <button
                                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                                            style={{ flex: 1, padding: '10px', background: '#1877F2', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                        </button>
                                        <button
                                            onClick={() => navigator.clipboard.writeText(window.location.href)}
                                            style={{ flex: 2, padding: '10px', background: 'var(--bg-soft)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                            Copy Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Modals */}
            {reporting && (
                <div className={styles.modalOverlay}>
                    <div className={`${styles.modal} glass-card`}>
                        <div className={styles.modalHeader}>
                            <h2 className="font-heading">Report Donation</h2>
                            <button className={styles.closeBtn} onClick={() => setReporting(false)}>×</button>
                        </div>
                        <form className={styles.reportForm}>
                            <div className={styles.formGroup}>
                                <label>Amount Paid (₹)</label>
                                <input type="number" defaultValue={selectedAmount} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>UTR / Transaction ID (Last 4 Digits)</label>
                                <input type="text" maxLength={4} placeholder="e.g. 1234" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Your Name (Optional)</label>
                                <input type="text" placeholder="Keep it anonymous" />
                            </div>
                            <Button className="btn-accent" style={{ width: '100%' }}>Submit for Verification</Button>
                        </form>
                    </div>
                </div>
            )}

            {showHowToPopup && (
                <div className={styles.modalOverlay}>
                    <div className={`${styles.modal} ${styles.howToModal}`}>
                        <div className={styles.modalHeader}>
                            <h2 className="font-heading">How to Donate</h2>
                            <button className={styles.closeBtn} onClick={() => setShowHowToPopup(false)}>×</button>
                        </div>
                        <div className={styles.howToSteps}>
                            <div className={styles.howToStepItem}>
                                <div className={styles.stepNum}>1</div>
                                <p><b>Choose a method:</b> Select either UPI or Bank Transfer above.</p>
                            </div>
                            <div className={styles.howToStepItem}>
                                <div className={styles.stepNum}>2</div>
                                <p><b>Make the payment:</b> Scan the QR code with your UPI app (GPay, PhonePe) OR copy the Bank Account details to your bank app (JK Bank, HDFC).</p>
                            </div>
                            <div className={styles.howToStepItem}>
                                <div className={styles.stepNum}>3</div>
                                <p><b>Save the ID:</b> After completing the transfer, note down the <b>Transaction ID / UTR number</b>.</p>
                            </div>
                            <div className={styles.howToStepItem}>
                                <div className={styles.stepNum}>4</div>
                                <p><b>Report it:</b> Come back to this page and click <b>Report Your Donation</b> to add your contribution to the public ledger!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== MOBILE PAYMENT BOTTOM SHEET ===== */}
            {showPaymentSheet && (
                <div className={styles.modalOverlay} onClick={(e) => { if (e.target === e.currentTarget) setShowPaymentSheet(false); }}>
                    <div className={styles.paymentSheet}>
                        {/* Sheet handle + header */}
                        <div className={styles.sheetHandle} />
                        <div className={styles.modalHeader}>
                            <h2 className="font-heading" style={{ fontSize: '1.4rem' }}>Donate to this Campaign</h2>
                            <button className={styles.closeBtn} onClick={() => setShowPaymentSheet(false)}>×</button>
                        </div>

                        {/* Amount selector */}
                        <div className={styles.amountInput}>
                            <div className={styles.amountHeader}>
                                <p className={styles.label}>Select Amount</p>
                                <div className={styles.customInputWrapper}>
                                    <span>₹</span>
                                    <input
                                        type="number"
                                        value={selectedAmount}
                                        onChange={(e) => setSelectedAmount(Number(e.target.value))}
                                        placeholder="500"
                                    />
                                </div>
                            </div>
                            <div className={styles.presets}>
                                {presets.map(amt => (
                                    <button
                                        key={amt}
                                        className={`${styles.presetBtn} ${selectedAmount === amt ? styles.selectedPreset : ''}`}
                                        onClick={() => setSelectedAmount(amt)}
                                    >
                                        ₹{amt.toLocaleString()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* UPI / Bank tabs */}
                        <div className={styles.paymentTabs}>
                            <button className={`${styles.tab} ${paymentTab === 'upi' ? styles.activeTab : ''}`} onClick={() => setPaymentTab('upi')}>UPI</button>
                            <button className={`${styles.tab} ${paymentTab === 'bank' ? styles.activeTab : ''}`} onClick={() => setPaymentTab('bank')}>Bank Transfer</button>
                        </div>

                        {paymentTab === 'upi' ? (
                            <div className={styles.upiPayment}>
                                <div className={styles.upiMainBox}>
                                    <div className={styles.upiInfoRow}>
                                        <span className={styles.payLabel}>UPI ID:</span>
                                        <span className="font-mono">{DUMMY_CAMPAIGN.upiId}</span>
                                        <button className={styles.copyBtnIcon} onClick={() => navigator.clipboard.writeText(DUMMY_CAMPAIGN.upiId)}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                        </button>
                                    </div>
                                    <div className={styles.upiGrid}>
                                        <a href={getGPayLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount })} className={styles.upiAppIcon} title="Pay with GPay"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openUpiApp(getGPayLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount }), 'https://apps.apple.com/in/app/google-pay-save-pay-manage/id1193357041');
                                            }}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" />
                                        </a>
                                        <a href={getPhonePeLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount })} className={styles.upiAppIcon} title="Pay with PhonePe"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openUpiApp(getPhonePeLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount }), 'https://apps.apple.com/in/app/phonepe-secure-payments-app/id1170055821');
                                            }}>
                                            <img src="https://cdn.simpleicons.org/phonepe/5f259f" alt="PhonePe" />
                                        </a>
                                        <a href={getPaytmLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount })} className={styles.upiAppIcon} title="Pay with Paytm"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openUpiApp(getPaytmLink({ upiId: DUMMY_CAMPAIGN.upiId, payeeName: DUMMY_CAMPAIGN.ngoName, amount: selectedAmount }), 'https://apps.apple.com/in/app/paytm-secure-upi-payments/id473941634');
                                            }}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.qrSectionMini}>
                                    <div className={styles.qrWrapper}>
                                        <QRCodeCanvas
                                            value={`upi://pay?pa=${DUMMY_CAMPAIGN.upiId}&pn=${encodeURIComponent(DUMMY_CAMPAIGN.ngoName)}&am=${selectedAmount}&cu=INR`}
                                            size={120}
                                            level="H"
                                            includeMargin={true}
                                        />
                                    </div>
                                    <p className={styles.qrHint}>Scan with any UPI app</p>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.bankPayment}>
                                <div className={styles.bankInfoGrid}>
                                    {[
                                        { label: 'Account Holder', value: DUMMY_CAMPAIGN.bankDetails.holder },
                                        { label: 'Bank Name', value: DUMMY_CAMPAIGN.bankDetails.name },
                                        { label: 'Account Number', value: DUMMY_CAMPAIGN.bankDetails.account, mono: true, copy: true },
                                        { label: 'IFSC Code', value: DUMMY_CAMPAIGN.bankDetails.ifsc, mono: true, copy: true },
                                    ].map(f => (
                                        <div key={f.label} className={styles.bankField}>
                                            <label>{f.label}</label>
                                            <div className={styles.fieldValue}>
                                                <span className={f.mono ? 'font-mono' : ''}>{f.value}</span>
                                                {f.copy && (
                                                    <button className={styles.copyBtnSmall} onClick={() => navigator.clipboard.writeText(f.value)}>Copy</button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.bankAppsSection}>
                                    <div className={styles.bankAppsHeader}>
                                        <p className={styles.labelSmall}>Open Bank App</p>
                                        <p className={styles.hint}>Copy details first</p>
                                    </div>
                                    <div className={styles.bankAppGrid}>
                                        {BANK_APPS.map((bank) => (
                                            <button key={bank.name} className={styles.bankAppBtn} onClick={() => openBankApp(bank)} title={`Open ${bank.name}`}>
                                                <img src={bank.logo} alt={bank.name} />
                                                <span>{bank.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div style={{ padding: '16px 0 8px' }}>
                            <button className={styles.reportBtn} onClick={() => { setShowPaymentSheet(false); setReporting(true); }}>
                                <span className={styles.btnShine}></span>
                                Already paid? <br /> Report Your Donation
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== STICKY MOBILE ACTION BAR ===== */}
            <div className={styles.stickyActionBar}>
                <button
                    className={styles.donateBtn}
                    onClick={() => setShowPaymentSheet(true)}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.59l-1.42-1.3C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.58 11.79L12 21.59z" />
                    </svg>
                    Donate
                </button>
                <button
                    className={styles.reportBtnMobile}
                    onClick={() => setReporting(true)}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Report
                </button>
                <button
                    className={styles.shareBtn}
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({ title: DUMMY_CAMPAIGN.title, url: window.location.href });
                        } else {
                            navigator.clipboard.writeText(window.location.href);
                        }
                    }}
                    title="Share"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
