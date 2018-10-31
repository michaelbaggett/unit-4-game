//row w/ heading & game name
//row w/ 1 column listing directions/game objectives
//row 2 colums
    //one column holds random score generated
    //another column holds win/loss record
//row that contains clickable pictures of crystals  
    //each crystal has a random number assigned at page load
    //on click, amount of crystal is added to our score
//row that lists our current score


var userScore = 0;
var wins = 0;
var losses = 0;

//computer random num
var compRandomNum = Math.floor(Math.random() * 102) + 19;
console.log(compRandomNum);
$("#comp-score").text(compRandomNum)
//crystal random num
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;
console.log("crystal1 " + crystal1);
console.log("crystal2 " + crystal2);
console.log("crystal3 " + crystal3);
console.log("crystal4 " + crystal4);

$("#win").text("Wins: " + wins);
$("#lose").text("Losses: " + losses);

//define reset, win, lose function
function reset() {
compRandomNum = Math.floor(Math.random() * 102) + 19;
$("#comp-score").text(compRandomNum);
//crystal random num//
crystal1 = Math.floor(Math.random() * 12) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;
userScore = 0;
console.log("crystal1 " + crystal1);
console.log("crystal2 " + crystal2);
console.log("crystal3 " + crystal3);
console.log("crystal4 " + crystal4);
}

function win(){
    wins++;
    alert("WINNER WINNER CHICKEN DINNER");
    $("#win").text("Wins: " + wins);
    reset();
}

function lose(){
    losses++;
    alert("LOSER! BETTER LUCK NEXT TIME!!");
    $("#lose").text("Losses: " + losses);
    reset();

}

//click functions for crystals
$("#crystal-1").click(function(){
    userScore = userScore + crystal1;
    console.log("User Total is now: "+ userScore);
    $("#trackScore").text("Score: " + userScore);
});
$("#crystal-2").click(function(){
    userScore = userScore + crystal2;
    console.log("User Total is now: "+ userScore);
    $("#trackScore").text("Score: " + userScore);
});
$("#crystal-3").click(function(){
    userScore = userScore + crystal3;
    console.log("User Total is now: "+ userScore);
    $("#trackScore").text("Score: " + userScore);
});
$("#crystal-4").click(function(){
    userScore = userScore + crystal4;
    console.log("User Total is now: "+ userScore);
    $("#trackScore").text("Score: " + userScore);
});

//on click add the crystal amount to the users starting score of 0

//loop if user gets exact number of score = win++, else if user goes OVER the generated number user loses++