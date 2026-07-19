function setup() {
    createCanvas(600, 400);
    background(220);
  }

let Colour = 0;
  
function draw() {
    fill("blue")
    // circle(50,50,50)
    // circle(150,50,50)
    // circle(250,50,50)
    // circle(350,50,50)


 let circleDiameter = 50;
 let circleY = 50;
 for (let i = 1; i <10;i++ ) {
   fill(Colour);
  Colour = Colour + 0.5;
  if (Colour > 255) {
    Colour = 0
  }
   circle(50*i, circleY*i, circleDiameter)
   // circle(50*i, circleY, circleDiameter)
   // circle(50, circleY*i, circleDiameter)
   print("i will not sling mud at my friend")
   print(width)
   print(height)
 }
  // Recap 1: Repeating Circles\

  // Task 1: Colour Gradient

  // Task 2: Colour Loop
  
  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}