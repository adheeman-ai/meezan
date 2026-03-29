'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { toPng } from 'html-to-image';
import { QRCodeSVG } from 'qrcode.react';

const getCategoryBullets = (category: string) => {
    switch(category?.toUpperCase()) {
        case 'MEDICAL': return `- Medical treatments for patients in need\n- Essential medicines and supplies\n- Post-treatment care and support`;
        case 'EDUCATION': return `- School fees and tuition for underprivileged students\n- Books, stationery, and learning materials\n- Supporting educational infrastructure`;
        case 'FOOD': return `- Providing nutritious meals to families\n- Distributing monthly grocery kits\n- Combating hunger and malnutrition`;
        case 'DISASTER': return `- Immediate disaster relief and rescue\n- Emergency shelters and rehabilitation\n- Urgent medical and food supplies`;
        case 'ORPHAN': return `- Holistic care and shelter for orphaned children\n- Educational and nutritional support\n- Building a brighter future for the vulnerable`;
        case 'LIVELIHOOD': return `- Funding small business setups for families\n- Skill development and vocational training\n- Breaking the cycle of poverty permanently`;
        default: return `- Direct support for those in need\n- Essential resources and supplies\n- Creating a lasting positive impact`;
    }
};

const generateSmartTemplate = (formData: any, activeNgo: any) => {
    const ngoName = activeNgo?.name || '[NGO_NAME]';
    const email = activeNgo?.email || '[EMAIL]';
    const phone = activeNgo?.phone || '[PHONE]';
    const accountName = activeNgo?.accountHolder || '[ACCOUNT_NAME]';
    const accountNumber = activeNgo?.bankAccount || '[ACCOUNT_NUMBER]';
    const ifscCode = activeNgo?.ifsc || '[IFSC_CODE]';
    const upiId = activeNgo?.upiId || '[UPI_ID]';
    
    let endDateStr = '[END_DATE]';
    if (formData.endDate) {
        endDateStr = new Date(formData.endDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    return `Assalam u Alaikum,

${ngoName} is reaching out for your support in ${formData.title || '[CAMPAIGN_TITLE]'}.

We are working to ${formData.subTitle || '[CAMPAIGN_SUBTITLE]'} and need to raise ₹${formData.amount || '[TARGET_AMOUNT]'} by ${endDateStr}.

[OPTIONAL: Add your story here - explain who benefits, why it matters, and what impact it will create...]

HOW YOUR DONATION HELPS:
${getCategoryBullets(formData.category)}

DONATE NOW:

Bank Transfer:
Account: ${accountNumber}
IFSC: ${ifscCode}
Name: ${accountName}

UPI: ${upiId} or scan QR code above

⚠️ IMPORTANT: After donating, please report your contribution on Meezan platform so it reflects in the campaign progress. This helps maintain transparency and allows all donors to track the campaign status in real-time.

Every rupee counts.

Jazak Allah Khair,
Team ${ngoName}

Track progress & updates on the campaign page | Contact: ${email} | ${phone}`;
};

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

function CampaignToolsContent() {
    const searchParams = useSearchParams();
    const isAdminMode = searchParams.get('admin') === 'true';

    const [session, setSession] = useState<any>(null);
    const [ngos, setNgos] = useState<any[]>([]);
    const [selectedNgoId, setSelectedNgoId] = useState<string>('');
    const [selectedPosterTemplate, setSelectedPosterTemplate] = useState(POSTER_TEMPLATES[0]);
    
    const [editedText, setEditedText] = useState('');
    const [hasManuallyEdited, setHasManuallyEdited] = useState(false);

    // GCP File states
    const [posterFile, setPosterFile] = useState<File | null>(null);
    const [documentFile, setDocumentFile] = useState<File | null>(null);

    const [posterUploadMode, setPosterUploadMode] = useState(false);
    const [isPosterExpanded, setIsPosterExpanded] = useState(true);

    const [formData, setFormData] = useState({
        title: 'Relief for Needy Families',
        subTitle: 'Supporting 50 families with basic essentials',
        category: 'MEDICAL',
        amount: '1,50,000',
        raisedAmount: '',
        endDate: '',
        priority: 'Normal',
        documentUrl: '', 
        posterUrl: '',   
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

    useEffect(() => {
        if (!hasManuallyEdited) {
            setEditedText(generateSmartTemplate(formData, activeNgo));
        }
    }, [formData, activeNgo, hasManuallyEdited]);

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
            link.download = `mizaan-${formData.title.toLowerCase().replace(/\s+/g, '-')}-poster.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to generate poster', err);
            alert('Failed to generate poster.');
        } finally {
            setIsDownloading(false);
        }
    };

    const uploadFileToGCP = async (file: File, folder: string) => {
        const uploadData = new FormData();
        uploadData.append('file', file);
        uploadData.append('folder', folder);

        const res = await fetch('/api/upload', {
            method: 'POST',
            body: uploadData
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
            throw new Error(data.error || 'Failed to upload file');
        }
        return data.path; // Returns gs://... or bucket path
    };

    const handlePublish = async () => {
        if (!selectedNgoId && isAdminMode) {
            alert('Please select an NGO first.');
            return;
        }
        setIsPublishing(true);
        try {
            let finalPosterUrl = formData.posterUrl;
            let finalDocumentUrl = formData.documentUrl;

            // Upload Poster
            if (posterUploadMode && posterFile) {
                finalPosterUrl = await uploadFileToGCP(posterFile, `campaign-posters`);
            } else if (!posterUploadMode && exportRef.current) {
                // Auto-snapshot the generated poster!
                const dataUrl = await toPng(exportRef.current, { 
                    quality: 0.9, 
                    pixelRatio: 2,
                    cacheBust: true,
                    style: { transform: 'scale(1)', transformOrigin: 'top left' }
                });
                const blobRes = await fetch(dataUrl);
                const blob = await blobRes.blob();
                const generatedFile = new File([blob], `mizaan-${formData.title.toLowerCase().replace(/\s+/g, '-')}-poster.png`, { type: 'image/png' });
                finalPosterUrl = await uploadFileToGCP(generatedFile, `campaign-posters`);
            }

            // Upload Document
            if (documentFile) {
                finalDocumentUrl = await uploadFileToGCP(documentFile, `campaign-docs`);
            }

            const submissionData = {
                ngoId: selectedNgoId || session?.ngoId,
                ...formData,
                posterUrl: finalPosterUrl,
                documentUrl: finalDocumentUrl,
                description: editedText
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
        } catch (err: any) {
            console.error(err);
            alert(err.message || 'Failed to publish campaign.');
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
                        <Link href={`/campaign/${publishedId}`} className="btn-accent" style={{ padding: '16px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none' }}>View Campaign Page</Link>
                        <Link href="/campaigns" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none', marginTop: '12px' }}>Return to Browse</Link>
                    </div>
                </div>
            </div>
        );
    }

    const pt = selectedPosterTemplate;

    const PosterContent = () => (
        <div style={{
            width: '1080px', height: '1080px',
            background: pt.colors.primary, 
            color: pt.colors.text,
            position: 'relative', fontFamily: 'Inter, sans-serif',
            overflow: 'hidden', boxSizing: 'border-box'
        }}>
            {/* Top Red Section - 48% */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '48%', background: pt.colors.primary, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 60px', color: 'white', zIndex: 1 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'radial-gradient(circle at center, white 0%, transparent 70%)' }} />
                
                {/* NGO NAME AT TOP HEADER */}
                <div style={{ position: 'absolute', top: '40px', left: 0, right: 0, textAlign: 'center', zIndex: 2 }}>
                     <div style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '12px', maxWidth: '900px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                         {activeNgo?.name || 'YOUR NGO NAME'}
                     </div>
                </div>

                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', marginTop: '30px' }}>
                    <div style={{ fontSize: '3.6rem', marginBottom: '16px' }}>{pt.icon}</div>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '4px', margin: '0 0 16px 0', opacity: 0.9 }}>{pt.name}</h2>
                    <h1 style={{ fontSize: '3.6rem', fontWeight: 900, lineHeight: 1.15, margin: 0, textShadow: '0 4px 12px rgba(0,0,0,0.2)', padding: '0 40px' }}>
                        {formData.title || 'Campaign Title'}
                    </h1>
                </div>
            </div>

            {/* Bottom White Section - tightly locked to bottom: 0 to eliminate empty voids */}
            <div style={{ position: 'absolute', top: '48%', left: 0, right: 0, bottom: 0, background: 'white', padding: '90px 60px 40px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '40px 40px 0 0', marginTop: '-40px', zIndex: 5, boxShadow: '0 -10px 30px rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: '2.1rem', color: '#475569', margin: '0 auto', fontWeight: 500, lineHeight: 1.4, textAlign: 'center', maxWidth: '90%', flexShrink: 0 }}>
                    {formData.subTitle || 'Please support this noble cause and help us reach our target.'}
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', background: '#F8FAFC', padding: '12px 36px', borderRadius: '24px', border: '3px solid #E2E8F0' }}>
                        <span style={{ fontSize: '1.8rem', color: '#64748B', fontWeight: 700, marginRight: '16px' }}>GOAL:</span>
                        <span style={{ fontSize: '3.4rem', fontWeight: 900, color: pt.colors.primary, letterSpacing: '-1px' }}>₹{formData.amount || '0'}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '24px 40px', borderRadius: '24px', border: '2px solid #E2E8F0', flexShrink: 0 }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', color: pt.colors.primary, textTransform: 'uppercase', letterSpacing: '2px' }}>Direct Bank Transfer</div>
                        <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', letterSpacing: '1px' }}>
                            <span style={{ color: '#64748B', fontSize: '1.5rem', fontWeight: 600 }}>A/C</span> {activeNgo?.bankAccount || '1234 5678 9012'}
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <div style={{ fontSize: '1.1rem', color: '#64748B', fontWeight: 700, marginBottom: '4px', letterSpacing: '1px' }}>IFSC CODE</div>
                                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1E293B' }}>{activeNgo?.ifsc || 'IFSC000BANK'}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ width: '2px', height: '140px', background: '#E2E8F0', margin: '0 32px' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '180px' }}>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '2px solid #CBD5E1', marginBottom: '12px' }}>
                            {activeNgo?.qrCodeUrl ? (
                                <img src={`/api/image?path=${activeNgo.qrCodeUrl}`} alt="UPI QR" style={{ width: '140px', height: '140px', objectFit: 'contain' }} crossOrigin="anonymous" />
                            ) : (
                                <QRCodeSVG 
                                    value={`upi://pay?pa=${activeNgo?.upiId || 'test@upi'}&pn=${encodeURIComponent(activeNgo?.name || 'NGO')}&cu=INR`} 
                                    size={140} fgColor={pt.colors.secondary} level="Q"
                                />
                            )}
                        </div>
                        <div style={{ color: pt.colors.primary, fontWeight: 900, fontSize: '1.2rem', letterSpacing: '2px' }}>SCAN TO PAY VIA UPI</div>
                    </div>
                </div>
            </div>

            {/* Absolute Centered Badge directly on the median 48% split line taking the 40px arc pull-up into account */}
            <div style={{ position: 'absolute', top: 'calc(48% - 40px)', left: '50%', transform: 'translate(-50%, -50%)', background: pt.colors.badge, color: pt.colors.badge === '#F97316' || pt.colors.badge === '#EAB308' ? '#000' : 'white', padding: '20px 60px', borderRadius: '50px', fontWeight: 900, fontSize: '2.2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', zIndex: 10, border: '6px solid white', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {formData.priority === 'Urgent' ? '🚨 URGENT APPEAL' : '❤️ CHARITY FUND'}
            </div>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', paddingTop: '80px', background: 'var(--bg-soft, #F8FAFC)', display: 'flex', flexDirection: 'column' }}>
            
            {/* Hidden container for html-to-image to capture the unscaled poster without browser clipping */}
            {/* Placed off-screen natively instead of 1x1 to prevent DOM bounding box truncations in the exported image */}
            <div style={{ position: 'absolute', top: '-3000px', left: '-3000px', zIndex: -100, pointerEvents: 'none', width: '1080px', height: '1080px' }}>
                <div ref={exportRef} style={{ width: '1080px', height: '1080px' }}>
                    <PosterContent />
                </div>
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
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        
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

                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--gray-200, #E2E8F0)' }}>
                            <h3 className="font-heading" style={{ fontSize: '1.25rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'}}>2</span> Verification Document</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Upload proof of case to fast-track verification. This remains completely private to protect donor trust.</p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Supporting Document (PDF/Image) Optional</label>
                                <input type="file" onChange={e => setDocumentFile(e.target.files?.[0] || null)} accept="application/pdf, image/png, image/jpeg" style={{ padding: '10px', borderRadius: '12px', border: '1.5px dashed var(--gray-200)', outline: 'none', background: '#F8FAFC' }} />
                            </div>
                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        
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

                        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--gray-200, #E2E8F0)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', userSelect: 'none' }} onClick={() => setIsPosterExpanded(!isPosterExpanded)}>
                                <h3 className="font-heading" style={{ fontSize: '1.25rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'}}>4</span> Campaign Poster / Cover Image</h3>
                                <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)', transform: isPosterExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}>▼</div>
                            </div>

                            {isPosterExpanded && (
                                <div style={{ marginTop: '24px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#F8FAFC', borderRadius: '16px', border: '2px solid #E2E8F0', cursor: 'pointer', marginBottom: '24px' }}>
                                        <input type="checkbox" checked={posterUploadMode} onChange={(e) => {
                                            setPosterUploadMode(e.target.checked);
                                            if (!e.target.checked) setPosterFile(null); 
                                        }} style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--primary)' }} />
                                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Upload my own custom poster / cover image</span>
                                    </label>

                                    {posterUploadMode ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: '#F0FDF4', padding: '32px 24px', borderRadius: '16px', border: '2px dashed #22C55E', alignItems: 'center' }}>
                                            {!posterFile && <div style={{ fontSize: '3rem' }}>🖼️</div>}
                                            <label style={{ fontSize: '1rem', fontWeight: 700, color: '#16A34A', textAlign: 'center' }}>Select Custom Cover Image (1080x1080px)</label>
                                            <input type="file" onChange={e => setPosterFile(e.target.files?.[0] || null)} accept="image/png, image/jpeg" style={{ padding: '16px', borderRadius: '12px', background: 'white', border: '1.5px solid #86EFAC', outline: 'none', cursor: 'pointer', width: '100%', maxWidth: '300px' }} />
                                            {posterFile && (
                                                <div style={{ width: '100%', marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                                    <div style={{ fontSize: '0.85rem', color: '#15803D', fontWeight: 600 }}>Ready: {posterFile.name}</div>
                                                    <img src={URL.createObjectURL(posterFile)} alt="Custom Poster Preview" style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '16px', border: '2px solid #86EFAC', boxShadow: '0 8px 24px rgba(22, 163, 74, 0.15)', objectFit: 'contain' }} />
                                                </div>
                                            )}
                                            <p style={{ color: '#15803D', fontSize: '0.85rem', margin: 0, textAlign: 'center', maxWidth: '80%' }}>The uploaded image replaces the generator and will be visible on the live campaign.</p>
                                        </div>
                                    ) : (
                                        <>
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
                                                            boxShadow: selectedPosterTemplate.id === tmp.id ? `0 4px 12px ${tmp.colors.primary}40` : 'none', 
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

                                            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', background: '#F8FAFC', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #E2E8F0' }}>
                                                <div style={{
                                                    width: '1080px', height: '1080px', position: 'absolute', top: '0', left: '0',
                                                    transformOrigin: 'top left', pointerEvents: 'none'
                                                }} ref={(el) => {
                                                    if (el && el.parentElement) {
                                                        const observer = new ResizeObserver(entries => {
                                                            for (let entry of entries) {
                                                                const scaleX = entry.contentRect.width / 1080;
                                                                el.style.transform = `scale(${scaleX})`;
                                                            }
                                                        });
                                                        observer.observe(el.parentElement);
                                                        return () => observer.disconnect();
                                                    }
                                                }}>
                                                    <PosterContent />
                                                </div>
                                            </div>
                                            
                                            <button onClick={handleDownloadPoster} disabled={isDownloading} style={{ width: '100%', padding: '16px', borderRadius: '50px', background: '#1E293B', color: 'white', border: 'none', fontWeight: 700, cursor: isDownloading ? 'wait' : 'pointer', opacity: isDownloading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: '0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                                {isDownloading ? 'Rendering High-Res Image...' : '🖼️ Download High-Res Poster'}
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', zIndex: 100 }}>
                <button onClick={handlePublish} disabled={isPublishing} className="btn-accent" style={{ padding: '16px 48px', borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem', border: 'none', cursor: isPublishing ? 'wait' : 'pointer', opacity: isPublishing ? 0.7 : 1, boxShadow: '0 8px 20px rgba(15, 52, 96, 0.2)' }}>
                    {isPublishing ? 'Uploading & Publishing...' : 'Publish Campaign ✓'}
                </button>
            </div>
        </div>
    );
}

export default function CampaignToolsPage() {
    return (
        <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>}>
            <CampaignToolsContent />
        </Suspense>
    );
}
