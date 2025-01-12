//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const scoreValue = 100.3
console.log(scoreValue);


const id = Symbol('123') // Creates a unique symbol
const anotherId = Symbol('123'); // Creates a new unique symbol
console.log(id === anotherId); //false 

const bigNumber = 3456543576654356754n // n will make it BigInt
console.log(bigNumber); //3456543576654356754n
console.log(typeof bigNumber); //bigint

console.log(5n + 10); // TypeError

console.log(10n / 3n); // 3n




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //symbol
console.log(typeof myFunction); //function
console.log(typeof heros); //object


// https://262.ecma-international.org/5.1/#sec-11.4.3