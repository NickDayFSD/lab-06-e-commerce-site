// get monsters' data
import { monsters } from '../monsters.js';
import { createMonsterListing } from '../utils.js';

// get url from DOM
const ul = document.querySelector('.monster-list');

// append li to ul
for (let grrr of monsters) {
    const li = createMonsterListing(grrr);
    ul.append(li);
}