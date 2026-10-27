/**
 * Rain
// This is a refactor of some code I created in week 2
*/

// what do I need to refactor?
// the rain segments
// variables are not grouped by functions, but just various weights written out in the code

"use strict";

let rain1 = undefined;
let rain2 = undefined;
let wave1 = undefined

let myColors = {
    bg: { // background color
        r:1, g:22, b:30 },// "inkblack"

}

function setup() {
createCanvas(windowHeight, windowHeight);
frameRate(12);
background(myColors.bg.r, myColors.bg.g, myColors.bg.b); // apply the background color
}

let weight = {
    rdmRain: 20,
    horizon: 0.8, // horizon line
}

/// Draw starts and runs every frame
function draw() {
background(myColors.bg.r, myColors.bg.g, myColors.bg.b, 20); // apply the background color and but with low opacity to create feedback.
cursor(CROSS); // i want to suggest to the user that the mouse position matters!
rain1 = drawRain();
rain2 = drawRain();
wave1 = drawWave();
drawRainSegments();
drawWave();
}

function drawRain (){ // draw the mostly vertical blue lines that create the main rain effect.
push()
    let rain = {
        color: {
            r:18, g:69, b:89, a:100, 
        },
        startX: mouseX+random(-weight.rdmRain, weight.rdmRain),
        startY: windowHeight*weight.horizon+random(-weight.rdmRain, weight.rdmRain),
        endX: mouseX+random(-weight.rdmRain, weight.rdmRain),
        endY: 0,
    };
strokeWeight(1);
stroke(rain.color.r,rain.color.g,rain.color.b,rain.color.a); 
noFill()
line(rain.startX, rain.startY, rain.endX, rain.endY);
pop()
};

// create a circle at the mouse origin to form rain splatter
function drawWave (){
push()
let wave = {
        color: {
        r:89, g:131, b:146, a:random(100,200)},
        trigValues: {
            amp:20, 
            speed:0.75},
        x: mouseX+random(-50,50),
        y: windowHeight*weight.horizon,
        w: random(75, 200),
        h: random(20, 30),
};
strokeWeight(1);
stroke(wave.color.r, wave.color.g, wave.color.b, wave.color.a)
noFill()
ellipse(wave.x, wave.y, wave.w, wave.h);
pop()
};
// create a line pointing to the mouse origin to look like rain

function drawRainSegments()
{
push()
stroke(myColors.bg.r, myColors.bg.g, myColors.bg.b, random(70,120)) // to blend into the background
strokeWeight(random(30,50))
// probably should have used variables but I got lazy.. this basically draws a stroke near the mouse position to break up the lines drawn in drawRain
line(mouseX-random(-20, 29),windowHeight*random(0.05,0.2),mouseX+random(-20, 29),windowHeight*random(0.01,0.3))
line(mouseX-random(-20, 29),windowHeight*random(0.25,0.5),mouseX+random(-20, 29),windowHeight*random(0.25,0.5))
line(mouseX-random(-20, 29),windowHeight*random(0.4,0.6),mouseX+random(-20, 29),windowHeight*random(0.45,0.7))
line(mouseX-random(-20, 29),windowHeight*random(0.01,0.3),mouseX+random(-20, 29),windowHeight*random(0.01,0.3))
line(mouseX-random(-20, 29),windowHeight*random(0.25,0.5),mouseX+random(-20, 29),windowHeight*random(0.25,0.5))
line(mouseX-random(-20, 29),windowHeight*random(0.4,0.6),mouseX+random(-20, 29),windowHeight*random(0.45,0.7))
line(mouseX-random(-20, 29),windowHeight*random(0.7,0.8),mouseX+random(-20, 29),windowHeight*random(0.6,0.8)) // horizon
pop()
};




/// REFERENCE FOR ME
//Example: movingY = 400 + 20 * sin(frameCount * 0.05);
//400 is the base position
//20 is the movement  amplitude. <- defined here
//0.05 controls the speed. <- defined here
//sin(...) creates smooth, continuous movement (in the functions later

