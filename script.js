//UI INFO
const combatInfo = document.querySelector(".combat");
const playerInfo = document.querySelector(".player");
const computerInfo = document.querySelector(".computer");
const roundInfo = document.querySelector(".round");
const choicesBox = document.querySelector(".chooses-box");
const invaderImg = document.querySelector(".invader-img");

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
  const computerBox = document.querySelector(".computer-box");
  computerBox.style.borderColor = "black";
  if (playerSelection === computerSelection) {
    combatInfo.textContent = `
    Ouch! Both destroyed. Round tied.`;
  } else if (
    (playerSelection === "speed" && computerSelection === "strength") ||
    (playerSelection === "resistance" && computerSelection === "speed") ||
    (playerSelection === "strength" && computerSelection === "resistance")
  ) {
    const computerBox = document.querySelector(".computer-box");
    computerBox.style.borderColor = "green";
    combatInfo.textContent = `Yeahh! Invader down. Nice job!`;
    playerScore++;
    playerInfo.textContent = `Your Score: ${playerScore}`;
  } else if (
    (computerSelection === "speed" && playerSelection === "strength") ||
    (computerSelection === "resistance" && playerSelection === "speed") ||
    (computerSelection === "strength" && playerSelection === "resistance")
  ) {
    toRed();
    const computerBox = document.querySelector(".computer-box");
    computerBox.style.borderColor = "red";
    combatInfo.textContent = `You got beat! Soldier Down!`;
    computerScore++;
    computerInfo.textContent = `Invader Score: ${computerScore}`;
  }
  return [computerScore, playerScore];
}

//END GAMING
function endGame() {
  if (playerScore === 5 || computerScore === 5) {
    getSpeedChoice = document
      .querySelector(".speed-button")
      .setAttribute("disabled", "");
    getResistanceChoice = document
      .querySelector(".resistance-button")
      .setAttribute("disabled", "");
    getStrengthChoice = document
      .querySelector(".strength-button")
      .setAttribute("disabled", "");
    if (playerScore > computerScore) {
      combatInfo.textContent = "Invader defeated. Earth is safe.";
    } else {
      combatInfo.textContent = "Defeated. Earth invaded.";
    }
  }
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
      endGame();
    });
  getResistanceChoice = document
    .querySelector(".resistance-button")
    .addEventListener("click", () => {
      let playerSelection = "resistance";
      getComputerChoice();
      countRound();
      countScore(playerSelection, computerSelection);
      endGame();
    });
  getStrengthChoice = document
    .querySelector(".strength-button")
    .addEventListener("click", () => {
      let playerSelection = "strength";
      getComputerChoice();
      countRound();
      countScore(playerSelection, computerSelection);
      endGame();
    });
}
playGame();
