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

        console.log("player wins!");
        winner = "player"
    }

    else if (player == "paper" && comp == "scissors" ) {

        console.log("player wins!");
        winner = "player"
    }

    return winner;
}

function playgame() {

    let compscore = 0;
    let playerscore = 0;

    let roundresult = gameround();

    if (roundresult == "player") {
        playerscore = playerscore + 1;
    }

    else if (roundresult == "comp") {
        compscore = compscore + 1;
    }

    roundresult = gameround();

    if (roundresult == "player") {
        playerscore = playerscore + 1;
    }

    else if (roundresult == "comp") {
        compscore = compscore + 1;
    }

    roundresult = gameround();

    if (roundresult == "player") {
        playerscore = playerscore + 1;
    }

    else if (roundresult == "comp") {
        compscore = compscore + 1;
    }

    roundresult = gameround();

    if (roundresult == "player") {
        playerscore = playerscore + 1;
    }

    else if (roundresult == "comp") {
        compscore = compscore + 1;
    }

    roundresult = gameround();

    if (roundresult == "player") {
        playerscore = playerscore + 1;
    }

    else if (roundresult == "comp") {
        compscore = compscore + 1;
    }
    
    if (compscore > playerscore) {
        console.log(" you lost! computer win the game! you had " + playerscore + " and computer had " + compscore + " score!");
    }

    else if (compscore < playerscore) {
        console.log(" you win! you had " + playerscore + " and computer had " + compscore + " score!");
    }

    else if (compscore == playerscore) {
        console.log(" you tied! you had " + playerscore + " and computer had " + compscore + " score!");
    }
}

playgame();

//console.log(getHumanChoice());

//console.log(getComputerChoice());