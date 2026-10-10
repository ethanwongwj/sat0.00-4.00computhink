let textInput;
let submitButton;
function setup() {
    createCanvas(600,400);
    background(220);
    let offsetX = this.canvas.offsetLeft;
    let offsetY = this.canvas.offsetTop; 
    textInput = createInput()
    textInput.position(width / 2 + offsetX - 100 , height / 2 + offsetY);
    submitButton = createButton("Submit");
    submitButton.position(350,200);
    submitButton.mousePressed(submitGuess);
}
function draw() {

}

function submitGuess() {
    let inputText = textInput.value();
    fill(0);
    textSize(28);
    background(220);
    textInput.style("")
    text(inputText, width / 2, height / 3);
}