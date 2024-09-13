function getDayLoop(day) {
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // Vérifie si le numéro du jour est valide
    if (day < 1 || day > 7) {
        return "Numéro de jour invalide";
    }

    // Boucle pour trouver le jour correspondant
    for (let i = 0; i < jours.length; i++) {
        if (day === i + 1) {
            return jours[i];
        }
    }
}

console.log(getDayLoop(3));  // "Mercredi"