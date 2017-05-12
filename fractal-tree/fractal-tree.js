var angle = 0;
var currColor = 255;
var root;
var tree = [];
var leaves = [];

function setup() {
    createCanvas(600, 600);
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 200);
    root = new Branch(a, b);
    tree[0] = root;


    slider = createSlider(0, TWO_PI, PI/4, .005);
}

var count=0;

function mousePressed(){
  for(var i= tree.length-1; i >=0; i--){
    if(!tree[i].finished){
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
  }
  count++;
  if(count === 6){
    for(var i=0; i< tree.length; i++){
      var leaf = tree[i].end.copy();
      leaves.push(leaf);
    }
  }
 
}

function scareML(){
    textSize(42);   
    fill(155, 0, 0);
    text("ARGHH MARYLYNN YOU BROKE\n IT!!! WHAT DID YOU\n DOO??????", 10, 60);
}

function draw() {
    background(199);
    for(var i=0;i<tree.length;i++){
      tree[i].show();
      //tree[i].jitter();
    }

    for(var i=0;i<leaves.length; i++){
      fill(255, 0 ,100, 100);
      noStroke();
      ellipse(leaves[i].x, leaves[i].y, 8, 8);
      leaves[i].y += random(0, 1);
    }
     if(count == 2){
      scareML();
  }
}

function branch(len) {
    //height = canvas height = 400;
    line(0, 0, 0, -len);
    translate(0, -len);

    if(len > 4){
      push();
      rotate(angle);

      line(0, 0, 0, -len*.67);
      branch(len * 0.67);
      pop();

      push();
      rotate(-angle);

      line(0, 0, 0, -len*.67);
      branch(len * 0.67);
      pop();
    }
}

function getColorRange(num){
  if(num > 255){
    newNum = num - 255;
    getColorRange(newNum);
  }else{
    return num;
  }
}
