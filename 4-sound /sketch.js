//create an empty array called balls
let balls = [];
//create a variable to hold your avatar
let me;
let needle;
let highscore = localStorage.getItem("maxscore")
let highscorename = localStorage.getItem("highname")
let dead = true
let name;
let framecount = 0;
let mySound;
let balloon;
function preload(){
	soundFormats("wav")
	mySound = loadSound("pop.wav")
	balloon = loadImage("balloon.png")
}
function setup() {
  createCanvas(1200, 600);
  //make one avatar called me
  me = new Avatar(width/2, 300, 6);
  needle = new Avatar2(width/2,20,6)
  name = prompt("whats ur name? ")
}
function reset(){
	me.dead = false
	balls = []
	me.points = 0
	framecount = 0
	name = prompt("whats ur name? ")
	me.x = width/2
	me.y = 300
	needle.dead = false
	needle.points = 0;
	needle.x = width/2
	needle.y = 20;
}

function draw(){
if(me.dead == false){
	background(220);

  me.drawMe();
  me.moveMe();
  needle.drawMe()
  needle.moveMe()
  framecount+=1
  if (framecount % 25 == 0) {
	  for(var i =0;i<floor(sqrt(framecount)/10);i+=1){
		let speed = -(sqrt(framecount)/10)
		if (speed>10){
			speed = 10
		}
		let  b = new Ball(random(0,width), height, speed,random(25,50));
		me.points+=floor(sqrt(framecount)/10)
      	balls.push(b)
	  }
	  
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	    balls[i].drawBall();
       	   	balls[i].moveBall();
        	balls[i].bounceBall();
	  }
}
}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
		this.speed = speed;
		this.dead = false
		this.points = 0
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
			// fill("blue");
			// rect(this.x-20, this.y-15, 30, 75);
		// ellipse(this.x,this.y,30,30);
        // line(this.x,this.y, this.x, this.y+40);
        // line(this.x, this.y+40, this.x-20, this.y+70);
        // line(this.x, this.y+40, this.x+10, this.y+50);
        // line(this.x+10, this.y+50, this.x+5, this.y+70);
        // line(this.x, this.y+15, this.x-10, this.y+25);
		// line(this.x-10, this.y+25, this.x+10, this.y+35);
		fill("black")
		ellipse(this.x,this.y,40,20)
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
	}
	
	if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
		this.x -= this.speed;
	 }
 
	 if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
		 this.x += this.speed;
	 }

	}

}

class Avatar2 {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
		this.speed = speed;
		this.dead = false
		this.points = 0
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
			fill("blue");
			// rect(this.x-20, this.y-15, 30, 75);
	
        line(this.x,this.y-40, this.x, this.y);

	}

	moveMe(){
    if (keyIsDown(87)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(83)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
	}
	
	if (keyIsDown(65)) { //if you hold the up arrow, move up by speed
		this.x -= this.speed;
	 }
 
	 if (keyIsDown(68)) { // if you hold the down arrow, move down by speed
		 this.x += this.speed;
	 }

	}

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed,size){
	this.x = x;
    this.y = y;
	this.speed = speed;
	this.size = size	
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      	strokeWeight(1);
		fill("red");
		imageMode(CENTER)
		image(balloon,this.x,this.y,this.size,this.size)
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.y = this.y+ this.speed;
		textSize(20)
		fill("black")
		noStroke()
		text("score: " + me.points,10,20)
		text("score2: " + needle.points,800,20)

	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-20 && this.x <= me.x+20 && this.y > me.y-10 && this.y < me.y+10){
				  this.speed = -this.speed;
				  me.points += 10
				  mySound.setVolume(0.1)
				  mySound.play()
			}
			if (needle.x <= this.x+20 && needle.x >= this.x-20 && needle.y >= this.y-5 && needle.y <= this.y+6){
			// if(needle.y <= this.y + 5 && needle.y >=this.y-5){
				needle.points+=20
			}
			 
			//if (this.x >= me.x-20 && this.x <= me.x+10 && this.y > me.y-25 && this.y < me.y+75){
			// 	me.dead = true
				
				
			// 	if (me.points>highscore){
			// 		localStorage.setItem("maxscore",me.points)
			// 		localStorage.setItem("highname",name)
			// 	}
			// 	localStorage.setItem('recentname',name)
			// 	localStorage.setItem('recentscore',me.points)
			// 	background(220)
			// 	textSize(60)
			// 	fill("red")
			// 	text('game over', 400, 200);
			// 	reset()
		  	// }	
  	}

}
