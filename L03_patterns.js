function setup() {
    createCanvas(600, 400);
    background(220);
  }

// let Colour = 0;
  
// function draw() {
//     fill("blue")
//     // circle(50,50,50)
//     // circle(150,50,50)
//     // circle(250,50,50)
//     // circle(350,50,50)


//  let circleDiameter = 50;
//  let circleY = 50;
//  for (let i = 1; i <10;i++ ) {
//    fill(Colour);
//   Colour = Colour + 0.5;
//   if (Colour > 255) {
//     for (let t = 1; t <511; t++){
//       colour = colour + 1
//     }
//   }
//    circle(50*i, circleY, circleDiameter)
//    // circle(50*i, circleY, circleDiameter)
//    // circle(50, circleY*i, circleDiameter)
//    print("i will not say 67")
//    print(width)
//    print(height)
//  }
function draw() {
  for (let row = 0; row <10; row++) {
    for (let col = 0; col < 5; col++) { 
      if ((row + col) % 2 === 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(col * 50, row * 50, 50, 50);
    }
  }
  // Recap 1: Repeating Circles\

  // Task 1: Colour Gradient

  // Task 2: Colour Loop
  
  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}