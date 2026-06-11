console.log("hello world")


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors, shoot!");
    choice = choice.toLowerCase();
    return choice;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie.";
        }
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                computerScore++;
                return "You lost! " + computerChoice + "beats " + humanChoice + "!";
            }
            else if (computerChoice == "scissors") {
                humanScore++;
                return "Congratulations you won! " + humanChoice + "beats " + computerChoice + "!";
            }
        }
        if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                computerScore++;
                return "You lost! " + computerChoice + "beats " + humanChoice + "!";
            }
            else if (computerChoice == "rock") {
                humanScore++;
                return "Congratulations you won! " + humanChoice + "beats " + computerChoice + "!";
            }
        }
        if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                computerScore++;
                return "You lost! " + computerChoice + " beats " + humanChoice + "!";
            }
            else if (computerChoice == "paper") {
                humanScore++;
                return "Congratulations you won! " + humanChoice + " beats " + computerChoice + "!";
            }
        }
    }

    let human,comp,result;
    //Round 1
    human = getHumanChoice();
    comp = getComputerChoice();
    console.log(`Round 1 , You : ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

     //Round 2
    human = getHumanChoice();
    comp = getComputerChoice();
    console.log(`Round 2 , You : ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

     //Round 3
    human = getHumanChoice();
    comp = getComputerChoice();
    console.log(`Round 3 , You : ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

     //Round 4
    human = getHumanChoice();
    comp = getComputerChoice();
    console.log(`Round 4 , You : ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

     //Round 5
    human = getHumanChoice();
    comp = getComputerChoice();
    console.log(`Round 5 , You : ${human} | Computer: ${comp} `);
    result = playRound(human,comp);
    console.log(result);

    //FInal Result 
    console.log(`=====FINAL SCORE=====`);
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    if (humanScore > computerScore) console.log("You win the game!")
        else if (humanScore < computerScore) console.log("You lost! Better luck next time!")
    else console.log("It's a Tie");
}

//Start the game;
playGame();
