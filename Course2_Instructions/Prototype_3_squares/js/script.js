/**
 * Prototype 2 : Class 2 September 16th 2026
 * Erica Mercier
 * 
 *
 */

"use strict";

/* Setting up for a square image */
function setup() {
 createCanvas(windowHeight, windowHeight,WEBGL);
   console.log(width); // store the width
  console.log(height); // store the height
  angleMode(DEGREES); // so i can rotate with degrees? i didn't end up using this.

}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight); // keep viewer dynamic
}

function draw() {
  /*Background*/
  background(54, 54, 53); //Graphite
  noStroke()  // no outlines


  /* call functions*/
  drawFirstSquares ()
  drawSecondSquares ()
  }

  function drawFirstSquares (){
  push()
  noStroke()  // no outlines
  fill (89, 90, 74) //dkgreen, sq1
  scale(-1, -1); // no change but to keep track
  rect (0,0, width/2, height/2)

  fill (176, 254, 118) //yellowgreen, sq 2
  scale(-1, 1);
  rect (0,0, width/3, height/3)

  fill (143, 187, 153) //mutedteal, sq 3
  scale(1, -1);
  rect (0,0, width/5, height/5)
  pop()
  push() // need to reset the scaling sequence because I'm bad at math
  fill (129, 233, 121) //lightgreen, sq4
  scale(-1, 1); // no change but to keep track
  rect (0,0, width/8, height/8)
  pop()
  }

    function drawSecondSquares (){
  push()
  fill (54, 54, 53) //sq1
  scale(-1, -1); // no change but to keep track
  rect (0,0, width/13, height/13)

  fill (89, 90, 74)
  scale(-1, 1);
  rect (0,0, width/21, height/21)

  fill (176, 254, 118) 
  scale(1, -1);
  rect (0,0, width/33, height/33)
  pop()
  push() // need to reset the scaling sequence
  fill (143, 187, 153) //lightgreen, sq4
  scale(-1, 1); // no change but to keep track
  rect (0,0, width/55, height/55)
  pop()
  }


/* REFERENCES FOR ME

/*reference code structure
rect(x, y, w, [h], [tl], [tr], [br], [bl])*/