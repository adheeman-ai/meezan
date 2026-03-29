'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NgoSignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/ngo/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const text = await res.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (e) {
                console.error('Login response was not JSON:', text);
                throw new Error('Server returned an invalid response. Please check server logs.');
            }

            if (!res.ok) {
                throw new Error(data.error || 'Failed to sign in');
            }

            // Redirect based on role
            router.push(data.redirect || '/ngo/dashboard');
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-soft, #F8FAFC)', padding: '20px' }}>
            <div style={{ background: 'white', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px', boxShadow: '0 10px 40px rgba(15, 52, 96, 0.08)' }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                        <img src="/logos/mizaan-black.png" alt="Mizaan" style={{ height: '64px', width: 'auto' }} />
                    </div>
                    <h1 className="font-heading" style={{ fontSize: '1.75rem', marginBottom: '8px' }}>NGO Partner Login</h1>
                    <p style={{ color: 'var(--text-secondary, #475569)', fontSize: '0.95rem' }}>Access your dashboard to manage campaigns and verify donations.</p>
                </div>

                <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {error && (
                        <div style={{ padding: '12px', borderRadius: '12px', background: '#FEE2E2', color: '#DC2626', fontSize: '0.85rem', fontWeight: 600, border: '1px solid #FECACA' }}>
                            {error}
                        </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary, #475569)' }}>Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@ngo.org"
                            style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid var(--gray-200, #E2E8F0)', outline: 'none', fontFamily: 'DM Sans, sans-serif' }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary, #475569)' }}>Password</label>
                            <a href="#" style={{ fontSize: '0.8rem', color: 'var(--primary, #0F3460)', textDecoration: 'none', fontWeight: 500 }}>Forgot?</a>
                        </div>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            style={{ padding: '12px 16px', borderRadius: '12px', border: '1.5px solid var(--gray-200, #E2E8F0)', outline: 'none', fontFamily: 'DM Sans, sans-serif' }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{ marginTop: '12px', padding: '14px', borderRadius: '50px', border: 'none', background: 'linear-gradient(135deg, var(--primary, #0F3460), var(--primary-mid, #1A4B7C))', color: 'white', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', transition: 'all 0.2s' }}
                    >
                        {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
                    </button>
                </form>

                <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary, #475569)' }}>
                    Don&apos;t have an account? <a href="mailto:shukriya@mizaan.org" style={{ color: 'var(--accent-dark, #A8882A)', fontWeight: 600, textDecoration: 'none' }}>Email Admin for Credentials</a>
                </div>
            </div>
        </div>
    );
}
