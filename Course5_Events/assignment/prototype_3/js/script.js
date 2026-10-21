/**
 * prototype for a typography system
 * Erica Mercier
 * 
 * write, and use the sliders to customize the text appearance
 */

"use strict";

//** calling variables so they exist *//
// these will store the keyboard press and create sliders for user control 
let keyPress;
let char = 'A';
let charNum = 1;
let sliderBlur;
let sliderShear;

//** color pallette *//

const myColors = {
  backgroundFull : "#F0EFF4",
  mainLight: "#9E829C",
  mainDark:"#1E2019",
  }

/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  angleMode(DEGREES);
  createCanvas(displayHeight*0.8, displayHeight*0.8); // square based on display height.
  background(myColors.backgroundFull); // background

// create a slider to control blur
  sliderBlur = createSlider(0, 25, 0);
  sliderBlur.position(10, height / 9);
  sliderBlur.size(100);
  sliderBlur.changed(renderText);
// create a slider to control shear
  sliderShear = createSlider(-10, 10, 0);
  sliderShear.position(10, height / 9 * 2);
  sliderShear.size(100);
  sliderShear.changed(renderText);
  frameRate(20);
  renderText();
}

function renderText() {
  background(myColors.backgroundFull);
  if (char.length === 0) ;//avoid divide by 0 
  textSize(height / char.length);
  textFont('Times New Roman');
  fill(myColors.mainDark)
  textAlign(CENTER, CENTER);
  text(char, width / 2, height / 2);
  const b = sliderBlur.value();
  if (b > 0) {filter(BLUR, b);}
}

function keyTyped() {
if (/^[a-z0-9 ]$/i.test(key)) {
    char += key.toUpperCase();
    charNum = char.length;
    renderText();
  }
}

function keyPressed(event) {
  if (event.key === "Backspace") {
    event.preventDefault();

    char = char.slice(0, -1);
    charNum = char.length;
    renderText();
    return false;
  }
}

function draw() {
   const s = sliderShear.value();
  if (s != 0) {shearX(s); shearY(s);}
}