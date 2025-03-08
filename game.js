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

let rock = document.querySelector("#rock");
let scissor = document.querySelector("#scissor");
let paper = document.querySelector("#paper");

let result = document.querySelector("#result");
let scores = document.querySelector("#scores");

let body = document.querySelector("body");

let humanScore = 0;
let computerScore = 0;

rock.addEventListener('click', (event) => {
    playRound(getComputerChoice(), 'rock');
});

scissor.addEventListener('click', (event) => {
    playRound(getComputerChoice(), 'scissor');
});

paper.addEventListener('click', (event) => {
    playRound(getComputerChoice(), 'paper');
});



function playRound(computerChoice, humanChoice) {
    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            result.textContent = "Round Drawn! Rock ties Rock.";
        }
        else if (computerChoice == 'paper') {
            result.textContent = "You Loose! Paper beats Rock.";
            ++computerScore;
        }
        else {
            result.textContent = "You Win! Rock beats Scissor";
            ++humanScore;
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            result.textContent = "You Win! Paper beats Rock.";
            ++humanScore;
        }
        else if (computerChoice == 'paper') {
            result.textContent = "Round Drawn! Paper ties Paper.";
        }
        else {
            result.textContent = "You Loose! Scissor beats Paper";
            ++computerScore;
        }
    }
    if (humanChoice == 'scissor') {
        if (computerChoice == 'rock') {
            result.textContent = "You Loose! Rock beats Scissor.";
            ++computerScore;
        }
        else if (computerChoice == 'paper') {
            result.textContent = "You Win! Scissor beats Paper.";
            ++humanScore;
        }
        else {
            result.textContent = "Round Drawn! Scissor ties Scissor";
        }
    }

    scores.textContent = "Your score: " + humanScore + ", Computer Score: " + computerScore;

    if (humanScore == 5) {
        let winner = document.createElement("div");
        winner.textContent = "You Win the game";
        body.appendChild(winner);
    }
    else if (computerScore == 5) {
        let winner = document.createElement("div");
        winner.textContent = "You Loose the game";
        body.appendChild(winner);
    }
    else {
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice, computerChoice;


    console.log("--------------ROUND 1--------------")
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    console.log("-----------END OF ROUND 1-----------");
    console.log("Results : \nYour Score: "+humanScore+" Computer Score: "+computerScore);

    console.log("--------------ROUND 2--------------")
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    console.log("-----------END OF ROUND 2-----------");
    console.log("Results : \nYour Score: "+humanScore+" Computer Score: "+computerScore);
    
    console.log("--------------ROUND 3--------------")
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    console.log("-----------END OF ROUND 3-----------");
    console.log("Results : \nYour Score: "+humanScore+" Computer Score: "+computerScore);
    
    console.log("--------------ROUND 4--------------")
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    console.log("-----------END OF ROUND 4-----------");
    console.log("Results : \nYour Score: "+humanScore+" Computer Score: "+computerScore);
    
    console.log("--------------ROUND 5--------------")
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    console.log("-----------END OF ROUND 5-----------");
    console.log("Results : \nYour Score: "+humanScore+" Computer Score: "+computerScore);
    
    if (humanScore > computerScore) {
        console.log(`***************************************************************
                                                YOU WIN
                    ***************************************************************`);
    }
    else if (computerScore = humanScore) {
        console.log(`***************************************************************
                                                YOU DRAW
                    ***************************************************************`);
    }
    else {
        console.log(`***************************************************************
                                                YOU LOOSE
                    ***************************************************************`);
    }
}

playGame();
