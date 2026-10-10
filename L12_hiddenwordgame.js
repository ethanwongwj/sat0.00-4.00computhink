let Input;
let button;
function setup() {
    createCanvas(600,400);
    background(220);
    let offsetY = this.Canvas.offsetLeft;
    let offsetX = this.Canvas.offsetTop; 
    Input.createInput()
    Input.position(width / 2 + offsetX + 100 , height / 2 + offsetY);
    button = createButton("Submit");
    button.position(width / 2 , offsetX - 80, height / 2 + offsetY );
}
function draw() {
}