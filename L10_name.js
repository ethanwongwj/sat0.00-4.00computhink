let inputText;
let displayText = "Your Name Here";
function setup() {
    createCanvas(600,400);
    inputText = createInput();
    inputText.input(updateText);
    inputText.position(width)
}

function draw() {
    background(0);
}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}