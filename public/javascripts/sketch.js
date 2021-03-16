var titleslide;
var blankslide;
var character;
var staticCharacter;
var animation = false;
var x = 0;

const normalWidth = 1478.4;
const normalHeight = 670.65;

const calcWidth = 175 / normalWidth;
const calcHeight = 175 / normalWidth;
const heightDetermination = 310 / normalHeight;

const height = $(document).height() * 0.85;
const width = $(document).width() * 0.924;

document.body.style.background = "linear-gradient(90deg, rgba(10, 192, 255, 1) 0%, rgba(208, 95, 159, 1) 35%, rgba(226, 114, 90, 1) 100%)"

function setup() {
	createCanvas(width, height);
	background(100);
    titleslide = loadImage("/images/titleslide.jpg");
    
    // Content images
    slide1 = loadImage("/images/slides/slide1.jpg");
    slide2 = loadImage("/images/slides/slide2.jpg");
    slide3 = loadImage("/images/slides/slide3.jpg");
    slide4 = loadImage("/images/slides/slide4.jpg");
    slide5 = loadImage("/images/slides/slide5.jpg");
    slide6 = loadImage("/images/slides/slide6.jpg");
    slide7 = loadImage("/images/slides/slide7.jpg");
    slide8 = loadImage("/images/slides/slide8.jpg");
    slide9 = loadImage("/images/slides/slide9.jpg");
    slide10 = loadImage("/images/slides/slide10.jpg");
    slide11 = loadImage("/images/slides/slide11.jpg");
    slide12 = loadImage("/images/slides/slide12.jpg");
    slide13 = loadImage("/images/slides/slide13.jpg");
    slide14 = loadImage("/images/slides/slide14.jpg");
    slide15 = loadImage("/images/slides/slide15.jpg");

	blankslide = loadImage("/images/blankslide.jpg");
	character = loadImage("/images/character.gif");
	staticCharacter = loadImage("/images/actor.png");
}

function draw() {
	if (keyIsPressed) {
		if (keyCode === RIGHT_ARROW) {
			animation = true;
			x = x - 20;
		} 
	}	else {	
			animation = false;
	}
	
    image(titleslide, x, 0, width, height);
    
    // Content loading
    image(slide1, x+width, 0, width, height);
    image(slide2, x+(width*2), 0, width, height);
    image(slide3, x+(width*3), 0, width, height);
    image(slide4, x+(width*4), 0, width, height);
    image(slide5, x+(width*5), 0, width, height);
    image(slide6, x+(width*6), 0, width, height);
    image(slide7, x+(width*7), 0, width, height);
    image(slide8, x+(width*8), 0, width, height);
    image(slide9, x+(width*9), 0, width, height);
    image(slide10, x+(width*10), 0, width, height);
    image(slide11, x+(width*11), 0, width, height);
    image(slide12, x+(width*12), 0, width, height);
    image(slide13, x+(width*13), 0, width, height);
    image(slide14, x+(width*14), 0, width, height);
    image(slide15, x+(width*15), 0, width, height);

    image(blankslide, x+(width*16), 0, width, height);

	if (animation) {
		image(character, width/2-75, height-310, width*calcWidth, width*calcHeight);
	} else {
		image(staticCharacter, width/2-75, height-310, width*calcWidth, width*calcHeight);
    }
}