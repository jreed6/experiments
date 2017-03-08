function Branch(start, end){
  this.begin = start;
  this.end = end;
  this.finished = false;

  this.show = function(){
    stroke(255);
    line(this.begin.x,this.begin.y, this.end.x, this.end.y);
  }

  this.jitter = function(){
    this.end.x += random(-1,1);
    this.end.y += random(-1,1);
  }

  this.branchA = function(){
    this.finished = true;
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(slider.value());
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var right = new Branch(this.end, newEnd);
    return right;
  }
  this.branchB = function(){
    this.finished = true;
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-slider.value());
    dir.mult(0.88);
    var newEnd = p5.Vector.add(this.end, dir);
    var right = new Branch(this.end, newEnd);
    return right;
  } 
  
}
