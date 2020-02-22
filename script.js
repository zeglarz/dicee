var player1Roll = Math.floor(Math.random()*6)+1;
var player2Roll = Math.floor(Math.random()*6)+1;



var diceImage1 = "images/dice" + player1Roll + ".png";
var diceImage2 = "images/dice" + player2Roll + ".png";


document.querySelector(".img1").setAttribute("src", diceImage1);
document.querySelector(".img2").setAttribute("src", diceImage2);

if (player1Roll == player2Roll) {
  document.querySelector(".container h1").innerHTML = "It's a draw!";
} else if (player1Roll > player2Roll) {
  document.querySelector(".container h1").innerHTML = "Player 1 won!";
} else {
  document.querySelector(".container h1").innerHTML = "Player 2 won!";

}

console.log(player1Roll);
console.log(player2Roll);
