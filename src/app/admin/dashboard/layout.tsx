import React from 'react';
import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC' }}>
            {/* Sidebar */}
            <aside style={{
                width: '280px',
                background: '#0F3460',
                color: 'white',
                padding: '32px 20px',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                height: '100vh',
                overflowY: 'auto'
            }}>
                <div style={{ marginBottom: '48px', padding: '0 12px' }}>
                    <img src="/logos/mizaan-white.png" alt="Mizaan" style={{ height: '40px', width: 'auto' }} />
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px', border: '1px solid rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', display: 'inline-block' }}>
                        SUPER ADMIN
                    </div>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <SidebarLink href="/admin/dashboard" icon="📊" label="Overview" active />
                    <SidebarLink href="/admin/dashboard/ngos" icon="🤝" label="Manage NGOs" />
                    <SidebarLink href="/admin/dashboard/campaigns" icon="📢" label="All Campaigns" />
                    <SidebarLink href="/admin/dashboard/transparency" icon="📜" label="Transparency" />
                    <SidebarLink href="/admin/dashboard/users" icon="👥" label="Staff Users" />
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <button style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,0.05)',
                        border: 'none',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                    }}>
                        <span>🚪</span> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ marginLeft: '280px', flex: 1, padding: '40px' }}>
                {children}
            </main>
        </div>
    );
}

function SidebarLink({ href, icon, label, active = false }: { href: string; icon: string; label: string; active?: boolean }) {
    return (
        <Link href={href} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '12px',
            textDecoration: 'none',
            color: active ? 'white' : 'rgba(255,255,255,0.7)',
            background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
            fontSize: '0.95rem',
            fontWeight: active ? 600 : 500,
            transition: 'all 0.2s'
        }}>
            <span style={{ fontSize: '1.2rem' }}>{icon}</span>
            {label}
        </Link>
    );
}
