// IMP FOR INTERVIEW

const no = new Number(4) // OBJECT
console.log(no); //Number (4)
// this no is an object by creating it this way
// we get to see many functions of numbers on inspect by writing like this

// toString
let x = 123;
console.log(x.toString()); //123

// lrngth
console.log(no.length); //undefined ...bcz no is an obj and length works with arrays etc not with primitives
console.log(no.toString().length); //1 ...toString() returns a number as a string.

// toFixed
let temp = no.toFixed(2)
console.log(temp); //4.00

// toPrecision ....SIGNIFICANT DIGITS
const n = 123.89
// console.log(n.toPrecision(0)); //error ... arg must >0
console.log(n.toPrecision());  //123.89 .. No precision at all
console.log(n.toPrecision(1)); //1e + 2  ..representing the number in scientific notation with one significant digit. 
console.log(n.toPrecision(2)); //1.2e + 2 ...+2 is the exponent of 10.
console.log(n.toPrecision(3)); //124  (with round off)
console.log(n.toPrecision(4)); //123.9 (with round off)
console.log(n.toPrecision(5)); //123.89

// toLocaleString
const o = 100000000;
console.log(o.toLocaleString()); //100,000,000
console.log(o.toLocaleString(`en-IN`)); //10,00,00,000 ...(Bharatiya^-^)








