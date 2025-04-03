import AuthorCard from '../components/about/card';

export default async function Page() {
    return (
        <>
            <h1>À propos de nous</h1>
            <p>
                APRR, en collaboration avec des étudiants de l'INSA Lyon, nous
                avons développé une plateforme visant à promouvoir un numérique
                plus responsable. En tant que leader dans la gestion et
                l'exploitation d'un vaste réseau autoroutier, nous nous
                engageons activement dans la réduction de notre empreinte
                environnementale et le développement d’initiatives innovantes
                pour accompagner la transition écologique.
            </p>
            <p>
                Dans cette démarche, nous avons conçu un outil simple et
                intuitif permettant à chacun d’évaluer l'empreinte carbone liée
                à ses appareils numériques (ordinateurs, smartphones) et aux
                services digitaux utilisés quotidiennement. Convaincus que les
                bonnes pratiques commencent par la sensibilisation, nous mettons
                également à disposition des guides et référentiels pratiques sur
                les gestes écoresponsables applicables au numérique. Notre
                objectif est d'aider les utilisateurs à mieux comprendre
                l'impact environnemental de leurs usages numériques et à adopter
                des habitudes plus respectueuses de la planète.
            </p>
            <p>
                À travers cet outil et nos nombreuses actions pédagogiques, nous
                nous inscrivons comme des acteurs engagés pour un avenir
                numérique durable et respectueux de l'environnement.
            </p>

            <div className="">
                <AuthorCard
                    name="Jassir Habba"
                    title="Notre mission"
                    description="Promouvoir un numérique responsable et réduire notre empreinte environnementale."
                    icon="/images/mission.png"
                />
                <AuthorCard
                    name="Jassir Habba"
                    title="Nos valeurs"
                    description="Innovation, responsabilité, durabilité et sensibilisation."
                    icon="/images/valeurs.png"
                />
                <AuthorCard
                    name="Jassir Habba"
                    title="Notre engagement"
                    description="Accompagner la transition écologique à travers des actions concrètes."
                    icon="/images/engagement.png"
                />
            </div>
        </>
    );
}
