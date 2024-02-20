//Bitwise Operator
//Bitwise operators treat their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

var a = 2; // Bit presentation 10
var b = 3; // Bit presentation 11

// Bitwise AND
console.log("Bitwise AND:",a & b); // 2
    //   10 
    // & 11
    // ------
    //   10

// Bitwise OR
console.log("Bitwise OR: ",a | b); // 3
    //   10 
    // | 11
    // ------
    //   11

// Bitwise XOR
console.log("Bitwise XOR: ",a ^ b); // 1
    //   10 
    // ^ 11
    // ------
    //   01

// Bitwise NOT
console.log("Bitwise NOT: ",~a); // -3
    // ~

// Bitwise Left Shift
console.log("Bitwise Left Shift: ",a << b); // 16
    //  10
    // << 11
    // ------
    // 10000

// Bitwise Right Shift
console.log("Bitwise Right Shift: ",a >> b); // 0
    //  10
    // >> 11
    // ------
    // 0