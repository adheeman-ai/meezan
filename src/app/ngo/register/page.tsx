'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './register.module.css';

const DISTRICTS = ['Srinagar', 'Baramulla', 'Anantnag', 'Pulwama', 'Kupwara', 'Budgam', 'Bandipora', 'Ganderbal', 'Shopian', 'Kulgam'];

const STEPS = [
    { num: 1, label: 'Basic Info', icon: '🏢' },
    { num: 2, label: 'Legal & Trust', icon: '🔒' },
    { num: 3, label: 'Payment Setup', icon: '💳' },
    { num: 4, label: 'Submitted', icon: '✅' }
];

export default function NgoRegisterPage() {
    const [step, setStep] = useState(1);

    return (
        <div className={styles.page}>
            <div className={styles.pageInner}>
                {/* Left Panel */}
                <div className={styles.leftPanel}>
                    <div className={styles.leftContent}>
                        <div className={styles.leftLogo}>
                            <span className="font-urdu" style={{ fontSize: '2.5rem', color: 'var(--accent, #C9A84C)' }}>میزان</span>
                            <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.6rem', fontWeight: 700, color: 'white' }}>Mizaan</span>
                        </div>
                        <h2 className={styles.leftTitle}>Join Kashmir&apos;s Most Trusted Charity Network</h2>
                        <p className={styles.leftDesc}>
                            Register your NGO once. Reach thousands of donors across Kashmir with zero platform fees on every campaign.
                        </p>
                        <div className={styles.perks}>
                            {['100% funds go directly to your account', 'Verification in 48–72 hours', 'Free campaign creation tools', 'Real-time donation tracking'].map(p => (
                                <div key={p} className={styles.perkItem}>
                                    <span className={styles.perkDot}>✓</span>
                                    <span>{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className={styles.rightPanel}>
                    {/* Stepper */}
                    <div className={styles.stepper}>
                        {STEPS.map((s, i) => (
                            <React.Fragment key={s.num}>
                                <div className={`${styles.step} ${step >= s.num ? styles.stepActive : ''} ${step === s.num ? styles.stepCurrent : ''}`}>
                                    <div className={styles.stepCircle}>{step > s.num ? '✓' : s.icon}</div>
                                    <span className={styles.stepLabel}>{s.label}</span>
                                </div>
                                {i < STEPS.length - 1 && <div className={`${styles.stepLine} ${step > s.num ? styles.stepLineDone : ''}`} />}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className={styles.formCard}>
                        {step === 1 && (
                            <div className={styles.formStep}>
                                <h2 className={`${styles.formTitle} font-heading`}>NGO Basic Details</h2>
                                <p className={styles.formSubtitle}>Start your journey to serve Kashmir&apos;s community.</p>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Official NGO Name *</label>
                                    <input type="text" placeholder="e.g. Kashmir Relief Foundation" className={styles.input} />
                                </div>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Email Address *</label>
                                        <input type="email" placeholder="contact@ngo.org" className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Phone Number *</label>
                                        <input type="tel" placeholder="+91 70060..." className={styles.input} />
                                    </div>
                                </div>
                                <div className={styles.whatsappSection}>
                                    <div className={styles.checkboxRow} style={{ marginBottom: '10px' }}>
                                        <input type="checkbox" id="isWhatsapp" defaultChecked />
                                        <label htmlFor="isWhatsapp" className={styles.checkLabel}>This number is on WhatsApp</label>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>WhatsApp Number (if different)</label>
                                        <input type="tel" placeholder="+91 70060..." className={styles.input} />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>District Headquarter *</label>
                                    <select className={styles.input}>
                                        <option value="">Select District</option>
                                        {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Brief Description of Your Work</label>
                                    <textarea className={styles.textarea} placeholder="What does your NGO do? Who does it serve?" rows={3} />
                                </div>
                                <button className={styles.nextBtn} onClick={() => setStep(2)}>Continue to Legal Info →</button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className={styles.formStep}>
                                <h2 className={`${styles.formTitle} font-heading`}>Legal & Trust Verification</h2>
                                <p className={styles.formSubtitle}>We verify every NGO to ensure 100% trust for donors.</p>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Registration Number (Society/Trust) *</label>
                                    <input type="text" placeholder="Official Reg No." className={styles.input} />
                                </div>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>PAN Number *</label>
                                        <input type="text" placeholder="AAAAA0000A" className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Established Year</label>
                                        <input type="number" placeholder="e.g. 2015" className={styles.input} />
                                    </div>
                                </div>
                                <div className={styles.checkboxRow}>
                                    <input type="checkbox" id="g80" />
                                    <label htmlFor="g80" className={styles.checkLabel}>Our NGO has 80G tax exemption status</label>
                                </div>
                                <div className={styles.checkboxRow}>
                                    <input type="checkbox" id="fcra" />
                                    <label htmlFor="fcra" className={styles.checkLabel}>We have FCRA registration</label>
                                </div>

                                <div className={styles.uploadSection}>
                                    <label className={styles.label}>Registration Certificate (Required) *</label>
                                    <div className={styles.uploadBox}>
                                        <input type="file" id="certUpload" className={styles.fileInput} accept=".pdf,.jpg,.jpeg,.png" />
                                        <label htmlFor="certUpload" className={styles.uploadLabel}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                                            <span>Click to upload document</span>
                                            <span className={styles.uploadHint}>Max size: 5MB (PDF, JPG, PNG)</span>
                                        </label>
                                    </div>
                                </div>

                                <div className={styles.uploadSection}>
                                    <label className={styles.label}>Supporting Documents (Optional)</label>
                                    <div className={styles.uploadBox}>
                                        <input type="file" id="suppUpload" className={styles.fileInput} accept=".pdf,.jpg,.jpeg,.png" multiple />
                                        <label htmlFor="suppUpload" className={styles.uploadLabel}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                                            <span>Click to upload supporting documents</span>
                                            <span className={styles.uploadHint}>e.g., 80G certificate, past work photos</span>
                                        </label>
                                    </div>
                                </div>

                                <div className={styles.formActions}>
                                    <button className={styles.backBtn} onClick={() => setStep(1)}>← Back</button>
                                    <button className={styles.nextBtn} onClick={() => setStep(3)}>Payment Setup →</button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className={styles.formStep}>
                                <h2 className={`${styles.formTitle} font-heading`}>Direct Payment Setup</h2>
                                <p className={styles.formSubtitle}>All donations go directly to these accounts. Mizaan takes 0% fees.</p>
                                <div className={styles.trustBanner}>
                                    <span>🔒</span> Your payment details are encrypted and never shared with donors directly.
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Primary UPI ID *</label>
                                    <input type="text" placeholder="ngo@upi" className={styles.input} />
                                    <span className={styles.hint}>Use a Business/NGO UPI ID for credibility</span>
                                </div>
                                <div className={styles.divider}><span>Bank Account Details</span></div>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Account Holder Name *</label>
                                        <input type="text" className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Bank Name *</label>
                                        <input type="text" placeholder="e.g. J&K Bank" className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Account Number *</label>
                                        <input type="text" placeholder="••••••••••••" className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>IFSC Code *</label>
                                        <input type="text" placeholder="SBIN0000123" className={styles.input} />
                                    </div>
                                </div>
                                <div className={styles.formActions}>
                                    <button className={styles.backBtn} onClick={() => setStep(2)}>← Back</button>
                                    <button className={styles.nextBtn} onClick={() => setStep(4)}>Submit Application ✓</button>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className={`${styles.formStep} ${styles.successStep}`}>
                                <div className={styles.successIcon}>🎉</div>
                                <h2 className={`${styles.formTitle} font-heading`}>Application Submitted!</h2>
                                <p className={styles.formSubtitle}>
                                    Shukria! Our team will review your documents and district presence.
                                    You&apos;ll hear back within 48–72 hours via email.
                                </p>
                                <div className={styles.successMeta}>
                                    <div className={styles.successItem}><span>📧</span> Confirmation sent to your email</div>
                                    <div className={styles.successItem}><span>⏰</span> Review in 48–72 hours</div>
                                    <div className={styles.successItem}><span>📞</span> We may call to verify district presence</div>
                                </div>
                                <Link href="/" className={styles.nextBtn} style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none', marginTop: '8px' }}>
                                    Return to Home
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
