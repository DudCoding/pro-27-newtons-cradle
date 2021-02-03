
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, roofSprite; 
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.

	roofSprite = createSprite(400, 660, 800, 15);
	roofSprite.shapeColor = "brown";
	
	roof = Bodies.rectangle(400,50, 800, 15, {isStatic: true});
	World.add(world, roof);

	bobObject1 = new Bob(100, 400, 80);
	bobObject2 = new Bob(180, 400, 80);
	bobObject3 = new Bob(260, 400, 80);
	bobObject4 = new Bob(340, 400, 80);
	bobObject5 = new Bob(420, 400, 80);

	rope1 = new Rope(bobObject1.body, roof.body, 100, 0);
	rope2 = new Rope(bobObject2.body, roof.body, 180, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 260, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 340, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 420, 0);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roofSprite.x = roof.position.x;
  roofSprite.y = roof.position.y;


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  

  drawSprites();
 
}



