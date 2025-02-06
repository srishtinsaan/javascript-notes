// ye ek scope h jisme kuch variables h jo iss scope k bahar access nahi ho sakte...
var c = 300 // global scope
let a = 6
if(true){
    let a = 2
    const b = 3
    var c = 4
    d = 5
    console.log("inner : ", a); // inner :  2
    
}  //block scope

// console.log(a); // iss line k baad m likha mne upar a = 6
// console.log(b); //...error in both lines that a is not defined lly b 
console.log(c); // 4 ...thats why var use nahi karna chahiye 
console.log(a); // 6 ...global ko hi access kr sakta h



// IMP POINT

// Inspect me likhe agr ye code to global scope alag hai aur VS Code jese code environment me global scope ka matlab alag hai




// CLOSURES
// 
function one(){
    const username = "bittu"
    function two() {
        const website  = "b2.com"
        console.log(username); 
    }
    // console.log(website); ... error and not move further to two() in next line
    two() //bittu ....child fun can access parent fun k variables
    
}
one() // executed but not print anything bcz agr two()  ko execute karna ho to you have to write two() alag se

// IMP POINT TO NOTE
// parent fun will not call any child functions unless or untill child fun is CALLED inside parent fun 


// two() ......error 



// 
if(true){
    const username = "bitttttu"
    if(username === "bitttttu"){
        const lname = " singh" 
        console.log(username + lname); // bitttttu singh
    }
    // console.log(lname); .....error bcz out of scope
}
// console.log(username); ....error



// ++++++++++++++++++++++++++++++++  INTERESTING  +++++++++++++++++++++++++++++++++++

addone(5) //no error no problem

function addone(num){ // addone() is a function
    return num+1
}

// addtwo(7) ......error !!!!! 

const addtwo = function(num){ // addtwo is an EXPRESSION
    return num+2
}


// addtwo(7) ......error !!!!! .......REASON :
// addone to ek fun h pr addtwo ko ek addtwo naam k variable m hold bhi kiya h humne.
// ye bilkul esa h jese int a = 5 se pehle hi a print karwane lag gye
// 



