// IMP FOR INTERVIEW

console.log(Math); //Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}


// console.log(Math.abs(-5)); //5
// console.log(Math.round(-5.4532)); //-5...round off
// console.log(Math.ceil(4.23)); //5
// console.log(Math.floor(4.23)); //4
// console.log(Math.min(4,5,6,7,8)); //lly max

console.log(Math.random()); //... always between 0 & 1
console.log( (Math.random()*10) + 1); //...+1 taki 0.0004 iss tarah ki situation na ban paae.. mtlb 0 na aae at least 1.009 esa kuch aae na ki 0.009... now range is >1 and <=9
console.log( Math.floor(Math.random()*10) + 1); //single digit floored vlaue eg 7

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min +1) + min)); //+min kyonki min = 10 to chahiye hi chahie 
// +1 is to avoid 0.00 wala funda



