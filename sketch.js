
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hammer;
var rubber;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 hammer= new Hammer(200, 200, 70, 50);
	 rubber= new Rubber(400, 500, 90, 30);
	 plane= new Plane(400, 700, 800, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display(); 
rubber.display();
plane.display();
}



