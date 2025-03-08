function getComputerChoice() {
    var randomNumber = Math.random();
    var computerChoice = "";
    if (randomNumber <= 1/3) {
        computerChoice = "rock";
    }
    else if (randomNumber <= 2/3) {
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


rock.addEventListener('click', (event) => {
    if (flagWin == 0) {
        playGame('rock');
    }
});

scissor.addEventListener('click', (event) => {
    if (flagWin == 0) {
        playGame('scissor');
    }
});

paper.addEventListener('click', (event) => {
    if (flagWin == 0) {
        playGame('paper');
    }
});


let humanScore = 0;
let computerScore = 0;
let round = 0;
let flagWin = 0;        //to check is a winner has already been declared

function playGame(humanChoice) {

    function playRound(computerChoice, humanChoice) {
        if (humanChoice == 'rock') {
            if (computerChoice == 'rock') {
                result.textContent = "Computer Picks Rock....Round Drawn!";
            }
            else if (computerChoice == 'paper') {
                result.textContent = "Computer Picks Paper....Round Lost!";
                ++computerScore;
            }
            else {
                result.textContent = "Computer Picks Scissor....Round Won!";
                ++humanScore;
            }
        }
        else if (humanChoice == 'paper') {
            if (computerChoice == 'rock') {
                result.textContent = "Computer Picks Rock....Round Won!";
                ++humanScore;
            }
            else if (computerChoice == 'paper') {
                result.textContent = "Computer Picks Paper....Round Drawn!";
            }
            else {
                result.textContent = "Computer Picks Scissor....Round Lost!";
                ++computerScore;
            }
        }
        if (humanChoice == 'scissor') {
            if (computerChoice == 'rock') {
                result.textContent = "Computer Picks Rock....Round Lost!";
                ++computerScore;
            }
            else if (computerChoice == 'paper') {
                result.textContent = "Computer Picks Paper....Round Won!";
                ++humanScore;
            }
            else {
                result.textContent = "Computer Picks Scissor....Round Drawn!";
            }
        }
    }
    let computerChoice = getComputerChoice();

    playRound(computerChoice, humanChoice);
    ++round;

    scores.textContent = "End of Round " + round + ", Your Score: " + humanScore + ", Computer Score: " +computerScore;

    if (humanScore == 5 && computerScore < humanScore) {
        let winner = document.createElement("div");
        winner.textContent = "You have Won this game!";
        winner.setAttribute("id", "winner");
        body.appendChild(winner);

        let newGamebtn = document.createElement("a");
        newGamebtn.textContent = "New Game";
        newGamebtn.setAttribute("href", "index.html");
        body.appendChild(newGamebtn);
        flagWin = 1;
    }
    else if (computerScore == 5 && computerScore > humanScore) {
        let winner = document.createElement("div");
        winner.textContent = "You have Lost this game!";
        winner.setAttribute("id", "winner");
        body.appendChild(winner);

        let newGamebtn = document.createElement("a");
        newGamebtn.textContent = "New Game";
        newGamebtn.setAttribute("href", "index.html");
        body.appendChild(newGamebtn);
        flagWin = 1;
    }
}
