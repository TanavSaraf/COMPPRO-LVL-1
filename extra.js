/*var obstaclesGroup1,obstaclesGroup2,obstaclesGroup3;
var inviSprite1,inviSprite2;
var gameState;
var lvl,lvl1,lvl2,lvl3;

function setup() {
  
  createCanvas(800,400);
 ground = createSprite(400, 200, 800, 20);
 inviSprite1=createSprite(70,100,20,20);
 inviSprite2=createSprite(inviSprite1.x,inviSprite1.y+200,20,20);
 //inviSprite1.visible=false;
 //inviSprite2.visible=false;

 gameState="start";
 lvl=0;

 lvl1=1;
 lvl2=2;
 lvl3=3;
}

function draw() 
{
    background(55);  
    
    console.log(gameState);

    inviSprite2.y=inviSprite1.y+200;
 

    if (gameState==="start")
    {
        
         stroke("black");
         strokeWeight(2);
         textSize(20);
        text("press 's' to start the game",300,300);
        text("everytime to start a new level press 't'",250,350)
        if(keyWentDown("s"))
        {
          gameState="play";
         

        }
    }
    if(keyDown("t")&&gameState==="play")
      {
        
      gameState=lvl1;
      }
    if(gameState===lvl1||gameState===lvl2||gameState===lvl3)
         {
              console.log("hellooo")
              if(inviSprite1.isTouching(ground) )
              {
                console.log("TANAV");
                gameState="end";
              } 
         }
      //play   
      
      //lvl1State
      if(gameState===lvl1){
        
        //lvl1OB()

        inviSprite1.y=inviSprite1.y+0.9;
      
      if(keyDown(UP_ARROW) && (inviSprite2.y-10)>(ground.y+10))
      {
        inviSprite1.y=inviSprite1.y-2.9;
        
      }else if(keyDown(DOWN_ARROW))
      {
        inviSprite1.y=inviSprite1.y+2;
       
      }
    }
      
      
    //endState
  if (gameState==="end")
    {
      stroke("black");
         strokeWeight(2);
         textSize(20);
      text("YOU LOST PRESS 'r' TO RESTART",250,300);
      if (keyDown("r"))
      {
        inviSprite1.y=100
        gameState="start";
      }
    }
  drawSprites();
  inviSprite1.collide(ground);
  inviSprite2.collide(ground);
  strokeWeight(20);
    stroke("blue")
    
    fill("");

    arc(inviSprite1.x,(inviSprite1.y+100),20,200,90,270); 
}

function lvl1OB()
{
  if(frameCount % 100===0)
  {
    
  }
}*/