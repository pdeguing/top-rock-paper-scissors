function getComputerChoice() {
  let random = Math.random() * 3;
  let computerChoice = "scissors";

  if (random >= 2) {
    computerChoice = "rock";
  } else if (random >= 1) {
    computerChoice = "paper";
  }

  return computerChoice;
}

function getHumanChoice() {
  let choice = prompt("what's your play?");

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return "uncorrect move";
  }
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    return [0, "it's a tie"];
  } else if (
    (computerChoice === "rock") & (humanChoice === "scissors") ||
    (computerChoice === "paper") & (humanChoice === "rock") ||
    (computerChoice === "scissors") & (humanChoice === "paper")
  ) {
    return [1, "you lose, " + computerChoice + " beats " + humanChoice];
  } else {
    return [2, "you win, " + humanChoice + " beats " + computerChoice];
  }
}

const buttons = document.querySelectorAll("button");
let scores = [0, 0]; // [computer, human]
let result;
const resultDiv = document.querySelector("#displayResult");
const scoreDiv = document.querySelector("#score");
let rounds = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    result = playRound(getComputerChoice(), button.textContent);

    if (result[0] === 1) scores[0]++;
    if (result[0] === 2) scores[1]++;

    rounds++;
    if (rounds <= 4) {
      resultDiv.textContent = result[1];
      scoreDiv.textContent = `Computer: ${scores[0]} | You: ${scores[1]}`;
    } else {
      resultDiv.textContent = "THE GAME IS OVER!";
      rounds = 0;
      scoreDiv.textContent = `Computer: ${scores[0]} | You: ${scores[1]}`;

      scores[0] = 0;
      scores[1] = 0;
    }
  });
});
