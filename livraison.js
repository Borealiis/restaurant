const openClose = () => {
    const now = new Date()
    const day = now.getDay()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    setTimeout(openClose, 1000)
    if ((day > 1 && (((hours === 11 && minutes >= 30) || (hours >= 12 && hours < 14)) || ((hours >= 18 && hours < 22)|| (hours === 22 && minutes < 30)))) || (day === 0 && ((hours === 11 && minutes >= 30) || (hours >= 12 && hours < 14)))){
        return true
    } 
    else {
        return false
    }
}
const opening = document.querySelector('.opening')
if (openClose()) {
    opening.textContent = 'open'
} else {
    opening.textContent = 'closed'
}

const livraison = () => {
    let now = new Date()
    // let timeToNextOpening // CALCUL MAGIQUE PRISE DE TÊTE
    let openDelay = Math.floor(Math.random() * 10)
    let closeDelay = Math.floor(Math.random() * (50 - 31) + 30)
    let deliveryTime
    let openingHours
    let delayToOpening
    if (openClose()) {
        deliveryTime = now.getTime() + ((openDelay + 30) * 60 * 1000)
    }
    else {
        if ((now.getHours() >= 14 && now.getHours() < 18) && now.getDay() !== 0 && now.getDay() !== 1) {
            console.log('Apres-Midi')
            openingHours = now
            openingHours.setHours(18)
            openingHours.setMinutes(00)
            openingHours.setSeconds(00)
            delayToOpening = openingHours.getTime() - now.getTime()
            deliveryTime = now.getTime() + delayToOpening + (closeDelay * 60 * 1000)
        } else if (now.getHours() < 11 && now.getDay() !== 1) {
            console.log('matin')
            openingHours = now
            openingHours.setHours(11)
            openingHours.setMinutes(00)
            openingHours.setSeconds(00)
            delayToOpening = openingHours.getTime() - now.getTime()
            deliveryTime = now.getTime() + delayToOpening + (closeDelay * 60 * 1000)
        } else if ((now.getHours() === 22 && now.getMinutes() >= 30) || now.getHours() > 22 || now.getDay() === 1) {
            console.log('soir ou lundi')
            openingHours = now
            let day = openingHours.getDate()
            console.log(day)
            openingHours.setDate(day + 1)
            openingHours.setHours(11)
            openingHours.setMinutes(00)
            openingHours.setSeconds(00)
            delayToOpening = openingHours.getTime() - now.getTime()
            deliveryTime = now.getTime() + delayToOpening + (closeDelay * 60 * 1000)
            console.log(deliveryTime / (1000 * 60 * 60))
        } else if (now.getDay() === 0 && now.getHours() >= 14) {
            console.log('dimanche apres midi')
            openingHours = now
            let day = openingHours.getDate()
            openingHours.setDate(day + 2)
            console.log(openingHours)
            openingHours.setHours(11)
            openingHours.setMinutes(00)
            openingHours.setSeconds(00)
            delayToOpening = openingHours.getTime() - now.getTime()
            deliveryTime = now.getTime() + delayToOpening + (closeDelay * 60 * 1000)
        }
    }
    return deliveryTime
}
let x = livraison() // j'enferme la valeur de deliveryTime dans x car j'ai besoin qu'elle reste fixe

const change = () => {
    const now = new Date()
    const there = x
    const nowToThere = there - now.getTime() // nowToThere va diminuer à chaque seconde grâce au setTimeout, d'ou le besoin d'avoir x qui ne bouge pas, donc de l'avoir déclarer à l'extérieur de la fonction 
    if (nowToThere <= 0) {
        return
    }
    let hours = Math.floor(nowToThere / (1000 * 60 * 60)) // pour n'avoir que les heures (nombre entier)
    if (hours < 10 && hours !== 0) {
        hours = '0' + hours
    }
    let minutes = Math.floor((nowToThere - (hours * (1000 * 60 * 60))) / (1000 * 60)) // pour n'avoir que les minutes (nombre entier)
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    let seconds = Math.floor((nowToThere - (hours * (1000 * 60 * 60)) - (minutes * (1000 * 60))) / 1000) // pour n'avoir que les secondes (nombre entier)
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    
    if (hours > 0) {
        console.log(hours + ':' + minutes + ':' + seconds)
        // time.textContent = hours + ':' + minutes + ':' + seconds
    } else if (minutes > 0) {
        console.log(minutes + ':' + seconds)
        // time.textContent = minutes + ':' + seconds
    } else {
        console.log(seconds)
        // time.textContent = seconds
    }
    setTimeout(change, 1000)
}

change()