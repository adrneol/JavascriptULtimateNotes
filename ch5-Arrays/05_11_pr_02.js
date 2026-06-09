const num = [3,4,5,6,7,8,9];
const promt = require('prompt-sync')();
console.log("The original array is:", num);
for(let i=0; ; i++){
    let num1 = promt(`Enter the number ${i+1}: `);
    num1 = Number.parseInt(num1);
    num.push(num1);
    if(num1===0){
        break;
    }
}
console.log("The new array is:", num);