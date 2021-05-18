// /* 👇 Start writing your p5.js code here */
// let note;


// variabelen aanmaken.
var button = document.createElement("a");
var volBlock = document.createElement("p");
var buttonSpot = document.getElementsByClassName("buttons")[0];
var x, y, w, h;
var buttonText = "add shape";
let mic;

function setup() {

// grijs canvas ten grootte van het scherm, met bovenaan een knop die de microfoon simuleert.
createCanvas(1900, 885);
background(240);

mic = new p5.AudioIn();
mic.start();

function draw() {
vol = mic.getLevel();
console.log(vol)
}

button.innerHTML = buttonText;
buttonSpot.appendChild(button);
button.addEventListener ("click",

// de functie van het aanmaken van een random vorm zit binnen de evenListener van de knop zodat deze alleen activeert als de knop wordt ingedrukt.
function drawMore() {
  drawRandomShape("ellipse");

  // de plek en grootte van de cirkel wordt random uitgekozen
  function drawRandomShape(choice) {
    x = random(width);
    y = random(height);
    w = random(5, 200);
    h = random(5, 200);
    
    // de cirkel wordt geplaatst met een random kleurwaarde en een opacity van 75%
    if (choice == "ellipse") {
      noStroke();
      fill(random(255), random(255), random(255), 75);
      ellipse(x, y, w, h);
    }
  }
})
}
