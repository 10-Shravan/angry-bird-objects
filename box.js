class Box{
    constructor(x,y,w,h){
        var ball_options={
     restitution:1.0,
    density:0.8,
friction:1.0}
       this.width=w;
       this.height=h; 
      this.box=Bodies.rectangle(x,y,w,h,ball_options) ;
      World.add(world,this.box);

    
    }
    display(){
        push();
        rectMode(CENTER);
        fill(255);
        strokeWeight(4);
        stroke("green");
        rotate(this.box.angle);
        translate(this.box.position.x,this.box.position.y);
        rect(0,0,this.width,this.height);
      pop();
    }
    }
    
    