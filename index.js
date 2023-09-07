const displayPlayerChoice = document.getElementById("playerChoice");
const displayComputerChoice = document.getElementById("computerChoice");
const choice = document.querySelector("#buttons");
const displayWinner = document.getElementById("displayText");
let pOption;
let cOption;

choice.children[0].addEventListener("click", () => {
  displayPlayerChoice.textContent = "Player choice: Rock";
  pOption = "r";
  computerChoice();
  getWinner(cOption, pOption);
});
choice.children[1].addEventListener("click", () => {
  displayPlayerChoice.textContent = "Player choice: Paper";
  pOption = "p";
  computerChoice();
  getWinner(cOption, pOption);
});
choice.children[2].addEventListener("click", () => {
  displayPlayerChoice.textContent = "Player choice: Scissors";
  pOption = "s";
  computerChoice();
  getWinner(cOption, pOption);
});

function computerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  switch (num) {
    case 1:
      cOption = "r";
      displayComputerChoice.textContent = "Computer choice: Rock";
      break;
    case 2:
      cOption = "p";
      displayComputerChoice.textContent = "Computer coice: Paper";
      break;
    case 3:
      cOption = "s";
      displayComputerChoice.textContent = "Computer choice: Scissors";
      break;
  }
}

function getWinner(cOption, pOption) {
  if (cOption === pOption) {
    displayWinner.textContent = "It's a draw!";
  } else if (cOption === "r" && pOption === "p") {
    displayWinner.textContent = "You win!";
  } else if (cOption === "r" && pOption === "s") {
    displayWinner.textContent = "Computer wins!";
  } else if (cOption === "s" && pOption === "r") {
    displayWinner.textContent = "You win!";
  } else if (cOption === "s" && pOption === "p") {
    displayWinner.textContent = "Computer wins!";
  } else if (cOption === "p" && pOption === "s") {
    displayWinner.textContent = "You win!";
  } else {
    displayWinner.textContent = "Computer wins!";
  }
}
