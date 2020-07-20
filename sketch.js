var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 50);
  movingRect=createSprite(400, 200, 80, 40);
  movingRect.shapeColor="Green";
  fixedRect.shapeColor="Green";
  }

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  console.log(fixedRect.width/2+movingRect.width/2);
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="Red";
    fixedRect.shapeColor="Red";
  }
  else{
    movingRect.shapeColor="Green";
    fixedRect.shapeColor="Green";
  }
    drawSprites();
}