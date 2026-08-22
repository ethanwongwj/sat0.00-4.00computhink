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
    if(key === "UP_ARROW")
        Ypos = Ypos - 3;
    if(key === "DOWN_ARROW")
        Ypos = Ypos + 3;
    if(key === "LEFT_ARROW")
        Xpos = Xpos - 3;
    if(key === "RIGHT_ARROW")
        Xpos = Xpos - 3;
    if(key === "SPACE_BAR" && (col) === 200)
        col = 50;
    if(key === "SPACE_BAR" && (col) === 50)
        col = 200;
}
