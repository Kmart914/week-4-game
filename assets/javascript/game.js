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

var reset = function(){

}


function randomNumber(min,max){
  return MAth.floor(Math.random()*(max-min+1)+min);
}
