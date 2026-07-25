// If, Else If, Else statements
const age = 20;

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// Ternary Operator (Shorthand for simple if/else)
const isRaining = true;
const action = isRaining ? "Take an umbrella" : "Wear sunglasses";
console.log("Weather action:", action);

// Switch Statement
const dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown Day";
}
console.log("Day:", dayName);

// For Loop
for (let i = 0; i < 3; i++) {
  console.log("For loop iteration:", i);
}

// While Loop
let counter = 0;
while (counter < 3) {
  console.log("While loop iteration:", counter);
  counter++;
}

// Do...While Loop (Always executes at least once)
let doCounter = 0;
do {
  console.log("Do...While iteration:", doCounter);
  doCounter++;
} while (doCounter < 3);

// Break and Continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Skipping iteration 2 using continue");
    continue; 
  }
  
  if (i === 4) {
    console.log("Stopping loop completely at 4 using break");
    break; 
  }
  
  console.log("Loop iteration:", i);
}