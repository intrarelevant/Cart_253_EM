/**
 * prototype for a typography system, reworked and refactored.
 * Erica Mercier
 * 
 * i did this in quite a hurried way last week.
 * so, i wanted to make it more flexible so that I could add / expand on it in the future, and add some new features.
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

//** color pallette *//
const myColors = {
  backgroundFull : "#F0EFF4",
  }

/** Setup create canvas & do some math on the base positions **/ 
function setup() {
  angleMode(DEGREES);
  createCanvas(displayHeight*0.8, displayHeight*0.8); // square based on display height.
  background(myColors.backgroundFull); // background
  
  // create the sliders
  sliderBlurr();
  sliderShearr();
  colorPickerr();

}

function draw(){
  renderText();
}

function renderText() {
  background(myColors.backgroundFull); // reset the background when a slid
    shearText();
    fill(colorPicker.value());
    textSize(height / char.length);  // set the size of the text to be appropriate for the viewer size.
    textAlign(CENTER, CENTER);
    text(char, width / 2, height / 2);
    textFont('Times New Roman');

    blurText();
}

// handles the visual effect
function shearText(){
  shearX(sliderShear.value()); 
  shearY(sliderShear.value());
}

function blurText(){
  filter(BLUR, sliderBlur.value());
}

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
  colorPicker = createColorPicker("#1E2019");
  colorPicker.position(10, height / 9 * 3);
  colorPicker.size(100);

}

// handle typing. 
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

