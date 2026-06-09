const num = [1,2,3,4,5,6,7,8,9];
const nummore= [11,12,13,14,15,16,17,18,19];
const numevenmore = [222,444,666,888,10,12,14,16,18,20];

delete num[0]; // delete is operator like typeof, not a method.
console.log(num, num.length); // Output: [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]. length of the array remains unchanged, but the first element is now empty (undefined).

// concat method. Non Mutating method.
console.log(num.concat(nummore)); // Output: [ 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
let narr = num.concat(nummore, numevenmore); // can concat multiple arrays
console.log(narr);
console.log(num);  // unchanged
console.log(nummore); // unchanged

// sort method. Mutating method.
let numb = [4, 8, 2, 6, 1, 3, 5, 7, 9,222,299,333,444,555,666,777,888,999]; 
numb.sort(); // it sorts alphabetically
console.log(numb);

// if we have to sort it numerically, we need to pass a function as an argument to the sort method.
let compare = (a,b) => {
    return a-b; // ascending order
    // return b-a; // descending order
}
numb.sort(compare);
console.log(numb);

// reverse method. Mutating method.
let numrev = [1,2,3,4,5,6,7,8,9];
numrev.reverse(); // reverse the array
console.log(numrev);

// splice method. Mutating method. Slice returns those elements that are removed from the original array.
// splice(startIndex, deleteCount, item1, item2, item3, ...)
let numsp = [1,2,3,4,5,6,7,8,9];
let deleted = numsp.splice(2,3,1100,1200,1300); // startIndex, deleteCount, item1, item2, item3
console.log(numsp);
console.log(deleted); // Output: [ 3, 4, 5 ] returns the deleted elements

// slice method. Non Mutating method.
// slice(startIndex, endIndex), it does make a new array. endindex is not included.
let numsli = [1,2,3,4,5,6,7,8,9];
let sliced = numsli.slice(2,6);
let sliced2 = numsli.slice(2); // makes a copy of the array from index 2 to the end
console.log(numsli);
console.log(sliced);
console.log(sliced2);