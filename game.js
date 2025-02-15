function getComputerChoice() {
    var randomNumber = Math.random();
    var computerChoice = "";
    if (randomNumber <= 0.33) {
        computerChoice = "rock";
    }
    else if (randomNumber <= 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissor";
    }
    return computerChoice;
}
function getHumanChoice() {
    let humanChoice = prompt("Enter choice");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log("Round Drawn! Rock ties Rock.");
        }
        else if (computerChoice == 'paper') {
            console.log("You Loose! Paper beats Rock.");
            ++computerScore;
        }
        else {
            console.log("You Win! Rock beats Scissor");
            ++humanScore;
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log("You Win! Paper beats Rock.");
            ++humanScore;
        }
        else if (computerChoice == 'paper') {
            console.log("Round Drawn! Paper ties Paper.");
        }
        else {
            console.log("You Loose! Scissor beats Paper");
            ++computerScore;
        }
    }
    if (humanChoice == 'scissor') {
        if (computerChoice == 'rock') {
            console.log("You Loose! Rock beats Scissor.");
            ++computerScore;
        }
        else if (computerChoice == 'paper') {
            console.log("You Win! Scissor beats Paper.");
            ++humanScore;
        }
        else {
            console.log("Round Drawn! Scissor ties Scissor");
        }
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(computerChoice, humanChoice);
