const icon = ['rock','papper','scissor'];
const Uscore = document.querySelector('.Uscore');
const Cscore = document.querySelector('.Cscore');
const Result = document.querySelector('.result');
const buttons = document.querySelectorAll('button')
let H_score = 0;
let M_score = 0;
let your_choice = "";
let computer_choice = "";

function movesGenerator(){
    return icon[Math.floor(Math.random()*icon.length)]
}

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        your_choice = btn.innerText;
        computer_choice = movesGenerator();
        const result = findWinner();
        if(result == "You Win !!"){
            Uscore.textContent = `Your Score : ${H_score}`
        }else if(result == "You Loose !!"){
            Cscore.textContent = `Computer Score : ${M_score}`
        }
        Result.textContent = `Your choice ${your_choice} , Computer choice ${computer_choice}`
    })
})

document.getElementById('stop').addEventListener('click',()=>{
    Result.textContent = "Game is over !!";
    if(H_score == M_score)
        alert("Match is Tie !!");
    else if(H_score > M_score)
        alert("You are Winner !!");
    else{
        alert("Try to beat next time !!");
    }
})

function findWinner(){
    let result = "";
    if(your_choice == computer_choice){
        result = "It's Tie !!";
    }else if(your_choice == "rock" && computer_choice == "papper"){
        result = "You Win !!";
        H_score++;
    }else if(your_choice == "papper" && computer_choice == "scissor"){
        result = "You Loose !!";
        M_score++
    }else if(your_choice == "scissor" && computer_choice == "rock"){
        result = "You Loose !!";
        M_score++;
    }else if(your_choice == "papper" && computer_choice == "rock"){
        result = "You Loose !!";
        M_score++;
    }else if(your_choice == "scissor" && computer_choice == "papper"){
        result = "You Win !!";
        H_score++;
    }else if(your_choice == "rock" && computer_choice == "scissor"){
        result = "You Win !!";
        H_score++;
    }
    return result;
}





