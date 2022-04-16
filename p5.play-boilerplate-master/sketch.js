function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor="aqua"
  
  movingRect = createSprite(400,200,80,30);
  

  go1=createSprite(100,100,50,50)
  go1.shapeColor = "crimson"
  go2=createSprite(200,100,50,50)
  go2.shapeColor = "crimson"
  go3=createSprite(300,100,50,50)
  go3.shapeColor = "crimson"
  go4=createSprite(400,100,50,50)
  go4.shapeColor = "crimson"

}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,go1)){
  movingRect.shapeColor = "pink";
  go1.shapeColor = "pink";
 }
 else{
  movingRect.shapeColor = "aqua";
  go1.shapeColor = "aqua";
  go2.shapeColor = "aqua";
  go3.shapeColor = "aqua";
  go4.shapeColor = "aqua";
 }

  drawSprites();
}


