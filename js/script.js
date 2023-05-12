let userAge = parseInt(prompt("Inserisci qui la tua età"));
let userJourney = parseInt(prompt("Inserisci qui la quantità di km che vuoi percorrere"));

document.getElementById("yourAgeIs").innerHTML += userAge + " anni";
document.getElementById("yourJourneyIs").innerHTML += userJourney + " km";

const ticketCost = 0.21 * userJourney;

document.getElementById("ticketPrice").innerHTML += ticketCost