/* 👇 Start writing your p5.js code here */
let note;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  ellipse(width / 2, height / 2, 50, 50);
}

function randomShape() {
  x = random(width);
  y = random(height);
  w = random(5, 100);
  h = random(5, 100);

  if (choice == "ellipse") {
    noStroke();
    fill(random(25), random(5), random(255), 50);
    ellipse(x, y, w, h);
  }
  else {
    noStroke();
    fill(random(255), random(255), random(255), 90);
    rect(x, y, w, h);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleLiveInput() {
};
