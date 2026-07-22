// Creating strings
const singleQuotes = 'Hello';
const doubleQuotes = "World";
const templateLiteral = `${singleQuotes} ${doubleQuotes}!`;
console.log("Template Literal:", templateLiteral);

// String Length
const text = "JavaScript";
console.log("Length of text:", text.length);

// Changing Case
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// Searching within a string
const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Index of 'brown':", sentence.indexOf("brown"));
console.log("Includes 'fox':", sentence.includes("fox"));
console.log("Starts with 'The':", sentence.startsWith("The"));
console.log("Ends with 'dog':", sentence.endsWith("dog"));

// Extracting parts of a string
// slice(startIndex, endIndex) - endIndex is exclusive
console.log("Slice (4, 9):", sentence.slice(4, 9));
console.log("Substring (4, 9):", sentence.substring(4, 9));

// Modifying strings (Strings are immutable, these return new strings)
const messyString = "   Trim me   ";
console.log("Trimmed:", messyString.trim());
console.log("Trim Start:", messyString.trimStart());
console.log("Trim End:", messyString.trimEnd());

const replaceString = "I like cats and cats are great";
console.log("Replace first instance:", replaceString.replace("cats", "dogs"));
console.log("Replace all instances:", replaceString.replaceAll("cats", "dogs"));

// Splitting a string into an array
const csvData = "apple,banana,orange";
const fruitsArray = csvData.split(",");
console.log("Split into array:", fruitsArray);

// Padding strings
const strNum = "5";
console.log("Pad Start:", strNum.padStart(3, "0"));
console.log("Pad End:", strNum.padEnd(3, "0"));