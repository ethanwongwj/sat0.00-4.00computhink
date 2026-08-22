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

let soundEffect, bgMusic, statisImage;
let speed = 5;
let x = 100;
let y = 100;
function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(400,400);
    bgMusic.loop();
}

function draw() {
    background('skyblue');
    if(keyIsDown(UP_ARROW)){
        y += speed;
    }
    if(keyIsDown(DOWN_ARROW)){
        y -= speed;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x += speed;
    }
    if(keyIsDown(LEFT_ARROW)){
        x -= speed;
    }
    if(x === 0 || x === ) {

    }
    x = constrain(x,0,width - 100);
    y = constrain(y,0,height - 100);
    image(staticImage,x,y,100,100);
}

function keyPressed() {
    if (keyCode === 32) {
        soundEffect.play();
    }
}
