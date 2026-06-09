// typecasting user input
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Whats your age", (age) => {
  age = Number.parseInt(age); // converting string input to integer
  if (age < 0) {
    console.log("This is invalid age");
  }
  readline.close();
});
