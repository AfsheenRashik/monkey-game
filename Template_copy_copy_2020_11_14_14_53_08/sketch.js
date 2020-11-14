var ground,groundImg;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime=0;
var back,backImage;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  backImg = loadImage("forest.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
   //back = createSprite(300,300);
  //back.addImage("ti",backImg);
  //back.velocityX = -3;
  //back.scale=3.0;
  //back.x = back.width/2;
  
   ground = createSprite(400,350,900,5);
  //ground.addImage("gi",groundImg);
  ground.scale =3.0;
  ground.velocityX = -4;
  ground.x=ground.width/2;
   
 
 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("mi",monkey_running);
  monkey.scale = 0.1;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
   survivalTime = survivalTime+Math.round(getFrameRate()/60);
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //if(back.x<0){
   // back.x=back.width/2;
 // }
  if(keyDown("space")) {
       monkey.velocityY = -12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
   
  
          
  monkey.collide(ground);
  
   //monkey.depth = ground.depth;
   // monkey.depth = monkey.depth+1;
    food();
     obs();
  textSize(18);
  fill("black");
  stroke("black")
  text("Survival Time:"+survivalTime,240,50);
 textSize(20);
  fill("black");
  stroke("black");
  text("score:"+score,300,30);
drawSprites();
  
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(400,Math.round(random(120,300)),10,10);
    banana.addImage("ri",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 100;
    FoodGroup.add(banana);
  
  }
   }
  
  
  function obs(){
    if(frameCount%300===0){
      obstacle = createSprite(Math.round(random(200,400)),330,10,10);
      obstacle.scale = 0.1;
      obstacle.lifetime = 100;
      obstacle.velocityX = -5;
      obstacle.addImage("oi",obstacleImage);
      obstacleGroup.add(obstacle);
        
  }
  
}




