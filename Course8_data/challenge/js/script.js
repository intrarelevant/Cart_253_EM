  /**
   * Terrible New Car
   * Pippin Barr
   * 
   * A program to generate new car model names using dinosaurs.
   * 
   * Uses:
   * Darius Kazemi's corpora repository
   * https://github.com/dariusk/corpora/tree/master
   */

  "use strict";

  let carData = undefined;
  let wordData = undefined;
  let langData = undefined;
  let lang = undefined;
  let userLang


  // Starts with the instruction
  let carName = "Click to generate a car name.";
  let wordName = "";


  /**
   * Load the car and dinosaur data
   */
  async function preload() {
    carData = await (loadJSON("assets/cars.json"));
    wordData = await (loadJSON("assets/passages.json"));
    langData = await (loadJSON("assets/lang.json"))
  }

  /**
   * Create the canvas
  */
  async function setup() {
      createCanvas(600, 400);
      await preload();
      userLang = navigator.language || navigator.userLanguage; 
      getLanguage();
  }

  /**
   * Display the current main text (either instructions or a car)
  */
  function draw() {
      background(30);
      push();
      fill("pink");
      textAlign(CENTER, CENTER);
      textSize(32);
      text(carName+' '+wordName, width / 2, height / 2);
      textSize(12);
      text(lang, width/2, 100);
      pop();
  }

  /**
   * Generate a new car name
   */
  function mousePressed() {
    carName = random(carData.cars);
    wordName = random(wordData.passages);
  }

  
  function getLanguage() {
    if (userLang === "fr-FR" || userLang === "fr" || userLang === "fr-CA"  ){
      lang = "fr";
      carName = langData.instructions[lang];
    }
    else if (userLang === "en" || userLang === "en-US" || userLang === "en-CA" || userLang === "en-GB") {
      lang = "en";
      carName = langData.instructions[lang];
    }
  }

