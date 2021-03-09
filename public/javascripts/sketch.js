var titleslide;
var blankslide;
var character;
var staticCharacter;
var animation = false;
var x = 0;

const height = $(document).height() * 0.85;
const width = $(document).width() * 0.924;

document.body.style.background = "linear-gradient(90deg, rgba(10, 192, 255, 1) 0%, rgba(208, 95, 159, 1) 35%, rgba(226, 114, 90, 1) 100%)"

function setup() {
	createCanvas(width, height);
	background(100);
	titleslide = loadImage("/images/titlesldie.jpg");
	blankslide = loadImage("/images/blankslide.jpg");
	character = loadImage("/images/character.gif");
	staticCharacter = loadImage("/images/actor.png");
}

function draw() {
	if (keyIsPressed) {
		if (keyCode === RIGHT_ARROW) {
			animation = true;
			x = x - 7.5;
		} 
	}	else {	
			animation = false;
	}
	
	if (x < -600) {
		x = 0;
	}
	image(titleslide, x, 0, width, height);
	image(blankslide, x+width, 0, width, height);
	if (animation) {
		image(character, width/2-75, height-310, 175, 175);
	} else {
		image(staticCharacter, width/2-75, height-310, 175, 175);
	}
}