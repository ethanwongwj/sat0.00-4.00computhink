let playerX = 100;
let player;
let playerSize = 50;
let velocity = 0;
let isGrounded = false;
let spikesX = [];
let spikeWidth = 35;
let spikeHeight = 50;
let spikeSpeed = 7.5;
let gameover = false;
function setup() {
    createCanvas(1000,700);
    textAlign(CENTER, CENTER);
    playerY = height - playerSize;
    for( let i = 0 ; i < 3 ; i++ ) {
        spikesX.push( width + ( i * 300  ) );
    }  
}

function draw() {
    if(!gameover) {
        background(0);
        velocity += 0.8;
        playerY += velocity;
        if (playerY >= ( height - playerSize ) ) {
            playerY = height - playerSize;
            isGrounded = true;
            velocity = 0;
        } else {
            isGrounded = false;
        }
        fill("limeGreen");
        rect( playerX , playerY , playerSize , playerSize );
    
        fill( 255 , 0 , 0 );
        for( let i = 0 ; i < spikesX.length ; i++) {
            spikesX[i] -= spikeSpeed;
            if(spikesX[i] < -spikeWidth) {
                spikesX[i] = width + random(500 , 800);
            }
            triangle(spikesX[i], height , spikesX[i] + spikeWidth / 2 , height - spikeHeight , spikesX[i] + spikeWidth , height)
        }
    } else {
        fill( 255 , 0 , 0 );
        textSize(75);
        text("G")
    }
}

function keyPressed() {
    if(key === ' ' && isGrounded === true) {
        velocity = -14
    }
}