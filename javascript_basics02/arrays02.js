// ARRAY PART 2: ITERATION & ADVANCED METHODS

const numbers = [1, 2, 3, 4, 5];

// Iterating over an array
numbers.forEach((num) => {
  console.log("forEach loop:", num);
});

// Transforming an array (returns a new array)
const doubled = numbers.map(num => num * 2);
console.log("map (doubled):", doubled);

// Filtering an array (returns a new array)
const evens = numbers.filter(num => num % 2 === 0);
console.log("filter (evens):", evens);

// Reducing an array to a single value
const sum = numbers.reduce((total, current) => total + current, 0);
console.log("reduce (sum):", sum);

// Searching inside an array
const firstEven = numbers.find(num => num % 2 === 0);
console.log("find (first even):", firstEven);

const hasThree = numbers.includes(3);
console.log("includes (3):", hasThree);

const indexThree = numbers.indexOf(3);
console.log("indexOf (3):", indexThree);

// Slicing an array (does not modify original)
const sliced = numbers.slice(1, 4);
console.log("slice (index 1 to 3):", sliced);

// Combining arrays
const moreNumbers = [6, 7];
const combined = numbers.concat(moreNumbers);
console.log("concat:", combined);

// Converting array to a string
const joinedString = numbers.join("-");
console.log("join:", joinedString);