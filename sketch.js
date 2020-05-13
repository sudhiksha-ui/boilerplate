function setup() {
  createCanvas(800,400);
   a= createSprite(400, 200, 50, 50);
   m =createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255); 
  m.x=mouseX
  m.y=mouseY 
  if(m.x-a.x<m.width/2+a.width/2&&
    a.x-m.x<m.width/2+a.width/2&&
    m.y-a.y<m.height/2+a.height/2&&
    a.y-m.y<m.height/2+a.height/2){
    m.shapeColor="blue"
    a.shapeColor="purple"
  }
  else{
    m.shapeColor="red"
    a.shapeColor="green"
  }
  drawSprites();
}