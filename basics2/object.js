// Ways to declare an obj :-

// 1. singleton : - apni tarah ka ek object
//               ye kabhhi bhi literal se nahi banta ye constructor se banaya ja sakta hai


// const ob = new Object().........ye ek singleton obj hai (IMPPP)

// 2. object literals

// 3. constructor method : Object.create()

const mysymbol = Symbol("key1")


// literal method....

const a = {
    name : "bittu",
    age : 19,
    ar : ["hi"],
    // c : , error
    m : true,
    email : "srish@gmail.com",
    "my quote" : "xyz",
    sym : "mysymbol",
    [mysymbol] : mysymbol
}


// Two ways to access attributes of a obj...


// 1. Dot method

console.log(a.age); //19
console.log(a.email); //srish@gmail.com


// 2. [] method

// WE cant access my quote with . method so... [] method comes in picture
// console.log(a.my quote) .. error bcz this space notation is not allowed
console.log(a["my quote"]); //xyz

// console.log(a[email]); ... error bcz in backend, emsil attributes of obj a are stored as string 
console.log(a["email"]); //srish@gmail.com


// VVVVV IMPPPPP
// #PROBLM : Use mysymbol as an attribute inside obj a and access it...
console.log(a.sym); //mysymbol ....but we wntd to access/print key1
console.log(typeof sym); //undefined....are a. to laga bhai 
console.log(typeof a.sym); // string ...pr hume to symbol lena tha

// #SOLUTN : 
console.log(a[mysymbol]); // [] me access honge .. op is Symbol(key1)
console.log(typeof a[mysymbol]); // symbol


// HOw to change obj k andar k attributes ki value
a.name = "b2"
console.log(a.name); //b2


// freeze the obj.
// Object.freeze(a)
// a.name = "bfsgfds"
// console.log(a) // {name: 'b2', age: 19, ar: Array(1), m: true, email: 'srish@gmail.com', …}


// freeze a particular attribute...
// proxy method 


a.greeting = function(){
    console.log("hwllo");
}
console.log(a.greeting()); // undefined bcz it is wrong way to call a fun
a.greeting(); // hwllo
//Function [anonymous]... reference of function

a.greeting1 = function(){
    console.log(`hwllo ${this.name}`);
}
a.greeting1(); // hwllo b2







