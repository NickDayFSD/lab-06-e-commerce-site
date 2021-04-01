import { findById } from './utils.js';

const CART = 'CART';

export function getCart() {
    // this should grab the shopping cart data from local storage
    const stringCart = localStorage.getItem(CART);
    const parseCart = JSON.parse(stringCart);

    //if user has cart, return cart
    if (parseCart) {
        return parseCart;
    } else {
        // if no cart, return blank array
        return [];
    }
}

export function setCart(parseCart) {
    const stringCart = JSON.stringify(parseCart);
    // takes the parsed cart from our code and turns it into a string before sending to storage
    localStorage.setItem(CART, stringCart);
}

export function addItemToCart(productId) {
    //do we have one of these in the cart?
    const cart = getCart();

    const matchingItem = findById(cart, productId);

    // if so, increment the quantity of that item
    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        const item = {
            id: productId,
            quantity: 1
        };

        cart.push(item);
    }
    // save cart in local storage
    setCart(cart);
}
