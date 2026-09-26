// let min;
// let sec;
// let hr;
// let timeString;
// function setup() {
//     createCanvas(600,400);
//     textAlign(CENTER,CENTER);
//     textSize(24);
//     fill("rgb(20,0,255)");
// }
// function draw() {
//     background(100);
//     hr = hour();
//     min = minute();
//     sec = second();
//     // text(hr,width /2, height/2);
//     // text(min,width/2,height/2+50);
//     // text(sec,width/2,height/2+100);
//     timeString = nf(hr,2) + " : " + nf(min,2) + " : " + nf(sec,2)
//     text(timeString,width/2,height/2);
// }

let intervalid = 1;
let countdown = 5;
function setup() {
    createCanvas(6000,400);
    background(0);
    fill("rgb(20,0,255)");
    textSize(24);
    intervalid = setInterval(drawCircle,1000);
}
intervalid = updateCountdown;
// function drawCircle() {
//     clear();
//     circle(x,50,20);
//     x += 100;
//     if(x>200) {
//         x = 0
//     }
// }

function updateCountdown() {
    countdown--;
}