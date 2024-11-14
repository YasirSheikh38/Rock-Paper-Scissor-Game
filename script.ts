let userScore: number = 0;
let compScore: number = 0;

let choices: NodeListOf<Element> = document.querySelectorAll(".choice");
let msg: HTMLElement | null = document.querySelector("#msgs");

const userScorePara: HTMLElement | null = document.querySelector("#user-score");
const compScorePara: HTMLElement | null = document.querySelector("#comp-score");

for (let i = 0; i < choices.length; i++) {
  const choice: Element = choices[i];
  choice.addEventListener("click", () => {
    const userChoice: string | null = choice.getAttribute("id");
    if (userChoice) {
      playGame(userChoice);
    }
  });
}

function genCompChoice(): string {
  const options: string[] = ["Rock", "Paper", "Scissor"];
  const index: number = Math.floor(Math.random() * options.length);
  const compChoice: string = options[index];
  return compChoice;
}

function playGame(userChoice: string): void {
  const compChoice: string = genCompChoice();
  let userWin: boolean = true;

  if (compChoice === userChoice) {
    drawGame();
  } else {
    if (userChoice === "Rock") {
      if (compChoice === "Paper") {
        console.log("Computer Win");
        userWin = false;
      } else {
        console.log("User Win");
        userWin = true;
      }
    } else if (userChoice === "Paper") {
      if (compChoice === "Scissors") {
        console.log("Computer Win");
        userWin = false;
      } else {
        console.log("User Win");
        userWin = true;
      }
    } else {
      if (compChoice === "Rock") {
        console.log("Computer Win");
        userWin = false;
      } else {
        console.log("User Win");
        userWin = true;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

function drawGame(): void {
  if (msg) {
    msg.innerText = "Game was Draw";
    console.log("Draw");
  }
}

function showWinner(userWin: boolean, userChoice: string, compChoice: string): void {
  if (msg) {
    if (userWin) {
      msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
      userScore++;
      if (userScorePara) userScorePara.innerText = userScore.toString();
    } else {
      msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
      compScore++;
      if (compScorePara) compScorePara.innerText = compScore.toString();
    }
  }
}
