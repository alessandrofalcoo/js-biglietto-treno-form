const nameEl = document.getElementById('name');


const generate = document.querySelector('button')

generate.addEventListener('click', function () {

    const kmEl = Number(document.getElementById('km').value);
    const ticketPrice = 0.21 * kmEl;

    const underAge_Discount = (ticketPrice / 100) * 20;
    const over_Discount = (ticketPrice / 100) * 40;
    const underAge_Ticket = ticketPrice - underAge_Discount;
    const over_Ticket = ticketPrice - over_Discount;
    const selectAge = document.getElementById('age').value;
    const overAge = document.getElementById('overage').value;
    const underage = document.getElementById('underage').value;
    const over = document.getElementById('over_sixtyFive').value;
/*     let recapName = document.getElementById('passenger_name').value;
 */    let recapPrice = document.getElementById('ticket_price').value;

    if (selectAge == over) {
        recapPrice = Number(over_Ticket.toFixed(2));
    } else if (selectAge == underage) {
        recapPrice = Number(underAge_Ticket.toFixed(2)).innerHTML;
    } else if (selectAge == overAge) {
        recapPrice = Number(ticketPrice.toFixed(2));

    }
})
