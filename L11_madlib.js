let textInput;
let button;
function setup() {
    createCanvas(700,700);
    textInput = createInput();
    textInput.position(width / 2 , 100 );
    button = createButton("Generate");
    button.position(width / 2 , 130 );
}
function draw() {
    background(220);
    textSize(20);
    textAlign(RIGHT,CENTER);
    text("give me your name :" , width/2-10,90)
}