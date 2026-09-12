let ballX = 200;
let ballY = 200;
let colrgba = (0,0,0,1);
let cmxnum = 5;
let cmynum = 5; 
function setup() {
    createCanvas(400,400);
    background(220);
}
function draw() {
    circle(ballX,ballY,50);
    fill(colrgba);
    if(ballX = 0) {
        cmxnum = 5;
        fill(random(0,255),random(0,255),random(0,255),random(0.3,1.0));
    }
    if(ballx = 350) {
        cmxnum = -5;
        fill(random(0,255),random(0,255),random(0,255),random(0.3,1.0));
    }
    if(ballY = 0) {
        cmynum = 5;
        fill(random(0,255),random(0,255),random(0,255),random(0.3,1.0));
    }
    if(ballY = 350) {
        cmynum = -5;
        colrgba = (random(0,255),random(0,255),random(0,255),random(0.3,1.0));
    }
    ballX = ballX + cmxnum;
    ballY = ballY + cmynum;
}