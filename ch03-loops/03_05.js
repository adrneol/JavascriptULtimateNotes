// Fucntions in js

/*
function syntax:
function functionName(parameters) {
    // code to be executed
}*/

// Example 1: A simple function that prints average of two numbers
function average(num1, num2) {
  return (num1 + num2) / 2;
  console.log("Done"); // This line will never be executed because it is after the return statement
}
let a = 10;
b = 20;
let c = 30;
console.log(`Average of ${a} and ${b} is:`, average(a, b)); // Average of 10 and 20 is: 15
console.log(`Average of ${a}, ${b} and ${c} is:`, average(average(a, b), c)); // Average of 10, 20 and 30 is: 22.5

// math round of
function roundOff(x, y) {
  return Math.round(x / y);
}
let num1 = 5,
  num2 = 3;
console.log(`Round off of ${num1} and ${num2} is:`, roundOff(num1, num2)); // Round off of 5 and 3 is: 1.67 to 2