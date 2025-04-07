/**
 * Utilitaires pour calculer l'empreinte carbone des appareils électroniques
 */

// Import des données du fichier data.json
import carboneData from '../lib/data.json';

export function calculateSmartphoneFootprint(data) {
    console.log("Calcul de l'empreinte carbone du smartphone...", data);

    // Récupérer les valeurs des arguments
    const count = data.count || 0;
    const brands = data.brands || [];
    const changeRate = data.changeRate || 2;
    const unused = data.unused || 0;

    // Données des smartphones
    const smartphoneBrands = carboneData.smartphones;

    // Calcul simple de l'empreinte
    let totalEmission = 0;

    if (count === 0 && unused === 0) return 0; // Retourne 0 si aucun appareil

    if (brands.length > 0) {
        // Avec marques sélectionnées
        let marqueEmission = 0;
        for (const brand of brands) {
            marqueEmission +=
                smartphoneBrands[brand.toLowerCase()] || smartphoneBrands.autre;
        }
        totalEmission =
            ((count + unused) * (marqueEmission / brands.length)) / changeRate;
    } else {
        // Sans marque sélectionnée (moyenne)
        const moyenneEmission = 60; // kg CO2e en moyenne
        totalEmission = ((count + unused) * moyenneEmission) / changeRate;
    }

    console.log(
        'Empreinte calculée (Smartphone):',
        totalEmission.toFixed(2),
        'kg CO2e/an'
    );
    return parseFloat(totalEmission.toFixed(2));
}

export function calculateComputerFootprint(data) {
    console.log("Calcul de l'empreinte carbone de l'ordinateur...", data);

    const count = data.count || 0;
    const types = data.types || [];
    const brands = data.brands || [];
    const changeRate = data.changeRate || 3;
    const unused = data.unused || 0;

    if (count === 0 && unused === 0) return 0;

    const computerData = carboneData.ordinateurs;
    let totalEmission = 0;

    let typeEmission = 0;
    if (types.length > 0) {
        for (const type of types) {
            if (type === 'portable')
                typeEmission += computerData.ordinateur_portable;
            else if (type === 'bureau')
                typeEmission += computerData.ordinateur_fixe_professionel;
            else if (type === 'perso')
                typeEmission += computerData.ordinateur_fixe_personnel;
        }
        typeEmission /= types.length;
    } else {
        typeEmission = 250; // Moyenne si aucun type
    }

    let marqueEmission = 0;
    if (brands.length > 0) {
        for (const brand of brands) {
            marqueEmission +=
                computerData[brand.toLowerCase()] || computerData.autre;
        }
        marqueEmission /= brands.length;
    } else {
        marqueEmission = typeEmission; // Utilise l'émission du type si pas de marque
    }

    const moyenneEmission = (typeEmission + marqueEmission) / 2;
    totalEmission = ((count + unused) * moyenneEmission) / changeRate;

    console.log(
        'Empreinte calculée (Ordinateur):',
        totalEmission.toFixed(2),
        'kg CO2e/an'
    );
    return parseFloat(totalEmission.toFixed(2));
}

export function calculateTabletFootprint(data) {
    console.log("Calcul de l'empreinte carbone de la tablette...", data);

    const count = data.count || 0;
    const brands = data.brands || [];
    const changeRate = data.changeRate || 3;
    const unused = data.unused || 0;

    if (count === 0 && unused === 0) return 0;

    const tabletBrands = carboneData.tablettes;
    let totalEmission = 0;

    if (brands.length > 0) {
        let marqueEmission = 0;
        for (const brand of brands) {
            marqueEmission +=
                tabletBrands[brand.toLowerCase()] || tabletBrands.autre;
        }
        totalEmission =
            ((count + unused) * (marqueEmission / brands.length)) / changeRate;
    } else {
        const moyenneEmission = 80; // kg CO2e en moyenne
        totalEmission = ((count + unused) * moyenneEmission) / changeRate;
    }

    console.log(
        'Empreinte calculée (Tablette):',
        totalEmission.toFixed(2),
        'kg CO2e/an'
    );
    return parseFloat(totalEmission.toFixed(2));
}

export function calculateTVFootprint(data) {
    console.log("Calcul de l'empreinte carbone de la télévision...", data);

    const count = data.count || 0;
    const changeRate = data.changeRate || 5;
    const dailyHours = data.dailyHours || 0;

    if (count === 0) return 0;

    const tvData = carboneData.televisions;
    const fabricationEmission = (count * tvData.television) / changeRate;
    const utilisationEmission =
        (count * (dailyHours * tvData.parJour) * 365) / 1000;
    const totalEmission = fabricationEmission + utilisationEmission;

    console.log(
        'Empreinte calculée (TV):',
        totalEmission.toFixed(2),
        'kg CO2e/an'
    );
    return parseFloat(totalEmission.toFixed(2));
}

export function calculateConsoleFootprint(data) {
    console.log("Calcul de l'empreinte carbone de la console de jeux...", data);

    const count = data.count || 0;
    const changeRate = data.changeRate || 5;
    const weeklyHours = data.weeklyHours || 0;

    if (count === 0) return 0;

    const consoleData = carboneData.consoles;
    const fabricationEmission = (count * consoleData.console) / changeRate;
    const utilisationEmission =
        (count * (weeklyHours * consoleData.parSemaine) * 52) / 1000;
    const totalEmission = fabricationEmission + utilisationEmission;

    console.log(
        'Empreinte calculée (Console):',
        totalEmission.toFixed(2),
        'kg CO2e/an'
    );
    return parseFloat(totalEmission.toFixed(2));
}

/**
 * Fonction pour calculer l'empreinte de la messagerie
 * @param {object} data - Données du formulaire messagerie
 * @param {string[] | undefined} data.services
 * @param {number} data.messagesPerDay
 * @param {number} data.mediaSharedPerDay
 * @param {number} data.emailsSentPerDay
 * @param {number} data.emailsReceivedPerDay
 * @param {string[] | undefined} data.socialNetworks
 * @param {number} data.socialMediaHours
 * @param {number} data.socialMediaShares
 * @returns {number} Empreinte carbone annuelle (kg CO2e/an)
 */
export function calculateMessagingFootprint(data) {
    console.log("Calcul de l'empreinte carbone de la messagerie...", data);
    // Logique de calcul à implémenter
    return 0;
}

/**
 * Fonction pour calculer l'empreinte du streaming
 * @param {object} data - Données du formulaire streaming
 * @param {string[] | undefined} data.videoServices
 * @param {number} data.videoHours
 * @param {string[] | undefined} data.musicServices
 * @param {number} data.musicHours
 * @param {string[] | undefined} data.cloudGamingServices
 * @param {number} data.cloudGamingHours
 * @returns {number} Empreinte carbone annuelle (kg CO2e/an)
 */
export function calculateStreamingFootprint(data) {
    console.log("Calcul de l'empreinte carbone du streaming...", data);
    // Logique de calcul à implémenter
    return 0;
}

/**
 * Fonction pour calculer l'empreinte de l'IA
 * @param {object} data - Données du formulaire IA
 * @param {string[] | undefined} data.aiServices
 * @param {number} data.llmRequests
 * @param {number} data.aiImages
 * @returns {number} Empreinte carbone annuelle (kg CO2e/an)
 */
export function calculateAIFootprint(data) {
    console.log("Calcul de l'empreinte carbone de l'IA...", data);
    // Logique de calcul à implémenter
    return 0;
}

/**
 * Fonction pour calculer l'empreinte du cloud
 * @param {object} data - Données du formulaire Cloud
 * @param {string[] | undefined} data.storageServices
 * @param {number} data.storageSize
 * @param {number} data.filesShared
 * @returns {number} Empreinte carbone annuelle (kg CO2e/an)
 */
export function calculateCloudFootprint(data) {
    console.log("Calcul de l'empreinte carbone du cloud...", data);
    // Logique de calcul à implémenter
    return 0;
}

/**
 * Fonction pour calculer l'empreinte liée au travail
 * @param {object} data - Données du formulaire Travail
 * @param {string[] | undefined} data.proCommunication
 * @param {number} data.proMessages
 * @param {number} data.proEmailsSent
 * @param {number} data.proEmailsReceived
 * @param {number} data.videoConfHours
 * @param {string} data.cameraUsage
 * @returns {number} Empreinte carbone annuelle (kg CO2e/an)
 */
export function calculateWorkFootprint(data) {
    console.log("Calcul de l'empreinte carbone liée au travail...", data);
    // Logique de calcul à implémenter
    return 0;
}
