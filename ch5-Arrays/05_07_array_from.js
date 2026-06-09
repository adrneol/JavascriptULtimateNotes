// array.from . used to convert other data type into array. usually used in converting Html collection into array
let Name = "Andry";
let arr = Array.from(Name);
console.log(arr);

// for....of  , like gets array value
let num = [3,4,5,6,7,8,9];
for(let i of num) {   // shortcut for accessing array elment. unlike the traditional for loop method.
    console.log(i);
}

// for...in , gets associated index as a key
let num1 = [3,4,5,6,7,8,9];
for(let i in num1) {  
    console.log(i, num1[i]);
}