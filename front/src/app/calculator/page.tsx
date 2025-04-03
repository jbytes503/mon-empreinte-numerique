'use client';

import { useState } from 'react';
import styles from './page.module.css';
import QuestionCard from '../components/calculator/card';
import {
    calculateSmartphoneFootprint,
    calculateComputerFootprint,
    calculateTabletFootprint,
    calculateTVFootprint,
    calculateConsoleFootprint,
} from '../../utils/carbonCalculator';

interface FootprintResult {
    totalFootprint: number;
}
interface SmartphoneFormData {
    count: string;
    brands: string[];
    changeRate: string;
    unused: string;
}

export default function Page() {
    const [smartphoneResult, setSmartphoneResult] =
        useState<FootprintResult | null>(null);

    const [smartphoneData, setSmartphoneData] = useState<SmartphoneFormData>({
        count: '',
        brands: [],
        changeRate: '',
        unused: '',
    });

    // Fonction pour mettre à jour les valeurs du formulaire smartphone
    const handleSmartphoneInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { id, value } = e.target;

        if (id === 'smartphone-count') {
            setSmartphoneData((prev) => ({ ...prev, count: value }));
        } else if (id === 'smartphone-change-rate') {
            setSmartphoneData((prev) => ({ ...prev, changeRate: value }));
        } else if (id === 'smartphone-unused') {
            setSmartphoneData((prev) => ({ ...prev, unused: value }));
        }
    };

    const handleSmartphoneBrandChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value, checked } = e.target;

        setSmartphoneData((prev) => {
            if (checked) {
                return { ...prev, brands: [...prev.brands, value] };
            } else {
                return {
                    ...prev,
                    brands: prev.brands.filter((brand) => brand !== value),
                };
            }
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Calculateur d'empreinte carbone numérique
            </h1>

            <div className={styles.cardContainer}>
                <QuestionCard
                    number="01"
                    title="Smartphones"
                    description="Évaluez l'impact environnemental de votre appareil, de sa fabrication à son utilisation quotidienne."
                    isOpen={true}
                    isFilled={!!smartphoneResult}
                    onSave={calculateSmartphoneFootprint}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="smartphone-count">
                            Combien de smartphones possédez-vous ?
                        </label>
                        <input
                            type="number"
                            id="smartphone-count"
                            min="0"
                            placeholder="Nombre"
                            defaultValue={smartphoneData.count}
                            onChange={handleSmartphoneInputChange}
                        />
                    </div>

                    <div className={styles.formQuestion}>
                        <label>
                            Quelles marques de smartphones utilisez-vous ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="brand-apple"
                                    name="smartphone-brand"
                                    value="apple"
                                    defaultChecked={smartphoneData.brands.includes(
                                        'apple'
                                    )}
                                    onChange={handleSmartphoneBrandChange}
                                />
                                <label htmlFor="brand-apple">Apple</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="brand-samsung"
                                    name="smartphone-brand"
                                    value="samsung"
                                    defaultChecked={smartphoneData.brands.includes(
                                        'samsung'
                                    )}
                                    onChange={handleSmartphoneBrandChange}
                                />
                                <label htmlFor="brand-samsung">Samsung</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="brand-xiaomi"
                                    name="smartphone-brand"
                                    value="xiaomi"
                                    defaultChecked={smartphoneData.brands.includes(
                                        'xiaomi'
                                    )}
                                    onChange={handleSmartphoneBrandChange}
                                />
                                <label htmlFor="brand-xiaomi">Xiaomi</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="brand-huawei"
                                    name="smartphone-brand"
                                    value="huawei"
                                    defaultChecked={smartphoneData.brands.includes(
                                        'huawei'
                                    )}
                                    onChange={handleSmartphoneBrandChange}
                                />
                                <label htmlFor="brand-huawei">Huawei</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="brand-oppo"
                                    name="smartphone-brand"
                                    value="oppo"
                                    defaultChecked={smartphoneData.brands.includes(
                                        'oppo'
                                    )}
                                    onChange={handleSmartphoneBrandChange}
                                />
                                <label htmlFor="brand-oppo">Oppo</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="brand-autre"
                                    name="smartphone-brand"
                                    value="autre"
                                    defaultChecked={smartphoneData.brands.includes(
                                        'autre'
                                    )}
                                    onChange={handleSmartphoneBrandChange}
                                />
                                <label htmlFor="brand-other">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="smartphone-change-rate">
                            À quel rythme changez-vous de smartphone ?
                        </label>
                        <input
                            type="number"
                            id="smartphone-change-rate"
                            min="0"
                            placeholder="Fréquence en années"
                            defaultValue={smartphoneData.changeRate}
                            onChange={handleSmartphoneInputChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="smartphone-unused">
                            Combien de smartphones conservez-vous et que vous
                            n'utilisez plus ?
                        </label>
                        <input
                            type="number"
                            id="smartphone-unused"
                            min="0"
                            placeholder="Nombre"
                            defaultValue={smartphoneData.unused}
                            onChange={handleSmartphoneInputChange}
                        />
                    </div>
                </QuestionCard>

                <QuestionCard
                    number="02"
                    title="Ordinateurs"
                    description="Évaluez l'impact environnemental de vos ordinateurs fixes et portables."
                    isOpen={false}
                    isFilled={false}
                    onSave={calculateComputerFootprint}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="computer-count">
                            Combien d'ordinateurs utilisez-vous ?
                        </label>
                        <input
                            type="number"
                            id="computer-count"
                            min="0"
                            placeholder="Nombre"
                        />
                    </div>

                    <div className={styles.formQuestion}>
                        <label>Quel type d'ordinateur utilisez-vous ?</label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="portable"
                                    name="computer-type"
                                    value="portable"
                                />
                                <label htmlFor="portable">
                                    Ordinateur portable
                                </label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="bureau"
                                    name="computer-type"
                                    value="bureau"
                                />
                                <label htmlFor="bureau">
                                    Ordinateur fixe professionnel
                                </label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="perso"
                                    name="computer-type"
                                    value="perso"
                                />
                                <label htmlFor="perso">
                                    Ordinateur fixe personnel
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formQuestion}>
                        <label>
                            Quelles marques d'ordinateurs utilisez-vous ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="aucun"
                                    name="computer-brand"
                                    value="aucun"
                                />
                                <label htmlFor="aucun">Aucun</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="apple-laptop"
                                    name="computer-brand"
                                    value="apple"
                                />
                                <label htmlFor="apple-laptop">Apple</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="dell-laptop"
                                    name="computer-brand"
                                    value="dell"
                                />
                                <label htmlFor="dell-laptop">Dell</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="hp-laptop"
                                    name="computer-brand"
                                    value="hp"
                                />
                                <label htmlFor="hp-laptop">HP</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="lenovo-laptop"
                                    name="computer-brand"
                                    value="lenovo"
                                />
                                <label htmlFor="lenovo-laptop">Lenovo</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="asus-laptop"
                                    name="computer-brand"
                                    value="asus"
                                />
                                <label htmlFor="asus-laptop">Asus</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="acer-laptop"
                                    name="computer-brand"
                                    value="acer"
                                />
                                <label htmlFor="acer-laptop">Acer</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-laptop"
                                    name="computer-brand"
                                    value="autre"
                                />
                                <label htmlFor="autre-laptop">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="computer-change-rate">
                            À quel rythme changez-vous d'ordinateur ?
                        </label>
                        <input
                            type="number"
                            id="computer-change-rate"
                            min="0"
                            placeholder="Fréquence en années"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="computer-unused">
                            Combien d'ordinateurs avez-vous et que vous
                            n'utilisez plus ?
                        </label>
                        <input
                            type="number"
                            id="computer-unused"
                            min="0"
                            placeholder="Nombre"
                        />
                    </div>
                </QuestionCard>

                <QuestionCard
                    number="03"
                    title="Tablettes"
                    description="Évaluez l'impact environnemental de vos tablettes."
                    isOpen={false}
                    isFilled={false}
                    onSave={calculateTabletFootprint}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="tablet-count">
                            Combien de tablettes possédez-vous actuellement ?
                        </label>
                        <input
                            type="number"
                            id="tablet-count"
                            min="0"
                            placeholder="Nombre"
                        />
                    </div>

                    <div className={styles.formQuestion}>
                        <label>
                            Quelles marques de tablettes utilisez-vous ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="tablet-none"
                                    name="tablet-brand"
                                    value="aucun"
                                />
                                <label htmlFor="tablet-none">Aucun</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="apple-tablet"
                                    name="tablet-brand"
                                    value="apple"
                                />
                                <label htmlFor="apple-tablet">Apple</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="samsung-tablet"
                                    name="tablet-brand"
                                    value="samsung"
                                />
                                <label htmlFor="samsung-tablet">Samsung</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="huawei-tablet"
                                    name="tablet-brand"
                                    value="huawei"
                                />
                                <label htmlFor="huawei-tablet">Huawei</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="lenovo-tablet"
                                    name="tablet-brand"
                                    value="lenovo"
                                />
                                <label htmlFor="lenovo-tablet">Lenovo</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-tablet"
                                    name="tablet-brand"
                                    value="autre"
                                />
                                <label htmlFor="autre-tablet">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="tablet-change-rate">
                            À quel rythme changez-vous de tablette ?
                        </label>
                        <input
                            type="number"
                            id="tablet-change-rate"
                            min="0"
                            placeholder="Fréquence en années"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="tablet-unused">
                            Combien de tablettes conservez-vous et que vous
                            n'utilisez plus ?
                        </label>
                        <input
                            type="number"
                            id="tablet-unused"
                            min="0"
                            placeholder="Nombre"
                        />
                    </div>
                </QuestionCard>

                <QuestionCard
                    number="04"
                    title="Télévision"
                    description="Évaluez l'impact environnemental de vos télévisions."
                    isOpen={false}
                    isFilled={false}
                    onSave={calculateTVFootprint}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="tv-count">
                            Combien de télévisions possédez-vous actuellement ?
                        </label>
                        <input
                            type="number"
                            id="tv-count"
                            min="0"
                            placeholder="Nombre"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="tv-change-rate">
                            À quel rythme changez-vous de télévision ?
                        </label>
                        <input
                            type="number"
                            id="tv-change-rate"
                            min="0"
                            placeholder="Fréquence en années"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="tv-daily-hours">
                            Combien d'heures par jour regardez-vous la
                            télévision ?
                        </label>
                        <input
                            type="number"
                            id="tv-daily-hours"
                            min="0"
                            max="24"
                            placeholder="Nombre d'heures"
                        />
                    </div>
                </QuestionCard>

                <QuestionCard
                    number="05"
                    title="Console de jeux"
                    description="Évaluez l'impact environnemental de vos consoles de jeux vidéo."
                    isOpen={false}
                    isFilled={false}
                    onSave={calculateConsoleFootprint}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="console-count">
                            Combien de consoles de jeu possédez-vous ?
                        </label>
                        <input
                            type="number"
                            id="console-count"
                            min="0"
                            placeholder="Nombre"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="console-change-rate">
                            À quel rythme changez-vous de console ?
                        </label>
                        <input
                            type="number"
                            id="console-change-rate"
                            min="0"
                            placeholder="Fréquence en années"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="console-weekly-hours">
                            Combien d'heures par semaine utilisez-vous votre
                            console ?
                        </label>
                        <input
                            type="number"
                            id="console-weekly-hours"
                            min="0"
                            max="168"
                            placeholder="Nombre d'heures"
                        />
                    </div>
                </QuestionCard>

                <QuestionCard
                    number="06"
                    title="Messagerie et réseaux sociaux"
                    description="Évaluez l'impact environnemental de votre utilisation des messageries et réseaux sociaux."
                    isFilled={false}
                    isOpen={false}
                >
                    <div className={styles.formQuestion}>
                        <label>
                            Quels services de messagerie personnelle
                            utilisez-vous ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="messaging-none"
                                    name="messaging-service"
                                    value="aucun"
                                />
                                <label htmlFor="messaging-none">Aucun</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="whatsapp"
                                    name="messaging-service"
                                    value="whatsapp"
                                />
                                <label htmlFor="whatsapp">WhatsApp</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="telegram"
                                    name="messaging-service"
                                    value="telegram"
                                />
                                <label htmlFor="telegram">Telegram</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="messenger"
                                    name="messaging-service"
                                    value="messenger"
                                />
                                <label htmlFor="messenger">Messenger</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="imessage"
                                    name="messaging-service"
                                    value="imessage"
                                />
                                <label htmlFor="imessage">iMessage</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="sms"
                                    name="messaging-service"
                                    value="sms"
                                />
                                <label htmlFor="sms">SMS</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-messagerie"
                                    name="messaging-service"
                                    value="autre"
                                />
                                <label htmlFor="autre-messagerie">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="messages-per-day">
                            Combien de messages personnels envoyez-vous par jour
                            en moyenne ?
                        </label>
                        <select id="messages-per-day">
                            <option value="">Sélectionnez</option>
                            <option value="0">0</option>
                            <option value="10">1-10</option>
                            <option value="30">11-30</option>
                            <option value="50">31-50</option>
                            <option value="100">51-100</option>
                            <option value="200">Plus de 100</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="media-shared-per-day">
                            Combien de photos/vidéos partagez-vous par jour en
                            moyenne ?
                        </label>
                        <select id="media-shared-per-day">
                            <option value="">Sélectionnez</option>
                            <option value="0">0</option>
                            <option value="2">1-2</option>
                            <option value="5">3-5</option>
                            <option value="10">6-10</option>
                            <option value="20">Plus de 10</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="emails-sent-per-day">
                            Combien d'emails personnels envoyez-vous par jour en
                            moyenne ?
                        </label>
                        <select id="emails-sent-per-day">
                            <option value="">Sélectionnez</option>
                            <option value="0">0</option>
                            <option value="2">1-2</option>
                            <option value="5">3-5</option>
                            <option value="10">6-10</option>
                            <option value="20">Plus de 10</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="emails-received-per-day">
                            Combien d'emails personnels recevez-vous par jour en
                            moyenne ?
                        </label>
                        <select id="emails-received-per-day">
                            <option value="">Sélectionnez</option>
                            <option value="0">0</option>
                            <option value="5">1-5</option>
                            <option value="15">6-15</option>
                            <option value="30">16-30</option>
                            <option value="50">Plus de 30</option>
                        </select>
                    </div>

                    <div className={styles.formQuestion}>
                        <label>
                            Quels réseaux sociaux utilisez-vous activement ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="social-none"
                                    name="social-network"
                                    value="aucun"
                                />
                                <label htmlFor="social-none">Aucun</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="facebook"
                                    name="social-network"
                                    value="facebook"
                                />
                                <label htmlFor="facebook">Facebook</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="instagram"
                                    name="social-network"
                                    value="instagram"
                                />
                                <label htmlFor="instagram">Instagram</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="twitter"
                                    name="social-network"
                                    value="twitter"
                                />
                                <label htmlFor="twitter">Twitter/X</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="tiktok"
                                    name="social-network"
                                    value="tiktok"
                                />
                                <label htmlFor="tiktok">TikTok</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="linkedin"
                                    name="social-network"
                                    value="linkedin"
                                />
                                <label htmlFor="linkedin">LinkedIn</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="reddit"
                                    name="social-network"
                                    value="reddit"
                                />
                                <label htmlFor="reddit">Reddit</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="snapchat"
                                    name="social-network"
                                    value="snapchat"
                                />
                                <label htmlFor="snapchat">Snapchat</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-reseau"
                                    name="social-network"
                                    value="autre"
                                />
                                <label htmlFor="autre-reseau">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="social-media-hours">
                            Combien d'heures par jour passez-vous sur les
                            réseaux sociaux ?
                        </label>
                        <input
                            type="number"
                            id="social-media-hours"
                            min="0"
                            max="24"
                            placeholder="Heures"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="social-media-shares">
                            Combien de photos/vidéos partagez-vous par jour sur
                            les réseaux sociaux ?
                        </label>
                        <select id="social-media-shares">
                            <option value="">Sélectionnez</option>
                            <option value="0">0</option>
                            <option value="2">1-2</option>
                            <option value="5">3-5</option>
                            <option value="10">6-10</option>
                            <option value="20">Plus de 10</option>
                        </select>
                    </div>
                </QuestionCard>

                <QuestionCard
                    number="07"
                    title="Service de streaming et divertissement"
                    description="Évaluez l'impact environnemental de vos services de streaming et divertissement."
                    isFilled={false}
                    isOpen={false}
                >
                    <div className={styles.formQuestion}>
                        <label>
                            Quels services de streaming vidéo utilisez-vous ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="video-streaming-none"
                                    name="video-streaming-service"
                                    value="aucun"
                                />
                                <label htmlFor="video-streaming-none">
                                    Aucun
                                </label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="netflix"
                                    name="video-streaming-service"
                                    value="netflix"
                                />
                                <label htmlFor="netflix">Netflix</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="prime"
                                    name="video-streaming-service"
                                    value="prime"
                                />
                                <label htmlFor="prime">
                                    Amazon Prime Video
                                </label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="disney"
                                    name="video-streaming-service"
                                    value="disney"
                                />
                                <label htmlFor="disney">Disney+</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="youtube"
                                    name="video-streaming-service"
                                    value="youtube"
                                />
                                <label htmlFor="youtube">YouTube</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="appletv"
                                    name="video-streaming-service"
                                    value="appletv"
                                />
                                <label htmlFor="appletv">Apple TV+</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-streaming"
                                    name="video-streaming-service"
                                    value="autre"
                                />
                                <label htmlFor="autre-streaming">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="video-streaming-hours">
                            Combien d'heures par jour regardez-vous des contenus
                            en streaming ?
                        </label>
                        <input
                            type="number"
                            id="video-streaming-hours"
                            min="0"
                            max="24"
                            placeholder="Nombre d'heures"
                        />
                    </div>

                    <div className={styles.formQuestion}>
                        <label>
                            Quels services de streaming musical utilisez-vous ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="music-streaming-none"
                                    name="music-streaming-service"
                                    value="aucun"
                                />
                                <label htmlFor="music-streaming-none">
                                    Aucun
                                </label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="spotify"
                                    name="music-streaming-service"
                                    value="spotify"
                                />
                                <label htmlFor="spotify">Spotify</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="applemusic"
                                    name="music-streaming-service"
                                    value="applemusic"
                                />
                                <label htmlFor="applemusic">Apple Music</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="deezer"
                                    name="music-streaming-service"
                                    value="deezer"
                                />
                                <label htmlFor="deezer">Deezer</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="ytmusic"
                                    name="music-streaming-service"
                                    value="ytmusic"
                                />
                                <label htmlFor="ytmusic">YouTube Music</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="amazonmusic"
                                    name="music-streaming-service"
                                    value="amazonmusic"
                                />
                                <label htmlFor="amazonmusic">
                                    Amazon Music
                                </label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-musique"
                                    name="music-streaming-service"
                                    value="autre"
                                />
                                <label htmlFor="autre-musique">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="music-streaming-hours">
                            Combien d'heures par jour écoutez-vous de la musique
                            en streaming ?
                        </label>
                        <input
                            type="number"
                            id="music-streaming-hours"
                            min="0"
                            max="24"
                            placeholder="Nombre d'heures"
                        />
                    </div>

                    <div className={styles.formQuestion}>
                        <label>
                            Quels services de cloud gaming utilisez-vous ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="cloud-gaming-none"
                                    name="cloud-gaming-service"
                                    value="aucun"
                                />
                                <label htmlFor="cloud-gaming-none">Aucun</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="geforce"
                                    name="cloud-gaming-service"
                                    value="geforce"
                                />
                                <label htmlFor="geforce">GeForce Now</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="xboxcloud"
                                    name="cloud-gaming-service"
                                    value="xboxcloud"
                                />
                                <label htmlFor="xboxcloud">
                                    Xbox Cloud Gaming
                                </label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="psnow"
                                    name="cloud-gaming-service"
                                    value="psnow"
                                />
                                <label htmlFor="psnow">PlayStation Now</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="shadow"
                                    name="cloud-gaming-service"
                                    value="shadow"
                                />
                                <label htmlFor="shadow">Shadow</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-cloud"
                                    name="cloud-gaming-service"
                                    value="autre"
                                />
                                <label htmlFor="autre-cloud">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="cloud-gaming-hours">
                            Combien d'heures par semaine passez-vous sur le
                            cloud gaming ?
                        </label>
                        <input
                            type="number"
                            id="cloud-gaming-hours"
                            min="0"
                            max="168"
                            placeholder="Nombre d'heures"
                        />
                    </div>
                </QuestionCard>

                <QuestionCard
                    number="08"
                    title="Utilisation de l'IA"
                    description="Évaluez l'impact environnemental de votre utilisation des services d'IA."
                    isFilled={false}
                    isOpen={false}
                >
                    <div className={styles.formQuestion}>
                        <label>Quels services d'IA utilisez-vous ?</label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="chatgpt"
                                    name="ai-service"
                                    value="chatgpt"
                                />
                                <label htmlFor="chatgpt">ChatGPT</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="gemini"
                                    name="ai-service"
                                    value="gemini"
                                />
                                <label htmlFor="gemini">Gemini</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="deepseek"
                                    name="ai-service"
                                    value="deepseek"
                                />
                                <label htmlFor="deepseek">DeepSeek</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="copilot"
                                    name="ai-service"
                                    value="copilot"
                                />
                                <label htmlFor="copilot">Copilot</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="lechat"
                                    name="ai-service"
                                    value="lechat"
                                />
                                <label htmlFor="lechat">Le Chat</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="metaai"
                                    name="ai-service"
                                    value="metaai"
                                />
                                <label htmlFor="metaai">Meta AI</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="grok"
                                    name="ai-service"
                                    value="grok"
                                />
                                <label htmlFor="grok">Grok</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-ia"
                                    name="ai-service"
                                    value="autre"
                                />
                                <label htmlFor="autre-ia">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="llm-requests">
                            Combien de requêtes effectuez-vous par jour sur
                            ChatGPT ou autres LLM ?
                        </label>
                        <input
                            type="number"
                            id="llm-requests"
                            min="0"
                            placeholder="Nombre de requêtes"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="ai-images">
                            Combien d'images générez-vous par jour avec des IA
                            (DALL·E, Midjourney, etc.) ?
                        </label>
                        <input
                            type="number"
                            id="ai-images"
                            min="0"
                            placeholder="Nombre d'images"
                        />
                    </div>
                </QuestionCard>

                <QuestionCard
                    number="09"
                    title="Stockage cloud"
                    description="Évaluez l'impact environnemental de votre stockage en ligne et utilisation du cloud."
                    isFilled={false}
                    isOpen={false}
                >
                    <div className={styles.formQuestion}>
                        <label>
                            Quels services de stockage en ligne utilisez-vous ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="gdrive"
                                    name="cloud-storage"
                                    value="gdrive"
                                />
                                <label htmlFor="gdrive">Google Drive</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="onedrive"
                                    name="cloud-storage"
                                    value="onedrive"
                                />
                                <label htmlFor="onedrive">OneDrive</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="dropbox"
                                    name="cloud-storage"
                                    value="dropbox"
                                />
                                <label htmlFor="dropbox">Dropbox</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="icloud"
                                    name="cloud-storage"
                                    value="icloud"
                                />
                                <label htmlFor="icloud">iCloud</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-stockage"
                                    name="cloud-storage"
                                    value="autre"
                                />
                                <label htmlFor="autre-stockage">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="storage-size">
                            Quel est votre espace de stockage total utilisé (en
                            Go) ?
                        </label>
                        <input
                            type="number"
                            id="storage-size"
                            min="0"
                            placeholder="Nombre de Go"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="files-shared">
                            Combien de fichiers partagez-vous par jour en
                            moyenne ?
                        </label>
                        <input
                            type="number"
                            id="files-shared"
                            min="0"
                            placeholder="Nombre de fichiers"
                        />
                    </div>
                </QuestionCard>

                <QuestionCard
                    number="10"
                    title="Au travail"
                    description="Évaluez l'impact environnemental de votre communication professionnelle."
                    isFilled={false}
                    isOpen={false}
                >
                    <div className={styles.formQuestion}>
                        <label>
                            Quels services de communication professionnelle
                            utilisez-vous ?
                        </label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="teams"
                                    name="pro-communication"
                                    value="teams"
                                />
                                <label htmlFor="teams">Microsoft Teams</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="slack"
                                    name="pro-communication"
                                    value="slack"
                                />
                                <label htmlFor="slack">Slack</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="discord-pro"
                                    name="pro-communication"
                                    value="discord"
                                />
                                <label htmlFor="discord-pro">Discord</label>
                            </div>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="autre-com-pro"
                                    name="pro-communication"
                                    value="autre"
                                />
                                <label htmlFor="autre-com-pro">Autre</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="pro-messages">
                            Combien de messages professionnels envoyez-vous par
                            jour ?
                        </label>
                        <select id="pro-messages">
                            <option value="">Sélectionnez une option</option>
                            <option value="0">0</option>
                            <option value="10">1-10</option>
                            <option value="30">11-30</option>
                            <option value="50">31-50</option>
                            <option value="100">51-100</option>
                            <option value="200">Plus de 100</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="pro-emails-sent">
                            Combien d'emails professionnels envoyez-vous par
                            jour en moyenne ?
                        </label>
                        <select id="pro-emails-sent">
                            <option value="">Sélectionnez une option</option>
                            <option value="0">0</option>
                            <option value="5">1-5</option>
                            <option value="15">6-15</option>
                            <option value="30">16-30</option>
                            <option value="50">Plus de 30</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="pro-emails-received">
                            Combien d'emails professionnels recevez-vous par
                            jour en moyenne ?
                        </label>
                        <select id="pro-emails-received">
                            <option value="">Sélectionnez une option</option>
                            <option value="0">0</option>
                            <option value="10">1-10</option>
                            <option value="30">11-30</option>
                            <option value="50">31-50</option>
                            <option value="100">51-100</option>
                            <option value="200">Plus de 100</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="video-conf-hours">
                            Combien d'heures par semaine passez-vous en
                            visioconférence professionnelle ?
                        </label>
                        <select id="video-conf-hours">
                            <option value="">Sélectionnez une option</option>
                            <option value="0">0</option>
                            <option value="2">1-2</option>
                            <option value="5">3-5</option>
                            <option value="10">6-10</option>
                            <option value="20">11-20</option>
                            <option value="40">Plus de 20</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="camera-usage">
                            Utilisez-vous la caméra pendant vos réunions
                            professionnelles ?
                        </label>
                        <select id="camera-usage">
                            <option value="">Sélectionnez</option>
                            <option value="always">Toujours</option>
                            <option value="sometimes">Parfois</option>
                            <option value="never">Jamais</option>
                        </select>
                    </div>
                </QuestionCard>
            </div>
        </div>
    );
}
