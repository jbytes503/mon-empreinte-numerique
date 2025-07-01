'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

import CarbonFootprint from '../components/result/result';
import PosteDEmission from '../components/postedemission/poste';
import styles from './page.module.css';
import Title from '../components/titles';
import Button from '../components/home/button';

const emissionNames: { [key: string]: string } = {
    smartphone: 'Smartphones',
    computer: 'Ordinateurs',
    tablet: 'Tablettes',
    tv: 'Télévisions',
    console: 'Consoles de jeux',
    messaging: 'Messagerie & Réseaux',
    streaming: 'Streaming Vidéo/Musique',
    ai: 'Intelligence Artificielle',
    cloud: 'Stockage Cloud',
    work: 'Communication Pro',
};

function BilanPageContent() {
    const searchParams = useSearchParams();
    const [totalCO2, setTotalCO2] = useState<number>(0);
    const [randomTips, setRandomTips] = useState<
        { id: number; text: string }[]
    >([]);
    const [topEmissions, setTopEmissions] = useState<
        { name: string; value: number }[]
    >([]);

    useEffect(() => {
        let sum = 0;
        const individualValues: { [key: string]: number } = {};
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
                individualValues[key] = numValue;
            } else {
                console.log(
                    `  ${key}: ${valueString} -> Ignoré (non numérique)`
                );
            }
        });

        setTotalCO2(sum);
        console.log('Total CO2 calculé à partir des paramètres:', sum);

        const emissionsArray = Object.entries(individualValues)
            .map(([key, value]) => ({
                name: emissionNames[key] || key,
                value: value,
            }))
            .filter((item) => item.value > 0)
            .sort((a, b) => b.value - a.value);

        setTopEmissions(emissionsArray.slice(0, 3));
        console.log('Top 3 des émissions:', emissionsArray.slice(0, 3));

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
                text: 'Optimisez votre boîte mail 📧🚮 \nSupprimez les anciens emails avec pièces jointes, compressez les fichiers et désactivez la synchronisation automatique.',
            },
            {
                id: 10,
                text: 'Utilisez des logiciels légers 🖥️🍃 \nLes applications trop lourdes sollicitent plus votre processeur. Privilégiez les logiciels open source et les versions allégées.',
            },
            {
                id: 11,
                text: "Petits gestes, grand impact ! 🌍✨ \nAdoptez ces bonnes pratiques et partagez-les avec votre entourage pour amplifier l'effet positif !",
            },
            {
                id: 12,
                text: '🔌 Pensez à éteindre votre ordinateur\n\nÉteindre son ordinateur tous les soirs peut réduire sa consommation énergétique de 25 %. Un geste simple pour la planète !',
            },
            {
                id: 13,
                text: '🗂️ Évitez les fenêtres multiples\n\nFermer les onglets inutiles sur votre ordinateur permet de réduire sa consommation énergétique de 20 %.',
            },
            {
                id: 14,
                text: '📡 Arrêtez vos box Internet\n\nSaviez-vous qu’une box consomme autant d’électricité qu’un réfrigérateur branché 24h/24 ? Éteignez-la lorsque vous ne l’utilisez pas, c’est un petit geste qui fait une grande différence !',
            },
            {
                id: 15,
                text: '💻 Éteignez votre PC\n\nUn ordinateur en veille consomme 20 % à 40 % de son énergie en marche. Éteignez-le pour éviter ce gaspillage et réduire votre empreinte énergétique.',
            },
            {
                id: 16,
                text: '⚡ Débranchez vos PC\n\nUn ordinateur éteint mais laissé branché consomme encore 70 Wh par jour. Si vous ne l’utilisez pas, pensez à le débrancher pour économiser de l’énergie.',
            },
            {
                id: 17,
                text: '♻️ Gardez vos appareils plus longtemps\n\nGarder un ordinateur ou une tablette 4 ans au lieu de 2 améliore de 50 % son bilan environnemental. Prolongez leur durée de vie pour limiter l’impact écologique.',
            },
            {
                id: 18,
                text: '🛡️ Prenez soin de vos équipements\n\nUtilisez une housse pour transporter votre ordinateur et protégez votre smartphone avec une coque et un film pour prolonger leur durée de vie et limiter le besoin de remplacement.',
            },
            {
                id: 19,
                text: '📦 Optimisez la taille de vos fichiers\n\nCompressez vos pièces jointes et vos documents avant de les envoyer ou de les stocker dans le cloud. Vous pouvez réduire leur taille jusqu’à 80 % et limiter l’impact environnemental de leur stockage.',
            },
            {
                id: 20,
                text: '🔍 Évaluez l’utilité d’une recherche IA\n\nPour des recherches factuelles, préférez les moteurs de recherche classiques, beaucoup moins énergivores que les IA génératives.',
            },
            {
                id: 21,
                text: '🤖 Utilisez la bonne IA\n\nPrivilégiez une IA spécifique (traduction, correction orthographique) plutôt qu’une IA générative lorsque cela est possible, afin de réduire la consommation d’énergie.',
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

    // Calcul dynamique de l'échelle et du pourcentage
    const calculatedMaxScale = Math.max(2500, totalCO2); // Échelle dynamique
    const calculatedProgressPercentage =
        calculatedMaxScale > 0 ? (totalCO2 * 100) / calculatedMaxScale : 0; // % basé sur l'échelle dynamique

    return (
        <>
            <Title name="Mon empreinte" />

            <section className={`${styles.section}`}>
                <CarbonFootprint
                    co2Amount={Number(totalCO2.toFixed(0))}
                    maxScale={calculatedMaxScale} // Utiliser l'échelle calculée
                    progressPercentage={calculatedProgressPercentage} // Utiliser le pourcentage calculé
                    tripComparison={Number((totalCO2 / 47.5).toFixed(0))} // Lyon-Dijon
                />
            </section>
            <Title name="Mes principaux postes d'émissions" />
            <section className={`${styles.section}`}>
                {topEmissions.length > 0 ? (
                    topEmissions.map((emission, index) => (
                        <PosteDEmission
                            key={emission.name}
                            nom={emission.name}
                            pos={index + 1}
                            co2Amount={emission.value}
                        />
                    ))
                ) : (
                    <p className={styles.infoText}>
                        Aucun poste d'émission significatif à afficher.
                    </p>
                )}
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
                    <Button label="Je re-fais le test !" href="/calculator" />
                </div>
            </section>
        </>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div>Chargement...</div>}>
            <BilanPageContent />
        </Suspense>
    );
}
