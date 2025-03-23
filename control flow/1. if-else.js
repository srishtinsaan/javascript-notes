// ------------------------------------- if else -------------------------
// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    var power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`); // User power: fly

// so var has GLOBAL scope that's why we don't use it

// if this was ... let

// console.log(`User power: ${power}`); //error



// ----------------------- else if -------------

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); ... we can write like this in one line

// this is called...... IMPLICIT SCOPE but this way don't write 

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}