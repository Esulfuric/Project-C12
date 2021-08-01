var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, leaf1Img, leaf2Img, leaf3Img;
var applesGroup, leavesGroup;
var apple, leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaf1Img = loadImage("leaf.png");
  leaf2Img = loadImage("orangeLeaf.png")
  leaf3Img = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(mouseX,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

applesGroup = new Group()
leavesGroup = new Group() 
}


function draw() {
  background(0);
  
  rabbit.x = mouseX

  edges = createEdgeSprites();
  rabbit.collide(edges);
  
  createApples()
  createLeaves()
  drawSprites();
}

function createApples(){
   if (frameCount % 90 === 0) {
   apple = createSprite(600,0,40,10);
   apple.x = Math.round(random(50,350));
   apple.addImage(appleImg);
   apple.scale = 0.05;
   apple.velocityY = 3;
   
   apple.lifetime = 120;
      
   apple.depth = rabbit.depth
   rabbit.depth = rabbit.depth + 1
   applesGroup.add(apple)
  }
}

function createLeaves(){
  if (frameCount % 60 === 0){
    var leaf = createSprite(200,0,10,10);
    leaf.x = Math.round(random(50,350));
    leaf.velocityY = 5;
    leaf.scale = 0.05
    leaf.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1
    leaf.lifetime = 70;
    leavesGroup.add(leaf)
 
    
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: leaf.addImage(leaf1Img);
               break;
       case 2: leaf.addImage(leaf2Img);
               break;
       case 3: leaf.addImage(leaf3Img);
               break;
       default: break;
     }
   }
              
     
  }