var ball;
var ground;
var engine;
var world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	
	createCanvas(3000, 3000);



	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball=Bodies.circle(200,10,10,ball_options)
	World.add(world, ball)

	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(2100,600,20,120)


	
  
}



function draw() {
background(15);
Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10)
 
  groundObj.display()
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1})
	}
}



