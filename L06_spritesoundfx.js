function setup() {
    createCanvas(400,400);
    background(220);
}
let Xpos = 150
let Ypos = 150
function draw() {
    rect( Xpos , Ypos , 50 , 50 );
    (noStroke)
}
function keypressed() {
    if(key === "UP_ARROW")
        Ypos = Ypos + 3;
    if(key === "DOWN_ARROW")
        Ypos = Ypos - 3;
    i
}
