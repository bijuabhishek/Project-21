
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload() {
	
}

function setup() {

	createCanvas(800, 560);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
    ellipseMode(RADIUS);
	ground = new Ground(400, 550, 800, 5);
	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(690,600,10,240)
	rightSide = new Ground(540,600,10,240)
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	
	ball = Bodies.circle(300,50,20,ball_options,)
    World.add(world, ball)
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS)
	background(0);
	ground.display()
	groundObj.display()
	leftSide.display()
	rightSide.display()
	ellipse(ball.position.x, ball.position.y, 20, 20)
	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:45,y:-45});
	}
}


