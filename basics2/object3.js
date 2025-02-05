// destructuring
const course = {
    coursename : "js hindi",
    courseInstructor : "hitesh bhaiya"
} 

// const {attributename} = jis object ka vo attribute hai
const {courseInstructor} = course

console.log(courseInstructor); //hitesh bhaiya

// to give short name to courseInstructor
const {courseInstructor : instructor} = course

console.log(instructor); // hitesh bhaiya

// react me destructuring ho rahi hogi to kese pata chalega...
// const navbar = ({company}) => {

// }
// navbar(company = "xyz")
// kuch ese {} me attribute likha rahega which means destructuring ki hui hai

// API ki kuch imp baatein...
// {}
//     "course" : "apna clg",
//     "name" : "b2",
//     "age": 30,
//     "city": "Delhi",
//     "isStudent": false
// }
// kuch iss tarah se JSON me likha rehta hai key value pair me jisme dono hi "" me likhe rehte hai
// [
//     {},
//     {}
// ]
// ya iss format me bhi mil sakta hai


// JSON, or JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used to transmit data between a server and web applications.


// {} means OBJECT
// [] means ARRAY

// random user me api
// JSON formatter 
// Tree or view format
