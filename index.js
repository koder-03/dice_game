window.onload = function () {
  var left = Math.floor(Math.random() * 6) + 1;
  var right = Math.floor(Math.random() * 6) + 1;
   document.querySelector(".img1").setAttribute("src", "images/" + left + ".png");
   document.querySelector(".img2").setAttribute("src", "images/" + right + ".png");

};

