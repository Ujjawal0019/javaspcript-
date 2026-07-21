// Primitive Data Types
const stringType = "Hello World";
const numberType = 42;
const booleanType = true;
const nullType = null;
let undefinedType; 
const symbolType = Symbol("unique");
const bigIntType = 9007199254740991n;

console.log("Type of stringType:", typeof stringType);
console.log("Type of numberType:", typeof numberType);
console.log("Type of booleanType:", typeof booleanType);

// Note: typeof null returns 'object' (a known historical JavaScript quirk)
console.log("Type of nullType:", typeof nullType); 
console.log("Type of undefinedType:", typeof undefinedType);
console.log("Type of symbolType:", typeof symbolType);
console.log("Type of bigIntType:", typeof bigIntType);

// Reference Data Types (Structural)
const objectType = { name: "Alice", age: 30 };
const arrayType = [1, 2, 3]; 
const functionType = function() { return "I am a function"; };

console.log("Type of objectType:", typeof objectType);

// Arrays are technically a special type of object in JavaScript
console.log("Type of arrayType:", typeof arrayType);

// You can use Array.isArray() to specifically check for an array
console.log("Is arrayType an Array?:", Array.isArray(arrayType));

// Functions are objects too, but typeof uniquely identifies them
console.log("Type of functionType:", typeof functionType);