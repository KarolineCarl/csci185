const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let backgroundColor = 'white';
const palette = [ '#1b998b', '#ed217c', '#2d3047', '#fffd82', '#ff9b71'];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function randInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function mouseClicked() {
    const idx = randInt(0, palette.length - 2);
    backgroundColor = palette[idx];
    console.log(backgroundColor);
}


function draw() {
    clear();
    background(backgroundColor);
    textAlign(CENTER);
    textSize(16);
    text("Click to change the background color.", canvasWidth/2, canvasHeight/2);
}