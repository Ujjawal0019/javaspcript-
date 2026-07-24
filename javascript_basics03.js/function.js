// Function Declaration (Hoisted, can be called before it is defined)
console.log("Hoisted call:", greetUser("Alice"));

function greetUser(name) {
  return `Hello, ${name}!`;
}

// Function Expression (Not hoisted, stored in a variable)
const calculateArea = function(width, height) {
  return width * height;
};
console.log("Expression Area:", calculateArea(5, 10));

// Default Parameters
function createGreeting(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
console.log("With default:", createGreeting("Bob"));
console.log("Override default:", createGreeting("Bob", "Good morning"));

// Rest Parameters (Gathering multiple arguments into an array)
function sumAllNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum Rest Params:", sumAllNumbers(1, 2, 3, 4, 5));

// The 'arguments' Object (Available in traditional functions, not arrow functions)
function logArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Argument at index ${i}:`, arguments[i]);
  }
}
logArguments("apple", "banana", "cherry");

// Immediately Invoked Function Expression (IIFE)
(function() {
  const privateVar = "I am isolated from the global scope";
  console.log("IIFE runs immediately:", privateVar);
})();

// Closures (A function that remembers variables from its outer scope)
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const myCounter = createCounter();
console.log("Closure execution 1:", myCounter());
console.log("Closure execution 2:", myCounter());
console.log("Closure execution 3:", myCounter());

// Higher-Order Functions (Functions that take functions as arguments or return them)
function executeOperation(a, b, operationCallback) {
  return operationCallback(a, b);
}

function multiply(x, y) {
  return x * y;
}

console.log("Higher-Order execution:", executeOperation(4, 5, multiply));