function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let counter = 0;
    while (counter < 800) {
        if(counter % 3 == 0) {fill('hotpink')}
        else if(counter % 2 === 0){
            fill('teal')
        } else {fill('white')}
        circle(canvasWidth/2, 0 + counter * 10, counter * 10);
        counter +=1;
    }
    //circle(100, 200+ 1 * 50, 50);
    //circle(100, 250 + 2 * 50, 50);
    //circle(100, 300 + 3 * 50, 50);
    //circle(100, 350 + 5 * 50, 50 );
    //circle(100, 400 + 0* 50, 50);

    drawGrid(canvasWidth, canvasHeight);
}
