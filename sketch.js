
let degree = 0;
let degreeStep = 19;
let radius = 50;
let radiusStep;
let colorStep;
let screen
let screensize
let isPaused=false

function setup() {
  screen = Math.min(window.innerWidth, window.innerHeight)
  screensize = [screen ,screen]
  createCanvas(screensize[0], screensize[1]);
  background(220);
  radius = random(100);
  degreeStep = random(20,90);
  radiusStep = random(20);
  colorStep = int(random(2,50));
  showCurrentParam(radius, degreeStep, radiusStep, colorStep)
  print('radius: '+radius + ', degreeStep: ' + degreeStep + ', radiusStep: ' + radiusStep);
  print('colorStep: '+colorStep);
}

function draw() {
  if (isPaused) return;
  degree = degree + degreeStep;
  if (degree > 360) {
    degree -= 360;
  }
  radius = radius + 0.2;
  if (radius > screen/2) {
    radius = 0;
    setup();
  }
  centerX = cos(radians(degree))*radius;
  centerY = sin(radians(degree))*radius;
  bigCenterX = screensize[0]/2;
  bigCenterY = screensize[1]/2;
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
    isPaused = !isPaused
    //pause();
  }
}

function showCurrentParam(radius, degreeStep, radiusStep, colorStep) {
  let param = document.getElementsByClassName('currentParam')[0];

  if (param != undefined) {
    param.remove()
  } else {
    param = document.createElement('h1')
  }

  param.style.textAlign = "center";
  param.className = 'currentParam'
  param.textContent = `radius: ${radius.toFixed(2)}  degreeStep: ${degreeStep.toFixed(2)}  radiusStep: ${radiusStep.toFixed(2)}  colorStep: ${colorStep}`
  document.getElementsByTagName('body')[0].insertAdjacentElement('afterbegin', param)
}

function keychk(e){
  let key = e.which?e.which:e.keyCode;
  if(key == 110) setup();
}