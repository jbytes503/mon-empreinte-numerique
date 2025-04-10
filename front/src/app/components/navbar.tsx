'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    // Déclaration de l'état pour le bouton sélectionné avec le type 'string | null'
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    // Fonction pour gérer le clic sur un bouton
    const handleButtonClick = (buttonName: string | null) => {
        setSelectedButton(buttonName);
    };

    // Liste des éléments de navigation
    const navItems = [
        { name: "L'empreinte numérique", href: '/learn-more' },
        { name: 'À propos de nous', href: '/about' },
        { name: 'Calculer mon empreinte', href: '/calculator' },
    ];

    return (
        <nav className={styles.navbar}>
            {/* Logo avec réinitialisation de la sélection au clic */}
            <Link
                href="/"
                className={styles.logoText}
                onClick={() => handleButtonClick(null)} // Réinitialiser la sélection lors du clic sur le logo
            >
                Mon Empreinte Numérique
            </Link>

            {/* Menu Desktop */}

            <ul className={styles.menu}>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`${styles.navItemText}
                                        ${selectedButton === item.name ? styles.selectedButton : styles.hiddenButton}`} // Appliquer le style si le bouton est sélectionné
                    >
                        <Link
                            href={item.href}
                            onClick={
                                () => handleButtonClick(item.name) // Clic sur un bouton
                            }
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
