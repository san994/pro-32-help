class Polygon{

    constructor(x,y){
   
       var options = {
   
           isStatic : false,
           density : 0.1,
           restitution:1,
           friction : 0

       }
   
     this.body = Bodies.rectangle(x,y,50,50,options)
     this.img = loadImage("polygon.png");
     
     World.add(world, this.body);
    
    }

    display(){

     var pos = this.body.position;

      imageMode(CENTER);
      image(this.img,pos.x,pos.y,50,50);

    }
}