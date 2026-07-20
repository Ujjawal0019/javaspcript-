// Creating numbers (integers and floats are the same type in JS)
const intNum = 42;
const floatNum = 3.14159;

// Parsing strings into numbers
const parsedInt = parseInt("100px", 10);
const parsedFloat = parseFloat("3.14rem");
console.log("Parsed Int:", parsedInt);
console.log("Parsed Float:", parsedFloat);

// Checking if a value is Not-a-Number (NaN)
const invalidMath = "apple" / 2;
console.log("Is NaN:", Number.isNaN(invalidMath));

// Formatting to a specific number of decimal places (returns a string)
const price = 19.998;
console.log("Fixed Decimal:", price.toFixed(2));

console.log("\n--- Math Utilities ---");

// Built-in Constants
console.log("Pi:", Math.PI);

// Rounding numbers
const num = 4.6;
console.log("Standard Round:", Math.round(num)); 
console.log("Round Up (Ceil):", Math.ceil(num));   
console.log("Round Down (Floor):", Math.floor(num)); 
console.log("Truncate (Remove decimals):", Math.trunc(num));

// Finding Minimum and Maximum in a set of numbers
console.log("Maximum:", Math.max(10, 50, 30, 5));
console.log("Minimum:", Math.min(10, 50, 30, 5));

// Powers and Roots
console.log("Power (2^3):", Math.pow(2, 3)); 
console.log("Modern Power Operator:", 2 ** 3);
console.log("Square Root:", Math.sqrt(64));

console.log("\n--- Random Numbers ---");

// Random decimal between 0 (inclusive) and 1 (exclusive)
const randomDecimal = Math.random();
console.log("Random 0 to 1:", randomDecimal);

// Formula for a random integer between a min and max (inclusive)
const min = 1;
const max = 10;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random Integer (1-10):", randomInt);