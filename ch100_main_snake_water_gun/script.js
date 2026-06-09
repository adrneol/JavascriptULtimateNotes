alert("Lets play Snake, Water, Gun!");
let comp;
let player = prompt("Enter player Name:");
// game logic
const gameLogic = (comp, userchoice) => {
  if (comp === userchoice) {
    return `It's a tie! between ${player} and computer. Both chose ${comp}`;
  }
  if (userchoice === "s") {
    if (comp === "w") {
      return ` ${player} win! Snake drinks water.`;
    } else {
      return `${player} lose! Gun kills snake.`;
    }
  }
  if (userchoice === "w") {
    if (comp === "g") {
      return `${player} win! Water kills gun.`;
    } else {
      return `${player} lose! Snake drinks water.`;
    }
  }
  if (userchoice === "g") {
    if (comp === "s") {
      return `${player} win! Gun kills snake.`;
    } else {
      return `${player} lose! Water kills gun.`;
    }
  }
};

let playgain = true;
while (playgain) {
  let rand = Math.floor(Math.random() * 3) + 1; // generates a random number between 1 and 3
  // computer's choice
  if (rand == 1) {
    comp = "s";
  } else if (rand == 2) {
    comp = "w";
  } else {
    comp = "g";
  }
  // console.log(`Computer's choice is: ${comp}`);

  // user's choice
  let choice = prompt("Enter your choice (Snake, Water, Gun): ");
  choice = choice.toLowerCase().slice(0, 1);
  // console.log(` ${player}'s choice is: ${choice}`);
  let a = gameLogic(comp, choice);
  alert(a);
  document.write(a + "<br>");
  playgain = confirm("Do you want to play again? ");
}
