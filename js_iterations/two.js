// ARRAY PART 2: SEARCHING, SLICING, AND COMBINING

const numbers = [10, 20, 30, 40, 50];

// Searching inside an array
const hasThirty = numbers.includes(30);
console.log("includes (30):", hasThirty);

const indexThirty = numbers.indexOf(30);
console.log("indexOf (30):", indexThirty);

const firstLarge = numbers.find(num => num > 25);
console.log("find (first > 25):", firstLarge);

// Slicing an array (does not modify original)
// slice(startIndex, endIndex) - endIndex is exclusive
const sliced = numbers.slice(1, 4);
console.log("slice (index 1 to 3):", sliced);

// Combining arrays
const moreNumbers = [60, 70];
const combined = numbers.concat(moreNumbers);
console.log("concat:", combined);

// Converting array to a string
const joinedString = numbers.join(" | ");
console.log("join:", joinedString);