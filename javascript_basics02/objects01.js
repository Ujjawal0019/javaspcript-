// Creating an object
const user = {
  firstName: "Alice",
  lastName: "Smith",
  age: 28,
  isAdmin: true,
  // Nested object
  contact: {
    email: "alice@example.com",
    phone: "555-1234"
  },
  // Object method using the 'this' keyword
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  // Shorthand method syntax
  greet() {
    console.log(`Hello, I am ${this.firstName}`);
  }
};

// Accessing properties
console.log("Dot notation:", user.firstName);
console.log("Bracket notation (useful for dynamic keys):", user["age"]);

// Adding, modifying, and deleting properties
user.city = "New York";
user.age = 29;
delete user.isAdmin;
console.log("Modified user object:", user);

// Calling methods
console.log("Method return:", user.getFullName());
user.greet();

// Optional Chaining (Safely accessing deeply nested properties that might not exist)
console.log("Optional Chaining:", user.contact?.twitter);

// Object Destructuring (Extracting properties into standalone variables)
const { firstName, city, contact: { email } } = user;
console.log("Destructured variables:", firstName, city, email);

// Iterating over objects
const car = { make: "Toyota", model: "Corolla", year: 2021 };

console.log("Object Keys:", Object.keys(car));
console.log("Object Values:", Object.values(car));
console.log("Object Entries (Key-Value pairs):", Object.entries(car));

for (const key in car) {
  console.log(`for...in loop -> ${key}: ${car[key]}`);
}

// Merging Objects
const defaultSettings = { theme: "light", notifications: true, volume: 50 };
const userSettings = { theme: "dark", autoSave: false };

// Using Spread Operator (Modern, preferred)
const finalSettings = { ...defaultSettings, ...userSettings };
console.log("Spread operator merge:", finalSettings);

// Using Object.assign (Older method)
const mergedSettings = Object.assign({}, defaultSettings, userSettings);
console.log("Object.assign merge:", mergedSettings);

// Object Protections
const config = { apiEndpoint: "https://api.example.com", version: 1 };

// Object.freeze() prevents adding, deleting, or modifying properties
Object.freeze(config);
config.version = 2; 
console.log("Frozen object version (remains 1):", config.version);

// Object.seal() allows modifying existing properties, but prevents adding/deleting
const profile = { username: "bob123" };
Object.seal(profile);
profile.username = "bob_the_builder"; 
profile.newProperty = "test"; 
console.log("Sealed object:", profile);