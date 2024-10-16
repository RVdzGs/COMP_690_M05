// The Rock, Paper, Scissors Game

/*
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.

Our code will break the game into 3 phases:

1. User makes a choice. How will we collect the user’s choice?
2. Computer makes a choice. How will we collect the computer’s choice?
3. A conditional that determines who wins.

You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

1. Begin by prompting the user for their choice.
2. Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
3. Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
4. Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
5. What if the result ends in a tie? Figure out how to handle that as well.
5. What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
*/

// GLOBAL VARIABLES
let userChoice;
let computerChoice;
let playAgain;
let ranNum;
let score;

function playGame() {
  // PROMPT THE USER FOR THEIR CHOICE & VALIDATE THE DATA ENTRY
  do {
    userChoice = prompt(
      "Make a choice between rock, paper, or scissors."
    ).toLowerCase();
    if (
      userChoice !== "rock" &&
      userChoice !== "paper" &&
      userChoice !== "scissors"
    ) {
      alert("Pleae enter a valid entry.");
    } else {
      break;
    }
  } while (true);

  // COMPUTER MAKES A CHOICE
  ranNum = Math.random();
  if (ranNum >= 0 && ranNum <= 0.33) {
    computerChoice = "rock";
  } else if (ranNum > 0.33 && ranNum <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // DETEREMINE THE WINNER
  if (userChoice === computerChoice) {
    score = `There was a tie!`;
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    score = `You won the match!`;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    score = `You won the match!`;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    score = `You won the match!`;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    score = `You lost the match!`;
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    score = `You lost the match!`;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    score = `You lost the match!`;
  }
  score += ` You chose: ${userChoice}. Computer chose: ${computerChoice}.`;
  return score;
}
// DISPLAY THE RESULT IN AN ALERT BOX
function init() {
  alert("Welcome to the Rock, Paper, Scissors Game");
  playAgain = "y";
  do {
    alert(playGame());
    playAgain = prompt("Do you want to play again? (y/n)", "y");
  } while (playAgain === "y");
  alert("Thank you for playing the Rock, Paper, Scissors Game.");
}
init();
