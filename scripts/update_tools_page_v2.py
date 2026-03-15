import os

content = """'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { toPng } from 'html-to-image';
import { QRCodeSVG } from 'qrcode.react';

const UNIVERSAL_TEMPLATE = `Assalam u Alaikum,\\n\\n{NGO Name} is stepping forward to support an urgent cause: {Case Title}.\\n\\n{Sub Title}\\n\\n[Write your full, detailed story here. Explain why this cause matters and who will benefit from it...]\\n\\nWe need to raise {Amount Required} to provide immediate relief. Here is how you can help:\\n- Donate directly to our verified bank account.\\n- Send your contribution via UPI using the QR code.\\n\\nEvery single rupee counts.\\n\\nBank Details:\\nA/C: {Bank account details}\\n\\nShukriya,\\nThe Team at {NGO Name}`;

const POSTER_TEMPLATES = [
    {
        id: 'pt-1',
        name: 'Medical Emergency',
        colors: { bg: '#FEF2F2', primary: '#DC2626', secondary: '#991B1B', text: '#450A0A', badge: '#EF4444' },
        bgPattern: 'radial-gradient(circle at top right, rgba(220,38,38,0.1), transparent 50%), radial-gradient(circle at bottom left, rgba(220,38,38,0.05), transparent 50%)',
        icon: '🏥'
    },
    {
        id: 'pt-2',
        name: 'Food & Clothes',
        colors: { bg: '#FFF7ED', primary: '#EA580C', secondary: '#9A3412', text: '#431407', badge: '#F97316' },
        bgPattern: 'radial-gradient(circle at top left, rgba(234,88,12,0.1), transparent 50%), radial-gradient(circle at bottom right, rgba(234,88,12,0.05), transparent 50%)',
        icon: '🌾'
    },
    {
        id: 'pt-3',
        name: 'Access to Education',
        colors: { bg: '#F0F9FF', primary: '#0284C7', secondary: '#075985', text: '#082F49', badge: '#0EA5E9' },
        bgPattern: 'radial-gradient(circle at top center, rgba(2,132,199,0.1), transparent 60%), radial-gradient(circle at bottom center, rgba(2,132,199,0.05), transparent 60%)',
        icon: '📚'
    },
    {
        id: 'pt-4',
        name: 'Disaster Response',
        colors: { bg: '#F4F4F5', primary: '#3F3F46', secondary: '#18181B', text: '#000000', badge: '#EAB308' },
        bgPattern: 'linear-gradient(135deg, rgba(234,179,8,0.1) 0%, transparent 100%)',
        icon: '⚠️'
    },
    {
        id: 'pt-5',
        name: 'General Charity',
        colors: { bg: '#F0FDF4', primary: '#16A34A', secondary: '#14532D', text: '#052E16', badge: '#22C55E' },
        bgPattern: 'linear-gradient(45deg, rgba(22,163,74,0.05) 0%, transparent 100%)',
        icon: '🤲'
    }
];

export default function CampaignToolsPage() {
    const searchParams = useSearchParams();
    const isAdminMode = searchParams.get('admin') === 'true';

    const [session, setSession] = useState<any>(null);
    const [ngos, setNgos] = useState<any[]>([]);
    const [selectedNgoId, setSelectedNgoId] = useState<string>('');
    const [selectedPosterTemplate, setSelectedPosterTemplate] = useState(POSTER_TEMPLATES[0]);
    
    // User edits the compiled text directly now
    const [editedText, setEditedText] = useState('');
    const [hasManuallyEdited, setHasManuallyEdited] = useState(false);

    const [formData, setFormData] = useState({
        title: 'Relief for Needy Families',
        subTitle: 'Supporting 50 families with basic essentials',
        category: 'MEDICAL',
        amount: '1,50,000',
        raisedAmount: '',
        endDate: '',
        priority: 'Normal',
        documentUrl: '', // Will be replaced by actual file state once GCP is integrated
        posterUrl: '',   // Will be replaced by actual file state once GCP is integrated
        district: 'Srinagar',
    });

    const [isPublishing, setIsPublishing] = useState(false);
    const [publishedId, setPublishedId] = useState<number | null>(null);
    const [isDownloading, setIsDownloading] = useState(false);
    
    const exportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const init = async () => {
            const sRes = await fetch('/api/auth/session');
            if (sRes.ok) {
                const sData = await sRes.json();
                setSession(sData);
                if (sData.ngoId) setSelectedNgoId(sData.ngoId.toString());
            }

            const nRes = await fetch('/api/ngos');
            if (nRes.ok) {
                const nData = await nRes.json();
                setNgos(nData);
            }
        };
        init();
    }, [isAdminMode]);

    const activeNgo = ngos.find(n => n.id.toString() === selectedNgoId) || null;

    // Compile text template dynamically based on form data, BUT only if the user hasn't heavily modified the text body.
    // For a truly editable universal template, we prefill it once and let them write. 
    // To make it reactive to Title and Amount changes without destroying their story, we do direct string replacements.
    useEffect(() => {
        if (!hasManuallyEdited) {
            const bankDetails = activeNgo ? `${activeNgo.bankName || 'J&K Bank'} \\nA/C: ${activeNgo.bankAccount || '0000'} \\nIFSC: ${activeNgo.ifsc || 'IFSC000'}` : '[Bank Details]';
            const compiled = UNIVERSAL_TEMPLATE
                .replace(/{NGO Name}/g, activeNgo?.name || 'Your NGO')
                .replace(/{Case Title}/g, formData.title)
                .replace(/{Sub Title}/g, formData.subTitle)
                .replace(/{Amount Required}/g, \`₹\${formData.amount}\`)
                .replace(/{Bank account details}/g, bankDetails);
            
            setEditedText(compiled);
        }
    }, [formData.title, formData.subTitle, formData.amount, activeNgo, hasManuallyEdited]);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHasManuallyEdited(true);
        setEditedText(e.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(editedText);
        alert('Copied to clipboard! You can now paste this on WhatsApp or Facebook.');
    };

    const handleDownloadPoster = async () => {
        if (!exportRef.current) return;
        setIsDownloading(true);
        try {
            // Because the element is position: fixed and off-screen, it is already fully rendered by the browser.
            // We don't need to toggle display, which avoids the black/empty image bug.
            
            // Wait a brief moment to ensure fonts/CSS background gradients are painted
            await new Promise(res => setTimeout(res, 500));

            const dataUrl = await toPng(exportRef.current, { 
                quality: 1, 
                pixelRatio: 2,
                cacheBust: true,
                style: {
                    transform: 'scale(1)',
                    transformOrigin: 'top left'
                }
            });
            
            const link = document.createElement('a');
            link.download = \`mizaan-\${formData.title.toLowerCase().replace(/\\s+/g, '-')}-poster.png\`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to generate poster', err);
            alert('Failed to generate poster. Ensure you are on a modern browser.');
        } finally {
            setIsDownloading(false);
        }
    };

    const handlePublish = async () => {
        if (!selectedNgoId && isAdminMode) {
            alert('Please select an NGO first.');
            return;
        }
        setIsPublishing(true);
        try {
            const submissionData = {
                ngoId: selectedNgoId || session?.ngoId,
                ...formData,
                description: editedText // The edited text is the official description
            };

            const res = await fetch('/api/campaigns', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionData)
            });
            const data = await res.json();
            if (data.success) {
                setPublishedId(data.id);
            } else {
                alert('Error: ' + data.error);
            }
        } catch (err) {
            alert('Failed to publish campaign.');
        } finally {
            setIsPublishing(false);
        }
    };

    if (publishedId) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-soft)' }}>
                <div style={{ background: 'white', padding: '48px', borderRadius: '32px', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', maxWidth: '500px' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🎉</div>
                    <h2 className="font-heading" style={{ fontSize: '2rem', marginBottom: '16px' }}>Campaign Live!</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Your campaign is now recording donations securely on Mizaan.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Link href={\`/campaign/\${publishedId}\`} className="btn-accent" style={{ padding: '16px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none' }}>View Campaign Page</Link>
                        <Link href="/campaigns" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none', marginTop: '12px' }}>Return to Browse</Link>
                    </div>
                </div>
            </div>
        );
    }

    const pt = selectedPosterTemplate;

    // The Content structure of the Poster
    const PosterContent = () => (
        <div style={{
            width: '1080px',
            height: '1080px',
            background: pt.colors.bg,
            backgroundImage: pt.bgPattern,
            color: pt.colors.text,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            fontFamily: 'Inter, sans-serif',
            overflow: 'hidden',
            boxSizing: 'border-box'
        }}>
            {/* Top Half */}
            <div style={{ height: '48%', background: pt.colors.primary, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px', color: 'white' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'radial-gradient(circle at center, white 0%, transparent 70%)' }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
                    <div style={{ fontSize: '5rem', marginBottom: '16px' }}>{pt.icon}</div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '4px', margin: '0 0 16px 0', opacity: 0.9 }}>{pt.name}</h2>
                    <h1 style={{ fontSize: '4.8rem', fontWeight: 900, lineHeight: 1.15, margin: 0, textShadow: '0 4px 12px rgba(0,0,0,0.2)', padding: '0 40px' }}>
                        {formData.title || 'Campaign Title'}
                    </h1>
                </div>
            </div>

            {/* Overlapping Badge */}
            <div style={{ position: 'absolute', top: '48%', left: '50%', transform: 'translate(-50%, -50%)', background: pt.colors.badge, color: pt.colors.badge === '#F97316' || pt.colors.badge === '#EAB308' ? '#000' : 'white', padding: '24px 72px', borderRadius: '50px', fontWeight: 900, fontSize: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', zIndex: 10, border: '6px solid white', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {formData.priority === 'Urgent' ? '🚨 URGENT APPEAL' : '❤️ CHARITY FUND'}
            </div>

            {/* Bottom Half */}
            <div style={{ height: '52%', padding: '110px 60px 50px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'white', borderRadius: '40px 40px 0 0', marginTop: '-40px', position: 'relative', zIndex: 5, boxShadow: '0 -10px 30px rgba(0,0,0,0.05)' }}>
                
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '2.4rem', color: '#475569', margin: '0 auto 30px auto', fontWeight: 500, lineHeight: 1.4, maxWidth: '90%' }}>
                        {formData.subTitle || 'Please support this noble cause and help us reach our target.'}
                    </p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', background: '#F8FAFC', padding: '16px 48px', borderRadius: '24px', border: '3px solid #E2E8F0' }}>
                        <span style={{ fontSize: '2rem', color: '#64748B', fontWeight: 700, marginRight: '20px' }}>GOAL:</span>
                        <span style={{ fontSize: '3.8rem', fontWeight: 900, color: pt.colors.primary, letterSpacing: '-1px' }}>₹{formData.amount || '0'}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '32px 40px', borderRadius: '32px', border: '2px solid #E2E8F0' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '20px', color: pt.colors.primary, textTransform: 'uppercase', letterSpacing: '2px' }}>Direct Bank Transfer</div>
                        <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px', letterSpacing: '1px' }}>
                            <span style={{ color: '#64748B', fontSize: '1.8rem', fontWeight: 600 }}>A/C</span> {activeNgo?.bankAccount || '1234 5678 9012'}
                        </div>
                        <div style={{ display: 'flex', gap: '40px' }}>
                            <div>
                                <div style={{ fontSize: '1.3rem', color: '#64748B', fontWeight: 700, marginBottom: '6px', letterSpacing: '1px' }}>IFSC CODE</div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E293B' }}>{activeNgo?.ifsc || 'IFSC000BANK'}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.3rem', color: '#64748B', fontWeight: 700, marginBottom: '6px', letterSpacing: '1px' }}>NGO NAME</div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E293B', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{activeNgo?.name || 'Your NGO Name'}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ width: '3px', height: '180px', background: '#E2E8F0', margin: '0 40px' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '220px' }}>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '2px solid #CBD5E1', marginBottom: '16px' }}>
                            {/* If the NGO uploaded a custom QR code during verification, use it. Otherwise fall back to generated SVG */}
                            {activeNgo?.qrCodeUrl ? (
                                <img src={activeNgo.qrCodeUrl} alt="UPI QR" style={{ width: '160px', height: '160px', objectFit: 'contain' }} />
                            ) : (
                                <QRCodeSVG 
                                    value={\`upi://pay?pa=\${activeNgo?.upiId || 'test@upi'}&pn=\${encodeURIComponent(activeNgo?.name || 'NGO')}&cu=INR\`} 
                                    size={160} 
                                    fgColor={pt.colors.secondary}
                                    level="Q"
                                />
                            )}
                        </div>
                        <div style={{ color: pt.colors.primary, fontWeight: 900, fontSize: '1.4rem', letterSpacing: '3px' }}>SCAN TO PAY</div>
                    </div>
                </div>

            </div>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', paddingTop: '80px', background: 'var(--bg-soft, #F8FAFC)', display: 'flex', flexDirection: 'column' }}>
            
            {/* HIDDEN OFF-SCREEN RENDERER FOR PERFECT QUALITY DOWNLOAD */}
            <div style={{ position: 'fixed', top: '0', left: '2000px', pointerEvents: 'none', zIndex: -100 }} ref={exportRef}>
                <PosterContent />
            </div>

            <div className="container" style={{ paddingBottom: '40px', maxWidth: '1400px', flex: 1 }}>
                <div style={{ marginBottom: '32px' }}>
                    <Link href={isAdminMode ? "/campaigns" : "/ngo/dashboard"} style={{ color: 'var(--text-muted, #94A3B8)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                        ← Back to {isAdminMode ? 'Campaigns' : 'Dashboard'}
                    </Link>
                    <h1 className="font-heading" style={{ fontSize: '2.5rem', color: 'var(--text-primary, #0F172A)', margin: 0 }}>Advanced Campaign Toolkit</h1>
                    <p style={{ color: 'var(--text-secondary, #475569)', marginTop: '8px', fontSize: '1.05rem' }}>Set up your campaign details, write your appeal, and export professional assets.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1.2fr) minmax(400px, 1fr)', gap: '32px', alignItems: 'start' }}>
                    
                    {/* LEFT COLUMN: Data Entry */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        
                        {/* 1. Core Details */}
                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--gray-200, #E2E8F0)' }}>
                            <h3 className="font-heading" style={{ fontSize: '1.25rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'}}>1</span> Campaign Core Data</h3>

                            {isAdminMode && (
                                <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>Admin: Select Representing NGO</label>
                                    <select
                                        value={selectedNgoId}
                                        onChange={e => setSelectedNgoId(e.target.value)}
                                        style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none', background: 'white', fontWeight: 600 }}
                                    >
                                        <option value="">-- Select an NGO --</option>
                                        {ngos.map(n => <option key={n.id} value={n.id}>{n.name} ({n.district.name})</option>)}
                                    </select>
                                </div>
                            )}

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Title *</label>
                                    <input type="text" placeholder="e.g. Relief for Needy Families" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none', fontWeight: 500 }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Subtitle / Short Hook *</label>
                                    <input type="text" placeholder="e.g. Supporting 50 families in Srinagar with basic essentials" value={formData.subTitle} onChange={e => setFormData({ ...formData, subTitle: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none', fontWeight: 500 }} />
                                </div>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Category</label>
                                        <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none', background: 'white' }}>
                                            <option value="MEDICAL">Medical</option>
                                            <option value="EDUCATION">Education</option>
                                            <option value="DISASTER">Disaster Relief</option>
                                            <option value="ORPHAN">Orphan Care</option>
                                            <option value="LIVELIHOOD">Livelihood</option>
                                        </select>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Priority</label>
                                        <select value={formData.priority} onChange={e => setFormData({ ...formData, priority: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none', background: 'white', color: formData.priority === 'Urgent' ? '#DC2626' : 'inherit', fontWeight: formData.priority === 'Urgent' ? 700 : 400 }}>
                                            <option value="Normal">Normal</option>
                                            <option value="Urgent">Urgent / Emergency</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Target Amount (₹) *</label>
                                        <input type="text" placeholder="e.g. 5,00,000" value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none', fontWeight: 500 }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Already Raised (₹) Optional</label>
                                        <input type="text" placeholder="e.g. 50,000" value={formData.raisedAmount} onChange={e => setFormData({ ...formData, raisedAmount: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none', fontWeight: 500 }} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>End Date / Deadline</label>
                                    <input type="date" value={formData.endDate} onChange={e => setFormData({ ...formData, endDate: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none', fontWeight: 500 }} />
                                </div>
                            </div>
                        </div>

                        {/* 2. File Uploads (GCP Prep) */}
                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--gray-200, #E2E8F0)' }}>
                            <h3 className="font-heading" style={{ fontSize: '1.25rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'}}>2</span> Media & Documents</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Upload optional files to your GCP Bucket.</p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Custom Poster Design (Replaces Auto-Generator)</label>
                                    <input type="file" accept="image/png, image/jpeg" style={{ padding: '10px', borderRadius: '12px', border: '1.5px dashed var(--gray-200)', outline: 'none', background: '#F8FAFC' }} />
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>If you upload your own poster, the auto-generated one will be ignored on the live page. Recommended 1080x1080px.</div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Supporting Document (PDF/Image)</label>
                                    <input type="file" accept="application/pdf, image/png, image/jpeg" style={{ padding: '10px', borderRadius: '12px', border: '1.5px dashed var(--gray-200)', outline: 'none', background: '#F8FAFC' }} />
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Proof of case, initial bills, or official letters.</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Visual Assets & Publishing */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        
                        {/* 3. Text Editor */}
                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--gray-200, #E2E8F0)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <h3 className="font-heading" style={{ fontSize: '1.25rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'}}>3</span> The Universal Appeal Text</h3>
                                <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', background: 'var(--bg-soft)', borderRadius: '50px' }}>EDITABLE</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>This text builds dynamically from your form inputs. Replace the bracketed story section with your actual details.</p>
                            
                            <textarea
                                value={editedText}
                                onChange={handleTextChange}
                                style={{
                                    width: '100%',
                                    minHeight: '280px',
                                    padding: '24px',
                                    background: '#FFFBEB',
                                    border: '1.5px solid #FDE68A',
                                    borderRadius: '20px',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    color: '#1E293B',
                                    fontFamily: 'inherit',
                                    resize: 'vertical',
                                    outline: 'none'
                                }}
                            />
                            
                            <button onClick={handleCopy} style={{ marginTop: '16px', width: '100%', padding: '16px', borderRadius: '50px', background: 'var(--bg-soft)', color: 'var(--text-primary)', border: '1px solid var(--gray-200)', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: '0.2s' }}>
                                📋 Copy Text to Clipboard
                            </button>
                        </div>

                        {/* 4. Poster Generator */}
                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--gray-200, #E2E8F0)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <h3 className="font-heading" style={{ fontSize: '1.25rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'}}>4</span> Auto Square Poster</h3>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>Generates perfect Instagram-ready resolution without missing borders or cut-offs.</p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px', marginBottom: '24px' }}>
                                {POSTER_TEMPLATES.map(tmp => (
                                    <button 
                                        key={tmp.id}
                                        onClick={() => setSelectedPosterTemplate(tmp)} 
                                        style={{ 
                                            padding: '12px 8px', 
                                            borderRadius: '12px', 
                                            border: 'none', 
                                            background: selectedPosterTemplate.id === tmp.id ? tmp.colors.primary : '#F1F5F9', 
                                            color: selectedPosterTemplate.id === tmp.id ? 'white' : '#475569',
                                            fontWeight: 600, 
                                            fontSize: '0.85rem',
                                            boxShadow: selectedPosterTemplate.id === tmp.id ? \`0 4px 12px \${tmp.colors.primary}40\` : 'none', 
                                            cursor: 'pointer',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '4px',
                                            transition: '0.2s'
                                        }}>
                                            <span style={{ fontSize: '1.4rem' }}>{tmp.icon}</span>
                                            {tmp.name}
                                    </button>
                                ))}
                            </div>

                            {/* Scaled Preview (Does NOT affect download) */}
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: '#F8FAFC', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid #E2E8F0' }}>
                                <div style={{
                                    width: '1080px',
                                    height: '1080px',
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    transformOrigin: 'top left',
                                    pointerEvents: 'none'
                                }} ref={(el) => {
                                    if (el && el.parentElement) {
                                        const scaleX = el.parentElement.clientWidth / 1080;
                                        el.style.transform = \`scale(\${scaleX})\`;
                                    }
                                }}>
                                    <PosterContent />
                                </div>
                            </div>
                            
                            <button onClick={handleDownloadPoster} disabled={isDownloading} style={{ width: '100%', padding: '16px', borderRadius: '50px', background: '#1E293B', color: 'white', border: 'none', fontWeight: 700, cursor: isDownloading ? 'wait' : 'pointer', opacity: isDownloading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: '0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                {isDownloading ? 'Rendering High-Res Image...' : '🖼️ Download High-Res Poster'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* STICKY FOOTER ACTION AREA */}
            <div style={{ position: 'sticky', bottom: 0, background: 'white', borderTop: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '24px', zIndex: 50 }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
                    Please review your text and details before publishing.
                </span>
                <button onClick={handlePublish} disabled={isPublishing} className="btn-accent" style={{ padding: '16px 48px', borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem', border: 'none', cursor: 'pointer', opacity: isPublishing ? 0.7 : 1, boxShadow: '0 8px 20px rgba(15, 52, 96, 0.2)' }}>
                    {isPublishing ? 'Publishing...' : 'Publish Campaign ✓'}
                </button>
            </div>

        </div>
    );
}
"""

with open("c:/Users/User/Documents/Github/mizaan/src/app/ngo/dashboard/tools/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Page updated completely!")
