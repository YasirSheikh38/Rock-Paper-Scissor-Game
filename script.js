let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msgs");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


for (let i = 0; i < choices.length; i++) {
  const choice = choices[i];
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
}

function genCompChoice() {
  const options = ["Rock", "Paper", "Scissor"];
  const index = Math.floor(Math.random() * options.length);
  const compChoice = options[index];
  return compChoice;
}

function playGame(userChoice) {
  const compChoice = genCompChoice();
  let userWin = true;

  if (compChoice === userChoice) {
    drawGame();
  } else {
    if (userChoice === "Rock") {
      if (compChoice === "Paper") {
        userWin = false;
      } else {
        userWin = true
      }
    } else if (userChoice === "Paper") {
      if (compChoice === "Scissor") {
        userWin = false;
      } else {
        userWin = true
      }
    } else {
      if (compChoice === "Rock") {
        userWin = false;
      } else {
        userWin = true
      }
    }
    showWinner(userWin,userChoice,compChoice);
  }
}

function drawGame() {
  msg.innerText = "Game was Draw";
}

function showWinner(userWin, userChoice, compChoice) {
    if (userWin) {
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        compScore++;
        compScorePara.innerText = compScore;
    }
}