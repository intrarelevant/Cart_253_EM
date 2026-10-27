/**
 * Rain
 * Erica Mercier
// This is a refactor of some code I created in week 2
*/

"use strict";

let rain1 = undefined;
let rain2 = undefined;
let wave1 = undefined

// used accross the code and so can be in a single section of the code

let shared = {
    bg: { // background color
        r:1, g:22, b:30, a:40},// "inkblack"
    rdmRain: 20, // jitteriness for the rain position
    horizon: 0.8, // horizon line as % of screen height
};

function setup() {
createCanvas(windowHeight, windowHeight);
frameRate(12);
cursor(CROSS);
background(shared.bg.r, shared.bg.g, shared.bg.b); 
}

/// Draw starts and runs every frame
function draw() {
background(shared.bg.r, shared.bg.g, shared.bg.b, shared.bg.a); // apply the background color and but with low opacity to create feedback.
    rain1 = drawRain();
    rain2 = drawRain();
    wave1 = drawWave();
drawRainSegments();
}

function drawRain (){ // draw the mostly vertical blue lines that create the main rain effect.
push()
    let rain = {
        color: {
            r:18, g:69, b:89, a:100, 
        },
        startX: mouseX+random(-shared.rdmRain, shared.rdmRain),
        startY: windowHeight*shared.horizon+random(-shared.rdmRain, shared.rdmRain),
        endX: mouseX+random(-shared.rdmRain, shared.rdmRain),
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
        color: {r:89, g:131, b:146, a:random(100,200)},
        x: mouseX+random(-50,50),
        y: windowHeight*shared.horizon,
        w: random(75, 200),
        h: random(20, 30),
};
strokeWeight(1);
stroke(wave.color.r, wave.color.g, wave.color.b, wave.color.a)
noFill()
ellipse(wave.x, wave.y, wave.w, wave.h);
pop()
};


function drawRainSegments() {
    push();
    stroke(shared.bg.r, shared.bg.g, shared.bg.b, shared.bg.a * 3);
    strokeWeight(random(30, 50));

// start segmentMin, Max, then end segment Min, Max, as % of height
    drawRainSegment(0.05, 0.2, 0.01, 0.3);
    drawRainSegment(0.25, 0.5, 0.25, 0.5);
    drawRainSegment(0.4, 0.6, 0.45, 0.7);
    drawRainSegment(0.01, 0.3, 0.01, 0.3);
    drawRainSegment(0.25, 0.5, 0.25, 0.5);
    drawRainSegment(0.4, 0.6, 0.45, 0.7);
    drawRainSegment(0.7, 0.8, 0.6, 0.8);

    pop();
};

function drawRainSegment(startMin, startMax, endMin, endMax) {
    let startX = mouseX - random(-shared.rdmRain,shared.rdmRain);  
    let startY = windowHeight * random(startMin, startMax);
    let endX = mouseX + random(-shared.rdmRain,shared.rdmRain);
    let endY = windowHeight * random(endMin, endMax);
   
    line(startX, startY, endX, endY);
}