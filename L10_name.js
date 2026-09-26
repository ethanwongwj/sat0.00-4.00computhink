let inputText;
let displayText = "Your Name Here";
function setup() {
    createCanvas(600,400);
    fill(255,255,0);
    textSize(40);
    textAlign(CENTER,CENTER)
    inputText = createInput();
    inputText.input(updateText);
    inputText.position(width/2,height/2);
    inputText.input(updateText);
    let inputX = this.canvas.offset
}

function draw() {
    background(0);
}
function updateText() {
    displayText = this.value();
    console.log(displayText);
}