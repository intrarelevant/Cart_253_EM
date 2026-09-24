/**
 * Anagram
 * Erica Mercier
 * I was inspired by this website for the band 'Powder': https://powd.jp/ for some of the letter motion
 * wonk = > know.
 */

"use strict";

/*** Create the canvas*/
function setup() {
  createCanvas(800, 800);
}

// So, I want to  
// 1) Have the colors of the letters be modified over time..
// 2) I want all letters to have a bit of movement
// 3) Have the letters be re-arranged...

// 1 I want to have my color variables set up. 
let myColors = {
    bg: { // background color
        r:224, g:216, b:222 },// "Lavender Blush"

    text1: {
        r:75, g:59, b:71}, // mauve

    text2: {
      r:166, g:172, b:114} // Sage
}

// 2: I want the individual letters to wiggle around at an even pace and be able to control the motion in one place

/// REFERENCE FOR ME
//Example: movingY = 400 + 20 * sin(frameCount * 0.05);
//
//400 is the center position which will be defined in 3 (the position of the letters)
//20 is the movement  amplitude. <- defined here
//0.05 controls the speed. <- defined here
//sin(...) creates smooth, continuous movement (in the function)

let letterWiggle = {
  y: {amp:40, speed:0.03},
  s: {amp:4, speed:0.03}
  }

// 3: Rearranging the letters
let wordLetters = { // I want to act on each letter individually, these are the starting positions.
    pos1: {x:200, y:400},
    pos2: {x:300, y:400},
    pos3: {x:500, y:400},
    pos4: {x:600, y:400},
    abs: { // I also need an absolute target position that doesn't change.
          pos1: {x:200, y:400},
          pos2: {x:350, y:400},
          pos3: {x:450, y:400}, // pos 2 and 3 are intentioally not the same
          pos4: {x:600, y:400},
          xtranslate: 1.02, // speed of horizontal motion, will be maintained even
          textsize: 12, // starting text size
    }
  }

/// Draw starts and runs every frame
function draw() {
background(myColors.bg.r, myColors.bg.g, myColors.bg.b, 120*random(0.95,1.05)); // apply the background color and but with low opacity to create feedback.

// I want the letters to be constrained to their ending positions in terms of the x axis.
// W pos 1 -> pos 4, and O pos 2 -> pos 3 so, advance but choose the min of both values.
wordLetters.pos1.x = min (wordLetters.pos1.x + (wordLetters.abs.xtranslate*random(0.9,1.1)), wordLetters.abs.pos4.x) 
wordLetters.pos2.x = min (wordLetters.pos2.x + (wordLetters.abs.xtranslate*random(0.9,1.1)), wordLetters.abs.pos3.x)
// N pos 3 -> pos 2 and K pos 4 -> pos 1, so, I want the max of both values
wordLetters.pos3.x = max (wordLetters.pos3.x - (wordLetters.abs.xtranslate*random(0.9,1.1)), wordLetters.abs.pos2.x) 
wordLetters.pos4.x = max (wordLetters.pos4.x - (wordLetters.abs.xtranslate*random(0.9,1.1)), wordLetters.abs.pos1.x)
  printLetter1()
  printLetter2()
  printLetter3()
  printLetter4()
}

//Example reference for me 
// movingY = 400 + 20(amplitude) * sin(frameCount * 0.05(speed));

function printLetter1() { // starting position 1, "w"
  push();
  fill (myColors.text1.r, myColors.text1.g, myColors.text1.b)
  textSize(wordLetters.abs.textsize + letterWiggle.s.amp * sin(frameCount * letterWiggle.s.speed)) // scale increases and decreases with sine wave
  text('w', wordLetters.pos1.x, wordLetters.pos1.y + letterWiggle.y.amp * sin(frameCount*letterWiggle.y.speed)) // the y coordinate moves up and down on the sine wave.
  pop();
}

function printLetter2() { // starting position 2, "o"
  push();
  fill (myColors.text2.r, myColors.text2.g, myColors.text2.b)
  textSize(wordLetters.abs.textsize + letterWiggle.s.amp * cos(frameCount * letterWiggle.s.speed)) // variation with cosine
  text('o',wordLetters.pos2.x, wordLetters.pos2.y + letterWiggle.y.amp * cos(frameCount*letterWiggle.y.speed)*-1) // adding some variation by switching function
  pop();
}

function printLetter3() { // starting position 3, "n"
  push();
  fill (myColors.text2.r, myColors.text2.g, myColors.text2.b)
  textSize(wordLetters.abs.textsize + letterWiggle.s.amp * sin(frameCount * letterWiggle.s.speed)*-1) // variation with negative
  text('n',wordLetters.pos3.x, wordLetters.pos3.y + letterWiggle.y.amp * sin(frameCount*letterWiggle.y.speed)*-1) // same thing
  pop();
}

function printLetter4() { // starting position 4, "k"
  push();
  fill (myColors.text1.r, myColors.text1.g, myColors.text1.b)
  textSize(wordLetters.abs.textsize + letterWiggle.s.amp * cos(frameCount * letterWiggle.s.speed)*-1) // variation cosine + negative
  text('k',wordLetters.pos4.x, wordLetters.pos4.y + letterWiggle.y.amp * cos(frameCount*letterWiggle.y.speed)) // and son on
  pop();
}