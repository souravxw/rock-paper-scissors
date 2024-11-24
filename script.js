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

