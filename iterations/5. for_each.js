const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){ // ese likho... coding.forEach( function (val){} ) matalb functionka naam mat likho like function name(val) ... isme se bas name hataya hai
    // console.log(val);
} )

coding.forEach( (item) => { // coding.forEach( () => {} )
    console.log(item); 
} )



function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // sirf printMe ka reference dena h na ki call karna h

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
   //op:-

// js 0 (5) ['js', 'ruby', 'java', 'python', 'cpp']
// ruby 1 (5) ['js', 'ruby', 'java', 'python', 'cpp']
// java 2 (5) ['js', 'ruby', 'java', 'python', 'cpp']
// python 3 (5) ['js', 'ruby', 'java', 'python', 'cpp']
// cpp 4 (5) ['js', 'ruby', 'java', 'python', 'cpp']


} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);

    // javascript
    // java
    // python
} )