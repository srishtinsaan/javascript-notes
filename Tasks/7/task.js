let progress = document.querySelector('#progress')
let h = document.querySelector('h2');

let count = 0
let timer = setInterval(() => {
    if(count===100){
        h.style.opacity = 1;
        clearInterval(timer)
    }
    count++
    progress.style.width = count + '%';
}, 10);