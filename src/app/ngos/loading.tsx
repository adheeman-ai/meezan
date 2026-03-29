import React from 'react';

export default function Loading() {
    return (
        <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            {/* Header placeholder */}
            <div style={{ background: 'linear-gradient(135deg, #0F3460 0%, #0A1930 100%)', padding: '120px 0 60px' }}>
                <div className="container">
                    <div className="skeleton-pulse" style={{ height: '40px', width: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                </div>
            </div>
            
            <div className="container" style={{ paddingTop: '32px' }}>
                {/* Grid skeleton */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} style={{ height: '220px', background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '24px' }}>
                            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                                <div className="skeleton-pulse" style={{ width: '52px', height: '52px', background: '#F1F5F9', borderRadius: '14px' }} />
                                <div style={{ flex: 1 }}>
                                    <div style={{ height: '16px', width: '70%', background: '#F1F5F9', borderRadius: '4px', marginBottom: '8px' }} />
                                    <div style={{ height: '12px', width: '40%', background: '#F1F5F9', borderRadius: '4px' }} />
                                </div>
                            </div>
                            <div style={{ height: '24px', width: '60%', background: '#F8FAFC', borderRadius: '20px', marginBottom: '20px' }} />
                            <div style={{ height: '1px', background: '#F1F5F9' }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
