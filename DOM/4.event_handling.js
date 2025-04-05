// jab bhi aap kisi element par kisi bhi prakaar ka koi action krte ho to waha par event by default automatically raise hota hai 

// ab agar aapne koi levent listener nahi banaya hai to wo event ignore krdiya jaata hai 

// par agar aapne listener banaya hai us event par to wo event ignore nahi kiya jaayega balki uska listener chalega

// iske liye we use....

// addEventListner(event,callback)  // syntax

// callback = function

// example : btn.addEventListner('click', function(){})


// JS code :

// var btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     btn.textContent = 'starting'
//     btn.style.backgroundColor = 'red'
// })


// ye button click krne pr wo sabhi executions karega jo function me hai

// yaha event click hai isiliye click karne pr kara

// aise hi bohot se event hote h jese mouseover, mousemove, etc

// ------------------

// EVENT OBJECT 

// we want to know ki mouse kaha kaha move hua pooore page pr

// JS Code: -

// document.querySelector('body')

// .addEventListener('mousemove', function(details){
//     console.log(details);
    
// })

// yaha details
