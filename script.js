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
    console.log("it's a tie");
    return 0;
  } else if (
    (computerChoice === "rock") & (humanChoice === "scissors") ||
    (computerChoice === "paper") & (humanChoice === "rock") ||
    (computerChoice === "scissors") & (humanChoice === "paper")
  ) {
    console.log("you lose, " + computerChoice + " beats " + humanChoice);
    return 1;
  } else {
    console.log("you win, " + humanChoice + " beats " + computerChoice);
    return 2;
  }
}

function playGame() {
  let round = 0;

  let computerScore = 0;
  let humanScore = 0;
  let score = 0;

  let computerChoice = "";
  let humanChoice = "";

  while (round <= 4) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    score = playRound(computerChoice, humanChoice);
    if (score == 1) {
      computerScore++;
    }
    if (score == 2) {
      humanScore++;
    }
    round++;
  }

  if (computerScore > humanScore) {
    console.log(`you lost! ${computerScore}/${humanScore}`);
  } else {
    console.log(`you win! ${computerScore}/${humanScore}`);
  }
  return;
}

playGame();
