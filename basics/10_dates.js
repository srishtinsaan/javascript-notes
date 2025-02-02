const d = new Date();

console.log(typeof(d)); //object ... IMP FOR INTERVIEW


console.log(d); // Sun Feb 02 2025 10:31:40 GMT+0000 (Coordinated Universal Time)

console.log(d.toString()); //Sun Feb 02 2025 10:31:40 GMT+0000 (Coordinated Universal Time)

console.log(d.toDateString()); // Sun Feb 02 2025

console.log(d.toISOString()); // 2025-02-02T10:31:40.211Z

console.log(d.toJSON()); // 2025-02-02T10:31:40.211Z

console.log(d.toLocaleDateString()); // 2/2/2025

console.log(d.toLocaleString()); // 2/2/2025, 10:31:40 AM

console.log(d.toLocaleTimeString()); //10:31:40 AM

console.log(d.toTimeString()); //10:31:40 GMT+0000 (Coordinated Universal Time)

console.log(d.toUTCString()); // Sun, 02 Feb 2025 10:31:40 GMT


// create nw date
const d1 = new Date();
console.log(d1.toDateString()); //Sun Feb 02 2025

let d2 = new Date(2025,0,9,5,3);
console.log(d2.toLocaleString());  // 1/9/2025, 5:03:00 AM

// MONTH START WITH 0 IN JS

let d3 = new Date("2025-01-06");
console.log(d3.toDateString()); //Mon Jan 06 2025... here MONTH STARTED WITH 01.

// if you write in mm-dd--yyyy format, you can...no problem will occur

// ------------------------------------------

// TIMESTAMP IN JS

// let ts = now Date.now(); ....error 
let ts = Date.now();
console.log(ts); //1738493364944 ... from 1 jan 1970 till now miliseconds time
console.log(d3.getTime()); //1736121600000
console.log(Math.floor(ts/1000));










