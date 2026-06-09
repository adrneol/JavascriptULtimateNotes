const promt  = require('prompt-sync')();
let len = promt("Enter the total numbers to be added to the array: ");
let num = [];
for(let i=0; i<len; i++){
    let num1 = promt(`Enter the number ${i+1}: `);
    num1 = Number.parseInt(num1);
    num.push(num1);
}
let devby10 =num.filter((valuE) => {
    if(valuE%10===0){
        return true; // return value; will also work but it is not recommended as it is not clear and can lead to confusion. It is better to use return true or return false to indicate whether the element should be included in the new array or not.
    }
})
console.log("The numbers divisible by 10 are:",devby10);
// https://chatgpt.com/s/t_69c2d788b10481919955d88b10b038b0