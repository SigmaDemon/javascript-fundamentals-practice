// If-Else Statements
const clientAge = 20;

// We can use '==' but the triple one is more accurate in case we get similar values but of different data type
if (clientAge === 18) {
    console.log('You are good to Vape!');
} else if (clientAge < 15) {
    console.log(`I'm afraid you don't quadrate in the age regulations we provide.`);
}
else {
    console.log('Sorry, you are not old enough');
}



const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 && dice2 === 6) {
    console.log('You rolled a Double!');
}
else {
    console.log('You did not roll too well!');
}

