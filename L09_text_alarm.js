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

let intervalid;
let x = 0;
let couontdown
function setup() {
    createCanvas(6000,400);
    background(0);
    intervalid = setInterval(drawCircle,1000);
}

function drawCircle() {
    clear();
    circle(x,50,20);
    x += 1000;
    if(x>200) {
        x = 0
    }
}

function mousePressed() {
    clearInterval(intervalid);
    intervalid
}