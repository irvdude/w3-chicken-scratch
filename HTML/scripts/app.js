document.getElementById("demo").innerHTML = "hello javascript";
document.getElementById("demo").style.fontSize = "35px";

function switchHank(mood) {
  var hank;
  if (mood == 0) {
    hank = "pics/happyhank.png";
  } else {
    hank = "pics/unhappyhank.png";
  }

  document.getElementById("hank").src = hank;
}
