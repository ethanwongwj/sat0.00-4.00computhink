let ballX = 300;
let ballY = 200;
let cmxnum = 5;
let cmynum = 5; 
function setup() {
    createCanvas(600,400);
    background(220);
}

function draw() {
    if(ballX <= 0) {
        cmxnum = 5;
        fill(random(0,255),random(0,255),random(0,255),random(0.3,1.0));
        console.log("Bounce left");
    }
    if(ballX >= 350) {
        cmxnum = -5;
        fill(random(0,255),random(0,255),random(0,255),random(0.3,1.0));
        console.log("Bounce right");
    }
    if(ballY <= 0) {
        cmynum = 5;
        fill(random(0,255),random(0,255),random(0,255),random(0.3,1.0));
        console.log("Bounce top");
    }
    if(ballY >= 350) {
        cmynum = -5;
        fill(random(0,255),random(0,255),random(0,255),random(0.3,1.0));
        console.log("Bounce bottom");
    }
    ballX = ballX + cmxnum;
    ballY = ballY + cmynum;
    console.log(ballX, ballY);
    console.log(cmxnum, cmynum);
    noStroke
    circle(ballX,ballY,50);
}