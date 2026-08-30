let textY = 0;
let storyText = [];
let lineY = 0;
function setup() {
    createCanvas(400,600);
    background(220);
    storyText[0] = "A LOOOOOOOOOOOOOONG TIME AGO..........";
    storyText[1] = "MY GRANDMA TOLD ME A STORY";
    storyText[2] = "AND THE END";
    textY = height;   
}

function draw() {
    background(220);
    textSize(18);
    textAlign(CENTER , CENTER)
    lineY = 0
    for(let count = 0 ; count < storyText.length; count++ ) {
        text(storyText[count], width/2, textY+ lineY);
        lineY = lineY + 20;
    }
    textY -= 0.67;
}



