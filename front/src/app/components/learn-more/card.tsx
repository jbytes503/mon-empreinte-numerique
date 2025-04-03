import { ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
    title: string;
    image: string;
    description: string;
}

const DispositifCard = ({ title, image, description }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardImage}>
                    <img src={image} alt={title} className={styles.image} />
                </div>
                <h3>{title}</h3>
            </div>
            <div className={styles.cardDivider}></div>
            <p>{description}</p>
        </div>
    );
};

export default DispositifCard;
