// JavaScript Basics Demonstration

// Helper function to append text to the HTML page
function WritePage(message) {
   document.getElementById("output").textContent += message + "\n";
}
  
// === Comments ===
// Single-line and multi-line comments are used to explain the code.
  
/* This is a multi-line comment.
 *   It can span multiple lines. 
 */
  
// Declarations and Data Types
let age = 25;                   // Number
const name = "Alice";           // String
let isStudent = true;           // Boolean
let scores = [90, 85, 78];      // Array
let person = { firstName: "Bob", lastName: "Smith" }; // Object
  
WritePage("=== Data Types ===");
WritePage("age (number): " + typeof age);
WritePage("name (string): " + typeof name);
WritePage("isStudent (boolean): " + typeof isStudent);
WritePage("scores (array): " + typeof scores);
WritePage("person (object): " + typeof person);
  
// Relational Operators ===
let a = 10;
let b = 20;
  
WritePage("\n=== Relational Operators ===");
WritePage("a < b: " + (a < b));      // true
WritePage("a > b: " + (a > b));      // false
WritePage("a <= 10: " + (a <= 10));  // true
WritePage("b >= 15: " + (b >= 15));  // true
  
// Equality Operators
let x = "5";
let y = 5;
  
WritePage("\n=== Equality Operators ===");
WritePage("x == y: " + (x == y));     // true (loose equality)
WritePage("x === y: " + (x === y));   // false (strict equality)
WritePage("x != y: " + (x != y));     // false
WritePage("x !== y: " + (x !== y));   // true
  
// Strings
let greeting = "Hello";
let target = "World";
let fullGreeting = greeting + ", " + target + "!";
  
WritePage("\n=== Strings ===");
WritePage("Concatenation: " + fullGreeting);
WritePage("Length: " + fullGreeting.length);
WritePage("Uppercase: " + fullGreeting.toUpperCase());
WritePage("Includes 'World': " + fullGreeting.includes("World"));
WritePage("Index of 'World': " + fullGreeting.indexOf("World"));
WritePage("Replace 'World' with 'Everyone': " + fullGreeting.replace("World", "Everyone"));
  