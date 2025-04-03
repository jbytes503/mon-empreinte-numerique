/**
 * Utilitaires pour calculer l'empreinte carbone des appareils électroniques
 */

// Import des données du fichier data.json
import carboneData from '../lib/data.json';

/**
 * Fonction pour calculer l'empreinte du smartphone
 */
export function calculateSmartphoneFootprint() {
    console.log("Calcul de l'empreinte carbone du smartphone...");

    // Récupérer les valeurs du formulaire
    const count =
        parseInt(document.getElementById('smartphone-count')?.value) || 0;
    const brandCheckboxes = document.querySelectorAll(
        'input[name="smartphone-brand"]:checked'
    );
    const brands = Array.from(brandCheckboxes).map((cb) =>
        cb.value.toLowerCase()
    );
    const changeRate =
        parseFloat(document.getElementById('smartphone-change-rate')?.value) ||
        2;
    const unused =
        parseInt(document.getElementById('smartphone-unused')?.value) || 0;

    // Affichage des valeurs pour debug
    console.log('Nombre de smartphones:', count);
    console.log('Marques:', brands.join(', ') || 'Aucune marque sélectionnée');
    console.log('Fréquence de changement (années):', changeRate);
    console.log('Smartphones inutilisés:', unused);

    // Données des smartphones
    const smartphoneBrands = carboneData.smartphones;

    // Calcul simple de l'empreinte
    let totalEmission = 0;

    if (brands.length > 0) {
        // Avec marques sélectionnées
        let marqueEmission = 0;
        for (const brand of brands) {
            marqueEmission += smartphoneBrands[brand] || smartphoneBrands.autre;
        }
        totalEmission =
            ((count + unused) * (marqueEmission / brands.length)) / changeRate;
    } else {
        // Sans marque sélectionnée (moyenne)
        const moyenneEmission = 60; // kg CO2e en moyenne
        totalEmission = ((count + unused) * moyenneEmission) / changeRate;
    }

    console.log('Empreinte calculée:', totalEmission.toFixed(2), 'kg CO2e/an');
    return totalEmission;
}

/**
 * Fonction pour calculer l'empreinte de l'ordinateur (vide pour l'instant)
 */
export function calculateComputerFootprint() {
    console.log("Calcul de l'empreinte carbone de l'ordinateur...");
    return 0;
}

/**
 * Fonction pour calculer l'empreinte de la tablette (vide pour l'instant)
 */
export function calculateTabletFootprint() {
    console.log("Calcul de l'empreinte carbone de la tablette...");
    return 0;
}

/**
 * Fonction pour calculer l'empreinte de la télévision (vide pour l'instant)
 */
export function calculateTVFootprint() {
    console.log("Calcul de l'empreinte carbone de la télévision...");
    return 0;
}

/**
 * Fonction pour calculer l'empreinte de la console de jeux (vide pour l'instant)
 */
export function calculateConsoleFootprint() {
    console.log("Calcul de l'empreinte carbone de la console de jeux...");
    return 0;
}
