//computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*9)+1;
    if(computerChoice <=3) {
        return "rock";
    }else if(computerChoice <=6) {
        return "paper";
    } else {
        return "scissors";
    }

}

//human choice
function getHumanChoice() {
    let humanChoice = prompt("choice rock, paper or scissors");
    
    if(humanChoice === null) {
        alert("You canceled the promt");
    }

    let choice = humanChoice.toLowerCase();

    if(choice === 'rock') {
        return "rock";
    } else if(choice === "paper") {
        return "paper";
    } else if(choice === "scissors") {
        return "scissors";
    } else {
        alert("Invalid input");
    }
    
}


//score count
let humanScore = 0,
    computerScore = 0;

