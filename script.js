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
}
