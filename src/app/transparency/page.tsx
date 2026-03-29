'use client';
import React, { useState } from 'react';
import styles from './transparency.module.css';
import Link from 'next/link';

const RECENT_DONATIONS = [
    { id: 'TXN882', donor: 'Arsalan Khan', amount: '₹5,000', ngo: 'Kashmir Relief Foundation', time: '2 mins ago', status: 'VERIFIED', district: 'Srinagar' },
    { id: 'TXN881', donor: 'Fatima Mir', amount: '₹2,500', ngo: 'Chinar Education Trust', time: '18 mins ago', status: 'VERIFIED', district: 'Baramulla' },
    { id: 'TXN880', donor: 'Anonymous', amount: '₹1,200', ngo: 'Eco-Kashmir', time: '45 mins ago', status: 'VERIFIED', district: 'Srinagar' },
    { id: 'TXN879', donor: 'Bashir Ahmed', amount: '₹10,000', ngo: 'Kashmir Relief Foundation', time: '2 hrs ago', status: 'VERIFIED', district: 'Srinagar' },
    { id: 'TXN878', donor: 'Zahoor Ahmed', amount: '₹500', ngo: 'Hope Kashmir', time: '5 hrs ago', status: 'VERIFIED', district: 'Anantnag' },
    { id: 'TXN877', donor: 'Anonymous', amount: '₹2,000', ngo: 'Chinar Education Trust', time: '8 hrs ago', status: 'VERIFIED', district: 'Baramulla' },
    { id: 'TXN876', donor: 'Irfan Bhat', amount: '₹3,500', ngo: 'Kashmir Relief Foundation', time: '12 hrs ago', status: 'VERIFIED', district: 'Srinagar' },
];

export default function TransparencyPage() {

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className="font-heading">Transparency Ledger</h1>
                        <p>A real-time, public record of every donation reported and verified on Mizaan. We ensure every rupee reaches its intended destination.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.statsStrip}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>₹12.5L</span>
                        <span className={styles.statLabel}>Total Aid Tracked</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>1,420</span>
                        <span className={styles.statLabel}>Verified Donors</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>100%</span>
                        <span className={styles.statLabel}>Direct Transfers</span>
                    </div>
                </div>

                <div className={styles.ledgerCard}>
                    <div className={styles.ledgerHeader}>
                        <h2 className="font-heading">Public Transactions</h2>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Donor</th>
                                    <th>Amount</th>
                                    <th>NGO Initiative</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RECENT_DONATIONS.map(donation => (
                                    <tr key={donation.id}>
                                        <td><b>{donation.donor}</b></td>
                                        <td className="font-mono" style={{ fontWeight: 700, color: 'var(--primary)' }}>{donation.amount}</td>
                                        <td>
                                            <div className={styles.ngoInfo}>
                                                <span className={styles.ngoName}>{donation.ngo}</span>
                                                <span className={styles.districtTag}>{donation.district}</span>
                                            </div>
                                        </td>
                                        <td style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{donation.time}</td>
                                        <td>
                                            <span className={styles.statusBadge}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '6px' }}><polyline points="20 6 9 17 4 12" /></svg>
                                                Verified
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.ledgerFooter}>
                        <p>Showing latest 50 transactions. All data is cross-verified by NGOs against bank statements.</p>
                        <Link href="/campaigns" className="btn-accent" style={{ borderRadius: '50px', padding: '10px 24px' }}>Make a Donation</Link>
                    </div>
                </div>


            </div>
        </div>
    );
}
