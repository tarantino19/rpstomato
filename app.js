`use strict`;

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

const yourScore = document.getElementById ("your-score");
const computerScore = document.getElementById ("computer-score");


// user choice - loops over every button and gets it's ID
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id; // ill get the target id when event happens and save that to user choice
    userChoiceDisplay.innerHTML = userChoice; //displaying userChoice on userChoiceDisplay
    generateComputerChoice();
    getResult();
  })
);


//generate the computer choice
function generateComputerChoice() {
  //a function for generating random computer choice
  const randomNumber = Math.floor(Math.random() * 3) //generate number zero to 2
  if (randomNumber === 0) {
    computerChoice = `rock`;
  } else if (randomNumber === 1) {
    computerChoice = `paper`;
  } else if (randomNumber === 2) {
    computerChoice = `scissors`;
  }
  computerChoiceDisplay.innerHTML = computerChoice;
};


// SHOWS THE RESULT
function getResult() {

  if (computerChoice === userChoice) {
    result = ` It's a draw 🥺 - Fight again!`;
  }
  else if (computerChoice === "rock" && userChoice === "paper") {
    result = `You win! 😜 Paper beats rock! `;
    incrementScore (yourScore)
  }
  else if (computerChoice === "rock" && userChoice === "scissors") {
    result = `You lost! 😓 Rock beats scissors`;
    incrementScore (computerScore)
  }
  else if (computerChoice === "paper" && userChoice === "scissors") {
    result = `You win! 😜 Scissor beats paper`;
    incrementScore (yourScore)
  }
  else if (computerChoice === "paper" && userChoice === "rock") {
    result = `You lost! 😓 Rock beats paper`;
    incrementScore (computerScore)
  }
  else if (computerChoice === "scissors" && userChoice === "rock") {
    result = `You win! 😜 Rock beats scissors`;
    incrementScore (yourScore)
  }
  else if (computerChoice === "scissors" && userChoice === "paper") {
    result = `You lost! 😓 scissor beats paper`;
    incrementScore (computerScore)
  }
  resultDisplay.innerHTML = result;
  checkWinner ()
};


// INCREASES THE SCORE
function incrementScore (score) {
  score.innerText = parseInt (score.innerText) + 1
  };


  //RESETS WHOLE GAME
  function resetGame () {
    location.reload();
  };


  //CHECK WHO THE WINNER IS
function checkWinner () {
  const yourScoreTracker = document.getElementById ("your-score").innerText
  const computerScoreTracker = document.getElementById ("computer-score").innerText 

  if (yourScoreTracker == 10) {
    alert ("You just scored 10, you are a legend and a winner!")
    setTimeout(() => {
      resetGame ()
    }, 1200);

  } else if (computerScoreTracker == 10) {
    alert ("Sorry, but you lost! Try again by clicking OK")
    setTimeout(() => {
      resetGame ()
    }, 1200);

  }
};








