//While Loop Syntax

// while (condition) {
//   // code block to be executed
// }

// Example

// The following example will execute the code block 5 times.
//Print 0 to 10
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("-------------------");
console.log("Print even numbers from 0 to 10");
var i = 0;
while (i <= 10) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}
