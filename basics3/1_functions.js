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









