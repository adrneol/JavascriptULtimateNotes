const num = [3,4,5,6,7,8,9];
const promt = require('prompt-sync')();
console.log("The original array is:", num);
let len = promt("Enter the total numbers to be added to the array: ");
for(let i=0; i<len; i++){
    let num1 = promt(`Enter the number ${i+1}: `);
    num.push(num1);
}
console.log("The new array is:", num);