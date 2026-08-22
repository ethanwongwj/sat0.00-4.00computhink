function setup() {
    createCanvas(400,400);
    background(220);
}
let Xpos = 175
let Ypos = 175
let col = 200
function draw() {
    fill(col);
    rect( Xpos , Ypos , 50 , 50 );
    noStroke();
}

function keyPressed() {
    if(keyIsDown(UP_ARROW))
        Ypos = Ypos - 3;
        background(220);
    if(keyIsDown(DOWN_ARROW))
        Ypos = Ypos + 3;
        background(220);
    if(keyIsDown(LEFT_ARROW))
        Xpos = Xpos - 3;
        background(220);
    if(keyIsDown(RIGHT_ARROW))
        Xpos = Xpos + 3;
        background(220);
}
