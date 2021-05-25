class Paper{
    constructor(x,y,r){
	var options={
			isStatic:true,
           'resitution':0.3,
           'friction':0,
           'density' :1.2			
			}
            this.x=x;
            this.y=y;
            this.r=r
         this.image=loadImage("paper.png")
            this.body=Bodies.circle(x, y, (this.r-20/2), options);
             World.add(world, this.body);
        
        }
        display()
        {
                
             var groundPos=this.body.position;		
    
               push()
             translate(Pos.x, groundPos.y)
                strokeWeight(4);
                fill('white')
                circlw(0,0,this.r);
                image(this.image,0,0,40, 40)
                pop()
                
        }
    
    }

