function getComputerChoice() {
    randomnumber = Math.random();
    return randomnumber;
}

let randnum = getComputerChoice();

let compchoice;

if (randnum < 0.33) {
    compchoice = "paper" 
}

else if (randnum < 0.66) {
    compchoice = "scissors"   
}

else {
    compchoice = "ROCK"
}


console.log(randnum);
console.log(compchoice);