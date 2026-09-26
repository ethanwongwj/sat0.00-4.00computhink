let inputText;
let displayText = "Your Name Here";
function setup() {
    createCanvas(600,400);
    fill(255,255,0)
    text
    inputText = createInput();
    inputText.input(updateText);
    inputText.position(width/2,height/2);
}

function draw() {
    background(0);
}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}