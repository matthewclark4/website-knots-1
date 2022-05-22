let angle;

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  
	angle = 0.0;
}

function draw() {
	background(211, 211, 211);
	
	push();
	rotateY(angle);
	angle += 0.03;
	
	var beta = 0.0;
	
	noFill();
	stroke(0);
strokeWeight(0.9);

	beginShape(POINTS);
	noFill();
	while (beta < PI) {
		let r = 60 * (0.8 + 1.6 * sin(6 * beta));
		let theta = 2 * beta;
		let phi = 0.6 * PI * sin(12 * beta);
		let x = r * cos(phi) * cos(theta);
		let y = r * cos(phi) * sin(theta);
		let z = r * sin(phi);
		
		beta += 0.0005;
		vertex(x, y, z);
	}
  
	  endShape(CLOSE);
	
	pop();
}