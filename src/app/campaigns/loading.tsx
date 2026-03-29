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
                {/* Search Bar Skeleton */}
                <div className="skeleton-pulse" style={{ height: '48px', width: '100%', background: 'white', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '32px' }} />

                {/* Grid skeleton */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} style={{ height: '400px', background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden' }}>
                            <div className="skeleton-pulse" style={{ height: '200px', background: '#F1F5F9' }} />
                            <div style={{ padding: '24px' }}>
                                <div style={{ height: '12px', width: '40%', background: '#F1F5F9', borderRadius: '4px', marginBottom: '12px' }} />
                                <div style={{ height: '24px', width: '90%', background: '#F1F5F9', borderRadius: '4px' }} />
                                <div style={{ marginTop: '20px', height: '6px', width: '100%', background: '#F1F5F9' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
