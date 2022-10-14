//namespace para os módulos da Matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variáveis
var engine, world;
var torre, torreImg;
var fundoImg, solo;
var canhao, canhaoImg,canhaoImg2
var bala
var angle 
var balas = [], barcos = [];
var barco;

//pré-carregamento das imagens
function preload(){
  fundoImg = loadImage("imagens/background.gif");
  torreImg = loadImage("imagens/tower.png");
canhaoImg = loadImage("imagens/cannonBase.png")
canhaoImg2 = loadImage("imagens/cannon.png")

}

//configurações iniciais
function setup() {
  //tela do jogo
  createCanvas(1200,600);
  angleMode(DEGREES)
  angle = 15

  //mecanismo de física e mundo
  engine = Engine.create();
  world = engine.world;

  //solo
  var options = {
    isStatic: true,
  }
  solo = Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,solo);
  
  //torre
  torre = Bodies.rectangle(160,350,160,310,options);
  World.add(world,torre);
//canhao
canhao = new Canhao(160,120,200,200,angle)
//bala do canhao
bala = new BCanhao(canhao.x, canhao.y)

}

function draw() 
{
  //att do mecanismo de fisica
  Engine.update(engine)
  //fundo
  //background("lightgray");
  image(fundoImg,0,0,1200,600);
  
  //mostrando a torre
  push();
  imageMode(CENTER);
  fill("green");
  image(torreImg,torre.position.x, torre.position.y,160,310);
  pop();

  //mostrando o solo
  rect(solo.position.x, solo.position.y,width,1);
  //mostrar canhao
  canhao.display();

  //mover o barco
  Matter.Body.setVelocity(barco.body,{
    x: -0.9,
    y: 0,
  });

  //mostrar o barco
  barco.display();

  //mostrar balas
for(var i = 0;i<balas.length;i++){
mostrarBalas(balas[i],i)
}

}
function mostrarBalas(bala,i){
if (bala){
  //mostrar bala
  bala.display() 
  }
}

function mostrarBarcos(){
  if(barcos.length > 0){ //comprimento/tamanho da matriz
    //criar os demais barcos 

    //movimentar e mostar
  }else{
    //primeiro barco
    barco = new Barco(width-50,height-100,170,170,-80);
    barcos.push();
  }
}

function keyReleased(){
if (keyCode == UP_ARROW){
balas[balas.length-1].atirar()

}

}
function keyPressed(){
if(keyCode == UP_ARROW){
  bala = new BCanhao(canhao.x, canhao.y)
  balas.push(bala)
}

}
