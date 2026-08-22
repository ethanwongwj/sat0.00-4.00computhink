function setup() {
    createCanvas(400,400);
    background(220);
}
let Xpos = 175
let Ypos = 175
let col = 200
function draw() {
    fill(col)
    rect( Xpos , Ypos , 50 , 50 );
    (noStroke)
}
function keypressed() {
    if(keyIsDown(UP_ARROW))
        Ypos = Ypos - 3;
    if(keyIsDown(DOWN_ARROW))
        Ypos = Ypos + 3;
    if(keyIsDown(LEFT_ARROW))
        Xpos = Xpos - 3;
    if(keyIsDown(RIGHT_ARROW))
        Xpos = Xpos - 3;
    if(keyIsDown(SPACE_BAR) && (col) === 200)
        col = 50;
    if(key === "SPACE_BAR" && (col) === 50)
        col = 200;
}
