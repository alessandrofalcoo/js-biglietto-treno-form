const nameEl = document.getElementById('name');
const kmEl = document.getElementById('km');
const ticketPrice = 0.21 * kmEl;
const underAge_Discount = (ticketPrice/100) * 20;
const overAge_Discount = (ticketPrice/100) * 40;
const underAge_Ticket = ticketPrice - underAge_Discount;
const overAge_Ticket = ticketPrice - overAge_Discount;
