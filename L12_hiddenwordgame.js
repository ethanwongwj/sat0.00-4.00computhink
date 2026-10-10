let textinput;
let submitbutton;
function setup() {
    createCanvas(600,400);
    background(220);
    let offsetY = this.Canvas.offsetLeft;
    let offsetX = this.Canvas.offsetTop; 
    textinput.createInput()
    textinput.position(width / 2 + offsetX + 100 , height / 2 + offsetY);
    submitbutton = createButton("Submit");
    submitbutton.position(width / 2 , offsetX - 80, height / 2 + offsetY );
    submitbutton.mousePressed(submitguess);
}
function draw() {
}