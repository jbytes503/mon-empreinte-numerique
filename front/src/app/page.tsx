import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/home/button';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.intro}>
                    <h1>Calculez votre empreinte numérique </h1>
                    <p>
                        Mon empreinte numérique est un site né d’une
                        collaboration entre APRR et l’INSA de Lyon, qui vous
                        permet en quelques clics de connaitre l’empreinte
                        carbone de vos usages numériques
                    </p>
                    <div>
                        <Button label="Je fais le test !" href="/calculator" />
                    </div>
                </div>
                <Image
                    aria-hidden
                    src="/VisuelHome01.png"
                    alt="Home icon"
                    width={500}
                    height={500}
                />
            </section>
            <section className={styles.container}>
                <div className={styles.logos}>
                    <Link href={'https://www.insa-lyon.fr/'} target="_blank">
                        <Image
                            aria-hidden
                            src="/insa.svg"
                            alt="INSA icon"
                            width={200}
                            height={200}
                        />
                    </Link>
                    <Link href={'https://voyage.aprr.fr/'} target="_blank">
                        <Image
                            aria-hidden
                            src="/aprr.svg"
                            alt="APRR icon"
                            width={200}
                            height={200}
                        />
                    </Link>
                </div>
            </section>
            <section className={styles.facts}>
                <div className={styles.fact}>
                    <div className={styles.factText}>
                        <h3>L’empreinte carbone de vos usages numériques</h3>
                        <p>
                            L'empreinte carbone moyenne d’un français est
                            actuellement de 10 tonnes de CO2 par an, toutes
                            activités confondues. L’objectif fixé par la COP 21
                            est de ramener ce chiffre à 2 tonnes de CO2 par an
                            et par personne d’ici 2050. Les usages numériques
                            représentent un peu plus de 4 % de ces émissions de
                            gaz à effet de serre, soit 400 Kg de CO2 en moyenne
                            par personne et par an. Loin d’être immatériel, le
                            numérique a un impact certain sur notre
                            environnement, à toutes les étapes de son cycle de
                            vie. (Source : Ademe)
                        </p>
                        <div>
                            <Button label="En savoir plus" href="/learn-more" />
                        </div>
                    </div>
                    <Image
                        aria-hidden
                        src="/VisuelHome02.png"
                        alt="Illustration emoji"
                        width={350}
                        height={350}
                    />
                </div>
            </section>
        </>
    );
}
