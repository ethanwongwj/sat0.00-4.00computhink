let nounInput;
let verbInput;
let adjInput;
let advInput;
let placeInput;
let button;
let storyText;
let storyTemplates;
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
    storyTemplates [
        "The {adj} {noun} decided to {verb} {adv} at the {place}",
        "One day , a {adj} {noun} wanted to {verb} {adv} in {place}",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place} ?"
    ]
    template = random(storyTemplates);
    storyText = template.replace("{noun}" , "dog");
    storyText = template.replace("{adj}" , )
}
function draw() {
    background(220);
    textSize(20);
    textAlign(RIGHT,CENTER);
    text("Enter a noun           e.g. dog  :" , width/2-10,110);
    text("Enter a verb           e.g. swim :" , width/2-10,140);
    text("Enter an adjective     e.g. happy:" , width/2-10,170);
    text("Enter an adverb        e.g. sadly:" , width/2-10,200);
    text("Enter a place          e.g. zoo  :" , width/2-10,230);
}
function updateStory() {
}