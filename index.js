// Global scope variable: array of burger options
const burgers = ['Hamburger', 'Cheeseburger'];

// Global scope variable: featured drink
let featuredDrink = 'Strawberry Milkshake';

// Function to add a new burger to the burgers array
function addBurger() {
    // Function-scoped variable, only accessible within addBurger
    const newBurger = 'Flatburger';

    // Add newBurger to the end of the burgers array
    burgers.push(newBurger);
}

// If statement with a condition that is always true
if (true) {
    // Block-scoped variable, only accessible within this if block
    const anotherNewBurger = 'Maple Bacon Burger';

    // Add anotherNewBurger to the end of the burgers array
    burgers.push(anotherNewBurger);
}

// Function to change the featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}