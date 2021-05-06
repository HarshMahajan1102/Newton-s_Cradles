const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200, 650, 50);
	bob2 = new Bob(300, 650, 50);
	bob3 = new Bob(400, 650, 50);
	bob4 = new Bob(500, 650, 50);
	bob5 = new Bob(600, 650, 50);
	roof1 = new Roof(width/2, 200, width/2 + 200, 30);
	rope1 = new Rope(bob1.body, roof1.body, - 200, 15);
	rope2 = new Rope(bob2.body, roof1.body, - 100, 15);
	rope3 = new Rope(bob3.body, roof1.body, 00, 15);
	rope4 = new Rope(bob4.body, roof1.body, 100, 15);
	rope5 = new Rope(bob5.body, roof1.body, 200, 15	);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === 32){
	  Matter.Body.applyForce(bob1.body, bob1.body.position,{x: -700, y: 700})
  }
}

