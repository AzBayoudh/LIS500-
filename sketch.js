let video;
let label = "waiting...";
let classifier;


// STEP 1: Load the model!
function preload() {
  console.log("preload running…");
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hR02g_emx/');
 
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



