
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

	roof = new Roof(350,100,300,30);
	World.add(world,roof);

	bobObj1 = new Bob(250,300);
	bobObj2 = new Bob(300,300);
	bobObj3 = new Bob(350,300);
	bobObj4 = new Bob(400,300);
	bobObj5 = new Bob(450,300);

	rope1 = new Rope(bobObj1.body,-100,0);
	rope2 = new Rope(bobObj2.body,-50,0);
	rope3 = new Rope(bobObj3.body,0,0);
	rope4 = new Rope(bobObj4.body,50,0);
	rope5 = new Rope(bobObj5.body,100,0);
	



	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
	background("white");
	Engine.update(engine);

	roof.display();

	bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();
	bobObj5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}

function keyPressed(){
    if(keyCode === 32){
	   Matter.Body.applyForce(bobObj1.boby,bobObj1.Body.position,{x:-730 , y:0})	
	}
}

