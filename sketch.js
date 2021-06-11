const Engine=Matter.Engine;
const Bodies= Matter.Bodies
const Body=Matter.Body;
const World=Matter.World;
//namespacing
var myengine,myworld;
var ball;
var ball_options;
var ground,ground_options;

function setup() {
    createCanvas(400,400);
    myengine=Engine.create();
    myworld=myengine.world;
    
    ground_options={
        isStatic:true
    }

    ball_options={ 
        restitution:0.4,
        friction:0.5
    }


    ball=Bodies.circle(100,10,20,ball_options);
    World.add(myworld,ball);
    console.log(ball);

    ground=Bodies.rectangle(0,350,400,20,ground_options);
    World.add(myworld,ground);
}

function draw() 
{
  background("red");
  Engine.update(myengine);
  ellipse(ball.position.x,ball.position.y,50);
  rect(ground.position.x,ground.position.y,400,40);

}

