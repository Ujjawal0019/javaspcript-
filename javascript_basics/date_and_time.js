
// 1. CREATING DATES


// Current Date and Time
const now = new Date();
console.log("Right now:", now);

// From a Date String (ISO 8601 format is recommended)
const specificDateString = new Date("2026-07-21T12:00:00Z");
console.log("From string:", specificDateString);

// From Milliseconds since Epoch (January 1, 1970)
const fromEpoch = new Date(1700000000000); 
console.log("From epoch:", fromEpoch);

// From specific components (Year, Month, Day, Hour, Min, Sec)
// Note: Months are 0-indexed! (6 = July)
const specificComponents = new Date(2026, 6, 21, 14, 30, 0); 
console.log("From components:", specificComponents);



// 2. EXTRACTING DATE COMPONENTS


const myDate = new Date("2026-12-25T10:30:00");

console.log("\n--- Extracting Components ---");
console.log("Year:", myDate.getFullYear());       
console.log("Month:", myDate.getMonth());         
console.log("Date:", myDate.getDate());           
console.log("Day of Week:", myDate.getDay());     
console.log("Hours:", myDate.getHours());         
console.log("Minutes:", myDate.getMinutes());     
console.log("Timestamp:", myDate.getTime());      

// 3. FORMATTING DATES FOR DISPLAY


const eventDate = new Date(2026, 10, 15, 18, 0); 

console.log("\n--- Formatting Dates ---");

// ISO string (standard for APIs and databases)
console.log("ISO:", eventDate.toISOString()); 

// Localized Date String
console.log("Local Date:", eventDate.toLocaleDateString('en-US')); 

// Highly customizable localized formatting
const customFormat = eventDate.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
console.log("Custom Format:", customFormat);