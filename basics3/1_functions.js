function name(){
    console.log("bittu");  
}
name // prints nothing bcz it just means that name naam ka function hai yaha but its not the way to call a function. so its just a reference
name() // bittu


function add(n1,n2){ // n1 aur n2 are PARAMETERS
    console.log(n1 + n2);
    
}
add(3,"4") // 34 ...3 & 4 are ARGUMENTS
add(3,null) // 3
add(3,undefined) // NaN

// IMP Problem to Note ...
const n = add(3,4); // 7
console.log(n); // undefined ..........................WHYYYYYYY ??????????

// BCZ... function kuch return nahi kar raha. It is just printing. to n k paas kuch hai hi nahi. just like..
let m
console.log(m); // undefined ..........................GOT IT !!!!!!!!!!!



// return bhi karwa lete hai
function add1(n1,n2){ // n1 aur n2 are PARAMETERS
    console.log(n1 + n2);
    return "aja ve aja ve"
    console.log("bittu"); // ...................RULE : return statement k baad nothing will execute
    
}
const k = add1(3,4); // 7
console.log(k); // aja ve aja ve



function loginusermessage(username = "sam"){ //default value is sam
    // if(username === undefined){
    //     return `enter kr username`
    // }
    // OR
    // if(!username){ ....bcz UNDEFINED is considered FALSE......IMP
    //     return `enter kr username`
    // }
    return `${username} just logged in` 
}
loginusermessage("bittu") //no output
console.log(loginusermessage("bittu")); // bittu just logged in

// agar fun me koi vlaue hi na pass kari ho to ?
console.log(loginusermessage()); // undefined just logged in....(sam aega I know pr ye sam wala kaam mne sbse last me kiya tha

// so to correct it I wrote that commented code




// REST OPERATOR "..." :-


// function me 1 param h par multiple arg pass h... is it possible? Yes!
function calculateCartPrice(...num1){ //this "..." is called REST operator yaa SPREAD operator based on use case
    return num1
}
console.log((calculateCartPrice(200,300,400))); // (3) [200, 300, 400].......array mila


// what if ....
function calculateCartPrice1(val1,val2, ...num1){ //this "..." is called REST operator yaa SPREAD operator based on use case
    return num1
}
console.log((calculateCartPrice1(200,300,400))); // (1) [400]
// val 1 me 200 chala gaya
// val 2 me 300 chala gaya
// 400 .....num1 me


// 
const user = {
    username : "bittu",
    prices : 199
}
function handleobj(anyobj){
    console.log(`hello ${anyobj.username} the price is ${anyobj.price}`);
}
// handleobj(anyobj) ...error bcz hume user obj hi pass krna hoga isme
handleobj(user) // hello bittu the price is undefined
// prices tha....you wrote price 
// Thats why prople prefer Typescript ....waha typechecking ho jati h
// js me bhi typechecking ho jati h pr extra code ya if else lagana padta hai

function handleobj1(anyobj){
    console.log(`hello ${anyobj.username} the price is ${anyobj.prices}`); // prices
}

handleobj1({
    username : "b2",
    prices : 199999
})                      // hello b2 the price is 199999





// 
const arr = [100,200,300]
function getarray(){
    console.log(arr[1]);
    
}
getarray() // 200

// 
function getarray1(num1){
    console.log(arr[num1]);
    
    
}
getarray1(2) //300
getarray1(3) // undefined
// 

function getarray2(num1){
    return arr[num1] 
}
console.log(getarray2(2)); //300
// 

// what hitsh bhaiya was teaching...
function getarray3(num1){
    return num1[2] 
}
console.log(getarray3(arr)); //300.......array pass karo jiski bhi value chahiye











