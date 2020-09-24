


//function that enables all dicess to generate random numbers (1-6)
function RollSixSidedDice() {
    document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice3").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice4").value = Math.floor(Math.random()*6) + 1;

}

//Im almost 100% sure there is a better way to have these multiple functions into one
//Since this is supposed to be easy and simple, I did multiple functions to match each dice.
function RollDice() {
    document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
    
}
function RollDice1() {
    document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;
    
}
function RollDice2() {
    document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
    
}
function RollDice3() {
    document.getElementById("dice3").value = Math.floor(Math.random()*6) + 1;
    
}
function RollDice4() {
    document.getElementById("dice4").value = Math.floor(Math.random()*6) + 1;
    
}