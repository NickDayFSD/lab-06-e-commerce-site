import { getCart, setCart, addItemToCart } from '../local-storage-utils.js';
import { findById } from '../utils.js'

const test = QUnit.test;

test('setCart should put our cart into localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const sillyCart = [
        {
            id: 3,
            quantity: 3
        },
        {
            id: 4,
            quantity: 5
        }
    ];

    setCart(sillyCart);

    const cartInLocalStorage = JSON.parse(localStorage.getItem('CART'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(sillyCart, cart);
});