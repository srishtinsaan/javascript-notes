let n = document.createElement('h1')
n.textContent = 0
document.querySelector('body').appendChild(n);

let start = document.createElement('button')
start.textContent = "start"
document.querySelector('body').appendChild(start);

let stop = document.createElement('button')
stop.textContent = "stop"
document.querySelector('body').appendChild(stop);


// setInterval(callback , timer in milli s)
let t;
start.addEventListener('click', function(){
    count = 0;
    t = setInterval(function(){
        n.textContent = count;
        count++;
    },1000)
})

stop.addEventListener('click', function(){
    clearInterval(t)
})


