
function setup() {
  createCanvas(600, 600);
}

function draw(){
	background(240,240,240)
	for (var i = 0; i<circles.length;i+=1){
		circles[i].drawCircle()
		circles[i].moveCircle()
	}


}	

class Circle{

	constructor(x,y,r,g,b,xsize,ysize,speed,angle,index){
		this.x = x
		this.y = y
		this.r = r
		this.g = g
		this.b = b
		this.xsize = xsize
		this.ysize = ysize
		this.speed = speed
		this.xRange = []
		this.yRange = []
		this.insane = 1
		this.angle = angle
		this.force = this.xsize*this.speed
		this.index = index
		// this.circles2 = circles
		// this.circles = this.circles2.splice(this.index,1)
		this.circles = circles
	}
	range(){
		for(var x = (this.x-this.xsize/2);x<(this.x+this.xsize/2+1);x+=1){
			this.xRange.push(x)
		}

		for(var y = (this.y-this.ysize/2);y<(this.y+this.ysize/2+1);y+=1){
			this.yRange.push(y)
		}
	}

	changex(){
		this.angle = ((Math.PI)-this.angle)

	}

	changey(){
		this.angle = (-this.angle)
	}

	collide(){
		for (var i = 0;i<circles.length;i+=1){
			if (this.r == circles[i].r){}else{
			let dx = (circles[i].x - this.x)
			let dy = (circles[i].y - this.y)
      		let distance = Math.sqrt(dx * dx + dy * dy);
			let minDist = (circles[i].xsize/2 + this.xsize/2)
			if (distance<minDist){
				this.angle = Math.atan2(dx,dy)
			}
		}
		}
	}

	drawCircle(){
		stroke(0)
		fill(this.r,this.g,this.b)
		ellipse(this.x,this.y,this.xsize,this.ysize)
		this.range()
	}

	moveCircle(){
		// this.check()
		this.collide()
		if (this.x>=(windowX-this.xsize/2)){
			this.changex()

		}
		if (this.x<=this.xsize/2){
			this.changex()
		}
		if (this.y>=(windowY-this.ysize/2)){
			this.changey()
		}
		if (this.y<=this.ysize/2){
			this.changey()
		}
		

		this.x += this.speed * Math.cos(this.angle)
		this.y += this.speed * Math.sin(this.angle)
	}

}
