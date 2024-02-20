//Nullish Coalescing Operator  (??)
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const a = null??'No Value';
console.log(a); // No Value

const aa = undefined??'No Value';
console.log(aa); // No Value

const aaa = 0??'No Value';
console.log(aaa); // 0

const b = 90??67;
console.log(b); // 90

const c = 10??67;
console.log(c); // 10

console.log("-------------------");

////Nullish Coalescing assignment Operator (??=)

const user={
    name: 'John'
};
console.log(user);  // { name: 'John' }
console.log(user.name); // John
console.log(user.age); // undefined
user.age??=25;  // If user.age is null or undefined, then assign 25 to user.age
console.log(user.age); // 25
console.log(user); // { name: 'John', age: 25 }