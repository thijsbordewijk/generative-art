// /* 👇 Start writing your p5.js code here */
// let note;

var button = document.createElement("button");
var body = document.getElementsByTagName("body")[0];
var x, y, w, h;
var maxShapeCount = startShapeCount + addShapeCount;
var startShapeCount = 1;


function setup() {
  
button.innerHTML = "draw shape";
body.appendChild(button);
button.addEventListener ("click", function makeShapes() {

  createCanvas(800,800);

    var i = 0
  
   stroke(255, 50);
    for (i = 0; i < maxShapeCount; i++) {
    drawRandomShape("rectangle");
    }
  
    stroke (0, 50);
    for (i = 0; i < maxShapeCount; i++) {
  	drawRandomShape("ellipse");
    }

  function drawRandomShape(choice) {
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

  console.log("drawing complete!")

})  
} 



