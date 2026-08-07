function getComputerChoice() {

    let compchoice;

    randomnumber = Math.random();

    if (randomnumber < 0.33) {
    compchoice = "paper" 
    }

    else if (randomnumber < 0.66) {
    compchoice = "scissors"   
    }

    else {
    compchoice = "rock"
    }

    return compchoice;
}

function getHumanChoice() {

    let playerchoice = prompt("Choose rock, paper or scissors")
    return playerchoice;
}

function gameround(player = getHumanChoice(), comp = getComputerChoice()) {

    let winner = 0;

    if (player == comp) {

        console.log("your tied!");
        winner = "tied"
    }

    else if (player == "rock" && comp == "paper" ) {

        console.log("comp wins!");
        winner = "comp"
    }

    else if (player == "rock" && comp == "scissors" ) {

        console.log("player wins!");
        winner = "player"
    }

    else if (player == "scissors" && comp == "rock" ) {

        console.log("comp wins!");
        winner = "comp"
    }

    else if (player == "scissors" && comp == "paper" ) {

        console.log("player wins!");
        winner = "player"
    }

    else if (player == "paper" && comp == "rock" ) {

        console.log("comp wins!");
        winner = "comp"
    }

    else if (player == "paper" && comp == "scissors" ) {

        console.log("player wins!");
        winner = "player"
    }

    return winner;
}

console.log(gameround());

//console.log(getHumanChoice());

//console.log(getComputerChoice());