
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