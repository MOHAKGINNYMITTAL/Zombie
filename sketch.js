function setup() {
  createCanvas(1500,400);
  gun=createSprite(100, 200, 10,10);
  gun.addImage(gunimg);
  zombie=createSprite(1300,200,10,10);
  zombie.addImage(zimg);
  bullet=createSprite(100,200,10,10);
}
function preload(){
  gunimg=loadImage("gun.png");
  zimg=loadImage("zombie.png");
  bulletimg=loadImage("bullet.png")
}
function draw() {
  background("black"); 
  if(keyDown("space")){
    bullet.addImage(bulletimg);
    bullet.velocityX=20;
  }
  if(bullet.isTouching(zombie)){
    zombie.visible=false;
    bullet.visible=false;
  }
  drawSprites();
}