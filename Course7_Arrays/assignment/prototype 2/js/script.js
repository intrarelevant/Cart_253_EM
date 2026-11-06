  /**
   * Reproducing something like  'flow' by Toshitaka Aoyagi
   * Erica Mercier
   */


let marks = [];


function setup() {
  createCanvas(windowHeight*0.8, windowHeight*0.8);
  background(230, 219, 208)
  for (let i = 0; i < 5; i++) { 
    marks.push({
      x: random(width*0.1, width*0.9),
      y: random(height*0.1, height*0.9),
      size: random(4,6),
      speed: random(0.5, 1),   
      color: '#E6DBD0',
    });
  }
}

function draw() {
  background(230, 219, 208, 10); 
  noStroke();
  drawMarks();
}

function drawMarks() {
  push()
  for (const mark of marks) {
    fill(marks.color);
    circle(mark.x, mark.y, mark.size);
    mark.y -= mark.speed; // move upward
    mark.size += random(-1,1);
    //mark.x += randomGaussian(0.0000000000001)
    // Reappear at the bottom when reaching the top
    if (mark.y < height*0.2) {
      mark.y = height*0.8;
      mark.x = random(width*0.2, width*0.8);
      mark.size += 0.5;
      filter(BLUR, false,0.1)
    }
    pop()
  }
}