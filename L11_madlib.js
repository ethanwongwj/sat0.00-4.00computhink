let nounInput;
let verbInput;
let thirdInput;
let forthInput;
let fifthInput;
let button;
function setup() {
    createCanvas(700,700);
    nounInput = createInput();
    nounInput.position(width / 2 , 100 );
    secondInput = createInput();
    secondInput.position(width / 2 , 120 );
    thirdInput = createInput();
    textInput.position(width / 2 , 100 );
    secondInput = createInput();
    secondInput.position(width / 2 , 120 );
    button = createButton("Generate");
    button.position(width / 2 , 150 );
    button.mousePressed(updateStory);
}
function draw() {
    background(220);
    textSize(20);
    textAlign(RIGHT,CENTER);
    text(":" , width/2-10,110);
    text(":" , width/2-10,130);
}
function updateStory() {
    print("Hello " + textInput.value());
    print("I am going to " + secondInput.value())
}