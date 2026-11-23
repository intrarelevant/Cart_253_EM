/**
 * prototype for a typography system, reworked and refactored.
 * Erica Mercier
 */

"use strict";

//** calling variables so they exist *//
// these will store the keyboard press and create sliders for user control 
let keyPress;
let char = 'A'; // starting character, this is the text written by the user.
let charNum = 1; // starting number of characters is 1, because of A.

let sliderBlur;
let sliderShear;
let colorPicker;
let colorPalette;

function preload() {
    colorPalette = loadJSON("assets/colors.json");
    () => console.log("Loaded colors.json:", colorPalette),
    (error) => console.error("Could not load colors.json:", error)
  }

/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  angleMode(DEGREES);
  createCanvas(displayHeight*0.95, displayHeight*0.95); // square based on display height.
  background(255); // background
  
  // create the sliders
  sliderBlurr();
  sliderShearr();
  colorPickerr();
}

function draw(){
  renderText();
}

function renderText() {
    const palette = colorPalette.colors[colorPicker.value()];
    background(palette.background); // reset the background when a slider runs
    shearText();
    fill(palette.text);
    textSize(height / char.length);  // set the size of the text to be appropriate for the viewer size.
    textAlign(CENTER, CENTER);
    text(char, width / 2, height / 2);
    textFont('Times New Roman');
    blurText();
}

/** VISUAL EFFECTS */

// handles the visual effects

function shearText(){
  shearX(sliderShear.value()); 
  shearY(sliderShear.value());
}

function blurText(){
  filter(BLUR, sliderBlur.value());
}


/** SLIDERS */
// create the sliders + sliders & user controls // 
function sliderBlurr(){
  sliderBlur = createSlider(0, 25, 0);
  sliderBlur.position(10, height / 9);
  sliderBlur.size(100);
}

function sliderShearr() {
  sliderShear = createSlider(-10, 10, 0);
  sliderShear.position(10, height / 9 * 2);
  sliderShear.size(100);
}


function colorPickerr() {
  colorPicker = createSelect();

  for (const name of Object.keys(colorPalette.colors)) {
    colorPicker.option(name);
  }
  colorPicker.selected("Default");
  colorPicker.changed(renderText);
}

//* User Controls */
// handle typing. 
function keyTyped() {
if (/^[a-z0-9 ]$/i.test(key)) {
    char += key.toUpperCase();
    charNum = char.length;
    renderText();
  }
}

//handle backspace
function keyPressed(event) {
  if (event.key === "Backspace") {
    event.preventDefault();

    char = char.slice(0, -1);
    charNum = char.length;
    renderText();
    return false;
  }
}

