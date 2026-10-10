let textinput;
let submitbutton;
function setup() {
    createCanvas(600,400);
    background(220);
    let offsetY = this.Canvas.offsetleft;
    let offsetX = this.Canvas.offsettop; 
    textinput.createInput()
    textinput.position(width / 2 + offsetX + 100 , height / 2 + offsetY);
    submitbutton = createButton("Submit");
    submitbutton.position(width / 2 , offsetX - 80, height / 2 + offsetY );
}
function draw() {
}