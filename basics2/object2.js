const obj = new Object() // singleton obj
const ob = {} // also an obj but NOT a singleton obj

console.log(obj); // or printing ob...  op : {}

// creating an obj 
const tinderuser = new Object() 
tinderuser.id = 1234
tinderuser.name = "bittu"
tinderuser.isLoggedIn = true
console.log(tinderuser); // {id: 1234, name: 'bittu', isLoggedIn: true}

// nested obj... yes allowed
const regularuser ={
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            fname : "b2",
            lname : "singh"
        }
    }
}
console.log(regularuser.fullname); // {userfullname: {…}}

console.log(regularuser.fullname.userfullname); // {fname: 'b2', lname: 'singh'}
console.log(regularuser.fullname.userfullname.fname);


// combining arrays
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {obj1, obj2}
console.log(obj3); // {obj1: {…}, obj2: {…}}  .... 2d array ban gaya


// assign..
const obj4 = Object.assign(obj1,obj2)
console.log(obj4); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

// other better way to write it is....
const obj5 = Object.assign({}, obj1,obj2)

// assign me (target,source) hota hai to obj1,obj2 likhoge to wo obj 1 me obj 2 ki values daal raha hai na ki dono ko combine kar raha hai

console.log(obj1); //{1: 'a', 2: 'b', 3: 'c', 4: 'd'}.... dekha!

// thats why it is a good practice to make {} (empty obj) the target in which source will be stored

// spread method to combine 
const obj6 = {...obj1, ...obj2}
console.log(obj6); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}


// ye dekhne ko milega
const users = [ // yaha { nahi lagega
    {
        id : 1234,
        email : "hehe"
    },
    {
        id : 1234,
        nme : "ram"
    },
    {
        id : 1234,
        nme : "ram"
    },
    {
        id : 1234,
        nme : "ram"
    }
]
// access...
console.log(users[1].id); //1234


// find out keys & values {IMPPPP}
console.log(Object.keys(tinderuser)); // (3) ['id', 'name', 'isLoggedIn']...array me deta h
console.log(Object.values(tinderuser)); // (3) [1234, 'bittu', true]
console.log(Object.entries(tinderuser));  // (3) [Array(2), Array(2), Array(2)]...hrr key value pair ko ek array m bana k ek hi array me ese multiple arrays ko daal k show krta h

// hasOwnProperty
console.log(tinderuser.hasOwnProperty(`name`)); //true


















    
