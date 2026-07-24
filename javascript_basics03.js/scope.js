// Global Scope
const globalVar = "I am globally accessible";

function testGlobalScope() {
  console.log("Inside function accessing global:", globalVar);
}
testGlobalScope();
console.log("Outside function accessing global:", globalVar);

console.log("\n--- Function / Local Scope ---");

function localScopeDemo() {
  const functionVar = "I am inside a function";
  console.log("Inside function:", functionVar);
}
localScopeDemo();

// console.log(functionVar); // ReferenceError: functionVar is not defined

console.log("\n--- Block Scope (let & const vs var) ---");

if (true) {
  let blockScopedLet = "I am locked in this block";
  const blockScopedConst = "I am also locked in this block";
  var functionScopedVar = "I leak out of this block!";
}

// console.log(blockScopedLet);   // ReferenceError: blockScopedLet is not defined
// console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined
console.log("Accessing var outside block:", functionScopedVar);

console.log("\n--- Scope Chain & Lexical Scope ---");

const outerVar = "Outer scope variable";

function outerFunction() {
  const innerVar = "Inner scope variable";

  function innerFunction() {
    const deepestVar = "Deepest scope variable";
    
    // The scope chain allows inner functions to look upward for variables
    console.log("Accessing deepest:", deepestVar);
    console.log("Accessing inner:", innerVar);
    console.log("Accessing outer:", outerVar);
  }

  innerFunction();
  // console.log(deepestVar); // ReferenceError: deepestVar is not defined
}

outerFunction();

console.log("\n--- Shadowing Variables ---");

const shadowVar = "Global value";

function shadowDemo() {
  // Local variable "shadows" (overrides) the global variable with the same name
  const shadowVar = "Local value";
  console.log("Inside shadow function:", shadowVar);
}

shadowDemo();
console.log("Outside shadow function:", shadowVar);