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
    compchoice = "ROCK"
    }

    return compchoice;
}


console.log(getComputerChoice());