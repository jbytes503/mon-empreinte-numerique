import React from 'react';
import { Metadata } from 'next';
import styles from './page.module.css';
import Image from 'next/image';
import Title from '../components/titles';
import DispositifCard from '../components/learn-more/card';

export const metadata: Metadata = {
    title: "L'empreinte numérique",
    description: "En savoir plus sur l'empreinte numérique",
};

export default async function Page() {
    return (
        <main className="page">
            <div className="container">
                <Title name="L'empreinte numérique" />
                <div className={styles.header}>
                    <div className='header-description'>
                        <p>
                        L’empreinte numérique désigne l’ensemble des 
                        impacts environnementaux liés à l’utilisation 
                        des technologies numériques. Elle est particulièrement 
                        visible à travers l’empreinte carbone générée par nos 
                        dispositifs électroniques : ordinateurs, téléphones, 
                        tablettes, objets connectés, mais aussi les réseaux et 
                        les centres de données qui les soutiennent. 
                        </p>
                        <p>
                        Cet impact commence bien avant l’allumage de nos appareils. 
                        La fabrication d’un simple smartphone ou d’un ordinateur 
                        nécessite l’extraction de ressources naturelles, souvent 
                        rares, ainsi que des processus industriels complexes et 
                        énergivores. L’assemblage, le transport et la distribution 
                        à travers le monde engendrent à eux seuls une quantité 
                        importante d’émissions de gaz à effet de serre. À titre 
                        d’exemple, la majorité de l’empreinte carbone d’un appareil 
                        est déjà produite avant même sa première utilisation.
                        </p>
                        <p>
                        L’utilisation quotidienne de ces équipements continue 
                        d’alimenter cette empreinte. Chaque action numérique 
                        (regarder une vidéo, envoyer un message, effectuer une 
                        recherche, sauvegarder un fichier) repose sur un vaste 
                        réseau d’infrastructures : antennes, câbles sous-marins, 
                        serveurs, data centers… Tous ces systèmes consomment de 
                        l’électricité en permanence, souvent issue de sources 
                        fossiles, et participent donc aux émissions de CO₂. 
                        Même un geste aussi simple que l’envoi d’un e-mail 
                        peut représenter une dépense énergétique non négligeable 
                        lorsqu’il est multiplié à grande échelle.
                        </p>
                    </div>
                        <Image
                            src="/images/technologie-verte.png"
                            alt="Learn more icon"
                            width={250}
                            height={250}
                        />
                </div>
                <Title name="L'empreinte numérique par dispositif" />
                <div className={styles.cards}>
                    <DispositifCard
                        title="Ordinateur"
                        description="Sa fabrication nécessite des métaux rares et consomme beaucoup d’énergie, tandis que son utilisation et son recyclage posent des défis écologiques."
                        image="/images/ordinateur.png"
                    />
                    <DispositifCard
                        title="Smartphone"
                        description="Très gourmand en ressources dès sa fabrication, il a une durée de vie limitée et son recyclage reste insuffisant."
                        image="/images/smartphone.png"
                    />
                    <DispositifCard
                        title="Tablette"
                        description="Moins énergivore qu’un ordinateur, elle dépend fortement des services en ligne et est difficile à recycler."
                        image="/images/tablette.png"
                    />
                </div>
                <div className={styles.cards}>
                    <DispositifCard
                        title="Télévision"
                        description="Sa fabrication et son utilisation, notamment le streaming, génèrent une empreinte carbone importante."
                        image="/images/tv.png"
                    />
                    <DispositifCard
                        title="Console de Jeux Vidéo"
                        description="Son impact environnemental vient de sa consommation électrique et de l’obsolescence rapide des modèles."
                        image="/images/console.png"
                    />
                </div>
                <Title name="L'empreinte numérique des services web et cloud" />
                <div className={styles.cards}>
                    <DispositifCard
                        title="Stockage et cloud computing"
                        description="Le stockage et le traitement dans le cloud nécessitent des infrastructures importantes consommant constamment de l'énergie, ce qui génère une empreinte carbone significative."
                        image="/images/cloud.png"
                    />
                    <DispositifCard
                        title="Services de messagerie et communication"
                        description="L'envoi de messages, d’e-mails ou les appels vidéo nécessitent des serveurs et des centres de données, générant ainsi des émissions à cause d’une consommation électrique continue."
                        image="/images/messagerie.png"
                    />
                </div>
                <div className={styles.cards}>
                    <DispositifCard
                        title="Réseaux sociaux"
                        description="Publier des photos, des vidéos et garder toujours disponibles les publications implique l'utilisation intensive de centres de données, augmentant indirectement les émissions de CO₂."
                        image="/images/reseaux_sociaux.png"
                    />
                    <DispositifCard
                        title="Service de streaming et divertissement"
                        description=" La lecture constante de vidéos et de musique en streaming consomme beaucoup d'énergie en raison du transfert important de données, ce qui augmente considérablement l'empreinte carbone."
                        image="/images/streaming.png"
                    />
                </div>
            </div>
        </main>
    );
}
