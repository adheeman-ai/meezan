import Link from 'next/link';

export default function FAQPage() {
    return (
        <main style={{ background: 'var(--bg-white)', minHeight: '100vh', paddingBottom: '80px' }}>
            <div style={{ background: 'var(--bg-dark)', color: 'white', padding: '120px 20px 80px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', margin: '0 auto 16px', maxWidth: '800px', color: 'white' }}>Frequently Asked Questions</h1>
                <p style={{ color: 'var(--text-muted)' }}>Everything you need to know about how Meezan works.</p>
            </div>
            
            <div className="container" style={{ maxWidth: '800px', marginTop: '60px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', color: 'var(--text-primary)' }}>
                    
                    <section>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '24px', color: 'var(--primary)', borderBottom: '2px solid var(--gray-100)', paddingBottom: '8px' }}>For Donors</h2>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>Are there any hidden fees?</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>No. Meezan charges absolutely 0% platform fees. Furthermore, because you use your own UPI app or bank to digitally transfer money directly to the NGO, there are no payment gateway fees either. 100% of your donation reaches the campaign.</p>
                            </div>
                            
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>How do I get a donation receipt?</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>After you make a direct transfer to the NGO, return to the campaign page on Meezan and report your donation using the UTR (UPI) or Reference ID (Bank Transfer). Once the NGO verifies the transaction against their bank statement, an official digital receipt (including the NGO's PAN) will be automatically generated and emailed to you. You can use this receipt to follow up with the NGO for your 80G tax certificate if applicable.</p>
                            </div>
                            
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>What is a UTR number?</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>UTR stands for Unique Transaction Reference. It is a 12-digit number (often starting with the current year) found in the payment details screen of apps like GPay, PhonePe, or Paytm after a successful UPI transfer. It is required for the NGO to locate your specific transfer in their bank log.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '24px', color: 'var(--accent)', borderBottom: '2px solid var(--gray-100)', paddingBottom: '8px' }}>For Partner NGOs</h2>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>How do I register my organization?</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>NGOs must hold valid 12A/80G credentials and a registered bank account. You can register via our <Link href="/ngo/login" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>NGO Portal</Link>. Our team manually reviews applications within 48 hours before granting portal access.</p>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>How does the Auto-Verification system work?</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Instead of manually matching dozens of UPI names every day, you can simply upload your official PDF/CSV bank statement in the admin portal. Our intelligent system will automatically cross-reference the donors' reported UTRs with the uploaded statement records and verify the matching donations in milliseconds.</p>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>Who sends the receipt to the donor?</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Meezan automatically generates and emails the official donation receipt on your behalf immediately after a donation is verified in your portal. The receipt includes your organization's Name and PAN, ensuring immediate legal compliance without any manual email drafting on your part.</p>
                            </div>
                            
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>Can we use our own campaign posters?</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes. You can upload custom campaign posters. If you don't have one, Meezan automatically generates a branded, professional poster for your campaign highlighting the goal amount and direct UPI handles.</p>
                            </div>
                        </div>
                    </section>

                </div>
                
                <div style={{ marginTop: '60px', paddingTop: '32px', borderTop: '1px solid var(--gray-200)', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Still have questions?</p>
                    <a href="mailto:support@adheeman.com" className="btn-primary">Contact Support</a>
                </div>
            </div>
        </main>
    );
}
