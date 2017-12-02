const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 15;
var dir = [1, -1];
var direction = dir[Math.round(Math.random())];
var dx = 12;
var dy = 12;
var score = 0; //left z - o
var score1 = 0; //right a - b



var z = 10;
var o = 10;
var width = 20;
var height = 100;

var a = canvas.width - 30;
var b = 10;
var width1 = 20;
var height1 = 100;


const gameOverSound = new Audio("http://soundjig.com/pages/soundfx/beeps.php?mp3=beep9.mp3");

const loop = function() {
	
	requestAnimationFrame(loop);
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.strokeStyle = "#6fcb9f";
	ctx.stroke();
	ctx.fillStyle = "#6fcb9f";
	ctx.fill();
	
	

	if(x > canvas.width) {
		
		score = score + 1;
		gameOverSound.play();
		x = canvas.width / 2;
	    y = canvas.height / 2;
		dir = [1, -1];
		direction = dir[Math.round(Math.random())];
		x += dx * direction;
		y += dy * direction;
		
		 
		
	}
	
	else if (x < 0 ) {
		
		score1 = score1 + 1;
		gameOverSound.play();
		x = canvas.width / 2;
		y = canvas.height / 2;
		dir = [1, -1];
		direction = dir[Math.round(Math.random())];
		x += dx * direction;
		y += dy * direction;
		
		
	}
	
	else if(y > canvas.height) {
		dy = -dy;
	}
	
else if(y < 0) {
	dy = -dy;
}
	x += dx * direction;
	y += dy * direction;
	
	ctx.fillStyle = "#5f37ae";
	ctx.fillRect(z,o, width, height);
	
	ctx.fillStyle = "#5f37ae";
	ctx.fillRect(a,b, width1, height1);
	
	
	// collision detection
	
	if(x < a + width1 && x + radius * 2 > a && y < b + height1 && y + radius * 2 > b) {
		dx = -dx;
	}
	else if(x < z + width && x + radius * 2 > z && y < o + height && y + radius * 2 > o) {
		dx = -dx;
	}
	

	
	ctx.font = "30px Indie Flower";
	ctx.fillText("score" + ' ' + score, 200, 50); 
	
	ctx.font = "30px Indie Flower";
	ctx.fillText("score" + ' ' + score1, canvas.width - 300 ,50); 
	
	ctx.beginPath();
	ctx.strokeStyle = "purple";
	ctx.moveTo(canvas.width / 2, 0);
	ctx.lineTo(canvas.width / 2, canvas.height);
	ctx.stroke();
	
	
};

loop();

// x - z 
// y - o 



	const upKey = 38;
	const downKey = 40;
	const wKey = 87;
	const sKey = 83;
	
	document.addEventListener('keydown', function(event){
		
		if(event.keyCode === upKey) {
			o = o - 40;
			
			if(o < 0) {
				o = canvas.height;
			}
			
		}
		
		else if(event.keyCode === downKey){
			
			o = o + 40;
			
			if(o > canvas.height) {
				o = 0;
			}
			
		}
		
	}, false);
	




	document.addEventListener('keydown', function(event){
		
		if(event.keyCode === wKey) {
			b = b - 40;
			
			if(b < 0) {
				b = canvas.height;
				a = canvas.width - 30;
			}
			
		}
		
		else if(event.keyCode === sKey){
			
			b = b + 40;
			
			if(b > canvas.height) {
				b = 0;
				a = canvas.width - 30;
			}
			
		}
		
	}, false);
	
	
	// x - a
	// y - b
	
	


















