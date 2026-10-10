let Input;
function setup() {
    createCanvas(600,400);
    background(220);
    let offsetY = thisCanvas.offsetLeft;
    let offsetX = thisCanvas.offsetTop; 
    Input.createInput()
    Input.position(width / 2 + offsetX + 100 , 200 );
    

}
function draw() {
}