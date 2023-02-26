// Date actuelle
const maintenant = new Date()

//Date de fin du compteur
const noel = new Date("2023-12-25T00:00:00")

//Durée entre les 2 dates
const duree = noel - maintenant

// Calcul du nombre de jour dans la durée
// durée d'un jour : 24h * 60min * 60s * 1000ms
// 86 400 000 ms
let jours = Math.floor(duree / ( 24 * 60 * 1000 ))

// on calcule le temps restant après retrait des jours
// let reste = duree - (jours * 86400000)
let reste = duree % ( 24 * 60 * 60 * 1000 )
// % est le modulo (il donne le reste des divisions euclidiennes)

// Calcul du nombre d'heures dans le "reste"
// Durée d'une heure : 60 min * 60 s * 1000 ms
// 3 600 000 ms
let heures = Math.floor(reste / (60*60*1000))
//Math.floor pour obtenir un entier

// On calcule le temps restant après retrait des heures 
reste = reste % (60* 60 * 1000)

// Calcul du nombre de minutes dans le reste
// Durée d'une minute : 60s * 1000ms
let minutes = Math.floor(reste / (60 * 1000))

reste = reste % (60*1000)

let secondes = Math.floor(reste / 1000)

let interval 
window.onload = ()=> {
    afficheNombre()

    interval = setInterval(decompte, 1000)
}

/**
 * Cette fonction met à jour le nouvel affichage.
 */

function afficheNombre(){
document.querySelector("#jours").innerText = jours
document.querySelector("#heures").innerText = heures
document.querySelector("#minutes").innerText = minutes
document.querySelector("#secondes").innerText = secondes
//La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée.
}


/**
 * Décompte 1seconde
 */
function decompte(){
    if(secondes){
        secondes--
    }else if(minutes){
        secondes = 59
        minutes--
    }else if(heures){
        secondes = minutes = 59
        heures--
    }else if(jours){
        secondes = minutes = 59
        heures = 23
        jours--
    }else {
        clearInterval(interval)
    }
    afficheNombre()
}