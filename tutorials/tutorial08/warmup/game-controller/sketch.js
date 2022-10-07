let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

     fill('purple');
   // noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    // TODO:
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
if(ev.code== "ArrowUp"){
    y = y - 2; 
}
else if(ev.code== "ArrowDown"){
    y = y + 2;
}
else if (ev.code== "ArrowRight"){
    x = x + 2;
}
else if (ev.code== "ArrowLeft"){
    x = x - 2;
}
else if (ev.code== "KeyR"){
    fillColor ='red';
}
else if (ev.code== "KeyP"){
    fillColor ='Purple';
}
fill(fillColor)
    // redraw circle:
    clear();
    //noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
