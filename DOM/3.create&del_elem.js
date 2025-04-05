// Creating and Deleting elements in js :-

// 1. createElement()
// 2. appendChild()
// 3. removeChild()

// -----------

// HTML :  body is empty
// <body>

    // <script src="script.js"></script>
    
// </body>

// CSS : 
// .makeitred{
//     font-style: italic;
//     color: red;
// }

// JS : 
// var h = document.createElement('h1')    //... we are creating h1 tag in js 

// h.textContent = "hello";      // ... giving that h1 tag some stuff

// h.classList.add('makeitred');   // ... adding class to it

// document.querySelector('body').appendChild(h);    // ... selecting body bcz .....
// 
// ....jaha child bhejna h use select krte hai.
// 
// ......appendChild(h); will append this h elem inside the selected body




// Similarly adding image through JS :-

// JS :
// var img = document.createElement('img')

// img.src = `baba.jpg`

// document.querySelector('body').appendChild(img);



// To remove this img ....

// document.querySelector('body').removeChild(img);

