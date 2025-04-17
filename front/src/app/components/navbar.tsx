'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleButtonClick = (buttonName: string | null) => {
        setSelectedButton(buttonName);
        setMenuOpen(false); // Close menu on link click
    };

    const navItems = [
        { name: "L'empreinte numérique", href: '/learn-more' },
        { name: 'À propos de nous', href: '/about' },
        { name: 'Calculer mon empreinte', href: '/calculator' },
    ];

    return (
        <nav className={styles.navbar}>
            <Link
                href="/"
                className={styles.logoText}
                onClick={() => handleButtonClick(null)}
            >
                Mon Empreinte Numérique
            </Link>

            <button
                className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`${styles.navItemText} ${
                            selectedButton === item.name
                                ? styles.selectedButton
                                : styles.hiddenButton
                        }`}
                    >
                        <Link
                            href={item.href}
                            onClick={() => handleButtonClick(item.name)}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
