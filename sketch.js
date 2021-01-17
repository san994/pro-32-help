const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var backgroundimg;

var score = 0;

function preload()
{
   
}

function setup() {
	createCanvas(1000, 500);
 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	polygon = new Polygon(300,400);
	sling = new Sling(polygon.body,{x:150,y:350});

    
   ground = new Ground(400,500,1500,20);
   platform1 = new Ground(445,350,250,20);
   platform2 = new Ground(815,250,200,20);

   block1 = new Block(340,320);
   block2 = new Block(370,320);
   block3 = new Block(400,320);
   block4 = new Block(430,320);
   block5 = new Block(460,320);
   block6 = new Block(490,320);
   block7 = new Block(520,320);
   block8 = new Block(550,320);

   block9 = new Block(370,280);
   block10 = new Block(400,280);
   block11 = new Block(430,280);
   block12 = new Block(460,280);
   block13 = new Block(490,280);
   block14 = new Block(520,280);

   block15 = new Block(400,245);
   block16 = new Block(430,245);
   block17 = new Block(460,245);
   block18 = new Block(490,245);

   block19 = new Block(430,205);
   block20 = new Block(460,205);

   block21 = new Block(740,230);
   block22 = new Block(770,230);
   block23 = new Block(800,230);
   block24 = new Block(830,230);
   block25 = new Block(860,230);
   block26 = new Block(890,230);

   block27 = new Block(770,190);
   block28 = new Block(800,190);
   block29 = new Block(830,190);
   block30 = new Block(860,190);

   block31 = new Block(800,160);
   block32 = new Block(830,160);

   Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  if(backgroundimg)
  background(backgroundimg);
  
  //noStrock();
  fill("red")
  text("SCORE : " + score , 300,50);

  platform1.display();
  platform2.display();
  ground.display();

  polygon.display();

  sling.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();

  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  block27.display();
  block28.display();
  block29.display();
  block30.display();

  block31.display();
  block32.display();

}

function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
   sling.fly();
}



function keyPressed(){

if(keyCode === 32){

Matter.Body.setPosition(polygon.body,{x:250,y:400})
sling.attach(polygon.body);
   
}

}

async function getBackgroundImg(){
   var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Odisha");
   var timejson = await time.json();

   var datetime = timejson.datetime;
   var hour = datetime.slice(11,13);
   
   if(hour>=0600 && hour<=1900){
       backimg = strock("yellow");
   }
   else{
       backimg = strock("blue");
   }

   backgroundimg = loadImage(bg);
   console.log(backgroundimg);
}







