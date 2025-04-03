import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/home/button';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.intro}>
                    <h1>Calculez votre empreinte numérique dès maintenant</h1>
                    <p>
                        Mon empreinte numérique est un site créé en association
                        avec APRR et l’INSA de Lyon qui vous permet en quelques
                        cliques de connaitre votre empreinte numérique.
                    </p>
                    <div>
                        <Button label="Je fais le test !" href="/calculator" />
                    </div>
                </div>
                <Image
                    aria-hidden
                    src="/home.svg"
                    alt="Home icon"
                    width={500}
                    height={500}
                />
            </section>
            <section className={styles.container}>
                <div className={styles.logos}>
                    <Image
                        aria-hidden
                        src="/insa.svg"
                        alt="INSA icon"
                        width={200}
                        height={200}
                    />
                    <Image
                        aria-hidden
                        src="/aprr.svg"
                        alt="APRR icon"
                        width={200}
                        height={200}
                    />
                </div>
            </section>
        </>
    );
}
