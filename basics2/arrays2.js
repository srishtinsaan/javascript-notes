let ar = [1,2,3,4,5]
let arr = [9,8,7]

// ar.push(arr)
// console.log(ar); // (6) [1, 2, 3, 4, 5, Array(3)]

// concat
let a = ar.concat(arr)
console.log(a);  // (8) [1, 2, 3, 4, 5, 9, 8, 7]

// spread (more used)... makes every element individual
const c = [...ar,...arr]
console.log(c); // (8) [1, 2, 3, 4, 5, 9, 8, 7]

// flat
let arrr = [1,2,[3,4,[5,6,7,[2],7,8,],0,8],9]
const d = arrr.flat(Infinity) // inside it, depth is given matlab kitne andar tak tum kholna chahte ho
console.log(d); // (13) [1, 2, 3, 4, 5, 6, 7, 2, 7, 8, 0, 8, 9]


// isArray ... ye array h ya nhi

console.log(Array.isArray("bittu")); // false 


// another way of creating an array...


// from
console.log(Array.from("bittu")); // (5) ['b', 'i', 't', 't', 'u']

console.log(Array.from({name : "bittu"})); // [] .. bcz mne ise direction hi nahi di ki keys ka pair banae ya kya banae thats why returns an empty array



// of
let score1 = 30;
let score2 = 40;
let score3 = 50;
console.log(Array.of(score1, score2, score3)); // (3) [30, 40, 50]


// ------- push, pop, shift, unshift -----------

// push -- last me ek member add karna
// pop -- last se ek member delete karna
// shift -- shuru se ek member delete karna
// unshift -- shuru me ek member add karna

let bittu = [3,4]
bittu.push(5)
console.log(bittu); //  [3, 4, 5]

bittu.shift()
bittu.unshift(2)

console.log(bittu);



