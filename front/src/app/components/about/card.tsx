import { ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
    name: string;
    title: string;
    description: string;
    icon: ReactNode;
    url?: string;
}

const AuthorCard = ({ name, title, description, icon }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardHeaderContent}>
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
                <div className={styles.cardIcon}>{icon}</div>{' '}
            </div>
            <div className={styles.cardDivider}></div>
            <p>{description}</p>
        </div>
    );
};

export default AuthorCard;
