// prompt user for input and greet them
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your name: ', (name) => {
  console.log("Hello, " + name + "!");
  console.log("Hello,",name,"!");
  readline.close();
});