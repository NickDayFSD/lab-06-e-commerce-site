## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

## HTML
1) Monsters for Sale!
2) Containing UL
3) Item number
4) Description
 - Property | Description

 ## Cart
 1) render out a table
  - make some cart data (hard coded for sample)
  - for each item in the cart, we need to go to the products array to get the price and name
  - use the 'relational' data (renderFunction) to make table rows
  - loop through the cart and append table rows to our HTML table

function findById(someArray, someId) {
    for (let item of someArray) {
        if (item.id === someId) {
            return item;
        }
    }
}

