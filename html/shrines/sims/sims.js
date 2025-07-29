function showFish() {
  var x = document.getElementById("showFish");
  if (x.style.display === "none") {
    x.style.display = "contents";
  } else {
    x.style.display = "none";
  }
}

function showRoach() {
  var x = document.getElementById("showRoach");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}