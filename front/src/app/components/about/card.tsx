import { ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
    name: string;
    title: string;
    description: string;
    icon: ReactNode;
    url?: string;
}

const AuthorCard = ({ name, title, description, icon, url }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div>
                    <h5>
                        <strong>{name}</strong>
                    </h5>
                    <p>{title}</p>
                </div>
                {url ? (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardIcon}
                    >
                        {icon}
                    </a>
                ) : (
                    <div className={styles.cardIcon}>{icon}</div>
                )}
            </div>
            <div className={styles.cardDivider}></div>
            <p>{description}</p>
        </div>
    );
};

export default AuthorCard;
