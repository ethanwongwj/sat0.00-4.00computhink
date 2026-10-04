let textInput;
let button;
function setup() {
    createCanvas(700,700);
    textInput = createInput();
    textInput.position(width / 2 , 100 );
    textInput = createInput();
    textInput.position(width / 2 , 120 );
    button = createButton("Generate");
    button.position(width / 2 , 150 );
}
function draw() {
    background(220);
    textSize(20);
    textAlign(RIGHT,CENTER);
    text("give me your name :" , width/2-10,90);
    text("give me your address :" , width/2-10,110);
}