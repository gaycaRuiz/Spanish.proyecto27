
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	roofObject=new Techo(width/2,height/4,width/7,20);
	bobDiameter = 40;
	bob1 = new Masa(startMasaPositionX-bobDiameter*2,startMasaPositionY,bobDiameter);
	bob2 = new Masa(startMasaPositionX-bobDiameter,startMasaPositionY,bobDiameter);
	bob3 = new Masa(startMasaPositionX,startMasaPositionY,bobDiameter);
	bob4 = new Masa(startMasaPositionX+bobDiameter,startMasaPositionY,bobDiameter);
	bob5 = new Masa(startMasaPositionX+bobDiameter*2,startMasaPositionY,bobDiameter);
	
	var render = Render.create({
		element:document.body,
		engine:engine,
		options: {
			width:1200,
			height:700,
			wireframes:false
		}
	});

	
	
	rope1=new Cuerda(bob1.body,roofObject.body,-bobDiameter*2, 0);
	rope2=new Cuerda(bob2.body,roofObject.body,-bobDiameter*1, 0);
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}

function drawLine(Constraint){
	MasaBodyPosition = Constraint.bodyA.position;
	TechoBodyPosition = Constraint.bodyB.position;
	TechoBodyOffSet = Constraint.pointB;
	TechoBodyX = TechoBodyPosition.x+TechoBodyOffSet.x;
	TechoBodyY = TechoBodyPosition.y+TechoBodyOffSet.y;
	line(MasaBodyPosition.x,MasaBodyPosition.y,TechoBodyX,TechoBodyY);
}








