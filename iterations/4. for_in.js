const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject1) {
    console.log(key);
// js
// cpp
// rb
// swift

    console.log(`${key} shortcut is for ${myObject1[key]}`);
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


}

// Minus point of for in loop :-

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) { // ye key dega agar key ki jagah i rakhte to values deta
    console.log(key); //... prints index 0 se 4 
    
    console.log(programming[key]);  //... will print values
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); //.........nothing prints! ................
}

// because ...

// In JavaScript, Map is not iterable using a for...in loop. The for...in loop is used for iterating over the enumerable properties of an object, but Map is not a regular object—it is a special collection type.

// Map k liye :- for of, for each works 
                //  for in doesn't work



// ---------------- Enumerable properties:------------------

// Enumerable properties are object properties that can be iterated over using loops like for...in and retrieved using methods like Object.keys().

// When you create an object property normally, it is enumerable by default.

// This means it will show up in for...in loops and Object.keys().

// ------------------Non-Enumerable Properties

// You can create hidden (non-enumerable) properties using Object.defineProperty().

// These properties won’t show in loops but still exist.


// Map issue happens because Map stores keys differently. for...in only works with object properties, and Map does not store its keys as enumerable object properties.