let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const choices = ["stone", "paper", "scissors"];

// Generating computer's choice 
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Play one round 
function play(userChoice) {

    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        resultText.textContent =
            `It's a Draw! Both chose ${userChoice}.`;
        return;
    }

    if ((userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")){
        userScore++;
        userScoreSpan.textContent = userScore;

        resultText.textContent =
            `You Win! 🎉 ${capitalize(userChoice)} beats ${capitalize(computerChoice)}.`;
    }

    else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;

        resultText.textContent =
            `You Lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}.`;
    }
}