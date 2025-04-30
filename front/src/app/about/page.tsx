import AuthorCard from '../components/about/card';
import { FaLinkedin } from 'react-icons/fa';
import styles from './page.module.css';
import Title from '../components/titles';

export default async function Page() {
    return (
        <>
            <Title name="À propos de nous" />
            <section className={`${styles.intro} ${styles.section}`}>
                <p>
                    Étudiants à l’INSA de Lyon, nous avons développé en
                    collaboration avec APRR cette plateforme visant à promouvoir
                    un numérique plus responsable. Les collaborateurs d’APRR et
                    de l’ensemble des concessions autoroutières d’Eiffage en
                    France sont pleinement mobilisés pour offrir aux
                    automobilistes une autoroute toujours plus sûre, plus fluide
                    et plus responsable à travers le développement d’initiatives
                    innovantes pour accompagner la transition écologique.
                </p>
                <p>
                    Dans cette démarche, nous avons conçu un outil simple et
                    intuitif permettant à chacun d’évaluer l’empreinte carbone
                    liée à ses appareils numériques (ordinateurs, smartphones)
                    et aux services digitaux utilisés quotidiennement, tant dans
                    la sphère professionnelle que privée. Convaincus que les
                    bonnes pratiques commencent par la sensibilisation, nous
                    mettons également à disposition des guides et référentiels
                    pratiques sur les gestes écoresponsables applicables au
                    numérique. Notre objectif est d’aider les utilisateurs à
                    mieux comprendre l’impact environnemental de leurs usages
                    numériques et à adopter des habitudes plus respectueuses de
                    la planète.
                </p>
                <p>
                    À travers cet outil et nos actions pédagogiques, nous nous
                    inscrivons comme des acteurs engagés pour un avenir
                    numérique durable et respectueux de l’environnement.
                </p>
            </section>

            <section className={`${styles.authors} ${styles.section}`}>
                <AuthorCard
                    name="Jassir Habba"
                    title="Étudiant ingénieur en informatique"
                    description="Étudiant développeur passionné, avec une expertise en C, C++ et Java, créant des solutions logicielles robustes et explorant des concepts de programmation avancés."
                    icon={<FaLinkedin size={32} color="var(--color-2)" />}
                    url="https://www.linkedin.com/in/jassir-habba/"
                />
                <AuthorCard
                    name="Simon Perret"
                    title="Étudiant ingénieur en informatique"
                    description="Étudiant passionné par la data et les projets open source, engagé pour un numérique responsable."
                    icon={<FaLinkedin size={32} color="var(--color-2)" />}
                    url="https://www.linkedin.com/in/perretsimon/"
                />
                <AuthorCard
                    name="Hazim Asri"
                    title="Étudiant ingénieur en informatique"
                    description="Étudiant en avant-dernière année à l’INSA Lyon en informatique, passionné par le développement logiciel et l’intelligence artificielle."
                    icon={<FaLinkedin size={32} color="var(--color-2)" />}
                    url="https://www.linkedin.com/in/hazim-asri-307989221/"
                />
                <AuthorCard
                    name="Mateo Carvajal"
                    title="Étudiant ingénieur en informatique"
                    description="Étudiant en double diplôme à l’INSA Lyon, avec une passion pour le développement logiciel et l’intelligence artificielle. Je suis motivé par l’impact positif de la technologie sur la société."
                    icon={<FaLinkedin size={32} color="var(--color-2)" />}
                    url="https://www.linkedin.com/in/mateo-carvajal-a02877248/"
                />
                <AuthorCard
                    name="José Southerland"
                    title="Étudiant ingénieur en informatique"
                    description="En double diplôme à l’INSA Lyon, avec experience en développement logiciel, bases de données et intelligence artificielle, avec un intérêt marqué pour l’innovation technologique."
                    icon={<FaLinkedin size={32} color="var(--color-2)" />}
                    url="https://www.linkedin.com/in/jsoutherlands/"
                />
                <AuthorCard
                    name="Santiago Forrero Gutiérrez"
                    title="Étudiant ingénieur en informatique (double diplôme INSA Lyon / Universidad de los Andes)"
                    description="Passionné par le développement logiciel et l'analyse de données. Intéressé à concilier innovation technique et impact concret, à travers des projets pluridisciplinaires en équipe."
                    icon={<FaLinkedin size={32} color="var(--color-2)" />}
                    url="https://www.linkedin.com/in/santiago-forero-gutierrez/"
                />
            </section>
        </>
    );
}
