function setup() {
    createCanvas(400,400);
    background(220);
}
let xPos = 175
let yPos = 175
let col = 200
function draw() {
    background(220);
    
    fill(col);
    noStroke();

    if(keyIsDown(UP_ARROW)) {
       yPos -= 3;
    }
        
    if(keyIsDown(DOWN_ARROW))
        yPos += 3;
    if(keyIsDown(LEFT_ARROW)) {
        xPos -= 3;
    }
    if(keyIsDown(RIGHT_ARROW)){
        xPos + 3;
    }

    rect( xPos , yPos , 50 , 50 );
}
