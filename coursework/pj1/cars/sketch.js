const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const fishes = [];

const c1 = {
    x: 100,
    y: 300,
    width: 50,
    speed: 6,
    color: 'hotpink'
}; 
fishes.push (c1)

const c2 = {
    x: 100,
    y: 500,
    width: 100,
    speed: 15,
    color: 'green'
};
fishes.push (c2)

const c3 = {
    x: 700,
    y: 300,
    width: 300,
    speed: .5,
    color: 'blue'
};
fishes.push (c3)
const c4 = {
    x: 500,
    y: 100,
    width: 60,
    speed: .05,
    color: 'lightblue'
};
fishes.push (c4)
const c5 = {
    x: 90,
    y: 200,
    width: 60,
    speed: 5,
    color: 'lightblue'
};
fishes.push (c5)
const c6 = {
    x: 1100,
    y: 200,
    width: 70,
    speed: 5,
    color: 'grey'
};
fishes.push (c6)
// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
      

}



// animation loop:
function draw() {
   clear();

    // move the car:
    // c1.x += c1.speed;
    // c2.x += c2.speed;
    // c3.x += c3.speed;
    // c4.x += c4.speed;
    // c5.x += c5.speed;
    // c6.x += c6.speed;
    
    // // redraw the car:
    // drawCreature(c1.x, c1.y, c1.width, c1.color);
    // drawCreature(c2.x, c2.y, c2.width, c2.color);
    // drawCreature(c3.x, c3.y, c3.width, c3.color);
    // drawCreature(c4.x, c4.y, c4.width, c4.color);
    // drawCreature(c5.x, c5.y, c5.width, c5.color);
    // drawCreature(c6.x, c6.y, c6.width, c6.color);

    // draw the grid (optional -- feel free to remove this line):
    // drawGrid(canvasWidth, canvasHeight);
//window.requestAnimationFrame(draw);
for (const fish of fishes) {
    drawCreature(fish.x, fish.y, fish.width, fish.color);
    fish.x += fish.speed;
    if (fish.x > canvasWidth) {
        fish.x = 0;
    }

}
}

// replace this function with YOUR creature!
function drawCreature(centerX, centerY, size, primaryColor='yellow', secondaryColor= 'gold') {
    strokeWeight(0);
    fill(secondaryColor);
    ellipse(centerX + size * 2/3, centerY, size, size /4); 
    fill(primaryColor);
    circle(centerX, centerY, size); // 100, 400, 50
    fill('black');
    let sf = size / 6.5;
    circle(centerX - sf, centerY - sf, sf);     // left eye
    circle(centerX + sf, centerY - sf, sf);    // right eye
    fill ('pink')
    circle(centerX, centerY + size /10, size /5)

}


function mouseClicked() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const fish = {
        x: mouseX,
        y: mouseY,
        width: Math.random()* 40 + 30,
        speed: Math.random()* 1,
       color: 'yellow'
    }
    fishes.push(fish)
}

function mouseDragged() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const fish = {
        x: mouseX,
        y: mouseY,
        width: Math.random()* 40 + 30,
        speed: Math.random()* 5,
        color: 'yellow'
       
    }
    fishes.push(fish)
}

