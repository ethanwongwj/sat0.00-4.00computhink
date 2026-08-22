// let xPos = 175
// let yPos = 175
// let col = 200

// function setup() {
//     createCanvas(400,400);
//     background(220);
// }

// function draw() {
//     background(220);
    
//     fill(col);
//     noStroke();

//     if(keyIsDown(UP_ARROW)) {
//        yPos -= 3;
//     }
        
//     if(keyIsDown(DOWN_ARROW)){
//         yPos += 3;
//     }
//     if(keyIsDown(LEFT_ARROW)) {
//         xPos -= 3;
//     }
//     if(keyIsDown(RIGHT_ARROW)){
//         xPos += 3;
//     }

//     xPos = constrain(xPos, 50, 300);
//     yPos = constrain(yPos, 50, 300);

//     rect( xPos , yPos , 50 , 50 );
// }

let soundEffect, bgMusic, statisImage
function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(200,200);
    bgMusic.loop();
}

function draw() {
    background('skyblue')
    image(staticImage, 0,0,110,133)
}