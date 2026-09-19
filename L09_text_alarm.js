let min;
let sec;
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
    minuite = minute();
    second = second();
    text(hr,width /2, height/2);
    text(minuite,width/2,height/2+100);
    text(seconde,width/2,height/2+100);
    text(timeString,width/2,height/2);
}