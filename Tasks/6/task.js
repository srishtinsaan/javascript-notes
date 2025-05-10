let home = document.querySelector('#home')
let about = document.querySelector('#about')
let contact = document.querySelector('#contact')

let home_content = document.querySelector('#home_content')
let about_content = document.querySelector('#about_content')
let contact_content = document.querySelector('#contact_content')

home_content.style.display = 'block'
home_content.style.width = '50%'


home.addEventListener('click',function(){
    home_content.style.display = 'block'
    home_content.style.width = '50%'
})

about.addEventListener('click',function(){
    about_content.style.display = 'block'
    about_content.style.width = '50%'
})

contact.addEventListener('click',function(){
    contact_content.style.display = 'block'
    contact_content.style.width = '50%'
})

function removetext(){
    document.querySelectorAll('h3').forEach(function(h3){
        h3.style.display = 'none'
    })
}