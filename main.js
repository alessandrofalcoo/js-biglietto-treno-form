const nameEl = document.getElementById('name');
const kmEl = document.getElementById('km');
const ticketPrice = 0.21 * kmEl;
console.log(ticketPrice);

const underAge_Discount = (ticketPrice / 100) * 20;
const overAge_Discount = (ticketPrice / 100) * 40;
const underAge_Ticket = ticketPrice - underAge_Discount;
const over_Ticket = ticketPrice - overAge_Discount;
const selectAge = document.getElementById('age');
const overAge = document.getElementById('overage');
const underage = document.getElementById('underage');
const over = document.getElementById('over_sixtyFive');


if (selectAge == over) {
    console.log(over_Ticket);
} else if (selectAge == underage) {
    console.log(underAge_Ticket);
} else {
    console.log(ticketPrice);

}
