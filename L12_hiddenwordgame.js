let textInput;
let submitButton;
let wordArray = ["table" , "tomat" , "" , ""];
let randomWord;
function setup() {
    createCanvas(600,400);
    background(220);
    let offsetX = this.canvas.offsetLeft;
    let offsetY = this.canvas.offsetTop; 
    textInput = createInput()
    textInput.position(width / 2 + offsetX - 100 , height / 2 + offsetY);
    textInput.style("background-color", "lightblue");
    textInput.size("font-size", "20px");
    textInput.style("border", "1px skyblue");
    submitButton = createButton("Submit");
    submitButton.position(350,200);
    submitButton.mousePressed(submitGuess);

    randomWord = random(wordArray);
}
function draw() {

}

function submitGuess() {
    let inputText = textInput.value();
    fill(0);
    textSize(28);
    background(220);
    text(inputText, width / 2, 300);
}