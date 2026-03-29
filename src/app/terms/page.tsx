import Link from 'next/link';

export default function TermsOfService() {
    return (
        <main style={{ background: 'var(--bg-white)', minHeight: '100vh', paddingBottom: '80px' }}>
            <div style={{ background: 'var(--bg-dark)', color: 'white', padding: '120px 20px 80px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'white' }}>Terms of Service</h1>
                <p style={{ color: 'var(--text-muted)' }}>Last Updated: March 2026</p>
            </div>
            
            <div className="container" style={{ maxWidth: '800px', marginTop: '60px' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.6' }}>
                    Welcome to Meezan. We are a specialized charity tracking platform serving Kashmir. <strong>We are NOT a bank, payment gateway, or financial institution.</strong> All transactions are executed directly between donors and NGOs.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', color: 'var(--text-primary)', lineHeight: '1.8' }}>
                    
                    {/* SECTION: DONORS */}
                    <section style={{ background: '#F8FAFC', padding: '32px', borderLeft: '4px solid var(--primary)', borderRadius: '0 16px 16px 0' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--primary)' }}>Part A: For Donors</h2>
                        
                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>1. Zero Platform & Gateway Fees</h3>
                        <p>Meezan charges <strong>0% platform fees.</strong> Because you process the transfer directly from your personal banking or UPI application to the NGO's official account, there are also zero payment gateway fees. 100% of your donation reaches the campaign.</p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>2. Accurate Reporting</h3>
                        <p>To receive an official donation receipt, you must report your transaction on our platform using the exact UTR (Unique Transaction Reference) or Bank Reference ID. Submitting false, duplicate, or test UTR numbers constitutes misuse of the platform and may result in a permanent ban.</p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>3. Direct Financial Liability</h3>
                        <p>Because Meezan does not touch or hold any funds, we cannot issue refunds, reverse transactions, or intervene in bank server failures. Any financial dispute must be resolved directly with your banking institution or the NGO.</p>
                    </section>

                    {/* SECTION: NGOS */}
                    <section style={{ background: '#FFFAED', padding: '32px', borderLeft: '4px solid var(--accent)', borderRadius: '0 16px 16px 0' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--accent-dark)' }}>Part B: For Partner NGOs</h2>
                        
                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>1. Mandate of Transparency</h3>
                        <p>Registered organizations are obligated to actively manage their campaigns, verify pending donations timely (either manually or via statement uploads), and update the public on fund utilization. Meezan reserves the right to suspend portal access for prolonged inactivity or verified donor complaints regarding transparency.</p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '8px' }}>2. Automated Receipt Issuance Agreement</h3>
                        <p>By utilizing Meezan for campaign administration, your NGO formally appoints Meezan as your digital agent for the sole purpose of generating and issuing automated donation receipts. You agree that once your admin user verifies a donation in the portal, Meezan will automatically email a standard official receipt (bearing your NGO's Name and PAN) to the donor, protecting them from legal ambiguity. Issuance of actual 80G tax certificates remains the sole responsibility of the NGO.</p>
                    </section>

                    <section style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '32px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-main)' }}>Platform Moderation & Contact</h2>
                        <p>Meezan is dedicated to maintaining the highest standard of accountability in Kashmir. We reserve the right to modify these terms to adapt to new regulatory requirements.</p>
                        <p style={{ marginTop: '16px' }}>For legal, compliance, or support inquiries, please contact us at:</p>
                        <p style={{ fontWeight: 'bold' }}>Email: support@adheeman.com</p>
                    </section>

                </div>
            </div>
            
            <div style={{ marginTop: '60px', padding: '0 20px', textAlign: 'center' }}>
                <Link href="/" className="btn-secondary">Return to Home</Link>
            </div>
        </main>
    );
}
