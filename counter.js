let value = 0;

function increase() {
  document.getElementById("value").innerHTML = value;

  value += 1;
}

function decrease() {
  document.getElementById("value").innerHTML = value;

  value -= 1;
}

function reset() {
  document.getElementById("value").innerHTML = value;

  value = 0;
}
