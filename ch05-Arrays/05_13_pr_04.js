const promt  = require('prompt-sync')();
let len = promt("Enter the total numbers to be added to the array: ");
let num = [];
for(let i=0; i<len; i++){
    let num1 = promt(`Enter the number ${i+1}: `);
    num1 = Number.parseInt(num1);
    num.push(num1);
}
let sqr =num.map((value) => {
    return value*value;
})
console.log("The sqaure of the numbers are:",sqr);