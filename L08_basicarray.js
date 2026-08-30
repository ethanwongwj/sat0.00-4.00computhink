let textY = height;
function setup() {
    createCanvas(400,600);
    background(220);
}

function draw() {
    background(220);
    textSize(18);
    text("HELLO EVERYBODY" , 80 , textY);
    text("" , 80 , textY + 18);
    text("" , 80 , textY + 36)
    textY -= 0.67;
}
