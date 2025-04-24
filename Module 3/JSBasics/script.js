/* --- STRINGS --- */

// Concatenation
let firstName = "Alice";
let lastName = "Johnson";
let fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName);

// Escaping characters
let quote = "She said, \"JavaScript is powerful!\"";
console.log("Escaping:", quote);

// Template literals
let greeting = `Hello, ${firstName}!`;
console.log("Template:", greeting);

// String methods
let phrase = "  JavaScript is fun!  ";
console.log("Trimmed:", phrase.trim());
console.log("Uppercase:", phrase.toUpperCase());
console.log("Index of 'fun':", phrase.indexOf("fun"));

// String parsing
let numberString = "42";
let parsed = parseInt(numberString);
console.log("Parsed integer:", parsed);

/* --- TYPE CONVERSION --- */

// Explicit
let num = 123;
console.log("Number to String:", String(num));
console.log("String to Number:", Number("456"));
console.log("Boolean to String:", String(true));
console.log("String to Boolean:", Boolean("non-empty"));
console.log("Boolean to Number:", Number(false));
console.log("Number to Boolean:", Boolean(0));  // false

// Implicit
console.log("Implicit addition (number + string):", 5 + "5"); // "55"
console.log("Implicit subtraction (string - number):", "10" - 2); // 8

/* --- DATE OBJECTS --- */

let today = new Date();
console.log("Current Date:", today);

// Get functions
console.log("Year:", today.getFullYear());
console.log("Month (0-based):", today.getMonth());
console.log("Day of month:", today.getDate());

// Set functions
today.setFullYear(2023);
console.log("Updated Year:", today.getFullYear());

/* --- ARRAYS --- */

// Creating arrays
let fruits = ["apple", "banana", "cherry"];
console.log("Fruits array:", fruits);

// Mutating arrays
fruits.push("date");
console.log("After push:", fruits);
fruits.pop();
console.log("After pop:", fruits);
fruits[1] = "blueberry";
console.log("After mutation:", fruits);

// With new keyword
let vegtables = new Array(3);
vegtables[0] = "Carrot";
vegtables[1] = "Peas";
vegtables[2] = "Corn";
console.log("With `new` keyword: ", vegtables);
