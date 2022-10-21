const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let color = 'white';
const bubbles = [];
let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;
let d = 50;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    circle(x, y, 50);

    displayMessage();
}

function shoot() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const bubble = {
        x: x,
        y: y - 25,
        d: 8,
        speed: 10
    }
    bubbles.push(bubble)
}

function draw() {
    clear();
    // 2. loop through the bubbles list and draw / animate each bubble:
    for (const bubble of bubbles) {
        circle(bubble.x, bubble.y, bubble.d);
        bubble.y -= bubble.speed;
    }

    circle(x, y, 50);

    // message:
    displayMessage();

}


function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 5;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 5;
    } else if (ev.code == 'Space') {
        shoot();
    }
    
    // message
   displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Use the arrow keys to move the avatar, spacebar to shoot.", canvasWidth/2, canvasHeight/2);
}

// Add event listener on keydown
document.addEventListener('keydown', moveController);
