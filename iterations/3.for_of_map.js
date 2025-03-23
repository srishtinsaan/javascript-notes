// for of

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    //console.log(i);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key of map) {
    console.log(key); //... will print whole set
    // (2) ['IN', 'India']
    // (2) ['USA', 'United States of America']
    // (2) ['Fr', 'France']
}

// console.log(map); ... Map(3) {size: 3, IN => India, USA => United Sta…f America, Fr => France}


for (const [key, value] of map) {
    console.log(key, ':-', value); //output :-
    // IN :- India
    // USA :- United States of America
    // Fr :- France
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value); // error

    // we can't iterate obj like this with for of

    // .we can... with ... for in loop
    
}

