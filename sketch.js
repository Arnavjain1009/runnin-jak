
var path, pathImg, runner, runner_running;


function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runner_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){

  createCanvas(400,400);
  //create sprites here
  
  path=createSprite(200,200);
  path.addImage("path",pathImg);
  path.velocityY = 5;
  path.scale=2.2;

  runner = createSprite(200,240,20,50);
  boundary1 = createSprite(0,0,1,800);
  boundary1.shapecolor="green";
  boundary1.visible = false;
  boundary2 = createSprite(400,0,1,800);
  boundary2.shapecolor="green";
  boundary2.visible = false;
  runner.addAnimation("running", runner_running);
  runner.scale = 0.75;


}

function draw() {
   background(220);

   runner.x = mouseX;

   if (runner.isTouching (boundary2) || runner.isTouching (boundary1)) {
      runner.x = 200;
   }

   if(path.y > 400 ){
      path.y = height/2;}
   /*
      if(keyDown("left")){
      //then move x -3 velocity;
   runner.velocityX = -3;
      }

   if(keyDown("right")){
    //then move x 3 velocity;
 runner.velocityX = 3;
    }*/
 
drawSprites(); 
}
