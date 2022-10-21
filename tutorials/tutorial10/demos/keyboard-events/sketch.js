

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


let width = 50;
let fillColor = 'white';
let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    // message
    displayMessage();
}

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 2;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 2;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 2;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 2;
    } else if (ev.code == 'Space') {
        width += 2;
    } else if (ev.code == 'Escape') {
        width -= 2;
    }

    // redraw circle:
    clear();
    noFill();
    circle(x, y, width);
    
    
    // message
   displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Use the arrow keys to move, spacebar to grow, escape key to shrink.", canvasWidth/2, canvasHeight/2);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
