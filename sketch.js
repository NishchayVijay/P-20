var canvas , bg
var mouse1,mouse2,mouse3,mouse4 ,cat1 ,cat2 ,cat3 ,cat4

function preload() {
    //load the images here
    bg = loadImage ("images/garden.png")
    cat1 = loadAnimation("images/cat1.png")
    cat2 = loadAnimation("images/cat2.png")
    cat3 = loadAnimation("images/cat3.png")
    cat4 = loadAnimation("images/cat4.png")

    mouse1 = loadAnimation("images/mouse1.png")
    mouse2 = loadAnimation("images/mouse2.png")
    mouse3 = loadAnimation("images/mouse3.png")
    mouse4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(900,600)
   cat.addAnimation("catsleeping",cat1)
   cat.scale=0.25
   mouse = createSprite(200,600)
   mouse.addAnimation("mousestanding",mouse1)
   mouse.scale=0.25;
   
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x < (cat.width-mouse.width)/2){
      cat.velocityX = 0;
      cat.addAnimation("lastimage",cat4)
      cat.x = 300
      cat.changeAnimation("lastImage")
      mouse.addAnimation("lastimage",mouse4)
      mouse.scale=0.15
      mouse.changeAnimation("lastimage")
      makeCatwalk();
    }
    drawSprites();
}


function makeCatwalk(){

  //For moving and changing animation write code here
mouse.addAnimation("mouseteasing",mouse2)
mouse.changeAnimation("mouseteasing")
mouse.frameDelay=25

cat.addAnimation("catrunning",cat2)
cat.changeAnimation("catrunning")
cat.velocityX=-5


}











