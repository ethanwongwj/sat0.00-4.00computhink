let nounInput;
let verbInput;
let adjInput;
let advInput;
let placeInput;
let button;
function setup() {
    createCanvas(700,700);
    nounInput = createInput();
    nounInput.position(width / 2 , 100 );
    verbInput = createInput();
    verbInput.position(width / 2 , 120 );
    adjInput = createInput();
    adjInput.position(width / 2 , 140 );
    advInput = createInput();
    advInput.position(width / 2 , 160 );
    placeInput = createInput();
    placeInput.position(width / 2 , 180 );
    button = createButton("Generate");
    button.position(width / 2 , 230 );
    button.mousePressed(updateStory);
}
function draw() {
    background(220);
    textSize(20);
    textAlign(RIGHT,CENTER);
    text("Enter a noun:" , width/2-10,110);
    text("Enter a verb:" , width/2-10,130);
    text("Enter an adjective:" , width/2-10,150);
    text("Enter an adverb:" , width/2-10,170);
    text(":" , width/2-10,190);
}
function updateStory() {
    print("Hello " + textInput.value());
    print("I am going to " + secondInput.value())
}