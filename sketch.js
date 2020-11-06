const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    bird = new Bird(200,100)
    box1 = new Box(600,300,70,70);
    box2 = new Box(800,300,70,70);
    log1 = new Log(700,230,300,PI/2);
    pig1 = new Pig(700,300)
    box3 = new Box(600,130,70,70);
    box4 = new Box(800,130,70,70);
    pig3 = new Pig(700,130)
    log2 = new Log(700,50,300,PI/2);
    box5 = new Box(700,20,80,80);
    log3 = new Log(750,20,140,-PI/7);
    log4 = new Log(650,20,140,PI/7);
    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    pig1.display();
    pig3.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}