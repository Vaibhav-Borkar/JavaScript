// Define the choices
const choices = ["snake", "water", "gun"];

// Function to get computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
console.log(getComputerChoice());

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === "snake" && computerChoice === "water") ||
    (userChoice === "water" && computerChoice === "gun") ||
    (userChoice === "gun" && computerChoice === "snake")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Function to play the game
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
}

// Function to start the game and get user input
function startGame() {
  const userChoice = prompt(
    "Enter your choice (snake, water, gun):"
  ).toLowerCase();
  if (!choices.includes(userChoice)) {
    console.log("Invalid choice! Please choose snake, water, or gun.");
    return;
  }
  playGame(userChoice);
}

// Start the game
startGame();
