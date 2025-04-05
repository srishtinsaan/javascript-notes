// IMP FOR INTERVIEW


// concatenation
const a = 'meow' // PRIMITIVE TYPE
const b = 3
console.log(a+b); //meow3

// string interpolation
console.log(`the cat says ${a} , ${b} times`);

// one more way to declare a string
const c =  new String('hello')  // OBJECT

// it has following adv..

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

console.log(c.toUpperCase()); // original value change hui kya??....

// naheueueeuee bcz BOTH TYPES OF STRINGS( OBJ OR PRIMITIVE ARE IMMUTABLE)


console.log(c.charAt(0));

console.log(c.indexOf('l')); //2



// ------------------- SLICE AND SUBSTRING :-

// substring
console.log(c.substring(0,4)); //HELL
console.log(c.substring(-7,4)); //HELL ... treat -ve value as 0

// slice
console.log(c.slice(0,4)); //hell
console.log(c.slice(-4,3)); //el

//trim
let d = '    ram       '
console.log(d.trim()); // remove spaces

// trimStart
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

// trimEnd
let text3 = text1.trimEnd(); 

// replace
let email = 'https://bittu/rammm singhhhh'
console.log(email.replace(' ','-')); //^-^

// includes
console.log(email.includes('ram')); //true ... ye batata h this word is there or not

// split
const game = new String('i-me-myself')
console.log(game.split('-')); //(3) ['i', 'me', 'myself'] ... returns in array

// string is immutable
let text = "HELLO WORLD";
text[0] = "A";
console.log(text); //no error but does not work 


// String charCodeAt()
let text = "HELLO WORLD";
let char = text.charCodeAt(0); //returns the unicode of the character at a given position in a string: here..72 is op


// String at()
const name = "W3Schools";
let letter = name.at(2); //S


// String substr().....just like slice but..
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); //Banana...8 se start ho k count 1 to 6 tak
part = str.substr(7); //Banana, Kiwi ...8 to end
part = str.substr(-4); // Kiwi....-ve me end se 4th position se start hi k end tak all elem.

// String concat()
 text1 = "Hello";
 text2 = "World";
 text3 = text1.concat(" ", text2);

// String padStart()
text = "5";
let padded = text.padStart(4,"0"); //0005...3 zeros bcz given that length should be 4

// String padEnd()
text = "5";
 padded = text.padEnd(4,"x"); //5xxx


// String repeat()
let result = text.repeat(2); // Hello world!Hello world!

// String replaceAll()
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs"); //I love dogs. Dogs are very easy to love. Dogs are very popular.









