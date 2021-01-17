class Block{
    constructor(x, y) {
        var options = {
            
            isStatic : false,
            friction: 0 ,
             density: 1.0

        }
        this.body = Bodies.rectangle(x, y, 30,40, options);
        this.width = 20;
        this.height = 30;
        this.visiblity = 255;
        
        World.add(world, this.body);
        
      }
      display(){
        // pos = this.body.position;
      if(this.body.speed < 3){
        var pos = this.body.position;
        fill("lightBlue");
        rect(pos.x, pos.y, 30,40);
      }else{

      World.remove(world,this.body)
      push();
      this.visiblity = this.visiblity - 5
      tint(255,this.visiblity)
      fill("lightBlue")
      rect(300,400,30,40);
      pop();
      }
      
     }

     score(){
       
     if(this.visiblity < 0 && this.visiblity > -1005){

     score++

     }

     }

    }
