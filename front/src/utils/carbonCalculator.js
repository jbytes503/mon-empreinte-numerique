import carboneData from '../lib/data.json';

export function calculateSmartphoneFootprint(data) {
    console.log("Calcul de l'empreinte carbone du smartphone...", data);
    const count = data.count;
    const changeRate = data.changeRate;
    const unused = data.unused;

    if (count === 0 && unused === 0) return 0;

    const manufacturingEmissionPerDevice = data.brands?.length
        ? data.brands.reduce((sum, brand) => {
              return (
                  sum +
                  (carboneData.smartphones[brand] ||
                      carboneData.smartphones.autre)
              );
          }, 0) / data.brands.length
        : carboneData.smartphones.autre;

    const annualManufacturing =
        changeRate > 0
            ? (manufacturingEmissionPerDevice * count) / changeRate
            : 0;
    const unusedImpact =
        changeRate > 0 && unused > 0
            ? (manufacturingEmissionPerDevice * unused) / changeRate
            : 0;

    const totalEmission = annualManufacturing + unusedImpact;
    console.log(
        `Empreinte carbone des smartphones: ${totalEmission.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission.toFixed(2));
}

export function calculateComputerFootprint(data) {
    console.log("Calcul de l'empreinte carbone de l'ordinateur...", data);
    const count = data.count;
    const changeRate = data.changeRate;
    const unused = data.unused;

    if (count === 0 && unused === 0) return 0;

    const typeEmissions = (data.types || ['portable']).map((type) => {
        switch (type) {
            case 'portable':
                return carboneData.ordinateurs.ordinateur_portable;
            case 'bureau':
                return carboneData.ordinateurs.ordinateur_fixe_professionel;
            case 'perso':
                return carboneData.ordinateurs.ordinateur_fixe_personnesl;
            case 'portable_pro':
                return carboneData.ordinateurs.ordinateur_portable;
            default:
                return carboneData.ordinateurs.ordinateur_portable;
        }
    });
    const avgTypeEmission =
        typeEmissions.reduce((a, b) => a + b, 0) / typeEmissions.length;

    const avgBrandEmission = data.brands?.length
        ? data.brands.reduce((sum, brand) => {
              return (
                  sum +
                  (carboneData.ordinateurs[brand] ||
                      carboneData.ordinateurs.autre)
              );
          }, 0) / data.brands.length
        : carboneData.ordinateurs.autre;

    const finalBrandEmission = data.brands?.length
        ? avgBrandEmission
        : avgTypeEmission;
    const manufacturingEmissionPerDevice =
        (avgTypeEmission + finalBrandEmission) / 2;

    const annualManufacturing =
        changeRate > 0
            ? (manufacturingEmissionPerDevice * (count + unused)) / changeRate
            : 0;

    const totalEmission = annualManufacturing;
    console.log(
        `Empreinte carbone des ordinateurs: ${totalEmission.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission.toFixed(2));
}

export function calculateTabletFootprint(data) {
    console.log("Calcul de l'empreinte carbone de la tablette...", data);
    const count = data.count;
    const changeRate = data.changeRate;
    const unused = data.unused;

    if (count === 0 && unused === 0) return 0;

    const manufacturingEmissionPerDevice = data.brands?.length
        ? data.brands.reduce((sum, brand) => {
              return (
                  sum +
                  (carboneData.tablettes[brand] || carboneData.tablettes.autre)
              );
          }, 0) / data.brands.length
        : carboneData.tablettes.autre;

    const annualManufacturing =
        changeRate > 0
            ? (manufacturingEmissionPerDevice * (count + unused)) / changeRate
            : 0;

    const totalEmission = annualManufacturing;
    console.log(
        `Empreinte carbone des tablettes: ${totalEmission.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission.toFixed(2));
}

export function calculateTVFootprint(data) {
    console.log("Calcul de l'empreinte carbone de la télévision...", data);
    const count = data.count;
    const changeRate = data.changeRate;
    const dailyHours = data.dailyHours || 0;

    if (count === 0) return 0;

    const manufacturingEmissionPerDevice = carboneData.televisions.television;
    const annualManufacturing =
        changeRate > 0
            ? (manufacturingEmissionPerDevice * count) / changeRate
            : 0;

    const typicalDailyHours = 3;
    const usagePerTVperYear = carboneData.televisions.usage_annuel_television;
    const annualUsage =
        count * usagePerTVperYear * (dailyHours / typicalDailyHours);

    const totalEmission = annualManufacturing + annualUsage;
    console.log(
        `Empreinte carbone des télévisions: ${totalEmission.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission.toFixed(2));
}

export function calculateConsoleFootprint(data) {
    console.log("Calcul de l'empreinte carbone de la console de jeux...", data);
    const count = data.count;
    const changeRate = data.changeRate;
    const weeklyHours = data.weeklyHours || 0;

    if (count === 0) return 0;

    const manufacturingEmissionPerDevice = carboneData.consoles.console;
    const annualManufacturing =
        changeRate > 0
            ? (manufacturingEmissionPerDevice * count) / changeRate
            : 0;

    const typicalWeeklyHours = 10;
    const usagePerTVperWeek_g = carboneData.consoles.parSemaine;
    const annualUsage_g =
        count * usagePerTVperWeek_g * 52 * (weeklyHours / typicalWeeklyHours);
    const annualUsage_kg = annualUsage_g / 1000;

    const totalEmission = annualManufacturing + annualUsage_kg;
    console.log(
        `Empreinte carbone des consoles de jeux: ${totalEmission.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission.toFixed(2));
}

export function calculateMessagingFootprint(data) {
    console.log("Calcul de l'empreinte carbone de la messagerie...", data);
    let totalEmission_g = 0;

    // message texte perso
    const avgMessageFactor_g = data.services?.length
        ? data.services.reduce(
              (sum, service) =>
                  sum +
                  (carboneData.messagers[service] ||
                      carboneData.messagers.autreMessagerie),
              0
          ) / data.services.length
        : carboneData.messagers.autreMessagerie;
    totalEmission_g += (data.messagesPerDay || 0) * 365 * avgMessageFactor_g;

    // video par message
    const mediaFactor_g = carboneData.messagers.envoiePhoto;
    totalEmission_g += (data.mediaSharedPerDay || 0) * 365 * mediaFactor_g;

    // mail perso
    totalEmission_g +=
        (data.emailsSentPerDay || 0) * 365 * carboneData.messagers.envoieEmail;
    totalEmission_g +=
        (data.emailsReceivedPerDay || 0) *
        365 *
        carboneData.messagers.recepEmail;

    // reseaux sociaux
    const avgSocialFactorPerHour_g = data.socialNetworks?.length
        ? data.socialNetworks.reduce(
              (sum, network) =>
                  sum +
                  (carboneData.messagers[network] ||
                      carboneData.messagers.autreReseau),
              0
          ) / data.socialNetworks.length
        : 0;
    totalEmission_g +=
        (data.socialMediaHours || 0) * 365 * avgSocialFactorPerHour_g;

    // photo video sur réseaux sociaux
    totalEmission_g += (data.socialMediaShares || 0) * 365 * mediaFactor_g;

    const totalEmission_kg = totalEmission_g / 1000; // conversion
    console.log(
        `Empreinte carbone de la messagerie: ${totalEmission_kg.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission_kg.toFixed(2));
}

export function calculateStreamingFootprint(data) {
    console.log("Calcul de l'empreinte carbone du streaming...", data);
    let totalEmission_g = 0;

    // straming video
    const avgVideoFactorPerHour_g = data.videoServices?.length
        ? data.videoServices.reduce(
              (sum, service) =>
                  sum +
                  (carboneData.streaming[service] ||
                      carboneData.streaming.autreStreamingVideo),
              0
          ) / data.videoServices.length
        : 0;
    totalEmission_g += (data.videoHours || 0) * 365 * avgVideoFactorPerHour_g;

    // musique
    // TODO : ALLER CHERCHER LE FACTEUR
    const musicFactorPerHour_g = 5; // 5 gCO2e/heure
    if (data.musicServices?.length) {
        totalEmission_g += (data.musicHours || 0) * 365 * musicFactorPerHour_g;
    }

    // cloud gaming
    const avgGamingFactorPerHour_g = data.cloudGamingServices?.length
        ? data.cloudGamingServices.reduce(
              (sum, service) =>
                  sum +
                  (carboneData.messagers[service] ||
                      carboneData.messagers.autreCloudGaming),
              0
          ) / data.cloudGamingServices.length
        : 0;
    totalEmission_g +=
        (data.cloudGamingHours || 0) * 52 * avgGamingFactorPerHour_g;

    const totalEmission_kg = totalEmission_g / 1000;
    console.log(
        `Empreinte carbone du streaming: ${totalEmission_kg.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission_kg.toFixed(2));
}

export function calculateAIFootprint(data) {
    console.log("Calcul de l'empreinte carbone de l'IA...", data);
    let totalEmission_g = 0;

    const avgAiFactorPerRequest_g = data.aiServices?.length
        ? data.aiServices.reduce(
              (sum, service) =>
                  sum + (carboneData.IA[service] || carboneData.IA.Autre),
              0
          ) / data.aiServices.length
        : 0;

    // requêtes LLM
    totalEmission_g += (data.llmRequests || 0) * 365 * avgAiFactorPerRequest_g;

    // génération d'images
    totalEmission_g += (data.aiImages || 0) * 365 * avgAiFactorPerRequest_g;

    const totalEmission_kg = totalEmission_g / 1000;
    console.log(
        `Empreinte carbone de l'IA: ${totalEmission_kg.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission_kg.toFixed(2));
}

export function calculateCloudFootprint(data) {
    console.log("Calcul de l'empreinte carbone du cloud...", data);
    let totalEmission_kg = 0;

    // stockage
    const avgStorageFactorPerGbPerMonth_mg = data.storageServices?.length
        ? data.storageServices.reduce(
              (sum, service) =>
                  sum +
                  (carboneData.stockage[service] ||
                      carboneData.stockage.autreStockage),
              0
          ) / data.storageServices.length
        : 0;
    const storageEmissionAnnual_mg =
        (data.storageSize || 0) * avgStorageFactorPerGbPerMonth_mg * 12;
    totalEmission_kg += storageEmissionAnnual_mg / 1000000;

    // TODO : ALLER CHERCHER LE FACTEUR
    const fileShareFactor_g = 1;
    const fileShareEmissionAnnual_g =
        (data.filesShared || 0) * 365 * fileShareFactor_g;
    totalEmission_kg += fileShareEmissionAnnual_g / 1000;

    console.log(
        `Empreinte carbone du cloud: ${totalEmission_kg.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission_kg.toFixed(2));
}

export function calculateWorkFootprint(data) {
    console.log("Calcul de l'empreinte carbone liée au travail...", data);
    let totalEmission_g = 0;
    let totalEmission_kg = 0;

    // emails professionnels
    totalEmission_g +=
        (data.proEmailsSent || 0) * 365 * carboneData.messagers.envoieEmail;
    totalEmission_g +=
        (data.proEmailsReceived || 0) * 365 * carboneData.messagers.recepEmail;

    // messages professionnels
    const avgProMessageFactor_g = carboneData.messagers.autreMessagerie;
    totalEmission_g += (data.proMessages || 0) * 365 * avgProMessageFactor_g;

    // visioconférence
    const avgVideoConfFactorPerHour_g = data.proCommunication?.length
        ? data.proCommunication.reduce(
              (sum, service) =>
                  sum +
                  (carboneData.professionnel[service] ||
                      carboneData.professionnel.autre),
              0
          ) / data.proCommunication.length
        : 0;
    let videoConfEmission_g =
        (data.videoConfHours || 0) * 52 * avgVideoConfFactorPerHour_g; // Heures par semaine -> année

    // TODO : ALLER CHERCHER LE FACTEUR
    let cameraMultiplier = 1.0;
    if (data.cameraUsage === 'always') cameraMultiplier = 1.2;
    if (data.cameraUsage === 'sometimes') cameraMultiplier = 1.1;
    videoConfEmission_g *= cameraMultiplier;

    totalEmission_g += videoConfEmission_g;

    totalEmission_kg = totalEmission_g / 1000;

    console.log(
        `Empreinte carbone liée au travail: ${totalEmission_kg.toFixed(2)} kg CO2e/an`
    );
    return parseFloat(totalEmission_kg.toFixed(2));
}
