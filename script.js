let Earth;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  Earth = new Planet(100, 200, 50, 1000, color(255));
}

function draw(){
  background(200, 200, 200);
  Earth.show();
}

class Planet {
  constructor(radius, x, y, rotationSpeed, color) {
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.rotationSpeed = rotationSpeed;
      this.color = color; 
  }

  show(){
    //this.x++;
    //this.y++;
    fill(this.color);
    rotateY(millis() / this.rotationSpeed);
    translate(this.x, this.y);
    console.log(this.x, this.y);
    
    sphere(this.radius);
  }

  orbit(){
    
  }
}