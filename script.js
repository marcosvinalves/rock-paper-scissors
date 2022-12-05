//UI INFO
const combatInfo = document.querySelector(".combat");
const playerInfo = document.querySelector(".player");
const computerInfo = document.querySelector(".computer");
const roundInfo = document.querySelector(".round");
invaderImg = document.querySelector(".invader-img");

//VARIABLES
let round = 0;
let playerScore = 0;
let computerScore = 0;

//GET COMPUTER CHOICE & CHANGE IMAGE
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      computerSelection = "speed";
      invaderImg.src = `img/${computerSelection}.png`;
      return computerSelection;
    case 1:
      computerSelection = "strength";
      invaderImg.src = `img/${computerSelection}.png`;
      return computerSelection;
    case 2:
      computerSelection = "resistance";
      invaderImg.src = `img/${computerSelection}.png`;
      return computerSelection;
  }
}

//COUNT ROUND
function countRound() {
  round++;
  roundInfo.textContent = `Round: ${round}`;
  return round;
}

//COUNT SCORE AND COMBAT INFO
function countScore(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    combatInfo.textContent = `Combat Info: Draw!`;
  } else if (
    (playerSelection === "speed" && computerSelection === "strength") ||
    (playerSelection === "resistance" && computerSelection === "speed") ||
    (playerSelection === "strength" && computerSelection === "resistance")
  ) {
    combatInfo.textContent = `Combat Info: Win!`;
    playerScore++;
    playerInfo.textContent = `Your Score: ${playerScore}`;
  } else if (
    (computerSelection === "speed" && playerSelection === "strength") ||
    (computerSelection === "resistance" && playerSelection === "speed") ||
    (computerSelection === "strength" && playerSelection === "resistance")
  ) {
    combatInfo.textContent = `Combat Info: Lost!`;
    computerScore++;
    computerInfo.textContent = `Invader Score: ${computerScore}`;
  }
  return [computerScore, playerScore];
}

function playGame() {
  let playerSelection;
  getSpeedChoice = document
    .querySelector(".speed-button")
    .addEventListener("click", () => {
      let playerSelection = "speed";
      getComputerChoice();
      countRound();
      countScore(playerSelection, computerSelection);
    });
  getResistanceChoice = document
    .querySelector(".resistance-button")
    .addEventListener("click", () => {
      let playerSelection = "resistance";
      getComputerChoice();
      countRound();
      countScore(playerSelection, computerSelection);
    });
  getStrengthChoice = document
    .querySelector(".strength-button")
    .addEventListener("click", () => {
      let playerSelection = "strength";
      getComputerChoice();
      countRound();
      countScore(playerSelection, computerSelection);
    });
}
playGame();
