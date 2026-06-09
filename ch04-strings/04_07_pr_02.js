// include fucntion in string
let qoute = "The quick brown fox jumps over the lazy Dog";

// include
let word = "fox";
console.log(`The word "${word}" ${qoute.includes(word)? "is" : "is not"} in the quote.`); // inlcude written boolean value
console.log(qoute.includes("cat")); // false

// startsWith
console.log(qoute.startsWith("The")); // true
console.log(qoute.startsWith("the")); // false

// endsWith
console.log(qoute.endsWith("dog")); // false
console.log(qoute.endsWith("DoG")); // false
console.log((qoute.toLowerCase()).endsWith("dog")); // true

let a = "Dog".toLocaleLowerCase();
console.log(a); // dog