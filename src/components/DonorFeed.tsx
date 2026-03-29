'use client';

import React from 'react';
import styles from './DonorFeed.module.css';

interface Donation {
    id: number;
    donorName: string | null;
    amount: number;
    reportedAt: string;
}

interface DonorFeedProps {
    donations: Donation[];
}

export default function DonorFeed({ donations }: DonorFeedProps) {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!donations || donations.length === 0) return null;

    const formatTimeAgo = (dateString: string) => {
        if (!isMounted) return ''; // Avoid hydration mismatch
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
        return `${Math.floor(diffInSeconds / 86400)}d ago`;
    };

    const getAvatarColor = (name: string | null) => {
        if (!name) return '#0F3460';
        const colors = ['#0F3460', '#1A4B7C', '#C9A84C', '#10B981', '#3B82F6', '#6366F1'];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.liveIndicator}>
                    <div className={styles.pulse} />
                    Live Contributions
                </div>
                <div className={styles.count}>{donations.length} Most Recent</div>
            </div>
            
            <div className={styles.feedWrapper}>
                <div className={styles.feedScroll}>
                    {donations.map((donation, index) => (
                        <div 
                            key={donation.id} 
                            className={styles.donorItem}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div 
                                className={styles.avatar} 
                                style={{ background: getAvatarColor(donation.donorName) }}
                            >
                                {donation.donorName ? donation.donorName[0].toUpperCase() : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                )}
                            </div>
                            <div className={styles.info}>
                                <div className={styles.topRow}>
                                    <span className={styles.name}>
                                        {donation.donorName || 'Mizaan Donor'}
                                    </span>
                                    <span className={styles.amount}>
                                        ₹{(donation.amount / 100).toLocaleString()}
                                    </span>
                                </div>
                                <div className={styles.bottomRow}>
                                    <span className={styles.time}>{formatTimeAgo(donation.reportedAt)}</span>
                                    <span className={styles.verifiedBadge}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Verified
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
