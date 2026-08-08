let rectSize = 50;
let canvas;

function setup() {
    canvas = createCanvas(400, 400);
    // make canvas focusable so keyboard events work reliably
    canvas.elt.tabIndex = 0;
    canvas.elt.style.outline = 'none';
    canvas.elt.focus();
}

function draw() {
    background(220);
    fill(100, 150, 200);
    rect(width / 2 - rectSize / 2, height / 2 - rectSize / 2, rectSize, rectSize);
}

function keyPressed() {
    console.log("key:", key);
    console.log("keycode:", keyCode);
    if (keyCode === 33) {
        fill(255, 0, 0);
        circle(200, 200, 50);
    }

    if (keyCode === 34) {
        fill(0, 255, 0);
        rect(200, 200, 50, 50);
    }
}