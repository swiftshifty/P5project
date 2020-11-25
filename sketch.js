function setup() {
  // put setup code here
  createCanvas(500,500);
  background('red');
}



function draw() {
  // put drawing code here
  var d1 = 50
  var d2 = 75

  ellipse(100, 100, 175, 175);
  ellipse(400, 100, 175, 175);
  rect(215, 200, 75, 75);
  rect(166, 350, 200, 85);
  // p5 Color object
fill(color(0, 0, 255));
if(mouseIsPressed)	{
	d1 = 70;
	d2 = 20;
	fill('rgb(0,255,0)');
	ellipse(mouseX, mouseY , 60, 60);
}

}
