import { monsters } from '../monsters.js';
import { getCart } from '../local-storage-utils.js';
import {
    findById,
    render,
    calcOrderTotal
} from '../utils.js';

// get url from DOM
const table = document.querySelector('.cart-list');

// get cart from local storage
const cart = getCart();

// append tr to table
for (let line of cart) {
    // findById to find corresponding product
    const selectedMonster = findById(monsters, line.id);
    // pass these to render and capture in variable
    const tr = render(line, selectedMonster);
    // append table body
    table.append(tr);
}

const total = calcOrderTotal(cart, monsters);
const tdTotal = document.createElement('td');
tdTotal.textContent = 'TOTAL:';
const tdBlank2 = document.createElement('td');
table.append(tdBlank2, tdTotal, `${total} silver`);

// place order, clear cart, and redirect to home page
const orderButton = document.getElementById('place-order');

orderButton.addEventListener('click', () => {
    const confirmPurchase = confirm(`Your total is ${total} silver pieces. Proceed?`);

    if (!confirmPurchase) {
        alert('Order Cancelled');
        localStorage.clear();
        return;
    }

    //
    alert('Order Confirmed. Expect delivery within a fortnight.');
    localStorage.clear();
    window.location.href = '../index.html';
});
