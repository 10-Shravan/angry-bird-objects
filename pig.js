class Pig{
    constructor(x,y){
        var ball_options={
     restitution:1.0,
     density:0.8,
friction:1.0}
   
       this.width=50;
       this.height=50; 
      this.box=Bodies.rectangle(x,y,50,50,ball_options) ;
      World.add(world,this.box);

        }
    
    display(){
        push();
        rectMode(CENTER);
        fill("green");
       
        rotate(this.box.angle);
        translate(this.box.position.x,this.box.position.y);
        rect(0,0,this.width,this.height);
      pop();
    }
    }
    
    