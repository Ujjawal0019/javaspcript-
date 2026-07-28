// ARRAY PART 1: CREATION AND BASIC MODIFICATION

const fruits = ["Apple", "Banana", "Cherry"];
console.log("Initial array:", fruits);
console.log("First element:", fruits[0]);
console.log("Array length:", fruits.length);

// Adding elements
fruits.push("Date");
console.log("After push (add to end):", fruits);

fruits.unshift("Apricot");
console.log("After unshift (add to start):", fruits);

// Removing elements
const removedLast = fruits.pop();
console.log("After pop (remove from end):", fruits);

const removedFirst = fruits.shift();
console.log("After shift (remove from start):", fruits);

// Modifying an element by index
fruits[1] = "Blueberry";
console.log("After reassignment:", fruits);