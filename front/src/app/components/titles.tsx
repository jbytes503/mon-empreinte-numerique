import { ReactNode } from 'react';
import styles from './titles.module.css';

interface TitleProps {
    name: string;
}

const Title = ({ name }: TitleProps) => {
    return (
        <div className="hola">
            <h1 className={styles.title}>{name}</h1>
        </div>
    );
};

export default Title;
