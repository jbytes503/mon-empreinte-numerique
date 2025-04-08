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
    onSave?: (e: React.FormEvent) => void; // Fonction personnalisée pour chaque carte
}

const QuestionCard = ({
    number,
    title,
    description,
    children,
    isFilled = false,
    isOpen = false,
    onSave,
}: QuestionCardProps) => {
    const [expanded, setExpanded] = useState(isOpen);
    const [filled, setFilled] = useState(isFilled);
    const [userHasInteracted, setUserHasInteracted] = useState(false);

    const toggleCard = () => {
        setExpanded(!expanded);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Afficher un message dans la console
        console.log(`Carte ${number} sauvegardée: ${title}`);

        // Marquer que l'utilisateur a interagi avec ce formulaire
        setUserHasInteracted(true);

        // Si une fonction spécifique de sauvegarde est fournie, l'exécuter
        if (onSave) {
            onSave(e);
        }

        // Marquer comme rempli
        setFilled(true);

        // Replier la carte
        setExpanded(false);
    };

    const cardClassName = `${styles.card} ${expanded ? styles.expanded : ''} ${filled && !expanded ? styles.filled : ''}`;

    return (
        <div className={cardClassName}>
            <div className={styles.header} onClick={toggleCard}>
                <div className={styles.titleContainer}>
                    <span className={styles.number}>{number}</span>
                    <h2 className={styles.title}>{title}</h2>
                    {filled && !expanded && (
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
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {/* Passer les children tels quels pour conserver les données */}
                        {children}
                        <div className={styles.buttonContainer}>
                            <button
                                type="submit"
                                className={styles.submitButton}
                            >
                                Sauvegarder
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
