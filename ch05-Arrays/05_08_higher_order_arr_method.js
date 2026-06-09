// MEP REDUCE FILTER. All are non mutating

// Map. map is used to transform the elements of an array into a new array by applying a function to each element and prserves the the old array. while foreach is used to perform operation on existing array's elements
// MAP is NON MUTATING
let arr = [1,2,3];
 let arr2 = arr.map((value)=>{
    console.log(value);
    return value +1; 
 }
)
console.log(arr2, typeof arr2);
console.log(arr);

// map takes 3 arguments (value, index, array)
let array = ["a", "b", "c"];
let str= array.map((value,index, arrayy)=>{
    console.log(value, index, arrayy);
    return value + index;
})
console.log(str);
console.log(array);