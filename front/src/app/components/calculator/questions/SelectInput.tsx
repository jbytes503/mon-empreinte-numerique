'use client';

import React from 'react';
import styles from './question.module.css';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectInputProps {
    id: string;
    label: string;
    options: SelectOption[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultValue?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
    id,
    label,
    options,
    value,
    onChange,
    defaultValue,
}) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                value={value}
                onChange={onChange}
                defaultValue={defaultValue}
            >
                {/* Option par défaut si aucune valeur n'est sélectionnée ou fournie */}
                {!defaultValue && <option value="">-- Sélectionnez --</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
