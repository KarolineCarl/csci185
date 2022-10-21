const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let color = 'white';
const bubbles = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function randInt(min, max) { 
	// min and max included 
	return Math.floor(randDecimal(min, max));
}
function randDecimal(min, max) { 
	// min and max included 
	return Math.random() * (max - min + 1) + min;
}

function getRandomColor() {
    const palette = [ '#1b998b', '#ed217c', '#2d3047', '#fffd82', '#ff9b71'];
    const idx = randInt(0, palette.length - 1);
    return palette[idx];
}

function mouseDragged() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const bubble = {
        x: mouseX,
        y: mouseY,
        d: Math.random()* 40 + 3,
        speed: -1 * randDecimal(1, 3) - .5,
        color: getRandomColor()
    }
    bubbles.push(bubble)
}

function draw() {
    clear();
    // 2. loop through the bubbles list and draw / animate each bubble:
    for (const bubble of bubbles) {
        fill(bubble.color);
        circle(bubble.x, bubble.y, bubble.d);
        bubble.y += bubble.speed;

        if (bubble.y < -100) {
            bubble.y = canvasHeight + 100;
        }
    }

    // message:
    fill('black');
    textAlign(CENTER);
    textSize(16);
    text("Drag to add bubbles.", canvasWidth/2, canvasHeight/2);

}