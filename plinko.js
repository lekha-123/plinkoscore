class plinko
{
    constructor(x,y,r)
    {var options={
       restitution:1,
       friction:0,
        
        isStatic:true
    }
        this.r=10
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display()
    {
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
    translate (pos.x,pos.y);
    rotate (angle);
    noStroke();
    fill ("white");
     ellipseMode(RADIUS);
   ellipse(0,0,this.r);
    pop ();
    }
}