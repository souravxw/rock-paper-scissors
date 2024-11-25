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


// //score count
// let humanScore = 0;
// let computerScore = 0;


// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


    


    


    


function playGame() {
    //score count
let humanScore = 0;
let computerScore = 0;

//playround function
function playRound(humanChoice, computerChoice) {
    


    if(humanChoice === computerChoice ) {
     alert("tie!");
    } else {
     if(humanChoice === 'paper' && computerChoice === 'rock' || 
         humanChoice === "scissors"  && computerChoice === 'paper' ||
         humanChoice === "rock" && computerChoice === "scissors"
     ) { 
         console.log("You win!");
         humanScore = humanScore + 1;
         
     } else {
         console.log("Computer win!");
         computerScore = computerScore + 1;
         
     }
 
    }
    
 }
//play 5 times
const humanSelection1 = getHumanChoice();
const computerSelection1 = getComputerChoice();
playRound(humanSelection1,computerSelection1);

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();
playRound(humanSelection2,computerSelection2);

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();
playRound(humanSelection3,computerSelection3);
const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();
playRound(humanSelection4,computerSelection4);
const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();
playRound(humanSelection5,computerSelection5);
  


//showing final result after playing 5 rounds

if(humanScore > computerScore) {
    console.log("You are the Winner!");
    alert(`You are the WINNER! Score = ${humanScore}/5`);
} else if ( humanScore < computerScore) {
    console.log("Computer is the Winner!");
    alert(`Computer is the WINNER! Score = ${computerScore}/5`);
} else {
    console.log("TIE! play again");
    alert(`TIE! ${humanScore} vs ${computerScore}`);
}

}
    

playGame();