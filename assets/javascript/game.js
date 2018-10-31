//row w/ heading & game name
//row w/ 1 column listing directions/game objectives
//row 2 colums
    //one column holds random score generated
    //another column holds win/loss record
//row that contains clickable pictures of crystals  
    //each crystal has a random number assigned at page load
    //on click, amount of crystal is added to our score
//row that lists our current score


var score = 0;
var wins = 0;
var losses = 0;

//computer random num
var compRandomNum = Math.floor(Math.random() * 102) + 19;
console.log(compRandomNum);
//crystal random num
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;
console.log("crystal1 " + crystal1);
console.log("crystal2 " + crystal2);
console.log("crystal3 " + crystal3);
console.log("crystal4 " + crystal4);

//hide crystal amount from user

//click functions for crystals

//on click add the crystal amount to the users starting score of 0

//loop if user gets exact number of score = win++, else if user goes OVER the generated number user loses++