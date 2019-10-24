
var circles = []

function random2(lower,upper){
	return floor(Math.random(0,1)*((upper+1)-lower)+lower)
}

function setup() {
  createCanvas(600, 600);
  for (var i = 0;i<21;i+=1){
	circles.push(i)
  }
  for (var i = 0; i<circles.length;i+=1){
	circles[i] = new Circle(random(0,600),random(0,600),random(150,255),0,random(10,255),random(10,50),random(10,50),random(1,8),random(1,8))
	}
}

function draw(){
	background("grey")
	for (var i = 0; i<circles.length;i+=1){
		circles[i].drawCircle()
		circles[i].moveCircle()
	}
}	

class Circle{

	constructor(x,y,r,g,b,xsize,ysize,xspeed,yspeed){
		this.x = x
		this.y = y
		this.r = r
		this.g = g
		this.b = b
		this.xsize = xsize
		this.ysize = ysize
		this.xspeed = xspeed
		this.yspeed = yspeed
		this.xdirection = true
		this.ydirection = true
	}

	drawCircle(){
		stroke(0)
		fill(this.r,this.g,this.b)
		ellipse(this.x,this.y,this.xsize,this.ysize)
	}

	moveCircle(){
		if (this.x>(600-this.xsize/2)){
			this.xdirection = false
		}
		if (this.x<this.xsize/2){
			this.xdirection  = true
		}
		if (this.xdirection == true){
			this.x+=this.xspeed
		}
		if (this.xdirection == false){
			this.x-=this.xspeed
		}
		
		if (this.y>(600-this.ysize/2)){
			this.ydirection = false
		}
		if (this.y<this.ysize/2){
			this.ydirection  = true
		}
		if (this.ydirection == true){
			this.y+=this.yspeed
		}
		if (this.ydirection == false){
			this.y-=this.yspeed
		}
	}
}
