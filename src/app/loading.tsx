import React from 'react';

export default function Loading() {
    return (
        <div style={{ minHeight: '100vh', background: 'white' }}>
            {/* Header placeholder */}
            <div style={{ height: '80px', borderBottom: '1px solid #F1F5F9' }} />
            
            <div className="container" style={{ paddingTop: '100px' }}>
                {/* Hero skeleton */}
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="skeleton-pulse" style={{ height: '12px', width: '150px', background: '#F1F5F9', borderRadius: '50px', margin: '0 auto 24px' }} />
                    <div className="skeleton-pulse" style={{ height: '60px', width: '80%', background: '#F1F5F9', borderRadius: '12px', margin: '0 auto 16px' }} />
                    <div className="skeleton-pulse" style={{ height: '24px', width: '60%', background: '#F1F5F9', borderRadius: '8px', margin: '0 auto 40px' }} />
                </div>

                {/* Grid skeleton */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '60px' }}>
                    {[1, 2, 3].map(i => (
                        <div key={i} style={{ height: '350px', background: 'white', border: '1px solid #F1F5F9', borderRadius: '24px', padding: '24px' }}>
                            <div className="skeleton-pulse" style={{ height: '180px', background: '#F1F5F9', borderRadius: '16px', marginBottom: '16px' }} />
                            <div style={{ height: '14px', width: '40%', background: '#F1F5F9', borderRadius: '4px', marginBottom: '12px' }} />
                            <div style={{ height: '24px', width: '90%', background: '#F1F5F9', borderRadius: '4px' }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
