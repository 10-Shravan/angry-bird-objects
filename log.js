class Log{
    constructor(x,y,h,angle){
        var ball_options={
     restitution:1.0,
    density:0.8,
  friction:1.0}
       this.width=20;
       this.height=h; 
      this.box=Bodies.rectangle(x,y,20,h,angle,ball_options) ;
      Matter.Body.setAngle(this.box, angle);
      World.add(world,this.box);

    
    }
    display(){
        push();
        rectMode(CENTER);
        fill("brown");
     rotate(this.box.angle);
  translate(this.box.position.x,this.box.position.y);
rect(0,0,this.width,this.height);

      pop();
    }
    }
    
    