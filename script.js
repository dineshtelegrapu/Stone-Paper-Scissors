let userScore = 0;
let computerScore = 0;
const WIN_LIMIT = 5;
const choices = ["stone", "paper", "scissors"];

// DOM ELEMENTS

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const restartButton = document.getElementById("restart-game");

// User images
const userStoneImage = document.getElementById("user-choice-image-stone");
const userPaperImage = document.getElementById("user-choice-image-paper");
const userScissorsImage = document.getElementById("user-choice-image-scissors");

// Computer images
const computerStoneImage = document.getElementById("computer-choice-image-stone");
const computerPaperImage = document.getElementById("computer-choice-image-paper");
const computerScissorsImage = document.getElementById("computer-choice-image-scissors");

// Buttons
const stoneButton = document.getElementById("stone");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// COMPUTER CHOICE

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// CAPITALIZE

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// UPDATE SCORE

function updateScore() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}


// SHOW USER CHOICE

function showUserChoice(choice) {

    userStoneImage.style.display = "none";
    userPaperImage.style.display = "none";
    userScissorsImage.style.display = "none";

    if (choice === "stone") {
        userStoneImage.style.display = "block";
    }

    if (choice === "paper") {
        userPaperImage.style.display = "block";
    }

    if (choice === "scissors") {
        userScissorsImage.style.display = "block";
    }
}

// SHOW COMPUTER CHOICE

function showComputerChoice(choice) {

    computerStoneImage.style.display = "none";
    computerPaperImage.style.display = "none";
    computerScissorsImage.style.display = "none";

    if (choice === "stone") {
        computerStoneImage.style.display = "block";
    }

    if (choice === "paper") {
        computerPaperImage.style.display = "block";
    }

    if (choice === "scissors") {
        computerScissorsImage.style.display = "block";
    }
}

// END GAME

function gameOver(message) {

    resultText.textContent = message;

    stoneButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

// PLAY GAME

function play(userChoice) {

    // Stop if someone already won
    if (userScore >= WIN_LIMIT || computerScore >= WIN_LIMIT) {
        return;
    }

    // Computer chooses
    const computerChoice = getComputerChoice();

    // Show choices
    showUserChoice(userChoice);
    showComputerChoice(computerChoice);

    // DRAW

    if (userChoice === computerChoice) {

        resultText.textContent =
            `🤝 Draw! Both chose ${capitalize(userChoice)}.`;

        return;
    }

    // CHECK USER WIN

    const userWins =
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper");

    // USER WINS

    if (userWins) {

        userScore++;
        updateScore();
        if (userScore === WIN_LIMIT) {

            gameOver("🎉 Congratulations! You won the match!");

        }
        else {

            resultText.textContent =
                `You Win! ${capitalize(userChoice)} beats ${capitalize(computerChoice)}.`;
        }
    }

    // COMPUTER WINS

    else {
        computerScore++;

        updateScore();
        if (computerScore === WIN_LIMIT) {
            gameOver("Computer wins the match!");

        }
        else {
            resultText.textContent = `You Lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}.`;
        }
    }
}

// RESTART GAME

function restartGame() {

    userScore = 0;
    computerScore = 0;

    updateScore();

    resultText.textContent = "Choose Stone, Paper or Scissors.";

    // Enable buttons
    stoneButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    // Hide user images
    userStoneImage.style.display = "none";
    userPaperImage.style.display = "none";
    userScissorsImage.style.display = "none";

    // Hide computer images
    computerStoneImage.style.display = "none";
    computerPaperImage.style.display = "none";
    computerScissorsImage.style.display = "none";
}

// EVENT LISTENERS

stoneButton.addEventListener("click", function () {play("stone");});
paperButton.addEventListener("click", function () {play("paper");});
scissorsButton.addEventListener("click", function () {play("scissors");});

restartButton.addEventListener("click", restartGame);

// INITIALIZE GAME

restartGame();
