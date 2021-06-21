var iss,spacecraft;
var bg,issimg,scimg1,scimg2,scimg3,scimg4;
var hasDocked=false;

function preload(){
    bg=loadImage("images/spacebg.jpg");
    issimg=loadImage("images/iss.png");
    scimg1=loadImage("images/spacecraft1.png");
    scimg2=loadImage("images/spacecraft2.png");
    scimg3=loadImage("images/spacecraft3.png");
    scimg4=loadImage("images/spacecraft4.png");

}

function setup(){
      createCanvas(600,400);
        spacecraft=createSprite(200,300);
        spacecraft.addImage(scimg1);
        spacecraft.scale=0.17;


        iss=createSprite(300,200);
          iss.addImage(issimg);
          iss.scale=0.7;


}

function draw(){
background(bg)

if(!hasDocked){
      if(keyDown("Up")){
          spacecraft.y=spacecraft.y-2;
          spacecraft.addImage(scimg2);
      }

      if(keyDown("Left")){
        spacecraft.x=spacecraft.x-2;
        spacecraft.addImage(scimg4);
    }
    if(keyDown("Right")){
      spacecraft.x=spacecraft.x+2;
      spacecraft.addImage(scimg3);
  }

}
    if(spacecraft.y<=iss.y+70 && spacecraft.x<=iss.x+5){
        hasDocked=true;
          textSize(25)
          fill("white")
          text("Docked succesfully",200,300);
    }

drawSprites();
}