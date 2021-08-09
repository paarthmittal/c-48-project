var car11,back1,shooters2,shooters;
var sGroup,sGroup2,bullet,bulletG;
var HealthBar=100;
var score=0;
var gamestate=1
function preload(){
  ben11=loadAnimation("images/ben1.png","images/ben2.png","images/ben3.png")
  ben21=loadAnimation("images/ben1.png","images/ben2.png","images/ben3.png")

benhit11=loadAnimation("images/ben hit1.png")
benhit21=loadAnimation("images/ben hit 2.png")
car11-loadImage("images/car1.png")
shooter11=loadImage("images/shooter.png")
shooterAn=loadAnimation("images/shooter2.png","images/shooter3.png")
wall11=loadImage("images/wall1.png")
back1=loadImage("images/download.jpg")
bullet1=loadImage("images/images.png")
}

function setup(){
  createCanvas(800,400)
  if(gamestate==1){
big1=createSprite(90,250,50,50)
big1.addAnimation('play',ben11)
big1.addAnimation('play2',benhit11)
big1.addAnimation('play3',benhit21)
big1.addAnimation('playA',ben21)
big1.setCollider("rectangle",30,0,big1.width-180,big1.height-80)
big1.debug=false
  }
sGroup=createGroup()
sGroup2=createGroup()
bulletG=createGroup()
healthdisplay=createSprite(150,50,HealthBar*2,20)
healthdisplay.shapeColor="green"
}
function draw(){
background(back1)
if(gamestate==1){
rand1=Math.round(random(200,300))
rand2=Math.round(random(200,300))

if(keyWentDown("h")){
  big1.changeAnimation('play2',benhit11)
  big1.setCollider("rectangle",170,-70,150,50)
}

if(keyWentDown("g")){
big1.changeAnimation('play3',benhit21)
big1.setCollider("rectangle",150,100,100,50)
}
if(keyWentUp("h")||keyWentUp("g")){
  big1.changeAnimation('play',ben11)
  big1.setCollider("rectangle",30,0,big1.width-180,big1.height-80)
}

if(frameCount%rand1==0){
  shooters=createSprite(750,150,50,50)
  shooters.velocityX=-4.5
  shooters.addImage('shoot',shooter11)
  sGroup.add(shooters)
  bullet=createSprite(shooters.x-20,shooters.y,5,5)
  bullet.addImage("bull",bullet1)
  bullet.velocityX=-4.5
  bullet.scale=0.05
  bulletG.add(bullet)
  }
if(frameCount%rand2==0){
  shooters2=createSprite(750,340,50,50)
  shooters2.velocityX=-4.5
  shooters2.addImage('shoot',shooter11)
  sGroup2.add(shooters2)
  bullet2=createSprite(shooters2.x-20,shooters2.y,5,5)
  bullet2.addImage("bull",bullet1)
  bullet2.velocityX=-4.5
  bullet2.scale=0.05
  bulletG.add(bullet2)
 
}
if(big1.isTouching(sGroup)&&keyWentDown("h")){
  sGroup.destroyEach()
  bulletG.destroyEach()

}else if(big1.isTouching(sGroup)){
sGroup.destroyEach()
bulletG.destroyEach()
HealthBar=HealthBar-10
healthdisplay.width=healthdisplay.width-20
}
if(big1.isTouching(sGroup2)&&keyWentDown("g")){
  sGroup2.destroyEach()
  bulletG.destroyEach()

}else if(big1.isTouching(sGroup2)){
sGroup2.destroyEach()
bulletG.destroyEach()
HealthBar=HealthBar-10
healthdisplay.width=healthdisplay.width-20
}
score+=0.5

if(HealthBar==0){
  healthdisplay.lifetime=1
  gamestate=2
}
}



  drawSprites()
  text("Your score: "+score,600,50)
  fill("white")
  text("Your health: "+ HealthBar,healthdisplay.x-40,healthdisplay.y+5)
}