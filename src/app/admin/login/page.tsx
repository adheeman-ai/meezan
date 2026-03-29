'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
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
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const text = await res.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch {
                throw new Error('Server returned an invalid response.');
            }

            if (!res.ok) {
                throw new Error(data.error || 'Authentication failed');
            }

            // Redirect to admin dashboard
            router.push(data.redirect || '/admin/dashboard');
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0F3460 0%, #0A1930 60%, #050D1A 100%)',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Decorative background elements */}
            <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,168,76,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(15,52,96,0.5) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(200,168,76,0.2)',
                padding: '56px 48px',
                borderRadius: '28px',
                width: '100%',
                maxWidth: '440px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
                position: 'relative',
                zIndex: 2,
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <img src="/logos/mizaan-white.png" alt="Mizaan" style={{ height: '48px', width: 'auto' }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: '#C8A84C', letterSpacing: '-0.5px', fontFamily: 'Playfair Display, serif' }}>
                            Mizaan
                        </div>
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200,168,76,0.1)', border: '1px solid rgba(200,168,76,0.25)', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                        <span style={{ color: '#C8A84C', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>🔐 Super Admin Access</span>
                    </div>
                    <h1 style={{ fontSize: '1.6rem', color: 'white', fontWeight: 700, margin: 0, fontFamily: 'Playfair Display, serif' }}>Command Centre</h1>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', marginTop: '8px' }}>Restricted to Mizaan administrators only.</p>
                </div>

                <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {error && (
                        <div style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(220,38,38,0.15)', color: '#FCA5A5', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(220,38,38,0.3)', textAlign: 'center' }}>
                            {error}
                        </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Admin Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@mizaan.org"
                            style={{
                                padding: '14px 18px',
                                borderRadius: '14px',
                                border: '1.5px solid rgba(255,255,255,0.1)',
                                background: 'rgba(255,255,255,0.06)',
                                color: 'white',
                                fontSize: '0.95rem',
                                fontFamily: 'DM Sans, sans-serif',
                                outline: 'none',
                                transition: 'border-color 0.2s',
                            }}
                            onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,168,76,0.5)'}
                            onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••••••"
                            style={{
                                padding: '14px 18px',
                                borderRadius: '14px',
                                border: '1.5px solid rgba(255,255,255,0.1)',
                                background: 'rgba(255,255,255,0.06)',
                                color: 'white',
                                fontSize: '0.95rem',
                                fontFamily: 'DM Sans, sans-serif',
                                outline: 'none',
                                transition: 'border-color 0.2s',
                            }}
                            onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,168,76,0.5)'}
                            onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            marginTop: '8px',
                            padding: '16px',
                            borderRadius: '50px',
                            border: 'none',
                            background: loading ? 'rgba(200,168,76,0.4)' : 'linear-gradient(135deg, #C8A84C, #A8882A)',
                            color: loading ? 'rgba(255,255,255,0.5)' : '#0A1930',
                            fontWeight: 800,
                            fontSize: '0.95rem',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            transition: 'all 0.2s',
                            letterSpacing: '0.5px',
                            boxShadow: loading ? 'none' : '0 4px 20px rgba(200,168,76,0.35)',
                        }}
                    >
                        {loading ? 'Authenticating...' : 'Access Dashboard →'}
                    </button>
                </form>

                <div style={{ marginTop: '32px', textAlign: 'center' }}>
                    <a href="/ngo/login" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', textDecoration: 'none' }}>
                        NGO Partner Portal →
                    </a>
                </div>
            </div>
        </div>
    );
}
