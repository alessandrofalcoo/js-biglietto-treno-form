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
    const username = document.getElementById('username').value;
    let recapName = document.getElementById('passenger_name');
    let recapPrice = document.getElementById('ticket_price');
    console.log(username);
    recapName.innerHTML = username;

    if (selectAge == over) {
        recapPrice.innerHTML = Number(over_Ticket.toFixed(2));
    } else if (selectAge == underage) {
        recapPrice.innerHTML = Number(underAge_Ticket.toFixed(2));
    } else if (selectAge == overAge) {
        recapPrice.innerHTML = Number(ticketPrice.toFixed(2));

    }
})


