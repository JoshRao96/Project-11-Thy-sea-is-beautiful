var ship, shipImg;
var sea, seaImg;



function preload(){
shipImg=loadImage("ship-4.png");
seaImg=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,400,400);
  sea.addImage(seaImg);
  sea.scale=0.24;
  
  
  ship = createSprite (80,250,60,60);
  ship.addImage(shipImg);
  ship.scale=0.2;


}

function draw() {
  background("blue");
 
  sea.velocityX=-5

if (sea.x<0) {
  sea.x=300
}
 
 
 
 
  drawSprites();
}