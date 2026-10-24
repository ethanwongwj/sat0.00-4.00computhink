let playerX = 100;
let player;
let playerSize = 30;
let velocity = 0;
let isGrounded = false;
function setup() {
    createCanvas(600,400);
    textAlign(CENTER, CENTER);
    playerY = height - playerSize;
}

function draw() {
    background(0);
    fill("limeGreen");
    rect( playerX , playerY , playerSize , playerSize );
}