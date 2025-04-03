import AuthorCard from '../components/about/card';
import { FaLinkedin } from 'react-icons/fa';
import CarbonFootprint from '../components/result/result';
import styles from './page.module.css';

export default async function Page() {
    return (
        <>
            <h1>À propos de nous</h1>
            <section className={styles.intro}>
                <p>
                    APRR, en collaboration avec des étudiants de l'INSA Lyon,
                    nous avons développé une plateforme visant à promouvoir un
                    numérique plus responsable. En tant que leader dans la
                    gestion et l'exploitation d'un vaste réseau autoroutier,
                    nous nous engageons activement dans la réduction de notre
                    empreinte environnementale et le développement d’initiatives
                    innovantes pour accompagner la transition écologique.
                </p>
                <p>
                    Dans cette démarche, nous avons conçu un outil simple et
                    intuitif permettant à chacun d’évaluer l'empreinte carbone
                    liée à ses appareils numériques (ordinateurs, smartphones)
                    et aux services digitaux utilisés quotidiennement.
                    Convaincus que les bonnes pratiques commencent par la
                    sensibilisation, nous mettons également à disposition des
                    guides et référentiels pratiques sur les gestes
                    écoresponsables applicables au numérique. Notre objectif est
                    d'aider les utilisateurs à mieux comprendre l'impact
                    environnemental de leurs usages numériques et à adopter des
                    habitudes plus respectueuses de la planète.
                </p>
                <p>
                    À travers cet outil et nos nombreuses actions pédagogiques,
                    nous nous inscrivons comme des acteurs engagés pour un
                    avenir numérique durable et respectueux de l'environnement.
                </p>
            </section>

            <section className={styles.authors}>
                <AuthorCard
                    name="Jassir Habba"
                    title="Étudiant ingénieur en informatique"
                    description="Promouvoir un numérique responsable et réduire notre empreinte environnementale."
                    icon={<FaLinkedin size={32} color="#0077b5" />}
                    url="https://www.linkedin.com/in/jassir-habba/"
                />
                <AuthorCard
                    name="Simon Perret"
                    title="Étudiant ingénieur en informatique"
                    description="Innovation, responsabilité, durabilité et sensibilisation."
                    icon={<FaLinkedin size={32} color="#0077b5" />}
                    url="https://www.linkedin.com/in/perretsimon/"
                />
                <AuthorCard
                    name="Hazim Asri"
                    title="Étudiant ingénieur en informatique"
                    description="Accompagner la transition écologique à travers des actions concrètes."
                    icon={<FaLinkedin size={32} color="#0077b5" />}
                    url="https://www.linkedin.com/in/hazim-asri-307989221/"
                />
                <AuthorCard
                    name="Mateo Carvajal"
                    title="Étudiant ingénieur en informatique"
                    description="Accompagner la transition écologique à travers des actions concrètes."
                    icon={<FaLinkedin size={32} color="#0077b5" />}
                    url="https://www.linkedin.com/in/mateo-carvajal-a02877248/"
                />
                <AuthorCard
                    name="José Southerland"
                    title="Étudiant ingénieur en informatique"
                    description="Accompagner la transition écologique à travers des actions concrètes."
                    icon={<FaLinkedin size={32} color="#0077b5" />}
                    url="https://www.linkedin.com/in/jsoutherlands/"
                />
                <AuthorCard
                    name="Santiago Forrero Gutiérrez"
                    title="Étudiant ingénieur en informatique"
                    description="Accompagner la transition écologique à travers des actions concrètes."
                    icon={<FaLinkedin size={32} color="#0077b5" />}
                    url="https://www.linkedin.com/in/santiago-forero-gutierrez/"
                />
            </section>
        </>
    );
}
