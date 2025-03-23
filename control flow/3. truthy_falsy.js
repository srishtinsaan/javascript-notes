const userEmail = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// output is : Don't have user email

// But if there was an email, output will be : Got user email



// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values

// basically falsy ko chhod k baki sab truthy
// "0", 'false', " ", [], {}, function(){}... inka dhyan rakhna ye bhi truthy values hain. Empty function aur arrays bhi

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// ------- way to check if obj is empty ---------

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// ------- some facts to remember (on console we tried)  ----------

// false == 0 => true
// false == " " => true
// 0 == " " => true

// ++++++++++++++++++++  Nullish Coalescing Operator (??): null undefined  ++++++++++++++++++++++++++

let val1;
// val1 = 5 ?? 10 .... on outputing gives the 1st written value which is not null
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// val1 = null ?? null ....... output : null
// val1 = null ?? undefined

console.log(val1); // undefined

// ++++++++++++++++++++++++++  Terniary Operator  ++++++++++++++++++++++++++++++++++++

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")