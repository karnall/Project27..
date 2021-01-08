
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	Object1 = new Bob(200,420,40);
	Object2 = new Bob(280,420,40);
	Object3 = new Bob(360,420,40);
	Object4 = new Bob(440,420,40);
	Object5 = new Bob(520,420,40);
	roof1 = new Roof(380,100,600,30);
	rope1 = new Rope(Object1.body,roof1.body,-180,0);
	rope2 = new Rope(Object2.body,roof1.body,-100,0);
	rope3 = new Rope(Object3.body,roof1.body,-20,0);  
	rope4 = new Rope(Object4.body,roof1.body,60,0);
	rope5 = new Rope(Object5.body,roof1.body,140*1,0);
   
}


function draw() {
 
  background("white");
   Engine.update(engine);
         
    Object1.display(); 
	Object2.display();  
	Object3.display();  
	Object4.display(); 
	Object5.display();  
	roof1.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
}
function keyPressed(){
	if(keyCode=== 38){
		console.log("hii");
	  Matter.Body.applyForce(Object1.body,Object1.body.position,{x:-80,y:-80});
	}
  }



