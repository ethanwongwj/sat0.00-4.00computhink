
function setup() {
    createCanvas(400,400)
    background(220)
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
function keyPressed() {
    console.log("key:", key)
    console.logc("keycode:", keyCode)
    if (keyCode === 67) {
            background(220)
        circle(200,200,100)
    }

    if (keyCode === 83) {
        rect(200,200,100,100)
    }
}