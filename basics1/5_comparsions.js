console.log(null == null);
console.log(undefined == null); //true
console.log(null==0); //false bcz it not convert null to number
console.log(null>0); //false
console.log(null>=0); //true bcz null ---> 0 by >= operator
console.log(null == NaN); // false 
console.log(NaN == NaN); // false 
console.log(undefined == undefined); // true


// same goes with undefined

/* The reason is that an equality check == and comparisons > < >= <= work differently. 

Comparisons convert null to a number, treating it as 0. 

That’s why null >= 0 is true and null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why  null == 0 is false.

null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

null == null; // true
null == undefined; // true
Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero. */

// console.log("2" == 2); //true
// console.log("2" === 2); //false bcz strictly check value as well as datatype

console.log(null === null); // true
console.log(undefined === null); // false
console.log(undefined  === undefined ); // true
console.log(NaN === NaN); // false





