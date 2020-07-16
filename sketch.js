
var paper,log;
var slingShot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	//I have changed your code from my computer
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperDiameter = 80;

	//Create the Bodies Here.
	paper1 = new Paper(100,0,30);
	paper2 = new Paper(100,0,30);
	paper3 = new Paper(100,0,30);
	paper4 = new Paper(100,0,30);
	paper5 = new Paper(100,0,30);
	

	log = new Log(400,230,250,20);

	rope1 = new SlingShot(paper1.body,log.body,50-paperDiameter*2,0);
	rope2 = new SlingShot(paper2.body,log.body,60-paperDiameter*2,0);
	rope3 = new SlingShot(paper3.body,log.body,70-paperDiameter*2,0);
	rope4 = new SlingShot(paper4.body,log.body,80-paperDiameter*2,0);
	rope5 = new SlingShot(paper5.body,log.body,90-paperDiameter*2,0);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();

  log.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



