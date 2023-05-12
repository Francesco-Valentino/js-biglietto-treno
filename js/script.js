let userAge = parseInt(prompt("Inserisci qui la tua età"));
let userJourney = parseInt(prompt("Inserisci qui la quantità di km che vuoi percorrere"));

document.getElementById("yourAgeIs").innerHTML += userAge + " anni";
document.getElementById("yourJourneyIs").innerHTML += userJourney + " km";

let ticketCost = 0.21 * userJourney;
ticketCost = ticketCost.toFixed(2)
const underEighteenDiscount = (20 / 100) * ticketCost
const overSixtyfiveDiscount = (40 / 100) * ticketCost

if (userAge < 18){
    ticketCost -= underEighteenDiscount 
} else if (userAge >= 65){
    ticketCost -= overSixtyfiveDiscount
}

document.getElementById("ticketPrice").innerHTML += ticketCost