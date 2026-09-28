/**
 * text generator
 * Erica Mercier
// Goals
// create a short sentence using irregular verbs and adverbs
*/


"use strict";

let myColors = {
    bg: { // background color
        r:226, g:232, b:221 },// softlinen
    txt :{
        r:80, g:90, b:91} // charcoal
}


function setup() {
createCanvas(windowHeight, windowHeight);
background(myColors.bg.r, myColors.bg.g, myColors.bg.b); // apply the background at load

// decide on the words.. 
let pronounSubject = ['', 'you', 'they', '', ''];
let verb = ['beset', 'beat', 'bent', 'bled', 'bid', 'cut', 'cast', 'dig', 'dream', 'forgave', 'shed', 'shut', 'say', 'slit', 'sink', 'rid','misread', 'read','split', 'undercut',]; 
let pronounObject = ['it', 'you', 'her', '', 'me', 'him'];
let adverb = ['far', 'so', 'here', 'underground', 'away', 'once', 'slow', 'beneath', 'apart', 'hard']

let sentence = // pick the words in order
    random(pronounSubject) + " " +
    random(verb) + " " +
    random(pronounObject) + " " +
    random(adverb);

textAlign(CENTER)
textSize (20)
fill (myColors.txt.r,myColors.txt.g,myColors.txt.b)
text (sentence, width/2, height/2)
}



///* in case I want to calculate relative positions
//let canvasPos = {
  //  topleft:{x:0, y:0},
    //topright:{x:width, y:0},
    //middle: {x:width/2, y:height/2},
    //bottomleft: {x:0, y:height},
    //bottomright: {x:width, y:height}
//}


// in case I want trig function
//let trigValues = { // I will use these values to control trig functions
// s: {amp:20, speed:0.75}}
/// REFERENCE FOR ME motion = base position + amplitude * sin(frameCount * speed);