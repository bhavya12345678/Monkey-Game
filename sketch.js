
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var FoodGroup, obstacleGroup;
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(900,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2
  
}


function draw() {

  background("white");
  
  if(keyDown("space") && monkey.y>300){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival time :" +survivalTime,100,50);
  
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    
    banana = createSprite(900,Math.round(random(120,200)),10,10);
    banana.addImage("fruit",bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 225;
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300 === 0){
    
    obstacle =  createSprite(900,345,10,10);
    obstacle.addImage("stone",obstaclesImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 225;
    
  }
}


