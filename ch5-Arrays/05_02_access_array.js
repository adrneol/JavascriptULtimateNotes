// Accessing Aray Elements
const Marks =[90,80,70,60,50,false, "Not Available", null, undefined];
console.log(Marks[0]); // 90
console.log(Marks[1]); // 80
console.log(Marks[2]); // 70
console.log(Marks[3]); // 60
console.log(Marks[4]); // 50
console.log(Marks[5]); // false 
console.log(Marks[6]); // Not Available
console.log(Marks[7]); // null
console.log(Marks[8]); // undefined\

console.log(Marks[9]); // undefined. Since there is no 9th index in the array, it returns undefined. In JavaScript, if we try to access an index that does not exist in the array, it will return undefined. This is because arrays in JavaScript are dynamic and can grow or shrink in size, so accessing an index that is out of bounds will simply return undefined instead of throwing an error.

let i = 0;
while (i < Marks.length) {
  if (Marks[i] !== null && Marks[i] !== undefined) {
    console.log(i+1,"length:", Marks[i].toString().length);
  } else {
    console.log("value is null/undefined");
  }
  i++;
}

const Names = ["Alice", "Bob", "Charlie", "David"];
Names[0] = "Eve"; // Modifying the first element of the array
console.log(Names); // Output: ["Eve", "Bob", "Charlie", "David"]

Names[Names.length - 1] = "Grace"; // Modifying the last element of the array
console.log(Names); // Output: ["Eve", "Bob", "Charlie", "Grace"]

Names.push("Harry"); // Adding a new element to the end of the array
console.log(Names); // Output: ["Eve", "Bob", "Charlie", "Grace", "Harry"]