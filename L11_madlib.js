let textInput;
let secondInput;
let button;
function setup() {
    createCanvas(700,700);
    textInput = createInput();
    textInput.position(width / 2 , 100 );
    secondInput = createInput();
    secondInput.position(width / 2 , 120 );
    button = createButton("Generate");
    button.position(width / 2 , 150 );
    button.mousepressed(updateStory);
}
function draw() {
    background(220);
    textSize(20);
    textAlign(RIGHT,CENTER);
    text("give me your name :" , width/2-10,110);
    text("give me your address :" , width/2-10,130);
}
function updateStory() {
    print("Hello" )
}