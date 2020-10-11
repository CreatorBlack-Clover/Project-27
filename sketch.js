
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar,ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var bar_options =
	{
		isStatic: true
	}
	bar = Bodies.rectangle(400,200,400,50,bar_options);
	World.add(world,bar);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(bar.position.x,bar.position.y,400,50);
  
  drawSprites();
 
}



