//Objects - They are similar to variables, but with 'properties' instead of values
const user = {
    name: 'Sebastian',
    age: 24,
    married: false,
    purchases: ['phone', 'car', 'laptop'],

    // Methods - those are functions attached to an object
    // This is how we write object methods
    sayName: function () {
        // The keyword 'this' will not print until we invoke the function
        // 'this' refers to the object name (in this case, it refers to 'user')
        console.log(this.name);
    }
};

console.log(user.purchases);

// Using this function call, we canuse the 'this' keyword within the object above to capture our name
user.sayName();

// The Keyword '.this' - 
// What 'this' does in the console log statement is displaying in the console an object with all the functions we can do in JavaScript
console.log(this);



// My Practice Exercise:
const toy = {
    name: 'football',
    bought: false,
    weight: 460,
    price: 4.99,
    purposes: ['Playing Football', 'Playing with Dog', 'Breaking Windows'],
    nameYourPrice: function () {
        console.log(this.price);
    }
};

console.log(toy.purposes);

toy.nameYourPrice();

