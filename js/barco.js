class Barco{
    constructor(x,y,width,height,posy){
        /*options = {
            isStatic: false
        }*/
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.image = loadImage("./imagens/boat.png");
        this.posy = posy;
        this.width = width;
        this.height = height;

    }
    //métodos
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,this.posy,this.width,this.height);
        pop();
    }

}//classe