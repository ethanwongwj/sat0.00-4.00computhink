let shapeColor = 'blue' ;
function setup(){
    createCanvas(400,400);
    background(200);
}
function draw() {
    fill(shapeColor);
    ellipse(200,200,80,80);
}
function mousepressed() {
    shapeColor ='red'
}
function mousereleased() {
    shapeColor = 'blue'
}