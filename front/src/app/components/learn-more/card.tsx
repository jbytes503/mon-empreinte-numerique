import { ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
    title: string;
    icon: ReactNode;
    description: string;
}

const DispositifCard = ({ title, icon, description }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardImage}>
                    {icon}
                </div>
                <h3>{title}</h3>
            </div>
            <div className={styles.cardDivider}></div>
            <p>{description}</p>
        </div>
    );
};

export default DispositifCard;
