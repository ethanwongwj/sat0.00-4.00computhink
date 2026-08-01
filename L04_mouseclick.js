let redamt = 0 ;
let greamt = 0 ;
let bluamt = 0 ;
function setup(){
    createCanvas(400,400);
    background(200);
}
function draw() {
    fill(redamt,greamt);
    ellipse(200,200,80,80);
}
function mousePressed() {
    redamt = random(0 , 255)
}