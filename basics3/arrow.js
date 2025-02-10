//  this (V IMPP)

// const user = {
//     username : "bittu",
//     price : 199,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this); // {username: 'bittttu', price: 199, welcomeMessage: ƒ}
        
//     }
// }

// user.welcomeMessage //no op 
// user.welcomeMessage() // bittu, welcome to website
// user.username = "ram"
// user.welcomeMessage() // ram, welcome to website

// console.log(this); // {}......story about it....

// once upon a time...

// JS ko execute krne ka engine only browser me paya jata tha
// thats why 
// console.log(this); when executed in inspect will give...
// Window {0: Window, window: Window, self: Window,.........} 
// 
// browser k andar Window{} is the GLOBAL obj


// here
// no obj is global thats why {}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 1st discussion

function chai0(){
    username1 : "me"

// {VVVVV IMPPP}:----

    // Agar kisi variable ko bina var, let, ya const ke declare karte ho, toh wo automatic global variable ban jata hai.
    // Iska matlab hai username1 global scope me chala gaya, but wo this se attach nahi hota. 
    // why?
    // Jab bina var, let, ya const ke variable declare kiya jata hai, toh wo:

// Global scope me chala jata hai ✅
// Lekin window (ya global object) ka part nahi banta ❌
// this se attach nahi hota

    // global variable?
    // Global Variable woh hota hai jo pure program me kahin bhi accessible ho.

    console.log(this); // global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …} ........(in browser: `window`, in Node: `global`)

    console.log(this.username1); // undefined ..........WHY????????????????? 
    
    // console.log(username1)......error ....why?


    // tere hrr why ka jawab...

    // username1 : "me"
    // Yeh syntax JavaScript me valid nahi hai.
    // Yeh object literal ka syntax hota hai, par function ke andar aise use nahi hota.
    // Is wajah se username1 declare hi nahi hua.
    // Agar variable define hi nahi hota, toh console.log(variableName) ReferenceError dega.

    // JavaScript me functions ka this depend karta hai ki function kaise call kiya gaya hai.
    // Normal function calls (chai0()) me this global object ko refer karta hai sirf browser ke andar.
    // Lekin agar ek variable directly assign hota hai bina var, let, ya const ke, toh wo this se attach nahi hota, balki ek separate global variable ban jata hai.
    // Is wajah se this.username1 undefined deta hai



    // console.log(this.username1); ne error nahi di, sirf undefined diya. Par console.log(username1); ne ReferenceError diya. Aisa kyu hua? ???????????????????????????????

    // jawab...
    // this.username1 ka matlab hai ki JavaScript global object ke andar username1 ko dhund rahi hai.
    // Lekin username1 global object me exist hi nahi karta.
    // Jab JavaScript ko koi undefined property milti hai, toh wo undefined return karti hai, error nahi deti!
    // Kyunki username1 kisi bhi scope (global ya local) me define nahi hai, toh JavaScript ko pata hi nahi hota ki yeh kya hai.  
    // console.log(abc); // 🚨 ReferenceError: abc is not defined
}
chai0() 






// 2nd discussion

function chai1(){
    username2 = "me" // // global variable

    console.log(this); // global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …}

    console.log(this.username2); // me

    console.log(username2); //me
    
    
    
}
chai1() 





// 3rd discussion

function chai2(){
    let username3 = "me" //  Local variable, sirf isi function ke andar accessible hai

    // let or const wale variable......always local variable

    console.log(this); // global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …}

    console.log(this.username3); // undefined...........why??????????????????
    
    // bcz....
    // this hamesha JavaScript global object me username3 dhundhti hai, jo waha exist hi nahi karta.

    console.log(username3);  //me
}
chai2() 






// 4th discussion

const chai3 = function(){ //FUNCTION EXPRESSiON :::::::::::IMPPP:::::::::::::::::
    // aur isme to const bhi hai !!!!! mtlb global to nhi h
    username4 : "me" 
    console.log(this); // {} .........why???

    // bcz..
    // Function expressions me this ek empty object {} hota hai, isliye {} print ho raha hai.

    console.log(this.username4); // undefined
}
chai3()

// dekh object me {
//     hi : hello ese likhte hai
//       mtlb key value pair
// }

// pr function me : nhi likhte


// this Function Expression me {} kyu hota hai?

// Reason 1: JavaScript ka Execution Context

// JavaScript me global execution context alag hota hai aur function execution context alag hota hai.
// Normal function (function chai() {}) global execution context me run hota hai, isliye this global object hota hai.
// Function expressions aur arrow functions lexical scope follow karte hain, isliye unka this global object nahi hota!

// lexical scope?
// Lexical Scope ka matlab hai ki ek function apne parent scope ke variables ko access kar sakta hai, chahe usko kahin bhi call kiya jaye. Yeh function define hone ke waqt decide hota hai, run-time par nahi.
// Lexical Scope = Function jaha define hua hai, wahi uska scope fix hota hai
// ✔ Inner function apne outer function ke variables ko access kar sakta hai
// ✔ Scope Chain hoti hai jo andar se bahar variables dhundhti hai
// ✔ JavaScript lexical scope follow karta hai, dynamic nahi 🚀


// Reason 2: module.exports ki wajah se (Node.js me)

// console.log(this); // Node.js me output: {}
// Node.js me har file ek module hoti hai.
// Jab aap function expression likhte ho, toh wo ek module ke andar hota hai, aur module ka this {} hota hai, global nahi!


// Reason 3: use strict Mode ka Effect

// "use strict";
// const chai = function() {
//     console.log(this);
// }
// chai();
// Output:
// ✅ {} in Node.js
// ✅ undefined in Browser

// Strict mode me, function expressions ka this undefined ho jata hai, kyunki global object ka access band ho jata hai!
// Isliye function expressions me this empty object {} deta hai ya undefined ho sakta hai strict mode me.






// agr fun ko const ki jagah let se define kar du toh?

let chai4 = function(){ 
    // aur isme to const bhi hai !!!!! mtlb global to nhi h
    username4 = "me" 
    console.log(this); // {} .........why???

    // bcz..
    // Function expressions me this ek empty object {} hota hai, isliye {} print ho raha hai.

    console.log(this.username4); // me

    // ab ye "me" kyu de raha hai?

}
chai4()















// 6th discussion

const chai5 = function(){
    username4 = "me" 
    console.log(this); // global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …}

    console.log(this.username4); // me
}
chai5()




// 6th discussion

// fun ko hum ese likh skte h.....

// ++++++++++++++++++++++++++++++++++++  ARROW FUNCTION  +++++++++++++++++++++++++++++++++++++++++++++++++

const chai6 = () => {
    let username5 = "hello"
    console.log(this) // {}
    console.log(this.username5); // undefined 
}
chai6()



const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4)); // 7



// one more way to use arrow function

// implicit return method
const addTwo1 = (num1, num2) =>  num1 + num2

console.log(addTwo1(3,4)); // 7



// one more way...
const addTwo2 = (num1, num2) =>  (num1 + num2)

console.log(addTwo2(3,4)); // 7

// agar {} use honge toh return likhna hi padega otherwise () me nhi likhna



// one more thing...
// const addTwo3 = (num1, num2) =>  (username : "bittu")

// console.log(addTwo3(3,4)); // error bcz function me : is wrong syntax



// = kiya to...gives only value of obj
const addTwo3 = (num1, num2) =>  (username = "bittu")

console.log(addTwo3(3,4)); //bittu



// to output both key value of the object...
const addTwo4 = (num1, num2) =>  ({username : "bittu"})

console.log(addTwo4(3,4)); // {username: 'bittu'}




