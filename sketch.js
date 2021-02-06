var obstaclesGroup1,obstaclesGroup2,obstaclesGroup3;
var inviSprite1,inviSprite2;
var gameState;
var lvl,lvl1,lvl2,lvl3;
var obstacle1,obstacle2,obstacle3;
var score;

function setup() {
  
  createCanvas(800,400);
  ground = createSprite(400, 200, 800, 20);
  inviSprite1=createSprite(70,100,20,20);
  inviSprite2=createSprite(inviSprite1.x,inviSprite1.y+200,20,20);
  //inviSprite1.visible=false;
  //inviSprite2.visible=false;

  obstaclesGroup1=createGroup();
  obstaclesGroup2=createGroup();
  obstaclesGroup3=createGroup();

    score=0;

  gameState="start";
  lvl=0;
  lvl1=1;
  lvl2=2;
  lvl3=3;
}

function draw() 
{
    background(55);  
  //  console.log(gameState);
    inviSprite2.y=inviSprite1.y+200;

    if (gameState==="start")
    {
      stroke("black");
      strokeWeight(2);
      textSize(20);
      text("press 's' to start the game",300,300);
      if(keyWentDown("s"))
      {
        gameState=lvl1;
      }
    }

    if(gameState===lvl1||gameState===lvl2||gameState===lvl3){
      if(inviSprite1.isTouching(ground)||inviSprite2.isTouching(ground))
      {
        gameState="end";
      } 
      if(inviSprite1.isTouching(obstaclesGroup1)||inviSprite2.isTouching(obstaclesGroup1))
      {
        gameState="end";
      }
    }
    if(gameState===lvl1){

      inviSprite1.y=inviSprite1.y+0.9;
      OB1();
      score = score + Math.round(getFrameRate() / 60);
      
        if(keyDown(UP_ARROW) && (inviSprite2.y-10)>(ground.y+10))
        {
          inviSprite1.y=inviSprite1.y-2.9;
          
        }else if(keyDown(DOWN_ARROW))
        {
          inviSprite1.y=inviSprite1.y+2;
        }

        if(score>200)
        {
          console.log("hello")
          
          obstaclesGroup1.setVelocityEach(0,0);
          stroke("black");
          strokeWeight(2);
          textSize(20);
          text("YOU COMPLETED LEVEL1 !",270,300)
          text("PRESS 'T'to continue",270,320);         
          if(keyDown==="t")
          {
         inviSprite1.y=100
        gameState=lvl2;
        obstaclesGroup1.destroyEach();
        score=0;
          }

        }
    }

  if (gameState==="end"){
      stroke("black");
      strokeWeight(2);
      textSize(20);
      text("YOU LOST PRESS 'r' TO RESTART",250,300);

        obstaclesGroup1.setVelocityEach(0,0);

      if (keyDown("r"))
      {
        inviSprite1.y=100
        gameState="start";
        obstaclesGroup1.destroyEach();
        score=0;
      }
  }
  
  drawSprites();
 push()
  strokeWeight(20);
  stroke("blue")
  fill("");
  arc(inviSprite1.x,(inviSprite1.y+100),20,200,90,270); 
  pop()
  push()
      fill("white")
      textSize(15);
      text("SCORE IS :"+score,600,50);
      pop();
}

function OB1()
{
  
  if(frameCount % 100 ===0)
  {
    var ranH =random(70,140);
    var ranW = random(40,150);
    var ranY = random(-60,60);
    obstacle1=createSprite(800,200+ranY,ranW,ranH);
    obstacle1.velocityX=-5;
    obstacle1.depth=inviSprite1.depth;
    obstaclesGroup1.add(obstacle1);
    obstaclesGroup1.setLifetimeEach(900);
  }
 
}