//Increment

var x = 5;
x++;    // x = x + 1
console.log(x); // 6

//Post Decrement

var y = 10;
y--;    // y = y - 1
console.log(y); // 9

console.log("-------------------");

//Postfix Increment a++

var a = 15;
const b = a++;  // b = a, a = a + 1 first b is assigned then a is incremented
console.log(b); // 15
console.log(a); // 16

//Prefix Increment ++b

var c = 20;
const d = ++c;  // c = c + 1, d = c first c is incremented then d is assigned
console.log(d); // 21
console.log(c); // 21

console.log("-------------------");

//Postfix Decrement a--

var e = 25;
const f = e--;  // f = e, e = e - 1 first f is assigned then e is decremented
console.log(f); // 25
console.log(e); // 24

//Prefix Decrement --e

var g = 30;
const h = --g;  // g = g - 1, h = g first g is decremented then h is assigned
console.log(h); // 29
console.log(g); // 29


