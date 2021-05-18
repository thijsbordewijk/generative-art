
// variabelen aanmaken.
var button = document.createElement("a");
var volBlock = document.createElement("p");
var buttonSpot = document.getElementsByClassName("buttons")[0];
var x, y, w, h;
var mic;


function setup() {

  // grijs canvas ten grootte van het scherm, met bovenaan een knop die de microfoon simuleert.
  createCanvas(1900, 885);
  background(240);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(10);
}


function drawMore() {

  drawRandomShape("ellipse");
  
  // de plek en grootte van de cirkel wordt random uitgekozen
  function drawRandomShape(choice) {
    x = random(width);
    y = random(height);
    w = random(100-300);
    h = random(100-300);
    
      
    // de cirkel wordt geplaatst met een random kleurwaarde en een opacity van 75%
    if (choice == "ellipse") {
      noStroke();
      fill(random(255), random(255), random(255), 75);
      ellipse(x, y, w, h);
    }
  }
}

function draw() {
  vol = mic.getLevel();
  var volVar = vol * 100;
  console.log(volVar)

  if (volVar > 20) {
    drawMore()
  }
}
  
button.innerHTML = "reset canvas";
buttonSpot.appendChild(button);
button.addEventListener ("click",
  function resetCanvas() {
    createCanvas(1900, 885);
    background(240);
  }
);
