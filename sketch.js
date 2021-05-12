const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const Events=Matter.Events;
var particles=[];
var plinks=[];
var divisions=[];
var engine,world;
var width;
var count=0, score=0
var gamestate="start";
var ball ;

function setup() {
  createCanvas(405,410);
 engine=Engine.create();
  world=engine.world;
  ground1=new ground(0, 425, 900, 25);
  width=405;

  for (var k=0;k<=410;k=k+100)
  {
    divisions.push(new division(k,450,10,350));
    
  }
 for (var j=25;j<=410;j=j+50)
 {
   plinks.push(new plinko(j,75,10));
  
}
for (var l=0;l<=410;l=l+50)
{
  plinks.push(new plinko(l,150,10));

}
for (var n=25;n<=410;n=n+50)
{
  plinks.push(new plinko(n,225,10));

 
}

}

function draw() {
  background(255,125,255); 
  textSize(20);
 text("500",20,340);
 text("500",150,340);
 text("500",250,340);
 text("500",350,340);
 text("500",450,340);
  drawSprites();
  Engine.update(engine);
  ground1.display();
  for (var k=0;k<divisions.length;k++)
  {
    divisions[k].display();
  }
  for(var m=0;m<plinks.length;m++)
  {
    plinks[m].display();
    
  }
 
  if(frameCount%20==0){
    particles.push(new particle(random(20,450), 10,6,6));
    
  }
  for(var i=0;i<particles.length;i++)
  {
    particles[i].display();
    
  }
  if (gamestate=="end")
  {
    text("game over",40,50);
  }
  if(ball!=null)
  {
    ball.display()
    if(ball.body.position.y>100)
    {
      if (ball.body.position.x<100)
      {
        score=score+100;
        
        if(count>=5)
        {
          gamestate="end";
        }
      }
      else if (ball.body.position.x>100  && ball.body.position.x<200)
      {
        score=score+100;
        
        if(count>=5)
        {
          gamestate="end";
        }
      }
      else if (ball.body.position.x>200  && ball.body.position.x<300)
      {
        score=score+100;
      
        if(count>=5)
        {
          gamestate="end";
        }
       else if (ball.body.position.x>300  && ball.body.position.x<400)
      {
        score=score+100;
     
        
      }
      ball=null;
      if(count>=5)
        {
          gamestate="end";
        }
      }
    }
  }

  textSize(35);
  text("score"+ score,40,50) ;
  console.log(score);
}
function keyPressed()
{
  if (keyCode===32)
  {
    if (gamestate!="end")
    {
      ball=new particle(mouseX,10,6,6);
      count++
      console.log(count);
  
    }
  }
  
}