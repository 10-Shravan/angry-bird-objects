class Ground{
    constructor(x,y,w,h){
        var ground_options ={
            isStatic: true
        }     
       this.width=w;
       this.height=h; 
      this.box=Bodies.rectangle(x,y,w,h,ground_options) ;
      World.add(world,this.box);
      
    
    }
    display(){
       
        rectMode(CENTER);
        fill("brown");
        
     
        translate(this.box.position.x,this.box.position.y);
        rect(0,0,this.width,this.height);
     
    }
    }
    
    