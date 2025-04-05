const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed bcz const hai

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// Block Scope :---
// Variables declared with let and const have block scope.
// A block ({}) defines the scope, meaning the variable is only accessible inside that block.

// Functional Scope :---
// Variables declared with var have function scope.
// This means they are only accessible inside the function where they are declared.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// Problems with var :---

// 1. var is Function Scoped, Not Block Scoped
// var ignores block {} scope and remains accessible throughout the function.

// 2. var is hoisted but initialized with undefined, leading to confusion.
