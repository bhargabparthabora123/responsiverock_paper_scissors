let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="Game is Draw .Play again";
    msg.style.backgroundColor="#081b31"; 
    const body=document.getElementsByTagName("body");
    body[0].style.backgroundColor="green";
}

const showWinner=(userWin)=>{
if(userWin){
    console.log("You Win!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText="You Win!";
    msg.style.backgroundColor="green"; 
    const body=document.getElementsByTagName("body");
    body[0].style.backgroundColor="yellow";
}else{
    console.log("you lose!");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText="You lose!";
    msg.style.backgroundColor="red"; 
    const body=document.getElementsByTagName("body");
    body[0].style.backgroundColor="lightblue";
}
}


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*options.length);
    return options[randomIdx];
}

const playGame=(userChoice)=>{
    console.log("user choice:",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("compter choice:",compChoice);
    if(compChoice===userChoice){
        //drawgame
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //scissors,rock
            userWin=compChoice==="scissors"?false:true;
        }else{
           //rock ,paper
           userWin=compChoice==="rock"?false:true; 
        }
    showWinner(userWin);
    }




}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})