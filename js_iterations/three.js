// ARRAY PART 3: ITERATION AND TRANSFORMATION

const scores = [85, 92, 78, 90, 88];

// Iterating over an array
scores.forEach((score, index) => {
  console.log(`Score at index ${index}:`, score);
});

// Transforming an array (returns a new array)
const boostedScores = scores.map(score => score + 5);
console.log("map (boosted scores):", boostedScores);

// Filtering an array (returns a new array)
const aGrades = scores.filter(score => score >= 90);
console.log("filter (scores >= 90):", aGrades);

// Reducing an array to a single value
const totalScore = scores.reduce((total, current) => total + current, 0);
console.log("reduce (total score):", totalScore);

// Sorting an array 
// Note: sort() mutates the original array, so we spread it into a new array first
const sortedScores = [...scores].sort((a, b) => a - b);
console.log("sort (ascending):", sortedScores);