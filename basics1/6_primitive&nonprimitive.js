//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const scoreValue = 100.3
console.log(scoreValue);


const id = Symbol('123') // Creates a unique symbol
const anotherId = Symbol('123'); // Creates a new unique symbol
console.log(id === anotherId); //false 

const bigNumber = 3456543576654356754n // n will make it BigInt
console.log(bigNumber); //3456543576654356754n
console.log(typeof bigNumber); //bigint

// console.log(5n + 10); // TypeError

console.log(10n / 3n); // 3n




// Reference (Non primitive) => [] , {} , ()

// Array, Objects, Functions

// aisi koi bhi value jise copy karne par real copy nahi hota , balki uss main value ka reference pass ho jata hai use hum reference value kehte h

// aur jiska copy karne par real copy ho jae wo value primitive type hota h

// example

var a = [9,10];
var b = a; // 9 aur 10 ab a ke bhi hai aur b ke bhi . b usme change karega to a me bhi change hoga
b.pop() 
console.log(b) // 9
console.log(a); // 9

// 


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


//  Memory in JS

// 1. Stack (Primitive)    2. Heap (Non-p)

// stack me hamesha copy milti hai 
// 
// heap me original value m change aata h mtlb reference milta h



// Stack : Primitive types , function calls

// Heap : Objects, reference types


// https://262.ecma-international.org/5.1/#sec-11.4.3