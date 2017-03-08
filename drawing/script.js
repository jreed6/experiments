
function setup(){
  createCanvas(640,360);
  print("setup function!");
}

//https://p5js.org/reference/

function draw(){
  background(255,0,255);
  rect(100,200,75,150);
  line(20,30,400,320);
  bezier(85, 20, 10, 10, 90, 90, 15, 80);
//  console.log(frameCount);
}
