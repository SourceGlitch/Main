let guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const hintText = document.getElementById("hint-text");
const attemptCounter = document.getElementById("attempt-counter");
const resetBtn = document.getElementById("reset-btn");
const startBtn = document.getElementById("start-btn");
const resultText = document.getElementById("result");

submitBtn.style.visibility = "hidden";
resetBtn.style.visibility = "hidden";
hintText.style.visibility = "hidden";

let numTries = 3;
let guess = Math.floor(Math.random() * 10) + 1;

const numbers = [];


  
const clickStart = () => {
  if (submitBtn.style.visibility === "hidden") {
    submitBtn.style.visibility = "visible";
    hintText.style.visibility = "visible";
    startBtn.style.visibility = "hidden";
    resultText.innerText = "";
  } 
}

const isEmpty = () => {
  if (guessInput.value === "") {
    numTries--;
    attemptCounter.innerText = `Enter a value. Attempt left: ${numTries}`;
     if (numTries <= 0) {
    resultText.innerText = "You Lose..."
      submitBtn.style.visibility = "hidden";
      hintText.style.visibility = "hidden";
      resetBtn.style.visibility = "visible";
    }
  }
}

const clickSubmit = () => {
  if (guessInput.value === "") {
    isEmpty();
  } else if (guessInput.value != guess){
    wrongGuess();
    hint();
  } else {
      resultText.innerText = "You Win!"
      submitBtn.style.visibility = "hidden";
      hintText.style.visibility = "hidden";
      resetBtn.style.visibility = "visible";
  }
}

const wrongGuess = () => {
  numTries--;
  attemptCounter.innerText = `Attempts Left: ${numTries}`;
  if (numTries <= 0) {
    resultText.innerText = "You Lose...";
    submitBtn.style.visibility = "hidden";
    hintText.style.visibility = "hidden";
    resetBtn.style.visibility = "visible";
  } 
}


const clickReset = () => {
  guessInput.value = "";
  numTries = 3;
  attemptCounter.innerText = `You get ${numTries} attempts.`;
  resultText.innerText = "Can you guess the number?";
  submitBtn.style.visibility = "hidden";
  hintText.style.visibility = "hidden";
  resetBtn.style.visibility = "hidden";
  startBtn.style.visibility = "visible";
}

const hint = () => {
  if(guessInput.value < guess) {
    hintText.innerText = "You are too low.";
  } else if(guessInput.value > guess) {
    hintText.innerText = "You are too high.";
  }
} 
