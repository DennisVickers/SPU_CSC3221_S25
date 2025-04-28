/* --- TRUTHY / FALSY --- */
console.log("\n--- Truthy / Falsy ---");
const values = [false, 0, -0, "", null, undefined, NaN, true, 42, "hello", [], {}, function(){}];
for (let i=0; i<values.length; i++) {
   console.log(`${values[i]} is`, values[i] ? "truthy" : "falsy");
};

/* Loose comparisons
Rules:
- false, zero and empty strings are all equivalent.
- null and undefined are equivalent to themselves and each other but nothing else.
- NaN is not equivalent to anything — including another NaN!
- Infinity is truthy — but cannot be compared to true or false!
- An empty array is truthy — yet comparing with true is false and comparing with false is true?!
*/
let r = undefined;
// All true
r = (0 == false);
r = ("" == 0);
r = (null == undefined);
r = ([] == false);

// all false
r = (null == false);
r = (NaN == NaN);
r = ([] == true);

// both true and false
r = (Infinity);
r = (Infinity == true);

// Show result
console.log("Result is: ", r ? "true" : "false");

// Precautions
// 1. Avoid direct comparisons.
let x = [];
r = (x == false);
r = (!x);
// 2. Use === strict equality whenever possible.
r = (x === false);
// 3. Convert to real Boolean values where necessary.
r = (Boolean(x) === false);

// Show result
console.log("Result is: ", r ? "true" : "false");


/* --- Branches --- */
console.log("\n--- Branches ---");
let number = 10;

// if, if-else, if-else-if
if (number > 0) {
   console.log("Positive number");
} else if (number < 0) {
   console.log("Negative number");
} else {
   console.log("Zero");
};

// Ternary operator
let isEven = (number % 2 === 0) ? "Even" : "Odd";
console.log(`Number is ${isEven}`);

// Switch statement
let score = 85;
let gradeA = 90 - 5;
let gradeB = 80 + 5;

switch (score) {
   case gradeA:
      console.log("Score is around an A grade");
      break;
   case gradeB:
      console.log("Score is around a B grade");
      break;
   default:
      console.log("Score does not match predefined grades");
}

// --- Loops ---
console.log("\n--- Loops ---");

// For loop
console.log("For loop:");
for (let i = 0; i < 3; i++) {
   console.log(i);
}

// Short-circuiting with || and &&
console.log("\nShort-circuiting examples:");
let userName = "";
let displayName = userName || "Guest";
console.log("Display Name:", displayName);

let age = 25;
age > 18 && console.log("Adult user.");

// While loop
console.log("\nWhile loop:");
let count = 0;
while (count < 3) {
   console.log(count);
   count++;
}

// Do-while loop
console.log("\nDo-while loop:");
let num = 0;
do {
   console.log(num);
   num++;
} while (num < 3);

let colors = ["red", "green", "blue"];
// forEach loop (over an array)
console.log("\nforEach loop:");
colors.forEach(color => console.log(color));

// For-in loop (over an object)
let person = {name: "Alice", age: 30, city: "Wonderland"};
console.log("\nFor-in loop:");
for (let key in person) {
   console.log(`${key}: ${person[key]}`);
}

// Map function (transform array)
console.log("\nMap function:");
let upperColors = colors.map(color => color.toUpperCase());
console.log(upperColors);
