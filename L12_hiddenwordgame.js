let textInput;
let submitButton;
let wordArray = ["table" , "tomato" , "pineapple" , "pumpkin" , "potato"];
let randomWord;
let displayHint;
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
    displayHint = "Hint : " + randomWord[0].toUpperCase() + " " + " _ ".repeat(randomWord.length - 1);
    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    text(displayHint, width / 2 , height * 0.4);
}
function draw() {

}

function submitGuess() {
    let inputText = textInput.value();
    fill(0);
    textSize(28);
    background(220);
    text(textInput, width / 2, 300);
}
function correctGuess(guess , word) {
    for(let i = 0 ; i < word.length ; i++){
        if (word.includes(guess[i]) && !correctLetters.includes(guess[i])) {
            
        }

    }
}