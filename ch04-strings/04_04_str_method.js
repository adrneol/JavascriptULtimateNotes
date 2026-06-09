// string methods
let Name = "Andry";

console.log(Name.length); // 5. Since length is a property of string, we can access it without parentheses`

console.log(Name.toUpperCase()); // ANDRY. toUpperCase() is a method that converts all characters in a string to uppercase. Since it is a method, we need to use parentheses to call it, i.e. we have to invoke it.
console.log(Name.toLowerCase()); // andry

// Slice method
console.log(Name.slice(0,3)); // prints str from 0 index til 2, 3 is not included. Output: And
console.log(Name.slice(2)); // prints str from 2 index til the end of the string. Output: dry
console.log(Name.slice(-3)); // prints str from last 3 characters. Output: dry
console.log(Name.slice(-3,-1)); // prints str from last 3 characters til last 1 character. Output: dr

// Replace method
let Name1 = "Andrry";
console.log(Name1.replace("r","p")); // Andpry. replace() method replaces the first occurrence of a specified value with another value in a string. In this case, it replaces the first "r" with "p". Output: Andpry

// Concat method
let Name2 = "Andry";
let Name3 = "Horizon";
console.log(Name2.concat(Name3)); // AndryHorizon
console.log(Name2.concat(" ",Name3)); // Andry Horizon

// Trim method
let Name4 = "   Andry   ";
console.log(Name4.trim()); // Andry. trim() method removes whitespace from both ends of a string. Output: Andry