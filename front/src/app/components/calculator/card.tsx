'use client';

import { ReactNode, useState } from 'react';
import { FiPlus, FiMinus, FiCheck } from 'react-icons/fi';
import styles from './card.module.css';

interface QuestionCardProps {
    number: string;
    title: string;
    description: string;
    children?: ReactNode;
    isFilled?: boolean;
    isOpen?: boolean;
}

const QuestionCard = ({
    number,
    title,
    description,
    children,
    isFilled = false,
    isOpen = false,
}: QuestionCardProps) => {
    const [expanded, setExpanded] = useState(isOpen);

    const toggleCard = () => {
        setExpanded(!expanded);
    };

    const cardClassName = `${styles.card} ${expanded ? styles.expanded : ''} ${isFilled && !expanded ? styles.filled : ''}`;

    return (
        <div className={cardClassName}>
            <div className={styles.header} onClick={toggleCard}>
                <div className={styles.titleContainer}>
                    <span className={styles.number}>{number}</span>
                    <h2 className={styles.title}>{title}</h2>
                    {isFilled && !expanded && (
                        <div className={styles.filledIndicator}>
                            <FiCheck size={18} />
                            <span>Complété</span>
                        </div>
                    )}
                </div>
                <button
                    className={styles.toggleButton}
                    type="button"
                    aria-label={expanded ? 'Réduire' : 'Développer'}
                >
                    {expanded ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </button>
            </div>

            {expanded && (
                <div className={styles.content}>
                    <p className={styles.description}>{description}</p>
                    <form className={styles.form}>
                        {children}
                        <button type="submit" className={styles.submitButton}>
                            Sauvegarder
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
