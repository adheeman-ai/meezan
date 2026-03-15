import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'glass' | 'elevated';
    className?: string;
    onClick?: () => void;
}

export default function Card({
    children,
    variant = 'default',
    className = '',
    onClick
}: CardProps) {
    return (
        <div
            className={`${styles.card} ${styles[variant]} ${className} ${onClick ? styles.clickable : ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
