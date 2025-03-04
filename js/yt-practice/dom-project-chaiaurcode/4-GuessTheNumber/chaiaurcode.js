const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParss");

const p = document.createElement("p");

let previousGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    valiateGuess(guess);
  });
}

function valiateGuess(guess) {
  if (isNaN(guess)) alert("enter valid number");
  if (guess < 1 || guess > 100) alert("number between 1-100");
  previousGuess.push(guess);

  if (numGuess === 11) {
    displayGuess(guess);
    displayMessage(`game over, random number was ${randomNumber}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`number is too high`);
  }
}

function displayGuess(message) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  
}

function newGame() {}
