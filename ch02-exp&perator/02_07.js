// conditional operators
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your age: ", (age) => {
  age = Number.parseInt(age);

  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }

  readline.question("Enter number: ", (num) => {
    num = Number.parseInt(num);
    if (num < 0) {
      console.log("Negative number");
    } else if (num >= 0 && num < 10) {
      console.log("Single digit number");
    } else if (num >= 10 && num < 100) {
      console.log("Two digit number");
    } else if (num >= 100 && num < 1000) {
      console.log("Three digit number");
    } else {
      console.log("Number with more than three digits");
    }

    readline.close(); // ✅ close ONLY after last question
  });
});

// 🧠 What readline.close() actually does
// It shuts down the input stream (stdin)
// After this → ❌ no more user input possible

// It’s like saying:

// “Stop listening forever”