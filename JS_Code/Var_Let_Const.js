/* //uncomment the code to run and Use
var a=25;
var b=3;
console.log(a+b);

// difference between var, let and const

// 1.Scope

// var will work outside the block
if(true){
    var msg="Hello";
}
console.log(msg); //output: Hello


let will not work outside the block only inside the block
if(true){
    let greet="Hello";
    console.log(greet);
}
console.log(greet); //output: ReferenceError: greet is not defined

//const will not work outside the block only inside the block
if(true){
    const say="Hello";
    console.log(say);
}
console.log(say); //output: ReferenceError: greet is not defined

//2. variable declaration

//var can be re-declared and updated
var a = 10;
console.log(a); //output: 10

var a = 20;
console.log(a); //output: 20

//let can not be re-declared but can be updated
let b = 10;
console.log(b); //output: 10

let b = 20;  //output: SyntaxError: Identifier 'b' has already been declared

//const can not be re-declared and updated
const c = 10;
console.log(b); //output: 10

const c = 20; //output: SyntaxError: Identifier 'c' has already been declared



//3.Value Assignmet

//var can be updated
var d = 55;
console.log(d); //output: 55
d = 66;
console.log(d); //output: '66' 


//let can be updated
let d = 55; //output: SyntaxError: Identifier 'd' has already been declared
console.log(d); //output: 55
d = 66;
console.log(d); //output: SyntaxError: Identifier 'd' has already been declared


//const can not be updated
const e = 55;
console.log(e); //output: 55
e = 66; //output: TypeError: Assignment to constant variable.


//const with object can be updated
const student = {
    name: "John",
    age: 25
}
console.log(student); //output: {name: "John", age: 25}
console.log(student.name); //output: John

student.name = "Doe";
console.log(student); //output: Doe

*/
