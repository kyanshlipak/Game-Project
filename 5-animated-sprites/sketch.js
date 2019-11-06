//create an empty array called balls
let balls = [];
//create a variable to hold your avatar
let me;
let highscore = localStorage.getItem("maxscore")
let highscorename = localStorage.getItem("highname")
let dead = true
let name;
let framecount = 0;

var ghost;
function preload() {
  ghost = loadAnimation('sprites/1010.png', 'sprites/1016.png');
}

function setup() {
  createCanvas(1200, 600);
  //make one avatar called me
  me = new Avatar(width/2, 300, 3);
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
}

function draw(){
if(me.dead == false){
	background(220);

  me.drawMe();
  me.moveMe();
  framecount+=1
  if (framecount % 25 == 0) {
	  for(var i =0;i<floor(sqrt(framecount)/10);i+=1){
		let speed = -(sqrt(framecount)/5)
		if (speed>10){
			speed = 10
		}
		let  b = new Ball(width, random(0,height), speed,random(5,25));
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
			fill("blue");
			// rect(this.x-20, this.y-15, 30, 75);
		ellipse(this.x,this.y,30,30);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+70);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+70);
        line(this.x, this.y+15, this.x-10, this.y+25);
		line(this.x-10, this.y+25, this.x+10, this.y+35);
		fill("black")
		ellipse(this.x+20,this.y+40,20,40)
	}

	moveMe(){
	if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
	   if (this.y>0){
	   	this.y -= this.speed;
	   }
    }

	if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
		if (this.y<600){
			this.y += this.speed;
		}
	}
	
	if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
		if (this.x>0){
			this.x -= this.speed;
		}
	 }
 
	 if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
		if (this.x<1150){
			this.x += this.speed;
		}
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
      // ellipse(this.x,this.y,2,2)
    	animation(ghost,this.x,this.y)
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		textSize(20)
		fill("black")
		noStroke()
		text("score: " + me.points,10,20)
		text("highscore: " + highscore+ "    name: " + highscorename,200,50)
		text("Recent: " + localStorage.getItem('recentscore')+ "    name: " + localStorage.getItem('recentname'),200,20)
		

	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
      // ellipse(me.x+65,me.y+72,2,2)
      // ellipse(me.x+52,me.y+72,2,2)
      // ellipse(me.x+52,me.y+22,2,2)
      // ellipse(me.x+65,me.y+22,2,2)
      // ellipse(me.x+5,me.y-15,2,2)
      // ellipse(me.x+5,me.y+85,2,2)
      // ellipse(me.x+35,me.y-15,2,2)
      // ellipse(me.x+35,me.y+85,2,2)
    		if (this.x >= me.x+52 && this.x <= me.x+65 && this.y > me.y+22 && this.y < me.y+72){
				  this.speed = -this.speed;
				  me.points += 5
			}else if (this.x >= me.x+5 && this.x <= me.x+35 && this.y > me.y-15 && this.y < me.y+85){
				me.dead = true
				
				
				if (me.points>highscore){
					localStorage.setItem("maxscore",me.points)
					localStorage.setItem("highname",name)
				}
				localStorage.setItem('recentname',name)
				localStorage.setItem('recentscore',me.points)
				background(220)
				textSize(60)
				fill("red")
				text('game over', 400, 200);
				reset()
		  	}	
  	}

}

