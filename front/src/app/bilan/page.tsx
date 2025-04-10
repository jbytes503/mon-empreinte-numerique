'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import CarbonFootprint from '../components/result/result';
import PosteDEmission from '../components/postedemission/poste';
import styles from './page.module.css';
import Title from '../components/titles';
import Button from '../components/home/button';

export default function Page() {
    const searchParams = useSearchParams();
    const [totalCO2, setTotalCO2] = useState<number>(0);
    const [randomTips, setRandomTips] = useState<
        { id: number; text: string }[]
    >([]);

    useEffect(() => {
        let sum = 0;
        const expectedKeys = [
            'smartphone',
            'computer',
            'tablet',
            'tv',
            'console',
            'messaging',
            'streaming',
            'ai',
            'cloud',
            'work',
        ];

        console.log("Lecture des paramètres d'URL...");
        expectedKeys.forEach((key) => {
            const valueString = searchParams.get(key);
            const numValue = parseFloat(valueString || '0');

            if (!isNaN(numValue)) {
                console.log(`  ${key}: ${valueString} -> ${numValue}`);
                sum += numValue;
            } else {
                console.log(
                    `  ${key}: ${valueString} -> Ignoré (non numérique)`
                );
            }
        });

        setTotalCO2(sum);
        console.log('Total CO2 calculé à partir des paramètres:', sum);

        const allTips = [
            {
                id: 1,
                text: "Réduisez le streaming en haute définition 🎥➡️📉 \nRegarder des vidéos en 4K consomme beaucoup d'énergie ! Privilégiez une résolution plus basse et téléchargez les contenus au lieu de les regarder en ligne.",
            },
            {
                id: 2,
                text: 'Prolongez la durée de vie de vos appareils 📱💻♻️ \nGardez votre smartphone et votre ordinateur plus longtemps en évitant les remplacements fréquents. Réparez-les si possible et achetez reconditionné.',
            },
            {
                id: 3,
                text: "Nettoyez vos données inutiles ☁️🗑️ \nLes emails, photos et fichiers stockés en ligne consomment de l'énergie. Supprimez ceux dont vous n'avez plus besoin et désabonnez-vous des newsletters non lues.",
            },
            {
                id: 4,
                text: "Optimisez vos recherches web 🌐🔍 \nUtilisez des moteurs de recherche écologiques comme Ecosia et tapez directement l'URL des sites que vous visitez souvent.",
            },
            {
                id: 5,
                text: 'Éteignez vos appareils la nuit 🔌🌙 \nDébranchez les chargeurs et éteignez complètement les appareils électroniques plutôt que de les laisser en veille.',
            },
            {
                id: 6,
                text: "Privilégiez le wifi aux données mobiles 📶🏠 \nLa connexion wifi consomme moins d'énergie que le réseau 4G/5G. Activez le mode avion en zone de mauvaise réception.",
            },
            {
                id: 7,
                text: 'Limitez les objets connectés inutiles 🏠⚡ \nLes montres connectées, enceintes intelligentes et autres gadgets accumulent la consommation énergétique.',
            },
            {
                id: 8,
                text: 'Choisissez du matériel éco-conçu 🌱💻 \nPréférez les appareils avec labels énergétiques (EPEAT, TCO Certified) et une bonne réparabilité.',
            },
            {
                id: 9,
                text: "Réduisez les visioconférences 📹✈️ \nUne réunion virtuelle d'une heure émet autant de CO2 qu'un trajet en voiture de 1 km. Privilégiez le téléphone quand c'est possible.",
            },
            {
                id: 10,
                text: 'Optimisez votre boîte mail 📧🚮 \nSupprimez les anciens emails avec pièces jointes, compressez les fichiers et désactivez la synchronisation automatique.',
            },
            {
                id: 11,
                text: 'Utilisez des logiciels légers 🖥️🍃 \nLes applications trop lourdes sollicitent plus votre processeur. Privilégiez les logiciels open source et les versions allégées.',
            },
            {
                id: 12,
                text: "Petits gestes, grand impact ! 🌍✨ \nAdoptez ces bonnes pratiques et partagez-les avec votre entourage pour amplifier l'effet positif !",
            },
        ];

        const shuffleArray = (array: typeof allTips) => {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        setRandomTips(shuffleArray(allTips).slice(0, 3));
    }, [searchParams]);

    return (
        <>
            <Title name="Mon empreinte" />

            <section className={`${styles.section}`}>
                <CarbonFootprint
                    co2Amount={totalCO2}
                    maxScale={0}
                    progressPercentage={0}
                    tripComparison={0}
                />
            </section>
            <Title name="Mes principaux postes d'émissions" />
            <section className={`${styles.section}`}>
                <PosteDEmission
                    nom="Poste d'émission 1"
                    pos={1}
                    co2Amount={0}
                />
                <PosteDEmission
                    nom="Poste d'émission 2"
                    pos={2}
                    co2Amount={0}
                />
                <PosteDEmission
                    nom="Poste d'émission 3"
                    pos={3}
                    co2Amount={0}
                />
            </section>
            <h3 className={`${styles.tt}`}>
                Voici quelques idées pour vous aider à réduire votre impact :
            </h3>
            <section className={`${styles.intro} ${styles.section}`}>
                <ul>
                    {randomTips.map((tip) => (
                        <li key={tip.id} className={`${styles.tips}`}>
                            {tip.text.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </li>
                    ))}
                </ul>
                <div>
                    <Button label="Je re fais le test !" href="/calculator" />
                </div>
            </section>
        </>
    );
}
