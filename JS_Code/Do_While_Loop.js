// Do While Loop Syntax

// do {
//   // code block to be executed
// }
// while (condition);

// Example
// The following example will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// Print 0 to 10

var i = 0;
do {
  console.log(i);
  i++;
}while (i <= 10);

console.log("-------------------");

console.log("Print even numbers from 0 to 10");

var i = 0;
do {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}while(i <= 10);