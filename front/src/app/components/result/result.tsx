import styles from './result.module.css';

interface CarbonFootprintProps {
    co2Amount: number;
    maxScale: number;
    progressPercentage: number;
    tripComparison: number;
}

const CarbonFootprint: React.FC<CarbonFootprintProps> = ({
    co2Amount = 7,
    maxScale = 30,
    progressPercentage = 70,
    tripComparison = 46,
}) => {
    return (
        <div className={styles['carbon-footprint-container']}>
            <div className={styles['main-metric']}>
                <div className={styles['co2-amount']}>
                    {co2Amount} kg de CO2e
                </div>
                <div className={styles['time-period']}>par an</div>
            </div>

            <hr className={styles['custom-hr']} />

            <div className={styles['scale-container']}>
                <div className={styles['scale-min']}>0</div>
                <div className={styles['scale-bar']}>
                    <div
                        className={styles['scale-progress']}
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
                <div className={styles['scale-max']}>{maxScale}</div>
            </div>

            <div className={styles['comparison']}>
                En un an, votre empreinte carbone numérique équivaut à{' '}
                {tripComparison} voyages en voiture de Lyon à Dijon !
                <span className={styles['smileys']}>🚗💨</span>
            </div>
        </div>
    );
};

export default CarbonFootprint;
