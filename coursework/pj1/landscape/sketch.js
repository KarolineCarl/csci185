//const canvasWidth = window.innerWidth;
//const canvasHeight = window.innerHeight; 

//async function setup() {
    //createCanvas(canvasWidth, canvasHeight);
    
    // picks a random number between 0 and 100:
    //let rando = Math.random() * 100;
    //console.log(rando);
    
    // picks a random number between 10 and 500:
    //rando = Math.random() * 490 + 10;
    //console.log(rando);
    function random(min, max) {
        return min + Math.random() * (max + 1 - min);
    }
    
    const body = document.querySelector('body');
    const canvasSize = body.offsetWidth * body.offsetHeight;
    const starsFraction = canvasSize / 2000;
    // draws 4 stars: 
for(let i = 0; i< starsFraction; i++){
    let xPos = random(0,100);
    let yPos = random(0, 100);
    let alpha = random (0.5, 1);
    let size = random(1,2);
    let colour = '#ffffff';


const star = document.createElement('div');
star.style.position = 'relative';
star.style.left = xPos + '%';
star.style.top = yPos + '%';
star.style.opacity = alpha;
star.style.width = size + 'px';
star.style.height = size + 'px';
star.style.backgroundColor = colour;
document.body.appendChild(star);
}

    //strokeWeight(0);
    //fill('white');
    //circle(50, 80, 2.5);
    //circle(50, 400, 1.5);
    //circle(600, 287, 3);
    //circle(400, 143, 1.5);


function drawStars() {
    strokeWeight(0);
    fill('white');
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
    }
}

function drawBubbles() {
    strokeWeight(1);
    stroke('white');
    noFill()
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 40 + 5;
        circle(x, y, width);
    }
}
