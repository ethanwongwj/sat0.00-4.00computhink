let inputText;
let displayText = "Your Name Here";
function setup() {
    createCanvas(600,400);
    inputText = createInput();
    inputText.input(update)
}

function draw() {
    background(0);
}