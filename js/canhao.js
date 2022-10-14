class Canhao{
    //propriedades do objeto
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

    }
    //funções do objeto
    //mostrar o canhão na tela
    display(){
    if(keyIsDown(LEFT_ARROW)&& this.angle>-50){
    this.angle-=1
    


    }
    console.log(this.angle)
    if(keyIsDown(RIGHT_ARROW)&& this.angle<50){
        this.angle +=1



    }
push()
translate(this.x, this.y)
rotate(this.angle)
imageMode(CENTER)
    image(canhaoImg2,0,0,this.width,this.height)
pop()
image(canhaoImg,70,20,200,200)
    }
}