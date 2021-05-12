
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bobObj, bobObj2, bobObj3, bobObj4, bobObj5;
var rope1, rope2, rope3, rope4, rop5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350, 100,400,50);

	bobObj = new Bob(200,350,35);
	bobObj2 = new Bob(270,350,35);
	bobObj3 = new Bob(340,350,35);
	bobObj4 = new Bob(410,350,35);
	bobObj5 = new Bob(480,350,35);

	rope1 = new Rope (bobObj.body,roof.body, -35*2,0);
	
	/*rope2 = new Rope(bobObj2.body,roof.body, -35*1,0);
	rope3 = new Rope(bobObj3.body,roof.body, 0,0);
	rope4 = new Rope(bobObj4.body,roof.body, 35*1,0);
	rope5 = new Rope(bobObj5.body,roof.body, 35*2,0);*/

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  background("pink");
  roof.display();
  bobObj.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

rope1.display();
/*  rope2.display();
  rope3.disply();
  rope4.display();
  rope5.display();*/

 
}



