let Earth, stars, angle = 0, earthImg;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);

  //load Planet images
  earthImg = loadImage('images/earth.jpg');
  sunImg = loadImage('images/sun.jpg');
  venusImg = loadImage('images/venus.jpg');
  mercuryImg = loadImage('images/mercury.jpg');
  marsImg = loadImage('images/mars.jpg');
  jupiterImg = loadImage('images/jupiter.jpg');
  saturnImg = loadImage('images/saturn.jpg');
  uranusImg = loadImage('images/uranus.jpg');
  neptuneImg = loadImage('images/neptune.jpg'); 

  //create Star objects
  stars = [];
  for(let i = 0; i < 200; i++){
    stars.push(new Star());
  }

  //create Planet objects
  Earth = new Planet(3, 50, 300, 0, 1000, color(255), earthImg);
  Sun = new Planet(0, 100, 0, 0, 1000, color('yellow'), sunImg);
  Mercury = new Planet(1, 30, 150, 0, 400, color(255), mercuryImg);
  Venus = new Planet(2, 25, 225, 0, 700, color('red'), venusImg);
  Mars = new Planet (3, 50, 400, 0, 1500, color(255), marsImg);
  Jupiter = new Planet (4, 75, 500, 0, 2500, color('red'), jupiterImg);
  Saturn = new Planet (5, 75, 600, 0, 3000, color(255), saturnImg);
  Uranus = new Planet (6, 50, 700, 0, 3500, color(255), uranusImg);
  Neptune = new Planet (7, 50, 800, 0, 8000, color(255), neptuneImg);
}

function draw(){
  background(0);
  
  //display stars
  for(let i = 0; i < stars.length; i++){
    stars[i].show();
  }

  //display planets
  Earth.show();
  Sun.show();
  Mercury.show();
  Venus.show(); 
  Mars.show();
  Jupiter.show();
  Saturn.show();
  Uranus.show();
  Neptune.show();
}

class Planet {
  constructor(position, radius, x, y, rotationSpeed, color, img) {
      this.position = position;
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.z = 0;
      this.rotationSpeed = rotationSpeed;
      this.color = color; 
      this.img = img;
      //this.v = createVector(this.x, this.y, this.z);
  }

  show(){
    //this.x++;
    //this.y++; 
    push();
    fill(this.color);
    //revolve around sun
    rotateY(millis() / this.rotationSpeed);
    translate(this.x, this.y);
    //revolve around self
    rotateY(-4*millis() / this.rotationSpeed);
    
    //console.log(this.x, this.y);
    texture(this.img);
    
    
    sphere(this.radius);
    pop();
    /*
    push();
    rotate(PI, this.v);
    pop();*/
  }

  orbit(){
    //push();
    //rotateY(millis() / this.rotationSpeed);
    //pop();
  }
}

class Star {
  constructor(){
    this.diameter = random(1, 3);
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
  }

  show(){
    push();
    fill('white');
    translate(this.x, this.y, -500);
    circle(this.x, this.y, this.diameter);
    pop();
  }
}


// DOM Manipulation happens here
let els = document.querySelectorAll(".planet-selector")
for (let el of els) {
  el.addEventListener("click", function () {
    let panels = document.querySelectorAll(".planet-facts")
    for (let p of panels) {
      p.classList.remove("popup");
    }
    let panel = document.getElementById(el.getAttribute("data-panel"));
    panel.classList.add("popup");
  }, false);
}