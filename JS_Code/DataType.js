/*
number : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
string : 'hello', "hello", `hello`
boolean : true, false
undefined : undefined
null : null
symbol : Symbol('symbol')

array : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
object : {name: 'John', age: 30}

*/

var a = 10;
console.log(typeof a); //output: number

var b = 'hello';
console.log(typeof b); //output: string

var c = true;
console.log(typeof c); //output: booleans

var d;
console.log(typeof d); //output: undefined

var e = null;
console.log(typeof e); //output: object

const s1 = Symbol();
console.log(s1);

const s2 = Symbol();
console.log(s2);

console.log(s1 === s2); //output: false