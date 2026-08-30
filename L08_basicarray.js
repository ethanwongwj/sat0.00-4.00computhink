let textY = height;
storytext = []
let
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
    text(storytext[count])
    textY -= 0.67;
}
