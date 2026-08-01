// let redamt = 0 ;
// let greamt = 0 ;
// let bluamt = 0 ;
 function setup(){
     createCanvas(400,400);
     background(200);
 }
// function draw() {
//     fill( redamt , greamt, bluamt );
//     ellipse(200,200,80,80);
// }
// function mousePressed() {
//     redamt = random(0 , 255)
//     greamt = random(0 , 255)
//     bluamt = random(0 , 255)
//     noStroke()
// }
// function mouseReleased() {
//     redamt = 255
//     greamt = 255
//     bluamt = 255
// }
// function mouseMoved() {
//     fill(random(255))
//     ellipse(mouseX, mouseY, random(50), random(50));
// }
// let prevmouseX = 50  
// let size = 1
// function mouseMoved() {
//     if (prevmouseX < mouseX) {
//         size++
//         noStroke
//     } else {
//         size--
//     }
//     fill("skyblue")
//     background(200)
//     ellipse(200,200,size)
// }
function mouseDragged() {
    fill(random(255),random(255),random(255))
    circle(mouseX, mouseY , random(50))
}