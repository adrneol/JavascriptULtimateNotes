const promt  = require('prompt-sync')();
let len = promt("Enter the total numbers of N natural numbers to be added to the array to calc factorial: ");
let num = [];

for(let i=0; i<len; i++){
    num.push(i+1);
}
console.log(num, typeof num[0]);

let facto =num.reduce((first, second) => {
    return first*second;
})
console.log("The factorial of the numbers are:",facto);