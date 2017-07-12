//Variable declarations
var wins = 0
var losses = 0
var goalNumber = 0
var totalScore = 0
var redCrystal = 0
var blueCrystal= 0
var greenCrystal= 0
var purpleCrystal= 0

// Random number to be generated upon game start. This will be the number the user tries to get to.
var random = randomNumber(19,120)

var redRandom = randomNumber(1,12)
var blueRandom = randomNumber(1,12)
var greenRandom = randomNumber(1,12)
var purpleRandom = randomNumber(1,12)

var reset = function(){

}


function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


// When the page loads everything in fis function will be ready to be executed.
$(document).ready(function() {

  $("#play").click(function(){
    document.getElementById("goalNumber").innerHTML = random;
});

  $("#redCrystal").click(function(){
    totalScore += redRandom;
    document.getElementById("currentScore").innerHTML = totalScore;

});

$("#blueCrystal").click(function(){
  totalScore += blueRandom;
  document.getElementById("currentScore").innerHTML = totalScore;

});

$("#purpleCrystal").click(function(){
  totalScore += purpleRandom;
  document.getElementById("currentScore").innerHTML = totalScore;

});

$("#greenCrystal").click(function(){
  totalScore += greenRandom;
  document.getElementById("currentScore").innerHTML = totalScore;

});

if (totalScore === random) {
    document.getElementById("wins").innerHTML = wins++;
    reset();
} else if (totalScore > random){
    document.getElementById("losses").innerHTML = losses++;
    reset();
  }
















});
