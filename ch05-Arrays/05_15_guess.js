const prompt = require("prompt-sync")();
let rand = Math.floor(Math.random() * 100) + 1;
// console.log(rand);
let num;
let count = 0;
do {
  num = Number(prompt("Enter a number between 1 and 100: "));
  count++;
  if (num < rand) {
    console.log("Too low");
  } else if (num > rand) {
    console.log("Too high");
  } else {
    console.log("You got it in", count, "tries");
  }
} while (num !==rand);