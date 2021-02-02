class Rubber{
  constructor(x,y,rad)
	{
		var options={
			restitution:0.4,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.rad=rad
		this.body=Bodies.circle(this.x, this.y, (this.rad-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			fill("red");
			ellipse(0,0,this.rad, this.rad);
			pop()
			
	}

}