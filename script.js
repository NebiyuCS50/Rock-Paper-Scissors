let humanScore=0;
let computerScore=0;
function getComputerChoice(){
    let logic = Math.floor(Math.random()*3);
    let answer;
    if (logic ===0) {
        answer = "Rock";   
    }
    else if(logic ===1){
        answer = "Paper";
    }
    else if(logic === 2){
        answer = "Scissor";
    }
    return answer;
}
function getHumanChoice(){
    let user = prompt("Enter your choice");
    user = user.charAt(0).toUpperCase() + user.slice(1)
    return user
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("Draw")
    }
    else if(humanChoice==="Rock" && computerChoice ==="Paper"){
        computerScore= computerScore+1;
        console.log("You lose! Paper beats Rock")
    }
    else if(humanChoice==="Rock" && computerChoice ==="Scissor"){
        humanScore = humanScore +1;
        console.log("You Won! Rock beats Scissor")
    }
    else if(humanChoice ==="Paper"&& computerChoice ==="Scissor"){
        computerScore = computerScore +1;
        console.log("You lose! Scissor beats Paper")
    }
    else if(humanChoice ==="Paper"&& computerChoice ==="Rock"){
        humanScore = humanScore +1;
        console.log("You Won! Paper beats Rock")
    }
    else if(humanChoice ==="Scissor"&& computerChoice ==="Paper"){
        humanScore = humanScore + 1;
        console.log("You Won! Scissor beats Paper")
    }
    else if(humanChoice ==="Scissor"&& computerChoice ==="Rock"){
        computerScore = computerScore +1;
        console.log("You lose! Rock beats Scissor")
    }
}
function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Your Choice: ${humanSelection}`);
    console.log(`Computer Choice: ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Your Score ${humanScore}`);
    console.log(`Computer Score ${computerScore}`);
    console.log("-------------------------------------")
}
for (let index = 1; index <= 5; index++) {
    playGame();    
}

