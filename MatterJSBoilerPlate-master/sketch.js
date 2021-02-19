
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, dustbin1


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	dustbin1 = new dustbin(1200,650)
	paper = new Paper(200,450,40)
	ground = new Ground(800,670,1600,20)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Aqua");
  paper.display()
  ground.display()
  dustbin1.display()
  
  drawSprites();
 
}

function keyPressed() {

if (keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-50})

}




}

