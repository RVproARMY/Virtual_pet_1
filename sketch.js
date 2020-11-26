var Dog, HappyDog;
var foodS, foodStoke, readStoke;
var database;

function preload()
{
  Dog.loadImage("dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  
  Dog = createSprite(200,200,10,10)
  Dog = addImage("dogImg.png")  
 
  foodStoke = database.ref('Food');
  foodStoke.on("value",readStoke)

  
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  
    if(keyWentDown(UP_ARROW)){
    writeStoke(foodS)
    dog.addImage("Happydog.png")
    }

    text("Note:Press your up arrow to feed the dog",450,350 )
    textSize(20)
    fill("white")
    
  
}

function readStoke(data){
  foodS = data.val();
}

function writeStoke(x){

  database.ref('/').update({
    Food:x
  })
}



