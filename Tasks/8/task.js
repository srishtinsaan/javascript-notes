let people = document.querySelector('.people')
let ip = document.querySelector('input')

let data = [{name: "Ram" , src : "https://images.unsplash.com/photo-1706205259375-38da0e1f1ad4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "shyam" , src : "https://images.unsplash.com/photo-1680134450775-b9d7b5c9b1fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"},
    {name: "siya" , src : "https://images.unsplash.com/photo-1702421094656-803d120830cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},
    {name: "chiki" , src : "https://images.unsplash.com/photo-1679875450427-4c40d216da25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"},
    {name: "kittu" , src : "https://images.unsplash.com/photo-1671571411509-82b6232fefa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8"},
    {name: "om" , src : "https://images.unsplash.com/photo-1702421091971-4f216f119f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"},
    {name: "chinu" , src : "https://images.unsplash.com/photo-1639739626944-769780b2e57c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8"},
    {name: "darshu" , src : "https://images.unsplash.com/photo-1680220699999-dabb97e58e59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8"}


]




ip.addEventListener("input", function(){

    let matching = data.filter(function(e){
        return e.name.startsWith(ip.value)
    })

    let p = "";
    matching.forEach(function(elem){
    p += `<div class="person">
                    <div class="image">
                        <img src="${elem.src}">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
})

    people.innerHTML = p; 
    
})