//create monsters function

import { addItemToCart } from './local-storage-utils.js';

export function createMonsterListing(monsters) {
    const li = document.createElement('li');

    li.classList.add('monsters');
    li.style.borderColor = monsters.dangerLevel;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = monsters.name;

    const pCategory = document.createElement('p');

    pCategory.classList.add('category');
    pCategory.textContent = monsters.category;

    const image = document.createElement('img');

    image.src = monsters.image;

    const pDescription = document.createElement('p');

    pDescription.classList.add('description');
    pDescription.textContent = monsters.description;

    const pTamed = document.createElement('p');

    pTamed.textContent = monsters.isTamed ? 'Ready to obey you' : 'A danger to you and everyone else';

    const pPrice = document.createElement('p');

    pPrice.textContent = monsters.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }); 
    const button = document.createElement('button');

    button.addEventListener('click', () => {
        addItemToCart(monsters.id);
    });

    button.textContent = 'Add to defense budget';

    li.append(pName, pCategory, image, pDescription, pTamed, pPrice, button);

    return li;
}

export function findById(someArray, someId) {
    for (let item of someArray) {
        if (item.id === someId) {
            return item;
        }
    }
}

export function calcItemTotal(quantity, cost) {
    return quantity * cost;
}

export function render(cartItem, selectedMonster) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');
    
    tdName.textContent = selectedMonster.name;
    tdQuantity.textContent = cartItem.quantity;
    tdPrice.textContent = `${calcItemTotal(selectedMonster.price, cartItem.quantity)} silver`;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function calcOrderTotal(cart, monsters) {
    // create total variable
    let total = 0;
    // loop cart items and use calcItemTotal to calculate each line
    for (let line of cart) {
        const selectedMonster = findById(monsters, line.id);
        total = calcItemTotal(selectedMonster.price, line.quantity) + total;
    }
    // return order total
    return total;
}

