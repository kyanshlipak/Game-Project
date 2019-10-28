//create an empty array called balls
let balls = [];
//create a variable to hold your avatar
let me;
let highscore = localStorage.getItem("maxscore")
let highscorename = localStorage.getItem("highname")
let dead = true
let name;
function setup() {
  createCanvas(500, 400);
  //make one avatar called me
  me = new Avatar(width/2, 300, 3);
  name = prompt("whats ur name? ")

}

function draw(){
if(me.dead == false){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
	  for(var i =0;i<floor(sqrt(frameCount)/10);i+=1){
		let  b = new Ball(width, random(0,height), -(sqrt(frameCount)/5));
		me.points+=1
      	balls.push(b);
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
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
		line(this.x-10, this.y+25, this.x+10, this.y+35);
		ellipse(this.x+20,this.y+40,20,40)
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){


  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
		textSize(10)
		text(me.points,10,10)
		text("highscore: " + highscore+ "    name: " + highscorename,30,10)

	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x+28 && this.x <= me.x+33 && this.y > me.y+15 && this.y < me.y+65){
				  this.speed = -this.speed;
				  me.points += 5
			}
			if (this.x >= me.x-20 && this.x <= me.x+10 && this.y > me.y-15 && this.y < me.y+60){
				me.dead = true
				textSize(60)
				text('game over', 100, 200);
				if (me.points>highscore){
					localStorage.setItem("maxscore",me.points)
					localStorage.setItem("highname",name)
				}
		  	}	
  	}

}
