// Basic Arrow Function vs Traditional Function
function traditionalAdd(a, b) {
  return a + b;
}

const arrowAdd = (a, b) => {
  return a + b;
};

console.log("Traditional Add:", traditionalAdd(2, 3));
console.log("Arrow Add:", arrowAdd(2, 3));

// Implicit Return (Concise Body)
const multiply = (a, b) => a * b;
const square = x => x * x; 
const sayHello = () => "Hello World!";

console.log("Implicit Multiply:", multiply(4, 5));
console.log("Implicit Square:", square(6));
console.log("No Parameters:", sayHello());

// Returning Object Literals Implicitly (wrapped in parentheses)
const createUser = (name, role) => ({ name: name, role: role });
console.log("Implicit Object Return:", createUser("Alice", "Admin"));

// Arrow Functions as Callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);

console.log("Doubled Array:", doubled);
console.log("Filtered Evens:", evens);

// Lexical 'this' Binding (Arrow functions do not have their own 'this')
const timer = {
  seconds: 0,
  start() {
    // Arrow function retains 'this' from the start() method context
    setTimeout(() => {
      this.seconds++;
      console.log("Timer seconds:", this.seconds);
    }, 100);
  }
};

timer.start();

// No 'arguments' object in arrow functions (Use Rest Parameters instead)
const sumAll = (...args) => {
  return args.reduce((total, current) => total + current, 0);
};

console.log("Sum with Rest Parameters:", sumAll(10, 20, 30, 40));