let Earth, stars, angle = 0, earthImg;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);

  // load Planet images
  earthImg = loadImage('images/earth.jpg');
  sunImg = loadImage('images/sun.jpg');
  venusImg = loadImage('images/venus.jpg');
  mercuryImg = loadImage('images/mercury.jpg');
  marsImg = loadImage('images/mars.jpg');
  jupiterImg = loadImage('images/jupiter.jpg');
  saturnImg = loadImage('images/saturn.jpg');
  uranusImg = loadImage('images/uranus.jpg');
  neptuneImg = loadImage('images/neptune.jpg'); 

  // create Star objects
  stars = [];
  for(let i = 0; i < 200; i++){
    stars.push(new Star());
  }
  var multiply = 2.5;
  var earthYears = 365.25;

  earthOrbit = earthYears * multiply;
  mercuryOrbit = 87.97 * multiply;
  venusOrbit = 224.7 * multiply;
  marsOrbit = 1.88 * earthYears * multiply;
  jupiterOrbit = 11.86 * earthYears * multiply;
  saturnOrbit = 29.46 * earthYears * multiply;
  uranusOrbit = 84.01 * earthYears * multiply;
  neptuneOrbit = 164.79 * earthYears * multiply;
  sunOrbit = 1000;

  earthRotation = multiply;
  mercuryRotation = 58.6 * multiply;
  venusRotation = 243 * multiply;
  marsRotation = 1.03 * multiply;
  jupiterRotation = 0.41 * multiply;
  saturnRotation = 0.45 * multiply;
  uranusRotation = 0.72 * multiply;
  neptuneRotation = 0.67 * multiply;
  sunRotation = 27 * multiply;

/*
  var scale = 1100;
  sunRadius = (432690/scale)/2;
  mercuryRadius = (1516/scale)/2;
  venusRadius = (3760.4/scale)/2;
  earthRadius = (3958.8/scale)/2;
  marsRadius = (2106.1/scale)/2;
  jupiterRadius = (42441/scale)/2;
  saturnRadius = (36184/scale)/2;
  uranusRadius = (15759/scale)/2;
  neptuneRadius = (15299/scale)/2;
  */

// visually appealing sizes

  sunRadius = 150;
  mercuryRadius = 25;
  venusRadius = 30;
  earthRadius = 40;
  marsRadius = 40;
  jupiterRadius = 90;
  saturnRadius = 75;
  uranusRadius = 75;
  neptuneRadius = 50;
  

// visually applealing distances
  sunDistance = 0;
  mercuryDistance = 200;
  venusDistance = 300;
  earthDistance = 400;
  marsDistance = 500;
  jupiterDistance = 700;
  saturnDistance =850;
  uranusDistance = 950;
  neptuneDistance = 1100;

/*
  var million1 = 1,000,000;
  var billion1 = 1,000,000,000;
  sunDistance = 0;
  mercuryDistance = (35.98 * million1)/scale;
  venusDistance = (67.24 * million1)/scale;
  earthDistance = (92.96 * million1)/scale;
  marsDistance = (141.6 * million1)/scale;
  jupiterDistance = (483.8 * million1)/scale;
  saturnDistance = (890.8 * million1)/scale;
  uranusDistance = (1.784 * billion1)/scale;
  neptuneDistance = (2.793 * billion1)/scale;

*/
/*
  sunDistance = 0;
  mercuryDistance = 100;
  venusDistance = 150;
  earthDistance = 200;
  marsDistance = 275;
  jupiterDistance = 350;
  saturnDistance = 400;
  uranusDistance = 600;
  neptuneDistance = 750;
  */
  // create Planet objects
  // !need to add orbit speed!
  // radius, x, y, rotationSpeed, img
  Earth = new Planet(earthRadius, earthDistance, 0, earthOrbit, earthRotation, earthImg);
  Sun = new Planet(sunRadius, sunDistance, 0, sunOrbit, sunRotation, sunImg);
  Mercury = new Planet(mercuryRadius, mercuryDistance, 0, mercuryOrbit, mercuryRotation , mercuryImg);
  Venus = new Planet(venusRadius, venusDistance, 0, venusOrbit, venusRotation,venusImg);
  Mars = new Planet (marsRadius, marsDistance, 0, marsOrbit, marsRotation, marsImg);
  Jupiter = new Planet (jupiterRadius, jupiterDistance, 0, jupiterOrbit , jupiterRotation, jupiterImg);
  Saturn = new Planet (saturnRadius, saturnDistance, 0, saturnOrbit, saturnRotation, saturnImg);
  Uranus = new Planet (uranusRadius, uranusDistance, 0, uranusOrbit , uranusRotation, uranusImg);
  Neptune = new Planet (neptuneRadius, neptuneDistance, 0, neptuneOrbit , neptuneRotation, neptuneImg); 
  
}

function draw(){
  background(0);
  //camera(mouseX, mouseY, mouseX, 0, 0, 0, 1, 1, 1);

  // last three give orientation
  
  // display stars
  for(let i = 0; i < stars.length; i++){
    stars[i].show();
  }

  // display planets
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
  constructor(radius, x, y, orbitSpeed, rotationSpeed, img) {
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.z = 0;
      this.orbitSpeed = orbitSpeed;
      this.rotationSpeed = rotationSpeed;
      this.img = img;
      //this.v = createVector(this.x, this.y, this.z);
  }

  show(){
    //this.x++;
    //this.y++; 
    push();
    // revolve around sun
    rotateY(millis() / this.orbitSpeed);
    translate(this.x, this.y);
    // revolve around self
    rotateY(-1*millis() / this.rotationSpeed);
    
    //console.log(this.x, this.y);
    texture(this.img);
    
    
    sphere(this.radius);
    pop();
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