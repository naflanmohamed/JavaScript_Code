//Strict Equality and Inequality Operators

let a = 10;
let b = "10";
console.log(a==b);  //output: true only if the values are equal
console.log(a===b); //output: false because the values are equal but the types are different


let c = 0;
let d = false;
console.log(c==d);  //output: true only if the values are equal
console.log(c===d); //output: false because the values are equal but the types are different

let e = +0;
let f = -0;
console.log(e==f);  //output: true only if the values are equal
console.log(e===f); //output: true because the values and types are equal

let g = new String('JavaScipt');    
let h = 'JavaScipt';
console.log(g==h);  //output: true only if the values are equal
console.log(g===h); //output: false because the types are different
