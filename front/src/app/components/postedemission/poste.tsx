import styles from './poste.module.css';
interface PosteDEmissionProps {
    co2Amount: number;
    pos: number;
    nom: string;
}
const PosteDEmission = ({ co2Amount, pos, nom }: PosteDEmissionProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <p className={styles.title}>
                    {pos}. {nom}
                </p>
                <p className={styles.amount}>{co2Amount} kg CO2e par an</p>
            </div>
        </div>
    );
};

export default PosteDEmission;
