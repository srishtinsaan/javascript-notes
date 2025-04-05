// Jab bhi forms k sath deal karo....

// yaad rakho ki submit hone par forms page ko reload kar dete hai

// pages reload nahi hone chahye warna page reload hote hi JS nahi chalegi

// kyonki page reload hone se pehle hi JS chal chuka hoga


// --------------------------- Form wala task ----------------------------------

// var forms = document.querySelector("form")
// var ip = document.querySelectorAll(`input[type = "text"]`) .... saves everything as a NodeList 

// .... NodeList is an array like data structure that contains html tags or DOM elements


// var h4 = document.querySelector("h4")

// forms.addEventListener("submit", function(event){

//     event.preventDefault(); ..... page ko reload nahi hone deta submit hone pe

//     if(ip.value === ""){
//         h4.classList.add('makeitred')
//         h4.textContent = "Blank not allowed";
        
//     }else{
//         h4.textContent = "Submitted"
//         ip.textContent = " "
//     }
// })


// Using for each loop ......

// ip.forEach(function(){
//     if(ip.value === ""){
//         h4.classList.add('makeitred')
//         h4.textContent = "Blank not allowed";
//     }else{
//         h4.textContent = "";
//     }
// })

// IT is not giving "Blank not allowed" when i didn't filled 1st ip but filled 2nd ip. ...WHY ???????

// Bcz... 1st ip blank and 2nd is filled.... i clicked sumbit

// 1st ip blank....yes.... if chalega aur print hoga "Blank not allowed"

// 2nd ip blank.... no .... else chalega aur print hoga ""

// toh finally print kya hua... ""

// that is why through for each loop it is possible but difficult to change this situation . so we go for for loop