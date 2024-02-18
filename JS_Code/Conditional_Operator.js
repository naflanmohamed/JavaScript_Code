 //Conditional or ternary Operator

const age = 23;

const result = age>18?"You are eligible to vote":"You are not eligible to vote";
console.log(result); //You are eligible to vote

const age1 = 10;

const result1 = age1>18?"You are eligible to get License":"You are not eligible to get License";
console.log(result1); //You are not eligible to get License


//Handling Null and Undefined
function checkAge(name){
    const result = name?name:"Anonymous";
    console.log("Welcome", result);
}

checkAge("John"); //Welcome John
checkAge(); //Welcome Anonymous

console.log("---------------------");


let student = {
    name: "jhon",
    age: 23
};
console.log(student);
console.log(student.name); //jhon

//arrow function
const greet1 = ()=>{
    return "Hello";
}
console.log(greet1());

const greet = (student)=>{
    const name = student.name?student.name:"Anonymous";
    return "Hello " + name;
}

console.log(greet(student));

console.log("---------------------");

//conditional chain

const marks = 60;
const result2 = marks>=75?"Distinction":marks>=60?"First Class":marks>=50?"Second Class":"Fail";

console.log(result2); //First Class

const marks1 = 40;
const result3 = marks1>=75?"Distinction":marks1>=60?"First Class":marks1>=50?"Second Class":"Fail";
console.log(result3); //Fail


