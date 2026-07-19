function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
    fill("blue")
    // circle(50,50,50)
    // circle(150,50,50)
    // circle(250,50,50)
    // circle(350,50,50)


let circleDiameter = 50;
let circleY = 50;
for (let i = 1; i < 5; i++ ) {
  circle(100*i, circleY*i, circleDiameter)
  circle(100/i, circleY*i, circleDiameter)
}
  // Recap 1: Repeating Circles\

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}