const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,400,20)
    box1 = new Box(200,100,50,50);
    //console.log(box1);


    box2 = new Box(220,50,50,100);

   // this is render code
   var render = Render.create({
    element:document.body,
    engine: engine,
    options: {
      width: 400,
      height: 400,
      wireframes:false,
    },
   
  });
  Render.run(render);

}

function draw(){
    background(0);
    Engine.update(engine); 
    box1.display();
    box2.display();
    ground.display();
}
