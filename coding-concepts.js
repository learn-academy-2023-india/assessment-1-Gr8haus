// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: This will log the length of the string, 10
// b) Verify and explain: When running cosole.log, 10 is returned since the string consists of 10 characters.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: This will log the 4th index in the string, o.
// b) Verify and explain: When running console.log, o is returned, which is the 4th index in the sting as strings are indexed starting at 0. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: This will log the language located in the 1st index in the array, Ruby
// b) Verify and explain: When running console.log, Ruby us returned. This is beacuse Ruby is the element located at the index of 1 in the langauges array. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will log the weekendDays as uppercase
// b) Verify and explain: When running console.log, I received an error indocating what i predicted to be incorrect. The reason it is incorrect is because 'toUpperCase()' is a string method and the code is attempting to apply it to an array, not a string.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: This will log the type of data type that .length is, which is a number data type
// b) Verify and explain: When running console.log, number is returned. This is because the typeof operator in JavaScript is used to determine the data type of a variable or expression. In the example given, dataTypes.length is an expression that evaluates the length of the array dataTypes. The length property of an array is a numeric value. Since it is a numeric value, number was returned.