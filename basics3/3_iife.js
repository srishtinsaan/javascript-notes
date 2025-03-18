// Immediately Invoked Function Expression (IIFE)

// iife is the function jo immediately execute ho jae.
// kai baar global variable ki presence me andar ki cheezein pollute hoti hain. wo na ho iske liye we use iife

function chai(){
    console.log(`DB connected`);
    
}
// chai() ... normally we invoke functions like this 

// to write iife, we do this...

(function chai1(){ // NAMED IIFE
    console.log(`DB connected`);
    
})(); // DB connected

// chai...() and to call we write () after chai
// it is similar to ()() ... thats what we have done here


// lets try the same on arrow fn...

// ( () => {
//     console.log(`DB connected 1`);
    
// }) () // error why?

// Reason ...
// () jo likha h line no. 17 me use end nahi kiya humne. Jis wajah se wo continuously execute ho raha h 
// Thats why above fn is giving error
// How to end? ....write a ; in line 17...(Now Done)

// execute again...
( () => { // UNNAMED IIFE
    console.log(`DB connected 1`);
    
}) (); // DB connected 1



( (name) => { // // UNNAMED IIFE
    console.log(`DB connected 1 ${name}`);
    
}) ('bittu'); // DB connected 1 bittu


