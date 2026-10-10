let Input;
function setup() {
    createCanvas(600,400);
    background(220);
    let offsetY = thisCanvas.offsetLeft;
    let offsetX = thisCanvas.offsetTop; 
}
function draw() {
    Input.createInput()
    Input.position(300 , 200 );
}