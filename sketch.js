var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship1.png", "ship2.png") 
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(600,300);
  
  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship",shipImg)
ship.scale=0.2
sea=createSprite(10,200,600,10);
sea.x=sea.width/2
sea.velocityX=-3;
sea.visible=false
}
function draw() {
  
  background(seaImage)
  if (keyDown("")) {
  ship.velocityY = -10;
}

ship.velocityY = ship.velocityY + 0.7

if (sea.x < 0) {
  sea.x = sea.width / 7;
}

ship.collide(sea);
drawSprites() 
  
}  
  
  

  
  
  




 
