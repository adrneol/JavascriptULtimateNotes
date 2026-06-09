// Array methods.

// 1. tostring() method: Converts an array to a string. Non Mutating method.
const numbers = [1, 2, 3, 4, 5];
let result = numbers.toString();
console.log("result array",result); // Output: "1,2,3,4,5"
console.log("typeof result",typeof result, "typeof numbers", typeof numbers); // Output: string object


// 2. Join() method: Joins all elements of an array into a string with a specified separator. Non Mutating method.
let c = numbers.join("_");
console.log("joined string",c); // Output: "1_2_3_4_5"
console.log("typeof joined string",typeof c, "typeof numbers", typeof numbers); // Output: string object


// 3. Pop() method: Removes the last element from an array and returns it. Mutating method.
let lastElement = numbers.pop();
console.log("last element",lastElement); // Output: 5 pop returns the popped element
console.log("remaining array",numbers); // Output: [1, 2, 3, 4]
console.log("type of last element",typeof lastElement); // Output: number


// 4. Push() method: Adds one or more elements to the end of an array and returns the new length of the array. Mutating method.
let newarr = numbers.push(6,7);
console.log("new array length",newarr); // Output: 6 push returns the new length of the array
console.log("updated array",numbers); // Output: [1, 2, 3, 4, 6, 7]
console.log("typeof new array length",typeof newarr); // Output: number.


// 5. Shift() method: Removes the first element from an array and returns it. Mutating method.
let firstElement = numbers.shift();
console.log("first element",firstElement); // Output: 1 shift returns the shifted element
console.log("remaining array",numbers); // Output: [2, 3, 4, 6, 7]
console.log("type of first element",typeof firstElement); // Output: number


// 6. Unshift() method: Adds one or more elements to the beginning of an array and returns the new length of the array. Mutating method.
let newLength = numbers.unshift(0,1);
console.log("new length",newLength); // Output: 7 unshift returns the new length of the array
console.log("updated array",numbers); // Output: [0, 1, 2, 3, 4, 6, 7]
console.log("typeof array",typeof numbers); // Output: object.
console.log("typeof new length",typeof newLength); // Output: number














// https://chatgpt.com/s/t_69c2b8b6dca88191a9e1cd148298fc97