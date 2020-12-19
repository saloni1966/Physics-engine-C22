const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground;
function setup() {
  createCanvas(800,400);

  myengine = Engine.create();
  myworld =  myengine.world;

  var ground_options = {
      isStatic : true
  }

  ground  = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(myworld,ground);

  
}



function draw() {
  background(0,0,0);  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  
}