/** 
let video;
let label = "waiting...";
let classifier;


// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hR02g_emx/model.json');
}

function setup() {
  const canvas = createCanvas(640, 300);
  canvas.parent("tm-canvas-container");

  classifyAudio();
}

// STEP 2: classify the video!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);
  // STEP 4: Draw the label text
  //textSize(32);
  textAlign(CENTER, CENTER);
  //fill(255);
  //text(label, width / 2, height - 16);

  if (label === "QUIET") {
  emoji = "🤫";
} else if (label === "YES") {
  emoji = "✅";
} else if (label === "NO") {
  emoji = "❌";
}

  textSize(150);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }

  console.log(results);
  label = results[0].label;
}

*/

let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/hR02g_emx/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hR02g_emx/model.json');
}

function setup() {
  createCanvas(640, 520);

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);

  // Background noise is headphones
  let emoji = "🎧";
  // Pick an emoji based on label

  if (label === "QUIET") {
  emoji = "🤫";
} else if (label === "YES") {
  emoji = "✅";
} else if (label === "NO") {
  emoji = "❌";
}
  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}

