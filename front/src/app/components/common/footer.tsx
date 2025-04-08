import { ReactNode } from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.infoTitle}>
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Mon Empreinte numérique
                    </p>
                    <div className={styles.infoText}>
                        <a href="test">L'empreinte numerique</a>
                        <a href="about">À propos de nous</a>
                    </div>
                </div>
                <div className={styles.contact}>Contactez-nous:</div>
                <p>
                    Vous pouvez ouvrir une <strong>Pull Request</strong> sur le{' '}
                    <a href="https://github.com/jbytes503/mon-empreinte-numerique-du-projet">
                        GitHub
                    </a>{' '}
                    du projet pour nous contacter.
                </p>
            </div>
            <div className={styles.footerDivider} />

            <p>© 2023 Mon Empreinte Numérique. Tous droits réservés.</p>
        </footer>
    );
};
export default Footer;
