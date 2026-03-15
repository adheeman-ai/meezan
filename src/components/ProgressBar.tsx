import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
    verified: number;
    pending: number;
    goal: number;
    showLabels?: boolean;
}

export default function ProgressBar({ verified, pending, goal, showLabels = false }: ProgressBarProps) {
    const verifiedPercent = Math.min(100, (verified / goal) * 100);
    const pendingPercent = Math.min(100 - verifiedPercent, (pending / goal) * 100);

    return (
        <div className={styles.wrapper}>
            <div className={styles.barContainer}>
                <div
                    className={styles.verifiedBar}
                    style={{ width: `${verifiedPercent}%` }}
                />
                <div
                    className={styles.pendingBar}
                    style={{ width: `${pendingPercent}%`, left: `${verifiedPercent}%` }}
                />
            </div>

            {showLabels && (
                <div className={styles.stats}>
                    <div className={styles.statGroup}>
                        <span className={`${styles.dot} ${styles.verifiedDot}`}></span>
                        <span className={styles.label}>₹{verified.toLocaleString()} verified</span>
                    </div>
                    <div className={styles.statGroup}>
                        <span className={`${styles.dot} ${styles.pendingDot}`}></span>
                        <span className={styles.label}>₹{pending.toLocaleString()} pending</span>
                    </div>
                    <div className={styles.goalLabel}>
                        Goal: ₹{goal.toLocaleString()}
                    </div>
                </div>
            )}
        </div>
    );
}
