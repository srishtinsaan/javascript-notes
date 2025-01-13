// concatenation

const a = 'meow'
const b = 3
console.log(a+b); //mw3

// string interpolation
console.log(`the cat says ${a} , ${b} times`);

// one more way to declare a string
const c =  new String('hello') // it has following adv..

//  when run ^ line on console we get something like this...
// 0:H
// 1:E
// 2:l
// 3:l
// 4:o    ... thses are key-value pair 
// length : 5    .... we also get length 
// prototype


console.log(c[0]); //H
console.log(c[-1]); //undefined 
console.log(c.__proto__); //2 underscores each side   used to get prototype 
                          // output : String('') mtlb it says ki ye ek obj h

console.log(c.toUpperCase()); // original value change hui kya??....naheueueeuee bcz stack haiiiii

console.log(c.charAt(0));

console.log(c.indexOf('l')); //2

// slice and substring

// substring
console.log(c.substring(0,4)); //HELL
console.log(c.substring(-7,4)); //HELL ... treat -ve value as 0

// slice
console.log(c.slice(0,4)); //hell
console.log(c.slice(-4,3)); //el

//trim
let d = '    ram       '
console.log(d.trim()); // remove spaces


// replace
let email = 'https://bittu/rammm singhhhh'
console.log(email.replace(' ','-')); //^-^

// includes
console.log(email.includes('ram')); //true ... ye batata h this word is there or not





