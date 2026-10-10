let textinput;
let subbutton;
function setup() {
    createCanvas(600,400);
    background(220);
    let offsetY = this.Canvas.offsetLeft;
    let offsetX = this.Canvas.offsetTop; 
    textinput.createInput()
    textinput.position(width / 2 + offsetX + 100 , height / 2 + offsetY);
    subbutton = createButton("Submit");
    subbutton.position(width / 2 , offsetX - 80, height / 2 + offsetY );
}
function draw() {
}