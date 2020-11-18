var car,wall;
var speed,weight;

function setup() {
  createCanvas(width,height);

  //creating car and wall
   wall = createSprite(300,300,60,300);
   car = createSprite(10,300,10,10);
   car.velocityX = speed;

  //speed and weight code
   speed = random(55,90);
   weight = random(400,1500); 

}

function draw() {
  background = "black";  

  //deformation code
   if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/25509;

    if(deformation>180){
     car.shapeColor = color(255,0,0); 
    } 

    if(deformation<180 && deformation>100){
     car.shapeColor = color(230,230,0); 
    }

    if(deformation<100){
     car.shapeColor = color(0,255,0); 
    }
   
  }
  drawSprites();
}