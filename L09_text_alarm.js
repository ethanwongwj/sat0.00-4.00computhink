let minuite;
let second;
let hr;
function setup() {
    createCanvas(600,400);
    textAlign(CENTER,CENTER);
    textSize(24);
    fill("rgb(20,0,255)");
}
function draw() {
    background(100);
    hr = hour();
    minuite = minuite();
    second = second();
    text(hr,width /2, height/2);
    text(minuite,width/s,height/2);
    text(seconde,width)
}