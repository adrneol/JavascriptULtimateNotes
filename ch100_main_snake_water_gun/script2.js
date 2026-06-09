alert("Lets play Snake, Water, Gun!");
document.body.innerHTML += "<h1>Snake Water Gun Game</h1>";
let player = prompt("Enter player Name:");

const gameLogic = (comp, user) => {
  if (comp === user) return `Tie! Both chose ${comp}`;

  if (
    (user === "s" && comp === "w") ||
    (user === "w" && comp === "g") ||
    (user === "g" && comp === "s")
  ) {
    return `${player} wins!`;
  }

  return `${player} loses!`;
};

let playgain = true;

while (playgain) {
  let rand = Math.floor(Math.random() * 3) + 1;
  const choices = ["s", "w", "g"];
  let comp = choices[rand - 1];

  let choice = prompt("Enter your choice (Snake, Water, Gun): ");
  if (!choice) break;

  choice = choice.toLowerCase().trim().slice(0, 1);

  if (!["s", "w", "g"].includes(choice)) {
    alert("Invalid choice! Use s, w, or g");
    continue;
  }

  let result = gameLogic(comp, choice);
  alert(result);
  document.write(result + "<br>");

  playgain = confirm("Do you want to play again?");
}
/*
User action	Value of choice
types "abc"	"abc"
presses OK (empty)	"" (empty string)
presses Cancel	null

Now: truthy vs falsy

Falsy values in JS:

false, 0, "", null, undefined, NaN
So:
if (!choice)

means:

👉 “if choice is falsy”

Case breakdown
🔹 User presses Cancel
choice = null
!choice → true
→ break
🔹 User presses OK without typing
choice = ""
!choice → true
→ break
🔹 User enters something
choice = "s"
!choice → false
→ continue loop
✅ Purpose

Stop the game if user cancels or gives empty input

https://chatgpt.com/s/t_69d562b15e3c8191ba32dd91305360d4
*/