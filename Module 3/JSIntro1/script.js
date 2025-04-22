// This is a single-line comment
/* 
   This is a multi-line comment.
   This program demonstrates variable declarations,
   data types, operators, and string handling.
*/

// Variable Declarations ===
let age = 25;                 // Number
const name = "Alice";         // String
let isStudent = true;         // Boolean
let scores = [90, 85, 78];    // Array
let person = {                // Object
   firstName: "Bob",
   lastName: "Smith"
};

// Data Types and typeof operator ===
console.log(typeof age);       // "number"
console.log(typeof name);      // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof scores);    // "object" (arrays are a type of object)
console.log(typeof person);    // "object"

// Relational Operators ===
let a = 10;
let b = 20;
console.log(a < b);    // true
console.log(a > b);    // false
console.log(a <= 10);  // true
console.log(b >= 15);  // true

// Equality Operators ===
let x = "5";
let y = 5;

console.log(x == y);   // true (loose equality, allows type coercion)
console.log(x === y);  // false (strict equality, checks type + value)
console.log(x != y);   // false (because "5" == 5)
console.log(x !== y);  // true (types are different)

// Strings and String Methods ===
let greeting = "Hello";
let target = "World";

let fullGreeting = greeting + ", " + target + "!";  // Concatenation
console.log(fullGreeting);                          // "Hello, World!"

console.log(fullGreeting.length);                   // String length
console.log(fullGreeting.toUpperCase());            // Convert to upper case
console.log(fullGreeting.includes("World"));        // true
console.log(fullGreeting.indexOf("World"));         // 7
console.log(fullGreeting.replace("World", "Everyone")); // Replace text

