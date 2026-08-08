let rectsize = 50 ;
function setup() {
    createCanvas(400,400)
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
    if (keycode === 5 ) {
        circle(200,200,50)
    }

    if (keycode === 67 ) {
        rect(200,200,50,50)
    }
}