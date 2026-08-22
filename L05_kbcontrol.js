
function setup() {
    createCanvas(400,400);
    background(220);
}
// function draw() {
//     background(220)
//     rect(width / 2 - rectsize / 2, height /2 - rectsize / 2, rectsize,rectsize);
// }
// function keyPressed() {
//     rectsize = 100;
// }
// function keyReleased() {
//     rectSize = 50;
// }
// function keyPressed() {
//     let numcircle = random(5,20)
//     for(i = 0 ; i < numcircle ; i++ ) {
//         let colour = colour(random(0,255), random(0,255),random(0,255)) 
//         let cirsize = random(10,50);
//         let x = random(0,400);
//         let y = random(0,400);
//         fill(colour);
//         ellipse(x,y,cirsize,cirsize);
//     }
// }
// function keyReleased() {
//     createCanvas(400,400)
// }
// let r = 0
// let g = 0
// let b = 0
// function keyPressed() {
//     console.log("key:", key)
//     console.log("keycode:", keyCode)
//     if (keyCode === 67) {
//         background(220)
//         fill(col)
//         ellipse(200,200,100,100)
//     }
// }
// function mouseMoved() {
//     if (mouseX < 74 ) {
//         r = 255
//         g = 0
//         b = 0
//         fill(r,g,b)
//         ellipse(200,200,100,100)
//     }
//     if (mouseX < 124 && mouseX > 74 ) {
//         r = 0
//         g = 255
//         b = 0
//         fill(r,g,b)
//         ellipse(200,200,100,100)
//     }
//     if (mouseX < 250 && mouseX > 124 ) {
//         r = 0
//         g = 0
//         b = 255
//         fill(r,g,b)
//         ellipse(200,200,100,100)
//     }
//     if (mouseX < 325 && mouseX > 250 ) {
//         r = 255
//         g = 255
//         b = 0
//         fill(r,g,b)
//         ellipse(200,200,100,100)
//     }
//     if (mouseX < 401 && mouseX > 325 ) {
//         r = 255
//         g = 0
//         b = 255
//         fill(r,g,b)
//         ellipse(200,200,100,100)
//     }
// }
// let x = 200;
// function draw() {
//     background(220);
//     circle(x, 200, 100);

//     if (keyIsDown(RIGHT_ARROW)) {
//         x += 2;
//     }
//     if (keyIsDown(LEFT_ARROW)) {
//         x -= 2;
//     }

//     //circle(width /2 + x, height/2, 100)
//     if (x < 50) {
//         x = 50;
//     }
//     if (x > width - 50) {
//         x = width - 50;
//     }
// }
// THE STUPID TRIANGLE!!!!!
let colour = 0
if(mouseX < 75)
    colour = red;

let x = 175;
let x1 = x;
let x2 = x + 25;
let x3 = x + 50;
let y = 0;
let y1 = y;
let y2 = 35
let y3 = y;
function draw() {
    background(220);
    fill(colour)
    triangle(x1,y1,x2,y2,x3,y3);

    if (keyIsDown(DOWN_ARROW)) {
        y1 = y3 = y +=3;
        y2 = y + 35;
    }
    if (keyIsDown(UP_ARROW)) {
        y1 = y3 = y -= 3;
        y2 = y - 35;
    }
    if (y2 < 1) {
        y = 35;
        y2 = 0;
    }
    if (y2 > 399) {
        y = 365;
        y2 = 400;
    }
}