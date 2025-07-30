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
    const percentageOfTarget = Math.min((co2Amount / 2000) * 100, 100);
    return (
        <div className={styles['carbon-footprint-container']}>
            <div className={styles['main-metric']}>
                <div className={styles['co2-amount']}>
                    {co2Amount} kg de CO2e
                </div>
                <div className={styles['time-period']}>par an</div>
                <p style={{ color: 'var(--color-2)' }}>
                    {' '}
                    <em>(Estimations basées sur les données de l’ADEME.)</em>
                </p>
            </div>
            <hr className={styles['custom-hr']} />

            <div className={styles['scale-container']}>
                <div className={styles['scale-min']}>0</div>
                <div className={styles['scale-bar']}>
                    <div
                        className={styles['scale-progress']}
                        style={{ width: `${percentageOfTarget}%` }}
                    >
                        <span className={styles['scale-label']}>
                            {Math.round(percentageOfTarget)}%
                        </span>
                    </div>
                </div>
                <div className={styles['scale-max']}>2 tonnes</div>
            </div>
            <div className={styles['comparison']}>
                Cette part correspond uniquement à vos usages numériques, et
                s’inscrit dans le plafond de 2 tonnes de CO₂ par an à ne pas
                dépasser pour <strong>l’ensemble de vos activités</strong> :
                transport, logement, alimentation, consommation, etc.
                <br />
                <em>
                    Ce seuil représente l’objectif individuel fixé pour 2050
                    afin de limiter le réchauffement climatique à +1,5 °C.
                </em>
            </div>
            <hr className={styles['custom-hr']} />
            <div className={styles['comparison']}>
                En un an, votre empreinte carbone numérique équivaut à{' '}
                {tripComparison} voyages en voiture de Lyon à Dijon !
                <span className={styles['smileys']}>🚗💨</span>
            </div>
        </div>
    );
};

export default CarbonFootprint;
