let userScore = 0;
let computerScore = 0;

const WIN_LIMIT = 5;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const restartButton = document.getElementById("restart-game");
const choices = ["stone", "paper", "scissors"];

// Restart Game Button
restartButton.addEventListener("click", restartGame);

function restartGame() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultText.textContent = "Game restarted! Make your choice.";
}

// Generate computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Capitalizing first letter of a word
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// function for one round
function play(userChoice) {
    // Stop if game is already over
    if (userScore === WIN_LIMIT || computerScore === WIN_LIMIT) {
        resultText.textContent = "Game Over! Click Restart to play again.";
        return;
    }
    const computerChoice = getComputerChoice();
    // Draw between user and computer
    if (userChoice === computerChoice) {
        resultText.textContent =
            `It's a Draw! Both chose ${capitalize(userChoice)}.`;
        return;
    }
    // When user wins
    if ((userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        userScore++;
        userScoreSpan.textContent = userScore;
        if (userScore === WIN_LIMIT) {
            resultText.textContent =
                "🎉 Congratulations! You reached 5 points and won the game!";
        } else {
            resultText.textContent =
                `You Win! ${capitalize(userChoice)} beats ${capitalize(computerChoice)}.`;
        }
    }
    else {
        // When computer wins
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        if (computerScore === WIN_LIMIT) {
            resultText.textContent =
                "💻 Computer reached 5 points. You lost the game!";
        } else {
            resultText.textContent =
                `You Lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}.`;
        }
    }
}

// Button Events so that when user clicks on a button, the play function is called with the choice.
document.getElementById("stone").addEventListener("click", () => play("stone"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));
