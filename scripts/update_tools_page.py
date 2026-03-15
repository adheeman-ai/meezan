import os

content = """'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { toPng } from 'html-to-image';
import { QRCodeSVG } from 'qrcode.react';

const TEXT_TEMPLATES = [
    {
        id: 'tt-1',
        title: 'Emotional & Direct Appeal',
        icon: '❤️',
        desc: `Assalam u Alaikum,\\n\\n{NGO Name} is stepping forward to support an urgent cause: {Case Title}.\\n\\n{Sub Title}\\n\\n{Description}\\n\\nWe need to raise {Amount Required} to provide immediate relief. Here is how you can help:\\n- Donate directly to our verified bank account.\\n- Send your contribution via UPI using the QR code.\\n\\nEvery single rupee counts.\\n\\nBank Details:\\n{Bank account details}\\n\\nShukriya,\\nThe Team at {NGO Name}`
    },
    {
        id: 'tt-2',
        title: 'Project/Infrastructure Focus',
        icon: '🏗️',
        desc: `Dear Supporters,\\n\\nWe at {NGO Name} are thrilled to launch our latest project: {Case Title}.\\n\\n{Sub Title}\\n\\n{Description}\\n\\nThis initiative requires {Amount Required} to reach completion. Goal: {Amount Required} | Target Completion: {End Date}\\n\\nPlease send your donations to our secure NGO account:\\n\\n{Bank account details}\\n\\nThank you for standing with us.\\n- {NGO Name}`
    },
    {
        id: 'tt-3',
        title: 'Urgent Medical Emergency',
        icon: '🚑',
        desc: `🚨 URGENT MEDICAL APPEAL 🚨\\n\\n{NGO Name} urgently needs your help for a critical medical case: {Case Title}.\\n\\n{Sub Title}\\n\\n{Description}\\n\\nWe must raise {Amount Required} immediately. Time is of the essence, and your prompt donation can save a life.\\n\\nDonate here:\\nBank: {Bank account details}\\n\\nPlease share this appeal urgently.\\n\\nJazakAllah Khair,\\n{NGO Name}`
    }
];

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
    const [template, setTemplate] = useState(TEXT_TEMPLATES[0]);
    const [selectedPosterTemplate, setSelectedPosterTemplate] = useState(POSTER_TEMPLATES[0]);
    const [editedText, setEditedText] = useState('');

    const [formData, setFormData] = useState({
        title: 'Relief for Needy Families',
        subTitle: 'Supporting 50 families with basic essentials',
        category: 'MEDICAL',
        amount: '1,50,000',
        raisedAmount: '',
        endDate: '',
        priority: 'Normal',
        description: 'Provide detailed background information here...',
        documentUrl: '',
        district: 'Srinagar',
    });

    const [isPublishing, setIsPublishing] = useState(false);
    const [publishedId, setPublishedId] = useState<number | null>(null);
    
    // We keep two refs: one for the scaled preview, one for the full 1080x1080 off-screen render
    const exportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const init = async () => {
            const sRes = await fetch('/api/auth/session');
            if (sRes.ok) {
                const sData = await sRes.json();
                setSession(sData);
                if (sData.ngoId) setSelectedNgoId(sData.ngoId.toString());
            }

            if (isAdminMode) {
                const nRes = await fetch('/api/ngos');
                if (nRes.ok) {
                    const nData = await nRes.json();
                    setNgos(nData);
                }
            }
        };
        init();
    }, [isAdminMode]);

    const activeNgo = isAdminMode
        ? ngos.find(n => n.id.toString() === selectedNgoId)
        : (session?.ngoId ? { name: 'Your NGO', bankAccount: 'NGO_BANK_ACC' } : null);

    const renderText = (text: string) => {
        const bankDetails = activeNgo ? `${activeNgo.bankName || 'J&K Bank'} · A/C: ${activeNgo.bankAccount || '0000'} · IFSC: ${activeNgo.ifsc || 'IFSC000'}` : '[Bank Details]';

        return text
            .replace(/{NGO Name}/g, activeNgo?.name || 'Your NGO')
            .replace(/{Case Title}/g, formData.title)
            .replace(/{Sub Title}/g, formData.subTitle)
            .replace(/{Description}/g, formData.description)
            .replace(/{Amount Required}/g, `₹${formData.amount}`)
            .replace(/{End Date}/g, formData.endDate || 'TBD')
            .replace(/{District}/g, formData.district)
            .replace(/{Bank account details}/g, bankDetails);
    };

    // Update edited text whenever template or form data changes
    useEffect(() => {
        setEditedText(renderText(template.desc));
    }, [template, formData, selectedNgoId, ngos]);

    const handleCopy = () => {
        navigator.clipboard.writeText(editedText);
        alert('Copied to clipboard! You can now paste this on WhatsApp or Facebook.');
    };

    const handleDownloadPoster = async () => {
        if (!exportRef.current) return;
        try {
            // Temporarily make the offscreen element visible for capture
            exportRef.current.style.display = 'flex';
            const dataUrl = await toPng(exportRef.current, { quality: 1, pixelRatio: 2 });
            exportRef.current.style.display = 'none'; // Hide it back immediately
            
            const link = document.createElement('a');
            link.download = `mizaan-campaign-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to generate poster', err);
            alert('Failed to generate poster.');
            if (exportRef.current) exportRef.current.style.display = 'none';
        }
    };

    const handlePublish = async () => {
        if (!selectedNgoId) {
            alert('Please select an NGO first.');
            return;
        }
        setIsPublishing(true);
        try {
            const submissionData = {
                ngoId: selectedNgoId,
                ...formData,
                description: editedText // Use the fully customized text as the main description
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
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Your campaign is now live on Mizaan and ready to receive donations.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Link href={`/campaign/${publishedId}`} className="btn-accent" style={{ padding: '16px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none' }}>View Campaign Page</Link>
                        <Link href="/campaigns" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none', marginTop: '12px' }}>Return to Browse</Link>
                    </div>
                </div>
            </div>
        );
    }

    // Extract the Poster content into a generic component function that we can render twice (once scaled for preview, once native for export)
    const renderPosterContent = () => {
        const pt = selectedPosterTemplate;
        return (
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
                overflow: 'hidden'
            }}>
                {/* Top Half: Visual Header */}
                <div style={{ height: '45%', background: pt.colors.primary, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px', color: 'white' }}>
                    {/* Decorative Background Elements */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'radial-gradient(circle at center, white 0%, transparent 70%)' }} />
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <div style={{ fontSize: '6rem', marginBottom: '20px' }}>{pt.icon}</div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '4px', margin: '0 0 10px 0', opacity: 0.9 }}>{pt.name}</h2>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.1, margin: 0, textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>{formData.title || 'Campaign Title'}</h1>
                    </div>
                </div>

                {/* Overlapping Badge Middle */}
                <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', background: pt.colors.badge, color: pt.colors.badge === '#F97316' || pt.colors.badge === '#EAB308' ? '#000' : 'white', padding: '24px 64px', borderRadius: '50px', fontWeight: 800, fontSize: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', zIndex: 10, border: '6px solid white', whiteSpace: 'nowrap' }}>
                    {formData.priority === 'Urgent' ? '🚨 URGENT APPEAL' : '❤️ CHARITY FUNDRAISING'}
                </div>

                {/* Bottom Half: Clean Info Section */}
                <div style={{ height: '55%', padding: '80px 60px 40px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'white', borderRadius: '40px 40px 0 0', marginTop: '-40px', position: 'relative', zIndex: 5, boxShadow: '0 -10px 30px rgba(0,0,0,0.05)' }}>
                    
                    {/* Subtitle & Goal */}
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <p style={{ fontSize: '2.2rem', color: '#475569', margin: '0 0 24px 0', fontWeight: 500, lineHeight: 1.4, maxWidth: '90%' }}>
                            {formData.subTitle || 'Please support this noble cause and help us reach our target.'}
                        </p>
                        <div style={{ display: 'inline-block', background: '#F8FAFC', padding: '16px 48px', borderRadius: '24px', border: '2px solid #E2E8F0' }}>
                            <span style={{ fontSize: '1.8rem', color: '#64748B', fontWeight: 600, marginRight: '16px' }}>GOAL:</span>
                            <span style={{ fontSize: '3.5rem', fontWeight: 800, color: pt.colors.primary }}>₹{formData.amount || '0'}</span>
                        </div>
                    </div>

                    {/* Footer: Bank Info & QR Code */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '40px', borderRadius: '32px', border: '2px solid #E2E8F0' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px', color: pt.colors.primary, textTransform: 'uppercase', letterSpacing: '2px' }}>Direct Bank Transfer</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <span style={{ color: '#64748B', fontSize: '1.8rem', fontWeight: 600 }}>A/C</span> {activeNgo ? activeNgo.bankAccount : '1234 5678 9012'}
                            </div>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <div>
                                    <div style={{ fontSize: '1.4rem', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>IFSC CODE</div>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A' }}>{activeNgo ? activeNgo.ifsc : 'IFSC000BANK'}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.4rem', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>NGO NAME</div>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A' }}>{activeNgo ? activeNgo.name : 'NGO Name'}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ width: '2px', height: '160px', background: '#E2E8F0', margin: '0 40px' }} />

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '220px' }}>
                            <div style={{ background: 'white', padding: '16px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '2px solid #E2E8F0', marginBottom: '16px' }}>
                                <QRCodeSVG 
                                    value={`upi://pay?pa=${activeNgo?.upiId || 'test@upi'}&pn=${activeNgo?.name || 'NGO'}&cu=INR`} 
                                    size={160} 
                                    fgColor={pt.colors.secondary}
                                />
                            </div>
                            <div style={{ color: pt.colors.primary, fontWeight: 900, fontSize: '1.4rem', letterSpacing: '2px' }}>SCAN TO PAY</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

    return (
        <div style={{ minHeight: '100vh', paddingTop: '80px', background: 'var(--bg-soft, #F8FAFC)' }}>
            
            {/* HIDDEN OFF-SCREEN RENDERER FOR FULL QUALITY DOWNLOAD */}
            <div style={{ position: 'absolute', top: '-9999px', left: '-9999px', pointerEvents: 'none', display: 'none' }} ref={exportRef}>
                {renderPosterContent()}
            </div>

            <div className="container" style={{ paddingBottom: '80px', maxWidth: '1400px' }}>
                <div style={{ marginBottom: '32px' }}>
                    <Link href={isAdminMode ? "/campaigns" : "/ngo/dashboard"} style={{ color: 'var(--text-muted, #94A3B8)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                        ← Back to {isAdminMode ? 'Campaigns' : 'Dashboard'}
                    </Link>
                    <h1 className="font-heading" style={{ fontSize: '2.5rem', color: 'var(--text-primary, #0F172A)', margin: 0 }}>Advanced Campaign Creator</h1>
                    <p style={{ color: 'var(--text-secondary, #475569)', marginTop: '8px', fontSize: '1.05rem' }}>Build your appeal, craft the perfect story, and download a professional poster.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1.2fr) minmax(400px, 1fr)', gap: '32px', alignItems: 'start' }}>
                    
                    {/* LEFT COLUMN: Data Entry & Configuration */}
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
                                        style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none', background: 'white' }}
                                    >
                                        <option value="">Select NGO</option>
                                        {ngos.map(n => <option key={n.id} value={n.id}>{n.name} ({n.district.name})</option>)}
                                    </select>
                                </div>
                            )}

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Title *</label>
                                    <input type="text" placeholder="e.g. Relief for Needy Families" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Subtitle / Short Hook *</label>
                                    <input type="text" placeholder="e.g. Supporting 50 families in Srinagar with basic essentials" value={formData.subTitle} onChange={e => setFormData({ ...formData, subTitle: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none' }} />
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
                                        <input type="text" placeholder="e.g. 5,00,000" value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Already Raised (₹) Optional</label>
                                        <input type="text" placeholder="e.g. 50,000" value={formData.raisedAmount} onChange={e => setFormData({ ...formData, raisedAmount: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none' }} />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>End Date / Deadline</label>
                                        <input type="date" value={formData.endDate} onChange={e => setFormData({ ...formData, endDate: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Supporting Document / Image URL</label>
                                        <input type="url" placeholder="https://..." value={formData.documentUrl} onChange={e => setFormData({ ...formData, documentUrl: e.target.value })} style={{ padding: '12px', borderRadius: '12px', border: '1.5px solid var(--gray-200)', outline: 'none' }} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Long Description / Story *</label>
                                    <textarea 
                                        placeholder="Write the full background story here. This will be injected into your selected text template..." 
                                        value={formData.description} 
                                        onChange={e => setFormData({ ...formData, description: e.target.value })} 
                                        style={{ padding: '16px', borderRadius: '16px', border: '1.5px solid var(--gray-200)', outline: 'none', minHeight: '160px', fontFamily: 'inherit', resize: 'vertical' }} 
                                    />
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>This description block is injected into the templates on the right wherever {'{Description}'} appears.</div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Text Template Wrapper */}
                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--gray-200, #E2E8F0)' }}>
                            <h3 className="font-heading" style={{ fontSize: '1.25rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'}}>2</span> Text Template Wrapper</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>Select a wrapper that automatically surrounds your description with a proper greeting, bank details, and sign-off.</p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                                {TEXT_TEMPLATES.map(t => (
                                    <button
                                        key={t.id}
                                        onClick={() => setTemplate(t)}
                                        style={{
                                            padding: '16px',
                                            borderRadius: '16px',
                                            border: template.id === t.id ? '2px solid var(--primary)' : '1.5px solid var(--gray-200)',
                                            background: template.id === t.id ? 'var(--bg-soft)' : 'white',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            transition: '0.2s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        }}
                                    >
                                        <div style={{ fontSize: '1.5rem' }}>{t.icon}</div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{t.title}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Previews & Publishing */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        
                        {/* 3. Text Editor */}
                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--gray-200, #E2E8F0)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <h3 className="font-heading" style={{ fontSize: '1.25rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'}}>3</span> Edit Appeal Text</h3>
                                <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', background: 'var(--bg-soft)', borderRadius: '50px' }}>EDITABLE</span>
                            </div>
                            
                            <textarea
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                                style={{
                                    width: '100%',
                                    minHeight: '320px',
                                    padding: '24px',
                                    background: '#F8FAFC',
                                    border: '1.5px solid var(--gray-200)',
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
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <h3 className="font-heading" style={{ fontSize: '1.25rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'}}>4</span> Generate Square Poster</h3>
                            </div>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', marginBottom: '24px' }}>
                                {POSTER_TEMPLATES.map(pt => (
                                    <button 
                                        key={pt.id}
                                        onClick={() => setSelectedPosterTemplate(pt)} 
                                        style={{ 
                                            padding: '12px 8px', 
                                            borderRadius: '12px', 
                                            border: 'none', 
                                            background: selectedPosterTemplate.id === pt.id ? pt.colors.primary : '#F1F5F9', 
                                            color: selectedPosterTemplate.id === pt.id ? 'white' : '#475569',
                                            fontWeight: 600, 
                                            fontSize: '0.85rem',
                                            boxShadow: selectedPosterTemplate.id === pt.id ? `0 4px 12px ${pt.colors.primary}40` : 'none', 
                                            cursor: 'pointer',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '4px',
                                            transition: '0.2s'
                                        }}>
                                            <span style={{ fontSize: '1.5rem' }}>{pt.icon}</span>
                                            {pt.name}
                                    </button>
                                ))}
                            </div>

                            {/* Relative Wrapper ensures absolute scaling doesn't break document flow */}
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: 'var(--bg-soft)', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                {/* Direct child scaled box */}
                                <div style={{
                                    width: '1080px',
                                    height: '1080px',
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    transform: 'scale(1)', // Initial scale
                                    transformOrigin: 'top left'
                                }} ref={(el) => {
                                    // Dynamically scale the parent to fit the 1080 bounds
                                    if (el && el.parentElement) {
                                        const parentWidth = el.parentElement.clientWidth;
                                        const scale = parentWidth / 1080;
                                        el.style.transform = `scale(${scale})`;
                                    }
                                }}>
                                    {renderPosterContent()}
                                </div>
                            </div>
                            
                            <button onClick={handleDownloadPoster} style={{ width: '100%', padding: '16px', borderRadius: '50px', background: '#1E293B', color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: '0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                🖼️ Download High-Res Poster
                            </button>
                            <p style={{ marginTop: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                                Download produces a perfect, crystal-clear 1080x1080 Instagram-ready poster.
                            </p>
                        </div>

                        {/* Publish Final Action */}
                        <div style={{ background: 'var(--primary)', borderRadius: '24px', padding: '32px', boxShadow: '0 20px 40px rgba(15, 52, 96, 0.2)', textAlign: 'center', color: 'white' }}>
                            <h3 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'white' }}>Ready to Go Live?</h3>
                            <p style={{ marginBottom: '24px', color: 'rgba(255,255,255,0.8)' }}>Publishing will create a live campaign record on the Mizaan platform.</p>
                            <button onClick={handlePublish} disabled={isPublishing} className="btn-accent" style={{ width: '100%', padding: '18px', borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem', border: 'none', cursor: 'pointer', opacity: isPublishing ? 0.7 : 1, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                                {isPublishing ? 'Publishing...' : 'Publish Campaign on Mizaan ✓'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
"""

with open("c:/Users/User/Documents/Github/mizaan/src/app/ngo/dashboard/tools/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Page updated successfully!")
