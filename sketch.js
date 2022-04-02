
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
  runner.addAnimation("running", runner_running);
  runner.scale = 0.75;


}

function draw() {

background(220);
if(path.y > 400 ){
   path.y = height/2;}

   if(keyDown("left")){
   //then move x -3 velocity;
runner.velocityX = -3;
   }

   if(keyDown("right")){
    //then move x 3 velocity;
 runner.velocityX = 3;
    }
 
 

















drawSprites(); 
}