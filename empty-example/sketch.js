
var balls = []
var xwindow = 1275
var ywindow = 685
class ball{
	constructor(radius,r,g,b,angle,speed){
		this.radius = radius
		this.r = r
		this.g = g
		this.b = b
		this.x = xwindow/2
		this.y = ywindow/2
		this.angle = angle*2*Math.PI/360
		this.speed = speed
	}

	makeBall(){
		fill(this.r,this.g,this.b)
		ellipse(this.x,this.y,this.radius,this.radius)
	}

	moveBall(){
		this.x += Math.cos(this.angle) * this.speed
		this.y += Math.sin(this.angle) * this.speed
		if(this.x>(xwindow-this.radius/2)){
			this.angle =Math.PI-this.angle
		}
		if(this.x<this.radius/2){
			this.angle =Math.PI-this.angle
		}

		if(this.y>(ywindow-this.radius/2)){
			this.angle = 2*Math.PI-this.angle
		}
		if(this.y<this.radius/2){
			this.angle = 2*Math.PI-this.angle
		}
	}

}

function setup(){
	noStroke()
	createCanvas(xwindow,ywindow)
	for (var i = 0;i<200;i+=1){
		var b = new ball(random(10,30),random(200,255),random(200,255),random(200,255),random(0,360),random(2,5))
 		balls.push(b)
	}
}
// function keyPressed(){
//  var b = new ball(random(10,30),random(200,255),random(200,255),random(200,255),random(0,360),random(1,3))
//  balls.push(b)
// }

function draw(){
	for (var i = 0;i<balls.length;i+=1){
		balls[i].moveBall()
		balls[i].makeBall()
	}
}



// var windowX = 1200
// var windowY = 600
// var circles = []
// var b;
// var c;
// var d;
// function random2(lower,upper){
// 	return floor(Math.random(0,1)*((upper+1)-lower)+lower)
// }

// function setup() {
//   createCanvas(windowX, windowY);
//   for (var i = 0;i<20;i+=1){
// 	circles.push(i)
// 	console.log(i)
//   }
//   console.log(circles)
//   for (var i = 0; i<circles.length;i+=1){
// 	var x = random(10,50)
// 	circles[i] = new Circle(random(30,1170),random(30,570),random(200,255),random(200,255),random(200,255),x,x,random(2,8),random(0,Math.PI*2),i)
// 	}
	
// }

// function draw(){
// 	background(240,240,240)
// 	for (var i = 0; i<circles.length;i+=1){
// 		circles[i].drawCircle()
// 		circles[i].moveCircle()
// 	}


// }	

// class Circle{

// 	constructor(x,y,r,g,b,xsize,ysize,speed,angle,index){
// 		this.x = x
// 		this.y = y
// 		this.r = r
// 		this.g = g
// 		this.b = b
// 		this.xsize = xsize
// 		this.ysize = ysize
// 		this.speed = speed
// 		this.xRange = []
// 		this.yRange = []
// 		this.insane = 1
// 		this.angle = angle
// 		this.force = this.xsize*this.speed
// 		this.index = index
// 		// this.circles2 = circles
// 		// this.circles = this.circles2.splice(this.index,1)
// 		this.circles = circles
// 	}
// 	range(){
// 		for(var x = (this.x-this.xsize/2);x<(this.x+this.xsize/2+1);x+=1){
// 			this.xRange.push(x)
// 		}

// 		for(var y = (this.y-this.ysize/2);y<(this.y+this.ysize/2+1);y+=1){
// 			this.yRange.push(y)
// 		}
// 	}

// 	changex(){
// 		this.angle = ((Math.PI)-this.angle)

// 	}

// 	changey(){
// 		this.angle = (-this.angle)
// 	}

// 	collide(){
// 		for (var i = 0;i<circles.length;i+=1){
// 			if (this.r == circles[i].r){}else{
// 			let dx = (circles[i].x - this.x)
// 			let dy = (circles[i].y - this.y)
//       		let distance = Math.sqrt(dx * dx + dy * dy);
// 			let minDist = (circles[i].xsize/2 + this.xsize/2)
// 			if (distance<minDist){
// 				this.angle = Math.atan2(dx,dy)
// 			}
// 		}
// 		}
// 	}

// 	drawCircle(){
// 		stroke(0)
// 		fill(this.r,this.g,this.b)
// 		ellipse(this.x,this.y,this.xsize,this.ysize)
// 		this.range()
// 	}

// 	moveCircle(){
// 		// this.check()
// 		this.collide()
// 		if (this.x>=(windowX-this.xsize/2)){
// 			this.changex()

// 		}
// 		if (this.x<=this.xsize/2){
// 			this.changex()
// 		}
// 		if (this.y>=(windowY-this.ysize/2)){
// 			this.changey()
// 		}
// 		if (this.y<=this.ysize/2){
// 			this.changey()
// 		}
		

// 		this.x += this.speed * Math.cos(this.angle)
// 		this.y += this.speed * Math.sin(this.angle)
// 	}

// }
