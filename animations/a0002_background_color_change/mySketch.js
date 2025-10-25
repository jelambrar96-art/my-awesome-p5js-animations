let noiseOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  background(0, 0, 100);
}

function draw() {
  noiseOffset += 0.001; // smaller = slower/smoother
  const h = noise(noiseOffset) * 100;
  background(h, 80, 100);
}
