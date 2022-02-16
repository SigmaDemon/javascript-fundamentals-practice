const name = 'Sebastian';
const occupation = 'Developer';

// Functions = a set of code that will do something for us. E.g. Eating
function adder(num1, num2, text) {
    // The body here is a set of instructions
    console.log(num1 + num2);
}

adder(5, 10);

function toUpper(text) {

    // A new variable had to be created to make the text uppercase
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);
toUpper(occupation);

function logger() {
    console.log('Party Time!');
    console.log('Party Time!');
    console.log('Party Time!');
    console.log('Party Time!');
    console.log('Party Time!');
}

// A function does not show anything until this function call happens
logger();


// Functions 2 - Another way
const toLower = function() {

}


// Functions 3 - Modern Version
const toArrow = () => {
    
}


