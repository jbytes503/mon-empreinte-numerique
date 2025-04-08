'use client';

import React from 'react';
import styles from './question.module.css';

interface CheckboxOption {
    id: string;
    value: string;
    label: string;
}

interface CheckboxGroupProps {
    label: string;
    name: string;
    options: CheckboxOption[];
    selectedValues: string[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    label,
    name,
    options,
    selectedValues,
    onChange,
}) => {
    return (
        <div className={styles.formQuestion}>
            <label className={styles.checkboxGroupLabel}>{label}</label>
            <div className={styles.checkboxGroup}>
                {options.map((option) => (
                    <div key={option.id} className={styles.checkboxItem}>
                        <input
                            type="checkbox"
                            id={option.id}
                            name={name}
                            value={option.value}
                            checked={selectedValues.includes(option.value)}
                            onChange={onChange}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckboxGroup;
