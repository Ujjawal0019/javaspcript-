
// Falsy values in JavaScript: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is Truthy

// Using truthiness in standard if/else statements
const userName = "Alice"; 

if (userName) {
  console.log("User exists:", userName);
} else {
  console.log("No user found");
}

const emptyString = "";

if (emptyString) {
  console.log("This will not run because empty strings are falsy");
} else {
  console.log("Empty string evaluated to false");
}

// Logical OR (||) for setting default values
// It returns the first truthy value it finds
const userInput1 = "";
const displayName1 = userInput1 || "Guest";
console.log("Assigned Name (||):", displayName1);

// Logical AND (&&) for short-circuit execution (Guard Clauses)
// It executes the right side ONLY if the left side is truthy
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back to your dashboard!");

const hasPermission = false;
hasPermission && console.log("This will not print");

// The Nullish Coalescing Operator (??)
// Unlike || which checks for ANY falsy value, ?? ONLY checks for null or undefined.
// This is crucial when 0 or "" are valid data.
const userScore = 0; 

const scoreWithOR = userScore || 100; 
console.log("Score using || (overrides 0):", scoreWithOR);

const scoreWithNullish = userScore ?? 100; 
console.log("Score using ?? (preserves 0):", scoreWithNullish);

