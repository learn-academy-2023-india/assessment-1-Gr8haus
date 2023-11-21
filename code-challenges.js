// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:
    // Input: 2 strings
    // Output: the longer of the 2 input strings
    // Evaluate the length
    // Compare the length and return the one bigger length valvue 
    // Conditional statement to evaluate the length

const whichStringIsLonger = (string1, string2) => {
    if(string1.length > string2.length){
        return string1
    }   else {
        return string2
    }
}
console.log(whichStringIsLonger(fruit1, fruit2))
console.log(whichStringIsLonger(fruit3, fruit4))

// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
    // Declare arrays 
    // Combine the two arrays
    // Calculate length of combined array
    // Output resut

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

function combine(array1, array2) {
    const combineArray = array1.concat(array2);
        return combineArray.length;
  }
const returnLength = combine(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)
console.log(returnLength)

// Expected output: 9

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
    // Declare string variable
    // Split string variable 
    // Reverse elements in array
    // Join elements into a string
    // Output reversed string 

const currentCohort = "LEARN 2023"

const reversedCohort = currentCohort.split('').reverse().join('')
console.log(reversedCohort)

// Expected output: "3202 NRAEL"

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

// Pseudo code:
    // Declare an array
    // Use a for loop to log only the odd numbers
    // Output only odd numbers

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]

for (let i = 0; i < stockExchange.length; i++) {
    if (stockExchange[i] % 2 !== 0) {
      console.log(stockExchange[i]);
    }
  }
  
  // Expected output: 13 5 -5 27