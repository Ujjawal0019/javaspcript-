// Strict Equality (===) and Strict Inequality (!==)
// Compares both value and type (Recommended approach)
console.log("5 === 5:", 5 === 5);
console.log("5 === '5':", 5 === '5');
console.log("5 !== 8:", 5 !== 8);
console.log("5 !== '5':", 5 !== '5');

// Loose Equality (==) and Loose Inequality (!=)
// Compares value only, performs type coercion behind the scenes
console.log("5 == '5':", 5 == '5');
console.log("5 != '8':", 5 != '8');
console.log("0 == false:", 0 == false);

// Relational Operators
const age = 18;

// Greater than (>) and Less than (<)
console.log("Is age > 21?:", age > 21);
console.log("Is age < 20?:", age < 20);

// Greater than or equal (>=) and Less than or equal (<=)
console.log("Is age >= 18?:", age >= 18);
console.log("Is age <= 17?:", age <= 17);

// Comparing Strings (Lexicographical order based on Unicode values)
console.log("'apple' < 'banana':", 'apple' < 'banana');

// Note: Uppercase letters come before lowercase letters in Unicode
console.log("'Zebra' < 'apple':", 'Zebra' < 'apple');