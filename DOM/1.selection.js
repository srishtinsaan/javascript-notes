// DOM => Document Object Model

// HTML me aisa koi feature hi nahi hai jis se tum button pe click kar ke div gayab nahi kar sakte

// JS ka aisa koi bhi code jo webpage me koi bhi change karega wo js ka DOM ka code kehlaega.

// DOM Manipulation => HTML ki body me kuch bhi change karna with DOM 

// uss-se      ye kar do   ye hone par
// selection   change      event



// Selection :- can be done with following ways:-

// document.getElementById .... ye sirf ID ko select karta hai
// document.getElementsByClassName .... ye sirf ClassName ko select karta hai
// document.getElementsByTagName .... ye sirf TagName ko select karta hai

// pr ek aisa hai jo sab select kar sakta hai(ye teeno select kar sakta hai):-

// document.querySelector 



// Selections of :-

// 1. ID (id name : myid):- 

// var abc = document.getElementById(`#myid`)


// 2. Class (class : myclass):- 

// var abc = document.getElementById(`.myclass`)


// 3. Tag (tag name : mytag):- 

// var abc = document.getElementById(`mytag`)



// IMPPP 

// Agar maine bohot sare h3 banae aur querySelector me h3 dala to wo sirf shuru ka ek h3 select karega

// Sare h3 select karwane k liye...

// document.querySelectorAll(`h3`)



// Note :

//  If the <script> tag is inside <head> or before <body>, JavaScript runs before the button is created.

// document.querySelector("button") Returns null: Since no <button> exists when the script runs, b.textContent = "Starting..." fails.





