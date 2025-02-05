// const ar = {1,2,3,4}  ...error
const ar = [1,2,3,4]
// console.log(ar); ... error
// console.log(ar[]); ... error
// console.log(ar[0:3]);... error
console.log(ar[0]); //1
console.log(ar[6]);// undefined


// SHALLOW COPY :- changes to nested objects or arrays in the copied structure will also affect the original structure.


// DEEP COPY :- Changes to nested objects or arrays in the copied structure will not affect the original structure.

const arr = new Array("hi","hello")
console.log(arr[0]); //hi
console.log(arr); //(2) ['hi', 'hello'] .... no error here


// when we create array in console... it gives ...
// 0 : hi
// 1 : hello
// length : 2
// prototype
// in above prototype theres one more prototype


// push ... add elem at last
arr.push("iiii")
console.log(arr); // (3) ['hi', 'hello', 'iiii']

// pop...removes last elem
arr.pop()
console.log(arr); // (2) ['hi', 'hello']

// unshift .. add elem at first
arr.unshift("hehe")
console.log(arr); // (3) ['hehe', 'hi', 'hello']

// shift .. remove from first
arr.shift()
console.log(arr); //(2) ['hi', 'hello']

// includes
console.log(arr.includes(0)); //false

// indexOf
console.log(arr.indexOf("hi")); // 0
console.log(arr.indexOf("jaip")); // -1 .... IMPPP

// join ... convert array to string irrespective of what datatype it have
const myarr = arr.join()
console.log(arr) //(2) ['hi', 'hello']
console.log(typeof arr) // object 
console.log(myarr) // hi,hello
console.log(typeof myarr) // string


// slice and splice ....IMP

const eee = new Array(1,2,3,4,5,6)
console.log("A",eee)

const myn = eee.slice(1,3) //............from >=1 to <3
console.log(myn) // (3) [2, 3]
console.log("B",eee) // B (6) [1, 2, 3, 4, 5, 6]
 
const mym = eee.splice(1,3)
console.log(myn) // (3) [2, 3]
console.log("C",eee) // C (3) [1, 5, 6] 

// sPlice removes 1,2,3... 3 elem from the original array
