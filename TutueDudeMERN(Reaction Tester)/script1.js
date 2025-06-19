let startTime;
const shape = document.getElementById("shape");
const resultDisplay = document.getElementById("result");

// For generating random hex color
function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

// This is for Display shape after random delay
function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() * 2000 + 500);
}

// This is for Sets new shape styles and start time
function makeShapeAppear() {
  const top = Math.random() * 300;
  const left = Math.random() * 300;
  const size = Math.random() * 100 + 100;

  shape.style.top = top + "px";
  shape.style.left = left + "px";
  shape.style.width = size + "px";
  shape.style.height = size + "px";
  shape.style.backgroundColor = randomColor();
  shape.style.display = "block";

  startTime = Date.now();
}

// This is for Handle click on shape
shape.onclick = () => {
  const reactionTime = (Date.now() - startTime) / 1000;
  shape.style.display = "none";
  resultDisplay.textContent = `Your reaction time: ${reactionTime.toFixed(3)} seconds`;
  shape.style.backgroundColor = randomColor();
  appearAfterDelay();
};

// This is for Start game
appearAfterDelay();
