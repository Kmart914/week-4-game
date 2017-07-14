// When the page loads everything in fis function will be ready to be executed.
$(document).ready(function() {

//Variable declarations
var wins = 0
var losses = 0
var totalScore = 0
var redCrystal = 0
var blueCrystal= 0
var greenCrystal= 0
var purpleCrystal= 0


  //Reset after conditions are met
  function startGame(){
    goalNumber = randomNumber(19,120);
    redRandom = randomNumber(1,12)
    blueRandom = randomNumber(1,12)
    greenRandom = randomNumber(1,12)
    purpleRandom = randomNumber(1,12)
    random = randomNumber(19,120)

    console.log("Goal" + goalNumber);
    console.log("startGAme total score: ", totalScore);
    $("#goalNumber").html(goalNumber);
}
//Generate random number for start and crystals
function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


  //Loads goal number when page loads
  $("#goalNumber").html(goalNumber);

  //Red crystal button -- Attaches random number at start and reset.
  $("#redCrystal").click(function(){
    totalScore += redRandom;
    $("#currentScore").html(totalScore);
    gameCheck();

});

$("#blueCrystal").click(function(){
  totalScore += blueRandom;
  $("#currentScore").html(totalScore);
  gameCheck();

});

$("#purpleCrystal").click(function(){
  totalScore += purpleRandom;
  $("#currentScore").html(totalScore);
  gameCheck();

});

$("#greenCrystal").click(function(){
  totalScore += greenRandom;
  $("#currentScore").html(totalScore);
  gameCheck();
});

function gameCheck(){

  if (totalScore === goalNumber) {
      wins++;
      totalScore= 0;
      $("#winCount").html(wins);
      $("#currentScore").html(totalScore);
      startGame();
      alert("You win!")

  } else if (totalScore > goalNumber){
      losses++;
      totalScore= 0;
      $("#lossCount").html(losses);
      $("#currentScore").html(totalScore);
      startGame();
      alert("You Lost! Try again!");


  console.log(totalScore);
}

}
//Game start
startGame();
});
