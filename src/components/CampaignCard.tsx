import Link from 'next/link';
import ProgressBar from './ProgressBar';
import Button from './Button';
import styles from './CampaignCard.module.css';

export interface CampaignData {
    id: string;
    title: string;
    ngoName: string;
    district: string;
    category: string;
    description: string;
    verifiedAmount: number;
    pendingAmount: number;
    goalAmount: number;
    imageUrl: string;
    daysRemaining: number;
    donorCount: number;
    isUrgent: boolean;
}

export default function CampaignCard({ campaign }: { campaign: CampaignData }) {
    return (
        <div className={`${styles.card} glass-card`}>
            <div className={styles.imageWrapper}>
                <img src={campaign.imageUrl || '/templates/winter.png'} alt={campaign.title} className={styles.image} />
                <span className={styles.categoryBadge}>{campaign.category.replace('_', ' ')}</span>
                {campaign.isUrgent && <span className={styles.urgentBadge}>Urgent</span>}
            </div>

            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.ngoName}>
                        {campaign.ngoName}
                    </span>
                    <span className={styles.districtBadge}>{campaign.district}</span>
                </div>

                <h3 className={`${styles.title} font-heading`}>{campaign.title}</h3>
                <p className={styles.description}>{campaign.description}</p>

                <div className={styles.progressSection}>
                    <ProgressBar
                        verified={campaign.verifiedAmount}
                        pending={campaign.pendingAmount}
                        goal={campaign.goalAmount}
                    />
                    <div className={styles.progressStats}>
                        <div className={styles.raisedInfo}>
                            <span className={`${styles.verifiedAmount} font-mono`}>₹{(campaign.verifiedAmount / 100).toLocaleString()}</span>
                            <span className={styles.slash}>/</span>
                            <span className={`${styles.goalAmount} font-mono`}>₹{(campaign.goalAmount / 100).toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.footerInfo}>
                        <span className={styles.footerItem}><b className="font-mono">{campaign.donorCount}</b> Donors</span>
                        <span className={styles.footerItem}><b className="font-mono">{campaign.daysRemaining}</b> Days</span>
                    </div>
                    <Link href={`/campaign/${campaign.id}`} passHref>
                        <Button className="btn-accent" size="sm">Donate</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
