'use client';

import React from 'react';
import styles from './question.module.css';

interface NumericInputProps {
    id: string;
    label: string;
    min?: number;
    max?: number;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumericInput: React.FC<NumericInputProps> = ({
    id,
    label,
    min,
    max,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id}>{label}</label>
            <input
                type="number"
                id={id}
                name={id}
                min={min}
                max={max}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default NumericInput;
