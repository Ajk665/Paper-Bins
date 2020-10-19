
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,575,800,90);
	ball = new Ball(200,565,20,20);
	bin1 = new Bin(575,565,100,20);
	bin2 = new Bin(635,485,20,100);
	bin3 = new Bin(515,485,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  drawSprites();
  ball.display();
  bin1.display();
 bin2.display();
 bin3.display();
}

function keyPressed(){
	 if (keyCode === RIGHT_ARROW){
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}); } 
}
