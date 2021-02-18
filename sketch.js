var canvas;
var music;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var square;
var block;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(windowWidth,windowHeight);

    //create 4 different surfaces
    block1=createSprite(windowWidth/5,windowHeight-10,windowWidth/5,20);
    block2=createSprite(windowWidth*2/5,windowHeight-10,windowWidth/5,20);
    block3=createSprite(windowWidth*3/5,windowHeight-10,windowWidth/5,20);
    block4=createSprite(windowWidth*4/5,windowHeight-10,windowWidth/5,20);
    block5=createSprite(windowWidth/5,0+10,windowWidth/5,20);
    block6=createSprite(windowWidth*2/5,0+10,windowWidth/5,20);
    block7=createSprite(windowWidth*3/5,0+10,windowWidth/5,20);
    block8=createSprite(windowWidth*4/5,0+10,windowWidth/5,20);
    block9=createSprite(0+10,windowHeight/2,20,windowWidth/5);
    block10=createSprite(windowWidth-10,windowHeight/2,20,windowWidth/5);
    block=createSprite(windowWidth/2,windowHeight/2,15,15);
    
    block1.shapeColor= rgb(255,0,0);
    block2.shapeColor= rgb(0,255,0);
    block3.shapeColor= rgb(0,0,255);
    block4.shapeColor= rgb(255,255,0);
    block5.shapeColor= rgb(255,0,255);
    block6.shapeColor= rgb(0,255,255);
    block7.shapeColor= rgb(0,0,155);
    block8.shapeColor= rgb(155,0,0);
    block9.shapeColor= rgb(0,155,0);
    block10.shapeColor=rgb(255,155,0);    
    block.shapeColor= rgb(0,0,0);

    //create box sprite and give velocity
    square=createSprite(random(0,windowWidth),windowHeight/2,40,40);
    square.shapeColor=rgb(255,255,255);
    square.velocityX=random(-20,20);
    square.velocityY=20;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(square.x+square.width/2>windowWidth || square.x-square.width/2<0){
        square.velocityX=square.velocityX*-1;
    }
    if(square.y+square.height/2>windowHeight || square.y-square.height/2<0){
        square.velocityY=square.velocityY*-1;
    }

    drawSprites();
    //add condition to check if box touching surface and make it box
    collideColor=function(sprite,target,r,g,b){
//        if(sprite.x+sprite.width/2<target-target.width/2 && sprite.x-sprite.width/2>target+target.width/2 && sprite.y+sprite.height/2<target-target.height/2 && sprite.y-sprite.height/2>target+target.height/2){
        if(sprite.isTouching(target)){
            sprite.shapeColor=rgb(r,g,b);
        }
    }
    collideColor(square,block1,255,0,0);
    collideColor(square,block2,0,255,0);
    collideColor(square,block3,0,0,255);
    collideColor(square,block4,255,255,0);
    collideColor(square,block5,255,0,255);
    collideColor(square,block6,0,255,255);
    collideColor(square,block7,0,0,155);
    collideColor(square,block8,155,0,0);
    collideColor(square,block9,0,155,0);
    collideColor(square,block10,255,155,0);
    collideColor(square,block,0,0,0);
    if(block.isTouching(square)){
        music.play();
        square.velocityX=0;
        square.velocityY=0;
    }
}

