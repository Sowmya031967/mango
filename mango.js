class mango{
constructor(x,y,r)
{
   var options={
   isStatic:true,
   restitution :0,
   friction:1,
 }
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("sprites/mango.png")
this.body = Bodies.circle(this.x,this.y,this.r,options)
World.add(world,this.body)
}

display(){
    var paperpos = this.body.position ;

    push()
    translate(paperpos.x,paperpos.y);
    
    rectMode(CENTER)
    strokeWeight(0.5);
    fill("yellow")
    image(this.image,0,0,this.r,this.r);
    pop()
}
};