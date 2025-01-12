let score = 10
console.log(score) // 10

score = '10'
console.log(score) //10
console.log(typeof score); //string

score = Number(score)
console.log(typeof score); //number

score = '10abc'
console.log(typeof score); //string


score = Number(score) //still becomes a Number WTH !!!!!!
console.log(score); // NaN '-.-'

// You cannot directly compare a value to NaN using == or ===. 
// Instead, you should use the isNaN() function

console.log(typeof score); //typeof NaN is a NUMBER

// NaN is special type of numeric value


score = null
console.log(typeof score); //object

score = Number(score)
console.log(score); //0


score = undefined
console.log(typeof score); //undefined

score = Number(score)
console.log(score); //NaN


score = true
console.log(typeof score); //boolean

score = Number(score)
console.log(score); //1


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false ~~~~~~~~~~~~
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);













