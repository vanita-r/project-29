const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, matter;
var slingshot;
var box;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  //engine = Engine.create();
  //world = engine.world;

  stand = new Ground(400,380,400,30);
  block = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  polyGon = new Polygon(200,300,10);
}

function draw() {
  background(255,255,255);  
  //Engine.update(engine);

  stand.display();
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  slingShot.display();
  polyGon.display();
  drawSprites();
}