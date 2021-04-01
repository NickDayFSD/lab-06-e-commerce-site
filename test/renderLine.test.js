// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { render } from '../cart/render-line-items.js'

const test = QUnit.test;

test('This test should return the 1200 as the product of quantity 2 and cost 600', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>Animated Armor</td><td>2</td><td>20000</td></tr>';
    

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = render(, 600);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
})