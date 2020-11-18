let zoffset = 0;
let shaker = 0;
let tune;
let mappedAmp;
let font1;

function preload() {
  tune = loadSound("./Sifter.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
}

function mousePressed() {
  tune.play();
}

function draw() {
  background(255, 5);
  translate(width / 2, height / 2);
  push();
  translate(width / 2, height / 2);
  fill(0);
  rect(0, 20, 100, 100);
  pop();
  stroke(0);
  strokeWeight(1);
  noFill();
  mappedAmp = amp.getLevel() * 0.05;
  beginShape();
  for (let ang = 0; ang < TWO_PI; ang += 0.01) {
    let xoffset = cos(ang) + 1;
    let yoffset = sin(ang) + 1;
    let r = noise(xoffset, yoffset, zoffset) * 450;
    let x = cos(ang) * r;
    let y = sin(ang) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
  zoffset += mappedAmp;
  push();
  fill(0);
  pop();

  push();
  fill(0);
  rect(width - 20, width + 20, 100, 100);
  pop();
}
