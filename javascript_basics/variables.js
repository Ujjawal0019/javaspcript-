// Using let (Block-scoped, can be reassigned)
let playerName = "Alice";
console.log("Initial Name:", playerName);

playerName = "Bob";
console.log("Reassigned Name:", playerName);

// Using const (Block-scoped, cannot be reassigned)
const maxScore = 100;
console.log("Max Score:", maxScore);

// Note: const prevents reassigning the variable, but objects/arrays can still be mutated
const userProfile = { name: "Charlie", role: "Admin" };
userProfile.role = "User";
console.log("Mutated const object:", userProfile);

console.log("\n--- Variable Scope ---");

// Block Scope Demonstration with let/const
let globalMessage = "Hello from outside";

if (true) {
  let blockMessage = "Hello from inside";
  console.log("Inside block:", globalMessage);
  console.log("Inside block:", blockMessage);
}

// console.log(blockMessage); // If uncommented, this throws a ReferenceError

console.log("\n--- The older 'var' keyword ---");

// Using var (Function-scoped or Global-scoped, ignores block scope)
if (true) {
  var leakyVariable = "I leak out of the if-block!";
}
console.log("Outside the block:", leakyVariable);

// Variable Hoisting
// var is hoisted and initialized as undefined before the code runs
console.log("Hoisted var:", hoistedVar); 
var hoistedVar = "I am here now";

// let and const are also hoisted but sit in a "Temporal Dead Zone" and cannot be accessed early
// console.log(hoistedLet); // If uncommented, this throws a ReferenceError
let hoistedLet = "Too late";