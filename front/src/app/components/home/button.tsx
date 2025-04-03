import React from 'react';
import Link from 'next/link'; // Import Link
import styles from './button.module.css';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    href?: string; // Optional href for the link
}

const Button: React.FC<ButtonProps> = ({ label, onClick, href }) => {
    if (href) {
        return (
            <Link href={href} className={styles.link}>
                <button className={styles.button} onClick={onClick}>
                    {label}
                </button>
            </Link>
        );
    }

    return (
        <button className={styles.button} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
