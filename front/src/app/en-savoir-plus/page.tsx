import React from 'react';
import { Metadata } from 'next';
import styles from './page.module.css';
// import Image from 'next/image';
import Title from '../components/titles';
import DispositifCard from '../components/en-savoir-plus/card';

export const metadata: Metadata = {
	title: 'L\'empreinte numérique',
	description: 'En savoir plus sur l\'empreinte numérique',
};

export default async function Page() {
	return (
		<main className="page">
			<div className="container">
				<Title name="L'empreinte numérique"/>
				<div className={styles.header}>
					<div>
						<p>APRR, en collaboration avec des étudiants de l'INSA Lyon, nous avons développé une plateforme visant à promouvoir un numérique plus responsable. En tant que leader dans la gestion et l'exploitation d'un vaste réseau autoroutier, nous nous engageons activement dans la réduction de notre empreinte environnementale et le développement d’initiatives innovantes pour accompagner la transition écologique.</p>
						<p>Dans cette démarche, nous avons conçu un outil simple et intuitif permettant à chacun d’évaluer l'empreinte carbone liée à ses appareils numériques (ordinateurs, smartphones) et aux services digitaux utilisés quotidiennement. Convaincus que les bonnes pratiques commencent par la sensibilisation, nous mettons également à disposition des guides et référentiels pratiques sur les gestes écoresponsables applicables au numérique. Notre objectif est d'aider les utilisateurs à mieux comprendre l'impact environnemental de leurs usages numériques et à adopter des habitudes plus respectueuses de la planète.</p>
						<p>À travers cet outil et nos nombreuses actions pédagogiques, nous nous inscrivons comme des acteurs engagés pour un avenir numérique durable et respectueux de l'environnement.</p>
					</div>
					<div>
						<img src="/images/technologie-verte.png" alt="L'empreinte numérique" className={styles.image} />
					</div>
				</div>
				<Title name="L'empreinte numérique par dispositif"/>
				<div className={styles.cards}>
					<DispositifCard
						title="Ordinateur"
						description="Sa fabrication nécessite des métaux rares et consomme beaucoup d’énergie, tandis que son utilisation et son recyclage posent des défis écologiques."
						image='/images/ordinateur.png'
					/>
					<DispositifCard
						title="Smartphone"
						description="Très gourmand en ressources dès sa fabrication, il a une durée de vie limitée et son recyclage reste insuffisant."
						image='/images/smartphone.png'
					/>
					<DispositifCard
						title="Tablette"
						description="Moins énergivore qu’un ordinateur, elle dépend fortement des services en ligne et est difficile à recycler."
						image='/images/tablette.png'
					/>
				</div>
				<div className={styles.cards}>
					<DispositifCard
						title="Télévision"
						description="Sa fabrication et son utilisation, notamment le streaming, génèrent une empreinte carbone importante."
						image='/images/tv.png'
					/>
					<DispositifCard
						title="Console de Jeux Vidéo"
						description="Son impact environnemental vient de sa consommation électrique et de l’obsolescence rapide des modèles."
						image='/images/console.png'
					/>
				</div>
				<Title name="L'empreinte numérique des services web et cloud"/>
					<div className={styles.cards}>
						<DispositifCard
							title="Stockage et cloud computing"
							description="Le stockage et le traitement dans le cloud nécessitent des infrastructures importantes consommant constamment de l'énergie, ce qui génère une empreinte carbone significative."
							image='/images/cloud.png'
						/>
						<DispositifCard
							title="Services de messagerie et communication"
							description="L'envoi de messages, d’e-mails ou les appels vidéo nécessitent des serveurs et des centres de données, générant ainsi des émissions à cause d’une consommation électrique continue."
							image='/images/messagerie.png'
						/>
					</div>
					<div className={styles.cards}>
						<DispositifCard
							title="Réseaux sociaux"
							description="Publier des photos, des vidéos et garder toujours disponibles les publications implique l'utilisation intensive de centres de données, augmentant indirectement les émissions de CO₂."
							image='/images/reseaux_sociaux.png'
						/>
						<DispositifCard
							title="Service de streaming et divertissement"
							description=" La lecture constante de vidéos et de musique en streaming consomme beaucoup d'énergie en raison du transfert important de données, ce qui augmente considérablement l'empreinte carbone."
							image='/images/streaming.png'
						/>
				</div>
			</div>
		</main>
	);
}