// for loop
let sum = 0;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter number', (num) => {
  for(let i=1; i<=num; i++){
    sum += i;
  }
  console.log(sum);
  readline.close();
});

// quiz
// print even numbers from 1 to n