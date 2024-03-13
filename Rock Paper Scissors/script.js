let userScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".choice");
const message = document.querySelector(".msgContainer");

const userscore = document.querySelector("#user");
const computerscore = document.querySelector("#computer");


//Function Generate Computer Choice
const generateComputerChoice = ()=>{
    let option = ["rock","paper","scissor"];
    let randIndex = Math.floor(Math.random() * 3);
    return option[randIndex];
};

let drawgame = () =>{
  console.log("Game is Draw");
  message.innerHTML = "It's a Draw!"
  message.style.backgroundColor = "Grey";
  message.style.color = "black";
};



// showing the winner
let showWinner = (userWin,userchoice,ComputerChoice) =>{
    if(userWin){
        console.log("You have won the game");
        userScore++;
        userscore.innerHTML = userScore;
        message.innerText = `You Won! ${userchoice} beats ${ComputerChoice}`;
        message.style.backgroundColor = "Green";
        message.style.color = "black";

        
    }else{
        console.log("You have Lost the game");
        computerScore++;
        computerscore.innerText = computerScore;
        message.innerText = `You Lost! ${ComputerChoice} beats ${userchoice}`;
        message.style.backgroundColor = "red";
        message.style.color = "black";



    }
};



//Game Logic
const playGame = (userChoice) =>{
    // User Choice
    let userchoice = userChoice;
    console.log("userChoice is :" , userchoice);

    // Computer Choice
    const ComputerChoice = generateComputerChoice();
    console.log("Computer Choice :" , ComputerChoice);

    // Draw game
    if(userchoice == ComputerChoice){
        drawgame();
    }

    else{
        let userWin = true;
        if(userchoice == "rock"){
            //paper , scissor
            userWin =  ComputerChoice == "paper" ? false : true;
        }else if(userchoice == "paper"){
            //rock , scissor
            userWin =  ComputerChoice == "scissor" ? false : true ;
        }else{
            //paper , rock
            userWin =  ComputerChoice == "rock" ? false : true;
        }
        showWinner(userWin,userchoice,ComputerChoice);
    }
};





//Function to get User Choice
options.forEach((choice) =>{
    choice.addEventListener("click", function tiplam(){

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});