// filter . nOn mutating
let num = [3,4,5,6,7,8,9];

let num1 = num.filter((valuE) =>{
    return valuE<6;
})
console.log(num1);

// reduce. Non mutating
let numb = [3,4,5,6,7,8,9];
let numb2 = numb.reduce((accumulator, currentValue) => {  //reduce adds first two values and then add the result to the next value.
    return accumulator + currentValue;
})
console.log(numb2);
console.log(numb);