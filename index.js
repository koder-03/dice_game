window.onload = function () {
  var player1= prompt("enter player 1 name");
  var player2= prompt("enter player 2 name");
  var left = Math.floor(Math.random() * 6) + 1;
  var right = Math.floor(Math.random() * 6) + 1;
   document.querySelector(".img1").setAttribute("src", "images/" + left + ".png");
   document.querySelector(".img2").setAttribute("src", "images/" + right + ".png");
   if (left > right) {
    document.querySelector(".result").innerHTML =  player1+" won!! ";
  } else if (right > left) {
    document.querySelector(".result").innerHTML = player2+" won!! ";
  } else {
    document.querySelector(".result").innerHTML = "DRAW!!! ";
  }
};

