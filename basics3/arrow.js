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
// user.username = "bittttu"
// user.welcomeMessage() // bittttu, welcome to website

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
    // Is wajah se this.username1 undefined deta hai, lekin username1 print karne par "me" aata hai.



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




