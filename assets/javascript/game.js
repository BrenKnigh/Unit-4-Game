$(document).ready(function(){


var rockOne = Math.floor(Math.random()*11+1);
var rockTwo = Math.floor(Math.random()*11+1);
var rockThree = Math.floor(Math.random()*11+1);
var rockFour = Math.floor(Math.random()*11+1);



var userAmount = 0;
var wins = 0;
var losses = 0;


var numberRandom = Math.floor(Math.random()*120+19);


$("#diamondValue").text(numberRandom);


$("#winAmount").text(wins);
$("#loseAmount").text(losses);


function reset(){
numberRandom = Math.floor(Math.random()*120+19);
console.log(numberRandom);
$("#diamondValue").text(numberRandom);
rockOne = Math.floor(Math.random()*11+1);
rockTwo = Math.floor(Math.random()*11+1);
rockThree = Math.floor(Math.random()*11+1);
rockFour = Math.floor(Math.random()*11+1);
userAmount = 0;
$("#totalScore").html(userAmount);
}


function winner(){
    alert("Winner Winner Chicken Dinner!");
    wins++;
    $("#winAmount").html(wins);
    reset();
}


function lost(){
    alert("Sorry, you lost this round!");
    losses++;
    $("#loseAmount").html(losses);
    reset();
}


$("#redDiamond").on("click", function(){
    userAmount = userAmount + rockOne;
    $("#grandTotal").html(userAmount);
        if (userAmount == numberRandom){
            winner();
        }
        else if (userAmount > numberRandom){
            lost();
        }
})

$("#blueDiamond").on("click", function(){
    userAmount = userAmount + rockTwo;
    $("#grandTotal").html(userAmount);
        if (userAmount == numberRandom){
            winner();
        }
        else if (userAmount > numberRandom){
            lost();
        }
})

$("#yellowDiamond").on("click", function(){
    userAmount = userAmount + rockThree;
    $("#grandTotal").html(userAmount);
        if (userAmount == numberRandom){
            winner();
        }
        else if (userAmount > numberRandom){
            lost();
        }
})
$("#greenDiamond").on("click", function(){
    userAmount = userAmount + rockFour;
    $("#grandTotal").html(userAmount);
        if (userAmount == numberRandom){
            winner();
        }
        else if (userAmount > numberRandom){
            lost();
        }
});
});
