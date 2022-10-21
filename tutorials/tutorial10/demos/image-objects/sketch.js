const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
let spiderImage;
let porcupineImage;
let landscapeImage;

function preload() {
  spiderImage = loadImage('assets/spider.png');
  porcupineImage = loadImage('assets/porcupine.png');
  landscapeImage = loadImage('assets/landscape.jpg');
} 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // code to scale the background image to the size of the 
    // canvas:
    push();
    const heightRatio = landscapeImage.height / canvasHeight;
    const widthRatio = landscapeImage.width / canvasWidth;
    const scaleFactor = 1 / Math.min(heightRatio, widthRatio);
    scale(scaleFactor);
    image(landscapeImage, 0, 0);
    pop();

    image(spiderImage, 20, 10);
    image(spiderImage, 650, 340);
    image(spiderImage, 50, 340);
    image(spiderImage, 300, 140);
    image(porcupineImage, 600, 100);
    image(porcupineImage, 300, 400);
}


