var textField;
var output;

function setup(){
  noCanvas();
  textField = createInput("enter your favorite food","textarea");

  textField.changed(newText);
  textField.input(newTyping);
  output = select("#output");
}

function newTyping(){
  //createP(textField.value());
  output.html(textField.value());
}

function newText(){
  //console.log("You Typed: ",input.value())
  createP(textField.value());
}
