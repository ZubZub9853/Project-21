
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var rightSide;
var leftSide
function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	
	}
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(width/2,670,width,20);
	rightSide = new Ground(1000,600,10,120);
	leftSide = new Ground(800,600,10,120);
	ball = Bodies.circle(200,390,20,ball_options);
	World.add(world,ball);
	Engine.run(engine);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:75,y:-75});
	}
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(200);
  groundObj.show();
  rightSide.show();
  leftSide.show();

  circle(ball.position.x,ball.position.y,15);
  drawSprites();
  Engine.update(engine);
}