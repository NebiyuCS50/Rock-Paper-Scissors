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


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        Score.style.whiteSpace = "pre";
        Score.textContent=`Human Score: ${humanScore} \nComputer Choice: ${computerScore}`;
        inp_your_score.value = humanScore;
        inp_comp_score.value = computerScore;
    }
    else if(humanChoice==="Rock" && computerChoice ==="Paper"){
        computerScore= computerScore+1;
        Score.style.whiteSpace = "pre";
        inp_your_score.value = humanScore;
        inp_comp_score.value = computerScore;
    }
    else if(humanChoice==="Rock" && computerChoice ==="Scissor"){
        humanScore = humanScore +1;
        Score.style.whiteSpace = "pre";
        inp_your_score.value = humanScore;
        inp_comp_score.value = computerScore;
    }
    else if(humanChoice ==="Paper"&& computerChoice ==="Scissor"){
        computerScore = computerScore +1;
        Score.style.whiteSpace = "pre";
        inp_your_score.value = humanScore;
        inp_comp_score.value = computerScore;
    }
    else if(humanChoice ==="Paper"&& computerChoice ==="Rock"){
        humanScore = humanScore +1;
        Score.style.whiteSpace = "pre";
        inp_your_score.value = humanScore;
        inp_comp_score.value = computerScore;
    }
    else if(humanChoice ==="Scissor"&& computerChoice ==="Paper"){
        humanScore = humanScore + 1;
        Score.style.whiteSpace = "pre";
        inp_your_score.value = humanScore;
        inp_comp_score.value = computerScore;
    }
    else if(humanChoice ==="Scissor"&& computerChoice ==="Rock"){
        computerScore = computerScore +1;
        Score.style.whiteSpace = "pre";
        inp_your_score.value = humanScore;
        inp_comp_score.value = computerScore;
    }
}
const container = document.querySelector("div");
const inp_your_score = document.querySelector(".YourScore");
const Score = document.createElement("div");
const Score_output = document.querySelector("input");
const inp_comp_score = document.querySelector(".comp");

container.addEventListener("click", function(e){
        let val = e.target.value
        val = val.charAt(0).toUpperCase() + val.slice(1);
        const computerSelection = getComputerChoice();

        const selection_display1 = document.createElement("div");
        selection_display1.textContent=`Your Choice: ${val}`;
        

        const selection_display2 = document.createElement("div");
        selection_display2.textContent=`Computer Choice: ${computerSelection}`;
        
        const decor = document.createElement("div");
        decor.textContent="------------------------------";
        playRound(val, computerSelection);
        container.append(selection_display1);
        container.append(selection_display2);
        container.append(decor);
        
        if(humanScore ==5 || computerScore == 5){
            Score.textContent = "You Won";
            container.append(Score);
            humanScore=0;
            computerScore=0; 
            setTimeout(()=>{
                location.reload();}, 3000);
        }
        
});





