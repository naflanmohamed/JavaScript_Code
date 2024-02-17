
let a;
a = 45;
console.log(a, typeof a);

//Converting number to string
a = String(a);
console.log(a, typeof a);

console.log("-------------------");

let b = "34";
console.log(b, typeof b);

//Converting string to number
b = Number(b);
console.log(b, typeof b);

console.log("-------------------");

let c = Date();
console.log(c, typeof c);


//Converting date to number
c = String(c);
console.log(c, typeof c);

console.log("-------------------");

let d = [1, 2, 3, 4, 5];
console.log(d, typeof d);

//Converting array to string
d = String(d);
console.log(d, typeof d);

console.log("-------------------");

//Converting number to string
let e = 134;
e.toString();
console.log(e, typeof e);

console.log("-------------------");

//Converting boolean to number
let f;
f = true;
console.log(f, typeof f);

f = Number(f);
console.log(f, typeof f);

console.log("-------------------");

//Converting array to number
let g = [1, 2, 3, 4, 5];
console.log(g, typeof g);

g = Number(g);
console.log(g, typeof g);   //output: NaN, number (Not a Number)

console.log("-------------------");

//Converting string to number
let h = "Hello";
console.log(h, typeof h);

h = Number(h);
console.log(h, typeof h);   //output: NaN, number (Not a Number)

console.log("-------------------");

//parseInt()

let i = "34";
console.log(i, typeof i);
i = parseInt(i);
console.log(i, typeof i);

console.log("-------------------");

//parseFloat()

let j = "34.56";
console.log(j, typeof j);
j = parseFloat(j);
console.log(j, typeof j);
