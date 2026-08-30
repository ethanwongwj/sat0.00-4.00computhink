let textY = height;
let storytext = []
function setup() {
    createCanvas(400,600);
    background(220);
}

function draw() {
    background(220);
    textSize(18);
    storyText[0] = "A LOOOOOOOOOOOOOONG TIME AGO.........."
    storytext[1] = "MY GRANDMA TOLD ME A STORY"
    storyText[2] = "AND THE END"
    for(let count = 0 ; count < storyText.length; count++ ) {
        text(storyText(count))
    }
    textY -= 0.67;
}
