var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var dice = "./images/dice" + randomNumber1 + ".png";
console.log(dice);
document.getElementById("img1").setAttribute("src", dice);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var dice = "./images/dice" + randomNumber2 + ".png";
console.log(dice);
document.getElementById("img2").setAttribute("src", dice);

if (randomNumber1 > randomNumber2) {
  document.getElementById("v").innerHTML = "Player One Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.getElementById("v").innerHTML = "Player Two Wins!";
} else {
  document.getElementById("v").innerHTML = "Tie!";
}
