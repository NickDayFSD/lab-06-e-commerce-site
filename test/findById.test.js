// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils.js'
import { calcItemTotal } from '../utils.js'

const test = QUnit.test;

test('This test should return sampleArray[2] as a match from sampleArray', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const sampleArray = [
        {
            id: 'breakfast',
            item: 'Oatmeal'
        },
        {
            id: 'lunch',
            item: 'soup'
        },
        {
            id: 'dinner',
            item: 'steak'
        }
    ]

    const expected = sampleArray[2];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(sampleArray, 'dinner');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.Equal(actual, expected);
});

test('This test should return the 1200 as the product of quantity 2 and cost 600', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1200;
    

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(2, 600);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
})

test('', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1200;
    

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(2, 600);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
})