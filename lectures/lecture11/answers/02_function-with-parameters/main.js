// make a function:

const makeRed = () => {
    document.querySelector('body').style.backgroundColor = 'red';
}

const makeBlue = () => {
    document.querySelector('body').style.backgroundColor = 'blue';
}

const makeGreen = () => {
    document.querySelector('body').style.backgroundColor = 'green';
}


// handles ANY color change (you don't have to make a function for each color):
const changeColor = (color) => {
    document.querySelector('body').style.backgroundColor = color;
}