/**
 * text generator
 * Erica Mercier
// Goals
// create one sentence using irregular verbs and adverbs
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
textAlign(CENTER)
textSize (12)
fill (myColors.txt.r,myColors.txt.g,myColors.txt.b), 120
resetText();
}

function resetText() {
    background(myColors.bg.r, myColors.bg.g, myColors.bg.b); // overlay the background
// decide on the words.. 
let pronounSubject = ['', 'you', 'they', ''];
let verb = ['beset', 'beat', 'bend', 'bled', 'bid', 'cut', 'cast', 'dig', 'dream', 'fought', 'feel', 'forgave', 'shed', 'shut', 'say', 'sing', 'slit', 'sink', 'rid','misread', 'read','split','hear','hide','hit','hold','hurt','kept','knew','threw', 'love',]; 
let pronounObject = ['it', 'that', '', 'me'];
let adverb = ['','again','apart','far', 'so', 'here', 'away', 'once', 'slow', 'beneath', 'hard', 'yesterday', '', 'outside', 'within']

let sentenceOne = // pick the words in order
    random(pronounSubject) + " " +
    random(verb) + " " +
    random(pronounObject) + " " +
    random(adverb);

let sentenceTwo = // pick the words in order
    random(pronounSubject) + " " +
    random(verb) + " " +
    random(pronounObject) + " " +
    random(adverb);

textAlign(CENTER)
textSize (24)
fill (myColors.txt.r,myColors.txt.g,myColors.txt.b)
text (sentenceOne, width/2, height*0.4)
text (sentenceTwo, width/2, height*0.6)
textSize (8)
fill (myColors.txt.r,myColors.txt.g,myColors.txt.b, 120)
text ('click to reset', width/2, height*0.95)
}

function mousePressed() {
  resetText();
}