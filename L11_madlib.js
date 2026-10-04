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
    verbInput.position(width / 2 , 130 );
    adjInput = createInput();
    adjInput.position(width / 2 , 160 );
    advInput = createInput();
    advInput.position(width / 2 , 190 );
    placeInput = createInput();
    placeInput.position(width / 2 , 220 );
    button = createButton("Generate");
    button.position(width / 2 , 250 );
    button.mousePressed(updateStory);
}
function draw() {
    background(220);
    textSize(20);
    textAlign(RIGHT,CENTER);
    text("Enter a noun       :" , width/2-10,110);
    text("Enter a verb       :" , width/2-10,140);
    text("Enter an adjective :" , width/2-10,170);
    text("Enter an adverb    :" , width/2-10,200);
    text("Etner a place      :" , width/2-10,230);
}
function updateStory() {
    print("Hello " + textInput.value());
    print("I am going to " + secondInput.value())
}