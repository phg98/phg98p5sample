
let degree = 0;
let degreeStep = 19;
let radius = 50;
let radiusStep;
let colorStep;

function setup() {
  createCanvas(400, 400);
  background(220);
  radius = random(100);
  degreeStep = random(20,90);
  radiusStep = random(20);
  colorStep = int(random(2,50));
  print('radius: '+radius + ', degreeStep: ' + degreeStep + ', radiusStep: ' + radiusStep);
  print('colorStep: '+colorStep);
}

function draw() {
  degree = degree + degreeStep;
  if (degree > 360) {
    degree -= 360;
  }
  radius = radius + 0.2;
  if (radius > 200) {
    radius = 0;
    setup();
  }
  centerX = cos(radians(degree))*radius;
  centerY = sin(radians(degree))*radius;
  bigCenterX = 200;
  bigCenterY = 200;
  circle(bigCenterX+centerX,bigCenterY+centerY,30);
  if (int(degree) % colorStep == 0) {
    fill('#000000')
  } else {
    fill('#ffffff')
  }
  
  
}


function keyPressed() {
  let keyIndex = -1;
  if (key == 'a') {
    step -= 1;
  }
  if (key == 's') {
    step += 1;
  }
  if (key == ' ') {
    //pause();
  }
}