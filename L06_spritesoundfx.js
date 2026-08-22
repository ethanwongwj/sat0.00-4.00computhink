function setup() {
    createCanvas(400,400);
    background(220);
}
let Xpos = 150
let Ypos = 150
let col = 200
function draw() {
    fill(col)
    rect( Xpos , Ypos , 50 , 50 );
    (noStroke)
}
function keypressed() {
    if(key === "UP_ARROW" || key === "W")
        Ypos = Ypos - 3;
    if(key === "DOWN_ARROW" || key === "S")
        Ypos = Ypos + 3;
    if(key === "LEFT_ARROW" || key === "A")
        Xpos = Xpos - 3;
    if(key === "RIGHT_ARROW" || key === "D")
        Xpos = Xpos - 3;
    if(key === "SPACE_BAR" && col === 200)
        col = 50

}
