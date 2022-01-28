let computerScore = 0;
let playerScore = 0;
let computerScoreDiv = document.getElementById("computer-score");
let userScoreDiv = document.getElementById("player-score");
let scoreBoard = document.querySelector(".score");
let result = document.querySelector(".result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let gameOver = document.querySelector(".header2");


function computerSelection() {
    const randomOption = Math.floor(Math.random() * 3);
    const choices = ['r', 'p', 's']
    return choices[randomOption];
}


function game(userChoice) {
    const computerChoice = computerSelection();
    const twoChoices = (userChoice + computerChoice);
    
    return twoChoices == "rp" ? lose(userChoice, computerChoice)
        : twoChoices == "ps" ? lose(userChoice, computerChoice)
        : twoChoices == "sr" ? lose(userChoice, computerChoice)
        : twoChoices == "pp" ? draw(userChoice, computerChoice)
        : twoChoices == "ss" ? draw(userChoice, computerChoice)
        : twoChoices == "rr" ? draw(userChoice, computerChoice)
        : win(userChoice, computerChoice);
}

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    playerScore++;
    userScoreDiv.innerHTML = playerScore;
    computerScoreDiv.innerHTML = computerScore;
    result.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You win 🏆!`;
    
    if (playerScore == 5) {
        gOver("t");
      }
}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreDiv.innerHTML = playerScore;
    computerScoreDiv.innerHTML = computerScore;
    result.innerHTML = `${convert(userChoice)} loses to ${convert(computerChoice)}. Computer Wins 💻!`;

    if (computerScore == 5) {
       gOver("v");
      }
}

function gOver(user) {
    if (user === "t") {
        computerScore = 0;
        playerScore = 0;
        computerScoreDiv.innerHTML = computerScore;
        userScoreDiv.innerHTML = playerScore;
        result.innerHTML = "You win✨! Play another game 😴!";
        //setTimeout(function(){ alert("Refresh to start a new game"); }, 1000);


    } else (user === "v")
        computerScore = 0;
        playerScore = 0;
        computerScoreDiv.innerHTML = computerScore;
        userScoreDiv.innerHTML = playerScore;
        result.innerHTML = "You lost with a computer lol 💻! Play another game 😴!";
        //setTimeout(function(){ alert("Refresh to start a new game"); }, 1000);
    
}

function draw(userChoice, computerChoice) {
    result.innerHTML = `${convert(userChoice)} equals to ${convert(computerChoice)}. It's a draw 🙄!`;
}


function playerSelection() {

    rock.addEventListener("click", function() {
       game("r");
    
    })
    paper.addEventListener("click", function() {
        game("p");
    })
    scissors.addEventListener("click", function() {
        game("s");
    })
}

playerSelection();  //don't remove this

