class Paper {
    constructor(x, y,radius) {
      var options = {
        isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
      }
      paper=Bodies.circle(x,y,20)      
      this.radius=20

      
    }
    display(){
     
    
      fill("red");
      rect(this.body.position.x,this.body.position.y,20,20);
     
    }
  };
  