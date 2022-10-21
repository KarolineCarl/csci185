const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
   
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // message
    fill('black');
    textAlign(CENTER);
    textSize(16);
    text("Click or drag your mouse.", canvasWidth/2, canvasHeight/2);
    noFill();
}

function mouseClicked() {
    circle(mouseX, mouseY, Math.random()* 50 + 50);
}

function mouseDragged() {
    circle(mouseX, mouseY, Math.random()* 50 + 50);
}

