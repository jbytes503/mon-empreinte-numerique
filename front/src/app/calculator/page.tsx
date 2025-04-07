'use client';

import { useState } from 'react';
import styles from './page.module.css';
import QuestionCard from '../components/calculator/card';
import NumericInput from '../components/calculator/questions/NumericInput';
import CheckboxGroup from '../components/calculator/questions/CheckboxGroup';
import SelectInput from '../components/calculator/questions/SelectInput';
import {
    calculateSmartphoneFootprint,
    calculateComputerFootprint,
    calculateTabletFootprint,
    calculateTVFootprint,
    calculateConsoleFootprint,
    calculateMessagingFootprint,
    calculateStreamingFootprint,
    calculateAIFootprint,
    calculateCloudFootprint,
    calculateWorkFootprint,
} from '../../utils/carbonCalculator.js';

// Définitions des types pour les données de chaque formulaire
interface DeviceFormData {
    count: string;
    brands?: string[];
    types?: string[];
    changeRate: string;
    unused?: string;
    dailyHours?: string;
    weeklyHours?: string;
}

// Interface pour les données numériques passées aux fonctions de calcul
interface DeviceCalculationData {
    count: number;
    brands: string[] | undefined;
    types: string[] | undefined;
    changeRate: number;
    unused: number | undefined;
    dailyHours: number | undefined;
    weeklyHours: number | undefined;
}
interface MessagingFormData {
    services?: string[];
    messagesPerDay: string;
    mediaSharedPerDay: string;
    emailsSentPerDay: string;
    emailsReceivedPerDay: string;
    socialNetworks?: string[];
    socialMediaHours: string;
    socialMediaShares: string;
}

interface StreamingFormData {
    videoServices?: string[];
    videoHours: string;
    musicServices?: string[];
    musicHours: string;
    cloudGamingServices?: string[];
    cloudGamingHours: string;
}

interface AIFormData {
    aiServices?: string[];
    llmRequests: string;
    aiImages: string;
}

interface CloudFormData {
    storageServices?: string[];
    storageSize: string;
    filesShared: string;
}

interface WorkFormData {
    proCommunication?: string[];
    proMessages: string;
    proEmailsSent: string;
    proEmailsReceived: string;
    videoConfHours: string;
    cameraUsage: string;
}
interface MessagingCalculationData {
    services?: string[];
    messagesPerDay: number;
    mediaSharedPerDay: number;
    emailsSentPerDay: number;
    emailsReceivedPerDay: number;
    socialNetworks?: string[];
    socialMediaHours: number;
    socialMediaShares: number;
}

interface StreamingCalculationData {
    videoServices?: string[];
    videoHours: number;
    musicServices?: string[];
    musicHours: number;
    cloudGamingServices?: string[];
    cloudGamingHours: number;
}

interface AICalculationData {
    aiServices?: string[];
    llmRequests: number;
    aiImages: number;
}

interface CloudCalculationData {
    storageServices?: string[];
    storageSize: number;
    filesShared: number;
}

interface WorkCalculationData {
    proCommunication?: string[];
    proMessages: number;
    proEmailsSent: number;
    proEmailsReceived: number;
    videoConfHours: number;
    cameraUsage: string;
}

// Options pour les cases à cocher
const smartphoneBrandOptions = [
    { id: 'brand-apple', value: 'apple', label: 'Apple' },
    { id: 'brand-samsung', value: 'samsung', label: 'Samsung' },
    { id: 'brand-xiaomi', value: 'xiaomi', label: 'Xiaomi' },
    { id: 'brand-huawei', value: 'huawei', label: 'Huawei' },
    { id: 'brand-other', value: 'autre', label: 'Autre' },
];

const computerTypeOptions = [
    { id: 'portable', value: 'portable', label: 'Portable' },
    { id: 'bureau', value: 'bureau', label: 'Fixe Pro' },
    { id: 'perso', value: 'perso', label: 'Fixe Perso' },
];

const computerBrandOptions = [
    { id: 'apple-laptop', value: 'apple', label: 'Apple' },
    { id: 'dell-laptop', value: 'dell', label: 'Dell' },
    { id: 'hp-laptop', value: 'hp', label: 'HP' },
    { id: 'lenovo-laptop', value: 'lenovo', label: 'Lenovo' },
    { id: 'asus-laptop', value: 'asus', label: 'Asus' },
    { id: 'acer-laptop', value: 'acer', label: 'Acer' },
    { id: 'autre-laptop', value: 'autre', label: 'Autre' },
];

const tabletBrandOptions = [
    { id: 'apple-tablet', value: 'apple', label: 'Apple' },
    { id: 'samsung-tablet', value: 'samsung', label: 'Samsung' },
    { id: 'huawei-tablet', value: 'huawei', label: 'Huawei' },
    { id: 'lenovo-tablet', value: 'lenovo', label: 'Lenovo' },
    { id: 'autre-tablet', value: 'autre', label: 'Autre' },
];

const messagingServiceOptions = [
    { id: 'whatsapp', value: 'whatsapp', label: 'WhatsApp' },
    { id: 'telegram', value: 'telegram', label: 'Telegram' },
    { id: 'messenger', value: 'messenger', label: 'Messenger' },
    { id: 'imessage', value: 'imessage', label: 'iMessage' },
    { id: 'sms', value: 'sms', label: 'SMS' },
    { id: 'autre-messagerie', value: 'autre', label: 'Autre' },
];

const messagesPerDayOptions = [
    { value: '0', label: '0' },
    { value: '10', label: '1-10' },
    { value: '30', label: '11-30' },
    { value: '50', label: '31-50' },
    { value: '100', label: '51-100' },
    { value: '200', label: 'Plus de 100' },
];

const mediaSharedPerDayOptions = [
    { value: '0', label: '0' },
    { value: '2', label: '1-2' },
    { value: '5', label: '3-5' },
    { value: '10', label: '6-10' },
    { value: '20', label: 'Plus de 10' },
];

const emailsSentPerDayOptions = messagesPerDayOptions;
const emailsReceivedPerDayOptions = [
    { value: '0', label: '0' },
    { value: '5', label: '1-5' },
    { value: '15', label: '6-15' },
    { value: '30', label: '16-30' },
    { value: '50', label: 'Plus de 30' },
];

const socialNetworkOptions = [
    { id: 'facebook', value: 'facebook', label: 'Facebook' },
    { id: 'instagram', value: 'instagram', label: 'Instagram' },
    { id: 'twitter', value: 'twitter', label: 'Twitter/X' },
    { id: 'tiktok', value: 'tiktok', label: 'TikTok' },
    { id: 'linkedin', value: 'linkedin', label: 'LinkedIn' },
    { id: 'reddit', value: 'reddit', label: 'Reddit' },
    { id: 'snapchat', value: 'snapchat', label: 'Snapchat' },
    { id: 'autre-reseau', value: 'autre', label: 'Autre' },
];

const socialMediaSharesOptions = mediaSharedPerDayOptions;

const videoStreamingOptions = [
    { id: 'netflix', value: 'netflix', label: 'Netflix' },
    { id: 'prime', value: 'prime', label: 'Amazon Prime Video' },
    { id: 'disney', value: 'disney', label: 'Disney+' },
    { id: 'youtube', value: 'youtube', label: 'YouTube' },
    { id: 'appletv', value: 'appletv', label: 'Apple TV+' },
    { id: 'autre-streaming', value: 'autre', label: 'Autre' },
];

const musicStreamingOptions = [
    { id: 'spotify', value: 'spotify', label: 'Spotify' },
    { id: 'applemusic', value: 'applemusic', label: 'Apple Music' },
    { id: 'deezer', value: 'deezer', label: 'Deezer' },
    { id: 'ytmusic', value: 'ytmusic', label: 'YouTube Music' },
    { id: 'amazonmusic', value: 'amazonmusic', label: 'Amazon Music' },
    { id: 'autre-musique', value: 'autre', label: 'Autre' },
];

const cloudGamingOptions = [
    { id: 'geforce', value: 'geforce', label: 'GeForce Now' },
    { id: 'xboxcloud', value: 'xboxcloud', label: 'Xbox Cloud Gaming' },
    { id: 'psnow', value: 'psnow', label: 'PlayStation Now' },
    { id: 'shadow', value: 'shadow', label: 'Shadow' },
    { id: 'autre-cloud', value: 'autre', label: 'Autre' },
];

const aiServiceOptions = [
    { id: 'chatgpt', value: 'chatgpt', label: 'ChatGPT' },
    { id: 'gemini', value: 'gemini', label: 'Gemini' },
    { id: 'deepseek', value: 'deepseek', label: 'DeepSeek' },
    { id: 'copilot', value: 'copilot', label: 'Copilot' },
    { id: 'lechat', value: 'lechat', label: 'Le Chat' },
    { id: 'metaai', value: 'metaai', label: 'Meta AI' },
    { id: 'grok', value: 'grok', label: 'Grok' },
    { id: 'autre-ia', value: 'autre', label: 'Autre' },
];

const cloudStorageOptions = [
    { id: 'gdrive', value: 'gdrive', label: 'Google Drive' },
    { id: 'onedrive', value: 'onedrive', label: 'OneDrive' },
    { id: 'dropbox', value: 'dropbox', label: 'Dropbox' },
    { id: 'icloud', value: 'icloud', label: 'iCloud' },
    { id: 'autre-stockage', value: 'autre', label: 'Autre' },
];

const proCommunicationOptions = [
    { id: 'teams', value: 'teams', label: 'Microsoft Teams' },
    { id: 'slack', value: 'slack', label: 'Slack' },
    { id: 'discord-pro', value: 'discord', label: 'Discord' },
    { id: 'autre-com-pro', value: 'autre', label: 'Autre' },
];

const proMessagesOptions = messagesPerDayOptions;
const proEmailsSentOptions = [
    { value: '0', label: '0' },
    { value: '5', label: '1-5' },
    { value: '15', label: '6-15' },
    { value: '30', label: '16-30' },
    { value: '50', label: 'Plus de 30' },
];
const proEmailsReceivedOptions = [
    { value: '0', label: '0' },
    { value: '10', label: '1-10' },
    { value: '30', label: '11-30' },
    { value: '50', label: '31-50' },
    { value: '100', label: '51-100' },
    { value: '200', label: 'Plus de 100' },
];
const videoConfHoursOptions = [
    { value: '0', label: '0' },
    { value: '2', label: '1-2' },
    { value: '5', label: '3-5' },
    { value: '10', label: '6-10' },
    { value: '20', label: '11-20' },
    { value: '40', label: 'Plus de 20' },
];
const cameraUsageOptions = [
    { value: 'always', label: 'Toujours' },
    { value: 'sometimes', label: 'Parfois' },
    { value: 'never', label: 'Jamais' },
];

type AllFormData = {
    [key: string]:
        | DeviceFormData
        | MessagingFormData
        | StreamingFormData
        | AIFormData
        | CloudFormData
        | WorkFormData;
};

type CalculationFunction = (
    data:
        | DeviceCalculationData
        | MessagingCalculationData
        | StreamingCalculationData
        | AICalculationData
        | CloudCalculationData
        | WorkCalculationData
) => number;

export default function Page() {
    const [smartphoneResult, setSmartphoneResult] = useState<number>(0);
    const [computerResult, setComputerResult] = useState<number>(0);
    const [tabletResult, setTabletResult] = useState<number>(0);
    const [tvResult, setTvResult] = useState<number>(0);
    const [consoleResult, setConsoleResult] = useState<number>(0);
    const [messagingResult, setMessagingResult] = useState<number>(0);
    const [streamingResult, setStreamingResult] = useState<number>(0);
    const [aiResult, setAiResult] = useState<number>(0);
    const [cloudResult, setCloudResult] = useState<number>(0);
    const [workResult, setWorkResult] = useState<number>(0);

    const [formData, setFormData] = useState<AllFormData>({
        smartphone: { count: '', brands: [], changeRate: '', unused: '' },
        computer: {
            count: '',
            types: [],
            brands: [],
            changeRate: '',
            unused: '',
        },
        tablet: { count: '', brands: [], changeRate: '', unused: '' },
        tv: { count: '', changeRate: '', dailyHours: '' },
        console: { count: '', changeRate: '', weeklyHours: '' },
        messaging: {
            services: [],
            messagesPerDay: '',
            mediaSharedPerDay: '',
            emailsSentPerDay: '',
            emailsReceivedPerDay: '',
            socialNetworks: [],
            socialMediaHours: '',
            socialMediaShares: '',
        },
        streaming: {
            videoServices: [],
            videoHours: '',
            musicServices: [],
            musicHours: '',
            cloudGamingServices: [],
            cloudGamingHours: '',
        },
        ai: { aiServices: [], llmRequests: '', aiImages: '' },
        cloud: { storageServices: [], storageSize: '', filesShared: '' },
        work: {
            proCommunication: [],
            proMessages: '',
            proEmailsSent: '',
            proEmailsReceived: '',
            videoConfHours: '',
            cameraUsage: '',
        },
    });

    // gère les changements d'input numérique ou select
    const handleInputChange =
        (formId: string) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { id, value } = e.target;
            const fieldName = id.substring(id.indexOf('-') + 1);
            setFormData((prev) => ({
                ...prev,
                [formId]: { ...prev[formId], [fieldName]: value } as any,
            }));
        };

    // gère les changements de cases à cocher
    const handleCheckboxChange =
        (formId: string, field: string) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value, checked } = e.target;
            setFormData((prev) => {
                const currentValues =
                    ((prev[formId] as any)[field] as string[]) || [];
                let newValues;
                if (checked) {
                    newValues = [...currentValues, value];
                } else {
                    newValues = currentValues.filter((v) => v !== value);
                }
                return {
                    ...prev,
                    [formId]: { ...prev[formId], [field]: newValues } as any,
                };
            });
        };

    // fonctions de sauvegarde
    const handleSave = (
        formId: string,
        calculationFn: CalculationFunction,
        setResultFn: React.Dispatch<React.SetStateAction<number>>
    ) => {
        const currentFormData = formData[formId];
        let dataToCalculate: any = { ...currentFormData };

        if ('count' in dataToCalculate)
            dataToCalculate.count = parseInt(dataToCalculate.count) || 0;
        if ('changeRate' in dataToCalculate)
            dataToCalculate.changeRate =
                parseFloat(dataToCalculate.changeRate) ||
                (formId === 'tv' || formId === 'console'
                    ? 5
                    : formId === 'computer' || formId === 'tablet'
                      ? 3
                      : 2);
        if ('unused' in dataToCalculate)
            dataToCalculate.unused =
                parseInt(dataToCalculate.unused || '0') || 0;
        if ('dailyHours' in dataToCalculate)
            dataToCalculate.dailyHours =
                parseFloat(dataToCalculate.dailyHours || '0') || 0;
        if ('weeklyHours' in dataToCalculate)
            dataToCalculate.weeklyHours =
                parseFloat(dataToCalculate.weeklyHours || '0') || 0;
        if ('messagesPerDay' in dataToCalculate)
            dataToCalculate.messagesPerDay =
                parseInt(dataToCalculate.messagesPerDay) || 0;
        if ('mediaSharedPerDay' in dataToCalculate)
            dataToCalculate.mediaSharedPerDay =
                parseInt(dataToCalculate.mediaSharedPerDay) || 0;
        if ('emailsSentPerDay' in dataToCalculate)
            dataToCalculate.emailsSentPerDay =
                parseInt(dataToCalculate.emailsSentPerDay) || 0;
        if ('emailsReceivedPerDay' in dataToCalculate)
            dataToCalculate.emailsReceivedPerDay =
                parseInt(dataToCalculate.emailsReceivedPerDay) || 0;
        if ('socialMediaHours' in dataToCalculate)
            dataToCalculate.socialMediaHours =
                parseFloat(dataToCalculate.socialMediaHours) || 0;
        if ('socialMediaShares' in dataToCalculate)
            dataToCalculate.socialMediaShares =
                parseInt(dataToCalculate.socialMediaShares) || 0;
        if ('videoHours' in dataToCalculate)
            dataToCalculate.videoHours =
                parseFloat(dataToCalculate.videoHours) || 0;
        if ('musicHours' in dataToCalculate)
            dataToCalculate.musicHours =
                parseFloat(dataToCalculate.musicHours) || 0;
        if ('cloudGamingHours' in dataToCalculate)
            dataToCalculate.cloudGamingHours =
                parseFloat(dataToCalculate.cloudGamingHours) || 0;
        if ('llmRequests' in dataToCalculate)
            dataToCalculate.llmRequests =
                parseInt(dataToCalculate.llmRequests) || 0;
        if ('aiImages' in dataToCalculate)
            dataToCalculate.aiImages = parseInt(dataToCalculate.aiImages) || 0;
        if ('storageSize' in dataToCalculate)
            dataToCalculate.storageSize =
                parseFloat(dataToCalculate.storageSize) || 0;
        if ('filesShared' in dataToCalculate)
            dataToCalculate.filesShared =
                parseInt(dataToCalculate.filesShared) || 0;
        if ('proMessages' in dataToCalculate)
            dataToCalculate.proMessages =
                parseInt(dataToCalculate.proMessages) || 0;
        if ('proEmailsSent' in dataToCalculate)
            dataToCalculate.proEmailsSent =
                parseInt(dataToCalculate.proEmailsSent) || 0;
        if ('proEmailsReceived' in dataToCalculate)
            dataToCalculate.proEmailsReceived =
                parseInt(dataToCalculate.proEmailsReceived) || 0;
        if ('videoConfHours' in dataToCalculate)
            dataToCalculate.videoConfHours =
                parseFloat(dataToCalculate.videoConfHours) || 0;

        const result = calculationFn(dataToCalculate);
        setResultFn(result);
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Calculateur d&apos;empreinte carbone numérique
                </h1>
                <div className={styles.cardContainer}>
                    <QuestionCard
                        number="01"
                        title="Smartphones"
                        description="Évaluez l’impact environnemental de votre appareil, de sa fabrication à son utilisation quotidienne."
                        isOpen={true}
                        isFilled={smartphoneResult > 0}
                        onSave={() =>
                            handleSave(
                                'smartphone',
                                calculateSmartphoneFootprint as CalculationFunction,
                                setSmartphoneResult
                            )
                        }
                    >
                        <NumericInput
                            id="smartphone-count"
                            label="Combien de smartphones possédez-vous actuellement ?"
                            min={0}
                            placeholder="Nombre"
                            value={
                                (formData.smartphone as DeviceFormData).count
                            }
                            onChange={handleInputChange('smartphone')}
                        />
                        <CheckboxGroup
                            label="Quelles sont les marques de smartphone que vous utilisez?"
                            name="smartphone-brand"
                            options={smartphoneBrandOptions}
                            selectedValues={
                                (formData.smartphone as DeviceFormData)
                                    .brands || []
                            }
                            onChange={handleCheckboxChange(
                                'smartphone',
                                'brands'
                            )}
                        />
                        <NumericInput
                            id="smartphone-changeRate"
                            label="A quelle fréquence annuelle changez-vous de smartphone ?"
                            min={1}
                            placeholder="Ex: 2"
                            value={
                                (formData.smartphone as DeviceFormData)
                                    .changeRate
                            }
                            onChange={handleInputChange('smartphone')}
                        />
                        <NumericInput
                            id="smartphone-unused"
                            label="Combien de smartphones conservez-vous alors que vous ne les utilisez plus ?"
                            min={0}
                            placeholder="Nombre"
                            value={
                                (formData.smartphone as DeviceFormData)
                                    .unused || ''
                            }
                            onChange={handleInputChange('smartphone')}
                        />
                    </QuestionCard>

                    <QuestionCard
                        number="02"
                        title="Ordinateurs"
                        description="Évaluez l’impact environnemental de vos ordinateurs"
                        isOpen={false}
                        isFilled={computerResult > 0}
                        onSave={() =>
                            handleSave(
                                'computer',
                                calculateComputerFootprint as CalculationFunction,
                                setComputerResult
                            )
                        }
                    >
                        <NumericInput
                            id="computer-count"
                            label="Combien d'ordinateurs utilisez-vous ?"
                            min={0}
                            placeholder="Nombre"
                            value={(formData.computer as DeviceFormData).count}
                            onChange={handleInputChange('computer')}
                        />
                        <CheckboxGroup
                            label="Quel type d'ordinateur utilisez-vous ?"
                            name="computer-type"
                            options={computerTypeOptions}
                            selectedValues={
                                (formData.computer as DeviceFormData).types ||
                                []
                            }
                            onChange={handleCheckboxChange('computer', 'types')}
                        />
                        <CheckboxGroup
                            label="Quelles sont les marques d'ordinateurs que vous utilisez ?"
                            name="computer-brand"
                            options={computerBrandOptions}
                            selectedValues={
                                (formData.computer as DeviceFormData).brands ||
                                []
                            }
                            onChange={handleCheckboxChange(
                                'computer',
                                'brands'
                            )}
                        />
                        <NumericInput
                            id="computer-changeRate"
                            label="A quelle fréquence annuelle changez-vous d'ordinateur ?"
                            min={1}
                            placeholder="Ex: 3"
                            value={
                                (formData.computer as DeviceFormData).changeRate
                            }
                            onChange={handleInputChange('computer')}
                        />
                        <NumericInput
                            id="computer-unused"
                            label="Combien d'ordinateurs conservez-vous alors que vous ne les utilisez plus ?"
                            min={0}
                            placeholder="Nombre"
                            value={
                                (formData.computer as DeviceFormData).unused ||
                                ''
                            }
                            onChange={handleInputChange('computer')}
                        />
                    </QuestionCard>

                    <QuestionCard
                        number="03"
                        title="Tablettes"
                        description="Évaluez l’impact environnemental de vos tablettes"
                        isOpen={false}
                        isFilled={tabletResult > 0}
                        onSave={() =>
                            handleSave(
                                'tablet',
                                calculateTabletFootprint as CalculationFunction,
                                setTabletResult
                            )
                        }
                    >
                        <NumericInput
                            id="tablet-count"
                            label="Combien de tablettes possédez-vous actuellement ?"
                            min={0}
                            placeholder="Nombre"
                            value={(formData.tablet as DeviceFormData).count}
                            onChange={handleInputChange('tablet')}
                        />
                        <CheckboxGroup
                            label="Quelles sont les marques de tablettes que vous utilisez ?"
                            name="tablet-brand"
                            options={tabletBrandOptions}
                            selectedValues={
                                (formData.tablet as DeviceFormData).brands || []
                            }
                            onChange={handleCheckboxChange('tablet', 'brands')}
                        />
                        <NumericInput
                            id="tablet-changeRate"
                            label="A quelle fréquence annuelle changez-vous de tablette ?"
                            min={1}
                            placeholder="Ex: 3"
                            value={
                                (formData.tablet as DeviceFormData).changeRate
                            }
                            onChange={handleInputChange('tablet')}
                        />
                        <NumericInput
                            id="tablet-unused"
                            label="Combien de tablettes conservez-vous alors que vous ne les utilisez plus ?"
                            min={0}
                            placeholder="Nombre"
                            value={
                                (formData.tablet as DeviceFormData).unused || ''
                            }
                            onChange={handleInputChange('tablet')}
                        />
                    </QuestionCard>

                    <QuestionCard
                        number="04"
                        title="Télévisions"
                        description="Évaluez l’impact environnemental de vos télévisions"
                        isOpen={false}
                        isFilled={tvResult > 0}
                        onSave={() =>
                            handleSave(
                                'tv',
                                calculateTVFootprint as CalculationFunction,
                                setTvResult
                            )
                        }
                    >
                        <NumericInput
                            id="tv-count"
                            label="Combien de télévisions possédez-vous actuellement ?"
                            min={0}
                            placeholder="Nombre"
                            value={(formData.tv as DeviceFormData).count}
                            onChange={handleInputChange('tv')}
                        />
                        <NumericInput
                            id="tv-changeRate"
                            label="A quelle fréquence annuelle changez-vous de télévision ?"
                            min={1}
                            placeholder="Ex: 5"
                            value={(formData.tv as DeviceFormData).changeRate}
                            onChange={handleInputChange('tv')}
                        />
                        <NumericInput
                            id="tv-dailyHours"
                            label="Combien d'heures par jour utilisez-vous votre télévision ?"
                            min={0}
                            max={24}
                            placeholder="Ex: 3"
                            value={
                                (formData.tv as DeviceFormData).dailyHours || ''
                            }
                            onChange={handleInputChange('tv')}
                        />
                    </QuestionCard>

                    <QuestionCard
                        number="05"
                        title="Consoles de Jeux"
                        description="Calculez l'impact de vos console de jeux."
                        isOpen={false}
                        isFilled={consoleResult > 0}
                        onSave={() =>
                            handleSave(
                                'console',
                                calculateConsoleFootprint as CalculationFunction,
                                setConsoleResult
                            )
                        }
                    >
                        <NumericInput
                            id="console-count"
                            label="Combien de consoles de jeux possédez-vous actuellement ?"
                            min={0}
                            placeholder="Nombre"
                            value={(formData.console as DeviceFormData).count}
                            onChange={handleInputChange('console')}
                        />
                        <NumericInput
                            id="console-changeRate"
                            label="A quelle fréquence annuelle changez-vous de console de jeux ?"
                            min={1}
                            placeholder="Ex: 5"
                            value={
                                (formData.console as DeviceFormData).changeRate
                            }
                            onChange={handleInputChange('console')}
                        />
                        <NumericInput
                            id="console-weeklyHours"
                            label="Combien d'heures par semaine utilisez-vous votre console de jeux ?"
                            min={0}
                            max={168}
                            placeholder="Ex: 10"
                            value={
                                (formData.console as DeviceFormData)
                                    .weeklyHours || ''
                            }
                            onChange={handleInputChange('console')}
                        />
                    </QuestionCard>

                    <QuestionCard
                        number="06"
                        title="Messagerie et réseaux sociaux"
                        description="Évaluez l’impact environnemental de vos services de messagerie."
                        isOpen={false}
                        isFilled={messagingResult > 0}
                        onSave={() =>
                            handleSave(
                                'messaging',
                                calculateMessagingFootprint as CalculationFunction,
                                setMessagingResult
                            )
                        }
                    >
                        <CheckboxGroup
                            label="Quels services de messagerie utilisez-vous ?"
                            name="messaging-services"
                            options={messagingServiceOptions}
                            selectedValues={
                                (formData.messaging as MessagingFormData)
                                    .services || []
                            }
                            onChange={handleCheckboxChange(
                                'messaging',
                                'services'
                            )}
                        />
                        <SelectInput
                            id="messaging-messagesPerDay"
                            label="Combien de messages échangez-vous par jour?"
                            options={messagesPerDayOptions}
                            value={
                                (formData.messaging as MessagingFormData)
                                    .messagesPerDay
                            }
                            onChange={handleInputChange('messaging')}
                        />
                        <SelectInput
                            id="messaging-mediaSharedPerDay"
                            label="Combien de photos, vidéos ou documents partagés par jour par message ?"
                            options={mediaSharedPerDayOptions}
                            value={
                                (formData.messaging as MessagingFormData)
                                    .mediaSharedPerDay
                            }
                            onChange={handleInputChange('messaging')}
                        />
                        <SelectInput
                            id="messaging-emailsSentPerDay"
                            label="Combien d'emails envoyés par jour ?"
                            options={emailsSentPerDayOptions}
                            value={
                                (formData.messaging as MessagingFormData)
                                    .emailsSentPerDay
                            }
                            onChange={handleInputChange('messaging')}
                        />
                        <SelectInput
                            id="messaging-emailsReceivedPerDay"
                            label="Combien d'emails reçus par jour ?"
                            options={emailsReceivedPerDayOptions}
                            value={
                                (formData.messaging as MessagingFormData)
                                    .emailsReceivedPerDay
                            }
                            onChange={handleInputChange('messaging')}
                        />
                        <CheckboxGroup
                            label="Quels réseaux sociaux utilisez-vous ?"
                            name="messaging-socialNetworks"
                            options={socialNetworkOptions}
                            selectedValues={
                                (formData.messaging as MessagingFormData)
                                    .socialNetworks || []
                            }
                            onChange={handleCheckboxChange(
                                'messaging',
                                'socialNetworks'
                            )}
                        />
                        <SelectInput
                            id="messaging-socialMediaHours"
                            label="Combien d'heures par jour passez-vous sur les réseaux sociaux ?"
                            options={socialMediaSharesOptions}
                            value={
                                (formData.messaging as MessagingFormData)
                                    .socialMediaHours
                            }
                            onChange={handleInputChange('messaging')}
                        />
                        <SelectInput
                            id="messaging-socialMediaShares"
                            label="Combien de photos ou vidéos partagés par jour sur les réseaux sociaux ? (et oui envoyer un snap ça compte)"
                            options={socialMediaSharesOptions}
                            value={
                                (formData.messaging as MessagingFormData)
                                    .socialMediaShares
                            }
                            onChange={handleInputChange('messaging')}
                        />
                    </QuestionCard>

                    <QuestionCard
                        number="07"
                        title="Service de streaming et divertissement"
                        description="Évaluez l’impact environnemental de vos services de streaming."
                        isOpen={false}
                        isFilled={streamingResult > 0}
                        onSave={() =>
                            handleSave(
                                'streaming',
                                calculateStreamingFootprint as CalculationFunction,
                                setStreamingResult
                            )
                        }
                    >
                        <CheckboxGroup
                            label="Quels services de streaming utilisez-vous ?"
                            name="streaming-videoServices"
                            options={videoStreamingOptions}
                            selectedValues={
                                (formData.streaming as StreamingFormData)
                                    .videoServices || []
                            }
                            onChange={handleCheckboxChange(
                                'streaming',
                                'videoServices'
                            )}
                        />
                        <SelectInput
                            id="streaming-videoHours"
                            label="Combien d'heures par jour passez-vous à regarder des vidéos ?"
                            options={messagesPerDayOptions}
                            value={
                                (formData.streaming as StreamingFormData)
                                    .videoHours
                            }
                            onChange={handleInputChange('streaming')}
                        />
                        <CheckboxGroup
                            label="Quels services de musique ou de streaming utilisez-vous ?"
                            name="streaming-musicServices"
                            options={musicStreamingOptions}
                            selectedValues={
                                (formData.streaming as StreamingFormData)
                                    .musicServices || []
                            }
                            onChange={handleCheckboxChange(
                                'streaming',
                                'musicServices'
                            )}
                        />
                        <SelectInput
                            id="streaming-musicHours"
                            label="Combien d'heures par jour passez-vous à écouter de la musique ?"
                            options={messagesPerDayOptions}
                            value={
                                (formData.streaming as StreamingFormData)
                                    .musicHours
                            }
                            onChange={handleInputChange('streaming')}
                        />
                        <CheckboxGroup
                            label="Quels services de cloud gaming ou de jeux en ligne utilisez-vous ?"
                            name="streaming-cloudGamingServices"
                            options={cloudGamingOptions}
                            selectedValues={
                                (formData.streaming as StreamingFormData)
                                    .cloudGamingServices || []
                            }
                            onChange={handleCheckboxChange(
                                'streaming',
                                'cloudGamingServices'
                            )}
                        />
                        <SelectInput
                            id="streaming-cloudGamingHours"
                            label="Combien d'heures par jour passez-vous à jouer en ligne ?"
                            options={messagesPerDayOptions}
                            value={
                                (formData.streaming as StreamingFormData)
                                    .cloudGamingHours
                            }
                            onChange={handleInputChange('streaming')}
                        />
                    </QuestionCard>

                    <QuestionCard
                        number="08"
                        title="Intelligence Artificielle"
                        description="Évaluez l’impact environnemental de vos services d'intelligence artificielle."
                        isOpen={false}
                        isFilled={aiResult > 0}
                        onSave={() =>
                            handleSave(
                                'ai',
                                calculateAIFootprint as CalculationFunction,
                                setAiResult
                            )
                        }
                    >
                        <CheckboxGroup
                            label="Quels services d'intelligence artificielle utilisez-vous ?"
                            name="ai-aiServices"
                            options={aiServiceOptions}
                            selectedValues={
                                (formData.ai as AIFormData).aiServices || []
                            }
                            onChange={handleCheckboxChange('ai', 'aiServices')}
                        />
                        <SelectInput
                            id="ai-llmRequests"
                            label="Combien de requêtes par jour faites-vous à vos services d'intelligence artificielle ?"
                            options={messagesPerDayOptions}
                            value={(formData.ai as AIFormData).llmRequests}
                            onChange={handleInputChange('ai')}
                        />
                        <SelectInput
                            id="ai-aiImages"
                            label="Combien d'images par jour générez-vous avec vos services d'intelligence artificielle ?"
                            options={messagesPerDayOptions}
                            value={(formData.ai as AIFormData).aiImages}
                            onChange={handleInputChange('ai')}
                        />
                    </QuestionCard>

                    <QuestionCard
                        number="09"
                        title="Stockage Cloud"
                        description="Évaluez l’impact environnemental de vos services de stockage cloud."
                        isOpen={false}
                        isFilled={cloudResult > 0}
                        onSave={() =>
                            handleSave(
                                'cloud',
                                calculateCloudFootprint as CalculationFunction,
                                setCloudResult
                            )
                        }
                    >
                        <CheckboxGroup
                            label="Quels services de stockage cloud utilisez-vous ?"
                            name="cloud-storageServices"
                            options={cloudStorageOptions}
                            selectedValues={
                                (formData.cloud as CloudFormData)
                                    .storageServices || []
                            }
                            onChange={handleCheckboxChange(
                                'cloud',
                                'storageServices'
                            )}
                        />
                        <SelectInput
                            id="cloud-storageSize"
                            label="Combien de stockage cloud utilisez-vous ?"
                            options={messagesPerDayOptions}
                            value={
                                (formData.cloud as CloudFormData).storageSize
                            }
                            onChange={handleInputChange('cloud')}
                        />
                        <SelectInput
                            id="cloud-filesShared"
                            label="Combien de fichiers partagés par jour ?"
                            options={messagesPerDayOptions}
                            value={
                                (formData.cloud as CloudFormData).filesShared
                            }
                            onChange={handleInputChange('cloud')}
                        />
                    </QuestionCard>

                    <QuestionCard
                        number="10"
                        title="Communication professionnelle"
                        description="Évaluez l’impact environnemental de vos services de communication professionnelle."
                        isOpen={false}
                        isFilled={workResult > 0}
                        onSave={() =>
                            handleSave(
                                'work',
                                calculateWorkFootprint as CalculationFunction,
                                setWorkResult
                            )
                        }
                    >
                        <CheckboxGroup
                            label="Quels services de communication professionnelle utilisez-vous ?"
                            name="work-proCommunication"
                            options={proCommunicationOptions}
                            selectedValues={
                                (formData.work as WorkFormData)
                                    .proCommunication || []
                            }
                            onChange={handleCheckboxChange(
                                'work',
                                'proCommunication'
                            )}
                        />
                        <SelectInput
                            id="work-proMessages"
                            label="Combien de messages par jour échangez-vous avec vos collègues ?"
                            options={proMessagesOptions}
                            value={(formData.work as WorkFormData).proMessages}
                            onChange={handleInputChange('work')}
                        />
                        <SelectInput
                            id="work-proEmailsSent"
                            label="Combien d'emails envoyés par jour avec vos services de communication professionnelle ?"
                            options={proEmailsSentOptions}
                            value={
                                (formData.work as WorkFormData).proEmailsSent
                            }
                            onChange={handleInputChange('work')}
                        />
                        <SelectInput
                            id="work-proEmailsReceived"
                            label="Combien d'emails reçus par jour avec vos services de communication professionnelle ?"
                            options={proEmailsReceivedOptions}
                            value={
                                (formData.work as WorkFormData)
                                    .proEmailsReceived
                            }
                            onChange={handleInputChange('work')}
                        />
                        <SelectInput
                            id="work-videoConfHours"
                            label="Combien d'heures par jour passez-vous à des vidéos-conférences ?"
                            options={videoConfHoursOptions}
                            value={
                                (formData.work as WorkFormData).videoConfHours
                            }
                            onChange={handleInputChange('work')}
                        />
                        <SelectInput
                            id="work-cameraUsage"
                            label="Combien d'utilisation par jour de votre caméra ?"
                            options={cameraUsageOptions}
                            value={(formData.work as WorkFormData).cameraUsage}
                            onChange={handleInputChange('work')}
                        />
                    </QuestionCard>
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.calculateButton}
                        onClick={() => {
                            const total =
                                smartphoneResult +
                                computerResult +
                                tabletResult +
                                tvResult +
                                consoleResult +
                                messagingResult +
                                streamingResult +
                                aiResult +
                                cloudResult +
                                workResult;
                            console.log(
                                'Empreinte carbone totale:',
                                total.toFixed(2),
                                'kg CO2e/an'
                            );
                            window.location.href = '/about';
                        }}
                    >
                        Calculer
                    </button>
                </div>
            </div>
        </main>
    );
}
