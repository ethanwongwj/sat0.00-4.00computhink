let min;
let sec;
let hr;
let timeString;
function setup() {
    createCanvas(600,400);
    textAlign(CENTER,CENTER);
    textSize(24);
    fill("rgb(20,0,255)");
}
function draw() {
    background(100);
    hr = hour();
    min = minute();
    sec = second();
    // text(hr,width /2, height/2);
    // text(min,width/2,height/2+50);
    // text(sec,width/2,height/2+100);
    timeString = nf(hr,2) + " : " + nf(min,2) + " : " + nf(sec,2)
    text(timeString,width/2,height/2);
}