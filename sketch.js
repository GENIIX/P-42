var backImage,backgr;
var player, player_running;
var ground,ground_img;
var plrscrore
var banana_img,bananagroup
var rockGroup,rockIMG

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
   banana_img= loadImage("banana.png");
   rockIMG=loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);



  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
 
  drawSprites()
 //if(bananagroup.collide(player)){
//FoodGroup.destroyEach()
plrscrore=plrscrore+1;
//player.scale+= +0.1;

 }

  bananaSPWN();
  
    if (keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }


  


function bananaSPWN (){
if(frameCount% 80===0){
var banana=createSprite(810,200,50,50);
banana.y=random(250,360);
banana.velocityX= -7
banana.lifetime=300;
banana.addImage(banana_img);
banana.scale=0.09;
//bananagroup.add(banana);
}

function stoneSPWN(){
  if(frameCount% 80===0){
    var stone=createSprite(810,200,50,50);
    stone.lifetime=300;
   stone.addImage(rockIMG);
    stone.scale=0.09;
    rockGroup.add(stone);
}
}
}