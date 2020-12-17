var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,500);
  car=createSprite(50,100,50,50);
  

 
  wall = createSprite(1300,200,60,width/2);


  


speed=random(55,90);
weight=random(400,1500);
}

function draw() {

car.velocityX = speed;
//car.collide(wall);


if(wall.x-car.x <(car.width+wall.width)/2)
{
  car.velocityX=0;

  var deformation=0.5 * weight * speed * speed/22509;
  if(deformaion<180)
  {
    car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
  {
      car.shapeColor=color(230,230,0);
    }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0)
    
  }
  }
 

  background("blue");  
  drawSprites();
}

