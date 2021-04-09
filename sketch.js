const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    var ballOption={
        restitution: 1.5

    }

    ball=Bodies.circle(200,10,58,ballOption)
    World.add(world,ball);

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

   



    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,this.width,20);
    ellipseMode(CENTER)
    ellipse(ball.position.x,ball.position.y,50,50)
}
