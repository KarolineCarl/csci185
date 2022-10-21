const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;
let doJump = false;
let counter = 0;
let initialY = y;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    circle(x, y, 50);
    displayMessage();
}


function draw() {
    clear();
    
    if (doJump) {
        // animate for one Math.sin cycle, then 
        // turn doJump variable to false
        const jumpHeight = -15;
        const jumpSpeed = 5;
        y += jumpHeight * Math.sin(counter / jumpSpeed); 
        counter++;
        if (y > initialY) {
            doJump = false;
        }
    }

    circle(x, y, 50);

    // message:
    displayMessage();

}


function jump(ev) {
    console.log(ev.code);
    if (ev.code == 'Space') {
        doJump = true;
    }
    
    // message
   displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Press the spacebar to jump.", canvasWidth/2, canvasHeight/2);
}

// Add event listener on keydown
document.addEventListener('keydown', jump);
