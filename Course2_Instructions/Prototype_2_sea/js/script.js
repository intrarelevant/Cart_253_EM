/**
 * Prototype 2 : Class 2 September 16th 2026
 * Erica Mercier
 * 
 *
 */

"use strict";

/* Setting up for a vertical image */
function setup() {
 createCanvas(540,720,WEBGL);
 imageMode(CENTER)
  randomSeed(12); // so the image is static
}

function draw() {
  /*basic composition elements - background and horizon line*/
  background(34, 34, 27); //carbonblack
  push()
  /* call functions*/
  drawWaves1()
  drawGrain ()
  }

function drawWaves1 () { //draws a series of ellipsoid that extend past the  in the lower half of the image to look like ~waves~ // 
  push()  
  fill(210, 212, 200,60)
  noStroke()
    ellipse(100, 0, 1200, 3);
  ellipse(-100, 10, 1200, 7);
    ellipse(-600, 15, 2400, 12);
  ellipse(100, 30, 1500, 17);
  ellipse(-179, 50, 1200, 19);
    ellipse(379, 60, 2200, 20);
  ellipse(200, 90, 1700, 22);
    ellipse(200, 100, 1700, 26);
  ellipse(-279, 120, 1200, 28);
  ellipse(150, 150, 1800, 33);
  ellipse(-192, 180, 1200, 37);
  ellipse(192, 200, 1200, 43);
  ellipse(-179, 240, 1900, 44);
  ellipse(-249, 252, 1900, 49);
  ellipse(140, 300, 1200, 54);
  ellipse(90, 330, 1900, 62);
    ellipse(-179, 360, 1200, 69);
  pop()

}

function drawGrain() {
  strokeWeight(0.5);

  // Light grain
  stroke(224, 226, 219, 40);

  for (let i = 0; i < 12000; i++) {
    let x = random(-width / 2, width / 2);
    let y = random(-height / 2, height / 2);
    point(x, y);
  }

  // Occasional darker grain
  stroke(46, 46, 36, 60);

  for (let i = 0; i < 9000; i++) {
    let x = random(-width / 2, width / 2);
    let y = random(-height / 2, height / 2);
    point(x, y);
  }
}

/* REFERENCES FOR ME
colors 
bgcolor = color(34, 34, 27); //carbonblack
bgcolor2 = color(46, 46, 36); //dark brown
light1 = color(224, 226, 219); //linen grey
light2 = color(210, 212, 200); //dust grey */

/*reference code structure
ellipse(x, y, w, [h])
rect(x, y, w, [h], [tl], [tr], [br], [bl])*/