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
    submitButton.position(width / 2 , offsetX - 80, height / 2 + offsetY );
    submitButton.mousePressed(submitGuess);
}
function draw() {
    
}

function submitGuess() {

}