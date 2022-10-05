let isDragging = false;

const makeShape = (ev) => {
    console.log(ev);

    const color = document.querySelector('#color').value;
    const size = document.querySelector('#size').value;
    const shape = document.querySelector('#shape').value;
    let svg;
    if (shape === "circle") {
        const radius = size / 2;
        svg= `
            <circle cx="${ev.offsetX}" cy="${ev.offsetY}" r="${radius}" stroke="black" stroke-width="3" fill="${color}" />
        `;
    } else {
        svg = `
            <rect x="${ev.offsetX - size/2 }" y="${ev.offsetY - size/2}" width="${size}" height="${size}" stroke="black" stroke-width="3" fill="${color}" />
        `;
    }
    document.querySelector('svg').insertAdjacentHTML("beforeend", svg);
};

const makeShapeWhenDrag = (ev) => {
    if (!isDragging) {
        return;
    }
    makeShape(ev);
};


// adding event handlers:
document.querySelector('svg').onclick = makeShape;
document.querySelector('svg').onmousedown = (ev) => {
    isDragging = true;
};
document.querySelector('svg').onmouseup = (ev) => {
    isDragging = false;
};
document.querySelector('svg').onmousemove = makeShapeWhenDrag;
