window.onload = function () {
  var player1 = prompt("Enter Player 1 name:");
  var player2 = prompt("Enter Player 2 name:");

  document.querySelector(".left").textContent = player1;
  document.querySelector(".right").textContent = player2;

  document.querySelector(".play").onclick = function () {
    var left = Math.floor(Math.random() * 6) + 1;
    var right = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "images/" + left + ".png");
    document.querySelector(".img2").setAttribute("src", "images/" + right + ".png");

    if (left > right) {
      document.querySelector(".result").textContent = player1 + " won!! 🎉";
    } else if (right > left) {
      document.querySelector(".result").textContent = player2 + " won!! 🎉";
    } else {
      document.querySelector(".result").textContent = "DRAW!!! 🤝";
    }
  };
};

document.querySelector(".songbutton").addEventListener("click", function () {
  var audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
    this.textContent = "Pause the song ⏸️";
  } else {
    audio.pause();
    this.textContent = "Play our song 🎵";
  }
});
