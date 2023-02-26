// Date actuelle
const maintenant = new Date()

//Date de fin du compteur
const noel = new Date("2023-12-25T00:00:00")

//Durée entre les 2 dates
const duree = noel - maintenant

// Calcul du nombre de jour dans la durée
// durée d'un jour : 24h * 60min * 60s * 1000ms
// 86 400 000 ms
console.log(duree)