import { monsters } from '../monsters.js';
import { cart } from './cart.js';
import {
    findById,
    render,
    calcOrderTotal
} from '../utils.js';

// get url from DOM
const table = document.querySelector('.cart-list');

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
const tdBlank = document.createElement('td');
const tdBlank2 = document.createElement('td');
table.append(tdBlank, tdBlank2, total);
