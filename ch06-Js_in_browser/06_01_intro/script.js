let rand = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkGuess() {
  let input = document.getElementById("inputBox").value;
  let num = Number(input);
  count++;

  let result = document.getElementById("result");

  if (num < rand) {
    result.textContent = "Too low";
  } else if (num > rand) {
    result.textContent = "Too high";
  } else {
    result.textContent = `Correct! You took ${count} tries`;
  }
}