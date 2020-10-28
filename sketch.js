
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof1=new Roof(400,100,800,10);
	ball1=new Ball(400,500,50);
	chain1 = new Chain(ball1.body,{x:400,y:100});
	ball2=new Ball(500,500,50);
	chain2 = new Chain(ball2.body,{x:500,y:100});
	ball3=new Ball(600,500,50);
	chain3 = new Chain(ball3.body,{x:600,y:100});
	ball4=new Ball(300,500,50);
	chain4 = new Chain(ball4.body,{x:300,y:100});
	ball5=new Ball(200,500,50);
	chain5 = new Chain(ball5.body,{x:200,y:100});
}


function draw() {
  rectMode(CENTER);
  background("blue");
  roof1.display();
  ball1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}



