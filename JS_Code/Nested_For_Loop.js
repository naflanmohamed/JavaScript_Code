//Nested For Loop

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        console.log(i + " " + j);
    }
}

console.log("End of the loop");

//Star Pattern
// *
// **
// ***  
// ****
// *****

for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        console.log("*");
    }
    console.log("\n");
}