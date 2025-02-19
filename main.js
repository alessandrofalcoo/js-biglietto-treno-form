const nameEl = document.getElementById('name');
const kmEl = Number(document.getElementById('km').value);


const generate = document.querySelector('button')

generate.addEventListener('click', function () {

    const ticketPrice = 0.21 * kmEl;
    const underAge_Discount = (ticketPrice / 100) * 20;
    const overAge_Discount = (ticketPrice / 100) * 40;
    const underAge_Ticket = ticketPrice - underAge_Discount;
    const over_Ticket = ticketPrice - overAge_Discount;
    let selectAge = document.getElementById('age').value;
    let overAge = document.getElementById('overage').value;
    let underage = document.getElementById('underage').value;
    let over = document.getElementById('over_sixtyFive').value;

    if (selectAge = over) {
        console.log(over_Ticket);
    } else if (selectAge = underage) {
        console.log(underAge_Ticket);
    } else if (selectAge = overAge) {
        console.log(ticketPrice);

    }
})
