// String to Number Conversion
const strNum = "42";
console.log("Using Number():", Number(strNum));
console.log("Using Unary Plus:", +strNum);
console.log("Using parseInt:", parseInt("42px", 10));
console.log("Using parseFloat:", parseFloat("3.14"));

console.log("\n--- Number to String Conversion ---");

const numVal = 100;
console.log("Using String():", String(numVal));
console.log("Using toString():", numVal.toString());
console.log("Using Template Literal:", `${numVal}`);

console.log("\n--- Boolean Conversion (Truthy/Falsy) ---");

// Falsy values in JavaScript: false, 0, "", null, undefined, NaN
// Everything else is Truthy
console.log("String to Boolean:", Boolean("Hello"));
console.log("Empty String to Boolean:", Boolean(""));
console.log("Number to Boolean (0):", Boolean(0));
console.log("Number to Boolean (1):", Boolean(1));
console.log("Using Double NOT (!!):", !!100);

console.log("\n--- Implicit Type Coercion ---");

// JavaScript automatically converts types behind the scenes (Coercion)
// The + operator prefers strings (concatenation)
console.log("String + Number:", "5" + 2);

// Other math operators prefer numbers
console.log("String - Number:", "5" - 2);
console.log("String * Number:", "5" * 2);

// Loose vs Strict Equality
console.log("Loose Equality (==):", "5" == 5); 
console.log("Strict Equality (===):", "5" === 5);