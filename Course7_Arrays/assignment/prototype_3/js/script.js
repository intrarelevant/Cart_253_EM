let marks = [];
let origin = {
  x: undefined,
  y: undefined,
};
let angle

function setup() {
  createCanvas(windowHeight * 0.8, windowHeight * 0.8);
  background(230, 219, 208);
  angleMode(DEGREES);
  for (let i = 0; i < 100; i++) {
    marks.push({
      x: randomGaussian(width / 2, 200),
      y: randomGaussian(height / 2, 200),
      char: random(['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']),
      color: '#8C6F62',
    });
  }

  findOrigin();
}

function draw() {
  background(230, 219, 208);
  noStroke();
  drawMarks();
}

function drawMarks() {
  push();

  for (const mark of marks) {
    fill(mark.color);
    textSize(findSize(mark));
    text(mark.char, mark.x, mark.y);
    rotate(10);
  }

  pop();
}

function findSize(mark) { // this will map the point size based on the distance to the origin
  const maxDist = dist(0, 0, origin.x, origin.y);
  const distance = dist(mark.x, mark.y, origin.x, origin.y);
  return constrain(map(distance, 0, maxDist, 1, 20), 10, 60);
}

function findOrigin() { // just to calculate the origin point, called in setup
  origin.x = width / 2;
  origin.y = height / 2;
}