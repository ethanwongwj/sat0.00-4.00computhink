let textInput;
let submitButton;
function setup() {
    createCanvas(600,400);
    background(220);
    let offsetY = this.Canvas.offsetLeft;
    let offsetX = this.Canvas.offsetTop; 
    textInput.createInput()
    textInput.position(width / 2 + offsetX + 100 , height / 2 + offsetY);
    submitButton = createButton("Submit");
    submitButton.position(width / 2 , offsetX - 80, height / 2 + offsetY );
    submitButton.mousePressed(submitguess);
}
function draw() {
}