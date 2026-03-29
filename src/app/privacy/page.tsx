import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <main style={{ background: 'var(--bg-white)', minHeight: '100vh', paddingBottom: '80px' }}>
            <div style={{ background: 'var(--bg-dark)', color: 'white', padding: '120px 20px 80px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'white' }}>Privacy Policy</h1>
                <p style={{ color: 'var(--text-muted)' }}>Last Updated: March 2026</p>
            </div>
            
            <div className="container" style={{ maxWidth: '800px', marginTop: '60px' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.6' }}>
                    Meezan operates on a unique <strong>Direct Transfer model</strong>. We do not act as a middleman for funds. Therefore, our data collection is strictly limited to tracking, verification, and receipt generation.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', color: 'var(--text-primary)', lineHeight: '1.8' }}>
                    
                    {/* SECTION: DONORS */}
                    <section style={{ background: '#F8FAFC', padding: '32px', borderLeft: '4px solid var(--primary)', borderRadius: '0 16px 16px 0' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--primary)' }}>Part A: For Donors</h2>
                        
                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>1. What We Collect</h3>
                        <p>When you report a donation on Meezan, we collect:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '24px', margin: '8px 0' }}>
                            <li>Your Name and Email Address.</li>
                            <li>Your PAN Number (optional, collected purely to be passed to the NGO so they can issue your 80G certificate later).</li>
                            <li>The Transaction Reference Number (UTR or Bank ID) of the transfer you made.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>2. What We NEVER Collect</h3>
                        <p>Because you pay the NGO directly via your personal UPI or banking app, <strong>we never see, collect, or store your debit/credit card numbers, UPI PINs, or bank login credentials.</strong> Meezan is completely removed from the actual financial handshake.</p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>3. How Your Data is Used</h3>
                        <p>Your details and UTR are securely shared <strong>only</strong> with the specific NGO you donated to. This enables them to locate your transfer in their bank statement, verify it on our system, and legally account for the funds.</p>
                    </section>

                    {/* SECTION: NGOS */}
                    <section style={{ background: '#FFFAED', padding: '32px', borderLeft: '4px solid var(--accent)', borderRadius: '0 16px 16px 0' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--accent-dark)' }}>Part B: For Partner NGOs</h2>
                        
                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>1. Mandatory Data Verification</h3>
                        <p>To list an organization on Meezan, we require the submission of official registration certificates, 12A/80G documents, PAN cards, and verified bank account/UPI details. We use this data solely to vet your legitimacy and prevent fraudulent campaigns.</p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>2. Bank Statement Privacy</h3>
                        <p>If you utilize our Auto-Verification feature by uploading bank statements, the files are processed securely to extract matching UTR references and automatically verify donor claims. Raw statements are strictly access-controlled and used exclusively for this operational matching process.</p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>3. Receipt Generation Authorization</h3>
                        <p style={{ fontWeight: 'bold', color: 'var(--kangri-red)' }}>
                            By registering on Meezan, your NGO formally authorizes our platform to act as your digital receipt agent. When a donation is verified securely within your portal, our system will automatically generate an official digital donation receipt (incorporating your NGO's Name and PAN) and send it to the respective donor on your behalf.
                        </p>
                    </section>

                    <section style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-main)' }}>Contact Information</h2>
                        <p>We do not sell user data to advertising third parties. For data deletion requests or inquiries, please contact:</p>
                        <p style={{ marginTop: '8px', fontWeight: 'bold' }}>support@adheeman.com</p>
                    </section>

                </div>
            </div>
            <div style={{ marginTop: '60px', textAlign: 'center' }}>
                <Link href="/" className="btn-secondary">Return to Home</Link>
            </div>
        </main>
    );
}
