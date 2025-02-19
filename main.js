const nameEl = document.getElementById('name');


const generate = document.querySelector('button')

generate.addEventListener('click', function () {

    const kmEl = Number(document.getElementById('km').value);
    const ticketPrice = 0.21 * kmEl;

    const underAge_Discount = (ticketPrice / 100) * 20;
    const over_Discount = (ticketPrice / 100) * 40;
    const underAge_Ticket = ticketPrice - underAge_Discount;
    const over_Ticket = ticketPrice - over_Discount;
    let selectAge = document.getElementById('age').value;
    let overAge = document.getElementById('overage').value;
    let underage = document.getElementById('underage').value;
    let over = document.getElementById('over_sixtyFive').value;

    if (selectAge == over) {
        console.log(Number(over_Ticket.toFixed(2)));
    } else if (selectAge == underage) {
        console.log(Number(underAge_Ticket.toFixed(2)));
    } else if (selectAge == overAge) {
        console.log(Number(ticketPrice.toFixed(2)));

    }
})
