let userScore = 0;
let computerScore = 0;

const WIN_LIMIT = 5;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const restartButton = document.getElementById("restart-game");
const choices = ["stone", "paper", "scissors"];

// Generate computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

// Capitalize first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Update scoreboard
function updateScore() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

// End game
function gameOver(message) {
    resultText.textContent = message;
    document.getElementById("stone").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// One Round function
function play(userChoice) {
    if (userScore >= WIN_LIMIT || computerScore >= WIN_LIMIT) {
        return;
    }
    const computerChoice = getComputerChoice();

    // Draw
    if (userChoice === computerChoice) {
        resultText.textContent =
            `🤝 Draw! Both chose ${capitalize(userChoice)}.`;
        return;
    }
    
    const userWins =
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper");
    if (userWins) {
        userScore += 1;
        updateScore();
        if (userScore === WIN_LIMIT) {
            gameOver("Congratulations! You won the match!");
        } else {
            resultText.textContent =
                `You Win! ${capitalize(userChoice)} beats ${capitalize(computerChoice)}.`;
        }

    } else {

        computerScore += 1;
        updateScore();

        if (computerScore === WIN_LIMIT) {
            gameOver("Computer wins the match!");
        } else {
            resultText.textContent =
                `You Lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}.`;
        }
    }
}

// Restart Game
function restartGame() {
    userScore = 0;
    computerScore = 0;

    updateScore();
    resultText.textContent = "Choose Stone, Paper or Scissors.";
    document.getElementById("stone").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

// Event Listeners or score buttons
document.getElementById("stone").addEventListener("click", function () {play("stone");});
document.getElementById("paper").addEventListener("click", function () {play("paper");});
document.getElementById("scissors").addEventListener("click", function () {play("scissors");});
restartButton.addEventListener("click", restartGame);

// Initialize score
updateScore();
