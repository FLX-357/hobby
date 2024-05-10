var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];
var level = 1;
var started = false;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });


$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1)
});

function nextSequence() {
    userClickedPattern = [];

    $("#level-title").text("level "+ level);
   
  var randomint = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomint];

  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  level++;
  
}

function animatePress(userChosenColour) {
  $("#" + userChosenColour).addClass("pressed");

  setTimeout(function(){ $("#" + userChosenColour).removeClass("pressed")},100)
 
};
function checkAnswer(currentLevel) {

    
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      
      if (userClickedPattern.length === gamePattern.length){

        
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");

    }

}