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
        { name: "L'empreinte numérique", href: '/' },
        { name: 'À propos de nous', href: '/about' },
        { name: 'Calculer mon empreinte', href: '/Calculator' },
    ];

    return (
        <div>
            <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-white bg-opacity-90 sticky lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
                <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
                    {/* Logo avec réinitialisation de la sélection au clic */}
                    <Link
                        href="/"
                        className={`mr-4 block cursor-pointer py-1.5 font-bold ${styles.logoText}`}
                        onClick={() => handleButtonClick(null)} // Réinitialiser la sélection lors du clic sur le logo
                    >
                        Mon Empreinte Numérique
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden lg:block">
                        <ul className="flex flex-col gap-7 mt-2 mb- lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center p-1 text-lg gap-x-2 text-slate-600 ${styles.navItemText}
                                        ${selectedButton === item.name ? styles.selectedButton : styles.hiddenButton}`} // Appliquer le style si le bouton est sélectionné
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center"
                                        onClick={
                                            () => handleButtonClick(item.name) // Clic sur un bouton
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
